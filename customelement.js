class RyanElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Ryan was here";
    }
}

customElements.define("x-ryan", RyanElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}
customElements.define("x-center", CenterElement)

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}
customElements.define("x-fullyear", YearElement)

class BlueElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        `<div style="color: Blue">${this.innerHTML}</div>`;
    }
}
customElements.define("x-blue", BlueElement)