$(function () {

    $('.contact-form').validator();

    $('.contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {

            var url = "https://mydbikesmailer.herokuapp.com/send-email";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    window.location = "http://www.mydbikes.com";
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable">' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('.contact-form').find('.messages').html(alertBox);
                        $('.contact-form')[0].reset();
                    }
                }
            });

            alert("Thank you ! We have received your message!");
            $('.contact-form').reset();
            location.reload();
            return false;
        }
    })
});