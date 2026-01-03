export function Hero() {
  return (
    <section 
      className="relative bg-cover bg-center py-24 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 77, 133, 0.85), rgba(13, 77, 133, 0.85)), url('https://images.unsplash.com/photo-1599043627490-6725d0a01067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHVuaXZlcnNpdHklMjBldXJvcGUlMjBjYW1wdXN8ZW58MXx8fHwxNzY2MDEyNjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-white text-5xl mb-4">
            YOUR GATEWAY TO EUROPEAN<br />EDUCATION & CAREERS
          </h1>
          <p className="text-white text-xl mb-8">
            Unlock your future with Euro Dream Consultants
          </p>
          <div className="flex gap-4">
            <a 
              href="#study"
              className="bg-[#D4A85E] text-white px-8 py-3 rounded-full hover:bg-[#C39850] transition-colors"
            >
              STUDY IN EUROPE
            </a>
            <a 
              href="#work"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              WORK IN EUROPE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
