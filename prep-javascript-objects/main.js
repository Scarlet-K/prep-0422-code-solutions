const person = {
  firstName: 'Bob',
  lastName: 'Yee',
  hobby: 'painting'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:" + ' ' + fullName);

person.job = 'artist';
console.log("The person's current job is:" + ' ' + person.job);

person.previousJob = 'nomad';
console.log("The person's previous job is:" + ' ' + person.previousJob);

console.log(person);
