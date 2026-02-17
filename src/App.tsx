import React from 'react'
import './style.css'

const App: React.FC = () => {
  return (
    <div className="page">
      <h1>Yiğit Kerem Canbay</h1>

      <h2>Kişisel Bilgiler</h2>

      <p>Fırat Üniversitesi</p>
      <p>Teknoloji Fakültesi</p>
      <p>Yazılım Mühendisliği (3. Sınıf)</p>

      <hr />

      <p>Bu sayfa web programlama dersi için hazırlanmış basit bir ana sayfadır.</p>

      <p>
        Öğrenci Numaram: <strong>235541046</strong>
      </p>

      <p>Ders: Web Programlama / React Giriş</p>
    </div>
  )
}

export default App

