import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Flame } from "lucide-react";
import { PizzaIcon, BurgerIcon, BbqIcon } from "./FoodIcons";
import InfoStrip from "./InfoStrip";
import { SHOP_INFO } from "../data/menuData";

const dishes = [
  { Icon: PizzaIcon, label: "Pizza" },
  { Icon: BurgerIcon, label: "Burgers" },
  { Icon: BbqIcon, label: "BBQ" },
];

const Hero = () => (
  <section
    className="relative px-[6vw] pt-22 pb-18 overflow-hidden"
    style={{
      background:
        "radial-gradient(ellipse 60% 50% at 80% 10%, rgba(232,84,42,0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(244,169,60,0.10), transparent 60%), #1C1410",
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-cheese uppercase mb-5"
    >
      <Flame size={14} className="text-ember" />
      Bhikhi's Late-Night Kitchen
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="font-display text-[44px] sm:text-[64px] lg:text-[92px] leading-[0.95] mb-6"
    >
      <span className="block text-cream">HOT OFF THE GRILL,</span>
      <span
        className="block bg-clip-text text-transparent"
        style={{ backgroundImage: "linear-gradient(92deg, #FF7247, #F4A93C)" }}
      >
        FRESH TO YOUR TABLE.
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="max-w-130 text-lg leading-relaxed text-cream-dim mb-9"
    >
      Wood-fired pizza, char-grilled burgers and smoky BBQ — made fresh on Main Lahore
      Road, Bhikhi. Dine in with the family or order takeout, open every night till 1&nbsp;AM.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="flex flex-wrap gap-4 mb-14"
    >
      <a
        href={SHOP_INFO.phoneHref}
        className="inline-flex items-center gap-2 bg-ember text-charcoal px-7 py-4 rounded-[3px] font-bold text-[15px] hover:bg-ember-light hover:-translate-y-0.5 transition-all"
      >
        <Phone size={16} /> Call to Order — {SHOP_INFO.phone}
      </a>
      <Link
        to="/menu"
        className="inline-flex items-center border-[1.5px] border-line text-cream px-7 py-3.5 rounded-[3px] font-bold text-[15px] hover:border-cheese hover:bg-cheese/5 transition-all"
      >
        View Full Menu
      </Link>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 }}
    >
      <InfoStrip />
    </motion.div>

    <div className="relative mt-16 flex justify-center gap-8 flex-wrap">
      {dishes.map(({ Icon, label }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          whileHover={{ y: -8, rotate: -3 }}
          className="text-center"
        >
          <div
            className="w-33 h-33 rounded-full border-2 border-line flex items-center justify-center shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]"
            style={{ background: "radial-gradient(circle at 40% 35%, #2a1e17, #171009)" }}
          >
            <Icon className="w-19.5 h-19.5" />
          </div>
          <div className="mt-2.5 font-mono text-[11px] tracking-widest text-cream-dim uppercase">
            {label}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Hero;