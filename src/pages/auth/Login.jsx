import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import { useAuth } from '../../hooks/useAuth';
import styles from '../../styles/Login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const [messageResponse, setMessageResponse] = useState('');
  const [isError, setIsError] = useState(false);
  const [, setUser] = useState({});
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const onSubmitLogin = async (data) => {
    const formData = new URLSearchParams();
    formData.append('email', data.email);
    formData.append('password', data.password);
    const response = await login(formData);

    const parser = new DOMParser();
    const xml = parser.parseFromString(response, 'application/xml');
    setMessageResponse(xml.getElementsByTagName('message')[0].textContent);
    setIsError(xml.getElementsByTagName('isError')[0].textContent);

    if (isError == 'true') {
      return setMessageResponse(xml.getElementsByTagName('message')[0].textContent);
    }

    const userXML = xml.getElementsByTagName('User')[0];
    const idUser = userXML.getElementsByTagName('idUser')[0].textContent;
    const fullname = userXML.getElementsByTagName('fullname')[0].textContent;
    const email = userXML.getElementsByTagName('email')[0].textContent;
    const password = userXML.getElementsByTagName('password')[0].textContent;
    const phone = userXML.getElementsByTagName('phone')[0].textContent;

    const newUser = {
      idUser,
      fullname,
      email,
      password,
      phone,
    };

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/home');
  };

  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.content_main}>
          <div className={styles.main_form}>
            <div className={styles.form_head}>
              <p className={styles.txtTitleForm}>Inicia Sesión</p>
              <p className={styles.txtSubtitleForm}>Iniciar sesión para gestionar los inventarios de la empresa.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
              <div className={styles.form_head_input_main}>
                <p className={styles.txtSubtilte}>Correo electrónico:</p>
                <input type="email" required {...register('email')} />
                <p className={styles.txtSubtilte}>Contraseña:</p>
                <input type="password" required {...register('password')} />
              </div>
              <div className={styles.main_form_button}>
                <button className={styles.btn_main} type="submit">
                  Iniciar Sesión
                </button>
              </div>
              {/* <Link to="/home">
              </Link> */}
            </form>
          </div>
        </div>

        {isError && (
          <div
            className={styles.modal}
            onClick={() => {
              setIsError(false);
            }}
          >
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
              <h1>{messageResponse}</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
