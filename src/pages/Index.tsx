"use client"
import {
  MessageCircle,
  CheckCircle,
  Sparkles,
  Shield,
  TrendingUp,
  Users,
  Clock,
  FileText,
  Package,
  Award,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Heart,
  TrendingDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import heroImage from "@/assets/hero-image.jpg"

const Index = () => {
  const whatsappNumber = "6281234567890"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Makmur%20Baru%20Global,%20saya%20tertarik%20untuk%20memulai%20brand%20kosmetik%20sendiri`

  const openWhatsApp = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <Badge className="bg-accent text-accent-foreground border-0 text-sm px-4 py-1.5">
                ✨ Peluang Bisnis 2024
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Mulai Brand Kosmetik Sendiri <span className="text-primary">Tanpa Modal Besar!</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Mulai dari 500 pcs, legalitas dan BPOM diurus, produk halal dan aman. Cocok untuk kamu yang baru PHK dan
                ingin membangun bisnis sendiri!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="whatsapp" size="lg" className="text-base font-semibold" onClick={openWhatsApp}>
                  <MessageCircle className="h-5 w-5" />
                  Konsultasi Gratis via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base font-medium bg-transparent"
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Lihat Cara Kerjanya
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>MOQ Rendah 500 pcs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Legalitas BPOM</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Produk Halal</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage || "/placeholder.svg"}
                  alt="Pemilik brand kosmetik sukses"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-xl p-6 shadow-lg hidden md:block">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Brand Sukses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Empathy Section - FEAR TO SOLUTION TRANSFORMATION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-red-50/20 to-primary/10 dark:via-red-950/10">
        <div className="container mx-auto px-4">
          {/* THE FEAR: THE PROBLEM */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Fear/Problem */}
              <div className="space-y-6">
                <Badge className="bg-red-100 text-red-700 border-red-200">😰 Realita yang Menyakitkan</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  <span className="text-red-600">Kehilangan Pekerjaan</span> Seperti Mimpi Buruk
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <div className="flex gap-4 items-start">
                    <TrendingDown className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <p>Tiba-tiba kehilangan penghasilan bulanan yang stabil</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Heart className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <p>Merasa percaya diri hancur dan takut masa depan tidak jelas</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Users className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <p>Khawatir keluarga bisa kelaparan jika tidak cepat cari kerja</p>
                  </div>
                </div>
              </div>

              {/* Right: Fear Visual */}
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center border-2 border-red-200/50">
                <div className="text-center space-y-4">
                  <div className="text-6xl">😔</div>
                  <p className="text-2xl font-bold text-red-600">PHK tanpa solusi</p>
                  <p className="text-sm text-muted-foreground max-w-xs">Ribuan orang mengalami ini setiap hari</p>
                </div>
              </div>
            </div>
          </div>

          {/* THE TURNING POINT: SOLUTION BEGINS */}
          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <Badge className="bg-accent text-accent-foreground border-0 px-6 py-2 text-base font-semibold">
                ⚡ TAPI TUNGGU... Ada Jalan Keluar!
              </Badge>
            </div>
          </div>

          {/* THE HOPE: SUCCESS STORIES */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">
              <span className="text-primary">Ribuan Orang Sudah Buktikan</span> PHK Bisa Jadi Awal Kesuksesan
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Success Story 1 */}
              <Card className="border-primary/30 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-xl transition-all duration-300 hover:border-primary/60">
                <CardContent className="pt-8">
                  <div className="space-y-6">
                    {/* Timeline of transformation */}
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-600 font-bold">
                            1
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Sebelum: Kena PHK dari Bank</p>
                          <p className="text-sm text-muted-foreground">
                            Gaji berhenti, utang menumpuk, khawatir masa depan
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-600 font-bold">
                            2
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Proses: Konsultasi Makmur</p>
                          <p className="text-sm text-muted-foreground">Dibantu dari A-Z, nggak perlu khawatir teknis</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                            3
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Sesudah: Brand "Glow Beauty" Sukses!</p>
                          <p className="text-sm text-muted-foreground">
                            Omset Rp 50 juta/bulan, nggak perlu balik ke kantor
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm italic text-muted-foreground mb-3">
                        "Saya pikir hidup saya selesai saat kena PHK. Ternyata ini awal dari kesuksesan terbesar. Terima
                        kasih Makmur Baru Global!"
                      </p>
                      <p className="text-sm font-semibold text-foreground">— Ibu Siti Rahman, Jakarta</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Success Story 2 */}
              <Card className="border-accent/30 shadow-lg bg-gradient-to-br from-accent/5 to-primary/5 hover:shadow-xl transition-all duration-300 hover:border-accent/60">
                <CardContent className="pt-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-600 font-bold">
                            1
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Sebelum: Terkena PHK dari Pabrik</p>
                          <p className="text-sm text-muted-foreground">
                            Umur sudah 45 tahun, takut nggak ada yang terima
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-600 font-bold">
                            2
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Proses: Mulai dari Nol</p>
                          <p className="text-sm text-muted-foreground">Modal kecil, dukungan tim, formula terbukti</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                            3
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Sesudah: 15+ Retail Partner!</p>
                          <p className="text-sm text-muted-foreground">
                            Brand "Natural Care" tersebar di berbagai toko
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm italic text-muted-foreground mb-3">
                        "PHK yang saya anggap musibah, ternyata adalah berkah. Sekarang saya bos sendiri dan penghasilan
                        lebih banyak dari dulu!"
                      </p>
                      <p className="text-sm font-semibold text-foreground">— Bapak Andi Wijaya, Bandung</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* THE RESOLUTION: CALL TO ACTION */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">Ini Bukan Tentang PHK...</h3>
            <p className="text-xl text-muted-foreground mb-2">
              <strong className="text-primary">Ini tentang PELUANG untuk hidup lebih baik.</strong>
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Ribuan orang sudah buktikan bisa sukses dari nol. Giliran Anda!
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={openWhatsApp}
              className="font-semibold px-8 py-6 h-auto text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Mulai Cerita Sukses Saya Sekarang!
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Konsultasi gratis, tanpa biaya, tanpa kewajiban. Kami siap dengarkan cerita Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Solution/Value Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20">🎯 Solusi Lengkap</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Makmur Baru Global Bantu Semua <span className="text-primary">dari A-Z</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Konsultasi, formulasi, sample, legalitas, hingga produksi. Kami dampingi setiap langkah bisnis Anda!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Package,
                title: "MOQ Rendah",
                description: "Mulai dari 500 pcs saja, cocok untuk pemula yang baru memulai bisnis",
              },
              {
                icon: Shield,
                title: "Legalitas BPOM",
                description: "Kami urus semua legalitas dan sertifikasi BPOM produk Anda",
              },
              {
                icon: Award,
                title: "Produk Halal",
                description: "Semua produk dijamin halal dan aman untuk konsumen Muslim",
              },
              {
                icon: Sparkles,
                title: "Inovasi Tren",
                description: "Formula terkini mengikuti tren pasar kosmetik Indonesia",
              },
              {
                icon: Clock,
                title: "Proses Cepat",
                description: "Dari konsultasi hingga produksi hanya 4-6 minggu",
              },
              {
                icon: TrendingUp,
                title: "Gratis Konsultasi",
                description: "Konsultasi bisnis dan formula gratis via WhatsApp",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="whatsapp" size="lg" onClick={openWhatsApp}>
              <MessageCircle className="h-5 w-5" />
              Mulai Konsultasi Gratis Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Product Types Section - WITH IMAGES */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-secondary/20 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/40">✨ Produk Kami</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Jenis-Jenis <span className="text-primary">Produk Kami</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai kategori produk kosmetik berkualitas yang bisa Anda produksi dengan brand sendiri
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                title: "Skincare",
                product: "Serum Wajah",
                description: "Produk perawatan wajah seperti serum, toner, moisturizer, dan face wash",
                image: "/skincare-product.jpg",
              },
              {
                title: "Body Care",
                product: "Body Wash",
                description: "Sabun mandi, body lotion, scrub, dan produk perawatan tubuh lainnya",
                image: "/bodycare-product.jpg",
              },
              {
                title: "Makeup",
                product: "Lipcream",
                description: "Lipstik, cushion, bedak, eyeshadow, dan makeup essentials",
                image: "/makeup-product.jpg",
              },
              {
                title: "Hair Care",
                product: "Shampoo",
                description: "Shampoo, conditioner, hair mask, dan produk perawatan rambut",
                image: "/haircare-product.jpg",
              },
              {
                title: "Fragrance/Perfume",
                product: "Eau de Parfum",
                description: "Parfum, body mist, dan produk wewangian berkualitas premium",
                image: "/fragrance-product.jpg",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur group overflow-hidden flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-muted h-48 w-full group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader className="text-center pb-3 flex-grow">
                  <CardTitle className="text-lg font-bold text-foreground mb-2">{product.title}</CardTitle>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mx-auto">
                    {product.product}
                  </div>
                </CardHeader>
                <CardContent className="text-center py-2">
                  <p className="text-xs text-muted-foreground leading-snug">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Tertarik dengan salah satu produk? Konsultasikan kebutuhan Anda dengan kami!
            </p>
            <Button variant="whatsapp" size="lg" onClick={openWhatsApp}>
              <MessageCircle className="h-5 w-5" />
              Tanya Produk via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/40">📋 Proses Mudah</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Cara Kerja <span className="text-primary">Sederhana & Jelas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              6 langkah mudah dari konsultasi hingga produk jadi siap jual
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Konsultasi",
                    description: "Diskusi kebutuhan brand, target market, dan budget via WhatsApp",
                  },
                  {
                    number: "02",
                    title: "Formulasi",
                    description: "Tim R&D kami bantu pilih formula terbaik sesuai kebutuhan",
                  },
                  {
                    number: "03",
                    title: "Sample Produk",
                    description: "Kami kirimkan sample untuk testing dan approval",
                  },
                  {
                    number: "04",
                    title: "Pengurusan BPOM",
                    description: "Kami urus semua legalitas BPOM dan sertifikasi halal",
                  },
                  {
                    number: "05",
                    title: "Produksi",
                    description: "Produksi massal dengan quality control ketat",
                  },
                  {
                    number: "06",
                    title: "Produk Siap",
                    description: "Produk dikemas rapi dan siap untuk dipasarkan",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20">❓ Pertanyaan Umum</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Yang Sering <span className="text-primary">Ditanyakan</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Berapa modal minimal untuk memulai?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Modal bisa dimulai dari Rp 10-15 juta untuk MOQ 500 pcs, sudah termasuk formulasi, kemasan, dan
                    legalitas BPOM. Kami siap bantu konsultasi budget sesuai kebutuhan Anda.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" onClick={openWhatsApp}>
                    Tanya lebih lanjut via WhatsApp →
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Berapa lama proses dari awal sampai produk jadi?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Normalnya 4-6 minggu dari konsultasi hingga produk siap. Waktu bisa lebih cepat tergantung
                    kompleksitas produk dan pengurusan legalitas.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" onClick={openWhatsApp}>
                    Tanya lebih lanjut via WhatsApp →
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Apakah ada bantuan untuk desain kemasan?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Ya! Kami punya tim desainer yang siap bantu desain kemasan menarik sesuai brand identity Anda.
                    Konsultasi desain juga gratis.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" onClick={openWhatsApp}>
                    Tanya lebih lanjut via WhatsApp →
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Bagaimana dengan legalitas dan sertifikat halal?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Kami bantu urus semua legalitas termasuk BPOM dan sertifikat halal dari MUI. Anda tinggal fokus pada
                    marketing dan penjualan saja!
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" onClick={openWhatsApp}>
                    Tanya lebih lanjut via WhatsApp →
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Apakah bisa buat produk custom sesuai keinginan?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Tentu saja! Kami bisa custom formula, warna, aroma, dan kemasan sesuai visi brand Anda. Tim R&D kami
                    siap bantu wujudkan konsep produk impian Anda.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" onClick={openWhatsApp}>
                    Tanya lebih lanjut via WhatsApp →
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/40">📦 Layanan Kami</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Paket <span className="text-primary">Lengkap & Fleksibel</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilih layanan sesuai kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Paket Starter",
                description: "Cocok untuk pemula yang baru mulai bisnis kosmetik",
                features: ["MOQ 500 pcs", "1 Jenis produk", "Konsultasi formula", "Sample gratis", "Kemasan basic"],
              },
              {
                title: "Paket Professional",
                description: "Untuk brand yang ingin berkembang lebih cepat",
                features: [
                  "MOQ 1000 pcs",
                  "2-3 Jenis produk",
                  "Custom formula",
                  "Desain kemasan premium",
                  "Legalitas BPOM",
                ],
                featured: true,
              },
              {
                title: "Paket Enterprise",
                description: "Solusi lengkap untuk brand besar",
                features: ["MOQ 2000+ pcs", "Unlimited produk", "Full custom", "Brand consultant", "Marketing support"],
              },
            ].map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.featured ? "border-primary shadow-xl" : "border-border"}`}>
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground border-0 shadow-md">⭐ Paling Populer</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 space-y-2">
                    <p className="text-center text-sm text-muted-foreground">Butuh penawaran harga?</p>
                    <Button variant="whatsapp" className="w-full" onClick={openWhatsApp}>
                      <MessageCircle className="h-4 w-4" />
                      Tanya via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20">⭐ Testimoni</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Kisah Sukses <span className="text-primary">Klien Kami</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Ibu Rina",
                brand: "Beauty Glow",
                city: "Surabaya",
                message:
                  "Alhamdulillah setelah PHK dari pabrik, sekarang punya brand sendiri dengan omset 30 juta/bulan. Terima kasih Makmur Baru Global!",
                rating: 5,
              },
              {
                name: "Pak Budi",
                brand: "Herbal Skin Care",
                city: "Bandung",
                message:
                  "Dari awal sangat terbantu dengan konsultasi gratis. Sekarang produk saya sudah ada di 20 toko dan marketplace!",
                rating: 5,
              },
              {
                name: "Ibu Maya",
                brand: "Glow Up Cosmetics",
                city: "Jakarta",
                message:
                  "MOQ 500 pcs sangat membantu saya yang baru mulai. Sekarang sudah repeat order yang ke-5 kali. Highly recommended!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.message}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.brand} • {testimonial.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Terpercaya & <span className="text-primary">Bersertifikat</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { icon: Shield, label: "BPOM Certified" },
                { icon: Award, label: "Halal MUI" },
                { icon: FileText, label: "HAKI Terdaftar" },
                { icon: CheckCircle, label: "ISO Certified" },
              ].map((cert, index) => (
                <div key={index} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <cert.icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{cert.label}</p>
                </div>
              ))}
            </div>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="space-y-4 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground">PT Makmur Baru Global</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2 justify-center md:justify-start">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Jl. Industri Raya No. 123, Kawasan Industri, Bekasi 17530</span>
                    </p>
                    <p className="flex items-center gap-2 justify-center md:justify-start">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>+62 812-3456-7890</span>
                    </p>
                    <p className="flex items-center gap-2 justify-center md:justify-start">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>info@makmurbaruglobal.com</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer with CTA */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Siap Mulai Brand Kosmetik Anda?</h2>
            <p className="text-lg text-background/80">
              Konsultasi gratis sekarang dan wujudkan impian punya brand sendiri!
            </p>
            <Button variant="whatsapp" size="lg" className="text-lg px-8 py-6 h-auto" onClick={openWhatsApp}>
              <MessageCircle className="h-6 w-6" />
              Chat WhatsApp Sekarang
            </Button>

            <div className="pt-12 border-t border-background/20">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <p className="font-bold text-xl mb-2">Makmur Baru Global</p>
                  <p className="text-sm text-background/70">Partner terpercaya untuk bisnis kosmetik Anda</p>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-background hover:text-background/80 hover:bg-background/10"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-background hover:text-background/80 hover:bg-background/10"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-background hover:text-background/80 hover:bg-background/10"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="mt-8 text-sm text-background/60 text-center">
                © 2024 PT Makmur Baru Global. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
