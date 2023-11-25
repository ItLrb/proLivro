import React from 'react'
import styles from './Main.module.css'
import { FaLink } from 'react-icons/fa6'
import SearchBook from '../services/Api'

function Main() {

    return (
        <>
            <main>
                <SearchBook />
                <div id="res"></div>
                <aside id='sobre'>
                    <h2>Sobre <span className={styles.txt1}>Livro</span><span className={styles.txt2}>Pro</span></h2>
                    <p>
                        O LivroPro é um projeto que eu tive para criar este site e colocar meu conhecimentos em práticas <br/>
                        este site utiliza uma aplicação de API do  
                         <a href="https://developers.google.com/books?hl=pt-br" rel="noreferrer" className={styles.googleLink} target="_blank">
                            <FaLink style={{color: '#7A5E33'}}/>Google Books
                        </a> <br/> a ideia do modelo/estilo do site foi feita por mim, em uma ferramenta chamada   
                         <a href="www.figma.com" className={styles.figmaLink} target="_blank">
                            <FaLink style={{color: '#C37E16'}} />Figma
                        </a> 
                        <br/>
                        para mais informações sobre minhas redes, estarão logo abaixo.
                    </p>
                </aside>
            </main>
        </>
    )
}

export default Main