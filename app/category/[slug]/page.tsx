import Link from 'next/link'
import { getProductsByCategory } from '../../../lib/products'

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  // Aseguramos que params.slug es uno de los valores esperados
  const products = await getProductsByCategory(params.slug as "sandwich" | "empanada" | "napolitana" | "pizza" | "matambre" | "menu")

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 capitalize">{params.slug}s</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">${(Number(product.price) || 0).toFixed(2)}</p>
            <Link href={`/product/${product.id}`} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/" className="text-red-600 hover:underline">← Volver al inicio</Link>
      </div>
    </div>
  )
}
