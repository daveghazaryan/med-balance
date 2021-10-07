var ccWp = function(t) {
    function e(n) {
        if (r[n])
            return r[n].exports;
        var o = r[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(o.exports, o, o.exports, e),
            o.loaded = !0,
            o.exports
    }
    var r = {};
    return e.m = t,
        e.c = r,
        e.p = "",
        e(0)
}([function(t, e, r) {
    t.exports = r(21)
}
    , function(t, e) {
        "use strict";
        function r(t) {
            return "[object Array]" === g.call(t)
        }
        function n(t) {
            return "[object ArrayBuffer]" === g.call(t)
        }
        function o(t) {
            return "undefined" != typeof FormData && t instanceof FormData
        }
        function i(t) {
            var e;
            return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        }
        function s(t) {
            return "string" == typeof t
        }
        function u(t) {
            return "number" == typeof t
        }
        function a(t) {
            return "undefined" == typeof t
        }
        function c(t) {
            return null !== t && "object" == typeof t
        }
        function f(t) {
            return "[object Date]" === g.call(t)
        }
        function p(t) {
            return "[object File]" === g.call(t)
        }
        function l(t) {
            return "[object Blob]" === g.call(t)
        }
        function h(t) {
            return "[object Function]" === g.call(t)
        }
        function d(t) {
            return c(t) && h(t.pipe)
        }
        function y(t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }
        function m() {
            return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
        }
        function v(t, e) {
            if (null !== t && "undefined" != typeof t)
                if ("object" == typeof t || r(t) || (t = [t]),
                    r(t))
                    for (var n = 0, o = t.length; n < o; n++)
                        e.call(null, t[n], n, t);
                else
                    for (var i in t)
                        t.hasOwnProperty(i) && e.call(null, t[i], i, t)
        }
        function w() {
            function t(t, r) {
                "object" == typeof e[r] && "object" == typeof t ? e[r] = w(e[r], t) : e[r] = t
            }
            for (var e = {}, r = 0, n = arguments.length; r < n; r++)
                v(arguments[r], t);
            return e
        }
        var g = Object.prototype.toString;
        t.exports = {
            isArray: r,
            isArrayBuffer: n,
            isFormData: o,
            isArrayBufferView: i,
            isString: s,
            isNumber: u,
            isObject: c,
            isUndefined: a,
            isDate: f,
            isFile: p,
            isBlob: l,
            isFunction: h,
            isStream: d,
            isStandardBrowserEnv: m,
            forEach: v,
            merge: w,
            trim: y
        }
    }
    , function(t, e, r) {
        t.exports = r(25).Promise
    }
    , function(t, e) {
        function r() {
            throw new Error("setTimeout has not been defined")
        }
        function n() {
            throw new Error("clearTimeout has not been defined")
        }
        function o(t) {
            if (f === setTimeout)
                return setTimeout(t, 0);
            if ((f === r || !f) && setTimeout)
                return f = setTimeout,
                    setTimeout(t, 0);
            try {
                return f(t, 0)
            } catch (e) {
                try {
                    return f.call(null, t, 0)
                } catch (e) {
                    return f.call(this, t, 0)
                }
            }
        }
        function i(t) {
            if (p === clearTimeout)
                return clearTimeout(t);
            if ((p === n || !p) && clearTimeout)
                return p = clearTimeout,
                    clearTimeout(t);
            try {
                return p(t)
            } catch (e) {
                try {
                    return p.call(null, t)
                } catch (e) {
                    return p.call(this, t)
                }
            }
        }
        function s() {
            y && h && (y = !1,
                h.length ? d = h.concat(d) : m = -1,
            d.length && u())
        }
        function u() {
            if (!y) {
                var t = o(s);
                y = !0;
                for (var e = d.length; e; ) {
                    for (h = d,
                             d = []; ++m < e; )
                        h && h[m].run();
                    m = -1,
                        e = d.length
                }
                h = null,
                    y = !1,
                    i(t)
            }
        }
        function a(t, e) {
            this.fun = t,
                this.array = e
        }
        function c() {}
        var f, p, l = t.exports = {};
        !function() {
            try {
                f = "function" == typeof setTimeout ? setTimeout : r
            } catch (t) {
                f = r
            }
            try {
                p = "function" == typeof clearTimeout ? clearTimeout : n
            } catch (t) {
                p = n
            }
        }();
        var h, d = [], y = !1, m = -1;
        l.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                    e[r - 1] = arguments[r];
            d.push(new a(t,e)),
            1 !== d.length || y || o(u)
        }
            ,
            a.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            l.title = "browser",
            l.browser = !0,
            l.env = {},
            l.argv = [],
            l.version = "",
            l.versions = {},
            l.on = c,
            l.addListener = c,
            l.once = c,
            l.off = c,
            l.removeListener = c,
            l.removeAllListeners = c,
            l.emit = c,
            l.binding = function(t) {
                throw new Error("process.binding is not supported")
            }
            ,
            l.cwd = function() {
                return "/"
            }
            ,
            l.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }
            ,
            l.umask = function() {
                return 0
            }
    }
    , function(t, e, r) {
        (function(e) {
                "use strict";
                var n = r(1)
                    , o = r(13)
                    , i = r(18)
                    , s = r(5)
                    , u = r(17)
                    , a = "undefined" != typeof window && window.btoa || r(12)
                    , c = r(19);
                t.exports = function(t, f, p) {
                    var l = p.data
                        , h = p.headers;
                    n.isFormData(l) && delete h["Content-Type"];
                    var d = new XMLHttpRequest
                        , y = "onreadystatechange"
                        , m = !1;
                    if ("test" === e.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials"in d || u(p.url) || (d = new window.XDomainRequest,
                            y = "onload",
                            m = !0,
                            d.onprogress = function() {}
                            ,
                            d.ontimeout = function() {}
                    ),
                        p.auth) {
                        var v = p.auth.username || ""
                            , w = p.auth.password || "";
                        h.Authorization = "Basic " + a(v + ":" + w)
                    }
                    if (d.open(p.method.toUpperCase(), o(p.url, p.params, p.paramsSerializer), !0),
                        d.timeout = p.timeout,
                        d[y] = function() {
                            if (d && (4 === d.readyState || m) && 0 !== d.status) {
                                var e = "getAllResponseHeaders"in d ? i(d.getAllResponseHeaders()) : null
                                    , r = p.responseType && "text" !== p.responseType ? d.response : d.responseText
                                    , n = {
                                    data: s(r, e, p.transformResponse),
                                    status: 1223 === d.status ? 204 : d.status,
                                    statusText: 1223 === d.status ? "No Content" : d.statusText,
                                    headers: e,
                                    config: p,
                                    request: d
                                };
                                c(t, f, n),
                                    d = null
                            }
                        }
                        ,
                        d.onerror = function() {
                            f(new Error("Network Error")),
                                d = null
                        }
                        ,
                        d.ontimeout = function() {
                            var t = new Error("timeout of " + p.timeout + "ms exceeded");
                            t.timeout = p.timeout,
                                t.code = "ECONNABORTED",
                                f(t),
                                d = null
                        }
                        ,
                        n.isStandardBrowserEnv()) {
                        var g = r(15)
                            , b = p.withCredentials || u(p.url) ? g.read(p.xsrfCookieName) : void 0;
                        b && (h[p.xsrfHeaderName] = b)
                    }
                    if ("setRequestHeader"in d && n.forEach(h, function(t, e) {
                        "undefined" == typeof l && "content-type" === e.toLowerCase() ? delete h[e] : d.setRequestHeader(e, t)
                    }),
                    p.withCredentials && (d.withCredentials = !0),
                        p.responseType)
                        try {
                            d.responseType = p.responseType
                        } catch (t) {
                            if ("json" !== d.responseType)
                                throw t
                        }
                    p.progress && ("post" === p.method || "put" === p.method ? d.upload.addEventListener("progress", p.progress) : "get" === p.method && d.addEventListener("progress", p.progress)),
                    void 0 === l && (l = null),
                        d.send(l)
                }
            }
        ).call(e, r(3))
    }
    , function(t, e, r) {
        "use strict";
        var n = r(1);
        t.exports = function(t, e, r) {
            return n.forEach(r, function(r) {
                t = r(t, e)
            }),
                t
        }
    }
    , function(t, e, r) {
        t.exports = r(7)
    }
    , function(t, e, r) {
        (function(e) {
                "use strict";
                function n(t) {
                    this.defaults = i.merge({}, t),
                        this.interceptors = {
                            request: new u,
                            response: new u
                        }
                }
                var o = r(10)
                    , i = r(1)
                    , s = r(9)
                    , u = r(8)
                    , a = r(16)
                    , c = r(14)
                    , f = r(11)
                    , p = r(5);
                n.prototype.request = function(t) {
                    "string" == typeof t && (t = i.merge({
                        url: arguments[0]
                    }, arguments[1])),
                        t = i.merge(o, this.defaults, {
                            method: "get"
                        }, t),
                    t.baseURL && !a(t.url) && (t.url = c(t.baseURL, t.url)),
                        t.withCredentials = t.withCredentials || this.defaults.withCredentials,
                        t.data = p(t.data, t.headers, t.transformRequest),
                        t.headers = i.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}),
                        i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
                            delete t.headers[e]
                        });
                    var r = [s, void 0]
                        , n = e.resolve(t);
                    for (this.interceptors.request.forEach(function(t) {
                        r.unshift(t.fulfilled, t.rejected)
                    }),
                             this.interceptors.response.forEach(function(t) {
                                 r.push(t.fulfilled, t.rejected)
                             }); r.length; )
                        n = n.then(r.shift(), r.shift());
                    return n
                }
                ;
                var l = new n(o)
                    , h = t.exports = f(n.prototype.request, l);
                t.exports.Axios = n,
                    h.defaults = l.defaults,
                    h.interceptors = l.interceptors,
                    h.create = function(t) {
                        return new n(t)
                    }
                    ,
                    h.all = function(t) {
                        return e.all(t)
                    }
                    ,
                    h.spread = r(20),
                    i.forEach(["delete", "get", "head"], function(t) {
                        n.prototype[t] = function(e, r) {
                            return this.request(i.merge(r || {}, {
                                method: t,
                                url: e
                            }))
                        }
                            ,
                            h[t] = f(n.prototype[t], l)
                    }),
                    i.forEach(["post", "put", "patch"], function(t) {
                        n.prototype[t] = function(e, r, n) {
                            return this.request(i.merge(n || {}, {
                                method: t,
                                url: e,
                                data: r
                            }))
                        }
                            ,
                            h[t] = f(n.prototype[t], l)
                    })
            }
        ).call(e, r(2))
    }
    , function(t, e, r) {
        "use strict";
        function n() {
            this.handlers = []
        }
        var o = r(1);
        n.prototype.use = function(t, e) {
            return this.handlers.push({
                fulfilled: t,
                rejected: e
            }),
            this.handlers.length - 1
        }
            ,
            n.prototype.eject = function(t) {
                this.handlers[t] && (this.handlers[t] = null)
            }
            ,
            n.prototype.forEach = function(t) {
                o.forEach(this.handlers, function(e) {
                    null !== e && t(e)
                })
            }
            ,
            t.exports = n
    }
    , function(t, e, r) {
        (function(e, n) {
                "use strict";
                t.exports = function(t) {
                    return new e(function(e, o) {
                            try {
                                var i;
                                "function" == typeof t.adapter ? i = t.adapter : "undefined" != typeof XMLHttpRequest ? i = r(4) : "undefined" != typeof n && (i = r(4)),
                                "function" == typeof i && i(e, o, t)
                            } catch (t) {
                                o(t)
                            }
                        }
                    )
                }
            }
        ).call(e, r(2), r(3))
    }
    , function(t, e, r) {
        "use strict";
        var n = r(1)
            , o = /^\)\]\}',?\n/
            , i = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        t.exports = {
            transformRequest: [function(t, e) {
                return n.isFormData(t) || n.isArrayBuffer(t) || n.isStream(t) ? t : n.isArrayBufferView(t) ? t.buffer : !n.isObject(t) || n.isFile(t) || n.isBlob(t) ? t : (n.isUndefined(e) || (n.forEach(e, function(t, r) {
                    "content-type" === r.toLowerCase() && (e["Content-Type"] = t)
                }),
                n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = "application/json;charset=utf-8")),
                    JSON.stringify(t))
            }
            ],
            transformResponse: [function(t) {
                if ("string" == typeof t) {
                    t = t.replace(o, "");
                    try {
                        t = JSON.parse(t)
                    } catch (t) {}
                }
                return t
            }
            ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                patch: n.merge(i),
                post: n.merge(i),
                put: n.merge(i)
            },
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(t) {
                return t >= 200 && t < 300
            }
        }
    }
    , function(t, e) {
        "use strict";
        t.exports = function(t, e) {
            return function() {
                for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
                    r[n] = arguments[n];
                return t.apply(e, r)
            }
        }
    }
    , function(t, e) {
        "use strict";
        function r() {
            this.message = "String contains an invalid character"
        }
        function n(t) {
            for (var e, n, i = String(t), s = "", u = 0, a = o; i.charAt(0 | u) || (a = "=",
            u % 1); s += a.charAt(63 & e >> 8 - u % 1 * 8)) {
                if (n = i.charCodeAt(u += .75),
                n > 255)
                    throw new r;
                e = e << 8 | n
            }
            return s
        }
        var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        r.prototype = new Error,
            r.prototype.code = 5,
            r.prototype.name = "InvalidCharacterError",
            t.exports = n
    }
    , function(t, e, r) {
        "use strict";
        function n(t) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        var o = r(1);
        t.exports = function(t, e, r) {
            if (!e)
                return t;
            var i;
            if (r)
                i = r(e);
            else {
                var s = [];
                o.forEach(e, function(t, e) {
                    null !== t && "undefined" != typeof t && (o.isArray(t) && (e += "[]"),
                    o.isArray(t) || (t = [t]),
                        o.forEach(t, function(t) {
                            o.isDate(t) ? t = t.toISOString() : o.isObject(t) && (t = JSON.stringify(t)),
                                s.push(n(e) + "=" + n(t))
                        }))
                }),
                    i = s.join("&")
            }
            return i && (t += (t.indexOf("?") === -1 ? "?" : "&") + i),
                t
        }
    }
    , function(t, e) {
        "use strict";
        t.exports = function(t, e) {
            return t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "")
        }
    }
    , function(t, e, r) {
        "use strict";
        var n = r(1);
        t.exports = n.isStandardBrowserEnv() ? function() {
            return {
                write: function(t, e, r, o, i, s) {
                    var u = [];
                    u.push(t + "=" + encodeURIComponent(e)),
                    n.isNumber(r) && u.push("expires=" + new Date(r).toGMTString()),
                    n.isString(o) && u.push("path=" + o),
                    n.isString(i) && u.push("domain=" + i),
                    s === !0 && u.push("secure"),
                        document.cookie = u.join("; ")
                },
                read: function(t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                },
                remove: function(t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            }
        }() : function() {
            return {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        }()
    }
    , function(t, e) {
        "use strict";
        t.exports = function(t) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
        }
    }
    , function(t, e, r) {
        "use strict";
        var n = r(1);
        t.exports = n.isStandardBrowserEnv() ? function() {
            function t(t) {
                var e = t;
                return r && (o.setAttribute("href", e),
                    e = o.href),
                    o.setAttribute("href", e),
                    {
                        href: o.href,
                        protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                        host: o.host,
                        search: o.search ? o.search.replace(/^\?/, "") : "",
                        hash: o.hash ? o.hash.replace(/^#/, "") : "",
                        hostname: o.hostname,
                        port: o.port,
                        pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                    }
            }
            var e, r = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
            return e = t(window.location.href),
                function(r) {
                    var o = n.isString(r) ? t(r) : r;
                    return o.protocol === e.protocol && o.host === e.host
                }
        }() : function() {
            return function() {
                return !0
            }
        }()
    }
    , function(t, e, r) {
        "use strict";
        var n = r(1);
        t.exports = function(t) {
            var e, r, o, i = {};
            return t ? (n.forEach(t.split("\n"), function(t) {
                o = t.indexOf(":"),
                    e = n.trim(t.substr(0, o)).toLowerCase(),
                    r = n.trim(t.substr(o + 1)),
                e && (i[e] = i[e] ? i[e] + ", " + r : r)
            }),
                i) : i
        }
    }
    , function(t, e) {
        "use strict";
        t.exports = function(t, e, r) {
            var n = r.config.validateStatus;
            r.status && n && !n(r.status) ? e(r) : t(r)
        }
    }
    , function(t, e) {
        "use strict";
        t.exports = function(t) {
            return function(e) {
                return t.apply(null, e)
            }
        }
    }
    , function(t, e, r) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            , o = r(6)
            , i = r(24)
            , s = r(23)
            , u = r(22)
            , a = function(t, e, r) {
            function a(n) {
                if ("" !== n && n.data.forEach(function(t) {
                    c[c.length] = t
                }),
                0 == --f) {
                    if (c.sort(function(t, e) {
                        return t.date > e.date ? -1 : 1
                    }),
                    c.length > 0) {
                        if (c.length <= 4) {
                            var o = t.target.replace("news-list", "button");
                            o !== t.target && jQuery(o).hide()
                        }
                        c.splice(8, 50);
                        var i = u(c);
                        s(i, t.target, e)
                    } else {
                        var a = t.target.replace("list", "section");
                    }
                    r()
                }
            }
            if (e && "string" != typeof e)
                throw new Error("ccWp: templates must be a string");
            if (!i(t))
                throw new Error("Whoops! ValidateOptions error!");
            var c = []
                , f = t.endpoints.length;
            t.endpoints.forEach(function(t) {
                var e = t.url + "/wp-json/wp/v2/" + t.type + "?_embed";
                if (t.postCount && (e += "&per_page=" + t.postCount),
                t.filters && "object" == n(t.filters))
                    for (var r in t.filters)
                        switch (r) {
                            case "physicians-NPI":
                                e += "&" + r + "=" + t.filters[r];
                                break;
                            case "institutes-objectID":
                                e += "&" + r + "=" + t.filters[r];
                                break;
                            default:
                                e += "&" + r + "=" + t.filters[r]
                        }
                console.log("processing ajaxURL", e),
                    o.get(e).then(function(t) {
                        a(t)
                    }).catch(function(t) {
                        t instanceof Error ? console.log("ccWp: Error with ajax call", t.message) : console.log("request problem, response is: " + t.status),
                            a("")
                    })
            })
        };
        t.exports = a
    }
    , function(t, e) {
        "use strict";
        var r = function(t) {
            var e = {
                posts: []
            };
            if (!t)
                throw Error("ccWp: Wordpress data must be provided for parsing");
            if (Array.isArray(t) && 0 === t.length)
                throw Error("ccWp: data from the server is empty array; something is wrong");
            return t.forEach(function(t) {
                var r = {};
                if (!t.title || "" === t.title.rendered)
                    throw Error("ccWP: at least one post is missing a title");
                if (!t.excerpt || "" === t.excerpt.rendered)
                    throw Error("ccWp: at least one post is missing the excerpt");
                if (!t.link || "" === t.link)
                    throw Error("ccWp: at least one post is missing a link to the original");
                r.date = t.date,
                    r.title = t.title.rendered,
                    r.excerpt = t.excerpt.rendered,
                    r.link = t.link,
                    r.mediumImage = "";
                try {
                    r.mediumImage = t._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url
                } catch (t) {}
                e.posts.push(r)
            }),
                e
        };
        t.exports = r
    }
    , function(t, e, r) {
        "use strict";
        var n = r(26)
            , o = function(t, e, r) {
            var o = "<div class='testList'>{{#posts}}";
            if (o += "<a href='{{&link}}'><h1>{{title}}</h1></a>",
                o += "<p>{{excerpt}}</p>",
                o += "{{/posts}}</div>",
                !t)
                throw new Error("ccWp: no data provided; can't render without data!");
            if (Array.isArray(t) && 0 === t.length)
                throw new Error("ccWp: data must an array with at least one element!");
            if (r && "string" != typeof r)
                throw new Error("ccWp: templates must be a string");
            if (r || (r = o),
            null === e || "undefined" == typeof e)
                throw new Error("ccWp: a target is required to render the data to the page");
            if ("#" !== e.charAt(0))
                throw new Error("ccWp: render target must identify an ID with a #");
            if ("#" === e)
                throw new Error("ccWp: hey, you need more than an octothorpe to render to a page");
            var i = document.getElementById(e.substring(1));
            if (void 0 === i || null === i)
                throw new Error("ccWp: looks like there is no ID for the content...check the page?");
            var s = n.render(r, t);
            return document.getElementById(e.substring(1)).innerHTML = s,
                !0
        };
        t.exports = o
    }
    , function(t, e) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            , n = function(t) {
            if ("undefined" == typeof t || null === t)
                return !1;
            if (null === t.target || "undefined" == typeof t.target)
                throw new Error("ccWp: options.target is required");
            if ("#" !== t.target.charAt(0))
                throw new Error("ccWp: options.target must identify an ID with a #");
            if ("object" != r(t.endpoints) || !Array.isArray(t.endpoints) || 0 == t.endpoints.length)
                throw new Error("ccWp: options.endpoints must be a non-empty array of objects.");
            return t.endpoints.forEach(function(t) {
                if ("string" != typeof t.url && "" !== t.url)
                    throw new Error("ccWp: endpoint must include a target url");
                if (!/^(?:(?:(?:https?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t.url))
                    throw new Error("ccWp: endpoint must include a target url");
                var e = ["posts", "pages", "categories", "authors"];
                if (t.type && "string" != typeof t.type)
                    throw new Error("ccWp: endpoint must include a valid type");
                if (t.type && e.indexOf(t.type) === -1)
                    throw new Error("ccWp: endpoint must include a valid type");
                if (t.postCount && "number" != typeof t.postCount)
                    throw new Error("ccWp: endpoint.postCount must be a number from 1 to 100");
                if (t.postCount && (t.postCount < 0 || t.postCount > 100))
                    throw new Error("ccWp: endpoint.postCount must be a number from 1 to 100")
            }),
                t
        };
        t.exports = n
    }
    , function(t, e, r) {
        (function(e, n, o) {
                !function(e, r) {
                    t.exports = r()
                }(this, function() {
                    "use strict";
                    function t(t) {
                        return "function" == typeof t || "object" == typeof t && null !== t
                    }
                    function n(t) {
                        return "function" == typeof t
                    }
                    function i(t) {
                        K = t
                    }
                    function s(t) {
                        Y = t
                    }
                    function u() {
                        return function() {
                            return e.nextTick(l)
                        }
                    }
                    function a() {
                        return function() {
                            J(l)
                        }
                    }
                    function c() {
                        var t = 0
                            , e = new Z(l)
                            , r = document.createTextNode("");
                        return e.observe(r, {
                            characterData: !0
                        }),
                            function() {
                                r.data = t = ++t % 2
                            }
                    }
                    function f() {
                        var t = new MessageChannel;
                        return t.port1.onmessage = l,
                            function() {
                                return t.port2.postMessage(0)
                            }
                    }
                    function p() {
                        var t = setTimeout;
                        return function() {
                            return t(l, 1)
                        }
                    }
                    function l() {
                        for (var t = 0; t < $; t += 2) {
                            var e = rt[t]
                                , r = rt[t + 1];
                            e(r),
                                rt[t] = void 0,
                                rt[t + 1] = void 0
                        }
                        $ = 0
                    }
                    function h() {
                        try {
                            var t = r(27);
                            return J = t.runOnLoop || t.runOnContext,
                                a()
                        } catch (t) {
                            return p()
                        }
                    }
                    function d(t, e) {
                        var r = arguments
                            , n = this
                            , o = new this.constructor(m);
                        void 0 === o[ot] && B(o);
                        var i = n._state;
                        return i ? !function() {
                            var t = r[i - 1];
                            Y(function() {
                                return R(i, o, t, n._result)
                            })
                        }() : C(n, o, t, e),
                            o
                    }
                    function y(t) {
                        var e = this;
                        if (t && "object" == typeof t && t.constructor === e)
                            return t;
                        var r = new e(m);
                        return A(r, t),
                            r
                    }
                    function m() {}
                    function v() {
                        return new TypeError("You cannot resolve a promise with itself")
                    }
                    function w() {
                        return new TypeError("A promises callback cannot return that same promise.")
                    }
                    function g(t) {
                        try {
                            return t.then
                        } catch (t) {
                            return at.error = t,
                                at
                        }
                    }
                    function b(t, e, r, n) {
                        try {
                            t.call(e, r, n)
                        } catch (t) {
                            return t
                        }
                    }
                    function E(t, e, r) {
                        Y(function(t) {
                            var n = !1
                                , o = b(r, e, function(r) {
                                n || (n = !0,
                                    e !== r ? A(t, r) : T(t, r))
                            }, function(e) {
                                n || (n = !0,
                                    j(t, e))
                            }, "Settle: " + (t._label || " unknown promise"));
                            !n && o && (n = !0,
                                j(t, o))
                        }, t)
                    }
                    function x(t, e) {
                        e._state === st ? T(t, e._result) : e._state === ut ? j(t, e._result) : C(e, void 0, function(e) {
                            return A(t, e)
                        }, function(e) {
                            return j(t, e)
                        })
                    }
                    function _(t, e, r) {
                        e.constructor === t.constructor && r === d && e.constructor.resolve === y ? x(t, e) : r === at ? j(t, at.error) : void 0 === r ? T(t, e) : n(r) ? E(t, e, r) : T(t, e)
                    }
                    function A(e, r) {
                        e === r ? j(e, v()) : t(r) ? _(e, r, g(r)) : T(e, r)
                    }
                    function S(t) {
                        t._onerror && t._onerror(t._result),
                            k(t)
                    }
                    function T(t, e) {
                        t._state === it && (t._result = e,
                            t._state = st,
                        0 !== t._subscribers.length && Y(k, t))
                    }
                    function j(t, e) {
                        t._state === it && (t._state = ut,
                            t._result = e,
                            Y(S, t))
                    }
                    function C(t, e, r, n) {
                        var o = t._subscribers
                            , i = o.length;
                        t._onerror = null,
                            o[i] = e,
                            o[i + st] = r,
                            o[i + ut] = n,
                        0 === i && t._state && Y(k, t)
                    }
                    function k(t) {
                        var e = t._subscribers
                            , r = t._state;
                        if (0 !== e.length) {
                            for (var n = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3)
                                n = e[s],
                                    o = e[s + r],
                                    n ? R(r, n, o, i) : o(i);
                            t._subscribers.length = 0
                        }
                    }
                    function W() {
                        this.error = null
                    }
                    function O(t, e) {
                        try {
                            return t(e)
                        } catch (t) {
                            return ct.error = t,
                                ct
                        }
                    }
                    function R(t, e, r, o) {
                        var i = n(r)
                            , s = void 0
                            , u = void 0
                            , a = void 0
                            , c = void 0;
                        if (i) {
                            if (s = O(r, o),
                                s === ct ? (c = !0,
                                    u = s.error,
                                    s = null) : a = !0,
                            e === s)
                                return void j(e, w())
                        } else
                            s = o,
                                a = !0;
                        e._state !== it || (i && a ? A(e, s) : c ? j(e, u) : t === st ? T(e, s) : t === ut && j(e, s))
                    }
                    function D(t, e) {
                        try {
                            e(function(e) {
                                A(t, e)
                            }, function(e) {
                                j(t, e)
                            })
                        } catch (e) {
                            j(t, e)
                        }
                    }
                    function U() {
                        return ft++
                    }
                    function B(t) {
                        t[ot] = ft++,
                            t._state = void 0,
                            t._result = void 0,
                            t._subscribers = []
                    }
                    function q(t, e) {
                        this._instanceConstructor = t,
                            this.promise = new t(m),
                        this.promise[ot] || B(this.promise),
                            X(e) ? (this._input = e,
                                this.length = e.length,
                                this._remaining = e.length,
                                this._result = new Array(this.length),
                                0 === this.length ? T(this.promise, this._result) : (this.length = this.length || 0,
                                    this._enumerate(),
                                0 === this._remaining && T(this.promise, this._result))) : j(this.promise, N())
                    }
                    function N() {
                        return new Error("Array Methods must be provided an Array")
                    }
                    function I(t) {
                        return new q(this,t).promise
                    }
                    function L(t) {
                        var e = this;
                        return new e(X(t) ? function(r, n) {
                                for (var o = t.length, i = 0; i < o; i++)
                                    e.resolve(t[i]).then(r, n)
                            }
                            : function(t, e) {
                                return e(new TypeError("You must pass an array to race."))
                            }
                        )
                    }
                    function F(t) {
                        var e = this
                            , r = new e(m);
                        return j(r, t),
                            r
                    }
                    function P() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }
                    function V() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }
                    function M(t) {
                        this[ot] = U(),
                            this._result = this._state = void 0,
                            this._subscribers = [],
                        m !== t && ("function" != typeof t && P(),
                            this instanceof M ? D(this, t) : V())
                    }
                    function z() {
                        var t = void 0;
                        if ("undefined" != typeof o)
                            t = o;
                        else if ("undefined" != typeof self)
                            t = self;
                        else
                            try {
                                t = Function("return this")()
                            } catch (t) {
                                throw new Error("polyfill failed because global object is unavailable in this environment")
                            }
                        var e = t.Promise;
                        if (e) {
                            var r = null;
                            try {
                                r = Object.prototype.toString.call(e.resolve())
                            } catch (t) {}
                            if ("[object Promise]" === r && !e.cast)
                                return
                        }
                        t.Promise = M
                    }
                    var H = void 0;
                    H = Array.isArray ? Array.isArray : function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }
                    ;
                    var X = H
                        , $ = 0
                        , J = void 0
                        , K = void 0
                        , Y = function(t, e) {
                        rt[$] = t,
                            rt[$ + 1] = e,
                            $ += 2,
                        2 === $ && (K ? K(l) : nt())
                    }
                        , Q = "undefined" != typeof window ? window : void 0
                        , G = Q || {}
                        , Z = G.MutationObserver || G.WebKitMutationObserver
                        , tt = "undefined" == typeof self && "undefined" != typeof e && "[object process]" === {}.toString.call(e)
                        , et = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel
                        , rt = new Array(1e3)
                        , nt = void 0;
                    nt = tt ? u() : Z ? c() : et ? f() : void 0 === Q ? h() : p();
                    var ot = Math.random().toString(36).substring(16)
                        , it = void 0
                        , st = 1
                        , ut = 2
                        , at = new W
                        , ct = new W
                        , ft = 0;
                    return q.prototype._enumerate = function() {
                        for (var t = this.length, e = this._input, r = 0; this._state === it && r < t; r++)
                            this._eachEntry(e[r], r)
                    }
                        ,
                        q.prototype._eachEntry = function(t, e) {
                            var r = this._instanceConstructor
                                , n = r.resolve;
                            if (n === y) {
                                var o = g(t);
                                if (o === d && t._state !== it)
                                    this._settledAt(t._state, e, t._result);
                                else if ("function" != typeof o)
                                    this._remaining--,
                                        this._result[e] = t;
                                else if (r === M) {
                                    var i = new r(m);
                                    _(i, t, o),
                                        this._willSettleAt(i, e)
                                } else
                                    this._willSettleAt(new r(function(e) {
                                            return e(t)
                                        }
                                    ), e)
                            } else
                                this._willSettleAt(n(t), e)
                        }
                        ,
                        q.prototype._settledAt = function(t, e, r) {
                            var n = this.promise;
                            n._state === it && (this._remaining--,
                                t === ut ? j(n, r) : this._result[e] = r),
                            0 === this._remaining && T(n, this._result)
                        }
                        ,
                        q.prototype._willSettleAt = function(t, e) {
                            var r = this;
                            C(t, void 0, function(t) {
                                return r._settledAt(st, e, t)
                            }, function(t) {
                                return r._settledAt(ut, e, t)
                            })
                        }
                        ,
                        M.all = I,
                        M.race = L,
                        M.resolve = y,
                        M.reject = F,
                        M._setScheduler = i,
                        M._setAsap = s,
                        M._asap = Y,
                        M.prototype = {
                            constructor: M,
                            then: d,
                            catch: function(t) {
                                return this.then(null, t)
                            }
                        },
                        z(),
                        M.polyfill = z,
                        M.Promise = M,
                        M
                })
            }
        ).call(e, r(3), r(2), function() {
            return this
        }())
    }
    , function(t, e, r) {
        var n, o, i;
        !function(r, s) {
            "object" == typeof e && e && "string" != typeof e.nodeName ? s(e) : (o = [e],
                n = s,
                i = "function" == typeof n ? n.apply(e, o) : n,
                !(void 0 !== i && (t.exports = i)))
        }(this, function(t) {
            function e(t) {
                return "function" == typeof t
            }
            function r(t) {
                return y(t) ? "array" : typeof t
            }
            function n(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            function o(t, e) {
                return null != t && "object" == typeof t && e in t
            }
            function i(t, e) {
                return m.call(t, e)
            }
            function s(t) {
                return !i(v, t)
            }
            function u(t) {
                return String(t).replace(/[&<>"'`=\/]/g, function(t) {
                    return w[t]
                })
            }
            function a(e, r) {
                function o() {
                    if (v && !w)
                        for (; m.length; )
                            delete d[m.pop()];
                    else
                        m = [];
                    v = !1,
                        w = !1
                }
                function i(t) {
                    if ("string" == typeof t && (t = t.split(b, 2)),
                    !y(t) || 2 !== t.length)
                        throw new Error("Invalid tags: " + t);
                    u = new RegExp(n(t[0]) + "\\s*"),
                        a = new RegExp("\\s*" + n(t[1])),
                        l = new RegExp("\\s*" + n("}" + t[1]))
                }
                if (!e)
                    return [];
                var u, a, l, h = [], d = [], m = [], v = !1, w = !1;
                i(r || t.tags);
                for (var A, S, T, j, C, k, W = new p(e); !W.eos(); ) {
                    if (A = W.pos,
                        T = W.scanUntil(u))
                        for (var O = 0, R = T.length; O < R; ++O)
                            j = T.charAt(O),
                                s(j) ? m.push(d.length) : w = !0,
                                d.push(["text", j, A, A + 1]),
                                A += 1,
                            "\n" === j && o();
                    if (!W.scan(u))
                        break;
                    if (v = !0,
                        S = W.scan(_) || "name",
                        W.scan(g),
                        "=" === S ? (T = W.scanUntil(E),
                            W.scan(E),
                            W.scanUntil(a)) : "{" === S ? (T = W.scanUntil(l),
                            W.scan(x),
                            W.scanUntil(a),
                            S = "&") : T = W.scanUntil(a),
                        !W.scan(a))
                        throw new Error("Unclosed tag at " + W.pos);
                    if (C = [S, T, A, W.pos],
                        d.push(C),
                    "#" === S || "^" === S)
                        h.push(C);
                    else if ("/" === S) {
                        if (k = h.pop(),
                            !k)
                            throw new Error('Unopened section "' + T + '" at ' + A);
                        if (k[1] !== T)
                            throw new Error('Unclosed section "' + k[1] + '" at ' + A)
                    } else
                        "name" === S || "{" === S || "&" === S ? w = !0 : "=" === S && i(T)
                }
                if (k = h.pop())
                    throw new Error('Unclosed section "' + k[1] + '" at ' + W.pos);
                return f(c(d))
            }
            function c(t) {
                for (var e, r, n = [], o = 0, i = t.length; o < i; ++o)
                    e = t[o],
                    e && ("text" === e[0] && r && "text" === r[0] ? (r[1] += e[1],
                        r[3] = e[3]) : (n.push(e),
                        r = e));
                return n
            }
            function f(t) {
                for (var e, r, n = [], o = n, i = [], s = 0, u = t.length; s < u; ++s)
                    switch (e = t[s],
                        e[0]) {
                        case "#":
                        case "^":
                            o.push(e),
                                i.push(e),
                                o = e[4] = [];
                            break;
                        case "/":
                            r = i.pop(),
                                r[5] = e[2],
                                o = i.length > 0 ? i[i.length - 1][4] : n;
                            break;
                        default:
                            o.push(e)
                    }
                return n
            }
            function p(t) {
                this.string = t,
                    this.tail = t,
                    this.pos = 0
            }
            function l(t, e) {
                this.view = t,
                    this.cache = {
                        ".": this.view
                    },
                    this.parent = e
            }
            function h() {
                this.cache = {}
            }
            var d = Object.prototype.toString
                , y = Array.isArray || function(t) {
                return "[object Array]" === d.call(t)
            }
                , m = RegExp.prototype.test
                , v = /\S/
                , w = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            }
                , g = /\s*/
                , b = /\s+/
                , E = /\s*=/
                , x = /\s*\}/
                , _ = /#|\^|\/|>|\{|&|=|!/;
            p.prototype.eos = function() {
                return "" === this.tail
            }
                ,
                p.prototype.scan = function(t) {
                    var e = this.tail.match(t);
                    if (!e || 0 !== e.index)
                        return "";
                    var r = e[0];
                    return this.tail = this.tail.substring(r.length),
                        this.pos += r.length,
                        r
                }
                ,
                p.prototype.scanUntil = function(t) {
                    var e, r = this.tail.search(t);
                    switch (r) {
                        case -1:
                            e = this.tail,
                                this.tail = "";
                            break;
                        case 0:
                            e = "";
                            break;
                        default:
                            e = this.tail.substring(0, r),
                                this.tail = this.tail.substring(r)
                    }
                    return this.pos += e.length,
                        e
                }
                ,
                l.prototype.push = function(t) {
                    return new l(t,this)
                }
                ,
                l.prototype.lookup = function(t) {
                    var r, n = this.cache;
                    if (n.hasOwnProperty(t))
                        r = n[t];
                    else {
                        for (var i, s, u = this, a = !1; u; ) {
                            if (t.indexOf(".") > 0)
                                for (r = u.view,
                                         i = t.split("."),
                                         s = 0; null != r && s < i.length; )
                                    s === i.length - 1 && (a = o(r, i[s])),
                                        r = r[i[s++]];
                            else
                                r = u.view[t],
                                    a = o(u.view, t);
                            if (a)
                                break;
                            u = u.parent
                        }
                        n[t] = r
                    }
                    return e(r) && (r = r.call(this.view)),
                        r
                }
                ,
                h.prototype.clearCache = function() {
                    this.cache = {}
                }
                ,
                h.prototype.parse = function(t, e) {
                    var r = this.cache
                        , n = r[t];
                    return null == n && (n = r[t] = a(t, e)),
                        n
                }
                ,
                h.prototype.render = function(t, e, r) {
                    var n = this.parse(t)
                        , o = e instanceof l ? e : new l(e);
                    return this.renderTokens(n, o, r, t)
                }
                ,
                h.prototype.renderTokens = function(t, e, r, n) {
                    for (var o, i, s, u = "", a = 0, c = t.length; a < c; ++a)
                        s = void 0,
                            o = t[a],
                            i = o[0],
                            "#" === i ? s = this.renderSection(o, e, r, n) : "^" === i ? s = this.renderInverted(o, e, r, n) : ">" === i ? s = this.renderPartial(o, e, r, n) : "&" === i ? s = this.unescapedValue(o, e) : "name" === i ? s = this.escapedValue(o, e) : "text" === i && (s = this.rawValue(o)),
                        void 0 !== s && (u += s);
                    return u
                }
                ,
                h.prototype.renderSection = function(t, r, n, o) {
                    function i(t) {
                        return s.render(t, r, n)
                    }
                    var s = this
                        , u = ""
                        , a = r.lookup(t[1]);
                    if (a) {
                        if (y(a))
                            for (var c = 0, f = a.length; c < f; ++c)
                                u += this.renderTokens(t[4], r.push(a[c]), n, o);
                        else if ("object" == typeof a || "string" == typeof a || "number" == typeof a)
                            u += this.renderTokens(t[4], r.push(a), n, o);
                        else if (e(a)) {
                            if ("string" != typeof o)
                                throw new Error("Cannot use higher-order sections without the original template");
                            a = a.call(r.view, o.slice(t[3], t[5]), i),
                            null != a && (u += a)
                        } else
                            u += this.renderTokens(t[4], r, n, o);
                        return u
                    }
                }
                ,
                h.prototype.renderInverted = function(t, e, r, n) {
                    var o = e.lookup(t[1]);
                    if (!o || y(o) && 0 === o.length)
                        return this.renderTokens(t[4], e, r, n)
                }
                ,
                h.prototype.renderPartial = function(t, r, n) {
                    if (n) {
                        var o = e(n) ? n(t[1]) : n[t[1]];
                        return null != o ? this.renderTokens(this.parse(o), r, n, o) : void 0
                    }
                }
                ,
                h.prototype.unescapedValue = function(t, e) {
                    var r = e.lookup(t[1]);
                    if (null != r)
                        return r
                }
                ,
                h.prototype.escapedValue = function(e, r) {
                    var n = r.lookup(e[1]);
                    if (null != n)
                        return t.escape(n)
                }
                ,
                h.prototype.rawValue = function(t) {
                    return t[1]
                }
                ,
                t.name = "mustache.js",
                t.version = "2.3.0",
                t.tags = ["{{", "}}"];
            var A = new h;
            return t.clearCache = function() {
                return A.clearCache()
            }
                ,
                t.parse = function(t, e) {
                    return A.parse(t, e)
                }
                ,
                t.render = function(t, e, n) {
                    if ("string" != typeof t)
                        throw new TypeError('Invalid template! Template should be a "string" but "' + r(t) + '" was given as the first argument for mustache#render(template, view, partials)');
                    return A.render(t, e, n)
                }
                ,
                t.to_html = function(r, n, o, i) {
                    var s = t.render(r, n, o);
                    return e(i) ? void i(s) : s
                }
                ,
                t.escape = u,
                t.Scanner = p,
                t.Context = l,
                t.Writer = h,
                t
        })
    }
    , function(t, e) {}
]);
