import React from "react";

function About ({ imageSource = "https://via.placeholder.com/215", aboutText }) {
    return (
        <aside>
            <img src={imageSource} alt="blog logo"></img>
            <p>{aboutText}</p>
        </aside>
    )
}

export default About