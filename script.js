function populateVoiceList() {
    var voices = speechSynthesis.getVoices();
    var voiceSelect = document.getElementById('voice-select');
    voiceSelect.innerHTML = '';
    voices.forEach(function(voice, i) {
        var option = document.createElement('option');
        option.textContent = voice.name + ' (' + voice.lang + ')';
        option.setAttribute('value', i);
        voiceSelect.appendChild(option);
    });
}


speechSynthesis.onvoiceschanged = function() {
    populateVoiceList();
};


function speak() {
    var text = document.getElementById("text-to-speech-input").value;
    var voiceSelect = document.getElementById("voice-select");
    var selectedVoiceIndex = voiceSelect.value;
    var voices = speechSynthesis.getVoices();

    if (selectedVoiceIndex !== "") {
        var selectedVoice = voices[selectedVoiceIndex];
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = selectedVoice;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Please select a voice");
    }
}