import React, { useContext, useState } from 'react';
import openFile from './img/openFile.svg';
import './App.css';
import Modal from './components/modal/uploaderModal'
import { ImageContext } from './context/useContext';

function App() {
  const { images } = useContext(ImageContext )
  const [openModal, setOpenModal] = useState(false)

  return (
   <section className='App'>
    <section className='navBar'>
      <button onClick={() => setOpenModal(true)} className='openFile'>
        <img src={openFile} alt='logo'/>
      </button>
    </section>
      <Modal isOpen={openModal} isClose={() => setOpenModal(!openModal)}>
        <p>Conteudo</p>
      </Modal>
      <section className='preview'>
        {images.map((image) => {
          return (
            <section className='image' key={image.name}>
              <img src={image.preview} alt={image.name} />
            </section>
          )
        })}
      </section>
   </section>
  );
}

export default App;
