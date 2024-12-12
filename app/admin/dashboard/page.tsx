'use client'

import { useState, useEffect } from 'react'
import { getCompletedOrdersForDay, Order } from '../../../lib/orders'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DashboardPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [totalRevenue, setTotalRevenue] = useState(0)

  useEffect(() => {
    const fetchTodayOrders = async () => {
      const today = new Date()
      const fetchedOrders = await getCompletedOrdersForDay(today)
      setOrders(fetchedOrders)
      setTotalRevenue(fetchedOrders.reduce((sum, order) => sum + order.total, 0))
    }
    fetchTodayOrders()
  }, [])

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pedidos Completados Hoy</CardTitle>
            <CardDescription>Número total de pedidos entregados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{orders.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ingresos Totales Hoy</CardTitle>
            <CardDescription>Suma total de los pedidos completados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">${totalRevenue.toFixed(2)}</div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Pedidos Completados Hoy</CardTitle>
          <CardDescription>Lista detallada de los pedidos entregados</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Hora</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>{order.createdAt.toLocaleTimeString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

