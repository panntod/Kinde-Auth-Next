import './globals.css'
import Navbar from './components/Navbar'
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: 'Kinde Auth',
  description: 'Kinde Auth with Next.js App Router',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <section className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex flex-col grow">
            {children}
          </main>
        </section>
      </body>
    </html>
  )
}
