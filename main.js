// 安裝jQuery Code Snippets套件
// 輸入jqe 選 jqeachElement
$("a").each(function (index, element) {

    console.log("編號 : " + index);

    var target = $(this).attr("data-st-target");
    var duration = $(this).attr("data-st-target");

    console.log("目標 : " + target);
    console.log("時間 : " + duration);

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

