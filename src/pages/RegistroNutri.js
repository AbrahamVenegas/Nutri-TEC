import React, { useState } from "react";
import "../styles/RegisterNutri.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

//La funciona cambia la ventana actual a la indicada
function change_log_in() {
    window.location = "/"
}

export const RegisterNutri = () => {

    /* Constantes que se utilizan para guardar informacion*/
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [codigo_nutri, setCodigo_nutri] = useState('');
    const [edad, setEdad] = useState('');
    const [fecha_nac, setFecha_nac] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState('');
    const [provincia, setProvincia] = useState('');
    const [canton, setCanton] = useState('');
    const [distrito, setDistrito] = useState('');
    const [foto, setFoto] = useState('');
    const [tarjeta_credito, setTarjeta_credito] = useState('');
    const [tipo_cobro, setTipo_cobro] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    //const navigate = useNavigate();

    // Se valida que todos lo inputs tengan informacion y que no esten vacios
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = "Falta el/los valor/es: ";
        if (cedula === null || cedula === "") {
            isproceed = false;
            errormessage += ' Cedula';
        }
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
        if (provincia === null || provincia === "") {
            isproceed = false;
            errormessage += ' Provincia';
        }
        if (canton === null || canton === "") {
            isproceed = false;
            errormessage += ' Canton';
        }
        if (distrito === null || distrito === "") {
            isproceed = false;
            errormessage += ' Distrito';
        }
        if (foto === null || foto === "") {
            isproceed = false;
            errormessage += ' Foto';
        }
        if (tarjeta_credito === null || tarjeta_credito === "") {
            isproceed = false;
            errormessage += ' Tarjeta Credito';
        }
        if (tipo_cobro === null || tipo_cobro === "") {
            isproceed = false;
            errormessage += ' Tipo Cobro';
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
            cedula, nombre, apellido1, apellido2, edad,
            fecha_nac, peso, imc, provincia, canton, distrito,
            foto, tarjeta_credito, tipo_cobro, correo, password
        };
        console.log(regObject.tipo_cobro)
        console.log(regObject.provincia)
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
        <div className="register_page">
            <form onSubmit={handleSubmit} className="register_cover">
                <h1>Crear cuenta</h1>

                {/* Aqui van todos los input donde el Cliente ingresa su informacion */}

                <label htmlFor="cedula" className="register_label">Cédula</label>
                <input value={cedula} onChange={e => setCedula(e.target.value)}
                    type="text"
                    placeholder="Ingrese su numero de cédula"
                    id="cedula"
                    name="cedula"
                    className="register_input">
                </input>

                <label htmlFor="nombre" className="register_label">Nombre completo</label>
                <input value={nombre} onChange={e => setNombre(e.target.value)}
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre compelto"
                    className="register_input">
                </input>

                <label htmlFor="apellido1" className="register_label">Primer apellido</label>
                <input value={apellido1} onChange={e => setApellido1(e.target.value)}
                    type="text"
                    name="apellido1"
                    id="apellido1"
                    placeholder="Primer apellido"
                    className="register_input">
                </input>

                <label htmlFor="apellido2" className="register_label">Segundo apellido</label>
                <input value={apellido2} onChange={e => setApellido2(e.target.value)}
                    type="text"
                    name="apellido2"
                    id="apellido2"
                    placeholder="Segundo apellido"
                    className="register_input">
                </input>

                <label htmlFor="codigo_nutri" className="register_label">Código de Nutriconista</label>
                <input value={codigo_nutri} onChange={e => setCodigo_nutri(e.target.value)}
                    type="text"
                    name="codigo_nutri"
                    id="codigo_nutri"
                    placeholder="Código de Nutriconista"
                    className="register_input">
                </input>

                <label htmlFor="edad" className="register_label">Edad</label>
                <input value={edad} onChange={e => setEdad(e.target.value)}
                    type="text"
                    name="edad"
                    id="edad"
                    placeholder="Inserte su edad"
                    className="register_input">
                </input>

                <label htmlFor="fecha_nac" className="register_label">Fecha de nacimiento</label>
                <input value={fecha_nac} onChange={e => setFecha_nac(e.target.value)}
                    type="date"
                    name="fecha_nac"
                    id="fecha_nac"
                    placeholder="Fecha de nacimiento"
                    className="register_input">
                </input>

                <label htmlFor="peso" className="register_label">Peso</label>
                <input value={peso} onChange={e => setPeso(e.target.value)}
                    type="text"
                    name="peso"
                    id="peso"
                    placeholder="Ingrese su peso en kg"
                    className="register_input">
                </input>

                <label htmlFor="IMC" className="register_label">IMC (Indice de masa corporal)</label>
                <input value={imc} onChange={e => setIMC(e.target.value)}
                    type="number"
                    min="0"
                    max="40"
                    step="0.1"
                    name="IMC"
                    id="IMC"
                    placeholder="Indice de masa corporal"
                    className="register_input">
                </input>

                <label htmlFor="provincia" className="register_label">Provincia</label>
                <select
                    name="provincia"
                    id="provincia"
                    className="register_select"
                    onChange={e => setProvincia(e.target.value)}
                >
                    <option selected disabled>Eliga una opcion</option>
                    <option value="Alajuela">Alajuela</option>
                    <option value="Cartago">Cartago</option>
                    <option value="Guanacaste">Guanacaste</option>
                    <option value="Heredia">Heredia</option>
                    <option value="Limón">Limón</option>
                    <option value="Puntarenas">Puntarenas</option>
                    <option value="San José">San José</option>
                </select>

                <label htmlFor="canton" className="register_label">Canton</label>
                <input value={canton} onChange={e => setCanton(e.target.value)}
                    type="text"
                    name="canton"
                    id="canton"
                    placeholder="Ingrese su canton"
                    className="register_input">
                </input>

                <label htmlFor="distrito" className="register_label">Distrito</label>
                <input value={distrito} onChange={e => setDistrito(e.target.value)}
                    type="text"
                    name="distrito"
                    id="distrito"
                    placeholder="Ingrese su distrito"
                    className="register_input">
                </input>

                <label className="register_label">Fotografía</label>
                <label htmlFor="foto" className="register_label_file">
                    <AddPhotoAlternateIcon />
                    Agregar imagen
                </label>
                <input value={foto} onChange={e => setFoto(e.target.value)}
                    type="file"
                    name="foto"
                    id="foto"
                    accept="image/png, image/jpeg"
                    className="register_input_file">
                </input>

                <label htmlFor="tarjeta_credito" className="register_label">Tarjeta de crédito</label>
                <input value={tarjeta_credito} onChange={e => setTarjeta_credito(e.target.value)}
                    type="email"
                    name="tarjeta_credito"
                    id="tarjeta_credito"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    className="register_input">
                </input>

                <label htmlFor="tipo_cobro" className="register_label">Tipo de cobro</label>
                <select
                    name="tipo_cobro"
                    id="tipo_cobro"
                    className="register_select"
                    onChange={e => setTipo_cobro(e.target.value)}
                >
                    <option selected disabled>Eliga una opcion</option>
                    <option value="Semanal">Semanal</option>
                    <option value="Mensual">Mensual</option>
                    <option value="Anual">Anual</option>
                </select>

                <label htmlFor="correo" className="register_label">Correo electrónico</label>
                <input value={correo} onChange={e => setCorreo(e.target.value)}
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="ejemplo@gmail.com"
                    className="register_input">
                </input>

                <label htmlFor="password" className="register_label">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Inserte su password"
                    id="password"
                    name="password"
                    className="register_input">
                </input><br />

                <button type="submit" className="register_btn">Registrar</button><br />

                <button onClick={change_log_in} className="loggear_btn">Ya tenes cuenta? Has Login aqui.</button>
            </form>
        </div>
    )
}