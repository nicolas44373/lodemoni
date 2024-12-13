'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getOrders, updateOrder, Order } from '../../../lib/orders'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Timestamp } from 'firebase/firestore';

export default function PendingOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const router = useRouter()

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    const fetchedOrders = await getOrders()
    setOrders(fetchedOrders)
  }

  const handleCompleteOrder = async (orderId: string) => {
    await updateOrder(orderId, { status: 'completed' })
    fetchOrders()
  }

  const handleCancelOrder = async (orderId: string) => {
    if (window.confirm('¿Estás seguro de que quieres cancelar este pedido?')) {
      await updateOrder(orderId, { status: 'cancelled' })
      fetchOrders()
    }
  }

  const handleEditOrder = (orderId: string) => {
    router.push(`/admin/orders/edit/${orderId}`)
  }

  const formatDate = (date: Date | Timestamp): string => {
    // Asegurarse de que siempre trabajamos con un objeto Date
    const validDate = date instanceof Timestamp ? date.toDate() : new Date(date);
  
    if (validDate instanceof Date && !isNaN(validDate.getTime())) {
      return validDate.toLocaleDateString();
    } else {
      return 'Fecha inválida';
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Todos los Pedidos</h1>
      <Card>
        <CardHeader>
          <CardTitle>Lista de Pedidos</CardTitle>
          <CardDescription>Gestiona los pedidos aquí.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customerName}</TableCell>
                    <TableCell>
                      ${isNaN(Number(order.total)) ? "0.00" : Number(order.total).toFixed(2)}
                    </TableCell>
                    <TableCell>{formatDate(order.createdAt)}</TableCell>
                    <TableCell>{order.status}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" onClick={() => handleEditOrder(order.id)}>Editar</Button>
                        <Button size="sm" variant="outline" onClick={() => handleCompleteOrder(order.id)}>Completar</Button>
                        <Button size="sm" variant="destructive" onClick={() => handleCancelOrder(order.id)}>Cancelar</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
