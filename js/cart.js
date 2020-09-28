
$(function () {
    var shopping = JSON.parse(localStorage.getItem("arrGoods"));
    // console.log(shopping)
    for (var i = 0; i < shopping.length; i++) {
        $(".ul").append("<li><input type='checkbox'><img src='" + shopping[i].img + "'><div class='shopName'>" + shopping[i].name + "</div><em>" + shopping[i].price + "</em><div class='rmb'><span class='jian'>-</span><input value='1' name='" + i + "'><span class='jia'>+</span></div><div><button name='" + i + "'>删除</button></div></li>")
    }
    // 全选
    $("#selectAll").click(function () {
        $(":checkbox").prop("checked", this.checked);
    })

    $(":checkbox:gt(0)").click(function () {
        $("#selectAll").prop("checked", $(":checkbox:gt(0):checked").length == $(":checkbox:gt(0)").length);
    })
    // 给+ 和-添加事件
    $("span").click(function () {
        shopping = JSON.parse(localStorage.getItem("arrGoods"));
        var index;
        if ($(this).html() == '+') {
            index = $(this).prev().attr("name");
            $(this).prev().val(parseInt($(this).prev().val()) + 1)
            shopping[index].number = parseInt($(this).prev().val());
        } else {
            index = $(this).next().attr("name");
            if ($(this).next().val() > 1) {
                $(this).next().val(parseInt($(this).next().val()) - 1)
                shopping[index].number = parseInt($(this).prev().val());
            }

        }
        localStorage.setItem("arrGoods", JSON.stringify(shopping));
    })
    // 按钮删除
    $("button").click(function () {
        shopping = JSON.parse(localStorage.getItem("arrGoods"));
        // console.log($(this).attr("name"));
        shopping.splice($(this).attr("name"), 1)
        localStorage.setItem("arrGoods", JSON.stringify(shopping));
        $(this).parent().parent().remove()
    })
    //删除选中
    $('.delGoods').click(function () {
        shopping = JSON.parse(localStorage.getItem("arrGoods"));
        var t=0;
        $(".ul :checkbox").each(function () {
            var ischeck = $(this).prop("checked");  
        
            // console.log(ischeck);
              if(ischeck){  
                //   console.log(t,shopping);
                  shopping.splice(t,1)
                //   console.log(shopping);
                  localStorage.setItem("arrGoods", JSON.stringify(shopping));
                  $(this).parent().remove();
                  
            
              }   
               t++;
        	
        })
    })
    //结算
    $(".butt").click(function () {
        var tatil = 0;
        var count = 0;
        $(".ul :checkbox").each(function () {
            var ischeck = $(this).prop("checked");
            if (ischeck) {
                  var price=$(this).parent().children("em").html();
                  var num=$(this).parent().children(":nth-of-type(2)").children("input").val();
                  tatil+=parseInt(price*num);
                  count+=parseInt(num);
                //   console.log(tatil);
                  $("#snum").html(count);
                  $("#p").html(tatil);
            }

        })
    })
})