import { useState } from "react"
import ColorBox from "./ColorBox"
import './styles.css'

function App(props) {
    let [bgColor, setBGColor] = useState('blue')
    let opacity = ['0.25', '0.35', '0.5','0.75', '0.85','1']
    let getRandom = () => Math.floor(Math.random() * 256) +','+Math.floor(Math.random() * 256)+','+Math.floor(Math.random() * 256)
    let getAlphaColor = (color) => color.slice(0, color.length-1) + `,0.05` +color.slice(color.length-1)
    return ( 
        <div className = 'container' style = {{backgroundColor:getAlphaColor(bgColor)}}>
        <h1> Color Pallette Generator </h1> 
        <button onClick = {() => setBGColor('rgb(' + getRandom()+')')}> Generate Color </button>
        <div className = 'display-area'>
        {opacity.map(value => <ColorBox color = {bgColor} opacity = {value}/>)}
        </div>
        </div>

    )
}

export default App;