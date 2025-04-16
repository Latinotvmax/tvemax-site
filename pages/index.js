
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Star, Smile } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";

export default function TVEMaxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white p-6 relative">
      {/* Logo y banner */}
      <div className="text-center mb-12">
        <Image
          src="/TVEMAX_logo_glass_3D_sin_borde.png"
          alt="Logo TVEMAX"
          width={200}
          height={200}
          className="mx-auto"
        />
        <Image
          src="/A_promotional_digital_graphic_banner_for_TVEMAX,_a.png"
          alt="Banner TVEMAX"
          width={800}
          height={400}
          className="mx-auto rounded-2xl shadow-xl mt-4"
        />
        <p className="text-lg font-semibold mt-2 italic">¡Diversión en la palma de tu mano!</p>
      </div>

      {/* Sección de paquetes con PayPal y Mercado Pago */}
      <section className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Elige tu paquete</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">Básico - 1 mes</h3>
            <p className="mb-4">3 conexiones simultáneas - $11 USD</p>
            <div id="paypal-container-BASIC" className="mb-2"></div>
            <Script id="paypal-basic" strategy="afterInteractive">
              {`paypal.HostedButtons({ hostedButtonId: "HWFGWK222FPS6" }).render("#paypal-container-BASIC")`}
            </Script>
            <Link href="https://link.mercadopago.com.mx/tvemax" target="_blank">
              <Button className="bg-yellow-400 text-black mt-2 w-full">Pagar con Mercado Pago</Button>
            </Link>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">3 Meses</h3>
            <p className="mb-4">3 conexiones simultáneas - $28 USD</p>
            <div id="paypal-container-3M" className="mb-2"></div>
            <Script id="paypal-3m" strategy="afterInteractive">
              {`paypal.HostedButtons({ hostedButtonId: "HWFGWK222FPS6" }).render("#paypal-container-3M")`}
            </Script>
            <Link href="https://link.mercadopago.com.mx/tvemax" target="_blank">
              <Button className="bg-yellow-400 text-black mt-2 w-full">Pagar con Mercado Pago</Button>
            </Link>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">Premium - 6+2 meses gratis</h3>
            <p className="mb-4">3 conexiones simultáneas - $69 USD</p>
            <div id="paypal-container-PREMIUM" className="mb-2"></div>
            <Script id="paypal-premium" strategy="afterInteractive">
              {`paypal.HostedButtons({ hostedButtonId: "HWFGWK222FPS6" }).render("#paypal-container-PREMIUM")`}
            </Script>
            <Link href="https://link.mercadopago.com.mx/tvemax" target="_blank">
              <Button className="bg-yellow-400 text-black mt-2 w-full">Pagar con Mercado Pago</Button>
            </Link>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">Familiar - 12+3 meses gratis</h3>
            <p className="mb-4">5 conexiones simultáneas - $130 USD</p>
            <div id="paypal-container-FAMILIAR" className="mb-2"></div>
            <Script id="paypal-familiar" strategy="afterInteractive">
              {`paypal.HostedButtons({ hostedButtonId: "HWFGWK222FPS6" }).render("#paypal-container-FAMILIAR")`}
            </Script>
            <Link href="https://link.mercadopago.com.mx/tvemax" target="_blank">
              <Button className="bg-yellow-400 text-black mt-2 w-full">Pagar con Mercado Pago</Button>
            </Link>
          </div>
        </div>

        <Script src="https://www.paypal.com/bizcomponents/start.js" strategy="afterInteractive" />
      </section>

      <style jsx>{`
        .3d-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
