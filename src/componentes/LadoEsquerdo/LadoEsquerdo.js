
import './LadoEsquerdo.css';
import ItemMenu from './componentes/ItemMenu';
import Logo from "./imagens/Logo-font.jpeg"

import {HiHome} from "react-icons/hi";
import {FiSearch} from "react-icons/fi";
import {FaRegCompass} from "react-icons/fa";
import {BiVideoPlus } from "react-icons/bi";
import {RiMessengerLine} from "react-icons/ri";
import {AiOutlineHeart} from "react-icons/ai";
import {BsPlusSquare} from "react-icons/bs";


export default function LadoEsquerdo(){
    return(
    <div className="LadoEsquerdo">
        <div className='logo'>
            <img src={Logo} alt=''/>
        </div>
       <div className="menu-principal"> <ItemMenu  size={25} icone= {<HiHome/>} texto="Página Inicial"/>
      
        <ItemMenu  size={25} icone={<FiSearch/>} texto="Pesquisa"/>
        <ItemMenu  size={25} icone={<FaRegCompass/>} texto="Explorar"/>
        <ItemMenu  size={25} icone={<BiVideoPlus/>} texto="Reels"/>
        <ItemMenu  size={25} icone={<RiMessengerLine/>} texto="Mensagens"/>
        <ItemMenu  size={25} icone={<AiOutlineHeart/>} texto="Notificações"/>
        <ItemMenu  size={25} icone={<BsPlusSquare/>} texto="Criar"/>
        </div>
    </div>
    )
}
