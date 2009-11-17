(function($) {
  $.fn.autosubmit = function(waitTime) {
    $(this).each(function(waitTime) {
      var t = null;
      $(this).change(function() {
        if (null != t) { clearTimeout(t); }
        t = setTimeout(function() {
          $(this).unbind('change').submit();
        }, waitTime);
      });
    });
  };
})(jQuery);