import React, { Component, Fragment } from 'react';
import './App.css';
import Title, { Button, LikeButton, Haha } from './Title'
import Square from './Square'


class App extends Component {
  constructor() {
    super()
    this.state = {
      oioi: false,
      text: 'HaHaHa',
      cor: 'green',
      showSquare: true,
      time: 0
    }
    this.timer = 0
  }

  componentDidMount(){
      this.IniciaContador();
  }
  
  shouldComponentUpdate(nextProps, nextState){//esse método sempre retorna um bool
    return this.state.time !== nextState.time //desse jeito eu atualizo o state.time, pq o next sempre é o futuro, se eles forem iguais o retorno será false e o state.time não vai ser atualizado.
  }

  IniciaContador = () =>{
    this.timer = setInterval(() => {
      this.setState({time: this.state.time + 1})
    }, 1000);
  }
  mudaTexto = () => {
    this.state.oioi === true ? this.setState({ text: 'hAhAhA', oioi: false }) : this.setState({ text: 'OiOiOi', oioi: true })
  }
  mudarCor = (cor) =>{
    this.setState({cor: cor, showSquare: !this.state.showSquare})
    if (this.state.showSquare === false) {
      this.setState({time: 0})
      clearInterval(this.timer)
    }else{
      this.IniciaContador();
    }
    
  }
  render() {
    return (
      <Fragment>
        <header className="App-header">
          <Haha />
          <Title id='1' />
          {this.state.showSquare &&  <span>{this.state.time}</span>}
          <Square color={this.state.cor} />

          {['red', 'green', 'blue'].map((cor, index) => {
            return (
              <Button key={index} handleClick={() => this.mudarCor(cor)}>{cor}</Button>
            )
          })}


          <div onClick={this.mudaTexto}>
            {this.state.text}
          </div>

          <Button>
            <span>Texto do botão</span>
          </Button>

          <LikeButton />

          <div onClick={(e) => {
            alert('oi')
          }}>
            {['blue', 'green', 'yellow'].map((cor, index) => {//este index é um parâmetro da função map()
              return (
                <Square key={index} color={cor} /> // a key serve para que o react se ache na hora de renderizar, ela só serve para essa renderização em massa e somente para o react se achar, é como se fosse um ID do componente, portanto é necessário usar uma PK pra ela
              )
            })}
          </div>
        </header>
      </Fragment>
    );
  }
}

export default App;
