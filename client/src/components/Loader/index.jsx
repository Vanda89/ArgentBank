import './Loader.css'

export default function Loader() {
  return (
    <section className="loader">
      <svg className="animate-spin" viewBox="0 0 50 50">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00bc78" stopOpacity="1" />
            <stop offset="70%" stopColor="#005834" stopOpacity="1" />
          </linearGradient>
        </defs>
        <circle
          stroke="url(#gradient)"
          strokeWidth="0.2"
          fill="transparent"
          r="0.5"
          cx="25"
          cy="25"
        />
      </svg>
    </section>
  )
}
