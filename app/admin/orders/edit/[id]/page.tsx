'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getOrder, updateOrder, Order, OrderItem } from '../../../../../lib/orders'
import { getProducts, Product } from '../../../../../lib/products'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EditOrderPage({ params }: { params: { id: string } }) {
  const [order, setOrder] = useState<Order | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const [fetchedOrder, fetchedProducts] = await Promise.all([
        getOrder(params.id),
        getProducts()
      ])
      if (fetchedOrder) setOrder(fetchedOrder)
      setProducts(fetchedProducts)
    }
    fetchData()
  }, [params.id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (order) {
      await updateOrder(order.id, order)
      router.push('/admin/orders')
    }
  }

  const handleItemChange = (index: number, field: keyof OrderItem, value: string | number) => {
    if (order) {
      const newItems = [...order.items]
      newItems[index] = { ...newItems[index], [field]: value }
      setOrder({ ...order, items: newItems })
    }
  }

  const calculateTotal = (items: OrderItem[]): number => {
    return items.reduce((sum, item) => {
      const product = products.find(p => p.id === item.productId)
      const price = Number(product?.price ?? 0)
      const quantity = Number(item.quantity ?? 0)
      return Number(sum + (price * quantity))
    }, 0)
  }

  if (!order) return <div>Cargando...</div>

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Editar Pedido #{order.id}</h1>
      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Información del Cliente</CardTitle>
            <CardDescription>Edita los detalles del cliente aquí.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="customerName">Nombre del Cliente</Label>
              <Input
                id="customerName"
                value={order.customerName}
                onChange={(e) => setOrder({ ...order, customerName: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Dirección</Label>
              <Textarea
                id="address"
                value={order.address}
                onChange={(e) => setOrder({ ...order, address: e.target.value })}
                required
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Items del Pedido</CardTitle>
            <CardDescription>Edita los productos y cantidades aquí.</CardDescription>
          </CardHeader>
          <CardContent>
            {order.items.map((item, index) => (
              <div key={index} className="flex space-x-4 mb-4">
                <Select
                  value={item.productId}
                  onValueChange={(value) => handleItemChange(index, 'productId', value)}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Selecciona un producto" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                  min="1"
                  className="w-20"
                />
                <Input
                  value={item.modifications}
                  onChange={(e) => handleItemChange(index, 'modifications', e.target.value)}
                  placeholder="Modificaciones"
                />
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button type="button" onClick={() => setOrder({ ...order, items: [...order.items, { productId: '', quantity: 1, modifications: '' }] })}>
              Agregar Item
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardContent className="pt-6">
          <div className="text-xl font-bold">
  Total: ${Number(calculateTotal(order.items)).toFixed(2)}
</div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => router.push('/admin/orders')}>
              Cancelar
            </Button>
            <Button type="submit">Guardar Cambios</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

