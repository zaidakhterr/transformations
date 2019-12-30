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

const rotate = () => {
  console.log('>>>>>>>>>>>>>>', 'rotate');
  let angle = document.getElementById('angle').value;
  let div = document.getElementById('rotate-div');
  if (angle) div.style.transform = `rotate(${angle})`;
  else div.style.transform = `unset`;
};

const reflect = axis => {
  console.log('>>>>>>>>>>>>>>', 'reflect');
  let div = document.getElementById('reflect-div');
  if (axis === 'x') {
    div.style.transformOrigin = '50% 100%';
    div.style.transform = 'rotateX(-180deg)';
  } else if (axis === 'y') {
    div.style.transformOrigin = '0 50%';
    div.style.transform = 'rotateY(180deg)';
  } else div.style.transform = `unset`;
};
