import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import api from '../../services/api';



function Filme(){
    const{ id } = useParams();
    const[filme, setFilmes]=useState({});
    const[loading, setLoading]=useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            await api.get (`/movie/${id}`,{
                params:{
                    api_key: "183e52d87b0d6e6b05b38d3d9b6946c3",
             language: "pt-BR",
                }
            })
            .then((response)=>{
                console.log(response);
                setFilmes(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("FILME NAO ENCONTARDADO");
            })

        }

        loadFilmes();

        return ()=>{

        }

    }, [id])

    if(loading){
        return(
            <div className='filme-info'>
                 <h1>Carregando detalhes.....</h1>
            </div>
        )
    }
    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} /10 </strong>
        </div>
    );
}


export default Filme;