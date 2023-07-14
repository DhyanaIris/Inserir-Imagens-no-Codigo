import React, { useContext, useState } from 'react';
import openFile from './openFile.svg';
import './App.css';
import Modal from './components/modal'
import { ImageContext } from './context/useContext';

function App() {
  const { images } = useContext(ImageContext )
  const [openModal, setOpenModal] = useState(false)

  return (
   <section className='App'>
      <button onClick={() => setOpenModal(true)} className='openFile'>
        <img src={openFile} alt='logo'/>
      </button>
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
        {/* <section className='image'>
            <img src="https://loremflickr.com/200/200?random=1" alt="Lorem Flicker" />
        </section>
        <section className='image'>
            <img src="https://loremflickr.com/200/200?random=2" alt="Lorem Flicker" />
        </section>
        <section className='image'>
            <img src="https://loremflickr.com/200/200?random=3" alt="Lorem Flicker" />
        </section>
        <section className='image'>
            <img src="https://loremflickr.com/200/200?random=4" alt="Lorem Flicker" />
        </section>
        <section className='image'>
            <img src="https://loremflickr.com/200/200?random=5" alt="Lorem Flicker" />
        </section> */}
      </section>
   </section>
  );
}

export default App;
