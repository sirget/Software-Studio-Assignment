const template = document.createElement('template');
template.innerHTML=`
<style>
.labcard {
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #c4c4c4;
  margin:10px;
}

.labcard .cardhead {
  background-color: #2e2d2d;
  color: white;
  padding : 5px;
}

.labcard button {
  font-family: Prompt;
  background-color: #59fd3e;
  border: 0px;
}
</style>
<div class="labcard">
      <div class="cardhead" id="cardhead"></div>
      <img
        src="https://cdn.discordapp.com/attachments/366279112488124416/839898183957610506/arduino-uno-rev3-a000066-0f4.png"
      />
      <button>Book</button>
    </div>`
class LabCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.getElementById("cardhead").innerText=this.getAttribute('name');


        
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



