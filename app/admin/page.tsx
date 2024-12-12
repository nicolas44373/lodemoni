import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminHomePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Gestionar Productos</CardTitle>
            <CardDescription>Añadir, editar o eliminar productos del menú</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="/admin/products">Ir a Productos</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pedidos Pendientes</CardTitle>
            <CardDescription>Ver y gestionar los pedidos pendientes</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="/admin/orders">Ver Pedidos</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>Ver estadísticas y pedidos completados</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="/admin/dashboard">Ir al Dashboard</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

