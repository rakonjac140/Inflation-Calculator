function inflationCalculator() {
  console.log("Radi");
  let stopaInflacija = document.querySelector("#inflationRate");
  let money = document.querySelector("#money");

  stopaInflacija = parseFloat(stopaInflacija.value);
  money = parseFloat(money.value);

  let years = document.querySelector("#years").value;
  years = parseFloat(years);
  console.log(years);

  let worth = money + money * (stopaInflacija / 100);

  for (let i = 1; i < years; i++) {
    worth += worth * (stopaInflacija / 100);
  }

  worth = worth.toFixed(2);
  let newElement = document.createElement("div");

  newElement.className = "new-value";

  newElement.innerText = `Danasnjih ${money} vredi isto kao ${worth} za ${years} godina.`;

  document.querySelector(".container").appendChild(newElement);
}
