
import { useState } from 'react';
import './style.css';
import firebase from './firebaseConnection';


function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

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
  await firebase.firestore().collection('post')
  .doc('123')
  .get()
  .then((snapshot)=>{

    setTitulo(snapshot.data().titulo);
    setAutor(snapshot.data().autor);

  })

  .catch(()=>{
    console.log('DEU ALGUM ERRO');
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
     <button onClick={buscaPost}>Busca Post</button>

    </div>

    </div>
  );
}

export default App;
