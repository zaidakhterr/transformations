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
  if (x && y && z) {
    console.log(x);
    console.log(y);
    console.log(z);
    div.style.transform = `perspective(800px) translate3d(${x},${y},${z})`;
  } else if (x && y) {
    div.style.transform = `translateX(${x}) translateY(${y})`;
  } else if (x && z) {
    div.style.transform = `perspective(800px) translateX(${x}) translateZ(${z}`;
  } else if (y && z) {
    div.style.transform = `perspective(800px) translateY(${y}) translateZ(${z}`;
  } else if (x) {
    div.style.transform = `translateX(${x})`;
  } else if (y) {
    div.style.transform = `translateY(${y})`;
  } else if (z) {
    div.style.transform = `perspective(800px) translateZ(${z})`;
  }
};

const rotate = () => {
  let angle = document.getElementById('angle').value;
  let div = document.getElementById('rotate-div');
  let x = document.getElementById('x-axis').value;
  let y = document.getElementById('y-axis').value;
  let z = document.getElementById('z-axis').value;
  if (x && y && z) {
    div.style.transform = `rotate3d(${x},${y},${z},${angle})`;
  } else if (x && y) {
    div.style.transform = `rotate3d(${x},${y},0,${angle})`;
  } else if (x && z) {
    div.style.transform = `rotate3d(${x},0,${z},${angle})`;
  } else if (y && z) {
    div.style.transform = `rotate3d(0,${y},${z},${angle})`;
  } else if (x) {
    div.style.transform = `rotate3d(${x},0,0,${angle})`;
  } else if (y) {
    div.style.transform = `rotate3d(0,${y},0,${angle})`;
  } else if (z) {
    div.style.transform = `rotate3d(0,0,${z},${angle})`;
  }
};

const scale = () => {
  let x = document.getElementById('scale-x').value;
  let y = document.getElementById('scale-y').value;
  let z = document.getElementById('scale-z').value;
  let div = document.getElementById('scale-div');
  if (x && y && z) {
    div.style.perspectiveOrigin = 'bottom left';
    div.style.transform = `perspective(800px) scale3d(${x},${y},${z})`;
  } else if (x && y) {
    div.style.transform = `scaleX(${x}) scaleY(${y})`;
  } else if (x && z) {
    div.style.transform = `perspective(800px) scaleX(${x}) scaleZ(${z})`;
  } else if (y && z) {
    div.style.transform = `perspective(800px) scaleY(${y}) scaleZ(${z})`;
  } else if (x) {
    div.style.transform = `scaleX(${x})`;
  } else if (y) {
    div.style.transform = `scaleY(${y})`;
  } else if (z) {
    console.log(z);
    div.style.transform = `perspective(800px) scaleZ(${z})`;
  }
};
