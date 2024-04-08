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
      .then(data => this.setState({ creditList: data }));
  }

  // Fetching debits from json files
  fetchDebits = () => {
    fetch('https://johnnylaicode.github.io/api/debits.json')
      .then(response => response.json())
      .then(data => this.setState({ debitList: data }));
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
    }));
  }

  // Adding a debit item
  addDebit = (newDebit) => {
    this.setState(prevState => ({
      debitList: [...prevState.debitList, newDebit]
    }));
  }


  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<div style={{ align: 'left', padding: '0' , textAlign: 'left'}}> <Credits credits={this.state.creditList} addCredit={this.addCredit} /> </div>) 
    const DebitsComponent = () => (<div style={{ align: 'left', padding: '0' , textAlign: 'left'}}> <Debits debits={this.state.debitList} addDebit={this.addDebit} /> </div>) 

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/bank-of-react">
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