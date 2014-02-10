// SNI Recipe Search Integration Bootstrap | RSI_ID.js Template

var $siAssetsPath = 'http://images.foodnetwork.com/webfood/images/sales/search_integration/js/';
var $asiAssetsPath = 'http://images.foodnetwork.com/webfood/images/sales/search_integration/asi_assets/js/';

// TODO: Change to Sponsor Name: Must match keywords2013.js value and the XML directory names on Scrippsonline and FoodNetwork.com
var $siSponsor = 'vitamix_rsi_feb_2014';
// TODO: Setup array of all keywords
var keywords = ['smoothie','soup','breakfast','healthy','juice','dessert','easy'];

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
  this.sponsor = "Vitamix High-Performance Blenders";
  this.clicktag = "";
  this.image = "";
  this.level = "";
  this.preptime = "";
  this.cooktime = "";
  this.ingredients = "";
  this.description = "";
  this.courtesyLink = "http://ad.doubleclick.net/ddm/clk/278850790;105977920;v";
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

if( $.inArray('smoothie', keytermSet) > -1 ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Going Green Smoothie";
  centerRecipe.clicktag       = "http://ad.doubleclick.net/ddm/clk/278455050;105150173;u";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/11/08/RX-VITAMIX_going-green-smoothie_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "11 Minutes";
  centerRecipe.ingredients    = "Green grapes, pineapple, spinach, banana";
  centerRecipe.impression1x1  = "http://ad.doubleclick.net/ad/N4674.SD152259N4674SN0/B7922306.14;sz=1x1;ord=$random$?";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('soup', keytermSet) > -1 ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Cream of Asparagus Soup";
  centerRecipe.clicktag       = "http://ad.doubleclick.net/ddm/clk/278462118;105150203;r";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/12/04/RX-VITAMIX_cream-of-asparagus-soup-main_s4x3_med.jpg";
  centerRecipe.level          = "Intermediate";
  centerRecipe.cooktime       = "30 Minutes";
  centerRecipe.ingredients    = "Asparagus, chicken broth, half and half";
  centerRecipe.impression1x1  = "http://ad.doubleclick.net/ad/N4674.SD152259N4674SN0/B7922306.43;sz=1x1;ord=$random$?";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('breakfast', keytermSet) > -1 ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Almond Butter";
  centerRecipe.clicktag       = "http://ad.doubleclick.net/ddm/clk/278492257;105150217;d";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/11/08/RX-VITAMIX_almond-butter_s4x3_med.jpg";
  centerRecipe.level          = "Intermediate";
  centerRecipe.cooktime       = "10 Minutes";
  centerRecipe.ingredients    = "unsalted roasted almonds, canola oil";
  centerRecipe.impression1x1  = "http://ad.doubleclick.net/ad/N4674.SD152259N4674SN0/B7922306.55;sz=1x1;ord=$random$?";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('healthy', keytermSet) > -1 ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Almond or Cashew Milk";
  centerRecipe.clicktag       = "http://ad.doubleclick.net/ddm/clk/278462053;105150196;a";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/12/04/RX-VITAMIX_almond-or-cashew-milk-main_s4x3_med.jpg";
  centerRecipe.level          = "Intermediate";
  centerRecipe.cooktime       = "7 Minutes";
  centerRecipe.ingredients    = "raw almonds or cashews, sugar/sweetener";
  centerRecipe.impression1x1  = "http://ad.doubleclick.net/ad/N4674.SD152259N4674SN0/B7922306.37;sz=1x1;ord=$random$?";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('juice', keytermSet) > -1 ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Carrot, Orange, and Apple Juice";
  centerRecipe.clicktag       = "http://ad.doubleclick.net/ddm/clk/278461398;105150195;k";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/12/04/RX-VITAMIX_carrot-orange-apple-juice_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "11 Minutes";
  centerRecipe.ingredients    = "Orange, apple, pineapple, carrot";
  centerRecipe.impression1x1  = "http://ad.doubleclick.net/ad/N4674.SD152259N4674SN0/B7922306.36;sz=1x1;ord=$random$?";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('dessert', keytermSet) > -1 ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Orange Sorbet";
  centerRecipe.clicktag       = "http://ad.doubleclick.net/ddm/clk/278484395;105150213;d";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/01/31/RX-VITAMIX_Orange-Sorbet_s4x3_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "6 Minutes";
  centerRecipe.ingredients    = "Oranges, granulated sugar, orange zest";
  centerRecipe.impression1x1  = "http://ad.doubleclick.net/ad/N4674.SD152259N4674SN0/B7922306.52;sz=1x1;ord=$random$?";
  matchedRecipeSet.push(centerRecipe);
}

if( $.inArray('easy', keytermSet) > -1 ){
  var centerRecipe = new CenterRecipe();
  centerRecipe.title          = "Banana Blueberry Orange Smoothie";
  centerRecipe.clicktag       = "http://ad.doubleclick.net/ddm/clk/278458266;105150186;k";
  centerRecipe.image          = "http://img.foodnetwork.com/FOOD/2013/01/31/RX-VITAMIX_Banana-Blue-Orange-Smootie_s3x4_med.jpg";
  centerRecipe.level          = "Easy";
  centerRecipe.cooktime       = "6 Minutes";
  centerRecipe.ingredients    = "orange, banana, frozen blueberries";
  centerRecipe.impression1x1  = "http://ad.doubleclick.net/ad/N4674.SD152259N4674SN0/B7922306.27;sz=1x1;ord=$random$?";
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