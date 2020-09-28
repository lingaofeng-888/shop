
var goodsD = localStorage.getItem("carGoods");
var goodsContent = JSON.parse(goodsD);
// console.log(goodsContent);
var img = goodsContent.img;
var price = goodsContent.price;
var name = goodsContent.name;
$("#image").attr("src", img);
$(".rmb").html(price);
$(".goodsName").html(name);
// console.log(goodsContent);

function buyGoods() {
    var arrGoods = [];
    if (!localStorage.getItem("arrGoods")) {
        arrGoods.push(goodsContent);
        localStorage.setItem('arrGoods', JSON.stringify(arrGoods));
        // console.log(arrGoods);
    } else {
        var temp = JSON.parse(localStorage.getItem("arrGoods"));
        // console.log(temp);
        var flag = true;
        for (var i = 0; i < temp.length; i++) {
            if (name == temp[i].name) {
                flag = false;
                break;
            }
        }
        if (flag) {
            temp.push(goodsContent);
            localStorage.setItem('arrGoods', JSON.stringify(temp));
        }
    }

}


