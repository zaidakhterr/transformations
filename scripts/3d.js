const display = () => {
  let x = document.getElementById('translate-x').value;
  let y = document.getElementById('translate-y').value;
  let div = document.getElementById('translate-div');
  console.log(x);

  div.style.transform = `translate(${x})`;

  console.log(x);
  console.log(y);
};
