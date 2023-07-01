import Header from '../../components/Header_logeado';
import styles from '../../styles/Profile.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sesion from '../../assets/cerrar.png';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

function Profile() {
  const [user, setUser] = useState();
  const { getUserById, updateUser } = useAuth();
  const { handleSubmit, register } = useForm();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    localStorage.setItem('id', '1');
    const idInLocalStorage = localStorage.getItem('id');
    const response = await getUserById(idInLocalStorage);
    setUser(response);
  };

  const onSubmitUpdateUser = async (data) => {
    console.log(data);
    const { client } = await updateUser(user.id, data);
    setUser(client);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.content_main}>
          <div className={styles.main_form_agregar}>
            <div className={styles.form_head}>
              <p className={styles.txtTitleForm}>Actualizar perfil</p>
              <p className={styles.txtSubtitleForm}>
                El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la
                presentación de elementos gráficos en documentos, ...
              </p>
            </div>
            <div className={styles.form_head_input_main_agregar}>
              <form onSubmit={handleSubmit(onSubmitUpdateUser)}>
                <div className={styles.form_main_colum}>
                  <div className={styles.form_head_input_columna}>
                    <p className={styles.txtSubtilte}>Nombre:</p>
                    <input type="text" required {...register('name')} defaultValue={user.name} />
                    <p className={styles.txtSubtilte}>Correo electrónico:</p>
                    <input type="email" required {...register('email')} defaultValue={user.email} />
                  </div>
                  <div className={styles.form_head_input_columna}>
                    <p className={styles.txtSubtilte}>Teléfono:</p>
                    <input type="number" required {...register('phone')} defaultValue={user.phone} />
                    <p className={styles.txtSubtilte}>Contraseña:</p>
                    <input
                      type="password"
                      required
                      {...register('password')}
                      defaultValue={user.password}
                      autoComplete="false"
                    />
                  </div>
                </div>
                <button className={styles.btn_main} type="submit">
                  Actualizar Perfil
                </button>
              </form>
            </div>
          </div>
          <div className={styles.content_foot_button}>
            <Link to="/">
              <button className={styles.btn_main}>
                <img src={sesion} alt="" />
                Cerrar Sesión
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
