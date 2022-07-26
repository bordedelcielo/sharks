import { useEffect, useState } from "react"

export default function Contact() {
    const [color, setColor] = useState('Green')
    const [count, setCount] = useState(0)

    // runs once
    useEffect(() => {
        console.log('Component Mounted')

    }, []) // dependency array

    // runs everytime the component reloads
    useEffect(() => {
        console.log('Component Updated')
    })

    // Run code whenever the value of color changes
    useEffect(() => {
        console.log('Color changed to: ' + color)
        document.body.style.backgroundColor = color
    }, [color]) //color is a variable that, when changed, causes this useEffect function to run.

    function changeColor() {
        let colors = ["Blue", "Green", "Orange", "Yellow", "Pink"]

        // Get random color from array
        setColor(colors[Math.floor(Math.random() * colors.length)])
    }

    return (
        <>
            <h1>Contact</h1>
            <p>Count { count }</p>
            <button onClick={() => setCount(count + 1)}>Increment Counter</button>
            <p>Color: { color }</p>
            <button onClick={() => changeColor()}>Change Color</button>
        </>
    )
}