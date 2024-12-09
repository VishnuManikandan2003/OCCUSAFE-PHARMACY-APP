import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Appointment {
  doctorId: string;
  date: string;
  time: string;
  patientName: string;
  patientEmail: string;
}

interface StoreState {
  cart: CartItem[];
  appointments: Appointment[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  bookAppointment: (appointment: Appointment) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  appointments: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.id !== itemId),
    })),
  updateQuantity: (itemId, quantity) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.id === itemId ? { ...i, quantity } : i
      ),
    })),
  bookAppointment: (appointment) =>
    set((state) => ({
      appointments: [...state.appointments, appointment],
    })),
  clearCart: () => set({ cart: [] }),
}));