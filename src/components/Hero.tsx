'use client'

import React from 'react'
import { EmailForm } from './EmailForm'

interface HeroProps {
  onEmailSuccess: (queueData: { queueNumber: number; email: string }) => void
}

export function Hero({ onEmailSuccess }: HeroProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 items-center relative z-10">
        {/* Left side - Text and Form */}
        <div className="text-center lg:text-left space-y-5 min-w-0">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <div className="whitespace-nowrap">Stop guessing.</div>
              <div className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                <div className="whitespace-nowrap">Unlock your personal</div>
                <div className="whitespace-nowrap">Aesthetic Blueprint.</div>
              </div>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mt-4">
              The fastest way to sculpt your dream physique.
              <br />
              Join thousands of others who've discovered their personalized roadmap to peak aesthetics.
            </p>
          </div>
          
          <EmailForm onSubmissionSuccess={onEmailSuccess} />
          
          <p className="text-sm text-gray-400 mt-3">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>

        {/* Right side - Phone Mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative w-64 h-[500px] bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl shadow-purple-500/20 ring-1 ring-white/10">
              <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-10"></div>
                
                {/* Video Content Area */}
                <div className="absolute inset-0 top-6 bg-gray-900 flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/placeholder-video-poster.jpg"
                  >
                    <source src="/hero-demo.mp4" type="video/mp4" />
                    {/* Fallback content */}
                    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                          <div className="w-6 h-6 bg-white rounded-full shadow-lg"></div>
                        </div>
                        <h3 className="text-lg font-semibold">Chisel</h3>
                        <p className="text-sm opacity-90">Rate your physique</p>
                        <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                          <span className="text-2xl font-bold">8.5</span>
                          <span className="text-sm">/10</span>
                        </div>
                      </div>
                    </div>
                  </video>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/50 animate-pulse">
              ✨
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/50">
              <span className="text-xs">DEMO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 