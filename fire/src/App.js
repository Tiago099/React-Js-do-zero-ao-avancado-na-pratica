
import { useState, useEffect } from 'react';
import './style.css';
import firebase from './firebaseConnection';


function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [post,setPost] = useState([]);


  useEffect(()=>{
    async function loadPost(){
      await firebase.firestore().collection('post')
      .onSnapshot((doc)=>{
        let meusPost =[];

        doc.forEach((item)=>{
          meusPost.push({
            id: item.id,
            titulo: item.data().titulo,
            autor: item.data().autor,
          })
        });

        setPost(meusPost);

      })
    }
  
  loadPost();

  },[]);

  async function handleAdd(){

// gerando codigo id aleatório
    await firebase.firestore().collection('post')
    .add({
      titulo: titulo,
      autor: autor,

   })
    
    .then(()=>{
      console.log('dado cadastrado');
     setTitulo('');
     setAutor('');
    })

     .catch((error)=> {
      console.log('gerou um erro' + error);
    })

    
  }

//com id manual
   /* await firebase.firestore().collection('post')
    .doc('123456')
    .set({
      titulo: titulo,
      autor: autor
    })
    .then(()=>{
      console.log('dado cadastrado');
    })
    .catch((error)=> {
      console.log('gerou um erro' + error);
    })
  */  
  
async function buscaPost(){
  //await firebase.firestore().collection('post')
 // .doc('123')
 // .get()
 // .then((snapshot)=>{

  //  setTitulo(snapshot.data().titulo);
   // setAutor(snapshot.data().autor);

 // })

  //.catch(()=>{
   // console.log('DEU ALGUM ERRO');
 // })

 // buscando todos post no firebase

 await firebase.firestore().collection('post')
   .get()
   .then((snapshot)=>{
     let lista = [];

     snapshot.forEach((doc)=> {
       lista.push({
         id: doc.id,
         titulo: doc.data().titulo,
         autor: doc.data().autor

       })
       
     })

     setPost(lista);

   })
   .catch(()=>{
     console.log('DEU ALGUM ERRO!');
   })
  
}

  return (
    <div>
     <h1> ReactJs + Firebase :)</h1> <br/>

     <div className='container'>

     <label>Titulo: </label>
     <textarea type="text" value={titulo} onChange={(e) => setTitulo(e.target.value) }/>

     <label>Autor: </label>
     <input type="text" value={autor} onChange={ (e) => setAutor(e.target.value)} />

     <button onClick={ handleAdd }>Cadastrar</button>
     <button onClick={buscaPost}>Busca Post</button> <br/>

     <ul>
       {post.map((post) =>{
         return(
           <li key={post.id}>
             <span>Titulo: {post.titulo} </span> <br/>
             <span>Autor: {post.autor} </span> <br/> <br/>

           </li>
         )
       })}
     </ul>

    </div>

    </div>
  );
}

export default App;
