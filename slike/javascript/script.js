var imgList = ['zeleznickiMost', 'knezMihajlova', 'bgNaVodi', 'bgPanorama', 'blok23', 'NoviBeograd'];
var index = 0;
document.getElementById('pictures').innerHTML = '<img style="width:auto; height:50vh;" src="images/' + imgList[index] + '.jpg">'

function firstpicture() {
    index = 0;
    document.getElementById('pictures').innerHTML = '<img style="width:auto; height:50vh;" src="images/' + imgList[index] + '.jpg">'
}
function previouspicture() {
    if (index == 0) {
        index = 4;
    } else {
        index--;
    }
    document.getElementById('pictures').innerHTML = '<img style="width:auto; height:50vh;" src="images/' + imgList[index] + '.jpg">';
}
function nextpicture() {
    if (index == 4) {
        index = 0;
    } else {
        index++;
    }
    document.getElementById('pictures').innerHTML = '<img style="width:auto; height:50vh;" src="images/' + imgList[index] + '.jpg">'
}

document.getElementById('btnStart').addEventListener('click', firstpicture);
document.getElementById('btnPrevious').addEventListener('click', previouspicture);
document.getElementById('btnNext').addEventListener('click', nextpicture);

