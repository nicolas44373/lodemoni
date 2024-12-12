import Link from 'next/link'

const categories = [
  { name: 'Sándwiches', slug: 'sandwich' },
  { name: 'Empanadas', slug: 'empanada' },
  { name: 'Napolitanas', slug: 'napolitana' },
  { name: 'Pizzas', slug: 'pizza' },
  { name: 'Matambres', slug: 'matambre' },
  { name: 'Menús', slug: 'menu' },
]

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/category/${category.slug}`}
          className="bg-red-600 text-white p-4 rounded-lg text-center hover:bg-red-700 transition-colors"
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}

