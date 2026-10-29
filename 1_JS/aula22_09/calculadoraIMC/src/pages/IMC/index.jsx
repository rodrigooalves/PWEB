import { Component } from "react";
import './imc.css';

class IMC extends Component {

    constructor (props){
        super(props);
        this.state = {
            peso: 0,
            altura : 0,
            imc:""
        }
    }

    
    calcularIMC(){
        let state = this.state;
        let imc = state.peso/state.altura**2;
        state.imc = imc;
        this.setState(state);
    }


    render() {
        return (
            <div>
                <h1>testando</h1>
            </div>
        );
    }
}

export default IMC;