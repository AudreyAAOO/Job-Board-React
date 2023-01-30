const Job = (props) => {
    console.log(props);

    return <div className={`item ${props.color}`}>

        <h3>{props.title}</h3>
        <p className="contractInfo"> {props.contractType} - {props.country} - {props.city}</p>

    </div>


};


export default Job;