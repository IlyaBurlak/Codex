import WayToTeach from "./WayToTeach.jsx";
import {ways} from "../data.js";
import React from "react";

export default function TeachingSection() {
    return (
        <section>
            <h3> В нашей статье есть:</h3>
            <ul>
                {ways.map((way) => (
                    <WayToTeach key={way.title} {...way} />
                    ))}
            </ul>
        </section>
    )
}