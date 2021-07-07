let prices = {
    "Location": 10,
    "Name Of Item": 69,
};

let items = [];

window.onload = () => {
    items = JSON.parse(window.localStorage.items);
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