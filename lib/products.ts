import db  from './firebase'
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore'

export interface Product {
  id: string
  name: string
  description: string
  price: string | number
  category: 'sandwich' | 'empanada' | 'napolitana' | 'pizza' | 'matambre' | 'menu'
}

export async function getProducts(): Promise<Product[]> {
  const productsCol = collection(db, 'products')
  const productSnapshot = await getDocs(productsCol)
  return productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product))
}

export async function getProductsByCategory(category: Product['category']): Promise<Product[]> {
  const productsCol = collection(db, 'products')
  const q = query(productsCol, where("category", "==", category))
  const productSnapshot = await getDocs(q)
  return productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product))
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const docRef = doc(db, 'products', id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Product
  } else {
    return undefined
  }
}

export async function createProduct(product: Omit<Product, 'id'>): Promise<Product> {
  const productToAdd = {
    ...product,
    price: typeof product.price === 'string' ? parseFloat(product.price) : product.price
  };
  const docRef = await addDoc(collection(db, 'products'), productToAdd)
  return { id: docRef.id, ...productToAdd }
}

export async function updateProduct(id: string, updatedProduct: Partial<Product>): Promise<Product | undefined> {
  const docRef = doc(db, 'products', id)
  const productToUpdate = {
    ...updatedProduct,
    price: typeof updatedProduct.price === 'string' ? parseFloat(updatedProduct.price) : updatedProduct.price
  };
  await updateDoc(docRef, productToUpdate)
  const updatedDoc = await getDoc(docRef)
  if (updatedDoc.exists()) {
    return { id: updatedDoc.id, ...updatedDoc.data() } as Product
  }
  return undefined
}

export async function deleteProduct(id: string): Promise<void> {
  await deleteDoc(doc(db, 'products', id))
}

