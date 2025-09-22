const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices=document.querySelectorAll(".price");
    let sum=0;
    prices.forEach((price)=>{
        sum+=Number(price.textContent);
    })
	let table=document.querySelector("table");
    let tr=document.createElement("tr");
	tr.classList.add("total-row");
    
	let td=document.createElement("td");
	td.id="ans";
	tr.appenChild(td);
	table.appenChild(tr);
};

getSumBtn.addEventListener("click", getSum);

