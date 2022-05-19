import React, { FC, MouseEvent, useState } from 'react'
import { useInput } from '../../hooks/useInput'
import './form.css'


const Form: FC = () => {
    const [active, setActive] = useState(false)

    const email = useInput('', {isEmpty: true, minLength: 7, isEmail: false})
    const password = useInput('', {isEmpty: true, minLength: 6})

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(email.value, password.value)
        setActive(true)
    }

    const resetForm = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        email.resetValue()
        password.resetValue()

        setActive(false)
    }

    return (
    <div className="wrapper-form">
        <form className="form">
            <h1 className="title">Form</h1>
            <label className="form__label">Email
            {(email.isDirty && email.isEmpty) && <span className="error">*Введи Email</span>}
            {(email.emailErr && !email.isEmpty && email.isDirty)&& <span className="error">*Некорректный Email</span>}
                <input
                    value={email.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => email.onChange(e)}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => email.onBlur(e)}
                    type="email"
                    placeholder='Email'
                    className="form__input"
                />
            </label>
            <label className="form__label">Пароль
            {(password.isDirty && password.isEmpty) && <span className="error">*Введи пароль</span>}
            {(password.minLengthErr && !password.isEmpty && password.isDirty) && <span className="error">*Введи пароль (минимум 6 символов)</span>}
                <input
                    value={password.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => password.onChange(e)}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => password.onBlur(e)}
                    type="password"
                    placeholder='Пароль'
                    className="form__input"
                />
            </label>
            <button
                disabled={password.isEmpty || email.isEmpty || email.emailErr || password.minLengthErr}
                onClick={clickHandler}
                className="form__btn"
            >Отправить</button>
            <button
                onClick={resetForm}
                className="form__reset"
            >Сбросить форму</button>

            <div className={`form__content ${active ?'active' : ''}`}>
                <h4 className="form__text">Email: {email.value}</h4>
                <h4 className="form__text">Пароль: {password.value}</h4>
            </div>
        </form>
    </div>
    )
}

export default Form