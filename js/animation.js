$(document).ready(function() {

    $('#tweet-controls').hide();

    $('.tweet-compose').on('click', function() {
      $('#tweet-controls').show();
        $(this).css('height', '200%');
        });
    var counter = $('#char-count').html();


    $('.tweet-compose').keydown(function()  {
        $('#char-count').html(counter -= 1);
        if (counter <= 10) {
            $('#char-count').css('color', 'red')
        }
        if (counter <= 0) {
            $('.button').attr('disabled', 'disabled');
        }
    });

    function addNewTweet() {
        var newTweetText = $('.tweet-compose').val();

        var newTweet = '<div class="tweet">' +
            '<div class="content">' +
            '<img class="avatar" src="img/alagoon.jpg">' +
            '<strong class="fullname">Testy McTesterson  </strong>' +
            '<span class="username">@15minlecturesFTL</span>' +
            '<p class ="tweet-text">' + newTweetText + '</p>' +
                // '<p class="tweet-text">this text literally shows up</p>'
            '</div></div>';

        return newTweet;
    }

    $('.button').on('click', function () {
        $('#stream').prepend(addNewTweet);
    });






});