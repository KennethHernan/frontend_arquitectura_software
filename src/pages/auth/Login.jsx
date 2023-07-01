import Header from "../../components/Header";
import styles from "../../styles/Login.module.css";
import { Link } from "react-router-dom";

function Login() {

  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.content_main}>
          <div className={styles.main_form}>
            <div className={styles.form_head}>
              <p className={styles.txtTitleForm}>Inicia Sesión</p>
              <p className={styles.txtSubtitleForm}>Iniciar sesión  para gestionar los inventarios de la empresa.</p>
            </div>
            <form action="">

              <div className={styles.form_head_input_main}>
                <p className={styles.txtSubtilte}>Correo electrónico:</p>
                <input type="email" required />
                <p className={styles.txtSubtilte}>Contraseña:</p>
                <input type="password" required />
              </div>
              <Link to="/home">
                <div className={styles.main_form_button}>
                  <button className={styles.btn_main} type="submit">Iniciar Sesión</button>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
