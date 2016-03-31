(function(){
  /* ---------------------------------- Local Variables ---------------------------------- */
  var service = new Tarefas();
  service.initialize().done(function () {
     console.log("Service initialized");
  });

   /* --------------------------------- Event Registration -------------------------------- */
  document.addEventListener('deviceready', function () {
  if (navigator.notification) { // Override default HTML alert with native dialog
      window.alert = function (message) {
          navigator.notification.alert(
              message,
              null,       // callback
              "Tarefas",
              'OK'
          );
      };
    }
  }, false);

  $('#teste').on('click', function() {
     alert("Employee Directory v3.4");
  });

  /* ---------------------------------- Local Functions ---------------------------------- */

}());
