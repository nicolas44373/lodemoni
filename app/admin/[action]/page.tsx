'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getProduct, createProduct, updateProduct } from '../../../lib/products'

export default function ProductForm({ params }: { params: { action: string } }) {
  const router = useRouter()
  const [product, setProduct] = useState({ name: '', description: '', price: '' })
  const isEditing = params.action === 'edit'

  useEffect(() => {
    if (isEditing) {
      // Cargar el producto si estamos editando
      getProduct(params.action).then(setProduct)
    }
  }, [isEditing, params.action])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isEditing) {
      await updateProduct(params.action, product)
    } else {
      await createProduct(product)
    }
    router.push('/admin')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProduct(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Editar' : 'Agregar'} Producto</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block mb-2">Precio:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
          step="0.01"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {isEditing ? 'Actualizar' : 'Crear'} Producto
      </button>
    </form>
  )
}

