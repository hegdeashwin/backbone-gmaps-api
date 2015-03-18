// backbone-gmaps-api 0.0.0
//
// (c) 2015 hegdeashwin
// Licensed under the MIT license.

(function(factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery', 'underscore', 'backbone'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'), require('underscore'), require('backbone'));
	} else {
		// Globals
		factory(jQuery, _, Backbone);
	}
}(function($, _, Backbone) {

	"use strict";

	var Gmaps = $.fn.Gmaps = function() {
		console.log("Log: Gmaps function");
	};

	Gmaps.CreateMap = Backbone.View.extend({
		defaults: {
			"lat": 18.562622,
			"lng": 73.808723,
			"zoom": 8,
			"elref": "<div/>",
			"canDoubleClickZoom": true,
			"canKeyboardOperate": true,
			"canMouseScrollWheel": true,
			"canZoomControl": true,
			"isDraggable": true
		},

		initialize: function(options) {
			console.log("Log: Gmaps create view initialize.");

			_.defaults(this, this.defaults);
			_.extend(this, _.pick(options, _.keys(this.defaults)));

			this.mapOptions = {
				center: {
					lat: this.lat,
					lng: this.lng
				},
				zoom: this.zoom,
				zoomControl: this.canZoomControl,
				disableDoubleClickZoom: this.canDoubleClickZoom,
				keyboardShortcuts: this.canKeyboardOperate,
				scrollwheel: this.canMouseScrollWheel,
				draggable: this.isDraggable
			};
		},

		render: function() {
			console.log("Log: Gmaps create render.");

			this.map = new google.maps.Map(document.getElementById('map-canvas'), this.mapOptions);

			return this;
		},

	});

}));