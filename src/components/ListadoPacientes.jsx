import Pacientes from "./Pacientes"

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-2xl text-center">Listado Pacientes</h2>
            <p className="text-lg mt-2 text-center">Administra tus {''}
              <span className="text-indigo-600 font-bold text-center">Pacientes y Citas</span> 
            </p>
            {pacientes.map( paciente => (
                <Pacientes
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ))}
            </>
        ) : (
          <>
            <h2 className="font-black text-2xl text-center">No hay pacientes</h2>
            <p className="text-lg mt-2 text-center">Comienza a agregarlos y {''}
              <span className="text-indigo-600 font-bold text-center">apareceran en este lugar</span> 
            </p>
          </>
        )}
    </div>
  )
}

export default ListadoPacientes
