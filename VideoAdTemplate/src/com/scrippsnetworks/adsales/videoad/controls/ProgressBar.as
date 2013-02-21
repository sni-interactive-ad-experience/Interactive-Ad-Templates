package com.scrippsnetworks.adsales.videoad.controls 
{
	import com.scrippsnetworks.adsales.videoad.events.ProgressBarEvent;

	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import flash.geom.Rectangle;

	/**
	 * @author Tim McLeod
	 */
	public class ProgressBar extends MovieClip 
	{
		public var playProgress:MovieClip;
		public var loadProgress:MovieClip;
		public var progressTrack:MovieClip;
		public var handle:MovieClip;

		private var _currentTime:Number = 0;
		private var _totalTime:Number = 0;
		private var _percentLoaded:Number = 0;
		private var _handleBeingDragging:Boolean = false;
		private var _ignoreNextRefresh:Boolean = false;

		public function ProgressBar() 
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
			handle.startDrag(false, new Rectangle(progressTrack.x, progressTrack.y, progressTrack.width, 0));
			_handleBeingDragging = true;
			
			stage.addEventListener(MouseEvent.MOUSE_UP, onHandleMouseUp);
			stage.addEventListener(MouseEvent.MOUSE_MOVE, onHandleMouseMove);
		}

		protected function onHandleMouseUp(event:MouseEvent):void
		{
			handle.stopDrag();
			_handleBeingDragging = false;
			_ignoreNextRefresh = true;
			
			dispatchEvent(new ProgressBarEvent(ProgressBarEvent.SLIDER_CHANGED));
			refreshView();
			
			stage.removeEventListener(MouseEvent.MOUSE_UP, onHandleMouseUp);
			stage.removeEventListener(MouseEvent.MOUSE_MOVE, onHandleMouseMove);
		}

		protected function onHandleMouseMove(event:MouseEvent):void
		{
			if(_handleBeingDragging == true) playProgress.width = handle.x;
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
			refreshView();
		}

		public function get totalTime():Number 
		{
			return _totalTime;
		}

		public function set totalTime(value:Number):void 
		{
			_totalTime = value;
			refreshView();
		}

		public function get percentLoaded():Number 
		{
			return _percentLoaded;
		}

		public function set percentLoaded(value:Number):void 
		{
			_percentLoaded = value;
			refreshView();
		}

		public function get sliderPercent():Number
		{
			return handle.x / progressTrack.width;
		}

		///////////////////////////
		// Helpers
		///////////////////////////

		public function refreshView():void
		{
			if(_ignoreNextRefresh)
			{
				_ignoreNextRefresh = false;
			}
			else
			{
				if(percentLoaded >= 0.99)
				{
					loadProgress.width = progressTrack.width;
				}
				else
				{
					loadProgress.width = percentLoaded * progressTrack.width;
				}
					
				if(_handleBeingDragging != true)
				{
					var percentPlayed:Number = currentTime / totalTime;
					if(percentPlayed >= 0.99)
					{
						playProgress.width = progressTrack.width;
					}
					else
					{
						
						playProgress.width = percentPlayed * progressTrack.width;
					}
					
					handle.x = playProgress.width;
				}
			}
		}
	}
}
