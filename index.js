const state = {
  bankValue: [],
  evenValue: [],
  oddValue: [],
};
function updateState(key, value) {
  state[key] = value;
  render();
}
function render() {
  const myApp = document.getElementById(`app`);
  myApp.innerHTML = `<h1>Odds and Events</h1>
    <form>
    <label for ="userNumber"> Add a number to the bank</label>
    <input type = "text" id ="userNumber" name = "userNumber"/>
    <button id = "bank-button">Add number</button>
    <button id = "sort1-button">Sort 1</button>
    <button id = "sort-all-button">Sort All</button>
     </form>
<h2>Bank</h2>
<input value="${state.bankValue}"/>
<h2>Odds</h2>
<input value="${state.oddValue}"/>
<h2>Evens</h2> 
<input value="${state.evenValue}"/>`;

  const bankButton = document.getElementById(`bank-button`);
  bankButton.addEventListener(`click`, () => {
    const addNumberInput = document.getElementById(`userNumber`);
    if (addNumberInput.value !== "") {
      updateState(`bankValue`, [...state.bankValue, addNumberInput.value]);
    }
  });

  const sort1Button = document.getElementById(`sort1-button`);
  sort1Button.addEventListener(`click`, () => {
    if (state.bankValue.length !== 0) {
      const sortFirstNumber = state.bankValue.shift();
      if (sortFirstNumber % 2 === 0) {
        state.evenValue.push(sortFirstNumber);
      } else state.oddValue.push(sortFirstNumber);
      render();
    }
  });

  const sortAllButton = document.getElementById(`sort-all-button`);
  sortAllButton.addEventListener(`click`, () => {
    for (let i = state.bankValue.length - 1; i >= 0; i--) {
      const value = Number(state.bankValue[i]);
      if (value % 2 === 0) {
        state.evenValue.push(value);
      } else {
        state.oddValue.push(value);
      }
      state.bankValue.splice(i, 1);
    }
    render();
  });
}
render();
