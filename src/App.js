import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  
  //definir categoria y noticias
  const [categoria, guardarCategoria] = useState(''); 
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=cc8a94a1d7894911a9466d35c5d13232
      `

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }

    consultarAPI();
  },[categoria])
  
  return (

    <>
      <Header 
        titulo='Buscador de noticias'
      />

      <div className='container white'>
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
