import React from 'react'
import './style.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <h1>Yigit Kerem Canbay - Kisisel Portfolyo</h1>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li>
              <a href="#hakkimda">Hakkimda</a>
            </li>
            <li>
              <a href="#projeler">Projeler</a>
            </li>
            <li>
              <a href="#iletisim">Iletisim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>

          <figure>
            <img src="/profil.jpg" alt="Yigit Kerem Canbay'in vesikalik fotografi" />
            <figcaption>Yigit Kerem Canbay</figcaption>
          </figure>

          <p>
            Fırat Universitesi Yazilim Muhendisligi 3. sinif ogrencisiyim. Web gelistirme ve
            modern JavaScript teknolojileriyle ilgileniyorum.
          </p>
          <p>Front-end alaninda kendimi gelistirerek tam zamanli gelistirici olmayi hedefliyorum.</p>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>Todo Uygulamasi</h3>
            <p>Gunluk yapilacaklar listesini yonetmek icin basit bir web uygulamasi.</p>
            <img src="/todo.png" alt="Todo uygulamasi ana ekran goruntusu" />
          </article>

          <article>
            <h3>Blog Sitesi</h3>
            <p>Kisisel yazi ve notlarimi paylastigim basit bir blog projesi.</p>
            <img src="/blog.png" alt="Blog sitesi anasayfa goruntusu" />
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                  defaultValue=""
                >
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Yigit Kerem Canbay. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}

export default App

