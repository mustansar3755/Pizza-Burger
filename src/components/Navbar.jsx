import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu as MenuIcon, X } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { SHOP_INFO } from "../data/menuData";

const linkClass = ({ isActive }) =>
  `relative font-semibold text-sm pb-1 transition-colors ${
    isActive ? "text-cream" : "text-cream-dim hover:text-cream"
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between px-[6vw] py-4 bg-charcoal/90 backdrop-blur-md border-b border-line">
      <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
        <div className="w-8.5 h-8.5 rounded-full flex items-center justify-center font-display text-[15px] text-charcoal"
             style={{ background: "conic-gradient(#E8542A, #F4A93C, #E8542A)" }}>
          PB
        </div>
        <div className="font-display text-lg tracking-wide leading-none">
          Pizza & Burger
          <small className="block font-body text-[10px] tracking-[0.18em] text-cream-dim font-medium normal-case">
            AND BBQ HOUSE — BHIKHI
          </small>
        </div>
      </NavLink>

      {/* desktop links */}
      <div className="hidden md:flex items-center gap-7 text-sm">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/menu" className={linkClass}>Full Menu</NavLink>
        <a href={SHOP_INFO.facebook} target="_blank" rel="noreferrer"
           className="flex items-center gap-1.5 text-cream-dim hover:text-cream font-semibold text-sm">
          <FaFacebook size={15} /> Facebook
        </a>
        <a href={SHOP_INFO.phoneHref}
           className="flex items-center gap-1.5 bg-ember text-charcoal px-4.5 py-2.5 rounded-[3px] font-bold text-[13px] hover:bg-ember-light transition-colors">
          <Phone size={14} /> Call Now
        </a>
      </div>

      {/* mobile toggle */}
      <button className="md:hidden text-cream" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
        {open ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="md:hidden absolute top-full left-0 right-0 bg-charcoal-2 border-b border-line px-[6vw] py-6 flex flex-col gap-5"
          >
            <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/menu" className={linkClass} onClick={() => setOpen(false)}>Full Menu</NavLink>
            <a href={SHOP_INFO.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cream-dim font-semibold text-sm">
              <FaFacebook size={16} /> Facebook
            </a>
            <a href={SHOP_INFO.phoneHref} className="flex items-center justify-center gap-2 bg-ember text-charcoal py-3 rounded-[3px] font-bold text-sm">
              <Phone size={15} /> Call Now — {SHOP_INFO.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;