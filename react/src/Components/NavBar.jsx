import {Link} from 'react-router-dom';

const NavBar = () => {
  return(<>
    <nav className="flex flex-row justify-end gap-4 border-amber-400 border-2 p-4">
      <ul className='flex flex-row gap-4'>
        <li><Link to={'/'}>Inicio</Link></li>
        <li><Link to={'/about'}>Acerca de...</Link></li>
      </ul>
    </nav>
  </>);
}

export default NavBar;