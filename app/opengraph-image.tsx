import { ImageResponse } from 'next/og'

export const alt = 'VisionFront AI Solutions: SEO and local marketing for small business'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(160deg, #04070C 0%, #142530 70%, #24413E 100%)',
          color: '#EDEFE7',
        }}
      >
        <div style={{ fontSize: 26, color: '#C8F14B', letterSpacing: 4, textTransform: 'uppercase' }}>
          SEO and Local Marketing
        </div>
        <div style={{ fontSize: 80, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>
          Get found online.
        </div>
        <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.05, color: '#C8F14B' }}>
          Win more clients.
        </div>
        <div style={{ fontSize: 30, color: '#93A29A', marginTop: 40 }}>VisionFront AI Solutions</div>
      </div>
    ),
    { ...size }
  )
}
