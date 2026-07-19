import { Phone, Clock, UtensilsCrossed } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { SHOP_INFO } from "../data/menuData";

const Footer = () => (
  <footer className="px-[6vw] pt-14 pb-8 border-t border-line text-center text-cream-dim text-[13px]">
    <div className="flex items-center justify-center gap-2.5 mb-4">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center font-display text-[13px] text-charcoal"
        style={{ background: "conic-gradient(#E8542A, #F4A93C, #E8542A)" }}
      >
        PB
      </div>
      <span className="font-display text-base text-cream">Pizza & Burger and BBQ House</span>
    </div>

    <p>{SHOP_INFO.address}</p>

    <div className="flex flex-wrap justify-center gap-5 my-4 font-semibold">
      <a href={SHOP_INFO.phoneHref} className="flex items-center gap-1.5 hover:text-cream">
        <Phone size={13} /> {SHOP_INFO.phone}
      </a>
      <a href={SHOP_INFO.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cream">
        <FaFacebook size={13} /> Facebook Page
      </a>
      <span className="flex items-center gap-1.5">
        <Clock size={13} /> {SHOP_INFO.hours}
      </span>
      <span className="flex items-center gap-1.5">
        <UtensilsCrossed size={13} /> {SHOP_INFO.service}
      </span>
    </div>

    <p className="mt-5 opacity-60 max-w-140 mx-auto">
      This is a demo website mockup prepared for Pizza & Burger and BBQ House. Menu items and
      prices are samples for presentation purposes.
    </p>
  </footer>
);

export default Footer;