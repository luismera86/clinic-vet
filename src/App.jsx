

import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListaPacientes } from './components/ListaPacientes'


function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    if (localStorage.getItem('pacientes')) {
      setPacientes(JSON.parse(localStorage.getItem('pacientes')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
   }, [pacientes])

  const eliminarPaciente = id => {

    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  

  return (
    <div className=' container mx-auto mt-20'>
      <Header />
      <div className=' mt-12 md:flex'>
        <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} setPaciente={setPaciente} />
        <ListaPacientes pacientes={pacientes} setPaciente={setPaciente} paciente={paciente} eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  )
}

export default App
