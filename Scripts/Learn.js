"use strict"

alert('gr');

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    for (let [key, value] of Object.entries(salaries)){
        return key;
    }
}

alert ( topSalary());