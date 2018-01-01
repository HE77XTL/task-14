$('.layout').find('.select') .on('click',function(){
	var $this = $(this);
	console.log($this.index());
	$this.siblings().removeClass('active');
	$this.addClass('active')
	// console.log($this.index())
	// console.log($('.tab-ct').eq($this.index()))
	$('.layout').find('.tab-ct').removeClass('show')
	$('.layout').find('.tab-ct').eq($this.index()).addClass('show')

	// $('.tab-ct').removeClass('show')
	// $('.tab-ct').eq($this.index()).addClass('show')
})

$('.layout-2').find('.select') .on('click',function(){
	var $this = $(this);
	console.log($this.index());
	$this.siblings().removeClass('active');
	$this.addClass('active')
	// console.log($this.index())
	// console.log($('.tab-ct').eq($this.index()))
	$('.layout-2').find('.tab-ct').removeClass('show')
	$('.layout-2').find('.tab-ct').eq($this.index()).addClass('show')

	// $('.tab-ct').removeClass('show')
	// $('.tab-ct').eq($this.index()).addClass('show')
})



$('.tab-ct').find('li').on('mouseover',function(){
	// console.log($(this));
	$(this).find('.cover').addClass('active')
})



$('.tab-ct').find('li').on('mouseleave',function(){
	// console.log($(this));
    $(this).find('.cover').removeClass('active')
})


