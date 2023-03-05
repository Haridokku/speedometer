// Write your code here

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState =>
      prevState.speed < 200
        ? {speed: prevState.speed + 10}
        : {speed: prevState.speed},
    )
  }
  brakes = () => {
    this.setState(prevState =>
      prevState.speed > 0
        ? {speed: prevState.speed - 10}
        : {speed: prevState.speed},
    )
  }
  render() {
    const {imgUrl} = this.props
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="head">SPEEDOMETER</h1>
        <img src={imgUrl} alt="speedometer" class="img" />
        <h1 className="head2">Speed is {speed}mph</h1>
        <p className="describe">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button className="button1" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="button2" onClick={this.brakes}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
