$(document).ready(function(){
// Set impression tag here.
 
    // Init trackingFired flag. Prevent multi impressions.
    var trackingFired = false;
 
    var impTag = '<img src="http://view.atdmt.com/BPY/view/469307691/direct/01/" height="1" width="1" style="display:none;"/>';
    impTag = impTag.replace(/\$random\$/, (new Date()).getTime());
 
    var impTag2 = '<img src="http://b.scorecardresearch.com/p?c1=3&c2=13515323&c3=APPL-APN-014-01-BPY&c4=340131246_563594_33&c5=469307691&c6=&c10=1&c11=&c12=&c13=1x1&c16=atls&cj=1&ax_fwd=1&rn=$random$" height="1" width="1" style="display:none;"/>';
    impTag2 = impTag2.replace(/\$random\$/, (new Date()).getTime());
 
    function detectWidth(){
        if ( $(window).width() > 1024) {
           $(".sidescape").show();
           // Insert Tracking
 
           // Only fire tracking if not already fired. This prevent multiple tracking in same page load.
           if( !trackingFired ){
               $('.sidescape').append(impTag);
               $('.sidescape').append(impTag2);
 
               // Append TrueCount tag if not present.
               if( typeof(trueCountTag) !== "undefined" ){
                $('.sidescape').append(trueCountTag);
               }
               trackingFired = true;
           }
        } else {
           $(".sidescape").hide();
        }
    }
 
    //call test function
    detectWidth();
 
    //if window resize check to see if sidescape should be visible
    $(window).resize(function() {
        detectWidth();
    });
});
