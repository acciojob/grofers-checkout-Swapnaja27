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
    let tr=document.createElement("tr");
   tr.setAttribute(id , ans);
   tr.innerHTML=`<td class="item">Total sum</td><td class="price">${sum}</td>`;
   document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

