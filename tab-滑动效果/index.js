$('.nav-select').on('click',function(){
	var $this = $(this);
	$this.siblings().removeClass('nav-active')
	$this.addClass('nav-active')
	console.log($this.index())
	var ctWidth = $('.ct-select').width()+2;
	console.log(ctWidth)
	var moveDistance = $this.index()*ctWidth
	$('#ct-panel').animate({left: -moveDistance})
})