// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, string){
    return drivers.filter((names) => names.toLowerCase() === string.toLowerCase());
}


const fuzzyMatch = (drivers, string) => {
   return drivers.filter((names) => names[0] === string[0]      )
}
const matchName = function(drivers, string){
   return drivers.filter(item => item.name === string);
} 