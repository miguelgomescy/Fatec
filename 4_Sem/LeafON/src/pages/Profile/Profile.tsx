import styles from './Profile.module.css';
import {
  FiMenu,
  FiBell,
  FiEdit,
  FiLogOut,
  FiCheck
} from 'react-icons/fi';

export default function Profile() {
  return (
    <main className={styles.profile}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <FiMenu className={styles.icon} />

    <a href="/">
        <img
          src="/leaf-logo.png"
          alt="Logo"
          className={styles.logo}
        />
    </a>

        <div className={styles.headerRight}>
          <div className={styles.notification}>
            <FiBell />
            <span>2</span>
          </div>

          <div className={styles.user}>
            <img src="/avatar.jpg" alt="User" />
            <span>Lucas</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className={styles.container}>

        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
          <img src="/avatar.jpg" className={styles.avatar} />

          <h2>Lucas Da Silva</h2>
          <p>Informações Pessoais</p>

          <button className={styles.logout}>
            <FiLogOut /> Sair do LeafON
          </button>
        </aside>

        {/* FORM */}
        <section className={styles.formCard}>

          <h2>Informações Pessoais</h2>

          <div className={styles.row}>
            <label>Primeiro Nome</label>
            <div className={styles.inputGroup}>
              <input placeholder="Lucas" />
              <FiEdit />
            </div>
          </div>

          <div className={styles.row}>
            <label>Sobrenome</label>
            <div className={styles.inputGroup}>
              <input placeholder="Da Silva" />
              <FiEdit />
            </div>
          </div>

          <div className={styles.row}>
            <label>Email</label>
            <div className={styles.inputGroup}>
              <input placeholder="email@gmail.com" />
              <FiEdit />
            </div>
          </div>

          <div className={styles.row}>
            <label>Telefone</label>
            <div className={styles.inputGroup}>
              <input placeholder="(11) 99999-9999" />
              <FiEdit />
            </div>
          </div>

          <h3 className={styles.sectionTitle}>Senha e Privacidade</h3>

          <div className={styles.row}>
            <label>Senha Atual</label>
            <div className={styles.inputGroup}>
              <input type="password" />
              <FiCheck />
            </div>
          </div>

          <div className={styles.row}>
            <label>Nova Senha</label>
            <div className={styles.inputGroup}>
              <input type="password" />
              <FiCheck />
            </div>
          </div>

          <div className={styles.row}>
            <label>Confirmar Nova Senha</label>
            <div className={styles.inputGroup}>
              <input type="password" />
              <FiCheck />
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.cancel}>Descartar Mudanças</button>
            <button className={styles.save}>Confirmar Mudanças</button>
          </div>

        </section>

      </div>
    </main>
  );
}