import React from 'react';

/*component => passar alguma coisa pra ser exibida,tem esses dois tipo

=> const Bemvindo = () => <h2>Bem Vindo(a)</h2>

=> const Bemvindo = () =>{
    return(
        <div>
            <h2>Bem Vindo(a)</h2>
        </div>
    )
}

function App(){
    return(
        <div>
            Olá Mundo!
            <Bemvindo/>
            <h1> Olá Mundo!</h1>
        </div>
    )
}
export default App;
*/

// props => são atributo que passamos pro usuario ver, são propriedades.


const Bemvindo = (props) =>{
    return(
        <div>
            <h2>Bem-Vindo(a){props.nome}</h2>
            <h3>Tenho {props.anos} Anos</h3>
        </div>
    )
}

function App(){
    return(
        <div>
            Olá Mundo!
            <Bemvindo nome="Tiago" anos = "30"/>
            <Bemvindo nome="Amanda" anos = "24" />
        </div>
    )
}
export default App;
