      function buildMessageHTML(message){
        if ( message.image ) {
          var html =
          `<div class="message" data-message-id=${message.id}>
            <div class="upper-message">
              <div class="upper-message__user-name>
                ${message.user_name}
              </div>
              <div class="upper-message__data">
                ${message.data}
              </div>
            </div>
            <div class="lower-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
            <asset_path src=${message.image} >
          </div>`
          return html;
        } else {
          var html =
          `<div class="message" data-message-id=${message.id}>
            <div class="upper-message">
              <div class="upper-message__user-name">
                ${message.user_name}
              </div>
              <div class="upper-message__data">
                ${message.user_name}
              </div>
            </div>
            <div class="lower-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
          </div>`
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
