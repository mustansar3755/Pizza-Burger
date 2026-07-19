import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";
import CategoryTabs from "../components/CategoryTabs";
import MenuItemRow from "../components/MenuItemRow";
import CTABand from "../components/CTABand";
import Footer from "../components/Footer";
import { MENU } from "../data/menuData";

const MenuPage = () => {
  const [active, setActive] = useState("Pizza");

  return (
    <>
      <div className="px-[6vw] pt-16 pb-2 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-cheese uppercase mb-3.5">
          <Flame size={14} className="text-ember" /> The Full Spread
        </div>
        <h1 className="font-display text-[38px] sm:text-[64px] my-3.5">Our Menu</h1>
        <p className="text-cream-dim max-w-120 mx-auto text-base">
          Everything fired fresh in our Bhikhi kitchen — pick a category to jump in.
        </p>
        <div className="mt-8">
          <CategoryTabs active={active} setActive={setActive} />
        </div>
      </div>

      <div className="px-[6vw] pt-10 pb-2 max-w-240 mx-auto min-h-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-baseline gap-3.5 mb-6.5">
              <h2 className="text-[26px] font-semibold">{active}</h2>
              <div className="flex-1 h-px bg-line" />
              <span className="font-mono text-xs text-cream-dim">{MENU[active].length} items</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {MENU[active].map((item, i) => (
                <MenuItemRow key={i} item={item} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8">
        <CTABand showMenuLink={false} />
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;