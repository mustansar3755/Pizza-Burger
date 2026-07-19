import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { SHOP_INFO } from "../data/menuData";

const CTABand = ({ showMenuLink = true }) => (
  <section className="px-[6vw] py-10">
    <div
      className="rounded-2xl px-[6vw] py-14 text-center max-w-275 mx-auto"
      style={{ background: "linear-gradient(100deg, #7A2618, #4a1710)" }}
    >
      <h2 className="font-display text-[28px] sm:text-[42px] mb-3.5">
        Hungry Already?
      </h2>
      <p className="text-[#e8d9cc] max-w-120 mx-auto mb-7 text-[15.5px] leading-relaxed">
        Call now for takeout, or walk in for dine-in seating — we're firing up
        the grill every night till 1&nbsp;AM.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={SHOP_INFO.phoneHref}
          className="inline-flex items-center gap-2 bg-ember text-charcoal px-7 py-4 rounded-[3px] font-bold text-[15px] hover:bg-ember-light hover:-translate-y-0.5 transition-all"
        >
          <Phone size={16} /> {SHOP_INFO.phone}
        </a>
        {showMenuLink && (
          <Link
            to="/menu"
            className="inline-flex items-center border-[1.5px] border-cream text-cream px-7 py-3.5 rounded-[3px] font-bold text-[15px] hover:bg-cream/5 transition-all"
          >
            See Full Menu
          </Link>
        )}
      </div>
    </div>
  </section>
);

export default CTABand;
