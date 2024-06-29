import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {toss: true, heads: 0, tails: 0}

  makechanges = () => {
    Math.floor(Math.random() * 2) === 0
      ? this.setState(prev => ({toss: true, heads: prev.heads + 1}))
      : this.setState(prev => ({toss: false, tails: prev.tails + 1}))
  }

  render() {
    const {toss, heads, tails} = this.state
    const count = heads + tails

    return (
      <div className="container">
        <div className="sub-container">
          <div className="sub">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="description">Heads (or) Tails</p>
            {toss && (
              <div className="coin-img">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                  alt="toss result"
                  className="toss-icon"
                />
              </div>
            )}
            {!toss && (
              <div className="coin-img">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                  alt="toss result"
                  className="toss-icon"
                />
              </div>
            )}
            <button className="button" type="button" onClick={this.makechanges}>
              Toss Coin
            </button>
            <ul className="count-container">
              <li className="count-subcontainer">
                <p className="count">Total: {count}</p>
              </li>
              <li className="count-subcontainer">
                <p className="count">Heads: {heads}</p>
              </li>
              <li className="count-subcontainer">
                <p className="count">Tails: {tails}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
