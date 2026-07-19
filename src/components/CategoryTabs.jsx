import { motion } from "framer-motion";
import { CATEGORIES } from "../data/menuData";

const CategoryTabs = ({ active, setActive }) => (
  <div className="sticky top-19 z-20 bg-charcoal py-3 flex flex-wrap justify-center gap-2.5">
    {CATEGORIES.map((cat) => {
      const isActive = active === cat;
      return (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`relative px-4.5 py-2.5 rounded-full border-[1.5px] font-bold text-[13px] transition-colors ${
            isActive
              ? "text-charcoal border-ember"
              : "bg-charcoal-2 text-cream-dim border-line hover:text-cream"
          }`}
        >
          {isActive && (
            <motion.span
              layoutId="cat-pill"
              className="absolute inset-0 rounded-full bg-ember -z-10"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          {cat}
        </button>
      );
    })}
  </div>
);

export default CategoryTabs;