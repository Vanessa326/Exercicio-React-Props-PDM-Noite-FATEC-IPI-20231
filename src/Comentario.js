import React from 'react'

const Comentario = (props) => (
<div className="card mb-3" >
    <div className="row g-0">
        <div className="col-md-4 p-2">
            <img src={props.foto}className="img-fluid rounded-start" alt="" />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{props.nome}</h5>
                <hr />
                <p className="card-text">{props.texto}</p>
                <p className="card-text"><small className="text-muted">{props.dataa}</small></p>
            </div>
        </div>
    </div>
</div>

)

export default Comentario