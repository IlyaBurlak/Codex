export default function WayToTeach(props){
    return (
        <li>
            <p>
                <strong>{props.title}</strong> <br/>
                {props.description}
            </p>
        </li>
    )
}