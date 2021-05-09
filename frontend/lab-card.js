const template = document.createElement('template');
template.innerHTML=`
<style>
.labcard {
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 400px;
  margin:10px;
 
}

.labcard{
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
}

.cardhead {
margin:10px;
margin-bottom: 0;
color:#00BFA5;
font-weight: bold;
font-size:20px;
}
.labcard {
  margin-top: 0;
  background-color:white;
  border-radius: 10px;
}

.labcard button {
  font-family: Prompt;
  background-color: #009688;
  border: 0px;
  color:white;
  border-radius: 25px;
  width:100%;
  height:30px;
  font-size:16px;
}
.labcard  .detail{
 
 
  padding:20px;
}
.labcard .detail p{
  overflow-wrap: anywhere;
}
.labcard img{
  border-radius: 10px;
}
.labcard .detail label{
  margin:0;
  padding:0;
}
h3{
  margin:0;
}

label{
  font-size:12px;
  color:gray;
}
p{
  
  font-size:14px;
  color:gray;
}



</style>
<div class="cardhead" id="cardhead"></div>
  <div class="labcard">
    <img/>
    <div class="detail">
    <h3>Voltmeter</h3>
    <label>12 pcs</label>
    <p></p>
    <button>BOOK</button>
    </div>
  </div>`
class LabCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.getElementById("cardhead").innerText=this.getAttribute('lab');
        this.shadowRoot.querySelector('img').setAttribute('src',this.getAttribute('image'));
        this.shadowRoot.querySelector('p').innerText=this.getAttribute('desc');
        this.shadowRoot.querySelector('label').innerText=this.getAttribute('vol')+" pieces";
        this.shadowRoot.querySelector('h3').innerText=this.getAttribute('itemName');


        
    }
    handleClick(){
        console.log(this.getAttribute('name'))

    }
    connectedCallback(){
        this.shadowRoot.querySelector('button').addEventListener('click',() => this.handleClick());
    }
    discoonnectedCallback(){
        this.shadowRoot.querySelector('button').removeEventListener();
    }
    
}
customElements.define('lab-card', LabCard);



