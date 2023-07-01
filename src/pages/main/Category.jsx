import Header from "../../components/Header_logeado";
import styles from "../../styles/Category.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import close from "../../assets/icon-close.svg";
import atras from "../../assets/ATRAS.png";


function Category() {
    const [showProductAgregar, setShowProductAgregar] = useState(false);

    return (
        <>
            <div className={styles.home}>
                <Header />
                <div className={styles.content_main}>
                    <div className={styles.main_form}>
                        <div className={styles.form_head}>
                            <p className={styles.txtTitleForm}>Gestionar Categoría</p>
                            <p className={styles.txtSubtitleForm}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, ...</p>
                        </div>
                        <div className={styles.form_head_input_main}>
                            <p className={styles.txtSubtilte}>Nombre Categoría:</p>
                            <form action="">
                                <div className={styles.form_head_input}>
                                    <input type="text" required />
                                    <button className={styles.btn_main} type="submit">Buscar</button>
                                </div>
                            </form>
                        </div>
                        <div className={styles.content_tabla}>
                            <table className={styles.tabla_main}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>00001</td>
                                        <td>Snack</td>
                                        <td>Snack</td>
                                    </tr>
                                    <tr>
                                        <td>00001</td>
                                        <td>Snack</td>
                                        <td>Snack</td>
                                    </tr>
                                    <tr>
                                        <td>00001</td>
                                        <td>Snack</td>
                                        <td>Snack</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={styles.content_foot_button}>
                        <button className={styles.btn_main}
                            onClick={() => {
                                setShowProductAgregar(true);
                            }}>
                            Agregar Categoría
                        </button>
                    </div>
                </div>
                {/* Modal AGREGAR CATEGORÍA*/}
                {showProductAgregar && (
                    <div className={styles.content_main}>
                        <div className={styles.main_form_agregar}>
                            <div className={styles.content_salir}>
                                <button className={styles.content_salir_button}
                                    onClick={() => {
                                        setShowProductAgregar(false);
                                    }}>
                                    <img src={close} alt="" />
                                </button>
                            </div>
                            <div className={styles.form_head}>
                                <p className={styles.txtTitleForm}>Agregar Categoría</p>
                                <p className={styles.txtSubtitleForm}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, ...</p>
                            </div>
                            <div className={styles.form_head_input_main_agregar}>
                                <form action="">
                                    <div className={styles.form_main_colum} >
                                        <div className={styles.form_head_input_columna}>
                                            <p className={styles.txtSubtilte}>Nombre Categoría:</p>
                                            <input type="text" required />
                                        </div>
                                        <div className={styles.form_head_input_columna}>
                                            <p className={styles.txtSubtilte}>Descripción Categoría:</p>
                                            <input type="text" required />
                                        </div>
                                    </div>
                                    <button className={styles.btn_main} type="submit"
                                        onClick={() => {
                                            setShowProductAgregar(false);
                                        }}>
                                        Agregar Categoría
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className={styles.content_foot_button}>
                            <button className={styles.btn_main}
                                onClick={() => {
                                    setShowProductAgregar(false);
                                }}>
                                <img src={atras} alt="" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default Category;