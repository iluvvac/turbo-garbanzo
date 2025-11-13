"use client";
import {
  MessageCircle,
  CheckCircle,
  Sparkles,
  Shield,
  TrendingUp,
  Clock,
  FileText,
  Package,
  Award,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/testmain.webp";
import logo from "/logo.png";
import testTwo from "/stage-1.webp";
import testThree from "/stage-2.webp";
import testFour from "/stage-3.webp";
import stepOne from "/step-1.webp";

import labOne from "/lab-1.webp";

const Index = () => {
  const whatsappNumber = "62812321555";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Makmur%20Baru%20Global,%20saya%20tertarik%20untuk%20memulai%20brand%20kosmetik%20sendiri`;

  const openWhatsApp = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-background sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          <div className="flex items-center text-2xl font-bold text-primary">
          {/* <img
            src={logo || "/placeholder.svg"}
            alt=""
            className="w-16"
          /> */}
            Makmur Baru Global
          </div>
          <div className="hidden md:flex space-x-4">
            <Button
              variant="link"
              onClick={() =>
                document
                  .getElementById("solution")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Solusi Lengkap
            </Button>
            <Button
              variant="link"
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Jenis Produk
            </Button>
            <Button
              variant="link"
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Cara Kerja
            </Button>
            <Button
              variant="link"
              onClick={() =>
                document
                  .getElementById("packages")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Paket
            </Button>
            <Button
              variant="link"
              onClick={() =>
                document
                  .getElementById("why-us")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Kenapa Kami
            </Button>
            <Button
              variant="link"
              onClick={() =>
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Testimonial
            </Button>
            <Button
              variant="link"
              onClick={() =>
                document
                  .getElementById("faq")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              FAQ
            </Button>
            <Button variant="whatsapp" onClick={openWhatsApp}>
              <MessageCircle className="h-5 w-5" />
              Konsultasi
            </Button>
          </div>
          <div className="md:hidden">
            <button
              className="text-primary focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) {
                  menu.classList.toggle("hidden");
                }
              }}
            >
              ☰
            </button>
          </div>
        </div>
        <div id="mobile-menu" className="hidden md:hidden bg-background">
          <div className="space-y-2 px-4 py-4">
            <Button
              variant="link"
              className="w-full text-left"
              onClick={() => {
                document
                  .getElementById("solution")
                  ?.scrollIntoView({ behavior: "smooth" });
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
            >
              Solusi Lengkap
            </Button>
            <Button
              variant="link"
              className="w-full text-left"
              onClick={() => {
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
            >
              Jenis Produk
            </Button>
            <Button
              variant="link"
              className="w-full text-left"
              onClick={() => {
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" });
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
            >
              Cara Kerja
            </Button>
            <Button
              variant="link"
              className="w-full text-left"
              onClick={() => {
                document
                  .getElementById("packages")
                  ?.scrollIntoView({ behavior: "smooth" });
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
            >
              Paket
            </Button>
            <Button
              variant="link"
              className="w-full text-left"
              onClick={() => {
                document
                  .getElementById("why-us")
                  ?.scrollIntoView({ behavior: "smooth" });
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
            >
              Kenapa Kami
            </Button>
            <Button
              variant="link"
              className="w-full text-left"
              onClick={() => {
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" });
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
            >
              Testimonial
            </Button>
            <Button
              variant="link"
              className="w-full text-left"
              onClick={() => {
                document
                  .getElementById("faq")
                  ?.scrollIntoView({ behavior: "smooth" });
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
            >
              FAQ
            </Button>
            <Button
              variant="whatsapp"
              className="w-full"
              onClick={() => {
                openWhatsApp();
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
            >
              <MessageCircle className="h-5 w-5" />
              Konsultasi
            </Button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <Badge className="bg-accent text-accent-foreground border-0 text-sm px-4 py-1.5">
                ✨ Peluang Bisnis 2024
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Mulai Brand Kosmetik Sendiri{" "}
                <span className="text-primary">Tanpa Modal Besar!</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Mulai dari 500 pcs, legalitas dan BPOM diurus, produk halal dan
                aman. Cocok untuk kamu yang baru PHK dan ingin membangun bisnis
                sendiri!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="text-base font-semibold"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="h-5 w-5" />
                  Konsultasi Gratis via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base font-medium bg-transparent"
                  onClick={() =>
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
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
                  alt=""
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

      {/* Problem/Empathy Section - REDESIGNED WITH FLOWING JOURNEY NARRATIVE */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient with diagonal accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-background to-emerald-50"></div>
        <div className="absolute -top-40 right-0 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Main Journey Section */}
          <div className="max-w-6xl mx-auto">
            {/* Opening Question */}
            <div className="mb-16">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                <span className="text-primary">Baru Aja Kena PHK</span>
                <br />
                dan Bingung Harus Kemana?
              </h1>
              {/* <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Hilangnya pekerjaan terasa seperti bencana. Penghasilan
                tiba-tiba berhenti, utang menumpuk, dan masa depan terasa tidak
                pasti. Tapi ada kabar baik:{" "}
                <strong className="text-primary">
                  ribuan orang sudah membuktikan bahwa PHK bisa menjadi awal
                  kesuksesan.
                </strong>
              </p> */}
            </div>

            {/* Journey Cards with Diagonal Flow */}
            <div className="space-y-8 mb-16">
              {/* Stage 1: Problem */}
              <div className="relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 md:order-2">
                    <Badge className="bg-red-100/80 text-red-700 border-red-200 w-fit">
                      😰 Kondisi Sekarang
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      Ingin Coba Bisnis, Tapi...
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Kalo cuma tunggu lowongan kerja baru, nggak cukup. Tapi
                      kalo mau berbisnis harus punya modal yang besar. Gimana
                      caranya mulai bisnis dengan modal minim tapi tetap
                      hasilnya bagus?
                    </p>
                  </div>
                  <div className="md:order-1">
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border-2 border-red-200/40 flex items-center justify-center">
                      <img
                        src={testTwo || "/placeholder.svg"}
                        alt=""
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagonal Divider */}
              <div className="flex justify-center my-4">
                <div className="text-3xl text-primary opacity-50">↓</div>
              </div>

              {/* Stage 2: Discovery */}
              <div className="relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <Badge className="bg-yellow-100/80 text-yellow-700 border-yellow-200 w-fit">
                      ❓ Bingung
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      Nggak Tahu Mulai dari Mana
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Kalaupun ada ide bisnis, pertanyaan langsung muncul.
                      Gimana caranya buat produk sendiri? Harus ke pabrik?
                      Berapa modal beneran? Berapa lama prosesnya? Apa yang
                      perlu legalitas? Ini yang bikin banyak orang stuck dan
                      akhirnya nggak jadi apa-apa.
                    </p>
                  </div>
                  <div>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border-2 border-yellow-200/40 flex items-center justify-center">
                      <img
                        src={testThree || "/placeholder.svg"}
                        alt=""
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagonal Divider */}
              <div className="flex justify-center my-4">
                <div className="text-3xl text-primary opacity-50">↓</div>
              </div>

              {/* Stage 3: Action */}
              <div className="relative">
                <div className="grid md:grid-cols-2 gap-8 items-center md:direction-reverse">
                  <div className="space-y-4 md:order-2">
                    <Badge className="bg-emerald-100/80 text-emerald-700 border-emerald-200 w-fit">
                      ✨ Ada Jalannya
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      Dari Nol Menjadi Brand
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Makmur Baru Global hadir untuk menjawab kebingungan ini.
                      Kami spesialis membantu orang seperti kamu yang baru
                      pengin coba bisnis tapi dengan modal kecil. Nggak perlu
                      sewa pabrik, nggak perlu order ribuan barang. Cukup 500
                      pcs, kami yang urus semuanya dari konsultasi, formula,
                      sampel, sampai legalitas BPOM. Kamu tinggal fokus jualan
                      aja.
                    </p>
                  </div>
                  <div className="md:order-1">
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-2 border-emerald-200/40 flex items-center justify-center">
                      <img
                        src={testFour || "/placeholder.svg"}
                        alt=""
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagonal Divider */}
              <div className="flex justify-center my-4">
                <div className="text-3xl text-primary opacity-50">↓</div>
              </div>

              {/* Stage 4: Success
              <div className="relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <Badge className="bg-primary/20 text-primary border-primary/40 w-fit">
                      ✨ Fase Sukses
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      Penghasilan Melebihi Ekspektasi
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Bulan pertama: omset Rp 5 juta. Bulan ketiga: Rp 30 juta.
                      Setahun kemudian: brand Anda dikenal, ada retail partner,
                      revenue stabil Rp 50-100 juta/bulan. Tidak perlu lagi
                      khawatir cicilan rumah. Anda sudah membuktikan:{" "}
                      <strong>PHK adalah peluang emas.</strong>
                    </p>
                  </div>
                  <div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 flex items-center justify-center">
                      <img
                        src={heroImage || "/placeholder.svg"}
                        alt=""
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Real Success Stories - Woven into Narrative */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Kisah Nyata Orang-Orang Seperti Anda
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Story 1 */}
                <div className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-lg">
                      R
                    </div>
                    <div>
                      <p className="font-bold text-foreground">
                        Ibu Rina Rahman
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Brand: Glow Beauty | Surabaya
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-accent">⭐⭐⭐⭐⭐</div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Saya kena PHK setelah 10 tahun kerja di bank. Waktu itu
                    umur sudah 42 tahun, takut nggak ada yang terima. Berkat
                    Makmur, sekarang punya brand sendiri. Omsetnya Rp 50
                    juta/bulan. Terima kasih sudah beri kesempatan kedua!"
                  </p>
                </div>

                {/* Story 2 */}
                <div className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent text-lg">
                      B
                    </div>
                    <div>
                      <p className="font-bold text-foreground">
                        Pak Budi Santoso
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Brand: Natural Care | Bandung
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-accent">⭐⭐⭐⭐⭐</div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Kena PHK saat ekonomi menurun. Uang tabungan cepat habis.
                    Alhamdulillah coba brand kosmetik, sekarang ada 15 retail
                    partner yang menjual produk saya. Bukan mimpi lagi, ini
                    nyata!"
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-16 text-center space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                <span className="text-primary">Ini Cerita Mereka.</span>
                <br />
                <span>Giliran Anda?</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Jangan biarkan PHK menjadi akhir. Mulai cerita sukses Anda hari
                ini. Konsultasi gratis, tanpa komitmen.
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                onClick={openWhatsApp}
                className="font-semibold px-8 py-6 h-auto text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Mulai Perjalanan Sukses Saya Sekarang!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution/Value Section */}
      <section className="py-16 md:py-20" id="solution">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              🎯 Solusi Lengkap
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Makmur Baru Global Bantu Semua{" "}
              <span className="text-primary">dari A-Z</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Konsultasi, formulasi, sample, legalitas, hingga produksi. Kami
              dampingi setiap langkah bisnis Anda!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Package,
                title: "MOQ Rendah",
                description:
                  "Mulai dari 500 pcs saja, cocok untuk pemula yang baru memulai bisnis",
              },
              {
                icon: Shield,
                title: "Legalitas BPOM",
                description:
                  "Kami urus semua legalitas dan sertifikasi BPOM produk Anda",
              },
              {
                icon: Award,
                title: "Produk Halal",
                description:
                  "Semua produk dijamin halal dan aman untuk konsumen Muslim",
              },
              {
                icon: Sparkles,
                title: "Inovasi Tren",
                description:
                  "Formula terkini mengikuti tren pasar kosmetik Indonesia",
              },
              {
                icon: Clock,
                title: "Proses Cepat",
                description: "Dari konsultasi hingga produksi hanya 4-6 minggu",
              },
              {
                icon: TrendingUp,
                title: "Gratis Konsultasi",
                description:
                  "Konsultasi bisnis dan formula gratis via WhatsApp",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
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
      <section
        className="py-16 md:py-20 bg-gradient-to-br from-secondary/20 via-background to-primary/5"
        id="products"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/40">
              ✨ Produk Kami
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Jenis-Jenis <span className="text-primary">Produk Kami</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai kategori produk kosmetik berkualitas yang bisa Anda
              produksi dengan brand sendiri
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                title: "Skincare",
                product: "Serum Wajah",
                description:
                  "Produk perawatan wajah seperti serum, toner, moisturizer, dan face wash",
                image: "/skincare-product.jpg",
              },
              {
                title: "Body Care",
                product: "Body Wash",
                description:
                  "Sabun mandi, body lotion, scrub, dan produk perawatan tubuh lainnya",
                image: "/bodycare-product.jpg",
              },
              {
                title: "Makeup",
                product: "Lipcream",
                description:
                  "Lipstik, cushion, bedak, eyeshadow, dan makeup essentials",
                image: "/makeup-product.jpg",
              },
              {
                title: "Hair Care",
                product: "Shampoo",
                description:
                  "Shampoo, conditioner, hair mask, dan produk perawatan rambut",
                image: "/haircare-product.jpg",
              },
              {
                title: "Fragrance/Perfume",
                product: "Eau de Parfum",
                description:
                  "Parfum, body mist, dan produk wewangian berkualitas premium",
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
                  <CardTitle className="text-lg font-bold text-foreground mb-2">
                    {product.title}
                  </CardTitle>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mx-auto">
                    {product.product}
                  </div>
                </CardHeader>
                <CardContent className="text-center py-2">
                  <p className="text-xs text-muted-foreground leading-snug">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Tertarik dengan salah satu produk? Konsultasikan kebutuhan Anda
              dengan kami!
            </p>
            <Button variant="whatsapp" size="lg" onClick={openWhatsApp}>
              <MessageCircle className="h-5 w-5" />
              Tanya Produk via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section - ENHANCED WITH IMAGES */}
      <section
        id="how-it-works"
        className="py-16 md:py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/40">
              📋 Proses Mudah
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Cara Kerja <span className="text-primary">Sederhana & Jelas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              6 langkah mudah dari konsultasi hingga produk jadi siap jual
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {[
                {
                  number: "01",
                  title: "Konsultasi Bisnis",
                  description:
                    "Diskusi kebutuhan brand Anda, target pasar, budget, dan visi jangka panjang melalui WhatsApp atau call",
                  icon: MessageCircle,
                  image: "/step-1.webp",
                },
                {
                  number: "02",
                  title: "Riset & Formulasi",
                  description:
                    "Tim R&D kami riset pasar dan develop formula produk yang sesuai dengan tren dan kebutuhan target market Anda",
                  icon: Sparkles,
                  image: "/step-2.webp",
                },
                {
                  number: "03",
                  title: "Sample Produk",
                  description:
                    "Kami kirimkan sample produk untuk Anda testing dan approval sebelum produksi massal dimulai",
                  icon: Package,
                  image: "/step-3.webp",
                },
                {
                  number: "04",
                  title: "Pengurusan Legalitas",
                  description:
                    "Kami handle semua perizinan BPOM, sertifikat halal MUI, dan dokumen legal yang diperlukan untuk penjualan",
                  icon: Shield,
                  image: "/step-4.webp",
                },
                {
                  number: "05",
                  title: "Produksi Massal",
                  description:
                    "Produksi dilakukan dengan quality control ketat, menggunakan bahan berkualitas premium dan proses yang higienis",
                  icon: TrendingUp,
                  image: "/step-5.webp",
                },
                {
                  number: "06",
                  title: "Pengiriman & Launch",
                  description:
                    "Produk dikemas premium dan siap dikirim. Kami siap bantu konsultasi strategi launching dan marketing",
                  icon: Award,
                  image: "/step-6.webp",
                },
              ].map((step, index) => {
                const StepIcon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className="relative">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      {/* Image on left for even (0, 2, 4) */}
                      {isEven ? (
                        <div className="md:col-span-1">
                          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center group">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      ) : null}

                      {/* Step Content */}
                      <div
                        className={`${
                          isEven ? "md:col-span-2" : "md:col-span-2"
                        }`}
                      >
                        <div className="flex gap-6 items-start">
                          {/* Number Badge */}
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex flex-col items-center justify-center font-bold text-lg shadow-lg hover:scale-110 transition-transform duration-300">
                              <span className="text-xs opacity-70">STEP</span>
                              <span className="text-xl">{step.number}</span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 pt-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image on right for odd (1, 3, 5) */}
                      {!isEven ? (
                        <div className="md:col-span-1">
                          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center group">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* Divider line (optional) */}
                    {index < 5 && (
                      <div className="flex justify-center my-8">
                        <div className="text-3xl text-primary opacity-50">
                          ↓
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-20 bg-secondary/20" id="packages">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/40">
              📦 Layanan Kami
            </Badge>
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
                description:
                  "Cocok untuk pemula yang baru memulai bisnis kosmetik",
                features: [
                  "MOQ 500 pcs",
                  "1 Jenis produk",
                  "Konsultasi formula",
                  "Sample gratis",
                  "Kemasan basic",
                ],
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
                features: [
                  "MOQ 2000+ pcs",
                  "Unlimited produk",
                  "Full custom",
                  "Brand consultant",
                  "Marketing support",
                ],
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.featured ? "border-primary shadow-xl" : "border-border"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground border-0 shadow-md">
                      ⭐ Paling Populer
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-base">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 space-y-2">
                    <p className="text-center text-sm text-muted-foreground">
                      Butuh penawaran harga?
                    </p>
                    <Button
                      variant="whatsapp"
                      className="w-full"
                      onClick={openWhatsApp}
                    >
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

      {/* Lab Testing & Production Quality Section */}
      <section
        className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10"
        id="why-us"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/20 text-primary border-primary/40">
              🔬 Kualitas Terjamin
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Produk Kami{" "}
              <span className="text-primary">Sudah Teruji di Lab</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Semua produk melalui quality control ketat dengan standar
              internasional. Bahan food-grade, aman untuk kulit, dan sudah
              tersertifikasi halal & BPOM.
            </p>
          </div>

          {/* Image Grid */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Testing Lab Berstandar Internasional",
                  image: "../lab-1.webp",
                  description:
                    "Equipment canggih untuk testing produk keamanan dan kualitas",
                },
                {
                  title: "Production Facility Modern",
                  image: "../lab-2.webp",
                  description:
                    "Pabrik dengan teknologi terkini dan standar hygiene tinggi",
                },
                {
                  title: "Quality Control Ketat",
                  image: "../lab-3.webp",
                  description:
                    "Setiap batch produk dicheck detail sebelum pengiriman",
                },
                {
                  title: "Sertifikat Legalitas",
                  image: "../logo-bpom.jpg",
                  description:
                    "BPOM, Halal MUI, dan legalitas internasional terpenuhi",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-primary/20 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 w-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden group">
                    <img
                      src={`/images/${item.image}?key=${index}&height=200&width=300&query=cosmetics lab production`}
                      alt={item.title}
                      className="w-full h-full scale-145 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="pt-6 pb-4">
                    <h3 className="font-bold text-foreground mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground text-center">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quality Assurance Points */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    Testing Lab Berstandar Internasional
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Semua produk melewati testing ketat untuk keamanan dan
                    efektivitas
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    Quality Control Ketat Setiap Batch
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Inspeksi detail dilakukan sebelum produk dikirim ke tangan
                    Anda
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    Bahan Food-Grade & Aman
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Semua bahan baku dipilih dari supplier terpercaya dan teruji
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    Sertifikat Halal & BPOM
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Produk dilengkapi dengan legalitas yang jelas dan terpercaya
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-foreground mb-4">
              Semua produk aman untuk kulit Anda dan keluarga.{" "}
              <strong>Nggak ada kompromi soal kualitas.</strong>
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={openWhatsApp}
              className="font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              Tanya Tentang Kualitas Produk
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-20" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              ⭐ Testimoni
            </Badge>
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
              <Card
                key={index}
                className="border-primary/20 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <span key={i}>⭐</span>
                        )
                      )}
                    </div>
                    <p className="text-muted-foreground italic">
                      "{testimonial.message}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
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

      {/* Brand & Client Logos Section - NEW */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Dipercaya oleh Ratusan{" "}
              <span className="text-primary">Brand & Klien Kami</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bergabung dengan brand-brand lokal dan nasional yang telah
              berkembang bersama kami
            </p>
          </div>

          {/* Client Logo Grid */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                "Beauty Essence",
                "Glow Cosmetics",
                "Natural Care",
                "Skin Radiance",
                "Luxe Beauty",
                "Premium Skincare",
                "Botanical Bliss",
                "Radiant Glow",
                "Beauty Labs",
                "Crystal Clear",
                "Pure Beauty",
                "Essence Line",
              ].map((brand, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border-2 border-solid border-muted-foreground/30 flex items-center justify-center h-32 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/10 transition-colors">
                      <span className="text-xs font-bold text-muted-foreground group-hover:text-primary">
                        LOGO
                      </span>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {brand}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {[
              { number: "500+", label: "Brand Aktif" },
              { number: "10,000+", label: "Entrepreneur" },
              { number: "100M+", label: "Omset Klien/Bulan" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border/50"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              ❓ Pertanyaan Umum
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Yang Sering <span className="text-primary">Ditanyakan</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Berapa modal minimal untuk memulai?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Modal bisa dimulai dari Rp 10-15 juta untuk MOQ 500 pcs,
                    sudah termasuk formulasi, kemasan, dan legalitas BPOM. Kami
                    siap bantu konsultasi budget sesuai kebutuhan Anda.
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary"
                    onClick={openWhatsApp}
                  >
                    Tanya lebih lanjut via WhatsApp →
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Berapa lama proses dari awal sampai produk jadi?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Normalnya 4-6 minggu dari konsultasi hingga produk siap.
                    Waktu bisa lebih cepat tergantung kompleksitas produk dan
                    pengurusan legalitas.
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary"
                    onClick={openWhatsApp}
                  >
                    Tanya lebih lanjut via WhatsApp →
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Apakah ada bantuan untuk desain kemasan?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Ya! Kami punya tim desainer yang siap bantu desain kemasan
                    menarik sesuai brand identity Anda. Konsultasi desain juga
                    gratis.
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary"
                    onClick={openWhatsApp}
                  >
                    Tanya lebih lanjut via WhatsApp →
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Bagaimana dengan legalitas dan sertifikat halal?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Kami bantu urus semua legalitas termasuk BPOM dan sertifikat
                    halal dari MUI. Anda tinggal fokus pada marketing dan
                    penjualan saja!
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary"
                    onClick={openWhatsApp}
                  >
                    Tanya lebih lanjut via WhatsApp →
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Apakah bisa buat produk custom sesuai keinginan?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-3">
                    Tentu saja! Kami bisa custom formula, warna, aroma, dan
                    kemasan sesuai visi brand Anda. Tim R&D kami siap bantu
                    wujudkan konsep produk impian Anda.
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary"
                    onClick={openWhatsApp}
                  >
                    Tanya lebih lanjut via WhatsApp →
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <cert.icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {cert.label}
                  </p>
                </div>
              ))}
            </div>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="space-y-8">
                  {/* Kantor Pusat */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">
                      PT Makmur Baru Global
                    </h3>

                    <div className="space-y-4 text-muted-foreground">
                      {/* Kantor Pusat */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">
                          Kantor Pusat
                        </h4>
                        <p className="flex items-start gap-2">
                          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>
                            Pergudangan dan Industri SIRIE Blok Q80 Ds. Rangkah
                            Kidul Kec. Sidoarjo Kab. Sidoarjo. Jawa Timur. 61234
                          </span>
                        </p>
                        <div className="rounded-lg overflow-hidden border border-primary/20 mt-3 h-64">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5789205247066!2d112.7347!3d-7.4744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sSidoarjo!5e0!3m2!1sid!2sid!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </div>

                      {/* Marketing Office */}
                      <div className="space-y-2 pt-4 border-t border-primary/20">
                        <h4 className="font-semibold text-foreground">
                          Marketing Office
                        </h4>
                        <p className="flex items-start gap-2">
                          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>
                            Jl. Danau Indah Barat 3 Blok B-2 No. 25,
                            Sunter-Jakarta Utara. DKI Jakarta
                          </span>
                        </p>
                        <div className="rounded-lg overflow-hidden border border-primary/20 mt-3 h-64">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2458!2d106.8861!3d-6.3907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sJakarta!5e0!3m2!1sid!2sid!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-2 pt-4 border-t border-primary/20">
                        <p className="flex items-center gap-2 justify-start">
                          <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>+62 819-3537-7474</span>
                        </p>
                        <p className="flex items-center gap-2 justify-start">
                          <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>info@makmurbaruglobal.com</span>
                        </p>
                      </div>
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold">
              Siap Mulai Brand Kosmetik Anda?
            </h2>
            <p className="text-lg text-background/80">
              Konsultasi gratis sekarang dan wujudkan impian punya brand
              sendiri!
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={openWhatsApp}
            >
              <MessageCircle className="h-6 w-6" />
              Chat WhatsApp Sekarang
            </Button>

            <div className="pt-12 border-t border-background/20">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <p className="font-bold text-xl mb-2">Makmur Baru Global</p>
                  <p className="text-sm text-background/70">
                    Partner terpercaya untuk bisnis kosmetik Anda
                  </p>
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
  );
};

export default Index;
