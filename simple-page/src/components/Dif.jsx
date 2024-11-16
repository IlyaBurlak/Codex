import Button from "./Button/Button.jsx";
import {differences} from "../data.js";
import {useState} from "react";


export default function Dif() {
    const [contentType ,setContentType] = useState(null)


    function handleClick(type) {
        setContentType(type)
    }
    return (
    <section>
        <h3>Почему именно наша статья. </h3>
        <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Доступность</Button>
        <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Направленность</Button>
        <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Вклад</Button>
        {contentType ? <p>{differences[contentType]}</p> : <p>Выберите о чем хотите узнать </p>}
    </section>
    )
}