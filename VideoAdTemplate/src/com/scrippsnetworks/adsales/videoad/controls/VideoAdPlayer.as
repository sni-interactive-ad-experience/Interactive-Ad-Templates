package com.scrippsnetworks.adsales.videoad.controls 
{
	import com.scrippsnetworks.adsales.videoad.events.ProgressBarEvent;
	import com.scrippsnetworks.adsales.videoad.events.VideoViewEvent;
	import com.scrippsnetworks.adsales.videoad.events.VolumeSliderEvent;
	import com.scrippsnetworks.adsales.videoad.net.VideoAdConfigLoader;
	import com.scrippsnetworks.adsales.videoad.vo.TrackVO;
	import com.scrippsnetworks.adsales.videoad.vo.VideoAdVO;
	import com.scrippsnetworks.adsales.videoad.vo.VideoVO;
	import com.scrippsnetworks.utils.NumberUtil;
	import com.scrippsnetworks.utils.StringUtil;
	import com.scrippsnetworks.utils.TrackerUtil;

	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.events.MouseEvent;
	import flash.events.NetStatusEvent;
	import flash.events.SecurityErrorEvent;
	import flash.net.URLRequest;

	/**
	 * @author Tim McLeod
	 */
	public class VideoAdPlayer extends MovieClip
	{
		public static const TRACK_CONFIG_LOAD:String = "CONFIG_LOAD";
		public static const TRACK_PLAY_AUDIO:String = "PLAY_AUDIO";
		public static const TRACK_REPLAY:String = "REPLAY";

		public var videoView:VideoView;
		public var playAudioButton:PlayAudioButton;
		public var replayButton:ReplayButton;
		public var modalBG:MovieClip;

		// Controls
		public var rewindButton:RewindButton;
		public var pauseButton:PauseButton;
		public var playButton:PlayButton;
		public var timeDisplay:TimeDisplay;
		public var volumeSlider:VolumeSlider;
		public var muteButton:MuteButton;
		public var progressBar:ProgressBar;

		private var _configLoader:VideoAdConfigLoader;
		private var _config:VideoAdVO;
		private var _debug:Boolean = false;
		private var _controlsEnabled:Boolean = false;
		private var _delayEnterFrame:int = 0;
		private var _isModal:Boolean = false;
		private var _inAutoplayMode:Boolean = false;
		private var _autoplayStartIndex:int = 0;
		private var _autoplayCurrentIndex:int = 0;
		private var _videosCompleted:Array = [];
		private var _videoTimeTracks:Array = [];
		private var _timeTrackingEnabled:Boolean = true;
		private var _lastVideoPlayed:VideoVO;

		public function VideoAdPlayer()
		{
			isModal = false;
			
			playAudioButton.visible = false;
			replayButton.visible = false;
			
			controlsEnabled = false;
			if(volumeSlider != null) volumeSlider.volume = 1;
			
			this.addEventListener(Event.ENTER_FRAME, onEnterFrame);
			videoView.addEventListener(VideoViewEvent.AT_END_CHANGED, onVideoViewAtEndChanged);
			videoView.addEventListener(VideoViewEvent.MUTED_CHANGED, onVideoViewMutedChanged);
			videoView.addEventListener(NetStatusEvent.NET_STATUS, onVideoViewNetStatus);
			playAudioButton.addEventListener(MouseEvent.CLICK, onPlayAudioButtonClick);
			replayButton.addEventListener(MouseEvent.CLICK, onReplayButtonClick);
			
			if(volumeSlider != null) volumeSlider.addEventListener(VolumeSliderEvent.SLIDER_CHANGED, onVolumeSliderChanged);
			if(rewindButton != null) rewindButton.addEventListener(MouseEvent.CLICK, onRewindButtonClick);
			if(pauseButton != null) pauseButton.addEventListener(MouseEvent.CLICK, onPauseButtonClick);
			if(playButton != null) playButton.addEventListener(MouseEvent.CLICK, onPlayButtonClick);
			if(muteButton != null) muteButton.addEventListener(MouseEvent.CLICK, onMuteButtonClick);
			if(progressBar != null) progressBar.addEventListener(ProgressBarEvent.SLIDER_CHANGED, onProgressBarSliderChanged);
			
			_configLoader = new VideoAdConfigLoader();
			_configLoader.addEventListener(Event.COMPLETE, onConfigLoad);
			_configLoader.addEventListener(IOErrorEvent.IO_ERROR, onConfigLoadError);
			_configLoader.addEventListener(SecurityErrorEvent.SECURITY_ERROR, onConfigLoadError);
		}

		///////////////////////////
		// Public Methods
		///////////////////////////

		public function loadConfig(configPath:String):void
		{
			if(!_configLoader.configLoaded && configPath != null && configPath != "")
			{
				var url:String = StringUtil.replacePresets(configPath, [StringUtil.PRESET_RANDOM, StringUtil.PRESET_TIMESTAMP]);
				_configLoader.load(new URLRequest(url));
			}
		}

		public function playVideo(key:String):void
		{
			_inAutoplayMode = false;
			playAudioButton.visible = false;
			replayButton.visible = false;
			isModal = false;
			videoView.muted = false;
			
			playVideoByKey(key);
		}

		public function setVolume(value:Number):void
		{
			videoView.volume = value;
			videoView.muted = videoView.muted;
			if(volumeSlider != null) volumeSlider.volume = value;
		}

		public function track(key:String):void
		{
			var tracked:Boolean;
			var url:String;
			
			// Track general keys (any tracks that aren't related to specific video)
			
			tracked = false;
			
			if(_config != null)
			{
				var generalTrack:TrackVO = _config.getTrackByKey(key);
				if(generalTrack != null)
				{
					url = generalTrack.path;
					TrackerUtil.track(url);
					tracked = true;
				}
				
				if(debug) 
				{
					if(tracked)
					{
						trace("Tracked (general): " + key);
					}
					else
					{
						trace("Didn't Find Track (general): " + key);
					}
				}
			}
			
			// If the track key exists for the current video, then track it too
			
			tracked = false;
			
			if(videoView.currentVideoVO != null)
			{
				var videoTrack:TrackVO = videoView.currentVideoVO.getTrackByKey(key);
				if(videoTrack != null)
				{
					url = videoTrack.path;
					TrackerUtil.track(url);
					tracked = true;
				}
				
				if(debug) 
				{
					if(tracked)
					{
						trace("Tracked (video specific): " + key);
					}
					else
					{
						trace("Didn't Find Track (video specific): " + key);
					}
				}
			}
		}

		///////////////////////////
		// Getters/Setters
		///////////////////////////

		public function get debug():Boolean 
		{
			return _debug;
		}

		public function set debug(value:Boolean):void 
		{
			_debug = value;
			videoView.debug = _debug;
		}

		public function get isModal():Boolean 
		{
			return _isModal;
		}

		public function set isModal(value:Boolean):void 
		{
			_isModal = value;
			modalBG.visible = _isModal;
		}

		public function get controlsEnabled():Boolean 
		{
			return _controlsEnabled;
		}

		public function set controlsEnabled(value:Boolean):void 
		{
			_controlsEnabled = value;
			
			if(rewindButton != null) rewindButton.enabled = _controlsEnabled;
			if(pauseButton != null) pauseButton.enabled = _controlsEnabled;
			if(playButton != null) playButton.enabled = _controlsEnabled;
			if(timeDisplay != null) timeDisplay.enabled = _controlsEnabled;
			if(volumeSlider != null) volumeSlider.enabled = _controlsEnabled;
			if(muteButton != null) muteButton.enabled = _controlsEnabled;
		}
		
		public function get lastVideoPlayed():VideoVO
		{
			return _lastVideoPlayed;
		}
		
		///////////////////////////
		// Event Handlers
		///////////////////////////

		protected function onEnterFrame(event:Event):void
		{
			if(_delayEnterFrame > 0)
			{
				_delayEnterFrame--;
			}
			else
			{
				if(videoView.hasStream && !videoView.paused && !videoView.atEnd)
				{
					if(timeDisplay != null) 
					{
						timeDisplay.currentTime = videoView.time;
						timeDisplay.totalTime = videoView.totalTime;
					}
					
					if(progressBar != null) 
					{
						progressBar.totalTime = videoView.totalTime;
						progressBar.currentTime = videoView.time;
						progressBar.percentLoaded = videoView.percentLoaded;
					}
					
					if(!_inAutoplayMode && _timeTrackingEnabled) 
					{
						doVideoTimeTracking();
					}
				}
			}
		}

		protected function onVideoViewAtEndChanged(event:VideoViewEvent):void
		{
			if(videoView.atEnd)
			{
				// Make a note that this video has been completed
				_videosCompleted.push(videoView.currentVideoVO);
				
				if(timeDisplay != null) 
				{
					timeDisplay.currentTime = videoView.totalTime;
					timeDisplay.totalTime = videoView.totalTime;
				}
				
				if(progressBar != null) 
				{
					progressBar.totalTime = videoView.totalTime;
					progressBar.currentTime = videoView.totalTime;
					progressBar.percentLoaded = 1;
				}
				
				// Check to see if loop limit has been reached, if so,
				// show replay button, if not, play next video in sequence
				if(loopLimitReached() || !_inAutoplayMode)
				{
					_inAutoplayMode = false;
					playAudioButton.visible = false;
					replayButton.visible = true;
					isModal = true;
					videoView.showPreviewFrame();
				}
				else
				{
					// Play next video in sequence
					_autoplayCurrentIndex++;
					
					// Check to make sure that we're not at the end of the 
					// list of autoplay keys. If we are at the end, then we 
					// need to set the current index to 0. If not, just move
					// on and play the next video.
					if(_autoplayCurrentIndex >= _config.autoplayKeys.length)
					{
						_autoplayCurrentIndex = 0;
					}
					
					// Check to see how many videos are in the key list.
					// If there is only one, then just rewind the video. If there
					// is more than one, then call playVideoByKey. (we shouldn't
					// reload the video if it's already loaded)
					if(_config.autoplayKeys.length > 1)
					{
						var key:String = _config.autoplayKeys[_autoplayCurrentIndex];
						playVideoByKey(key);
					}
					else
					{
						videoView.rewind();
					}
				}
			}
		}

		protected function onVideoViewMutedChanged(event:VideoViewEvent):void
		{
			if(volumeSlider != null)
			{
				if(videoView.muted) 
				{
					volumeSlider.volume = 0;
				}
				else
				{
					volumeSlider.volume = videoView.volume;
				}
			}
		}
		
		protected function onVideoViewNetStatus(event:NetStatusEvent):void
		{
			if(event.info["code"] == "NetStream.Seek.Complete") _timeTrackingEnabled = true;
		}
		
		protected function onVolumeSliderChanged(event:VolumeSliderEvent):void
		{
			if(volumeSlider != null) videoView.volume = volumeSlider.volume;
		}

		protected function onPlayAudioButtonClick(event:MouseEvent):void
		{
			track(TRACK_PLAY_AUDIO);
			
			_delayEnterFrame = 5;
			_inAutoplayMode = false;
			playAudioButton.visible = false;
			videoView.muted = false;
			isModal = false;
			
			if(_config.restartVideoOnPlayAudioClick) videoView.rewind();
		}

		protected function onReplayButtonClick(event:MouseEvent):void
		{
			track(TRACK_REPLAY);
			
			// Disable time tracking until the video is definitely back at the beginning.
			// We verify by waiting on the NetStream.Seek.Complete event, at which point,
			// we can set _timeTrackingEnabled back to true. This prevents the player
			// from immediately tracking all of the time tracks as soon as they are
			// cleared by clearVideoTimeTracks().
			_timeTrackingEnabled = false;
			clearVideoTimeTracks(true);
			
			replayButton.visible = false;
			videoView.muted = false;
			isModal = false;
			
			videoView.rewind();
		}
		
		protected function onRewindButtonClick(event:MouseEvent):void
		{
			// Disable time tracking until the video is definitely back at the beginning.
			// We verify by waiting on the NetStream.Seek.Complete event, at which point,
			// we can set _timeTrackingEnabled back to true. This prevents the player
			// from immediately tracking all of the time tracks as soon as they are
			// cleared by clearVideoTimeTracks().
			_timeTrackingEnabled = false;
			clearVideoTimeTracks(true);
			
			videoView.rewind();
		}

		protected function onPauseButtonClick(event:MouseEvent):void
		{
			videoView.togglePause();
		}

		protected function onPlayButtonClick(event:MouseEvent):void
		{
			videoView.resume();
		}

		protected function onMuteButtonClick(event:MouseEvent):void
		{
			videoView.toggleMute();
		}

		protected function onProgressBarSliderChanged(event:ProgressBarEvent):void
		{
			if(progressBar != null)
			{
				videoView.setSeekPercent(progressBar.sliderPercent);
				_delayEnterFrame = 5;
				replayButton.visible = false;
				isModal = false;
			}
			
			// Remove any time tracks from the array that are greater than the time at 
			// the new position.
			// 
			// Disable time tracking until the video is definitely at the new position.
			// We verify by waiting on the NetStream.Seek.Complete event, at which point,
			// we can set _timeTrackingEnabled back to true. This prevents the player
			// from immediately tracking all of the time tracks as soon as they are
			// cleared by clearVideoTimeTracks().
			_timeTrackingEnabled = false;
			clearVideoTimeTracks(false);
		}

		protected function onConfigLoad(event:Event):void
		{
			_config = _configLoader.config;
			dispatchEvent(new Event("configLoadComplete"));
			
			// Track initial load
			track(TRACK_CONFIG_LOAD);
			
			// Set video buffer time
			videoView.bufferTime = _config.bufferTime;
			
			// Check to make sure at least one key actually exists in config
			var keysLen:int = _config.autoplayKeys.length;
			if(keysLen > 0)
			{
				autoplayVideos();
			}
		}

		protected function onConfigLoadError(event:Event):void
		{
			dispatchEvent(new Event("configLoadError"));
		}

		///////////////////////////
		// Helpers
		///////////////////////////

		protected function autoplayVideos():void
		{
			_inAutoplayMode = true;
			
			// If autoplaying, mute the video
			if(_config.muteAutoplay)
			{
				videoView.muted = true;
				playAudioButton.visible = true;
				isModal = true;
			}
			
			// Pick random index from list of autoplayKeys array
			// Store this random index, so we can refer to it later to 
			// play the next video in the sequence.
			_autoplayStartIndex = NumberUtil.getRandom(0, _config.autoplayKeys.length);
			_autoplayCurrentIndex = _autoplayStartIndex;
			
			// Autoplay random video from list of keys in config
			var key:String = _config.autoplayKeys[_autoplayStartIndex];
			playVideoByKey(key);
		}

		protected function playVideoByKey(key:String):void
		{
			if(_config != null)
			{
				// Reset time tracks since new video is being loaded
				clearVideoTimeTracks(true);
				
				// Play a video by key string
				var videoVO:VideoVO = _config.getVideoByKey(key);
				videoView.playVideo(videoVO);
				
				// Enable controls
				controlsEnabled = true;
				
				// Store reference to this key and dispatch videoSwitch event
				_lastVideoPlayed = videoVO;
				dispatchEvent(new Event("videoSwitch"));
			}
		}

		protected function loopLimitReached():Boolean
		{
			var vidsPlayed:int = _videosCompleted.length;
			var numKeys:int = _config.autoplayKeys.length;
			var loops:int = _config.autoplayLoop + 1;
			
			return (vidsPlayed / numKeys >= loops);
		}

		///////////////////////////
		// Video Time Tracking Helpers
		///////////////////////////
		
		// If forceClearAll is set, then empty the time tracking array,
		// otherwise, check the current time, and only clear the tracks
		// that have a time that is greater than the current time.
		private function clearVideoTimeTracks(forceClearAll:Boolean):void
		{
			if(forceClearAll || videoView.currentVideoVO == null)
			{
				_videoTimeTracks = [];
			}
			else
			{
				// First, clear the existing time tracks, so we can add any tracks
				// that are less than the current playhead position time, and remove 
				// any tracks that are greater than the current playhead position time.
				_videoTimeTracks = [];
				
				// Calculate time instead of using progressBar.currentTime here...
				// Must do this because the currentTime in the progressBar may not
				// have updated yet, if the user is scrubbing the playhead.
				var progressBarTime:Number = progressBar.sliderPercent * videoView.totalTime;
				
				var len:int = videoView.currentVideoVO.tracks.length;
				for(var i:int=0; i<len; i++)
				{
					var trackVO:TrackVO = TrackVO(videoView.currentVideoVO.tracks[i]);
					if(trackVO.time < progressBarTime)
					{
						_videoTimeTracks.push(trackVO);
					}
				}
			}
		}
		
		private function doVideoTimeTracking():void
		{
			var timeTracks:Array = getTrackableTimeTracks();
			var len:int = timeTracks.length;
			for(var i:int = 0;i < len;i++)
			{
				var vo:TrackVO = TrackVO(timeTracks[i]);
				TrackerUtil.track(vo.path);
				
				// Make note that this track has already been tracked
				_videoTimeTracks.push(vo);
				
				if(debug) trace("Tracked: " + videoView.currentVideoVO.key + " at " + vo.time + " seconds");
			}
		}

		private function getTrackableTimeTracks():Array
		{
			var timeTracks:Array = videoView.currentVideoVO.timeTracks;
			var expiredTracks:Array = timeTracks.filter(hasExpired);
			var untrackedExpiredTracks:Array = expiredTracks.filter(hasNotBeenTracked);
			
			return untrackedExpiredTracks;
		}

		private function hasExpired(vo:TrackVO, index:int, arr:Array):Boolean 
		{
			index; 
			arr;
			var expired:Boolean = false;
			
			if(!isNaN(videoView.time) && vo.time <= videoView.time)
			{
				expired = true;
			}
			
			return expired;
		}

		private function hasNotBeenTracked(vo:TrackVO, index:int, arr:Array):Boolean 
		{
			index; 
			arr;
			var notInTrackingArray:Boolean = true;
			
			// check to see if this track has been tracked already
			var len:int = _videoTimeTracks.length;
			for(var i:int = 0;i < len;i++)
			{
				if(_videoTimeTracks[i] == vo) notInTrackingArray = false;
			}
			
			return notInTrackingArray;
		}
	}
}
