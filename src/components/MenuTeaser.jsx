import { motion } from "framer-motion";
import GrillDivider from "./GrillDivider";

const items = [
  { emoji: "🍕", title: "Stone-Baked Pizza", body: "Classic, chicken tikka, and BBQ pizzas topped generously and baked till the crust is golden." },
  { emoji: "🍔", title: "Char-Grilled Burgers", body: "Beef, chicken and zinger patties, flame-grilled and stacked high with fresh veg and sauces." },
  { emoji: "🍗", title: "Smoky BBQ", body: "Seekh kebab, chicken tikka and boti, marinated overnight and cooked over open charcoal." },
];

const MenuTeaser = () => (
  <section className="px-[6vw] py-20">
    <div className="text-center max-w-160 mx-auto mb-12">
      <GrillDivider />
      <h2 className="font-display text-[30px] sm:text-[48px] mt-5 mb-3.5">What's Cooking</h2>
      <p className="text-cream-dim text-base leading-relaxed">A quick look at the three stations in our kitchen.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-260 mx-auto">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -4 }}
          className="border border-line rounded-lg p-6.5 bg-charcoal-2 flex flex-col gap-2.5 hover:border-ember transition-colors"
        >
          <div className="text-3xl">{it.emoji}</div>
          <h3 className="text-lg font-semibold">{it.title}</h3>
          <p className="text-sm text-cream-dim leading-relaxed">{it.body}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default MenuTeaser;