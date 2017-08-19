// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
console.log("Mein JavaScript")

var body = document.getElementsByTagName("body")[0];

window.addEventListener("DOMContentLoaded", function(){
  var foo = document.getElementsByClassName("idea")
  console.log(foo.length)
  for (i = 0; i <= foo.length; i++){
    if(i === 0){
      foo[i].classList.remove('hidden');
    }
  }
});
