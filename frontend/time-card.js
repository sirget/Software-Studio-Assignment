const template = document.createElement('template');
template.innerHTML=`
<style>
.hourcard {
    width: 100px;
    height: 100px;
    background-color: #59fd3e;
    padding: 1px;
    margin: 5px;
  }
.hourcard p {
    font-size: medium;
  }
</style>
<div class="hourcard">
            <p id="hour">8.00</p>
            <p id="vol">20</p>
          </div>`
class TimeCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.getElementById("hour").innerText=this.getAttribute('hour');
        this.shadowRoot.getElementById("vol").innerText=this.getAttribute('vol');
        

        
    }
    handleClick(){
        console.log(this.getAttribute('hour')+ "was Click");

    }
    connectedCallback(){
        this.shadowRoot.querySelector('.hourcard').addEventListener('click',() => this.handleClick());
    }
    discoonnectedCallback(){
        this.shadowRoot.querySelector('.hourcard').removeEventListener();
    }
    
}
customElements.define('time-card', TimeCard);

document.getElementById("dateinput").addEventListener('change',()=>handleChangeDate());

function handleChangeDate(){
    console.log(document.getElementById("dateinput").value);
}

