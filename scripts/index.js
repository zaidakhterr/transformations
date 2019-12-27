const prevent = type => {
  let btn = document.getElementById(`${type}-btn`);
  btn.addEventListener('click', e => {
    console.log('**************', e);
    e.preventDefault();
  });
};

prevent('scale');
prevent('translate');
prevent('skew');
prevent('rotate');
// prevent('reflect');
