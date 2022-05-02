import React from 'react'
import { Paciente } from './Paciente'

export const ListaPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {



  return (
    <div className=' m:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>
      {pacientes && pacientes.length ? 
      (
        <>
          <h2 className=' font-black text-3xl text-center'>ListaPacientes</h2>
          <p className=' text-xl mt-5 mb-10 text-center'>Administrar tus {' '} <span className=' text-indigo-600 font-bold'>Pacientes y Citas</span></p>
  
          { pacientes.map( (pacientes) => (
            <Paciente key={pacientes.id} pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
          ))}
        </>
      ): 
      <>
        <h2 className=' font-black text-3xl text-center'>No hay pacientes</h2>
          <p className=' text-xl mt-5 mb-10 text-center'>Comienza agregando pacientes {' '} <span className=' text-indigo-600 font-bold'>y aparecerán en este lugar</span></p>
      </>
      
      }
      
      
    </div>
  )
}
