'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { redirectToStripeCheckout } from '@/lib/stripe'
import { generateReferralLink } from '@/lib/email'
import { QueueData, ReferralData } from '@/types'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  queueData: QueueData
}

export function Modal({ isOpen, onClose, queueData }: ModalProps) {
  const [showReferral, setShowReferral] = useState(false)
  const [referralData, setReferralData] = useState<ReferralData | null>(null)

  const handlePreOrder = async () => {
    await redirectToStripeCheckout(queueData.email)
    // Note: The modal will remain open since the user will be redirected to Stripe
    // and then return to success/cancel pages
  }

  const handleInviteFriends = () => {
    const referralLink = generateReferralLink(queueData.email)
    setReferralData({
      referralLink,
      inviteCount: 0,
      maxInvites: 5
    })
    setShowReferral(true)
  }

  const copyReferralLink = async () => {
    if (referralData?.referralLink) {
      try {
        await navigator.clipboard.writeText(referralData.referralLink)
        alert('Referral link copied to clipboard!')
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = referralData.referralLink
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        alert('Referral link copied to clipboard!')
      }
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            🎉 You're officially in!
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-300">
            You'll receive your first AI-powered physique scan totally free the moment we launch.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {!showReferral ? (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-xl font-semibold text-white mb-2">👇 Want early unlimited access?</p>
              </div>

              {/* Pre-order Option */}
              <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-500/30 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    Recommended
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Pre-order 6 months full access - $4.99
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    One-time offer: Full app access at a heavily discounted rate (normally $24.99) the moment we launch.
                  </p>
                </div>
                <Button
                  onClick={handlePreOrder}
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 shadow-lg shadow-green-500/25"
                  size="lg"
                >
                  Pre-order 6 months full access - $4.99
                </Button>
              </div>

              {/* OR Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-600" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-gray-900 px-2 text-gray-400 font-semibold">OR</span>
                </div>
              </div>

              {/* Referral Option */}
              <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Invite 5 friends & earn a premium bonus scan
                  </h3>
                  <p className="text-sm text-gray-400">Free Alternative</p>
                </div>
                <Button
                  onClick={handleInviteFriends}
                  variant="outline"
                  className="w-full h-12 text-base font-semibold border-gray-500 hover:bg-gray-700 hover:border-gray-400"
                  size="lg"
                >
                  Invite 5 friends & earn a premium bonus scan
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg mb-2 text-white">Invite Friends</h3>
                <p className="text-sm text-gray-300">
                  Share your referral link. For every 5 friends who join, you'll earn a premium bonus scan!
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-200">Progress</span>
                  <span className="text-sm text-gray-400">
                    {referralData?.inviteCount || 0} / {referralData?.maxInvites || 5}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${((referralData?.inviteCount || 0) / (referralData?.maxInvites || 5)) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">
                  Your referral link:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={referralData?.referralLink || ''}
                    readOnly
                    className="flex-1 p-2 border border-gray-600 rounded-md bg-gray-800 text-gray-200 text-sm"
                  />
                  <Button
                    onClick={copyReferralLink}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 hover:bg-gray-700"
                  >
                    Copy
                  </Button>
                </div>
              </div>

              {/* PLACEHOLDER_REFERRAL_SCRIPT */}
              <div className="text-center">
                <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
                  <p className="text-sm text-purple-300">
                    📱 Share on social media for maximum reach!
                  </p>
                </div>
              </div>

              <Button
                onClick={() => setShowReferral(false)}
                variant="ghost"
                className="w-full"
              >
                ← Back to options
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 