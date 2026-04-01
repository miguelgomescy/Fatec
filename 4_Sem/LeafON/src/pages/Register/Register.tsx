import styles from './Register.module.css';

export default function Register() {
  return (
    <main className={styles.register}>
      <section className={styles.visualSide}>
        <div className={styles.logo}>
          <a href="/">
            <img src="/leaf-logo.png" alt="LeafON Logo" height={100} />
          </a>
        </div>

        <div className={styles.visualContent}>
          <img
            className={styles.mascot}
            src="/masct2.png"
            alt="Mascote da LeafON"
          />
        </div>
      </section>

      <section className={styles.formSide}>
        <div className={styles.formCard}>
          <h1 className={styles.title}>Vamos criar sua conta!</h1>

          <p className={styles.subtitle}>
            Cadastre-se para monitorar sua planta, acompanhar dados e controlar a irrigação inteligente.
          </p>

          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name">Seu nome:</label>
              <input id="name" type="text" placeholder="Digite seu nome" />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Seu email:</label>
              <input id="email" type="email" placeholder="seuemail@gmail.com" />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Seu telefone:</label>
              <input id="phone" type="tel" placeholder="(11) 99999-9999" />
            </div>

            <div className={styles.field}>
              <label htmlFor="plantName">Nome da sua planta:</label>
              <input id="plantName" type="text" placeholder="Ex: Gulosinha" />
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Sua senha:</label>
              <input id="password" type="password" placeholder="********" />
            </div>

            <div className={styles.field}>
              <label htmlFor="confirmPassword">Confirme sua senha:</label>
              <input id="confirmPassword" type="password" placeholder="********" />
            </div>

            <label className={styles.checkboxRow}>
              <input type="checkbox" />
              <span>Eu concordo com os Termos & Condições</span>
            </label>

            <button className={styles.registerButton} type="submit">
              Confirmar e criar conta
            </button>
          </form>

          <p className={styles.loginText}>
            Já tem cadastro? <a href="/login">Faça login aqui.</a>
          </p>
        </div>
      </section>
    </main>
  );
}