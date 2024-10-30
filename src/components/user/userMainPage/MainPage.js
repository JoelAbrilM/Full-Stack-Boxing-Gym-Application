import React from "react";
import "../../../styles/Styles.css";
import Footer from "../Footer/Footer";
import { Logo } from "../logoBodyCombat/Logo";

export const MainPage = () => {

    function PopUpFormUsers() {
        var modal = document.createElement("div");
        modal.className = "modal";
        modal.style.display = "flex"; // Mostrar el modal

        var modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        modalContent.innerHTML = `
          <div class="form-container">
            <h2>BODY COMBAT</h2>
            <h3>AGENDAR CLASE</h3>
            <form>
              <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" />
              </div>
              <div class="form-group">
                <label for="fecha">Fecha</label>
                <input type="date" id="fecha" />
              </div>
              <div class="form-group">
                <label for="hora">Hora</label>
                <input type="time" id="hora" />
              </div>
              <button type="submit" class="submit-btn">Agendar</button>
            </form>
          </div>
        `;

        var closeBtn = document.createElement("span");
        closeBtn.className = "close";
        closeBtn.innerHTML = "&times;";
        closeBtn.onclick = function () {
            modal.style.display = "none"; // Ocultar el modal
        };

        modalContent.appendChild(closeBtn);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }

    function PopUpFormTest() {
        var modal = document.createElement("div");
        modal.className = "modal";
        modal.style.display = "flex"; // Mostrar el modal

        var modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        modalContent.innerHTML = `
          <div class="form-container">
            <h2>BODY COMBAT</h2>
            <h3>AGENDAR CLASE PRUEBA</h3>
            <form>
              <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" />
              </div>
              <div class="form-group">
                <label for="fecha">Fecha</label>
                <input type="date" id="fecha" />
              </div>
              <div class="form-group">
                <label for="hora">Hora</label>
                <input type="time" id="hora" />
              </div>
              <button type="submit" class="submit-btn">Agendar</button>
            </form>
          </div>
        `;

        var closeBtn = document.createElement("span");
        closeBtn.className = "close";
        closeBtn.innerHTML = "&times;";
        closeBtn.onclick = function () {
            modal.style.display = "none"; // Ocultar el modal
        };

        modalContent.appendChild(closeBtn);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }

    return (
        <div className="BodyMainPage">
            <div className="diagonal-container">
                <div className="black-section">
                    <Logo />
                    <div className="content">
                        <div className="buttons-container">
                            <div className="btnMainPage1">
                                <button
                                    type="button"
                                    className="btnMainPage1Design"
                                    onClick={() => PopUpFormUsers()}
                                >
                                    Agendar Clase
                                </button>
                            </div>
                            <div className="btnMainPage2">
                                <button type="button" className="btnMainPage2Design" onClick={() => PopUpFormTest()}>
                                    Agendar Clase Prueba
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-section"></div>
            </div>   
            <Footer />
        </div>
    );
};
