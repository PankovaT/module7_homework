//задание №2

let user = {
    name: "Tanya",
    age: 26,
    city: "Moscow",
}

function search(obj, prop) {
    console.log(obj.hasOwnProperty(prop));
}

search(user, "name")