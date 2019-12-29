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
    div.style.transform = `translate3d(${x},${y},${z})`;
  } else if (x && y) {
    div.style.transform = `translateX(${x}) translateY(${y})`;
  } else if (x) {
    div.style.transform = `translateX(${x})`;
  } else if (y) {
    div.style.transform = `translateY(${y})`;
  } else if (z) {
    div.style.transform = `translateZ(${z})`;
  }
};

const rotate = () => {
  let x = document.getElementById('rotate-x').value;
  let y = document.getElementById('rotate-y').value;
  let z = document.getElementById('rotate-z').value;
  let div = document.getElementById('rotate-div');
  console.log(x);
  console.log(y);
  console.log(z);
  if (x && y && z) {
    div.style.transform = `rotate3d(${x},${y},${z})`;
  } else if (x && y) {
    div.style.transform = `rotateX(${x}) rotateY(${y})`;
  } else if (x) {
    div.style.transform = `rotateX(${x})`;
  } else if (y) {
    div.style.transform = `rotateY(${y})`;
  } else if (z) {
    div.style.transform = `rotateZ(${z})`;
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
    div.style.transform = `scale3d(${x},${y},${z})`;
  } else if (x && y) {
    div.style.transform = `scaleX(${x}) scaleY(${y})`;
  } else if (x) {
    div.style.transform = `scaleX(${x})`;
  } else if (y) {
    div.style.transform = `scaleY(${y})`;
  } else if (z) {
    div.style.transform = `scaleZ(${z})`;
  }
};
