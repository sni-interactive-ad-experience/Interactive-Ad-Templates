// SNI Recipe Search Integration Bootstrap | RSI_ID.js Template

var $siAssetsPath = 'http://images.foodnetwork.com/webfood/images/sales/search_integration/js/';
var $asiAssetsPath = 'http://images.foodnetwork.com/webfood/images/sales/search_integration/asi_assets/js/';

// TODO: Change to Sponsor Name: Must match keywords2013.js value and the XML directory names on Scrippsonline and FoodNetwork.com
var $siSponsor = 'tollhouse_fc_december_2013';
// TODO: Setup array of all keywords
var keywords = ['baking', 'chocolate', 'cookies', 'vanilla', 'dessert'];

// get the domain
var $siDomainName = 'http://' + window.location.hostname;
var $siKeyword = '';
if ($siKeyword == '' && typeof mdManager == "object") {
  $siKeyword = mdManager.getParameterString("keyterm");
}

// Environment Flags
var isFCOM = (typeof(SNI.RZ) !== "undefined");
var isMB = ( window.location.hostname === "scrippsonline.com" );

// Hide popouts.
if( isFCOM && isMB ) $('.flyout').hide();

// Convert hyphens to spaces on foodcom
if(isFCOM) $siKeyword = $siKeyword.replace("-", " ");



// ///////////////////////////////////
// START CENTER RESULT BLOCK /////////
// ///////////////////////////////////

// Recipe Object Constructor - Set properties within keyword if block. This will be rendered into template. Escape any " with backslash. ie \"
// Values that are same across all recipes can be set here.
var CenterRecipe = function() {
  this.title = "";
  this.sponsor = "NESTLE TOLL HOUSE";
  this.clicktag = "";
  this.image = "";
  this.level = "";
  this.preptime = "";
  this.cooktime = "";
  this.ingredients = "";
  this.description = "";
  this.courtesyLink = "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&amp;c=20&amp;mc=click&amp;pli=8455607&amp;PluID=0&amp;ord=$random$";
  this.impression1x1 = "";
  this.internalTracking = trueCount;
  this.researchTag = "";
};

// Break search into array of words
var keytermSet = $siKeyword.toLowerCase().split(" ");
// Put each mathced recipe into array.
var matchedRecipeSet = [];

/**
 * ==========================================
 * Center Results and Impression Logic
 * ==========================================
*/

if( $.inArray('baking', keytermSet) > -1 ||  $.inArray('chocolate', keytermSet) > -1 ||  $.inArray('cookies', keytermSet) > -1 ||  $.inArray('vanilla', keytermSet) > -1 ||  $.inArray('dessert', keytermSet) > -1){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Holiday Snowball Cookies";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&amp;FlightID=&amp;AdID=&amp;TargetID=&amp;Values=2096978&amp;Redirect=http:%2f%2fwww.food.com/recipe/holiday-snowball-cookies-509963";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/11/22/RX-TOLLHOUSE_Holiday-Snowball-Cookies_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "45 Minutes";
  centerRecipe.ingredients    = "Chocolate Morsals, Butter, Sugar, Flour";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOODCOM&amp;adtype=TRACKING&amp;TRACKING=FOODCOM_13DEC04_TOLLHOUSE_FCOM_RSI_SNOWBALL_1X1&amp;adsize=1x1&amp;PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('baking', keytermSet) > -1 ||  $.inArray('chocolate', keytermSet) > -1 ||  $.inArray('cookies', keytermSet) > -1 ||  $.inArray('vanilla', keytermSet) > -1 ||  $.inArray('dessert', keytermSet) > -1){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Original NESTLE TOLL HOUSE Chocolate Chip Cookies";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&amp;FlightID=&amp;AdID=&amp;TargetID=&amp;Values=2096977&amp;Redirect=http:%2f%2fwww.food.com/recipe/nestl-toll-house-chocolate-chip-cookies-509962";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/11/22/RX-TOLLHOUSE_Chocolate-Chip-Cookies-Holiday_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "39 Minutes";
  centerRecipe.ingredients    = "Chocolate Morsals, Flour, Butter, Eggs";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOODCOM&amp;adtype=TRACKING&amp;TRACKING=FOODCOM_13DEC04_TOLLHOUSE_FCOM_RSI_ORIGNAL_1X1&amp;adsize=1x1&amp;PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('baking', keytermSet) > -1 ||  $.inArray('chocolate', keytermSet) > -1 ||  $.inArray('cookies', keytermSet) > -1 ||  $.inArray('vanilla', keytermSet) > -1 ||  $.inArray('dessert', keytermSet) > -1){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Easy No-Bake Creamy Chocolate Mint Bars";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&amp;FlightID=&amp;AdID=&amp;TargetID=&amp;Values=2097017&amp;Redirect=http:%2f%2fwww.food.com/recipe/easy-no-bake-creamy-chocolate-mint-bars-510315";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/11/22/RX-TOLLHOUSE_Easy-No-Bake-Creamy-Chocolate-Mint-Bars_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "20 Minutes ";
  centerRecipe.ingredients    = "Chocolate Morsals, Chocolate Wafers";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOODCOM&amp;adtype=TRACKING&amp;TRACKING=FOODCOM_13DEC05_TOLLHOUSE_FCOM_RSI_NOBAKE_1X1&amp;adsize=1x1&amp;PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('baking', keytermSet) > -1 ||  $.inArray('chocolate', keytermSet) > -1 ||  $.inArray('cookies', keytermSet) > -1 ||  $.inArray('vanilla', keytermSet) > -1 ||  $.inArray('dessert', keytermSet) > -1){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Dark Chocolate Cherry Fudge";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&amp;FlightID=&amp;AdID=&amp;TargetID=&amp;Values=2096979&amp;Redirect=http:%2f%2fwww.food.com/recipe/dark-chocolate-cherry-fudge-509964";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/11/22/RX-TOLLHOUSE_Dark-Chocolate-Cherry-Fudge_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "2 Hours, 14 minutes";
  centerRecipe.ingredients    = "Chocolate Morsals, Evaporated Milk";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOODCOM&amp;adtype=TRACKING&amp;TRACKING=FOODCOM_13DEC04_TOLLHOUSE_FCOM_RSI_CHERRYFUDGE_1X1&amp;adsize=1x1&amp;PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('baking', keytermSet) > -1 ||  $.inArray('chocolate', keytermSet) > -1 ||  $.inArray('cookies', keytermSet) > -1 ||  $.inArray('vanilla', keytermSet) > -1 ||  $.inArray('dessert', keytermSet) > -1){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Holiday Peppermint Bark";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&amp;FlightID=&amp;AdID=&amp;TargetID=&amp;Values=2096980&amp;Redirect=http:%2f%2fwww.food.com/recipe/holiday-peppermint-bark-509965";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/11/22/RX-TOLLHOUSE_Holiday-Peppermint-Bark_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "8 Minutes";
  centerRecipe.ingredients    = "Chocolate Morsals, Peppermint Candy";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOODCOM&amp;adtype=TRACKING&amp;TRACKING=FOODCOM_13DEC04_TOLLHOUSE_FCOM_RSI_PEPBARK_1X1&amp;adsize=1x1&amp;PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('baking', keytermSet) > -1 ||  $.inArray('chocolate', keytermSet) > -1 ||  $.inArray('cookies', keytermSet) > -1 ||  $.inArray('vanilla', keytermSet) > -1 ||  $.inArray('dessert', keytermSet) > -1){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Scrumptious Chocolate Mint Layer Bars";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&amp;FlightID=&amp;AdID=&amp;TargetID=&amp;Values=2096981&amp;Redirect=http:%2f%2fwww.food.com/recipe/scrumptious-chocolate-mint-layer-bars-509966";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/11/22/RX-TOLLHOUSE_Scrumptious-Choc-Mint-Layer-Bars_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "30 Minutes";
  centerRecipe.ingredients    = "Chocolate Morsals, Butter, Nuts, Coconut";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOODCOM&amp;adtype=TRACKING&amp;TRACKING=FOODCOM_13DEC04_TOLLHOUSE_FCOM_RSI_SCRUMPTIOUS_1X1&amp;adsize=1x1&amp;PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('baking', keytermSet) > -1 ||  $.inArray('chocolate', keytermSet) > -1 ||  $.inArray('cookies', keytermSet) > -1 ||  $.inArray('vanilla', keytermSet) > -1){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Butterscotch Gingerbread Cookies";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&amp;FlightID=&amp;AdID=&amp;TargetID=&amp;Values=2096982&amp;Redirect=http:%2f%2fwww.food.com/recipe/butterscotch-gingerbread-cookies-510269";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/11/26/RX-TOLLHOUSE2_Jumbo-3-Chip-Cookie-Butterscotch-Gingerbread-Cookies_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "39 Minutes";
  centerRecipe.ingredients    = "Butterscotch Morsals, Molasses, Cinnamon";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOODCOM&amp;adtype=TRACKING&amp;TRACKING=FOODCOM_13DEC04_TOLLHOUSE_FCOM_RSI_BUTTERSCOTCHGINGERBREADCOOKIES_1X1&amp;adsize=1x1&amp;PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('baking', keytermSet) > -1 ||  $.inArray('chocolate', keytermSet) > -1 ||  $.inArray('cookies', keytermSet) > -1 ||  $.inArray('dessert', keytermSet) > -1){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Frosted Double Chocolate Cookies";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&amp;FlightID=&amp;AdID=&amp;TargetID=&amp;Values=2096983&amp;Redirect=http:%2f%2fwww.food.com/recipe/frosted-double-chocolate-cookies-510270";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/11/26/RX-TOLLHOUSE2_Jumbo-3-Chip-Cookie-Frosted-Double-Chocolate-Cookies_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "46 Minutes";
  centerRecipe.ingredients    = "Chocolate Morsals, Frosting";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOODCOM&amp;adtype=TRACKING&amp;TRACKING=FOODCOM_13DEC04_TOLLHOUSE_FCOM_RSI_STAINED_1X1&amp;adsize=1x1&amp;PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('baking', keytermSet) > -1 ||  $.inArray('cookies', keytermSet) > -1 ||  $.inArray('dessert', keytermSet) > -1){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Stained Glass Window Cookies";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&amp;FlightID=&amp;AdID=&amp;TargetID=&amp;Values=2096984&amp;Redirect=http:%2f%2fwww.food.com/recipe/stained-glass-window-cookies-510271";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/11/26/RX-TOLLHOUSE2_Jumbo-3-Chip-Cookie-Stained-Glass-Window-Cookies_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "43 Minutes";
  centerRecipe.ingredients    = "Sugar Cookie Dough, Hard Candy";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOODCOM&amp;adtype=TRACKING&amp;TRACKING=FOODCOM_13DEC04_TOLLHOUSE_FCOM_RSI_STAINED_1X1&amp;adsize=1x1&amp;PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('baking', keytermSet) > -1 ||  $.inArray('cookies', keytermSet) > -1 ||  $.inArray('dessert', keytermSet) > -1){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "White Chip Orange Cookies";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&amp;FlightID=&amp;AdID=&amp;TargetID=&amp;Values=2096942&amp;Redirect=http:%2f%2fwww.foodnetwork.com/recipes/white-chip-orange-cookies-recipe/index.html";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/11/26/RX-TOLLHOUSE2_Jumbo-3-Chip-Cookie-White-Chip-Orange-Cookies_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "35 Minutes";
  centerRecipe.ingredients    = "White Chocolate Morsels, Orange Peels";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOOD&amp;adtype=TRACKING&amp;TRACKING=FOOD_13DEC04_TOLLHOUSE_FN_RSI_WHITECHIP_1X1&amp;adsize=1x1&amp;PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}


/**
 * ==========================================
 * END Center Results and Impression Logic
 * ==========================================
*/
/*================================================
=            DO NOT CHANGE BELOW CODE            =
================================================*/
if (isMB) {
  console.log("Matched Recipe Set:");
  $(matchedRecipeSet).each(function(k,i){
    console.log(i.title);
  });
}


// if more than one recipe, select random recipe
if( matchedRecipeSet.length > 1 ) {
  var centerResultKey = Math.floor((matchedRecipeSet.length * Math.random()));
  centerRecipe = matchedRecipeSet[centerResultKey];
} else {
  centerRecipe = matchedRecipeSet[0];
}

 // Insert into page.
  var $centerResult = document.getElementById('sponsorCtr2');
  var centerTemplate="";
  var centerTemplate="";
centerTemplate += "<article class=\"recipe\"><span class=\"sponsor\">Sponsored Content<\/span><div class=\"pull-right\"><a href=\"{clicktag}\"><img height=\"121\" width=\"161\" src=\"{image}\"><\/a><\/div><header><h6><a href=\"{clicktag}\">{title}<\/a><\/h6><p>Recipe courtesy of <a href=\"{courtesyLink}\">{sponsor}<\/a><\/p><\/header><div class=\"tableCell\"><img id=\"viewTracker\" src=\"{impression1x1}\" style=\"visibility: hidden;\" border=\"0\" height=\"1\" width=\"1\"><img id=\"viewTracker\" src=\"{internalTracking}\" style=\"visibility: hidden;\" border=\"0\" height=\"1\" width=\"1\"><img id=\"viewTracker\" src=\"{researchTag}\" style=\"visibility: hidden;\" border=\"0\" height=\"1\" width=\"1\"><\/div><div class=\"get_link\"><a href=\"{clicktag}\">Get Recipe<\/a><\/div><\/article>";



if( $centerResult && centerRecipe ) {
  // render center template and insert into page
  centerTemplate = centerTemplate.replace(/\{title\}/g, centerRecipe.title );
  centerTemplate = centerTemplate.replace(/\{sponsor\}/g, centerRecipe.sponsor );
  centerTemplate = centerTemplate.replace(/\{clicktag\}/g, centerRecipe.clicktag );
  centerTemplate = centerTemplate.replace(/\{image\}/g, centerRecipe.image );
  centerTemplate = centerTemplate.replace(/\{description\}/g, centerRecipe.description );
  centerTemplate = centerTemplate.replace(/\{cooktime\}/g, centerRecipe.cooktime );
  centerTemplate = centerTemplate.replace(/\{preptime\}/g, centerRecipe.preptime );
  centerTemplate = centerTemplate.replace(/\{ingredients\}/g, centerRecipe.ingredients );
  centerTemplate = centerTemplate.replace(/\{impression1x1\}/g, centerRecipe.impression1x1.replace(/\$random\$/g, (new Date()).getTime()) );
  centerTemplate = centerTemplate.replace(/\{courtesyLink\}/g, centerRecipe.courtesyLink );
  centerTemplate = centerTemplate.replace(/\{internalTracking\}/g, centerRecipe.internalTracking.replace(/\$random\$/g, (new Date()).getTime()) );

  $('#sponsorCtr2').append(centerTemplate).show();
}

// ///////////////////////////////////
// END CENTER RESULT BLOCK ///////////
// ///////////////////////////////////

// Removed keywords.js dependency
var _keywordList = {};
_keywordList[$siSponsor] = keywords;
$siStartup();

function $siStartup() {
  var exactMatch = false;
  var keywordFile = '';
  for ( x in _keywordList ) {
    if ( $siSponsor == x ) {
      for ( y in _keywordList[x] ) {
        if ( $siKeyword == _keywordList[x][y] ) {
          keywordFile = _keywordList[x][y].replace(/\s/g, '_');
          exactMatch = true;
        }
      }
      if ( !exactMatch ) {
        for ( y in _keywordList[x] ) {
          if ( $siKeyword.indexOf(_keywordList[x][y]) != -1 ) {
            keywordFile = _keywordList[x][y].replace(/\s/g, '_');
            // Enable partial matches in new engine
            $siKeyword = _keywordList[x][y].toLowerCase();
          }
        }
      }
    }
  }
  //determine css location
  //try to append css to head, if that fails append it to the body
  $siLayoutCSS = document.getElementsByTagName('head')[0].appendChild(document.createElement('link'));
  $siLayoutCSS.id = '$siLayoutCSS';
  $siLayoutCSS.rel = 'stylesheet';
  $siLayoutCSS.type = 'text/css';
  $siLayoutCSS.href = $siDomainName + '/search/food/static/sales/creative_base.css';

  // Food.com XML files live on a different server than FoodNetwork.
  $now = new Date();
  $hourTimestamp = $now.getFullYear() + '-' + $now.getMonth() + '-' + $now.getDate() + '-' + $now.getHours();
  if (isMB) {
    $siTemplateXML = $siDomainName + '/search/food/static/sales/' + $siSponsor + '/fcom2/template.xml?' + $hourTimestamp;
    _sponsorXML = $siDomainName + '/search/food/static/sales/' + $siSponsor + '/fcom/keywords.xml?' + $hourTimestamp;
    $('.flyout').hide();
  } else {
    $siTemplateXML = $siDomainName + '/search/food/static/sales/' + $siSponsor + '/template.xml?' + $hourTimestamp;
    _sponsorXML = $siDomainName + '/search/food/static/sales/' + $siSponsor + '/keywords.xml?' + $hourTimestamp;
  }

  // include Creative Object
  $siScript = document.getElementsByTagName('head')[0].appendChild(document.createElement('script'));
  $siScript.type = 'text/javascript';
  $siScript.language = 'javascript';
  $siScript.src = $asiAssetsPath + 'search.integration.mod.v3.js';
}

var $keywordString = '';
function splitKeywords(input){
  var $keywordArray = input.split(' ');
  for(i = 0; i < $keywordArray.length;  i++) {
    $keywordString += $keywordArray[i] + '&keyword=';
  }
  $keywordString = $keywordString.toLowerCase();
}
splitKeywords($siKeyword);