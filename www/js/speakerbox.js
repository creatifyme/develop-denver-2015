function speakDamnit() {
  var inpert = document.getElementById('speak-input').value;
  speak(inpert, {
  	pitch: 440
  });
}
