import { Flame } from "lucide-react";

const MenuItemRow = ({ item }) => (
  <div className="flex justify-between items-baseline gap-3.5 py-4 border-b border-dashed border-line">
    <div>
      <span className="font-semibold text-[15.5px]">
        {item.n}
        {item.spicy && <Flame size={13} className="inline text-ember-light ml-1.5 -mt-0.5" />}
      </span>
      <span className="block text-cream-dim text-[12.5px] mt-1 font-normal leading-relaxed">
        {item.d}
      </span>
    </div>
    <div className="font-mono text-cheese font-bold text-[15px] whitespace-nowrap">{item.p}</div>
  </div>
);

export default MenuItemRow;