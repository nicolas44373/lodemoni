'use client'

import { useState } from 'react'

export default function AddToCartButton({ productId }: { productId: string }) {
  const [isAdding, setIsAdding] = useState(false)

  const addToCart = async () => {
    setIsAdding(true)
    // Aquí iría la lógica para agregar al carrito
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulamos una demora
    setIsAdding(false)
    alert('Producto agregado al carrito')
  }

  return (
    <button
      onClick={addToCart}
      disabled={isAdding}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:bg-red-300"
    >
      {isAdding ? 'Agregando...' : 'Agregar al carrito'}
    </button>
  )
}

