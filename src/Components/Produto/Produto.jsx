import React from 'react'
import styles from './Produto.module.css'
import Head from '../Head/Head'
import { useParams } from 'react-router-dom';

const Produto = () => {
    const [produto, setPoduto] = React.useState(null);
    const [erro, setErro] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const { id } = useParams();

    React.useEffect(()=>{
        async function fetchProduto (url) {
            try{
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setPoduto(json);
            } catch (erro) {
                setErro ("Deu ruim... tente mais tarde")
            } finally {
                setLoading(false);
            }
        }

        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    },[id])


  if(loading) return <div className={'loading'}></div>  
  if (erro) return <h2>{erro}</h2>  
  if(produto === null) return null
  return (
    <section className={`${styles.produto}  animeLeft`}>
        <Head title={produto.nome} />
        <div>
        {produto.fotos.map((foto) =>( 
            <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
        </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}> R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto
