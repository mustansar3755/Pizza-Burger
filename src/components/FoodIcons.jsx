// Hand-drawn SVG dish icons — no external images, keeps the brand self-contained.

export const PizzaIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 8 L88 82 A46 46 0 0 1 12 82 Z" fill="#F4A93C" stroke="#1C1410" strokeWidth="3" />
    <path d="M50 8 L88 82 A46 46 0 0 1 12 82 Z" fill="none" stroke="#E8542A" strokeWidth="2" strokeDasharray="4 5" />
    <circle cx="50" cy="38" r="5" fill="#E8542A" />
    <circle cx="35" cy="58" r="5" fill="#E8542A" />
    <circle cx="63" cy="60" r="5" fill="#E8542A" />
    <circle cx="48" cy="70" r="4.5" fill="#E8542A" />
  </svg>
);

export const BurgerIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M18 40 Q50 12 82 40 Z" fill="#C9832E" />
    <rect x="16" y="42" width="68" height="7" rx="3.5" fill="#4CA850" />
    <rect x="16" y="51" width="68" height="9" rx="4.5" fill="#7A2618" />
    <rect x="16" y="62" width="68" height="7" rx="3.5" fill="#F4A93C" />
    <path d="M16 71 h68 v6 a8 8 0 0 1 -8 8 h-52 a8 8 0 0 1 -8 -8 Z" fill="#C9832E" />
    <circle cx="30" cy="34" r="2" fill="#F5EDE1" />
    <circle cx="50" cy="30" r="2" fill="#F5EDE1" />
    <circle cx="68" cy="34" r="2" fill="#F5EDE1" />
  </svg>
);

export const BbqIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="20" y="50" width="60" height="12" rx="3" fill="#3A2C22" />
    <rect x="26" y="40" width="6" height="14" fill="#8C5A2E" />
    <rect x="46" y="40" width="6" height="14" fill="#8C5A2E" />
    <rect x="66" y="40" width="6" height="14" fill="#8C5A2E" />
    <path d="M30 78 Q35 55 28 40 Q40 50 40 30 Q52 45 46 62 Q60 52 56 35 Q68 55 58 78 Z" fill="#E8542A" />
    <path d="M40 78 Q44 62 40 50 Q48 58 48 44 Q56 55 50 70 Z" fill="#F4A93C" opacity="0.85" />
  </svg>
);