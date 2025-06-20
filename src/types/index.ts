export interface EmailFormData {
  email: string
}

export interface QueueData {
  queueNumber: number
  email: string
}

export interface EmailSubmissionResult {
  success: boolean
  queueData?: QueueData
  error?: string
}

export type EmailStatus = 'idle' | 'loading' | 'success' | 'error'

export interface ReferralData {
  referralLink: string
  inviteCount: number
  maxInvites: number
} 