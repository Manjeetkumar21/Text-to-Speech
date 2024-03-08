let speech = new SpeechSynthesisUtterance();
let button = document.querySelector('button')

let voices = [];
let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged =  function() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i)=>(
        voiceSelect.options[i] = new Option(voice.name, i)
    ))
}

window.speechSynthesis.onvoiceschanged();

voiceSelect.addEventListener('change', function(){
    speech.voice = voices[voiceSelect.value]
})



button.addEventListener('click', function(){
    speech.text = document.querySelector('textarea').value
    window.speechSynthesis.speak(speech);
})