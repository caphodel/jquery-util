(function($) {
	/**
	 * Check if element is in viewport
	 * @return {boolean} true if element in viewport
	 * @author Deddy Lasmono Putro
	 */
	$.fn.inViewport = function() {
	    var rect = this.getBoundingClientRect();

	    return (
	      rect.top >= 0 &&
	      rect.left >= 0 &&
	      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
	};

	/**
	 * Get HTML string of element
	 * @return {String}   Outer HTML string of an element
	 * @author Deddy Lasmono Putro
	 */
	$.fn.outerHTML = function(s) {
		return s ? this.before(s).remove() : jQuery("<p>").append(this.eq(0).clone()).html();
	};

	/**
	 * Check if element touched the top of the window
	 * @return {boolean} true if element touched the top of the window
	 * @author Deddy Lasmono Putro
	 */
	$.fn.touchTop = function(){
		//var el = $(this);
		return $(this).offset().top<0;
	};

	/**
	 * Check if element touched the bottom of the window
	 * @return {boolean} true if element touched the bottom of the window
	 * @author Deddy Lasmono Putro
	 */
	$.fn.touchBottom = function(){
		var wd = $(window);
		return (this.offset().top + this.height()) >= (wd.height()+wd.scrollTop());
	};

	/**
	 * Get RGB value from hex color
	 * @param  {string} color Hex color
	 * @return {object}       Objct containing RGB value
	 * @author Deddy Lasmono Putro
	 */
	$.getRGB = function(color) {
		var r, g, b, rgb;
		if(color.match(/rgb/gi)){
			rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			r = rgb[1];
			g = rgb[2];
			b = rgb[3];

		  return {
				R: r,
				G: g,
				B: b
		  };
		}
		else{
			r = color.substring(1, 3);
			g = color.substring(3, 5);
			b = color.substring(5, 7);

		  return {
				R: parseInt(r, 16),
				G: parseInt(g, 16),
				B: parseInt(b, 16)
		  };
		}
	};

	/**
	 * Get ideal color (black or white) for defined background color
	 * @param  {string} bgColor Hex color
	 * @return {string} color Hex color (black/white)
	 * @author Deddy Lasmono Putro
	 */
	$.idealTextColor = function(bgColor) {

		var nThreshold = 105,
		components = $.getRGB(bgColor),
		bgDelta = (components.R * 0.299) + (components.G * 0.587) + (components.B * 0.114);

		return ((255 - bgDelta) < nThreshold) ? "#000000" : "#ffffff";
	};

	/**
	 * Center an element
	 * @return {jQuery} jQuery object
	 * @author Deddy Lasmono Putro
	 */
	$.fn.center = function () {
		var wd = $(window)
	  this.css("position","absolute");
	  this.css("top", Math.max(0, ((wd.height() - this.outerHeight(false)) / 2) + wd.scrollTop()) + "px");
	  this.css("left", Math.max(0, ((wd.width() - this.outerWidth(false)) / 2) + wd.scrollLeft()) + "px");
	  return this;
	};
})(jQuery);
