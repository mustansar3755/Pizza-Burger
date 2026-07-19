// Signature element: a row of "grill marks" that flicker like they're sizzling.
const GrillDivider = () => (
  <div className="grill-divider flex items-center justify-center gap-1.5 h-3.5 overflow-hidden mx-auto">
    {["bg-ember", "bg-cheese", "bg-ember", "bg-cheese", "bg-ember", "bg-cheese"].map((c, i) => (
      <span key={i} className={`block w-6.5 h-1.5 skew-x-[-30deg] ${c}`} />
    ))}
  </div>
);

export default GrillDivider;