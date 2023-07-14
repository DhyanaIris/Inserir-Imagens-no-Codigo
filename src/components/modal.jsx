import React, { useContext } from 'react';
import { ImageContext } from '../context/useContext';
import './modal.css';

export default function Modal({isOpen, isClose, children}) {
    const { setImages } = useContext(ImageContext)

    const dragEvents = {
        onDragEnter:(e) => {
            e.preventDefault();
            console.log("onDragEnter");
        }, 
        onDragLeave:(e) => {
            e.preventDefault();
            console.log("onDragLeave");
        },
        onDragOver:(e) => {
            e.preventDefault();
            console.log("onDragOver");
        }, 
        onDrop:(e) => {
            e.preventDefault();
            console.log("onDrop");
            const files = Array.from(e.dataTransfer.files);
            // Usando FileReader
            files.map((file) => {
                const {name, size} = file;
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    const preview = reader.result;
                    const image = { name, size, preview };
                    setImages((prevImages) => {
                        return [...prevImages, image];
                    });
                };
                return null;
            });

            // Usando URL Create Object URL
            // const images = files.map((file) => {
            //     const {name, size} = file;
            //     return {name, size, preview: URL.createObjectURL(file)};
            // })
            // setImages(images);
        }
    };

    if(isOpen) {
        return (
            <section className='background'>
                <section className='modal'>
                    <section>
                        {/* {children} */}
                        <section className='fileDrop' {...dragEvents}>
                            <section className='text'>Arraste a Imagem</section>
                        </section>
                        {/* <section className='preview'>
                            <section className='image'>
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
                            </section>
                        </section> */}
                    </section>
                    <button onClick={isClose}>Fechar</button>
                </section>
            </section>
          ) 
    }

    return null;
}
