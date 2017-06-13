$(document).ready(function(){
    $("#nilai_awal").keyup(function(){
        $("#hasil_nilai").html($("#nilai_awal").val());
        temporaryNilaiAwal = $("#nilai_awal").val();
        temporaryNilaiAwal = gantiPetik(temporaryNilaiAwal);
        if(
            temporaryNilaiAwal == "alert(s_quotabcs_quot);" ||
            temporaryNilaiAwal == "alert(d_quotabcd_quot);"
        )
        {
            $("#script_hasil_nilai").html("<script>" + $("#nilai_awal").val() + "</script>");
        }
    }); 
	
	
});