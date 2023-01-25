const setLimit = () => {
  let setLimitBtn = document.querySelector(".toggle__checkbox").checked;
  let setLimitInput = document.getElementById("set-limit-option");

  if (setLimitBtn) {
    setLimitInput.classList.remove("display-hidden");
  } else {
    // Otherwise, hide the input field
    setLimitInput.classList.add("display-hidden");
  }
  console.log(setLimitBtn);
};
