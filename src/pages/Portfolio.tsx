import { useState } from 'react'
import {
    Card,
    CardImage,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '../components/Card'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Alert } from '../components/Alert'

export function Portfolio() {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Simulate form submission
        setSubmitStatus('success')
        setTimeout(() => setSubmitStatus('idle'), 5000)
    }

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-primary z-50 transition-all"
            >
                Ana icerige atla
            </a>

            <div className="min-h-screen bg-surface dark:bg-gray-900 transition-colors duration-200">
                <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

                    {/* Hakkimda Bolumu */}
                    <section id="hakkimda" className="scroll-mt-24">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-10 tracking-tight">
                            Hakkimda
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
                            <figure className="shrink-0 w-full sm:w-64 md:w-72">
                                <div className="aspect-square overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-900/5 dark:ring-white/10">
                                    <img
                                        src="/profil.jpg"
                                        alt="Yigit Kerem Canbay"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        onError={(e) => {
                                            // Fallback profile image if local picture is missing
                                            ; (e.target as HTMLImageElement).src =
                                                'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2574&auto=format&fit=crop'
                                        }}
                                    />
                                </div>
                            </figure>
                            <div className="flex-1 space-y-6">
                                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    <strong className="font-semibold text-gray-900 dark:text-white">Fırat Universitesi</strong> Yazilim Muhendisligi 3. sinif ogrencisiyim.
                                    Web gelistirme ve modern JavaScript teknolojileriyle dogrudan
                                    ilgileniyorum.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    Front-end alaninda kendimi gelistirerek yenilikci, kullanici
                                    odakli arayuzler ureten tam zamanli bir gelistirici olmayi hedefliyorum.
                                </p>

                                <div className="pt-4">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                                        Kullanilan Teknolojiler
                                    </h3>
                                    <div className="flex flex-wrap gap-2.5">
                                        {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-4 py-1.5 bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 rounded-full text-sm font-semibold transition-colors hover:bg-primary hover:text-white cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projeler Bolumu */}
                    <section id="projeler" className="scroll-mt-24">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-10 tracking-tight">
                            Projelerim
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="hover:shadow-lg transition-shadow duration-300">
                                <CardImage
                                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                                    alt="Todo Uygulamasi"
                                />
                                <CardHeader>
                                    <CardTitle>Todo Uygulamasi</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                                        Gunluk yapilacaklar listesini yonetmek icin gelistirilmis
                                        basit ve anlasilir bir web uygulamasi. React Hook'lari
                                        kullanilarak state yonetimi saglanmistir.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="secondary" className="w-full">
                                        Projeyi Incele
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow duration-300">
                                <CardImage
                                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
                                    alt="Blog Sitesi"
                                />
                                <CardHeader>
                                    <CardTitle>Blog Sitesi</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                                        Kisisel yazi ve notlarimi paylastigim modern tasarimli blog
                                        projesi. Tailwind CSS entegrasyonu ile responsive mimaride
                                        hazirlanmistir.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="secondary" className="w-full">
                                        Projeyi Incele
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card variant="outlined" className="flex flex-col items-center justify-center p-8 border-dashed border-2 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span className="text-3xl text-primary font-light">+</span>
                                </div>
                                <h3 className="font-medium text-gray-900 dark:text-white">Yeni Proje Ekle</h3>
                                <p className="text-sm text-gray-500 text-center mt-2">Yakinda yeni projeler eklenecektir.</p>
                            </Card>
                        </div>
                    </section>

                    {/* Iletisim Bolumu */}
                    <section id="iletisim" className="scroll-mt-24 max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
                            Iletisim
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Benimle iletisime gecmek icin asagidaki formu kullanabilirsiniz.
                        </p>

                        {submitStatus === 'success' && (
                            <Alert variant="success" title="Mesajiniz Gonderildi!" dismissible className="mb-8">
                                Size en kisa surede donus yapacagim. Tesekkurler!
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Input
                                    label="Ad Soyad"
                                    name="name"
                                    placeholder="Yigit Kerem"
                                    required
                                />
                                <Input
                                    label="E-posta"
                                    name="email"
                                    type="email"
                                    placeholder="ornek@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Konu
                                </label>
                                <select
                                    required
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                                >
                                    <option value="">-- Seciniz --</option>
                                    <option value="is">Is Teklifi</option>
                                    <option value="soru">Soru</option>
                                    <option value="oneri">Oneri</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Mesajiniz
                                </label>
                                <textarea
                                    rows={5}
                                    required
                                    className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-500 min-h-[120px] resize-y"
                                    placeholder="Nasil yardimci olabilirim?"
                                ></textarea>
                            </div>

                            <div className="pt-2">
                                <Button type="submit" size="lg" className="w-full sm:w-auto min-w-[200px]">
                                    Gonder
                                </Button>
                            </div>
                        </form>
                    </section>
                </main>

                <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-10 mt-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                        <div className="flex space-x-6 mb-6">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">GitHub</a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Twitter</a>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            &copy; 2025 Yigit Kerem Canbay. Tum haklari saklidir.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
}
