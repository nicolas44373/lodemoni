import Link from 'next/link'
import { Star, Award, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
            <Star className="w-6 h-6 text-yellow-500" />
            <Star className="w-6 h-6 text-yellow-500" />
            <Star className="w-6 h-6 text-yellow-500" />
            <Star className="w-6 h-6 text-yellow-500" />
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            LodeMoni Sangucheria
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
            Un viaje culinario que combina tradición artesanal con sabores innovadores. Cada sánguche cuenta una historia de pasión y dedicación.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <Link 
              href="/order" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors text-lg font-semibold shadow-md hover:shadow-lg"
            >
              Hacer Pedido
            </Link>
            <Link 
              href="/about" 
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-full border border-red-600 hover:bg-red-50 transition-colors text-lg font-semibold"
            >
              Conócenos
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="w-96 h-96 bg-red-100 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[url('/sandwich-hero.jpg')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 bg-white shadow-lg rounded-2xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
            <Award className="w-16 h-16 mx-auto text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Calidad Premium</h3>
            <p className="text-gray-600">
              Ingredientes seleccionados meticulosamente de los mejores proveedores locales.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
            <MapPin className="w-16 h-16 mx-auto text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Ubicación Estratégica</h3>
            <p className="text-gray-600">
              En el corazón de la ciudad, un espacio acogedor que invita a disfrutar.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
            <Award className="w-16 h-16 mx-auto text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Experiencia Única</h3>
            <p className="text-gray-600">
              Cada sánguche es una obra maestra crafteada con pasión y creatividad.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Descubre el Sabor que te Mereces
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Sumérgete en una experiencia gastronómica donde cada mordisco es una celebración de sabor, textura y tradición.
        </p>
        <Link 
          href="/order" 
          className="bg-red-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Ordena Ahora
        </Link>
      </div>
    </div>
  )
}