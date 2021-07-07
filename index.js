let prices = {
    "Gibraltar Falls 50ml": 21,
    "Gibraltar Falls 200ml": 69,
    "Gibraltar Falls 500ml": 132,
    "Gibraltar Falls 1000ml": 189,
    "Gibraltar Falls 3000ml": 269,
    "Name Of Item": 69,
};

let items = [];

window.onload = () => {
    try{items = JSON.parse(window.localStorage.items);}catch(e){}
    document.querySelector(".my-float").textContent = " "+items.length;
    render();
}

let render = () => {
    let crt = document.querySelector(".cart");
    for (let i = 0; i < items.length; i++) {
        let d = document.createElement("div");
        d.className = "cartItem";
        d.innerHTML = `<p>${items[i][0]} | <span>$${items[i][1]*items[i][2]}</span> | <span>QTY. ${items[i][2]}</span></p>`;
        crt.appendChild(d);
    }
}

let add = (e) => {
    let qty = 1;
    let itemName = e.parentElement.children[1].textContent;
    let itemPrice = prices[itemName];
    if (items.find((e)=>{if(e[0]==itemName){return true;}})) {
        item = items[items.indexOf(items.find((e)=>{if(e[0]==itemName){return true;}}))];
        items[items.indexOf(items.find((e)=>{if(e[0]==itemName){return true;}}))] = [itemName, itemPrice, item[2]+qty]
    } else {
        items.push([itemName, itemPrice, qty]);
    }
    // console.log(`${itemName} ${itemPrice}`);
    window.localStorage.items = JSON.stringify(items);
}