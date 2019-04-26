


var __gh__coreData = {
	"app":{"version":"2.0.316"},
"siteData":{"baseURL":"https://www.registerguard.com","domain":"registerguard.com","siteTitle":"The Register-Guard","siteCluster":"ACQ","siteCode":"CK","pubTaxo":"5189","subscribeURL":"https://www.registerguard.com/subscribenow","app_name":"The Register-Guard","contactData":{"phone":"541-485-1234","emailAddresses":{"general":"newstips@registerguard.com","editor":"newstips@registerguard.com","admin":"newstips@registerguard.com"}},"locationData":{"city":"Eugene","state":{"full":"","abbr":"OR"},"zip":"97408"},"logoURL":"https://www.registerguard.com/Global/images/head/nameplate/registerguard_logo_2018.png","newsletter":"http://myprofile.registerguard.com/","providers":{"ads":{"adManager":"google","headerBidding":"index"},"calendar":"evvnt","comments":"viafoura","analytics":{"track":true,"track_krux":true,"track_lotame":true,"google":"gtm"},"paywall":"pianoID","video":"youtube"}},"siteFeature": {"messageCenter": true},"templateData":{"article":{"defaultTemplate":"articleV2"}},"rules":{"content":[]},"3rdPartyData":{"ads":{"dfp":{"id":"11564835","firstLevelAdUnit":"registerguard.com","topBarSponsor":"true","consumerSurvey":"","isInReadDisabled":true,"articleStart":3},"index":{"headerSrc":false},"pageFair":{"id":""},"flipp":{"disableByIp":""},"lottery":{"enabled":false}},"apps":{},"analytics":{"auditedMedia":{},"chartbeat":{},"google":{"ua":"UA-882065-1","consumerSurvey":{"id":"","isDisabled":false},"affiliateDomains":["adpay.com","ap.org","bestride.com","bleacherreport.com","eviesays.com","financialcontent.com","findnsave.com","gadzoo.com","houzz.com","ppjol.com","legacy.com","marketplaceadsonline.com","monster.com","mycapture.com","newsbank.com","newsmemory.com","remembering-when.com","secondstreetapp.com","travidia.com","upickem.net","zap2it.com","tinypass.com","registerguard.com"],"accounts":{"rollup1":"UA-51861146-1"},"rollups":[],"custom":{"campaigns":[]},"customDimensions":{"adBlocking":"dimension1","pageType":"dimension2","author":"dimension3","userLevel":"dimension4","category":"dimension5","contentType":"dimension6","wordCount":"dimension7","keywords":"dimension8","errorType":"dimension9","tags":"dimension10","publishDate":"dimension11","headlineLength":"dimension12","contentLevel":"dimension13","clientID":"dimension14"},"delivery":false},"krux":{"id":"su5wu7o86"},"lotame":{"id":"13387"},"parsely":{"bylines": [],"videoTrackingEnabled":false},"mather": {},"pingdom":{},"salesforce":{"prodcode":"NOMX_RG","isNewsletterModalDisabled":true}},"consumerMarketing":{"contextly":{},"olive": {}},"paywall":{"utils":{"loginURL": ""},"pianoVX":{"disabled":false,"aid":"W217F70RiJ","sandbox":false,"freemium":false},
"pressplus":{"disabled":false,},"mpp":{"disabled": false,"subscriberEntitlement":"","templateCode":"","artLimitAnonUsers":"","artLimitRegUser":""},"mg2":{"disabled":false}},"social":{"shareThis":{"id":"189e1d3a-779f-46df-bc7b-1a8c14b78f30"},"facebook":{},"twitter":{"id":"registerguard"}},"weather": {"accuweather":{"key":"330145","enableAlert":true}},"video":{"brightcove":{"playerData":{"ids":{"single":1644368235001,"chromeless":1644368237001,"mobile":1968952493001,"rwd":3800732268001},"keys":{"single":"AQ~~,AAABfnhljCE~,n46aOj75zj_EroEpKTc5EmC3FOD-3zll","chromeless":"AQ~~,AAABfnhljCE~,n46aOj75zj-ufdendiR9x5ZlWEPaQJ_U","mobile":"AQ~~,AAABfnhljCE~,n46aOj75zj-JpX4cuyUCvf7gIYU7ega3","rwd":"AQ~~,AAABfnhljCE~,n46aOj75zj-wEXcHA0pV52RAHlG6m91i"},"publisher":1642697428001,"token":"nPaCXJ2BdU2ta3uiXz-L3SDQF2GxyizzLzl_1h_QvYdE7NlkX_c_ng..","domain":"registerguard.com","adServerURL":"http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/11564835/registerguard.com/videoplayer&cust_params=pgtype%3Dvideo&ciu_szs=300x250,300x600,728x90&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&correlator=27132259"}},"ndn":{"version":"1","clientId":90108,"client":"gatehousetop20","categoryWidgetIds":{"national":11831,"latestnews":11831,"sports":11883,"entertainment":11866,"politics":31606,"health":11861,"food":11858,"homegarden":11869,"pets":31607,"autos":31608,"lifestyles":11851,"superbowl":30561,"bostonmarathon":21909,"fashion":31609,"business":29836,"celebrity":31610},"categoryKeys": {"default": "","news": "","sports": "","business": "","entertainment": "","politics": ""}},"tout":{"id": "","liveStreamPlayerHomeEnabled": false,"isMidArticlePlayerDisabled":false,"isDisabled":true}},"audio":{"omny":{"playerData": {"urls": {"desktop":false,"mobile":false}}}},"contentRecommendation":{"outbrain":{"id":"gatehouse"},"adblade":{},"chatter":{"enabled":true}},"schoolClosings":{"enableAlert":false},"verticals":{"archives":{"newsbank":{"id":"ERGB"}},"directories":{"ownlocal":{}},"jobs":{"monster":{"rootDomain":".monster.com","ch":"totallylocaljobs","hname":"local-jobs","defaultLocation":"Eugene, OR","defaultRadius":""}},"realEstate":{},"obituaries":{"legacy":{"siteid":"registerguard"}}}	}

		,
	"pageData":
	{
		"id": "",
		"type": "custom",
		"title": "",
		"category": "site-data-js.js",
		"url": undefined,
		"buckets": []
	}

	};

/**
 * Define namespaces
 */
var __gh__externalApp 			= __gh__externalApp || {};
	__gh__externalApp.common	= __gh__externalApp.common || {};
/**
 * Initialize external app
 */
__gh__externalApp.init = function() {
	console.log("__gh__externalApp.init")
	var thisObject = __gh__externalApp;
	thisObject.setUpAds();
	thisObject.setUp3rdPartyStuff();
	thisObject.loadGTM();
	thisObject.loadMainScripts();
	thisObject.loadSecondaryScripts();
};
/**
 * Main scripts that will load
 * Can be turned off or on by the config.mainScripts node, except for debug mode which loads all 
 */
__gh__externalApp.scripts = {
	"main": [
		{
			"name": "ads",
			"src": "//cdn.gatehousemedia.com/gh-sites/global/ads/ads.js",
			"async": false
		},
		{
			"name": "jQuery",
			"src": "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js?20160411-3",
			"async": false
		},
		{
			"name": "internal",
			"src": "//cdn.gatehousemedia.com/assets/2.0.316/app.min.js",
			"async": false,
			"onload": function(){__gh__webApp.init();}
		},
		{
			"name": "internalPlusJQuery",
			"src": "//cdn.gatehousemedia.com/assets/2.0.316/app.min.js",
			"async": false,
			"onload": function(){var __gh__jQuery = $.noConflict(true);(function($) {__gh__webApp.init()}(__gh__jQuery));}
		}
	],
	"debug": [
		{
			"name":"ads",
			"src": "//cdn.gatehousemedia.com/gh-sites/global/ads/ads.js",
			"async": false
		},
		{
			"name": "internal",
			"src": "//cdn.gatehousemedia.com/assets/2.0.316/app.min.js",
			"async": false
		},
		{
			"name": "ads",
			"src": "http://redesign.gatehousemedia.com/ryan/assets/js/ads.js",
			"async": false
		},
		{
			"name": "ads",
			"src": "http://redesign.gatehousemedia.com/ryan/assets/js/slots.js",
			"async": false,
			"onload": function(){__gh__webApp.init();}
		}
	]
};
/**
 * Load GTM
 */
__gh__externalApp.loadGTM = function(){
	var config 	= __gh__externalApp.config;
	if ("gtm" in config["3rdParty"] && !config["3rdParty"].gtm){ return; }
	  //PAGE DATA
  __gh__coreData.pageData.type2 = "Section Front";
  __gh__coreData.pageData.error = __gh__coreData.pageData.type2 == "404" ? "404" : undefined;
  //USER
  __gh__coreData.user = {id:undefined,accessLevel:undefined};
  // Get clientside pieces from LocalStorage object
  if (window.supportsLocalStorage === true && typeof localStorage['_vxData'] != "undefined"){
    var _vxDataObj = JSON.parse(localStorage['_vxData']);
    __gh__coreData.user				= _vxDataObj;
  }
  //define main dataLayer for object for GTM
  window.dataLayer 	= window.dataLayer || [];
  dataLayer.push(__gh__coreData);
	var gtmID = "gtm" in config && "id" in config.gtm ? config.gtm.id : "GTM-WF5MZJ9";
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer',gtmID);
};
/** 
 * Loads the main scripts based on whether they are set to be on in the config
 * Uses debug scritps if debug mode was turned on
 */
__gh__externalApp.loadMainScripts = function(){
	var commonJS 			= __gh__externalApp.common,
		config 				= __gh__externalApp.config,
		configScripts 		= __gh__externalApp.config.mainScripts,
		debug 				= config.debug,
		scripts 			= (!debug) ? __gh__externalApp.scripts.main : __gh__externalApp.scripts.debug,
		newScripts			= [];
	//Remove
	for (var i=0; i < scripts.length; i++) {
		var script = scripts[i],
			scriptInConfig 	= script.name in configScripts,
			scriptIsFalse 	= script.name in configScripts && !configScripts[script.name];
		if (!scriptInConfig || scriptIsFalse) {continue;}
		newScripts.push(script);
	}
	if (newScripts.length) {
		commonJS.loadScripts(newScripts);
	}
};
/**
 * Load additional scripts passed in the loadScripts config
 */
__gh__externalApp.loadSecondaryScripts = function() {
	var commonJS 	= __gh__externalApp.common,
		scripts 	= __gh__externalApp.config.loadScripts;
	// Load custom scripts
	commonJS.loadScripts(scripts);
};
/**
 * Update Set Up Ads
 */
__gh__externalApp.setUpAds = function(){
	var config 	= __gh__externalApp.config,
		ads		= config.ads;
	if (!ads) {
		//Disable DFP
		__gh__coreData["3rdPartyData"].ads.dfp.firstLevelAdUnit = 'disabled';
		return;
	}
	//Add the ad blocker check script
	__gh__externalApp.config.mainScripts.ads = (ads) ? true : false;
};
/**
 * Update 3rd Party
 */
__gh__externalApp.setUp3rdPartyStuff = function(){
	var config = __gh__externalApp.config;
	//Analytics
	__gh__coreData.siteData.providers.analytics.track = config["3rdParty"].analytics;
	//Disable Parsley
	if(!config["3rdParty"].analytics)
	{
		__gh__coreData['3rdPartyData'].analytics.parsely={};
	}
	//Disable Modal Newsletter
	if(!config["3rdParty"].modalNewsletter)
	{
		__gh__coreData["3rdPartyData"].analytics.salesforce.isNewsletterModalDisabled = true;
	}
	//Disable Krux
	if(!config["3rdParty"].krux)
	{
		__gh__coreData.siteData.providers.analytics.track_krux = false;
	}
	//Disable Paywall
	if(!config["3rdParty"].paywall)
	{
		__gh__coreData["3rdPartyData"].paywall.disabled = true;
	}
	//disable newsletter module
	if(!__gh__coreData["3rdPartyData"].analytics.salesforce)
	{
	__gh__coreData["3rdPartyData"].analytics.salesforce.isNewsletterModalDisabled = true;
	}
};
/**
 * Uses load script function to load an array of scripts
 * @param {array} scripts - array of script objects
 */
__gh__externalApp.common.loadScripts = function(scripts) {
	var commonJS 	= __gh__externalApp.common;
	if (!scripts.length) { return; }
	for(var i=0; i< scripts.length; i++){
		commonJS.loadScript(scripts[i]);
	}
};
/**
 * Test if object is empty
 *
 * @param {object} obj - var that will be tested
 * @example
 * var obj = {}; console.log(objectIsEmpty(obj)); //true
 */
__gh__externalApp.common.isObjectEmpty = function(obj) {
	return (Object.keys(obj).length != 0) ? false : true;
};
/**
 * Dynamically load a script tag onto the page
 * @namespace
 * @param {object} options
 * @param {boolean} [options.async=true] - turn async on or off
 * @param {string} [options.class] - class name for script tag
 * @param {object} [options.dataAttributes] - object of data properties to be set...don't need prepend "data-"
 * @param {string} [options.id] - id attribute for the script tag
 * @param {string} [options.onload] - name of a function that should run after script has loaded
 * @param {string} [options.src] - src attribute for the script tag, link to script file
 * @param {string} [options.tagName="head"] - tag name that the script tag should be appended to
 * @param {string} [options.text] - if you want a tag that has js between it - you can use http://www.freeformatter.com/javascript-escape.html to escape the string
 */
__gh__externalApp.common.loadScript = function(options) {
	var async						= ("async" in options)				?	options["async"] 				: true,
		className					= (options["class"])				?	options["class"]				: null,
		dataAttributes				= (options.dataAttributes)			?	options.dataAttributes			: {},
		id							= (options.id)						?	options.id						: null,
		onload						= (options.onload)					?	options.onload					: null,
		src 						= (options.src) 					? 	options.src 					: null,
		tagName						= (options.tagName)					?	options.tagName 				: "head",
		text						= (options.text)					?	options.text					: null;
	//Check to see if script has been loaded
	if (src){
		var scripts 		= document.getElementsByTagName('script'),
			isScriptLoaded 	= false;
	    for (var i = scripts.length; i--;) {
	        if (scripts[i].src.indexOf(src) === -1) { continue; }
	        isScriptLoaded = true;
		    break;
	    }
		if (isScriptLoaded) {return false;}
	}
	//Add Script to head
    var dom 	= document.getElementsByTagName(tagName)[0],
		script 	= document.createElement('script');
	//Set script attributes
	script.async 		= async;
	if (className) 	{ script.className	= className; }
	if (id)			{ script.id			= id;		 }
	if (onload)		{ script.onload		= onload;	 }
	if (src)		{ script.src		= src;		 }
	if (text)		{ script.text		= text;		 }
	//Add data attributes
	if (!this.isObjectEmpty(dataAttributes)){
		//Add data attributes
		for (var prop in dataAttributes) {
		  var dataProp = 'data-'+prop;
		  script[dataProp] = dataAttributes[dataProp];
		}
	}
	//Append to dom
    dom.appendChild(script);
    return true;
};
//Global function
/**
 * Ad data function
 * Called by ads.js
 * Add back to this macro once we confirm it works
 * <!-- p b s : macro name="header/ads/dfp/initData" -->
 */
function initAdData () {
	var config = {
			"dfpTemplateType" 		: "headerOnly",
			"dfpSecondLevelAdUnit"	: '/news',
			"lazyAdStartPosition"	: 0,
			"keywords"				: 'homeless-students',
			"tag"					: "homeless-students"
	},
	ads;
	//strip trailing comma
	config.keywords = config.keywords.replace(/(^\s*,)|(,\s*$)/g, '');
	//External Scripts File
	if (typeof __gh__externalApp != "undefined") {
		config 		= __gh__externalApp.config.ads;
	}
	//Exit function if ads were not set up - __gh__externalApp.config
	if (!config) { return; }
	//Set up global variables
    __gh__coreData.globalVariables.ads 					= __gh__coreData.globalVariables.ads || {};
	__gh__coreData.globalVariables.ads.dfpTemplateType 	= config.dfpTemplateType;
	__gh__coreData.globalVariables.ads.dfpSecondLevel 	= config.dfpSecondLevelAdUnit;
	__gh__coreData.globalVariables.ads.keywords 		= config.keywords;
	__gh__coreData.globalVariables.ads.lazyStart 		= config.lazyAdStartPosition;
	if (config.dfpTemplateType == "search") {
		__gh__webApp.ads.search.init();
	}
	if (config.dfpSecondLevelAdUnit == "/contests") {
		__gh__coreData.globalVariables.ads.dfpSecondLevel = urlCleanUp(__gh__coreData.globalVariables.ads.dfpSecondLevel);
	}
	if (config.tag == "eedition") {
		footerOnlySlots.base.keyvalues.platform = 'eEdition';
	}
	function urlCleanUp(url) {
	    //var url = 'subdomain.domain.com/file.php?id=1',
		var a 		= document.createElement('a');
	   		a.href 	= url;
		return a.pathname + a.search;
	}
};
/**
 * Vendor config
 * For map, instead of vendor/nextbee/default, use vendor_nextbee_default
 */
/**
 * Set up configuration options
 * Can be overriden by vendor macros
 */
__gh__externalApp.config = {
		"ads"			: {
			"dfpTemplateType" 		: "headerOnly",
			"dfpSecondLevelAdUnit"	: '/news',
			"keywords"				: 'homeless-students',
			"lazyAdStartPosition"	: 0,
			"tag"					: "homeless-students"
		},
		"mainScripts": {
			"jQuery"	: false,
			"internal"	: true,
			"internalPlusJQuery"	: false,
		},
		"3rdParty": {
			"analytics"			: false,
			"krux" 				: true,
			"paywall"			: false,
			"modalNewsletter" 	: false
		},
		"debug"			: false,
		"loadScripts"	: [],
		"pageData": {}
};
__gh__externalApp.init();
