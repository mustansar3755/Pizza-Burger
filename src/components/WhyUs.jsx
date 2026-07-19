import { motion } from "framer-motion";
import GrillDivider from "./GrillDivider";

const reasons = [
  {
    num: "01",
    title: "Fresh Dough, Daily",
    body: "Pizza dough is prepared fresh every morning and stone-baked to order — never frozen, never pre-made.",
  },
  {
    num: "02",
    title: "Real Charcoal Grill",
    body: "Burgers and BBQ get their smoky flavour from an open charcoal flame, not a griddle shortcut.",
  },
  {
    num: "03",
    title: "Open Till 1 AM",
    body: "Late-night cravings covered — dine in with family or grab a fast takeout, seven days a week.",
  },
];

const WhyUs = () => (
  <section className="px-[6vw] py-20 bg-charcoal-2 border-y border-line">
    <div className="text-center max-w-[640px] mx-auto mb-12">
      <GrillDivider />
      <h2 className="font-display text-[30px] sm:text-[48px] mt-5 mb-3.5">Why Bhikhi Chooses Us</h2>
      <p className="text-cream-dim text-base leading-relaxed">
        No shortcuts — every order is cooked fresh once you place it.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1000px] mx-auto">
      {reasons.map((r, i) => (
        <motion.div
          key={r.num}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="p-7 border border-line rounded-lg bg-charcoal"
        >
          <div className="font-display text-[34px] text-ember mb-3">{r.num}</div>
          <h3 className="text-lg font-semibold mb-2.5">{r.title}</h3>
          <p className="text-sm text-cream-dim leading-relaxed">{r.body}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhyUs;