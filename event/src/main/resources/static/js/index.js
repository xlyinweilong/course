var pages = [ "url('http://9.url.cn/edu/banner/img/c999c6e4_yb_760_300.jpg')", "url('//9.url.cn/edu/banner/img/f21e23f0_yb_760_300.jpg')", "url('//9.url.cn/edu/banner/img/9e343a7b_760_300.png')" ];
var colors = [ "red", "black", "blue" ];
$("#slides-bj").css("background-color", colors[0]);
$("#slides").css("background-image", pages[0]);
var active = 0;
var aotuPlay = null;
function previous() {
	clearInterval(aotuPlay);
	aotuPlayFun();
	aotuPlay = setInterval("next()", 3000);
}
function next() {
	clearInterval(aotuPlay);
	if (active - 1 < 0) {
		active = pages.length - 1;
	} else {
		active -= 1;
	}
	$("#slides-bj").css("background-color", colors[active]);
	$("#slides").css("background-image", pages[active]);
	aotuPlay = setInterval("next()", 3000);
}

function aotuPlayFun() {
	if (active + 1 >= pages.length) {
		active = 0;
	} else {
		active += 1;
	}
	$("#slides-bj").css("background-color", colors[active]);
	$("#slides").css("background-image", pages[active]);
}
aotuPlay = setInterval("aotuPlayFun()", 3000);