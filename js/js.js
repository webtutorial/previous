function gantiTag(kode)
{
    kode = kode.replace(new RegExp("<","g"), "[");
    kode = kode.replace(new RegExp(">","g"), "]");
    return kode;
}
function gantiPetik(kode)
{
    kode = kode.replace(new RegExp("'","g"), "s_quot");
    kode = kode.replace(new RegExp('"',"g"), "d_quot");
    return kode;
}
$(document).ready(function(){
    //disable bracket input
    $(".asalkode").each(function(){
        $(".asalkode").keydown(function(k){
            //219 keycode for "["
            //221 keycode for "]"
            if(k.which == 219 || k.which == 221 || k.which == 32)
                {
                    return false;
                }
        });
    });
});