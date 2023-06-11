import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }){
    // This is required to re-render the component in order to update the contents based on the new path
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, []);

    //Programmatic navigation
    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);// This is required to re-render the component as the popstate event is not emitted in case of pushState.
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    );
}

export default NavigationContext;
export { NavigationProvider };