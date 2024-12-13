import db from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  query,
  where,
  Timestamp,
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


// Utility function to convert Firestore Timestamp to JavaScript Date
function convertToDate(input: FirestoreDate): Date {
  return input instanceof Timestamp ? input.toDate() : input;
}

// Create a new order
export async function createOrder(
  order: Omit<Order, 'id' | 'createdAt' | 'status'>
): Promise<Order> {
  try {
    const createdAt = new Date();

    const orderToAdd: Omit<Order, 'id'> = {
      ...order,
      status: 'pending',
      createdAt,
    };

    const docRef = await addDoc(collection(db, 'orders'), {
      ...orderToAdd,
      createdAt: Timestamp.fromDate(orderToAdd.createdAt),
    });

    return {
      id: docRef.id,
      ...orderToAdd,
    };
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error('Could not create the order.');
  }
}

// Get all orders
export async function getOrders(): Promise<Order[]> {
  try {
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
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
}

// Get a specific order
export async function getOrder(id: string): Promise<Order | undefined> {
  try {
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
      console.warn(`Order with ID ${id} not found.`);
      return undefined;
    }
  } catch (error) {
    console.error('Error fetching order:', error);
    throw new Error('Could not fetch the order.');
  }
}

// Update an order
export async function updateOrder(
  id: string,
  updates: Partial<Order>
): Promise<Order | undefined> {
  try {
    if (updates.status && !['pending', 'completed', 'cancelled'].includes(updates.status)) {
      throw new Error('Invalid order status');
    }

    const docRef = doc(db, 'orders', id);

    const firestoreUpdates: any = { ...updates };
    
    // Convert createdAt to Timestamp if it's a Date
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
    } else {
      console.warn(`Order with ID ${id} not found after update.`);
      return undefined;
    }
  } catch (error) {
    console.error('Error updating order:', error);
    throw new Error('Could not update the order.');
  }
}

// Get completed orders for a specific day
export async function getCompletedOrdersForDay(date: Date): Promise<Order[]> {
  try {
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
  } catch (error) {
    console.error('Error fetching completed orders for the day:', error);
    return [];
  }
}
