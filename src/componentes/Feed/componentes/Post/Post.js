
import './Post.css';
//propriedades
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { TbSend } from "react-icons/tb";
import { BiBookmark } from "react-icons/bi";
import { IconContext } from 'react-icons';
import { BsEmojiSmile} from 'react-icons/bs'
export default function Post (props) {
    return(
        <div className='Post'>
            <div className="BarraSuperior">
            
            <div className="ImagemPerfilAutor">
                    <img alt="Foto perfil do autor" src={props.imagemPerfil}></img> 
                </div>
                
                <div className="NomePerfilAutor">{props.nomePerfil}</div>
                <div className="MenuBarraSuperior">...</div>
            </div>

            <div className="ConteudoPost"><img  alt="Imagem do post" src= {props.imagemPost}></img></div>
            <div className="footer-post">
                <IconContext.Provider value={{size: "25px"}}>
            <section className="engagement-post">
            <div className="icons-1">
                <div className="icon"><AiOutlineHeart/></div>
                <div className="icon"><FiMessageCircle/></div>
                <div className="icon"><TbSend/></div>
            </div>
                <div className="icon">< BiBookmark/></div>
                </section>
                </IconContext.Provider>
                <section className="like">
                    <span>90.000 curtidas</span>
                </section>
                <div className="legend">
                    <p>
                        <strong>user</strong> My album is out now! Listen
                    </p>
                </div>
                <div className="time-post">
                    <time>HÁ 1 HORA</time>
                </div>
                <div className='commentpt1'>
                  <p>Ver todos os 900 comentários</p>
                 </div>
                <div className="comment">
                    <div className="fake-comment">
                    <IconContext.Provider value={{size: '20px'}}>
                        <div className="icon">
                        <BsEmojiSmile/>
                        </div>
                     </IconContext.Provider>
                     <textarea placeholder="Adicione um comentário..."></textarea>
                    </div>
                </div>
            </div>
            </div>
    )
}