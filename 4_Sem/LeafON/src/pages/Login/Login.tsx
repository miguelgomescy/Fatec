import styles from './Login.module.css';

export default function Login() {
  return (
    <main className={styles.login}>
      <section className={styles.visualSide}>
        <div className={styles.logo}>
            <a href="/"><img src="/leaf-logo.png"
         alt="LeafON Logo" height={100} /></a>
         </div>

        <div className={styles.visualContent}>
          <img
            className={styles.mascot}
            src="/masct1.png"
            alt="Mascote da LeafON"
          />
        </div>
      </section>

      <section className={styles.formSide}>
        <div className={styles.formCard}>
          <h1 className={styles.title}>Que bom te ver aqui de novo!</h1>

          <p className={styles.subtitle}>
            Entre com sua conta para acompanhar sua planta, visualizar dados e controlar sua irrigação.
          </p>

          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="email">Seu email:</label>
              <input
                id="email"
                type="email"
                placeholder="seuemail@gmail.com"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Sua senha:</label>
              <input
                id="password"
                type="password"
                placeholder="********"
              />
            </div>

            <a className={styles.forgotPassword} href="#">
              Esqueceu sua senha?
            </a>

            <button className={styles.loginButton} type="submit">
              Fazer login
            </button>
          </form>

          <p className={styles.registerText}>
            Ainda não tem cadastro? <a href="/register">Crie sua conta aqui.</a>
          </p>
        </div>
      </section>
    </main>
  );
}