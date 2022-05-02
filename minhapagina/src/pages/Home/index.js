import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1> Bem vindo a pagina HOME</h1> 
          <span>sujeito programador</span> <br/> <br/>     

         <Link to="/sobre">Pagina Sobre</Link> <br/> <br/>
         <Link to="/contato">Contato</Link>

      </div>
    );
  }
  
  export default Home;