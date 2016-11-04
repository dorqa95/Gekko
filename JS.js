function inIframe() {
	var e = window.location != window.parent.location;
	return e
}

function isMobileMenu() {
	return $("#menu-mobile").is(":visible")
}

function isDevice(e) {
	return $("html").hasClass(e)
}

function isCMS() {
	return $("body").hasClass("wnd-cms")
}

function deviceDetect(e) {
	var t = $("body")
		, n = $("html");
	if ("detect" == e && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (isMobileMenu() ? (isDevice("mobile") || $(n).addClass("mobile"), $(n).removeClass("tablet")) : (isDevice("tablet") || $(n).addClass("tablet"), $(n).removeClass("mobile")), $(t).hasClass("touched") || $(t).addClass("touched"), $(t).removeClass("desktop"), $(n).removeClass("pc")) : ($(n).hasClass("pc") || $(t).hasClass("desktop") || ($(n).addClass("pc"), $(t).addClass("desktop")), $(n).removeClass("tablet").removeClass("mobile"), $(t).removeClass("touched")), /WebnodeFrontendTest/i.test(navigator.userAgent) && ($(t).hasClass("wnd-frontend-test") || $(t).addClass("wnd-frontend-test")), /MSIE|Trident|Edge/i.test(navigator.userAgent) && ($(t).hasClass("isIE") || $(t).addClass("isIE"))), "mobile-devices" == e) {
		var i = !1;
		return function (e) {
			(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (i = !0)
		}(navigator.userAgent || navigator.vendor || window.opera), i
	}
	if ("wnd-frontend-test" == e) return $(t).hasClass("wnd-frontend-test");
	if ("touched" == e) return $(t).hasClass("touched");
	if ("android" == e) {
		var i = !1;
		return /Android/i.test(navigator.userAgent) && (i = !0), i
	}
	if ("ios" == e) {
		var i = !1;
		return /iPhone|iPad|iPod/i.test(navigator.userAgent) && (i = !0), i
	}
	if ("iphone" == e) {
		var i = !1;
		return /iPhone|iPod/i.test(navigator.userAgent) && (i = !0), i
	}
	if ("black-berry" == e) {
		var i = !1;
		return /BlackBerry/i.test(navigator.userAgent) && (i = !0), i
	}
	if ("opera-mini" == e) {
		var i = !1;
		return /Opera Mini/i.test(navigator.userAgent) && (i = !0), i
	}
	if ("ie-mobile" == e) {
		var i = !1;
		return /IEMobile/i.test(navigator.userAgent) && (i = !0), i
	}
}

function smoothScrolling() {
	$("a[href*=\\#]:not([href=\\#])").click(function () {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var e = $(this.hash);
			if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) {
				var t = e.offset().top;
				return isCMS() && (t -= $("#wnd_toolbar").outerHeight(!0)), $("html,body").animate({
					scrollTop: t
				}, 1e3), !1
			}
		}
	})
}

function waitForWebfonts(e, t) {
	for (var n = 0, i = 0, o = e.length; i < o; ++i) ! function (i) {
		function o() {
			if (r && r.offsetWidth != a && (++n, r.parentNode.removeChild(r), r = null), n >= e.length && (s && clearInterval(s), n == e.length)) return t(), !0
		}
		var r = document.createElement("span");
		r.innerHTML = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontFamily = "sans-serif", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", document.body.appendChild(r);
		var a = r.offsetWidth;
		r.style.fontFamily = i;
		var s;
		o() || (s = setInterval(o, 50))
	}(e[i])
}

function cmsReset(e) {
	if (isCMS()) {
		var t = e[0] ? e[0] : e;
		if (t) {
			var n = document.createEvent("Event");
			n.initEvent("wnd-redraw-done", !1, !0), t.dispatchEvent(n)
		}
	}
}

function watchForPrint() {
	var e = function () {}
		, t = function () {};
	if (window.matchMedia) {
		var n = window.matchMedia("print");
		n.addListener(function (n) {
			n.matches ? e() : t()
		})
	}
	window.onbeforeprint = e, window.onafterprint = t
}

function bindForms() {
	$(".form-file-button").on("click", function () {
		$(this).parent().prev().find("input").trigger("click")
	})
}

function fullscreenHeader() {
	if (!inIframe() && !deviceDetect("ios") && $("body").hasClass("touched")) {
		if ($(".fullscreen")[0] || $(".fullscreen-all")[0]) var e = 45
			, t = 0
			, n = $(window).width()
			, i = $(window).height();
		if ($(".fullscreen")[0]) {
			var o = $(".section-wrapper .fullscreen");
			t = i, n >= 320 && i > 480 && (t = .75 * i), n >= 480 && i >= 600 && (t = .6 * i, t > 550 && (t = 550)), n >= 600 && i >= 600 && (t = .5 * i, t > 600 && (t = 600)), n >= 900 && i > 769 && (t = .7 * i, t > 660 && (t = 660)), n >= 900 && i <= 768 && (t = i, isCMS() && (t -= e)), n >= 1400 && (t = .85 * i, t > 800 && (t = 800)), n >= 1600 && (t = .8 * i, t > 845 && (t = 845)), n >= 1800 && (t = .77 * i, t > 870 && (t = 870)), $(o).css("height", t)
		}
		if ($(".fullscreen-all")[0]) {
			var r = $(".section-wrapper .fullscreen-all")
				, a = window.innerHeight > window.innerWidth
				, s = "sidebar" == $("body").attr("data-layout-type")
				, l = "static" == $("header").css("position")
				, u = $("header").outerHeight();
			t = i, t < 400 && (t = 400), !a && s && l && (t -= u), a && n < 900 && (t = .62 * t), !a && n < 900 && (t = .82 * t), isCMS() && (t -= e), $(r).css("height", t)
		}
	}
}

function shortContent() {
	var e = !1;
	inIframe() && deviceDetect("iphone") && (e = !0);
	var t = !1;
	if ("sidebar" == $("body").data("layout-type") && "fixed" == $("#header").css("position") && (t = !0), 0 == e) {
		var n = $(window).height()
			, i = 0
			, o = $("body")
			, r = $("#main .section:not(#layout-section):not(.wnd-disabled):last-child");
		0 == t && ($("#header .section:not(#layout-section)").each(function () {
			i += $(this).height()
		}), $("#footer .section:not(#layout-section)").each(function () {
			i += $(this).height()
		})), $("#wnd_toolbar")[0] && (n -= $("#wnd_toolbar").height()), $("#wnd_fe_footer")[0] && (i += $("#wnd_fe_footer").height()), $("#wnd_cookie_bar")[0] && (i += $("#wnd_cookie_bar").height()), $("#main .section:not(#layout-section):not(.wnd-disabled)").each(function () {
			if ($(this).find(".content")[0]) {
				var e = $(this).find(".content").outerHeight(!0);
				i += e
			}
			else i += $(this).outerHeight(!0)
		}), i <= n ? $(o).hasClass("short-content") || ($(o).addClass("short-content"), cmsReset(r)) : $(o).hasClass("short-content") && $(o).removeClass("short-content")
	}
}

function msieversion() {
	var e = window.navigator.userAgent
		, t = e.indexOf("MSIE ");
	if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
	var n = e.indexOf("Trident/");
	if (n > 0) {
		var i = e.indexOf("rv:");
		return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10)
	}
	var o = e.indexOf("Edge/");
	return o > 0 && parseInt(e.substring(o + 5, e.indexOf(".", o)), 10)
}

function issafari() {
	return navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1 ? 1 : 0
}

function isfirefox() {
	return navigator.userAgent.indexOf("Firefox") > -1
}

function backgroundResize() {
	var e = $(window).height()
		, t = $(window).width();
	$(".bgatt-parallax").each(function (n) {
		var i = !1;
		$(this).hasClass("wnd-background-pattern") && (i = !0);
		var o = $(this);
		if (is_cms || !support3D || force2D) {
			var r = o.width()
				, a = o.height();
			if ("sidebar" == $("body").attr("data-layout-type")) {
				var s = parseInt($("header").css("marginLeft"))
					, l = !1;
				$("header .section-bg").css("opacity") < 1 && (l = !0), (1 == l || s > 0) && (r = t)
			}
			var u, c = $(o).attr("style")
				, d = c.indexOf("http");
			u = c.indexOf("')") > -1 ? c.indexOf("')") : c.indexOf('")') > -1 ? c.indexOf('")') : c.indexOf(")");
			var p, f, h = c.substr(d, u - d);
			$("<img/>").attr("src", h).on("load", function () {
				var t = p = this.width
					, n = f = this.height
					, s = t / n
					, l = 200
					, u = 0;
				u = e - a, n = a + u + l, t = n * s, r > t && (t = r, n = t / s), i || o.css("background-size", t + "px " + n + "px"), o.attr("resized-imgW", t), o.attr("resized-imgH", n), o.css("background-attachment", "fixed")
			})
		}
		else {
			$(this).hasClass("parallax") || $(this).addClass("parallax");
			var o = $(this)
				, m = $(this).parent().parent()
				, a = m.height()
				, v = 200
				, g = e - a
				, y = a + g + v;
			o.css("height", y + "px")
		}
	});
	var n = 0;
	n = msieversion() ? 300 : 100, setTimeout(function () {
		parallaxPosition()
	}, n)
}

function parallaxPosition(e) {
	var t = $(window).height()
		, n = $(window).scrollTop()
		, i = n + t
		, o = (n + i) / 2;
	$(".bgatt-parallax").each(function (e) {
		var r, a, s = $(this)
			, l = $(this).parent().parent()
			, u = !!$(l).is("#main .section-wrapper-content section:first-child")
			, c = !!$(l).is("#main .section-wrapper-content section:last-child")
			, d = $(this).hasClass("bgpos-top-center")
			, p = $(this).hasClass("bgpos-bottom-center");
		is_cms || !support3D || force2D ? (a = s.offset().top, r = s.height()) : (a = l.offset().top, r = l.outerHeight());
		var f, h, m, v, g, y, b = a + r;
		if (i > a && n < b)
			if (is_cms || !support3D || force2D) {
				h = s.attr("resized-imgw"), f = s.attr("resized-imgh");
				var w = 0;
				if ($(this).css("top").indexOf("px") > 0 && parseInt($(this).css("top"), 10) > 0 && (w = parseInt($(this).css("top"), 10)), m = 0, v = -f + t, u && d) {
					g = r < t ? f - r : f - t, a -= g, b += g;
					var x = m + (v - m) * (t / 2 - a) / (b - a);
					y = m + (v - m) * (o - a) / (b - a) - x
				}
				else if (c && p) {
					g = r < t ? f - r : f - t, a -= g, b += g;
					var C = m + (v - m) * (g + t / 2) / (b - a);
					y = m + (v - m) * (o - a) / (b - a) + C
				}
				else g = r < t ? f - r : f - t, a -= g, b += g, y = m + (v - m) * (o - a) / (b - a);
				y += w;
				var T;
				if ("sidebar" == $("body").attr("data-layout-type") && "fixed" == $("header").css("position")) {
					var E = $("header").width()
						, S = parseInt($("header").css("marginLeft"))
						, k = !1;
					$("header .section-bg").css("opacity") < 1 && (k = !0), 1 == k || S > 0 ? T = "50%" : (T = E + parseInt($(this).width() - h) / 2, T += "px")
				}
				else T = "50%";
				$(this).css("background-position", T + " " + y + "px")
			}
			else {
				if (f = s.height(), m = 0, v = -f + t, u && d) {
					var _ = 0;
					g = r < t ? f - r : f - t, a -= g, b += g;
					var x = m + (v - m) * (t / 2 - a) / (b - a);
					y = m + (v - m) * (o - a) / (b - a) - x + _
				}
				else if (c && p) {
					g = r < t ? f - r : f - t, a -= g, b += g;
					var C = m + (v - m) * (g + t / 2) / (b - a);
					y = m + (v - m) * (o - a) / (b - a) + C
				}
				else g = r < t ? f - r : f - t, a -= g, b += g, y = m + (v - m) * (o - a) / (b - a);
				var I = "translate3d(0px," + y + "px, 0px)";
				if ("sidebar" == $("body").attr("data-layout-type") && "fixed" == $("header").css("position")) {
					var E = $("header").width()
						, S = parseInt($("header").css("marginLeft"))
						, k = !1;
					$("header .section-bg").css("opacity") < 1 && (k = !0), 0 == k && 0 == S && s.css("margin-left", E + S + "px")
				}
				else s.css("margin-left", "0px");
				s.css("-webkit-transform", I), s.css("-ms-transform", I), s.css("transform", I)
			}
	})
}

function borderControll() {
	function getSectionBackground(e) {
		var t, n = ""
			, i = $(e).find(".section-bg-layer");
		return void 0 !== i && i.length || (i = e), $(i).attr("class").indexOf("wnd-background-solid") > -1 ? (t = "solid", n = $(i).css("backgroundColor"), "rgba(0, 0, 0, 0)" != n && "transparent" != n && void 0 !== n || (n = $(e).css("backgroundColor"), "rgba(0, 0, 0, 0)" != n && "transparent" != n && void 0 !== n || (n = $("body").css("backgroundColor")))) : $(i).attr("class").indexOf("wnd-background-image") > -1 ? t = "image" : $(i).attr("class").indexOf("wnd-background-video") > -1 ? t = "video" : $(i).attr("class").indexOf("wnd-background-pattern") > -1 ? t = "pattern" : "section-bg-layer" == $(i).attr("class") ? (t = "solid", n = $(i).css("backgroundColor"), "rgba(0, 0, 0, 0)" != n && "transparent" != n && void 0 !== n || (n = $(e).css("backgroundColor"), "rgba(0, 0, 0, 0)" != n && "transparent" != n && void 0 !== n || (n = $("body").css("backgroundColor")))) : $(i).attr("class").indexOf("section-bg-layer") == -1 && (t = "solid", n = $(i).css("backgroundColor"), void 0 !== n && "rgba(0, 0, 0, 0)" != n && "transparent" != n || (n = $("body").css("backgroundColor"))), {
			backgroundType: t
			, backgroundColor: n
		}
	}

	function handleBorder(borderElm, borderPos, curSec, action) {
		var currentSection = $(".section").eq(curSec);
		"section" != borderElm ? eval('$(currentSection).find(".' + borderElm + '").' + action + 'Class("border-' + borderPos + '")') : eval("$(currentSection)." + action + 'Class("border-' + borderPos + '")')
	}
	var sectionCount = $(".section").length
		, currentSection = 0
		, sectionsArray = []
		, layoutSection = $("#layout-section")
		, bordersAttr, borderParamsExist, currentSectionData, borderPos, borderAction, sectionSelector;
	sectionCount > 1 && $(".section").each(function () {
		bordersAttr = $(this).attr("wn-border"), borderParamsExist = "undefined" != typeof bordersAttr && bordersAttr !== !1, currentSectionData = getSectionBackground($(this), currentSection), sectionsArray.push({
			idSection: currentSection
			, bgColor: currentSectionData.backgroundColor
			, bgType: currentSectionData.backgroundType
			, sectionVisible: "block" == $(this).css("display")
			, borderTop: !!borderParamsExist && bordersAttr.indexOf("top") > -1
			, borderBottom: !!borderParamsExist && bordersAttr.indexOf("bottom") > -1
			, borderElm: borderParamsExist ? $(this).attr("wn-border-element") : ""
		}), currentSection++
	}), $.each(sectionsArray, function (e, t) {
		if (t.borderTop || t.borderBottom) {
			if (sectionSelector = e, t.borderTop && e > 0) {
				for (sectionSelector = e - 1; 0 == sectionsArray[sectionSelector];) sectionSelector--;
				if (sectionsArray[sectionSelector].borderBottom) return
			}
			if (t.borderBottom && e < sectionCount - 1)
				for (sectionSelector = e + 1; 0 == sectionsArray[sectionSelector];) sectionSelector++;
			borderPos = t.borderTop ? "top" : "bottom", borderAction = "solid" == t.bgType && "solid" == sectionsArray[sectionSelector].bgType && t.bgColor == sectionsArray[sectionSelector].bgColor ? "add" : "remove", handleBorder(t.borderElm, borderPos, e, borderAction)
		}
	}), "none" == $(layoutSection).attr("wn-border") && ($(layoutSection).removeClass("border-top").removeClass("border-bottom"), $(layoutSection).addClass("border-none"))
}

function blogSectionControl() {
	function e(e) {
		for (var t in e) {
			var n = e[t];
			if (n.indexOf("section-") > -1) return n
		}
	}

	function t() {
		o.removeClass(r), s.removeClass(a)
	}

	function n() {
		o.addClass(r), s.addClass(a)
	}
	var i = $("body")
		, o = $("#main [class*='blog-detail-header']")
		, r = "wn-blog-header-collapse"
		, a = "wn-section-closest-to-blog-header-collapse";
	if (!(o.length < 1)) {
		var s = o.next(".section");
		if (!(s.length < 1)) {
			var l = e(o.attr("class").split(/\s+/))
				, u = e(s.attr("class").split(/\s+/));
			if (l == u)
				if (l.indexOf("section-media") > -1) {
					var c = o.find(".wnd-background-solid").css("background-color")
						, d = s.find(".wnd-background-solid").css("background-color");
					c == d && "undefined" != typeof c ? n() : t()
				}
				else n();
			else if ("section-none" == l || "section-none" == u) {
				var p = e(i.attr("class").split(/\s+/));
				"section-none" != l && (l == p ? n() : t()), "section-none" != u && (u == p ? n() : t())
			}
			else t()
		}
	}
}

function mediaSectionArrowScroll() {
	var e = "anchorForArrow"
		, t = "slow"
		, n = 0;
	$("body").hasClass("wnd-cms") && (t = 0, n = $("#wnd_toolbar").outerHeight(!0)), $("a.arrow").each(function () {
		$(this).parent().next().length > 0 && $(this).parent().prev().length <= 0 ? ($(this).show(), $(this).parent().next().addClass(e), $(this).click(function (i) {
			i.preventDefault(), $("html,body").animate({
				scrollTop: $("." + e).offset().top - n
			}, t)
		}), $(this).show()) : $(this).hide()
	})
}

function checkCookieBar() {
	$("#wnd_cookie_bar").length > 0 && "block" == $("#wnd_cookie_bar").css("display") && $("#main .media-01.design-01:first-child").length > 0 && "fixed" == $("header").css("position") && setTimeout(function () {
		$("#main .media-01.design-01:first-child").css("height", window.innerHeight - $("#wnd_cookie_bar").outerHeight(!0))
	}, 500)
}! function (e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
	function n(e) {
		var t = "length" in e && e.length
			, n = oe.type(e);
		return "function" !== n && !oe.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
	}

	function i(e, t, n) {
		if (oe.isFunction(t)) return oe.grep(e, function (e, i) {
			return !!t.call(e, i, e) !== n
		});
		if (t.nodeType) return oe.grep(e, function (e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (pe.test(t)) return oe.filter(t, e, n);
			t = oe.filter(t, e)
		}
		return oe.grep(e, function (e) {
			return oe.inArray(e, t) >= 0 !== n
		})
	}

	function o(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}

	function r(e) {
		var t = we[e] = {};
		return oe.each(e.match(be) || [], function (e, n) {
			t[n] = !0
		}), t
	}

	function a() {
		he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
	}

	function s() {
		(he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), oe.ready())
	}

	function l(e, t, n) {
		if (void 0 === n && 1 === e.nodeType) {
			var i = "data-" + t.replace(Se, "-$1").toLowerCase();
			if (n = e.getAttribute(i), "string" == typeof n) {
				try {
					n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? oe.parseJSON(n) : n)
				}
				catch (o) {}
				oe.data(e, t, n)
			}
			else n = void 0
		}
		return n
	}

	function u(e) {
		var t;
		for (t in e)
			if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function c(e, t, n, i) {
		if (oe.acceptData(e)) {
			var o, r, a = oe.expando
				, s = e.nodeType
				, l = s ? oe.cache : e
				, u = s ? e[a] : e[a] && a;
			if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = Y.pop() || oe.guid++ : a), l[u] || (l[u] = s ? {} : {
				toJSON: oe.noop
			}), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = oe.extend(l[u], t) : l[u].data = oe.extend(l[u].data, t)), r = l[u], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[oe.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[oe.camelCase(t)])) : o = r, o
		}
	}

	function d(e, t, n) {
		if (oe.acceptData(e)) {
			var i, o, r = e.nodeType
				, a = r ? oe.cache : e
				, s = r ? e[oe.expando] : oe.expando;
			if (a[s]) {
				if (t && (i = n ? a[s] : a[s].data)) {
					oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in i ? t = [t] : (t = oe.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
					for (; o--;) delete i[t[o]];
					if (n ? !u(i) : !oe.isEmptyObject(i)) return
				}(n || (delete a[s].data, u(a[s]))) && (r ? oe.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}

	function p() {
		return !0
	}

	function f() {
		return !1
	}

	function h() {
		try {
			return he.activeElement
		}
		catch (e) {}
	}

	function m(e) {
		var t = Oe.split("|")
			, n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}

	function v(e, t) {
		var n, i, o = 0
			, r = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
		if (!r)
			for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || oe.nodeName(i, t) ? r.push(i) : oe.merge(r, v(i, t));
		return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], r) : r
	}

	function g(e) {
		De.test(e.type) && (e.defaultChecked = e.checked)
	}

	function y(e, t) {
		return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function b(e) {
		return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
	}

	function w(e) {
		var t = Xe.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function x(e, t) {
		for (var n, i = 0; null != (n = e[i]); i++) oe._data(n, "globalEval", !t || oe._data(t[i], "globalEval"))
	}

	function C(e, t) {
		if (1 === t.nodeType && oe.hasData(e)) {
			var n, i, o, r = oe._data(e)
				, a = oe._data(t, r)
				, s = r.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)
					for (i = 0, o = s[n].length; o > i; i++) oe.event.add(t, n, s[n][i])
			}
			a.data && (a.data = oe.extend({}, a.data))
		}
	}

	function T(e, t) {
		var n, i, o;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[oe.expando]) {
				o = oe._data(t);
				for (i in o.events) oe.removeEvent(t, i, o.handle);
				t.removeAttribute(oe.expando)
			}
			"script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && De.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}

	function E(t, n) {
		var i, o = oe(n.createElement(t)).appendTo(n.body)
			, r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : oe.css(o[0], "display");
		return o.detach(), r
	}

	function S(e) {
		var t = he
			, n = Je[e];
		return n || (n = E(e, t), "none" !== n && n || (Qe = (Qe || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Qe[0].contentWindow || Qe[0].contentDocument).document, t.write(), t.close(), n = E(e, t), Qe.detach()), Je[e] = n), n
	}

	function k(e, t) {
		return {
			get: function () {
				var n = e();
				if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function _(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = pt.length; o--;)
			if (t = pt[o] + n, t in e) return t;
		return i
	}

	function $(e, t) {
		for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = oe._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && $e(i) && (r[a] = oe._data(i, "olddisplay", S(i.nodeName)))) : (o = $e(i), (n && "none" !== n || !o) && oe._data(i, "olddisplay", o ? n : oe.css(i, "display"))));
		for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
		return e
	}

	function I(e, t, n) {
		var i = lt.exec(t);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
	}

	function D(e, t, n, i, o) {
		for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += oe.css(e, n + _e[r], !0, o)), i ? ("content" === n && (a -= oe.css(e, "padding" + _e[r], !0, o)), "margin" !== n && (a -= oe.css(e, "border" + _e[r] + "Width", !0, o))) : (a += oe.css(e, "padding" + _e[r], !0, o), "padding" !== n && (a += oe.css(e, "border" + _e[r] + "Width", !0, o)));
		return a
	}

	function L(e, t, n) {
		var i = !0
			, o = "width" === t ? e.offsetWidth : e.offsetHeight
			, r = et(e)
			, a = ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, r);
		if (0 >= o || null == o) {
			if (o = tt(e, t, r), (0 > o || null == o) && (o = e.style[t]), it.test(o)) return o;
			i = a && (ne.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
		}
		return o + D(e, t, n || (a ? "border" : "content"), i, r) + "px"
	}

	function A(e, t, n, i, o) {
		return new A.prototype.init(e, t, n, i, o)
	}

	function M() {
		return setTimeout(function () {
			ft = void 0
		}), ft = oe.now()
	}

	function N(e, t) {
		var n, i = {
				height: e
			}
			, o = 0;
		for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = _e[o], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function z(e, t, n) {
		for (var i, o = (bt[t] || []).concat(bt["*"]), r = 0, a = o.length; a > r; r++)
			if (i = o[r].call(n, t, e)) return i
	}

	function O(e, t, n) {
		var i, o, r, a, s, l, u, c, d = this
			, p = {}
			, f = e.style
			, h = e.nodeType && $e(e)
			, m = oe._data(e, "fxshow");
		n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
			s.unqueued || l()
		}), s.unqueued++, d.always(function () {
			d.always(function () {
				s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = oe.css(e, "display"), c = "none" === u ? oe._data(e, "olddisplay") || S(e.nodeName) : u, "inline" === c && "none" === oe.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function () {
			f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
		}));
		for (i in t)
			if (o = t[i], mt.exec(o)) {
				if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
					if ("show" !== o || !m || void 0 === m[i]) continue;
					h = !0
				}
				p[i] = m && m[i] || oe.style(e, i)
			}
			else u = void 0;
		if (oe.isEmptyObject(p)) "inline" === ("none" === u ? S(e.nodeName) : u) && (f.display = u);
		else {
			m ? "hidden" in m && (h = m.hidden) : m = oe._data(e, "fxshow", {}), r && (m.hidden = !h), h ? oe(e).show() : d.done(function () {
				oe(e).hide()
			}), d.done(function () {
				var t;
				oe._removeData(e, "fxshow");
				for (t in p) oe.style(e, t, p[t])
			});
			for (i in p) a = z(h ? m[i] : 0, i, d), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function P(e, t) {
		var n, i, o, r, a;
		for (n in e)
			if (i = oe.camelCase(n), o = t[i], r = e[n], oe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = oe.cssHooks[i], a && "expand" in a) {
				r = a.expand(r), delete e[i];
				for (n in r) n in e || (e[n] = r[n], t[n] = o)
			}
			else t[i] = o
	}

	function R(e, t, n) {
		var i, o, r = 0
			, a = yt.length
			, s = oe.Deferred().always(function () {
				delete l.elem
			})
			, l = function () {
				if (o) return !1;
				for (var t = ft || M(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(r);
				return s.notifyWith(e, [u, r, n]), 1 > r && l ? n : (s.resolveWith(e, [u]), !1)
			}
			, u = s.promise({
				elem: e
				, props: oe.extend({}, t)
				, opts: oe.extend(!0, {
					specialEasing: {}
				}, n)
				, originalProperties: t
				, originalOptions: n
				, startTime: ft || M()
				, duration: n.duration
				, tweens: []
				, createTween: function (t, n) {
					var i = oe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(i), i
				}
				, stop: function (t) {
					var n = 0
						, i = t ? u.tweens.length : 0;
					if (o) return this;
					for (o = !0; i > n; n++) u.tweens[n].run(1);
					return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
				}
			})
			, c = u.props;
		for (P(c, u.opts.specialEasing); a > r; r++)
			if (i = yt[r].call(u, e, c, u.opts)) return i;
		return oe.map(c, z, u), oe.isFunction(u.opts.start) && u.opts.start.call(e, u), oe.fx.timer(oe.extend(l, {
			elem: e
			, anim: u
			, queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function H(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, o = 0
				, r = t.toLowerCase().match(be) || [];
			if (oe.isFunction(n))
				for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function j(e, t, n, i) {
		function o(s) {
			var l;
			return r[s] = !0, oe.each(e[s] || [], function (e, s) {
				var u = s(t, n, i);
				return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
			}), l
		}
		var r = {}
			, a = e === Bt;
		return o(t.dataTypes[0]) || !r["*"] && o("*")
	}

	function F(e, t) {
		var n, i, o = oe.ajaxSettings.flatOptions || {};
		for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
		return n && oe.extend(!0, e, n), e
	}

	function W(e, t, n) {
		for (var i, o, r, a, s = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
		if (o)
			for (a in s)
				if (s[a] && s[a].test(o)) {
					l.unshift(a);
					break
				}
		if (l[0] in n) r = l[0];
		else {
			for (a in n) {
				if (!l[0] || e.converters[a + " " + l[0]]) {
					r = a;
					break
				}
				i || (i = a)
			}
			r = r || i
		}
		return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
	}

	function B(e, t, n, i) {
		var o, r, a, s, l, u = {}
			, c = e.dataTypes.slice();
		if (c[1])
			for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
		for (r = c.shift(); r;)
			if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
				if ("*" === r) r = l;
				else if ("*" !== l && l !== r) {
			if (a = u[l + " " + r] || u["* " + r], !a)
				for (o in u)
					if (s = o.split(" "), s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
						a === !0 ? a = u[o] : u[o] !== !0 && (r = s[0], c.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				}
				catch (d) {
					return {
						state: "parsererror"
						, error: a ? d : "No conversion from " + l + " to " + r
					}
				}
		}
		return {
			state: "success"
			, data: t
		}
	}

	function q(e, t, n, i) {
		var o;
		if (oe.isArray(t)) oe.each(t, function (t, o) {
			n || Xt.test(e) ? i(e, o) : q(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
		});
		else if (n || "object" !== oe.type(t)) i(e, t);
		else
			for (o in t) q(e + "[" + o + "]", t[o], n, i)
	}

	function U() {
		try {
			return new e.XMLHttpRequest
		}
		catch (t) {}
	}

	function Z() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		}
		catch (t) {}
	}

	function X(e) {
		return oe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
	}
	var Y = []
		, V = Y.slice
		, G = Y.concat
		, K = Y.push
		, Q = Y.indexOf
		, J = {}
		, ee = J.toString
		, te = J.hasOwnProperty
		, ne = {}
		, ie = "1.11.3"
		, oe = function (e, t) {
			return new oe.fn.init(e, t)
		}
		, re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
		, ae = /^-ms-/
		, se = /-([\da-z])/gi
		, le = function (e, t) {
			return t.toUpperCase()
		};
	oe.fn = oe.prototype = {
		jquery: ie
		, constructor: oe
		, selector: ""
		, length: 0
		, toArray: function () {
			return V.call(this)
		}
		, get: function (e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : V.call(this)
		}
		, pushStack: function (e) {
			var t = oe.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		}
		, each: function (e, t) {
			return oe.each(this, e, t)
		}
		, map: function (e) {
			return this.pushStack(oe.map(this, function (t, n) {
				return e.call(t, n, t)
			}))
		}
		, slice: function () {
			return this.pushStack(V.apply(this, arguments))
		}
		, first: function () {
			return this.eq(0)
		}
		, last: function () {
			return this.eq(-1)
		}
		, eq: function (e) {
			var t = this.length
				, n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		}
		, end: function () {
			return this.prevObject || this.constructor(null)
		}
		, push: K
		, sort: Y.sort
		, splice: Y.splice
	}, oe.extend = oe.fn.extend = function () {
		var e, t, n, i, o, r, a = arguments[0] || {}
			, s = 1
			, l = arguments.length
			, u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || oe.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
			if (null != (o = arguments[s]))
				for (i in o) e = a[i], n = o[i], a !== n && (u && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1, r = e && oe.isArray(e) ? e : []) : r = e && oe.isPlainObject(e) ? e : {}, a[i] = oe.extend(u, r, n)) : void 0 !== n && (a[i] = n));
		return a
	}, oe.extend({
		expando: "jQuery" + (ie + Math.random()).replace(/\D/g, "")
		, isReady: !0
		, error: function (e) {
			throw new Error(e)
		}
		, noop: function () {}
		, isFunction: function (e) {
			return "function" === oe.type(e)
		}
		, isArray: Array.isArray || function (e) {
			return "array" === oe.type(e)
		}
		, isWindow: function (e) {
			return null != e && e == e.window
		}
		, isNumeric: function (e) {
			return !oe.isArray(e) && e - parseFloat(e) + 1 >= 0
		}
		, isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		}
		, isPlainObject: function (e) {
			var t;
			if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
			try {
				if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
			}
			catch (n) {
				return !1
			}
			if (ne.ownLast)
				for (t in e) return te.call(e, t);
			for (t in e);
			return void 0 === t || te.call(e, t)
		}
		, type: function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[ee.call(e)] || "object" : typeof e
		}
		, globalEval: function (t) {
			t && oe.trim(t) && (e.execScript || function (t) {
				e.eval.call(e, t)
			})(t)
		}
		, camelCase: function (e) {
			return e.replace(ae, "ms-").replace(se, le)
		}
		, nodeName: function (e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		}
		, each: function (e, t, i) {
			var o, r = 0
				, a = e.length
				, s = n(e);
			if (i) {
				if (s)
					for (; a > r && (o = t.apply(e[r], i), o !== !1); r++);
				else
					for (r in e)
						if (o = t.apply(e[r], i), o === !1) break
			}
			else if (s)
				for (; a > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
			else
				for (r in e)
					if (o = t.call(e[r], r, e[r]), o === !1) break; return e
		}
		, trim: function (e) {
			return null == e ? "" : (e + "").replace(re, "")
		}
		, makeArray: function (e, t) {
			var i = t || [];
			return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
		}
		, inArray: function (e, t, n) {
			var i;
			if (t) {
				if (Q) return Q.call(t, e, n);
				for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		}
		, merge: function (e, t) {
			for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
			if (n !== n)
				for (; void 0 !== t[i];) e[o++] = t[i++];
			return e.length = o, e
		}
		, grep: function (e, t, n) {
			for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++) i = !t(e[r], r), i !== s && o.push(e[r]);
			return o
		}
		, map: function (e, t, i) {
			var o, r = 0
				, a = e.length
				, s = n(e)
				, l = [];
			if (s)
				for (; a > r; r++) o = t(e[r], r, i), null != o && l.push(o);
			else
				for (r in e) o = t(e[r], r, i), null != o && l.push(o);
			return G.apply([], l)
		}
		, guid: 1
		, proxy: function (e, t) {
			var n, i, o;
			return "string" == typeof t && (o = e[t], t = e, e = o), oe.isFunction(e) ? (n = V.call(arguments, 2), i = function () {
				return e.apply(t || this, n.concat(V.call(arguments)))
			}, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
		}
		, now: function () {
			return +new Date
		}
		, support: ne
	}), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
		J["[object " + t + "]"] = t.toLowerCase()
	});
	var ue = function (e) {
		function t(e, t, n, i) {
			var o, r, a, s, l, u, d, f, h, m;
			if ((t ? t.ownerDocument || t : j) !== A && L(t), t = t || A, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
			if (!i && N) {
				if (11 !== s && (o = ye.exec(e)))
					if (a = o[1]) {
						if (9 === s) {
							if (r = t.getElementById(a), !r || !r.parentNode) return n;
							if (r.id === a) return n.push(r), n
						}
						else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && R(t, r) && r.id === a) return n.push(r), n
					}
					else {
						if (o[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
						if ((a = o[3]) && x.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
					}
				if (x.qsa && (!z || !z.test(e))) {
					if (f = d = H, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
						for (u = S(e), (d = t.getAttribute("id")) ? f = d.replace(we, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + p(u[l]);
						h = be.test(e) && c(t.parentNode) || t, m = u.join(",")
					}
					if (m) try {
						return Q.apply(n, h.querySelectorAll(m)), n
					}
					catch (v) {}
					finally {
						d || t.removeAttribute("id")
					}
				}
			}
			return _(e.replace(le, "$1"), t, n, i)
		}

		function n() {
			function e(n, i) {
				return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
			}
			var t = [];
			return e
		}

		function i(e) {
			return e[H] = !0, e
		}

		function o(e) {
			var t = A.createElement("div");
			try {
				return !!e(t)
			}
			catch (n) {
				return !1
			}
			finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function r(e, t) {
			for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
		}

		function a(e, t) {
			var n = t && e
				, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function s(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function l(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function u(e) {
			return i(function (t) {
				return t = +t, i(function (n, i) {
					for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
				})
			})
		}

		function c(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function d() {}

		function p(e) {
			for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
			return i
		}

		function f(e, t, n) {
			var i = t.dir
				, o = n && "parentNode" === i
				, r = W++;
			return t.first ? function (t, n, r) {
				for (; t = t[i];)
					if (1 === t.nodeType || o) return e(t, n, r)
			} : function (t, n, a) {
				var s, l, u = [F, r];
				if (a) {
					for (; t = t[i];)
						if ((1 === t.nodeType || o) && e(t, n, a)) return !0
				}
				else
					for (; t = t[i];)
						if (1 === t.nodeType || o) {
							if (l = t[H] || (t[H] = {}), (s = l[i]) && s[0] === F && s[1] === r) return u[2] = s[2];
							if (l[i] = u, u[2] = e(t, n, a)) return !0
						}
			}
		}

		function h(e) {
			return e.length > 1 ? function (t, n, i) {
				for (var o = e.length; o--;)
					if (!e[o](t, n, i)) return !1;
				return !0
			} : e[0]
		}

		function m(e, n, i) {
			for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
			return i
		}

		function v(e, t, n, i, o) {
			for (var r, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), u && t.push(s));
			return a
		}

		function g(e, t, n, o, r, a) {
			return o && !o[H] && (o = g(o)), r && !r[H] && (r = g(r, a)), i(function (i, a, s, l) {
				var u, c, d, p = []
					, f = []
					, h = a.length
					, g = i || m(t || "*", s.nodeType ? [s] : s, [])
					, y = !e || !i && t ? g : v(g, p, e, s, l)
					, b = n ? r || (i ? e : h || o) ? [] : a : y;
				if (n && n(y, b, s, l), o)
					for (u = v(b, f), o(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
				if (i) {
					if (r || e) {
						if (r) {
							for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
							r(null, b = [], u, l)
						}
						for (c = b.length; c--;)(d = b[c]) && (u = r ? ee(i, d) : p[c]) > -1 && (i[u] = !(a[u] = d))
					}
				}
				else b = v(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, l) : Q.apply(a, b)
			})
		}

		function y(e) {
			for (var t, n, i, o = e.length, r = C.relative[e[0].type], a = r || C.relative[" "], s = r ? 1 : 0, l = f(function (e) {
					return e === t
				}, a, !0), u = f(function (e) {
					return ee(t, e) > -1
				}, a, !0), c = [function (e, n, i) {
					var o = !r && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
					return t = null, o
				}]; o > s; s++)
				if (n = C.relative[e[s].type]) c = [f(h(c), n)];
				else {
					if (n = C.filter[e[s].type].apply(null, e[s].matches), n[H]) {
						for (i = ++s; o > i && !C.relative[e[i].type]; i++);
						return g(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(le, "$1"), n, i > s && y(e.slice(s, i)), o > i && y(e = e.slice(i)), o > i && p(e))
					}
					c.push(n)
				}
			return h(c)
		}

		function b(e, n) {
			var o = n.length > 0
				, r = e.length > 0
				, a = function (i, a, s, l, u) {
					var c, d, p, f = 0
						, h = "0"
						, m = i && []
						, g = []
						, y = $
						, b = i || r && C.find.TAG("*", u)
						, w = F += null == y ? 1 : Math.random() || .1
						, x = b.length;
					for (u && ($ = a !== A && a); h !== x && null != (c = b[h]); h++) {
						if (r && c) {
							for (d = 0; p = e[d++];)
								if (p(c, a, s)) {
									l.push(c);
									break
								}
							u && (F = w)
						}
						o && ((c = !p && c) && f--, i && m.push(c))
					}
					if (f += h, o && h !== f) {
						for (d = 0; p = n[d++];) p(m, g, a, s);
						if (i) {
							if (f > 0)
								for (; h--;) m[h] || g[h] || (g[h] = G.call(l));
							g = v(g)
						}
						Q.apply(l, g), u && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
					}
					return u && (F = w, $ = y), m
				};
			return o ? i(a) : a
		}
		var w, x, C, T, E, S, k, _, $, I, D, L, A, M, N, z, O, P, R, H = "sizzle" + 1 * new Date
			, j = e.document
			, F = 0
			, W = 0
			, B = n()
			, q = n()
			, U = n()
			, Z = function (e, t) {
				return e === t && (D = !0), 0
			}
			, X = 1 << 31
			, Y = {}.hasOwnProperty
			, V = []
			, G = V.pop
			, K = V.push
			, Q = V.push
			, J = V.slice
			, ee = function (e, t) {
				for (var n = 0, i = e.length; i > n; n++)
					if (e[n] === t) return n;
				return -1
			}
			, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped"
			, ne = "[\\x20\\t\\r\\n\\f]"
			, ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+"
			, oe = ie.replace("w", "w#")
			, re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]"
			, ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)"
			, se = new RegExp(ne + "+", "g")
			, le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g")
			, ue = new RegExp("^" + ne + "*," + ne + "*")
			, ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*")
			, de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g")
			, pe = new RegExp(ae)
			, fe = new RegExp("^" + oe + "$")
			, he = {
				ID: new RegExp("^#(" + ie + ")")
				, CLASS: new RegExp("^\\.(" + ie + ")")
				, TAG: new RegExp("^(" + ie.replace("w", "w*") + ")")
				, ATTR: new RegExp("^" + re)
				, PSEUDO: new RegExp("^" + ae)
				, CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i")
				, bool: new RegExp("^(?:" + te + ")$", "i")
				, needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
			}
			, me = /^(?:input|select|textarea|button)$/i
			, ve = /^h\d$/i
			, ge = /^[^{]+\{\s*\[native \w/
			, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/
			, be = /[+~]/
			, we = /'|\\/g
			, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig")
			, Ce = function (e, t, n) {
				var i = "0x" + t - 65536;
				return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			}
			, Te = function () {
				L()
			};
		try {
			Q.apply(V = J.call(j.childNodes), j.childNodes), V[j.childNodes.length].nodeType
		}
		catch (Ee) {
			Q = {
				apply: V.length ? function (e, t) {
					K.apply(e, J.call(t))
				} : function (e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}
		x = t.support = {}, E = t.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, L = t.setDocument = function (e) {
			var t, n, i = e ? e.ownerDocument || e : j;
			return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, M = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), N = !E(i), x.attributes = o(function (e) {
				return e.className = "i", !e.getAttribute("className")
			}), x.getElementsByTagName = o(function (e) {
				return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
			}), x.getElementsByClassName = ge.test(i.getElementsByClassName), x.getById = o(function (e) {
				return M.appendChild(e).id = H, !i.getElementsByName || !i.getElementsByName(H).length
			}), x.getById ? (C.find.ID = function (e, t) {
				if ("undefined" != typeof t.getElementById && N) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, C.filter.ID = function (e) {
				var t = e.replace(xe, Ce);
				return function (e) {
					return e.getAttribute("id") === t
				}
			}) : (delete C.find.ID, C.filter.ID = function (e) {
				var t = e.replace(xe, Ce);
				return function (e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), C.find.TAG = x.getElementsByTagName ? function (e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
			} : function (e, t) {
				var n, i = []
					, o = 0
					, r = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = r[o++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return r
			}, C.find.CLASS = x.getElementsByClassName && function (e, t) {
				return N ? t.getElementsByClassName(e) : void 0
			}, O = [], z = [], (x.qsa = ge.test(i.querySelectorAll)) && (o(function (e) {
				M.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || z.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || z.push("~="), e.querySelectorAll(":checked").length || z.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || z.push(".#.+[+~]")
			}), o(function (e) {
				var t = i.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && z.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), z.push(",.*:")
			})), (x.matchesSelector = ge.test(P = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function (e) {
				x.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), O.push("!=", ae)
			}), z = z.length && new RegExp(z.join("|")), O = O.length && new RegExp(O.join("|")), t = ge.test(M.compareDocumentPosition), R = t || ge.test(M.contains) ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e
					, i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function (e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, Z = t ? function (e, t) {
				if (e === t) return D = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === j && R(j, e) ? -1 : t === i || t.ownerDocument === j && R(j, t) ? 1 : I ? ee(I, e) - ee(I, t) : 0 : 4 & n ? -1 : 1)
			} : function (e, t) {
				if (e === t) return D = !0, 0;
				var n, o = 0
					, r = e.parentNode
					, s = t.parentNode
					, l = [e]
					, u = [t];
				if (!r || !s) return e === i ? -1 : t === i ? 1 : r ? -1 : s ? 1 : I ? ee(I, e) - ee(I, t) : 0;
				if (r === s) return a(e, t);
				for (n = e; n = n.parentNode;) l.unshift(n);
				for (n = t; n = n.parentNode;) u.unshift(n);
				for (; l[o] === u[o];) o++;
				return o ? a(l[o], u[o]) : l[o] === j ? -1 : u[o] === j ? 1 : 0
			}, i) : A
		}, t.matches = function (e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function (e, n) {
			if ((e.ownerDocument || e) !== A && L(e), n = n.replace(de, "='$1']"), !(!x.matchesSelector || !N || O && O.test(n) || z && z.test(n))) try {
				var i = P.call(e, n);
				if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
			}
			catch (o) {}
			return t(n, A, null, [e]).length > 0
		}, t.contains = function (e, t) {
			return (e.ownerDocument || e) !== A && L(e), R(e, t)
		}, t.attr = function (e, t) {
			(e.ownerDocument || e) !== A && L(e);
			var n = C.attrHandle[t.toLowerCase()]
				, i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
			return void 0 !== i ? i : x.attributes || !N ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}, t.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function (e) {
			var t, n = []
				, i = 0
				, o = 0;
			if (D = !x.detectDuplicates, I = !x.sortStable && e.slice(0), e.sort(Z), D) {
				for (; t = e[o++];) t === e[o] && (i = n.push(o));
				for (; i--;) e.splice(n[i], 1)
			}
			return I = null, e
		}, T = t.getText = function (e) {
			var t, n = ""
				, i = 0
				, o = e.nodeType;
			if (o) {
				if (1 === o || 9 === o || 11 === o) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
				}
				else if (3 === o || 4 === o) return e.nodeValue
			}
			else
				for (; t = e[i++];) n += T(t);
			return n
		}, C = t.selectors = {
			cacheLength: 50
			, createPseudo: i
			, match: he
			, attrHandle: {}
			, find: {}
			, relative: {
				">": {
					dir: "parentNode"
					, first: !0
				}
				, " ": {
					dir: "parentNode"
				}
				, "+": {
					dir: "previousSibling"
					, first: !0
				}
				, "~": {
					dir: "previousSibling"
				}
			}
			, preFilter: {
				ATTR: function (e) {
					return e[1] = e[1].replace(xe, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				}
				, CHILD: function (e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				}
				, PSEUDO: function (e) {
					var t, n = !e[6] && e[2];
					return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			}
			, filter: {
				TAG: function (e) {
					var t = e.replace(xe, Ce).toLowerCase();
					return "*" === e ? function () {
						return !0
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				}
				, CLASS: function (e) {
					var t = B[e + " "];
					return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function (e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				}
				, ATTR: function (e, n, i) {
					return function (o) {
						var r = t.attr(o, e);
						return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
					}
				}
				, CHILD: function (e, t, n, i, o) {
					var r = "nth" !== e.slice(0, 3)
						, a = "last" !== e.slice(-4)
						, s = "of-type" === t;
					return 1 === i && 0 === o ? function (e) {
						return !!e.parentNode
					} : function (t, n, l) {
						var u, c, d, p, f, h, m = r !== a ? "nextSibling" : "previousSibling"
							, v = t.parentNode
							, g = s && t.nodeName.toLowerCase()
							, y = !l && !s;
						if (v) {
							if (r) {
								for (; m;) {
									for (d = t; d = d[m];)
										if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
									h = m = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? v.firstChild : v.lastChild], a && y) {
								for (c = v[H] || (v[H] = {}), u = c[e] || [], f = u[0] === F && u[1], p = u[0] === F && u[2], d = f && v.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)
									if (1 === d.nodeType && ++p && d === t) {
										c[e] = [F, f, p];
										break
									}
							}
							else if (y && (u = (t[H] || (t[H] = {}))[e]) && u[0] === F) p = u[1];
							else
								for (;
									(d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++p || (y && ((d[H] || (d[H] = {}))[e] = [F, p]), d !== t)););
							return p -= o, p === i || p % i === 0 && p / i >= 0
						}
					}
				}
				, PSEUDO: function (e, n) {
					var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return r[H] ? r(n) : r.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
						for (var i, o = r(e, n), a = o.length; a--;) i = ee(e, o[a]), e[i] = !(t[i] = o[a])
					}) : function (e) {
						return r(e, 0, o)
					}) : r
				}
			}
			, pseudos: {
				not: i(function (e) {
					var t = []
						, n = []
						, o = k(e.replace(le, "$1"));
					return o[H] ? i(function (e, t, n, i) {
						for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
					}) : function (e, i, r) {
						return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
					}
				})
				, has: i(function (e) {
					return function (n) {
						return t(e, n).length > 0
					}
				})
				, contains: i(function (e) {
					return e = e.replace(xe, Ce)
						, function (t) {
							return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
						}
				})
				, lang: i(function (e) {
					return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Ce).toLowerCase()
						, function (t) {
							var n;
							do
								if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				})
				, target: function (t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				}
				, root: function (e) {
					return e === M
				}
				, focus: function (e) {
					return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				}
				, enabled: function (e) {
					return e.disabled === !1
				}
				, disabled: function (e) {
					return e.disabled === !0
				}
				, checked: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				}
				, selected: function (e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				}
				, empty: function (e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				}
				, parent: function (e) {
					return !C.pseudos.empty(e)
				}
				, header: function (e) {
					return ve.test(e.nodeName)
				}
				, input: function (e) {
					return me.test(e.nodeName)
				}
				, button: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				}
				, text: function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				}
				, first: u(function () {
					return [0]
				})
				, last: u(function (e, t) {
					return [t - 1]
				})
				, eq: u(function (e, t, n) {
					return [0 > n ? n + t : n]
				})
				, even: u(function (e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				})
				, odd: u(function (e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				})
				, lt: u(function (e, t, n) {
					for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
					return e
				})
				, gt: u(function (e, t, n) {
					for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
					return e
				})
			}
		}, C.pseudos.nth = C.pseudos.eq;
		for (w in {
				radio: !0
				, checkbox: !0
				, file: !0
				, password: !0
				, image: !0
			}) C.pseudos[w] = s(w);
		for (w in {
				submit: !0
				, reset: !0
			}) C.pseudos[w] = l(w);
		return d.prototype = C.filters = C.pseudos, C.setFilters = new d, S = t.tokenize = function (e, n) {
			var i, o, r, a, s, l, u, c = q[e + " "];
			if (c) return n ? 0 : c.slice(0);
			for (s = e, l = [], u = C.preFilter; s;) {
				(!i || (o = ue.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ce.exec(s)) && (i = o.shift(), r.push({
					value: i
					, type: o[0].replace(le, " ")
				}), s = s.slice(i.length));
				for (a in C.filter) !(o = he[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(), r.push({
					value: i
					, type: a
					, matches: o
				}), s = s.slice(i.length));
				if (!i) break
			}
			return n ? s.length : s ? t.error(e) : q(e, l).slice(0)
		}, k = t.compile = function (e, t) {
			var n, i = []
				, o = []
				, r = U[e + " "];
			if (!r) {
				for (t || (t = S(e)), n = t.length; n--;) r = y(t[n]), r[H] ? i.push(r) : o.push(r);
				r = U(e, b(o, i)), r.selector = e
			}
			return r
		}, _ = t.select = function (e, t, n, i) {
			var o, r, a, s, l, u = "function" == typeof e && e
				, d = !i && S(e = u.selector || e);
			if (n = n || [], 1 === d.length) {
				if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && x.getById && 9 === t.nodeType && N && C.relative[r[1].type]) {
					if (t = (C.find.ID(a.matches[0].replace(xe, Ce), t) || [])[0], !t) return n;
					u && (t = t.parentNode), e = e.slice(r.shift().value.length)
				}
				for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !C.relative[s = a.type]);)
					if ((l = C.find[s]) && (i = l(a.matches[0].replace(xe, Ce), be.test(r[0].type) && c(t.parentNode) || t))) {
						if (r.splice(o, 1), e = i.length && p(r), !e) return Q.apply(n, i), n;
						break
					}
			}
			return (u || k(e, d))(i, t, !N, n, be.test(e) && c(t.parentNode) || t), n
		}, x.sortStable = H.split("").sort(Z).join("") === H, x.detectDuplicates = !!D, L(), x.sortDetached = o(function (e) {
			return 1 & e.compareDocumentPosition(A.createElement("div"))
		}), o(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || r("type|href|height|width", function (e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), x.attributes && o(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || r("value", function (e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), o(function (e) {
			return null == e.getAttribute("disabled")
		}) || r(te, function (e, t, n) {
			var i;
			return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), t
	}(e);
	oe.find = ue, oe.expr = ue.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ue.uniqueSort, oe.text = ue.getText, oe.isXMLDoc = ue.isXML, oe.contains = ue.contains;
	var ce = oe.expr.match.needsContext
		, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
		, pe = /^.[^:#\[\.,]*$/;
	oe.filter = function (e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function (e) {
			return 1 === e.nodeType
		}))
	}, oe.fn.extend({
		find: function (e) {
			var t, n = []
				, i = this
				, o = i.length;
			if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
				for (t = 0; o > t; t++)
					if (oe.contains(i[t], this)) return !0
			}));
			for (t = 0; o > t; t++) oe.find(e, i[t], n);
			return n = this.pushStack(o > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		}
		, filter: function (e) {
			return this.pushStack(i(this, e || [], !1))
		}
		, not: function (e) {
			return this.pushStack(i(this, e || [], !0))
		}
		, is: function (e) {
			return !!i(this, "string" == typeof e && ce.test(e) ? oe(e) : e || [], !1).length
		}
	});
	var fe, he = e.document
		, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/
		, ve = oe.fn.init = function (e, t) {
			var n, i;
			if (!e) return this;
			if ("string" == typeof e) {
				if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && oe.isPlainObject(t))
						for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				if (i = he.getElementById(n[2]), i && i.parentNode) {
					if (i.id !== n[2]) return fe.find(e);
					this.length = 1, this[0] = i
				}
				return this.context = he, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
		};
	ve.prototype = oe.fn, fe = oe(he);
	var ge = /^(?:parents|prev(?:Until|All))/
		, ye = {
			children: !0
			, contents: !0
			, next: !0
			, prev: !0
		};
	oe.extend({
		dir: function (e, t, n) {
			for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
			return i
		}
		, sibling: function (e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), oe.fn.extend({
		has: function (e) {
			var t, n = oe(e, this)
				, i = n.length;
			return this.filter(function () {
				for (t = 0; i > t; t++)
					if (oe.contains(this, n[t])) return !0
			})
		}
		, closest: function (e, t) {
			for (var n, i = 0, o = this.length, r = [], a = ce.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; o > i; i++)
				for (n = this[i]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
						r.push(n);
						break
					}
			return this.pushStack(r.length > 1 ? oe.unique(r) : r)
		}
		, index: function (e) {
			return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		}
		, add: function (e, t) {
			return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
		}
		, addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), oe.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		}
		, parents: function (e) {
			return oe.dir(e, "parentNode")
		}
		, parentsUntil: function (e, t, n) {
			return oe.dir(e, "parentNode", n)
		}
		, next: function (e) {
			return o(e, "nextSibling")
		}
		, prev: function (e) {
			return o(e, "previousSibling")
		}
		, nextAll: function (e) {
			return oe.dir(e, "nextSibling")
		}
		, prevAll: function (e) {
			return oe.dir(e, "previousSibling")
		}
		, nextUntil: function (e, t, n) {
			return oe.dir(e, "nextSibling", n)
		}
		, prevUntil: function (e, t, n) {
			return oe.dir(e, "previousSibling", n)
		}
		, siblings: function (e) {
			return oe.sibling((e.parentNode || {}).firstChild, e)
		}
		, children: function (e) {
			return oe.sibling(e.firstChild)
		}
		, contents: function (e) {
			return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
		}
	}, function (e, t) {
		oe.fn[e] = function (n, i) {
			var o = oe.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = oe.filter(i, o)), this.length > 1 && (ye[e] || (o = oe.unique(o)), ge.test(e) && (o = o.reverse())), this.pushStack(o)
		}
	});
	var be = /\S+/g
		, we = {};
	oe.Callbacks = function (e) {
		e = "string" == typeof e ? we[e] || r(e) : oe.extend({}, e);
		var t, n, i, o, a, s, l = []
			, u = !e.once && []
			, c = function (r) {
				for (n = e.memory && r, i = !0, a = s || 0, s = 0, o = l.length, t = !0; l && o > a; a++)
					if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
						n = !1;
						break
					}
				t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
			}
			, d = {
				add: function () {
					if (l) {
						var i = l.length;
						! function r(t) {
							oe.each(t, function (t, n) {
								var i = oe.type(n);
								"function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
							})
						}(arguments), t ? o = l.length : n && (s = i, c(n))
					}
					return this
				}
				, remove: function () {
					return l && oe.each(arguments, function (e, n) {
						for (var i;
							(i = oe.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (o >= i && o--, a >= i && a--)
					}), this
				}
				, has: function (e) {
					return e ? oe.inArray(e, l) > -1 : !(!l || !l.length)
				}
				, empty: function () {
					return l = [], o = 0, this
				}
				, disable: function () {
					return l = u = n = void 0, this
				}
				, disabled: function () {
					return !l
				}
				, lock: function () {
					return u = void 0, n || d.disable(), this
				}
				, locked: function () {
					return !u
				}
				, fireWith: function (e, n) {
					return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
				}
				, fire: function () {
					return d.fireWith(this, arguments), this
				}
				, fired: function () {
					return !!i
				}
			};
		return d
	}, oe.extend({
		Deferred: function (e) {
			var t = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]]
				, n = "pending"
				, i = {
					state: function () {
						return n
					}
					, always: function () {
						return o.done(arguments).fail(arguments), this
					}
					, then: function () {
						var e = arguments;
						return oe.Deferred(function (n) {
							oe.each(t, function (t, r) {
								var a = oe.isFunction(e[t]) && e[t];
								o[r[1]](function () {
									var e = a && a.apply(this, arguments);
									e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					}
					, promise: function (e) {
						return null != e ? oe.extend(e, i) : i
					}
				}
				, o = {};
			return i.pipe = i.then, oe.each(t, function (e, r) {
				var a = r[2]
					, s = r[3];
				i[r[1]] = a.add, s && a.add(function () {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
					return o[r[0] + "With"](this === o ? i : this, arguments), this
				}, o[r[0] + "With"] = a.fireWith
			}), i.promise(o), e && e.call(o, o), o
		}
		, when: function (e) {
			var t, n, i, o = 0
				, r = V.call(arguments)
				, a = r.length
				, s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0
				, l = 1 === s ? e : oe.Deferred()
				, u = function (e, n, i) {
					return function (o) {
						n[e] = this, i[e] = arguments.length > 1 ? V.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
					}
				};
			if (a > 1)
				for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && oe.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, t)) : --s;
			return s || l.resolveWith(i, r), l.promise()
		}
	});
	var xe;
	oe.fn.ready = function (e) {
		return oe.ready.promise().done(e), this
	}, oe.extend({
		isReady: !1
		, readyWait: 1
		, holdReady: function (e) {
			e ? oe.readyWait++ : oe.ready(!0)
		}
		, ready: function (e) {
			if (e === !0 ? !--oe.readyWait : !oe.isReady) {
				if (!he.body) return setTimeout(oe.ready);
				oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (xe.resolveWith(he, [oe]), oe.fn.triggerHandler && (oe(he).triggerHandler("ready"), oe(he).off("ready")))
			}
		}
	}), oe.ready.promise = function (t) {
		if (!xe)
			if (xe = oe.Deferred(), "complete" === he.readyState) setTimeout(oe.ready);
			else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
		else {
			he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
			var n = !1;
			try {
				n = null == e.frameElement && he.documentElement
			}
			catch (i) {}
			n && n.doScroll && ! function o() {
				if (!oe.isReady) {
					try {
						n.doScroll("left")
					}
					catch (e) {
						return setTimeout(o, 50)
					}
					a(), oe.ready()
				}
			}()
		}
		return xe.promise(t)
	};
	var Ce, Te = "undefined";
	for (Ce in oe(ne)) break;
	ne.ownLast = "0" !== Ce, ne.inlineBlockNeedsLayout = !1, oe(function () {
			var e, t, n, i;
			n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
		})
		, function () {
			var e = he.createElement("div");
			if (null == ne.deleteExpando) {
				ne.deleteExpando = !0;
				try {
					delete e.test
				}
				catch (t) {
					ne.deleteExpando = !1
				}
			}
			e = null
		}(), oe.acceptData = function (e) {
			var t = oe.noData[(e.nodeName + " ").toLowerCase()]
				, n = +e.nodeType || 1;
			return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
		};
	var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
		, Se = /([A-Z])/g;
	oe.extend({
		cache: {}
		, noData: {
			"applet ": !0
			, "embed ": !0
			, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		}
		, hasData: function (e) {
			return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !u(e)
		}
		, data: function (e, t, n) {
			return c(e, t, n)
		}
		, removeData: function (e, t) {
			return d(e, t)
		}
		, _data: function (e, t, n) {
			return c(e, t, n, !0)
		}
		, _removeData: function (e, t) {
			return d(e, t, !0)
		}
	}), oe.fn.extend({
		data: function (e, t) {
			var n, i, o, r = this[0]
				, a = r && r.attributes;
			if (void 0 === e) {
				if (this.length && (o = oe.data(r), 1 === r.nodeType && !oe._data(r, "parsedAttrs"))) {
					for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(r, i, o[i])));
					oe._data(r, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function () {
				oe.data(this, e)
			}) : arguments.length > 1 ? this.each(function () {
				oe.data(this, e, t)
			}) : r ? l(r, e, oe.data(r, e)) : void 0
		}
		, removeData: function (e) {
			return this.each(function () {
				oe.removeData(this, e)
			})
		}
	}), oe.extend({
		queue: function (e, t, n) {
			var i;
			return e ? (t = (t || "fx") + "queue", i = oe._data(e, t), n && (!i || oe.isArray(n) ? i = oe._data(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
		}
		, dequeue: function (e, t) {
			t = t || "fx";
			var n = oe.queue(e, t)
				, i = n.length
				, o = n.shift()
				, r = oe._queueHooks(e, t)
				, a = function () {
					oe.dequeue(e, t)
				};
			"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
		}
		, _queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return oe._data(e, n) || oe._data(e, n, {
				empty: oe.Callbacks("once memory").add(function () {
					oe._removeData(e, t + "queue"), oe._removeData(e, n)
				})
			})
		}
	}), oe.fn.extend({
		queue: function (e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
				var n = oe.queue(this, e, t);
				oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
			})
		}
		, dequeue: function (e) {
			return this.each(function () {
				oe.dequeue(this, e)
			})
		}
		, clearQueue: function (e) {
			return this.queue(e || "fx", [])
		}
		, promise: function (e, t) {
			var n, i = 1
				, o = oe.Deferred()
				, r = this
				, a = this.length
				, s = function () {
					--i || o.resolveWith(r, [r])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = oe._data(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
			return s(), o.promise(t)
		}
	});
	var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
		, _e = ["Top", "Right", "Bottom", "Left"]
		, $e = function (e, t) {
			return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
		}
		, Ie = oe.access = function (e, t, n, i, o, r, a) {
			var s = 0
				, l = e.length
				, u = null == n;
			if ("object" === oe.type(n)) {
				o = !0;
				for (s in n) oe.access(e, t, s, n[s], !0, r, a)
			}
			else if (void 0 !== i && (o = !0, oe.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
					return u.call(oe(e), n)
				})), t))
				for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
			return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
		}
		, De = /^(?:checkbox|radio)$/i;
	! function () {
		var e = he.createElement("input")
			, t = he.createElement("div")
			, n = he.createDocumentFragment();
		if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
				ne.noCloneEvent = !1
			}), t.cloneNode(!0).click()), null == ne.deleteExpando) {
			ne.deleteExpando = !0;
			try {
				delete t.test
			}
			catch (i) {
				ne.deleteExpando = !1
			}
		}
	}()
	, function () {
		var t, n, i = he.createElement("div");
		for (t in {
				submit: !0
				, change: !0
				, focusin: !0
			}) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
		i = null
	}();
	var Le = /^(?:input|select|textarea)$/i
		, Ae = /^key/
		, Me = /^(?:mouse|pointer|contextmenu)|click/
		, Ne = /^(?:focusinfocus|focusoutblur)$/
		, ze = /^([^.]*)(?:\.(.+)|)$/;
	oe.event = {
		global: {}
		, add: function (e, t, n, i, o) {
			var r, a, s, l, u, c, d, p, f, h, m, v = oe._data(e);
			if (v) {
				for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = oe.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || (c = v.handle = function (e) {
						return typeof oe === Te || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
					}, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) r = ze.exec(t[s]) || [], f = m = r[1], h = (r[2] || "").split(".").sort(), f && (u = oe.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = oe.event.special[f] || {}, d = oe.extend({
					type: f
					, origType: m
					, data: i
					, handler: n
					, guid: n.guid
					, selector: o
					, needsContext: o && oe.expr.match.needsContext.test(o)
					, namespace: h.join(".")
				}, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), oe.event.global[f] = !0);
				e = null
			}
		}
		, remove: function (e, t, n, i, o) {
			var r, a, s, l, u, c, d, p, f, h, m, v = oe.hasData(e) && oe._data(e);
			if (v && (c = v.events)) {
				for (t = (t || "").match(be) || [""], u = t.length; u--;)
					if (s = ze.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
						for (d = oe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) a = p[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
						l && !p.length && (d.teardown && d.teardown.call(e, h, v.handle) !== !1 || oe.removeEvent(e, f, v.handle), delete c[f])
					}
					else
						for (f in c) oe.event.remove(e, f + t[u], n, i, !0);
				oe.isEmptyObject(c) && (delete v.handle, oe._removeData(e, "events"))
			}
		}
		, trigger: function (t, n, i, o) {
			var r, a, s, l, u, c, d, p = [i || he]
				, f = te.call(t, "type") ? t.type : t
				, h = te.call(t, "namespace") ? t.namespace.split(".") : [];
			if (s = c = i = i || he, 3 !== i.nodeType && 8 !== i.nodeType && !Ne.test(f + oe.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), u = oe.event.special[f] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
				if (!o && !u.noBubble && !oe.isWindow(i)) {
					for (l = u.delegateType || f, Ne.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
					c === (i.ownerDocument || he) && p.push(c.defaultView || c.parentWindow || e)
				}
				for (d = 0;
					(s = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || f
					, r = (oe._data(s, "events") || {})[t.type] && oe._data(s, "handle"), r && r.apply(s, n), r = a && s[a], r && r.apply && oe.acceptData(s) && (t.result = r.apply(s, n), t.result === !1 && t.preventDefault());
				if (t.type = f, !o && !t.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && oe.acceptData(i) && a && i[f] && !oe.isWindow(i)) {
					c = i[a], c && (i[a] = null), oe.event.triggered = f;
					try {
						i[f]()
					}
					catch (m) {}
					oe.event.triggered = void 0, c && (i[a] = c)
				}
				return t.result
			}
		}
		, dispatch: function (e) {
			e = oe.event.fix(e);
			var t, n, i, o, r, a = []
				, s = V.call(arguments)
				, l = (oe._data(this, "events") || {})[e.type] || []
				, u = oe.event.special[e.type] || {};
			if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
				for (a = oe.event.handlers.call(this, e, l), t = 0;
					(o = a[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = o.elem, r = 0;
						(i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, e), e.result
			}
		}
		, handlers: function (e, t) {
			var n, i, o, r, a = []
				, s = t.delegateCount
				, l = e.target;
			if (s && l.nodeType && (!e.button || "click" !== e.type))
				for (; l != this; l = l.parentNode || this)
					if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
						for (o = [], r = 0; s > r; r++) i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), o[n] && o.push(i);
						o.length && a.push({
							elem: l
							, handlers: o
						})
					}
			return s < t.length && a.push({
				elem: this
				, handlers: t.slice(s)
			}), a
		}
		, fix: function (e) {
			if (e[oe.expando]) return e;
			var t, n, i, o = e.type
				, r = e
				, a = this.fixHooks[o];
			for (a || (this.fixHooks[o] = a = Me.test(o) ? this.mouseHooks : Ae.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
			return e.target || (e.target = r.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
		}
		, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" ")
		, fixHooks: {}
		, keyHooks: {
			props: "char charCode key keyCode".split(" ")
			, filter: function (e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		}
		, mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" ")
			, filter: function (e, t) {
				var n, i, o, r = t.button
					, a = t.fromElement;
				return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || he, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
			}
		}
		, special: {
			load: {
				noBubble: !0
			}
			, focus: {
				trigger: function () {
					if (this !== h() && this.focus) try {
						return this.focus(), !1
					}
					catch (e) {}
				}
				, delegateType: "focusin"
			}
			, blur: {
				trigger: function () {
					return this === h() && this.blur ? (this.blur(), !1) : void 0
				}
				, delegateType: "focusout"
			}
			, click: {
				trigger: function () {
					return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				}
				, _default: function (e) {
					return oe.nodeName(e.target, "a")
				}
			}
			, beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
		, simulate: function (e, t, n, i) {
			var o = oe.extend(new oe.Event, n, {
				type: e
				, isSimulated: !0
				, originalEvent: {}
			});
			i ? oe.event.trigger(o, null, t) : oe.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
		}
	}, oe.removeEvent = he.removeEventListener ? function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function (e, t, n) {
		var i = "on" + t;
		e.detachEvent && (typeof e[i] === Te && (e[i] = null), e.detachEvent(i, n))
	}, oe.Event = function (e, t) {
		return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
	}, oe.Event.prototype = {
		isDefaultPrevented: f
		, isPropagationStopped: f
		, isImmediatePropagationStopped: f
		, preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		}
		, stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		}
		, stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, oe.each({
		mouseenter: "mouseover"
		, mouseleave: "mouseout"
		, pointerenter: "pointerover"
		, pointerleave: "pointerout"
	}, function (e, t) {
		oe.event.special[e] = {
			delegateType: t
			, bindType: t
			, handle: function (e) {
				var n, i = this
					, o = e.relatedTarget
					, r = e.handleObj;
				return (!o || o !== i && !oe.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), ne.submitBubbles || (oe.event.special.submit = {
		setup: function () {
			return !oe.nodeName(this, "form") && void oe.event.add(this, "click._submit keypress._submit", function (e) {
				var t = e.target
					, n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
				n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function (e) {
					e._submit_bubble = !0
				}), oe._data(n, "submitBubbles", !0))
			})
		}
		, postDispatch: function (e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
		}
		, teardown: function () {
			return !oe.nodeName(this, "form") && void oe.event.remove(this, "._submit")
		}
	}), ne.changeBubbles || (oe.event.special.change = {
		setup: function () {
			return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function (e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), oe.event.add(this, "click._change", function (e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
			})), !1) : void oe.event.add(this, "beforeactivate._change", function (e) {
				var t = e.target;
				Le.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function (e) {
					!this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
				}), oe._data(t, "changeBubbles", !0))
			})
		}
		, handle: function (e) {
			var t = e.target;
			return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
		}
		, teardown: function () {
			return oe.event.remove(this, "._change"), !Le.test(this.nodeName)
		}
	}), ne.focusinBubbles || oe.each({
		focus: "focusin"
		, blur: "focusout"
	}, function (e, t) {
		var n = function (e) {
			oe.event.simulate(t, e.target, oe.event.fix(e), !0)
		};
		oe.event.special[t] = {
			setup: function () {
				var i = this.ownerDocument || this
					, o = oe._data(i, t);
				o || i.addEventListener(e, n, !0), oe._data(i, t, (o || 0) + 1)
			}
			, teardown: function () {
				var i = this.ownerDocument || this
					, o = oe._data(i, t) - 1;
				o ? oe._data(i, t, o) : (i.removeEventListener(e, n, !0), oe._removeData(i, t))
			}
		}
	}), oe.fn.extend({
		on: function (e, t, n, i, o) {
			var r, a;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for (r in e) this.on(r, t, n, e[r], o);
				return this
			}
			if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
			else if (!i) return this;
			return 1 === o && (a = i, i = function (e) {
				return oe().off(e), a.apply(this, arguments)
			}, i.guid = a.guid || (a.guid = oe.guid++)), this.each(function () {
				oe.event.add(this, e, i, n, t)
			})
		}
		, one: function (e, t, n, i) {
			return this.on(e, t, n, i, 1)
		}
		, off: function (e, t, n) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, t, e[o]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function () {
				oe.event.remove(this, e, n, t)
			})
		}
		, trigger: function (e, t) {
			return this.each(function () {
				oe.event.trigger(e, t, this)
			})
		}
		, triggerHandler: function (e, t) {
			var n = this[0];
			return n ? oe.event.trigger(e, t, n, !0) : void 0
		}
	});
	var Oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
		, Pe = / jQuery\d+="(?:null|\d+)"/g
		, Re = new RegExp("<(?:" + Oe + ")[\\s/>]", "i")
		, He = /^\s+/
		, je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
		, Fe = /<([\w:]+)/
		, We = /<tbody/i
		, Be = /<|&#?\w+;/
		, qe = /<(?:script|style|link)/i
		, Ue = /checked\s*(?:[^=]|=\s*.checked.)/i
		, Ze = /^$|\/(?:java|ecma)script/i
		, Xe = /^true\/(.*)/
		, Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
		, Ve = {
			option: [1, "<select multiple='multiple'>", "</select>"]
			, legend: [1, "<fieldset>", "</fieldset>"]
			, area: [1, "<map>", "</map>"]
			, param: [1, "<object>", "</object>"]
			, thead: [1, "<table>", "</table>"]
			, tr: [2, "<table><tbody>", "</tbody></table>"]
			, col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]
			, td: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
			, _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		}
		, Ge = m(he)
		, Ke = Ge.appendChild(he.createElement("div"));
	Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, oe.extend({
		clone: function (e, t, n) {
			var i, o, r, a, s, l = oe.contains(e.ownerDocument, e);
			if (ne.html5Clone || oe.isXMLDoc(e) || !Re.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Ke.innerHTML = e.outerHTML, Ke.removeChild(r = Ke.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
				for (i = v(r), s = v(e), a = 0; null != (o = s[a]); ++a) i[a] && T(o, i[a]);
			if (t)
				if (n)
					for (s = s || v(e), i = i || v(r), a = 0; null != (o = s[a]); a++) C(o, i[a]);
				else C(e, r);
			return i = v(r, "script"), i.length > 0 && x(i, !l && v(e, "script")), i = s = o = null, r
		}
		, buildFragment: function (e, t, n, i) {
			for (var o, r, a, s, l, u, c, d = e.length, p = m(t), f = [], h = 0; d > h; h++)
				if (r = e[h], r || 0 === r)
					if ("object" === oe.type(r)) oe.merge(f, r.nodeType ? [r] : r);
					else if (Be.test(r)) {
				for (s = s || p.appendChild(t.createElement("div")), l = (Fe.exec(r) || ["", ""])[1].toLowerCase(), c = Ve[l] || Ve._default, s.innerHTML = c[1] + r.replace(je, "<$1></$2>") + c[2], o = c[0]; o--;) s = s.lastChild;
				if (!ne.leadingWhitespace && He.test(r) && f.push(t.createTextNode(He.exec(r)[0])), !ne.tbody)
					for (r = "table" !== l || We.test(r) ? "<table>" !== c[1] || We.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) oe.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
				for (oe.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
				s = p.lastChild
			}
			else f.push(t.createTextNode(r));
			for (s && p.removeChild(s), ne.appendChecked || oe.grep(v(f, "input"), g), h = 0; r = f[h++];)
				if ((!i || -1 === oe.inArray(r, i)) && (a = oe.contains(r.ownerDocument, r), s = v(p.appendChild(r), "script"), a && x(s), n))
					for (o = 0; r = s[o++];) Ze.test(r.type || "") && n.push(r);
			return s = null, p
		}
		, cleanData: function (e, t) {
			for (var n, i, o, r, a = 0, s = oe.expando, l = oe.cache, u = ne.deleteExpando, c = oe.event.special; null != (n = e[a]); a++)
				if ((t || oe.acceptData(n)) && (o = n[s], r = o && l[o])) {
					if (r.events)
						for (i in r.events) c[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, r.handle);
					l[o] && (delete l[o], u ? delete n[s] : typeof n.removeAttribute !== Te ? n.removeAttribute(s) : n[s] = null, Y.push(o))
				}
		}
	}), oe.fn.extend({
		text: function (e) {
			return Ie(this, function (e) {
				return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
			}, null, e, arguments.length)
		}
		, append: function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = y(this, e);
					t.appendChild(e)
				}
			})
		}
		, prepend: function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = y(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		}
		, before: function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		}
		, after: function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		}
		, remove: function (e, t) {
			for (var n, i = e ? oe.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || oe.cleanData(v(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && x(v(n, "script")), n.parentNode.removeChild(n));
			return this
		}
		, empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && oe.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && oe.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		}
		, clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return oe.clone(this, e, t)
			})
		}
		, html: function (e) {
			return Ie(this, function (e) {
				var t = this[0] || {}
					, n = 0
					, i = this.length;
				if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Pe, "") : void 0;
				if (!("string" != typeof e || qe.test(e) || !ne.htmlSerialize && Re.test(e) || !ne.leadingWhitespace && He.test(e) || Ve[(Fe.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(je, "<$1></$2>");
					try {
						for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(v(t, !1)), t.innerHTML = e);
						t = 0
					}
					catch (o) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		}
		, replaceWith: function () {
			var e = arguments[0];
			return this.domManip(arguments, function (t) {
				e = this.parentNode, oe.cleanData(v(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		}
		, detach: function (e) {
			return this.remove(e, !0)
		}
		, domManip: function (e, t) {
			e = G.apply([], e);
			var n, i, o, r, a, s, l = 0
				, u = this.length
				, c = this
				, d = u - 1
				, p = e[0]
				, f = oe.isFunction(p);
			if (f || u > 1 && "string" == typeof p && !ne.checkClone && Ue.test(p)) return this.each(function (n) {
				var i = c.eq(n);
				f && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
			});
			if (u && (s = oe.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
				for (r = oe.map(v(s, "script"), b), o = r.length; u > l; l++) i = s, l !== d && (i = oe.clone(i, !0, !0), o && oe.merge(r, v(i, "script"))), t.call(this[l], i, l);
				if (o)
					for (a = r[r.length - 1].ownerDocument, oe.map(r, w), l = 0; o > l; l++) i = r[l], Ze.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(a, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ye, "")));
				s = n = null
			}
			return this
		}
	}), oe.each({
		appendTo: "append"
		, prependTo: "prepend"
		, insertBefore: "before"
		, insertAfter: "after"
		, replaceAll: "replaceWith"
	}, function (e, t) {
		oe.fn[e] = function (e) {
			for (var n, i = 0, o = [], r = oe(e), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), oe(r[i])[t](n), K.apply(o, n.get());
			return this.pushStack(o)
		}
	});
	var Qe, Je = {};
	! function () {
		var e;
		ne.shrinkWrapBlocks = function () {
			if (null != e) return e;
			e = !1;
			var t, n, i;
			return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
		}
	}();
	var et, tt, nt = /^margin/
		, it = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i")
		, ot = /^(top|right|bottom|left)$/;
	e.getComputedStyle ? (et = function (t) {
		return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
	}, tt = function (e, t, n) {
		var i, o, r, a, s = e.style;
		return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), it.test(a) && nt.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
	}) : he.documentElement.currentStyle && (et = function (e) {
		return e.currentStyle
	}, tt = function (e, t, n) {
		var i, o, r, a, s = e.style;
		return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), it.test(a) && !ot.test(t) && (i = s.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
	}), ! function () {
		function t() {
			var t, n, i, o;
			n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = a = !1, l = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
				width: "4px"
			}).width, o = t.appendChild(he.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(o)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === o[0].offsetHeight, s && (o[0].style.display = "", o[1].style.display = "none", s = 0 === o[0].offsetHeight), n.removeChild(i))
		}
		var n, i, o, r, a, s, l;
		n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], (i = o && o.style) && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, oe.extend(ne, {
			reliableHiddenOffsets: function () {
				return null == s && t(), s
			}
			, boxSizingReliable: function () {
				return null == a && t(), a
			}
			, pixelPosition: function () {
				return null == r && t(), r
			}
			, reliableMarginRight: function () {
				return null == l && t(), l
			}
		}))
	}(), oe.swap = function (e, t, n, i) {
		var o, r, a = {};
		for (r in t) a[r] = e.style[r], e.style[r] = t[r];
		o = n.apply(e, i || []);
		for (r in t) e.style[r] = a[r];
		return o
	};
	var rt = /alpha\([^)]*\)/i
		, at = /opacity\s*=\s*([^)]*)/
		, st = /^(none|table(?!-c[ea]).+)/
		, lt = new RegExp("^(" + ke + ")(.*)$", "i")
		, ut = new RegExp("^([+-])=(" + ke + ")", "i")
		, ct = {
			position: "absolute"
			, visibility: "hidden"
			, display: "block"
		}
		, dt = {
			letterSpacing: "0"
			, fontWeight: "400"
		}
		, pt = ["Webkit", "O", "Moz", "ms"];
	oe.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = tt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		}
		, cssNumber: {
			columnCount: !0
			, fillOpacity: !0
			, flexGrow: !0
			, flexShrink: !0
			, fontWeight: !0
			, lineHeight: !0
			, opacity: !0
			, order: !0
			, orphans: !0
			, widows: !0
			, zIndex: !0
			, zoom: !0
		}
		, cssProps: {
			"float": ne.cssFloat ? "cssFloat" : "styleFloat"
		}
		, style: function (e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, r, a, s = oe.camelCase(t)
					, l = e.style;
				if (t = oe.cssProps[s] || (oe.cssProps[s] = _(l, s)), a = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
				if (r = typeof n, "string" === r && (o = ut.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || oe.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
					l[t] = n
				}
				catch (u) {}
			}
		}
		, css: function (e, t, n, i) {
			var o, r, a, s = oe.camelCase(t);
			return t = oe.cssProps[s] || (oe.cssProps[s] = _(e.style, s)), a = oe.cssHooks[t] || oe.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = tt(e, t, i)), "normal" === r && t in dt && (r = dt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || oe.isNumeric(o) ? o || 0 : r) : r
		}
	}), oe.each(["height", "width"], function (e, t) {
		oe.cssHooks[t] = {
			get: function (e, n, i) {
				return n ? st.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, ct, function () {
					return L(e, t, i)
				}) : L(e, t, i) : void 0
			}
			, set: function (e, n, i) {
				var o = i && et(e);
				return I(e, n, i ? D(e, t, i, ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o), o) : 0)
			}
		}
	}), ne.opacity || (oe.cssHooks.opacity = {
		get: function (e, t) {
			return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		}
		, set: function (e, t) {
			var n = e.style
				, i = e.currentStyle
				, o = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
				, r = i && i.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(r.replace(rt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = rt.test(r) ? r.replace(rt, o) : r + " " + o)
		}
	}), oe.cssHooks.marginRight = k(ne.reliableMarginRight, function (e, t) {
		return t ? oe.swap(e, {
			display: "inline-block"
		}, tt, [e, "marginRight"]) : void 0
	}), oe.each({
		margin: ""
		, padding: ""
		, border: "Width"
	}, function (e, t) {
		oe.cssHooks[e + t] = {
			expand: function (n) {
				for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + _e[i] + t] = r[i] || r[i - 2] || r[0];
				return o
			}
		}, nt.test(e) || (oe.cssHooks[e + t].set = I)
	}), oe.fn.extend({
		css: function (e, t) {
			return Ie(this, function (e, t, n) {
				var i, o, r = {}
					, a = 0;
				if (oe.isArray(t)) {
					for (i = et(e), o = t.length; o > a; a++) r[t[a]] = oe.css(e, t[a], !1, i);
					return r
				}
				return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
			}, e, t, arguments.length > 1)
		}
		, show: function () {
			return $(this, !0)
		}
		, hide: function () {
			return $(this)
		}
		, toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				$e(this) ? oe(this).show() : oe(this).hide()
			})
		}
	}), oe.Tween = A, A.prototype = {
		constructor: A
		, init: function (e, t, n, i, o, r) {
			this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (oe.cssNumber[n] ? "" : "px")
		}
		, cur: function () {
			var e = A.propHooks[this.prop];
			return e && e.get ? e.get(this) : A.propHooks._default.get(this)
		}
		, run: function (e) {
			var t, n = A.propHooks[this.prop];
			return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
		}
	}, A.prototype.init.prototype = A.prototype, A.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			}
			, set: function (e) {
				oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, oe.easing = {
		linear: function (e) {
			return e
		}
		, swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, oe.fx = A.prototype.init, oe.fx.step = {};
	var ft, ht, mt = /^(?:toggle|show|hide)$/
		, vt = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i")
		, gt = /queueHooks$/
		, yt = [O]
		, bt = {
			"*": [function (e, t) {
				var n = this.createTween(e, t)
					, i = n.cur()
					, o = vt.exec(t)
					, r = o && o[3] || (oe.cssNumber[e] ? "" : "px")
					, a = (oe.cssNumber[e] || "px" !== r && +i) && vt.exec(oe.css(n.elem, e))
					, s = 1
					, l = 20;
				if (a && a[3] !== r) {
					r = r || a[3], o = o || [], a = +i || 1;
					do s = s || ".5", a /= s, oe.style(n.elem, e, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
				}
				return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
			}]
		};
	oe.Animation = oe.extend(R, {
			tweener: function (e, t) {
				oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for (var n, i = 0, o = e.length; o > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
			}
			, prefilter: function (e, t) {
				t ? yt.unshift(e) : yt.push(e)
			}
		}), oe.speed = function (e, t, n) {
			var i = e && "object" == typeof e ? oe.extend({}, e) : {
				complete: n || !n && t || oe.isFunction(e) && e
				, duration: e
				, easing: n && t || t && !oe.isFunction(t) && t
			};
			return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
				oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
			}, i
		}, oe.fn.extend({
			fadeTo: function (e, t, n, i) {
				return this.filter($e).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, i)
			}
			, animate: function (e, t, n, i) {
				var o = oe.isEmptyObject(e)
					, r = oe.speed(t, n, i)
					, a = function () {
						var t = R(this, oe.extend({}, e), r);
						(o || oe._data(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
			}
			, stop: function (e, t, n) {
				var i = function (e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
					var t = !0
						, o = null != e && e + "queueHooks"
						, r = oe.timers
						, a = oe._data(this);
					if (o) a[o] && a[o].stop && i(a[o]);
					else
						for (o in a) a[o] && a[o].stop && gt.test(o) && i(a[o]);
					for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
					(t || !n) && oe.dequeue(this, e)
				})
			}
			, finish: function (e) {
				return e !== !1 && (e = e || "fx"), this.each(function () {
					var t, n = oe._data(this)
						, i = n[e + "queue"]
						, o = n[e + "queueHooks"]
						, r = oe.timers
						, a = i ? i.length : 0;
					for (n.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
					for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
					delete n.finish
				})
			}
		}), oe.each(["toggle", "show", "hide"], function (e, t) {
			var n = oe.fn[t];
			oe.fn[t] = function (e, i, o) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(N(t, !0), e, i, o)
			}
		}), oe.each({
			slideDown: N("show")
			, slideUp: N("hide")
			, slideToggle: N("toggle")
			, fadeIn: {
				opacity: "show"
			}
			, fadeOut: {
				opacity: "hide"
			}
			, fadeToggle: {
				opacity: "toggle"
			}
		}, function (e, t) {
			oe.fn[e] = function (e, n, i) {
				return this.animate(t, e, n, i)
			}
		}), oe.timers = [], oe.fx.tick = function () {
			var e, t = oe.timers
				, n = 0;
			for (ft = oe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
			t.length || oe.fx.stop(), ft = void 0
		}, oe.fx.timer = function (e) {
			oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
		}, oe.fx.interval = 13, oe.fx.start = function () {
			ht || (ht = setInterval(oe.fx.tick, oe.fx.interval))
		}, oe.fx.stop = function () {
			clearInterval(ht), ht = null
		}, oe.fx.speeds = {
			slow: 600
			, fast: 200
			, _default: 400
		}, oe.fn.delay = function (e, t) {
			return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
				var i = setTimeout(t, e);
				n.stop = function () {
					clearTimeout(i)
				}
			})
		}
		, function () {
			var e, t, n, i, o;
			t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = he.createElement("select"), o = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = o.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !o.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
		}();
	var wt = /\r/g;
	oe.fn.extend({
		val: function (e) {
			var t, n, i, o = this[0];
			return arguments.length ? (i = oe.isFunction(e), this.each(function (n) {
				var o;
				1 === this.nodeType && (o = i ? e.call(this, n, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function (e) {
					return null == e ? "" : e + ""
				})), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
			})) : o ? (t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
		}
	}), oe.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = oe.find.attr(e, "value");
					return null != t ? t : oe.trim(oe.text(e))
				}
			}
			, select: {
				get: function (e) {
					for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
						if (n = i[l], !(!n.selected && l !== o || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
							if (t = oe(n).val(), r) return t;
							a.push(t)
						}
					return a
				}
				, set: function (e, t) {
					for (var n, i, o = e.options, r = oe.makeArray(t), a = o.length; a--;)
						if (i = o[a], oe.inArray(oe.valHooks.option.get(i), r) >= 0) try {
							i.selected = n = !0
						}
						catch (s) {
							i.scrollHeight
						}
						else i.selected = !1;
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), oe.each(["radio", "checkbox"], function () {
		oe.valHooks[this] = {
			set: function (e, t) {
				return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
			}
		}, ne.checkOn || (oe.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var xt, Ct, Tt = oe.expr.attrHandle
		, Et = /^(?:checked|selected)$/i
		, St = ne.getSetAttribute
		, kt = ne.input;
	oe.fn.extend({
		attr: function (e, t) {
			return Ie(this, oe.attr, e, t, arguments.length > 1)
		}
		, removeAttr: function (e) {
			return this.each(function () {
				oe.removeAttr(this, e)
			})
		}
	}), oe.extend({
		attr: function (e, t, n) {
			var i, o, r = e.nodeType;
			if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === Te ? oe.prop(e, t, n) : (1 === r && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? Ct : xt)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = oe.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void oe.removeAttr(e, t))
		}
		, removeAttr: function (e, t) {
			var n, i, o = 0
				, r = t && t.match(be);
			if (r && 1 === e.nodeType)
				for (; n = r[o++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? kt && St || !Et.test(n) ? e[i] = !1 : e[oe.camelCase("default-" + n)] = e[i] = !1 : oe.attr(e, n, ""), e.removeAttribute(St ? n : i)
		}
		, attrHooks: {
			type: {
				set: function (e, t) {
					if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), Ct = {
		set: function (e, t, n) {
			return t === !1 ? oe.removeAttr(e, n) : kt && St || !Et.test(n) ? e.setAttribute(!St && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var n = Tt[t] || oe.find.attr;
		Tt[t] = kt && St || !Et.test(t) ? function (e, t, i) {
			var o, r;
			return i || (r = Tt[t], Tt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, Tt[t] = r), o
		} : function (e, t, n) {
			return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
		}
	}), kt && St || (oe.attrHooks.value = {
		set: function (e, t, n) {
			return oe.nodeName(e, "input") ? void(e.defaultValue = t) : xt && xt.set(e, t, n)
		}
	}), St || (xt = {
		set: function (e, t, n) {
			var i = e.getAttributeNode(n);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
		}
	}, Tt.id = Tt.name = Tt.coords = function (e, t, n) {
		var i;
		return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
	}, oe.valHooks.button = {
		get: function (e, t) {
			var n = e.getAttributeNode(t);
			return n && n.specified ? n.value : void 0
		}
		, set: xt.set
	}, oe.attrHooks.contenteditable = {
		set: function (e, t, n) {
			xt.set(e, "" !== t && t, n)
		}
	}, oe.each(["width", "height"], function (e, t) {
		oe.attrHooks[t] = {
			set: function (e, n) {
				return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
			}
		}
	})), ne.style || (oe.attrHooks.style = {
		get: function (e) {
			return e.style.cssText || void 0
		}
		, set: function (e, t) {
			return e.style.cssText = t + ""
		}
	});
	var _t = /^(?:input|select|textarea|button|object)$/i
		, $t = /^(?:a|area)$/i;
	oe.fn.extend({
		prop: function (e, t) {
			return Ie(this, oe.prop, e, t, arguments.length > 1)
		}
		, removeProp: function (e) {
			return e = oe.propFix[e] || e, this.each(function () {
				try {
					this[e] = void 0, delete this[e]
				}
				catch (t) {}
			})
		}
	}), oe.extend({
		propFix: {
			"for": "htmlFor"
			, "class": "className"
		}
		, prop: function (e, t, n) {
			var i, o, r, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !oe.isXMLDoc(e), r && (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
		}
		, propHooks: {
			tabIndex: {
				get: function (e) {
					var t = oe.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : _t.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), ne.hrefNormalized || oe.each(["href", "src"], function (e, t) {
		oe.propHooks[t] = {
			get: function (e) {
				return e.getAttribute(t, 4)
			}
		}
	}), ne.optSelected || (oe.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		oe.propFix[this.toLowerCase()] = this
	}), ne.enctype || (oe.propFix.enctype = "encoding");
	var It = /[\t\r\n\f]/g;
	oe.fn.extend({
		addClass: function (e) {
			var t, n, i, o, r, a, s = 0
				, l = this.length
				, u = "string" == typeof e && e;
			if (oe.isFunction(e)) return this.each(function (t) {
				oe(this).addClass(e.call(this, t, this.className))
			});
			if (u)
				for (t = (e || "").match(be) || []; l > s; s++)
					if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(It, " ") : " ")) {
						for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						a = oe.trim(i), n.className !== a && (n.className = a)
					}
			return this
		}
		, removeClass: function (e) {
			var t, n, i, o, r, a, s = 0
				, l = this.length
				, u = 0 === arguments.length || "string" == typeof e && e;
			if (oe.isFunction(e)) return this.each(function (t) {
				oe(this).removeClass(e.call(this, t, this.className))
			});
			if (u)
				for (t = (e || "").match(be) || []; l > s; s++)
					if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(It, " ") : "")) {
						for (r = 0; o = t[r++];)
							for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
						a = e ? oe.trim(i) : "", n.className !== a && (n.className = a)
					}
			return this
		}
		, toggleClass: function (e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(oe.isFunction(e) ? function (n) {
				oe(this).toggleClass(e.call(this, n, this.className, t), t)
			} : function () {
				if ("string" === n)
					for (var t, i = 0, o = oe(this), r = e.match(be) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
				else(n === Te || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
			})
		}
		, hasClass: function (e) {
			for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(It, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	}), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
		oe.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), oe.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
		, bind: function (e, t, n) {
			return this.on(e, null, t, n)
		}
		, unbind: function (e, t) {
			return this.off(e, null, t)
		}
		, delegate: function (e, t, n, i) {
			return this.on(t, e, n, i)
		}
		, undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var Dt = oe.now()
		, Lt = /\?/
		, At = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	oe.parseJSON = function (t) {
		if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
		var n, i = null
			, o = oe.trim(t + "");
		return o && !oe.trim(o.replace(At, function (e, t, o, r) {
			return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
		})) ? Function("return " + o)() : oe.error("Invalid JSON: " + t)
	}, oe.parseXML = function (t) {
		var n, i;
		if (!t || "string" != typeof t) return null;
		try {
			e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
		}
		catch (o) {
			n = void 0
		}
		return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
	};
	var Mt, Nt, zt = /#.*$/
		, Ot = /([?&])_=[^&]*/
		, Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
		, Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
		, Ht = /^(?:GET|HEAD)$/
		, jt = /^\/\//
		, Ft = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
		, Wt = {}
		, Bt = {}
		, qt = "*/".concat("*");
	try {
		Nt = location.href
	}
	catch (Ut) {
		Nt = he.createElement("a"), Nt.href = "", Nt = Nt.href
	}
	Mt = Ft.exec(Nt.toLowerCase()) || [], oe.extend({
		active: 0
		, lastModified: {}
		, etag: {}
		, ajaxSettings: {
			url: Nt
			, type: "GET"
			, isLocal: Rt.test(Mt[1])
			, global: !0
			, processData: !0
			, async: !0
			, contentType: "application/x-www-form-urlencoded; charset=UTF-8"
			, accepts: {
				"*": qt
				, text: "text/plain"
				, html: "text/html"
				, xml: "application/xml, text/xml"
				, json: "application/json, text/javascript"
			}
			, contents: {
				xml: /xml/
				, html: /html/
				, json: /json/
			}
			, responseFields: {
				xml: "responseXML"
				, text: "responseText"
				, json: "responseJSON"
			}
			, converters: {
				"* text": String
				, "text html": !0
				, "text json": oe.parseJSON
				, "text xml": oe.parseXML
			}
			, flatOptions: {
				url: !0
				, context: !0
			}
		}
		, ajaxSetup: function (e, t) {
			return t ? F(F(e, oe.ajaxSettings), t) : F(oe.ajaxSettings, e)
		}
		, ajaxPrefilter: H(Wt)
		, ajaxTransport: H(Bt)
		, ajax: function (e, t) {
			function n(e, t, n, i) {
				var o, c, g, y, w, C = t;
				2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (y = W(d, x, n)), y = B(d, y, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (oe.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (oe.etag[r] = w)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, g = y.error, o = !g)) : (g = C, (e || !C) && (C = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || C) + "", o ? h.resolveWith(p, [c, C, x]) : h.rejectWith(p, [x, C, g]), x.statusCode(v), v = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? c : g]), m.fireWith(p, [x, C]), l && (f.trigger("ajaxComplete", [x, d]), --oe.active || oe.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var i, o, r, a, s, l, u, c, d = oe.ajaxSetup({}, t)
				, p = d.context || d
				, f = d.context && (p.nodeType || p.jquery) ? oe(p) : oe.event
				, h = oe.Deferred()
				, m = oe.Callbacks("once memory")
				, v = d.statusCode || {}
				, g = {}
				, y = {}
				, b = 0
				, w = "canceled"
				, x = {
					readyState: 0
					, getResponseHeader: function (e) {
						var t;
						if (2 === b) {
							if (!c)
								for (c = {}; t = Pt.exec(a);) c[t[1].toLowerCase()] = t[2];
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					}
					, getAllResponseHeaders: function () {
						return 2 === b ? a : null
					}
					, setRequestHeader: function (e, t) {
						var n = e.toLowerCase();
						return b || (e = y[n] = y[n] || e, g[e] = t), this
					}
					, overrideMimeType: function (e) {
						return b || (d.mimeType = e), this
					}
					, statusCode: function (e) {
						var t;
						if (e)
							if (2 > b)
								for (t in e) v[t] = [v[t], e[t]];
							else x.always(e[x.status]);
						return this
					}
					, abort: function (e) {
						var t = e || w;
						return u && u.abort(t), n(0, t), this
					}
				};
			if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Nt) + "").replace(zt, "").replace(jt, Mt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = Ft.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Mt[1] && i[2] === Mt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Mt[3] || ("http:" === Mt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), j(Wt, d, t, x), 2 === b) return x;
			l = oe.event && d.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ht.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (Lt.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ot.test(r) ? r.replace(Ot, "$1_=" + Dt++) : r + (Lt.test(r) ? "&" : "?") + "_=" + Dt++)), d.ifModified && (oe.lastModified[r] && x.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && x.setRequestHeader("If-None-Match", oe.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : d.accepts["*"]);
			for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
			if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === b)) return x.abort();
			w = "abort";
			for (o in {
					success: 1
					, error: 1
					, complete: 1
				}) x[o](d[o]);
			if (u = j(Bt, d, t, x)) {
				x.readyState = 1, l && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
					x.abort("timeout")
				}, d.timeout));
				try {
					b = 1, u.send(g, n)
				}
				catch (C) {
					if (!(2 > b)) throw C;
					n(-1, C)
				}
			}
			else n(-1, "No Transport");
			return x
		}
		, getJSON: function (e, t, n) {
			return oe.get(e, t, n, "json")
		}
		, getScript: function (e, t) {
			return oe.get(e, void 0, t, "script")
		}
	}), oe.each(["get", "post"], function (e, t) {
		oe[t] = function (e, n, i, o) {
			return oe.isFunction(n) && (o = o || i, i = n, n = void 0), oe.ajax({
				url: e
				, type: t
				, dataType: o
				, data: n
				, success: i
			})
		}
	}), oe._evalUrl = function (e) {
		return oe.ajax({
			url: e
			, type: "GET"
			, dataType: "script"
			, async: !1
			, global: !1
			, "throws": !0
		})
	}, oe.fn.extend({
		wrapAll: function (e) {
			if (oe.isFunction(e)) return this.each(function (t) {
				oe(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		}
		, wrapInner: function (e) {
			return this.each(oe.isFunction(e) ? function (t) {
				oe(this).wrapInner(e.call(this, t))
			} : function () {
				var t = oe(this)
					, n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		}
		, wrap: function (e) {
			var t = oe.isFunction(e);
			return this.each(function (n) {
				oe(this).wrapAll(t ? e.call(this, n) : e)
			})
		}
		, unwrap: function () {
			return this.parent().each(function () {
				oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
			}).end()
		}
	}), oe.expr.filters.hidden = function (e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
	}, oe.expr.filters.visible = function (e) {
		return !oe.expr.filters.hidden(e)
	};
	var Zt = /%20/g
		, Xt = /\[\]$/
		, Yt = /\r?\n/g
		, Vt = /^(?:submit|button|image|reset|file)$/i
		, Gt = /^(?:input|select|textarea|keygen)/i;
	oe.param = function (e, t) {
		var n, i = []
			, o = function (e, t) {
				t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
			o(this.name, this.value)
		});
		else
			for (n in e) q(n, e[n], t, o);
		return i.join("&").replace(Zt, "+")
	}, oe.fn.extend({
		serialize: function () {
			return oe.param(this.serializeArray())
		}
		, serializeArray: function () {
			return this.map(function () {
				var e = oe.prop(this, "elements");
				return e ? oe.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !oe(this).is(":disabled") && Gt.test(this.nodeName) && !Vt.test(e) && (this.checked || !De.test(e))
			}).map(function (e, t) {
				var n = oe(this).val();
				return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
					return {
						name: t.name
						, value: e.replace(Yt, "\r\n")
					}
				}) : {
					name: t.name
					, value: n.replace(Yt, "\r\n")
				}
			}).get()
		}
	}), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || Z()
	} : U;
	var Kt = 0
		, Qt = {}
		, Jt = oe.ajaxSettings.xhr();
	e.attachEvent && e.attachEvent("onunload", function () {
		for (var e in Qt) Qt[e](void 0, !0)
	}), ne.cors = !!Jt && "withCredentials" in Jt, Jt = ne.ajax = !!Jt, Jt && oe.ajaxTransport(function (e) {
		if (!e.crossDomain || ne.cors) {
			var t;
			return {
				send: function (n, i) {
					var o, r = e.xhr()
						, a = ++Kt;
					if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (o in e.xhrFields) r[o] = e.xhrFields[o];
					e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
					for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
					r.send(e.hasContent && e.data || null), t = function (n, o) {
						var s, l, u;
						if (t && (o || 4 === r.readyState))
							if (delete Qt[a], t = void 0, r.onreadystatechange = oe.noop, o) 4 !== r.readyState && r.abort();
							else {
								u = {}, s = r.status, "string" == typeof r.responseText && (u.text = r.responseText);
								try {
									l = r.statusText
								}
								catch (c) {
									l = ""
								}
								s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
							}
						u && i(s, l, u, r.getAllResponseHeaders())
					}, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Qt[a] = t : t()
				}
				, abort: function () {
					t && t(void 0, !0)
				}
			}
		}
	}), oe.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		}
		, contents: {
			script: /(?:java|ecma)script/
		}
		, converters: {
			"text script": function (e) {
				return oe.globalEval(e), e
			}
		}
	}), oe.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), oe.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var t, n = he.head || oe("head")[0] || he.documentElement;
			return {
				send: function (i, o) {
					t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
						(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
					}, n.insertBefore(t, n.firstChild)
				}
				, abort: function () {
					t && t.onload(void 0, !0)
				}
			}
		}
	});
	var en = []
		, tn = /(=)\?(?=&|$)|\?\?/;
	oe.ajaxSetup({
		jsonp: "callback"
		, jsonpCallback: function () {
			var e = en.pop() || oe.expando + "_" + Dt++;
			return this[e] = !0, e
		}
	}), oe.ajaxPrefilter("json jsonp", function (t, n, i) {
		var o, r, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + o) : t.jsonp !== !1 && (t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
			return a || oe.error(o + " was not called"), a[0]
		}, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
			a = arguments
		}, i.always(function () {
			e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, en.push(o)), a && oe.isFunction(r) && r(a[0]), a = r = void 0
		}), "script") : void 0
	}), oe.parseHTML = function (e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || he;
		var i = de.exec(e)
			, o = !n && [];
		return i ? [t.createElement(i[1])] : (i = oe.buildFragment([e], t, o), o && o.length && oe(o).remove(), oe.merge([], i.childNodes))
	};
	var nn = oe.fn.load;
	oe.fn.load = function (e, t, n) {
		if ("string" != typeof e && nn) return nn.apply(this, arguments);
		var i, o, r, a = this
			, s = e.indexOf(" ");
		return s >= 0 && (i = oe.trim(e.slice(s, e.length)), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && oe.ajax({
			url: e
			, type: r
			, dataType: "html"
			, data: t
		}).done(function (e) {
			o = arguments, a.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
		}).complete(n && function (e, t) {
			a.each(n, o || [e.responseText, t, e])
		}), this
	}, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		oe.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), oe.expr.filters.animated = function (e) {
		return oe.grep(oe.timers, function (t) {
			return e === t.elem
		}).length
	};
	var on = e.document.documentElement;
	oe.offset = {
		setOffset: function (e, t, n) {
			var i, o, r, a, s, l, u, c = oe.css(e, "position")
				, d = oe(e)
				, p = {};
			"static" === c && (e.style.position = "relative"), s = d.offset(), r = oe.css(e, "top"), l = oe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [r, l]) > -1, u ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
		}
	}, oe.fn.extend({
		offset: function (e) {
			if (arguments.length) return void 0 === e ? this : this.each(function (t) {
				oe.offset.setOffset(this, e, t)
			});
			var t, n, i = {
					top: 0
					, left: 0
				}
				, o = this[0]
				, r = o && o.ownerDocument;
			return r ? (t = r.documentElement, oe.contains(t, o) ? (typeof o.getBoundingClientRect !== Te && (i = o.getBoundingClientRect()), n = X(r), {
				top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0)
				, left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
			}) : i) : void 0
		}
		, position: function () {
			if (this[0]) {
				var e, t, n = {
						top: 0
						, left: 0
					}
					, i = this[0];
				return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - oe.css(i, "marginTop", !0)
					, left: t.left - n.left - oe.css(i, "marginLeft", !0)
				}
			}
		}
		, offsetParent: function () {
			return this.map(function () {
				for (var e = this.offsetParent || on; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
				return e || on
			})
		}
	}), oe.each({
		scrollLeft: "pageXOffset"
		, scrollTop: "pageYOffset"
	}, function (e, t) {
		var n = /Y/.test(t);
		oe.fn[e] = function (i) {
			return Ie(this, function (e, i, o) {
				var r = X(e);
				return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? oe(r).scrollLeft() : o, n ? o : oe(r).scrollTop()) : e[i] = o)
			}, e, i, arguments.length, null)
		}
	}), oe.each(["top", "left"], function (e, t) {
		oe.cssHooks[t] = k(ne.pixelPosition, function (e, n) {
			return n ? (n = tt(e, t), it.test(n) ? oe(e).position()[t] + "px" : n) : void 0
		})
	}), oe.each({
		Height: "height"
		, Width: "width"
	}, function (e, t) {
		oe.each({
			padding: "inner" + e
			, content: t
			, "": "outer" + e
		}, function (n, i) {
			oe.fn[i] = function (i, o) {
				var r = arguments.length && (n || "boolean" != typeof i)
					, a = n || (i === !0 || o === !0 ? "margin" : "border");
				return Ie(this, function (t, n, i) {
					var o;
					return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? oe.css(t, n, a) : oe.style(t, n, i, a)
				}, t, r ? i : void 0, r, null)
			}
		})
	}), oe.fn.size = function () {
		return this.length
	}, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return oe
	});
	var rn = e.jQuery
		, an = e.$;
	return oe.noConflict = function (t) {
		return e.$ === oe && (e.$ = an), t && e.jQuery === oe && (e.jQuery = rn), oe
	}, typeof t === Te && (e.jQuery = e.$ = oe), oe
}), ! function (e, t, n) {
	function i(e, t) {
		return typeof e === t
	}

	function o() {
		var e, t, n, o, r, a, s;
		for (var l in b)
			if (b.hasOwnProperty(l)) {
				if (e = [], t = b[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
					for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
				for (o = i(t.fn, "function") ? t.fn() : t.fn, r = 0; r < e.length; r++) a = e[r], s = a.split("."), 1 === s.length ? x[s[0]] = o : (!x[s[0]] || x[s[0]] instanceof Boolean || (x[s[0]] = new Boolean(x[s[0]])), x[s[0]][s[1]] = o), y.push((o ? "" : "no-") + s.join("-"))
			}
	}

	function r(e) {
		var t = C.className
			, n = x._config.classPrefix || "";
		if (T && (t = t.baseVal), x._config.enableJSClass) {
			var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
			t = t.replace(i, "$1" + n + "js$2")
		}
		x._config.enableClasses && (t += " " + n + e.join(" " + n), T ? C.className.baseVal = t : C.className = t)
	}

	function a(e, t) {
		return !!~("" + e).indexOf(t)
	}

	function s() {
		return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
	}

	function l(e) {
		return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
			return t + n.toUpperCase()
		}).replace(/^-/, "")
	}

	function u(e, t) {
		return function () {
			return e.apply(t, arguments)
		}
	}

	function c(e, t, n) {
		var o;
		for (var r in e)
			if (e[r] in t) return n === !1 ? e[r] : (o = t[e[r]], i(o, "function") ? u(o, n || t) : o);
		return !1
	}

	function d(e) {
		return e.replace(/([A-Z])/g, function (e, t) {
			return "-" + t.toLowerCase()
		}).replace(/^ms-/, "-ms-")
	}

	function p() {
		var e = t.body;
		return e || (e = s(T ? "svg" : "body"), e.fake = !0), e
	}

	function f(e, n, i, o) {
		var r, a, l, u, c = "modernizr"
			, d = s("div")
			, f = p();
		if (parseInt(i, 10))
			for (; i--;) l = s("div"), l.id = o ? o[i] : c + (i + 1), d.appendChild(l);
		return r = s("style"), r.type = "text/css", r.id = "s" + c, (f.fake ? f : d).appendChild(r), f.appendChild(d), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)), d.id = c, f.fake && (f.style.background = "", f.style.overflow = "hidden", u = C.style.overflow, C.style.overflow = "hidden", C.appendChild(f)), a = n(d, e), f.fake ? (f.parentNode.removeChild(f), C.style.overflow = u, C.offsetHeight) : d.parentNode.removeChild(d), !!a
	}

	function h(t, i) {
		var o = t.length;
		if ("CSS" in e && "supports" in e.CSS) {
			for (; o--;)
				if (e.CSS.supports(d(t[o]), i)) return !0;
			return !1
		}
		if ("CSSSupportsRule" in e) {
			for (var r = []; o--;) r.push("(" + d(t[o]) + ":" + i + ")");
			return r = r.join(" or "), f("@supports (" + r + ") { #modernizr { position: absolute; } }", function (e) {
				return "absolute" == getComputedStyle(e, null).position
			})
		}
		return n
	}

	function m(e, t, o, r) {
		function u() {
			d && (delete $.style, delete $.modElem)
		}
		if (r = !i(r, "undefined") && r, !i(o, "undefined")) {
			var c = h(e, o);
			if (!i(c, "undefined")) return c
		}
		for (var d, p, f, m, v, g = ["modernizr", "tspan", "samp"]; !$.style && g.length;) d = !0, $.modElem = s(g.shift()), $.style = $.modElem.style;
		for (f = e.length, p = 0; f > p; p++)
			if (m = e[p], v = $.style[m], a(m, "-") && (m = l(m)), $.style[m] !== n) {
				if (r || i(o, "undefined")) return u(), "pfx" != t || m;
				try {
					$.style[m] = o
				}
				catch (y) {}
				if ($.style[m] != v) return u(), "pfx" != t || m
			}
		return u(), !1
	}

	function v(e, t, n, o, r) {
		var a = e.charAt(0).toUpperCase() + e.slice(1)
			, s = (e + " " + S.join(a + " ") + a).split(" ");
		return i(t, "string") || i(t, "undefined") ? m(s, t, o, r) : (s = (e + " " + k.join(a + " ") + a).split(" "), c(s, t, n))
	}

	function g(e, t, i) {
		return v(e, n, n, t, i)
	}
	var y = []
		, b = []
		, w = {
			_version: "3.3.1"
			, _config: {
				classPrefix: ""
				, enableClasses: !0
				, enableJSClass: !0
				, usePrefixes: !0
			}
			, _q: []
			, on: function (e, t) {
				var n = this;
				setTimeout(function () {
					t(n[e])
				}, 0)
			}
			, addTest: function (e, t, n) {
				b.push({
					name: e
					, fn: t
					, options: n
				})
			}
			, addAsyncTest: function (e) {
				b.push({
					name: null
					, fn: e
				})
			}
		}
		, x = function () {};
	x.prototype = w, x = new x;
	var C = t.documentElement
		, T = "svg" === C.nodeName.toLowerCase()
		, E = "Moz O ms Webkit"
		, S = w._config.usePrefixes ? E.split(" ") : [];
	w._cssomPrefixes = S;
	var k = w._config.usePrefixes ? E.toLowerCase().split(" ") : [];
	w._domPrefixes = k;
	var _ = {
		elem: s("modernizr")
	};
	x._q.push(function () {
		delete _.elem
	});
	var $ = {
		style: _.elem.style
	};
	x._q.unshift(function () {
		delete $.style
	}), w.testAllProps = v, w.testAllProps = g, x.addTest("flexbox", g("flexBasis", "1px", !0)), o(), r(y), delete w.addTest, delete w.addAsyncTest;
	for (var I = 0; I < x._q.length; I++) x._q[I]();
	e.Modernizr = x
}(window, document), $(document).ready(function () {
		if ($("html").removeClass("no-js").addClass("js"), navigator.userAgent.match(/IEMobile\/10\.0/)) {
			var e = document.createElement("style");
			e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(e)
		}
		deviceDetect("detect"), inIframe() && deviceDetect("iphone") && $("body").addClass("ios-iframe"), smoothScrolling(), watchForPrint(), bindForms(), $(window).on("resize", function () {
			deviceDetect("detect")
		})
	}), $(document).ready(function () {
		fullscreenHeader(), $(window).on("resize orientationchange", function () {
			fullscreenHeader()
		})
	}), $(document).ready(function () {
		var e = !1
			, t = !1;
		setTimeout(function () {
			shortContent(), e = !0
		}, 500), isCMS() && $(document).on("wnd-content-change", ".wnd-page", function () {
			e ? e = !1 : setTimeout(function () {
				shortContent()
			}, 300)
		}), $(window).on("resize orientationchange", function () {
			t ? t = !1 : setTimeout(function () {
				shortContent(), t = !0
			}, 500)
		})
	})
	, function (e) {
		e.fn.parentResponsive = function (t) {
			function n(t, n) {
				e(t).each(function (t) {
					var o = e(this)
						, a = o.outerWidth()
						, s = ""
						, l = ""
						, u = o.attr("class");
					if (u = u.split(" "), e.each(u, function (e) {
							u[e] != n.column && (l += u[e] + " ")
						}), e.each(n.classes, function (e) {
							if (a > n.widths[e] && a <= n.widths[e + 1])
								for (i = 0; i <= e; i++) s += n.classes[i] + " "
						}), l != s && (o.removeClass(r).addClass(s), isCMS())) {
						var c = o[0] ? o[0] : o;
						if (c) {
							var d = document.createEvent("Event");
							d.initEvent("wnd-redraw-done", !1, !0), c.dispatchEvent(d)
						}
					}
				})
			}
			var o = e.extend({}, e.fn.parentResponsive.defaults, t)
				, r = o.classes.join(" ")
				, a = e(this);
			n(a, o)
		}, e.fn.parentResponsive.defaults = {
			widths: [0, 319, 479, 599, 767, 899, 9999]
			, classes: ["pr-0", "pr-320", "pr-480", "pr-600", "pr-768", "pr-infinity"]
			, column: "column-content"
		}, e(document).ready(function () {
			var t = function () {
				e(".column-content").parentResponsive()
			};
			isCMS() && e(document).on("wnd-redraw", ".content", function () {
				var t = e(this).find(".column-content");
				t[0] && setTimeout(function () {
					t.parentResponsive()
				}, 200)
			}), e(".column-content")[0] && (t(), e(window).on("resize orientationchange", function () {
				t()
			})), e(".column-content").resize(function () {
				setTimeout(function () {
					t()
				}, 200)
			})
		})
	}(jQuery), $(document).ready(function () {
		function e() {
			var e = parseInt($("#menu-mobile").outerWidth(!0));
			$(".logoblock").css("marginRight", e - 20 + "px")
		}

		function t(e) {
			if (isCMS()) {
				var t = document.createEvent("Event");
				"open" == e && t.initEvent("wnd-open-menu", !0, !0), "close" == e && t.initEvent("wnd-close-menu", !0, !0), b.dispatchEvent(t)
			}
		}

		function n() {
			var e = $("#menu-submit")
				, n = $(".close-menu");
			n.off("click").on("click", function () {
				e.removeClass("active"), u.removeClass("open"), $("html, body").removeClass("noscroll"), setTimeout(function () {
					u.removeClass("visible"), l.removeClass("menu-open")
				}, 250), t("close")
			}), e.off("click").on("click", function (n) {
				n.preventDefault(), n.stopImmediatePropagation(), n.stopPropagation(), e.hasClass("active") ? (e.removeClass("active"), u.removeClass("open"), setTimeout(function () {
					u.removeClass("visible"), $("html, body").removeClass("noscroll"), l.removeClass("menu-open")
				}, 250), t("close")) : (e.addClass("active"), u.addClass("visible"), setTimeout(function () {
					u.addClass("open"), $("html, body").addClass("noscroll"), l.addClass("menu-open")
				}, 10), t("open"))
			}), isMobileMenu() && "vertical" == C && $("#wrapper").off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", function (t) {
				$(t.target).closest("#menu").length <= 0 && $("#menu").hasClass("open") && $(t.target).closest("#menu-mobile").length <= 0 && e.trigger("click")
			}), $("a.mm-arrow").off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", function (e) {
				if (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), d) return !1;
				d = !0, setTimeout(function () {
					d = !1
				}, 500);
				var t = $(this).parent().children("ul");
				if (isMobileMenu()) $(this).hasClass("mm-down") ? ($(this).parent().addClass("hover"), $(this).removeClass("mm-down").addClass("mm-up"), t.addClass("open")) : ($(this).parent().removeClass("hover"), $(this).removeClass("mm-up").addClass("mm-down"), t.removeClass("open"));
				else if ($(this).hasClass("mm-down")) {
					$(this).parent().addClass("hover"), $(this).removeClass("mm-down").addClass("mm-up"), t.show();
					var n = t.outerHeight(!0);
					t.hide(), t.css("height", "0"), t.addClass("open"), t.animate({
						height: n
					}, {
						step: function () {
							"centered" == T && c.height() >= u.height() && u.removeClass("centered")
						}
						, duration: 500
						, complete: function () {
							o(), t.attr("style", "")
						}
					})
				}
				else $(this).removeClass("mm-up").addClass("mm-down"), t.animate({
					height: 0
				}, {
					step: function () {
						"centered" == T && c.height() < u.height() && u.addClass("centered")
					}
					, duration: 500
					, complete: function () {
						$(this).parent().removeClass("hover"), t.attr("style", ""), t.removeClass("open"), setTimeout(o, 50)
					}
				})
			}), $(".scrollup").off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", function () {
				if (1 != v) {
					v = !0, setTimeout(function () {
						v = !1
					}, 500);
					var e = u.find("ul.level-1 > li:not(.menu-more)").outerHeight(!0)
						, t = parseInt(c.position().top)
						, n = Math.abs(t) - 1 * e;
					u.animate({
						scrollTop: n
					}, {
						step: o
						, duration: 500
						, complete: o
					})
				}
			}), $(".scrolldown").off("touchend MSPointerDown pointerdown click").on("touchend MSPointerDown pointerdown click", function () {
				if (1 != v) {
					v = !0, setTimeout(function () {
						v = !1
					}, 500);
					var e = u.find("ul.level-1 > li:not(.menu-more)").outerHeight(!0)
						, t = parseInt(c.position().top)
						, n = Math.abs(t) + 1 * e;
					u.animate({
						scrollTop: n
					}, {
						step: o
						, duration: 500
						, complete: o
					})
				}
			})
		}

		function i() {
			var e = $("#menu")
				, t = $("#menublock")
				, n = $("header");
			if (!isMobileMenu()) {
				var i = n.outerHeight(!0)
					, o = l.outerHeight(!0);
				i != o && o < i && (i = o);
				var r;
				r = "fixed" == $("#footer").css("position") ? parseInt($("footer").outerHeight(!0)) : 0;
				var a = parseInt(n.css("paddingTop"))
					, s = parseInt($(".nav-line").css("paddingTop"))
					, u = parseInt(t.css("paddingTop")) + parseInt(t.css("paddingBottom"))
					, c = parseInt(t.css("marginTop")) + parseInt(t.css("marginBottom"))
					, d = parseInt($(".logo").outerHeight(!0))
					, f = $("header .subclaim");
				f.length && (d += parseInt(f.outerHeight(!0)));
				var h = 0;
				deviceDetect("ios") && (h = 60);
				var m = i - a - s - d - r - u - c - h
					, v = 0;
				if (D)
					for ("none" == e.css("display") ? (e.show(), E = $("ul.level-1 > li:first-child").outerHeight(!0), e.hide()) : E = $("ul.level-1 > li:first-child").outerHeight(!0); v + E <= m;) v += E;
				else v = m;
				e.css("height", v);
				var g = 0
					, y = e.find("ul.level-1 > li:not(.more)");
				$(y).each(function () {
					g += parseInt($(this).outerHeight(!0))
				}), g > v ? ($(".scrolldown").show(), "centered" == T && e.removeClass("centered")) : ("centered" == T && e.addClass("centered"), $(".scrollup").hide(), $(".scrolldown").hide())
			}
			p = !1
		}

		function o() {
			var e = u.height()
				, t = c.height()
				, n = u.offset().top
				, i = c.offset().top
				, o = $(".scrolldown");
			n + e == i + t ? $(o).hide() : t < e ? $(o).hide() : t > e && $(o).show();
			var r = $(".scrollup");
			i >= n ? $(r).hide() : "none" == $(r).css("display") && $(r).show()
		}

		function r(e) {
			if (!p) {
				if (p = !0, "resize" != e || f != isMobileMenu()) {
					if ("centered" != T || isMobileMenu() ? "centered" == T && isMobileMenu() && u.removeClass("centered").attr("style", "") : u.addClass("centered"), s = $("#menublock"), s.length > 0 && isMobileMenu()) {
						var t = $("#menu");
						$(".subclaim").length > 0 ? t.insertAfter(".subclaim") : t.insertAfter(".logo"), s.remove()
					}
					else isMobileMenu() || s.length || ($("header .subclaim").length ? $('<div id="menublock"></div>').insertAfter(".subclaim") : $('<div id="menublock"></div>').insertAfter(".logo"), u.appendTo("#menublock"));
					!isMobileMenu() && u.hasClass("visible") && u.removeClass("visible"), !isMobileMenu() && u.hasClass("open") && u.removeClass("open"), $(".nav-line").removeClass("initial-state"), u.find("a.mm-arrow").remove();
					var r = $("#menu-submit");
					if (r.hasClass("active") || $("#menu, #menu ul").removeClass("open align").removeAttr("style"), u.find("li.wnd-with-submenu").removeClass("hover"), isMobileMenu() ? r.hasClass("active") ? (u.addClass("open"), u.addClass("visible")) : (u.removeClass("open"), u.removeClass("visible"), l.removeClass("noscroll"), l.removeClass("menu-open")) : i(), u.find("ul li.wnd-with-submenu").each(function () {
							($(this).parent().hasClass("level-1") || $(this).parent().hasClass("level-2")) && ($(this).hasClass("wnd-active-path") && !$(this).hasClass("wnd-active") ? $(this).append('<a class="mm-arrow mm-up" href="#"></a>') : $(this).append('<a class="mm-arrow mm-down" href="#"></a>')), $(this).parent().hasClass("level-3") && $(this).removeClass("wnd-with-submenu"), isMobileMenu() ? u.find("ul li.wnd-active-path").each(function () {
								$(this).children("a.mm-arrow").removeClass("mm-down").addClass("mm-up"), $(this).children("ul").addClass("open")
							}) : ($("li.wnd-active-path.wnd-with-submenu").addClass("hover"), $("li.wnd-active-path.wnd-with-submenu > ul").addClass("open"), $("li.wnd-active-path.wnd-with-submenu > .mm-arrow").removeClass("mm-down").addClass("mm-up"))
						}), isMobileMenu()) u.off("mousewheel DOMMouseScroll touchstart touchmove touchend");
					else {
						var a;
						u.off().on("mousewheel DOMMouseScroll touchstart touchmove touchend", function (e) {
							var t = null;
							if ("mousewheel" == e.type) t = e.originalEvent.wheelDelta * -1;
							else if ("DOMMouseScroll" == e.type) t = e.originalEvent.detail;
							else if ("touchstart" == e.type) a = e.originalEvent.touches[0].clientY;
							else if ("touchmove" == e.type) {
								var n = e.originalEvent.changedTouches[0].clientY
									, i = u.height()
									, r = c.height()
									, s = u.offset().top
									, l = c.offset().top;
								s + i == l + r ? a > n && e.preventDefault() : s == l && a < n && e.preventDefault()
							}
							t && (e.preventDefault(), $(this).scrollTop(t + $(this).scrollTop())), o()
						}), u.off("scroll").on("scroll", function () {
							o()
						}), $(".scrollup").length || $("#menublock").append('<div class="scrollup"></div>'), $(".scrolldown").length || $("#menublock").append('<div class="scrolldown"></div>')
					}
					/iPhone/i.test(navigator.userAgent) && (414 == $(window).height() && $(window).height() < $(window).width() ? u.addClass("ip6") : u.removeClass("ip6"))
				}
				f = isMobileMenu(), i(), n(), "none" == u.css("display") && u.show()
			}
		}

		function a() {
			var e = parseInt(x.width())
				, t = parseInt($(w).width())
				, o = parseInt(x.height())
				, r = parseInt($("li.wnd-homepage").outerHeight(!0));
			S = o, e == I && t == _ && S == o && E == r || (I = e, _ = t, S = o, E = r, i(), n())
		}
		var s, l = $("body")
			, u = $("#menu")
			, c = u.find(" > div")
			, d = ($("header"), !1)
			, p = !1
			, f = isMobileMenu()
			, h = !1
			, m = !1
			, v = !1
			, g = $(window).width()
			, y = $(window).height()
			, b = document.getElementById(c.attr("id"))
			, w = $(".nav-line .section-inner")
			, x = $(".logo")
			, C = u.attr("data-type")
			, T = "top";
		"centered" == u.attr("data-align") && (T = "centered"), 0 == $(w).length && (w = $(".nav-line"), x = $(".nav-line .logo"));
		var E, S = x.height()
			, k = $("li.wnd-homepage");
		E = k.length > 0 ? u.find(".wnd-homepage").outerHeight(!0) : u.find("ul > li"), "none" == u.css("display") && (u.show(), E = k.outerHeight(!0), u.hide());
		var _, I;
		if (isCMS()) {
			$("#wnd_toolbar").outerHeight(!0)
		}
		var D = !1;
		$(window).load(function () {
			r(), $("html").hasClass("no-flexbox") && e()
		}), isCMS() && ($(document).on("wnd-redraw", ".header", function () {
			setTimeout(r, 20)
		}), $(document).on("wnd-content-change", ".logo", function () {
			setTimeout(r, 20)
		}), $(document).on("wnd-content-change", ".system-footer", function () {
			r()
		})), $(window).on("resize", function () {
			h = !0, $(window).height() != y && (y = $(window).height(), r("resize")), $(window).width() != g && (g = $(window).width(), r("resize")), setTimeout(function () {
				h = !1
			}, 10)
		}), $(window).on("orientationchange", function () {
			h || m || (h = !0, m = !0, setTimeout(r, 100), setTimeout(function () {
				h = !1, m = !1
			}, 20))
		}), $("body.wnd-cms #header").on("keyup click focusin focusout", ".logo-content", function (e) {
			"focusout" == e.type ? setTimeout(function () {
				a()
			}, 100) : a()
		})
	})
	, function (e) {
		function t() {}

		function n(e) {
			function n(t) {
				t.prototype.option || (t.prototype.option = function (t) {
					e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
				})
			}

			function o(t, n) {
				e.fn[t] = function (o) {
					if ("string" == typeof o) {
						for (var a = i.call(arguments, 1), s = 0, l = this.length; s < l; s++) {
							var u = this[s]
								, c = e.data(u, t);
							if (c)
								if (e.isFunction(c[o]) && "_" !== o.charAt(0)) {
									var d = c[o].apply(c, a);
									if (void 0 !== d) return d
								}
								else r("no such method '" + o + "' for " + t + " instance");
							else r("cannot call methods on " + t + " prior to initialization; attempted to call '" + o + "'")
						}
						return this
					}
					return this.each(function () {
						var i = e.data(this, t);
						i ? (i.option(o), i._init()) : (i = new n(this, o), e.data(this, t, i))
					})
				}
			}
			if (e) {
				var r = "undefined" == typeof console ? t : function (e) {
					console.error(e)
				};
				return e.bridget = function (e, t) {
					n(t), o(e, t)
				}, e.bridget
			}
		}
		var i = Array.prototype.slice;
		"function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n("object" == typeof exports ? require("jquery") : e.jQuery)
	}(window)
	, function (e) {
		function t(t) {
			var n = e.event;
			return n.target = n.target || n.srcElement || t, n
		}
		var n = document.documentElement
			, i = function () {};
		n.addEventListener ? i = function (e, t, n) {
			e.addEventListener(t, n, !1)
		} : n.attachEvent && (i = function (e, n, i) {
			e[n + i] = i.handleEvent ? function () {
				var n = t(e);
				i.handleEvent.call(i, n)
			} : function () {
				var n = t(e);
				i.call(e, n)
			}, e.attachEvent("on" + n, e[n + i])
		});
		var o = function () {};
		n.removeEventListener ? o = function (e, t, n) {
			e.removeEventListener(t, n, !1)
		} : n.detachEvent && (o = function (e, t, n) {
			e.detachEvent("on" + t, e[t + n]);
			try {
				delete e[t + n]
			}
			catch (i) {
				e[t + n] = void 0
			}
		});
		var r = {
			bind: i
			, unbind: o
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : e.eventie = r
	}(window)
	, function () {
		function e() {}

		function t(e, t) {
			for (var n = e.length; n--;)
				if (e[n].listener === t) return n;
			return -1
		}

		function n(e) {
			return function () {
				return this[e].apply(this, arguments)
			}
		}
		var i = e.prototype
			, o = this
			, r = o.EventEmitter;
		i.getListeners = function (e) {
			var t, n, i = this._getEvents();
			if (e instanceof RegExp) {
				t = {};
				for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
			}
			else t = i[e] || (i[e] = []);
			return t
		}, i.flattenListeners = function (e) {
			var t, n = [];
			for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
			return n
		}, i.getListenersAsObject = function (e) {
			var t, n = this.getListeners(e);
			return n instanceof Array && (t = {}, t[e] = n), t || n
		}, i.addListener = function (e, n) {
			var i, o = this.getListenersAsObject(e)
				, r = "object" == typeof n;
			for (i in o) o.hasOwnProperty(i) && t(o[i], n) === -1 && o[i].push(r ? n : {
				listener: n
				, once: !1
			});
			return this
		}, i.on = n("addListener"), i.addOnceListener = function (e, t) {
			return this.addListener(e, {
				listener: t
				, once: !0
			})
		}, i.once = n("addOnceListener"), i.defineEvent = function (e) {
			return this.getListeners(e), this
		}, i.defineEvents = function (e) {
			for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
			return this
		}, i.removeListener = function (e, n) {
			var i, o, r = this.getListenersAsObject(e);
			for (o in r) r.hasOwnProperty(o) && (i = t(r[o], n), i !== -1 && r[o].splice(i, 1));
			return this
		}, i.off = n("removeListener"), i.addListeners = function (e, t) {
			return this.manipulateListeners(!1, e, t)
		}, i.removeListeners = function (e, t) {
			return this.manipulateListeners(!0, e, t)
		}, i.manipulateListeners = function (e, t, n) {
			var i, o, r = e ? this.removeListener : this.addListener
				, a = e ? this.removeListeners : this.addListeners;
			if ("object" != typeof t || t instanceof RegExp)
				for (i = n.length; i--;) r.call(this, t, n[i]);
			else
				for (i in t) t.hasOwnProperty(i) && (o = t[i]) && ("function" == typeof o ? r.call(this, i, o) : a.call(this, i, o));
			return this
		}, i.removeEvent = function (e) {
			var t, n = typeof e
				, i = this._getEvents();
			if ("string" === n) delete i[e];
			else if (e instanceof RegExp)
				for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
			else delete this._events;
			return this
		}, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
			var n, i, o, r, a = this.getListenersAsObject(e);
			for (o in a)
				if (a.hasOwnProperty(o))
					for (i = a[o].length; i--;) n = a[o][i], n.once === !0 && this.removeListener(e, n.listener), r = n.listener.apply(this, t || []), r === this._getOnceReturnValue() && this.removeListener(e, n.listener);
			return this
		}, i.trigger = n("emitEvent"), i.emit = function (e) {
			var t = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(e, t)
		}, i.setOnceReturnValue = function (e) {
			return this._onceReturnValue = e, this
		}, i._getOnceReturnValue = function () {
			return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
		}, i._getEvents = function () {
			return this._events || (this._events = {})
		}, e.noConflict = function () {
			return o.EventEmitter = r, e
		}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
			return e
		}) : "object" == typeof module && module.exports ? module.exports = e : o.EventEmitter = e
	}.call(this)
	, function (e) {
		function t(e) {
			if (e) {
				if ("string" == typeof i[e]) return e;
				e = e.charAt(0).toUpperCase() + e.slice(1);
				for (var t, o = 0, r = n.length; o < r; o++)
					if (t = n[o] + e, "string" == typeof i[t]) return t
			}
		}
		var n = "Webkit Moz ms Ms O".split(" ")
			, i = document.documentElement.style;
		"function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
			return t
		}) : "object" == typeof exports ? module.exports = t : e.getStyleProperty = t
	}(window)
	, function (e, t) {
		function n(e) {
			var t = parseFloat(e)
				, n = e.indexOf("%") === -1 && !isNaN(t);
			return n && t
		}

		function i() {}

		function o() {
			for (var e = {
					width: 0
					, height: 0
					, innerWidth: 0
					, innerHeight: 0
					, outerWidth: 0
					, outerHeight: 0
				}, t = 0, n = s.length; t < n; t++) {
				var i = s[t];
				e[i] = 0
			}
			return e
		}

		function r(t) {
			function i() {
				if (!p) {
					p = !0;
					var i = e.getComputedStyle;
					if (u = function () {
							var e = i ? function (e) {
								return i(e, null)
							} : function (e) {
								return e.currentStyle
							};
							return function (t) {
								var n = e(t);
								return n || a("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n
							}
						}(), c = t("boxSizing")) {
						var o = document.createElement("div");
						o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[c] = "border-box";
						var r = document.body || document.documentElement;
						r.appendChild(o);
						var s = u(o);
						d = 200 === n(s.width), r.removeChild(o)
					}
				}
			}

			function r(e) {
				if (i(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
					var t = u(e);
					if ("none" === t.display) return o();
					var r = {};
					r.width = e.offsetWidth, r.height = e.offsetHeight;
					for (var a = r.isBorderBox = !(!c || !t[c] || "border-box" !== t[c]), p = 0, f = s.length; p < f; p++) {
						var h = s[p]
							, m = t[h];
						m = l(e, m);
						var v = parseFloat(m);
						r[h] = isNaN(v) ? 0 : v
					}
					var g = r.paddingLeft + r.paddingRight
						, y = r.paddingTop + r.paddingBottom
						, b = r.marginLeft + r.marginRight
						, w = r.marginTop + r.marginBottom
						, x = r.borderLeftWidth + r.borderRightWidth
						, C = r.borderTopWidth + r.borderBottomWidth
						, T = a && d
						, E = n(t.width);
					E !== !1 && (r.width = E + (T ? 0 : g + x));
					var S = n(t.height);
					return S !== !1 && (r.height = S + (T ? 0 : y + C)), r.innerWidth = r.width - (g + x), r.innerHeight = r.height - (y + C), r.outerWidth = r.width + b, r.outerHeight = r.height + w, r
				}
			}

			function l(t, n) {
				if (e.getComputedStyle || n.indexOf("%") === -1) return n;
				var i = t.style
					, o = i.left
					, r = t.runtimeStyle
					, a = r && r.left;
				return a && (r.left = t.currentStyle.left), i.left = n, n = i.pixelLeft, i.left = o, a && (r.left = a), n
			}
			var u, c, d, p = !1;
			return r
		}
		var a = "undefined" == typeof console ? i : function (e) {
				console.error(e)
			}
			, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
		"function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : e.getSize = r(e.getStyleProperty)
	}(window)
	, function (e) {
		function t(e) {
			"function" == typeof e && (t.isReady ? e() : a.push(e))
		}

		function n(e) {
			var n = "readystatechange" === e.type && "complete" !== r.readyState;
			t.isReady || n || i()
		}

		function i() {
			t.isReady = !0;
			for (var e = 0, n = a.length; e < n; e++) {
				var i = a[e];
				i()
			}
		}

		function o(o) {
			return "complete" === r.readyState ? i() : (o.bind(r, "DOMContentLoaded", n), o.bind(r, "readystatechange", n), o.bind(e, "load", n)), t
		}
		var r = e.document
			, a = [];
		t.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : e.docReady = o(e.eventie)
	}(window)
	, function (e) {
		function t(e, t) {
			return e[a](t)
		}

		function n(e) {
			if (!e.parentNode) {
				var t = document.createDocumentFragment();
				t.appendChild(e)
			}
		}

		function i(e, t) {
			n(e);
			for (var i = e.parentNode.querySelectorAll(t), o = 0, r = i.length; o < r; o++)
				if (i[o] === e) return !0;
			return !1
		}

		function o(e, i) {
			return n(e), t(e, i)
		}
		var r, a = function () {
			if (e.matches) return "matches";
			if (e.matchesSelector) return "matchesSelector";
			for (var t = ["webkit", "moz", "ms", "o"], n = 0, i = t.length; n < i; n++) {
				var o = t[n]
					, r = o + "MatchesSelector";
				if (e[r]) return r
			}
		}();
		if (a) {
			var s = document.createElement("div")
				, l = t(s, "div");
			r = l ? t : o
		}
		else r = i;
		"function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
			return r
		}) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
	}(Element.prototype)
	, function (e, t) {
		"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (n, i) {
			return t(e, n, i)
		}) : "object" == typeof exports ? module.exports = t(e, require("doc-ready"), require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.docReady, e.matchesSelector)
	}(window, function (e, t, n) {
		var i = {};
		i.extend = function (e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}, i.modulo = function (e, t) {
			return (e % t + t) % t
		};
		var o = Object.prototype.toString;
		i.isArray = function (e) {
			return "[object Array]" == o.call(e)
		}, i.makeArray = function (e) {
			var t = [];
			if (i.isArray(e)) t = e;
			else if (e && "number" == typeof e.length)
				for (var n = 0, o = e.length; n < o; n++) t.push(e[n]);
			else t.push(e);
			return t
		}, i.indexOf = Array.prototype.indexOf ? function (e, t) {
			return e.indexOf(t)
		} : function (e, t) {
			for (var n = 0, i = e.length; n < i; n++)
				if (e[n] === t) return n;
			return -1
		}, i.removeFrom = function (e, t) {
			var n = i.indexOf(e, t);
			n != -1 && e.splice(n, 1)
		}, i.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (e) {
			return e instanceof HTMLElement
		} : function (e) {
			return e && "object" == typeof e && 1 == e.nodeType && "string" == typeof e.nodeName
		}, i.setText = function () {
			function e(e, n) {
				t = t || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), e[t] = n
			}
			var t;
			return e
		}(), i.getParent = function (e, t) {
			for (; e != document.body;)
				if (e = e.parentNode, n(e, t)) return e
		}, i.getQueryElement = function (e) {
			return "string" == typeof e ? document.querySelector(e) : e
		}, i.handleEvent = function (e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, i.filterFindElements = function (e, t) {
			e = i.makeArray(e);
			for (var o = [], r = 0, a = e.length; r < a; r++) {
				var s = e[r];
				if (i.isElement(s))
					if (t) {
						n(s, t) && o.push(s);
						for (var l = s.querySelectorAll(t), u = 0, c = l.length; u < c; u++) o.push(l[u])
					}
					else o.push(s)
			}
			return o
		}, i.debounceMethod = function (e, t, n) {
			var i = e.prototype[t]
				, o = t + "Timeout";
			e.prototype[t] = function () {
				var e = this[o];
				e && clearTimeout(e);
				var t = arguments
					, r = this;
				this[o] = setTimeout(function () {
					i.apply(r, t), delete r[o]
				}, n || 100)
			}
		}, i.toDashed = function (e) {
			return e.replace(/(.)([A-Z])/g, function (e, t, n) {
				return t + "-" + n
			}).toLowerCase()
		};
		var r = e.console;
		return i.htmlInit = function (n, o) {
			t(function () {
				for (var t = i.toDashed(o), a = document.querySelectorAll(".js-" + t), s = "data-" + t + "-options", l = 0, u = a.length; l < u; l++) {
					var c, d = a[l]
						, p = d.getAttribute(s);
					try {
						c = p && JSON.parse(p)
					}
					catch (f) {
						r && r.error("Error parsing " + s + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + f);
						continue
					}
					var h = new n(d, c)
						, m = e.jQuery;
					m && m.data(d, o, h)
				}
			})
		}, i
	})
	, function (e, t) {
		"function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (n, i, o, r) {
			return t(e, n, i, o, r)
		}) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (e.Outlayer = {}, e.Outlayer.Item = t(e, e.EventEmitter, e.getSize, e.getStyleProperty, e.fizzyUIUtils))
	}(window, function (e, t, n, i, o) {
		function r(e) {
			for (var t in e) return !1;
			return t = null, !0
		}

		function a(e, t) {
			e && (this.element = e, this.layout = t, this.position = {
				x: 0
				, y: 0
			}, this._create())
		}

		function s(e) {
			return e.replace(/([A-Z])/g, function (e) {
				return "-" + e.toLowerCase()
			})
		}
		var l = e.getComputedStyle
			, u = l ? function (e) {
				return l(e, null)
			} : function (e) {
				return e.currentStyle
			}
			, c = i("transition")
			, d = i("transform")
			, p = c && d
			, f = !!i("perspective")
			, h = {
				WebkitTransition: "webkitTransitionEnd"
				, MozTransition: "transitionend"
				, OTransition: "otransitionend"
				, transition: "transitionend"
			}[c]
			, m = ["transform", "transition", "transitionDuration", "transitionProperty"]
			, v = function () {
				for (var e = {}, t = 0, n = m.length; t < n; t++) {
					var o = m[t]
						, r = i(o);
					r && r !== o && (e[o] = r)
				}
				return e
			}();
		o.extend(a.prototype, t.prototype), a.prototype._create = function () {
			this._transn = {
				ingProperties: {}
				, clean: {}
				, onEnd: {}
			}, this.css({
				position: "absolute"
			})
		}, a.prototype.handleEvent = function (e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, a.prototype.getSize = function () {
			this.size = n(this.element)
		}, a.prototype.css = function (e) {
			var t = this.element.style;
			for (var n in e) {
				var i = v[n] || n;
				t[i] = e[n]
			}
		}, a.prototype.getPosition = function () {
			var e = u(this.element)
				, t = this.layout.options
				, n = t.isOriginLeft
				, i = t.isOriginTop
				, o = e[n ? "left" : "right"]
				, r = e[i ? "top" : "bottom"]
				, a = parseInt(o, 10)
				, s = parseInt(r, 10)
				, l = this.layout.size;
			a = o.indexOf("%") != -1 ? a / 100 * l.width : a, s = r.indexOf("%") != -1 ? s / 100 * l.height : s, a = isNaN(a) ? 0 : a, s = isNaN(s) ? 0 : s, a -= n ? l.paddingLeft : l.paddingRight, s -= i ? l.paddingTop : l.paddingBottom, this.position.x = a, this.position.y = s
		}, a.prototype.layoutPosition = function () {
			var e = this.layout.size
				, t = this.layout.options
				, n = {}
				, i = t.isOriginLeft ? "paddingLeft" : "paddingRight"
				, o = t.isOriginLeft ? "left" : "right"
				, r = t.isOriginLeft ? "right" : "left"
				, a = this.position.x + e[i];
			n[o] = this.getXValue(a), n[r] = "";
			var s = t.isOriginTop ? "paddingTop" : "paddingBottom"
				, l = t.isOriginTop ? "top" : "bottom"
				, u = t.isOriginTop ? "bottom" : "top"
				, c = this.position.y + e[s];
			n[l] = this.getYValue(c), n[u] = "", this.css(n), this.emitEvent("layout", [this])
		}, a.prototype.getXValue = function (e) {
			var t = this.layout.options;
			return t.percentPosition && !t.isHorizontal ? e / this.layout.size.width * 100 + "%" : e + "px"
		}, a.prototype.getYValue = function (e) {
			var t = this.layout.options;
			return t.percentPosition && t.isHorizontal ? e / this.layout.size.height * 100 + "%" : e + "px"
		}, a.prototype._transitionTo = function (e, t) {
			this.getPosition();
			var n = this.position.x
				, i = this.position.y
				, o = parseInt(e, 10)
				, r = parseInt(t, 10)
				, a = o === this.position.x && r === this.position.y;
			if (this.setPosition(e, t), a && !this.isTransitioning) return void this.layoutPosition();
			var s = e - n
				, l = t - i
				, u = {};
			u.transform = this.getTranslate(s, l), this.transition({
				to: u
				, onTransitionEnd: {
					transform: this.layoutPosition
				}
				, isCleaning: !0
			})
		}, a.prototype.getTranslate = function (e, t) {
			var n = this.layout.options;
			return e = n.isOriginLeft ? e : -e, t = n.isOriginTop ? t : -t, e = this.getXValue(e), t = this.getYValue(t), f ? "translate3d(" + e + ", " + t + ", 0)" : "translate(" + e + ", " + t + ")"
		}, a.prototype.goTo = function (e, t) {
			this.setPosition(e, t), this.layoutPosition()
		}, a.prototype.moveTo = p ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (e, t) {
			this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
		}, a.prototype._nonTransition = function (e) {
			this.css(e.to), e.isCleaning && this._removeStyles(e.to);
			for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
		}, a.prototype._transition = function (e) {
			if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
			var t = this._transn;
			for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
			for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
			if (e.from) {
				this.css(e.from);
				var i = this.element.offsetHeight;
				i = null
			}
			this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
		};
		var g = "opacity," + s(v.transform || "transform");
		a.prototype.enableTransition = function () {
			this.isTransitioning || (this.css({
				transitionProperty: g
				, transitionDuration: this.layout.options.transitionDuration
			}), this.element.addEventListener(h, this, !1))
		}, a.prototype.transition = a.prototype[c ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (e) {
			this.ontransitionend(e)
		}, a.prototype.onotransitionend = function (e) {
			this.ontransitionend(e)
		};
		var y = {
			"-webkit-transform": "transform"
			, "-moz-transform": "transform"
			, "-o-transform": "transform"
		};
		a.prototype.ontransitionend = function (e) {
			if (e.target === this.element) {
				var t = this._transn
					, n = y[e.propertyName] || e.propertyName;
				if (delete t.ingProperties[n], r(t.ingProperties) && this.disableTransition(), n in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[n]), n in t.onEnd) {
					var i = t.onEnd[n];
					i.call(this), delete t.onEnd[n]
				}
				this.emitEvent("transitionEnd", [this])
			}
		}, a.prototype.disableTransition = function () {
			this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
		}, a.prototype._removeStyles = function (e) {
			var t = {};
			for (var n in e) t[n] = "";
			this.css(t)
		};
		var b = {
			transitionProperty: ""
			, transitionDuration: ""
		};
		return a.prototype.removeTransitionStyles = function () {
			this.css(b)
		}, a.prototype.removeElem = function () {
			this.element.parentNode.removeChild(this.element), this.css({
				display: ""
			}), this.emitEvent("remove", [this])
		}, a.prototype.remove = function () {
			if (!c || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
			var e = this;
			this.once("transitionEnd", function () {
				e.removeElem()
			}), this.hide()
		}, a.prototype.reveal = function () {
			delete this.isHidden, this.css({
				display: ""
			});
			var e = this.layout.options
				, t = {}
				, n = this.getHideRevealTransitionEndProperty("visibleStyle");
			t[n] = this.onRevealTransitionEnd, this.transition({
				from: e.hiddenStyle
				, to: e.visibleStyle
				, isCleaning: !0
				, onTransitionEnd: t
			})
		}, a.prototype.onRevealTransitionEnd = function () {
			this.isHidden || this.emitEvent("reveal")
		}, a.prototype.getHideRevealTransitionEndProperty = function (e) {
			var t = this.layout.options[e];
			if (t.opacity) return "opacity";
			for (var n in t) return n
		}, a.prototype.hide = function () {
			this.isHidden = !0, this.css({
				display: ""
			});
			var e = this.layout.options
				, t = {}
				, n = this.getHideRevealTransitionEndProperty("hiddenStyle");
			t[n] = this.onHideTransitionEnd, this.transition({
				from: e.visibleStyle
				, to: e.hiddenStyle
				, isCleaning: !0
				, onTransitionEnd: t
			})
		}, a.prototype.onHideTransitionEnd = function () {
			this.isHidden && (this.css({
				display: "none"
			}), this.emitEvent("hide"))
		}, a.prototype.destroy = function () {
			this.css({
				position: ""
				, left: ""
				, right: ""
				, top: ""
				, bottom: ""
				, transition: ""
				, transform: ""
			})
		}, a
	})
	, function (e, t) {
		"function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (n, i, o, r, a) {
			return t(e, n, i, o, r, a)
		}) : "object" == typeof exports ? module.exports = t(e, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.eventie, e.EventEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
	}(window, function (e, t, n, i, o, r) {
		function a(e, t) {
			var n = o.getQueryElement(e);
			if (!n) return void(s && s.error("Bad element for " + this.constructor.namespace + ": " + (n || e)));
			this.element = n, l && (this.$element = l(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(t);
			var i = ++c;
			this.element.outlayerGUID = i, d[i] = this, this._create(), this.options.isInitLayout && this.layout()
		}
		var s = e.console
			, l = e.jQuery
			, u = function () {}
			, c = 0
			, d = {};
		return a.namespace = "outlayer", a.Item = r, a.defaults = {
			containerStyle: {
				position: "relative"
			}
			, isInitLayout: !0
			, isOriginLeft: !0
			, isOriginTop: !0
			, isResizeBound: !0
			, isResizingContainer: !0
			, transitionDuration: "0.4s"
			, hiddenStyle: {
				opacity: 0
				, transform: "scale(0.001)"
			}
			, visibleStyle: {
				opacity: 1
				, transform: "scale(1)"
			}
		}, o.extend(a.prototype, n.prototype), a.prototype.option = function (e) {
			o.extend(this.options, e)
		}, a.prototype._create = function () {
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
		}, a.prototype.reloadItems = function () {
			this.items = this._itemize(this.element.children)
		}, a.prototype._itemize = function (e) {
			for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], o = 0, r = t.length; o < r; o++) {
				var a = t[o]
					, s = new n(a, this);
				i.push(s)
			}
			return i
		}, a.prototype._filterFindItemElements = function (e) {
			return o.filterFindElements(e, this.options.itemSelector)
		}, a.prototype.getItemElements = function () {
			for (var e = [], t = 0, n = this.items.length; t < n; t++) e.push(this.items[t].element);
			return e
		}, a.prototype.layout = function () {
			this._resetLayout(), this._manageStamps();
			var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			this.layoutItems(this.items, e), this._isLayoutInited = !0
		}, a.prototype._init = a.prototype.layout, a.prototype._resetLayout = function () {
			this.getSize()
		}, a.prototype.getSize = function () {
			this.size = i(this.element)
		}, a.prototype._getMeasurement = function (e, t) {
			var n, r = this.options[e];
			r ? ("string" == typeof r ? n = this.element.querySelector(r) : o.isElement(r) && (n = r), this[e] = n ? i(n)[t] : r) : this[e] = 0
		}, a.prototype.layoutItems = function (e, t) {
			e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
		}, a.prototype._getItemsForLayout = function (e) {
			for (var t = [], n = 0, i = e.length; n < i; n++) {
				var o = e[n];
				o.isIgnored || t.push(o)
			}
			return t
		}, a.prototype._layoutItems = function (e, t) {
			if (this._emitCompleteOnItems("layout", e), e && e.length) {
				for (var n = [], i = 0, o = e.length; i < o; i++) {
					var r = e[i]
						, a = this._getItemLayoutPosition(r);
					a.item = r, a.isInstant = t || r.isLayoutInstant, n.push(a)
				}
				this._processLayoutQueue(n)
			}
		}, a.prototype._getItemLayoutPosition = function () {
			return {
				x: 0
				, y: 0
			}
		}, a.prototype._processLayoutQueue = function (e) {
			for (var t = 0, n = e.length; t < n; t++) {
				var i = e[t];
				this._positionItem(i.item, i.x, i.y, i.isInstant)
			}
		}, a.prototype._positionItem = function (e, t, n, i) {
			i ? e.goTo(t, n) : e.moveTo(t, n)
		}, a.prototype._postLayout = function () {
			this.resizeContainer()
		}, a.prototype.resizeContainer = function () {
			if (this.options.isResizingContainer) {
				var e = this._getContainerSize();
				e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
			}
		}, a.prototype._getContainerSize = u, a.prototype._setContainerMeasure = function (e, t) {
			if (void 0 !== e) {
				var n = this.size;
				n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
			}
		}, a.prototype._emitCompleteOnItems = function (e, t) {
			function n() {
				o.dispatchEvent(e + "Complete", null, [t])
			}

			function i() {
				a++, a === r && n()
			}
			var o = this
				, r = t.length;
			if (!t || !r) return void n();
			for (var a = 0, s = 0, l = t.length; s < l; s++) {
				var u = t[s];
				u.once(e, i)
			}
		}, a.prototype.dispatchEvent = function (e, t, n) {
			var i = t ? [t].concat(n) : n;
			if (this.emitEvent(e, i), l)
				if (this.$element = this.$element || l(this.element), t) {
					var o = l.Event(t);
					o.type = e, this.$element.trigger(o, n)
				}
				else this.$element.trigger(e, n)
		}, a.prototype.ignore = function (e) {
			var t = this.getItem(e);
			t && (t.isIgnored = !0)
		}, a.prototype.unignore = function (e) {
			var t = this.getItem(e);
			t && delete t.isIgnored
		}, a.prototype.stamp = function (e) {
			if (e = this._find(e)) {
				this.stamps = this.stamps.concat(e);
				for (var t = 0, n = e.length; t < n; t++) {
					var i = e[t];
					this.ignore(i)
				}
			}
		}, a.prototype.unstamp = function (e) {
			if (e = this._find(e))
				for (var t = 0, n = e.length; t < n; t++) {
					var i = e[t];
					o.removeFrom(this.stamps, i), this.unignore(i)
				}
		}, a.prototype._find = function (e) {
			if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = o.makeArray(e)
		}, a.prototype._manageStamps = function () {
			if (this.stamps && this.stamps.length) {
				this._getBoundingRect();
				for (var e = 0, t = this.stamps.length; e < t; e++) {
					var n = this.stamps[e];
					this._manageStamp(n)
				}
			}
		}, a.prototype._getBoundingRect = function () {
			var e = this.element.getBoundingClientRect()
				, t = this.size;
			this._boundingRect = {
				left: e.left + t.paddingLeft + t.borderLeftWidth
				, top: e.top + t.paddingTop + t.borderTopWidth
				, right: e.right - (t.paddingRight + t.borderRightWidth)
				, bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
			}
		}, a.prototype._manageStamp = u, a.prototype._getElementOffset = function (e) {
			var t = e.getBoundingClientRect()
				, n = this._boundingRect
				, o = i(e)
				, r = {
					left: t.left - n.left - o.marginLeft
					, top: t.top - n.top - o.marginTop
					, right: n.right - t.right - o.marginRight
					, bottom: n.bottom - t.bottom - o.marginBottom
				};
			return r
		}, a.prototype.handleEvent = function (e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, a.prototype.bindResize = function () {
			this.isResizeBound || (t.bind(e, "resize", this), this.isResizeBound = !0)
		}, a.prototype.unbindResize = function () {
			this.isResizeBound && t.unbind(e, "resize", this), this.isResizeBound = !1
		}, a.prototype.onresize = function () {
			function e() {
				t.resize(), delete t.resizeTimeout
			}
			this.resizeTimeout && clearTimeout(this.resizeTimeout);
			var t = this;
			this.resizeTimeout = setTimeout(e, 100)
		}, a.prototype.resize = function () {
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, a.prototype.needsResizeLayout = function () {
			var e = i(this.element)
				, t = this.size && e;
			return t && e.innerWidth !== this.size.innerWidth
		}, a.prototype.addItems = function (e) {
			var t = this._itemize(e);
			return t.length && (this.items = this.items.concat(t)), t
		}, a.prototype.appended = function (e) {
			var t = this.addItems(e);
			t.length && (this.layoutItems(t, !0), this.reveal(t))
		}, a.prototype.prepended = function (e) {
			var t = this._itemize(e);
			if (t.length) {
				var n = this.items.slice(0);
				this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
			}
		}, a.prototype.reveal = function (e) {
			this._emitCompleteOnItems("reveal", e);
			for (var t = e && e.length, n = 0; t && n < t; n++) {
				var i = e[n];
				i.reveal()
			}
		}, a.prototype.hide = function (e) {
			this._emitCompleteOnItems("hide", e);
			for (var t = e && e.length, n = 0; t && n < t; n++) {
				var i = e[n];
				i.hide()
			}
		}, a.prototype.revealItemElements = function (e) {
			var t = this.getItems(e);
			this.reveal(t)
		}, a.prototype.hideItemElements = function (e) {
			var t = this.getItems(e);
			this.hide(t)
		}, a.prototype.getItem = function (e) {
			for (var t = 0, n = this.items.length; t < n; t++) {
				var i = this.items[t];
				if (i.element === e) return i
			}
		}, a.prototype.getItems = function (e) {
			e = o.makeArray(e);
			for (var t = [], n = 0, i = e.length; n < i; n++) {
				var r = e[n]
					, a = this.getItem(r);
				a && t.push(a)
			}
			return t
		}, a.prototype.remove = function (e) {
			var t = this.getItems(e);
			if (this._emitCompleteOnItems("remove", t), t && t.length)
				for (var n = 0, i = t.length; n < i; n++) {
					var r = t[n];
					r.remove(), o.removeFrom(this.items, r)
				}
		}, a.prototype.destroy = function () {
			var e = this.element.style;
			e.height = "", e.position = "", e.width = "";
			for (var t = 0, n = this.items.length; t < n; t++) {
				var i = this.items[t];
				i.destroy()
			}
			this.unbindResize();
			var o = this.element.outlayerGUID;
			delete d[o], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
		}, a.data = function (e) {
			e = o.getQueryElement(e);
			var t = e && e.outlayerGUID;
			return t && d[t]
		}, a.create = function (e, t) {
			function n() {
				a.apply(this, arguments)
			}
			return Object.create ? n.prototype = Object.create(a.prototype) : o.extend(n.prototype, a.prototype), n.prototype.constructor = n, n.defaults = o.extend({}, a.defaults), o.extend(n.defaults, t), n.prototype.settings = {}, n.namespace = e, n.data = a.data, n.Item = function () {
				r.apply(this, arguments)
			}, n.Item.prototype = new r, o.htmlInit(n, e), l && l.bridget && l.bridget(e, n), n
		}, a.Item = r, a
	})
	, function (e, t) {
		"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], t) : "object" == typeof exports ? module.exports = t(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : e.Masonry = t(e.Outlayer, e.getSize, e.fizzyUIUtils)
	}(window, function (e, t, n) {
		var i = e.create("masonry");
		return i.prototype._resetLayout = function () {
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
			var e = this.cols;
			for (this.colYs = []; e--;) this.colYs.push(0);
			this.maxY = 0
		}, i.prototype.measureColumns = function () {
			if (this.getContainerWidth(), !this.columnWidth) {
				var e = this.items[0]
					, n = e && e.element;
				this.columnWidth = n && t(n).outerWidth || this.containerWidth
			}
			var i = this.columnWidth += this.gutter
				, o = this.containerWidth + this.gutter
				, r = o / i
				, a = i - o % i
				, s = a && a < 1 ? "round" : "floor";
			r = Math[s](r), this.cols = Math.max(r, 1)
		}, i.prototype.getContainerWidth = function () {
			var e = this.options.isFitWidth ? this.element.parentNode : this.element
				, n = t(e);
			this.containerWidth = n && n.innerWidth
		}, i.prototype._getItemLayoutPosition = function (e) {
			e.getSize();
			var t = e.size.outerWidth % this.columnWidth
				, i = t && t < 1 ? "round" : "ceil"
				, o = Math[i](e.size.outerWidth / this.columnWidth);
			o = Math.min(o, this.cols);
			for (var r = this._getColGroup(o), a = Math.min.apply(Math, r), s = n.indexOf(r, a), l = {
					x: this.columnWidth * s
					, y: a
				}, u = a + e.size.outerHeight, c = this.cols + 1 - r.length, d = 0; d < c; d++) this.colYs[s + d] = u;
			return l
		}, i.prototype._getColGroup = function (e) {
			if (e < 2) return this.colYs;
			for (var t = [], n = this.cols + 1 - e, i = 0; i < n; i++) {
				var o = this.colYs.slice(i, i + e);
				t[i] = Math.max.apply(Math, o)
			}
			return t
		}, i.prototype._manageStamp = function (e) {
			var n = t(e)
				, i = this._getElementOffset(e)
				, o = this.options.isOriginLeft ? i.left : i.right
				, r = o + n.outerWidth
				, a = Math.floor(o / this.columnWidth);
			a = Math.max(0, a);
			var s = Math.floor(r / this.columnWidth);
			s -= r % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
			for (var l = (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight, u = a; u <= s; u++) this.colYs[u] = Math.max(l, this.colYs[u])
		}, i.prototype._getContainerSize = function () {
			this.maxY = Math.max.apply(Math, this.colYs);
			var e = {
				height: this.maxY
			};
			return this.options.isFitWidth && (e.width = this._getContainerFitWidth()), e
		}, i.prototype._getContainerFitWidth = function () {
			for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
			return (this.cols - e) * this.columnWidth - this.gutter
		}, i.prototype.needsResizeLayout = function () {
			var e = this.containerWidth;
			return this.getContainerWidth(), e !== this.containerWidth
		}, i
	})
	, function (e) {
		e.fn.galleryLayout = function (n) {
			if ("string" == typeof n) {
				var i = n;
				return "function" != typeof t[i] && e.error("Unknown action " + i), t[i].apply(this, Array.prototype.slice(arguments, 1))
			}
			var o = e.extend({}, e.fn.galleryLayout.defaults, n);
			t.init.apply(this, [o])
		}, e.fn.destroy = function () {
			t.destroy.apply(this)
		}, e.fn.galleryLayout.defaults = {
			type: "vertical"
			, className: "wnd-vertical"
			, item: ".gallery-photo"
			, sizer: ".gallery-sizer"
			, gutter: ".gallery-gutter"
			, onLayout: function (e) {}
			, onResize: function (e) {}
			, resizer: {
				element: "wnd-resize"
				, smaller: "wnd-resize-v"
				, bigger: "wnd-resize-h"
			}
			, updateTimeout: 200
			, forcedTimeout: 500
			, isCms: !1
		};
		var t = {
				init: function (t) {
					"undefined" == typeof n[t.type] && e.error('Unsupported gallery layout type "' + t.type + '"');
					var i = n[t.type];
					return i.isReady() || e.error('Gallery layout "' + t.type + '" cannot be intialized.'), i.setup.called || (i.setup.called = !0, i.setup.apply(i, [t])), this.each(function () {
						var n = e(this);
						if ("undefined" == typeof n.data("galleryLayout")) {
							if (n.data("galleryLayout", t), n.addClass(t.className), t.isCms) {
								var o = n.closest('[data-wnd_mvc_type="wnd.pc.PhotoGalleryBlock"]');
								n.data("galleryBlock", o), o.on("wnd-redraw", function () {
									n.galleryLayout("update")
								});
								var r = ['[data-wnd_mvc_type="wnd.pc.Section"]', '[data-wnd_mvc_type="wnd.pc.HeaderSection"]', '[data-wnd_mvc_type="wnd.pc.FooterSection"]', '[data-wnd_mvc_type="wnd.pc.MasterSection"]', '[data-wnd_mvc_type="wnd.pc.PageZone"]', '[data-wnd_mvc_type="wnd.pc.MicroTemplateCell"]']
									, a = n.closest(r.join(","));
								n.data("resizeBlock", a), a.on("wnd-redraw", function () {
									setTimeout(n.galleryLayout.bind(n, "update"), t.updateTimeout)
								})
							}
							i.init.apply(i, [n, t])
						}
					})
				}
				, destroy: function () {
					return this.each(function () {
						var t = e(this)
							, i = t.data("galleryLayout");
						if (i) {
							var o = n[i.type];
							if (i.isCms) {
								var r = t.data("galleryBlock");
								r.off("wnd-redraw");
								var a = t.data("resizeBlock");
								a.off("wnd-redraw")
							}
							o.destroy.apply(o, [t, i]), t.removeData(["galleryLayout", "galleryBlock", "updateTimeout", "resizeBlock"]), t.removeClass(i.className)
						}
					})
				}
				, update: function () {
					return this.each(function () {
						var t = e(this)
							, i = t.data("galleryLayout");
						if (i) {
							var o = n[i.type]
								, r = t.data("updateTimeout");
							clearTimeout(r), r = setTimeout(function () {
								o.update.apply(o, [t, i])
							}, i.updateTimeout), t.data("updateTimeout", r)
						}
					})
				}
			}
			, n = {
				vertical: {
					isReady: function () {
						return "function" == typeof e.fn.masonry
					}
					, init: function (t, n) {
						var i = null
							, o = this
							, r = !1;
						t.data("galleryBlock");
						t.on("layoutComplete", function (e, r) {
							o.trimBottom_.call(o, t, r, n), null === i || i !== r.length ? (i = r.length, n.onLayout.apply(this, arguments)) : n.onResize.apply(this, arguments)
						}).on("postLayout", function () {
							if (null !== o.containerHeight_ && t.height(o.containerHeight_), r || (r = !0, setTimeout(function () {
									t.galleryLayout("update")
								}, n.forcedTimeout)), n.isCms) {
								var e = t.data("galleryBlock");
								if (e && "undefined" != typeof e[0]) {
									var i = document.createEvent("Event");
									i.initEvent("wnd-redraw-done", !1, !0), e[0].dispatchEvent(i)
								}
							}
						}).masonry({
							itemSelector: n.item
							, percentPosition: !0
							, columnWidth: n.sizer
							, gutter: n.gutter
							, transitionDuration: 0
						}), e(window).on("resize orientationchange", function () {
							t.galleryLayout("update")
						})
					}
					, destroy: function (e, t) {
						e.off("layoutComplete").off("postLayout").masonry("destroy"), this.resetTrim_(e.find(t.item), t)
					}
					, update: function (t, n) {
						var i = t.masonry("getItemElements");
						e.each(i, function (t, i) {
							this.resetTrim_(e(i), n)
						}.bind(this)), t.masonry("reloadItems"), t.masonry("layout")
					}
					, setup: function (e) {
						var t = Masonry.prototype._postLayout;
						Masonry.prototype._postLayout = function () {
							t.apply(this, arguments), this.dispatchEvent("postLayout", null, [this])
						};
						var n = Masonry.Item.prototype.getSize;
						Masonry.Item.prototype.getSize = function () {
							var e;
							if (0 == this.element.offsetHeight) {
								var t = "IMG" === this.element.tagName ? this.element : this.element.getElementsByTagName("img")[0];
								if (t) {
									var i = parseInt(t.getAttribute("width"))
										, o = parseInt(t.getAttribute("height"))
										, r = this.element.offsetWidth / i;
									e = parseInt(o * r), this.element.offsetHeight = e
								}
							}
							if (n.apply(this, arguments), 0 == this.size.height && e > 0) {
								var a = this.size.paddingTop + this.size.paddingBottom
									, s = this.size.borderTopWidth + this.size.borderBottomWidth
									, l = this.size.marginTop + this.size.marginBottom
									, u = this.size.isBorderBox && this.size.width == this.size.innerWidth;
								this.size.innerHeight = e, this.size.height = e + (u ? 0 : s + a), this.size.outerHeight = e + a + s + l
							}
						}
					}
					, containerHeight_: null
					, trimBottom_: function (t, n, i) {
						var o = []
							, r = 0
							, a = [];
						this.containerHeight_ = null;
						for (var s = n.length - 1; s >= 0; s--) {
							var l = n[s];
							this.resetTrim_(e(l.element), i), -1 === e.inArray(l.position.x, o) && (o.push(l.position.x), a.push(l), r = Math.max(r, l.position.y + l.size.height), null === this.containerHeight_ && (this.containerHeight_ = r))
						}
						o.length < 2 || (e.each(a, function (t, n) {
							var o = r - n.position.y;
							e(n.element).addClass(i.resizer.element).addClass(i.resizer.bigger).height(o), n.getSize()
						}), this.containerHeight_ = r)
					}
					, resetTrim_: function (e, t) {
						e.removeClass([t.resizer.element, t.resizer.bigger, t.resizer.smaller].join(" ")).css("height", "")
					}
				}
				, horizontal: {
					isReady: function () {
						return "function" == typeof e.fn.justifiedGallery
					}
					, init: function (e, t) {
						var n = this.getHeightFromSizer_(e, t.sizer)
							, i = parseInt(t.gutter);
						i = isNaN(i) ? 0 : i, e.on("jg.complete", t.onLayout).on("jg.resize", t.onResize).justifiedGallery({
							selector: t.item
							, captions: !1
							, rowHeight: n
							, margins: i
						})
					}
					, destroy: function (e, t) {
						e.off("jg.complete").off("jg.resize").justifiedGallery("destroy")
					}
					, update: function (e, t) {
						e.justifiedGallery("norewind")
					}
					, setup: function (e) {}
					, getHeightFromSizer_: function (e, t) {
						if (!isNaN(parseInt(t))) return parseInt(t);
						var n = e.find(t).first();
						return n.height()
					}
				}
			}
	}(jQuery)
	, function (e) {
		function t(t) {
			e(".buffer-photo").off(t.touchEvents).on(t.touchEvents, function (t) {
				if (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), a) return !1;
				a = !0, setTimeout(function () {
					a = !1
				}, 500);
				var n = e(this).parent().parent().parent()
					, i = n.find(".gallery-photo");
				o(i, e(this))
			}), e(".photo-next").off(t.touchEvents).on(t.touchEvents, function () {
				if (a) return !1;
				a = !0, setTimeout(function () {
					a = !1
				}, 500);
				var t = e(this).parent()
					, n = t.parent()
					, r = n.find(".gallery-buffer").width()
					, s = Math.abs(parseInt(n.find("ul").css("margin-left")))
					, l = n.find(".buffer-photo")
					, u = l.length
					, c = l.filter(".active")
					, d = c.next(".buffer-photo");
				c.index() == u - 1 && (d = l.eq(0)), o(t, d);
				var p = (d.index() + 1) * d.outerWidth(!0) - s;
				p > r && i(n, "right"), p < 0 && n.find("ul").css("margin-left", 0)
			}), e(".photo-prev").off(t.touchEvents).on(t.touchEvents, function () {
				if (a) return !1;
				a = !0, setTimeout(function () {
					a = !1
				}, 500);
				var t = e(this).parent()
					, n = t.parent()
					, r = n.find(".buffer-photo")
					, s = r.length
					, l = r.filter(".active")
					, u = l.prev(".buffer-photo")
					, c = n.find(".gallery-buffer").width()
					, d = Math.abs(parseInt(n.find("ul").css("margin-left")))
					, p = n.find(".buffer-photo").first().outerWidth(!0)
					, f = Math.floor(c / p) * p
					, h = Math.floor(c / p);
				0 == l.index() && (u = r.eq(s - 1)), o(t, u);
				var m = u.index() * u.outerWidth(!0) - d;
				m > c && (d = Math.floor(s / h) * f, n.find("ul").css("margin-left", "-" + d + "px")), m <= 0 && i(n, "left")
			}), e(".buffer-next").off(t.touchEvents).on(t.touchEvents, function () {
				return !a && (a = !0, setTimeout(function () {
					a = !1
				}, 500), void i(e(this).parent().parent(), "right"))
			}), e(".buffer-prev").off(t.touchEvents).on(t.touchEvents, function () {
				return !a && (a = !0, setTimeout(function () {
					a = !1
				}, 500), void i(e(this).parent().parent(), "left"))
			})
		}

		function n(t) {
			e(".play").off(t.touchEvents).on(t.touchEvents, function () {
				if (a) return !1;
				if (a = !0, setTimeout(function () {
						a = !1
					}, 500), !e(this).hasClass("timer")) {
					var i = e(this).parent().find(".photo-next");
					i.trigger("click"), e(this).removeClass("play").addClass("stop");
					var o = setInterval(function () {
						i.trigger("click")
					}, t.timeout);
					e(this).addClass("timer").addClass("timer-" + o), n(t)
				}
			}), e(".stop").off(t.touchEvents).on(t.touchEvents, function () {
				if (a) return !1;
				a = !0, setTimeout(function () {
					a = !1
				}, 500);
				var i = e(this).attr("class");
				i = i.replace("photo-show", ""), i = i.replace("stop", ""), i = i.replace("timer", ""), i = e.trim(i);
				var o = i;
				i = i.replace("timer-", ""), clearTimeout(i), e(this).removeClass("stop timer " + o).addClass("play"), n(t)
			})
		}

		function i(e, t) {
			if (s) return !1;
			s = !0, setTimeout(function () {
				s = !1
			}, 1e3);
			var n = e.find("ul")
				, i = n.width()
				, o = parseInt(n.css("margin-left"))
				, r = e.find(".gallery-buffer").width()
				, a = e.find(".buffer-photo").first().outerWidth(!0)
				, l = Math.floor(r / a) * a;
			if ("right" == t && (l += Math.abs(o), l < i)) {
				var u = l + o - i;
				u > 0 && (l -= u), n.css("margin-left", "-" + l + "px")
			}
			"left" == t && (l = o + l, l > 0 && (l = 0), n.css("margin-left", l + "px"))
		}

		function o(e, t) {
			t.parent().find("li").removeClass("active"), t.addClass("active");
			var n = t.find("img")
				, i = n.attr("src")
				, o = n.width()
				, r = n.height()
				, a = o / r
				, s = e.outerWidth()
				, l = e.outerHeight()
				, u = s / l
				, c = "";
			c = o > r ? s : l, c > 200 && c < 450 && (i = i.replace("/200/", "/450/").replace("/118/", "/450/")), c > 450 && c < 700 && (i = i.replace("/200/", "/700/")), c > 700 && (i = i.replace("/200/", "/")), e.removeClass("cover").css("background-image", "url(" + i + ")");
			var d = Math.abs(u - a);
			d < .31 && e.addClass("cover");
			var p = n.attr("alt")
				, f = e.find(".photo-title");
			f.text(p)
		}

		function r(t) {
			t.each(function () {
				var t = e(this).find(".gallery-photo")
					, n = e(this).find(".buffer-photo")
					, i = e(this).find(".gallery-buffer > ul")
					, r = n.first().outerWidth(!0) * n.length;
				i.css("width", r);
				var a = n.first();
				o(t, a)
			})
		}
		var a = !1
			, s = !1;
		e.fn.slideShow = function (i) {
			var o = e.extend({}, e.fn.slideShow.defaults, i);
			e(this).hasClass("gallery-slideshow") && (r(this), isCMS() || (t(o), n(o)))
		}, e.fn.slideShow.defaults = {
			touchEvents: "click"
			, timeout: "5000"
		}
	}(jQuery);
var is_cms = isCMS()
	, support3D = !msieversion() && !issafari() && !isfirefox()
	, force2D = "2D" == $("body").attr("data-parallax");
$(document).ready(function () {
	deviceDetect("touched") || deviceDetect("wnd-frontend-test") || deviceDetect("mobile-devices") ? $(".bgatt-parallax").removeClass("bgatt-parallax").addClass("bgatt-scroll") : ($(window).on("resize orientationchange", function () {
		backgroundResize()
	}), $(window).scroll(function () {
		window.requestAnimationFrame(parallaxPosition)
	}), backgroundResize()), isCMS() && $(document).on("wnd-redraw", "body", function () {
		setTimeout(function () {
			$(".bgatt-scroll").removeClass("parallax"), $(".bgatt-fixed").removeClass("parallax"), deviceDetect("touched") || ($(window).on("resize orientationchange", function () {
				backgroundResize()
			}), backgroundResize())
		}, 200)
	})
}), $(document).ready(function () {
	borderControll(), isCMS() && $(document).on("wnd-redraw", "body", function () {
		"sidebar" == $("body").attr("data-layout-type") ? setTimeout(function () {
			borderControll()
		}, 50) : borderControll()
	})
}), $(document).ready(function () {
	$("body").hasClass("blogpost") && (blogSectionControl(), $(document).on("wnd-redraw", "body", function () {
		blogSectionControl()
	}))
}), ! function (e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function () {
	"use strict";
	var e = function (e, t, n, i) {
		var o = {
			features: null
			, bind: function (e, t, n, i) {
				var o = (i ? "remove" : "add") + "EventListener";
				t = t.split(" ");
				for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1)
			}
			, isArray: function (e) {
				return e instanceof Array
			}
			, createEl: function (e, t) {
				var n = document.createElement(t || "div");
				return e && (n.className = e), n
			}
			, getScrollY: function () {
				var e = window.pageYOffset;
				return void 0 !== e ? e : document.documentElement.scrollTop
			}
			, unbind: function (e, t, n) {
				o.bind(e, t, n, !0)
			}
			, removeClass: function (e, t) {
				var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
				e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
			}
			, addClass: function (e, t) {
				o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
			}
			, hasClass: function (e, t) {
				return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
			}
			, getChildByClass: function (e, t) {
				for (var n = e.firstChild; n;) {
					if (o.hasClass(n, t)) return n;
					n = n.nextSibling
				}
			}
			, arraySearch: function (e, t, n) {
				for (var i = e.length; i--;)
					if (e[i][n] === t) return i;
				return -1
			}
			, extend: function (e, t, n) {
				for (var i in t)
					if (t.hasOwnProperty(i)) {
						if (n && e.hasOwnProperty(i)) continue;
						e[i] = t[i]
					}
			}
			, easing: {
				sine: {
					out: function (e) {
						return Math.sin(e * (Math.PI / 2))
					}
					, inOut: function (e) {
						return -(Math.cos(Math.PI * e) - 1) / 2
					}
				}
				, cubic: {
					out: function (e) {
						return --e * e * e + 1
					}
				}
			}
			, detectFeatures: function () {
				if (o.features) return o.features;
				var e = o.createEl()
					, t = e.style
					, n = ""
					, i = {};
				if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
					var r = navigator.userAgent;
					if (/iP(hone|od)/.test(navigator.platform)) {
						var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
						a && a.length > 0 && (a = parseInt(a[1], 10), a >= 1 && 8 > a && (i.isOldIOSPhone = !0))
					}
					var s = r.match(/Android\s([0-9\.]*)/)
						, l = s ? s[1] : 0;
					l = parseFloat(l), l >= 1 && (4.4 > l && (i.isOldAndroid = !0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(r)
				}
				for (var u, c, d = ["transform", "perspective", "animationName"], p = ["", "webkit", "Moz", "ms", "O"], f = 0; 4 > f; f++) {
					n = p[f];
					for (var h = 0; 3 > h; h++) u = d[h], c = n + (n ? u.charAt(0).toUpperCase() + u.slice(1) : u), !i[u] && c in t && (i[u] = c);
					n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
				}
				if (!i.raf) {
					var m = 0;
					i.raf = function (e) {
						var t = (new Date).getTime()
							, n = Math.max(0, 16 - (t - m))
							, i = window.setTimeout(function () {
								e(t + n)
							}, n);
						return m = t + n, i
					}, i.caf = function (e) {
						clearTimeout(e)
					}
				}
				return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
			}
		};
		o.detectFeatures(), o.features.oldIE && (o.bind = function (e, t, n, i) {
			t = t.split(" ");
			for (var o, r = (i ? "detach" : "attach") + "Event", a = function () {
					n.handleEvent.call(n)
				}, s = 0; s < t.length; s++)
				if (o = t[s])
					if ("object" == typeof n && n.handleEvent) {
						if (i) {
							if (!n["oldIE" + o]) return !1
						}
						else n["oldIE" + o] = a;
						e[r]("on" + o, n["oldIE" + o])
					}
					else e[r]("on" + o, n)
		});
		var r = this
			, a = 25
			, s = 3
			, l = {
				allowPanToNext: !0
				, spacing: .12
				, bgOpacity: 1
				, mouseUsed: !1
				, loop: !0
				, pinchToClose: !0
				, closeOnScroll: !0
				, closeOnVerticalDrag: !0
				, verticalDragRange: .75
				, hideAnimationDuration: 333
				, showAnimationDuration: 333
				, showHideOpacity: !1
				, focus: !0
				, escKey: !0
				, arrowKeys: !0
				, mainScrollEndFriction: .35
				, panEndFriction: .35
				, isClickableElement: function (e) {
					return "A" === e.tagName
				}
				, getDoubleTapZoom: function (e, t) {
					return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
				}
				, maxSpreadZoom: 1.33
				, modal: !0
				, scaleMode: "fit"
			};
		o.extend(l, i);
		var u, c, d, p, f, h, m, v, g, y, b, w, x, C, T, E, S, k, _, $, I, D, L, A, M, N, z, O, P, R, H, j, F, W, B, q, U, Z, X, Y, V, G, K, Q, J, ee, te, ne, ie, oe, re, ae, se, le, ue, ce, de = function () {
				return {
					x: 0
					, y: 0
				}
			}
			, pe = de()
			, fe = de()
			, he = de()
			, me = {}
			, ve = 0
			, ge = {}
			, ye = de()
			, be = 0
			, we = !0
			, xe = []
			, Ce = {}
			, Te = !1
			, Ee = function (e, t) {
				o.extend(r, t.publicMethods), xe.push(e)
			}
			, Se = function (e) {
				var t = Jt();
				return e > t - 1 ? e - t : 0 > e ? t + e : e
			}
			, ke = {}
			, _e = function (e, t) {
				return ke[e] || (ke[e] = []), ke[e].push(t)
			}
			, $e = function (e) {
				var t = ke[e];
				if (t) {
					var n = Array.prototype.slice.call(arguments);
					n.shift();
					for (var i = 0; i < t.length; i++) t[i].apply(r, n)
				}
			}
			, Ie = function () {
				return (new Date).getTime()
			}
			, De = function (e) {
				le = e, r.bg.style.opacity = e * l.bgOpacity
			}
			, Le = function (e, t, n, i, o) {
				(!Te || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio), e[D] = w + t + "px, " + n + "px" + x + " scale(" + i + ")"
			}
			, Ae = function (e) {
				ie && (e && (y > r.currItem.fitRatio ? Te || (pn(r.currItem, !1, !0), Te = !0) : Te && (pn(r.currItem), Te = !1)), Le(ie, he.x, he.y, y))
			}
			, Me = function (e) {
				e.container && Le(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
			}
			, Ne = function (e, t) {
				t[D] = w + e + "px, 0px" + x
			}
			, ze = function (e, t) {
				if (!l.loop && t) {
					var n = p + (ye.x * ve - e) / ye.x
						, i = Math.round(e - yt.x);
					(0 > n && i > 0 || n >= Jt() - 1 && 0 > i) && (e = yt.x + i * l.mainScrollEndFriction)
				}
				yt.x = e, Ne(e, f)
			}
			, Oe = function (e, t) {
				var n = bt[e] - ge[e];
				return fe[e] + pe[e] + n - n * (t / b)
			}
			, Pe = function (e, t) {
				e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
			}
			, Re = function (e) {
				e.x = Math.round(e.x), e.y = Math.round(e.y)
			}
			, He = null
			, je = function () {
				He && (o.unbind(document, "mousemove", je), o.addClass(e, "pswp--has_mouse"), l.mouseUsed = !0, $e("mouseUsed")), He = setTimeout(function () {
					He = null
				}, 100)
			}
			, Fe = function () {
				o.bind(document, "keydown", r), H.transform && o.bind(r.scrollWrap, "click", r), l.mouseUsed || o.bind(document, "mousemove", je), o.bind(window, "resize scroll", r), $e("bindEvents")
			}
			, We = function () {
				o.unbind(window, "resize", r), o.unbind(window, "scroll", g.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", je), H.transform && o.unbind(r.scrollWrap, "click", r), Z && o.unbind(window, m, r), $e("unbindEvents")
			}
			, Be = function (e, t) {
				var n = ln(r.currItem, me, e);
				return t && (ne = n), n
			}
			, qe = function (e) {
				return e || (e = r.currItem), e.initialZoomLevel
			}
			, Ue = function (e) {
				return e || (e = r.currItem), e.w > 0 ? l.maxSpreadZoom : 1
			}
			, Ze = function (e, t, n, i) {
				return i === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Oe(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
			}
			, Xe = function () {
				if (D) {
					var t = H.perspective && !A;
					return w = "translate" + (t ? "3d(" : "("), void(x = H.perspective ? ", 0px)" : ")")
				}
				D = "left", o.addClass(e, "pswp--ie"), Ne = function (e, t) {
					t.left = e + "px"
				}, Me = function (e) {
					var t = e.fitRatio > 1 ? 1 : e.fitRatio
						, n = e.container.style
						, i = t * e.w
						, o = t * e.h;
					n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
				}, Ae = function () {
					if (ie) {
						var e = ie
							, t = r.currItem
							, n = t.fitRatio > 1 ? 1 : t.fitRatio
							, i = n * t.w
							, o = n * t.h;
						e.width = i + "px", e.height = o + "px", e.left = he.x + "px", e.top = he.y + "px"
					}
				}
			}
			, Ye = function (e) {
				var t = "";
				l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
			}
			, Ve = function (e) {
				e && (V || Y || oe || q) && (e.preventDefault(), e.stopPropagation())
			}
			, Ge = function () {
				r.setScrollOffset(0, o.getScrollY())
			}
			, Ke = {}
			, Qe = 0
			, Je = function (e) {
				Ke[e] && (Ke[e].raf && N(Ke[e].raf), Qe--, delete Ke[e])
			}
			, et = function (e) {
				Ke[e] && Je(e), Ke[e] || (Qe++, Ke[e] = {})
			}
			, tt = function () {
				for (var e in Ke) Ke.hasOwnProperty(e) && Je(e)
			}
			, nt = function (e, t, n, i, o, r, a) {
				var s, l = Ie();
				et(e);
				var u = function () {
					if (Ke[e]) {
						if (s = Ie() - l, s >= i) return Je(e), r(n), void(a && a());
						r((n - t) * o(s / i) + t), Ke[e].raf = M(u)
					}
				};
				u()
			}
			, it = {
				shout: $e
				, listen: _e
				, viewportSize: me
				, options: l
				, isMainScrollAnimating: function () {
					return oe
				}
				, getZoomLevel: function () {
					return y
				}
				, getCurrentIndex: function () {
					return p
				}
				, isDragging: function () {
					return Z
				}
				, isZooming: function () {
					return J
				}
				, setScrollOffset: function (e, t) {
					ge.x = e, R = ge.y = t, $e("updateScrollOffset", ge)
				}
				, applyZoomPan: function (e, t, n, i) {
					he.x = t, he.y = n, y = e, Ae(i)
				}
				, init: function () {
					if (!u && !c) {
						var n;
						r.framework = o, r.template = e, r.bg = o.getChildByClass(e, "pswp__bg"), z = e.className, u = !0, H = o.detectFeatures(), M = H.raf, N = H.caf, D = H.transform, P = H.oldIE, r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), f = r.container.style, r.itemHolders = E = [{
							el: r.container.children[0]
							, wrap: 0
							, index: -1
						}, {
							el: r.container.children[1]
							, wrap: 0
							, index: -1
						}, {
							el: r.container.children[2]
							, wrap: 0
							, index: -1
						}], E[0].el.style.display = E[2].el.style.display = "none", Xe(), g = {
							resize: r.updateSize
							, scroll: Ge
							, keydown: Ye
							, click: Ve
						};
						var i = H.isOldIOSPhone || H.isOldAndroid || H.isMobileOpera;
						for (H.animationName && H.transform && !i || (l.showAnimationDuration = l.hideAnimationDuration = 0), n = 0; n < xe.length; n++) r["init" + xe[n]]();
						if (t) {
							var a = r.ui = new t(r, o);
							a.init()
						}
						$e("firstUpdate"), p = p || l.index || 0, (isNaN(p) || 0 > p || p >= Jt()) && (p = 0), r.currItem = Qt(p), (H.isOldIOSPhone || H.isOldAndroid) && (we = !1), e.setAttribute("aria-hidden", "false"), l.modal && (we ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === R && ($e("initialLayout"), R = O = o.getScrollY());
						var d = "pswp--open ";
						for (l.mainClass && (d += l.mainClass + " "), l.showHideOpacity && (d += "pswp--animate_opacity "), d += A ? "pswp--touch" : "pswp--notouch", d += H.animationName ? " pswp--css_animation" : "", d += H.svg ? " pswp--svg" : "", o.addClass(e, d), r.updateSize(), h = -1, be = null, n = 0; s > n; n++) Ne((n + h) * ye.x, E[n].el.style);
						P || o.bind(r.scrollWrap, v, r), _e("initialZoomInEnd", function () {
							r.setContent(E[0], p - 1), r.setContent(E[2], p + 1), E[0].el.style.display = E[2].el.style.display = "block", l.focus && e.focus(), Fe()
						}), r.setContent(E[1], p), r.updateCurrItem(), $e("afterInit"), we || (C = setInterval(function () {
							Qe || Z || J || y !== r.currItem.initialZoomLevel || r.updateSize()
						}, 1e3)), o.addClass(e, "pswp--visible")
					}
				}
				, close: function () {
					u && (u = !1, c = !0, $e("close"), We(), tn(r.currItem, null, !0, r.destroy))
				}
				, destroy: function () {
					$e("destroy"), Yt && clearTimeout(Yt), e.setAttribute("aria-hidden", "true"), e.className = z, C && clearInterval(C), o.unbind(r.scrollWrap, v, r), o.unbind(window, "scroll", r), Et(), tt(), ke = null
				}
				, panTo: function (e, t, n) {
					n || (e > ne.min.x ? e = ne.min.x : e < ne.max.x && (e = ne.max.x), t > ne.min.y ? t = ne.min.y : t < ne.max.y && (t = ne.max.y)), he.x = e, he.y = t, Ae()
				}
				, handleEvent: function (e) {
					e = e || window.event, g[e.type] && g[e.type](e)
				}
				, goTo: function (e) {
					e = Se(e);
					var t = e - p;
					be = t, p = e, r.currItem = Qt(p), ve -= t, ze(ye.x * ve), tt(), oe = !1, r.updateCurrItem()
				}
				, next: function () {
					r.goTo(p + 1)
				}
				, prev: function () {
					r.goTo(p - 1)
				}
				, updateCurrZoomItem: function (e) {
					if (e && $e("beforeChange", 0), E[1].el.children.length) {
						var t = E[1].el.children[0];
						ie = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
					}
					else ie = null;
					ne = r.currItem.bounds, b = y = r.currItem.initialZoomLevel, he.x = ne.center.x, he.y = ne.center.y, e && $e("afterChange")
				}
				, invalidateCurrItems: function () {
					T = !0;
					for (var e = 0; s > e; e++) E[e].item && (E[e].item.needsUpdate = !0)
				}
				, updateCurrItem: function (e) {
					if (0 !== be) {
						var t, n = Math.abs(be);
						if (!(e && 2 > n)) {
							r.currItem = Qt(p), Te = !1, $e("beforeChange", be), n >= s && (h += be + (be > 0 ? -s : s), n = s);
							for (var i = 0; n > i; i++) be > 0 ? (t = E.shift(), E[s - 1] = t, h++, Ne((h + 2) * ye.x, t.el.style), r.setContent(t, p - n + i + 1 + 1)) : (t = E.pop(), E.unshift(t), h--, Ne(h * ye.x, t.el.style), r.setContent(t, p + n - i - 1 - 1));
							if (ie && 1 === Math.abs(be)) {
								var o = Qt(S);
								o.initialZoomLevel !== y && (ln(o, me), pn(o), Me(o))
							}
							be = 0, r.updateCurrZoomItem(), S = p, $e("afterChange")
						}
					}
				}
				, updateSize: function (t) {
					if (!we && l.modal) {
						var n = o.getScrollY();
						if (R !== n && (e.style.top = n + "px", R = n), !t && Ce.x === window.innerWidth && Ce.y === window.innerHeight) return;
						Ce.x = window.innerWidth, Ce.y = window.innerHeight, e.style.height = Ce.y + "px"
					}
					if (me.x = r.scrollWrap.clientWidth, me.y = r.scrollWrap.clientHeight, Ge(), ye.x = me.x + Math.round(me.x * l.spacing), ye.y = me.y, ze(ye.x * ve), $e("beforeResize"), void 0 !== h) {
						for (var i, a, u, c = 0; s > c; c++) i = E[c], Ne((c + h) * ye.x, i.el.style), u = p + c - 1, l.loop && Jt() > 2 && (u = Se(u)), a = Qt(u), a && (T || a.needsUpdate || !a.bounds) ? (r.cleanSlide(a), r.setContent(i, u), 1 === c && (r.currItem = a, r.updateCurrZoomItem(!0)), a.needsUpdate = !1) : -1 === i.index && u >= 0 && r.setContent(i, u), a && a.container && (ln(a, me), pn(a), Me(a));
						T = !1
					}
					b = y = r.currItem.initialZoomLevel, ne = r.currItem.bounds, ne && (he.x = ne.center.x, he.y = ne.center.y, Ae(!0)), $e("resize")
				}
				, zoomTo: function (e, t, n, i, r) {
					t && (b = y, bt.x = Math.abs(t.x) - he.x, bt.y = Math.abs(t.y) - he.y, Pe(fe, he));
					var a = Be(e, !1)
						, s = {};
					Ze("x", a, s, e), Ze("y", a, s, e);
					var l = y
						, u = {
							x: he.x
							, y: he.y
						};
					Re(s);
					var c = function (t) {
						1 === t ? (y = e, he.x = s.x, he.y = s.y) : (y = (e - l) * t + l, he.x = (s.x - u.x) * t + u.x, he.y = (s.y - u.y) * t + u.y), r && r(t), Ae(1 === t)
					};
					n ? nt("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, c) : c(1)
				}
			}
			, ot = 30
			, rt = 10
			, at = {}
			, st = {}
			, lt = {}
			, ut = {}
			, ct = {}
			, dt = []
			, pt = {}
			, ft = []
			, ht = {}
			, mt = 0
			, vt = de()
			, gt = 0
			, yt = de()
			, bt = de()
			, wt = de()
			, xt = function (e, t) {
				return e.x === t.x && e.y === t.y
			}
			, Ct = function (e, t) {
				return Math.abs(e.x - t.x) < a && Math.abs(e.y - t.y) < a
			}
			, Tt = function (e, t) {
				return ht.x = Math.abs(e.x - t.x), ht.y = Math.abs(e.y - t.y), Math.sqrt(ht.x * ht.x + ht.y * ht.y)
			}
			, Et = function () {
				G && (N(G), G = null)
			}
			, St = function () {
				Z && (G = M(St), Ft())
			}
			, kt = function () {
				return !("fit" === l.scaleMode && y === r.currItem.initialZoomLevel)
			}
			, _t = function (e, t) {
				return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : _t(e.parentNode, t)))
			}
			, $t = {}
			, It = function (e, t) {
				return $t.prevent = !_t(e.target, l.isClickableElement), $e("preventDragEvent", e, t, $t), $t.prevent
			}
			, Dt = function (e, t) {
				return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
			}
			, Lt = function (e, t, n) {
				n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
			}
			, At = function (e, t, n) {
				if (e - F > 50) {
					var i = ft.length > 2 ? ft.shift() : {};
					i.x = t, i.y = n, ft.push(i), F = e
				}
			}
			, Mt = function () {
				var e = he.y - r.currItem.initialPosition.y;
				return 1 - Math.abs(e / (me.y / 2))
			}
			, Nt = {}
			, zt = {}
			, Ot = []
			, Pt = function (e) {
				for (; Ot.length > 0;) Ot.pop();
				return L ? (ce = 0, dt.forEach(function (e) {
					0 === ce ? Ot[0] = e : 1 === ce && (Ot[1] = e), ce++
				})) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Ot[0] = Dt(e.touches[0], Nt), e.touches.length > 1 && (Ot[1] = Dt(e.touches[1], zt))) : (Nt.x = e.pageX, Nt.y = e.pageY, Nt.id = "", Ot[0] = Nt), Ot
			}
			, Rt = function (e, t) {
				var n, i, o, a, s = 0
					, u = he[e] + t[e]
					, c = t[e] > 0
					, d = yt.x + t.x
					, p = yt.x - pt.x;
				return n = u > ne.min[e] || u < ne.max[e] ? l.panEndFriction : 1, u = he[e] + t[e] * n, !l.allowPanToNext && y !== r.currItem.initialZoomLevel || (ie ? "h" !== re || "x" !== e || Y || (c ? (u > ne.min[e] && (n = l.panEndFriction, s = ne.min[e] - u, i = ne.min[e] - fe[e]), (0 >= i || 0 > p) && Jt() > 1 ? (a = d, 0 > p && d > pt.x && (a = pt.x)) : ne.min.x !== ne.max.x && (o = u)) : (u < ne.max[e] && (n = l.panEndFriction, s = u - ne.max[e], i = fe[e] - ne.max[e]), (0 >= i || p > 0) && Jt() > 1 ? (a = d, p > 0 && d < pt.x && (a = pt.x)) : ne.min.x !== ne.max.x && (o = u))) : a = d, "x" !== e) ? void(oe || K || y > r.currItem.fitRatio && (he[e] += t[e] * n)) : (void 0 !== a && (ze(a, !0), K = a !== pt.x), ne.min.x !== ne.max.x && (void 0 !== o ? he.x = o : K || (he.x += t.x * n)), void 0 !== a)
			}
			, Ht = function (e) {
				if (!("mousedown" === e.type && e.button > 0)) {
					if (Kt) return void e.preventDefault();
					if (!U || "mousedown" !== e.type) {
						if (It(e, !0) && e.preventDefault(), $e("pointerDown"), L) {
							var t = o.arraySearch(dt, e.pointerId, "id");
							0 > t && (t = dt.length), dt[t] = {
								x: e.pageX
								, y: e.pageY
								, id: e.pointerId
							}
						}
						var n = Pt(e)
							, i = n.length;
						Q = null, tt(), Z && 1 !== i || (Z = ae = !0, o.bind(window, m, r), B = ue = se = q = K = V = X = Y = !1, re = null, $e("firstTouchStart", n), Pe(fe, he), pe.x = pe.y = 0, Pe(ut, n[0]), Pe(ct, ut), pt.x = ye.x * ve, ft = [{
							x: ut.x
							, y: ut.y
						}], F = j = Ie(), Be(y, !0), Et(), St()), !J && i > 1 && !oe && !K && (b = y, Y = !1, J = X = !0, pe.y = pe.x = 0, Pe(fe, he), Pe(at, n[0]), Pe(st, n[1]), Lt(at, st, wt), bt.x = Math.abs(wt.x) - he.x, bt.y = Math.abs(wt.y) - he.y, ee = te = Tt(at, st))
					}
				}
			}
			, jt = function (e) {
				if (e.preventDefault(), L) {
					var t = o.arraySearch(dt, e.pointerId, "id");
					if (t > -1) {
						var n = dt[t];
						n.x = e.pageX, n.y = e.pageY
					}
				}
				if (Z) {
					var i = Pt(e);
					if (re || V || J) Q = i;
					else if (yt.x !== ye.x * ve) re = "h";
					else {
						var r = Math.abs(i[0].x - ut.x) - Math.abs(i[0].y - ut.y);
						Math.abs(r) >= rt && (re = r > 0 ? "h" : "v", Q = i)
					}
				}
			}
			, Ft = function () {
				if (Q) {
					var e = Q.length;
					if (0 !== e)
						if (Pe(at, Q[0]), lt.x = at.x - ut.x, lt.y = at.y - ut.y, J && e > 1) {
							if (ut.x = at.x, ut.y = at.y, !lt.x && !lt.y && xt(Q[1], st)) return;
							Pe(st, Q[1]), Y || (Y = !0, $e("zoomGestureStarted"));
							var t = Tt(at, st)
								, n = Zt(t);
							n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (ue = !0);
							var i = 1
								, o = qe()
								, a = Ue();
							if (o > n)
								if (l.pinchToClose && !ue && b <= r.currItem.initialZoomLevel) {
									var s = o - n
										, u = 1 - s / (o / 1.2);
									De(u), $e("onPinchClose", u), se = !0
								}
								else i = (o - n) / o, i > 1 && (i = 1), n = o - i * (o / 3);
							else n > a && (i = (n - a) / (6 * o), i > 1 && (i = 1), n = a + i * o);
							0 > i && (i = 0), ee = t, Lt(at, st, vt), pe.x += vt.x - wt.x, pe.y += vt.y - wt.y, Pe(wt, vt), he.x = Oe("x", n), he.y = Oe("y", n), B = n > y, y = n, Ae()
						}
						else {
							if (!re) return;
							if (ae && (ae = !1, Math.abs(lt.x) >= rt && (lt.x -= Q[0].x - ct.x), Math.abs(lt.y) >= rt && (lt.y -= Q[0].y - ct.y)), ut.x = at.x, ut.y = at.y, 0 === lt.x && 0 === lt.y) return;
							if ("v" === re && l.closeOnVerticalDrag && !kt()) {
								pe.y += lt.y, he.y += lt.y;
								var c = Mt();
								return q = !0, $e("onVerticalDrag", c), De(c), void Ae()
							}
							At(Ie(), at.x, at.y), V = !0, ne = r.currItem.bounds;
							var d = Rt("x", lt);
							d || (Rt("y", lt), Re(he), Ae())
						}
				}
			}
			, Wt = function (e) {
				if (H.isOldAndroid) {
					if (U && "mouseup" === e.type) return;
					e.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function () {
						U = 0
					}, 600))
				}
				$e("pointerUp"), It(e, !1) && e.preventDefault();
				var t;
				if (L) {
					var n = o.arraySearch(dt, e.pointerId, "id");
					if (n > -1)
						if (t = dt.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
						else {
							var i = {
								4: "mouse"
								, 2: "touch"
								, 3: "pen"
							};
							t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
						}
				}
				var a, s = Pt(e)
					, u = s.length;
				if ("mouseup" === e.type && (u = 0), 2 === u) return Q = null, !0;
				1 === u && Pe(ct, s[0]), 0 !== u || re || oe || (t || ("mouseup" === e.type ? t = {
					x: e.pageX
					, y: e.pageY
					, type: "mouse"
				} : e.changedTouches && e.changedTouches[0] && (t = {
					x: e.changedTouches[0].pageX
					, y: e.changedTouches[0].pageY
					, type: "touch"
				})), $e("touchRelease", e, t));
				var c = -1;
				if (0 === u && (Z = !1, o.unbind(window, m, r), Et(), J ? c = 0 : -1 !== gt && (c = Ie() - gt)), gt = 1 === u ? Ie() : -1, a = -1 !== c && 150 > c ? "zoom" : "swipe", J && 2 > u && (J = !1, 1 === u && (a = "zoomPointerUp"), $e("zoomGestureEnded")), Q = null, V || Y || oe || q)
					if (tt(), W || (W = Bt()), W.calculateSwipeSpeed("x"), q) {
						var d = Mt();
						if (d < l.verticalDragRange) r.close();
						else {
							var p = he.y
								, f = le;
							nt("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
								he.y = (r.currItem.initialPosition.y - p) * e + p, De((1 - f) * e + f), Ae()
							}), $e("onVerticalDrag", 1)
						}
					}
					else {
						if ((K || oe) && 0 === u) {
							var h = Ut(a, W);
							if (h) return;
							a = "zoomPointerUp"
						}
						if (!oe) return "swipe" !== a ? void Xt() : void(!K && y > r.currItem.fitRatio && qt(W))
					}
			}
			, Bt = function () {
				var e, t, n = {
					lastFlickOffset: {}
					, lastFlickDist: {}
					, lastFlickSpeed: {}
					, slowDownRatio: {}
					, slowDownRatioReverse: {}
					, speedDecelerationRatio: {}
					, speedDecelerationRatioAbs: {}
					, distanceOffset: {}
					, backAnimDestination: {}
					, backAnimStarted: {}
					, calculateSwipeSpeed: function (i) {
						ft.length > 1 ? (e = Ie() - F + 50, t = ft[ft.length - 2][i]) : (e = Ie() - j, t = ct[i]), n.lastFlickOffset[i] = ut[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
					}
					, calculateOverBoundsAnimOffset: function (e, t) {
						n.backAnimStarted[e] || (he[e] > ne.min[e] ? n.backAnimDestination[e] = ne.min[e] : he[e] < ne.max[e] && (n.backAnimDestination[e] = ne.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, nt("bounceZoomPan" + e, he[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function (t) {
							he[e] = t, Ae()
						}))))
					}
					, calculateAnimOffset: function (e) {
						n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, he[e] += n.distanceOffset[e])
					}
					, panAnimLoop: function () {
						return Ke.zoomPan && (Ke.zoomPan.raf = M(n.panAnimLoop), n.now = Ie(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Ae(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (he.x = Math.round(he.x), he.y = Math.round(he.y), Ae(), void Je("zoomPan")) : void 0
					}
				};
				return n
			}
			, qt = function (e) {
				return e.calculateSwipeSpeed("y"), ne = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (et("zoomPan"), e.lastNow = Ie(), void e.panAnimLoop())
			}
			, Ut = function (e, t) {
				var n;
				oe || (mt = p);
				var i;
				if ("swipe" === e) {
					var a = ut.x - ct.x
						, s = t.lastFlickDist.x < 10;
					a > ot && (s || t.lastFlickOffset.x > 20) ? i = -1 : -ot > a && (s || t.lastFlickOffset.x < -20) && (i = 1)
				}
				var u;
				i && (p += i, 0 > p ? (p = l.loop ? Jt() - 1 : 0, u = !0) : p >= Jt() && (p = l.loop ? 0 : Jt() - 1, u = !0), (!u || l.loop) && (be += i, ve -= i, n = !0));
				var c, d = ye.x * ve
					, f = Math.abs(d - yt.x);
				return n || d > yt.x == t.lastFlickSpeed.x > 0 ? (c = Math.abs(t.lastFlickSpeed.x) > 0 ? f / Math.abs(t.lastFlickSpeed.x) : 333, c = Math.min(c, 400), c = Math.max(c, 250)) : c = 333, mt === p && (n = !1), oe = !0, $e("mainScrollAnimStart"), nt("mainScroll", yt.x, d, c, o.easing.cubic.out, ze, function () {
					tt(), oe = !1, mt = -1, (n || mt !== p) && r.updateCurrItem(), $e("mainScrollAnimComplete")
				}), n && r.updateCurrItem(!0), n
			}
			, Zt = function (e) {
				return 1 / te * e * b
			}
			, Xt = function () {
				var e = y
					, t = qe()
					, n = Ue();
				t > y ? e = t : y > n && (e = n);
				var i, a = 1
					, s = le;
				return se && !B && !ue && t > y ? (r.close(), !0) : (se && (i = function (e) {
					De((a - s) * e + s)
				}), r.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
			};
		Ee("Gestures", {
			publicMethods: {
				initGestures: function () {
					var e = function (e, t, n, i, o) {
						k = e + t, _ = e + n, $ = e + i, I = o ? e + o : ""
					};
					L = H.pointerEvent, L && H.touch && (H.touch = !1), L ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : H.touch ? (e("touch", "start", "move", "end", "cancel"), A = !0) : e("mouse", "down", "move", "up"), m = _ + " " + $ + " " + I, v = k, L && !A && (A = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = A, g[k] = Ht, g[_] = jt, g[$] = Wt, I && (g[I] = g[$]), H.touch && (v += " mousedown", m += " mousemove mouseup", g.mousedown = g[k], g.mousemove = g[_], g.mouseup = g[$]), A || (l.allowPanToNext = !1)
				}
			}
		});
		var Yt, Vt, Gt, Kt, Qt, Jt, en, tn = function (t, n, i, a) {
				Yt && clearTimeout(Yt), Kt = !0, Gt = !0;
				var s;
				t.initialLayout ? (s = t.initialLayout, t.initialLayout = null) : s = l.getThumbBoundsFn && l.getThumbBoundsFn(p);
				var u = i ? l.hideAnimationDuration : l.showAnimationDuration
					, c = function () {
						Je("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (De(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), $e("initialZoom" + (i ? "OutEnd" : "InEnd"))), a && a(), Kt = !1
					};
				if (!u || !s || void 0 === s.x) return $e("initialZoom" + (i ? "Out" : "In")), y = t.initialZoomLevel, Pe(he, t.initialPosition), Ae(), e.style.opacity = i ? 0 : 1, De(1), void(u ? setTimeout(function () {
					c()
				}, u) : c());
				var f = function () {
					var n = d
						, a = !r.currItem.src || r.currItem.loadError || l.showHideOpacity;
					t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (y = s.w / t.w, he.x = s.x, he.y = s.y - O, r[a ? "template" : "bg"].style.opacity = .001, Ae()), et("initialZoom"), i && !n && o.removeClass(e, "pswp--animated-in"), a && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
						o.addClass(e, "pswp--animate_opacity")
					}, 30)), Yt = setTimeout(function () {
						if ($e("initialZoom" + (i ? "Out" : "In")), i) {
							var r = s.w / t.w
								, l = {
									x: he.x
									, y: he.y
								}
								, d = y
								, p = le
								, f = function (t) {
									1 === t ? (y = r, he.x = s.x, he.y = s.y - R) : (y = (r - d) * t + d, he.x = (s.x - l.x) * t + l.x, he.y = (s.y - R - l.y) * t + l.y), Ae(), a ? e.style.opacity = 1 - t : De(p - t * p)
								};
							n ? nt("initialZoom", 0, 1, u, o.easing.cubic.out, f, c) : (f(1), Yt = setTimeout(c, u + 20))
						}
						else y = t.initialZoomLevel, Pe(he, t.initialPosition), Ae(), De(1), a ? e.style.opacity = 1 : De(1), Yt = setTimeout(c, u + 20)
					}, i ? 25 : 90)
				};
				f()
			}
			, nn = {}
			, on = []
			, rn = {
				index: 0
				, errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>'
				, forceProgressiveLoading: !1
				, preload: [1, 1]
				, getNumItemsFn: function () {
					return Vt.length
				}
			}
			, an = function () {
				return {
					center: {
						x: 0
						, y: 0
					}
					, max: {
						x: 0
						, y: 0
					}
					, min: {
						x: 0
						, y: 0
					}
				}
			}
			, sn = function (e, t, n) {
				var i = e.bounds;
				i.center.x = Math.round((nn.x - t) / 2), i.center.y = Math.round((nn.y - n) / 2) + e.vGap.top, i.max.x = t > nn.x ? Math.round(nn.x - t) : i.center.x, i.max.y = n > nn.y ? Math.round(nn.y - n) + e.vGap.top : i.center.y, i.min.x = t > nn.x ? 0 : i.center.x, i.min.y = n > nn.y ? e.vGap.top : i.center.y
			}
			, ln = function (e, t, n) {
				if (e.src && !e.loadError) {
					var i = !n;
					if (i && (e.vGap || (e.vGap = {
							top: 0
							, bottom: 0
						}), $e("parseVerticalMargin", e)), nn.x = t.x, nn.y = t.y - e.vGap.top - e.vGap.bottom, i) {
						var o = nn.x / e.w
							, r = nn.y / e.h;
						e.fitRatio = r > o ? o : r;
						var a = l.scaleMode;
						"orig" === a ? n = 1 : "fit" === a && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = an())
					}
					if (!n) return;
					return sn(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
				}
				return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = an(), e.initialPosition = e.bounds.center, e.bounds
			}
			, un = function (e, t, n, i, o, a) {
				t.loadError || i && (t.imageAppended = !0, pn(t, i, t === r.currItem && Te), n.appendChild(i), a && setTimeout(function () {
					t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
				}, 500))
			}
			, cn = function (e) {
				e.loading = !0, e.loaded = !1;
				var t = e.img = o.createEl("pswp__img", "img")
					, n = function () {
						e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
					};
				return t.onload = n, t.onerror = function () {
					e.loadError = !0, n()
				}, t.src = e.src, t
			}
			, dn = function (e, t) {
				return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0) : void 0
			}
			, pn = function (e, t, n) {
				if (e.src) {
					t || (t = e.container.lastChild);
					var i = n ? e.w : Math.round(e.w * e.fitRatio)
						, o = n ? e.h : Math.round(e.h * e.fitRatio);
					e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
				}
			}
			, fn = function () {
				if (on.length) {
					for (var e, t = 0; t < on.length; t++) e = on[t], e.holder.index === e.index && un(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
					on = []
				}
			};
		Ee("Controller", {
			publicMethods: {
				lazyLoadItem: function (e) {
					e = Se(e);
					var t = Qt(e);
					t && (!t.loaded && !t.loading || T) && ($e("gettingData", e, t), t.src && cn(t))
				}
				, initController: function () {
					o.extend(l, rn, !0), r.items = Vt = n, Qt = r.getItemAt, Jt = l.getNumItemsFn, en = l.loop, Jt() < 3 && (l.loop = !1), _e("beforeChange", function (e) {
						var t, n = l.preload
							, i = null === e || e >= 0
							, o = Math.min(n[0], Jt())
							, a = Math.min(n[1], Jt());
						for (t = 1;
							(i ? a : o) >= t; t++) r.lazyLoadItem(p + t);
						for (t = 1;
							(i ? o : a) >= t; t++) r.lazyLoadItem(p - t)
					}), _e("initialLayout", function () {
						r.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(p)
					}), _e("mainScrollAnimComplete", fn), _e("initialZoomInEnd", fn), _e("destroy", function () {
						for (var e, t = 0; t < Vt.length; t++) e = Vt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
						on = null
					})
				}
				, getItemAt: function (e) {
					return e >= 0 && void 0 !== Vt[e] && Vt[e]
				}
				, allowProgressiveImg: function () {
					return l.forceProgressiveLoading || !A || l.mouseUsed || screen.width > 1200
				}
				, setContent: function (e, t) {
					l.loop && (t = Se(t));
					var n = r.getItemAt(e.index);
					n && (n.container = null);
					var i, a = r.getItemAt(t);
					if (!a) return void(e.el.innerHTML = "");
					$e("gettingData", t, a), e.index = t, e.item = a;
					var s = a.container = o.createEl("pswp__zoom-wrap");
					if (!a.src && a.html && (a.html.tagName ? s.appendChild(a.html) : s.innerHTML = a.html), dn(a), ln(a, me), !a.src || a.loadError || a.loaded) a.src && !a.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = a.src, pn(a, i), un(t, a, s, i, !0));
					else {
						if (a.loadComplete = function (n) {
								if (u) {
									if (e && e.index === t) {
										if (dn(n, !0)) return n.loadComplete = n.img = null, ln(n, me), Me(n), void(e.index === p && r.updateCurrZoomItem());
										n.imageAppended ? !Kt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : H.transform && (oe || Kt) ? on.push({
											item: n
											, baseDiv: s
											, img: n.img
											, index: t
											, holder: e
											, clearPlaceholder: !0
										}) : un(t, n, s, n.img, oe || Kt, !0)
									}
									n.loadComplete = null, n.img = null, $e("imageLoadComplete", t, n)
								}
							}, o.features.transform) {
							var c = "pswp__img pswp__img--placeholder";
							c += a.msrc ? "" : " pswp__img--placeholder--blank";
							var d = o.createEl(c, a.msrc ? "img" : "");
							a.msrc && (d.src = a.msrc), pn(a, d), s.appendChild(d), a.placeholder = d
						}
						a.loading || cn(a), r.allowProgressiveImg() && (!Gt && H.transform ? on.push({
							item: a
							, baseDiv: s
							, img: a.img
							, index: t
							, holder: e
						}) : un(t, a, s, a.img, !0, !0))
					}
					Gt || t !== p ? Me(a) : (ie = s.style, tn(a, i || a.img)), e.el.innerHTML = "", e.el.appendChild(s)
				}
				, cleanSlide: function (e) {
					e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
				}
			}
		});
		var hn, mn = {}
			, vn = function (e, t, n) {
				var i = document.createEvent("CustomEvent")
					, o = {
						origEvent: e
						, target: e.target
						, releasePoint: t
						, pointerType: n || "touch"
					};
				i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
			};
		Ee("Tap", {
			publicMethods: {
				initTap: function () {
					_e("firstTouchStart", r.onTapStart), _e("touchRelease", r.onTapRelease), _e("destroy", function () {
						mn = {}, hn = null
					})
				}
				, onTapStart: function (e) {
					e.length > 1 && (clearTimeout(hn), hn = null)
				}
				, onTapRelease: function (e, t) {
					if (t && !V && !X && !Qe) {
						var n = t;
						if (hn && (clearTimeout(hn), hn = null, Ct(n, mn))) return void $e("doubleTap", n);
						if ("mouse" === t.type) return void vn(e, t, "mouse");
						var i = e.target.tagName.toUpperCase();
						if ("BUTTON" === i || o.hasClass(e.target, "pswp__single-tap")) return void vn(e, t);
						Pe(mn, n), hn = setTimeout(function () {
							vn(e, t), hn = null
						}, 300)
					}
				}
			}
		});
		var gn;
		Ee("DesktopZoom", {
			publicMethods: {
				initDesktopZoom: function () {
					P || (A ? _e("mouseUsed", function () {
						r.setupDesktopZoom()
					}) : r.setupDesktopZoom(!0))
				}
				, setupDesktopZoom: function (t) {
					gn = {};
					var n = "wheel mousewheel DOMMouseScroll";
					_e("bindEvents", function () {
						o.bind(e, n, r.handleMouseWheel)
					}), _e("unbindEvents", function () {
						gn && o.unbind(e, n, r.handleMouseWheel)
					}), r.mouseZoomedIn = !1;
					var i, a = function () {
							r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > y ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), s()
						}
						, s = function () {
							i && (o.removeClass(e, "pswp--dragging"), i = !1)
						};
					_e("resize", a), _e("afterChange", a), _e("pointerDown", function () {
						r.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
					}), _e("pointerUp", s), t || a()
				}
				, handleMouseWheel: function (e) {
					if (y <= r.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Qe || Z ? e.preventDefault() : D && Math.abs(e.deltaY) > 2 && (d = !0, r.close())), !0;
					if (e.stopPropagation(), gn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (gn.x = 18 * e.deltaX, gn.y = 18 * e.deltaY) : (gn.x = e.deltaX, gn.y = e.deltaY);
					else if ("wheelDelta" in e) e.wheelDeltaX && (gn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? gn.y = -.16 * e.wheelDeltaY : gn.y = -.16 * e.wheelDelta;
					else {
						if (!("detail" in e)) return;
						gn.y = e.detail
					}
					Be(y, !0);
					var t = he.x - gn.x
						, n = he.y - gn.y;
					(l.modal || t <= ne.min.x && t >= ne.max.x && n <= ne.min.y && n >= ne.max.y) && e.preventDefault(), r.panTo(t, n)
				}
				, toggleDesktopZoom: function (t) {
					t = t || {
						x: me.x / 2 + ge.x
						, y: me.y / 2 + ge.y
					};
					var n = l.getDoubleTapZoom(!0, r.currItem)
						, i = y === n;
					r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
				}
			}
		});
		var yn, bn, wn, xn, Cn, Tn, En, Sn, kn, _n, $n, In, Dn = {
				history: !0
				, galleryUID: 1
			}
			, Ln = function () {
				return $n.hash.substring(1)
			}
			, An = function () {
				yn && clearTimeout(yn), wn && clearTimeout(wn)
			}
			, Mn = function () {
				var e = Ln()
					, t = {};
				if (e.length < 5) return t;
				var n, i = e.split("&");
				for (n = 0; n < i.length; n++)
					if (i[n]) {
						var o = i[n].split("=");
						o.length < 2 || (t[o[0]] = o[1])
					}
				if (l.galleryPIDs) {
					var r = t.pid;
					for (t.pid = 0, n = 0; n < Vt.length; n++)
						if (Vt[n].pid === r) {
							t.pid = n;
							break
						}
				}
				else t.pid = parseInt(t.pid, 10) - 1;
				return t.pid < 0 && (t.pid = 0), t
			}
			, Nn = function () {
				if (wn && clearTimeout(wn), Qe || Z) return void(wn = setTimeout(Nn, 500));
				xn ? clearTimeout(bn) : xn = !0;
				var e = p + 1
					, t = Qt(p);
				t.hasOwnProperty("pid") && (e = t.pid);
				var n = En + "&gid=" + l.galleryUID + "&pid=" + e;
				Sn || -1 === $n.hash.indexOf(n) && (_n = !0);
				var i = $n.href.split("#")[0] + "#" + n;
				In ? "#" + n !== window.location.hash && history[Sn ? "replaceState" : "pushState"]("", document.title, i) : Sn ? $n.replace(i) : $n.hash = n, Sn = !0, bn = setTimeout(function () {
					xn = !1
				}, 60)
			};
		Ee("History", {
			publicMethods: {
				initHistory: function () {
					if (o.extend(l, Dn, !0), l.history) {
						$n = window.location, _n = !1, kn = !1, Sn = !1, En = Ln(), In = "pushState" in history, En.indexOf("gid=") > -1 && (En = En.split("&gid=")[0], En = En.split("?gid=")[0]), _e("afterChange", r.updateURL), _e("unbindEvents", function () {
							o.unbind(window, "hashchange", r.onHashChange)
						});
						var e = function () {
							Tn = !0, kn || (_n ? history.back() : En ? $n.hash = En : In ? history.pushState("", document.title, $n.pathname + $n.search) : $n.hash = ""), An()
						};
						_e("unbindEvents", function () {
							d && e()
						}), _e("destroy", function () {
							Tn || e()
						}), _e("firstUpdate", function () {
							p = Mn().pid
						});
						var t = En.indexOf("pid=");
						t > -1 && (En = En.substring(0, t), "&" === En.slice(-1) && (En = En.slice(0, -1))), setTimeout(function () {
							u && o.bind(window, "hashchange", r.onHashChange)
						}, 40)
					}
				}
				, onHashChange: function () {
					return Ln() === En ? (kn = !0, void r.close()) : void(xn || (Cn = !0, r.goTo(Mn().pid), Cn = !1))
				}
				, updateURL: function () {
					An(), Cn || (Sn ? yn = setTimeout(Nn, 800) : Nn())
				}
			}
		}), o.extend(r, it)
	};
	return e
}), $(document).ready(function () {
	if ($(document).keydown(function (e) {
			if ((32 == e.which || 38 == e.which || 40 == e.which) && $(".pswp").hasClass("pswp--open")) return !1
		}), !isCMS()) {
		var e = function (e, t, n) {
				var i = e.lastIndexOf(t);
				return e = e.substring(0, i) + n + e.substring(i + 1)
			}
			, t = '<!-- Root element of PhotoSwipe. Must have class pswp. --><div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>';
		$("body").append(t);
		var n = $(".pswp")[0];
		$(".gallery").each(function () {
			var t = $(this)
				, i = function () {
					var n = [];
					return t.find("a").each(function () {
						var t = $(this).attr("href")
							, i = $(this).attr("width")
							, o = $(this).attr("height")
							, r = $(this).find(".gallery-title span").text()
							, a = {
								desktopImg: {
									src: t
									, w: i
									, h: o
									, title: r
								}
								, tabletImg: {
									src: e(t, "/", "/700/")
									, w: 700
									, h: 700 / i * o
									, title: r
								}
								, phabletImg: {
									src: e(t, "/", "/450/")
									, w: 450
									, h: 450 / i * o
									, title: r
								}
								, mobileImg: {
									src: e(t, "/", "/200/")
									, w: 200
									, h: 200 / i * o
									, title: r
								}
							};
						n.push(a)
					}), n
				}
				, o = i();
			t.on("click", ".gallery-photo a", function (e) {
				e.preventDefault();
				var t = $(this).parent()
					, i = $(this).closest(".gallery").find(".gallery-photo").index(t)
					, r = {
						index: i
						, bgOpacity: .7
						, showHideOpacity: !0
					}
					, a = new PhotoSwipe(n, PhotoSwipeUI_Default, o, r);
				a.listen("gettingData", function (e, t) {
					var n = a.viewportSize.x * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI);
					n > 900 ? (t.src = t.desktopImg.src, t.w = t.desktopImg.w, t.h = t.desktopImg.h, t.title = t.desktopImg.title) : n > 700 ? (t.src = t.tabletImg.src, t.w = t.tabletImg.w, t.h = t.tabletImg.h, t.title = t.tabletImg.title) : n > 400 ? (t.src = t.phabletImg.src, t.w = t.phabletImg.w, t.h = t.phabletImg.h, t.title = t.phabletImg.title) : n > 200 && (t.src = t.mobileImg.src, t.w = t.mobileImg.w, t.h = t.mobileImg.h, t.title = t.mobileImg.title)
				}), a.init()
			})
		}), $(".image-lightbox").each(function () {
			var t = $(this)
				, i = function () {
					var n = [];
					return t.find("a").each(function () {
						var t = $(this).attr("href")
							, i = $(this).attr("width")
							, o = $(this).attr("height")
							, r = $(this).closest(".image-lightbox").find(".image-title span").text()
							, a = {
								desktopImg: {
									src: t
									, w: i
									, h: o
									, title: r
								}
								, tabletImg: {
									src: e(t, "/", "/700/")
									, w: 700
									, h: 700 / i * o
									, title: r
								}
								, phabletImg: {
									src: e(t, "/", "/450/")
									, w: 450
									, h: 450 / i * o
									, title: r
								}
								, mobileImg: {
									src: e(t, "/", "/200/")
									, w: 200
									, h: 200 / i * o
									, title: r
								}
							};
						n.push(a)
					}), n
				}
				, o = i();
			t.on("click", "a.litebox", function (e) {
				e.preventDefault();
				var t = $(this).parent().index()
					, i = {
						index: t
						, bgOpacity: .7
						, showHideOpacity: !0
					}
					, r = new PhotoSwipe(n, PhotoSwipeUI_Default, o, i);
				r.listen("gettingData", function (e, t) {
					var n = r.viewportSize.x * (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI);
					n > 900 ? (t.src = t.desktopImg.src, t.w = t.desktopImg.w, t.h = t.desktopImg.h, t.title = t.desktopImg.title) : n > 700 ? (t.src = t.tabletImg.src, t.w = t.tabletImg.w, t.h = t.tabletImg.h, t.title = t.tabletImg.title) : n > 400 ? (t.src = t.phabletImg.src, t.w = t.phabletImg.w, t.h = t.phabletImg.h, t.title = t.phabletImg.title) : n > 200 && (t.src = t.mobileImg.src, t.w = t.mobileImg.w, t.h = t.mobileImg.h, t.title = t.mobileImg.title)
				}), r.init()
			})
		})
	}
}), ! function (e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function () {
	"use strict";
	var e = function (e, t) {
		var n, i, o, r, a, s, l, u, c, d, p, f, h, m, v, g, y, b, w, x = this
			, C = !1
			, T = !0
			, E = !0
			, S = {
				barsSize: {
					top: 44
					, bottom: "auto"
				}
				, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"]
				, timeToIdle: 4e3
				, timeToIdleOutside: 1e3
				, loadingIndicatorDelay: 1e3
				, addCaptionHTMLFn: function (e, t) {
					return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
				}
				, closeEl: !0
				, captionEl: !0
				, fullscreenEl: !0
				, zoomEl: !0
				, shareEl: !0
				, counterEl: !0
				, arrowEl: !0
				, preloaderEl: !0
				, tapToClose: !1
				, tapToToggleControls: !0
				, clickToCloseNonZoomable: !0
				, shareButtons: [{
					id: "facebook"
					, label: "Share on Facebook"
					, url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
				}, {
					id: "twitter"
					, label: "Tweet"
					, url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
				}, {
					id: "pinterest"
					, label: "Pin it"
					, url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
				}, {
					id: "download"
					, label: "Download image"
					, url: "{{raw_image_url}}"
					, download: !0
				}]
				, getImageURLForShare: function () {
					return e.currItem.src || ""
				}
				, getPageURLForShare: function () {
					return window.location.href
				}
				, getTextForShare: function () {
					return e.currItem.title || ""
				}
				, indexIndicatorSep: " / "
				, fitControlsWidth: 1200
			}
			, k = function (e) {
				if (g) return !0;
				e = e || window.event, v.timeToIdle && v.mouseUsed && !c && O();
				for (var n, i, o = e.target || e.srcElement, r = o.getAttribute("class") || "", a = 0; a < q.length; a++) n = q[a], n.onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
				if (i) {
					e.stopPropagation && e.stopPropagation(), g = !0;
					var s = t.features.isOldAndroid ? 600 : 30;
					y = setTimeout(function () {
						g = !1
					}, s)
				}
			}
			, _ = function () {
				return !e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth
			}
			, $ = function (e, n, i) {
				t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
			}
			, I = function () {
				var e = 1 === v.getNumItemsFn();
				e !== m && ($(i, "ui--one-slide", e), m = e)
			}
			, D = function () {
				$(l, "share-modal--hidden", E)
			}
			, L = function () {
				return E = !E, E ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
					E && D()
				}, 300)) : (D(), setTimeout(function () {
					E || t.addClass(l, "pswp__share-modal--fade-in")
				}, 30)), E || M(), !1
			}
			, A = function (t) {
				t = t || window.event;
				var n = t.target || t.srcElement;
				return e.shout("shareLinkClick", t, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), E || L(), !1))
			}
			, M = function () {
				for (var e, t, n, i, o, r = "", a = 0; a < v.shareButtons.length; a++) e = v.shareButtons[a], n = v.getImageURLForShare(e), i = v.getPageURLForShare(e), o = v.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (r = v.parseShareButtonOut(e, r));
				l.children[0].innerHTML = r, l.children[0].onclick = A
			}
			, N = function (e) {
				for (var n = 0; n < v.closeElClasses.length; n++)
					if (t.hasClass(e, "pswp__" + v.closeElClasses[n])) return !0
			}
			, z = 0
			, O = function () {
				clearTimeout(w), z = 0, c && x.setIdle(!1)
			}
			, P = function (e) {
				e = e ? e : window.event;
				var t = e.relatedTarget || e.toElement;
				t && "HTML" !== t.nodeName || (clearTimeout(w), w = setTimeout(function () {
					x.setIdle(!0)
				}, v.timeToIdleOutside))
			}
			, R = function () {
				v.fullscreenEl && !t.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
			}
			, H = function () {
				v.preloaderEl && (j(!0), d("beforeChange", function () {
					clearTimeout(h), h = setTimeout(function () {
						e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && j(!1) : j(!0)
					}, v.loadingIndicatorDelay)
				}), d("imageLoadComplete", function (t, n) {
					e.currItem === n && j(!0)
				}))
			}
			, j = function (e) {
				f !== e && ($(p, "preloader--active", !e), f = e)
			}
			, F = function (e) {
				var n = e.vGap;
				if (_()) {
					var a = v.barsSize;
					if (v.captionEl && "auto" === a.bottom)
						if (r || (r = t.createEl("pswp__caption pswp__caption--fake"), r.appendChild(t.createEl("pswp__caption__center")), i.insertBefore(r, o), t.addClass(i, "pswp__ui--fit")), v.addCaptionHTMLFn(e, r, !0)) {
							var s = r.clientHeight;
							n.bottom = parseInt(s, 10) || 44
						}
						else n.bottom = a.top;
					else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
					n.top = a.top
				}
				else n.top = n.bottom = 0
			}
			, W = function () {
				v.timeToIdle && d("mouseUsed", function () {
					t.bind(document, "mousemove", O), t.bind(document, "mouseout", P), b = setInterval(function () {
						z++, 2 === z && x.setIdle(!0)
					}, v.timeToIdle / 2)
				})
			}
			, B = function () {
				d("onVerticalDrag", function (e) {
					T && .95 > e ? x.hideControls() : !T && e >= .95 && x.showControls()
				});
				var e;
				d("onPinchClose", function (t) {
					T && .9 > t ? (x.hideControls(), e = !0) : e && !T && t > .9 && x.showControls()
				}), d("zoomGestureEnded", function () {
					e = !1, e && !T && x.showControls()
				})
			}
			, q = [{
				name: "caption"
				, option: "captionEl"
				, onInit: function (e) {
					o = e
				}
			}, {
				name: "share-modal"
				, option: "shareEl"
				, onInit: function (e) {
					l = e
				}
				, onTap: function () {
					L()
				}
			}, {
				name: "button--share"
				, option: "shareEl"
				, onInit: function (e) {
					s = e
				}
				, onTap: function () {
					L()
				}
			}, {
				name: "button--zoom"
				, option: "zoomEl"
				, onTap: e.toggleDesktopZoom
			}, {
				name: "counter"
				, option: "counterEl"
				, onInit: function (e) {
					a = e
				}
			}, {
				name: "button--close"
				, option: "closeEl"
				, onTap: e.close
			}, {
				name: "button--arrow--left"
				, option: "arrowEl"
				, onTap: e.prev
			}, {
				name: "button--arrow--right"
				, option: "arrowEl"
				, onTap: e.next
			}, {
				name: "button--fs"
				, option: "fullscreenEl"
				, onTap: function () {
					n.isFullscreen() ? n.exit() : n.enter()
				}
			}, {
				name: "preloader"
				, option: "preloaderEl"
				, onInit: function (e) {
					p = e
				}
			}]
			, U = function () {
				var e, n, o, r = function (i) {
					if (i)
						for (var r = i.length, a = 0; r > a; a++) {
							e = i[a], n = e.className;
							for (var s = 0; s < q.length; s++) o = q[s], n.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
						}
				};
				r(i.children);
				var a = t.getChildByClass(i, "pswp__top-bar");
				a && r(a.children)
			};
		x.init = function () {
			t.extend(e.options, S, !0), v = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, B(), d("beforeChange", x.update), d("doubleTap", function (t) {
				var n = e.currItem.initialZoomLevel;
				e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
			}), d("preventDragEvent", function (e, t, n) {
				var i = e.target || e.srcElement;
				i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
			}), d("bindEvents", function () {
				t.bind(i, "pswpTap click", k), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
			}), d("unbindEvents", function () {
				E || L(), b && clearInterval(b), t.unbind(document, "mouseout", P), t.unbind(document, "mousemove", O), t.unbind(i, "pswpTap click", k), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (v.hideAnimationDuration = 0, n.exit()), n = null)
			}), d("destroy", function () {
				v.captionEl && (r && i.removeChild(r), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), x.setIdle(!1)
			}), v.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function () {
				v.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
			}), d("initialZoomOut", function () {
				t.addClass(i, "pswp__ui--hidden")
			}), d("parseVerticalMargin", F), U(), v.shareEl && s && l && (E = !0), I(), W(), R(), H()
		}, x.setIdle = function (e) {
			c = e, $(i, "ui--idle", e)
		}, x.update = function () {
			T && e.currItem ? (x.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, o), $(o, "caption--empty", !e.currItem.title)), C = !0) : C = !1, E || L(), I()
		}, x.updateFullscreen = function (i) {
			i && setTimeout(function () {
				e.setScrollOffset(0, t.getScrollY())
			}, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
		}, x.updateIndexIndicator = function () {
			v.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
		}, x.onGlobalTap = function (n) {
			n = n || window.event;
			var i = n.target || n.srcElement;
			if (!g)
				if (n.detail && "mouse" === n.detail.pointerType) {
					if (N(i)) return void e.close();
					t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
				}
				else if (v.tapToToggleControls && (T ? x.hideControls() : x.showControls()), v.tapToClose && (t.hasClass(i, "pswp__img") || N(i))) return void e.close()
		}, x.onMouseOver = function (e) {
			e = e || window.event;
			var t = e.target || e.srcElement;
			$(i, "ui--over-close", N(t))
		}, x.hideControls = function () {
			t.addClass(i, "pswp__ui--hidden"), T = !1
		}, x.showControls = function () {
			T = !0, C || x.update(), t.removeClass(i, "pswp__ui--hidden")
		}, x.supportsFullscreen = function () {
			var e = document;
			return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
		}, x.getFullscreenAPI = function () {
			var t, n = document.documentElement
				, i = "fullscreenchange";
			return n.requestFullscreen ? t = {
				enterK: "requestFullscreen"
				, exitK: "exitFullscreen"
				, elementK: "fullscreenElement"
				, eventK: i
			} : n.mozRequestFullScreen ? t = {
				enterK: "mozRequestFullScreen"
				, exitK: "mozCancelFullScreen"
				, elementK: "mozFullScreenElement"
				, eventK: "moz" + i
			} : n.webkitRequestFullscreen ? t = {
				enterK: "webkitRequestFullscreen"
				, exitK: "webkitExitFullscreen"
				, elementK: "webkitFullscreenElement"
				, eventK: "webkit" + i
			} : n.msRequestFullscreen && (t = {
				enterK: "msRequestFullscreen"
				, exitK: "msExitFullscreen"
				, elementK: "msFullscreenElement"
				, eventK: "MSFullscreenChange"
			}), t && (t.enter = function () {
				return u = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
			}, t.exit = function () {
				return v.closeOnScroll = u, document[this.exitK]()
			}, t.isFullscreen = function () {
				return document[this.elementK]
			}), t
		}
	};
	return e
}), $(document).ready(function () {
	waitForWebfonts(["proxima-nova"], function () {
		$("html").addClass("fonts-loaded")
	})
}), $(document).ready(function () {
	var e = function () {
		$(".gallery-feed .gallery-wrapper").galleryLayout({
			isCms: isCMS()
		})
	};
	$(document).on("wnd-content-change", function () {
		e()
	}), e();
	var t = $(".gallery-slideshow")
		, n = function () {
			t.each(function () {
				$(this).slideShow()
			})
		};
	$(document).on("wnd-redraw", ".gallery-slideshow", function () {
		$(this).slideShow()
	}), $(document).on("wnd-redraw", ".content", function () {
		setTimeout(function () {
			n()
		}, 400)
	}), t[0] && n()
}), $(document).ready(function () {
	mediaSectionArrowScroll(), checkCookieBar(), $(window).on("resize", function () {
		checkCookieBar()
	}), $(document).on("wnd-content-change", "main", function () {
		mediaSectionArrowScroll()
	})
});