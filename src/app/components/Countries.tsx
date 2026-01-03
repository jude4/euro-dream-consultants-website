export function Countries() {
  const countries = [
    { name: "Germany", code: "de" },
    { name: "France", code: "fr" },
    { name: "Sweden", code: "se" },
    { name: "Finland", code: "fi" },
    { name: "Netherlands", code: "nl" },
    { name: "Spain", code: "es" },
  ];

  return (
    <section id="countries" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#0D4D85] text-3xl text-center mb-12">
          COUNTRIES WE COVER
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {countries.map((country) => (
            <div 
              key={country.name}
              className="flex flex-col items-center gap-4 hover:transform hover:scale-110 transition-transform cursor-pointer group"
            >
              <div className="relative p-1 rounded-full border-2 border-transparent group-hover:border-[#D4A85E] transition-colors">
                <img 
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  srcSet={`https://flagcdn.com/w160/${country.code}.png 2x`}
                  alt={`${country.name} flag`}
                  className="w-20 h-20 rounded-full object-cover shadow-lg"
                  loading="lazy"
                />
              </div>
              <span className="text-[#0D4D85] font-medium">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
