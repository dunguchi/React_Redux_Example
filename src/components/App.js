import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { decrement, increment, sum, search  } from '../redux/actions';
import { Box } from './css/style';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0,
      a: 0,
      b: 0,
      sum: 0,
      inputSearch: '',
    }

    this.setNewNumber = this.setNewNumber.bind(this)
    this.setNewNumberII = this.setNewNumberII.bind(this)
    this.changeA = this.changeA.bind(this)
    this.changeB = this.changeB.bind(this)
    this.sumAB = this.sumAB.bind(this)
    this.changeSearch = this.changeSearch.bind(this)
    this.searchAccount = this.searchAccount.bind(this)
  };

  changeSearch(event){
    event.preventDefault();
    this.setState({ inputSearch: event.target.value })
  } 

  searchAccount(event){
    event.preventDefault();
    this.props.onSearch(this.state.inputSearch);
  }

  changeA(event) {
    this.setState({ a: event.target.value })
    event.preventDefault();
  }
  changeB(event) {
    this.setState({ b: event.target.value })
    event.preventDefault();
  }
  sumAB(event) {
    this.props.onSum(this.state.a, this.state.b);
    event.preventDefault();
  }
  setNewNumber(event) {
    this.props.onIncrement();
    event.preventDefault();
  }
  setNewNumberII(event) {
    this.props.onDecrement();
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.setNewNumber}>INCREMENT</button><br />
        <button onClick={this.setNewNumberII}>DECREMENT</button><br />
        <input value={this.state.a} onChange={this.changeA} /> <span>+</span> <input value={this.state.b} onChange={this.changeB} /> <span>=</span> <input value={this.props.sum} />
        <button onClick={this.sumAB}>SUM</button><br />
        <Content myNumber={this.props.count}></Content>
        <p>
          <input type="text" value={this.state.inputSearch} onChange={this.changeSearch} /><br/>
          <button onClick={this.searchAccount}>Search</button>
        </p>
        <Table dataSearch={this.props.dataSearch} waitSearch= {this.props.waitSearch} />
      </div>
    );
  }
}

class Content extends React.Component {

  componentWillMount() {
    // console.log('Component WILL MOUNT!')
  }

  componentDidMount() {
    // console.log('Component DID MOUNT!')
  }

  componentWillReceiveProps(newProps) {
    // console.log('Component WILL RECIEVE PROPS!')
    // console.log('Component WILL RECIEVE PROPS! VARIABLE ', newProps)
    if (newProps.myNumber === 3) {
      console.log("You can stop here. Don't try anymore")
    }
  }

  shouldComponentUpdate(newProps, newState) {

    // console.log('Component shouldComponentUpdate! VARIABLE newProps ', newProps)
    // console.log('Component shouldComponentUpdate! VARIABLE newState ', newState)
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('Component WILL UPDATE!');
    // console.log('Component WILL UPDATE! VARIABLE nextProps ', nextProps)
    // console.log('Component WILL UPDATE! VARIABLE nextState ', nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('Component DID UPDATE!')
    // console.log('Component DID UPDATE! VARIABLE prevProps ', prevProps)
    // console.log('Component DID UPDATE! VARIABLE prevState ', prevState)
    // console.log('==================================================================')
  }

  componentWillUnmount() {
    // console.log('Component WILL UNMOUNT!')
  }

  render() {
    // setTimeout(() => {
    //   console.log('HELLO');
    //   setTimeout(() => {
    //     console.log("WORLD");
    //     setTimeout(() => {
    //       console.log('Rikky Handsome');
    //     }, 1000)
    //   }, 3000)
    // }, 5000);

    console.log("RENDER !")
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <Box>
        <List dataSearch={this.props.dataSearch} waitSearch={this.props.waitSearch} />
      </Box>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("===============> value is ", state);
  return {
    count: state.count.result,
    sum: state.sum.sum,
    dataSearch: state.searchAbout.userData,
    errorSearch: state.searchAbout.error,
    waitSearch: state.searchAbout.waiting,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment()),
    onSum: (a, b) => dispatch(sum(a, b)),
    onSearch:(input) => dispatch(search(input)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);