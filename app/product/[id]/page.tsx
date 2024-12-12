import { getProduct } from '../../../lib/products';
import AddToCartButton from '../../../components/AddToCartButton';

export default async function ProductPage({ params }: { params: { id: string } }) {
  let product;

  try {
    product = await getProduct(params.id);
  } catch (error) {
    console.error('Error fetching product:', error);
    return (
      <div className="text-center text-red-500">
        Ocurrió un error al cargar el producto. Por favor, intenta nuevamente más tarde.
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-gray-500">
        <h2 className="text-xl font-semibold mb-2">Producto no encontrado</h2>
        <p>El producto que buscas no está disponible o ha sido eliminado.</p>
      </div>
    );
  }

  // Asegurarse de que el precio sea numérico
  const price = typeof product.price === 'number' ? product.price : Number(product.price);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
      <p className="text-gray-600 mb-6">{product.description}</p>
      <p className="text-2xl font-bold mb-6 text-green-600">
        ${price.toFixed(2)}
      </p>
      <AddToCartButton productId={product.id} />
    </div>
  );
}
