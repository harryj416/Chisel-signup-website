import React from 'react'

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Proof */}
          <div className="flex items-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="text-purple-400 font-semibold">📱</span>
              <span>Seen on #GymTok</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-400 font-semibold">🔥</span>
              <span>5k+ signed up</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="/privacy" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <div className="w-px h-4 bg-gray-600"></div>
            <a 
              href="/terms" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            © 2024 Chisel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 