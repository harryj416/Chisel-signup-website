import { getStripe } from './stripe-config'

export async function redirectToStripeCheckout(email: string): Promise<void> {
  try {
    // Call our API to create a checkout session
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to create checkout session')
    }

    // Get Stripe instance and redirect to checkout
    const stripe = await getStripe()
    if (!stripe) {
      throw new Error('Failed to load Stripe')
    }

    const { error } = await stripe.redirectToCheckout({
      sessionId: data.sessionId,
    })

    if (error) {
      throw error
    }
  } catch (error) {
    console.error('Stripe checkout error:', error)
    // Fallback to alert for now - in production you'd want better error handling
    alert(`Payment error: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
} 