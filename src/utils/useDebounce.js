import { useRef } from 'react';

function useDebounce(fun, delay) {
    
    const timeoutRef = useRef(null);

    function debouncedFun(...args) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
            fun(...args);
        }, delay);
    }

    return debouncedFun;
}

export default useDebounce;