## Breakpoint Secimi

640px ve 1024px degerlerini, icerigin tek sutunda sikismaya basladigi ve daha genis ekranda satir uzunlugunun okunabilirligi bozdugu noktalar icin sectim.  
Mobile-first yaklasiminda once en kucuk ekran (telefon) icin tasarimi kurup daha sonra 640px (tablet) ve 1024px (masaustu) uzerinde genisleyen layout davranislari tanimladim.

## Layout Tercihleri

Header icin **Flexbox** kullandim cunku tek eksende (yatay) hizalama ve logo / navigasyon ogelerini aralarinda bosluk birakarak dagitmak gerekiyor.  
Proje kartlari icin **CSS Grid** tercih ettim; kartlar hem yatayda hem dikeyde duzenli bir izgara olusturuyor ve `repeat(auto-fit, minmax(280px, 1fr))` ile ekrana gore otomatik kolon sayisi ayarlanabiliyor.

## Auto-fit / Auto-fill Karari

`project-grid` yapisinda `repeat(auto-fit, minmax(280px, 1fr))` kullandim.  
`auto-fit` secmemin sebebi, yeterli alan olmadiginda bos kolonlar olusmasini engellemek ve kartlarin genisleyerek boslugu doldurmasini saglamak.

## Design Tokens

Renk paletini mavi tonlarinda tuttum (`--color-primary`, `--color-secondary`) cunku guven ve profesyonellik hissi veriyor.  
Spacing, radius, tipografi, shadow ve transition degerlerini `src/styles/tokens.css` icerisinde topladim. Tum stil dosyalarinda dogrudan sabit `px` yerine bu degiskenleri (`var(--space-md)` gibi) kullandim.

## Fluid Tipografi

Temel font boyutlarini `clamp` ile tanimladim:

- `--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);`
- `--text-xl: clamp(1.25rem, 1rem + 1.2vw, 1.75rem);`
- `--text-2xl: clamp(1.5rem, 1rem + 2vw, 2.5rem);`

Boylece kucuk ekranlarda okunabilirlik korunurken, genis ekranlarda yazilar asiri buyumeden orantili sekilde artiyor.

## Mobile-first Uygulamasi

Tum temel layout kurallari (flex, grid, padding) once mobil icin tanimlandi.  
Daha sonra yalnizca `@media (min-width: 640px)` ve `@media (min-width: 1024px)` bloglari ile tablet ve masaustu icin ekstra davranis eklendi; `max-width` temelli media query kullanilmadi.

## Goruntu ve object-fit

Proje kartlarindaki ekran goruntulerinin tum kart alanini duzenli bir sekilde doldurmasi icin:

- `img { max-width: 100%; height: auto; }`
- `.project-card img { height: 200px; object-fit: cover; }`

kullandim. Boylece farkli oranlardaki ekran goruntuleri kart icerisinde tasarimi bozmayacak sekilde kirpilip ortalanmis oluyor.

