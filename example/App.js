import React from 'react'
import ReactDOM from 'react-dom';
import ShInputCurrency from '../bin/sh-input-currency'
require('../node_modules/sh-core/bin/main.css');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeMe= this.handleChangeMe.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeMe(val) {
        this.state.value = val;
        this.setState(this.state);
    }

    handleChange(val) {
        this.state.value = val;
        this.setState(this.state);
    }

    handleSubmit() {
        alert(this.state.value);
        return false;
    }

    render() {
        return <div>
            <form name="test" onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange}/>
                <ShInputCurrency autoFocus label="Enter Amount" value={this.state.value} onBlur={this.handleChange} onChange={this.handleChange} required></ShInputCurrency>
                <button type="submit">go</button>
                {this.state.value}
            </form>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));