let trELement = document.createElement("tr");
let setLimitInput = document.getElementById("set-limit-option");

const APPEND_ELEMENT = (id, element) => id.append(element);

const CREATE_ELEMENT = (element) => document.createElement(`${element}`);

const CreateInputAndLabel = (
  resultsId,
  innerLabelText,
  innerTextplaceholder,
  clessInput
) => {
  const results = document.getElementById(resultsId);
  //create label
  const label = CREATE_ELEMENT("label");
  label.innerText = `${innerLabelText}`;
  label.className = "input-group mt-3 mb-2";

  //create input
  const input = CREATE_ELEMENT("input");
  input.type = "text";
  input.placeholder = `${innerTextplaceholder}`;
  input.className = `${clessInput}`;

  //append label
  APPEND_ELEMENT(results, label);
  //append input
  APPEND_ELEMENT(results, input);
};

const PercentCalc = (buy, percent) => buy * (percent / 100) + buy;

const CreateOptionEl = (id, selectId) => {
  if (selectId == "") {
    return;
  } else {
    const SELECTED_VALUE_MANUALLY = selectId;
    let selectedId = document.getElementById(id);
    let option = CREATE_ELEMENT("option");
    option.innerText = `${SELECTED_VALUE_MANUALLY}`;
    option.setAttribute("value", `${SELECTED_VALUE_MANUALLY}`);
    selectedId.add(option);
  }
};

const EmptyFields = () => {
  document.querySelector("#resultsCategory").innerHTML = ``;
  document.querySelector("#resultsSubCategory").innerHTML = ``;
  document.querySelector("#resultsManufacturer").innerHTML = ``;
  document.querySelector("#resultsSell").innerHTML = ``;
  document.querySelector("#results").innerHTML = ``;
  myimage = ``;

  setLimitInput.classList.add("display-hidden");
};

const Create = (trELement, innerHTML) => {
  let tdElement = document.createElement("td");
  tdElement.innerText = innerHTML;
  trELement.append(tdElement);
};

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Function to remove an item from the list of products
function removeItem(currentItem, listOfProducts) {
  // Confirm with the user if they want to remove the item
  let result = confirm(
    `Do you want to REMOVE 
    "${currentItem.item.toLocaleUpperCase()}" ?!`
  );

  // If the user confirms, remove the item from the list
  // and rader the list again
  if (result) {
    listOfProducts.splice([currentItem], 1);
    createPriceList();
    return;
  } else {
    return;
  }
}
/*  // Iterate over formData entries
 for (const [key, value] of formData.entries()) {
  console.log(key, value);

  const input = document.querySelector(`input[name="edit-${key}"]`);
  input?.setAttribute("value", value);
} */
