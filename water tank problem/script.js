function calculateWater() {
  const input = document.getElementById("input").value;
  const height = input.split(",").map(Number);

  let n = height.length;

  let left = new Array(n).fill(0),
    right = new Array(n).fill(0);

  left[0] = height[0];
  right[n - 1] = height[n - 1];

  for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], height[i]);

  for (let i = n - 2; i >= 0; i--) right[i] = Math.max(right[i + 1], height[i]);

  // console.log(height, left, right);

  let trappedWater = 0;

  for (let i = 0; i < n; i++) {
    trappedWater += Math.min(left[i], right[i]) - height[i];
  }

  // console.log(trappedWater);

  const output = document.getElementById("output");
  output.textContent = `${trappedWater} Units`;

  const blocksDiv = document.getElementById("blocks");
  blocksDiv.innerHTML = "";

  // 0,4,0,0,0,6,0,6,4,0


  height.forEach((heightElem, i) => {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.height = `${(Math.min(left[i], right[i])) * 30}px`;

      const waterHeight = (Math.min(left[i], right[i]) - height[i]) * 30;
      const water = document.createElement("div");
      water.classList.add("water");
      water.style.height = `${waterHeight}px`;
      block.appendChild(water);

    blocksDiv.appendChild(block);
  });

}
