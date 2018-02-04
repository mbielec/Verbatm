
var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
var result;

var speech_to_text = new SpeechToTextV1 ({
  username: 'e60c7d34-646e-4dff-9b71-d415f396babf',
  password: 'HPWOHtqxtQMJ'
});

function test(fileName, expected) {

    var files = ['audio-file1.flac']
    for (var file in files) {
        var params = {
            audio: fs.createReadStream(files[file]),
            content_type: 'audio/flac',
            timestamps: false,
            keywords: '',
            keywords_threshold: 0.5,
        };
    };
}

/*var params = {
  'session_id': '{session_id'},
  audio: fs.createReadStream('audio-file.flac'),
  'content_type': 'audio/flac',
  'max_alternatives': 3,
  'word_confidence': true,
  keywords: ['colorado', 'tornado', 'tornadoes'],
  'keywords_threshold': 0.5
};

speech_to_text.recognize(params, function(error, transcript) {
  if (error)
    console.log('Error:', error);
  else
    console.log(JSON.stringify(transcript, null, 2));
});

"results": [
    {
      "keywords_result": {
        "Apple": [
          {
            "normalized_text": "Apple",
            "start_time": 4.94,
            "confidence": 0.913,
            "end_time": 5.62
          }
        ]
}



