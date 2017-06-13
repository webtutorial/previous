$(document).ready(function(){
    //auto input style #latarbelakang
    $("#asalkode-background-color").keyup(function(){
        $("#style-latarbelakang").html($("#asalkode-background-color").val());
        
        //koreksi properti #latarbelakang
        warnalatarbelakang_elem = document.getElementById("latarbelakang");
        //ambil value dari properti background-color / background
        warnalatarbelakang_val  = window.getComputedStyle(warnalatarbelakang_elem,null).getPropertyValue("background-color");
        //jika warna #latarbelakang = hijau atau rgb (0,128,0) maka tampilkan #latarbelakanggambar
        if(warnalatarbelakang_val == "rgb(0, 128, 0)")
            //menampilkan #latarbelakanggambar
            $("#latarbelakanggambar").css("display","block");
    });
    $("#latarbelakangwarna .lewati").click(function(){
        $("#latarbelakanggambar").css("display","block");
    });
});