$(function() {

  $('#eat').click( function() {
    var db = new Firebase('https://radiant-fire-633.firebaseio.com/wije');

    db.authWithPassword({
      "email": $('#email').val(),
      "password": $('#password').val()
    },
    function(error, authData) {
      if (error) {
        $('#status').html(error.message).css('color', '#F00');
      }
      else {
        db.set({
          eating: $('#eating').val()
        },
        function(error) {
          if (error) {
            $('#status').html(error.message).css('color', '#F00');
          }
          else {
            $('#status').html('jason is eating ' + $('#eating').val()).css('color', '#0F0');
          }
        });
        db.unauth();
      }
    });
  });

});
