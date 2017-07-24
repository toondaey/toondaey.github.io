function Timer(element, start_btn, end_btn)
{
	'use strict';

	var original = '00:00:00',
		newTest = true,
		timer = null,
		initial = moment({h:0, m:0, s:0});

	this.startTimer = function (element) {
		if (! this.check(element))
		{
			newTest = confirm('Do you want to start a new test?');
			element.innerHTML = original;
			initial = moment({h:0, m:0, s:0});
			clearInterval(timer);
		}

		this.time(element);
	};

	this.check = function(element) {
		return element.innerHTML.trim() == original;
	};

	this.time = function(element) {
		if (this.check(element) || newTest)
		{
			newTest = false;
			timer = setInterval(function(){
				initial = initial.utcOffset('+01:00').add(1, 's');
				element.innerHTML = initial.format('HH:mm:ss');
						// inttial = initial.utcOffset('+01:00').add(4, 'ms').format('HH:mm:ss SSSS');
			}, 1000);
		}
	};

	this.stopTimer = function (element){
		clearInterval(timer);

		initial = moment({h:0, m:0, s:0});
	};
}


var displayTimer = document.querySelector('.tm'),
	start_btn = document.querySelector('.st'),
	end_btn = document.querySelector('.ed'),
	timer = new Timer();

start_btn.onclick = function() {timer.startTimer(displayTimer);};
end_btn.onclick = function () {timer.stopTimer(displayTimer);};

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

navigator.getUserMedia(
	{
  		video : {
			mandatory: {
				chromeMediaSource: 'desktop',
				// chromeMediaSourceId: 1,
				minWidth: 1280,
				maxWidth: 1280,
				minHeight: 720,
				maxHeight: 720
			}
		}
	},
	function(stream) {
		var video = document.querySelector('video');
		// var audio = document.querySelector('audio');

		video.src = URL.createObjectURL(stream);
		// audio.src = URL.createObjectURL(stream);
	},
	function(err) {}
);



var url = document.getElementById('url');
url.onkeyup = function(e) {
	if(e.which === 13)
	{
		var iframe = document.querySelector('iframe');
		iframe.src = this.value;
	}
};

// var constraints = { 
//   audio: false, // mandatory. 
//   video: {'mandatory': 
//           {'chromeMediaSource':'screen'} 
//          } 
// };
// var successCallback = function(stream) { 
//   // Do something with the stream. 
//   // Attach to WebRTC connections 
//   // Record via MediaRecorder 
// }; 
// var errorCallback = function() { 
//   // We don't have access to the API 
// }; 
// navigator.getUserMedia(constraints, successCallback, errorCallback);

// (function() { 
//   // Download locally 
//   function download(blob) { 
//     var url = URL.createObjectURL(blob); 
//     var a = document.createElement('a'); 
//     a.style.display = 'none'; 
//     a.href = url; 
//     a.download = 'test.webm'; 
//     document.body.appendChild(a); 
//     a.click(); 
//     setTimeout(function() { 
//       document.body.removeChild(a); 
//       window.URL.revokeObjectURL(url); 
//     }, 100); 
//   }
//   var errorCallback = function(err) { 
//     // We don't have access to the API console.log(err) 
//   };
//   navigator.getUserMedia(
//   	{
//   		video : {
// 			mandatory: {
// 				chromeMediaSource: 'desktop',
// 				chromeMediaSourceId: sources[i].id,
// 				minWidth: 1280,
// 				maxWidth: 1280,
// 				minHeight: 720,
// 				maxHeight: 720
// 			}
// 		}
// 	},
//   	function (stream) { 
//   		console.log(stream);
// 	    // Set up the recorder 
// 	    var blobs = []; 
// 	    var recorder = new MediaRecorder(stream, {
// 	      mimeType: 'video/webm; codecs=vp9'
// 	    }); 
// 	    recorder.ondataavailable = function(e) {
// 	    		console.log(e);
// 	    	if (e.data && e.data.size > 0) 
// 	    	{
// 	    		blobs.push(e.data);
// 	    	}
// 	    };
// 	    recorder.onstop = function(e) {download(new Blob(blobs, {type: 'video/webm'}));};
// 	    // Record for 10 seconds. 
// 	    setTimeout(function(){recorder.stop();}, 10000); 
// 	    // Start recording. 
// 	    recorder.start(10); // collect 10ms chunks of data 
// 	  },
//   	errorCallback
//   );
// })();