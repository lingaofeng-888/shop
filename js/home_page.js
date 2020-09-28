function clickImg(obj){
    var clickImg=$(obj).attr("src");
    // console.log(clickImg);
    var clickPrice=$(obj).parent().parent().children().children().eq(3).html();
    // console.log(clickPrice);
    var clickName=$(obj).parent().parent().children().children().eq(4).html();;
    // console.log(clickName);
    var  carGoods = {
        img: clickImg,
        price: clickPrice,
        name: clickName
    }
    localStorage.setItem('carGoods',JSON.stringify(carGoods)); 
    location.href = "goods.html";
}