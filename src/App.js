import {useState} from 'react';
import ListadoResultados from './ListadoResultados';
import kittylogocafe from './assets/img/kittylogocafe.png';
import gato from './assets/img/gato.jpg';

function App() 
{
  const [operaciones, setOperacion] = useState([])

  function productos(event)
  {
    event.preventDefault();
    const cod_prod = parseFloat(event.target.txt_cod_prod.value)
    const articulo = (event.target.txt_articulo.value)
    const descripcion = (event.target.txt_descripcion.value)
    const precio_prod = parseFloat(event.target.txt_precio_prod.value)
    const cantidad_prod = parseFloat(event.target.txt_cantidad_prod.value)

    const Total = (cantidad_prod * precio_prod)
    const Total_Descuento = (Total - (Total * 0.1))

    const nuevo = {
      valor1: cod_prod,
      valor2: articulo,
      valor3: descripcion,
      valor4: precio_prod,
      valor5: cantidad_prod,
      resultado1: Total,
      resultado2: Total_Descuento
    }
    setOperacion([...operaciones,nuevo])
      event.target.txt_cod_prod.value = ''
      event.target.txt_articulo.value = ''
      event.target.txt_descripcion.value =''
      event.target.txt_precio_prod.value = ''
      event.target.txt_cantidad_prod.value = ''
    
  }
  return(
    <div> 
      <div className ="container" >
          <center><img src={kittylogocafe} alt='' width='250px' height='250px'/></center>
          <h1 class="cursive tamaño2">♡ K i t t y  c u t e  c a f é ♡</h1>

          <center className='bann'><img src={gato} alt='' className='imagen2 gato'/></center>
        <h2 className= 'mayusculas' > Productos</h2>

          <form onSubmit = {productos} >
            <div className = "row g-3 letras">

            <div className = "col-sm-12">
              Ingrese Código
      
              <input type="number"  className = "form-control" name= "txt_cod_prod" required/>
            </div>
            <div className = "col-sm-12">
              Ingrese Artículo
              <input type="text" className = "form-control" name= "txt_articulo"required />
            </div>
            
            <div className = "col-sm-12">
              Ingrese Descripción
              <input type="text"  className = "form-control" name= "txt_descripcion" required/>
            </div>
            <div className = "col-sm-12">
              Ingrese Precio
              <input type="number" className = "form-control" name= "txt_precio_prod" required/>
            </div>
            <div className = "col-sm-12">
              Ingrese Cantidad
              <input type="number" className = "form-control" name= "txt_cantidad_prod" required/>
              <br/> <input className = "btn btn-info" type="submit"  value= "Agregar"/>
            </div>
            </div>
          </form>
          <br/>
          <ListadoResultados resultados = {operaciones}/>
          <br/>
          <br/>


      </div>
    </div>
  );
}
export default App;

