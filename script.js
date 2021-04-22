const calcPrice = (hours) => {
    while (hours < 0 || isNaN(hours)) {
        hours = prompt("Invalid input. Try again.");
    }
    price = 0;
    if (hours > 0) price += 2;
    if (hours > 3) price += (hours - 3) * 0.5;
    if (price > 10) price = 10;
    return price;
};

let num = 1;
let totalPrice = 0;

const newEntry = () => {
    let hours = prompt(`Hours parked by customer ${num}`);
    const price = calcPrice(hours);
    const table = document.querySelector("table");
    const total = document.querySelector(".total");
    total.parentNode.insertAdjacentHTML(
        "beforebegin",
        `
            <tr>
                <td>${num}</td>
                <td>${price}</td>
            </tr>
        `
    );
    totalPrice += price;
    total.innerHTML = totalPrice;

    num++;
};
