import Link from "./Link";

export default function SideBar(){
    const links = [
        { label: 'Dropdown', path: '/'},
        { label: 'Buttons', path: '/buttons'},
        { label: 'Accordion', path: '/accordion'},
        { label: 'Modal', path: '/modal'},
        { label: 'Table', path: '/table'},
        { label: 'Counter', path: '/counter'}
    ];

    const renderedLinks = links.map((link) =>{
        return (
            <Link 
                key={link.label}
                to={link.path} 
                className='mb-3' 
                activeClassName='font-bold border-l-2 border-blue-500 pl-2'
            >
                {link.label}
            </Link>
        );
    });

    return <div className="sticky top-0 flex flex-col items-start">{renderedLinks}</div>;
}