import styles from '@/components/AmorCitacao/AmorCitacao.module.css';
import CitacaoAmor from '@/components/JS/CitacaoAmor.js';

const AmorCitacao = () => {

    return (
        <section id={styles.main}>
            <div id={styles.header}>
                <h1>359 Citações Bíblicas</h1> <h2>falando sobre amor!</h2>
                <span className={styles.heart}>❤️</span>
            </div>

            <div className={styles.textoCopy}>
                <CitacaoAmor />
            </div>
        </section>
    );
}
export default AmorCitacao;