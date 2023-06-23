
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect( () => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
          }
    },[paciente])


    const handleSubmit = (e) => {
      e.preventDefault();
      if ([nombre, propietario, email, fecha, sintomas].includes('')) {
          setError(true)
          return;
      }
      setError(false);

    const generarId = () => {
      const randon = Math.random().toString(36).substring(2);
      const fecha = Date.now();
      return randon + fecha
    }

    const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }

      if (paciente.id) {
          // Modificando el Registro...
          objetoPaciente.id = paciente.id
          const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
          setPacientes(pacientesActualizados)
          setPaciente({})
      } else {
          // Agregando Nuevo Registro...
          objetoPaciente.id = generarId()
          setPacientes([...pacientes, objetoPaciente]);
      }
      // Limpiar el Formulario...
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
   }

    return (
        <div className="md:w-1/2 lg:w-2/5">
          <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>
          <p className="text-lg mt-2 text-center">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold text-center">Administralos</span>
          </p>

          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-8">
            { error && <Error mensaje='Todos los campos son obligatorios'/>}
              <div className="mb-2">              
                <label htmlFor = "mascota" 
                       className="block text-gray-700">
                       Nombre Mascota
                </label>
                <input 
                  id="mascota"
                  type="text"
                  placeholder="Nombre de la Mascota"
                  className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
                  value={nombre}
                  onChange={ (e) => setNombre(e.target.value)}
                />
              </div>
              <div className="mb-2">              
                <label htmlFor = "propietario" 
                       className="block text-gray-700">
                       Nombre Propietario
                </label>
                <input 
                  id="propietario"
                  type="text"
                  placeholder="Nombre del Propietario"
                  className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
                  value={propietario}
                  onChange={ (e) => setPropietario(e.target.value)}
                />
              </div>
              <div className="mb-2">              
                <label htmlFor = "email" 
                       className="block text-gray-700">
                       Email
                </label>
                <input 
                  id="email"
                  type="email"
                  placeholder="Email de contacto"
                  className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
                  value={email}
                  onChange={ (e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2">              
                <label htmlFor = "alta" 
                       className="block text-gray-700">
                       Alta
                </label>
                <input 
                  id="alta"
                  type="date"
                  data-date-format="DD/MM/YYYY"
                  className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
                  value={fecha}
                  onChange={ (e) => setFecha(e.target.value)}
                />
              </div>
              <div className="mb-2">              
                <label htmlFor = "sintomas" 
                       className="block text-gray-700">
                       Sintomas
                </label>
                <textarea 
                  id="sintomas"
                  type="date"
                  placeholder="Describa los Sintomas"
                  className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
                  value={sintomas}
                  onChange={ (e) => setSintomas(e.target.value)}
                />
              </div>
              <input 
                  type="submit"
                  className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                  hover:bg-indigo-700 cursor-pointer transition-colors rounded-2xl"
                  value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
              />
          </form>
        </div>
      );
}

export default Formulario;