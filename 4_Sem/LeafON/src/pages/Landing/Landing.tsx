import styles from './Landing.module.css';


export default function Landing() {
  return (
    <main className={styles.container}>
    <img src="/leaf-logo.png" alt="LeafON Logo" height="100px" />
    <h1 className={styles.title}>LeafON</h1>
     

      <nav className={styles.links}>
        <a href="/login">Login</a>
        <a href="/register">Criar conta</a>
        <a href="/Profile">Perfil</a>
      </nav>
    </main>
  );
}