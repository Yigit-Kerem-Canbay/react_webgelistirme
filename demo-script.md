# Demo Script ve Teslim Notları

## 📝 Demo Akışı (3-5 Dakika)

1. **Giriş ve Genel Yapı (1 dk)**
   - Tarayıcıda `http://localhost:5173` adresini açarak projenin çalıştığını göster.
   - Sayfayı yukarıdan aşağıya (Hero, Hakkımda, Yetenekler, Projeler, İletişim) hızlıca bir tur kaydırarak genel modern ve temiz tasarımı vurgula.
   - Header'daki linklere (Anchor Links) tıklayarak sayfada yumuşak geçişleri (soft scroll) göster.
   - **Kod Gösterimi:** `src/App.tsx` dosyasını açıp uygulamanın nasıl 5 farklı bölümden (Section) oluştuğunu ve modüler bir yapıda olduğunu açıkla.

2. **Proje Listeleme ve Dinamik Yapı (1.5 dk)**
   - "Projeler" bölümüne gel. Fetch ile `public/data/projects.json` dosyasından okunan projelerin yüklendiğini (hızlı bir Loading State'i sonrasında sayfada belirdiğini) belirt.
   - Arama çubuğuna bir metin yaz (Örn: "Mobil" veya "E-Ticaret") ve gridin `useMemo` kullanılarak anlık filtrelendiğini göster.
   - Kategori seçiciyi kullan ve sonuçları filtrele.
   - "Sıralama Ölçütü" üzerinden yılı veya ismi seçip artan/azalan şeklinde liste sıralamasının canlı çalıştığını kanıtla.
   - Sonuç sayısının UI üzerinde güncellendiğini göster ("3 / 6 proje gösteriliyor" gibi).
   - **Kod Gösterimi:** `src/components/sections/ProjectList.tsx` dosyasını açıp `useMemo`'yu ve `useState`'i nasıl kullandığını, `src/services/projectService.ts` ve `src/utils/projectHelpers.ts` dosyalarındaki modüler mimariyi göster.

3. **İletişim Formu ve Validasyon (1 dk)**
   - Sayfanın en altındaki İletişim Formu'na in.
   - Hiçbir şey doldurmadan "Mesaj Gönder" butonuna bas ve alt kısımlarda beliren kırmızı validasyon hatalarını göster.
   - E-posta alanına yanlış formatta veri girerek Regex validasyonunun çalıştığını doğrula (Örn: `test@test` yazıp hata olduğunu, `.com` ekleyince hatanın silindiğini göster).
   - Mesaj kısmına 10 karakterden kısa bir şey yazıp hata mesajını tetikle.
   - Formu düzgünce doldur ve submit et. Simüle edilmiş "Loading" durumunda butonun disabled olduğunu ve spinner döndüğünü göster. Ardından gelen başarı Alert mesajını ekranda göster.
   - **Kod Gösterimi:** `src/components/forms/ContactForm.tsx` dosyasını aç. State olarak tek bir `formData` objesini nasıl yönettiğini (controlled form) ve `validate` fonksiyonunu açıkla.

4. **Responsive (Duyarlı) ve Erişilebilirlik Testi (0.5 dk)**
   - Tarayıcıda Geliştirici Seçeneklerini (F12) açıp cihaz araç çubuğuna (Device Toolbar) gel.
   - Ekranı "Tablet" veya "Mobil" boyutlarına küçült.
   - Formun, gridlerin ve Header'daki yönlendirmelerin tek sütuna sorunsuz düştüğünü göster.
   - Header'da "Hamburger Menü" ikonuna basıp mobil menünün çalıştığını göster.
   - Klavye (Tab tuşu) ile form üzerinde dolaşılabildiğini (a11y - Accessibility) hızlıca kanıtla.

## 📌 Olası Eksikler ve Geliştirme Notları (Gelecek Vizyonu)

- Şu an veri `.json` dosyasından mock/fake fetch edilmektedir. İleride gerçek bir Node.js/Express.js backend'ine bağlanabilir.
- Form gönderimi simülasyondur, bir SMTP veya EmailJS gibi bir servise entegre edilmemiştir.
- Karanlık Mod (Dark Mode) için `tailwind.config` içine sınıf eklenebilir. Projeye Theme Context dahil edilerek uygulanabilir.
- Daha gelişmiş hata ayıklama sistemleri veya test kütüphaneleri (Jest & React Testing Library) eklenebilir.

## 🚀 Proje Çalıştırma Talimatları
1. Terminalde proje klasöründe olduğunuzdan emin olun.
2. Eğer node_modules yoksa veya dependency eklendiyse: `npm install` komutunu çalıştırın.
3. Projeyi başlatmak için: `npm run dev` komutunu çalıştırın.
4. Çıkan `http://localhost:5173` linkini Ctrl+Tıklayarak (veya tarayıcıya kopyalayarak) açın.
