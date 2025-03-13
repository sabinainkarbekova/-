import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/users', { firstName, lastName });
            setMessage(`Пользователь ${response.data.first_name} сохранён!`);
            setFirstName('');
            setLastName('');
        } catch (error) {
            console.error('Ошибка:', error);
            setMessage('Ошибка');
        }
    };
    return (
        <div className="container">
            <h2 className="form-title">Регистрация</h2>
            <div className="form-box">
                <form onSubmit={handleSubmit}>
                    <label>Имя:</label>
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                    />

                    <label>Фамилия:</label>
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                    />

                    <button type="submit">Сохранить</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default Form;