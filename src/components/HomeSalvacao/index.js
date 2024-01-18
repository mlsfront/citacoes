import styles from '@/components/HomeSalvacao/HomeSalvacao.module.css';
import CitacaoSalvacao from '@/components/JS/CitacaoSalvacao.js';

const HomeSalvacao = () => {

    return (
        <section id={styles.main}>
            <div id={styles.header}>
                <h1>168 Citações Bíblicas</h1>
                <h2>falando sobre salvação!</h2>
                <img className={styles.salvacao} src="/images/salvacao.png" alt="Jesus" />
            </div>

            <div className={styles.textoCopy}>
                <CitacaoSalvacao />
            </div>
        </section>
    );
}
export default HomeSalvacao;