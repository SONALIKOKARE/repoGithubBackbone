define(function(require){
	var aConts = [], mouseY = 0,N = 0, asd=0, sc=0, sp=0, to=0, ssb={}, self, callback;
	return function(){
		this.scrollbar = function (cont_id, _callback) {
			self = this;
			self.callback = _callback;
			var cont = document.getElementById(cont_id); 
			// perform initialization
			if (! this.init()) return false;
			var cont_clone = cont.cloneNode(false);
			cont_clone.style.overflow = "hidden";
			cont.parentNode.appendChild(cont_clone);
			cont_clone.appendChild(cont);
			cont.style.position = 'relative';
			cont.style.left = cont.style.top = '0%';
			cont.style.left = cont.style.left = '0%';
			cont.style.height = cont.style.height = '100%';
			cont.style.width = cont.style.width = '100%';

			// adding new container into array
			aConts[N++] = cont;

			cont.sg = false;
			//creating scrollbar child elements
			cont.st = this.create_div('ssb_st', cont, cont_clone);
			cont.sb = this.create_div('ssb_sb', cont, cont_clone);
			cont.su = this.create_div('ssb_up', cont, cont_clone);
			cont.sd = this.create_div('ssb_down', cont, cont_clone);
			cont.su.arrow_up = this.create_div('arrow-up',cont, cont.su);
			cont.sd.arrow_down = this.create_div('arrow-down',cont, cont.sd);

			// on mouse down processing
			cont.sb.onmousedown = function (e) {
				if (! this.cont.sg) {
					if (! e) e = window.event;
					asd = this.cont;
					this.cont.yZ = e.screenY;
					this.cont.sZ = cont.scrollTop;
					this.cont.sg = true;
					// new class name
					this.className = 'ssb_sb ssb_sb_down';
				}
				return false;
			};

			// on mouse down on free track area - move our scroll element too
			cont.st.onmousedown = function (e) {
				if (! e) e = window.event;
				asd = this.cont;
				mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
				for (var o = this.cont, y = 0; o !== null; o = o.offsetParent) y += o.offsetTop;
				this.cont.scrollTop = (mouseY - y - (this.cont.ratio * this.cont.offsetHeight / 2) - this.cont.sw) / this.cont.ratio;
				this.cont.sb.onmousedown(e);
			};

			// onmousedown events
			cont.su.onmousedown = cont.su.ondblclick = function (e) { self.mousedown(this, -1); return false; };
			cont.sd.onmousedown = cont.sd.ondblclick = function (e) { self.mousedown(this,  1); return false; };

			//onmouseout events
			cont.su.onmouseout = cont.su.onmouseup = self.clear;
			cont.sd.onmouseout = cont.sd.onmouseup = self.clear;

			// on mouse over - apply custom class name: ssb_sb_over
			cont.sb.onmouseover = function (e) {
				if (! this.cont.sg) this.className = 'ssb_sb ssb_sb_over';
				return false;
			};

			// on mouse out - revert back our usual class name 'ssb_sb'
			cont.sb.onmouseout  = function (e) {
				if (! this.cont.sg) this.className = 'ssb_sb';
				return false;
			};

			// onscroll - change positions of scroll element
			cont.ssb_onscroll = function () {
				this.ratio = (this.offsetHeight - 2 * this.sw) / this.scrollHeight;
				this.sb.style.top = Math.floor(this.sw + this.scrollTop * this.ratio) + 'px';
				try{self.callback(this.sb.style.top);}catch(e){}
			};
			// scrollbar width
			cont.sw = 20;

			// start scrolling
			cont.ssb_onscroll();
			this.refresh();
			// binding own onscroll event
			cont.onscroll = cont.ssb_onscroll;
			return cont;
		},
		this.init = function () {
			if (window.oper || (! window.addEventListener && ! window.attachEvent)) { return false; }

			// temp inner function for event registration
			function addEvent (o, e, f) {
				if (window.addEventListener) { o.addEventListener(e, f, false); w3c = true; return true; }
				if (window.attachEvent) return o.attachEvent('on' + e, f);
				return false;
			}

			// binding events
			addEvent(window.document, 'mousemove', this.onmousemove);
			addEvent(window.document, 'mouseup', this.onmouseup);
			//addEvent(window, 'resize', this.refresh);
			return true;
		},
		this.create_div = function(c, cont, cont_clone) {
			var o = document.createElement('div');
			o.cont = cont;
			o.className = c;
			cont_clone.appendChild(o);
			return o;
		},
		this.clear = function () {
			clearTimeout(to);
			sc = 0;
			return false;
		},
		this.refresh = function () {
			for (var i = 0; i < aConts.length; i++) {
				var o = aConts[i];
				o.ssb_onscroll();
				o.sb.style.width = o.st.style.width = o.su.style.width = o.su.style.height = o.sd.style.width = o.sd.style.height = o.sw + 'px';
				o.sb.style.height = Math.ceil(Math.max(o.sw * 0.5, o.ratio * o.offsetHeight) + 1) + 'px';
			}
		},
		this.arrow_scroll = function () {
			if (sc !== 0) {
				asd.scrollTop += 6 * sc / asd.ratio;
				to = setTimeout(self.arrow_scroll, sp);
				sp = 32;
			}
		},
		this.mousedown = function (o, s) {
			if (sc === 0) {
				// new class name
				o.cont.sb.className = 'ssb_sb ssb_sb_down';
				asd = o.cont;
				sc = s;
				sp = 400;
				self.arrow_scroll();
			}
		},
		this.onmousemove = function(e) {
			if (! e) e = window.event;
			// get vertical mouse position
			mouseY = e.screenY;
			if (asd.sg) asd.scrollTop = asd.sZ + (mouseY - asd.yZ) / asd.ratio;
		},
		this.onmouseup = function (e) {
			if (! e) e = window.event;
			var tg = (e.target) ? e.target : e.srcElement;
			if (asd && document.releaseCapture) asd.releaseCapture();

			// new class name
			if (asd) asd.sb.className = (tg.className.indexOf('scrollbar') > 0) ? 'ssb_sb ssb_sb_over' : 'ssb_sb';
			document.onselectstart = '';
			this.clear();
			asd.sg = false;
		},
		this.destroy = function(){
			cont.sb.onmousedown = null;
			cont.st.onmousedown = null;
			cont.sb.onmouseover = null;
			cont.su.onmouseout = cont.su.onmouseup = null;
			cont.sd.onmouseout = cont.sd.onmouseup = null;
			cont.su.onmousedown = cont.su.ondblclick = null;
			cont.sd.onmousedown = cont.sd.ondblclick = null;
			function removeEvent (o, e, f) {
				if (window.removeEventListener) {
					o.removeEventListener(e, function(){}, false); 
					w3c = true; 
				}
				if (window.detachEvent) return o.detachEvent('on' + e, f);
			}
			// unbinding events
			removeEvent(window.document, 'mousemove', this.onmousemove);
			removeEvent(window.document, 'mouseup', this.onmouseup);
			//addEvent(window, 'resize', refresh);
		};
	};
});