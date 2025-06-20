'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { submitEmailToWaitlist } from '@/lib/email'
import { EmailFormData, EmailStatus } from '@/types'

interface EmailFormProps {
  onSubmissionSuccess: (queueData: { queueNumber: number; email: string }) => void
}

export function EmailForm({ onSubmissionSuccess }: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<EmailStatus>('idle')
  const [error, setError] = useState<string | null>(null)

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setError(null)

    try {
      const result = await submitEmailToWaitlist({ email: email.trim() })
      
      if (result.success && result.queueData) {
        setStatus('success')
        onSubmissionSuccess(result.queueData)
      } else {
        setStatus('error')
        setError(result.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setError('Network error. Please check your connection and try again.')
    }
  }

  const isLoading = status === 'loading'

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto lg:mx-0 space-y-4">
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className={`h-12 text-base bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500 ${error ? 'border-red-500' : ''}`}
          aria-label="Email address"
        />
        {error && (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
      
      <Button
        type="submit"
        disabled={isLoading || !email.trim()}
        className="w-full h-12 text-base font-semibold"
        size="lg"
      >
        {isLoading ? 'Claiming your scan...' : 'Claim my free scan'}
      </Button>
    </form>
  )
} 