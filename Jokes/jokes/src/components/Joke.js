import React from 'react'

export default function Joke(props){
    return (
        <>
        <h3>{props.setup}</h3>
        <p>{props.punchline}</p>
        <p>{props.isPun}</p>
        <p>___________________________________________</p>
        </>
    )
}