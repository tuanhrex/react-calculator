import React, { Component } from 'react'

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
            num6: 0,
            num7: 0,
            num8: 0,
            sum: 0,
            difference: 0,
            product: 0,
            quotient: 0
        }
    }
    addNumbers = () => {
        let result = parseInt(this.state.num1) + parseInt(this.state.num2)
        this.setState({ sum: result})
    }
    subtractNumbers = () => {
        let result = parseInt(this.state.num3) - parseInt(this.state.num4)
        this.setState({ difference: result})
    }
    multiplyNumbers = () => {
        let result = parseInt(this.state.num5) * parseInt(this.state.num6)
        this.setState({ product: result})
    }
    divideNumbers = () => {
        let result = parseInt(this.state.num7) / parseInt(this.state.num8)
        this.setState({ quotient: result})
    }
    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
      }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value={ this.state.num1 }
                    onChange={ (e) => this.setNum(e, 'num1')}
                    />
                    <span>+</span>
                    <input type="text" 
                    name="num2"
                    placeholder="Enter your second number"
                    value={ this.state.num2 }
                    onChange={ (e) => this.setNum(e, 'num2')}
                    />
                    <button onClick={this.addNumbers}>=</button>
                    <h3>The sum is {this.state.sum}</h3>
                </div>
                <h1>Subtract with React!</h1>
                <div className="subtract">
                    <input type="number"
                    name="num3"
                    placeholder="Enter your first number"
                    value={ this.state.num3 }
                    onChange={ (e) => this.setNum(e, 'num3')}
                    />
                    <span>-</span>
                    <input type="text" 
                    name="num4"
                    placeholder="Enter your second number"
                    value={ this.state.num4 }
                    onChange={ (e) => this.setNum(e, 'num4')}
                    />
                    <button onClick={this.subtractNumbers}>=</button>
                    <h3>The difference is {this.state.difference}</h3>
                </div>
                <h1>Multply with React!</h1>
                <div className="multiply">
                    <input type="number"
                    name="num5"
                    placeholder="Enter your first number"
                    value={ this.state.num5 }
                    onChange={ (e) => this.setNum(e, 'num5')}
                    />
                    <span>x</span>
                    <input type="text" 
                    name="num6"
                    placeholder="Enter your second number"
                    value={ this.state.num6 }
                    onChange={ (e) => this.setNum(e, 'num6')}
                    />
                    <button onClick={this.multiplyNumbers}>=</button>
                    <h3>The product is {this.state.product}</h3>
                </div>
                <h1>Divide with React!</h1>
                <div className="divide">
                    <input type="number"
                    name="num7"
                    placeholder="Enter your first number"
                    value={ this.state.num7 }
                    onChange={ (e) => this.setNum(e, 'num7')}
                    />
                    <span>/</span>
                    <input type="text" 
                    name="num8"
                    placeholder="Enter your second number"
                    value={ this.state.num8 }
                    onChange={ (e) => this.setNum(e, 'num8')}
                    />
                    <button onClick={this.divideNumbers}>=</button>
                    <h3>The quotient is {this.state.quotient}</h3>
                </div>
            </div>

        )
    }
}

export default Calculator