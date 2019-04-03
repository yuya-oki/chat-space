$(function() {
  function buildMessageHTML(message){
     var imagehtml = message.image == null ? "" : `<img src="${message.image}" class="lower-message__image">`
    var html = `<div class=message>
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                      ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                      ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                      ${message.content}
                      </p>
                      ${imagehtml}
                    </div>
                  </div> `
  }

  $('.js-form').on('submit', function(){
      e.preventDefault();
      var formData = new FormData(this);
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
        $('.messages').append(html)
        $('#message_content').val('')
        $('.message').animate({scrollTop: $('.message')[0].scrollHeight}, 1500);
      })
        .fail(function(){
          alert('error');
        })
      })
  function scroll() {
    $('.message').animate({scrollTop: $('.message')[0].scrollHeight}, 'fast')
  }
  var reloadMessages = function() {
    last_message_id = $('.messages:last').data('id');
    $.ajax({
      url: location.href.json,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      json.messages.forEach(function(message) {
        if (message.id > last_message_id) {
          insertHTML += buildMessageHTML(message);
        }
      });
      $('messages').append(insertHTML);
    scroll()
    })
    .fail(function() {
      alert('自動更新に失敗しました');
    });
  };
  setInterval(reloadMessages, 10000 );
});

