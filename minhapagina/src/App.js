import React from 'react';


const Equipe = (props) =>{
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social fb={props.Facebook}/>
            <hr/>
        </div>
    );
}

const Sobre =(props) => {
    return(
        <div>
            <h2> Olá sou o(a) {props.nome}</h2>
            <h3>Sou {props.cargo}</h3>
            <h4>tenho {props.idade} anos</h4>
        </div>
    )
}
const Social = (props) => {
    return (
        <div>
        <a href={props.fb}>Facebook </a>
        <a>Linkedin </a>
        <a>Youtube </a>
        </div>
    );
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Tiago" cargo="Programador" idade="30"
                   Facebook="https://google.com"/>
            <Equipe nome="João" cargo="Designer" idade="35"
                   Facebook="https://google.com"/>
            <Equipe nome="Amanda" cargo="Front-end" idade="27"
                   Facebook="https://google.com"/>
           
           
        </div>
    )
}
export default App;
