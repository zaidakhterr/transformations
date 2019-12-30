const prevent = type => {
  let btn = document.getElementById(`${type}-btn`);
  btn.addEventListener('click', e => {
    console.log('**************', e);
    e.preventDefault();
  });
};

prevent('scale');
prevent('translate');
prevent('rotate');

const display = () => {
  let x = document.getElementById('translate-x').value;
  let y = document.getElementById('translate-y').value;
  let z = document.getElementById('translate-z').value;
  let div = document.getElementById('translate-div');
  console.log(x);
  console.log(y);
  console.log(z);
  if (x && y && z) {
    div.style.transform = `perspective(800px) translate3d(${x},${y},${z})`;
  } else if (x && y) {
    div.style.transform = `translateX(${x}) translateY(${y})`;
  } else if (x) {
    div.style.transform = `translateX(${x})`;
  } else if (y) {
    div.style.transform = `translateY(${y})`;
  } else if (z) {
    div.style.transform = `perspective(800px) translateZ(${z})`;
  } else if (x && z) {
    div.style.transform = `translateX(${x}) translateZ(${z})`;
  } else if (y && z) {
    div.style.transform = `translateY(${y}) translateZ(${z})`;
  }
};

const rotate = () => {
  let angle = document.getElementById('angle').value;
  let div = document.getElementById('rotate-div');
  let checkx = document.getElementById('x-axis');
  let checky = document.getElementById('y-axis');
  let checkz = document.getElementById('z-axis');
  //   console.log(angle);
  if (checkx.checked && checky.checked && checkz.checked) {
    div.style.transform = `rotate3d(1,1,1,${angle})`;
  } else if (checkx.checked && checky.checked) {
    div.style.transform = `rotate3d(1,1,0,${angle})`;
  } else if (checkx.checked && checkz.checked) {
    div.style.transform = `rotate3d(1,0,1,${angle})`;
  } else if (checkx.checked) {
    div.style.transform = `rotate3d(1,0,0,${angle})`;
  } else if (checky.checked && checkz.checked) {
    div.style.transform = `rotate3d(0,1,1,${angle})`;
  } else if (checky.checked) {
    div.style.transform = `rotate3d(0,1,0,${angle})`;
  } else if (checkz.checked) {
    div.style.transform = `rotate3d(0,0,1,${angle})`;
  }
};

const scale = () => {
  let x = document.getElementById('scale-x').value;
  let y = document.getElementById('scale-y').value;
  let z = document.getElementById('scale-z').value;
  let div = document.getElementById('scale-div');
  console.log(x);
  console.log(y);
  console.log(z);
  if (x && y && z) {
    div.style.transform = `perspective(800px) scale3d(${x},${y},${z})`;
  } else if (x && y) {
    div.style.transform = `scaleX(${x}) scaleY(${y})`;
  } else if (x) {
    div.style.transform = `scaleX(${x})`;
  } else if (y) {
    div.style.transform = `scaleY(${y})`;
  } else if (z) {
    div.style.transform = `perspective(800px) scaleZ(${z})`;
  } else if (x && z) {
    div.style.transform = `scaleX(${x}) scaleZ(${z})`;
  } else if (y && z) {
    div.style.transform = `scaleY(${y}) scaleZ(${z})`;
  }
};
