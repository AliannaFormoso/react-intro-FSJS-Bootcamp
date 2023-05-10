import Card from './Card'; './Card';
import Children from './Children';  
import { Component } from 'react'

import './App.css'

class App extends Component {

  render() {

    return (
      <>
      <Card title="Oi Mundo" text="Como vai?" > </Card>

        <div className='article'>
          <h1>Hello World</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat aperiam saepe illum qui. Quia officiis magni dignissimos qui aliquid delectus sed ab, voluptatem quas voluptas optio doloremque, possimus veritatis sit.</p>

          

        </div>

        <Card title="Hola Mundo" text="Como vas?" > </Card>
      
      <Children title={"Salut Monde"}>
        <p>Comment ca va?</p> 
        <Card title="Hola Mundo" text="Como vas?" > </Card>
      </Children>
    </>
  )
}
}
export default App
