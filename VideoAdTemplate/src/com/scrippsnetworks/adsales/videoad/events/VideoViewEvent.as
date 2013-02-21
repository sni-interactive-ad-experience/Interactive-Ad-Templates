package com.scrippsnetworks.adsales.videoad.events 
{
	import flash.events.Event;

	/**
	 * @author Tim McLeod
	 */
	public class VideoViewEvent extends Event 
	{
		public static const VIDEO_TIME_CHANGED:String = "videoTimeChanged";
		public static const VOLUME_CHANGED:String = "volumeChanged";
		public static const MUTED_CHANGED:String = "mutedChanged";
		public static const PAUSED_CHANGED:String = "pausedChanged";
		public static const AT_END_CHANGED:String = "atEndChanged";

		public function VideoViewEvent(type:String)
		{
			super(type);
		}
	}
}
