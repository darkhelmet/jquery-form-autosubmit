(function($) {
  $.fn.autosubmit = function(settings) {
    settings = $.extend({
      waitTime: 2000
    }, settings);
    return $(this).each(function() {
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
        var form = this;
        t = setTimeout(function() {
          $(form).submit();
        }, settings.waitTime);
      });
    });
  };
})(jQuery);