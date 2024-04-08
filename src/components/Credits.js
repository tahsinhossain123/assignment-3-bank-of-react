/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
//import AccountBalance from './AccountBalance file so that we can view the AccountBalance in the Credits page
import AccountBalance from './AccountBalance';


const Credits = (props) => {
  // Function to execute when the submit button is clicked to handle the entered data
  const submitData = (e) => {
    e.preventDefault();
    const description = e.target.description.value;
    const amount = parseFloat(e.target.amount.value);
    if (description && amount) {
      // Creating a credit object
      const newCredit = {
        id: Date.now(), // Unique ID based on date object
        description,
        amount,
        date: new Date().toISOString() // Getting the current date as a string
      };
      // Call the addCredit function passed as prop
      props.addCredit(newCredit);
      // Clear the form fields after submission
      e.target.reset();
    } 
    else {
      alert("You must fill all the fields!");
    }
  };

  // Rendering the list items one by one using the credit array
  const creditsView = () => {
    return props.credits.map(credit => (
      <li key={credit.id}>
        {credit.amount} {credit.description} {credit.date.slice(0, 10)}
      </li>
    ));
  };

  return (
    <div>
      <h1>Credits</h1>
      {/* Parent list */}
      <ul>{creditsView()}</ul>

      {/* Form for adding new credit */}
      <form onSubmit={submitData}>
        <input type="texsxt" name="description" placeholder="Description" />
        <input type="number" name="amount" placeholder="Amount" />
        <button type="submit">Add Credit</button>
      </form>
      <br/>

      {/* Account Balance Display */}
      <AccountBalance accountBalance={props.accountBalance} />
      {/* accountBalance is a prop being passed to the AccountBalance component */}
      <br/>

      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;