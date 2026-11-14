import react from "react"
import "./SignUp.css"
export default function SignUp() {


    return (
        <div>
            <h1>Регистрация</h1>

            <div className="formLogin">
                <label>Имя:</label>
                <input type="text" placeholder="Введите имя..."/>
                <label>Фамилия:</label>
                <input type="text" placeholder="Введите Фамилию..."/>
                <label>email:</label>
                <input type="text" placeholder="Введите емаил..."/>
                <label>password:</label>
                <input type="text" placeholder="Введите пароль..."/>
                <button>Зарегистрироваться</button>
            </div>
        </div>
    )


}
