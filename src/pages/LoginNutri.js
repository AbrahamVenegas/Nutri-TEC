import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../styles/LoginNutri.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function change_register() {
    window.location = "RegisterNutri"
}

export const LoginNutri = () => {

    //Se guardan los datos de email y password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Constante que sirve para navegar a otra pagina
    const usenavigate = useNavigate();


    const CryptoJS = require("crypto-js");

    //Funcion que encripta en MD5
    function encryptPassword(password) {
        const encryptedPassword = CryptoJS.MD5(password).toString();
        return encryptedPassword;
    }

    //Se valida que el email y la contraseña sean correctas
    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("https://nutritec-api-postgres.azurewebsites.net/api/Nutricionista/Get_Id_Nutri?email=" + email).then((res) => { //Falta el link del API
                return res.json();
            }).then((resp) => {
                console.log(resp[0].email)
                console.log(resp[0].password)
                if (Object.keys(resp).length === 0) {
                    toast.error('Por favor ingrese un email valido');
                } else {
                    if (resp[0].password === password) { //encryptPassword()
                        localStorage.setItem('nombreNutricionista', resp[0].nombre+' '+resp[0].apellido1);
                        toast.success('Login exitoso');
                        usenavigate('/GProductos')
                    } else {
                        toast.error('Credenciales incorrectas');
                    }
                }
            }).catch((err) => {
                toast.error('Login failed due to: ' + err.message);
            });
        }
    }

    //Se valida que el email y la contraseña no sean vacios
    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
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
                    <label htmlFor="email" className="login_label_n">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Inserte su email"
                        email="email"
                        name="email"
                        className="login_input_n"></input>

                    <label htmlFor="Password" className="login_label_n ">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Inserte su Password"
                        email="password"
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