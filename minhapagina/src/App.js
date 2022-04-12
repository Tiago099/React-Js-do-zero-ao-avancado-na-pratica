import React, { Component } from 'react';


    
class App extends Component{

    constructor(props){
        super (props);
        this.state = {
            hora: '00:00:00'
         };
    }
 // ciclo de vida componentDidMount é rodado uma unica vez


    componentDidMount(){
        setInterval(()=>{
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000);
    }

    //ciclo de vida componetDidUpdate toda vez que precisa atualiza um state

    componentDidUpdate(){
        console.log('Atualizou!!!');
    }
  render(){
      return(
          <div>
              <h1>Meu Projeto {this.state.hora}</h1>
            
          </div>
        );
        
    }
  }
export default App;