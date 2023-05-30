import React, { useState } from "react";
import "../styles/RegisterCliente.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//La funciona cambia la ventana actual a la indicada
function change_log_in() {
    window.location = "/LoginCliente"
}

export const RegisterCliente = () => {

    /* Constantes que se utilizan para guardar informacion*/
    const [nombre, setNombre] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [edad, setEdad] = useState('');
    const [fecha_nac, setFecha_nac] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState('');
    const [pais, setPais] = useState('');
    const [cintura, setCintura] = useState('');
    const [cuello, setCuello] = useState('');
    const [caderas, setCaderas] = useState('');
    const [musculo, setMusculo] = useState('');
    const [grasa, setGrasa] = useState('');
    const [calorias, setCalorias] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    //const navigate = useNavigate();

    // Se valida que todos lo inputs tengan informacion y que no esten vacios
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = "Falta el/los valor/es: ";
        if (nombre === null || nombre === "") {
            isproceed = false;
            errormessage += ' Nombre';
        }
        if (apellido1 === null || apellido1 === "") {
            isproceed = false;
            errormessage += ' Apellido1';
        }
        if (apellido2 === null || apellido2 === "") {
            isproceed = false;
            errormessage += ' Apellido2';
        }
        if (edad === null || edad === "") {
            isproceed = false;
            errormessage += ' Edad';
        }
        if (fecha_nac === null || fecha_nac === "") {
            isproceed = false;
            errormessage += ' Fecha de nacimiento';
        }
        if (peso === null || peso === "") {
            isproceed = false;
            errormessage += ' Peso';
        }
        if (imc === null || imc === "") {
            isproceed = false;
            errormessage += ' IMC';
        }
        if (pais === null || pais === "") {
            isproceed = false;
            errormessage += ' Pais';
        }
        if (peso === null || peso === "") {
            isproceed = false;
            errormessage += ' Peso';
        }
        if (cintura === null || cintura === "") {
            isproceed = false;
            errormessage += ' Cintura';
        }
        if (cuello === null || cuello === "") {
            isproceed = false;
            errormessage += ' Cuello';
        }
        if (caderas === null || caderas === "") {
            isproceed = false;
            errormessage += ' Caderas';
        }
        if (musculo === null || musculo === "") {
            isproceed = false;
            errormessage += ' Musculo';
        }
        if (grasa === null || grasa === "") {
            isproceed = false;
            errormessage += ' Grasa';
        }
        if (calorias === null || calorias === "") {
            isproceed = false;
            errormessage += ' Calorias';
        }
        if (correo === null || correo === "") {
            isproceed = false;
            errormessage += ' Correo';
        }
        if (password === null || password === "") {
            isproceed = false;
            errormessage += ' Password';
        }
        if (!isproceed) {
            toast.warning(errormessage);
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(correo)) {

            } else {
                isproceed = false;
                toast.warning("Por favor ingrese un email válido");
            }
        }
        return isproceed;
    }

    /* Funcion que obtiene toda la informacion que el usario inserto en los inputs */
    const handleSubmit = (e) => {
        e.preventDefault();
        let regObject = {
            nombre, apellido1, apellido2, edad,
            fecha_nac, peso, imc, pais, peso, 
            cintura, cuello, caderas, musculo,
            grasa, calorias, correo, password
        };
        if (IsValidate()) {
            // Este post envia la informacion al API
            fetch("", { //Falta el link
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regObject)
            }).then((res) => {
                toast.success("Registrado exitosamente")
                //navigate('/');
            }).catch((err) => {
                toast.error("Error: " + err.message);
            });
        }
    }

    return (
        <div className="register_page_c">
            <form onSubmit={handleSubmit} className="register_cover_c">
                <h1>Crear cuenta</h1>

                {/* Aqui van todos los input donde el Cliente ingresa su informacion */}

                <label htmlFor="nombre" className="register_label_c">Nombre</label>
                <input value={nombre} onChange={e => setNombre(e.target.value)}
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre"
                    className="register_input_c">
                </input>

                <label htmlFor="apellido1" className="register_label_c">Primer apellido</label>
                <input value={apellido1} onChange={e => setApellido1(e.target.value)}
                    type="text"
                    name="apellido1"
                    id="apellido1"
                    placeholder="Primer apellido"
                    className="register_input_c">
                </input>

                <label htmlFor="apellido2" className="register_label_c">Segundo apellido</label>
                <input value={apellido2} onChange={e => setApellido2(e.target.value)}
                    type="text"
                    name="apellido2"
                    id="apellido2"
                    placeholder="Segundo apellido"
                    className="register_input_c">
                </input>

                <label htmlFor="edad" className="register_label_c">Edad</label>
                <input value={edad} onChange={e => setEdad(e.target.value)}
                    type="text"
                    name="edad"
                    id="edad"
                    placeholder="Inserte su edad"
                    className="register_input_c">
                </input>

                <label htmlFor="fecha_nac" className="register_label_c">Fecha de nacimiento</label>
                <input value={fecha_nac} onChange={e => setFecha_nac(e.target.value)}
                    type="date"
                    name="fecha_nac"
                    id="fecha_nac"
                    placeholder="Fecha de nacimiento"
                    className="register_input_c">
                </input>

                <label htmlFor="peso" className="register_label_c">Peso</label>
                <input value={peso} onChange={e => setPeso(e.target.value)}
                    type="text"
                    name="peso"
                    id="peso"
                    placeholder="Ingrese su peso en kg"
                    className="register_input_c">
                </input>

                <label htmlFor="IMC" className="register_label_c">IMC (Indice de masa corporal)</label>
                <input value={imc} onChange={e => setIMC(e.target.value)}
                    type="number"
                    min="0"
                    max="40"
                    step="0.1"
                    name="IMC"
                    id="IMC"
                    placeholder="Indice de masa corporal"
                    className="register_input_c">
                </input>

                <label htmlFor="pais" className="register_label_c">País</label>
                <input value={pais} onChange={e => setPais(e.target.value)}
                    type="text"
                    name="pais"
                    id="pais"
                    placeholder="Inserte el país donde reside"
                    className="register_input_c">
                </input>

                {/* Peso actual? */}

                <label htmlFor="cintura" className="register_label_c">Cintura</label>
                <input value={cintura} onChange={e => setCintura(e.target.value)}
                    type="number"
                    min="0"
                    max="200"
                    step="0.1"
                    name="cintura"
                    id="cintura"
                    placeholder="Cintura (en cm)"
                    className="register_input_c">
                </input>

                <label htmlFor="cuello" className="register_label_c">Cuello</label>
                <input value={cuello} onChange={e => setCuello(e.target.value)}
                    type="number"
                    min="0"
                    max="200"
                    step="0.1"
                    name="cuello"
                    id="cuello"
                    placeholder="Cuello (en cm)"
                    className="register_input_c">
                </input>

                <label htmlFor="caderas" className="register_label_c">Caderas</label>
                <input value={caderas} onChange={e => setCaderas(e.target.value)}
                    type="number"
                    min="0"
                    max="200"
                    step="0.1"
                    name="caderas"
                    id="caderas"
                    placeholder="Caderas (en cm)"
                    className="register_input_c">
                </input>

                <label htmlFor="musculo" className="register_label_c">Musculo</label>
                <input value={musculo} onChange={e => setMusculo(e.target.value)}
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    name="musculo"
                    id="musculo"
                    placeholder="% de Musculo"
                    className="register_input_c">
                </input>

                <label htmlFor="grasa" className="register_label_c">Grasa</label>
                <input value={grasa} onChange={e => setGrasa(e.target.value)}
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    name="grasa"
                    id="grasa"
                    placeholder="% de Grasa"
                    className="register_input_c">
                </input>

                <label htmlFor="calorias" className="register_label_c">Calorias</label>
                <input value={calorias} onChange={e => setCalorias(e.target.value)}
                    type="number"
                    min="0"
                    max="10000"
                    step="0.1"
                    name="calorias"
                    id="calorias"
                    placeholder="Consumo diario de calorias"
                    className="register_input_c">
                </input>

                <label htmlFor="correo" className="register_label_c">Correo electrónico</label>
                <input value={correo} onChange={e => setCorreo(e.target.value)}
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="ejemplo@gmail.com"
                    className="register_input_c">
                </input>

                <label htmlFor="password" className="register_label_c">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Inserte su password"
                    id="password"
                    name="password"
                    className="register_input_c">
                </input><br />

                <button type="submit" className="register_btn_c">Registrar</button><br />

                <button onClick={change_log_in} className="loggear_btn_c">Ya tenes cuenta? Has Login aqui.</button>
            </form>
        </div>
    )
}