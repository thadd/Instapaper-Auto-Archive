if (window.top === window) {
  $('#bookmark_list .titleRow a').click(function() {
      var url = $(this).attr('href');
      $(this).parent().siblings('.cornerControls').find('.archiveButton').click();
      setTimeout(function() {document.location = url;}, 1000);
      return false;
    });
}
