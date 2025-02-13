function callFunc(){
    let initialPopulation = parseFloat(prompt("Enter Initial Population: "));
    let rateOfGrowth = parseFloat(prompt("Enter its rate of growth(number between 0 and 1): "));
    let timeInHours = parseFloat(prompt("Enter time in hours: "));
    let finalPop = Math.round(initialPopulation*Math.pow(Math.E, (rateOfGrowth*timeInHours)));
    let locationOfMonster = prompt("Enter location of the monster: ");
    let nameOfMonster = prompt("Enter the name of the monster: ");
    let nameAndLocationOfMonster = locationOfMonster.concat(" ", nameOfMonster).toUpperCase();
    document.getElementById("result").innerHTML = "  After  " + timeInHours + "  hours, the population of  " + nameAndLocationOfMonster + "  has risen to  " + finalPop;
}
