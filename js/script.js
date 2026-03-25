$(document).ready(function(){

    // ========== SMOOTH SCROLLING ==========
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = $(this).attr('href');
        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 80
            }, 800, 'easeInOutQuad');
        }
    });

    // ========== ACTIVE NAV LINK ==========
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        
        $('#nav a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            
            if (refElement.length && refElement.offset().top - 100 <= scrollPos && refElement.offset().top + refElement.height() - 100 > scrollPos) {
                $('#nav a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    });

    // ========== CONTACT FORM ==========
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();
        
        // Validation
        if (!name || !email || !message) {
            showMessage('Please fill in all fields.', 'danger');
            return;
        }
        
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showMessage('Please enter a valid email address.', 'danger');
            return;
        }
        
        // Simulate sending
        var submitBtn = $(this).find('button[type="submit"]');
        var originalText = submitBtn.text();
        
        submitBtn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm me-2"></span>Sending...');
        
        setTimeout(function() {
            showMessage('Thanks for reaching out! I\'ll get back to you soon.', 'success');
            $('#contactForm')[0].reset();
            submitBtn.prop('disabled', false).text(originalText);
        }, 1500);
    });

    function showMessage(message, type) {
        var messageBox = $('#formMessage');
        messageBox.removeClass('alert-success alert-danger').addClass('alert-' + type);
        messageBox.text(message).slideDown();
        
        setTimeout(function() {
            messageBox.slideUp();
        }, 4000);
    }

    // ========== NAVBAR SHADOW ON SCROLL ==========
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('box-shadow', '0 2px 8px rgba(0,0,0,0.1)');
        } else {
            $('.navbar').css('box-shadow', '0 1px 3px rgba(0,0,0,0.05)');
        }
    });

});
