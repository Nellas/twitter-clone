$(document).ready(function() {

    $('#tweet-controls').hide();

    $('.tweet-compose').on('click', function() {
      $('#tweet-controls').show();
        $(this).css('height', '200%');
        });

    var counter = $('#char-count').html();


    $('.tweet-compose').keydown(function()  {
        $('#char-count').html(counter = 140 - $('textarea').val().length);
        if (counter <= 10) {
            $('#char-count').css('color', 'red');
        } else {
            $('#char-count').css('color', '#999');
        }
        if (counter <= 0) {
            $('.button').attr('disabled', true);
            $('#char-count').html(counter = 0);
        } else if (counter > 0) {
            $('.button').removeAttr('disabled');
        }
    });

    function addNewTweet() {
        var newTweetText = $('.tweet-compose').val();

        var newTweet = '<div class="tweet">' +
            '<div class="content">' +
            '<img class="avatar" src="img/alagoon.jpg">' +
            '<strong class="fullname">Franky Noprep</strong>' +
            '<span class="username">@15minlecturesFTL</span>' +
            '<p class ="tweet-text">' + newTweetText + '</p>' +
            '</div></div>';

        return newTweet;
    }

    $('.button').on('click', function () {
        $('#stream').prepend(addNewTweet);
    });

    $('.tweet-actions').hide();

    $('.tweet').hover(function() {
        $('.tweet-actions', this).show();
    }, function() {
        $('.tweet-actions', this).hide();
    });

    $('.stats').hide();

    $('.tweet').click(function() {
        $('.stats', this).slideToggle('fast');
        })


});