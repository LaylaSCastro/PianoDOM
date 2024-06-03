const keys = document.querySelectorAll(".key");

function getKeyCode (event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"
  
  if (isKeyboard) {
    keyCode = event.keyCode
  }
    else {
      keyCode = event.target.dataset.key;
    }

  return keyCode
}

function playAudio(keyCodeAudio) {
  const audio = document.querySelector(`audio[data-key="${keyCodeAudio}"]`)

  audio.currentTime = 0

  audio.play()
}

function addPlayingClass(key){
  key.classList.add('playing')
}

function playNote(event) {
  let keyCodeAudio = getKeyCode(event)

  const key = document.querySelector(`[data-key="${keyCodeAudio}"]`)

  const isKeyExists = key
  
  if (!isKeyExists) {
    return
  }

  addPlayingClass(key)
  playAudio(keyCodeAudio)
}

function removePlayingClass(event) {
  event.target.classList.remove("playing")
}

keys.forEach(function(key) {
  key.addEventListener("click", playNote)
  key.addEventListener("transitionend", removePlayingClass)
})



window.addEventListener("keydown", playNote)