import { create } from 'zustand'

const useBearStore = create(
  (set) => (

{
  bears: 0,
  bear:{
    nombre: "Yogui",
    edad: 45
  },
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  cambiarNombre: (nuevoNombre)=>set((state)=>({
    bear:{...state.bear,nombre:nuevoNombre}
  }))
}


));

export default useBearStore;