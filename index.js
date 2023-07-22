// Write your solution in this file!
// Declare customerName to be 'bob' in global scope.
var customerName = 'bob';

function upperCaseCustomerName() {
  // Modify the customerName variable to uppercase.
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  // Set bestCustomer to 'not bob'.
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  // Overwrite the best customer to 'maybe bob'.
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
  // This will throw an error because you cannot reassign a value to a constant.
  leastFavoriteCustomer = 'Bob';
}

module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer,
};

  
  