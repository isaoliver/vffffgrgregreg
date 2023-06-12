//criando a função que ira mostrar o texto

import Texto from './componentes/texto'
function Texto(props) {
    return (
        <div>
            <p>Código:({props.codigo})</p>
            <p>Nome:({props.nome})</p>
            <p>Telefone: ({props.telefone})</p>
            <p>Prioridade ({props.prioridade}):</p>
            <p>Endereço:({props.endereço})</p>
            <p>Curso:({props.curso})</p>


    
            
        </div>
    )
}

export default App