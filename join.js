(function(window) {
  var groups = document.getElementsByClassName(".groupCard tileGrid-tile loading ");
  var groupContents = [];
  groups.forEach(function getContents(group){
    groupContents.push(group.innerHTML);
  });

  if (groupContents >= 0) { alert(groupContents[0]) ; alert(groupContents[1])};
})(window);
