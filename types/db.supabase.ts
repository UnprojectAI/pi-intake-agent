export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  pgmq_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      archive: {
        Args: { message_id: number; queue_name: string }
        Returns: boolean
      }
      delete: {
        Args: { message_id: number; queue_name: string }
        Returns: boolean
      }
      pop: {
        Args: { queue_name: string }
        Returns: unknown[]
        SetofOptions: {
          from: "*"
          to: "message_record"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      read: {
        Args: { n: number; queue_name: string; sleep_seconds: number }
        Returns: unknown[]
        SetofOptions: {
          from: "*"
          to: "message_record"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      send: {
        Args: { message: Json; queue_name: string; sleep_seconds?: number }
        Returns: number[]
      }
      send_batch: {
        Args: { messages: Json[]; queue_name: string; sleep_seconds?: number }
        Returns: number[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      activity_logs: {
        Row: {
          application_id: string | null
          candidate_id: string | null
          created_at: string
          created_by: string | null
          id: string
          metadata: Json | null
          next_action: string | null
          org_id: string | null
          parent_activity: string | null
          ref_id: string | null
          status: string | null
          summary: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          application_id?: string | null
          candidate_id?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json | null
          next_action?: string | null
          org_id?: string | null
          parent_activity?: string | null
          ref_id?: string | null
          status?: string | null
          summary?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          application_id?: string | null
          candidate_id?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json | null
          next_action?: string | null
          org_id?: string | null
          parent_activity?: string | null
          ref_id?: string | null
          status?: string | null
          summary?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_logs_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_logs_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_logs_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_logs_parent_activity_fkey"
            columns: ["parent_activity"]
            isOneToOne: false
            referencedRelation: "activity_logs"
            referencedColumns: ["id"]
          },
        ]
      }
      aicall_executions: {
        Row: {
          applicant_id: string | null
          applicant_stage_id: string | null
          created_at: string
          evaluate: boolean | null
          execution_id: string | null
          id: string
          response_data: Json | null
          stage_code: number | null
          tracking_id: string | null
        }
        Insert: {
          applicant_id?: string | null
          applicant_stage_id?: string | null
          created_at?: string
          evaluate?: boolean | null
          execution_id?: string | null
          id?: string
          response_data?: Json | null
          stage_code?: number | null
          tracking_id?: string | null
        }
        Update: {
          applicant_id?: string | null
          applicant_stage_id?: string | null
          created_at?: string
          evaluate?: boolean | null
          execution_id?: string | null
          id?: string
          response_data?: Json | null
          stage_code?: number | null
          tracking_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_call_executions_tracking_id_fkey"
            columns: ["tracking_id"]
            isOneToOne: false
            referencedRelation: "comm_notif"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aicall_executions_applicant_id_fkey"
            columns: ["applicant_id"]
            isOneToOne: false
            referencedRelation: "candidate_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aicall_executions_applicant_stage_id_fkey"
            columns: ["applicant_stage_id"]
            isOneToOne: false
            referencedRelation: "applicant_stages"
            referencedColumns: ["id"]
          },
        ]
      }
      api_load_balancer: {
        Row: {
          created_at: string
          id: string
          key: string | null
          priority: number | null
          rpm_limit: number | null
          rpm_usage: number | null
          service_type: string | null
          tpm_limit: number | null
          tpm_usage: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          key?: string | null
          priority?: number | null
          rpm_limit?: number | null
          rpm_usage?: number | null
          service_type?: string | null
          tpm_limit?: number | null
          tpm_usage?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          key?: string | null
          priority?: number | null
          rpm_limit?: number | null
          rpm_usage?: number | null
          service_type?: string | null
          tpm_limit?: number | null
          tpm_usage?: number | null
        }
        Relationships: []
      }
      applicant_stages: {
        Row: {
          added_at: string | null
          applicant_id: string
          created_at: string
          created_by: string | null
          evaluation: Json | null
          evaluation_type: string | null
          id: string
          job_stage_id: string | null
          left_at: string | null
          metadata: Json | null
          modified_at: string | null
          modified_by: string | null
          response_data: Json | null
          stage: number
        }
        Insert: {
          added_at?: string | null
          applicant_id: string
          created_at?: string
          created_by?: string | null
          evaluation?: Json | null
          evaluation_type?: string | null
          id?: string
          job_stage_id?: string | null
          left_at?: string | null
          metadata?: Json | null
          modified_at?: string | null
          modified_by?: string | null
          response_data?: Json | null
          stage: number
        }
        Update: {
          added_at?: string | null
          applicant_id?: string
          created_at?: string
          created_by?: string | null
          evaluation?: Json | null
          evaluation_type?: string | null
          id?: string
          job_stage_id?: string | null
          left_at?: string | null
          metadata?: Json | null
          modified_at?: string | null
          modified_by?: string | null
          response_data?: Json | null
          stage?: number
        }
        Relationships: [
          {
            foreignKeyName: "applicant_stages_applicant_id_fkey1"
            columns: ["applicant_id"]
            isOneToOne: false
            referencedRelation: "candidate_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      applicant_stages_tmp: {
        Row: {
          added_at: string | null
          applicant_id: string
          created_at: string
          created_by: string | null
          evaluation: Json[] | null
          evaluation_type: string | null
          id: string
          job_stage_id: string | null
          left_at: string | null
          metadata: Json | null
          response_data: Json | null
          stage: number
        }
        Insert: {
          added_at?: string | null
          applicant_id: string
          created_at?: string
          created_by?: string | null
          evaluation?: Json[] | null
          evaluation_type?: string | null
          id?: string
          job_stage_id?: string | null
          left_at?: string | null
          metadata?: Json | null
          response_data?: Json | null
          stage: number
        }
        Update: {
          added_at?: string | null
          applicant_id?: string
          created_at?: string
          created_by?: string | null
          evaluation?: Json[] | null
          evaluation_type?: string | null
          id?: string
          job_stage_id?: string | null
          left_at?: string | null
          metadata?: Json | null
          response_data?: Json | null
          stage?: number
        }
        Relationships: [
          {
            foreignKeyName: "applicant_stages_applicant_id_fkey"
            columns: ["applicant_id"]
            isOneToOne: false
            referencedRelation: "candidate_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          ai_interview_score: Json | null
          applied_at: string | null
          available_to_start_from: string | null
          college_tags: string[] | null
          comments: Json | null
          companies_tags: string[] | null
          created_at: string | null
          current_company_name: string | null
          current_location: string | null
          current_salary: number | null
          custom_questions_answers: Json[] | null
          email: string
          email_status: string | null
          evaluation: Json[]
          expected_salary: number | null
          full_name: string
          github: string | null
          id: string
          industry_tags: string[] | null
          job_id: string
          linkedin: string | null
          onsite_availability: boolean | null
          phone: string | null
          portfolio: string | null
          qualification_tags: string[] | null
          rating: number | null
          resume_data: Json | null
          resume_embedding: string | null
          resume_url: string | null
          role_tags: string[] | null
          seen: boolean
          skills_tags: string[] | null
          source_id: string | null
          status: string | null
          summary: string | null
          years_of_experience: number | null
        }
        Insert: {
          ai_interview_score?: Json | null
          applied_at?: string | null
          available_to_start_from?: string | null
          college_tags?: string[] | null
          comments?: Json | null
          companies_tags?: string[] | null
          created_at?: string | null
          current_company_name?: string | null
          current_location?: string | null
          current_salary?: number | null
          custom_questions_answers?: Json[] | null
          email: string
          email_status?: string | null
          evaluation?: Json[]
          expected_salary?: number | null
          full_name: string
          github?: string | null
          id?: string
          industry_tags?: string[] | null
          job_id: string
          linkedin?: string | null
          onsite_availability?: boolean | null
          phone?: string | null
          portfolio?: string | null
          qualification_tags?: string[] | null
          rating?: number | null
          resume_data?: Json | null
          resume_embedding?: string | null
          resume_url?: string | null
          role_tags?: string[] | null
          seen?: boolean
          skills_tags?: string[] | null
          source_id?: string | null
          status?: string | null
          summary?: string | null
          years_of_experience?: number | null
        }
        Update: {
          ai_interview_score?: Json | null
          applied_at?: string | null
          available_to_start_from?: string | null
          college_tags?: string[] | null
          comments?: Json | null
          companies_tags?: string[] | null
          created_at?: string | null
          current_company_name?: string | null
          current_location?: string | null
          current_salary?: number | null
          custom_questions_answers?: Json[] | null
          email?: string
          email_status?: string | null
          evaluation?: Json[]
          expected_salary?: number | null
          full_name?: string
          github?: string | null
          id?: string
          industry_tags?: string[] | null
          job_id?: string
          linkedin?: string | null
          onsite_availability?: boolean | null
          phone?: string | null
          portfolio?: string | null
          qualification_tags?: string[] | null
          rating?: number | null
          resume_data?: Json | null
          resume_embedding?: string | null
          resume_url?: string | null
          role_tags?: string[] | null
          seen?: boolean
          skills_tags?: string[] | null
          source_id?: string | null
          status?: string | null
          summary?: string | null
          years_of_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      assessments_aicall: {
        Row: {
          applicant_id: string | null
          created_at: string
          id: string
          org_id: string | null
          response_data: Json | null
          scheduled_at: string | null
          stage_code: number | null
          status_code: number | null
          updated_at: string | null
        }
        Insert: {
          applicant_id?: string | null
          created_at?: string
          id?: string
          org_id?: string | null
          response_data?: Json | null
          scheduled_at?: string | null
          stage_code?: number | null
          status_code?: number | null
          updated_at?: string | null
        }
        Update: {
          applicant_id?: string | null
          created_at?: string
          id?: string
          org_id?: string | null
          response_data?: Json | null
          scheduled_at?: string | null
          stage_code?: number | null
          status_code?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assessments_aicall_applicant_id_fkey"
            columns: ["applicant_id"]
            isOneToOne: false
            referencedRelation: "candidate_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assessments_aicall_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      call_executions: {
        Row: {
          applicant_id: string | null
          applicant_stage_id: string | null
          created_at: string
          created_by: string | null
          evaluate: boolean
          execution_id: string | null
          id: string
          response_data: Json | null
          stage_code: number | null
          status_code: number | null
          tracking_id: string | null
          updated_at: string | null
        }
        Insert: {
          applicant_id?: string | null
          applicant_stage_id?: string | null
          created_at?: string
          created_by?: string | null
          evaluate?: boolean
          execution_id?: string | null
          id?: string
          response_data?: Json | null
          stage_code?: number | null
          status_code?: number | null
          tracking_id?: string | null
          updated_at?: string | null
        }
        Update: {
          applicant_id?: string | null
          applicant_stage_id?: string | null
          created_at?: string
          created_by?: string | null
          evaluate?: boolean
          execution_id?: string | null
          id?: string
          response_data?: Json | null
          stage_code?: number | null
          status_code?: number | null
          tracking_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "call_evaluation_applicant_stage_id_fkey"
            columns: ["applicant_stage_id"]
            isOneToOne: false
            referencedRelation: "applicant_stages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "call_executions_applicant_id_fkey"
            columns: ["applicant_id"]
            isOneToOne: false
            referencedRelation: "candidate_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      candidate_filters: {
        Row: {
          candidate_id: string
          companies: string[] | null
          created_at: string
          current_company: string | null
          current_job_title: string | null
          current_region: string | null
          exp_in_current_company: number | null
          exp_in_current_industry: number | null
          exp_in_current_role: number | null
          industries: string[] | null
          job_titles: string[] | null
          last_switch: string | null
          latest_school: string | null
          missed_industries: string[] | null
          missed_job_titles: string | null
          missed_regions: string[] | null
          missed_schools: string[] | null
          missed_skills: string[] | null
          regions: string[] | null
          schools: string[] | null
          skills: string[] | null
          tenure: Json | null
          total_exp_months: number | null
        }
        Insert: {
          candidate_id: string
          companies?: string[] | null
          created_at?: string
          current_company?: string | null
          current_job_title?: string | null
          current_region?: string | null
          exp_in_current_company?: number | null
          exp_in_current_industry?: number | null
          exp_in_current_role?: number | null
          industries?: string[] | null
          job_titles?: string[] | null
          last_switch?: string | null
          latest_school?: string | null
          missed_industries?: string[] | null
          missed_job_titles?: string | null
          missed_regions?: string[] | null
          missed_schools?: string[] | null
          missed_skills?: string[] | null
          regions?: string[] | null
          schools?: string[] | null
          skills?: string[] | null
          tenure?: Json | null
          total_exp_months?: number | null
        }
        Update: {
          candidate_id?: string
          companies?: string[] | null
          created_at?: string
          current_company?: string | null
          current_job_title?: string | null
          current_region?: string | null
          exp_in_current_company?: number | null
          exp_in_current_industry?: number | null
          exp_in_current_role?: number | null
          industries?: string[] | null
          job_titles?: string[] | null
          last_switch?: string | null
          latest_school?: string | null
          missed_industries?: string[] | null
          missed_job_titles?: string | null
          missed_regions?: string[] | null
          missed_schools?: string[] | null
          missed_skills?: string[] | null
          regions?: string[] | null
          schools?: string[] | null
          skills?: string[] | null
          tenure?: Json | null
          total_exp_months?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "candidate_filters_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: true
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
        ]
      }
      candidate_jobs: {
        Row: {
          added_by: string | null
          ai_interview_proctoring_score: number | null
          ai_interview_recording_url: string | null
          ai_interview_report: Json | null
          ai_interview_score: Json[] | null
          ai_interview_status: string | null
          "ai-interview-report-id": string | null
          application_answers: Json[] | null
          available_to_start_from: string | null
          candidate_id: string
          communication: Json[] | null
          created_at: string
          expected_salary: number | null
          expected_salary_currency: string | null
          id: string
          job_fork_id: string | null
          job_id: string
          joined_at: string | null
          matching_experience: string | null
          missing_experience: string | null
          offered_at: string | null
          onsite_availability: boolean | null
          personalised_two_liner: string | null
          processing_status_code: number | null
          profile_evaluation_score: Json[] | null
          rating: number | null
          recruiter: string | null
          scheduled_interview_time: string | null
          seen: boolean | null
          source_id: string | null
          source_tags: string[] | null
          stage: number | null
          stage_code: number | null
          status: string
        }
        Insert: {
          added_by?: string | null
          ai_interview_proctoring_score?: number | null
          ai_interview_recording_url?: string | null
          ai_interview_report?: Json | null
          ai_interview_score?: Json[] | null
          ai_interview_status?: string | null
          "ai-interview-report-id"?: string | null
          application_answers?: Json[] | null
          available_to_start_from?: string | null
          candidate_id: string
          communication?: Json[] | null
          created_at?: string
          expected_salary?: number | null
          expected_salary_currency?: string | null
          id?: string
          job_fork_id?: string | null
          job_id: string
          joined_at?: string | null
          matching_experience?: string | null
          missing_experience?: string | null
          offered_at?: string | null
          onsite_availability?: boolean | null
          personalised_two_liner?: string | null
          processing_status_code?: number | null
          profile_evaluation_score?: Json[] | null
          rating?: number | null
          recruiter?: string | null
          scheduled_interview_time?: string | null
          seen?: boolean | null
          source_id?: string | null
          source_tags?: string[] | null
          stage?: number | null
          stage_code?: number | null
          status?: string
        }
        Update: {
          added_by?: string | null
          ai_interview_proctoring_score?: number | null
          ai_interview_recording_url?: string | null
          ai_interview_report?: Json | null
          ai_interview_score?: Json[] | null
          ai_interview_status?: string | null
          "ai-interview-report-id"?: string | null
          application_answers?: Json[] | null
          available_to_start_from?: string | null
          candidate_id?: string
          communication?: Json[] | null
          created_at?: string
          expected_salary?: number | null
          expected_salary_currency?: string | null
          id?: string
          job_fork_id?: string | null
          job_id?: string
          joined_at?: string | null
          matching_experience?: string | null
          missing_experience?: string | null
          offered_at?: string | null
          onsite_availability?: boolean | null
          personalised_two_liner?: string | null
          processing_status_code?: number | null
          profile_evaluation_score?: Json[] | null
          rating?: number | null
          recruiter?: string | null
          scheduled_interview_time?: string | null
          seen?: boolean | null
          source_id?: string | null
          source_tags?: string[] | null
          stage?: number | null
          stage_code?: number | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "candidate_jobs_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_jobs_job_fork_id_fkey"
            columns: ["job_fork_id"]
            isOneToOne: false
            referencedRelation: "job_forks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_jobs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      candidate_notes: {
        Row: {
          application_id: string | null
          candidate_id: string | null
          created_at: string
          created_by: string | null
          id: string
          metadata: Json | null
          org_id: string | null
          parent_id: string | null
          type: string | null
        }
        Insert: {
          application_id?: string | null
          candidate_id?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json | null
          org_id?: string | null
          parent_id?: string | null
          type?: string | null
        }
        Update: {
          application_id?: string | null
          candidate_id?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json | null
          org_id?: string | null
          parent_id?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "candidate_notes_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_notes_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_notes_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      candidate_orgs: {
        Row: {
          added_by: string | null
          candidate_id: string
          created_at: string
          id: string
          modified_at: string | null
          modified_by: string | null
          notes_id: string | null
          org_id: string
          source_tags: string[] | null
        }
        Insert: {
          added_by?: string | null
          candidate_id: string
          created_at?: string
          id?: string
          modified_at?: string | null
          modified_by?: string | null
          notes_id?: string | null
          org_id: string
          source_tags?: string[] | null
        }
        Update: {
          added_by?: string | null
          candidate_id?: string
          created_at?: string
          id?: string
          modified_at?: string | null
          modified_by?: string | null
          notes_id?: string | null
          org_id?: string
          source_tags?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "candidate_orgs_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_orgs_notes_id_fkey"
            columns: ["notes_id"]
            isOneToOne: false
            referencedRelation: "candidate_notes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_orgs_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      candidate_tracking: {
        Row: {
          application_id: string
          comments: string | null
          date: string
          id: string
          job_id: string | null
          source_id: string | null
          stage: number | null
          status: string
        }
        Insert: {
          application_id?: string
          comments?: string | null
          date?: string
          id?: string
          job_id?: string | null
          source_id?: string | null
          stage?: number | null
          status: string
        }
        Update: {
          application_id?: string
          comments?: string | null
          date?: string
          id?: string
          job_id?: string | null
          source_id?: string | null
          stage?: number | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "candidate_tracking_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_tracking_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      candidates: {
        Row: {
          achievements: Json[] | null
          achivements: string | null
          auid_id: string | null
          auth_id: string | null
          college_tags: string[] | null
          companies_tags: string[] | null
          country_code: string | null
          created_at: string
          created_by: string | null
          credits: number | null
          current_company_name: string | null
          current_location: string | null
          current_salary: number | null
          current_salary_currency: string | null
          current_title: string[] | null
          data_source: string | null
          dob: string | null
          education: Json[] | null
          education_title_tag: string | null
          email: string
          enrichment_level: number | null
          experience: Json[] | null
          experience_title_tag: string | null
          extracted_data: Json | null
          facebook: string | null
          first_name: string | null
          full_name: string | null
          gender: string | null
          github: string | null
          highest_stage_code: number | null
          id: string
          industries: string[] | null
          industry_tags: string[] | null
          instagram: string | null
          job_function: string[] | null
          last_job_changed_at: string | null
          last_name: string | null
          latest_movement_at: string | null
          linkedin: string | null
          linkedin_metadata: Json[] | null
          linkedin_updated_at: string | null
          links: string[] | null
          locations: string[] | null
          metadata: Json | null
          modified_at: string | null
          modified_by: string | null
          old_filter_values: Json | null
          other_emails: string[] | null
          other_phones: string[] | null
          past_companies: string[] | null
          past_titles: string[] | null
          pfp_public: string | null
          phone: string | null
          portfolio: string | null
          qualification_tags: string[] | null
          resume_data: string | null
          resume_struct: Json | null
          resume_url: string | null
          role_tags: string[] | null
          schools: string[] | null
          search_hit_rate: number | null
          secondary_email: string | null
          secondary_phone: string | null
          seniority_level: string[] | null
          skills_tags: string[] | null
          source_id: string | null
          source_tags: string[] | null
          status_code: number | null
          summary: string | null
          tags: string[] | null
          tenure: Json | null
          twitter: string | null
          updated_at: string | null
          version: number | null
          whatsapp_phone: string | null
          years_at_current_company: number | null
          years_in_current_position: number | null
          years_of_experience: number | null
        }
        Insert: {
          achievements?: Json[] | null
          achivements?: string | null
          auid_id?: string | null
          auth_id?: string | null
          college_tags?: string[] | null
          companies_tags?: string[] | null
          country_code?: string | null
          created_at?: string
          created_by?: string | null
          credits?: number | null
          current_company_name?: string | null
          current_location?: string | null
          current_salary?: number | null
          current_salary_currency?: string | null
          current_title?: string[] | null
          data_source?: string | null
          dob?: string | null
          education?: Json[] | null
          education_title_tag?: string | null
          email: string
          enrichment_level?: number | null
          experience?: Json[] | null
          experience_title_tag?: string | null
          extracted_data?: Json | null
          facebook?: string | null
          first_name?: string | null
          full_name?: string | null
          gender?: string | null
          github?: string | null
          highest_stage_code?: number | null
          id?: string
          industries?: string[] | null
          industry_tags?: string[] | null
          instagram?: string | null
          job_function?: string[] | null
          last_job_changed_at?: string | null
          last_name?: string | null
          latest_movement_at?: string | null
          linkedin?: string | null
          linkedin_metadata?: Json[] | null
          linkedin_updated_at?: string | null
          links?: string[] | null
          locations?: string[] | null
          metadata?: Json | null
          modified_at?: string | null
          modified_by?: string | null
          old_filter_values?: Json | null
          other_emails?: string[] | null
          other_phones?: string[] | null
          past_companies?: string[] | null
          past_titles?: string[] | null
          pfp_public?: string | null
          phone?: string | null
          portfolio?: string | null
          qualification_tags?: string[] | null
          resume_data?: string | null
          resume_struct?: Json | null
          resume_url?: string | null
          role_tags?: string[] | null
          schools?: string[] | null
          search_hit_rate?: number | null
          secondary_email?: string | null
          secondary_phone?: string | null
          seniority_level?: string[] | null
          skills_tags?: string[] | null
          source_id?: string | null
          source_tags?: string[] | null
          status_code?: number | null
          summary?: string | null
          tags?: string[] | null
          tenure?: Json | null
          twitter?: string | null
          updated_at?: string | null
          version?: number | null
          whatsapp_phone?: string | null
          years_at_current_company?: number | null
          years_in_current_position?: number | null
          years_of_experience?: number | null
        }
        Update: {
          achievements?: Json[] | null
          achivements?: string | null
          auid_id?: string | null
          auth_id?: string | null
          college_tags?: string[] | null
          companies_tags?: string[] | null
          country_code?: string | null
          created_at?: string
          created_by?: string | null
          credits?: number | null
          current_company_name?: string | null
          current_location?: string | null
          current_salary?: number | null
          current_salary_currency?: string | null
          current_title?: string[] | null
          data_source?: string | null
          dob?: string | null
          education?: Json[] | null
          education_title_tag?: string | null
          email?: string
          enrichment_level?: number | null
          experience?: Json[] | null
          experience_title_tag?: string | null
          extracted_data?: Json | null
          facebook?: string | null
          first_name?: string | null
          full_name?: string | null
          gender?: string | null
          github?: string | null
          highest_stage_code?: number | null
          id?: string
          industries?: string[] | null
          industry_tags?: string[] | null
          instagram?: string | null
          job_function?: string[] | null
          last_job_changed_at?: string | null
          last_name?: string | null
          latest_movement_at?: string | null
          linkedin?: string | null
          linkedin_metadata?: Json[] | null
          linkedin_updated_at?: string | null
          links?: string[] | null
          locations?: string[] | null
          metadata?: Json | null
          modified_at?: string | null
          modified_by?: string | null
          old_filter_values?: Json | null
          other_emails?: string[] | null
          other_phones?: string[] | null
          past_companies?: string[] | null
          past_titles?: string[] | null
          pfp_public?: string | null
          phone?: string | null
          portfolio?: string | null
          qualification_tags?: string[] | null
          resume_data?: string | null
          resume_struct?: Json | null
          resume_url?: string | null
          role_tags?: string[] | null
          schools?: string[] | null
          search_hit_rate?: number | null
          secondary_email?: string | null
          secondary_phone?: string | null
          seniority_level?: string[] | null
          skills_tags?: string[] | null
          source_id?: string | null
          source_tags?: string[] | null
          status_code?: number | null
          summary?: string | null
          tags?: string[] | null
          tenure?: Json | null
          twitter?: string | null
          updated_at?: string | null
          version?: number | null
          whatsapp_phone?: string | null
          years_at_current_company?: number | null
          years_in_current_position?: number | null
          years_of_experience?: number | null
        }
        Relationships: []
      }
      ceipal_data_migration_applicants: {
        Row: {
          address: string | null
          applicant_status: string | null
          ceipal_applicant_id: string | null
          ceipal_id: string | null
          city: string | null
          consultant_name: string | null
          country: string | null
          created_at: string | null
          created_by: string | null
          documents: Json[] | null
          email: string | null
          email_address_1: string | null
          firstname: string | null
          home_phone_number: string | null
          id: string
          job_title: string | null
          lastname: string | null
          middlename: string | null
          mobile_number: string | null
          modified_by: string | null
          modify_date: string | null
          other_phone: string | null
          resume_path: string | null
          skills: string | null
          source: string | null
          state: string | null
          work_authorization: string | null
          work_authorization_id: string | null
          work_phone_number: string | null
        }
        Insert: {
          address?: string | null
          applicant_status?: string | null
          ceipal_applicant_id?: string | null
          ceipal_id?: string | null
          city?: string | null
          consultant_name?: string | null
          country?: string | null
          created_at?: string | null
          created_by?: string | null
          documents?: Json[] | null
          email?: string | null
          email_address_1?: string | null
          firstname?: string | null
          home_phone_number?: string | null
          id?: string
          job_title?: string | null
          lastname?: string | null
          middlename?: string | null
          mobile_number?: string | null
          modified_by?: string | null
          modify_date?: string | null
          other_phone?: string | null
          resume_path?: string | null
          skills?: string | null
          source?: string | null
          state?: string | null
          work_authorization?: string | null
          work_authorization_id?: string | null
          work_phone_number?: string | null
        }
        Update: {
          address?: string | null
          applicant_status?: string | null
          ceipal_applicant_id?: string | null
          ceipal_id?: string | null
          city?: string | null
          consultant_name?: string | null
          country?: string | null
          created_at?: string | null
          created_by?: string | null
          documents?: Json[] | null
          email?: string | null
          email_address_1?: string | null
          firstname?: string | null
          home_phone_number?: string | null
          id?: string
          job_title?: string | null
          lastname?: string | null
          middlename?: string | null
          mobile_number?: string | null
          modified_by?: string | null
          modify_date?: string | null
          other_phone?: string | null
          resume_path?: string | null
          skills?: string | null
          source?: string | null
          state?: string | null
          work_authorization?: string | null
          work_authorization_id?: string | null
          work_phone_number?: string | null
        }
        Relationships: []
      }
      comm_notif: {
        Row: {
          app_status: number | null
          application_id: string | null
          candidate_id: string | null
          candidate_stage: number | null
          created_at: string
          created_by: string | null
          id: string
          metadata: Json | null
          org_id: string | null
          response_data: Json | null
          retry_count: number | null
          scheduled_at: string
          status_code: number | null
          type: string
          updated_at: string | null
        }
        Insert: {
          app_status?: number | null
          application_id?: string | null
          candidate_id?: string | null
          candidate_stage?: number | null
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json | null
          org_id?: string | null
          response_data?: Json | null
          retry_count?: number | null
          scheduled_at?: string
          status_code?: number | null
          type: string
          updated_at?: string | null
        }
        Update: {
          app_status?: number | null
          application_id?: string | null
          candidate_id?: string | null
          candidate_stage?: number | null
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json | null
          org_id?: string | null
          response_data?: Json | null
          retry_count?: number | null
          scheduled_at?: string
          status_code?: number | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comm_notif_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comm_notif_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      comm_templates_fixed: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          metadata: Json | null
          required_params: string[] | null
          template_name: string | null
          template_preview: string | null
          title: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json | null
          required_params?: string[] | null
          template_name?: string | null
          template_preview?: string | null
          title?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json | null
          required_params?: string[] | null
          template_name?: string | null
          template_preview?: string | null
          title?: string | null
          type?: string | null
        }
        Relationships: []
      }
      comments: {
        Row: {
          applicant_id: string
          comment: string
          created_at: string
          id: string
          is_resolved: boolean | null
          linked_activity: string | null
          next_action: string | null
          reminder: string | null
          reply_of: string | null
          tagged_users: Json[] | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          applicant_id: string
          comment: string
          created_at?: string
          id?: string
          is_resolved?: boolean | null
          linked_activity?: string | null
          next_action?: string | null
          reminder?: string | null
          reply_of?: string | null
          tagged_users?: Json[] | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          applicant_id?: string
          comment?: string
          created_at?: string
          id?: string
          is_resolved?: boolean | null
          linked_activity?: string | null
          next_action?: string | null
          reminder?: string | null
          reply_of?: string | null
          tagged_users?: Json[] | null
          type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comment_reply_of_fkey"
            columns: ["reply_of"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_applicant_id_fkey"
            columns: ["applicant_id"]
            isOneToOne: false
            referencedRelation: "candidate_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_linked_activity_fkey"
            columns: ["linked_activity"]
            isOneToOne: false
            referencedRelation: "activity_logs"
            referencedColumns: ["id"]
          },
        ]
      }
      comms_email_events: {
        Row: {
          bounce_subtype: string | null
          bounce_type: string | null
          click_link: string | null
          complaint_feedback_type: string | null
          created_at: string
          created_by: string | null
          delivery_time_millis: number | null
          event_type: string | null
          id: string
          message_id: string | null
          modified_at: string | null
          open_ip_address: string | null
          raw_event: Json | null
          recipient_email: string | null
          reject_reason: string | null
          timestamp: string | null
          user_agent: string | null
        }
        Insert: {
          bounce_subtype?: string | null
          bounce_type?: string | null
          click_link?: string | null
          complaint_feedback_type?: string | null
          created_at?: string
          created_by?: string | null
          delivery_time_millis?: number | null
          event_type?: string | null
          id?: string
          message_id?: string | null
          modified_at?: string | null
          open_ip_address?: string | null
          raw_event?: Json | null
          recipient_email?: string | null
          reject_reason?: string | null
          timestamp?: string | null
          user_agent?: string | null
        }
        Update: {
          bounce_subtype?: string | null
          bounce_type?: string | null
          click_link?: string | null
          complaint_feedback_type?: string | null
          created_at?: string
          created_by?: string | null
          delivery_time_millis?: number | null
          event_type?: string | null
          id?: string
          message_id?: string | null
          modified_at?: string | null
          open_ip_address?: string | null
          raw_event?: Json | null
          recipient_email?: string | null
          reject_reason?: string | null
          timestamp?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      company: {
        Row: {
          acquisition_status: string | null
          all_office_addresses: string[] | null
          business_outlook_pct: number | null
          career_opportunities_rating: number | null
          ceo_approval_pct: number | null
          ceo_location: string | null
          ceo_name: string | null
          cfo_name: string | null
          company_stage: string | null
          company_twitter_url: string | null
          company_type: string | null
          compensation_rating: number | null
          created_at: string
          created_by: string | null
          crunchbase_url: string | null
          crustdata_company_id: number | null
          crustdata_score: number | null
          cto_name: string | null
          culture_rating: number | null
          current_headcount: number | null
          data_enriched_at: string | null
          data_quality_score: number | null
          data_source: string | null
          days_since_last_funding: number | null
          description: string | null
          domain: string | null
          employee_count: number | null
          employee_count_range: string | null
          employee_growth_percentages: Json | null
          engineering_headcount_pct: number | null
          engineering_job_openings: number | null
          europe_headcount_absolute: number | null
          finance_headcount_pct: number | null
          fiscal_year_end: string | null
          founded_year: string | null
          glassdoor_rating: number | null
          glassdoor_review_count: number | null
          headcount_growth_2yr: number | null
          headcount_growth_mom: number | null
          headcount_growth_qoq: number | null
          headcount_growth_yoy: number | null
          hiring_velocity_score: number | null
          hq_city: string | null
          hq_country: string | null
          hq_location: string | null
          hq_state: string | null
          hq_street_address: string | null
          hr_headcount_pct: number | null
          id: string
          india_headcount_absolute: number | null
          industry: string[] | null
          is_full_domain_match: boolean | null
          key_investors: string[] | null
          largest_headcount_country: string | null
          last_funding_amount_usd: number | null
          last_funding_date: string | null
          last_funding_round_type: string | null
          last_job_posted_date: string | null
          latest_valuation_usd: number | null
          linkedin_follower_count: number | null
          linkedin_id: string | null
          linkedin_url: string | null
          locations: string[] | null
          logo: string | null
          logo_public: string | null
          marketing_headcount_pct: number | null
          marketing_job_openings: number | null
          markets: string[] | null
          metadata_competitors: Json | null
          metadata_general: Json[] | null
          metadata_growth: Json | null
          metadata_input: Json | null
          metadata_investors: Json | null
          metadata_jobs: Json | null
          metadata_linkedin: Json | null
          metadata_revenue: Json | null
          metadata_webtraffic: Json | null
          modified_at: string | null
          modified_by: string | null
          monthly_website_visitors: number | null
          name: string | null
          new_jobs_last_30_days: number | null
          operations_headcount_pct: number | null
          other_headcount_pct: number | null
          other_regions_headcount_absolute: number | null
          phone: string | null
          raw: Json | null
          revenue_range: Json | null
          sales_headcount_pct: number | null
          sales_job_openings: number | null
          senior_management_rating: number | null
          specialties: string[] | null
          tag_line: string | null
          total_funding_rounds: number | null
          total_funding_usd: number | null
          total_job_openings: number | null
          traffic_source_direct_pct: number | null
          traffic_source_referral_pct: number | null
          traffic_source_search_pct: number | null
          traffic_source_social_pct: number | null
          twitter_follower_count: number | null
          usa_headcount_absolute: number | null
          website: string | null
          website_visitor_growth_mom: number | null
          work_life_balance_rating: number | null
        }
        Insert: {
          acquisition_status?: string | null
          all_office_addresses?: string[] | null
          business_outlook_pct?: number | null
          career_opportunities_rating?: number | null
          ceo_approval_pct?: number | null
          ceo_location?: string | null
          ceo_name?: string | null
          cfo_name?: string | null
          company_stage?: string | null
          company_twitter_url?: string | null
          company_type?: string | null
          compensation_rating?: number | null
          created_at?: string
          created_by?: string | null
          crunchbase_url?: string | null
          crustdata_company_id?: number | null
          crustdata_score?: number | null
          cto_name?: string | null
          culture_rating?: number | null
          current_headcount?: number | null
          data_enriched_at?: string | null
          data_quality_score?: number | null
          data_source?: string | null
          days_since_last_funding?: number | null
          description?: string | null
          domain?: string | null
          employee_count?: number | null
          employee_count_range?: string | null
          employee_growth_percentages?: Json | null
          engineering_headcount_pct?: number | null
          engineering_job_openings?: number | null
          europe_headcount_absolute?: number | null
          finance_headcount_pct?: number | null
          fiscal_year_end?: string | null
          founded_year?: string | null
          glassdoor_rating?: number | null
          glassdoor_review_count?: number | null
          headcount_growth_2yr?: number | null
          headcount_growth_mom?: number | null
          headcount_growth_qoq?: number | null
          headcount_growth_yoy?: number | null
          hiring_velocity_score?: number | null
          hq_city?: string | null
          hq_country?: string | null
          hq_location?: string | null
          hq_state?: string | null
          hq_street_address?: string | null
          hr_headcount_pct?: number | null
          id?: string
          india_headcount_absolute?: number | null
          industry?: string[] | null
          is_full_domain_match?: boolean | null
          key_investors?: string[] | null
          largest_headcount_country?: string | null
          last_funding_amount_usd?: number | null
          last_funding_date?: string | null
          last_funding_round_type?: string | null
          last_job_posted_date?: string | null
          latest_valuation_usd?: number | null
          linkedin_follower_count?: number | null
          linkedin_id?: string | null
          linkedin_url?: string | null
          locations?: string[] | null
          logo?: string | null
          logo_public?: string | null
          marketing_headcount_pct?: number | null
          marketing_job_openings?: number | null
          markets?: string[] | null
          metadata_competitors?: Json | null
          metadata_general?: Json[] | null
          metadata_growth?: Json | null
          metadata_input?: Json | null
          metadata_investors?: Json | null
          metadata_jobs?: Json | null
          metadata_linkedin?: Json | null
          metadata_revenue?: Json | null
          metadata_webtraffic?: Json | null
          modified_at?: string | null
          modified_by?: string | null
          monthly_website_visitors?: number | null
          name?: string | null
          new_jobs_last_30_days?: number | null
          operations_headcount_pct?: number | null
          other_headcount_pct?: number | null
          other_regions_headcount_absolute?: number | null
          phone?: string | null
          raw?: Json | null
          revenue_range?: Json | null
          sales_headcount_pct?: number | null
          sales_job_openings?: number | null
          senior_management_rating?: number | null
          specialties?: string[] | null
          tag_line?: string | null
          total_funding_rounds?: number | null
          total_funding_usd?: number | null
          total_job_openings?: number | null
          traffic_source_direct_pct?: number | null
          traffic_source_referral_pct?: number | null
          traffic_source_search_pct?: number | null
          traffic_source_social_pct?: number | null
          twitter_follower_count?: number | null
          usa_headcount_absolute?: number | null
          website?: string | null
          website_visitor_growth_mom?: number | null
          work_life_balance_rating?: number | null
        }
        Update: {
          acquisition_status?: string | null
          all_office_addresses?: string[] | null
          business_outlook_pct?: number | null
          career_opportunities_rating?: number | null
          ceo_approval_pct?: number | null
          ceo_location?: string | null
          ceo_name?: string | null
          cfo_name?: string | null
          company_stage?: string | null
          company_twitter_url?: string | null
          company_type?: string | null
          compensation_rating?: number | null
          created_at?: string
          created_by?: string | null
          crunchbase_url?: string | null
          crustdata_company_id?: number | null
          crustdata_score?: number | null
          cto_name?: string | null
          culture_rating?: number | null
          current_headcount?: number | null
          data_enriched_at?: string | null
          data_quality_score?: number | null
          data_source?: string | null
          days_since_last_funding?: number | null
          description?: string | null
          domain?: string | null
          employee_count?: number | null
          employee_count_range?: string | null
          employee_growth_percentages?: Json | null
          engineering_headcount_pct?: number | null
          engineering_job_openings?: number | null
          europe_headcount_absolute?: number | null
          finance_headcount_pct?: number | null
          fiscal_year_end?: string | null
          founded_year?: string | null
          glassdoor_rating?: number | null
          glassdoor_review_count?: number | null
          headcount_growth_2yr?: number | null
          headcount_growth_mom?: number | null
          headcount_growth_qoq?: number | null
          headcount_growth_yoy?: number | null
          hiring_velocity_score?: number | null
          hq_city?: string | null
          hq_country?: string | null
          hq_location?: string | null
          hq_state?: string | null
          hq_street_address?: string | null
          hr_headcount_pct?: number | null
          id?: string
          india_headcount_absolute?: number | null
          industry?: string[] | null
          is_full_domain_match?: boolean | null
          key_investors?: string[] | null
          largest_headcount_country?: string | null
          last_funding_amount_usd?: number | null
          last_funding_date?: string | null
          last_funding_round_type?: string | null
          last_job_posted_date?: string | null
          latest_valuation_usd?: number | null
          linkedin_follower_count?: number | null
          linkedin_id?: string | null
          linkedin_url?: string | null
          locations?: string[] | null
          logo?: string | null
          logo_public?: string | null
          marketing_headcount_pct?: number | null
          marketing_job_openings?: number | null
          markets?: string[] | null
          metadata_competitors?: Json | null
          metadata_general?: Json[] | null
          metadata_growth?: Json | null
          metadata_input?: Json | null
          metadata_investors?: Json | null
          metadata_jobs?: Json | null
          metadata_linkedin?: Json | null
          metadata_revenue?: Json | null
          metadata_webtraffic?: Json | null
          modified_at?: string | null
          modified_by?: string | null
          monthly_website_visitors?: number | null
          name?: string | null
          new_jobs_last_30_days?: number | null
          operations_headcount_pct?: number | null
          other_headcount_pct?: number | null
          other_regions_headcount_absolute?: number | null
          phone?: string | null
          raw?: Json | null
          revenue_range?: Json | null
          sales_headcount_pct?: number | null
          sales_job_openings?: number | null
          senior_management_rating?: number | null
          specialties?: string[] | null
          tag_line?: string | null
          total_funding_rounds?: number | null
          total_funding_usd?: number | null
          total_job_openings?: number | null
          traffic_source_direct_pct?: number | null
          traffic_source_referral_pct?: number | null
          traffic_source_search_pct?: number | null
          traffic_source_social_pct?: number | null
          twitter_follower_count?: number | null
          usa_headcount_absolute?: number | null
          website?: string | null
          website_visitor_growth_mom?: number | null
          work_life_balance_rating?: number | null
        }
        Relationships: []
      }
      contact_enrichment_data: {
        Row: {
          created_at: string
          created_by: string | null
          email: string | null
          emails: string[] | null
          id: string
          linkedin_url: string | null
          metadata: Json | null
          people_id: string | null
          phone: string | null
          phone_country_code: string | null
          phones: string[] | null
          request_id: string | null
          request_source: string | null
          source: string | null
          status_code: number | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          email?: string | null
          emails?: string[] | null
          id?: string
          linkedin_url?: string | null
          metadata?: Json | null
          people_id?: string | null
          phone?: string | null
          phone_country_code?: string | null
          phones?: string[] | null
          request_id?: string | null
          request_source?: string | null
          source?: string | null
          status_code?: number | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          email?: string | null
          emails?: string[] | null
          id?: string
          linkedin_url?: string | null
          metadata?: Json | null
          people_id?: string | null
          phone?: string | null
          phone_country_code?: string | null
          phones?: string[] | null
          request_id?: string | null
          request_source?: string | null
          source?: string | null
          status_code?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_enrichment_data_people_id_fkey"
            columns: ["people_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_owners: {
        Row: {
          contact_id: string | null
          created_at: string
          engagement: number | null
          id: string
          owner_id: string | null
          priority: number | null
          type: number | null
          updated_at: string | null
        }
        Insert: {
          contact_id?: string | null
          created_at?: string
          engagement?: number | null
          id?: string
          owner_id?: string | null
          priority?: number | null
          type?: number | null
          updated_at?: string | null
        }
        Update: {
          contact_id?: string | null
          created_at?: string
          engagement?: number | null
          id?: string
          owner_id?: string | null
          priority?: number | null
          type?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_owners_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_owners_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "org_members"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          created_at: string
          current_org: string | null
          current_role: string | null
          email: string | null
          first_name: string | null
          full_name: string | null
          id: string
          linkedin_meta: Json[] | null
          linkedin_url: string | null
          phone: string | null
          secondary_email: string | null
          secondary_phone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          current_org?: string | null
          current_role?: string | null
          email?: string | null
          first_name?: string | null
          full_name?: string | null
          id?: string
          linkedin_meta?: Json[] | null
          linkedin_url?: string | null
          phone?: string | null
          secondary_email?: string | null
          secondary_phone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          current_org?: string | null
          current_role?: string | null
          email?: string | null
          first_name?: string | null
          full_name?: string | null
          id?: string
          linkedin_meta?: Json[] | null
          linkedin_url?: string | null
          phone?: string | null
          secondary_email?: string | null
          secondary_phone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contacts_current_org_fkey"
            columns: ["current_org"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      dashboard_links: {
        Row: {
          created_at: string
          dashboard_link: string
          id: string
          name: string | null
          org_id: string
          user_id: string
          workspace_id: string | null
        }
        Insert: {
          created_at?: string
          dashboard_link: string
          id?: string
          name?: string | null
          org_id: string
          user_id: string
          workspace_id?: string | null
        }
        Update: {
          created_at?: string
          dashboard_link?: string
          id?: string
          name?: string | null
          org_id?: string
          user_id?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dashboard_link_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dashboard_link_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      deals: {
        Row: {
          charge_by: Database["public"]["Enums"]["charge_type"] | null
          close_date: string | null
          company_id: string
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          metadata: Json | null
          name: string
          org_client_id: string | null
          org_id: string
          payment_on: string | null
          salary_currency: string | null
          take_rate: number | null
          uploaded_files: string[] | null
          workspace_id: string | null
        }
        Insert: {
          charge_by?: Database["public"]["Enums"]["charge_type"] | null
          close_date?: string | null
          company_id: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name: string
          org_client_id?: string | null
          org_id: string
          payment_on?: string | null
          salary_currency?: string | null
          take_rate?: number | null
          uploaded_files?: string[] | null
          workspace_id?: string | null
        }
        Update: {
          charge_by?: Database["public"]["Enums"]["charge_type"] | null
          close_date?: string | null
          company_id?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          org_client_id?: string | null
          org_id?: string
          payment_on?: string | null
          salary_currency?: string | null
          take_rate?: number | null
          uploaded_files?: string[] | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deals_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_enriched_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_org_client_id_fkey"
            columns: ["org_client_id"]
            isOneToOne: false
            referencedRelation: "org_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      email_integration: {
        Row: {
          created_at: string
          created_by: string | null
          email: string
          id: string
          sender_name: string
          service: string | null
          status: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          email: string
          id?: string
          sender_name: string
          service?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          email?: string
          id?: string
          sender_name?: string
          service?: string | null
          status?: string | null
        }
        Relationships: []
      }
      email_orgs: {
        Row: {
          access_level: number | null
          created_at: string
          created_by: string | null
          email_id: string
          id: string
          org_id: string | null
        }
        Insert: {
          access_level?: number | null
          created_at?: string
          created_by?: string | null
          email_id: string
          id?: string
          org_id?: string | null
        }
        Update: {
          access_level?: number | null
          created_at?: string
          created_by?: string | null
          email_id?: string
          id?: string
          org_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_orgs_email_id_fkey"
            columns: ["email_id"]
            isOneToOne: false
            referencedRelation: "email_integration"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_orgs_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      email_templates: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          org_id: string
          templates: Json
          title: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          org_id: string
          templates?: Json
          title?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          org_id?: string
          templates?: Json
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_templates_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      event_logs: {
        Row: {
          created_at: string
          created_by: string | null
          event_code: number | null
          id: string
          metadata: Json | null
          org_id: string | null
          session_id_posthog: string | null
          session_id_sentry: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          event_code?: number | null
          id?: string
          metadata?: Json | null
          org_id?: string | null
          session_id_posthog?: string | null
          session_id_sentry?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          event_code?: number | null
          id?: string
          metadata?: Json | null
          org_id?: string | null
          session_id_posthog?: string | null
          session_id_sentry?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      file_uploads: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          key: string | null
          resource_id: string
          resource_type: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          key?: string | null
          resource_id: string
          resource_type: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          key?: string | null
          resource_id?: string
          resource_type?: string
        }
        Relationships: []
      }
      filter_req: {
        Row: {
          created_at: string
          id: string
          ref_id: string
          response: Json | null
        }
        Insert: {
          created_at?: string
          id?: string
          ref_id: string
          response?: Json | null
        }
        Update: {
          created_at?: string
          id?: string
          ref_id?: string
          response?: Json | null
        }
        Relationships: []
      }
      filters_industries: {
        Row: {
          embedding: string | null
          fts_value: unknown
          id: number
          value: string
        }
        Insert: {
          embedding?: string | null
          fts_value?: unknown
          id?: number
          value: string
        }
        Update: {
          embedding?: string | null
          fts_value?: unknown
          id?: number
          value?: string
        }
        Relationships: []
      }
      filters_job_titles: {
        Row: {
          embedding: string | null
          fts_value: unknown
          id: number
          value: string
        }
        Insert: {
          embedding?: string | null
          fts_value?: unknown
          id?: number
          value: string
        }
        Update: {
          embedding?: string | null
          fts_value?: unknown
          id?: number
          value?: string
        }
        Relationships: []
      }
      filters_regions: {
        Row: {
          embedding: string | null
          fts_value: unknown
          id: number
          value: string
        }
        Insert: {
          embedding?: string | null
          fts_value?: unknown
          id?: number
          value: string
        }
        Update: {
          embedding?: string | null
          fts_value?: unknown
          id?: number
          value?: string
        }
        Relationships: []
      }
      filters_schools: {
        Row: {
          embedding: string | null
          fts_value: unknown
          id: number
          value: string
        }
        Insert: {
          embedding?: string | null
          fts_value?: unknown
          id?: number
          value: string
        }
        Update: {
          embedding?: string | null
          fts_value?: unknown
          id?: number
          value?: string
        }
        Relationships: []
      }
      filters_skills: {
        Row: {
          embedding: string | null
          fts_value: unknown
          id: number
          value: string
        }
        Insert: {
          embedding?: string | null
          fts_value?: unknown
          id?: number
          value: string
        }
        Update: {
          embedding?: string | null
          fts_value?: unknown
          id?: number
          value?: string
        }
        Relationships: []
      }
      integration_oauth: {
        Row: {
          auth_token: string | null
          created_at: string
          id: string
          org_id: string | null
          refresh_token: string | null
          sender_name: string | null
          service: string | null
          smtp_data: Json
          title: string
        }
        Insert: {
          auth_token?: string | null
          created_at?: string
          id?: string
          org_id?: string | null
          refresh_token?: string | null
          sender_name?: string | null
          service?: string | null
          smtp_data?: Json
          title?: string
        }
        Update: {
          auth_token?: string | null
          created_at?: string
          id?: string
          org_id?: string | null
          refresh_token?: string | null
          sender_name?: string | null
          service?: string | null
          smtp_data?: Json
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "integration_email_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      invites: {
        Row: {
          created_at: string | null
          email: string
          id: string
          invite_status: Database["public"]["Enums"]["invite_status"] | null
          invited_by: string | null
          job_id: string | null
          org_id: string | null
          role: Database["public"]["Enums"]["role"] | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          invite_status?: Database["public"]["Enums"]["invite_status"] | null
          invited_by?: string | null
          job_id?: string | null
          org_id?: string | null
          role?: Database["public"]["Enums"]["role"] | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          invite_status?: Database["public"]["Enums"]["invite_status"] | null
          invited_by?: string | null
          job_id?: string | null
          org_id?: string | null
          role?: Database["public"]["Enums"]["role"] | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invites_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invites_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      job_assignments: {
        Row: {
          assigned_at: string | null
          assigned_by: string | null
          assigned_role: string
          id: string
          is_active: boolean | null
          job_id: string | null
          org_id: string
          user_id: string | null
          workspace_id: string | null
        }
        Insert: {
          assigned_at?: string | null
          assigned_by?: string | null
          assigned_role: string
          id?: string
          is_active?: boolean | null
          job_id?: string | null
          org_id: string
          user_id?: string | null
          workspace_id?: string | null
        }
        Update: {
          assigned_at?: string | null
          assigned_by?: string | null
          assigned_role?: string
          id?: string
          is_active?: boolean | null
          job_id?: string | null
          org_id?: string
          user_id?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_assignments_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "org_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "job_assignments_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_board_orgs: {
        Row: {
          approved: boolean | null
          created_at: string
          id: string
          job_board: string
          org_id: string
        }
        Insert: {
          approved?: boolean | null
          created_at?: string
          id?: string
          job_board: string
          org_id: string
        }
        Update: {
          approved?: boolean | null
          created_at?: string
          id?: string
          job_board?: string
          org_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_board_orgs_job_board_fkey"
            columns: ["job_board"]
            isOneToOne: false
            referencedRelation: "job_boards"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "job_board_orgs_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_board_posts: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          job_board: string
          job_id: string
          status: number | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          job_board: string
          job_id: string
          status?: number | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          job_board?: string
          job_id?: string
          status?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "job_board_posts_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_boards: {
        Row: {
          created_at: string
          logo_url: string | null
          name: string
        }
        Insert: {
          created_at?: string
          logo_url?: string | null
          name: string
        }
        Update: {
          created_at?: string
          logo_url?: string | null
          name?: string
        }
        Relationships: []
      }
      job_forks: {
        Row: {
          agency_bounty: Json | null
          approved_by: Json[] | null
          approvers: string[] | null
          assigned_to: string[] | null
          candidate_engagement_template: Json | null
          candidate_engagement_template_id: string | null
          created_at: string | null
          created_by: string | null
          hiring_managers: string[] | null
          id: string
          job_boards: Json | null
          job_id: string
          placement_drive_id: string | null
          role: string | null
          workspace_id: string
        }
        Insert: {
          agency_bounty?: Json | null
          approved_by?: Json[] | null
          approvers?: string[] | null
          assigned_to?: string[] | null
          candidate_engagement_template?: Json | null
          candidate_engagement_template_id?: string | null
          created_at?: string | null
          created_by?: string | null
          hiring_managers?: string[] | null
          id?: string
          job_boards?: Json | null
          job_id: string
          placement_drive_id?: string | null
          role?: string | null
          workspace_id: string
        }
        Update: {
          agency_bounty?: Json | null
          approved_by?: Json[] | null
          approvers?: string[] | null
          assigned_to?: string[] | null
          candidate_engagement_template?: Json | null
          candidate_engagement_template_id?: string | null
          created_at?: string | null
          created_by?: string | null
          hiring_managers?: string[] | null
          id?: string
          job_boards?: Json | null
          job_id?: string
          placement_drive_id?: string | null
          role?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_forks_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "job_forks_placement_drive_id_fkey"
            columns: ["placement_drive_id"]
            isOneToOne: false
            referencedRelation: "placement_drives"
            referencedColumns: ["id"]
          },
        ]
      }
      job_reevaluation_logs: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          job_id: string | null
          status: number | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          job_id?: string | null
          status?: number | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          job_id?: string | null
          status?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "job_reevaluation_logs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_stages: {
        Row: {
          created_at: string
          created_by: string | null
          engagement_template: Json[] | null
          evaluation_criteria: Json | null
          evaluation_type: string | null
          id: string
          interviewer: string | null
          job_id: string
          metadata: Json | null
          owner: string | null
          stage: number
          suggested_questions: Json | null
          title: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          engagement_template?: Json[] | null
          evaluation_criteria?: Json | null
          evaluation_type?: string | null
          id?: string
          interviewer?: string | null
          job_id: string
          metadata?: Json | null
          owner?: string | null
          stage: number
          suggested_questions?: Json | null
          title?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          engagement_template?: Json[] | null
          evaluation_criteria?: Json | null
          evaluation_type?: string | null
          id?: string
          interviewer?: string | null
          job_id?: string
          metadata?: Json | null
          owner?: string | null
          stage?: number
          suggested_questions?: Json | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_stages_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          application_deadline: string | null
          assessment_type: string | null
          available_to_start_from: number | null
          client_id: string | null
          contact_id: string | null
          created_at: string | null
          created_by: string | null
          custom_questions: Json[] | null
          description: string | null
          employment_type: string[] | null
          evaluation_criteria: Json | null
          experience: number
          filters_metadata: Json | null
          id: string
          industries: string[] | null
          interview_data: Json | null
          interview_evaluation_criteria: Json | null
          interview_id: string | null
          interview_invite_url: string | null
          interview_weights: Json[] | null
          job_status: string | null
          linkedin_search_filters: Json | null
          local_search_filters: Json | null
          location: string | null
          max_yoe: number | null
          min_yoe: number | null
          number_of_hires: number | null
          org_id: string | null
          owner: string | null
          payment_currency: string | null
          payment_on: string | null
          payment_type: string | null
          priority: number | null
          reference_id: number | null
          remote: boolean | null
          roles: string[] | null
          salary_currency: string | null
          salary_max: number | null
          salary_min: number | null
          salary_visible: boolean | null
          skills: string[] | null
          stage_code_mapping: Json | null
          stages_mapping_new: Json | null
          start_date: string | null
          status: string | null
          summary: string | null
          tags: string | null
          take_rate: number | null
          title: string | null
          updated_at: string | null
          updated_by: string | null
          uploaded_file: string[] | null
          weights: Json[] | null
          workspace_id: string | null
        }
        Insert: {
          application_deadline?: string | null
          assessment_type?: string | null
          available_to_start_from?: number | null
          client_id?: string | null
          contact_id?: string | null
          created_at?: string | null
          created_by?: string | null
          custom_questions?: Json[] | null
          description?: string | null
          employment_type?: string[] | null
          evaluation_criteria?: Json | null
          experience?: number
          filters_metadata?: Json | null
          id?: string
          industries?: string[] | null
          interview_data?: Json | null
          interview_evaluation_criteria?: Json | null
          interview_id?: string | null
          interview_invite_url?: string | null
          interview_weights?: Json[] | null
          job_status?: string | null
          linkedin_search_filters?: Json | null
          local_search_filters?: Json | null
          location?: string | null
          max_yoe?: number | null
          min_yoe?: number | null
          number_of_hires?: number | null
          org_id?: string | null
          owner?: string | null
          payment_currency?: string | null
          payment_on?: string | null
          payment_type?: string | null
          priority?: number | null
          reference_id?: number | null
          remote?: boolean | null
          roles?: string[] | null
          salary_currency?: string | null
          salary_max?: number | null
          salary_min?: number | null
          salary_visible?: boolean | null
          skills?: string[] | null
          stage_code_mapping?: Json | null
          stages_mapping_new?: Json | null
          start_date?: string | null
          status?: string | null
          summary?: string | null
          tags?: string | null
          take_rate?: number | null
          title?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uploaded_file?: string[] | null
          weights?: Json[] | null
          workspace_id?: string | null
        }
        Update: {
          application_deadline?: string | null
          assessment_type?: string | null
          available_to_start_from?: number | null
          client_id?: string | null
          contact_id?: string | null
          created_at?: string | null
          created_by?: string | null
          custom_questions?: Json[] | null
          description?: string | null
          employment_type?: string[] | null
          evaluation_criteria?: Json | null
          experience?: number
          filters_metadata?: Json | null
          id?: string
          industries?: string[] | null
          interview_data?: Json | null
          interview_evaluation_criteria?: Json | null
          interview_id?: string | null
          interview_invite_url?: string | null
          interview_weights?: Json[] | null
          job_status?: string | null
          linkedin_search_filters?: Json | null
          local_search_filters?: Json | null
          location?: string | null
          max_yoe?: number | null
          min_yoe?: number | null
          number_of_hires?: number | null
          org_id?: string | null
          owner?: string | null
          payment_currency?: string | null
          payment_on?: string | null
          payment_type?: string | null
          priority?: number | null
          reference_id?: number | null
          remote?: boolean | null
          roles?: string[] | null
          salary_currency?: string | null
          salary_max?: number | null
          salary_min?: number | null
          salary_visible?: boolean | null
          skills?: string[] | null
          stage_code_mapping?: Json | null
          stages_mapping_new?: Json | null
          start_date?: string | null
          status?: string | null
          summary?: string | null
          tags?: string | null
          take_rate?: number | null
          title?: string | null
          updated_at?: string | null
          updated_by?: string | null
          uploaded_file?: string[] | null
          weights?: Json[] | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "jobs_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "jobs_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "company_enriched_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "jobs_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "jobs_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "jobs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs_embeddings: {
        Row: {
          description_embedding: string | null
          industries_embedding: string | null
          job_id: string
          location_embedding: string | null
          roles_embedding: string | null
          skills_embedding: string | null
          skills_roles_industries_embedding: string | null
          summary_embedding: string | null
          updated_at: string | null
        }
        Insert: {
          description_embedding?: string | null
          industries_embedding?: string | null
          job_id: string
          location_embedding?: string | null
          roles_embedding?: string | null
          skills_embedding?: string | null
          skills_roles_industries_embedding?: string | null
          summary_embedding?: string | null
          updated_at?: string | null
        }
        Update: {
          description_embedding?: string | null
          industries_embedding?: string | null
          job_id?: string
          location_embedding?: string | null
          roles_embedding?: string | null
          skills_embedding?: string | null
          skills_roles_industries_embedding?: string | null
          summary_embedding?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "jobs_embeddings_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: true
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_communications: {
        Row: {
          candidate_id: string | null
          content: string | null
          created_at: string
          created_by: string
          id: string
          metadata: Json | null
          note_type: string | null
          org_client_id: string
          type: string
        }
        Insert: {
          candidate_id?: string | null
          content?: string | null
          created_at?: string
          created_by: string
          id?: string
          metadata?: Json | null
          note_type?: string | null
          org_client_id: string
          type: string
        }
        Update: {
          candidate_id?: string | null
          content?: string | null
          created_at?: string
          created_by?: string
          id?: string
          metadata?: Json | null
          note_type?: string | null
          org_client_id?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_communications_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_communications_org_client_id_fkey"
            columns: ["org_client_id"]
            isOneToOne: false
            referencedRelation: "org_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      linkedin_enrichment: {
        Row: {
          action_code: number | null
          candidate_id: string | null
          created_at: string
          created_by: string | null
          id: string
          job_id: string | null
          linkedin_url: string | null
          metadata: Json | null
          notes: string | null
          org_id: string | null
          source_tags: string[] | null
          status_code: number | null
          type: string | null
        }
        Insert: {
          action_code?: number | null
          candidate_id?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          job_id?: string | null
          linkedin_url?: string | null
          metadata?: Json | null
          notes?: string | null
          org_id?: string | null
          source_tags?: string[] | null
          status_code?: number | null
          type?: string | null
        }
        Update: {
          action_code?: number | null
          candidate_id?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          job_id?: string | null
          linkedin_url?: string | null
          metadata?: Json | null
          notes?: string | null
          org_id?: string | null
          source_tags?: string[] | null
          status_code?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "linkedin_enrichment_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "linkedin_enrichment_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "linkedin_enrichment_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      notif_upload: {
        Row: {
          created_at: string
          created_by: string | null
          email: string | null
          full_name: string | null
          id: string
          job_fork_id: string | null
          job_id: string | null
          metadata: Json | null
          org_id: string | null
          phone: string | null
          response_data: Json | null
          resume_url: string | null
          status_code: number | null
          update_data: Json | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          job_fork_id?: string | null
          job_id?: string | null
          metadata?: Json | null
          org_id?: string | null
          phone?: string | null
          response_data?: Json | null
          resume_url?: string | null
          status_code?: number | null
          update_data?: Json | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          job_fork_id?: string | null
          job_id?: string | null
          metadata?: Json | null
          org_id?: string | null
          phone?: string | null
          response_data?: Json | null
          resume_url?: string | null
          status_code?: number | null
          update_data?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notif_upload_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notif_upload_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          message: string | null
          metadata: Json | null
          read_at: string | null
          recipient_id: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          message?: string | null
          metadata?: Json | null
          read_at?: string | null
          recipient_id?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          message?: string | null
          metadata?: Json | null
          read_at?: string | null
          recipient_id?: string | null
          type?: string | null
        }
        Relationships: []
      }
      org_client_requisitions: {
        Row: {
          converted_revenue: number | null
          created_at: string
          id: string
          job_id: string | null
          org_client_id: string | null
          potential_revenue: number | null
          primary_contact_id: string | null
          primary_owner_id: string | null
          priority: number | null
          secondary_contact_id: string | null
          secondary_owner_id: string | null
          title: string | null
        }
        Insert: {
          converted_revenue?: number | null
          created_at?: string
          id?: string
          job_id?: string | null
          org_client_id?: string | null
          potential_revenue?: number | null
          primary_contact_id?: string | null
          primary_owner_id?: string | null
          priority?: number | null
          secondary_contact_id?: string | null
          secondary_owner_id?: string | null
          title?: string | null
        }
        Update: {
          converted_revenue?: number | null
          created_at?: string
          id?: string
          job_id?: string | null
          org_client_id?: string | null
          potential_revenue?: number | null
          primary_contact_id?: string | null
          primary_owner_id?: string | null
          priority?: number | null
          secondary_contact_id?: string | null
          secondary_owner_id?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "org_client_requisitions_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_client_requisitions_org_client_id_fkey"
            columns: ["org_client_id"]
            isOneToOne: false
            referencedRelation: "org_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_client_requisitions_primary_contact_id_fkey"
            columns: ["primary_contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_client_requisitions_primary_owner_id_fkey"
            columns: ["primary_owner_id"]
            isOneToOne: false
            referencedRelation: "org_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_client_requisitions_secondary_contact_id_fkey"
            columns: ["secondary_contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_client_requisitions_secondary_owner_id_fkey"
            columns: ["secondary_owner_id"]
            isOneToOne: false
            referencedRelation: "org_members"
            referencedColumns: ["id"]
          },
        ]
      }
      org_client_users: {
        Row: {
          candidate_id: string | null
          client_org_member_id: string | null
          contact_current_role: string | null
          contact_email: string | null
          contact_full_name: string | null
          contact_linkedin_url: string | null
          contact_notes: string | null
          contact_phone: string | null
          contact_secondary_email: string | null
          contact_secondary_phone: string | null
          created_at: string
          created_by: string | null
          id: string
          is_primary: boolean | null
          org_client_id: string
          org_member_id: string | null
          relationship_owner: string | null
          relationship_type: string
          updated_at: string
        }
        Insert: {
          candidate_id?: string | null
          client_org_member_id?: string | null
          contact_current_role?: string | null
          contact_email?: string | null
          contact_full_name?: string | null
          contact_linkedin_url?: string | null
          contact_notes?: string | null
          contact_phone?: string | null
          contact_secondary_email?: string | null
          contact_secondary_phone?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          is_primary?: boolean | null
          org_client_id: string
          org_member_id?: string | null
          relationship_owner?: string | null
          relationship_type?: string
          updated_at?: string
        }
        Update: {
          candidate_id?: string | null
          client_org_member_id?: string | null
          contact_current_role?: string | null
          contact_email?: string | null
          contact_full_name?: string | null
          contact_linkedin_url?: string | null
          contact_notes?: string | null
          contact_phone?: string | null
          contact_secondary_email?: string | null
          contact_secondary_phone?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          is_primary?: boolean | null
          org_client_id?: string
          org_member_id?: string | null
          relationship_owner?: string | null
          relationship_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "org_client_users_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_client_users_org_client_id_fkey"
            columns: ["org_client_id"]
            isOneToOne: false
            referencedRelation: "org_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_client_users_org_member_id_fkey"
            columns: ["org_member_id"]
            isOneToOne: false
            referencedRelation: "org_members"
            referencedColumns: ["id"]
          },
        ]
      }
      org_clients: {
        Row: {
          added_by: string | null
          agreement_start_date: string | null
          bussiness_templete: Json | null
          bussiness_type: string[] | null
          client_id: string | null
          client_id_new: string | null
          closed_revenue: number | null
          created_at: string
          date_of_closing: string | null
          engagement: number | null
          id: string
          legal_entity_name: string | null
          metadata_input: Json | null
          modified_at: string | null
          notes: Json | null
          org_id: string | null
          originator: string | null
          owner: string | null
          primary_workspace: string | null
          priority: number | null
          revenue_currency: string | null
          revenue_percentage: number | null
          stage_code: number | null
          status: string | null
          tags: string[] | null
          unrealized_revenue: number | null
          updated_at: string | null
        }
        Insert: {
          added_by?: string | null
          agreement_start_date?: string | null
          bussiness_templete?: Json | null
          bussiness_type?: string[] | null
          client_id?: string | null
          client_id_new?: string | null
          closed_revenue?: number | null
          created_at?: string
          date_of_closing?: string | null
          engagement?: number | null
          id?: string
          legal_entity_name?: string | null
          metadata_input?: Json | null
          modified_at?: string | null
          notes?: Json | null
          org_id?: string | null
          originator?: string | null
          owner?: string | null
          primary_workspace?: string | null
          priority?: number | null
          revenue_currency?: string | null
          revenue_percentage?: number | null
          stage_code?: number | null
          status?: string | null
          tags?: string[] | null
          unrealized_revenue?: number | null
          updated_at?: string | null
        }
        Update: {
          added_by?: string | null
          agreement_start_date?: string | null
          bussiness_templete?: Json | null
          bussiness_type?: string[] | null
          client_id?: string | null
          client_id_new?: string | null
          closed_revenue?: number | null
          created_at?: string
          date_of_closing?: string | null
          engagement?: number | null
          id?: string
          legal_entity_name?: string | null
          metadata_input?: Json | null
          modified_at?: string | null
          notes?: Json | null
          org_id?: string | null
          originator?: string | null
          owner?: string | null
          primary_workspace?: string | null
          priority?: number | null
          revenue_currency?: string | null
          revenue_percentage?: number | null
          stage_code?: number | null
          status?: string | null
          tags?: string[] | null
          unrealized_revenue?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "org_clients_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_clients_client_id_new_fkey"
            columns: ["client_id_new"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_clients_client_id_new_fkey"
            columns: ["client_id_new"]
            isOneToOne: false
            referencedRelation: "company_enriched_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_clients_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_clients_primary_workspace_fkey"
            columns: ["primary_workspace"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      org_crm_stages: {
        Row: {
          created_at: string
          created_by: string | null
          crm_stage_code: number | null
          id: string
          left_at: string | null
          org_client_id: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          crm_stage_code?: number | null
          id?: string
          left_at?: string | null
          org_client_id?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          crm_stage_code?: number | null
          id?: string
          left_at?: string | null
          org_client_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "org_crm_stages_org_client_id_fkey"
            columns: ["org_client_id"]
            isOneToOne: false
            referencedRelation: "org_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      org_drive_subscriptions: {
        Row: {
          created_at: string
          created_by: string | null
          id: number
          org_id: string | null
          placement_drive_id: string
          workspace_id: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: number
          org_id?: string | null
          placement_drive_id: string
          workspace_id?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: number
          org_id?: string | null
          placement_drive_id?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "org_drive_subscriptions_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_drive_subscriptions_placement_drive_id_fkey"
            columns: ["placement_drive_id"]
            isOneToOne: false
            referencedRelation: "placement_drives"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_drive_subscriptions_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      org_members: {
        Row: {
          created_at: string
          id: string
          org_id: string
          role: string | null
          super_team: string | null
          tags: string[] | null
          team: string | null
          user_id: string
          user_role: number | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          org_id: string
          role?: string | null
          super_team?: string | null
          tags?: string[] | null
          team?: string | null
          user_id: string
          user_role?: number | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          org_id?: string
          role?: string | null
          super_team?: string | null
          tags?: string[] | null
          team?: string | null
          user_id?: string
          user_role?: number | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "org_members_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "org_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      org_sourcers: {
        Row: {
          created_at: string
          email: string
          id: string
          org_id: string
          sourcer_name: string
          type: number | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          org_id: string
          sourcer_name: string
          type?: number | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          org_id?: string
          sourcer_name?: string
          type?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "org_sourcers_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      org_vendors: {
        Row: {
          created_at: string
          email: string
          id: string
          org_id: string
          type: number | null
          vendor_name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          org_id: string
          type?: number | null
          vendor_name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          org_id?: string
          type?: number | null
          vendor_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "org_vendors_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      org_whatsapp_integration: {
        Row: {
          connected_number: string | null
          created_at: string
          created_by: string | null
          id: string
          metadata: Json[] | null
          org_id: string
          qr_code: Json | null
          qr_reqested: boolean
          status_code: number | null
          updated_at: string | null
        }
        Insert: {
          connected_number?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json[] | null
          org_id: string
          qr_code?: Json | null
          qr_reqested?: boolean
          status_code?: number | null
          updated_at?: string | null
        }
        Update: {
          connected_number?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          metadata?: Json[] | null
          org_id?: string
          qr_code?: Json | null
          qr_reqested?: boolean
          status_code?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "org_whatsapp_integration_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: true
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      orgs: {
        Row: {
          created_at: string
          created_by: string | null
          credits: number | null
          crm_stage_mapping: Json | null
          current_plan: number | null
          description: string | null
          domain: string | null
          general_metadata: Json[] | null
          id: string
          job_board: string | null
          linkedin_metadata: Json[] | null
          linkedin_url: string | null
          location: string | null
          name: string
          org_logo: string | null
          org_type: string | null
          parent_id: string | null
          tagline: string | null
          website: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          credits?: number | null
          crm_stage_mapping?: Json | null
          current_plan?: number | null
          description?: string | null
          domain?: string | null
          general_metadata?: Json[] | null
          id?: string
          job_board?: string | null
          linkedin_metadata?: Json[] | null
          linkedin_url?: string | null
          location?: string | null
          name: string
          org_logo?: string | null
          org_type?: string | null
          parent_id?: string | null
          tagline?: string | null
          website?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          credits?: number | null
          crm_stage_mapping?: Json | null
          current_plan?: number | null
          description?: string | null
          domain?: string | null
          general_metadata?: Json[] | null
          id?: string
          job_board?: string | null
          linkedin_metadata?: Json[] | null
          linkedin_url?: string | null
          location?: string | null
          name?: string
          org_logo?: string | null
          org_type?: string | null
          parent_id?: string | null
          tagline?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orgs_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      people: {
        Row: {
          achivements: string | null
          auid_id: string | null
          country_code: string | null
          created_at: string | null
          created_by: string | null
          current_company: string | null
          current_title: string[] | null
          data_source: string | null
          experience: number | null
          first_name: string | null
          full_name: string | null
          github: string | null
          highest_stage_code: number | null
          id: string
          industries: string[] | null
          job_function: string[] | null
          last_job_changed_at: string | null
          last_name: string | null
          latest_movement_at: string | null
          linkedin: string | null
          linkedin_metadata: Json[] | null
          linkedin_updated_at: string | null
          locations: string[] | null
          modified_at: string | null
          modified_by: string | null
          other_emails: string[] | null
          other_phones: string[] | null
          past_companies: string[] | null
          past_titles: string[] | null
          pfp_public: string | null
          portfolio: string[] | null
          primary_email: string | null
          primary_phone: string | null
          resume_key: string | null
          resume_struct: Json | null
          resume_text: string | null
          schools: string[] | null
          search_hit_rate: number | null
          secondary_email: string | null
          secondary_phone: string | null
          seniority_level: string[] | null
          skills: string[] | null
          source_tags: string[] | null
          summary: string | null
          tags: string[] | null
          tenure: Json | null
          whatsapp_phone: string | null
          years_at_current_company: number | null
          years_in_current_position: number | null
          years_of_experience: number | null
        }
        Insert: {
          achivements?: string | null
          auid_id?: string | null
          country_code?: string | null
          created_at?: string | null
          created_by?: string | null
          current_company?: string | null
          current_title?: string[] | null
          data_source?: string | null
          experience?: number | null
          first_name?: string | null
          full_name?: string | null
          github?: string | null
          highest_stage_code?: number | null
          id?: string
          industries?: string[] | null
          job_function?: string[] | null
          last_job_changed_at?: string | null
          last_name?: string | null
          latest_movement_at?: string | null
          linkedin?: string | null
          linkedin_metadata?: Json[] | null
          linkedin_updated_at?: string | null
          locations?: string[] | null
          modified_at?: string | null
          modified_by?: string | null
          other_emails?: string[] | null
          other_phones?: string[] | null
          past_companies?: string[] | null
          past_titles?: string[] | null
          pfp_public?: string | null
          portfolio?: string[] | null
          primary_email?: string | null
          primary_phone?: string | null
          resume_key?: string | null
          resume_struct?: Json | null
          resume_text?: string | null
          schools?: string[] | null
          search_hit_rate?: number | null
          secondary_email?: string | null
          secondary_phone?: string | null
          seniority_level?: string[] | null
          skills?: string[] | null
          source_tags?: string[] | null
          summary?: string | null
          tags?: string[] | null
          tenure?: Json | null
          whatsapp_phone?: string | null
          years_at_current_company?: number | null
          years_in_current_position?: number | null
          years_of_experience?: number | null
        }
        Update: {
          achivements?: string | null
          auid_id?: string | null
          country_code?: string | null
          created_at?: string | null
          created_by?: string | null
          current_company?: string | null
          current_title?: string[] | null
          data_source?: string | null
          experience?: number | null
          first_name?: string | null
          full_name?: string | null
          github?: string | null
          highest_stage_code?: number | null
          id?: string
          industries?: string[] | null
          job_function?: string[] | null
          last_job_changed_at?: string | null
          last_name?: string | null
          latest_movement_at?: string | null
          linkedin?: string | null
          linkedin_metadata?: Json[] | null
          linkedin_updated_at?: string | null
          locations?: string[] | null
          modified_at?: string | null
          modified_by?: string | null
          other_emails?: string[] | null
          other_phones?: string[] | null
          past_companies?: string[] | null
          past_titles?: string[] | null
          pfp_public?: string | null
          portfolio?: string[] | null
          primary_email?: string | null
          primary_phone?: string | null
          resume_key?: string | null
          resume_struct?: Json | null
          resume_text?: string | null
          schools?: string[] | null
          search_hit_rate?: number | null
          secondary_email?: string | null
          secondary_phone?: string | null
          seniority_level?: string[] | null
          skills?: string[] | null
          source_tags?: string[] | null
          summary?: string | null
          tags?: string[] | null
          tenure?: Json | null
          whatsapp_phone?: string | null
          years_at_current_company?: number | null
          years_in_current_position?: number | null
          years_of_experience?: number | null
        }
        Relationships: []
      }
      placement_drives: {
        Row: {
          assessment_metadata: Json[] | null
          assessment_type: string | null
          assessment_url: string | null
          created_at: string
          created_by: string | null
          deadline: string | null
          description: string
          id: string
          location: string | null
          parent_job_fork_id: string | null
          tags: string | null
          title: string
        }
        Insert: {
          assessment_metadata?: Json[] | null
          assessment_type?: string | null
          assessment_url?: string | null
          created_at?: string
          created_by?: string | null
          deadline?: string | null
          description: string
          id?: string
          location?: string | null
          parent_job_fork_id?: string | null
          tags?: string | null
          title: string
        }
        Update: {
          assessment_metadata?: Json[] | null
          assessment_type?: string | null
          assessment_url?: string | null
          created_at?: string
          created_by?: string | null
          deadline?: string | null
          description?: string
          id?: string
          location?: string | null
          parent_job_fork_id?: string | null
          tags?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "placement_drives_parent_job_fork_id_fkey"
            columns: ["parent_job_fork_id"]
            isOneToOne: false
            referencedRelation: "job_forks"
            referencedColumns: ["id"]
          },
        ]
      }
      recall_applicant_executions: {
        Row: {
          applicant_id: string | null
          created_at: string
          created_by: string | null
          evaluate: boolean | null
          execution_id: string | null
          id: string
          modified_at: string | null
          modified_by: string | null
          org_id: string | null
          people_id: string | null
          recording_payload: Json | null
          response_data: Json | null
          stage_code: number | null
          status_code: number | null
          tracking_id: string | null
          transcript_payload: Json | null
        }
        Insert: {
          applicant_id?: string | null
          created_at?: string
          created_by?: string | null
          evaluate?: boolean | null
          execution_id?: string | null
          id?: string
          modified_at?: string | null
          modified_by?: string | null
          org_id?: string | null
          people_id?: string | null
          recording_payload?: Json | null
          response_data?: Json | null
          stage_code?: number | null
          status_code?: number | null
          tracking_id?: string | null
          transcript_payload?: Json | null
        }
        Update: {
          applicant_id?: string | null
          created_at?: string
          created_by?: string | null
          evaluate?: boolean | null
          execution_id?: string | null
          id?: string
          modified_at?: string | null
          modified_by?: string | null
          org_id?: string | null
          people_id?: string | null
          recording_payload?: Json | null
          response_data?: Json | null
          stage_code?: number | null
          status_code?: number | null
          tracking_id?: string | null
          transcript_payload?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "recall_applicant_executions_applicant_id_fkey"
            columns: ["applicant_id"]
            isOneToOne: false
            referencedRelation: "candidate_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recall_applicant_executions_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      requisitions: {
        Row: {
          assigned_to: string | null
          charge_by: string | null
          client_id: string | null
          contact_id: string | null
          created_at: string | null
          created_by: string | null
          currency: string | null
          date_of_closing: string | null
          description: string | null
          id: string
          linked_job: string | null
          location: string | null
          max_yoe: number | null
          min_yoe: number | null
          notice: number | null
          number_of_hires: number | null
          org_id: string | null
          owner: string | null
          payment_on: string | null
          priority: number | null
          salary_currency: string | null
          salary_max: number | null
          salary_min: number | null
          skills: string[] | null
          status: number | null
          tags: string[] | null
          take_rate: number | null
          title: string
          uploaded_files: string[] | null
          work_mode: string | null
          work_type: string[] | null
          workspace_id: string | null
        }
        Insert: {
          assigned_to?: string | null
          charge_by?: string | null
          client_id?: string | null
          contact_id?: string | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          date_of_closing?: string | null
          description?: string | null
          id?: string
          linked_job?: string | null
          location?: string | null
          max_yoe?: number | null
          min_yoe?: number | null
          notice?: number | null
          number_of_hires?: number | null
          org_id?: string | null
          owner?: string | null
          payment_on?: string | null
          priority?: number | null
          salary_currency?: string | null
          salary_max?: number | null
          salary_min?: number | null
          skills?: string[] | null
          status?: number | null
          tags?: string[] | null
          take_rate?: number | null
          title: string
          uploaded_files?: string[] | null
          work_mode?: string | null
          work_type?: string[] | null
          workspace_id?: string | null
        }
        Update: {
          assigned_to?: string | null
          charge_by?: string | null
          client_id?: string | null
          contact_id?: string | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          date_of_closing?: string | null
          description?: string | null
          id?: string
          linked_job?: string | null
          location?: string | null
          max_yoe?: number | null
          min_yoe?: number | null
          notice?: number | null
          number_of_hires?: number | null
          org_id?: string | null
          owner?: string | null
          payment_on?: string | null
          priority?: number | null
          salary_currency?: string | null
          salary_max?: number | null
          salary_min?: number | null
          skills?: string[] | null
          status?: number | null
          tags?: string[] | null
          take_rate?: number | null
          title?: string
          uploaded_files?: string[] | null
          work_mode?: string | null
          work_type?: string[] | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "requisitions_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requisitions_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requisitions_linked_job_fkey"
            columns: ["linked_job"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requisitions_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requisitions_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      revenue_book: {
        Row: {
          am_id: string | null
          amount: number | null
          candidate_id: string | null
          category: string | null
          client_id: string | null
          commission_split: Json | null
          created_at: string
          created_by: string | null
          credited_at: string | null
          currency: string | null
          fee: Json | null
          id: string
          invoice_at: string | null
          job_id: string | null
          org_id: string | null
          poc_id: string | null
          qty: number | null
          status: number | null
        }
        Insert: {
          am_id?: string | null
          amount?: number | null
          candidate_id?: string | null
          category?: string | null
          client_id?: string | null
          commission_split?: Json | null
          created_at?: string
          created_by?: string | null
          credited_at?: string | null
          currency?: string | null
          fee?: Json | null
          id?: string
          invoice_at?: string | null
          job_id?: string | null
          org_id?: string | null
          poc_id?: string | null
          qty?: number | null
          status?: number | null
        }
        Update: {
          am_id?: string | null
          amount?: number | null
          candidate_id?: string | null
          category?: string | null
          client_id?: string | null
          commission_split?: Json | null
          created_at?: string
          created_by?: string | null
          credited_at?: string | null
          currency?: string | null
          fee?: Json | null
          id?: string
          invoice_at?: string | null
          job_id?: string | null
          org_id?: string | null
          poc_id?: string | null
          qty?: number | null
          status?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "revenue_book_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "revenue_book_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "revenue_book_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "company_enriched_data"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "revenue_book_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "revenue_book_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      revspot_executions: {
        Row: {
          candidate_id: string | null
          created_at: string
          created_by: string | null
          execution_id: string
          id: string
          linkedin_url: string | null
          modified_at: string | null
          org_id: string | null
          response_data: Json | null
          status_code: number | null
          success: boolean | null
        }
        Insert: {
          candidate_id?: string | null
          created_at?: string
          created_by?: string | null
          execution_id: string
          id?: string
          linkedin_url?: string | null
          modified_at?: string | null
          org_id?: string | null
          response_data?: Json | null
          status_code?: number | null
          success?: boolean | null
        }
        Update: {
          candidate_id?: string | null
          created_at?: string
          created_by?: string | null
          execution_id?: string
          id?: string
          linkedin_url?: string | null
          modified_at?: string | null
          org_id?: string | null
          response_data?: Json | null
          status_code?: number | null
          success?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "revspot_executions_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      sh_interviews: {
        Row: {
          active_from: string | null
          created_at: string
          created_by: string | null
          id: string
          job_id: string | null
          metadata: Json | null
          stage_code: number | null
          title: string | null
          valid_till: string | null
        }
        Insert: {
          active_from?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          job_id?: string | null
          metadata?: Json | null
          stage_code?: number | null
          title?: string | null
          valid_till?: string | null
        }
        Update: {
          active_from?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          job_id?: string | null
          metadata?: Json | null
          stage_code?: number | null
          title?: string | null
          valid_till?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sh_interviews_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      templates_new: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          org_id: string | null
          templates: Json | null
          title: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          org_id?: string | null
          templates?: Json | null
          title: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          org_id?: string | null
          templates?: Json | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "templates_new_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      url_access_logs: {
        Row: {
          accessed_at: string | null
          email: string | null
          id: string
          ip_address: unknown
          permission_used:
            | Database["public"]["Enums"]["url_access_permission"]
            | null
          referer: string | null
          url_id: string | null
          user_agent: string | null
        }
        Insert: {
          accessed_at?: string | null
          email?: string | null
          id?: string
          ip_address?: unknown
          permission_used?:
            | Database["public"]["Enums"]["url_access_permission"]
            | null
          referer?: string | null
          url_id?: string | null
          user_agent?: string | null
        }
        Update: {
          accessed_at?: string | null
          email?: string | null
          id?: string
          ip_address?: unknown
          permission_used?:
            | Database["public"]["Enums"]["url_access_permission"]
            | null
          referer?: string | null
          url_id?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "url_access_logs_url_id_fkey"
            columns: ["url_id"]
            isOneToOne: false
            referencedRelation: "url_shortener"
            referencedColumns: ["id"]
          },
        ]
      }
      url_access_permissions: {
        Row: {
          accessed_at: string | null
          created_at: string | null
          email: string
          id: string
          is_verified: boolean | null
          otp_code: string | null
          otp_expires_at: string | null
          permission: Database["public"]["Enums"]["url_access_permission"]
          url_id: string | null
        }
        Insert: {
          accessed_at?: string | null
          created_at?: string | null
          email: string
          id?: string
          is_verified?: boolean | null
          otp_code?: string | null
          otp_expires_at?: string | null
          permission?: Database["public"]["Enums"]["url_access_permission"]
          url_id?: string | null
        }
        Update: {
          accessed_at?: string | null
          created_at?: string | null
          email?: string
          id?: string
          is_verified?: boolean | null
          otp_code?: string | null
          otp_expires_at?: string | null
          permission?: Database["public"]["Enums"]["url_access_permission"]
          url_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "url_access_permissions_url_id_fkey"
            columns: ["url_id"]
            isOneToOne: false
            referencedRelation: "url_shortener"
            referencedColumns: ["id"]
          },
        ]
      }
      url_shortener: {
        Row: {
          access_control:
            | Database["public"]["Enums"]["access_control_type"]
            | null
          access_count: number | null
          created_at: string | null
          created_by: string
          expires_at: string | null
          id: string
          last_accessed_at: string | null
          org_id: string | null
          original_url: string
          resource_id: string
          resource_type: string
          sharing_metadata: Json | null
          short_code: string
          status: Database["public"]["Enums"]["url_status"] | null
        }
        Insert: {
          access_control?:
            | Database["public"]["Enums"]["access_control_type"]
            | null
          access_count?: number | null
          created_at?: string | null
          created_by: string
          expires_at?: string | null
          id?: string
          last_accessed_at?: string | null
          org_id?: string | null
          original_url: string
          resource_id: string
          resource_type: string
          sharing_metadata?: Json | null
          short_code: string
          status?: Database["public"]["Enums"]["url_status"] | null
        }
        Update: {
          access_control?:
            | Database["public"]["Enums"]["access_control_type"]
            | null
          access_count?: number | null
          created_at?: string | null
          created_by?: string
          expires_at?: string | null
          id?: string
          last_accessed_at?: string | null
          org_id?: string | null
          original_url?: string
          resource_id?: string
          resource_type?: string
          sharing_metadata?: Json | null
          short_code?: string
          status?: Database["public"]["Enums"]["url_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "url_shortener_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      vapi_call_logs: {
        Row: {
          created_at: string
          ended_at: string | null
          ended_reason: string | null
          extracted_vars: Json | null
          id: string
          metadata: Json | null
          phone_number_id: string | null
          recording_url: string | null
          started_at: string | null
          status: string | null
          summary: string | null
          transcript: string | null
          updated_at: string | null
          user_name: string | null
          user_number: string | null
          vapi_id: string | null
        }
        Insert: {
          created_at?: string
          ended_at?: string | null
          ended_reason?: string | null
          extracted_vars?: Json | null
          id?: string
          metadata?: Json | null
          phone_number_id?: string | null
          recording_url?: string | null
          started_at?: string | null
          status?: string | null
          summary?: string | null
          transcript?: string | null
          updated_at?: string | null
          user_name?: string | null
          user_number?: string | null
          vapi_id?: string | null
        }
        Update: {
          created_at?: string
          ended_at?: string | null
          ended_reason?: string | null
          extracted_vars?: Json | null
          id?: string
          metadata?: Json | null
          phone_number_id?: string | null
          recording_url?: string | null
          started_at?: string | null
          status?: string | null
          summary?: string | null
          transcript?: string | null
          updated_at?: string | null
          user_name?: string | null
          user_number?: string | null
          vapi_id?: string | null
        }
        Relationships: []
      }
      whatsapp_comm: {
        Row: {
          candidate_id: string | null
          candidate_phone: string | null
          created_at: string
          created_by: string | null
          id: string
          message: string | null
          org_id: string | null
          recruiter_phone: string | null
          status_code: number | null
        }
        Insert: {
          candidate_id?: string | null
          candidate_phone?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          message?: string | null
          org_id?: string | null
          recruiter_phone?: string | null
          status_code?: number | null
        }
        Update: {
          candidate_id?: string | null
          candidate_phone?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          message?: string | null
          org_id?: string | null
          recruiter_phone?: string | null
          status_code?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "whatsapp_comm_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "whatsapp_comm_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
      workspace_members: {
        Row: {
          created_at: string | null
          id: string
          role: string | null
          user_id: string
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: string | null
          user_id?: string
          workspace_id?: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string | null
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workspace_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspaces: {
        Row: {
          business_unit: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          identifier: string | null
          name: string | null
          org_id: string | null
          status: string | null
        }
        Insert: {
          business_unit?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          identifier?: string | null
          name?: string | null
          org_id?: string | null
          status?: string | null
        }
        Update: {
          business_unit?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          identifier?: string | null
          name?: string | null
          org_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workspaces_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "orgs"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      company_enriched_data: {
        Row: {
          acquisition_status: string | null
          company_type: string | null
          current_headcount: number | null
          data_enriched_at: string | null
          data_quality_score: number | null
          description: string | null
          domain: string | null
          employee_count_range: string | null
          founded_year: string | null
          funding_status: string | null
          glassdoor_rating: number | null
          growth_category: string | null
          headcount_growth_yoy: number | null
          hiring_status: string | null
          hq_city: string | null
          hq_country: string | null
          hq_street_address: string | null
          id: string | null
          last_funding_date: string | null
          last_funding_round_type: string | null
          latest_valuation_usd: number | null
          monthly_website_visitors: number | null
          name: string | null
          total_funding_usd: number | null
          total_job_openings: number | null
          website: string | null
        }
        Insert: {
          acquisition_status?: string | null
          company_type?: string | null
          current_headcount?: number | null
          data_enriched_at?: string | null
          data_quality_score?: number | null
          description?: string | null
          domain?: string | null
          employee_count_range?: string | null
          founded_year?: string | null
          funding_status?: never
          glassdoor_rating?: number | null
          growth_category?: never
          headcount_growth_yoy?: number | null
          hiring_status?: never
          hq_city?: string | null
          hq_country?: string | null
          hq_street_address?: string | null
          id?: string | null
          last_funding_date?: string | null
          last_funding_round_type?: string | null
          latest_valuation_usd?: number | null
          monthly_website_visitors?: number | null
          name?: string | null
          total_funding_usd?: number | null
          total_job_openings?: number | null
          website?: string | null
        }
        Update: {
          acquisition_status?: string | null
          company_type?: string | null
          current_headcount?: number | null
          data_enriched_at?: string | null
          data_quality_score?: number | null
          description?: string | null
          domain?: string | null
          employee_count_range?: string | null
          founded_year?: string | null
          funding_status?: never
          glassdoor_rating?: number | null
          growth_category?: never
          headcount_growth_yoy?: number | null
          hiring_status?: never
          hq_city?: string | null
          hq_country?: string | null
          hq_street_address?: string | null
          id?: string | null
          last_funding_date?: string | null
          last_funding_round_type?: string | null
          latest_valuation_usd?: number | null
          monthly_website_visitors?: number | null
          name?: string | null
          total_funding_usd?: number | null
          total_job_openings?: number | null
          website?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      ai_score_rank: {
        Args: {
          job_id: string
          job_weights?: Json
          status: string
          workspace_id: string
        }
        Returns: {
          candidate_id: string
          rank: number
          weighted_average_score: number
        }[]
      }
      copy_auth_users_to_candidates: { Args: never; Returns: number }
      create_demo_workspace_and_copy_jobs: {
        Args: { new_workspace_id: string; org_id: string }
        Returns: undefined
      }
      create_edge_function:
        | { Args: { job_id: string }; Returns: Json }
        | { Args: never; Returns: Json }
      create_unique_short_code: { Args: never; Returns: string }
      filter_candidates: {
        Args: {
          p_filters?: Json
          p_job_fork_id?: string
          p_level: string
          p_limit?: number
          p_org_id?: string
          p_status?: number
        }
        Returns: Json[]
      }
      filter_candidates_openai: {
        Args: {
          p_filters?: Json
          p_job_fork_id?: string
          p_level: string
          p_limit?: number
          p_org_id?: string
          p_status?: string
        }
        Returns: Json[]
      }
      filter_jobs_openai: {
        Args: {
          p_filters?: Json
          p_job_board?: string
          p_limit?: number
          p_org_id?: string
        }
        Returns: Json[]
      }
      gen_workspace_identifiers: { Args: never; Returns: undefined }
      generate_short_code: { Args: never; Returns: string }
      get_average_time_to_hire: {
        Args: {
          end_date: string
          job_fork_ids: string[]
          recruiter_ids: string[]
          start_date: string
        }
        Returns: number
      }
      get_average_time_to_hire_new: {
        Args: {
          end_date: string
          job_fork_ids: string[]
          recruiter_ids: string[]
          start_date: string
        }
        Returns: number
      }
      get_candidates_count_by_job_ids:
        | {
            Args: { job_ids: string[]; workspace_id: string }
            Returns: {
              id: string
              status_summary: Json
            }[]
          }
        | {
            Args: { job_ids: string[] }
            Returns: {
              id: string
              last_candidate_moved: string
              status_summary: Json
            }[]
          }
      get_job_details: { Args: { id: string }; Returns: Json }
      get_jobs: {
        Args: { workspace_id: string }
        Returns: Database["public"]["CompositeTypes"]["job_fork_view"][]
        SetofOptions: {
          from: "*"
          to: "job_fork_view"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_members: {
        Args: { oid?: string; wid?: string; with_org_members?: boolean }
        Returns: {
          created_at: string
          email: string
          id: string
          invite_status: Database["public"]["Enums"]["invite_status"]
          raw_user_meta_data: Json
          role: Database["public"]["Enums"]["role"]
        }[]
      }
      get_pipeline_event_date_wise: {
        Args: {
          end_date: string
          job_fork_ids: string[]
          start_date: string
          status: string
        }
        Returns: Json
      }
      get_pipeline_event_date_wise_new: {
        Args: {
          end_date: string
          job_fork_ids: string[]
          recruiter_ids: string[]
          start_date: string
          status: string
        }
        Returns: Json
      }
      get_pipeline_stats_new: {
        Args: {
          end_date: string
          job_fork_ids: string[]
          recruiter_ids: string[]
          start_date: string
        }
        Returns: {
          status: string
          total: number
        }[]
      }
      get_user_by_id: {
        Args: { user_id: string }
        Returns: {
          email: string
          id: string
          raw_user_meta_data: Json
        }[]
      }
      get_users: { Args: { user_ids: string[] }; Returns: Json[] }
      get_users_basic_info: {
        Args: { user_ids: string[] }
        Returns: {
          email: string
          full_name: string
          id: string
          profile_picture: string
        }[]
      }
      get_workspace_members: {
        Args: { uid: string }
        Returns: {
          created_at: string
          email: string
          id: string
          invite_status: Database["public"]["Enums"]["invite_status"]
          raw_user_meta_data: Json
          role: Database["public"]["Enums"]["role"]
        }[]
      }
      hybrid_filter_search: {
        Args: {
          field: string
          options?: Json
          query: string
          query_embedding: string
        }
        Returns: {
          id: number
          score: number
          value: string
        }[]
      }
      log_average_evaluations: {
        Args: { p_job_id: string }
        Returns: undefined
      }
      match_filters_similarity: {
        Args: {
          match_count?: number
          match_threshold?: number
          query_embedding: string
          table_name: string
        }
        Returns: {
          similarity: number
          value: string
        }[]
      }
      match_skills: {
        Args: {
          match_count: number
          match_threshold: number
          query_embedding: string
        }
        Returns: {
          id: string
          similarity: number
        }[]
      }
      migrate_json_to_columns: { Args: never; Returns: number }
      rank_candidates: {
        Args: {
          job_id: string
          job_weights?: Json
          status: string
          workspace_id: string
        }
        Returns: {
          candidate_id: string
          rank: number
          weighted_average_score: number
        }[]
      }
      rank_candidates_ai_phone_calls: {
        Args: {
          job_id: string
          job_weights?: Json
          stage_id: string
          workspace_id?: string
        }
        Returns: {
          applicant_id: string
          rank: number
          weighted_average_score: number
        }[]
      }
      rank_candidates_v1: {
        Args: {
          job_id: string
          job_weights?: Json
          stage: number
          workspace_id: string
        }
        Returns: {
          candidate_id: string
          rank: number
          weighted_average_score: number
        }[]
      }
      recompute_job_evaluations: {
        Args: { p_job_id: string }
        Returns: undefined
      }
      search_candidates: {
        Args: {
          p_current_company?: string[]
          p_exclude_current_company?: string[]
          p_first_name?: string
          p_industries?: string[]
          p_keyword?: string
          p_last_name?: string
          p_limit: number
          p_max_experience?: number
          p_min_experience?: number
          p_past_companies?: string[]
          p_regions?: string[]
          p_schools?: string[]
          p_titles?: string[]
        }
        Returns: {
          added_by: string
          awards: Json[]
          certifications: Json[]
          created_at: string
          current_company: string
          current_company_public_id: string
          current_job_title: string
          current_location: string
          custom_fields: Json
          date_of_birth: string
          disability_status: string
          educations: Json[]
          emails: string[]
          embedding: string
          ethnicity: string
          full_name: string
          gender: string
          github: string
          id: string
          industries: string[]
          interests: string[]
          is_public: boolean
          languages: string[]
          last_contacted_at: string
          linkedin: string
          linkedin_public_id: string
          notice_period: string
          org_id: string
          past_companies: string[]
          personal_pronoun: string
          pfp_public: string
          phones: string[]
          portfolio: string
          preferred_communication_method: string
          publications: Json[]
          salary_expectation_max: number
          salary_expectation_min: number
          schools: string[]
          skills: string[]
          source: string
          source_details: Json
          status: string
          summary: string
          twitter: string
          updated_at: string
          veteran_status: string
          websites: string[]
          work_authorization_status: string
          work_experiences: Json[]
          years_in_current_position: number
          years_of_experience: number
        }[]
      }
      search_members: {
        Args: { p_org_id: string; p_query: string }
        Returns: {
          created_at: string
          email: string
          id: string
          invite_status: Database["public"]["Enums"]["invite_status"]
          raw_user_meta_data: Json
          role: Database["public"]["Enums"]["role"]
          workspace_id: string
          workspace_name: string
        }[]
      }
      search_user: {
        Args: { p_query: string }
        Returns: {
          email: string
          id: string
          raw_user_meta_data: Json
        }[]
      }
      search_users: {
        Args: { query: string }
        Returns: {
          email: string
          name: string
          user_id: string
        }[]
      }
      search_workspace: {
        Args: { org_id: string; query: string }
        Returns: {
          business_unit: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          identifier: string | null
          name: string | null
          org_id: string | null
          status: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "workspaces"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      semantic_search: {
        Args: {
          limit_count: number
          search_embedding: string
          source_id: string
          threshold: number
        }
        Returns: {
          application_id: string
          similarity: number
        }[]
      }
      update_job_stage_metadata: {
        Args: { p_metadata: Json; p_stage_id: string }
        Returns: {
          created_at: string
          created_by: string | null
          engagement_template: Json[] | null
          evaluation_criteria: Json | null
          evaluation_type: string | null
          id: string
          interviewer: string | null
          job_id: string
          metadata: Json | null
          owner: string | null
          stage: number
          suggested_questions: Json | null
          title: string | null
        }
        SetofOptions: {
          from: "*"
          to: "job_stages"
          isOneToOne: true
          isSetofReturn: false
        }
      }
    }
    Enums: {
      access_control_type: "public" | "email_required" | "otp_required"
      charge_type: "FIXED" | "PERCENTAGE"
      invite_status: "pending" | "accepted" | "rejected"
      role:
        | "admin"
        | "manager"
        | "recruiter"
        | "client"
        | "external"
        | "team_manager"
        | "vendor"
        | "sourcer"
      url_access_permission: "view" | "edit"
      url_status: "active" | "expired" | "revoked"
    }
    CompositeTypes: {
      job_fork_view: {
        id: string | null
        ref_id: string | null
        title: string | null
        application_deadline: string | null
        number_of_hires: number | null
        created_at: string | null
        updated_at: string | null
        role: string | null
        location: string | null
        created_by: string | null
        candidate_engagement_template_id: string | null
        tags: string | null
        job_status: string | null
        approved_by: Json[] | null
        approvers: string[] | null
        hiring_managers: string[] | null
      }
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  pgmq_public: {
    Enums: {},
  },
  public: {
    Enums: {
      access_control_type: ["public", "email_required", "otp_required"],
      charge_type: ["FIXED", "PERCENTAGE"],
      invite_status: ["pending", "accepted", "rejected"],
      role: [
        "admin",
        "manager",
        "recruiter",
        "client",
        "external",
        "team_manager",
        "vendor",
        "sourcer",
      ],
      url_access_permission: ["view", "edit"],
      url_status: ["active", "expired", "revoked"],
    },
  },
} as const
