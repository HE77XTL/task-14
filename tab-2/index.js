$('.layout').find('.select') .on('click',function(){
	var $this = $(this);
	// console.log($this.index());
	$this.siblings().removeClass('active');
	$this.addClass('active')
	// console.log($this.index())
	// console.log($('.tab-ct').eq($this.index()))
	$('.layout').find('.tab-ct').removeClass('show')
	$('.layout').find('.tab-ct').eq($this.index()).addClass('show')
})


$('.tab-ct').find('ul').on('mouseover','li',function(){
	// console.log($(this));
	$(this).find('.cover').addClass('active')
})
$('.tab-ct').find('ul').on('mouseleave','li',function(){
	// console.log($(this));
    $(this).find('.cover').removeClass('active')
})

//添加

$('.btn').on('click',function(){
	var $this = $(this)

	$.each(products,function(index,prod){
		// console.log('ok')
		var html = addProd(prod);
		
		$this.parent().find('ul').append(html)
		// console.log($this.parent().find('li:last'))
		$this.parent().find('li:last').css({
			marginTop:"15px",
			marginBottom: 0
		})


	})
})

var products = [
	{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手 猴哥款',
		price: '￥405.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金转运珠 猴哥款',
		price: '￥100.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手链 3D猴哥款',
		price: '￥45.00'
	}
];



function addProd(prod){
	var html = '';
	html += '<li>';
	html += '<div class="cover">';
	html += '<a href="#">立即购买</a>';
	html += '</div>';
	html += '<img src='+prod.img+' alt="">';
	html += '<p>'+prod.name+'</p>';
	html += '<p>'+prod.price+'</p>';
	html += '</li>'
	return html;
}



