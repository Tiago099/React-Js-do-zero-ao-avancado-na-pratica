import React, { Component } from 'react';


    
class App extends Component{
// Renderização condicional normal
  /*constructor(props){
    super(props);
    this.state = {
      status: 2

    };
  }

  render(){
      return(
          <div>
            {this.state.status === 1 &&
                <h1>Bem-vindo ao sistema!</h1>
            }

        <div>
          <h2>Curso de React Js</h2>
        </div>

      </div>
        );
        
    }
  }
  */
 // Renderização com true e false
  constructor(props){
    super(props);
    this.state = {
      status: false

    };

    this.sair = this.sair.bind(this);
    this.entrar = this.entrar.bind(this);
  }
  sair(){
    this.setState({status: false});
  }

  entrar(){
    this.setState({status: true});
  }

  render(){
      return(
          <div>
            {this.state.status ?
            <div>
                <h2>Bem-vindo ao sistema!</h2>
                <button onClick={this.sair}>Sair</button>
            </div> :
            <div>
                <h2>Olá visitante, faça o login!</h2>
                <button onClick={this.entrar}>Entrar no sistema</button>
            
            </div>    
          }

        </div>

      );
         
  }

}
export default App;
