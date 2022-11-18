"use strict";
function fillUsersTable(users) {
  const tbody = document.querySelector("#usersTable tbody");
  for (const user of users) {
    let row = tbody.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    // let cell3 = row.insertCell(2);
    cell1.innerText = user.name;
    cell2.innerText = user.email;
    // cell3.innerText = user.username;
  }
}

window.onload = function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      fillUsersTable(data);
    });
};
