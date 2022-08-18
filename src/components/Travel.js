import react from "react"

export default function Travel(props){
    return(
        <div className="travel">
            <img className="travel--img" src={props.item.imageUrl}></img>
            <div className="travel--details">
                <div className="travel--loc">
                    <img src={process.env.PUBLIC_URL+"/images/Loc-Icon.png"}></img>
                    <h5 className="loc--name">{props.item.location}</h5>
                    <a className="g--link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="title">{props.item.title}</h2>
                <h5 className="date">{props.item.startDate} - {props.item.endDate}</h5>
                <p className="desc">{props.item.description}</p>
                
            </div>
        </div>
    )
}