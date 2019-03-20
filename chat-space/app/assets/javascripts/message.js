      function buildMessageHTML(message){
        if ( message.image ) {
          var html =
          `<asset_path src=${message.image} >`
          return html;
        } else {
          return html;
        };
      }
$('.js-form').on('submit', function(){
  e.preventDefault();
  var formData = new formData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(form_data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    $('form')[0].reset();
  })
  .fail(function(){
    alert('error');
  });
  return false;
});
