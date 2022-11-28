import React from "react";

function Article ({ title, date="January 1, 1970", preview, minutesToRead}) {
    const emoji = minutesToRead < 30 ? "☕️" : "🍱"
    const timeStep = minutesToRead < 30 ? 5 : 10
    let sentence = ` ${minutesToRead} min read`
    for (let i = 0; i < Math.ceil(minutesToRead/timeStep); i++) {
        sentence = emoji + sentence
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} - {sentence}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article