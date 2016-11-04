// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
(function (wnd) {
	var h, l = this;

	function m(a) {
		return void 0 !== a
	}

	function aa(a) {
		a.g = function () {
			return a.ea ? a.ea : a.ea = new a
		}
	}

	function ba(a) {
		var b = typeof a;
		if ("object" == b)
			if (a) {
				if (a instanceof Array) return "array";
				if (a instanceof Object) return b;
				var c = Object.prototype.toString.call(a);
				if ("[object Window]" == c) return "object";
				if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
				if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
			}
			else return "null";
		else if ("function" == b && "undefined" == typeof a.call) return "object";
		return b
	}

	function ca(a) {
		return "array" == ba(a)
	}

	function da(a) {
		var b = ba(a);
		return "array" == b || "object" == b && "number" == typeof a.length
	}

	function n(a) {
		return "string" == typeof a
	}

	function ea(a) {
		return "function" == ba(a)
	}

	function fa(a) {
		var b = typeof a;
		return "object" == b && null != a || "function" == b
	}
	var ga = "closure_uid_" + (1E9 * Math.random() >>> 0)
		, ha = 0;

	function ia(a, b, c) {
		return a.call.apply(a.bind, arguments)
	}

	function ja(a, b, c) {
		if (!a) throw Error();
		if (2 < arguments.length) {
			var d = Array.prototype.slice.call(arguments, 2);
			return function () {
				var c = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(c, d);
				return a.apply(b, c)
			}
		}
		return function () {
			return a.apply(b, arguments)
		}
	}

	function p(a, b, c) {
		p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
		return p.apply(null, arguments)
	}
	var ka = Date.now || function () {
		return +new Date
	};

	function q(a, b) {
		var c = a.split(".")
			, d = l;
		c[0] in d || !d.execScript || d.execScript("var " + c[0]);
		for (var e; c.length && (e = c.shift());) !c.length && m(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
	}

	function r(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.o = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a;
		a.wa = function (a, c, f) {
			for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
			return b.prototype[c].apply(a, g)
		}
	};
	var la = {
		mvc: {
			DataType: "MVCModelData"
		}
		, View: {
			contentElementTypeAttr: "wnd_mvc_type"
		}
		, PageStyles: {
			dataType: "page_and_template_styles"
		}
		, StaticServerCategory: {
			templates: "templates"
			, logo: "logo"
			, background: "background"
			, layoutBackground: "layoutBackground"
			, socialIcons: "socialIcons"
			, content: "content"
			, microtemplate: "microtemplate"
			, sectionBackgroundPrefix: "sectionBackground_"
			, microtemplatePrefix: "microtemplate_"
			, favicon: "favicon"
		}
		, Error: {
			unknownJs: {
				whiteList: "webnode keen google typekit newrelic nr-data.net".split(" ")
			}
		}
	};
	var ma = null;

	function na(a, b) {
		var c = m(u.labels[a]) ? u.labels[a] : "";
		b && (c = c.replace(/\{(\w+)}/g, function (a, c) {
			c = c.toLowerCase();
			return c in b ? b[c] : a
		}));
		return c
	};

	function oa(a, b) {
		this.b = a;
		this.a = b || "";
		this.c = Error(a).stack || ""
	}
	oa.prototype.toString = function () {
		return "wnd.core.Exception: " + this.b + (this.a ? "(" + this.a + ")" : "")
	};

	function v(a, b) {
		oa.call(this, a);
		b || (b = {
			error: {
				message: a
				, filename: ""
				, lineno: ""
				, stack: this.c
			}
		});
		this.log(b)
	}
	r(v, oa);
	v.prototype.log = function (a) {
		if (u.isCms) {
			var b;
			b = document.getElementsByTagName("script");
			for (var c = la.Error.unknownJs.whiteList, d = "", e = "", f = 0, g = b.length; f < g; f++)(d = b[f].getAttribute("src")) && !pa(c, d) && (e += d + "; ");
			(b = e) && (a.error.unknownJs = b)
		}
	};

	function pa(a, b) {
		return 0 < a.filter(function (a) {
			return -1 !== b.indexOf(a)
		}).length
	}
	window.addEventListener("error", function (a) {
		var b = "";
		m(a.message) && (b = a.message);
		if (-1 == b.indexOf("Script error")) {
			var c = "";
			m(a.filename) && (c = a.filename);
			var d = "";
			m(a.lineno) && (d = a.lineno);
			new v(b, {
				error: {
					message: b
					, filename: c
					, lineno: d
				}
			})
		}
	}, !1);
	var qa = {
		DataObjectFactory: {
			gui_pages: "wnd.data.DbDataObject"
			, gui_page_templates: "wnd.data.DbDataObject"
			, filesystem_files: "wnd.data.DbDataObject"
			, filesystem_dir: "wnd.data.DbDataObject"
			, my_videos: "wnd.data.DbDataObject"
			, listing_items: "wnd.data.DbDataObject"
			, server_projects: "wnd.data.ServerProjectDbDataObject"
		}
		, DataCollectionFactory: {
			fe_languages: "wnd.data.DbDataCollection"
			, admin_languages: "wnd.data.DbDataCollection"
			, gui_pages: "wnd.data.DbDataCollection"
			, filesystem_files: "wnd.data.DbDataCollection"
			, my_videos: "wnd.data.DbDataCollection"
			, listing_items: "wnd.data.DbDataCollection"
			, static_server: "wnd.data.StaticServerDataCollection"
			, tpl_page_templates: "wnd.data.DbDataCollection"
			, page_and_template_styles: "wnd.data.PageAndTemplateStylesCollection"
			, tpl_color_sets: "wnd.data.PrecachedDataCollection"
			, tpl_forms: "wnd.data.DbDataCollection"
			, tpl_form_fields: "wnd.data.DbDataCollection"
			, server_projects: "wnd.data.DbDataCollection"
		}
		, UndoRedoManager: {
			fade: {
				start: .25
				, end: 1
				, time: 1E3
			}
		}
		, PremiumContentChecker: {
			content_items: {
				backgroundVideo: {
					path: "style/backgroundSettings/*/*/mediaType"
					, value: ["videos", "myVideos"]
					, packageLevel: 1
					, exceptionCode: 2003
				}
			}
			, styles: {
				backgroundVideo: {
					path: "backgroundSettings/*/mediaType"
					, value: ["videos", "myVideos"]
					, packageLevel: 1
					, exceptionCode: 2003
				}
			}
		}
	};
	var w = {
		ImageSizeManager: {
			mvcID: "ImageSizeManager"
			, DataType: "image_content_items"
			, backgroundClass: "wnd-background-image"
			, allowTypes: "wnd.pc.ImageBlock wnd.pc.PhotoGalleryBlock wnd.pc.PhotoImageBlock wnd.pc.LogoBlock wnd.pc.PhotoGallerySettingsForm wnd.pc.PhotoGallerySettingsPopupContent wnd.pc.Section wnd.pc.HeaderSection wnd.pc.FooterSection".split(" ")
			, replaceTimeout: 150
		}
		, ImageTools: {
			identifier: "imageTools"
		}
		, VideoLoaderManager: {
			mvcID: "VideoLoaderManager"
			, className: "wnd-video-background"
			, orientationClassName: {
				landscape: "orientation-landscape"
				, portrait: "orientation-portrait"
			}
			, videoApi: {
				youtube: "https://www.youtube.com/iframe_api"
				, vimeo: "https://f.vimeocdn.com/js/froogaloop2.min.js"
			}
		}
		, UploadManager: {
			supportedImagesMime: ["image/png", "image/jpeg", "image/gif"]
			, supportedFaviconMime: ["image/x-icon"]
			, supportedExifMime: ["image/jpeg"]
			, maxResizeImageDimension: 1920
			, maxCanvasResolution: {
				low: 4E3
				, normal: 8E3
				, high: 32E3
			}
			, processImagesCount: 1
			, imageOrientation: [1, 2, 3, 4, 5, 6, 7, 8]
			, imageTransformation: {
				1: {
					degree: 0
					, flip: !1
					, ratio: !1
				}
				, 2: {
					degree: 0
					, flip: !0
					, ratio: !1
				}
				, 3: {
					degree: 180
					, flip: !0
					, ratio: !1
				}
				, 4: {
					degree: 180
					, flip: !1
					, ratio: !1
				}
				, 5: {
					degree: 90
					, flip: !0
					, ratio: !0
				}
				, 6: {
					degree: 90
					, flip: !1
					, ratio: !0
				}
				, 7: {
					degree: -90
					, flip: !0
					, ratio: !0
				}
				, 8: {
					degree: -90
					, flip: !1
					, ratio: !0
				}
			}
		}
		, FilesystemPreviewSize: {
			detail: 700
			, normal: 450
			, small: 200
		}
	};
	var x = {
		FormManager: {
			mvcID: "FormManager"
		}
		, template: {
			classNames: {
				fixed: "wnd-fixed"
				, invalidFormField: "wnd-validate-error"
				, formField: "wnd-form-field"
				, formSubmitted: "wnd-form-submitted"
				, formCaptcha: "form-captcha"
			}
			, topOffset: 100
		}
		, CookieBar: {
			mvcID: "CookieBar"
			, cookies: {
				age: 31536E3
				, identifier: "cookieWarning"
			}
		}
	};
	var ra = document.location.href
		, sa = document.location.hash
		, ta = document.location.host
		, ua = document.location.hostname
		, va = document.location.pathname
		, wa = document.location.port
		, xa = document.location.protocol
		, Aa = document.location.search;
	q("wnd.fe.Location", function () {});
	q("wnd.fe.Location.href", ra);
	q("wnd.fe.Location.hash", sa);
	q("wnd.fe.Location.host", ta);
	q("wnd.fe.Location.hostname", ua);
	q("wnd.fe.Location.pathname", va);
	q("wnd.fe.Location.port", wa);
	q("wnd.fe.Location.protocol", xa);
	q("wnd.fe.Location.search", Aa);
	q("wnd.fe.Location.assign", function () {});
	q("wnd.fe.Location.replace", function () {});
	q("wnd.fe.Location.reload", function () {});

	function y() {
		0 != Ba && (Ca[this[ga] || (this[ga] = ++ha)] = this);
		this.l = this.l;
		this.v = this.v
	}
	var Ba = 0
		, Ca = {};
	y.prototype.l = !1;
	y.prototype.dispose = function () {
		if (!this.l && (this.l = !0, this.m(), 0 != Ba)) {
			var a = this[ga] || (this[ga] = ++ha);
			delete Ca[a]
		}
	};
	y.prototype.m = function () {
		if (this.v)
			for (; this.v.length;) this.v.shift()()
	};

	function Da(a, b) {
		this.type = a;
		this.b = this.target = b;
		this.c = !1
	}
	Da.prototype.stopPropagation = function () {
		this.c = !0
	};
	Da.prototype.preventDefault = function () {};
	var Ea = "closure_listenable_" + (1E6 * Math.random() | 0)
		, Fa = 0;

	function Ga(a, b, c, d, e) {
		this.listener = a;
		this.a = null;
		this.src = b;
		this.type = c;
		this.R = !!d;
		this.b = e;
		this.da = ++Fa;
		this.O = this.U = !1
	}

	function Ha(a) {
		a.O = !0;
		a.listener = null;
		a.a = null;
		a.src = null;
		a.b = null
	};

	function z(a, b) {
		this.width = a;
		this.height = b
	}
	h = z.prototype;
	h.clone = function () {
		return new z(this.width, this.height)
	};
	h.ia = function () {
		return this.width * this.height
	};
	h.isEmpty = function () {
		return !this.ia()
	};
	h.ceil = function () {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	h.floor = function () {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	h.round = function () {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};

	function Ia(a) {
		this.a = a
	}
	var Ja = /\s*;\s*/;

	function Ka(a, b, c, d, e, f) {
		if (/[;=\s]/.test(b)) throw Error('Invalid cookie name "' + b + '"');
		if (/[;\r\n]/.test(c)) throw Error('Invalid cookie value "' + c + '"');
		m(d) || (d = -1);
		f = f ? ";domain=" + f : "";
		e = e ? ";path=" + e : "";
		d = 0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(ka() + 1E3 * d)).toUTCString();
		a.a.cookie = b + "=" + c + f + e + d + ""
	}
	h = Ia.prototype;
	h.get = function (a, b) {
		for (var c = a + "=", d = (this.a.cookie || "").split(Ja), e = 0, f; f = d[e]; e++) {
			if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
			if (f == a) return ""
		}
		return b
	};
	h.G = function () {
		return La(this).keys
	};
	h.B = function () {
		return La(this).values
	};
	h.isEmpty = function () {
		return !this.a.cookie
	};
	h.clear = function () {
		for (var a = La(this).keys, b = a.length - 1; 0 <= b; b--) {
			var c = a[b];
			this.get(c);
			Ka(this, c, "", 0, void 0, void 0)
		}
	};

	function La(a) {
		a = (a.a.cookie || "").split(Ja);
		for (var b = [], c = [], d, e, f = 0; e = a[f]; f++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
		return {
			keys: b
			, values: c
		}
	}
	var Ma = new Ia(document);
	Ma.b = 3950;

	function A(a, b, c) {
		for (var d in a) b.call(c, a[d], d, a)
	}

	function Na(a, b) {
		for (var c in a)
			if (b.call(void 0, a[c], c, a)) return !0;
		return !1
	}

	function Oa(a) {
		var b = []
			, c = 0
			, d;
		for (d in a) b[c++] = a[d];
		return b
	}

	function Pa(a) {
		for (var b in a) return !1;
		return !0
	}

	function Qa(a) {
		var b = ba(a);
		if ("object" == b || "array" == b) {
			if (ea(a.clone)) return a.clone();
			var b = "array" == b ? [] : {}
				, c;
			for (c in a) b[c] = Qa(a[c]);
			return b
		}
		return a
	}
	var Ra = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

	function Sa(a, b) {
		for (var c, d, e = 1; e < arguments.length; e++) {
			d = arguments[e];
			for (c in d) a[c] = d[c];
			for (var f = 0; f < Ra.length; f++) c = Ra[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
		}
	};

	function B() {
		y.call(this);
		this.u = []
	}
	r(B, y);
	B.prototype.m = function () {
		for (var a = 0; a < this.u.length; a++) this.u[a] && Ta(this.u[a], this);
		B.o.m.call(this)
	};

	function Ua(a, b, c, d) {
		var e = d ? a : Qa(a);
		null != e || (e = {});
		A(b, function (b, d) {
			ca(e) && 0 == e.length && "number" != typeof d && (e = {});
			if (null != a && "object" === typeof a[d] && "object" === typeof b) e[d] = Ua(e[d], b, c, !0);
			else if ("object" === typeof b) e[d] = Qa(b), c && (c.changed = !0);
			else if (null == a || a[d] !== b) e[d] = b, c && (c.changed = !0, "undefined" === typeof c.fa && (c.fa = {}), c.fa[d] = b)
		});
		return e
	};

	function Va() {
		B.call(this);
		this.b = {};
		this.c = {}
	}
	r(Va, B);
	h = Va.prototype;
	h.S = null;
	h.V = !1;
	h.T = null;
	h.register = function (a, b) {
		if (m(this.b[a])) throw new v('Class "' + a + '" already registered in factory');
		this.b[a] = b
	};
	h.get = function (a, b) {
		if (this.V) {
			var c = this.ca.apply(this, arguments);
			m(this.c[c]) || (this.c[c] = this.ba.apply(this, arguments));
			return this.c[c]
		}
		return this.ba.apply(this, arguments)
	};
	h.ba = function (a, b) {
		null === this.S && (this.S = this.f());
		var c;
		if (m(this.S[a])) c = this.S[a];
		else {
			if (null === this.T) throw new v('No valid class found for "' + a + '"');
			c = this.T
		}
		if (!m(this.b[c])) throw new v('Unregistered class "' + c + '" in factory');
		c = this.b[c];
		var d = Wa(arguments);
		d.unshift(null);
		return new(Function.prototype.bind.apply(c, d))
	};
	h.ca = function (a) {
		return a
	};

	function C(a, b, c) {
		B.call(this);
		this.h = this[ga] || (this[ga] = ++ha);
		this.b = a;
		this.c = b;
		this.a = null;
		c && (this.a = c)
	}
	r(C, B);
	C.prototype.stopPropagation = function () {
		this.c = "propagation_stopped"
	};

	function Xa(a) {
		a.c = "children_propagation"
	}
	C.prototype.m = function () {
		this.a = null;
		C.o.m.call(this)
	};

	function Ya(a, b) {
		C.call(this, a, "parent_propagation", b)
	}
	r(Ya, C);

	function Za(a, b, c, d) {
		C.call(this, a, b, d);
		this.f = c
	}
	r(Za, C);

	function $a(a) {
		$a[" "](a);
		return a
	}
	$a[" "] = function () {};
	var ab = String.prototype.trim ? function (a) {
		return a.trim()
	} : function (a) {
		return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
	};

	function bb(a) {
		if (!cb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(db, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(eb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(fb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(gb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(hb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ib, "&#0;"));
		return a
	}
	var db = /&/g
		, eb = /</g
		, fb = />/g
		, gb = /"/g
		, hb = /'/g
		, ib = /\x00/g
		, cb = /[\x00&<>"']/;

	function jb(a, b) {
		return a < b ? -1 : a > b ? 1 : 0
	}

	function kb(a) {
		return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
	};
	var lb = Array.prototype.indexOf ? function (a, b, c) {
			return Array.prototype.indexOf.call(a, b, c)
		} : function (a, b, c) {
			c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
			if (n(a)) return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
			for (; c < a.length; c++)
				if (c in a && a[c] === b) return c;
			return -1
		}
		, D = Array.prototype.forEach ? function (a, b, c) {
			Array.prototype.forEach.call(a, b, c)
		} : function (a, b, c) {
			for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
		}
		, mb = Array.prototype.filter ? function (a, b, c) {
			return Array.prototype.filter.call(a, b, c)
		} : function (a, b, c) {
			for (var d = a.length, e = [], f = 0, g = n(a) ? a.split("") : a, k = 0; k < d; k++)
				if (k in g) {
					var t = g[k];
					b.call(c, t, k, a) && (e[f++] = t)
				}
			return e
		}
		, nb = Array.prototype.reduce ? function (a, b, c, d) {
			d && (b = p(b, d));
			return Array.prototype.reduce.call(a, b, c)
		} : function (a, b, c, d) {
			var e = c;
			D(a, function (c, g) {
				e = b.call(d, e, c, g, a)
			});
			return e
		};

	function E(a, b) {
		return 0 <= lb(a, b)
	}

	function ob(a, b) {
		var c = lb(a, b)
			, d;
		(d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
		return d
	}

	function pb(a) {
		return Array.prototype.concat.apply(Array.prototype, arguments)
	}

	function Wa(a) {
		var b = a.length;
		if (0 < b) {
			for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
			return c
		}
		return []
	};

	function F() {
		B.call(this);
		this.b = {}
	}
	r(F, B);

	function qb(a, b, c, d) {
		"undefined" == typeof a.b[b] && (a.b[b] = []);
		for (var e = 0; e < a.b[b].length; e++)
			if (a.b[b][e].aa === c && a.b[b][e].J === d) return;
		a.b[b].push({
			aa: c
			, J: d
		});
		d.u.push(a)
	}
	F.prototype.notify = function (a, b) {
		var c;
		if ("undefined" != typeof this.b[a])
			for (var d = this.b[a].length, e = 0; e < d && (c = this.b[a][e], c.J instanceof y && c.J.l || (c.aa.apply(c.J, arguments), m(this.b[a]))); e++);
	};

	function Ta(a, b) {
		for (var c in a.b) a.b[c] = mb(a.b[c], function (a) {
			return a.J != b
		})
	};

	function G(a) {
		F.call(this);
		this.c = a || null;
		this.a = [];
		this.w = [];
		this.c && this.c.a.push(this)
	}
	r(G, F);

	function rb(a, b) {
		if (a.a) {
			var c = a.a.indexOf(b);
			0 <= c && a.a.splice(c, 1)
		}
	}

	function H(a, b) {
		if ("parent_propagation" == b.c) a.c ? sb(a.c, b) : b.stopPropagation();
		else if ("children_propagation" == b.c)
			if (a.a)
				for (var c = a.a.length, d = 0; d < c; d++) sb(a.a[d], b);
			else b.stopPropagation();
			"propagation_stopped" == b.c && b.dispose()
	}

	function sb(a, b) {
		-1 == a.w.indexOf(b.h) && (b.a && b.a === a || a.handleEvent(b), a.w.push(b.h));
		H(a, b)
	}
	G.prototype.handleEvent = function (a) {
		a instanceof Ya ? this.M(a) : a instanceof Za && this.f(a)
	};
	G.prototype.f = function () {};
	G.prototype.M = function () {};
	G.prototype.m = function () {
		this.c && rb(this.c, this);
		var a = Wa(this.a);
		D(a, function (a) {
			a.dispose()
		}, this);
		G.o.m.call(this)
	};

	function tb(a, b) {
		G.call(this);
		this.h = b
	}
	r(tb, G);
	tb.prototype.f = function (a) {
		"parent_propagation" == a.c ? ub(I.g(), a) : "children_propagation" == a.c && E(this.h.ModuleDataEventFilter, a.f) && H(this, a)
	};
	tb.prototype.M = function (a) {
		var b = null;
		if ("inspectletInfo1" == a.b || "inspectletInfo2" == a.b || "inspectletInfo3" == a.b) {
			window.__insp = window.__insp || [];
			if ("inspectletInfo1" == a.b) switch (a.a.i.c) {
			case "wnd.tb.ToolbarContent":
				window.__insp.push(["tagSession", "published"]);
				b = "publish";
				break;
			case "wnd.pc.ImageBlock":
				window.__insp.push(["tagSession", "edit image"]);
				break;
			case "wnd.pc.TextBlock":
				window.__insp.push(["tagSession", "wysiwyg"]);
				break;
			case "wnd.pm.NewPageForm":
				window.__insp.push(["tagSession", "added page"]);
				break;
			case "wnd.pm.PagesAdminPopup":
				window.__insp.push(["tagSession", "opened pages"]);
				break;
			case "wnd.pc.InsertContentPopup":
				window.__insp.push(["tagSession", "content add open"]);
				break;
			case "wnd.pc.EditSectionPopup":
				window.__insp.push(["tagSession", "section remove"]);
				break;
			case "wnd.pc.MicroTemplate":
				window.__insp.push(["tagSession", "microtemplate cell add"])
			}
			if ("inspectletInfo2" == a.b) switch (a.a.i.c) {
			case "wnd.pc.InsertContentPopup":
				window.__insp.push(["tagSession", "section add open"]);
				break;
			case "wnd.pc.EditSectionPopup":
				window.__insp.push(["tagSession"
, "layout edit open"])
			}
			"inspectletInfo3" == a.b && "wnd.pc.EditSectionPopup" == a.a.i.c && window.__insp.push(["tagSession", "section edit open"])
		}
		else b || ("parent_propagation" == a.c && Xa(a), H(this, a));
		null != vb && ea(vb.ha) && b && (b = a.a, a = {
			data: {
				MVCType: b.i.c
				, MVCId: b.H()
			}
		}, (b = b.A ? b.A() : null) && b.H && (a.data.parentMVCId = b.H()))
	};

	function I() {
		F.call(this);
		this.a = {}
	}
	r(I, F);
	aa(I);
	I.prototype.register = function (a, b) {
		var c = new b(a);
		this.a[a] = c
	};
	I.prototype.init = function () {
		A(this.a, function (a, b) {
			a.init();
			this.notify("onInit", b)
		}, this)
	};
	I.prototype.get = function (a) {
		if (!m(this.a[a])) throw new v("Invalid module namespace `" + a + "`");
		return this.a[a]
	};

	function ub(a, b) {
		Xa(b);
		A(a.a, function (a, d) {
			void 0 != d && a.f(b)
		}, a)
	}

	function wb(a) {
		var b = I.g();
		return nb(Oa(b.a), function (b, d) {
			var e = m(d.h[a]) ? d.h[a] : null;
			return null === e ? b : Ua(b, e)
		}, m(la[a]) ? la[a] : {}, b)
	};

	function xb(a) {
		F.call(this);
		this.a = a
	}
	r(xb, F);
	xb.prototype.getData = function (a) {
		if (!this.data)
			if ("undefined" != typeof J[this.a]) this.data = J[this.a];
			else throw new v("Datatype " + this.a + " doesn't exist in JSONDataCollection (wnd.$data)");
		return a ? m(this.data[a]) ? this.data[a] : void 0 : this.data
	};

	function yb(a) {
		xb.call(this, a)
	}
	r(yb, xb);

	function K() {
		Va.call(this);
		this.V = !0;
		this.T = "wnd.data.JSONDataCollection";
		this.a = {}
	}
	r(K, Va);
	aa(K);

	function zb(a, b) {
		m(a.a[b]) && A(a.a[b], function (a, d) {
			var e = this.c[b + "_" + d];
			delete e.data;
			e.notify("onEraseCache")
		}, a)
	}
	K.prototype.ca = function (a, b) {
		return this.h.apply(this, arguments)
	};
	K.prototype.h = function (a, b) {
		var c = b ? JSON.stringify(b) : "no_settings";
		m(this.a[a]) || (this.a[a] = {});
		this.a[a][c] = !0;
		return a + "_" + c
	};
	K.prototype.f = function () {
		return Ua(qa.DataCollectionFactory, wb("DataCollectionFactory"))
	};
	K.g().register("wnd.data.JSONDataCollection", yb);

	function Ab(a) {
		F.call(this);
		this.a = a
	}
	r(Ab, F);
	Ab.prototype.create = function (a) {
		"undefined" == typeof J[this.a] && (J[this.a] = {});
		if ("undefined" == typeof a.id) {
			do a.id = Math.floor(1E4 * Math.random()).toString(); while ("undefined" != typeof J[this.a][a.id])
		}
		J[this.a][a.id] = a;
		a = a.id;
		zb(K.g(), this.a);
		return a
	};
	Ab.prototype["delete"] = function (a) {
		delete J[this.a][a];
		zb(K.g(), this.a)
	};

	function Bb(a) {
		Ab.call(this, a)
	}
	r(Bb, Ab);

	function Cb() {
		Va.call(this);
		this.V = !0;
		this.T = "wnd.data.JSONDataObject"
	}
	r(Cb, Va);
	aa(Cb);
	Cb.prototype.f = function () {
		return Ua(qa.DataObjectFactory, wb("DataObjectFactory"))
	};
	Cb.g().register("wnd.data.JSONDataObject", Bb);

	function L(a, b, c) {
		F.call(this);
		this.h = a;
		this.c = b;
		b.lastIndexOf(".");
		c ? this.a = c : this.a = {
			id: a
			, create: {}
			, properties: {}
		};
		"undefined" != typeof this.a.create && (a = this.a, M.g(), b = this.c, c = {}, "undefined" != typeof Db[b] && (c = Qa(Db[b]), Eb(c)), c.type = b, b = c, "undefined" != typeof this.a.create.data && (b = Ua(b, this.a.create.data)), this.a.id && (b.id = this.a.id), b = Fb(this).create(b, this.a.create), a.id = b);
		"undefined" === typeof this.a.properties && (this.a.properties = {});
		this.id = this.a.id
	}
	r(L, F);
	h = L.prototype;
	h.s = la.mvc.DataType;
	h.L = null;

	function Fb(a) {
		a.f || (a.f = Cb.g().get(a.s));
		return a.f
	}
	h.getData = function () {
		if (!this.L || m(this.a.collectionSettingsFunc)) m(this.a.collectionSettings) ? this.L = K.g().get(this.s, this.a.collectionSettings) : m(this.a.collectionSettingsFunc) && ea(this.a.collectionSettingsFunc) ? this.L = K.g().get(this.s, this.a.collectionSettingsFunc()) : this.L = K.g().get(this.s);
		var a = this.L.getData();
		return this.id ? a[this.id] : a
	};
	h.H = function () {
		return this.h
	};
	h.m = function () {
		Fb(this)["delete"](this.id);
		L.o.m.call(this)
	};

	function Gb(a, b, c) {
		L.call(this, a, b, c)
	}
	r(Gb, L);

	function Hb() {
		var a = w.ImageSizeManager.DataType;
		return K.g().get(a)
	}

	function Ib() {
		var a = w.ImageSizeManager.DataType;
		return Cb.g().get(a)
	};

	function Jb(a) {
		if (a.classList) return a.classList;
		a = a.className;
		return n(a) && a.match(/\S+/g) || []
	}

	function Kb(a, b) {
		return a.classList ? a.classList.contains(b) : E(Jb(a), b)
	}

	function Lb(a, b) {
		a.classList ? a.classList.remove(b) : Kb(a, b) && (a.className = mb(Jb(a), function (a) {
			return a != b
		}).join(" "))
	}

	function Mb(a, b) {
		var c = x.template.classNames.invalidFormField;
		b ? a.classList ? a.classList.add(c) : Kb(a, c) || (a.className += 0 < a.className.length ? " " + c : c) : Lb(a, c)
	};

	function Nb(a) {
		this.src = a;
		this.a = {};
		this.b = 0
	}
	Nb.prototype.removeAll = function (a) {
		a = a && a.toString();
		var b = 0
			, c;
		for (c in this.a)
			if (!a || c == a) {
				for (var d = this.a[c], e = 0; e < d.length; e++) ++b, Ha(d[e]);
				delete this.a[c];
				this.b--
			}
		return b
	};

	function Ob(a, b, c, d, e) {
		a = a.a[b.toString()];
		b = -1;
		a && (b = Pb(a, c, d, e));
		return -1 < b ? a[b] : null
	}
	Nb.prototype.hasListener = function (a, b) {
		var c = m(a)
			, d = c ? a.toString() : ""
			, e = m(b);
		return Na(this.a, function (a) {
			for (var g = 0; g < a.length; ++g)
				if (!(c && a[g].type != d || e && a[g].R != b)) return !0;
			return !1
		})
	};

	function Pb(a, b, c, d) {
		for (var e = 0; e < a.length; ++e) {
			var f = a[e];
			if (!f.O && f.listener == b && f.R == !!c && f.b == d) return e
		}
		return -1
	};
	var Qb;
	a: {
		var Rb = l.navigator;
		if (Rb) {
			var Sb = Rb.userAgent;
			if (Sb) {
				Qb = Sb;
				break a
			}
		}
		Qb = ""
	}

	function N(a) {
		return -1 != Qb.indexOf(a)
	};

	function Tb() {
		return N("Opera") || N("OPR")
	}

	function Ub() {
		return (N("Chrome") || N("CriOS")) && !Tb() && !N("Edge")
	};

	function Vb() {
		return N("iPhone") && !N("iPod") && !N("iPad")
	};

	function P(a, b) {
		this.x = m(a) ? a : 0;
		this.y = m(b) ? b : 0
	}
	P.prototype.clone = function () {
		return new P(this.x, this.y)
	};
	P.prototype.ceil = function () {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this
	};
	P.prototype.floor = function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this
	};
	P.prototype.round = function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this
	};

	function Q(a, b, c, d) {
		this.left = a;
		this.top = b;
		this.width = c;
		this.height = d
	}
	h = Q.prototype;
	h.clone = function () {
		return new Q(this.left, this.top, this.width, this.height)
	};

	function Wb(a, b) {
		var c = Math.max(a.left, b.left)
			, d = Math.min(a.left + a.width, b.left + b.width);
		if (c <= d) {
			var e = Math.max(a.top, b.top)
				, f = Math.min(a.top + a.height, b.top + b.height);
			if (e <= f) return new Q(c, e, d - c, f - e)
		}
		return null
	}
	h.difference = function (a) {
		var b = Wb(this, a);
		if (b && b.height && b.width) {
			var b = []
				, c = this.top
				, d = this.height
				, e = this.left + this.width
				, f = this.top + this.height
				, g = a.left + a.width
				, k = a.top + a.height;
			a.top > this.top && (b.push(new Q(this.left, this.top, this.width, a.top - this.top)), c = a.top, d -= a.top - this.top);
			k < f && (b.push(new Q(this.left, k, this.width, f - k)), d = k - c);
			a.left > this.left && b.push(new Q(this.left, c, a.left - this.left, d));
			g < e && b.push(new Q(g, c, e - g, d));
			a = b
		}
		else a = [this.clone()];
		return a
	};
	h.contains = function (a) {
		return a instanceof Q ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
	};
	h.ceil = function () {
		this.left = Math.ceil(this.left);
		this.top = Math.ceil(this.top);
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	h.floor = function () {
		this.left = Math.floor(this.left);
		this.top = Math.floor(this.top);
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	h.round = function () {
		this.left = Math.round(this.left);
		this.top = Math.round(this.top);
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};

	function Xb(a, b) {
		this.b = {};
		this.a = [];
		this.l = this.c = 0;
		var c = arguments.length;
		if (1 < c) {
			if (c % 2) throw Error("Uneven number of arguments");
			for (var d = 0; d < c; d += 2) Yb(this, arguments[d], arguments[d + 1])
		}
		else if (a) {
			if (a instanceof Xb) d = a.G(), c = a.B();
			else {
				var c = []
					, e = 0;
				for (d in a) c[e++] = d;
				d = c;
				c = Oa(a)
			}
			for (e = 0; e < d.length; e++) Yb(this, d[e], c[e])
		}
	}
	h = Xb.prototype;
	h.B = function () {
		Zb(this);
		for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
		return a
	};
	h.G = function () {
		Zb(this);
		return this.a.concat()
	};
	h.isEmpty = function () {
		return 0 == this.c
	};
	h.clear = function () {
		this.b = {};
		this.l = this.c = this.a.length = 0
	};

	function Zb(a) {
		if (a.c != a.a.length) {
			for (var b = 0, c = 0; b < a.a.length;) {
				var d = a.a[b];
				$b(a.b, d) && (a.a[c++] = d);
				b++
			}
			a.a.length = c
		}
		if (a.c != a.a.length) {
			for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], $b(e, d) || (a.a[c++] = d, e[d] = 1), b++;
			a.a.length = c
		}
	}
	h.get = function (a, b) {
		return $b(this.b, a) ? this.b[a] : b
	};

	function Yb(a, b, c) {
		$b(a.b, b) || (a.c++, a.a.push(b), a.l++);
		a.b[b] = c
	}
	h.forEach = function (a, b) {
		for (var c = this.G(), d = 0; d < c.length; d++) {
			var e = c[d]
				, f = this.get(e);
			a.call(b, f, e, this)
		}
	};
	h.clone = function () {
		return new Xb(this)
	};

	function $b(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	};
	var ac = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

	function bc(a, b) {
		if (a)
			for (var c = a.split("&"), d = 0; d < c.length; d++) {
				var e = c[d].indexOf("=")
					, f = null
					, g = null;
				0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
				b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
			}
	};

	function R(a, b) {
		this.l = this.h = this.c = "";
		this.v = null;
		this.u = this.a = "";
		this.b = !1;
		var c;
		a instanceof R ? (this.b = m(b) ? b : a.b, cc(this, a.c), this.h = a.h, this.l = a.l, dc(this, a.v), this.a = a.a, ec(this, a.f.clone()), this.u = a.u) : a && (c = String(a).match(ac)) ? (this.b = !!b, cc(this, c[1] || "", !0), this.h = fc(c[2] || ""), this.l = fc(c[3] || "", !0), dc(this, c[4]), this.a = fc(c[5] || "", !0), ec(this, c[6] || "", !0), this.u = fc(c[7] || "")) : (this.b = !!b, this.f = new gc(null, 0, this.b))
	}
	R.prototype.toString = function () {
		var a = []
			, b = this.c;
		b && a.push(hc(b, ic, !0), ":");
		var c = this.l;
		if (c || "file" == b) a.push("//"), (b = this.h) && a.push(hc(b, ic, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.v, null != c && a.push(":", String(c));
		if (c = this.a) this.l && "/" != c.charAt(0) && a.push("/"), a.push(hc(c, "/" == c.charAt(0) ? jc : kc, !0));
		(c = this.f.toString()) && a.push("?", c);
		(c = this.u) && a.push("#", hc(c, lc));
		return a.join("")
	};
	R.prototype.clone = function () {
		return new R(this)
	};

	function cc(a, b, c) {
		a.c = c ? fc(b, !0) : b;
		a.c && (a.c = a.c.replace(/:$/, ""))
	}

	function dc(a, b) {
		if (b) {
			b = Number(b);
			if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
			a.v = b
		}
		else a.v = null
	}

	function ec(a, b, c) {
		b instanceof gc ? (a.f = b, mc(a.f, a.b)) : (c || (b = hc(b, nc)), a.f = new gc(b, 0, a.b))
	}

	function fc(a, b) {
		return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
	}

	function hc(a, b, c) {
		return n(a) ? (a = encodeURI(a).replace(b, oc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
	}

	function oc(a) {
		a = a.charCodeAt(0);
		return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
	}
	var ic = /[#\/\?@]/g
		, kc = /[\#\?:]/g
		, jc = /[\#\?]/g
		, nc = /[\#\?@]/g
		, lc = /#/g;

	function gc(a, b, c) {
		this.c = this.a = null;
		this.b = a || null;
		this.l = !!c
	}

	function pc(a) {
		a.a || (a.a = new Xb, a.c = 0, a.b && bc(a.b, function (b, c) {
			var d = decodeURIComponent(b.replace(/\+/g, " "));
			pc(a);
			a.b = null;
			var d = qc(a, d)
				, e = a.a.get(d);
			e || Yb(a.a, d, e = []);
			e.push(c);
			a.c = a.c + 1
		}))
	}

	function rc(a, b) {
		pc(a);
		b = qc(a, b);
		if ($b(a.a.b, b)) {
			a.b = null;
			a.c = a.c - a.a.get(b).length;
			var c = a.a;
			$b(c.b, b) && (delete c.b[b], c.c--, c.l++, c.a.length > 2 * c.c && Zb(c))
		}
	}
	h = gc.prototype;
	h.clear = function () {
		this.a = this.b = null;
		this.c = 0
	};
	h.isEmpty = function () {
		pc(this);
		return 0 == this.c
	};
	h.G = function () {
		pc(this);
		for (var a = this.a.B(), b = this.a.G(), c = [], d = 0; d < b.length; d++)
			for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
		return c
	};
	h.B = function (a) {
		pc(this);
		var b = [];
		if (n(a)) {
			var c = a;
			pc(this);
			c = qc(this, c);
			$b(this.a.b, c) && (b = pb(b, this.a.get(qc(this, a))))
		}
		else
			for (a = this.a.B(), c = 0; c < a.length; c++) b = pb(b, a[c]);
		return b
	};
	h.get = function (a, b) {
		var c = a ? this.B(a) : [];
		return 0 < c.length ? String(c[0]) : b
	};
	h.toString = function () {
		if (this.b) return this.b;
		if (!this.a) return "";
		for (var a = [], b = this.a.G(), c = 0; c < b.length; c++)
			for (var d = b[c], e = encodeURIComponent(String(d)), d = this.B(d), f = 0; f < d.length; f++) {
				var g = e;
				"" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
				a.push(g)
			}
		return this.b = a.join("&")
	};
	h.clone = function () {
		var a = new gc;
		a.b = this.b;
		this.a && (a.a = this.a.clone(), a.c = this.c);
		return a
	};

	function qc(a, b) {
		var c = String(b);
		a.l && (c = c.toLowerCase());
		return c
	}

	function mc(a, b) {
		b && !a.l && (pc(a), a.b = null, a.a.forEach(function (a, b) {
			var e = b.toLowerCase();
			b != e && (rc(this, b), rc(this, e), 0 < a.length && (this.b = null, Yb(this.a, qc(this, e), Wa(a)), this.c = this.c + a.length))
		}, a));
		a.l = b
	};

	function sc(a) {
		return /\/files\/\w{2}\/\w{3}(\/\d+)?\/\w{6}\.\w+/.test(a.toString())
	}

	function tc(a) {
		return a.c + "://" + a.l + "/" == u.filesPath
	};
	var uc = Tb()
		, S = N("Trident") || N("MSIE")
		, vc = N("Edge")
		, wc = N("Gecko") && !(-1 != Qb.toLowerCase().indexOf("webkit") && !N("Edge")) && !(N("Trident") || N("MSIE")) && !N("Edge")
		, xc = -1 != Qb.toLowerCase().indexOf("webkit") && !N("Edge");
	xc && N("Mobile");
	N("Macintosh");
	N("Windows");
	N("Linux") || N("CrOS");
	var yc = l.navigator || null;
	yc && (yc.appVersion || "").indexOf("X11");
	N("Android");
	Vb();
	N("iPad");

	function zc() {
		var a = l.document;
		return a ? a.documentMode : void 0
	}
	var Ac;
	a: {
		var Bc = ""
			, Cc = function () {
				var a = Qb;
				if (wc) return /rv\:([^\);]+)(\)|;)/.exec(a);
				if (vc) return /Edge\/([\d\.]+)/.exec(a);
				if (S) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
				if (xc) return /WebKit\/(\S+)/.exec(a);
				if (uc) return /(?:Version)[ \/]?(\S+)/.exec(a)
			}();
		Cc && (Bc = Cc ? Cc[1] : "");
		if (S) {
			var Dc = zc();
			if (null != Dc && Dc > parseFloat(Bc)) {
				Ac = String(Dc);
				break a
			}
		}
		Ac = Bc
	}
	var Ec = {};

	function T(a) {
		var b;
		if (!(b = Ec[a])) {
			b = 0;
			for (var c = ab(String(Ac)).split("."), d = ab(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
				var g = c[f] || ""
					, k = d[f] || ""
					, t = RegExp("(\\d*)(\\D*)", "g")
					, O = RegExp("(\\d*)(\\D*)", "g");
				do {
					var ya = t.exec(g) || ["", "", ""]
						, za = O.exec(k) || ["", "", ""];
					if (0 == ya[0].length && 0 == za[0].length) break;
					b = jb(0 == ya[1].length ? 0 : parseInt(ya[1], 10), 0 == za[1].length ? 0 : parseInt(za[1], 10)) || jb(0 == ya[2].length, 0 == za[2].length) || jb(ya[2], za[2])
				} while (0 == b)
			}
			b = Ec[a] = 0 <= b
		}
		return b
	}
	var Fc = l.document
		, Gc = Fc && S ? zc() || ("CSS1Compat" == Fc.compatMode ? parseInt(Ac, 10) : 5) : void 0;
	var Hc = !S || 9 <= Number(Gc);
	!wc && !S || S && 9 <= Number(Gc) || wc && T("1.9.1");
	S && T("9");

	function Ic(a) {
		var b = document;
		return n(a) ? b.getElementById(a) : a
	}

	function Jc(a) {
		var b = w.ImageSizeManager.backgroundClass
			, c = a || document;
		return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + b) : Kc(b, a)
	}

	function Kc(a, b) {
		var c, d, e, f;
		c = document;
		c = b || c;
		if (c.querySelectorAll && c.querySelector && a) return c.querySelectorAll("" + (a ? "." + a : ""));
		if (a && c.getElementsByClassName) {
			var g = c.getElementsByClassName(a);
			return g
		}
		g = c.getElementsByTagName("*");
		if (a) {
			f = {};
			for (d = e = 0; c = g[d]; d++) {
				var k = c.className;
				"function" == typeof k.split && E(k.split(/\s+/), a) && (f[e++] = c)
			}
			f.length = e;
			return f
		}
		return g
	}

	function Lc(a, b) {
		A(b, function (b, d) {
			"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Mc.hasOwnProperty(d) ? a.setAttribute(Mc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
		})
	}
	var Mc = {
		cellpadding: "cellPadding"
		, cellspacing: "cellSpacing"
		, colspan: "colSpan"
		, frameborder: "frameBorder"
		, height: "height"
		, maxlength: "maxLength"
		, nonce: "nonce"
		, role: "role"
		, rowspan: "rowSpan"
		, type: "type"
		, usemap: "useMap"
		, valign: "vAlign"
		, width: "width"
	};

	function Nc() {
		var a = window.document
			, a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
		return new z(a.clientWidth, a.clientHeight)
	}

	function Oc(a, b, c) {
		var d = arguments
			, e = document
			, f = d[0]
			, g = d[1];
		if (!Hc && g && (g.name || g.type)) {
			f = ["<", f];
			g.name && f.push(' name="', bb(g.name), '"');
			if (g.type) {
				f.push(' type="', bb(g.type), '"');
				var k = {};
				Sa(k, g);
				delete k.type;
				g = k
			}
			f.push(">");
			f = f.join("")
		}
		f = e.createElement(f);
		g && (n(g) ? f.className = g : ca(g) ? f.className = g.join(" ") : Lc(f, g));
		2 < d.length && Pc(e, f, d);
		return f
	}

	function Pc(a, b, c) {
		function d(c) {
			c && b.appendChild(n(c) ? a.createTextNode(c) : c)
		}
		for (var e = 2; e < c.length; e++) {
			var f = c[e];
			!da(f) || fa(f) && 0 < f.nodeType ? d(f) : D(Qc(f) ? Wa(f) : f, d)
		}
	}

	function Rc(a) {
		a && a.parentNode && a.parentNode.removeChild(a)
	}

	function Sc(a, b) {
		var c = b.parentNode;
		c && c.replaceChild(a, b)
	}

	function Qc(a) {
		if (a && "number" == typeof a.length) {
			if (fa(a)) return "function" == typeof a.item || "string" == typeof a.item;
			if (ea(a)) return "function" == typeof a.item
		}
		return !1
	};
	var Tc = !S || 9 <= Number(Gc)
		, Uc = S && !T("9");
	!xc || T("528");
	wc && T("1.9b") || S && T("8") || uc && T("9.5") || xc && T("528");
	wc && !T("8") || S && T("9");
	var Vc = ("ontouchstart" in l || !!(l.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!l.navigator || !l.navigator.msMaxTouchPoints)) && (null === navigator.userAgent.match(/Chrome/) || null !== navigator.userAgent.match(/Chrome/) && null !== navigator.userAgent.match(/Android/))
		, Wc = null !== navigator.userAgent.match(/Android|iPhone|iPad|iPod|BB10|BlackBerry|Windows Phone|IEMobile|Opera Mini/i);
	null !== navigator.userAgent.match(/Chrome/) && navigator.userAgent.match(/Edge\/[0-9]{2,}/);
	navigator.userAgent.match(/Firefox/);
	null !== navigator.userAgent.match(/Safari/) && navigator.userAgent.match(/Chrome/);
	null !== navigator.userAgent.match(/MSIE /) || navigator.userAgent.match(/Trident/);
	navigator.userAgent.match(/Edge\/[0-9]{2,}/);
	var Xc = "click";
	!0 === Vc && (Xc = "touchend");

	function U(a, b) {
		Da.call(this, a ? a.type : "");
		this.b = this.target = null;
		this.clientY = this.clientX = 0;
		this.a = this.state = null;
		a && this.init(a, b)
	}
	r(U, Da);
	U.prototype.init = function (a, b) {
		this.type = a.type;
		var c = a.changedTouches ? a.changedTouches[0] : null;
		this.target = a.target || a.srcElement;
		this.b = b;
		var d = a.relatedTarget;
		if (d && wc) try {
			$a(d.nodeName)
		}
		catch (e) {}
		null === c ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX, this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY);
		this.state = a.state;
		this.a = a;
		a.defaultPrevented && this.preventDefault()
	};
	U.prototype.stopPropagation = function () {
		U.o.stopPropagation.call(this);
		this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
	};
	U.prototype.preventDefault = function () {
		U.o.preventDefault.call(this);
		var a = this.a;
		if (a.preventDefault) a.preventDefault();
		else if (a.returnValue = !1, Uc) try {
			if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
		}
		catch (b) {}
	};
	var Yc = "closure_lm_" + (1E6 * Math.random() | 0)
		, Zc = {}
		, $c = 0;

	function ad(a, b, c, d, e) {
		if (ca(b)) {
			for (var f = 0; f < b.length; f++) ad(a, b[f], c, d, e);
			return null
		}
		c = bd(c);
		if (a && a[Ea]) a = cd(a, b, c, d, e);
		else {
			f = c;
			if (!b) throw Error("Invalid event type");
			c = !!d;
			var g = dd(a);
			g || (a[Yc] = g = new Nb(a));
			var k = g
				, t = b.toString()
				, g = k.a[t];
			g || (g = k.a[t] = [], k.b++);
			var O = Pb(g, f, d, e); - 1 < O ? (d = g[O], d.U = !1) : (d = new Ga(f, k.src, t, !!d, e), d.U = !1, g.push(d));
			if (!d.a) {
				e = ed();
				d.a = e;
				e.src = a;
				e.listener = d;
				if (a.addEventListener) a.addEventListener(b.toString(), e, c);
				else if (a.attachEvent) a.attachEvent(fd(b.toString()), e);
				else throw Error("addEventListener and attachEvent are unavailable.");
				$c++
			}
			a = d
		}
		return a
	}

	function ed() {
		var a = gd
			, b = Tc ? function (c) {
				return a.call(b.src, b.listener, c)
			} : function (c) {
				c = a.call(b.src, b.listener, c);
				if (!c) return c
			};
		return b
	}

	function hd(a) {
		if ("number" != typeof a && a && !a.O) {
			var b = a.src;
			if (b && b[Ea]) b.a(a);
			else {
				var c = a.type
					, d = a.a;
				b.removeEventListener ? b.removeEventListener(c, d, a.R) : b.detachEvent && b.detachEvent(fd(c), d);
				$c--;
				(c = dd(b)) ? (d = a.type, d in c.a && ob(c.a[d], a) && (Ha(a), 0 == c.a[d].length && (delete c.a[d], c.b--)), 0 == c.b && (c.src = null, b[Yc] = null)) : Ha(a)
			}
		}
	}

	function fd(a) {
		return a in Zc ? Zc[a] : Zc[a] = "on" + a
	}

	function id(a, b, c, d) {
		var e = !0;
		if (a = dd(a))
			if (b = a.a[b.toString()])
				for (b = b.concat(), a = 0; a < b.length; a++) {
					var f = b[a];
					f && f.R == c && !f.O && (f = jd(f, d), e = e && !1 !== f)
				}
			return e
	}

	function jd(a, b) {
		var c = a.listener
			, d = a.b || a.src;
		a.U && hd(a);
		return c.call(d, b)
	}

	function gd(a, b) {
		if (a.O) return !0;
		if (!Tc) {
			var c;
			if (!(c = b)) a: {
				c = ["window", "event"];
				for (var d = l, e; e = c.shift();)
					if (null != d[e]) d = d[e];
					else {
						c = null;
						break a
					}
				c = d
			}
			e = c;
			c = new U(e, this);
			d = !0;
			if (!(0 > e.keyCode || void 0 != e.returnValue)) {
				a: {
					var f = !1;
					if (0 == e.keyCode) try {
						e.keyCode = -1;
						break a
					}
					catch (t) {
						f = !0
					}
					if (f || void 0 == e.returnValue) e.returnValue = !0
				}
				e = [];
				for (f = c.b; f; f = f.parentNode) e.push(f);
				for (var f = a.type, g = e.length - 1; !c.c && 0 <= g; g--) {
					c.b = e[g];
					var k = id(e[g], f, !0, c)
						, d = d && k
				}
				for (g = 0; !c.c && g < e.length; g++) c.b = e[g]
				, k = id(e[g], f, !1, c)
				, d = d && k
			}
			return d
		}
		return jd(a, new U(b, this))
	}

	function dd(a) {
		a = a[Yc];
		return a instanceof Nb ? a : null
	}
	var kd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

	function bd(a) {
		if (ea(a)) return a;
		a[kd] || (a[kd] = function (b) {
			return a.handleEvent(b)
		});
		return a[kd]
	};

	function V(a) {
		y.call(this);
		this.c = a;
		this.a = {}
	}
	r(V, y);
	var ld = [];

	function cd(a, b, c, d, e) {
		ca(c) || (c && (ld[0] = c.toString()), c = ld);
		for (var f = 0; f < c.length; f++) {
			var g = ad(b, c[f], d || a.handleEvent, e || !1, a.c || a);
			if (!g) break;
			a.a[g.da] = g
		}
		return a
	}
	V.prototype.b = function (a, b, c, d, e) {
		if (ca(b))
			for (var f = 0; f < b.length; f++) this.b(a, b[f], c, d, e);
		else c = c || this.handleEvent, e = e || this.c || this, c = bd(c), d = !!d, b = a && a[Ea] ? Ob(a, b, c, d, e) : a ? (a = dd(a)) ? Ob(a, b, c, d, e) : null : null, b && (hd(b), delete this.a[b.da]);
		return this
	};
	V.prototype.removeAll = function () {
		A(this.a, function (a, b) {
			this.a.hasOwnProperty(b) && hd(a)
		}, this);
		this.a = {}
	};
	V.prototype.m = function () {
		V.o.m.call(this);
		this.removeAll()
	};
	V.prototype.handleEvent = function () {
		throw Error("EventHandler.handleEvent not implemented");
	};

	function md() {
		B.call(this);
		this.f = {};
		this.c = {};
		this.b = new V(this);
		this.a = {}
	}
	r(md, B);
	aa(md);

	function nd(a, b, c, d, e) {
		var f = a.f[b];
		if (null != f && !0 === f.complete) null != c && a.h(f.src, c);
		else {
			var g;
			g = b;
			a.a[b] || (a.a[b] = 1);
			g += (0 > g.indexOf("?") ? "?" : "&") + "t=" + a.a[b];
			if (!f) {
				var k = new R(g)
					, f = new Image;
				if (tc(k) || sc(k) && e) f.crossOrigin = "anonymous";
				f.src = g;
				a.f[b] = f
			}!0 === (null != c) && (g = p(a.h, a, g, c, d), cd(a.b, f, "load", g, void 0), b = p(a.w, a, b, c, d, e), cd(a.b, f, "error", b, void 0), m(d) && (null != a.c[d] && a.b.b.apply(a.b, a.c[d]), a.c[d] = [f, "load", g]))
		}
	}
	md.prototype.h = function (a, b, c) {
		b(a);
		null != c && (this.b.b.apply(this.b, this.c[c]), this.c[c] = null)
	};
	md.prototype.w = function (a, b, c, d) {
		new v("Image " + a + "?t=" + this.a[a] + " was not loaded.");
		if (1 == this.a[a]) {
			var e = this.a
				, f = window.location.href + (new Date).toDateString();
			if (null === ma) {
				for (var g, k = [], t = 0; 256 > t; t++) {
					g = t;
					for (var O = 0; 8 > O; O++) g = g & 1 ? 3988292384 ^ g >>> 1 : g >>> 1;
					k[t] = g >>> 0
				}
				ma = k
			}
			g = -1;
			for (k = 0; k < f.length; k++) g = g >>> 8 ^ ma[(g ^ f.charCodeAt(k)) & 255];
			e[a] = (g ^ -1) >>> 0;
			delete this.f[a];
			nd(this, a, b, c, d)
		}
	};

	function od(a) {
		var b;
		try {
			b = a.getBoundingClientRect()
		}
		catch (c) {
			return {
				left: 0
				, top: 0
				, right: 0
				, bottom: 0
			}
		}
		S && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
		return b
	}

	function pd(a) {
		if (1 == a.nodeType) return a = od(a), new P(a.left, a.top);
		a = a.changedTouches ? a.changedTouches[0] : a;
		return new P(a.clientX, a.clientY)
	}

	function qd(a, b, c) {
		if (b instanceof z) c = b.height, b = b.width;
		else if (void 0 == c) throw Error("missing height argument");
		a.style.width = rd(b);
		a.style.height = rd(c)
	}

	function rd(a) {
		"number" == typeof a && (a = Math.round(a) + "px");
		return a
	}

	function sd(a) {
		var b = td
			, c;
		a: {
			c = 9 == a.nodeType ? a : a.ownerDocument || a.document;
			if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
				c = c.display || c.getPropertyValue("display") || "";
				break a
			}
			c = ""
		}
		if ("none" != (c || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display)) return b(a);
		c = a.style;
		var d = c.display
			, e = c.visibility
			, f = c.position;
		c.visibility = "hidden";
		c.position = "absolute";
		c.display = "inline";
		a = b(a);
		c.display = d;
		c.position = f;
		c.visibility = e;
		return a
	}

	function td(a) {
		var b = a.offsetWidth
			, c = a.offsetHeight
			, d = xc && !b && !c;
		return m(b) && !d || !a.getBoundingClientRect ? new z(b, c) : (a = od(a), new z(a.right - a.left, a.bottom - a.top))
	};
	N("Firefox");
	Vb() || N("iPod");
	N("iPad");
	!N("Android") || Ub() || N("Firefox") || Tb() || N("Silk");
	Ub();
	!N("Safari") || Ub() || N("Coast") || Tb() || N("Edge") || N("Silk") || N("Android") || Vb() || N("iPad") || N("iPod");
	var ud = !S;

	function W(a, b) {
		return ud && a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute("data-" + kb(b))
	}

	function X(a, b) {
		return ud && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + kb(b)) : !!a.getAttribute("data-" + kb(b))
	};

	function Y(a, b) {
		F.call(this);
		this.ua = b;
		qb(this.ua, "onUpdate", this.ga, this)
	}
	r(Y, F);
	Y.prototype.f = !0;
	Y.prototype.F = function () {
		return this.a
	};
	Y.prototype.m = function () {
		this.a && Rc(this.a);
		Y.o.m.call(this)
	};
	Y.prototype.ga = function () {
		this.F() && (this.notify("onBeforeRenderContent"), this.notify("onRenderContent"))
	};

	function Z(a, b, c) {
		G.call(this, c);
		this.i = a;
		this.j = b;
		qb(this.i, "onUpdate", this.va, this);
		qb(this.i, "onChangeId", this.na, this);
		qb(this.j, "onRender", this.oa, this);
		qb(this.j, "onBeforeRenderContent", this.ja, this);
		qb(this.j, "onRenderContent", this.pa, this);
		a = this.i;
		m(a.a.create) && null != a.id && this.i.s != la.mvc.DataType && (a = new Za("dataCreate", "parent_propagation", this.i.s, this), H(this, a));
		this.F() && !1 === this.j.f && this.I()
	}
	r(Z, G);
	h = Z.prototype;
	h.i = null;
	h.j = null;
	h.F = function () {
		return this.j.F()
	};
	h.va = function (a, b, c, d) {
		this.i.s != la.mvc.DataType && d && (a = new Za("dataUpdate", "parent_propagation", this.i.s, this), H(this, a))
	};
	h.na = function () {};
	h.oa = function () {
		this.notify("onViewRender")
	};
	h.m = function () {
		this.i.dispose();
		this.j.dispose();
		var a = M.g()
			, b = this.H();
		delete a.c[b];
		a.notify("onDisposeMVC", b);
		this.i.s !== la.mvc.DataType && (a = new Za("dataDelete", "parent_propagation", this.i.s, this), H(this, a));
		Z.o.m.call(this)
	};
	h.H = function () {
		return this.i.H()
	};
	h.ja = function () {
		this.h && this.h.removeAll()
	};
	h.pa = function () {
		this.I()
	};
	h.I = function () {
		this.h = new V(this)
	};

	function M() {
		F.call(this);
		this.a = {};
		this.c = {}
	}
	r(M, F);
	aa(M);
	M.prototype.register = function (a, b, c, d) {
		if ("undefined" == typeof this.a[a]) this.a[a] = {
			Model: b
			, View: c
			, Controller: d
		};
		else throw new v("MVC triad `" + a + "` already registered");
	};
	M.prototype.create = function (a, b, c, d, e) {
		if ("undefined" == typeof this.a[b]) throw new v("MVC triad `" + b + "` hasn't been registered");
		if ("undefined" != typeof this.c[a]) throw new v("MVC triad `" + a + "` was already instancied");
		e = new this.a[b].Model(a, b, e);
		c = new this.a[b].View(c, e);
		b = new this.a[b].Controller(e, c, d);
		this.c[a] = {
			Model: e
			, View: c
			, Controller: b
		};
		c.f && (c.notify("onBeforeRenderContent"), c.notify("onRender"), c.notify("onRenderContent"));
		this.notify("onCreateMVC", b);
		return b
	};
	M.prototype.get = function (a) {
		if ("undefined" == typeof this.c[a]) throw new v("MVC triad `" + a + "` hasn't been instancied");
		return this.c[a].Controller
	};

	function Eb(a) {
		fa(a.refs) && ca(a.refDataTypes) && (A(a.refs, function (b, c) {
			-1 === a.refDataTypes.indexOf(c) && delete a.refs[c]
		}), Pa(a.refs) && delete a.refs, delete a.refDataTypes)
	};

	function vd(a, b) {
		Y.call(this, 0, b);
		this.f = !1;
		this.c = []
	}
	r(vd, Y);

	function wd(a, b, c) {
		b = Ic(b);
		if (null != b) {
			var d = !1;
			m(c) && "wnd.pc.Section" === c ? (c = b.querySelectorAll("img[class~=wnd-video-background]"), d = !0) : c = b.getElementsByTagName("IMG");
			D(c, function (a) {
				a.complete ? this.A(a, d) : ad(a, "load", p(this.A, this, a, d))
			}, a)
		}
	}

	function xd(a, b) {
		var c = null;
		b && (c = Ic(b));
		c = Jc(c);
		D(c, function (a) {
			if (null != a.style.backgroundImage && !E(this.c, a)) {
				var b = a.style.backgroundImage.slice(4, -1).replace(/"/g, "")
					, c = new R(b)
					, g = yd(c, 0);
				c.a = g;
				c = c.toString();
				b != c && (this.c.push(a), a = p(this.P, this, a), b = md.g(), c = new R(c), nd(b, c.toString(), a, void 0))
			}
		}, a)
	}
	vd.prototype.P = function (a, b) {
		var c = a.cloneNode(!1);
		c.style.backgroundImage = "url('" + b + "')";
		a.parentNode && a.parentNode.insertBefore(c, a.nextSibling);
		setTimeout(p(this.D, this, c, a), w.ImageSizeManager.replaceTimeout)
	};
	vd.prototype.D = function (a, b) {
		ob(this.c, b);
		for (var c = b.firstChild, d = null; c;) d = c.nextSibling, a.appendChild(c), c = d;
		Rc(b)
	};
	vd.prototype.A = function (a, b) {
		var c, d = 0;
		c = a.clientWidth > a.clientHeight ? a.clientWidth : a.clientHeight;
		c <= w.FilesystemPreviewSize.small ? d = w.FilesystemPreviewSize.small : c > w.FilesystemPreviewSize.small && c <= w.FilesystemPreviewSize.normal ? d = w.FilesystemPreviewSize.normal : c > w.FilesystemPreviewSize.normal && c <= w.FilesystemPreviewSize.detail && (d = w.FilesystemPreviewSize.detail);
		c = d;
		var d = new R(a.getAttribute("src"))
			, e;
		e = X(a, "maxThumbnail") ? (new R(W(a, "maxThumbnail"))).a : yd(d, c);
		if (e != d.a) {
			d.a = e;
			if (!b && (a.hasAttribute("width") || a.hasAttribute("height"))) {
				var f = a.hasAttribute("width") ? parseInt(a.getAttribute("width"), 10) : a.naturalWidth
					, g = a.hasAttribute("height") ? parseInt(a.getAttribute("height"), 10) : a.naturalHeight;
				f > g ? (e = c, c = Math.round(c / f * g)) : e = Math.round(c / g * f);
				a.hasAttribute("width") && a.setAttribute("width", e);
				a.hasAttribute("height") && a.setAttribute("height", c)
			}
			a.setAttribute("src", d.toString())
		}
	};

	function yd(a, b) {
		var c, d = a.a.substr(1).split("/");
		if (tc(a)) {
			c = "/" + d[0] + "/";
			if (2 == d.length && 0 < b) return c + b + "/" + d[1];
			if (3 == d.length && b != d[1]) return c + (0 < b ? b + "/" : "") + d[2]
		}
		else if (sc(a)) {
			for (c = [];
				"files" !== d[0];) c.push(d[0]), d.shift();
			c = c.join("/") + "/files/" + d[1] + "/" + d[2] + "/";
			var e = (new R(a.a)).a
				, f = e.lastIndexOf("/") + 1
				, e = e.slice(f).replace(/\.+/g, ".")
				, f = e.lastIndexOf(".");
			if ("svg" == (0 >= f ? "" : e.substr(f + 1)) || 4 == d.length && 0 < b) return c + d[3];
			if (5 == d.length && b != d[3]) return c + (0 < b ? b + "/" : "") + d[4]
		}
		return a.a
	};

	function zd(a, b, c) {
		Z.call(this, a, b, c);
		Ad(this)
	}
	r(zd, Z);
	zd.prototype.M = function (a) {
		switch (a.b) {
		case "contentMove":
		case "photoGalleryChange":
			a.a && Bd(a.a.i.c) && wd(this.j, a.a.i.id);
			break;
		case "resizeWindow":
			Ad(this);
			break;
		case "sectionCreated":
		case "microTemplateCellCreated":
			a.a && wd(this.j, a.a.i.id);
			break;
		case "sectionBackgroundChange":
			a.a && xd(this.j, a.a.i.id);
			break;
		case "pageBackgroundChange":
			xd(this.j)
		}
	};
	zd.prototype.f = function (a) {
		if (a.a && "content_items" == a.f) switch (a.b) {
		case "dataCreate":
			var b = a.a.i.id;
			a = a.a.i.c;
			Bd(a) && Ib().create({
				id: b
				, type: a
			});
			break;
		case "dataDelete":
			b = a.a.i.id;
			Bd(a.a.i.c) && Ib()["delete"](b);
			break;
		case "dataUpdate":
			Bd(a.a.i.c) && wd(this.j, a.a.i.id)
		}
	};

	function Ad(a) {
		var b = Hb().getData();
		null != b && A(b, function (a) {
			Bd(a.type) && wd(this.j, a.id, a.type)
		}, a);
		xd(a.j)
	}

	function Bd(a) {
		return E(w.ImageSizeManager.allowTypes, a)
	}
	M.g().register("wnd.static.ImageSizeManager", Gb, vd, zd);

	function Cd(a, b) {
		Y.call(this, 0, b);
		this.f = !1;
		this.w = null;
		this.Y = [];
		this.P = [];
		this.D = "";
		this.c = {
			vimeo: {}
			, youtube: {}
		};
		this.W = new V(this)
	}
	r(Cd, Y);
	var Dd = null
		, Ed = null
		, Fd = !1
		, Gd = !1;

	function Hd(a) {
		for (var b = Id(a), c = 0; c < b.length; c++)
			if ("IMG" === b[c].nodeName || "DIV" === b[c].nodeName)
				if (Wc) Jd(b[c]);
				else if (X(b[c], "video") && (Kd(a, b[c], Ld(b[c])), u.isCms && null != b[c])) {
			var d = b[c];
			d.onended = function () {
				d.currentTime = 0;
				d.pause()
			}
		}
	}

	function Jd(a) {
		var b = parseInt(W(a, "videoWidth"), 10)
			, c = parseInt(W(a, "videoHeight"), 10)
			, d = Md(b, c, a.parentNode.clientWidth, a.parentNode.clientHeight);
		"DIV" === a.nodeName && X(a, "src") ? (b = Oc("img", {
			src: W(a, "src")
			, "class": d
			, "data-video-width": b
			, "data-video-height": c
		}), Sc(b, a)) : a.className = d
	}

	function Ld(a) {
		a.parentNode && (a = a.parentNode);
		for (var b = 0, c = 0, d = a.offsetWidth, e = a.offsetHeight; a && a !== document.body;) b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
		return .2 < Math.max(0, Math.min(d, window.pageXOffset + window.innerWidth - b, b + d - window.pageXOffset)) * Math.max(0, Math.min(e, window.pageYOffset + window.innerHeight - c, c + e - window.pageYOffset)) / (d * e)
	}

	function Md(a, b, c, d) {
		var e = w.VideoLoaderManager.className + " "
			, f = w.VideoLoaderManager.orientationClassName.landscape
			, g = w.VideoLoaderManager.orientationClassName.portrait;
		a = parseInt(a, 10);
		b = parseInt(b, 10);
		return e = a > b && c > d || a < b && c < d ? d < Math.round(c * b / a) ? e + f : e + g : c < Math.round(d * a / b) ? e + g : e + f
	}

	function Kd(a, b, c) {
		if (X(b, "video")) {
			var d = null
				, e = W(b, "video")
				, f = b.src ? b.src : ""
				, g = parseInt(W(b, "videoWidth"), 10)
				, k = parseInt(W(b, "videoHeight"), 10)
				, t = Md(g, k, b.parentNode.clientWidth, b.parentNode.clientHeight)
				, O = Nd(b, g, k); - 1 != e.indexOf("vimeo.com") ? (Ed || (c = document.createElement("script"), c.src = w.VideoLoaderManager.videoApi.vimeo, document.head.appendChild(c), Ed = c, e = p(a.qa, a), cd(a.W, c, "load", e, void 0)), f = {
				Z: t
				, N: O
				, C: b
				, poster: f
				, width: g
				, height: k
			}, Gd ? Od(a, f) : a.P.push(f)) : -1 != e.indexOf("youtube.com") ? (Dd || (c = document.createElement("script"), c.src = w.VideoLoaderManager.videoApi.youtube, document.head.appendChild(c), Dd = c, e = p(a.sa, a), cd(a.W, c, "load", e, void 0)), f = {
				Z: t
				, N: O
				, C: b
				, poster: f
				, width: g
				, height: k
			}, Fd ? Pd(a, f) : a.Y.push(f)) : (a = {
				src: e
				, poster: f
				, "class": t
				, "data-video-width": g
				, "data-video-height": k
			}, c && (a.autoplay = !0), u.isCms || (a.loop = !0), d = Oc("video", a));
			d && Sc(d, b)
		}
	}

	function Qd(a) {
		!0 !== u.isCms && A(a.c, function (a, c) {
			A(a, function (a, b) {
				var f = null;
				switch (c) {
				case "vimeo":
					f = a;
					break;
				case "youtube":
					f = a.getIframe()
				}
				if ("hidden" !== f.style.visibility)
					if (null != f.contentWindow) switch (f = Ld(f), c) {
					case "vimeo":
						f = JSON.stringify({
							method: f ? "play" : "pause"
						});
						a.contentWindow.postMessage(f, "*");
						break;
					case "youtube":
						f ? a.playVideo() : a.pauseVideo()
					}
					else f = this.c[c], b in f && delete f[b], "youtube" === c && a.destroy()
			}, this)
		}, a)
	}

	function Rd(a) {
		D(a.w, function (a) {
			if (X(a, "my_videos")) {
				var c = Nd(a, a.width, a.height);
				qd(a, c.width + "%", c.height + "%")
			}
		}, a)
	}

	function Nd(a, b, c) {
		a = sd(a.parentNode);
		b = a.width / b;
		c = a.height / c;
		var d = a = 100;
		b < c ? a = c / b * 100 : b > c && (d = b / c * 100);
		return new z(parseFloat(a.toFixed(2)), parseFloat(d.toFixed(2)))
	}
	h = Cd.prototype;
	h.qa = function () {
		Gd = !0;
		D(this.P, function (a) {
			Od(this, a)
		}, this);
		this.P = []
	};

	function Sd(a) {
		if (!a.D) {
			var b = [];
			A({
				api: 1
				, autoplay: 1
				, autopause: 0
				, badge: 0
				, title: 0
				, byline: 0
				, portrait: 0
				, loop: !u.isCms
			}, function (a, d) {
				b.push(d + "=" + a)
			}, a);
			a.D = b.join("&")
		}
		return a.D
	}

	function Od(a, b) {
		var c = W(b.C, "video")
			, c = c + "?" + Sd(a)
			, c = Oc("iframe", {
				src: c
				, width: b.width
				, height: b.height
				, "class": b.Z
				, "data-my_videos": "vimeo"
			})
			, d = Math.random().toString(36).substring(7);
		a.c.vimeo[d] = c;
		qd(c, b.N.width + "%", b.N.height + "%");
		c.style.visibility = "hidden";
		var e = b.C;
		e.parentNode && e.parentNode.insertBefore(c, e.nextSibling);
		d = p(a.ma, a, d, b.C, X(b.C, "videoSound"), Td(b.C));
		cd(a.W, c, "load", d, void 0)
	}
	h.ma = function (a, b, c, d) {
		var e = this.c.vimeo[a];
		this.c.vimeo[a] && (e.style.visibility = "", Rc(b), Ud(e, "setVolume", c ? 1 : 0), Ud(e, "seekTo", d))
	};

	function Ud(a, b, c) {
		b = JSON.stringify({
			method: b
			, value: c
		});
		a.contentWindow.postMessage(b, "*")
	}
	h.sa = function () {
		this.A = window.YT || {};
		this.A.hasOwnProperty("ready") && this.A.ready(p(this.ra, this))
	};
	h.ra = function () {
		Fd = !0;
		D(this.Y, function (a) {
			Pd(this, a)
		}, this);
		this.Y = []
	};

	function Pd(a, b) {
		var c = b.C
			, d = W(c, "video")
			, d = (d instanceof R ? d.clone() : new R(d, void 0)).a.replace("/embed", "").substr(1)
			, e = {
				rel: 0
				, autoplay: 1
				, controls: 0
				, showinfo: 0
				, modestbranding: 1
				, iv_load_policy: 3
				, start: Td(c)
			};
		u.isCms || (e.loop = 1, e.playlist = d);
		var f = Oc("div", {
			"data-my_videos": "youtube"
			, "class": b.Z
		});
		qd(f, b.N.width + "%", b.N.height + "%");
		Sc(f, c);
		var g = d + Math.random().toString(36).substring(7)
			, c = p(a.ta, a, g, X(c, "videoSound"), Td(c));
		a.c.youtube[g] = new a.A.Player(f, {
			height: b.height
			, width: b.width
			, videoId: d
			, playerVars: e
			, events: {
				onReady: c
			}
		})
	}
	h.ta = function (a, b, c) {
		a = this.c.youtube[a];
		b || a.mute();
		"number" == typeof c && a.seekTo(c, !0)
	};

	function Td(a) {
		var b = 0;
		X(a, "videoStart") && (b = (b = W(a, "videoStart")) ? parseInt(b, 10) : 0);
		return b
	}

	function Id(a) {
		a.w = document.getElementsByClassName(w.VideoLoaderManager.className);
		return a.w
	};

	function Vd(a, b, c) {
		Z.call(this, a, b, c);
		Hd(this.j)
	}
	r(Vd, Z);
	Vd.prototype.M = function (a) {
		if ("scrollWindow" == a.b || "resizeWindow" == a.b) {
			for (var b = this.j.w, c = 0; c < b.length; c++) !1 === u.isCms && "VIDEO" === b[c].nodeName && (Ld(b[c]) ? b[c].paused && b[c].play() : b[c].paused || b[c].pause()), b[c].className = Md(parseInt(W(b[c], "videoWidth"), 10), parseInt(W(b[c], "videoHeight"), 10), b[c].parentNode.clientWidth, b[c].parentNode.clientHeight);
			Qd(this.j)
		}
		"resizeWindow" != a.b && "contentChangeFinished" != a.b || Rd(this.j)
	};
	M.g().register("wnd.static.VideoLoaderManager", L, Cd, Vd);

	function Wd(a, b) {
		Y.call(this, 0, b);
		this.a = this.c = null
	}
	r(Wd, Y);
	Wd.prototype.F = function () {
		null === this.a && (this.a = Ic("wnd_cookie_bar"));
		return this.a
	};

	function Xd(a, b, c) {
		Z.call(this, a, b, c);
		!Ma.get(Yd("identifier")) && this.F() && (this.I(), a = this.j, a.a && (a.a.style.display = ""))
	}
	r(Xd, Z);
	Xd.prototype.I = function () {
		Xd.o.I.call(this);
		var a;
		a = this.j;
		null === a.c && (a.c = Ic("wnd_cookie_bar_close"));
		a = a.c;
		null != a && cd(this.h, a, Xc, this.D, void 0)
	};
	Xd.prototype.D = function () {
		var a = this.j;
		a.a && (a.a.style.display = "none");
		Ka(Ma, Yd("identifier"), "1", Yd("age"), "/")
	};

	function Yd(a) {
		return x.CookieBar.cookies[a]
	}
	M.g().register("wnd.fe.CookieBar", L, Wd, Xd);

	function Zd(a, b) {
		Y.call(this, 0, b);
		this.f = !1;
		this.h = null
	}
	r(Zd, Y);

	function $d(a, b, c) {
		a = ae(a);
		var d = pd(b).y - x.template.topOffset;
		b = sd(b);
		var e, f = document;
		e = f.body;
		f = f.documentElement;
		e = new P(e.scrollLeft || f.scrollLeft, e.scrollTop || f.scrollTop);
		f = e.y;
		d < a.top || c ? f = e.y + d - a.top : d + b.height > a.height && (f = e.y + d + b.height + a.top - a.height);
		window.scrollTo(e.x, parseInt(f, 10))
	}

	function ae(a) {
		var b = Nc()
			, c = new Q(0, 0, b.width, b.height);
		D(be(a), function (a) {
			var b = pd(a);
			a = sd(a);
			b = new Q(b.x, b.y, a.width, a.height);
			(a = Wb(c, b)) && 0 < a.width && 0 < a.height && (b = c.difference(b), c = b[0], D(b, function (a) {
				if (c.height < a.height || c.width < a.width) c = a
			}, this))
		}, a);
		return c
	}

	function be(a) {
		null === a.h && (a.h = document.getElementsByClassName(x.template.classNames.fixed));
		return a.h
	}

	function ce(a) {
		for (var b = x.template.classNames.formField; a && !Kb(a, b);) a = a.parentNode;
		return a
	}

	function de(a, b) {
		if (0 == b.length) return !1;
		var c = b[0]
			, d;
		for (d = c; d && "form" != d.nodeName.toLowerCase();) d = d.parentNode;
		var e;
		if (e = null != d) {
			e = ae(a);
			e = new z(e.width, e.height);
			var f = sd(d);
			e = f.width <= e.width && f.height <= e.height
		}
		e && (c = d);
		$d(a, c, !0);
		return !0
	};

	function ee(a, b, c) {
		Z.call(this, a, b, c);
		fe(this);
		ge(this);
		he(this);
		ie(this);
		a = document.getElementsByClassName(x.template.classNames.formSubmitted);
		0 == a.length || $d(this.j, a[0], !0);
		de(this.j, document.getElementsByClassName(x.template.classNames.invalidFormField)) || de(this.j, document.getElementsByClassName(x.template.classNames.formCaptcha))
	}
	r(ee, Z);
	M.g().register("wnd.fe.FormManager", L, Zd, ee);
	h = ee.prototype;
	h.K = {};
	h.X = {};

	function fe(a) {
		D(document.querySelectorAll("input[type=checkbox][data-required]"), function (a) {
			je(this, a.name, a);
			ad(a, "change", p(function (a) {
				ke(this, a.target)
			}, this));
			ke(this, a)
		}, a)
	}

	function ie(a) {
		D(document.forms, function (a) {
			a.addEventListener("invalid", p(this.la, this), !0);
			D(a.elements, function (a) {
				E(["input", "select", "textarea"], a.nodeName.toLowerCase()) && ad(a, "change", p(this.ka, this))
			}, this)
		}, a)
	}

	function je(a, b, c) {
		null != a.K[b] || (a.K[b] = []);
		a.K[b].push(c)
	}

	function ke(a, b) {
		if (null != a.K[b.name]) {
			var c = a.K[b.name]
				, d = !1;
			D(c, function (a) {
				d |= a.checked
			});
			D(c, function (a) {
				a.required = !d
			})
		}
	}

	function ge(a) {
		D(document.querySelectorAll("[data-filename-for]"), function (a) {
			var c = W(a, "filenameFor");
			c && (this.X[c] = a)
		}, a);
		D(document.querySelectorAll("input[type=file]"), function (a) {
			ad(a, "change", p(function (a) {
				le(this, a.target)
			}, this));
			le(this, a)
		}, a)
	}

	function le(a, b) {
		null != a.X[b.name] && (a.X[b.name].innerHTML = b.value)
	}

	function he(a) {
		D(document.querySelectorAll("form"), function (a) {
			ad(a, "submit", p(function (a) {
				if (!1 === me(this, a.target)) return a.stopPropagation(), a.preventDefault(), !1
			}, this))
		}, a)
	}
	h.ka = function (a) {
		var b = a.target;
		"file" == b.type && ne(b);
		a = !b.checkValidity();
		(b = ce(b)) && Mb(b, a)
	};
	h.la = function (a) {
		a = a.target;
		$d(this.j, a);
		(a = ce(a)) && Mb(a, !0)
	};

	function me(a, b) {
		var c = !0;
		D(b.elements, function (a) {
			if (E(["input", "select", "textarea"], a.nodeName.toLowerCase())) {
				var b = !a.checkValidity() || "file" === a.type && !1 === ne(a);
				(a = ce(a)) && Mb(a, b);
				b && (c = !1)
			}
		}, a);
		return c
	}

	function ne(a) {
		var b = a.files[0]
			, c = ""
			, d = !0
			, e = null == b
			, f = null != b ? b.name.substr(b.name.lastIndexOf(".") + 1).toLowerCase() : "";
		e ? null != a.getAttribute("required") && (c = na("wnd.fe.FormManager.error.file.required"), d = !1) : E(u.fileUploadAllowExtension, f) ? b.size >= u.maxUserFormFileLimit && (c = na("wnd.fe.FormManager.error.file.sizeExceeded", {
			size: Math.round(u.maxUserFormFileLimit / 1024 / 1024)
		}), d = !1) : (c = na("wnd.fe.FormManager.error.file.notAllowedExtension", {
			extension: f
		}), d = !1);
		a.setCustomValidity(c);
		return d
	}
	h.M = function (a) {
		if ("scrollWindow" == a.b || "resizeWindow" == a.b) this.j.h = null
	};

	function oe() {
		tb.call(this, 0, x)
	}
	r(oe, tb);
	oe.prototype.init = function () {
		M.g().create(w.VideoLoaderManager.mvcID, "wnd.static.VideoLoaderManager", document.body, this);
		M.g().create(w.ImageSizeManager.mvcID, "wnd.static.ImageSizeManager", document.body, this);
		M.g().create(x.FormManager.mvcID, "wnd.fe.FormManager", document.body, this);
		M.g().create(x.CookieBar.mvcID, "wnd.fe.CookieBar", document.body, this)
	};

	function pe() {
		var a = I.g().get("wnd.fe")
			, b = new Ya("resizeWindow", a);
		Xa(b);
		H(a, b)
	}

	function qe() {
		var a = I.g().get("wnd.fe")
			, b = new Ya("scrollWindow", a);
		Xa(b);
		H(a, b)
	}
	window.onload = function () {
		window.onresize = pe;
		window.onscroll = qe;
		J = window.wnd.$data;
		u = window.wnd.$system;
		I.g().register("wnd.fe", oe);
		I.g().init()
	};
	if (!J) var J = {};
	if (!Db) var Db = {};
	if (!u) var u = {};
	if (!vb) var vb = {};
	vb.ha = function () {};
	q("wnd.keen", vb);
}({}));