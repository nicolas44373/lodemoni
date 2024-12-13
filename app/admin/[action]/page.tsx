'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getProduct, createProduct, updateProduct } from '../../../lib/products'

type ProductCategory = 'sandwich' | 'empanada' | 'napolitana' | 'pizza' | 'matambre' | 'menu'

export default function ProductForm({ params }: { params: { action: string } }) {
  const router = useRouter()
  // Aquí definimos un tipo más estricto para el producto
  const [product, setProduct] = useState<{
    name: string
    description: string
    price: string | number
    category: ProductCategory
  } | undefined>(undefined)

  const isEditing = params.action === 'edit'

  useEffect(() => {
    if (isEditing) {
      // Cargar el producto si estamos editando
      getProduct(params.action).then(setProduct)
    }
  }, [isEditing, params.action])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!product) return // Evitar enviar si 'product' está indefinido

    // Validamos que todos los campos estén definidos
    const { name, description, price, category } = product
    if (!name || !description || !category || price === undefined) {
      alert("Todos los campos son obligatorios")
      return
    }

    // Aquí asignamos los valores al producto con la categoría válida
    const productWithCategory: Omit<typeof product, 'id'> = {
      name,
      description,
      price,
      category,
    }

    if (isEditing) {
      await updateProduct(params.action, productWithCategory)
    } else {
      await createProduct(productWithCategory)
    }
    
    router.push('/admin')
  }

  // Cambiamos el tipo del evento para que sea compatible con <select>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setProduct(prev => prev ? { ...prev, [name]: value } : undefined)
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
          value={product?.name || ''}
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
          value={product?.description || ''}
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
          value={product?.price || ''}
          onChange={handleChange}
          required
          step="0.01"
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block mb-2">Categoría:</label>
        <select
          id="category"
          name="category"
          value={product?.category || 'sandwich'}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        >
          <option value="sandwich">Sandwich</option>
          <option value="empanada">Empanada</option>
          <option value="napolitana">Napolitana</option>
          <option value="pizza">Pizza</option>
          <option value="matambre">Matambre</option>
          <option value="menu">Menu</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {isEditing ? 'Actualizar' : 'Crear'} Producto
      </button>
    </form>
  )
}
