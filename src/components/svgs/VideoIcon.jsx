import React from 'react'

export default function VideoIcon({ color }) {
  console.log(color)
  return (
    
    <svg
    width="18"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="5" width="16" height="14" rx="2" ry="2"/>
    <path d="M22 7l-4 3v4l4 3z"/>
  </svg>
  )
}
