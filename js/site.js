function playSound(dir){
    const audio = new Audio(dir)
    audio.play()
}

function alternateTheme(){
    $("html").toggleClass("dark");
    alternateTextTheme()
}
function alternateTextTheme(){
    if($("#texto-mudar-tema").html() == "Desligar modo escuro.") {
        playSound("../audios/on.mp3")
        $("#texto-mudar-tema").html("Ligar modo escuro.")
    }
    else {
        $("#texto-mudar-tema").html("Desligar modo escuro.")
        playSound("../audios/off.mp3")
    }
}

function showDropdown(){
    $("#dropdown").toggleClass("hidden")
}

$(document).ready(function () {
    $("#change_theme").click(() => alternateTheme())
    $("#menu").click(() => showDropdown())
});