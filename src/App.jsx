import React, { useContext, useState } from 'react';
import openFile from './openFile.svg';
import './App.css';
import Modal from './components/modal'
import { Context } from './context/useContext';

function App() {
  const { images } = useContext(Context)
  const [openModal, setOpenModal] = useState(false)

  return (
   <section className='App'>
      <a onClick={() => setOpenModal(true)} className='openFile'>
        <img src={openFile}/>
      </a>
      <Modal isOpen={openModal} isClose={() => setOpenModal(!openModal)}>
        <p>Conteudo</p>
      </Modal>
      <section className='preview'>
        {images.map((image) => {
          return (
            <section className='image'>
              <img src="https://loremflickr.com/200/200?random=2" alt="Lorem Flicker" />
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
