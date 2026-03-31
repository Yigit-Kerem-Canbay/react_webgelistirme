import { ContactForm } from '../forms/ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">İletişim</h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600">
            Bir projeniz mi var veya sadece merhaba mı demek istiyorsunuz? Aşağıdaki formu kullanarak bana ulaşabilirsiniz.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-blue-600 text-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Formu doldurduğunuz takdirde en geç 24 saat içerisinde size geri dönüş sağlayacağım.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <span className="w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center mr-4 flex-shrink-0">
                    ✉️
                  </span>
                  <span>yigit@example.com</span>
                </div>
                <div className="flex items-center">
                  <span className="w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center mr-4 flex-shrink-0">
                    📱
                  </span>
                  <span>+90 555 123 45 67</span>
                </div>
                <div className="flex items-center">
                  <span className="w-10 h-10 rounded-full bg-blue-500/50 flex items-center justify-center mr-4 flex-shrink-0">
                    🌍
                  </span>
                  <span>İstanbul, Türkiye</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-8 md:p-10 bg-white">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Bana Mesaj Gönder</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
