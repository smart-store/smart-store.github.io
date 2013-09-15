$(function(){
  
  $('.autocomplete.selector').each(function(){
    var container = $(this);
    var url = container.attr('ajax-url');
    $('input:text', container).autocomplete(url).result(function(event, data, formatted) {
      if(data) {
        container.val(data[1]);
        $('input.selectorValue', container).val(data[1]);
        container.trigger('selector_change');
      }
    });
  });
  $('input[type=date]').datepicker();
});
