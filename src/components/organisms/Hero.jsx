export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center hero-bg flex items-end"
      style={{
        backgroundImage: 'url("/assets/movie-posters/herogambar.jpg")',
      }}
    >
      <div className="absolute inset-0 gradient-overlay"></div>
      
      <div className="relative z-10 p-6 sm:p-8 md:p-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">Avatar</h1>
        
        <p className="text-xs sm:text-sm w-full sm:w-10/12 md:w-2/3 opacity-80 mb-4 sm:mb-6">
          A paraplegic Marine dispatched to the moon Pandora on a unique
          mission becomes torn between following his orders and protecting the
          world he feels is his home.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-start sm:items-center">
          <button className="bg-[#0F1E93] text-white font-semibold 
                             py-2 px-4 sm:py-3 sm:px-6 
                             rounded-full hover:bg-[#192DB7] w-fit">
            Mulai
          </button>
          <button className="bg-[#2F3334] text-white font-semibold 
                             py-2 px-4 sm:py-3 sm:px-6 
                             rounded-full hover:bg-white hover:text-black w-fit">
            Selengkapnya
          </button>
          <span className="text-xs border border-white opacity-80 rounded-full px-2 py-1">
            PG-13
          </span>
        </div>
      </div>

      <button className="absolute 
                         bottom-4 right-4 sm:bottom-8 sm:right-8 
                         z-20 w-10 h-10 sm:w-12 sm:h-12 
                         rounded-full flex items-center justify-center border border-white/30 bg-[#2F3334]/80 backdrop-blur-sm transition transform hover:bg-[#5A5A5A]/90 hover:scale-105">
        <img src="/assets/Frame 65.png" alt="Mute Speaker" className="w-10 h-10 sm:w-12 sm:h-12 invert" />
      </button>
    </section>
  );
}