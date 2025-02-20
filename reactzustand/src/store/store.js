// curso, setUsuario, usuario, incrementaEdad 

import { create } from 'zustand'

const usuarioStore = create((set) => ({
  curso: "2º DAW",
  usuario: {
    nombre: "Juan",
    edad: 10
  },
  setUsuario: (nuevoUsuario)=>{
    set({
      usuario: nuevoUsuario
    })
  },
  incrementaEdad: () =>{ 
    set(  (state)=>({ 
    //   usuario : {
    //     nombre: state.usuario.nombre,
    //     edad : state.usuario.edad+1
    //   }
      usuario : { ...state.usuario, edad: state.usuario.edad+1}
    })   
  )},
  //count: 1,
  //inc: () => set((state) => ({ count: state.count + 1 })),
}));

export default usuarioStore;