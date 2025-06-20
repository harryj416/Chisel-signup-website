'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12">
          {/* Cancel Icon */}
          <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Payment Cancelled
          </h1>
          
          <div className="space-y-4 mb-8">
            <p className="text-xl text-gray-300">
              No worries! Your payment was cancelled.
            </p>
            
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-purple-400 mb-3">
                You're still on the waitlist! 🎉
              </h2>
              <p className="text-gray-300 text-left">
                You'll still receive your first AI-powered physique scan totally free when we launch. 
                The pre-order option will remain available if you change your mind.
              </p>
            </div>

            <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
              <p className="text-blue-300 text-sm">
                💡 Remember: You can also invite 5 friends to earn a premium bonus scan for free!
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Link href="/">
              <Button 
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                size="lg"
              >
                Return to Home
              </Button>
            </Link>
            
            <p className="text-sm text-gray-400">
              Questions? Email us at support@chiselapp.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 