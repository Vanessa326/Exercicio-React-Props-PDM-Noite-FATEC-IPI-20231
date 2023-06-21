import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListaComentarios from './ListaComentarios'
import Cartao from './Cartao'
import Comentario from './Comentario'
import Feedback from './Feedback'

const App = () => {

    const txtReprovado="Reprovado";
    const txtAprovado="Aprovado";
    const funcAprovado= () => alert("Comentario aprovado :)");
    const funcReprovado= () => alert("Comentario reprovado :/");
    
    const compFeedback = <Feedback txtAprovado={txtAprovado} txtReprovado={txtReprovado} funcAprovado={funcAprovado} funcReprovado={funcReprovado} />;

    const agora = new Date();


    return(
        
        <ListaComentarios>
            <Cartao>
                <Comentario
                    nome="José"
                    texto="Comentartio 1"
                    dataa={agora.toLocaleString()}
                    foto="https://images.pexels.com/photos/2589650/pexels-photo-2589650.jpeg?auto=compress&cs=tinysrgb&w=400"/>
                
                {compFeedback}
            </Cartao>

            <Cartao>
                <Comentario
                    nome="Antonio"
                    texto="Comentartio 2"
                    dataa={agora.toLocaleString()}
                    foto="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=400"/>
                
                {compFeedback}
            </Cartao>

            <Cartao>
                <Comentario
                    nome="Julia"
                    texto="Comentartio 3"
                    dataa={agora.toLocaleString()}
                    foto="https://images.pexels.com/photos/4429279/pexels-photo-4429279.jpeg?auto=compress&cs=tinysrgb&w=400"/>
                
                {compFeedback}
            </Cartao>

        </ListaComentarios>
        
    )
        
    
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

