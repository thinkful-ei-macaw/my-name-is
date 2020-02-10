'use strict'

function getYearOfBirth(age) {
    if (age < 1) {
    throw new Error("Age can not be negative")};
    return 2020 - age;

}

function createGreeting(name, age) {
    if (name === undefined || age === undefined) {
    throw new Error("Arguments not valid")};

    if (typeof age === NaN) {
        throw new Error("Age must be a number")};
    }

    return `Hi My ${name} is and I'm ${age} years old and I was born in ${YearOfBirth}`;

    
}

try {
    const greeting1 = createGreeting(Kam, 35); 

} catch(e) {
    console.error(e.message);
}
