var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var listElements = [];
for(var i = 1; i <= 6; i++){
	var el1 = document.querySelector(".my-work-list .my-work-btn:nth-child("+ i +")");
	listElements.push(el1);
}

for(var i = 1; i <= 6; i++){
	var el2 = document.querySelector(".my-work-list:nth-child(2) .my-work-btn:nth-child(" + i + ")");
	listElements.push(el2);
}

for(var i = 1; i <= 6; i++){
	var el3 = document.querySelector(".owner-works:nth-child(3) .my-work-list .my-work-btn:nth-child("+ i +")");
	listElements.push(el3);
}

for(var i = 1; i <= 6; i++){
	var el4 = document.querySelector(".owner-works:nth-child(4) .my-work-list .my-work-btn:nth-child("+ i +")");
	listElements.push(el4);
}


var div = document.createElement('div');
div.className = "additional-info";
div.innerHTML = "<h2><span lang = 'ru'>Описание</span><span lang = 'en'>Description</span></h2><br/><p><span lang = 'ru'>Здесь может быть ваше приложение</span> <span lang = 'en'>Place for your application</span><p>";
div.style.fontSize = "12px";
div.style.width = "145px";
div.style.height = "145px";
div.style.backgroundColor = "#3b3b3b";
div.style.color = "white";

for(var i = 0; i <= 23; i++){
	listElements[i].appendChild(div.cloneNode(true));
}

listOfDiv = document.getElementsByClassName("additional-info");


listElements[0].onmouseover = function(e){
	listOfDiv[0].style.opacity = "1";
}

listElements[0].onmouseout = function(e){
	listOfDiv[0].style.opacity = "0";
}


listElements[1].onmouseover = function(e){
	listOfDiv[1].style.opacity = "1";
}

listElements[1].onmouseout = function(e){
	listOfDiv[1].style.opacity = "0";
}

listElements[2].onmouseover = function(e){
	listOfDiv[2].style.opacity = "1";
}

listElements[2].onmouseout = function(e){
	listOfDiv[2].style.opacity = "0";
}

listElements[3].onmouseover = function(e){
	listOfDiv[3].style.opacity = "1";
}

listElements[3].onmouseout = function(e){
	listOfDiv[3].style.opacity = "0";
}

listElements[4].onmouseover = function(e){
	listOfDiv[4].style.opacity = "1";
}

listElements[4].onmouseout = function(e){
	listOfDiv[4].style.opacity = "0";
}

listElements[5].onmouseover = function(e){
	listOfDiv[5].style.opacity = "1";
}

listElements[5].onmouseout = function(e){
	listOfDiv[5].style.opacity = "0";
}

listElements[6].onmouseover = function(e){
	listOfDiv[6].style.opacity = "1";
}

listElements[6].onmouseout = function(e){
	listOfDiv[6].style.opacity = "0";
}

listElements[7].onmouseover = function(e){
	listOfDiv[7].style.opacity = "1";
}

listElements[7].onmouseout = function(e){
	listOfDiv[7].style.opacity = "0";
}

listElements[8].onmouseover = function(e){
	listOfDiv[8].style.opacity = "1";
}

listElements[8].onmouseout = function(e){
	listOfDiv[8].style.opacity = "0";
}

listElements[9].onmouseover = function(e){
	listOfDiv[9].style.opacity = "1";
}

listElements[9].onmouseout = function(e){
	listOfDiv[9].style.opacity = "0";
}

listElements[10].onmouseover = function(e){
	listOfDiv[10].style.opacity = "1";
}

listElements[10].onmouseout = function(e){
	listOfDiv[10].style.opacity = "0";
}

listElements[11].onmouseover = function(e){
	listOfDiv[11].style.opacity = "1";
}

listElements[11].onmouseout = function(e){
	listOfDiv[11].style.opacity = "0";
}

listElements[12].onmouseover = function(e){
	listOfDiv[12].style.opacity = "1";
}

listElements[12].onmouseout = function(e){
	listOfDiv[12].style.opacity = "0";
}

listElements[13].onmouseover = function(e){
	listOfDiv[13].style.opacity = "1";
}

listElements[13].onmouseout = function(e){
	listOfDiv[13].style.opacity = "0";
}

listElements[14].onmouseover = function(e){
	listOfDiv[14].style.opacity = "1";
}

listElements[14].onmouseout = function(e){
	listOfDiv[14].style.opacity = "0";
}

listElements[15].onmouseover = function(e){
	listOfDiv[15].style.opacity = "1";
}

listElements[15].onmouseout = function(e){
	listOfDiv[15].style.opacity = "0";
}

listElements[16].onmouseover = function(e){
	listOfDiv[16].style.opacity = "1";
}

listElements[16].onmouseout = function(e){
	listOfDiv[16].style.opacity = "0";
}

listElements[17].onmouseover = function(e){
	listOfDiv[17].style.opacity = "1";
}

listElements[17].onmouseout = function(e){
	listOfDiv[17].style.opacity = "0";
}

listElements[18].onmouseover = function(e){
	listOfDiv[18].style.opacity = "1";
}

listElements[18].onmouseout = function(e){
	listOfDiv[18].style.opacity = "0";
}

listElements[19].onmouseover = function(e){
	listOfDiv[19].style.opacity = "1";
}

listElements[19].onmouseout = function(e){
	listOfDiv[19].style.opacity = "0";
}

listElements[20].onmouseover = function(e){
	listOfDiv[20].style.opacity = "1";
}

listElements[20].onmouseout = function(e){
	listOfDiv[20].style.opacity = "0";
}

listElements[21].onmouseover = function(e){
	listOfDiv[21].style.opacity = "1";
}

listElements[21].onmouseout = function(e){
	listOfDiv[21].style.opacity = "0";
}

listElements[22].onmouseover = function(e){
	listOfDiv[22].style.opacity = "1";
}

listElements[22].onmouseout = function(e){
	listOfDiv[22].style.opacity = "0";
}

listElements[23].onmouseover = function(e){
	listOfDiv[23].style.opacity = "1";
}

listElements[23].onmouseout = function(e){
	listOfDiv[23].style.opacity = "0";
}



var appCatDescr = document.querySelector(".my-work-btn:first-child div");
appCatDescr.innerHTML = "<h2><span lang = 'ru'>Мой котенок</span> <span lang = 'en'>My kitten</span></h2></br><p><span lang='ru'>Мобильная версия самой популярной игры про котят в вк</span><span lang='en'>Mobile version of the most popular app in VK</span></p>"

var appCrossPostingDescr = document.querySelector(".my-work-btn:nth-child(2) div");
appCrossPostingDescr.innerHTML = "<h2><span lang = 'ru'>Кросспостинг</span> <span lang = 'en'>Crossposting</span></h2></br><p><span lang='ru'>Приложение, которое размещает посты одновременно в социальные сети</span><span lang='en'>An application that places posts simultaneously in social networks </span></p>"

var appRGDDemoDescr = document.querySelector(".my-work-btn:nth-child(3) div");
appRGDDemoDescr.innerHTML = "<h2><span lang = 'ru'>РЖД Демо</span> <span lang = 'en'>RGD Demo</span></h2></br><p><span lang='ru'>Приложения для просмотра информации о рейсах поездов</span><span lang='en'>An application for viewing train information</span></p>"

var appCalculatorDescr = document.querySelector(".my-work-btn:nth-child(4) div");
appCalculatorDescr.innerHTML = "<h2><span lang = 'ru'>Калькулятор</span> <span lang = 'en'>Calculator</span></h2></br><p><span lang='ru'>Калькулятор со всеми функциями и операциями</span><span lang='en'>Calculator with all common functions</span></p>"

var appFilmListDescr = document.querySelector(".my-work-btn:nth-child(5) div");
appFilmListDescr.innerHTML = "<h2><span lang = 'ru'>Фильм-лист</span> <span lang = 'en'>Film list</span></h2></br><p><span lang='ru'>Приложение, отображающее список самых популярных фильмов в кино</span><span lang='en'>An application that can find the most popular films</span></p>"

var appEasyMoneyDescr = document.querySelector(".owner-works:nth-child(3) .my-work-list .my-work-btn:nth-child(1) div");
appEasyMoneyDescr.innerHTML = "<h2>EasyMoney</h2></br><p><span lang = 'ru'>Выполнение оплачиваемых заданий</span><span lang = 'en'>Performing paid assignments</span></p>"

var appLuxuryMusicDescr = document.querySelector(".owner-works:nth-child(3) .my-work-list .my-work-btn:nth-child(2) div");
appLuxuryMusicDescr.innerHTML = "<h2>LuxuryMusic</h2></br><p><span lang = 'ru'>Бот, который ищет музыку</span><span lang = 'en'>A bot who is looking for music</span></p>"

var appCasinoDescr = document.querySelector(".owner-works:nth-child(3) .my-work-list .my-work-btn:nth-child(3) div");
appCasinoDescr.innerHTML = "<h2>Casino</h2></br><p><span lang = 'ru'>Бот, аналог казино</span> <span lang = 'en'>Bot analog casino</span></p>"

var appDecentraDescr = document.querySelector(".owner-works:nth-child(3) .my-work-list .my-work-btn:nth-child(4) div");
appDecentraDescr.innerHTML = "<h2>Decentra</h2></br><p><span lang = 'ru'>Биржа о закупке земли виртуальной реальности</span> <span lang = 'en'>Exchange of purchase of virtual reality lands</span></p>"

var appPayDescr = document.querySelector(".my-work-list:nth-child(2) .my-work-btn:nth-child(1) div");
appPayDescr.innerHTML = "<h2>Pay</h2></br><p><span lang = 'ru'>Сервис инвестирования в иностранную недвижимость</span> <span lang = 'en'>Service of investing in foreign real estate</span></p>"

var appDocFinderDescr = document.querySelector(".my-work-list:nth-child(2) .my-work-btn:nth-child(2) div");
appDocFinderDescr.innerHTML = "<h2>DocFinder</h2></br><p><span lang = 'ru'>Сервис хранения документов</span><span lang = 'en'>Service to store documents</span></p>"

var appDumperDescr = document.querySelector(".owner-works:nth-child(4) .my-work-list .my-work-btn:nth-child(1) div");
appDumperDescr.innerHTML = "<h2>Dumper</h2></br><p><span lang = 'ru'>Программа, выполняющая дампы памяти процесса по событию</span><span lang = 'en'>A program that executes process event memory dumps</span></p>"

var appurlParserDescr = document.querySelector(".owner-works:nth-child(4) .my-work-list .my-work-btn:nth-child(2) div");
appurlParserDescr.innerHTML = "<h2>URLParser</h2></br><p><span lang = 'ru'>Парсер сайтов по ссылкам</span><span lang = 'en'>Links site parser</span></p>"

var appBinCompareDescr = document.querySelector(".owner-works:nth-child(4) .my-work-list .my-work-btn:nth-child(3) div");
appBinCompareDescr.innerHTML = "<h2>BinCompare</h2></br><p><span lang = 'ru'>Программа, сравнивающая бинарные файлы по определенным критериям</span> <span lang = 'en'>A program that compares binary files by specific criteria</span></p>"

var appCrossPointDescr = document.querySelector(".owner-works:nth-child(4) .my-work-list .my-work-btn:nth-child(4) div");
appCrossPointDescr.innerHTML = "<h2>Crosspoint</h2></br><p><span lang = 'ru'>Алгоритм,позволяющий множеству отрезков на плоскости получить множество точек,где они пересекаются</span> <span lang = 'en'>Algorithm that allows one to obtain a set of points over a set of segments on a place in which these segments intersect</span></p>"

var appTicTacToeDescr = document.querySelector(".owner-works:nth-child(4) .my-work-list .my-work-btn:nth-child(5) div");
appTicTacToeDescr.innerHTML = "<h2><span lang = 'ru'>Tic-Tac-Toe</span><span lang = 'en'>Крестики-нолики</span></h2></br><p><span lang = 'ru'>Игра крестики-нолики по сети</span> <span lang = 'en'>The tic-tac-toe game on the network</span></p>"

var appProxyDescr = document.querySelector(".owner-works:nth-child(4) .my-work-list .my-work-btn:nth-child(6) div");
appProxyDescr.innerHTML = "<h2>Proxy</h2></br><p><span lang = 'ru'>Прокси-сервер</span> <span lang = 'en'>Proxy-server</span></p>"


$("#myinfo-link").click(function(){
    $('html, body').animate({
        scrollTop: $("#myself-section").offset().top + 80
    }, 1000);
    return false;
}); 

$("#myaccents-link").click(function(){
    $('html, body').animate({
        scrollTop: $("#myaccents-section").offset().top - 100
    }, 1000);
    return false;
}); 

$("#myachiev-link").click(function(){
    $('html, body').animate({
        scrollTop: $("#myachiev-section").offset().top - 100
    }, 1000);
    return false;
});

$("#myworks-link").click(function(){
    $('html, body').animate({
        scrollTop: $("#myworks-section").offset().top - 100
    }, 1000);
    return false;
}); 

$("#mycontacts-link").click(function(){
    $('html, body').animate({
        scrollTop: $("#mycontacts-section").offset().top - 250
    }, 1000);
    return false;
}); 

$('[lang="en"]').hide();

$('#switch-lang').click(function(){
	$('[lang="en"]').toggle();
	$('[lang="ru"]').toggle();
});






var clicker = document.querySelector("#show-map");
clicker.onclick = function() {
	var map = document.querySelector(".map-wrapper");
	map.style.display = "block";
}

var cross = document.querySelector("#cross");
cross.onclick = function() {
	var map = document.querySelector(".map-wrapper");
	map.style.display = "none";
}

var clickerEmail = document.querySelector("#email-text");
clickerEmail.onclick = function() {
	var focusOnEmail = document.querySelector("#email-input");
	var focusOnEmail2 = document.querySelector("#email-input2");
	focusOnEmail.focus();
	focusOnEmail2.focus();
}


// function initialize() {
//     //Add the event listener after Google Mpas and window is loaded
//     $('#show-map').click(function () {
//          var mapOptions = {
// 	    center: { lat: 0, lng: 0 },
// 	    zoom: 8
// 	};
// 	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//     });
// }

// google.maps.event.addDomListener(window, 'load', initialize);

// div2 = listOfDiv[1]


	// var div = document.createElement('div');
	// div.className = "paragraph";
	// div.innerHTML = "<h2>Описание</h2><br/><p>Вот такая замечательная работа<p>";
	// var h2 = div.querySelector("h2");

	// h2.style.fontSize = "16px";
	// h2.style.fontWeight = "normal";
	// h2.style.letterSpacing = "2px";
	// div.style.position = "absolute";
	// div.style.fontSize = "14px";
	// div.style.width = "145px";
	// div.style.height = "145px";
	// div.style.boxSizing = "border-box";
	// div.style.paddingBottom = "15px";
	// div.style.paddingTop = "15px";
	// div.style.textAlign = "center";
	// div.style.marginTop = "10px";
	// div.style.fontFamily = "Source Sans";
	// div.style.backgroundColor = "black";
	// div.style.display = "none";
	// el1.appendChild(div);

	// el1.onmouseover = function(e){
	// 	div.style.display = "block";
	// }

	// el1.onmouseout = function(e) {
	// 	div.style.display = "none";
	// }




// for(var i = 1; i < 5; i++){
// 	var listelements = [];
// 	var el1 = document.querySelector(".my-work-btn:nth-child("+ i +")");
// 	var div = document.createElement('div');
// 	div.className = "paragraph";
// 	div.innerHTML = "<h2>Описание</h2><br/><p>Вот такая замечательная работа<p>";
// 	var h2 = div.querySelector("h2");

// 	h2.style.fontSize = "16px";
// 	h2.style.fontWeight = "normal";
// 	h2.style.letterSpacing = "2px";
// 	div.style.position = "absolute";
// 	div.style.fontSize = "14px";
// 	div.style.width = "145px";
// 	div.style.height = "145px";
// 	div.style.boxSizing = "border-box";
// 	div.style.paddingBottom = "15px";
// 	div.style.paddingTop = "15px";
// 	div.style.textAlign = "center";
// 	div.style.marginTop = "10px";
// 	div.style.fontFamily = "Source Sans";
// 	div.style.backgroundColor = "black";
// 	div.style.display = "none";
// 	el1.appendChild(div);

// 	el1.onmouseover = function(e){
// 		div.style.display = "block";
// 	}

// 	el1.onmouseout = function(e) {
// 		div.style.display = "none";
// 	}
// }




// var el2 = document.querySelector(".my-work-btn:nth-child(2)");
// var div2 = div;
// el2.appendChild(div2);

// el2.onmouseover = function(e){
// 	div2.style.display = "block";
// }

// el2.onmouseover = function(e){
// 	div2.style.display = "none";
// }
