package com.scrippsnetworks.adsales.videoad.events 
{
	import flash.events.Event;

	/**
	 * @author Tim McLeod
	 */
	public class VolumeSliderEvent extends Event 
	{
		public static const SLIDER_CHANGED:String = "sliderChanged";

		public function VolumeSliderEvent(type:String)
		{
			super(type);
		}
	}
}
