import React from 'react'
import styles from './Contato.module.css'
import foto from './img/contato.jpg'
import Head from '../Head/Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title = 'Contato'/>
        <img src={foto} alt='Máquina de Escrever'/>
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>zory@zorymail.com</li>
          <li>(81) 99999-999</li>
          <li>Rua do estudo, 123</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
