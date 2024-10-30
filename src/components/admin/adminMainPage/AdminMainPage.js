import React from "react";
import "../../../styles/Styles.css";
import Navbar from "../adminNavbar/Navbar";
import AdminCRUDPage from "../adminTableUsers/AdminCRUDPage ";
import AdminCRUDPageTwo from "../adminTableUsers/AdminCRUDPageTwo";


const AdminMainPage = () => {
    return (
        <div className="admin-main-page">
            <Navbar />
            <div className="content-overlay">
                <div className="title-container">
                    <h1 className="title">Clientes de Boxeo</h1>
                </div>
                <div className="table-container">
                    <AdminCRUDPage />
                </div>
                <div className="title-container">
                    <h1 className="title">Clases de Boxeo</h1>
                </div>
                <div className="table-container">
                    <AdminCRUDPageTwo />
                </div>
            </div>
        </div>
    );
};

export default AdminMainPage;
