$('.category').on('mouseover',function(){
   $(this).find('.category-child').addClass('active')
});

$('.category').on('mouseleave',function(){
   $(this).find('.category-child').removeClass('active')
});


