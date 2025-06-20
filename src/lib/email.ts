import { EmailFormData, EmailSubmissionResult } from '@/types'

export async function submitEmailToWaitlist(data: EmailFormData): Promise<EmailSubmissionResult> {
  try {
    // PLACEHOLDER-FOR-EMAIL-API
    console.log('Email submission placeholder:', data)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Generate random queue number between 1000-5000
    const queueNumber = Math.floor(Math.random() * 4000) + 1000
    
    return {
      success: true,
      queueData: {
        queueNumber,
        email: data.email
      }
    }
  } catch (error) {
    console.error('Email submission error:', error)
    return {
      success: false,
      error: 'Failed to join waitlist. Please try again.'
    }
  }
}

export function generateReferralLink(email: string): string {
  // PLACEHOLDER-FOR-REFERRAL-LINK-GENERATION
  const encoded = btoa(email).substring(0, 8)
  return `${window.location.origin}?ref=${encoded}`
} 