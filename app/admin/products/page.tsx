'use client'

import { useState, useEffect } from 'react';
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  Product,
} from '../../../lib/products';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const categories = [
  { value: 'sandwich', label: 'Sándwich' },
  { value: 'empanada', label: 'Empanada' },
  { value: 'napolitana', label: 'Napolitana' },
  { value: 'pizza', label: 'Pizza' },
  { value: 'matambre', label: 'Matambre' },
  { value: 'menu', label: 'Menú' },
];

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: '',
    description: '',
    category: 'sandwich',
  });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const fetchedProducts = await getProducts();
    setProducts(fetchedProducts);
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProduct(newProduct);
    setNewProduct({ name: '', price: '', description: '', category: 'sandwich' });
    fetchProducts();
  };

  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      await updateProduct(editingProduct.id, editingProduct);
      setEditingProduct(null);
      fetchProducts();
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  const formatPrice = (price: string | number): string => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
        Administrar Productos
      </h1>

      {/* Formulario de Nuevo Producto */}
      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Agregar Nuevo Producto</CardTitle>
          <CardDescription className="text-gray-600">
            Ingresa los detalles del nuevo producto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateProduct} className="space-y-6">
            <Input
              placeholder="Nombre del producto"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              required
            />
            <Input
              type="number"
              placeholder="Precio"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              required
              step="0.01"
            />
            <Input
              placeholder="Descripción"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              required
            />
            <Select
              value={newProduct.category}
              onValueChange={(value) =>
                setNewProduct({ ...newProduct, category: value as Product['category'] })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una categoría" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Agregar Producto
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Lista de Productos */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Lista de Productos</CardTitle>
          <CardDescription className="text-gray-600">
            Gestiona los productos existentes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} className="hover:bg-gray-100">
                  <TableCell>
                    {editingProduct?.id === product.id ? (
                      <Input
                        value={editingProduct.name}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, name: e.target.value })
                        }
                      />
                    ) : (
                      product.name
                    )}
                  </TableCell>
                  <TableCell>
                    {editingProduct?.id === product.id ? (
                      <Input
                        type="number"
                        value={editingProduct.price || ''}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, price: e.target.value })
                        }
                        step="0.01"
                      />
                    ) : (
                      `$${formatPrice(product.price)}`
                    )}
                  </TableCell>
                  <TableCell>
                    {editingProduct?.id === product.id ? (
                      <Input
                        value={editingProduct.description}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, description: e.target.value })
                        }
                      />
                    ) : (
                      product.description
                    )}
                  </TableCell>
                  <TableCell>
                    {editingProduct?.id === product.id ? (
                      <Select
                        value={editingProduct.category}
                        onValueChange={(value) =>
                          setEditingProduct({ ...editingProduct, category: value as Product['category'] })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem
                              key={category.value}
                              value={category.value}
                            >
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      product.category
                    )}
                  </TableCell>
                  <TableCell className="space-x-2">
                    {editingProduct?.id === product.id ? (
                      <Button
                        className="bg-green-600 hover:bg-green-700"
                        onClick={handleUpdateProduct}
                      >
                        Guardar
                      </Button>
                    ) : (
                      <Button
                        className="bg-yellow-500 hover:bg-yellow-600"
                        onClick={() => setEditingProduct(product)}
                      >
                        Editar
                      </Button>
                    )}
                    <Button
                      variant="destructive"
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}