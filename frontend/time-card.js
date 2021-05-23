const template = document.createElement("template");
template.innerHTML = `
<style>@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.hour-card {
  font-family: "Roboto", sans-serif;
  width: 100px;
  height: 126px;
  background-color: #009688;
  margin: 5px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hour-card .time {
  border: 1px solid #009688;
  box-sizing: border-box;
  border-radius: 20px;
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hour-card .start,
.end {
  font-size: medium;
  margin: 0;
  font-weight: bold;
}

.hour-card .start {
  color: #009688;
  font-size: 24px;
}

.hour-card .end {
  color: #263238;
}

.hour-card .remain {
  color: white;
  font-size: 10px;
}

/* selected styles */
.selected {
  background-color: #009688;
}

.selected .time {
  background-color: #00bfa5;
  border: none;
}

.selected .start,
.selected .end,
.selected .remain {
  color: white;
}

/* disabled styles */
.disabled {
  background: #d4d6d7;
}

.disabled .time {
  background-color: white;
  border: 1px solid #d4d6d7;
  box-sizing: border-box;
}

.disabled .start,
.disabled .end{
  color: #d4d6d7;
}

.disabled .remain{
    color: white;
}</style>
<div class="hour-card">
        <div class="time">
            <p class="hour start">8:00</p>
            <p class="hour end">-9:00</p>
        </div>
        <p class="remain">remain: <span class="vol">10</span></p>
    </div>`;
class TimeCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("hour").innerText =
      this.getAttribute("hour");
    this.shadowRoot.getElementById("vol").innerText = this.getAttribute("vol");
    if (this.getAttribute("enough") == "true") {
      console.log("red");
    }
  }
  handleClick() {
    console.log(this.getAttribute("hour") + "was Click");
  }
  connectedCallback() {
    this.shadowRoot
      .querySelector(".hour-card")
      .addEventListener("click", () => this.handleClick());
  }
  discoonnectedCallback() {
    this.shadowRoot.querySelector(".hour-card").removeEventListener();
  }
}
customElements.define("time-card", TimeCard);

document
  .getElementById("dateinput")
  .addEventListener("change", () => handleChangeDate());

function handleChangeDate() {
  console.log(document.getElementById("dateinput").value);
}
