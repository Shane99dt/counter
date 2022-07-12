import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div className='d-flex flex-row col-4 align-items-center'>
          <button onClick={this.props.substract} className='btn btn-success m-2' >-</button>
          <h2 className='mx-4' >{this.props.count}</h2>
          <button className='btn btn-danger m-2' onClick={this.props.increment}>+</button>
        </div>
        {/* <div className='d-flex flex-row col-4 align-items-center'>
          <button onClick={this.handleClickDown} className='btn btn-success m-2' >-</button>
          <h2 className='mx-4' >{this.state.count}</h2>
          <button className='btn btn-danger m-2' onClick={this.handleClickUp}>+</button>
        </div> */}
      </div>
    )
  }
}

export default Counter