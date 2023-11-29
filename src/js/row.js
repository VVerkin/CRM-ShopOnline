'use strict'

const createRow = (obj) => {
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${obj.name}</td>
    <td>${obj.email}</td>`
    return row
}

createRow();

// const createTable = (data) => {

// }