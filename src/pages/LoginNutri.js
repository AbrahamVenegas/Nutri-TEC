import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../styles/LoginNutri.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function change_register() {
    window.location = "RegisterNutri"
}

export const LoginNutri = () => {

    //Se guardan los datos de cedula y password
    const [cedula, setcedula] = useState('');
    const [password, setPassword] = useState('');

    //Constante que sirve para navegar a otra pagina
    const usenavigate = useNavigate();


    const CryptoJS = require("crypto-js");

    //Funcion que encripta en MD5
    function encryptPassword(password) {
        const encryptedPassword = CryptoJS.MD5(password).toString();
        return encryptedPassword;
    }

    //Se valcedulaa que el cedula y la contraseña sean correctas
    const ProceedLogin = (e) => {
        e.preventDefault();
        if (valcedulaate()) {
            fetch("https://localhost:7165/nutricionistas/" + cedula).then((res) => { //Falta el link del API
                res.json().then(resp => {
                    console.log(resp.cedula)
                    console.log(resp.password)
                    if (Object.keys(resp).length === 0) {
                        toast.error('Por favor ingrese un cedula valcedulao');
                    } else {
                        if (resp.password === password) { //encryptPassword(password)
                            toast.success('Login exitoso');

                            localStorage.setItem('cedula', resp.cedula);
                            localStorage.setItem('password', resp.password);    

                            usenavigate('/GProductos') //Falta pagina de inicio
                        } else {
                            toast.error('Credenciales incorrectas');
                        }
                    }
                })
            }).catch((err) => {
                toast.error('Login failed due to: ' + err.message);
            });
        }
    }

    //Se valcedulaa que el cedula y la contraseña no sean vacios
    const valcedulaate = () => {
        let result = true;
        if (cedula === '' || cedula === null) {
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
        <>
            <ToastContainer />
            <div className="page_n">
                <form onSubmit={ProceedLogin} className="cover_n">
                    <label htmlFor="cedula" className="login_label_n">cedula</label>
                    <input value={cedula} onChange={(e) => setcedula(e.target.value)}
                        type="text"
                        placeholder="Inserte su cedula"
                        cedula="cedula"
                        name="cedula"
                        className="login_input_n"></input>

                    <label htmlFor="Password" className="login_label_n ">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Inserte su Password"
                        cedula="password"
                        name="password"
                        className="login_input_n"></input>

                    <button type="submit" className="login_btn_n">Log In</button>

                    <button onClick={change_register}
                        className="registrar_btn_n">No tienes cuenta? Registrate aqui.
                    </button>

                </form>
            </div>
        </>
    )
}