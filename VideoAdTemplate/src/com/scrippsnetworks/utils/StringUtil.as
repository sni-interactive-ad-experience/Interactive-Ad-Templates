package com.scrippsnetworks.utils
{

	public class StringUtil
	{
		public static var PRESET_TIMESTAMP:String = "[timestamp]";
		public static var PRESET_RANDOM:String = "[random]";

		public static function replace(input:String, replace:String, replaceWith:String):String
		{
			return input.split(replace).join(replaceWith);
		}

		public static function replacePresets(input:String, presets:Array):String
		{
			if(stringInArray(PRESET_TIMESTAMP, presets)) input = StringUtil.replace(input, PRESET_TIMESTAMP, getTimestampString());
			if(stringInArray(PRESET_RANDOM, presets)) input = StringUtil.replace(input, PRESET_RANDOM, getRandomNumberString());
			
			return input;
		}

		public static function stringInArray(str:String, array:Array):Boolean
		{
			var len:int = array.length;
			for(var i:int = 0;i < len;i++)
			{
				if(array[i] === str) return true;
			}
			
			return false;
		}

		public static function getTimestampString():String
		{
			return new Date().time.toString();
		}

		public static function getRandomNumberString():String
		{
			return NumberUtil.getRandom(1000000000, 9999999999).toString();
		}

		public static function getBooleanForString(value:String):Boolean
		{
			var result:Boolean = false;
			if(value.toLowerCase() == "true") result = true;
			return result;
		}
	}
}
