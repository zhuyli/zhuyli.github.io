$(function(){
	//��ʼ�� �߶� ��ǰ������������ֵ
	var height = $(window).height(),
		num = $('#nav li.choose').index(),
		animating = false;
	$('#container .item-1').addClass('show');




   //Ĭ�Ͻ�ÿ��ģ��ĸ߶���Ϊ�ɼ��߶�
    $('.section').height(height);
    //�����ڴ�С�䶯�����¼���߶�
    $(window).resize(function(){
        height = $(window).height();
        $('.section').height(height);
    });




    //�������
	$('#nav li').click(function(){
		var index = $(this).index();
		num = index;
		$('#container').animate({top:-index * height}, function(){
			//������Ԫ�����أ���ʾ��ǰѡ�е�Ԫ��
			$('#container .section').removeClass('show').eq(index).addClass('show');
		});
		//������Ԫ�����أ���ʾ��ǰѡ�е�Ԫ��
		$(this).addClass('choose').siblings().removeClass('choose');
	});




	$(document).mousewheel(function(e,data){
		e.preventDefault();
		if(animating){
			return;
		}
		animating = true;
		if(data < 0){
			num++;
			num = num > 6 ? 6 : num; 
		}else{
			num--;
			num = num < 0 ? 0 : num;
		}
		$('#container').stop().animate({top:-num * height}, function(){
			$('#container .section').removeClass('show').eq(num).addClass('show');
			animating = false;		
		});
		$('#nav li').removeClass('choose').eq(num).addClass('choose');
		$('#guide li').removeClass('choose').eq(num).addClass('choose');
		modAnimate();
	});


	// 12926.00
	var timer = 0;
	function modAnimate(){
		if(num == 1){
			clearInterval(timer);
			var count = 0;
			timer = setInterval(function(){
				count += 111.99;
				if(count > 12926){
					count = 12926.00
					clearInterval(timer);
				}
				$('#container .salary h1').html(count.toFixed(2));
			}, 33);
		}
	}
});