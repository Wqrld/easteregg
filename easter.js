var items = ["https://www.pinclipart.com/picdir/big/1-11041_free-download-microsoft-gallery-easter-eggs-clipart-easter.png", "https://www.pinclipart.com/picdir/big/116-1163448_easter-eggs-season-decoration-easter-clipart.png", "https://www.pinclipart.com/picdir/big/1-15532_easter-egg-clipart-for-kids-easter-day-easter.png"]
for(var i = 0; i < 5; i++){
var divsize = ((Math.random()*10) + 20).toFixed();
var rot = Math.random()*360
var h = Number(divsize) + 20
    var posx = (Math.random() * ($(document).width())).toFixed();
    var posy = (Math.random() * ($(document).height())).toFixed();
    $newdiv = $('<img src="' + items[Math.floor(Math.random()*items.length)] + '"></img>').css({
        'width':divsize+'px',
        'height':h + 'px',
'position': "absolute",
        'left':posx+'px',
        'top':posy+'px',
'z-index': 999,
'transform': 'rotate(' + rot + "deg)"
    }).appendTo("body")
}
