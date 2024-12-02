export function AdBanner() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-violet-600/20 to-indigo-600/20 p-8">
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="relative">
        <h3 className="mb-2 text-xl font-semibold text-primary">Advertisement Space</h3>
        <p className="text-muted-foreground">
          Reach thousands of qualified candidates by advertising your job openings here.
        </p>
      </div>
    </div>
  );
}