(function($) {
  $.fn.autosubmit = function(waitTime) {
    $(this).each(function() {
      var t = null;
      $(this).submit(function() {
        $.ajax({
          data: $.param($(this).serializeArray()),
          dataType: 'script',
          type: 'post',
          url: $(this).attr('action')
        });
        return false;
      }).change(function() {
        if (null != t) { clearTimeout(t); }
        form = this;
        t = setTimeout(function() {
          $(form).submit();
        }, waitTime);
      });
    });
  };
})(jQuery);