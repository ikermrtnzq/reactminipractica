import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global'

export default class DoctoresEspecialidad extends Component {

    state = {
        especialidades : [],
        doctores : []
    }
    
    selectEspecialidad= React.createRef();

    

    conseguirEspecialidades = () => {
        let url = Global.url;
        let endpoint = "/api/doctores/especialidades";

        axios.get(url + endpoint).then((response) => {
            //console.log(response.data)
            this.setState({
                especialidades : response.data
            })
        })
        
    }

    buscarDoctores = (event) => {
        event.preventDefault();
        let url = Global.url;
        let endpoint = "/api/doctores/doctoresespecialidad/";
        let nombre = this.selectEspecialidad.current.value;

        axios.get(url + endpoint + nombre).then((response) => {
            console.log(response.data)
            this.setState({
                doctores : response.data
            })
        })
    }

    componentDidMount = () => {
        this.conseguirEspecialidades();
    }
    render() {
        return (
        <div>
            <h1>Doctores Especialidad</h1>
            <form>
                <h2>Seleccione la especialidad deseada:</h2>
                <select ref={this.selectEspecialidad}>
                    {
                        this.state.especialidades.map((especialidad, index) => {
                            return(<option value={especialidad} key={index}>{especialidad}</option>)
                        })
                    }
                </select>
                <button onClick={this.buscarDoctores}>BUSCAR</button>
            </form>
            <ul>
              {
                this.state.doctores.map((doctor, index) => {
                    return(<ul key={index}>Doctor: {doctor.apellido}    Especialidad: {doctor.especialidad}</ul>)
                })
                }
            </ul>
            
        </div>
        )
    }
}
