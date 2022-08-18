import react from "react"

export default function Navbar(){
    return(
        <div className="nav">
            <img className="globe"  src={process.env.PUBLIC_URL+"/images/globe.png"} ></img>
            <p className="nav--text">My Travel Journal</p>
        </div>
    )
}