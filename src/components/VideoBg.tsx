export default function VideoBg({ opacity = "opacity-[0.07]" }: { opacity?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`h-full w-full object-cover ${opacity}`}
      >
        <source src="/images/background.mov" type="video/mp4" />
      </video>
    </div>
  );
}
