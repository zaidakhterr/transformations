// const scale = () => {
//   let x = document.getElementById('scale-x').value;
//   let y = document.getElementById('scale-y').value;
//   let div = document.getElementById('scale-div');
//   if (x && y) div.style.transform = `scale(${x},${y})`;
//   else if (x) div.style.transform = `scaleX(${x})`;
//   else if (y) div.style.transform = `scaleY(${y})`;
//   else div.style.transform = `scale(1)`;
// };

const transform2D = transform => {
  console.log('>>>>>>>>>>>>>>', transform);
  let x = document.getElementById(`${transform}-x`).value;
  let y = document.getElementById(`${transform}-y`).value;
  let div = document.getElementById(`${transform}-div`);
  if (x && y) div.style.transform = `${transform}(${x},${y})`;
  else if (x) div.style.transform = `${transform}X(${x})`;
  else if (y) div.style.transform = `${transform}Y(${y})`;
  else div.style.transform = `unset`;
};
