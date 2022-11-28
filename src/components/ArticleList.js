import React from "react";
import Article from "./Article"

function ArticleList ({ posts }) {
    const ArticleComponents = posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutesToRead={post.minutes}/>
    })
    return (
        <main>{ArticleComponents}</main>
    )
}

export default ArticleList