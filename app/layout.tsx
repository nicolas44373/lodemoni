import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Home, ShoppingCart, BarChart, List } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sanguchería Deliciosa',
  description: 'Experiencia culinaria de primer nivel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <header className="bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-3xl font-extrabold tracking-tight hover:text-red-100 transition-colors">
                LodeMoni
              </Link>
            </div>
            <nav>
  <ul className="flex space-x-6 items-center">
    <li>
      <Link href="/" className="flex items-center space-x-2 hover:text-red-100 transition-colors">
        <Home className="w-5 h-5" />
        <span className="hidden md:inline">Inicio</span>
      </Link>
    </li>
    <li>
      <Link href="/order" className="flex items-center space-x-2 hover:text-red-100 transition-colors">
        <ShoppingCart className="w-5 h-5" />
        <span className="hidden md:inline">Hacer Pedido</span>
      </Link>
    </li>
    <li>
      <Link href="/admin/products" className="flex items-center space-x-2 hover:text-red-100 transition-colors">
        <List className="w-5 h-5" />
        <span className="hidden md:inline">Productos</span>
      </Link>
    </li>
    <li>
      <Link href="/admin/orders" className="flex items-center space-x-2 hover:text-red-100 transition-colors">
        <ShoppingCart className="w-5 h-5" />
        <span className="hidden md:inline">Pedidos</span>
      </Link>
    </li>
    <li>
      <Link href="/admin/dashboard" className="flex items-center space-x-2 hover:text-red-100 transition-colors">
        <BarChart className="w-5 h-5" />
        <span className="hidden md:inline">Panel</span>
      </Link>
    </li>
  </ul>
</nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sanguchería Deliciosa</h3>
              <p className="text-gray-300">Crafteando los mejores sánguches con pasión y precisión.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-red-400 transition-colors">Inicio</Link></li>
                <li><Link href="/order" className="hover:text-red-400 transition-colors">Hacer Pedido</Link></li>
                <li><Link href="/about" className="hover:text-red-400 transition-colors">Sobre Nosotros</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p className="text-gray-300">Teléfono: (555) 123-4567</p>
              <p className="text-gray-300">Email: contacto@sangucheriadeliciosa.com</p>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-8 pt-4 border-t border-gray-700 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Sanguchería Deliciosa. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}