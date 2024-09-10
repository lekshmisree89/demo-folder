function keydownAction(event) {
  event.preventDefault();
  console.log(event);
  document.querySelector('#key').textContent = event.key;
  document.querySelector('#code').textContent = event.code;
  document.querySelector('#status').textContent = `KEYDOWN Event`;
}

function keyupAction() {
  
  document.querySelector('#status').textContent = 'KEYUP Event';
}

document.addEventListener('keydown', keydownAction);
document.addEventListener('keyup', keyupAction);
