import React from 'react'
import Counter from './components/Counter'

class App extends React.Component {
  constructor() {
    super()

		// déclaration du state initial avec le prénom Jack (1)
    this.state = {
      count: 0
    }
  }

  handleClickDown = () => {

    console.log("works nh")
    this.setState({
      count : this.state.count - 1
    })
  }

  handleClickUp = () => {

    console.log("works ")
    this.setState({
      count : this.state.count + 1
    })
  }

  render() {
    if (this.state.count <= 0){
      this.state.count = 0
    }
    if (this.state.count >= 100){
      this.state.count = 100
    }

    return (
      <div className="container-fluid">
        <Counter increment={this.handleClickUp} substract={this.handleClickDown} count={this.state.count} counterNum='1'/>

        <Counter counterNum={2} increment={this.handleClickUp} substract={this.handleClickDown} count={this.state.count} />
      </div>
    )
  }
}

export default App