import Header from "../../components/Header_logeado";
import styles from "../../styles/Proveedor.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import close from "../../assets/icon-close.svg";
import atras from "../../assets/ATRAS.png";


function Proveedor() {
    const [showProductAgregar, setShowProductAgregar] = useState(false);

    return (
        <>
            <div className={styles.home}>
                <Header />
                <div className={styles.content_main}>
                    <div className={styles.main_form}>
                        <div className={styles.form_head}>
                            <p className={styles.txtTitleForm}>Gestionar Proveedor</p>
                            <p className={styles.txtSubtitleForm}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, ...</p>
                        </div>
                        <div className={styles.form_head_input_main}>
                            <p className={styles.txtSubtilte}>Nombre Proveedor:</p>
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
                                        <th>Dirección</th>
                                        <th>Ruc</th>
                                        <th>Teléfono</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>00001</td>
                                        <td>Nadalgo SAC</td>
                                        <td>Mz D3 Lote 39</td>
                                        <td>7170774424</td>
                                        <td>982630170</td>
                                    </tr>
                                    <tr>
                                        <td>00001</td>
                                        <td>Nadalgo SAC</td>
                                        <td>Mz D3 Lote 39</td>
                                        <td>7170774424</td>
                                        <td>982630170</td>
                                    </tr>
                                    <tr>
                                        <td>00001</td>
                                        <td>Nadalgo SAC</td>
                                        <td>Mz D3 Lote 39</td>
                                        <td>7170774424</td>
                                        <td>982630170</td>
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
                            Agregar Proveedor
                        </button>
                    </div>
                </div>
                {/* Modal AGREGAR PROVEEDOR*/}
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
                                <p className={styles.txtTitleForm}>Agregar Proveedor</p>
                                <p className={styles.txtSubtitleForm}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, ...</p>
                            </div>
                            <div className={styles.form_head_input_main_agregar}>
                                <form action="">
                                    <div className={styles.form_main_colum} >
                                        <div className={styles.form_head_input_columna}>
                                            <p className={styles.txtSubtilte}>Nombre Proveedor:</p>
                                            <input type="text" required />
                                            <p className={styles.txtSubtilte}>RUC Proveedor:</p>
                                            <input type="number" required />
                                        </div>
                                        <div className={styles.form_head_input_columna}>
                                            <p className={styles.txtSubtilte}>Dirección Proveedor:</p>
                                            <input type="text" required />
                                            <p className={styles.txtSubtilte}>Teléfono Proveedor:</p>
                                            <input type="number" required />
                                        </div>
                                    </div>
                                    <button className={styles.btn_main} type="submit"
                                        onClick={() => {
                                            setShowProductAgregar(false);
                                        }}>
                                        Agregar Proveedor
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
export default Proveedor;