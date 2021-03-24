$(document).ready(function(){
	$('.slider').slick({
    arrows: true /*спрятать стрелочки*/,
    adaptiveHeight: true /*адаптивная высота */,
    slidesToShow: 3,/*колличество слайдов при показе*/
    slidesToScroll: 1, /*колличество слайдов, которые будт пролистываться*/
    speed: 4000, /*скорость пролистывания */
    infinit: true, /*показ слайдов по кругу бесконечно*/
    autoplay: true, /*автоматическое  воспроизведение*/
    autoplaySpeed: 2000,/*скорость пролистывания */
    pauseOnFocus: true, /* пауза при клике на слайдер*/
    pauseOnHover: true, /* при наведении на слайдер прокрутка будет оснавливаться*/
    pauseOnDotsHover: true, /*пауза при наведении на точки*/
    draggable: true, /*прокрутка мышкой на ПК*/
    swipe: true, /*прокрутка  для тач-скринов*/
    touchThreshold: 1, /*момент срабатывания прокрутки при свайпе, 
    значение  зависит от колличества  слайдов*/
    touchMove: true, /*значение  разрешает перетаскивать слайды пальцем*/
    centerMode: true, /*размещает главный слайдер по центру*/
    variableWidth: true, /*запрещает слайдерам  выбирать самм себе ширину,
    слайды будут той ширины, сколько в них контента. Благодаря этому можно
    вывести на  экран несколько слайдов  сразу*/
    rows: 1, /*колличество строй в слайде*/
    slidesPerRow:1, /*колличество слайдов в ряду*/
    vertical: false, /*активирует вертикальный слайдер в связке с display: block*/
    verticalSwiping: false /*вертикальный свайп для вертикального слайдера*/
  })
});
$(document).ready(function(){
  $(".slider-block").slick({
    dots: true,
    autoplay: false,
    infinite : false,
    arrows   : false,
    slidesToShow : 3,
    slidesToScroll : 3,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          vertical: true,
          verticalSwiping: true,
          slidesToScroll: 3,
          rows: 1
        }
      }]
  });
});

  
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordion-menu'), false);
})


$(function() {
  var Acc = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var block = this.el.find('.block');
    block.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  Acc.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    }
  }
  var accordion = new Acc($('.header__nav--320'), false);
})

$(function() {
  var Acc = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var block = this.el.find('.footer__block');
    block.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  Acc.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.footer__menu').not($next).slideUp().parent().removeClass('open');
    }
  }
  var accordion = new Acc($('.footer__ul'), false);
})
