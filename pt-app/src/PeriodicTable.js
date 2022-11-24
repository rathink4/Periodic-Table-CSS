import React from "react"
import "./PeriodicTable.css"
import data from "./PeriodicTableJSON.json"

const colorMap = {
    "noble gas": "#4deeea",
  "alkaline earth metal": "#d8c596",
  "diatomic nonmetal": "#db1f48",
  "alkali metal": "#B4CDE6",
  "transition metal": "#90EE90",
  "post-transition metal": "#008631",
  lanthanide: "#d4af37",
  metalloid: "#d5d5d7",
}

const PeriodicTable = () =>{
    return <div className="periodic-table">
        {data.elements.map(element => (
            <div
                className="element" 
                key={element.name} 
                style ={{
                gridColumn: element.xpos,
                gridRow: element.ypos,
                borderColor: colorMap[element.category],
                }}
            >
                <strong>{element.symbol}</strong>
                <small className="number">{element.number}</small>
                <small className="name">{element.name}</small>
            </div>
        ))}
    </div>
}

export default PeriodicTable