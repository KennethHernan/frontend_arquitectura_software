import Header from "../../components/Header_logeado";
import styles from "../../styles/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className={styles.home}>
                <Header />
                <div className={styles.content_main}>
                    <div className={styles.main_form}>
                        <div className={styles.form_head}>
                            <p className={styles.txtTitleForm}>Productos</p>
                            <p className={styles.txtSubtitleForm}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, ...</p>
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
                                    <tr>
                                        <td>00003</td>
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
                </div>
            </div>
        </>
    );
}
export default Home;