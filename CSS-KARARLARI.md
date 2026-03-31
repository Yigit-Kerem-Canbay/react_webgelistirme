Breakpoint Seçimi
640px ve 1024px değerlerini; içeriğin tek sütunda sıkışmaya başladığı ve daha geniş ekranlarda satır uzunluğunun okunabilirliği bozduğu noktalar için seçtim. Mobile-first yaklaşımında, önce en küçük ekran (telefon) için tasarımı kurup, daha sonra 640px (tablet) ve 1024px (masaüstü) üzerinde genişleyen layout (yerleşim) davranışları tanımladım.

Layout Tercihleri
Header: Tek eksende (yatay) hizalama sağlamak ve logo/navigasyon öğelerini dengeli bir şekilde dağıtmak için Flexbox kullandım.

Proje Kartları: Kartların hem yatayda hem dikeyde düzenli bir ızgara oluşturması için CSS Grid tercih ettim. repeat(auto-fit, minmax(280px, 1fr)) yapısı sayesinde ekran genişliğine göre kolon sayısı otomatik olarak ayarlanıyor.

Auto-fit / Auto-fill Kararı
project-grid yapısında auto-fit kullanmamın temel sebebi, yeterli içerik olmadığında boş kolonların oluşmasını engellemek ve mevcut kartların genişleyerek alanı verimli bir şekilde doldurmasını sağlamaktır.

Design Tokens (Tasarım Değişkenleri)
Renk paletini; güven ve profesyonellik hissi verdiği için mavi tonlarında (--color-primary, --color-secondary) tuttum. Boşluk (spacing), yuvarlatma (radius), tipografi, gölge (shadow) ve geçiş (transition) değerlerini src/styles/tokens.css içerisinde topladım. Tüm stil dosyalarında sabit px değerleri yerine bu değişkenleri (örneğin: var(--space-md)) kullandım.

Akışkan (Fluid) Tipografi
Temel font boyutlarını clamp fonksiyonu ile tanımlayarak ekran boyutuna duyarlı hale getirdim:

Base: --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);

XL: --text-xl: clamp(1.25rem, 1rem + 1.2vw, 1.75rem);

2XL: --text-2xl: clamp(1.5rem, 1rem + 2vw, 2.5rem);

Bu sayede küçük ekranlarda okunabilirlik korunurken, geniş ekranlarda yazılar aşırı büyümeden orantılı bir şekilde ölçekleniyor.

Mobile-first Uygulaması
Tüm temel yerleşim kuralları (flex, grid, padding) önce mobil cihazlar için tanımlandı. Daha sonra yalnızca @media (min-width: 640px) ve @media (min-width: 1024px) blokları ile tablet ve masaüstü için spesifik davranışlar eklendi; karmaşıklığı önlemek adına max-width temelli media query kullanımından kaçınıldı.

Görüntü ve Object-fit Yönetimi
Proje kartlarındaki görsellerin, kart alanını tasarımı bozmadan doldurması için şu kuralları uyguladım:

img { max-width: 100%; height: auto; }

.project-card img { height: 200px; object-fit: cover; }

Bu kullanım sayesinde, farklı en-boy oranlarına sahip ekran görüntüleri kart içerisinde düzgünce kırpılarak ortalanmış oluyor.