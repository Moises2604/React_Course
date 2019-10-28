import React from 'react';
import ItemsList from './components/ItemsList';
import './App.css';

class App extends  React.Component {
  
  constructor(props) {
    console.log('CONSTRUCTOR DEL COMPONENTE')
    super(props);
    this.state = {
      course: "Tec Web",
      clicks:0
    }
  };

  componentDidMount = () => {
    console.log('COMPONENTE MONTADO')
  }

  increaseClicks = ()=> {
    let currentClick = this.state.clicks;
    this.setState({
      clicks: currentClick +1,
    })
  }

  render(){
    console.log('RENDER DEL COMPONENTE')
    /*const name = 'Moises Preciado';
    const age = 21;
    const list = ['Video juegos', 'Tocar Guitarra', 'Ir al gym'] */
    return (
      <div>
        
        <h1> FORTNITE ITEMS LIST</h1>
        <ItemsList />
      </div>

      /*<fragment>
        <div>
          Hola soy {name} y tengo {age} años de edad y me gustan los
          <ul>
            {
              list.map(hobbie => <li>{hobbie}</li>)
            }
          </ul>
        </div>
        <div>
          {this.state.clicks}{this.state.course}
          <button onClick={this.increaseClicks}>picale</button>
        </div>
      </fragment> */
    )
  }
}


export default App;
