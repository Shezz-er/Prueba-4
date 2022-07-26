

function ListadoResultados(prop)

    {
        return(
            <ul>
                <li className="letrasencabezado">
                    CODIGO
                </li>
                <li className="letrasencabezado">
                    ARTICULO
                </li>
                <li className="letrasencabezado">
                    DESCRIPCION
                </li>
                <li className="letrasencabezado">
                    PRECIO
                </li>
                <li className="letrasencabezado">
                    CANTIDAD
                </li>
                <li className="letrasencabezado">
                    TOTAL
                </li>
                <li className="letrasencabezado">
                    TOTAL DESCUENTO
                </li>
                
                {
                prop.resultados.map((elemento)=>
                <div className="caja">
                <li>{elemento.valor1}</li><li>{elemento.valor2}</li>
                <li>{elemento.valor3}</li><li>{elemento.valor4}</li>
                <li>{elemento.valor5}</li><li>{elemento.resultado1}</li>
                <li>{elemento.resultado2}</li>
                </div>
                )
                }
            </ul>
        );
    }

export default ListadoResultados;

