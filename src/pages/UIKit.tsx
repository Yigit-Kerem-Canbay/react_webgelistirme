
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import {
    Card,
    CardHeader,
    CardImage,
    CardTitle,
    CardContent,
    CardFooter,
} from '../components/Card'
import { Alert } from '../components/Alert'
import { Save, Trash2, ArrowRight } from 'lucide-react'

export function UIKit() {
    return (
        <div className="max-w-7xl mx-auto p-8 space-y-16">
            <div className="border-b pb-6 dark:border-gray-800">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    UI Kit
                </h1>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    Projede kullanilan ozel bilesenlerin listesi.
                </p>
            </div>

            {/* Buttons Section */}
            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                        Buttons
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Farkli varyantlar, boyutlar ve durumlar icin hazirlanmis Button bileseni.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Variants */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">
                            Varyantlar (Primary, Secondary, Danger, Ghost)
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary">Primary Button</Button>
                            <Button variant="secondary">Secondary Button</Button>
                            <Button variant="danger">Danger Button</Button>
                            <Button variant="ghost">Ghost Button</Button>
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">
                            Boyutlar (sm, md, lg)
                        </h3>
                        <div className="flex flex-wrap items-center gap-4">
                            <Button variant="primary" size="sm">
                                Small
                            </Button>
                            <Button variant="primary" size="md">
                                Medium
                            </Button>
                            <Button variant="primary" size="lg">
                                Large
                            </Button>
                        </div>
                    </div>

                    {/* States */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">
                            Durumlar (Disabled, Loading, Icon)
                        </h3>
                        <div className="flex flex-wrap items-center gap-4">
                            <Button variant="primary" disabled>
                                Disabled
                            </Button>
                            <Button variant="secondary" isLoading>
                                Loading
                            </Button>
                            <Button variant="primary">
                                <Save className="w-4 h-4 mr-2" />
                                Kaydet
                            </Button>
                            <Button variant="danger" aria-label="Sil">
                                <Trash2 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost">
                                Sonraki <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inputs Section */}
            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                        Inputs
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Label, help text ve error message destekleyen form bilesenleri.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Input
                        label="Kullanici Adi"
                        placeholder="ornek_kullanici"
                        helpText="Kullanici adiniz genel profilinizde gorunur."
                    />
                    <Input label="E-posta" type="email" placeholder="ornek@email.com" required />
                    <Input
                        label="Sifre"
                        type="password"
                        placeholder="••••••••"
                        error="Sifre en az 8 karakter olmalidir."
                    />
                    <Input label="Pasif (Disabled) Input" placeholder="Bu input su an kapali" disabled />
                </div>
            </section>

            {/* Alerts Section */}
            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                        Alerts
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Kullaniciya bilgi vermek icin 4 farkli tipte dismissible (kapatilabilir)
                        Alert bileseni.
                    </p>
                </div>

                <div className="space-y-4 max-w-2xl">
                    <Alert variant="info" title="Bilgilendirme" dismissible>
                        Sistemde bakim calismasi yapilacaktir. Lutfen islerinizi kaydedin.
                    </Alert>
                    <Alert variant="success" title="Basarili!" dismissible>
                        Profil bilgileriniz basariyla guncellendi.
                    </Alert>
                    <Alert variant="warning" title="Uyari">
                        Sifrenizin suresi 3 gun icinde dolacaktir.
                    </Alert>
                    <Alert variant="error" title="Baglanti Hatasi" dismissible>
                        Sunucuya ulasilamiyor. Lutfen internet baglantinizi kontrol edip tekrar
                        deneyin.
                    </Alert>
                </div>
            </section>

            {/* Cards Section */}
            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                        Cards
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Icerik gruplamak icin kullanilan, gorsel, baslik ve footer destekleyen
                        Card bilesenleri.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Elevated Variant */}
                    <Card variant="elevated">
                        <CardImage src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" alt="React Kodu" />
                        <CardHeader>
                            <CardTitle>Elevated Varyanti</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Bu kart cevresinde belirgin bir golge barindirir. Genelde anasayfa
                                listelemelerinde kullanilir.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Detaylari Gor</Button>
                        </CardFooter>
                    </Card>

                    {/* Outlined Variant */}
                    <Card variant="outlined">
                        <CardHeader>
                            <CardTitle>Outlined Varyanti</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Outlined kartlarda sadece minimalist bir sinir cizgisi (border)
                                bulunur, arka plan rengi transparan kalabilir. Golge icermez.
                            </p>
                        </CardContent>
                        <CardFooter className="justify-end gap-2 bg-transparent border-t-0 p-6 pt-0 mt-0">
                            <Button variant="ghost">Iptal</Button>
                            <Button>Kaydet</Button>
                        </CardFooter>
                    </Card>

                    {/* Filled Variant */}
                    <Card variant="filled">
                        <CardHeader>
                            <CardTitle>Filled Varyanti</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Bu kartin bir border'i veya golgesi yoktur ancak arka plan rengi
                                ayirt edici bir yapiya (`muted` rengi) sahiptir.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
