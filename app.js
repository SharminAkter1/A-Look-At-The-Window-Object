// window Method / Object / Properties

// window.console.log(124);

//Alert
// window.alert('Hello World');

//Prompt

// const input = prompt();
// alert(input);

// // confirm
// if(confirm('Are you sure')){
//   console.log('Yes');
// }
// else{
//   console.log('No');
// }

let val;

//Outter height and width
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll Points
val = window.scrollY;
val = window.scrollX;

//Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
// val = window.location.protocol;
val = window.location.href;
val = window.location.search;

// //Redirect 
// window.location.href = 'https://google.com';
// //Reload
// window.location.reload();

//History Object

// window.history.go();

//Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.language;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;


console.log(val);


