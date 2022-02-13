//Задание №1

let user = {
    name: "Tanya",
    age: 26,
    city: "Moscow",
}

function showtObj(arg) {
    console.log(arg);
}

showObj(user)

//либо
let user = {
    name: "Tanya",
    age: 26,
    city: "Moscow",
}

function showObj(obj) {
    for(let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

showObj(user)
