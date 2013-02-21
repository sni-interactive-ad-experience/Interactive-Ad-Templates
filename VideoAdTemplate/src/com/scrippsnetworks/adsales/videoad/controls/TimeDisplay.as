package com.scrippsnetworks.adsales.videoad.controls 
{
	import com.scrippsnetworks.utils.NumberUtil;

	import flash.display.MovieClip;
	import flash.text.TextField;

	/**
	 * @author Tim McLeod
	 */
	public class TimeDisplay extends MovieClip 
	{
		public var currentTimeTextField:TextField;
		public var totalTimeTextField:TextField;

		private var _currentTime:Number;
		private var _totalTime:Number;

		public function TimeDisplay() 
		{
			currentTime = 0;
			totalTime = 0;
		}

		///////////////////////////
		// Getters/Setters
		///////////////////////////

		public function get currentTime():Number 
		{
			return _currentTime;
		}

		public function set currentTime(value:Number):void 
		{
			_currentTime = value;
			currentTimeTextField.text = currentTimeString;
		}

		public function get totalTime():Number 
		{
			return _totalTime;
		}

		public function set totalTime(value:Number):void 
		{
			_totalTime = value;
			totalTimeTextField.text = totalTimeString;
		}

		// READ-ONLY

		public function get currentTimeString():String
		{
			return NumberUtil.getTimeString(currentTime);
		}

		public function get totalTimeString():String
		{
			return NumberUtil.getTimeString(totalTime);
		}
		
		///////////////////////////
		// Helpers
		///////////////////////////
	}
}
