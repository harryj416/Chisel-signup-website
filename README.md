# Chisel Waitlist

A fully-functional waitlist landing site for the "Chisel" app built with Next.js 14, TypeScript, and TailwindCSS.

## Setup Instructions

1. Install dependencies: `npm install`
2. Copy environment variables: `cp env.example .env.local`
3. Configure Stripe in `.env.local`:
   ```bash
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   STRIPE_SECRET_KEY=sk_test_your_key_here
   NEXT_PUBLIC_STRIPE_PRICE_ID=price_your_price_id_here
   ```
4. Start development server: `npm run dev`

## Features

- Modern responsive design with phone mockup and video placeholder
- Email waitlist signup with validation
- Queue position modal with skip-the-line payment option ($4.99)
- Referral system for inviting friends
- Three-step "How it Works" section
- Social proof footer with privacy/terms links
- All styling with TailwindCSS and shadcn/ui components

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui components
- Radix UI primitives

## Integration Status

- ✅ **Stripe checkout**: Fully integrated with real payment processing
- 🔧 **Email API**: Console logging (ready for ConvertKit/Mailchimp)
- 🔧 **Referral widget**: Comment placeholder for external script
- 🔧 **Demo video**: `/public/hero-demo.mp4` placeholder file

## Stripe Integration

The Stripe integration includes:
- Checkout session creation API route (`/api/checkout`)
- Success page (`/success`) with order confirmation
- Cancel page (`/cancel`) with alternative options
- Real payment processing with metadata tracking
- Error handling and user feedback # Chisel-signup-website
