import react from "react"
import "./Sign.css"
export default function Sign() {


    return (
        <div>
            <h1>Авторизация</h1>

            <div className="formRegistration">
                <label>email:</label>
                <input type="text" placeholder="Введите емаил..."/>
                <label>password:</label>
                <input type="text" placeholder="Введите пароль..."/>
                <button>Войти</button>
            </div>
        </div>
    )

}