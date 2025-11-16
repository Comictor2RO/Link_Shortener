"use client"

import React, { useState } from 'react'
import LinkShortenerCard from './LinkShortenerCard/LinkShortenerCard';
import QRCard from './QRCard/QRCard';

const HomeClient = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="w-full flex flex-col items-center px-4 py-10 sm:py-12 md:py-16 lg:py-20 gap-6">
      <div className="flex items-center justify-center gap-2 sm:gap-3 bg-base-100 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow">
        <img src="/link.svg" alt="Link icon" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
        <span className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl">Short Link</span>
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            checked={showQR}
            className="toggle toggle-sm md:toggle-md lg:toggle-lg xl-toggle-xl border"
            onChange={() => setShowQR(!showQR)}
          />
        </label>
        <span className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl">QR Code</span>
        <img src="/qr-code.svg" alt="QR icon" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
      </div>

      {!showQR ? <LinkShortenerCard /> : <QRCard/>}
    </div>
  )
}

export default HomeClient