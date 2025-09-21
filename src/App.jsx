export default function App() {
  return (
    <div className="select-none p-2 rounded-xl bg-black/50 text-white backdrop-blur-md text-xs font-medium">
      <div className="flex gap-3">
        <Chip label="CPU" value="--%" />
        <Chip label="RAM" value="-- / -- GB" />
        <Chip label="GPU" value="--% VRAM --/-- GB" />
        <Chip label="NET" value="↓0 ↑0 KB/s" />
        <Chip label="BAT" value="--%" />
      </div>
    </div>
  );
}

function Chip({ label, value }) {
  return (
    <div className="px-3 py-2 bg-white/10 rounded-lg">
      <div className="opacity-70">{label}</div>
      <div className="text-sm">{value}</div>
    </div>
  );
}