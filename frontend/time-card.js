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
.hour-card{
    cursor:pointer;
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
  cursor:default;
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
}

</style>
<div class="hour-card " id="hour-card">
        <div class="time">
            <p class="hour start" id="start_hour">8:00</p>
            <p class="hour end" id="end_hour">-9:00</p>
        </div>
        <p class="remain">remain: <span class="vol" id="vol">10</span></p>
    </div>`;
class TimeCard extends HTMLElement {
  constructor() {
    super();
    var enable =true;
    var click = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("start_hour").innerText =
      this.getAttribute("hour");
    this.shadowRoot.getElementById("end_hour").innerText =
      this.getAttribute("e_hour");
    this.shadowRoot.getElementById("vol").innerText = this.getAttribute("vol");
    if (this.getAttribute("enough") == "true") {
      this.enable=true;
    }
    else{
        this.enable=false;
        this.shadowRoot.getElementById("hour-card").setAttribute("class","hour-card disabled"); 
    }

  }
  handleClick() {
    
    if(this.enable == true){
        console.log(this.getAttribute("hour") + "was Click");
        console.log(this.enable);
        if(this.check == true)
        {
            this.setAttribute("select","false");
            this.shadowRoot.getElementById("hour-card").setAttribute("class","hour-card ");
            
        }
        else{
            this.setAttribute("select","true");
            this.shadowRoot.getElementById("hour-card").setAttribute("class","hour-card selected");
            
        }
        this.check=!this.check;
        
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
   
  }
 
  connectedCallback() {
    this.shadowRoot
      .querySelector(".hour-card")
      .addEventListener("click", () => this.handleClick());
  }
  disconnectedCallback() {
    this.shadowRoot.querySelector(".hour-card").removeEventListener();
  }
  
}
customElements.define("time-card", TimeCard);
var selectItem=[0,0,0,0,0,0,0,0];
document
  .getElementById("dateinput")
  .addEventListener("change", () => handleChangeDate());
document
  .getElementById("sel-book")
  .addEventListener("click", () => handleBook());
document
  .getElementById("eqtinput")
  .addEventListener("change", () => handleEqtchange());

function handleChangeDate() {
  console.log(document.getElementById("dateinput").value);
}
function handleBook(){
    var selectList = [],i;
    for(i = 0 ; i < 8 ;i++)
    {
        if(document.getElementById("card"+(i+1)).getAttribute("select") == "true"){
            selectList[i]=1;
        }
        else{
            selectList[i]=0;
        }
    }
     console.log(selectList)
}
function handleEqtchange(){
    var i,want,tmpcard;
    want = document.getElementById("eqtinput").value;
    for(i=0;i<8;i++){
        tmpcard = document.getElementById("card"+(i+1));
        if(want > parseInt(tmpcard.getAttribute("vol"))){
            //console.log("A" + (i+1));
            tmpcard.setAttribute("enough","false");
        }
        else{
            //console.log("B" + (i+1));
            tmpcard.setAttribute("enough","true");
            //console.log(tmpcard);
        }
    }
}


