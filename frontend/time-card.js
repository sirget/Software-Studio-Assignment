const template = document.createElement('template');
template.innerHTML=`
<style>
.hourcard {
    width: 100px;
    height: 126px;
    background-color: #00BFA5;
    margin: 5px;
    border-radius: 20px;
    display:flex;
    flex-direction:column;
    align-items: center;
  }
.hourcard .time{
    border-radius: 20px;
    width: 100px;
    height: 100px;
    background-color: #009688;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
}
.hourcard .hour {
    font-size: medium;
    color:white;
    margin:0;
  }

.hourcard .vol{
    color:white;
    font-size:10px;
}
.hourcard .start{
    font-size:24px;
    font-weight:bold;
}
</style>
<div class="hourcard">
    <div class="time">
        <p class="hour start">8:00</p>
        <p class="hour">-9:00</p>
    </div>
        <p class="vol">remain: 10</p>
</div>`
class TimeCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        //this.shadowRoot.getElementById("hour").innerText=this.getAttribute('hour');
        //this.shadowRoot.getElementById("vol").innerText=this.getAttribute('vol');
        if(this.getAttribute('enough')=="true"){
            console.log('red');
            
        }
        

        
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

