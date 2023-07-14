import React, { createContext, useState } from "react";


export const ImageContext = createContext({
    images: {},
    setImages: () => {}
})

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState([]);

    return (
        <ImageContext.Provider value={{images, setImages}}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageProvider;