import './index.css';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'
import CounterPage from './pages/CounterPage'
import SideBar from './components/SideBar';
import Route from './components/Route'

function App() {
    return (
        <div className="relative container mx-auto grid grid-cols-6 gap-4 mt-4">
            <SideBar/>
            <div className="col-span-5">
                <Route path="/">
                    <DropdownPage />
                </Route>
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/buttons">
                    <ButtonPage />
                </Route>
                <Route path='/modal'>
                    <ModalPage/>
                </Route>
                <Route path='/table'>
                    <TablePage/>
                </Route>
                <Route path='/counter'>
                    <CounterPage initialCount={25}/>
                </Route>
            </div>
        </div>
    );
}
export default App;