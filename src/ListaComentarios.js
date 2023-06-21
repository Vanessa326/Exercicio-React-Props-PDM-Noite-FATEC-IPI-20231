import React from 'react'

const ListaComentarios = (props) => {
  return (
    <div className="container border border-warning p-3">
      {props.children}
    </div>
    
  )
}

export default ListaComentarios