var subtitles = {
    T_183455_video_opg1: {
		lang: "en",
		name: "English",
        tracks: [
		//from		To			Text
			T(TTime("00:00:00:01"), TTime("00:00:02:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese."),
			T(TTime("00:00:02:00"), TTime("00:00:03:30"), "Søndervig"),
			T(TTime("00:00:03:30"), TTime("00:00:05:15"), "Til stranden"),
			T(TTime("00:00:12:30"), TTime("00:00:18:15"), "Vinterbadefestival<br />Årets cooleste event En-ud-af-tøjet-oplevelse"),
			T(TTime("00:00:18:15"), TTime("00:00:22:00"), "Badevej - Søndervig Centret - Meny"),
			T(TTime("00:00:45:15"), TTime("00:00:51:00"), "En pivfrisk starter på det nye år"),
			T(TTime("00:01:33:15"), TTime("00:01:38:00"), "Vi forkæler dig med champagne, kransekage & østers når du kommer op af vandet"),
			T(TTime("00:01:57:15"), TTime("00:02:01:30"), "Vinterbadefestival<br />Tag springet d. 31/12 på stranden i Søndervig")
        ]
    },
	
	 T_183455_video_opg3: {
		lang: "en",
		name: "English",
        tracks: [
		//from		To			Text
			T(TTime("00:00:00:00"), TTime("00:00:03:00"), "Kun tekst, der er relevant for opgavebesvarelsen, er tekstet til talesyntese."),
			T(TTime("00:00:03:00"), TTime("00:00:05:15"), "Stormfulde højder"),
			T(TTime("00:00:05:15"), TTime("00:00:10:00"), "Emily Brontë - Stormfulde højder - Med forord af Connie Bock"),
			T(TTime("00:00:10:00"), TTime("00:00:13:30"), "Emmilie de Forest<br />Musiker"),
			T(TTime("00:00:46:00"), TTime("00:00:48:15"), "Kærlighed og had"),
			T(TTime("00:01:03:15"), TTime("00:01:07:00"), "Ord i mørket")
			
        ]
    }
};

/**
 * Takes up to 4 values 
 * 4 values: [0]hours[1]minutes[2]seconds[3]frames
 * 3 values: [0]minutes[1]seconds[2]frames
 * 2 values: [0]seconds[1]frames
 * 1 value : [0]frames
 */
function ATime() {
	var frames = 0;
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	if(arguments.length == 1) {
		frames = (arguments[0]*1)/24;
	}
	else if(arguments.length == 2) {
		frames = (arguments[1]*1)/24;
		seconds = arguments[0]*1;
	}
	else if(arguments.length == 3) {
		frames = (arguments[2]*1)/24;
		seconds = arguments[1]*1;
		minutes = (arguments[0]*1)*60;
	}
	else if(arguments.length == 4) {
		frames = (arguments[3]*1)/24;
		seconds = arguments[2]*1;
		minutes = (arguments[1]*1)*60;
		hours = (arguments[0]*1)*3600;
	}
	else {
		return 0;
	}
	return hours + minutes + seconds + frames;
}

/**
 * If value is undefined returns 0
 * @param {*} value 
 */
function UndefinedToZero(value) {
	if(typeof value === "undefined") {
		return 0;
	}
	return value;
}

/**
 * Convert input to seconds
 * @param {numeric} frames Not Required
 * @param {numeric} seconds Not Required
 * @param {numeric} minutes Not Required
 * @param {numeric} hours Not Required
 */
function _Time(frames, seconds, minutes, hours) {
	frames = UndefinedToZero(frames) / 24;
	seconds = UndefinedToZero(seconds);
	minutes = UndefinedToZero(minutes) * 60;
	hours = UndefinedToZero(hours) * 3600;
	return hours + minutes + seconds + frames;
}

/**
 * Convert string input "00:00:00:00" to seconds
 * @param {string} value Required
 */
function TTime(value) {
	if(typeof value === "undefined") {
		value = "00:00:00:00";
	}
	var split = value.split(":");
	var frames = (split[3]*1)/24;
	var seconds = split[2]*1;
	var minutes = (split[1]*1)*60;
	var hours = (split[0]*1)*3600;
	var output = hours + minutes + seconds + frames;
	return output;
}

function T(start, end, text) {
	return {
		start: start,
		end: end,
		text: text
	};
}