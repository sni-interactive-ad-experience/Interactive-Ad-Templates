package com.scrippsnetworks.utils
{

	public class NumberUtil
	{
		public static function getRandom(low:Number, high:Number):Number
		{
			return Math.floor(Math.random() * (high - low)) + low;
		}

		/**
		 * Returns time in hh:mm:ss format from seconds
		 */
		public static function getTimeString(time:Number):String
		{
			if (time < 0 || isNaN(time)) return "00:00";
			
			var remainder:Number;
			var h:Number = time / (60 * 60);
			remainder = h - (Math.floor(h));
			h = Math.floor(h);
			
			var m:Number = remainder * 60;
			remainder = m - (Math.floor(m));
			m = Math.floor(m);
			
			var s:Number = remainder * 60;
			remainder = s - (Math.floor(s));
			s = Math.floor(s);
			
			var hStr:String = h < 10 ? "0" + h : h.toString();	
			var mStr:String = m < 10 ? "0" + m : m.toString();
			var sStr:String = s < 10 ? "0" + s : s.toString();
			
			if (h > 0)
			{			
				return hStr + ":" + mStr + ":" + sStr;
			}
			else
			{
				return mStr + ":" + sStr;
			}
		}

		public static function round(numIn:Number, decimalPlaces:int):Number 
		{
			var nExp:int = Math.pow(10, decimalPlaces); 
			return Math.round(numIn * nExp) / nExp;
		}
	}
}
