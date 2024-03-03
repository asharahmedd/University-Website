window.onload = function () {
    loadfirstmessage();
    setInterval(displaymessage, 3000);

    var flag = 0;
    var video = document.querySelector("#hello");
    var src1 = document.querySelector("#hello1");
    var src2 = document.querySelector("#hello2");

    video.addEventListener('ended', function () {
        if (flag == 1) {
            src1.setAttribute('src', 'https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4');
            src2.setAttribute('src', "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mkv");
            flag = 0;
        } else if (flag == 0) {
            src1.setAttribute('src', "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4");
            src2.setAttribute('src', "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mkv");
            flag = 1;
        }
        video.load();
        video.play();
    });
};
const array = [
    "Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!",
    "Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!",
    "Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!"
];
function loadfirstmessage() {


    index = Math.floor(Math.random() * array.length);//global variable index since var is not used 
    var message = document.querySelector('#msg');
    message.innerHTML = array[index];
}

function displaymessage() {
    index++;
    if (index >= array.length) {
        index = 0;
    }
    var message = document.querySelector('#msg');
    message.innerHTML = array[index];
}

