package com.scrippsnetworks.adsales.videoad.controls 
{
	import com.greensock.TweenLite;
	import com.scrippsnetworks.adsales.videoad.events.VolumeSliderEvent;

	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import flash.geom.Rectangle;

	/**
	 * @author Tim McLeod
	 */
	public class VolumeSlider extends MovieClip 
	{
		public var track:MovieClip;
		public var handle:MovieClip;

		private var _handleBeingDragging:Boolean = false;

		public function VolumeSlider() 
		{
			handle.buttonMode = true;
			handle.addEventListener(MouseEvent.MOUSE_DOWN, onHandleMouseDown);
			handle.addEventListener(MouseEvent.MOUSE_UP, onHandleMouseUp);
		}

		///////////////////////////
		// Event Handlers
		///////////////////////////

		protected function onHandleMouseDown(event:MouseEvent):void
		{
			handle.startDrag(false, new Rectangle(track.x, track.y, track.width, 0));
			_handleBeingDragging = true;
			
			stage.addEventListener(MouseEvent.MOUSE_UP, onHandleMouseUp);
			stage.addEventListener(MouseEvent.MOUSE_MOVE, onHandleMouseMove);
		}

		protected function onHandleMouseUp(event:MouseEvent):void
		{
			handle.stopDrag();
			_handleBeingDragging = false;
			
			dispatchEvent(new VolumeSliderEvent(VolumeSliderEvent.SLIDER_CHANGED));
			
			stage.removeEventListener(MouseEvent.MOUSE_UP, onHandleMouseUp);
			stage.removeEventListener(MouseEvent.MOUSE_MOVE, onHandleMouseMove);
		}

		protected function onHandleMouseMove(event:MouseEvent):void
		{
			if(_handleBeingDragging == true) dispatchEvent(new VolumeSliderEvent(VolumeSliderEvent.SLIDER_CHANGED));
		}

		///////////////////////////
		// Public Methods
		///////////////////////////

		public function set volume(value:Number):void
		{
			// handle.x = (value * track.width) + track.x;
			TweenLite.to(handle, 0.25, {x:(value * track.width) + track.x});
		}

		public function get volume():Number
		{
			return (handle.x - track.x) / track.width;
		}
	}
}
