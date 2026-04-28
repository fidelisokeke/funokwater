interface WaterDividerProps {
  from?: string
  to?: string
  flip?: boolean
}

export default function WaterDivider({ from = '#f0f9ff', to = 'white', flip = false }: WaterDividerProps) {
  return (
    <div style={{ background: from, lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 80"
        className="w-full block"
        preserveAspectRatio="none"
        style={{ transform: flip ? 'rotate(180deg)' : 'none' }}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}
