export function GradientBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        height: "100vh",
        width: "100%",
        zIndex: -1,
        background:
          "radial-gradient(125% 125% at 50% -50%, #c7d2fe 40%, transparent 100%)",
      }}
      className="gradient-background"
    />
  );
}
