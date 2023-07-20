import React, { useContext, useState } from 'react';
import { ImageContext } from '../../context/useContext';
import cloudUpload from '../../img/cloudUpload.svg'
import './uploaderModal.css';

export default function Modal({isOpen, isClose}) {
    const { setImages } = useContext(ImageContext);
    const [ img, setImg ] = useState(null);
    const [ fileName, setFileName ] = useState("Nenhum arquivo selecionado")

    function mapFiles(files) {
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
    } 

    const dragEvents = {
        onDragEnter:(e) => {
            e.preventDefault();
        }, 
        onDragLeave:(e) => {
            e.preventDefault();
        },
        onDragOver:(e) => {
            e.preventDefault();
        }, 
        onDrop:(e) => {
            e.preventDefault();
            const files = Array.from(e.dataTransfer.files);
            mapFiles(files);

            // Usando URL Create Object URL
            // const images = files.map((file) => {
            //     const {name, size} = file;
            //     return {name, size, preview: URL.createObjectURL(file)};
            // })
            // setImages(images);
        }
    };

    function inputEvents(e) {
        const files = Array.from(e.target.files);
        mapFiles(files);
    }

    if(isOpen) {
        return (
            <section className='background'>
                <section className='modal'>
                    <section>
                        <form 
                            onClick={() => document.querySelector(".input-field").click()} 
                            className='fileDrop' {...dragEvents}
                        >
                            {img ?
                                <img className='imgFile' src={img} alt={fileName}/>
                                :
                                <section>
                                    <img className='cloudUploader'src={cloudUpload} alt=''/>
                                    <p>Selecione ou Arraste uma Imagem</p>
                                </section>
                            }
                            <input 
                                type="file" 
                                accept='image/*' 
                                className='input-field' 
                                hidden 
                                multiple
                                onChange={(e) => inputEvents(e)}
                            />
                        </form>
                    </section>
                    <button onClick={isClose} className='btnClose'> Fechar </button>
                </section>
            </section>
          ) 
    }

    return null;
}
