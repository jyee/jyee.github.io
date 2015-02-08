var db = new Firebase('https://radiant-fire-633.firebaseio.com/wije');
db.on('value', function(data) {
  if (eating = data.val()) {
    document.getElementById('eating').innerHTML = eating.eating;
  }
});
