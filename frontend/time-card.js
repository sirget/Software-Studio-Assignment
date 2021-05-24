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
    
    if (this.getAttribute("enough") == "true") {
      this.enable=true;
      this.shadowRoot.getElementById("hour-card").setAttribute("class","hour-card "); 
    }
    else{
        this.enable=false;
        this.shadowRoot.getElementById("hour-card").setAttribute("class","hour-card disabled"); 
    }

  }
  handleClick() {
    
    if(this.enable == true){
        
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
  static get observedAttributes() {
    return ["enough","vol"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
      if(name=="enough"){
        this.setAttribute("select","false");
        this.check=false;
        if (this.getAttribute("enough") == "true") {
          this.enable=true;
          this.shadowRoot.getElementById("hour-card").setAttribute("class","hour-card "); 
        }
        else{
            this.enable=false;
            this.shadowRoot.getElementById("hour-card").setAttribute("class","hour-card disabled"); 
        }
      }
      else if(name=="vol"){
        this.shadowRoot.getElementById("vol").innerText = this.getAttribute("vol");
      }
      

   
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



// JS main
var gagJSON;
var selectList=[0,0,0,0,0,0,0,0];
var user,date,eqt;
var inputVol=[40,10,10,20,10,30,10,20];

if(lablint==false){
  changeCardVol();
  document
  .getElementById("sel-book")
  .addEventListener("click", () => handleBook());

}
document
  .getElementById("eqtinput")
  .addEventListener("change", () => handleEqtchange());
document
  .getElementById("sel-search")
  .addEventListener("click", () => handleSearch());

function changeCardVol(){
    for(var i=0;i<8;i++){
        tmpcard = document.getElementById("card"+(i+1));
        tmpcard.setAttribute("vol",inputVol[i]);
    }
}
function handleBook(){
    var i;
    for(i = 0 ; i < 8 ;i++)
    {
        if(document.getElementById("card"+(i+1)).getAttribute("select") == "true"){
            selectList[i]=1;
        }
        else{
            selectList[i]=0;
        }
    }
    user = document.getElementById('userinput').value;
    date = document.getElementById("dateinput").value;
    eqt = document.getElementById("eqtinput").value;
    if(user=='' || date=='' || eqt==''){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else{
        var quan="";
        for(var i=0;i<8;i++){
            quan=quan+selectList[i];
        }
        if(quan=="00000000"){
            alert("กรุณาเลือกเวลาจอง");
        }
        else{
            console.log(quan,user,changeDateformat(date),eqt);
        }
        
    }
     
}
function handleEqtchange(){
    var i,want,tmpcard;
    
    want = document.getElementById("eqtinput").value;
    for(i=0;i<8;i++){
        tmpcard = document.getElementById("card"+(i+1));
        if(want > parseInt(tmpcard.getAttribute("vol"))){
            tmpcard.setAttribute("enough","false");
        }
        else{
            tmpcard.setAttribute("enough","true");
        }
    }
}

function handleSearch(){
    date = document.getElementById("dateinput").value;
    if(date=='')
    {
        alert("กรุณากรอก Date");
    }
    else{
        console.log("Searching : "+changeDateformat(date));
        if(lablint==true){
      
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange=function(){
            if(this.readyState == 4 && this.status == 200) {
              gagJSON=JSON.parse(this.responseText);
              //console.log(gagJSON);
              handleChangeVol(gagJSON);
              handleEqtchange();
            }
          }
          console.log(date);
          xhttp.open("GET","https://golablint.azurewebsites.net/api/get-available?id=ce8227bb-7ecd-41ea-a9dd-81078bbf496d&date="+date, true);
          xhttp.send();
         }
    }
    
}
function handleChangeVol(){
    inputVol=gagJSON.time;
    changeCardVol();
}


function changeDateformat(date){
    var tmp = date.split('-');
   
    return (parseInt(tmp[1])+'-'+parseInt(tmp[2])+'-'+parseInt(tmp[0]));
}


