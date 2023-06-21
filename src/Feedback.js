import React from 'react'

const Feedback = (props) => {
  return (
    <div className="d-flex gap-2 justify-content-center" >
        <button 
            type="button"
            className="btn btn-outline-primary"
            onClick={props.funcAprovado}>
                {props.txtAprovado}
        </button>

        <button 
            type="button"
            className="btn btn-outline-danger"
            onClick={props.funcReprovado}>
                {props.txtReprovado}
        </button>
    </div>

  )
}

export default Feedback