import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Error } from './Error'



  export const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [mail, setMail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
      if( Object.keys(paciente).length > 0) { //Con esta fórmula, verificamos que el objeto paciente este vacio, entonces le retorna la información al formulario 
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setMail(paciente.mail)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      }
    }, [paciente])
    
    

    const generarId = () => {
      const random = Math.random().toString(36).substr(2)
      const fecha = Date.now().toString(36)

      return random + fecha
    }

    const handleSubmit = (e) => {
      e.preventDefault() // Previene que el formulario recargue la página por defecto 

      //Validación del formulario

      if([nombre, propietario, mail, fecha, sintomas].includes('')) {// el metodo includes determina si alguno de los elementos del array tienen el valor que está entre parentecis ('') si almenos uno de ellos tiene ese valor entonces devuelve un valor true
        setError(true)
        return
      }

      setError(false)

      //Objeto de paciente

      const objetoPaciente ={
        nombre,
        propietario,
        mail,
        fecha,
        sintomas,
      }

      if(paciente.id) {
        // Editando registro
        objetoPaciente.id = paciente.id //Se le asigna el id que se genero previamente en el nuevo registro. Esto verifica que si paciente tiene un id cuando se hizo el registro, se le va a asignar el mismo id al objetopaciente.

        const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

        setPacientes(pacienteActualizado)
        setPaciente({})
        
         /* 
         Primero creamos una nueva variable pacienteActualizado que va a enviar los nuevos valores actualizados a la tarjeta paciente.

         Segundo, hacemos una iteración del state paciente con un map donde buscamos el id que coincida con el que queremos editar, si el mismo es igual entonces la variable pacienteActualizado pasa a tener los valores nuevos de objetoPaciente que toma los datos que estan escritos en los input
         */


      } else{
        // Nuevo registro
        objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente])
      }


      // Rresetear el formulario
      setNombre('')
      setPropietario('')
      setMail('')
      setFecha('')
      setSintomas('')



    }
    


  return (
    <div className=' m:w-1/2 lg:w-2/5'>
        <h2 className=' font-black text-3xl text-center'>Seguimiento Paciente</h2>
        <p className=' text-lg text-center mt-5 mb-10'>Añade Paciente y {' '} <span className=' text-indigo-600 font-bold'>Administralos</span></p>
        <form onSubmit={handleSubmit} className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'>
          {error && <Error/> }
            <div className=' mb-5'>
              <label htmlFor="mascota" className=' block text-gray-700 font-bold uppercase'>Nombre de Mascota</label>
              <input value={nombre} onChange={e => setNombre(e.target.value)} id='mascota' type="text"  placeholder='Ingrese el nombre de su mascota' className=' border-2 w-full mt-2 p-2 rounded-md '/>  {/* El evento onChange de un formulario se escribe la función {e => setNomre(e.target.value)} e del evento, target es de la posicion sel cursor donde se esta escribiendo y el value es el texto de lo que se esta escribiendo  */}
            </div>
            <div className=' mb-5'>
              <label htmlFor="propietario" className=' block text-gray-700 font-bold uppercase'>Nombre del propietario</label>
              <input value={propietario} onChange={e => setPropietario(e.target.value)} id='propietario' type="text"  placeholder='Ingrese el nombre del propietario' className=' border-2 w-full mt-2 p-2 rounded-md '/>
            </div>
            <div className=' mb-5'>
              <label htmlFor="mail" className=' block text-gray-700 font-bold uppercase'>e-mail</label>
              <input value={mail} onChange={e => setMail(e.target.value)} id='mail' type="mail"  placeholder='Ingrese el mail' className=' border-2 w-full mt-2 p-2 rounded-md '/> 
            </div>
            <div className=' mb-5'>
              <label htmlFor="alta" className=' block text-gray-700 font-bold uppercase'>alta</label>
              <input value={fecha} onChange={e => setFecha(e.target.value)} id='alta' type="date" className=' border-2 w-full mt-2 p-2 rounded-md '/>
            </div>
            <div className=' mb-5'>
              <label htmlFor="sintomas" className=' block text-gray-700 font-bold uppercase'>sintomas</label>
              <textarea value={sintomas} onChange={e => setSintomas(e.target.value)} id='sintomas'className=' border-2 w-full mt-2 p-2 rounded-md' placeholder='Describe los síntomas' />
            </div>
            <button type="sumit" className=' bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold text-center hover:bg-indigo-700 text-base transition-all '>{paciente.id ? 'EDITAR PACIENTE' : 'AGREGAR PACIENTE'}</button>
            
            
        </form>
    </div>

  )
}

