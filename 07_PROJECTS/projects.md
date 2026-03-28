# Projects Solution-->

## Project-1 (color-changer)-->

```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    const color = e.target.getAttribute('id');
    switch(color){
      case 'grey': body.style.backgroundColor=color;break;
      case 'white': body.style.backgroundColor=color;break;
      case 'blue': body.style.backgroundColor="blue";break;
      case 'yellow': body.style.backgroundColor="yellow";break;
      default: body.style.backgroundColor="white";
    }

  })
})

```


## Project-2 ()


```

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```