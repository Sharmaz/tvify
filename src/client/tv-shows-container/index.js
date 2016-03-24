import $ from 'jquery'
import socketio from 'socket.io-client'

let socket = socketio()
socket.emit('ping')
socket.on('pong', function () {
  console.log('PONG')
})

var $tvShowsContainer = $('#app-body').find('.tv-shows')

$tvShowsContainer.on('click', 'button.like', function (ev) {
  var $this = $(this)
  var $article = $this.closest('.tv-show')
  var id = $article.data('id') // data-id
  $.post('/api/vote/' + id, function () {
    var counter = $this.closest('article').find('.count')
    var content = counter.html()
    var count = Number(content)
    count = count + 1
    counter.html(count)
    $article.toggleClass('liked')
  })
})

export default $tvShowsContainer
