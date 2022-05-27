
import { useState, useEffect } from 'react';
import './style.css';
import firebase from './firebaseConnection';


function App() {
  const [idPost, setIdPost] =useState('');
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

async function editarPost(){
  await firebase.firestore().collection('post')
  .doc(idPost)
  .update({
    titulo: titulo,
    autor: autor
  })
  .then(()=>{
   console.log('DADOS ATUALIZADOS COM SUCESSO!');
   setIdPost('');
   setTitulo('');
   setAutor('');
  })
  .catch(()=>{
    console.log('ERRO AO ATUALIZAR');
  });

  }
  async function excluirPost(id){
    await firebase.firestore().collection('post').doc(id)
    .delete()
    .then(()=>{
      alert('ESSE POST FOI EXCLUIDO!')
    })

  }

  return (
    <div>
     <h1> ReactJs + Firebase :)</h1> <br/>

     <div className='container'>

       <label>ID: </label>
       <input type="text" value={idPost} onChange={(e)=> setIdPost(e.target.value)} />

     <label>Titulo: </label>
     <textarea type="text" value={titulo} onChange={(e) => setTitulo(e.target.value) }/>

     <label>Autor: </label>
     <input type="text" value={autor} onChange={ (e) => setAutor(e.target.value)} />

     <button onClick={ handleAdd }>Cadastrar</button>
     <button onClick={buscaPost}>Busca Post</button> 
     <button onClick={editarPost}>Editar </button> <br/>

     <ul>
       {post.map((post) =>{
         return(
           <li key={post.id}>
             <span>ID - {post.id}</span> <br/>
             <span>Titulo: {post.titulo} </span> <br/>
             <span>Autor: {post.autor} </span> <br/> 
             <button onClick={()=> excluirPost(post.id)} >Excluir post</button> <br/> <br/>

           </li>
         )
       })}
     </ul>

    </div>

    </div>
  );
}

export default App;
