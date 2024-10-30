import React, { useState, useEffect, memo } from 'react';
import "../../../styles/Styles.css";

const AdminCRUDPage = memo(() => {
  const [clientes, setClientes] = useState([]);
  const [nuevoCliente, setNuevoCliente] = useState({
    nombre: '',
    telefono: '',
    edad: '',
    sexo: '',
    contacto_emergencia: '',
    primer_pago: '',
    fecha_pago: '',
    deuda: '',
    pago: '',
    fecha_nacimiento: '',
    correo: '',
    direccion: '',
  });

  function PopUpFormUsers() {
    // Crear el modal
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "flex"; // Mostrar el modal

    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    // Contenido del formulario
    modalContent.innerHTML = `
      <div class="form-container">
        <h2>BODY COMBAT</h2>
        <h3>AGREGAR USUARIO</h3>
        <form class="user-form" id="userForm">
          <div class="d-flex">
            <div class="form-group mx-2">
              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" />
            </div>
            <div class="form-group mx-2">
              <label for="telefono">Teléfono</label>
              <input type="tel" id="telefono" />
            </div>
            <div class="form-group mx-2">
              <label for="edad">Edad</label>
              <input type="number" id="edad" />
            </div>
          </div>
          <div class="d-flex">
            <div class="form-group mx-2">
              <label for="sexo">Sexo</label>
              <select id="sexo">
                <option value="">Seleccione</option>
                <option value="HOMBRE">Hombre</option>
                <option value="MUJER">Mujer</option>
                <option value="OTRO">Otro</option>
              </select>
            </div>
            <div class="form-group mx-2">
              <label for="contacto_emergencia">Contacto Emerg</label>
              <input type="text" id="contacto_emergencia" />
            </div>
          </div>
          <div class="d-flex">
            <div class="form-group mx-2">
              <label for="primer_pago">Primer Pago</label>
              <input type="date" id="primer_pago" />
            </div>
            <div class="form-group mx-2">
              <label for="fecha_pago">Fecha de Pago</label>
              <input type="date" id="fecha_pago" />
            </div>
          </div>
          <div class="d-flex">
            <div class="form-group mx-2">
              <label for="correo">Correo</label>
              <input type="email" id="correo"/>
            </div>
          </div>
          <div class="d-flex">
            <div class="form-group mx-2">
              <label for="pago">Pago</label>
              <input type="number" id="pago" />
            </div>
            <div class="form-group mx-2">
              <label for="deuda">Deuda</label>
              <input type="number" id="deuda" />
            </div>
          </div>
          <div class="d-flex">
            <div class="form-group mx-2">
              <label for="fecha_nacimiento">Fecha de Nacimiento</label>
              <input type="date" id="fecha_nacimiento" />
            </div>
            <div class="form-group mx-2">
              <label for="direccion">Dirección</label>
              <input type="text" id="direccion" />
            </div>
          </div>
          <button type="submit" class="submit-btn">Agregar</button>
        </form>
      </div>
    `;

    // Cerrar el modal al hacer clic en la 'X'
    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Función para capturar y enviar los datos del formulario
    async function agregarCliente(event) {
      event.preventDefault();

      // Captura de valores de los campos
      const nombre = document.getElementById("nombre").value;
      const telefono = document.getElementById("telefono").value;
      const edad = parseInt(document.getElementById("edad").value);
      const sexo = document.getElementById("sexo").value.toUpperCase();
      const contacto_emergencia = document.getElementById("contacto_emergencia").value;
      const primer_pago = document.getElementById("primer_pago").value;
      const fecha_pago = document.getElementById("fecha_pago").value || null;
      const deuda = parseFloat(document.getElementById("deuda").value);
      const pago = parseFloat(document.getElementById("pago").value);
      const fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
      const correo = document.getElementById("correo").value;
      const direccion = document.getElementById("direccion").value;

      // Validación de campos
      if (!nombre || !telefono || isNaN(edad) || !sexo || !contacto_emergencia || !primer_pago || isNaN(deuda) || isNaN(pago) || !fecha_nacimiento || !correo || !direccion) {
        console.log("Por favor, llena todos los campos obligatorios.");
        return;
      }

      const clienteData = {
        nombre,
        telefono,
        edad,
        sexo,
        contacto_emergencia,
        primer_pago,
        fecha_pago,
        deuda,
        pago,
        fecha_nacimiento,
        correo,
        direccion,
      };


      try {
        const response = await fetch("http://localhost:3000/registros", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clienteData),
        });

        if (!response.ok) {
          throw new Error("Error al enviar los datos al servidor");
        }

        const result = await response.json();
        console.log("Cliente agregado exitosamente:", result);
        alert("Cliente agregado exitosamente");

        // Actualiza la lista de clientes al hacer un POST exitoso
        cargarClientes();

        // Opcional: cierra el modal después de agregar
        document.querySelector(".modal").style.display = "none";
      } catch (error) {
        console.error("Error al agregar el cliente:", error);
        alert("Error al agregar el cliente", error);
      }
    }

    // Agrega un listener al formulario para manejar el envío
    document.getElementById("userForm").addEventListener("submit", agregarCliente);
  }


  function PopUpFormEditUsers(cliente) {
    // Remover cualquier modal existente antes de crear uno nuevo
    const existingModal = document.querySelector(".modal");
    if (existingModal) {
      existingModal.remove();
    }

    var modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "flex"; // Mostrar el modal

    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    modalContent.innerHTML = `
      <div class="form-container">
        <h2>BODY COMBAT</h2>
        <h3>EDITAR USUARIO</h3>
        <form class="user-form" id="editForm">
            <div class="d-flex">
                <div class="form-group mx-2">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" value="${cliente.nombre}" />
                </div>
                <div class="form-group mx-2">
                    <label for="telefono">Teléfono</label>
                    <input type="tel" id="telefono" value="${cliente.telefono}" />
                </div>
                <div class="form-group mx-2">
                    <label for="edad">Edad</label>
                    <input type="number" id="edad" value="${cliente.edad}" />
                </div>
            </div>
            <div class="d-flex">
                <div class="form-group mx-2">
                    <label for="sexo">Sexo</label>
                    <select id="sexo">
                        <option value="">Seleccione</option>
                        <option value="HOMBRE" ${cliente.sexo === "HOMBRE" ? "selected" : ""}>Masculino</option>
                        <option value="MUJER" ${cliente.sexo === "MUJER" ? "selected" : ""}>Femenino</option>
                        <option value="otro" ${cliente.sexo === "otro" ? "selected" : ""}>Otro</option>
                    </select>
                </div>
                <div class="form-group mx-2">
                    <label for="contacto_emergencia">Contacto Emerg</label>
                    <input type="text" id="contacto_emergencia" value="${cliente.contacto_emergencia}" />
                </div>
            </div>
            <div class="d-flex">
                <div class="form-group mx-2">
                    <label for="primer_pago">Primer Pago</label>
                    <input type="date" id="primer_pago" value="${cliente.primer_pago}" />
                </div>
                <div class="form-group mx-2">
                    <label for="fecha_pago">Fecha de Pago</label>
                    <input type="date" id="fecha_pago" value="${cliente.fecha_pago}" />
                </div>
            </div>
             <div class="d-flex">
                <div class="form-group mx-2">
                  <label for="correo">Correo</label>
                  <input type="email" id="correo" value="${cliente.correo}"/>
                </div>
             </div>
  
            <div class="d-flex">
                <div class="form-group mx-2">
                    <label for="pago">Pago</label>
                    <input type="number" id="pago" value="${cliente.pago}" />
                </div>
                <div class="form-group mx-2">
                    <label for="deuda">Deuda</label>
                    <input type="number" id="deuda" value="${cliente.deuda}" />
                </div>
            </div>
            <div class="d-flex">
                <div class="form-group mx-2">
                    <label for="fecha_nacimiento">Fecha de Nacimiento</label>
                    <input type="date" id="fecha_nacimiento" value="${cliente.fecha_nacimiento}" />
                </div>
                <div class="form-group mx-2">
                    <label for="direccion">Dirección</label>
                    <input type="text" id="direccion" value="${cliente.direccion}" />
                </div>
            </div>
            <button type="submit" class="submit-btn">Editar</button>
        </form>
      </div>
    `;

    var closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = function () {
      document.body.removeChild(modal); // Remueve el modal del DOM
    };

    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    document.getElementById("editForm").onsubmit = async function (e) {
      e.preventDefault();
      await editarCliente(cliente.id); // Llama a la función para editar
      document.body.removeChild(modal); // Remueve el modal después de la edición
    };
  }


  async function editarCliente(id) {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const edad = document.getElementById("edad").value;
    const sexo = document.getElementById("sexo").value;
    const contacto_emergencia = document.getElementById("contacto_emergencia").value;
    const primer_pago = document.getElementById("primer_pago").value;
    const fecha_pago = document.getElementById("fecha_pago").value || null;
    const deuda = document.getElementById("deuda").value;
    const pago = document.getElementById("pago").value;
    const fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;

    try {
      const response = await fetch(`http://localhost:3000/registros/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          telefono,
          edad,
          sexo,
          contacto_emergencia,
          primer_pago,
          fecha_pago,
          deuda,
          pago,
          fecha_nacimiento,
          correo,
          direccion,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Error en la edición");

      alert("Usuario editado con éxito");

      cargarClientes();

    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }

  // Modificar la función que muestra el popup cuando se hace clic en el botón editar
  const handleEditClick = (cliente) => {
    PopUpFormEditUsers(cliente);
  };


  // Función para cargar los clientes desde el backend
  const cargarClientes = async () => {
    try {
      const response = await fetch('http://localhost:3000/registros', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        setClientes(data);
      } else {
        console.error('Error al cargar clientes:', response.statusText);
      }
    } catch (error) {
      console.error('Error al cargar clientes:', error);
    }
  };

  // Llama a cargarClientes al cargar la página
  useEffect(() => {
    cargarClientes();
  }, []);

  // Función para eliminar un cliente
  const eliminarCliente = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/registros/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        cargarClientes();
      }
    } catch (error) {
      console.error('Error al eliminar cliente:', error);
    }
  };

  return (
    <div className="admin-crud-page">
      <div className="header-controls">
        <button className="btn add-button" onClick={PopUpFormUsers}> + Agregar Cliente</button>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn custom-btn" type="submit">Search</button>
        </form>

        {/* Botón de filtración */}
        <div className="dropdown me-3">
          <button className="btn btn-secondary dropdown-toggle btn-filtrar" type="button" id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Filtrar
          </button>
          <ul className="dropdown-menu p-3 btn-filtrar" aria-labelledby="filterDropdown">
            <li>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="filter1" />
                <label className="form-check-label" htmlFor="filter1">Filtro 1</label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <section className="intro">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="card bg-dark shadow-2-strong">
                <div className="card-body">
                  <div className="table-wrapper">
                    <div className="table-responsive">
                      <table className="table table-dark table-borderless mb-0">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NOMBRE</th>
                            <th scope="col">TELEFONO</th>
                            <th scope="col">EDAD</th>
                            <th scope="col">SEXO</th>
                            <th scope="col">CTOS EMERGENCIA</th>
                            <th scope="col">ESTADO</th>
                            <th scope="col">PRIMER PAGO</th>
                            <th scope="col">FECHA DE PAGO</th>
                            <th scope="col">CORREO</th>
                            <th scope="col">PAGO</th>
                            <th scope="col">DEUDA</th>
                            <th scope="col">FEHCA DE NACI</th>
                            <th scope="col">DIRECCIÓN</th>
                            <th scope="col">ACCIONES</th>
                          </tr>
                        </thead>
                        <tbody>
                          {clientes.map((cliente) => (
                            <tr key={cliente.id}>
                              <td>{cliente.id}</td>
                              <td>{cliente.nombre}</td>
                              <td>{cliente.telefono}</td>
                              <td>{cliente.edad}</td>
                              <td>{cliente.sexo}</td>
                              <td>{cliente.contacto_emergencia}</td>
                              <td>{cliente.estado}</td>
                              <td>{cliente.primer_pago}</td>
                              <td>{cliente.fecha_pago}</td>
                              <td>{cliente.correo}</td>
                              <td>{cliente.pago}</td>
                              <td>{cliente.deuda}</td>
                              <td>{cliente.fecha_nacimiento}</td>
                              <td>{cliente.direccion}</td>
                              <td>
                                <div className="action-buttons">
                                  <button onClick={() => handleEditClick(cliente)} className="edit-button">Edit</button>
                                  <button onClick={() => eliminarCliente(cliente.id)} className="del-button">Delete</button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default AdminCRUDPage;
