"use client";

import { format, formatDistanceToNow } from "date-fns";
import { Database } from "@/types/db.supabase";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Sheet, SheetContent, SheetTitle, SheetHeader, SheetDescription } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AudioPlayer } from "@/components/ui/audio-player";
import { MessageBubble } from "@/components/ui/message-bubble";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MetadataItem } from "@/components/ui/metadata-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

// Parse transcript into messages
function parseTranscript(transcript: string | null): Array<{ role: "AI" | "User"; message: string }> {
  if (!transcript) return [];
  
  const messages: Array<{ role: "AI" | "User"; message: string }> = [];
  // Normalize escaped newlines and split on actual newlines
  const normalized = transcript.replace(/\\n/g, "\n");
  const lines = normalized.split(/\r?\n/);
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine) continue; // Skip empty lines
    
    if (trimmedLine.startsWith("AI: ")) {
      messages.push({ role: "AI", message: trimmedLine.substring(4).trim() });
    } else if (trimmedLine.startsWith("User: ")) {
      messages.push({ role: "User", message: trimmedLine.substring(6).trim() });
    } else if (messages.length > 0) {
      // Continue previous message if line doesn't start with role
      messages[messages.length - 1].message += " " + trimmedLine;
    }
  }
  
  return messages;
}

export default function Home() {
    const [calls, setCalls] = useState<CallData[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCall, setSelectedCall] = useState<CallData | null>(null);
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
        <Sheet open={selectedCall !== null} onOpenChange={() => setSelectedCall(null)}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
          {selectedCall && (
            <div className="flex flex-col h-full">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-2xl font-semibold">
                  Call Details
                </SheetTitle>
                <SheetDescription className="text-sm text-foreground/60">
                  {selectedCall.user_name && (
                    <span className="block mt-1">Call with {selectedCall.user_name}</span>
                  )}
                  <span className="block mt-1">
                    {formatDate(selectedCall.started_at || "")} • {calculateDuration(selectedCall.started_at || "", selectedCall.ended_at || "")}
                  </span>
                </SheetDescription>
              </SheetHeader>

              {/* Audio Player */}
              {selectedCall.recording_url && (
                <AudioPlayer
                  src={selectedCall.recording_url}
                  title="Call Recording"
                  subtitle={`Duration: ${calculateDuration(selectedCall.started_at || "", selectedCall.ended_at || "")}`}
                  className="mb-6"
                />
              )}

            <Tabs defaultValue="summary">
            <TabsList className="mb-6">
                <TabsTrigger value="summary" className="rounded-none rounded-t data-[state=active]:border-b-2 data-[state=active]:border-white">Summary</TabsTrigger>
                <TabsTrigger value="transcript" className="rounded-none rounded-t data-[state=active]:border-b-2 data-[state=active]:border-white">Transcript</TabsTrigger>
                <TabsTrigger value="extracted_variables" className="rounded-none rounded-t data-[state=active]:border-b-2 data-[state=active]:border-white">Extracted Variables</TabsTrigger>
            </TabsList>
            <TabsContent value="summary">
                {/* Summary */}
              {selectedCall.summary && (
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {selectedCall.summary}
                    </p>
                  </CardContent>
                </Card>
              )}
              {/* Call Metadata */}
              <div className="mt-4 pt-4">
                <Separator className="mb-4" />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <MetadataItem
                    label="Phone Number"
                    value={
                      <span className="font-mono">
                        {selectedCall.user_number || "N/A"}
                      </span>
                    }
                  />
                  <MetadataItem
                    label="Status"
                    value={
                      <Badge
                        variant={
                          selectedCall.status === "ended" ? "success" : "warning"
                        }
                      >
                        {selectedCall.status}
                      </Badge>
                    }
                  />
                  <MetadataItem
                    label="Started"
                    value={formatDate(selectedCall.started_at || "")}
                  />
                  <MetadataItem
                    label="Ended"
                    value={
                      selectedCall.ended_at
                        ? formatDate(selectedCall.ended_at)
                        : "N/A"
                    }
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="transcript">
                {/* Transcript - Chat Style */}
              {selectedCall.transcript && (
                <div className="flex-1 flex flex-col mb-6">
                  <CardTitle className="mb-4 flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Transcript
                  </CardTitle>
                  <ScrollArea className="flex-1 max-h-[500px]">
                    <div className="space-y-4">
                      {parseTranscript(selectedCall.transcript).map((msg, idx) => (
                        <MessageBubble
                          key={idx}
                          role={msg.role}
                          message={msg.message}
                          senderName={selectedCall.user_name || undefined}
                        />
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}
            </TabsContent>

            <TabsContent value="extracted_variables">
                {/* Extracted Variables */}
              {selectedCall.extracted_vars && (() => {
                // Parse extracted_vars - handle both string and object cases
                let parsedVars: Record<string, any> = {};
                try {
                  if (typeof selectedCall.extracted_vars === 'string') {
                    parsedVars = JSON.parse(selectedCall.extracted_vars);
                  } else if (typeof selectedCall.extracted_vars === 'object') {
                    parsedVars = selectedCall.extracted_vars as Record<string, any>;
                  }
                } catch (e) {
                  console.error('Error parsing extracted_vars:', e);
                }

                // Helper to format key names (snake_case to Title Case)
                const formatKey = (key: string): string => {
                  return key
                    .split('_')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                };

                // Helper to format values
                const formatValue = (value: any): React.ReactNode => {
                  if (value === null || value === undefined) {
                    return <span className="text-foreground/50">N/A</span>;
                  }
                  if (typeof value === 'number') {
                    return <span className="font-mono">{value.toLocaleString()}</span>;
                  }
                  if (typeof value === 'boolean') {
                    return (
                      <Badge variant={value ? 'success' : 'default'} className="text-xs">
                        {value ? 'Yes' : 'No'}
                      </Badge>
                    );
                  }
                  if (Array.isArray(value)) {
                    if (value.length === 0) return <span className="text-foreground/50">Empty array</span>;
                    return (
                      <span className="break-words">
                        {value.map((item, idx) => (
                          <span key={idx}>
                            {String(item)}
                            {idx < value.length - 1 && ', '}
                          </span>
                        ))}
                      </span>
                    );
                  }
                  const stringValue = String(value);
                  return <span className="break-words">{stringValue}</span>;
                };

                const entries = Object.entries(parsedVars).filter(([_, value]) => {
                  // Filter out object types (but keep arrays, strings, numbers, booleans, null)
                  return typeof value !== 'object' || value === null || Array.isArray(value);
                });

                return entries.length > 0 ? (
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 mb-4">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                        Extracted Variables
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {entries.map(([key, value]) => (
                          <MetadataItem
                            key={key}
                            label={formatKey(key)}
                            value={formatValue(value)}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                        Extracted Variables
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/60 text-center py-4">
                        No extracted variables available
                      </p>
                    </CardContent>
                  </Card>
                );
              })()}
            </TabsContent>
            </Tabs>


            </div>
          )}
        </SheetContent>
      </Sheet>
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
                    onClick={() => setSelectedCall(call)}
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
                      <Badge
                        variant={call.status === "ended" ? "success" : "warning"}
                      >
                        {call.status}
                      </Badge>
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
