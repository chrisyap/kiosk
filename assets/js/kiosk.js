$(".floating-label").each(function () {
  var group = $(this);
  var field = group.find('.form-control');
  if (field.val()){
    group.addClass('float');
  }
  field.focus(function () {
    group.addClass('float');
    group.addClass('help');
  }).blur(function() {
    group.removeClass('help');
    if (!field.val()) {
      group.removeClass('float');
    }
  })
});

$('#language-selector').modal('show');

$('.radio').on('click','.btn',function(){
  var radio = $(this).parents('.radio');
  var btn = $(this);
  if (btn.hasClass('active')) {

  } else {
    radio.find('.btn').removeClass('active');
    btn.addClass('active');
    radio.find('.btn i').toggle();
  }
})

$('.checkbox').on('click','.btn',function(){
  var radio = $(this).parents('.checkbox');
  var btn = $(this);
  btn.find('i').toggle();
  btn.toggleClass('active');
})

$('.modal').scroll(function(){
  var scrollAmount = $('.modal').scrollTop();
  if (scrollAmount >= 55) {
    $('#form').find('[data-spy=affix]').addClass('affix').removeClass('affix-top');
  } else {
    $('#form').find('[data-spy=affix]').removeClass('affix').addClass('affix-top');
  }
})

$('.btnNext').click(function(){
  $('.nav > .active').next('li').find('a').trigger('click');
});

$('.btnPrevious').click(function(){
  $('.nav > .active').prev('li').find('a').trigger('click');
});

$('.btn-nav').on('click',function(){
  if ($('.modal').hasClass('in')){
    $('#form').addClass('slideOutDown animated');
    setTimeout(function(){
      $('#form').removeClass('slideOutDown').removeClass('animated');
    },1000);
    setTimeout(function(){
      $('#form').modal('hide');
    },500)
    $('.backtotop').removeClass('affix').addClass('affix-top');
  } else {
    alert('no modal');
  }
})

$('#form').on('show.bs.modal', function(e){
  $('#form').addClass('slideInUp animated');
  setTimeout(function(){
    $('#form').removeClass('slideInUp').removeClass('animated');
  },1200)
})

$('#language-selector').on('click', '.btn-english', function(e){
  $('#language-selector').addClass('slideOutDown animated');
  setTimeout(function(){
    $('#language-selector').removeClass('slideOutDown').removeClass('animated');
  },1200)
})

$('.code-input').on('click', function(){
  var time = 500;
  $('.codes .code-input').each(function(){
    var ttt = $(this);
    setTimeout(function(){
      ttt.removeClass('hide-content');
    },time);
    time += 500;
  })
})

$(function() {
  $('a.anchor').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

if ('ontouchstart' in window) {
    $(document).on('focus', 'textarea,input,select', function() {
        $('.modal .header').css('position', 'absolute');
    }).on('blur', 'textarea,input,select', function() {
        $('.modal .header').css('position', '');
    });
}
