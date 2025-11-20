"use client";

import { format, formatDistanceToNow } from "date-fns";
import { Database } from "@/types/db.supabase";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

type CallData = Database["public"]["Tables"]["vapi_call_logs"]["Row"];


function calculateDuration(startedAt: string, endedAt: string): string {
  const start = new Date(startedAt);
  const end = new Date(endedAt);
  const diffMs = end.getTime() - start.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffSecs = Math.floor((diffMs % 60000) / 1000);
  return `${diffMins}m ${diffSecs}s`;
}

// Helper function to truncate text
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

// Helper function to format date
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return format(date, "MMM dd, yyyy HH:mm");
  } catch {
    return dateString;
  }
}

export default function Home() {
    const [calls, setCalls] = useState<CallData[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();
    useEffect(() => {
        const fetchCalls = async () => {
            const { data, error } = await supabase.from('vapi_call_logs').select('*').order('created_at', { ascending: false });
            if (error) {
                console.error(error);
                setLoading(false);
            }
            console.log(data);
            setCalls(data || []);
            setLoading(false);
        };
        fetchCalls();
    }, []);
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-foreground"></div>
        </div>;
    }
  return (
    <div className="min-h-screen bg-background p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            Call Records
          </h1>
          <p className="text-sm text-foreground/60">
            View and manage your call history
          </p>
        </div>

        <div className="bg-background border border-foreground/10 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-foreground/5 border-b border-foreground/10">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">
                    Summary
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/10">
                {calls.map((call) => (
                  <tr
                    key={call.id}
                    className="hover:bg-foreground/5 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-foreground">
                        {formatDate(call.started_at || "")}
                      </div>
                      <div className="text-xs text-foreground/50 mt-1">
                        {formatDistanceToNow(new Date(call.started_at || ""), {
                          addSuffix: true,
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground/80">
                      {calculateDuration(call.started_at || "", call.ended_at || "")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          call.status === "ended"
                            ? "bg-green-500/10 text-green-600 dark:text-green-400"
                            : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                        }`}
                      >
                        {call.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-foreground/80 max-w-md">
                        {truncateText(call.summary || "", 100)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-foreground/50">
          Showing {calls.length} call records
        </div>
      </div>
    </div>
  );
}
