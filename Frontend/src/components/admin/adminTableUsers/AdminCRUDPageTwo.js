import React from 'react'
import "../../../styles/Styles.css";

const AdminCRUDPageTwo = () => {

    return (
        <div>
            <div className="admin-crud-page">
                <div className="header-controls">
                    <button className="btn add-button"> + Agregar Cliente</button>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn custom-btn" type="submit">Search</button>
                    </form>

                    {/* Botón de filtración */}
                    <div className="dropdown me-3">
                        <button className="btn btn-secondary dropdown-toggle btn-filtrar" id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtrar
                        </button>
                        <ul className="dropdown-menu p-3 btn-filtrar" aria-labelledby="filterDropdown">
                            <li>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="filter1" />
                                    <label className="form-check-label" htmlFor="filter1">Filtro 1</label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="filter2" />
                                    <label className="form-check-label" htmlFor="filter2">Filtro 2</label>
                                </div>
                            </li>
                            <li>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="filter3" />
                                    <label className="form-check-label" htmlFor="filter3">Filtro 3</label>
                                </div>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <button className="btn btn-primary w-100">Aplicar</button>
                            </li>
                        </ul>
                    </div>

                </div>

                <section className="intro">
                    <div>
                        <div>
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
                                                                    <th scope="col">FECHA</th>
                                                                    <th scope="col">HORA</th>
                                                                    <th scope="col">PERIODO</th>
                                                                    <th scope="col">ASISTENCIA</th>
                                                                    <th scope="col">CLASE</th>
                                                                    <th scope="col">ACCIONES</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Tiger Nixon</td>
                                                                    <td>01/01/2023</td>
                                                                    <td>08:00</td>
                                                                    <td>AM</td>
                                                                    <td>Presente</td>
                                                                    <td>Estudiante</td>
                                                                    <td>
                                                                        <div className="action-buttons">
                                                                            <button className="edit-button">Edit</button>
                                                                            <button className="del-button">Delete</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Sonya Frost</td>
                                                                    <td>15/02/2023</td>
                                                                    <td>10:00</td>
                                                                    <td>AM</td>
                                                                    <td>Ausente</td>
                                                                    <td>Prueba</td>
                                                                    <td>
                                                                        <div className="action-buttons">
                                                                            <button className="edit-button">Edit</button>
                                                                            <button className="del-button">Delete</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Jena Gaines</td>
                                                                    <td>20/03/2023</td>
                                                                    <td>03:00</td>
                                                                    <td>PM</td>
                                                                    <td>Presente</td>
                                                                    <td>Estudiante</td>
                                                                    <td>
                                                                        <div className="action-buttons">
                                                                            <button className="edit-button">Edit</button>
                                                                            <button className="del-button">Delete</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>Quinn Flynn</td>
                                                                    <td>05/04/2023</td>
                                                                    <td>01:00</td>
                                                                    <td>PM</td>
                                                                    <td>Presente</td>
                                                                    <td>Prueba</td>
                                                                    <td>
                                                                        <div className="action-buttons">
                                                                            <button className="edit-button">Edit</button>
                                                                            <button className="del-button">Delete</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default AdminCRUDPageTwo
