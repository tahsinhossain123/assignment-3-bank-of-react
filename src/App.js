/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 1234567.89,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  // Checking for mounting to fetch data
  componentDidMount() {
    this.fetchCredits();
    this.fetchDebits();
  }

  // Fetching credits from json files
  fetchCredits = () => {
    fetch('https://johnnylaicode.github.io/api/credits.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ creditList: data }, this.newAccountBalance);
      });  //updates the account balance, updates creditList component's State and call back function to setState()
    
  }

  // Fetching debits from json files
  fetchDebits = () => {
    fetch('https://johnnylaicode.github.io/api/debits.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ debitList: data }, this.newAccountBalance);
      });
  }


  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  // Adding a credit item
  addCredit = (newCredit) => {
    this.setState(prevState => ({
      creditList: [...prevState.creditList, newCredit]
    }), this.newAccountBalance); // updates account balance after adding credit
    //newAccountBalance defined below is a method of the App class 
  }

  // Adding a debit item
  addDebit = (newDebit) => {
    this.setState(prevState => ({
      debitList: [...prevState.debitList, newDebit]
    }), this.newAccountBalance); // updates account balance  after adding debit
  }

  // newAccountBalance method 
  newAccountBalance = () => {
    //Calculates Total Credits
    const totalCredits = this.state.creditList.reduce((acc, credit) => acc + credit.amount, 0);
    //Calculates Total Debits
    const totalDebits = this.state.debitList.reduce((acc, debit) => acc + debit.amount, 0);
    //Computes newBalance totalCredits - totalDebits
    const newBalance = totalCredits - totalDebits;
    //updates the component's state
    this.setState({ accountBalance: parseFloat(newBalance.toFixed(2)) }); // Update state with new balance, rounded to 2 decimal places
  }


  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)

    const CreditsComponent = () => (
      <div style={{ align: 'left', padding: '0', textAlign: 'left' }}> 
        <Credits 
          credits={this.state.creditList} 
          addCredit={this.addCredit} 
          // gives the CreditsComponent access to the accountBalance prop (properties) value from its parent component's state.
          accountBalance={this.state.accountBalance} 
        />
      </div>
    );


    const DebitsComponent = () => (
      <div style={{ align: 'left', padding: '0' , textAlign: 'left'}}> 
        <Debits 
          debits={this.state.debitList} 
          addDebit={this.addDebit} 
          accountBalance={this.state.accountBalance}          
        /> 
      </div>
      );

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/bank-of-react-starter-code">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;