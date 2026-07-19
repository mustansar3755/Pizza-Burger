import { MapPin, Clock, UtensilsCrossed } from "lucide-react";
import { SHOP_INFO } from "../data/menuData";

const cells = [
  { Icon: MapPin, label: "Location", value: "Main Lahore Road, Bhikhi" },
  { Icon: Clock, label: "Hours", value: SHOP_INFO.hours },
  { Icon: UtensilsCrossed, label: "Service", value: SHOP_INFO.service },
];

const InfoStrip = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden max-w-190">
    {cells.map(({ Icon, label, value }) => (
      <div key={label} className="bg-charcoal-2 p-5">
        <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-cheese uppercase mb-1.5">
          <Icon size={12} /> {label}
        </div>
        <div className="text-[14.5px] font-semibold text-cream">{value}</div>
      </div>
    ))}
  </div>
);

export default InfoStrip;