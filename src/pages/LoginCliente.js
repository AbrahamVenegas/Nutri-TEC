import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../styles/LoginCliente.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function change_register() {
    window.location = "RegisterCliente"
}

export const LoginCliente = () => {

    //Se guardan los datos de correo y password
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    //Constante que sirve para navegar a otra pagina
    //const usenavigate = useNavigate();

    
    const CryptoJS = require("crypto-js");

    //Funcion que encripta en MD5
    function encryptPassword(password) {
        const encryptedPassword = CryptoJS.MD5(password).toString();
        return encryptedPassword;
    }

    //Se valida que el correo y la contraseña sean correctas
    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("" + correo).then((res) => { //Falta el link del API
                return res.json();
            }).then((resp) => {
                console.log(resp[0].correo)
                console.log(resp[0].password)
                if (Object.keys(resp).length === 0) {
                    toast.error('Por favor ingrese un correo valido');
                } else {
                    if (resp[0].password === encryptPassword(password)) {
                        toast.success('Login exitoso');
                        //usenavigate('/') //Falta pagina de inicio
                    } else {
                        toast.error('Credenciales incorrectas');
                    }
                }
            }).catch((err) => {
                toast.error('Login failed due to: ' + err.message);
            });
        }
    }

    //Se valida que el correo y la contraseña no sean vacios
    const validate = () => {
        let result = true;
        if (correo === '' || correo === null) {
            result = false;
            toast.warning('Por favor ingrese un usuario');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Por favor ingrese una password');
        }
        return result;
    }

    return (
        <div className="page_c">
            <form onSubmit={ProceedLogin} className="cover_c">
                <label htmlFor="correo" className="login_label_c">Correo</label>
                <input value={correo} onChange={(e) => setCorreo(e.target.value)}
                    type="text"
                    placeholder="Inserte su correo"
                    id="correo"
                    name="correo"
                    className="login_input_c"></input>

                <label htmlFor="Password" className="login_label_c ">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Inserte su Password"
                    id="password"
                    name="password"
                    className="login_input_c"></input>

                <button type="submit" className="login_btn_c">Log In</button>

                <button onClick={change_register}
                    className="registrar_btn_c">No tienes cuenta? Registrate aqui.
                </button>

            </form>
        </div>
    )
}