package com.scrippsnetworks.adsales.videoad.vo 
{

	/**
	 * @author Tim McLeod
	 */
	public class TrackVO 
	{
		// Time in seconds. Used to determine when to fire tracking
		// while video is playing.
		private var _time:Number = -1;

		// Key used to look up this tracking object.
		private var _key:String = "";

		// Path to track URL.
		private var _path:String = "";

		public function get time():Number
		{
			return _time;
		}

		public function set time(value:Number):void
		{
			_time = value;
		}

		public function get key():String
		{
			return _key;
		}

		public function set key(value:String):void
		{
			_key = value;
		}

		public function get path():String
		{
			return _path;
		}

		public function set path(value:String):void
		{
			_path = value;
		}
		
		public function get isTimeTrack():Boolean
		{
			return (time >= 0);
		}

		public function toString():String
		{
			return "[ TrackVO key=\"" + key + "\" time=" + time + " path=\"" + path + "\" ]";
		}
	}
}
