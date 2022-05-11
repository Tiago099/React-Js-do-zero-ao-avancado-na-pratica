import{ useEffect, useState } from 'react';
import api from '../../services/api';
//URL DA API: /movie/now_playing?api_key=183e52d87b0d6e6b05b38d3d9b6946c3

function Home(){
  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{

    async function loadFilmes(){
     const response = await api.get("movie/now_playing", {
         params:{
             api_key: "183e52d87b0d6e6b05b38d3d9b6946c3",
             language: "pt-BR",
             page:1,

         }
     })
     console.log(response);
    }

    loadFilmes();

  }, [])
    return(
        <di>
            <h1>Bem vindo a Home</h1>
        </di>
    );
}


export default Home;