import React from 'react'

export function HowItWorks() {
  const steps = [
    {
      icon: '🎉',
      title: 'Join Waitlist',
      description: 'Sign up and secure your free first scan when we launch'
    },
    {
      icon: '🚀',
      title: 'We Launch',
      description: 'Get instant access to your personalized Aesthetic Blueprint'
    },
    {
      icon: '💪',
      title: 'Transform',
      description: 'Follow your custom roadmap to achieve your dream physique'
    }
  ]

  return (
    <section className="py-16 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-300">
            Your journey to the perfect physique starts here
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold z-10 shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto bg-gray-800 border border-gray-700 rounded-2xl shadow-xl flex items-center justify-center text-3xl backdrop-blur-sm">
                  {step.icon}
                </div>
                
                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-500/50 to-blue-500/50"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                         <h3 className="text-lg font-semibold text-white mb-3">
               What you'll get with Chisel:
             </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center justify-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                AI-powered physique analysis
              </div>
              <div className="flex items-center justify-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Personalized improvement roadmap
              </div>
              <div className="flex items-center justify-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Progress tracking over time
              </div>
              <div className="flex items-center justify-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Custom workout recommendations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 