import { createRoot } from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './context/navigation';

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);

root.render( 
    <NavigationProvider>
        <App /> 
    </NavigationProvider>
);