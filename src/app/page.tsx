'use client'

import React, { useState } from 'react'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Footer } from '@/components/Footer'
import { Modal } from '@/components/Modal'
import { QueueData } from '@/types'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [queueData, setQueueData] = useState<QueueData | null>(null)

  const handleEmailSuccess = (data: QueueData) => {
    setQueueData(data)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero onEmailSuccess={handleEmailSuccess} />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Footer */}
      <Footer />
      
      {/* Modal */}
      {queueData && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          queueData={queueData}
        />
      )}
    </main>
  )
} 