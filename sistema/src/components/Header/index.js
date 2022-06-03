
import { useContext } from 'react';
import './header.css';
import { AuthContext } from '../../contexts/auth';
import avatar from '../../assets/foto.png';

import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from "react-icons/fi";

export default function Header(){
    const { user } = useContext(AuthContext);
    return(
        <div className='sidebar'>
          <div>
            <img src={user.avatarUrl === null ? avatar : user.avatarUrl } alt="foto avatar"/>
          </div>
          <Link to="/dashboard">
              <FiHome color="#FFF" sizer={24} />
            Chamado
          </Link>
          <Link to="/dashboard">
              <FiUser color="#FFF" sizer={24} />
            Cliente
          </Link>
          <Link to="/dashboard">
              <FiSettings color="#FFF" sizer={24} />
            Configurações
          </Link>
        </div>
    )
}