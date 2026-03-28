# Projects Solution-->

## Project-1 (color-changer)-->

```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    const color = e.target.getAttribute('id');
    switch(color){
      case 'grey': body.style.backgroundColor="grey";break;
      case 'white': body.style.backgroundColor="white";break;
      case 'blue': body.style.backgroundColor="blue";break;
      case 'yellow': body.style.backgroundColor="yellow";break;
      default: body.style.backgroundColor="white";
    }

  })
})

```