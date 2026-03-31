import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-16 pb-20 text-center px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Merhaba, Ben <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Yiğit Kerem Canbay</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Modern web teknolojileri ile kullanıcı dostu, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum. Tasarımdan koda harika deneyimler inşa etmeyi seviyorum.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#projects" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">Projelerimi Gör</Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">İletişime Geç</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
