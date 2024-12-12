import  db  from './firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
  query, 
  where, 
  Timestamp 
} from 'firebase/firestore';

// Type to handle both Date and Firestore Timestamp
type FirestoreDate = Timestamp | Date;

export interface OrderItem {
  productId: string;
  quantity: number;
  modifications: string;
}

export interface Order {
  id: string;
  customerName: string;
  address: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date; // Explicitly Date
}

// Utility function to convert Timestamp to Date
function convertToDate(input: FirestoreDate): Date {
  if (input instanceof Timestamp) {
    return input.toDate();
  }
  return input;
}

// Create a new order
export async function createOrder(order: Omit<Order, 'id' | 'createdAt' | 'status'>): Promise<Order> {
  const createdAt = new Date();

  const orderToAdd: Omit<Order, 'id'> = {
    ...order,
    status: 'pending',
    createdAt: createdAt,
  };

  const docRef = await addDoc(collection(db, 'orders'), {
    ...orderToAdd,
    createdAt: Timestamp.fromDate(orderToAdd.createdAt),
  });

  return {
    id: docRef.id,
    ...orderToAdd,
  };
}

// Get all orders
export async function getOrders(): Promise<Order[]> {
  const ordersCol = collection(db, 'orders');
  const orderSnapshot = await getDocs(ordersCol);

  return orderSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      customerName: data.customerName,
      address: data.address,
      items: data.items,
      total: data.total,
      status: data.status as Order['status'],
      createdAt: convertToDate(data.createdAt as FirestoreDate),
    };
  });
}

// Get a specific order
export async function getOrder(id: string): Promise<Order | undefined> {
  const docRef = doc(db, 'orders', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      customerName: data.customerName,
      address: data.address,
      items: data.items,
      total: data.total,
      status: data.status as Order['status'],
      createdAt: convertToDate(data.createdAt as FirestoreDate),
    };
  } else {
    return undefined;
  }
}

// Update an order
export async function updateOrder(id: string, updates: Partial<Order>): Promise<Order | undefined> {
  if (updates.status && !['pending', 'completed', 'cancelled'].includes(updates.status)) {
    throw new Error('Invalid order status');
  }

  const docRef = doc(db, 'orders', id);

  const firestoreUpdates = { ...updates };
  if (updates.createdAt instanceof Date) {
    firestoreUpdates.createdAt = Timestamp.fromDate(updates.createdAt);
  }

  await updateDoc(docRef, firestoreUpdates);
  const updatedDoc = await getDoc(docRef);

  if (updatedDoc.exists()) {
    const data = updatedDoc.data();
    return {
      id: updatedDoc.id,
      customerName: data.customerName,
      address: data.address,
      items: data.items,
      total: data.total,
      status: data.status as Order['status'],
      createdAt: convertToDate(data.createdAt as FirestoreDate),
    };
  }

  return undefined;
}

// Get completed orders for a day
export async function getCompletedOrdersForDay(date: Date): Promise<Order[]> {
  const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

  const ordersCol = collection(db, 'orders');
  const q = query(
    ordersCol,
    where('status', '==', 'completed'),
    where('createdAt', '>=', Timestamp.fromDate(startOfDay)),
    where('createdAt', '<', Timestamp.fromDate(endOfDay))
  );

  const orderSnapshot = await getDocs(q);

  return orderSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      customerName: data.customerName,
      address: data.address,
      items: data.items,
      total: data.total,
      status: data.status as Order['status'],
      createdAt: convertToDate(data.createdAt as FirestoreDate),
    };
  });
}

