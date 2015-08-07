let speakNow = () => {
  let theInput = document.getElementById('speak-input').value;
  speak(theInput, {
    pitch: 440
  });
}
