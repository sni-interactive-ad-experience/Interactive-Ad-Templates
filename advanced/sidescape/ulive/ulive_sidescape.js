$(document).ready(function() {
    // Set impression tag here.

    // Init trackingFired flag. Prevent multi impressions.
    var trackingFired = false;

    // Set impression tag url in img src replacing <TRACKING_TAG> (including brackets)
    var impTag = '<img src="<TRACKING_TAG>" height="1" width="1" style="display:none;"/>';
    impTag = impTag.replace(/\$random\$/, (new Date()).getTime());

    // Additional impression tag. Uncomment to enable.
    // var impTag2 = '<img src="<TRACKING_TAG>" height="1" width="1" style="display:none;"/>';
    // impTag2 = impTag2.replace(/\$random\$/, (new Date()).getTime());

    impTag2 = impTag2.replace(/\$random\$/, (new Date()).getTime());

    function detectWidth() {
        if ($(window).width() > 1024) {
            $(".sidescape").show();
            // Insert Tracking

            // Only fire tracking if not already fired. This prevent multiple tracking in same page load.
            if (!trackingFired) {
                $('.sidescape').append(impTag);
                $('.sidescape').append(impTag2);

                // Additional tracking tag. Uncomment to use.
                // $('.sidescape').append(impTag2);

                // Append TrueCount tag if not present.
                if (typeof(trueCountTag) !== "undefined") {
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