package com.scrippsnetworks.adsales.videoad.vo 
{

	/**
	 * @author Tim McLeod
	 */
	public class VideoVO 
	{
		// Key used to look up this video from list of videos
		private var _key:String = "";

		// Path to connection
		private var _path:String = "";

		// Name of video
		private var _name:String = "";

		// When video ends, player will show a frame at this time (in seconds)
		private var _stopFrameTime:Number = -1;

		// List of TrackVO's
		private var _tracks:Array = [];

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

		public function get name():String
		{
			return _name;
		}

		public function set name(value:String):void
		{
			_name = value;
		}

		public function get stopFrameTime():Number
		{
			return _stopFrameTime;
		}

		public function set stopFrameTime(value:Number):void
		{
			_stopFrameTime = value;
		}
		
		public function get timeTracks():Array
		{
			var list:Array = [];
			var len:int = _tracks.length;
			for(var i:int=0; i<len; i++)
			{
				if(TrackVO(_tracks[i]).isTimeTrack) list.push(_tracks[i]);
			}
			return list;
		}

		public function get tracks():Array
		{
			return _tracks;
		}

		public function addTrack(track:TrackVO):void
		{
			_tracks.push(track);
		}
		
		public function getTrackByKey(key:String):TrackVO
		{
			var len:int = _tracks.length;
			for (var i:int = 0;i < len;i++) 
			{
				var track:TrackVO = _tracks[i];
				if(track.key == key) return track;
			}
			
			return null;
		}

		public function toString():String
		{
			return "[ VideoVO key=\"" + key + "\" name=\"" + name + "\" path=\"" + path + "\" ]";
		}
	}
}
