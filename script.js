
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
 
  $("#timepicker").timepicker({
    timeFormat: 'h:mm p',
    interval: 30,
    minTime: '10:00am',
    maxTime: '8:00pm',
    defaultTime: '11',
    startTime: '08:00',
    dynamic: true,
    dropdown: true,
    scrollbar: true
});