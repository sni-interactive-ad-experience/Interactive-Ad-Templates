package com.scrippsnetworks.adsales.videoad.net 
{
	import com.scrippsnetworks.adsales.videoad.vo.TrackVO;
	import com.scrippsnetworks.adsales.videoad.vo.VideoAdVO;
	import com.scrippsnetworks.adsales.videoad.vo.VideoVO;
	import com.scrippsnetworks.utils.StringUtil;

	import flash.events.Event;
	import flash.net.URLLoader;

	/**
	 * @author Tim McLeod
	 */
	public class VideoAdConfigLoader extends URLLoader
	{
		private var _configLoaded:Boolean = false;
		private var _config:VideoAdVO;
		private var _xmlData:XML;

		public function VideoAdConfigLoader()
		{
			addEventListener(Event.COMPLETE, onConfigLoad, false, 0, true);
		}

		///////////////////////////
		// Event Handlers
		///////////////////////////

		protected function onConfigLoad(event:Event):void
		{
			_xmlData = new XML(data);
			parseData(_xmlData);
			_configLoaded = true;
		}

		///////////////////////////
		// Getter/Setters
		///////////////////////////

		public function get xmlData():XML
		{
			return _xmlData;
		}

		public function get config():VideoAdVO
		{
			return _config;
		}

		public function get configLoaded():Boolean
		{
			return _configLoaded;
		}

		///////////////////////////
		// Helpers
		///////////////////////////

		protected function useDefault(val:*):Boolean
		{
			return (val == "" || val == undefined);
		}

		protected function setValue(site:Object, prop:String, value:*, isOptional:Boolean = false):void
		{
			// If isOptional is true, then check to make sure 
			// that the node exists before setting the value
			if(isOptional)
			{
				var hasValue:Boolean = (value != "" && value != undefined);
				if(hasValue) site[prop] = value;
			}
			else
			{
				site[prop] = value;
			}
		}

		protected function parseData(xmlData:XML):void
		{
			var len:int;
			var len2:int;
			var i:int;
			var j:int;
			
			_config = new VideoAdVO();
			
			var autoplayKeysStr:String = String(xmlData["autoplayKeys"]).split(" ").join("");
			if(autoplayKeysStr != "" && autoplayKeysStr.toLowerCase() != "false")
			{
				var autoplayKeyList:Array = autoplayKeysStr.split(",");
				len = autoplayKeyList.length;
				for(i = 0;i < len;i++)
				{
					_config.addAutoplayKey(autoplayKeyList[i]);
				}
			}
			
			_config.autoplayLoop = xmlData["autoplayLoop"];
			setValue(_config, "bufferTime", xmlData["bufferTime"], true);
			_config.muteAutoplay = StringUtil.getBooleanForString(xmlData["muteAutoplay"]);
			_config.restartVideoOnPlayAudioClick = StringUtil.getBooleanForString(xmlData["restartVideoOnPlayAudioClick"]);
			
			var trackList:XMLList = xmlData["tracks"]["track"];
			len = trackList.length();
			for(i = 0;i < len;i++)
			{
				var track:TrackVO = new TrackVO();
				track.key = trackList[i]["key"];
				track.path = trackList[i]["path"];
				_config.addTrack(track);
			}
			
			var videoList:XMLList = xmlData["videos"]["video"];
			len = videoList.length();
			for(i = 0;i < len;i++)
			{
				var video:VideoVO = new VideoVO();
				video.key = videoList[i]["key"];
				video.path = videoList[i]["path"];
				video.name = videoList[i]["name"];
				setValue(video, "stopFrameTime", videoList[i]["stopFrameTime"], true);
				
				var videoTrackList:XMLList = videoList[i]["tracks"]["track"];
				len2 = videoTrackList.length();
				for(j = 0;j < len2;j++)
				{
					var videoTrack:TrackVO = new TrackVO();
					videoTrack.key = videoTrackList[j]["key"];
					videoTrack.path = videoTrackList[j]["path"];
					if(videoTrackList[j]["time"] != "" && videoTrackList[j]["time"] != undefined) 
					{
						videoTrack.time = videoTrackList[j]["time"];
					}
					video.addTrack(videoTrack);
				}
				
				_config.addVideo(video);
			}
		}
	}
}
