/*chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
})*/
var youtube_tabs = []
var tab_player = document.getElementsByClassName("ytp-play-button")[0];
if(tab_player){
	youtube_tabs.push(tab_player);
}
console.log("Hello");
console.log(youtube_tabs.length);
