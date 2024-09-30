// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, attribute) {
    const result = drivers.filter(
        (driver) => driver.toLowerCase() === attribute.toLowerCase()


)

return result
}

function fuzzyMatch (drivers, attribute) {
    const result = drivers.filter((driver) => driver.startsWith(attribute));
    return result
}


function matchName(drivers, attribute) {
 const result = drivers.filter((driver) => driver.name === attribute);
return result
}
