const state = {
  bankValue: [],
  evenValue: [],
  oddValue: [],
};

function render() {
  const myApp = document.getElementById(`app`);
  myApp.innerHTML = `
    <h1>Odds and Events</h1>
    <form>
      <label for ="userNumber"> Add a number to the bank</label>
      <input type = "text" id ="userNumber" name = "userNumber"/>
      <button id = "bank-button">Add number</button>
      <button id = "sort1-button">Sort 1</button>
      <button id = "sort-all-button">Sort All</button>
     </form>
    <h2>Bank</h2>
    <output id ="bank-output"></output>
    <h2>Odds</h2>
    <output id ="odds-output"></output>
    <h2>Evens</h2> 
    <output id = "even-output"></output>`;

  const form = document.querySelector(`form`);
  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const action = event.submitter && event.submitter.innerText;
    // Add a number to the bank
    if (action === "Add number") {
      const addNumberInput = document.getElementById(`userNumber`);
      if (addNumberInput.value !== "") {
        const num = Number(addNumberInput.value);
        if (!Number.isNaN(num)) {
          state.bankValue.push(num);
          renderBank();
        }
        addNumberInput.value = "";
      }
    }
    // Sort the first number from the bank into odd/even
    else if (action === "Sort 1") {
      if (state.bankValue.length !== 0) {
        const sortFirstNumber = state.bankValue.shift();
        if (Number(sortFirstNumber) % 2 === 0) {
          state.evenValue.push(Number(sortFirstNumber));
        } else {
          state.oddValue.push(Number(sortFirstNumber));
        }
        renderBank();
        renderEven();
        renderOdd();
      }
    }
    // Sort all numbers from the bank into odd/even
    else if (action === "Sort All") {
      while (state.bankValue.length > 0) {
        const value = Number(state.bankValue.shift());
        if (value % 2 === 0) {
          state.evenValue.push(value);
        } else {
          state.oddValue.push(value);
        }
      }
      renderBank();
      renderEven();
      renderOdd();
    }
  });
}

function renderBank() {
  const bankOutput = document.querySelector("#bank-output");
  bankOutput.innerText = state.bankValue;
}

function renderEven() {
  const evenOutput = document.querySelector("#even-output");
  evenOutput.innerText = state.evenValue;
}

function renderOdd() {
  const oddOutput = document.querySelector("#odds-output");
  oddOutput.innerText = state.oddValue;
}
render();
