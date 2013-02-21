package com.scrippsnetworks.adsales.videoad.vo 
{

	/**
	 * @author Tim McLeod
	 */
	public class VideoAdVO 
	{
		// Key of video that will autoplay
		private var _autoplayKeys:Array = [];

		// Number of times to loop the video
		private var _autoplayLoop:int = 0;

		// Determines if audio is muted during autoplay
		private var _muteAutoplay:Boolean = false;

		// Determines if video restarts when user clicks "Play Audio" button
		private var _restartVideoOnPlayAudioClick:Boolean = false;

		// Number of seconds to buffer stream
		private var _bufferTime:Number = 3;

		// List of TrackVO's
		private var _tracks:Array = [];

		// List of VideoVO's
		private var _videos:Array = [];

		
		public function get autoplayKeys():Array
		{
			return _autoplayKeys;
		}

		public function addAutoplayKey(value:String):void
		{
			_autoplayKeys.push(value);
		}

		public function get autoplayLoop():int
		{
			return _autoplayLoop;
		}

		public function set autoplayLoop(value:int):void
		{
			_autoplayLoop = value;
		}

		public function get muteAutoplay():Boolean
		{
			return _muteAutoplay;
		}

		public function set muteAutoplay(value:Boolean):void
		{
			_muteAutoplay = value;
		}

		public function get restartVideoOnPlayAudioClick():Boolean
		{
			return _restartVideoOnPlayAudioClick;
		}

		public function set restartVideoOnPlayAudioClick(value:Boolean):void
		{
			_restartVideoOnPlayAudioClick = value;
		}

		public function get bufferTime():Number
		{
			return _bufferTime;
		}

		public function set bufferTime(value:Number):void
		{
			_bufferTime = value;
		}

		public function get tracks():Array
		{
			return _tracks;
		}

		public function get videos():Array
		{
			return _videos;
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

		public function addVideo(video:VideoVO):void
		{
			_videos.push(video);
		}

		public function getVideoByKey(key:String):VideoVO
		{
			var len:int = videos.length;
			for (var i:int = 0;i < len;i++) 
			{
				var video:VideoVO = videos[i];
				if(video.key == key) return video;
			}
			
			return null;
		}

		public function toString():String
		{
			return "[ VideoAdVO autoplayKeys=[" + autoplayKeys + "] muteAutoplay=" + muteAutoplay + " videos.length=" + videos.length + " tracks.length=" + tracks.length + " ]";
		}
	}
}
