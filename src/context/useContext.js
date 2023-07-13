import React, { createContext, useState } from "react";

export const Context = createContext(null)

export default ({ children }) => {
    const [images, setImages] = useState([]);

    const store = {
        images: [images, setImages],
    }

    return <Context.Provider value={store}>{children}</Context.Provider>
}