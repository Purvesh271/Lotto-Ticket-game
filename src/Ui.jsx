import { useState } from "react"
import "./Ui.css";
import { genTicket, sum } from "./functions";

export default function Ui(){
    let [Ticket , setTicket] = useState(genTicket(3));

    let win = sum(Ticket)=== 15;

    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{Ticket[0]}</span>
                <span>{Ticket[1]}</span>
                <span>{Ticket[2]}</span>
            </div>
            <h2>{win && "You Won!!"}</h2>

        </div>
    )
}