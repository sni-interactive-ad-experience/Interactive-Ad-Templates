package com.scrippsnetworks.utils 
{
	import flash.net.SharedObject;
	import flash.net.URLRequest;
	import flash.net.sendToURL;

	public class TrackerUtil 
	{
		public static function track(url:String):void 
		{
			if(url != null && url != "")
			{
				url = StringUtil.replacePresets(url, [StringUtil.PRESET_TIMESTAMP, StringUtil.PRESET_RANDOM]);
				
				var request:URLRequest = new URLRequest(url);
	            
				try 
				{
					sendToURL(request);
				}
	            catch (e:Error) 
				{
				}
			}
		}

		public static function hasSavedStateToday(sharedObjectName:String, version:String):Boolean
		{
			var hasVisited:Boolean = false;
			var so:SharedObject = SharedObject.getLocal(sharedObjectName);
			var now:Date = new Date();
			
			if(so.data["state"] && so.data["lastVisit"] && so.data["version"])
			{
				if(so.data["lastVisit"]["date"] == now.date && so.data["version"] == version && version.toLowerCase() != "demo")
				{
					hasVisited = true;
				}
			}
			
			return hasVisited;
		}

		public static function getSavedState(sharedObjectName:String, version:String):String
		{
			var state:String;
			var so:SharedObject = SharedObject.getLocal(sharedObjectName);
			
			if(so.data["version"] && so.data["state"] && version == so.data["version"])
			{
				state = so.data["state"];
			}
			
			return state;
		}

		public static function saveState(sharedObjectName:String, version:String, state:String):void
		{
			var so:SharedObject = SharedObject.getLocal(sharedObjectName);
			
			so.data["lastVisit"] = new Date();
			so.data["version"] = version;
			so.data["state"] = state;
			so.flush();
		}
	}
}
