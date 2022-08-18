import react from "react";
import Navbar from "./components/Navbar"
import Travel from "./components/Travel"
import Data from "./Data"

export default function App(){
    const arr = Data.map((i) => {
        return(
            <Travel 
                item = {i}
            />
        )
    })
    return(
        <div>
            <Navbar />
            <div className="travel--arr">
                {arr}
            </div>    
        </div>
    )
}
