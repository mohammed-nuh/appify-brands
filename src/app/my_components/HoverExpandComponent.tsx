import React from 'react'
import HoverExpand from '@/components/ui/hover-expand'

const HoverExpandComponent = () => {
  const hover_images = ["hover_images/1.jpg", "hover_images/2.jpg", "hover_images/3.jpg"]

  return (
    <div className="text-center">
      <h1
        className="text-5xl font-extrabold mb-4 mt-9
  bg-gradient-to-r from-green-400 via-green-500 to-emerald-600
  bg-clip-text text-transparent animate-gradient"
      >
        We Build
      </h1>

      <HoverExpand
        images={hover_images}
        initialSelectedIndex={0}
        maxThumbnails={11}
      />
    </div>

  )
}

export default HoverExpandComponent
