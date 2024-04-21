document
  .getElementById("profitForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var timeUnit = parseInt(document.getElementById("timeUnit").value);
    var result = maxProfit(timeUnit);
    document.getElementById("result").innerText = result;
  });

function maxProfit(timeUnit) {
  let temp = timeUnit;
  const properties = [
    { name: "Theatre", earnings: 1500, time: 5 },
    { name: "Pub", earnings: 1000, time: 4 },
    { name: "Commercial Park", earnings: 3000, time: 10 },
  ];
  const solution = { T: 0, P: 0, C: 0 };

  let maxEarnings = 0;

  calculatePub(temp);
  calculatePark(temp);
  calculateTheater(temp);

  function calculatePark(tempTime) {
    let count = Math.floor(tempTime / properties[2].time);
    let earnings = 0;

    for (let i = 0; i < count; i++) {
      tempTime -= properties[2].time;
      earnings += tempTime * properties[2].earnings;
    }

    if (earnings > maxEarnings) {
      maxEarnings = earnings;
      solution.C = count;
      solution.T = 0;
      solution.P = 0;
    }
  }

  function calculateTheater(tempTime) {
    let count = Math.floor(tempTime / properties[0].time);
    let earnings = 0;

    for (let i = 0; i < count; i++) {
      tempTime -= properties[0].time;
      earnings += tempTime * properties[0].earnings;
    }

    if (earnings > maxEarnings) {
      maxEarnings = earnings;
      solution.T = count;
      solution.C = 0;
      solution.P = 0;
    }
  }

  function calculatePub(tempTime) {
    let count = Math.floor(tempTime / properties[1].time);
    let earnings = 0;

    for (let i = 0; i < count; i++) {
      tempTime -= properties[1].time;
      earnings += tempTime * properties[1].earnings;
    }

    if (earnings > maxEarnings) {
      maxEarnings = earnings;
      solution.P = count;
      solution.T = 0;
      solution.C = 0;
    }
  }

  return `Earnings: $${maxEarnings}\nSolutions\n1. T: ${solution.T} P: ${solution.P} C: ${solution.C}`;
}
