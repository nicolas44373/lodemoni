import OrderForm from '../../components/OrderForm'

export default function OrderPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Realizar un Pedido</h1>
      <OrderForm />
    </div>
  )
}

