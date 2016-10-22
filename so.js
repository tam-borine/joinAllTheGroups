(function(window) {
  var groups = window.document.getElementsByClassName(".groupCard tileGrid-tile loading ");
  alert("i work");
  for (var i = 0; i < groups.length; i++) {
      console.log(groups[i]);
    }
  console.log(groups);
})(window);
