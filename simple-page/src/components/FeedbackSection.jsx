import Button from "./Button/Button.jsx";
import { useState } from "react";
import styled from "styled-components";

const FeedbackContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;      
    height: 64vh;           
    padding: 2rem;           
    background: #f9f9f9;     
`;

export default function FeedbackSection() {
    const [name, setName] = useState('');
    const [reason, setReason] = useState('help');
    const [hasError, setHasError] = useState(false);

    function handleNameChange(event) {
        setName(event.target.value);
        setHasError(event.target.value.trim().length === 0);
    }

    return (
        <FeedbackContainer>
            <h3>Обратная связь</h3>

            <form action="">
                <label htmlFor='name'>Ваше имя: </label>
                <input
                    type="text"
                    id='name'
                    className='control'
                    value={name}
                    style={{
                        border: hasError ? '1px solid red' : null,
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor='reason'>Причина обращения </label>
                <select
                    id="reason"
                    className='control'
                    value={reason}
                    onChange={event => setReason(event.target.value)}>
                    <option value="error">Ошибка</option>
                    <option value="help">Помощь</option>
                    <option value="suggest">Другое</option>
                </select>
                <Button disable={hasError}>Отправить</Button>
            </form>
        </FeedbackContainer>
    );
}
