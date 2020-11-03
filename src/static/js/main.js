$(document).ready(function () {
  var validName = false;
  var validCompany = false;
  var validPhone = false;
  var validEmail = false;
  var validMessage = false;

  $("form").submit(function (event) {
    event.preventDefault();

    var name = $(".contact-us__name").val();
    var company = $(".contact-us__company").val();
    var phone = $(".contact-us__phone").val();
    var email = $(".contact-us__email").val();
    var message = $(".contact-us__message").val();

    if (name == "") {
      $(".contact-us__name").addClass('contact-us__error')
    } else {
      $(".contact-us__name").removeClass('contact-us__error')
      validName = true
    }

    if (company == "") {
      $(".contact-us__company").addClass('contact-us__error')
    } else {
      $(".contact-us__company").removeClass('contact-us__error')
      validCompany = true
    }

    if (phone == "") {
      $(".contact-us__phone").addClass('contact-us__error')
    } else {
      $(".contact-us__phone").removeClass('contact-us__error')
      validPhone = true
    }

    if (email == "") {
      $(".contact-us__email").addClass('contact-us__error')
    } else {
      $(".contact-us__email").removeClass('contact-us__error')
      validEmail = true
    }

    if (message == "") {
      $(".contact-us__message").addClass('contact-us__error')
    } else {
      $(".contact-us__message").removeClass('contact-us__error')
      validMessage = true
    }

    if (validName && validCompany && validPhone && validEmail && validMessage) {
      $("form").unbind('submit').submit();
    }
  })

  $('.burger-menu').click(function (event) {
    $('.burger-menu').toggleClass('active')
    $('.burger-list').toggleClass('active')
  })

  $('.companies').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});