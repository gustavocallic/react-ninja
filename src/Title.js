import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types'


class Title extends React.Component {
    render() {
        return (
            <div>
                <h1 id={this.props.id}>{this.props.texto.ola} {this.props.texto.rei}</h1>
            </div>
        )
    }
}

Title.defaultProps = {
    texto: {
        ola: 'Visi',
        rei: 'tante'
    },
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.children}</button>
    )
}


//COMPONENTE COM COMPOSIÇÃO DE COMPONENTES
const LikeButton = () => {
    const [alterText, setAlterText] = useState('Like')

    const AlterText = () => {
        let texto = alterText === 'Like' ? 'Clicou' : 'Like'
        setAlterText(texto)
    }

    return (
        <Button handleClick={AlterText}>{alterText}</Button>
    )
}

Button.propTypes = {
    handleClick: PropTypes.func
}
function Haha(props) {
    return (
        <Fragment>
            <span>Hahahah</span>
        </Fragment>
    )
}


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.input = React.createRef();
        this.txtNome = React.createRef();
        this.checkbox = React.createRef();
        this.Submit = this.Submit.bind(this)
        this.mudaValorTxtComponenteControlado = this.mudaValorTxtComponenteControlado.bind(this)
        this.state = {
            sobrenome: 'Miranda',
            checked: false
        }

    }

    mudaValorTxtComponenteControlado(e) {
        console.log(e.target.value)
        this.setState({ sobrenome: e.target.value })
    }

    Submit(e) {
        console.log({ valor: this.input.current.value, nome: this.txtNome.current.value, sobrenome: this.state.sobrenome, checkbox: this.checkbox.current.checked })
        e.preventDefault();
    }
    render() {
        return (
            <Fragment>
                <form onSubmit={this.Submit}>
                    <input type='text' ref={this.input} /> <br />
                    <input type='text' defaultValue='Gustavo' ref={this.txtNome} /> <br />  {/*COMPONENTE SEM CONTROLE */}
                    <input type='text' value={this.state.sobrenome} onChange={this.mudaValorTxtComponenteControlado} /> <br /> {/* COMPONENTE CONTROLADO E BINDANDO */}
                    {/* <input type='text' value={this.state.sobrenome} onChange={(e) => this.mudaValorTxtComponenteControlado(e)} /> <br /> COMPONENTE CONTROLADO E SEM BINDAR */}

                    <div>
                        <label>
                            <input type='checkbox' checked={this.state.checked} onChange={(e) => this.setState({ checked: !this.state.checked })} />
                            <span>Checkbox Controlado</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type='checkbox' value='123' defaultChecked={false} ref={this.checkbox} 
                            onChange={() => console.log(this.checkbox.current.checked)} />
                            <span>Checkbox sem controle</span>
                        </label>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </Fragment>
        )
    }
}

export { Button, LikeButton, Haha, Form }
export default Title;