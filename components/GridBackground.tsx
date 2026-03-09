export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div className="absolute inset-0 grid-bg" />
      {/* Top glow orb */}
      <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full glow-orb-top" />
      {/* Bottom-right purple orb */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full glow-orb-bottom" />
    </div>
  );
}
