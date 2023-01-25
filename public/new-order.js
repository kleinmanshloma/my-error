console.log("Client side javascript file is loaded!");

let newOrderForm = document.getElementById("new-order");

//  SET DEFUALT VALUE OF ORDER DATE
document.getElementById("date").value = new Date()
  .toISOString()
  .substring(0, 10);

// FUCTION PREVENT THE THE BROWSER BY SCANING AN ITEM
let data = "";
window.onload = async function () {
  // set the default field in focus
  document.getElementById("search-input").focus();

  window.document.body.addEventListener("keydown", function (event) {
    if (event.keyCode == 16 || event.keyCode == 17 || event.keyCode == 13) {
      event.preventDefault();
      return;
    }
    if (event.ctrlKey) {
      event.preventDefault();
      return;
    }

    data += event.key;
  });
};

newOrderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newOrderForm = document.getElementById("new-order");
  const formData = new FormData(newOrderForm);

  // Iterate over formData entries
  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }
});

// save the search input
let searchInput = "";
document.getElementById("search-input").addEventListener("input", (e) => {
  searchInput = e.currentTarget.value;
});

// WHEN THE SEARCH IS CILCKED GETTING and searching THE INPUT FROM THE FIELD
document.querySelector(".search-btn").addEventListener("click", async (e) => {
  /*  fetch(`/search?keyword=${searchInput}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }) // Handle success
    .then((response) => response.text()) // convert to json if its text before OR to text if its json before
    .then((text) => console.log(text)) //print data to console
    .catch((err) => console.log("Request Failed", err)); // Catch errors */

  // THEN EMPTY THE THE SEARCH FIELD
  document.getElementById("search-input").value = "";
  // set the default field in focus
  document.getElementById("search-input").focus();
});
