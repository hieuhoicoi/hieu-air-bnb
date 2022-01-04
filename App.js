import React from "react"
import Navbar from "./compo/Navbar"
import Hero from "./compo/Hero"
import Card from "./compo/Card"
import data from "./data"

export default function App() {
    data = data.map(item => {
        return (
            <Card
                id={item.id}
                {...item}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
             <Hero />
            <section className="cards-list">
                {data}
            </section>
        </div>
    )
}