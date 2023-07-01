import Header from "../../components/Header_logeado";
import styles from "../../styles/Profile.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sesion from "../../assets/cerrar.png";


function Profile() {

    return (
        <>
            <div className={styles.home}>
                <Header />
                <div className={styles.content_main}>
                    <div className={styles.main_form_agregar}>
                        <div className={styles.form_head}>
                            <p className={styles.txtTitleForm}>Agregar Proveedor</p>
                            <p className={styles.txtSubtitleForm}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, ...</p>
                        </div>
                        <div className={styles.form_head_input_main_agregar}>
                            <form action="">
                                <div className={styles.form_main_colum} >
                                    <div className={styles.form_head_input_columna}>
                                        <p className={styles.txtSubtilte}>Nombre:</p>
                                        <input type="text" required />
                                        <p className={styles.txtSubtilte}>Correo electrónico:</p>
                                        <input type="email" required />
                                    </div>
                                    <div className={styles.form_head_input_columna}>
                                        <p className={styles.txtSubtilte}>Teléfono:</p>
                                        <input type="number" required />
                                        <p className={styles.txtSubtilte}>Contraseña:</p>
                                        <input type="password" required />
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