import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
    const [storage, setStorage] = useState(
        () => window.JSON.parse(localStorage.getItem(key)) ?? defaultValue
    );
    
    useEffect(() => { 
        window.localStorage.setItem(key, JSON.stringify(storage))
    }, [storage, key]);

    return [storage, setStorage];
};

export { useLocalStorage }