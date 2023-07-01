import Header from "../../components/Header_logeado";
import styles from "../../styles/Product.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import close from "../../assets/icon-close.svg";
import atras from "../../assets/ATRAS.png";

function Product() {
    const [showProductAgregar, setShowProductAgregar] = useState(false);
    const [showProductActualizar, setShowProductActualizar] = useState(false);


    return (
        <>
            <div className={styles.home}>
                <Header />
                <div className={styles.content_main}>
                    <div className={styles.main_form}>
                        <div className={styles.form_head}>
                            <p className={styles.txtTitleForm}>Gestionar Productos</p>
                            <p className={styles.txtSubtitleForm}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, ...</p>
                        </div>
                        <div className={styles.form_head_input_main}>
                            <p className={styles.txtSubtilte}>Id Producto:</p>
                            <form action="">
                                <div className={styles.form_head_input}>
                                    <input type="number" required />
                                    <button className={styles.btn_main} type="submit">Buscar</button>
                                    <button className={styles.btn_main} type="submit"
                                        onClick={() => {
                                            setShowProductActualizar(true);
                                        }}>
                                        Actualizar
                                    </button>
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
                                        <th>Precio</th>
                                        <th>Stock</th>
                                        <th>Categoría</th>
                                        <th>Proveedor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>00001</td>
                                        <td>FANTA - LATAS</td>
                                        <td>LATA 350 ML</td>
                                        <td>10.0</td>
                                        <td>5</td>
                                        <td>Bebidas</td>
                                        <td>Campo Grande PERU SAC</td>
                                    </tr>
                                    <tr>
                                        <td>00002</td>
                                        <td>FANTA - LATAS</td>
                                        <td>LATA 350 ML</td>
                                        <td>10.0</td>
                                        <td>5</td>
                                        <td>Bebidas</td>
                                        <td>Campo Grande PERU SAC</td>
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
                            Agregar Producto
                        </button>
                    </div>
                </div>
                {/* Modal AGREGAR PRODUCTO*/}
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
                                <p className={styles.txtTitleForm}>Agregar Productos</p>
                                <p className={styles.txtSubtitleForm}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, ...</p>
                            </div>
                            <div className={styles.form_head_input_main_agregar}>
                                <form action="">
                                    <div className={styles.form_main_colum} >
                                        <div className={styles.form_head_input_columna}>
                                            <p className={styles.txtSubtilte}>Nombre Producto:</p>
                                            <input type="text" required />
                                            <p className={styles.txtSubtilte}>Precio Producto:</p>
                                            <input type="number" required />
                                            <p className={styles.txtSubtilte}>Categoría Producto:</p>
                                            <input type="text" required />
                                        </div>
                                        <div className={styles.form_head_input_columna}>
                                            <p className={styles.txtSubtilte}>Descripción Producto:</p>
                                            <input type="text" required />
                                            <p className={styles.txtSubtilte}>Stock Producto:</p>
                                            <input type="number" required />
                                            <p className={styles.txtSubtilte}>Proveedor Producto:</p>
                                            <input type="text" required />
                                        </div>
                                    </div>
                                    <button className={styles.btn_main} type="submit"
                                        onClick={() => {
                                            setShowProductAgregar(false);
                                        }}>
                                        Agregar Producto
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
                {/* Modal ACTUALIZAR PRODUCTO*/}
                {showProductActualizar && (
                    <div className={styles.content_main}>
                        <div className={styles.main_form_agregar}>

                            <div className={styles.content_salir}>
                                <button className={styles.content_salir_button}
                                    onClick={() => {
                                        setShowProductActualizar(false);
                                    }}>
                                    <img src={close} alt="" />
                                </button>
                            </div>
                            <div className={styles.form_head}>
                                <p className={styles.txtTitleForm}>Actualizar Productos</p>
                                <p className={styles.txtSubtitleForm}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, ...</p>
                            </div>
                            <div className={styles.form_head_input_main_agregar}>
                                <form action="">
                                    <div className={styles.form_main_colum} >
                                        <div className={styles.form_head_input_columna}>
                                            <p className={styles.txtSubtilte}>Nombre Producto:</p>
                                            <input type="text" required />
                                            <p className={styles.txtSubtilte}>Precio Producto:</p>
                                            <input type="number" required />
                                            <p className={styles.txtSubtilte}>Categoría Producto:</p>
                                            <input type="text" required />
                                        </div>
                                        <div className={styles.form_head_input_columna}>
                                            <p className={styles.txtSubtilte}>Descripción Producto:</p>
                                            <input type="text" required />
                                            <p className={styles.txtSubtilte}>Stock Producto:</p>
                                            <input type="number" required />
                                            <p className={styles.txtSubtilte}>Proveedor Producto:</p>
                                            <input type="text" required />
                                        </div>
                                    </div>
                                    <button className={styles.btn_main} type="submit"
                                        onClick={() => {
                                            setShowProductActualizar(false);
                                        }}>
                                        Actualizar Producto
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className={styles.content_foot_button}>
                            <button className={styles.btn_main}
                                onClick={() => {
                                    setShowProductActualizar(false);
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
export default Product;