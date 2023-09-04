'use client';

import { useState, createContext, useEffect } from 'react';
import systemCategories from './systemCategories';

const ContextApp = createContext();

function ContextProvider({ children }) {
    const [ login, setLogin ] = useState(!1),
        [ userCategories, setUserCategories ] = useState([]),
        values = { login, setLogin, userCategories, setUserCategories, systemCategories };

    return <ContextApp.Provider value={values}>
        {children}
    </ContextApp.Provider>
};

export {ContextApp};

export default ContextProvider;