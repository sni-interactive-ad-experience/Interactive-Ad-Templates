package com.scrippsnetworks.adsales.videoad.events 
{
	import flash.events.Event;

	/**
	 * @author Tim McLeod
	 */
	public class ProgressBarEvent extends Event 
	{
		public static const SLIDER_CHANGED:String = "sliderChanged";

		public function ProgressBarEvent(type:String)
		{
			super(type);
		}
	}
}
