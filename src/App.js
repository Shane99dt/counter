import React from 'react'
import Counter from './components/Counter'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 95
    }
  }

  handleClickDown = () => {
    if(this.state.count > 0){
      this.setState({
        count : this.state.count - 1
      })
    }
  }

  handleClickUp = () => {
    if(this.state.count <100){
      console.log("works ")
      this.setState({
        count : this.state.count + 1
      })
    }
  }

  resetValue = () => {
    this.setState({
      count : 0
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <Counter increment={this.handleClickUp} substract={this.handleClickDown} count={this.state.count} counterNum='1' reset={this.resetValue} />

        <Counter counterNum={2} increment={this.handleClickUp} substract={this.handleClickDown} count={this.state.count} reset={this.resetValue}/>
      </div>
    )
  }
}

export default App