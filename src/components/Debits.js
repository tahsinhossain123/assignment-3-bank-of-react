/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

const Debits = (props) => {
  // Function to execute when the submit button is clicked to handle the entered data
  const submitData = (e) => {
    e.preventDefault();
    const description = e.target.description.value;
    const amount = parseFloat(e.target.amount.value);
    if (description && amount) {
      // Creating a debit object
      const newDebit = {
        id: Date.now(), // Unique ID based on date object
        description,
        amount,
        date: new Date().toISOString() // Getting the current date as a string
      };
      // Call the addDebit function passed as prop
      props.addDebit(newDebit);
      // Clear the form fields after submission
      e.target.reset();
    } 
    else {
      alert("You must fill all the fields!");
    }
  };

  
  // Rendering the list items one by one using the debit array
  const debitsView = () => {
    return props.debits.map(debit => (
      <li key={debit.id}>
        {debit.amount} {debit.description} {debit.date.slice(0, 10)}
      </li>
    ));
  };

  return (
    <div>
      <h1>Debits</h1>
      {/* Parent list */}
      <ul>{debitsView()}</ul>

      {/* Form for adding new debit */}
      <form onSubmit={submitData}>
        <input type="text" name="description" placeholder="Description" />
        <input type="number" name="amount" placeholder="Amount" />
        <button type="submit">Add Debit</button>
      </form>
      
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;