// const { response } = require("express");

var title = document.getElementById('titleID');
var desc = document.getElementById('descID');

const cardsUrl = 'http://localhost:3000/cards'

function fetchCardContent(address = cardsUrl) {
    return fetch(address)
        .then(response => response.json())
        .then(({ data }) => {
            return data
        })
}


let onClickAdd = (event) => {
    event.preventDefault()
    console.log(title.value)
    console.log(desc.value)
    // title.value = ""
    // desc.value = ""
    const saveDataToDB = {
        "title": title.value,
        "desc": desc.value,
    };
    fetch(cardsUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(saveDataToDB)
    })
        .then(response => response.json())
        .then(() => {
            title.value = ""
            desc.value = ""
        })
}