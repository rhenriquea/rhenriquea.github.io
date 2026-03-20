import ScrollDown from "./ScrollDown";

const locations = [
  { code: "SP", label: "Sao Paulo", color: "text-accent-pink" },
  { code: "PD", label: "Padova", color: "text-accent-cyan" },
  { code: "LD", label: "London", color: "text-accent-yellow" },
  { code: "AMS", label: "Netherlands", color: "text-accent-pink" },
];

const stats = [
  { value: "10+", label: "Years XP", accent: "border-accent-yellow" },
  { value: "08", label: "Companies", accent: "border-accent-cyan" },
  { value: "04", label: "Languages", accent: "border-accent-pink" },
];

const Profile: React.FC = () => {
  return (
    <section className="bg-surface-container-low section-full px-6 md:px-20 border-t border-outline-variant/10" id="profile" aria-labelledby="profile-heading">
      <h2 id="profile-heading" className="sr-only">Profile</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="bg-surface-container-high p-6 border-l-[12px] border-accent-pink shadow-2xl">
            <div className="glitch-container aspect-square bg-black relative overflow-hidden ring-4 ring-surface-container-high shadow-inner">
              <img
                alt="Rafael Almeida, engineering leader and cloud architect"
                className="glitch-img w-full h-full object-cover grayscale contrast-150"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5gH3NWZBDfjTGflXeyS10_-tIwiwiQDTRLgZ2w2622FmjeP0bHmusagvD2qQWZOJWGcGrFKJC8C1a1vQ0rUfU0S8QdXijRWj4c66lD-JKWEOsIHjynMFZvcr44ZY7IWcSI0WVtOJL0P25fVrRG01zXfQ8pgxPNXj5gAB4mzMbJrRBwgLpKbyh6r_poNpNoWsbVoaKtJQNGin_kxuS_x90lQGnGb5zsP3FzUdWomXFoUpzp2XF9nqSYibmPQtR37E7-Mj8-2qa94k=w800-h800-rw"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
              />
              <div className="glitch-scanlines" aria-hidden="true" />
              <div className="absolute inset-0 bg-accent-pink/20 mix-blend-overlay" aria-hidden="true" />
            </div>
            <div className="mt-8 font-body text-on-surface leading-relaxed">
              <p className="text-lg font-medium border-l-2 border-accent-cyan pl-4 italic">
                RAFAEL_ALMEIDA_LOG: Engineering leader specializing in hyperscale cloud architectures. Passionate about AI integration and developer experience. Building the future from the analog roots of the digital revolution.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="coords-box relative h-72 border-2 border-accent-cyan/30 bg-black p-6 shadow-[inset_0_0_40px_rgba(0,240,255,0.1)]">
            <div className="absolute top-4 right-4 flex gap-2 items-center" aria-hidden="true">
              <div className="w-3 h-3 rounded-full poster-pink animate-pulse shadow-[0_0_10px_#ff2d7b]" />
              <span className="font-label text-xs uppercase text-accent-pink font-bold">Signal Active</span>
            </div>
            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-label text-xs uppercase text-accent-cyan tracking-[0.3em] font-black">Location Trace</span>
                <span className="font-label text-xs uppercase text-accent-yellow">1984 - 2025</span>
              </div>
              <div className="grid grid-cols-4 gap-6" role="list" aria-label="Locations lived">
                {locations.map(({ code, label, color }) => (
                  <div key={code} className="text-center" role="listitem">
                    <div className={`${color} font-black font-chrome text-2xl`}>{code}</div>
                    <div className="text-xs uppercase text-on-surface-variant font-bold mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-6" role="list" aria-label="Career statistics">
            {stats.map(({ value, label, accent }) => (
              <div key={label} className={`flex-1 bg-surface-container-high py-6 px-8 border-l-[6px] ${accent} shadow-lg`} role="listitem">
                <div className="text-white font-chrome text-4xl italic font-black" aria-hidden="true">{value}</div>
                <div className="font-label text-xs uppercase tracking-widest text-on-surface font-black mt-2">{label}</div>
                <span className="sr-only">{value} {label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollDown to="mixtape" />
    </section>
  );
};

export default Profile;
