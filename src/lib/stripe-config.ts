import { loadStripe, Stripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>

export const getStripe = () => {
  if (!stripePromise) {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    if (!publishableKey) {
      throw new Error('Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable')
    }
    stripePromise = loadStripe(publishableKey)
  }
  return stripePromise
}

export const STRIPE_CONFIG = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  secretKey: process.env.STRIPE_SECRET_KEY,
  priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
  successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
  cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
} 