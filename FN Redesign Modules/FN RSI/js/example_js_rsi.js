// SNI Recipe Search Integration Bootstrap | RSI_ID.js Template

var $siAssetsPath = 'http://images.foodnetwork.com/webfood/images/sales/search_integration/js/';
var $asiAssetsPath = 'http://images.foodnetwork.com/webfood/images/sales/search_integration/asi_assets/js/';

// TODO: Change to Sponsor Name: Must match keywords2013.js value and the XML directory names on Scrippsonline and FoodNetwork.com
var $siSponsor = 'fisher_rsi_feb_2014';
// TODO: Setup array of all keywords
var keywords = ['appetizer', 'appetizers', 'easy', 'salad', 'salads', 'entree', 'dessert', 'desserts', 'side dish', 'side dishes'];

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
  this.sponsor = "Fisher Nuts";
  this.clicktag = "";
  this.image = "";
  this.level = "";
  this.preptime = "";
  this.cooktime = "";
  this.ingredients = "";
  this.description = "";
  this.courtesyLink = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&FlightID=&AdID=&TargetID=&Values=2093407&Redirect=http:%2f%2fwww.fishernuts.com/alex";
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

if( $.inArray( 'appetizer', keytermSet ) > -1 || $.inArray( 'appetizers', keytermSet ) > -1 ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Ricotta Cheese and Basil Flatbread";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&FlightID=&AdID=&TargetID=&Values=2093409&Redirect=http:%2f%2fwww.foodnetwork.com/recipes/ricotta-cheese-and-basil-flatbread-recipe/index.html";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/08/14/RX-FISHERNUTS_Ricotta-Cheese-and-Basil-Flatbread_s4x3_med.jpg";
  centerRecipe.level          = "Intermediate";
  centerRecipe.cooktime       = "15 minutes";
  centerRecipe.ingredients    = "Fisher Pecans, Cheese, Dough, Basil";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOOD&adtype=TRACKING&TRACKING=FOOD_13AUG27_FISHERNUTS_FN_RSI_FLATBREAD_1X1&adsize=1x1&PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray( 'easy', keytermSet ) > -1 ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Almond and Rosemary Omelet";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&FlightID=&AdID=&TargetID=&Values=2093410&Redirect=http:%2f%2fwww.foodnetwork.com/recipes/almond-cheese-and-rosemary-omelet-recipe/index.html";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/08/14/RX-FISHERNUTS_Almond-Cheese-and-Rosemary-Omelet_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "10 minutes";
  centerRecipe.ingredients    = "Fisher Almonds, Eggs, Rosemary";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOOD&adtype=TRACKING&TRACKING=FOOD_13AUG27_FISHERNUTS_FN_RSI_OMELET_1X1&adsize=1x1&PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray( 'salad', keytermSet ) > -1 || $.inArray( 'salads', keytermSet ) > -1 ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Almond and Grape Mixed Green Salad";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&FlightID=&AdID=&TargetID=&Values=2093411&Redirect=http:%2f%2fwww.foodnetwork.com/recipes/spiced-almond-grape-and-mixed-green-salad-recipe/index.html";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/08/14/RX-FISHERNUTS_SpicedAlmondGrapeandMixedGreenSalad_s4x3_med.jpg";
  centerRecipe.level          = "Intermediate";
  centerRecipe.cooktime       = "20 minutes";
  centerRecipe.ingredients    = "Fisher Almonds, Grapes, Mixed Greens";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOOD&adtype=TRACKING&TRACKING=FOOD_13AUG27_FISHERNUTS_FN_RSI_GRAPEGREENSALAD_1X1&adsize=1x1&PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray( 'entree', keytermSet ) > -1 ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Walnut-Crusted Beef Tenderloin";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&FlightID=&AdID=&TargetID=&Values=2093412&Redirect=http:%2f%2fwww.foodnetwork.com/recipes/walnut-crusted-beef-tenderloin-recipe/index.html";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/08/14/RX-FISHERNUTS_Walnut-Crusted-Beef-Tenderloin_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "50 minutes";
  centerRecipe.ingredients    = "Fisher Walnuts, Beef Tenderloin, Pepper";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOOD&adtype=TRACKING&TRACKING=FOOD_13AUG27_FISHERNUTS_FN_RSI_CRUSTEDBEEF_1X1&adsize=1x1&PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray( 'dessert', keytermSet ) > -1 || $.inArray( 'desserts', keytermSet ) > -1 ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Dark Chocolate Walnut Torte";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&FlightID=&AdID=&TargetID=&Values=2093415&Redirect=http:%2f%2fwww.foodnetwork.com/recipes/dark-chocolate-and-walnut-torte-recipe/index.html";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/08/14/RX-FISHERNUTS_Dark-Chocolate-Walnut-Torte_s4x3_med.jpg";
  centerRecipe.level          = "Intermediate";
  centerRecipe.cooktime       = "45 minutes";
  centerRecipe.ingredients    = "Fisher Walnuts, Chocolate, Flour";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOOD&adtype=TRACKING&TRACKING=FOOD_13AUG27_FISHERNUTS_FN_RSI_WALNUTTORTE_1X1&adsize=1x1&PagePos=1";
  matchedRecipeSet.push(centerRecipe);
}

if( ($.inArray('side', keytermSet) > -1 && $.inArray( 'dish', keytermSet ) > -1) || ($.inArray( 'side', keytermSet ) > -1 && $.inArray( 'dishes', keytermSet) > -1) ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Spinach with Almond and Red Pepper";
  centerRecipe.clicktag       = "http://adsremote.scrippsnetworks.com/event.ng/Type=click&FlightID=&AdID=&TargetID=&Values=2093414&Redirect=http:%2f%2fwww.foodnetwork.com/recipes/spinach-with-almonds-and-red-pepper-flake-recipe/index.html";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/08/14/RX-FISHERNUTS_Spinach-with-Almonds-and-Red-Pepper-Flakes_s4x3_med.jpg";
  centerRecipe.level          = "Intermediate";
  centerRecipe.cooktime       = "9 minutes";
  centerRecipe.ingredients    = "Fisher Almonds, Spinach, Red Pepper";
  centerRecipe.impression1x1  = "http://adsremote.scrippsnetworks.com/image.ng/site=FOOD&adtype=TRACKING&TRACKING=FOOD_13AUG27_FISHERNUTS_FN_RSI_SPINACHALMONDREDPEPPER_1X1&adsize=1x1&PagePos=1";
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
centerTemplate += "<article class=\"recipe\"><span class=\"sponsor\">Sponsored Content<\/span><div class=\"pull-right\"><a href=\"{clicktag}\"><img height=\"121\" width=\"161\" src=\"{image}\"><\/a><\/div><header><h6><a href=\"{clicktag}\">{title}<\/a><\/h6><p>Recipe courtesy of <a href=\"{courtesyLink}\" target=\"_blank\">{sponsor}<\/a><\/p><\/header><div class=\"tableCell\"><img id=\"viewTracker\" src=\"{impression1x1}\" style=\"visibility: hidden;\" border=\"0\" height=\"1\" width=\"1\"><img id=\"viewTracker\" src=\"{internalTracking}\" style=\"visibility: hidden;\" border=\"0\" height=\"1\" width=\"1\"><img id=\"viewTracker\" src=\"{researchTag}\" style=\"visibility: hidden;\" border=\"0\" height=\"1\" width=\"1\"><\/div><div class=\"get_link\"><a href=\"{clicktag}\">Get Recipe<\/a><\/div><\/article>";



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
    $siTemplateXML = $siDomainName + '/search/food/static/sales/' + $siSponsor + '/template.xml?' + $hourTimestamp;
    _sponsorXML = $siDomainName + '/search/food/static/sales/' + $siSponsor + '/keywords.xml?' + $hourTimestamp;
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