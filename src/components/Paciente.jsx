import React from 'react'

export const Paciente = ({pacientes, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, mail, fecha, sintomas, id} = pacientes

    const handleELiminar = () => {
      const respuesta = confirm('Deseas eliminar a este paciente?')

      respuesta && eliminarPaciente(id)
    }

  return (
    <div className=' mx-5 my-10 bg-white shadow-md px-10 py-10 rounded-xl'>
        <p className=' font-bold mb-3 text-gray-700 uppercase'>Nombre: {' '} 
          <span className=' font-normal normal-case'>{nombre}</span>
        </p> 
        <p className=' font-bold mb-3 text-gray-700 uppercase'>Propietario: {' '} 
          <span className=' font-normal normal-case'>{propietario}</span>
        </p> 
        
        <p className=' font-bold mb-3 text-gray-700 uppercase'>Email: {' '} 
          <span className=' font-normal normal-case'>{mail}</span>
        </p> 
        <p className=' font-bold mb-3 text-gray-700 uppercase'>Fecha alta: {' '} 
          <span className=' font-normal normal-case'>{fecha}</span>
        </p> 
        <p className=' font-bold mb-3 text-gray-700 uppercase'>Sintomas: {' '} 
          <span className=' font-normal normal-case'>{sintomas}</span>
        </p> 
        <div className=' flex justify-between'>
          <button onClick={() => setPaciente(pacientes)} type='button' className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg text-base mt-10 '>Editar</button>
          
          <button onClick={handleELiminar} type='button' className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg text-base mt-10 '>Eliminar</button>
        </div>
      </div>
  )
}
