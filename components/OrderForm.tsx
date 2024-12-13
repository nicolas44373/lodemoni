'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { collection, getDocs } from 'firebase/firestore';
import { ShoppingCart, MapPin, User } from 'lucide-react';
import db from '../lib/firebase';
import { createOrder } from '../lib/orders';
const categories = [
  { value: 'sandwich', label: 'Sándwiches', icon: '🥪' },
  { value: 'empanada', label: 'Empanadas', icon: '🥟' },
  { value: 'napolitana', label: 'Napolitanas', icon: '🍝' },
  { value: 'pizza', label: 'Pizzas', icon: '🍕' },
  { value: 'matambre', label: 'Matambres', icon: '🥩' },
  { value: 'menu', label: 'Menús', icon: '📋' },
];

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
}

interface OrderItem {
  productId: string;
  quantity: number;
  modifications: string;
}

export default function OrderForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0].value);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const productSnapshot = await getDocs(productsCollection);
        const productList = productSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const orderItemsFiltered = orderItems.filter(item => item.quantity > 0);
    if (!orderItemsFiltered.length) {
      alert('Debe seleccionar al menos un producto.');
      setIsSubmitting(false);
      return;
    }
  
    const total = orderItemsFiltered.reduce((sum, item) => {
      const product = products.find(p => p.id === item.productId);
      return sum + (product?.price || 0) * item.quantity;
    }, 0);
  
    try {
      const newOrder = {
        customerName: name,
        address,
        items: orderItemsFiltered,
        total,
      };
  
      // Use the createOrder function to save the order to Firestore
      await createOrder(newOrder);
  
      console.log('Nuevo pedido:', newOrder);
      alert('Pedido enviado con éxito.');
      router.push('/');
    } catch (error) {
      console.error('Error al enviar el pedido:', error);
      alert('Hubo un error al enviar el pedido. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProductSelect = (productId: string, quantity: number) => {
    setOrderItems(prev => {
      const existingItem = prev.find(item => item.productId === productId);
      if (existingItem) {
        return prev.map(item =>
          item.productId === productId ? { ...item, quantity } : item
        );
      } else {
        return [...prev, { productId, quantity, modifications: '' }];
      }
    });
  };

  const handleModificationChange = (productId: string, modifications: string) => {
    setOrderItems(prev =>
      prev.map(item =>
        item.productId === productId ? { ...item, modifications } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <form 
        onSubmit={handleSubmit} 
        className="max-w-4xl mx-auto space-y-8 bg-white shadow-2xl rounded-2xl overflow-hidden"
      >
        {/* Customer Information Card */}
        <Card className="border-none shadow-none">
          <CardHeader className="bg-blue-500 text-white p-6">
            <div className="flex items-center space-x-4">
              <User className="w-8 h-8" />
              <div>
                <CardTitle className="text-xl font-bold">Información del Cliente</CardTitle>
                <CardDescription className="text-blue-100">
                  Proporciona tus datos de contacto para la entrega
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 p-6 bg-gray-50">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-semibold">Nombre</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Ingresa tu nombre completo"
                  className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="text-gray-700 font-semibold">Dirección</Label>
                <Textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  placeholder="Dirección de entrega"
                  className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-400 min-h-[100px]"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Selection Card */}
        <Card className="border-none shadow-none">
          <CardHeader className="bg-green-500 text-white p-6">
            <div className="flex items-center space-x-4">
              <ShoppingCart className="w-8 h-8" />
              <div>
                <CardTitle className="text-xl font-bold">Selección de Productos</CardTitle>
                <CardDescription className="text-green-100">
                  Elige tus productos y personalízalos
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="bg-gray-50 p-6">
            {/* Category Tabs */}
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveCategory(category.value)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${activeCategory === category.value 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                  `}
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>

            <ScrollArea className="h-[400px] pr-4">
              <div className="grid md:grid-cols-2 gap-4">
                {products
                  .filter(product => product.category === activeCategory)
                  .map(product => (
                    <div 
                      key={product.id} 
                      className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                          <p className="text-sm text-gray-500">{product.description || 'Sin descripción'}</p>
                        </div>
                        <span className="text-green-600 font-semibold text-lg">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <Select
                          onValueChange={(value) => handleProductSelect(product.id, parseInt(value))}
                          value={orderItems.find(item => item.productId === product.id)?.quantity?.toString() || "0"}
                        >
                          <SelectTrigger className="w-full border-gray-300">
                            <SelectValue placeholder="Cantidad" />
                          </SelectTrigger>
                          <SelectContent>
                            {[0, 1, 2, 3, 4, 5].map((quantity) => (
                              <SelectItem key={quantity} value={quantity.toString()}>
                                {quantity}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {orderItems.find(item => item.productId === product.id && item.quantity > 0) && (
                          <Textarea
                            placeholder="Modificaciones o instrucciones especiales"
                            value={orderItems.find(item => item.productId === product.id)?.modifications || ''}
                            onChange={(e) => handleModificationChange(product.id, e.target.value)}
                            className="w-full border-gray-300 rounded-md"
                          />
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </ScrollArea>
          </CardContent>
          
          {/* Order Summary and Submit */}
          <CardFooter className="bg-white p-6 border-t">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-blue-500" />
                <div>
                  <div className="text-xl font-bold text-gray-800">
                    Total: ${orderItems.reduce((sum, item) => {
                      const product = products.find(p => p.id === item.productId);
                      return sum + (product?.price || 0) * item.quantity;
                    }, 0).toFixed(2)}
                  </div>
                  <p className="text-sm text-gray-500">Entrega a domicilio</p>
                </div>
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting || !orderItems.length} 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full"
              >
                {isSubmitting ? 'Enviando...' : 'Confirmar Pedido'}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}