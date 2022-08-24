import './Heading.css'


const Heading = () => {
    return (
        <div className="heading">
            <h1>Your To Do List</h1>
            <div className="icons">
                <p 
                    className="btn-cookie btn-sm btn-head ">Mark as important
                    <i className="fas fa-star" style={{color:"#FFD700"}}></i>
                </p>
                <p
                    className="btn-cookie btn-sm btn-head ">Mark as done
                    <i className="fas fa-check-circle" style={{color:"#7DCE13"}}></i>
                </p>
                <p
                    className="btn-trash btn-sm btn-head ">Delete
                    <i className="fas fa-trash" style={{color:"#e5383b"}}></i>
                </p>
            </div>
        </div>
    )
}

export default Heading;