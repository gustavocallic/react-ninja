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
function Haha(props){
    return(
        <Fragment>
            <span>Hahahah</span>
        </Fragment>
    )
}

export { Button, LikeButton, Haha }
export default Title;