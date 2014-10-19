/**
 * Created by Jason on 10/18/2014.
 */

$(document).ready(function() {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    var sources = [];

    var bufferLoader = new BufferLoader(
        audioCtx,
        [
            'audio/sfx_00.wav',
            'audio/sfx_01.wav',
            'audio/sfx_02.wav',
            'audio/sfx_03.wav',
            'audio/sfx_04.wav',
            'audio/sfx_05.wav',
            'audio/sfx_06.wav',
            'audio/sfx_07.wav',
            'audio/sfx_08.wav'
        ],
        finishedLoading
    );

    bufferLoader.load();

    function finishedLoading(bufferList) {
        for (var i=0; i<bufferList.length; i++) {
            sources[i] = audioCtx.createBufferSource();
            sources[i].buffer = bufferList[i];
            sources[i].connect(audioCtx.destination);
        }
    }

    $('#button0').click(function() {
        playSound(0);
    });

    $('#button1').click(function() {
        playSound(4);
    });

    function playSound(index) {
        sources[index] = audioCtx.createBufferSource();
        sources[index].buffer = bufferLoader.bufferList[index];
        sources[index].connect(audioCtx.destination);
        sources[index].start(audioCtx.currentTime);
    }

});


