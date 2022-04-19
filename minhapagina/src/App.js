import React, { Component } from 'react';
import Feed from './Components/Feed';


    
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: 1, username: 'Joao', curtidas:15, comentarios:3},
        {id: 2, username: 'Mateus', curtidas:100, comentarios:40},
        {id: 3, username: 'Tiago', curtidas:250, comentarios:100},
        {id: 4, username: 'Maria'  , curtidas:50, comentarios:9},
        {id: 4, username: 'Ireu'  , curtidas:1, comentarios:1},
      ]
      
    
    };

  }

  render(){
      return(
          <div>

            {this.state.feed.map((item)=>{
              return(
                
                  <Feed key={item.id} username={item.username}
                  curtidas={item.curtidas} comentarios={item.comentarios}/>
          
              );
            })}
          
          </div>    
          
      );
         
  }

}
export default App;
