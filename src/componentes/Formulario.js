import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component{
    //Refs
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    //Metodo
    crearGasto = (e) =>{
        e.preventDefault();

        const gasto = {
            nombreGasto: this.nombreGasto.current.value,
            cantidadGasto: this.cantidadGasto.current.value
        }

        // console.log(gasto);

        this.props.agregarGasto(gasto);

        e.currentTarget.reset();

    }

    render(){
        return(
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.nombreGasto} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}
Formulario.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}
export default Formulario;