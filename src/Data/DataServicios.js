import  Axios  from "axios"
import React, {useState, useEffect} from "react"

export const Categorias=()=>{
      const [categorias,setCategorias] = useState([])

      //useEffect
      useEffect(() => {
      listarCategorias()   },[] )

      //peticion GET, listamos categorias, en este caso solo las 'activas'
      const listarCategorias= async()=>{
      const respuesta = await Axios.get('/categoria/listActivos')
      setCategorias(respuesta.data) }

      //importante retornamos nuestra lista
      return categorias
      }
// [{
//        foto: "https://i.ibb.co/WHJxCvs/tecnicos.png",
//        nombre:"Entrenadores",
//        descripcion:"Gym, Boxeo, Pesas,",
//        estado: "Activo"
//    }}]

    



//data a usar seccion proveedores ofertados solo activos
export const Servicios= ()=>{
  const [servicios,setServicios] = useState([])

  //useEffect
  useEffect(() => {
  listarServicios()   },[] )

  //peticion GET, listamos categorias, en este caso solo las 'activas'
  const listarServicios= async()=>{
  const respuesta = await Axios.get('/proveedores/listxfiltro')
  setServicios(respuesta.data) }

  //importante retornamos nuestra lista
  return servicios
}
// export const servicios= [
//     {servicio:{
//       foto: "https://placeimg.com/220/220/people",
//       nombre:"Santiago Gordillo",
//       profesion:"Profesor de francés",
//       precio: 60000 , // si aplica o no
//       calificacion: "8/10",
//       categoria: "TUTORES",
//       celular: 3222750168,
//       correo: "@hotmail.com",
//       disponibilidadTiempo:"",
//       ciudad: "",
//       añosExperiencia: "",
//       fotosExperiencia:""
//       }},
//     {servicio:{
//       foto: "https://placeimg.com/220/220/people",
//       nombre:"Juan Pelaez",
//       profesion: "Profesor de ingles",
//       precio: 50000 , // si aplica o no
//       calificacion: "6/10",
//       categoria: "TUTORES",
//       celular: 666666,
//       correo: "@hotmail.com",
//       disponibilidadTiempo:"",
//       ciudad: "",
//       añosExperiencia: "",
//       fotosExperiencia:""

//         }},
//     {servicio:{
//       foto: "https://placeimg.com/220/220/people",
//       nombre:"Daniel Felipe Echevarria",
//       profesion: "Experto Excel",
//       precio: 20000 , // si aplica
//       calificacion: "9/10",
//       categoria: "TUTORES",
//       celular: 666666,
//       correo: "@hotmail.com",
//       disponibilidadTiempo:"",
//       ciudad: "",
//       añosExperiencia: "",
//       fotosExperiencia:""

//         }},
//     {servicio:{
//       foto: "https://placeimg.com/220/220/people",
//       nombre:"Felipe Gonzales",
//       profesion: "Boxeador",
//       precio: 40000 , // si aplica
//       calificacion: "9/10",
//       categoria: "ENTRENADORES",
//       celular: 666666,
//       correo: "@hotmail.com",
//       disponibilidadTiempo:"",
//       ciudad: "",
//       añosExperiencia: "",
//       fotosExperiencia:""}
//     },
//     {servicio:{
//         foto: "https://placeimg.com/220/220/people",
//         nombre:"Juapis Gonzales",
//         profesion: "Electricista",
//         precio: 20000 , // si aplica
//         calificacion: "6/10",
//         categoria: "TÉCNICOS",
//         celular: 777777,
//         correo: "@hotmail.com",
//         disponibilidadTiempo:"",
//         ciudad: "",
//         añosExperiencia: "",
//         fotosExperiencia:""}
//       },

//    ]