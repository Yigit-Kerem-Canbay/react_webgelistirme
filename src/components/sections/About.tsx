export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hakkımda</h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {/* Placeholder for an image or graphic */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-gray-100 shadow-xl flex items-center justify-center border border-gray-200">
              <span className="text-gray-400 text-6xl">👨‍💻</span>
            </div>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Bilgisayar mühendisliği eğitimim boyunca yazılım geliştirme süreçlerine büyük ilgi duydum. Özel olarak Frontend teknolojilerine ve kullanıcı deneyimi (UX) tasarımına odaklanıyorum.
            </p>
            <p>
              Amacım her zaman sadece çalışan değil, aynı zamanda temiz, bakımı kolay ve erişilebilir kodlar yazmak. React ekosistemini yakından takip ediyor, güncel yaklaşımları projelerimde aktif olarak kullanıyorum.
            </p>
            <p>
              Sürekli öğrenmeyi ve kendimi geliştirmeyi bir prensip haline getirdim. Açık kaynak kodlu projelere katkıda bulunmaktan ve yeni teknolojileri keşfetmekten keyif alıyorum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
