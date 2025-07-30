import React from 'react'

const StandalonePage: React.FC = () => {
  return (
    <iframe
      src="/quali-standalone.html"
      style={{
        width: '100%',
        height: 'calc(100vh - 80px)', // Subtract navigation height
        border: 'none',
        margin: 0,
        padding: 0,
        display: 'block'
      }}
      title="Quali Design System Standalone"
      sandbox="allow-scripts allow-same-origin"
    />
  )
}

export default StandalonePage 