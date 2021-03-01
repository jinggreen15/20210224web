// 安裝jQuery Code Snippets套件
// 輸入jqe 選 jqeachElement

// 搜尋 a 元素
// 取得每個 a 元素的資料
$("a").each(function (index, element) {

    console.log("編號 : " + index);

    var target = $(this).attr("data-st-target");
    var duration = $(this).attr("data-st-target");
    var offsetTop = $(this).attr("data-st-offset");

    console.log("目標 : " + target);
    console.log("時間 : " + duration);
    console.log("位移：" + offsetTop);

    var offset = $("#" + target).offset();
    var top = offset.top;

    // 輸入套件jqo 選擇jqoffsetGet
    var offset = $("#" + target).offset();
    var top = offset.top;

    console.log("上方 : " + top);

    // 輸入套件 jqc 選擇jqchange
    $(this).change(function (e) {
        e.preventDefault();

        // parseInt = 將文字轉為數字
        $("html").animate({
            scrollTop: top
        }, parseInt(duration));
    });

});

// 箭頭顯示與隱藏效果
$(window).scroll(function() {
    
})