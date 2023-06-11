import ReactDOM from 'react-dom';
//import { useEffect } from 'react';

export default function Modal({ children, actionBar, handleClose }){

   /*  useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return ()=> {
            document.body.classList.remove('overflow-hidden')
        }
    }, []); */

    return (
        ReactDOM.createPortal(
            <div>
                <div onClick={handleClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
                <div className="fixed inset-40 bg-white p-10">
                    <div className="flex flex-col justify-between h-full">
                        {children}
                        <div className="flex justify-end">
                            {actionBar}
                        </div>
                    </div>
                </div>
            </div>,
            document.querySelector("#modal-container")
        )        
    );
}