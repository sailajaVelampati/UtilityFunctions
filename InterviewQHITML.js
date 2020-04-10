/*Semantic structing?
A semantic element clearly describes its meaning to both the browser and the developer.
<article>,<aside>,<details>,<figcaption>,<figure>,<footer>,<header>,<main>,<mark>,<nav>,<section>,<summary>,<time>

accesablity

geolocations

localstorage
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname"); or localStorage.lastname;
canvas

Latest tags: 
<mark> highlights the text with background color.
<picture>
The <embed> tag defines a container for an external application or interactive content 
The <track> tag specifies text tracks for media elements (<audio> and <video>).
This element is used to specify subtitles, caption files or other files containing text, 
that should be visible when the media is playing.

In an audio if the one src is not working how to fix it?
html 5 have <source> we can pass multiple sources to the audio, video, picture tags.

html AIPs like geolocations, drag ans drop, web storage, 

What is iframe ?
An inline frame is used to embed another document within the current HTML document.

What is a Web Worker?
When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.
A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page.
You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.
postMessage() - posts message back to the browser.
onmessage(event) - this is the vent listener event has data of web workers.
terminate() - will terminate the event listener.
if the webworker variavle is set to undefined it can be reused.
Since web workers are in external files, they do not have access to the following JavaScript objects:
>The window object
>The document object
>The parent object

What is web Sockets?
The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the 
user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to 
poll the server for a reply.

what is Server-Sent Events - One Way Messaging?
A server-sent event is when a web page automatically gets updates from a server.
This was also possible before, but the web page would have to ask if any updates were available. With server-sent events, 
the updates come automatically.
Examples: Facebook/Twitter updates, stock price updates, news feeds, sport results, etc.
var source = new EventSource("demo_sse.php");
source.onmessage = function(event) {
  document.getElementById("result").innerHTML += event.data + "<br>";
};
Server-Side Code Example:
For the example above to work, you need a server capable of sending data updates (like PHP or ASP).
The server-side event stream syntax is simple. Set the "Content-Type" header to "text/event-stream".
Now you can start sending event streams.
onopen	When a connection to the server is opened
onmessage	When a message is received
onerror	When an error occurs


*/
