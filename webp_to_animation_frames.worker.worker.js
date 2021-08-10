/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(() => {
    var e = {
            494: (e, i, r) => {
                var f, n = void 0 !== n ? n : {},
                    t = {};
                for (f in n) n.hasOwnProperty(f) && (t[f] = n[f]);
                n.arguments = [], n.thisProgram = "./this.program", n.quit = function(e, i) {
                    throw i
                }, n.preRun = [];
                var u, a, A, l = n.postRun = [];
                l = "object" == typeof window, u = "function" == typeof importScripts, a = "object" == typeof process && !l && !u, A = !l && !a && !u;
                var o, c, s = "";
                a ? (s = __dirname + "/", n.read = function(e, i) {
                    var f;
                    return (f = z(e)) || (o || (o = r(747)), c || (c = r(470)), e = c.normalize(e), f = o.readFileSync(e)), i ? f : f.toString()
                }, n.readBinary = function(e) {
                    var i = n.read(e, !0);
                    return i.buffer || (i = new Uint8Array(i)), g(i.buffer), i
                }, 1 < process.argv.length && (n.thisProgram = process.argv[1].replace(/\\/g, "/")), n.arguments = process.argv.slice(2), e.exports = n, process.on("uncaughtException", (function(e) {
                    if (!(e instanceof re)) throw e
                })), process.on("unhandledRejection", ne), n.quit = function(e) {
                    process.exit(e)
                }, n.inspect = function() {
                    return "[Emscripten Module object]"
                }) : A ? ("undefined" != typeof read && (n.read = function(e) {
                    var i = z(e);
                    return i ? T(i) : read(e)
                }), n.readBinary = function(e) {
                    var i;
                    return (i = z(e)) ? i : "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (g("object" == typeof(i = read(e, "binary"))), i)
                }, "undefined" != typeof scriptArgs ? n.arguments = scriptArgs : "undefined" != typeof arguments && (n.arguments = arguments), "function" == typeof quit && (n.quit = function(e) {
                    quit(e)
                })) : (l || u) && (u ? s = self.location.href : document.currentScript && (s = document.currentScript.src), s = 0 !== s.indexOf("blob:") ? s.substr(0, s.lastIndexOf("/") + 1) : "", n.read = function(e) {
                    try {
                        var i = new XMLHttpRequest;
                        return i.open("GET", e, !1), i.send(null), i.responseText
                    } catch (i) {
                        var r = z(e);
                        if (r) return T(r);
                        throw i
                    }
                }, u && (n.readBinary = function(e) {
                    try {
                        var i = new XMLHttpRequest;
                        return i.open("GET", e, !1), i.responseType = "arraybuffer", i.send(null), new Uint8Array(i.response)
                    } catch (i) {
                        var r = z(e);
                        if (r) return r;
                        throw i
                    }
                }), n.readAsync = function(e, i, r) {
                    var f = new XMLHttpRequest;
                    f.open("GET", e, !0), f.responseType = "arraybuffer", f.onload = function() {
                        if (200 == f.status || 0 == f.status && f.response) i(f.response);
                        else {
                            var n = z(e);
                            n ? i(n.buffer) : r()
                        }
                    }, f.onerror = r, f.send(null)
                }, n.setWindowTitle = function(e) {
                    document.title = e
                });
                var b = n.print || ("undefined" != typeof console ? console.log.bind(console) : "undefined" != typeof print ? print : null),
                    h = n.printErr || ("undefined" != typeof printErr ? printErr : "undefined" != typeof console && console.warn.bind(console) || b);
                for (f in t) t.hasOwnProperty(f) && (n[f] = t[f]);
                t = void 0;
                new Array(0);
                var k = 0,
                    w = !1;

                function g(e, i) {
                    e || ne("Assertion failed: " + i)
                }

                function v(e) {
                    var i = n["_" + e];
                    return g(i, "Cannot call unknown function " + e + ", make sure it is exported"), i
                }

                function C(e, i, r, f, n) {
                    var t = {
                            string: function(e) {
                                var i = 0;
                                if (null != e && 0 !== e) {
                                    var r = 1 + (e.length << 2);
                                    ! function(e, i, r) {
                                        (function(e, i, r, f) {
                                            if (!(0 < f)) return 0;
                                            for (var n = r, t = r + f - 1, u = 0; u < e.length; ++u) {
                                                var a = e.charCodeAt(u);
                                                if (55296 <= a && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++u)), a <= 127) {
                                                    if (t <= r) break;
                                                    i[r++] = a
                                                } else if (a <= 2047) {
                                                    if (t <= r + 1) break;
                                                    i[r++] = 192 | a >> 6, i[r++] = 128 | 63 & a
                                                } else if (a <= 65535) {
                                                    if (t <= r + 2) break;
                                                    i[r++] = 224 | a >> 12, i[r++] = 128 | a >> 6 & 63, i[r++] = 128 | 63 & a
                                                } else {
                                                    if (t <= r + 3) break;
                                                    i[r++] = 240 | a >> 18, i[r++] = 128 | a >> 12 & 63, i[r++] = 128 | a >> 6 & 63, i[r++] = 128 | 63 & a
                                                }
                                            }
                                            i[r] = 0
                                        })(e, m, i, r)
                                    }(e, i = q(r), r)
                                }
                                return i
                            },
                            array: function(e) {
                                var i = q(e.length);
                                return function(e, i) {
                                    y.set(e, i)
                                }(e, i), i
                            }
                        },
                        u = v(e),
                        a = [],
                        A = 0;
                    if (f)
                        for (var l = 0; l < f.length; l++) {
                            var o = t[r[l]];
                            o ? (0 === A && (A = X()), a[l] = o(f[l])) : a[l] = f[l]
                        }
                    var c = u.apply(null, a);
                    return c = function(e) {
                        return "string" === i ? (r = e) ? function(e, i, r) {
                            for (var f = i + r, n = i; e[n] && !(f <= n);) ++n;
                            if (16 < n - i && e.subarray && I) return I.decode(e.subarray(i, n));
                            for (var t = ""; i < n;) {
                                var u = e[i++];
                                if (128 & u) {
                                    var a = 63 & e[i++];
                                    if (192 != (224 & u)) {
                                        var A = 63 & e[i++];
                                        if ((u = 224 == (240 & u) ? (15 & u) << 12 | a << 6 | A : (7 & u) << 18 | a << 12 | A << 6 | 63 & e[i++]) < 65536) t += String.fromCharCode(u);
                                        else {
                                            var l = u - 65536;
                                            t += String.fromCharCode(55296 | l >> 10, 56320 | 1023 & l)
                                        }
                                    } else t += String.fromCharCode((31 & u) << 6 | a)
                                } else t += String.fromCharCode(u)
                            }
                            return t
                        }(m, r, f) : "" : "boolean" === i ? Boolean(e) : e;
                        var r, f
                    }(c), 0 !== A && K(A), c
                }
                var I = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
                var d, y, m, p;
                "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
                var P = 9776,
                    D = 5242880,
                    B = n.TOTAL_MEMORY || 33554432;

                function E(e) {
                    for (; 0 < e.length;) {
                        var i = e.shift();
                        if ("function" != typeof i) {
                            var r = i.func;
                            "number" == typeof r ? void 0 === i.arg ? n.dynCall_v(r) : n.dynCall_vi(r, i.arg) : r(void 0 === i.arg ? null : i.arg)
                        } else i()
                    }
                }
                B < D && h("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + B + "! (TOTAL_STACK=" + "5242880)"), d = n.buffer ? n.buffer : new ArrayBuffer(B), n.HEAP8 = y = new Int8Array(d), n.HEAP16 = new Int16Array(d), n.HEAP32 = p = new Int32Array(d), n.HEAPU8 = m = new Uint8Array(d), n.HEAPU16 = new Uint16Array(d), n.HEAPU32 = new Uint32Array(d), n.HEAPF32 = new Float32Array(d), n.HEAPF64 = new Float64Array(d), p[P >> 2] = 5252912;
                var R = [],
                    G = [],
                    _ = [],
                    F = [],
                    S = !1;
                Math.abs, Math.ceil, Math.floor, Math.min;
                var x = 0,
                    Q = null,
                    H = null;
                n.preloadedImages = {}, n.preloadedAudios = {};
                var M = null,
                    V = "data:application/octet-stream;base64,";

                function Y(e) {
                    return String.prototype.startsWith ? e.startsWith(V) : 0 === e.indexOf(V)
                }

                function U() {
                    return y.length
                }

                function Z(e) {
                    ne("OOM")
                }
                var W = !(M = "data:application/octet-stream;base64,AAAAAAAAAABWUDggAQAAAAIAAABWUDhMAQAAAAIAAABWUDhYAwAAAAQAAAAwMDAwAAAAAAAAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f38AAAAAAAAAAPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDx8vP09fb3+Pn6+/z9/v8AAQIDBAUGBwgJCgsMDQ4PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAP/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQABAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AGAcXGSgGJykWGiYqOAU3ORUbNjolK0gER0kUHDU7RkokLFhFSzQ8A1dZEx1WWiMtRExVWzM9aAJnaRIeZmoiLlRcQ01lazI+eAF3eVNdER9kbEJOdnohL3V7MT9jbVJeAHR8QU8QIGJuMHN9UV9Acn5hb1Bxf2BwAAAAAAAAAAAAAAAAAQAAAAMAAAAHAAAADwAAAB8AAAA/AAAAfwAAAP8AAAD/AQAA/wMAAP8HAAD/DwAA/x8AAP8/AAD/fwAA//8AAP//AQD//wMA//8HAP//DwD//x8A//8/AP//fwD///8AAAAAAAAAAAAAAAAAiguMC44LkguaC6oLygsKDIwMjA2MD4wTAAAAAAAAAAAREgABAgMEBRAGBwgJCgsMDQ4PAAAAAAAAAAAAAAAAADBS4Q2GGLMDy6xfd2piiBxVXDhoKLizFPj+hUpLuN1Jl/P8ZIkCVVwAAClK2sF+Dau3QFl9V5JUcsoZTmmM0zhl7gEMX3WhMlL2N1QyLLtasVeqD+cz9XPa7l9o4sxjdYMOmW7tpzBHxtnATzwVa0n6AxRPDPsaVDILmXMcy9cmBjfMb9h3uywqL3Z13cwlZGFUsyQVh30KqBQEIme/HhSDFbRW4wLlc2+xykRCTSYo+666c+3rUAr7tmodC9Q6DWg72zWDHggrlWvOd/DlgVG8O4V4lJSfADzt5ScAAAAAAAAEAAgADACAAIQAiACMAAABBAEIAQwBgAGEAYgBjAHneDBZc3F4mHCYs0B+qnYuRl+vRY9QVVJIm2c4Ogqr2r0RDZhyGhGjLMMVCq15GFDDGj4sQFWQRwomq9WQIhqqLjcTiKAhzkc/FAhyctAMCeJRKAtgtlQdECSGt1mJYmVqpZRIu2SCnW8gS1BCZqdjSj4o6oApNQmy8Y0aCGtKKxqSSaYxF51BJmmgMzQfc4BoTwwb2f9XEQdXREcscjMPuhcvKQ5utrcVEcJCLRlmxb0XEhZYWJOWKi4txM0rYbd1VSYjsz0nNchXGhUr6Ks4IjNocmYdXU0nHFWrOqVaYkAiFnTOFyIrpklrNiAaMwFRKx9EGWoWQKsk4XIiExVmhLwQTHw+Ek5fVTkyMDPBZSOf129ZLm88lB+s2+QVEm9wcU1Vs/8meHIoKgHE9dEKGW1YKx2MptUlK5o9Px6bQy1EAdFkUAgrmgEzGkeOTk4Q/4AixaspKAVm07cEAd0zMhGo0cAXGVKKHySrG6YmLOVDVzqpUnMaO7M/O1q0O6ZdSZooKBV0j9EiJ68vDxC3It8xLbcuESG3BmIPILc5LhYYgAE2ESVBIElzHIAXgM0oAwlzM8ASBt9XJQlzO01AFS9oNyzaCTY1guJAWkbNKCkXGjk2OXC4BSkmptUeIhqFmHQKIIYnEzXdGnIgSf8fCUHqAg8BdklLIAwzwP+gKzNYHyNDZlU3ulU4FRdvO80tJcA3JkZ8SWYBImJ9YipYaFV1r1JfVDVZgGRxZS1LT3svM4BRqwE5EQVHZjk1KTEmIQ15OUkaAVUpCkOKTW5aL3JzFQIKZv+mFwZlHRAKVYBlxBo5EgpmZtUiFCt1FA8ko4BEARpmPUclIjUf88BFPEcmSXcc3iVELYAiAS8L9as+ERNGklU3PkYlKyWaZKNVoAE/CVyIHEAgyVVLDwkJQP+4dxBWBhwFQP8Z+AE4CBGEif83dIA6DxRShzkaeSikMh+JmoUZI9ozZyyDg3sfBp5WKECHlOAtt4AWGhGD8JoOAdEtEBVbQN4HAcU4FSebPIoXZtVTDA02wP9ELxxVGlVVgIAgkqsSCwc/kKsEBPYjGwqSrqsMGoC+UCNjtFB+Ni1Vfi9XsDMpFCBlS4CLdpJ0gFU4KQ+w7FUlCT5HHhF3dv8REoplJjyKN0YrGo6SJBMeq/9hGxSKLT0+2wFRvEAgKRR1l44UFaNwEww9w4AwBBgAAAAAAAAAAAAAAAAAAf8C/gMEBv0F/Pv6B/kI+PcAAAAAAAAAAAAAAAAAAP///////////////////////////////////////////7D2////////////3/H8///////////5/f3////////////0/P//////////6v7+///////////9///////////////2/v//////////7/3+///////////+//7////////////4/v//////////+//+///////////////////////////9/v//////////+/7+///////////+//7////////////+/f/+////////+v/+//7////////+/////////////////////////////////////////////////////////9n/////////////4fzx/f///v/////q+vH6/f/9/v/////+////////////3/7+///////////u/f7+///////////4/v//////////+f7////////////////////////////9////////////9/7////////////////////////////9/v///////////P/////////////////////////////+/v///////////f/////////////////////////////+/f//////////+v/////////////+/////////////////////////////////////////////////////////7r7+v//////////6vv0/v/////////7+/P9/v/+///////9/v//////////7P3+///////////7/f3+/v/////////+/v///////////v7+///////////////////////////+/////////////v7////////////+/////////////////////////////v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////j/////////////+v78/v/////////4/vn9///////////9/f//////////9v39///////////8/vv+/v/////////+/P//////////+P79///////////9//7+///////////7/v//////////9fv+///////////9/f7////////////7/f///////////P3+/////////////v/////////////8////////////+f/+//////////////7//////////////f//////////+v///////////////////////////////////////////v///////////////////////////4CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2I/v/k24CAgICAvYHy/+PV/9uAgIBqfuP81tH//4CAgAFi+P/s4v//gICAtYXu/t3q/5qAgIBOhsr3xrT/24CAgAG5+f/z/4CAgICAuJb3/+zggICAgIBNbtj/7OaAgICAgAFl+//x/4CAgICAqovx/OzR//+AgIAldMTz5P///4CAgAHM/v/1/4CAgICAz6D6/+6AgICAgIBmZ+f/06uAgICAgAGY/P/w/4CAgICAsYfz/+rhgICAgIBQgdP/wuCAgICAgAEB/4CAgICAgICA9gH/gICAgICAgID/gICAgICAgICAgMYj7d/Bu6KgkZs+gy3G3ayw3J383QFEL5LQlafdov/fgAGV8f/d4P//gICAuI3q/d7c/8eAgIBRY7XysL75yv//gAGB6P3WxfLE//+AY3nS+snG/8qAgIAXW6Pyqrv30v//gAHI9v/q/4CAgICAbbLx/+f1//+AgIAsgsn9zcD//4CAgAGE7/vb0f+lgICAXojh+9q+//+AgIAWZK71uqH/x4CAgAG2+f/o64CAgICAfI/x/+PqgICAgIAjTbX7wdP/zYCAgAGd9//s5///gICAeY3r/+Hj//+AgIAtY7z7w9n/4ICAgAEB+//V/4CAgICAywH4//+AgICAgICJAbH/4P+AgICAgP0J+PvP0P/AgICArw3g88G5+cb//4BJEavdobPsp//qgAFf9/3Ut///gICA71r0+tPR//+AgICbTcP4vMP//4CAgAEY7/va2//NgICAyTPb/8S6gICAgIBFLr7vydr/5ICAgAG/+///gICAgICA36X5/9X/gICAgICNfPj//4CAgICAgAEQ+P//gICAgICAviTm/+z/gICAgICVAf+AgICAgICAgAHi/4CAgICAgICA98D/gICAgICAgIDwgP+AgICAgICAgAGG/P//gICAgICA1T76//+AgICAgIA3Xf+AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMoY1eu6v9yg8K//fia26Km45K7/u4A9Lorbl7Lwqv/YgAFw5vrHv/ef//+Apm3k/NPX/66AgIAnTaLorLT1sv//gAE03PbGx/nc//+AfEq/87fB+t3//4AYR4Lbmqrztv//gAG24fnb8P/ggICAlZbi/NjN/6uAgIAcbKryt8L+3///gAFR5vzMy//AgICAe2bR97zE/+mAgIAUX5nzpK3/y4CAgAHe+P/Y1YCAgICAqK/2/OvN//+AgIAvdNf/09T//4CAgAF57P3U1v//gICAjVTV/MnK/9uAgIAqUKDworn/zYCAgAEB/4CAgICAgICA9AH/gICAgICAgIDuAf+AgICAgICAgAABAgMGBAUGBgYGBgYGBgcAAAAAAAAAAAAAAAAAAAAABAUGBwgJCgoLDA0ODxARERITFBQVFRYWFxcYGRkaGxwdHh8gISIjJCUlJicoKSorLC0uLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTExNTk9QUVJTVFVWV1hZW11fYGJkZWZoamxucHJ0dnp8foCChIaIioyPkZSXmp0EAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKgArACwALQAuAC8AMAAxADIAMwA0ADUANgA3ADgAOQA6ADwAPgBAAEIARABGAEgASgBMAE4AUABSAFQAVgBYAFoAXABeAGAAYgBkAGYAaABqAGwAbgBwAHIAdAB3AHoAfQCAAIMAhgCJAIwAjwCSAJUAmACbAJ4AoQCkAKcAqgCtALEAtQC5AL0AwQDFAMkAzQDRANUA2QDdAOEA5QDqAO8A9QD5AP4AAwEIAQ0BEgEXARwBAAEECAUCAwYJDA0KBwsODyogAAAuIAAAMyAAADkgAAA8BAAAsAgAAC8KAAAvDQAAIB4AACQeAAAoHgAALB4AADAeAAA0HgAAOB4AAAEAAAAFAAAABgAAAAIAAAADAAAABAAAAFQeAABYHgAAGAEAAQABAAEoAAIDBwMDCwMEAwQEAgIEBAQCAQEIBwYEBAICAgEBAQEAAghDb3VsZCBub3QgZGVjb2RlIGFscGhhIGRhdGEuAEZyYW1lIHNldHVwIGZhaWxlZABubyBtZW1vcnkgZHVyaW5nIGZyYW1lIGluaXRpYWxpemF0aW9uLgB0aHJlYWQgaW5pdGlhbGl6YXRpb24gZmFpbGVkLgBBTFBIAFZQOEwAVlA4IABWUDhYAFJJRkYAV0VCUABudWxsIFZQOElvIHBhc3NlZCB0byBWUDhHZXRIZWFkZXJzKCkAVHJ1bmNhdGVkIGhlYWRlci4ASW5jb3JyZWN0IGtleWZyYW1lIHBhcmFtZXRlcnMuAEZyYW1lIG5vdCBkaXNwbGF5YWJsZS4AY2Fubm90IHBhcnNlIHBpY3R1cmUgaGVhZGVyAEJhZCBjb2RlIHdvcmQAYmFkIHBhcnRpdGlvbiBsZW5ndGgAY2Fubm90IHBhcnNlIHNlZ21lbnQgaGVhZGVyAGNhbm5vdCBwYXJzZSBmaWx0ZXIgaGVhZGVyAGNhbm5vdCBwYXJzZSBwYXJ0aXRpb25zAE5vdCBhIGtleSBmcmFtZS4AT0sArZSMALCbjIcAtJ2NhoIA/v7z5sSxmYyFgoEATlVMTCBWUDhJbyBwYXJhbWV0ZXIgaW4gVlA4RGVjb2RlKCkuAFByZW1hdHVyZSBlbmQtb2YtcGFydGl0aW9uMCBlbmNvdW50ZXJlZC4AUHJlbWF0dXJlIGVuZC1vZi1maWxlIGVuY291bnRlcmVkLgBPdXRwdXQgYWJvcnRlZC4=");

                function T(e) {
                    for (var i = [], r = 0; r < e.length; r++) {
                        var f = e[r];
                        255 < f && (W && g(!1, "Character code " + f + " (" + String.fromCharCode(f) + ")  at offset " + r + " not in 0x00-0xFF."), f &= 255), i.push(String.fromCharCode(f))
                    }
                    return i.join("")
                }
                var L = "function" == typeof atob ? atob : function(e) {
                    var i, r, f, n, t, u, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        A = "",
                        l = 0;
                    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i = a.indexOf(e.charAt(l++)) << 2 | (n = a.indexOf(e.charAt(l++))) >> 4, r = (15 & n) << 4 | (t = a.indexOf(e.charAt(l++))) >> 2, f = (3 & t) << 6 | (u = a.indexOf(e.charAt(l++))), A += String.fromCharCode(i), 64 !== t && (A += String.fromCharCode(r)), 64 !== u && (A += String.fromCharCode(f)), l < e.length;);
                    return A
                };

                function z(e) {
                    if (Y(e)) return function(e) {
                        if ("boolean" == typeof a && a) {
                            var i;
                            try {
                                i = Buffer.from(e, "base64")
                            } catch (r) {
                                i = new Buffer(e, "base64")
                            }
                            return new Uint8Array(i.buffer, i.byteOffset, i.byteLength)
                        }
                        try {
                            for (var r = L(e), f = new Uint8Array(r.length), n = 0; n < r.length; ++n) f[n] = r.charCodeAt(n);
                            return f
                        } catch (e) {
                            throw new Error("Converting base64 string to bytes failed.")
                        }
                    }(e.slice(V.length))
                }
                var J, O = function(e, i, r) {
                        "use asm";
                        var f = new e.Int8Array(r),
                            n = new e.Int16Array(r),
                            t = new e.Int32Array(r),
                            u = new e.Uint8Array(r),
                            a = new e.Uint16Array(r),
                            A = i.o | 0,
                            l = i.p | 0,
                            o = 0,
                            c = 0,
                            s = 0,
                            b = 0,
                            h = 0,
                            k = 0,
                            w = 0,
                            g = 0.0,
                            v = e.Math.imul,
                            C = e.Math.clz32,
                            I = i.a,
                            d = i.b,
                            y = i.c,
                            m = i.d,
                            p = i.e,
                            P = i.f,
                            D = i.g,
                            B = i.h,
                            E = i.i,
                            R = i.j,
                            G = i.k,
                            _ = i.l,
                            F = i.m,
                            S = i.n,
                            x = 10032,
                            Q = 5252912,
                            H = 0.0;

                        function M(e) {
                            e = e | 0;
                            var i = 0;
                            i = x;
                            x = x + e | 0;
                            x = x + 15 & -16;
                            return i | 0
                        }

                        function V() {
                            return x | 0
                        }

                        function Y(e) {
                            e = e | 0;
                            x = e
                        }

                        function U(e, i) {
                            e = e | 0;
                            i = i | 0;
                            x = e;
                            Q = i
                        }

                        function Z(e, i) {
                            e = e | 0;
                            i = i | 0;
                            if ((e | 0) != 0 & (i & -256 | 0) == 256) {
                                W(e);
                                e = 1
                            } else e = 0;
                            return e | 0
                        }

                        function W(e) {
                            e = e | 0;
                            t[e >> 2] = 1;
                            t[e + 4 >> 2] = 0;
                            return
                        }

                        function T(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            o = x;
                            x = x + 48 | 0;
                            l = o;
                            do {
                                if ((e | 0) != 0 & (r & -256 | 0) == 256) {
                                    r = Df(1, 0, 328) | 0;
                                    if (r | 0) {
                                        if (!i) W(l);
                                        else {
                                            n = l;
                                            f = n + 36 | 0;
                                            do {
                                                t[n >> 2] = t[i >> 2];
                                                n = n + 4 | 0;
                                                i = i + 4 | 0
                                            } while ((n | 0) < (f | 0))
                                        }
                                        if (((L(l, r) | 0 ? (u = z(e) | 0, t[r >> 2] = u, u | 0) : 0) ? (e = J(u, 1) | 0, a = r + 208 | 0, t[a >> 2] = e, l = J(u, 2) | 0, A = r + 212 | 0, t[A >> 2] = l, t[r + 216 >> 2] = J(u, 3) | 0, t[r + 220 >> 2] = J(u, 4) | 0, t[r + 224 >> 2] = J(u, 5) | 0, l = Df(e << 2, 0, l) | 0, t[r + 244 >> 2] = l, l | 0) : 0) ? (l = Df(t[a >> 2] << 2, 0, t[A >> 2] | 0) | 0, t[r + 248 >> 2] = l, l | 0) : 0) {
                                            O(r);
                                            break
                                        }
                                    }
                                    q(r);
                                    r = 0
                                } else r = 0
                            } while (0);
                            x = o;
                            return r | 0
                        }

                        function L(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            r = t[e >> 2] | 0;
                            switch (r | 0) {
                                case 1:
                                case 3:
                                case 7:
                                case 8: {
                                    t[i + 204 >> 2] = (r | 2 | 0) == 3 ? 1 : 2;
                                    ge(i + 4 | 0);
                                    t[i + 44 >> 2] = r;
                                    t[i + 56 >> 2] = 1;
                                    t[i + 168 >> 2] = t[e + 4 >> 2];
                                    e = 1;
                                    break
                                }
                                default:
                                    e = 0
                            }
                            return e | 0
                        }

                        function z(e) {
                            e = e | 0;
                            return te(e, 0, 0, 263) | 0
                        }

                        function J(e, i) {
                            e = e | 0;
                            i = i | 0;
                            e: do {
                                if (!e) e = 0;
                                else switch (i | 0) {
                                    case 0: {
                                        e = t[e + 28 >> 2] | 0;
                                        break e
                                    }
                                    case 1: {
                                        e = t[e + 32 >> 2] | 0;
                                        break e
                                    }
                                    case 2: {
                                        e = t[e + 36 >> 2] | 0;
                                        break e
                                    }
                                    case 3: {
                                        e = t[e + 40 >> 2] | 0;
                                        break e
                                    }
                                    case 4: {
                                        e = t[e + 44 >> 2] | 0;
                                        break e
                                    }
                                    case 5: {
                                        e = t[e + 48 >> 2] | 0;
                                        break e
                                    }
                                    default: {
                                        e = 0;
                                        break e
                                    }
                                }
                            } while (0);
                            return e | 0
                        }

                        function O(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0;
                            if (e | 0) {
                                r = e + 324 | 0;
                                e = e + 252 | 0;
                                i = e + 72 | 0;
                                do {
                                    t[e >> 2] = 0;
                                    e = e + 4 | 0
                                } while ((e | 0) < (i | 0));
                                t[r >> 2] = 1
                            }
                            return
                        }

                        function q(e) {
                            e = e | 0;
                            if (e | 0) {
                                ne(t[e >> 2] | 0);
                                $e(t[e + 244 >> 2] | 0);
                                $e(t[e + 248 >> 2] | 0);
                                $e(e)
                            }
                            return
                        }

                        function K(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            if ((e | 0) == 0 | (i | 0) == 0) i = 0;
                            else {
                                e = e + 208 | 0;
                                r = i + 36 | 0;
                                do {
                                    t[i >> 2] = t[e >> 2];
                                    i = i + 4 | 0;
                                    e = e + 4 | 0
                                } while ((i | 0) < (r | 0));
                                i = 1
                            }
                            return i | 0
                        }

                        function X(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0,
                                D = 0,
                                B = 0,
                                E = 0;
                            B = x;
                            x = x + 80 | 0;
                            f = B + 16 | 0;
                            o = B + 12 | 0;
                            c = B + 8 | 0;
                            s = B + 4 | 0;
                            b = B;
                            do {
                                if ((!((e | 0) == 0 | (i | 0) == 0 | (r | 0) == 0) ? (j(e) | 0) != 0 : 0) ? (m = t[e + 208 >> 2] | 0, p = t[e + 212 >> 2] | 0, w = t[e + 204 >> 2] | 0, P = e + 324 | 0, (N(t[e >> 2] | 0, t[P >> 2] | 0, f) | 0) != 0) : 0) {
                                    g = e + 252 | 0;
                                    D = (t[f + 24 >> 2] | 0) + (t[g >> 2] | 0) | 0;
                                    u = e + 256 | 0;
                                    d = e + 320 | 0;
                                    y = $(f, u, t[d >> 2] | 0, m, p) | 0;
                                    if (!y) {
                                        n = e + 244 | 0;
                                        if (!(ie(t[e + 248 >> 2] | 0, t[n >> 2] | 0, m, p) | 0)) {
                                            f = 0;
                                            break
                                        } else C = n
                                    } else {
                                        n = e + 244 | 0;
                                        if (!(ee(t[n >> 2] | 0, m, p) | 0)) {
                                            f = 0;
                                            break
                                        } else C = n
                                    }
                                    a = t[f + 36 >> 2] | 0;
                                    A = t[f + 40 >> 2] | 0;
                                    h = f + 12 | 0;
                                    n = v(t[h >> 2] | 0, m) | 0;
                                    l = f + 8 | 0;
                                    n = n + (t[l >> 2] | 0) << 2;
                                    I = m << 2;
                                    t[e + 64 >> 2] = I;
                                    k = f + 20 | 0;
                                    t[e + 68 >> 2] = v(t[k >> 2] | 0, I) | 0;
                                    t[e + 60 >> 2] = (t[C >> 2] | 0) + n;
                                    if (!(ro(a, A, e + 4 | 0) | 0)) {
                                        e: do {
                                            if ((t[f >> 2] | 0) > 1 ? (t[f + 48 >> 2] | y | 0) == 0 : 0) {
                                                if (!(t[e + 284 >> 2] | 0)) {
                                                    a = e + 248 | 0;
                                                    A = f + 16 | 0;
                                                    n = 0;
                                                    while (1) {
                                                        if ((n | 0) >= (t[k >> 2] | 0)) break e;
                                                        b = v((t[h >> 2] | 0) + n | 0, m) | 0;
                                                        b = b + (t[l >> 2] | 0) | 0;
                                                        nc[w & 7]((t[C >> 2] | 0) + (b << 2) | 0, (t[a >> 2] | 0) + (b << 2) | 0, t[A >> 2] | 0);
                                                        n = n + 1 | 0
                                                    }
                                                }
                                                A = e + 248 | 0;
                                                a = 0;
                                                while (1) {
                                                    if ((a | 0) >= (t[k >> 2] | 0)) break e;
                                                    l = (t[h >> 2] | 0) + a | 0;
                                                    re(f, u, l, o, c, s, b);
                                                    n = t[c >> 2] | 0;
                                                    if ((n | 0) > 0) {
                                                        E = v(l, m) | 0;
                                                        E = (t[o >> 2] | 0) + E | 0;
                                                        nc[w & 7]((t[C >> 2] | 0) + (E << 2) | 0, (t[A >> 2] | 0) + (E << 2) | 0, n)
                                                    }
                                                    n = t[b >> 2] | 0;
                                                    if ((n | 0) > 0) {
                                                        E = v(l, m) | 0;
                                                        E = (t[s >> 2] | 0) + E | 0;
                                                        nc[w & 7]((t[C >> 2] | 0) + (E << 2) | 0, (t[A >> 2] | 0) + (E << 2) | 0, n)
                                                    }
                                                    a = a + 1 | 0
                                                }
                                            }
                                        } while (0);t[g >> 2] = D;n = u + 64 | 0;do {
                                            t[u >> 2] = t[f >> 2];
                                            u = u + 4 | 0;
                                            f = f + 4 | 0
                                        } while ((u | 0) < (n | 0));t[d >> 2] = y;f = e + 248 | 0;ie(t[C >> 2] | 0, t[f >> 2] | 0, m, p) | 0;
                                        if ((t[e + 284 >> 2] | 0) == 1) fe(t[f >> 2] | 0, I, t[e + 264 >> 2] | 0, t[e + 268 >> 2] | 0, t[e + 272 >> 2] | 0, t[e + 276 >> 2] | 0);t[P >> 2] = (t[P >> 2] | 0) + 1;t[i >> 2] = t[C >> 2];t[r >> 2] = D;f = 1
                                    }
                                    else f = 0
                                } else f = 0
                            } while (0);
                            x = B;
                            return f | 0
                        }

                        function j(e) {
                            e = e | 0;
                            if (!e) e = 0;
                            else e = (t[e + 324 >> 2] | 0) <= (t[e + 224 >> 2] | 0) & 1;
                            return e | 0
                        }

                        function N(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0;
                            if (!r) e = 0;
                            else {
                                f = r;
                                n = f + 60 | 0;
                                do {
                                    t[f >> 2] = 0;
                                    f = f + 4 | 0
                                } while ((f | 0) < (n | 0));
                                t[r + 60 >> 2] = e;
                                e = ce(i, r) | 0
                            }
                            return e | 0
                        }

                        function $(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0;
                            do {
                                if ((t[e >> 2] | 0) != 1) {
                                    if (!((t[e + 44 >> 2] | 0) != 0 ? (t[e + 48 >> 2] | 0) != 1 : 0)) u = 4;
                                    if ((u | 0) == 4 ? ye(t[e + 16 >> 2] | 0, t[e + 20 >> 2] | 0, f, n) | 0 : 0) {
                                        e = 1;
                                        break
                                    }
                                    if ((t[i + 28 >> 2] | 0) == 1) e = (ye(t[i + 16 >> 2] | 0, t[i + 20 >> 2] | 0, f, n) | 0 | r | 0) != 0 & 1;
                                    else e = 0
                                } else e = 1
                            } while (0);
                            return e | 0
                        }

                        function ee(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            i = Io(i | 0, 0, 2) | 0;
                            i = bo(i | 0, y() | 0, r | 0, 0) | 0;
                            if ((i | 0) == (i & -4 | 0) & (y() | 0) == 0) {
                                Po(e | 0, 0, i | 0) | 0;
                                i = 1
                            } else i = 0;
                            return i | 0
                        }

                        function ie(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            r = Io(r | 0, 0, 2) | 0;
                            r = bo(r | 0, y() | 0, f | 0, 0) | 0;
                            if ((r | 0) == (r & -4 | 0) & (y() | 0) == 0) {
                                mo(i | 0, e | 0, r | 0) | 0;
                                r = 1
                            } else r = 0;
                            return r | 0
                        }

                        function re(e, i, r, f, n, u, a) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            u = u | 0;
                            a = a | 0;
                            var A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0;
                            b = e + 8 | 0;
                            c = e + 16 | 0;
                            A = (t[c >> 2] | 0) + (t[b >> 2] | 0) | 0;
                            l = i + 8 | 0;
                            o = (t[i + 16 >> 2] | 0) + (t[l >> 2] | 0) | 0;
                            h = i + 12 | 0;
                            k = t[h >> 2] | 0;
                            i = t[i + 20 >> 2] | 0;
                            t[f >> 2] = -1;
                            t[n >> 2] = 0;
                            t[u >> 2] = -1;
                            t[a >> 2] = 0;
                            e = t[b >> 2] | 0;
                            if (((i + k | 0) > (r | 0) ? (t[h >> 2] | 0) <= (r | 0) : 0) & (e | 0) < (o | 0) ? (s = t[l >> 2] | 0, (A | 0) > (s | 0)) : 0) {
                                if ((e | 0) < (s | 0)) {
                                    t[f >> 2] = e;
                                    t[n >> 2] = (t[l >> 2] | 0) - (t[b >> 2] | 0)
                                }
                                if ((A | 0) > (o | 0)) {
                                    t[u >> 2] = o;
                                    t[a >> 2] = A - o
                                }
                            } else {
                                t[f >> 2] = e;
                                t[n >> 2] = t[c >> 2]
                            }
                            return
                        }

                        function fe(e, i, r, f, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            var u = 0,
                                a = 0;
                            a = n << 2;
                            u = 0;
                            n = e + ((v(f, i) | 0) + (r << 2)) | 0;
                            while (1) {
                                if ((u | 0) >= (t | 0)) break;
                                Po(n | 0, 0, a | 0) | 0;
                                u = u + 1 | 0;
                                n = n + i | 0
                            }
                            return
                        }

                        function ne(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0;
                            if (e | 0) {
                                i = t[e + 52 >> 2] | 0;
                                while (1) {
                                    if (!i) break;
                                    r = t[i + 56 >> 2] | 0;
                                    $e(i);
                                    i = r
                                }
                                i = t[e + 60 >> 2] | 0;
                                while (1) {
                                    if (!i) break;
                                    r = t[i + 8 >> 2] | 0;
                                    $e(i);
                                    i = r
                                }
                                $e(e)
                            }
                            return
                        }

                        function te(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0;
                            c = x;
                            x = x + 32 | 0;
                            a = c + 4 | 0;
                            A = c;
                            o = (r | 0) != 0;
                            if (o) t[r >> 2] = -1;
                            e: do {
                                if (((!((e | 0) == 0 | (f & -256 | 0) != 256) ? (u = t[e >> 2] | 0, (u | 0) != 0) : 0) ? (n = t[e + 4 >> 2] | 0, (n | 0) != 0) : 0) ? (ue(a, u, n) | 0) != 0 : 0) {
                                    e = ae(a) | 0;
                                    switch (e | 0) {
                                        case 0: {
                                            u = (t[a + 12 >> 2] | 0) >>> 0 < (t[a + 8 >> 2] | 0) >>> 0;
                                            if ((i | 0) == 0 & u) {
                                                e = 0;
                                                break e
                                            }
                                            e = Df(1, 0, 68) | 0;
                                            t[A >> 2] = e;
                                            if (!e) {
                                                e = 0;
                                                break e
                                            }
                                            le(e, a);
                                            f = 16;
                                            while (1) {
                                                n = t[f + 4 >> 2] | 0;
                                                if (!n) {
                                                    n = 2;
                                                    break
                                                }
                                                if (!(co(f, oe(e) | 0, 4) | 0)) {
                                                    l = 19;
                                                    break
                                                }
                                                f = f + 12 | 0
                                            }
                                            do {
                                                if ((l | 0) == 19) {
                                                    n = jo[n & 15](e) | 0;
                                                    if (!n) t[e + 20 >> 2] = 2;
                                                    if (!((n | 0) == 2 | (u | (n | 0) != 1) ^ 1) ? jo[t[f + 8 >> 2] & 15](e) | 0 : 0) break;
                                                    t[e + 20 >> 2] = -1;
                                                    n = 2
                                                }
                                            } while (0);
                                            if (o) t[r >> 2] = t[e + 20 >> 2];
                                            if ((n | 0) != 2) break e;
                                            ne(e);
                                            e = 0;
                                            break e
                                        }
                                        case 2: {
                                            e = Ae(a, A) | 0;
                                            if (!e) {
                                                if (o) t[r >> 2] = 2;
                                                e = t[A >> 2] | 0;
                                                break e
                                            }
                                            break
                                        }
                                        default: {}
                                    }
                                    if (o) {
                                        t[r >> 2] = ((e | 0) != 1) << 31 >> 31;
                                        e = 0
                                    } else e = 0
                                } else e = 0
                            } while (0);
                            x = c;
                            return e | 0
                        }

                        function ue(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            t[e >> 2] = 0;
                            t[e + 4 >> 2] = 0;
                            t[e + 8 >> 2] = 0;
                            t[e + 12 >> 2] = 0;
                            t[e + 16 >> 2] = 0;
                            return me(e, i, r) | 0
                        }

                        function ae(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0;
                            if ((pe(e) | 0) >>> 0 >= 20) {
                                r = oe(e) | 0;
                                if (((co(r, 7953, 4) | 0) == 0 ? (co(r + 8 | 0, 7958, 4) | 0) == 0 : 0) ? (i = Pe(r + 4 | 0) | 0, (i + -8 | 0) >>> 0 <= 4294967278) : 0) {
                                    i = i + 8 | 0;
                                    t[e + 8 >> 2] = i;
                                    r = e + 12 | 0;
                                    if ((t[r >> 2] | 0) >>> 0 > i >>> 0) {
                                        t[e + 4 >> 2] = i;
                                        t[r >> 2] = i
                                    }
                                    De(e, 12);
                                    i = 0
                                } else i = 2
                            } else i = 1;
                            return i | 0
                        }

                        function Ae(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0;
                            a = x;
                            x = x + 48 | 0;
                            n = a;
                            u = e + 12 | 0;
                            r = Ee(t[e + 16 >> 2] | 0, t[u >> 2] | 0, n) | 0;
                            t[i >> 2] = 0;
                            do {
                                if (!r) {
                                    r = Df(1, 0, 68) | 0;
                                    f = Df(1, 0, 60) | 0;
                                    if (!((r | 0) == 0 | (f | 0) == 0) ? (le(r, e), Re(0, t[u >> 2] | 0, 1, 1, n, f), Ge(r, f) | 0) : 0) {
                                        t[r + 20 >> 2] = 2;
                                        t[r + 32 >> 2] = t[f + 8 >> 2];
                                        t[r + 36 >> 2] = t[f + 12 >> 2];
                                        u = r + 28 | 0;
                                        t[u >> 2] = ((t[f + 16 >> 2] | 0) == 0 ? 0 : 16) | t[u >> 2];
                                        t[r + 48 >> 2] = 1;
                                        t[i >> 2] = r;
                                        r = 0;
                                        break
                                    }
                                    $e(r);
                                    $e(f);
                                    r = 2
                                } else r = (r | 0) == 7 ? 1 : 2
                            } while (0);
                            x = a;
                            return r | 0
                        }

                        function le(e, i) {
                            e = e | 0;
                            i = i | 0;
                            t[e + 20 >> 2] = 0;
                            t[e + 40 >> 2] = 1;
                            t[e + 44 >> 2] = -1;
                            t[e + 32 >> 2] = -1;
                            t[e + 36 >> 2] = -1;
                            t[e + 56 >> 2] = e + 52;
                            t[e + 64 >> 2] = e + 60;
                            t[e >> 2] = t[i >> 2];
                            t[e + 4 >> 2] = t[i + 4 >> 2];
                            t[e + 8 >> 2] = t[i + 8 >> 2];
                            t[e + 12 >> 2] = t[i + 12 >> 2];
                            t[e + 16 >> 2] = t[i + 16 >> 2];
                            return
                        }

                        function oe(e) {
                            e = e | 0;
                            return (t[e + 16 >> 2] | 0) + (t[e >> 2] | 0) | 0
                        }

                        function ce(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0;
                            f = t[i + 60 >> 2] | 0;
                            if ((!((e | 0) < 0 | (f | 0) == 0) ? (n = t[f + 48 >> 2] | 0, (n | 0) >= (e | 0)) : 0) ? (r = Ke(f, (e | 0) == 0 ? n : e) | 0, (r | 0) != 0) : 0) e = Xe(f, r, i) | 0;
                            else e = 0;
                            return e | 0
                        }

                        function se(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            s = x;
                            x = x + 112 | 0;
                            a = s + 64 | 0;
                            A = s + 56 | 0;
                            l = s + 20 | 0;
                            o = s;
                            c = s + 16 | 0;
                            be(a);
                            t[A >> 2] = e;
                            t[A + 4 >> 2] = i;
                            a = he(A, a) | 0;
                            K(a, l) | 0;
                            A = l + 16 | 0;
                            u = t[A >> 2] | 0;
                            r = fo(u << 3) | 0;
                            f = l + 4 | 0;
                            n = v(t[l >> 2] << 2, t[f >> 2] | 0) | 0;
                            e = 0;
                            i = 0;
                            while (1) {
                                if (i >>> 0 >= u >>> 0) break;
                                b = fo(n) | 0;
                                X(a, o, c) | 0;
                                mo(b | 0, t[o >> 2] | 0, n | 0) | 0;
                                u = t[c >> 2] | 0;
                                t[r + (i << 3) >> 2] = u - e;
                                t[r + (i << 3) + 4 >> 2] = b;
                                e = u;
                                i = i + 1 | 0;
                                u = t[A >> 2] | 0
                            }
                            q(a);
                            if ((e | 0) > 0) {
                                t[o >> 2] = t[A >> 2];
                                t[o + 4 >> 2] = t[l >> 2];
                                t[o + 8 >> 2] = t[f >> 2];
                                t[o + 12 >> 2] = r
                            }
                            x = s;
                            return o | 0
                        }

                        function be(e) {
                            e = e | 0;
                            Z(e, 263) | 0;
                            return
                        }

                        function he(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return T(e, i, 263) | 0
                        }

                        function ke(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0;
                            f = 0;
                            while (1) {
                                if ((f | 0) >= (r | 0)) break;
                                n = e + (f << 2) | 0;
                                u = t[n >> 2] | 0;
                                if (u >>> 0 < 4278190080) t[n >> 2] = ve(u, t[i + (f << 2) >> 2] | 0) | 0;
                                f = f + 1 | 0
                            }
                            return
                        }

                        function we(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0;
                            f = 0;
                            while (1) {
                                if ((f | 0) >= (r | 0)) break;
                                n = e + (f << 2) | 0;
                                u = t[n >> 2] | 0;
                                if (u >>> 0 < 4278190080) t[n >> 2] = Ie(u, t[i + (f << 2) >> 2] | 0) | 0;
                                f = f + 1 | 0
                            }
                            return
                        }

                        function ge(e) {
                            e = e | 0;
                            io(e, 520) | 0;
                            return
                        }

                        function ve(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                t = 0,
                                u = 0,
                                a = 0;
                            r = e >>> 24;
                            f = r & 255;
                            if (r) {
                                a = (v(i >>> 24, 256 - r | 0) | 0) >>> 8;
                                n = a & 255;
                                a = a + r | 0;
                                r = 16777216 / ((a & 255) >>> 0) | 0;
                                u = Ce(e, f, i, n, r, 0) | 0;
                                t = Ce(e, f, i, n, r, 8) | 0;
                                i = a << 24 | u & 255 | (t & 255) << 8 | ((Ce(e, f, i, n, r, 16) | 0) & 255) << 16
                            }
                            return i | 0
                        }

                        function Ce(e, i, r, f, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            return (v((v(e >>> t & 255, i & 255) | 0) + (v(r >>> t & 255, f & 255) | 0) | 0, n) | 0) >>> 24 & 255 | 0
                        }

                        function Ie(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return (de(i, 256 - (e >>> 24) | 0) | 0) + e | 0
                        }

                        function de(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return (v(e & 16711935, i) | 0) >>> 8 & 16711935 | (v(e >>> 8 & 16711935, i) | 0) & -16711936 | 0
                        }

                        function ye(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            return (e | 0) == (r | 0) & (i | 0) == (f | 0) & 1 | 0
                        }

                        function me(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0;
                            f = e + 12 | 0;
                            if ((t[f >> 2] | 0) >>> 0 > r >>> 0) e = 0;
                            else {
                                t[e + 16 >> 2] = i;
                                t[f >> 2] = r;
                                t[e + 4 >> 2] = r;
                                e = 1
                            }
                            return e | 0
                        }

                        function pe(e) {
                            e = e | 0;
                            return (t[e + 4 >> 2] | 0) - (t[e >> 2] | 0) | 0
                        }

                        function Pe(e) {
                            e = e | 0;
                            var i = 0;
                            i = Be(e) | 0;
                            return (Be(e + 2 | 0) | 0) << 16 | i | 0
                        }

                        function De(e, i) {
                            e = e | 0;
                            i = i | 0;
                            t[e >> 2] = (t[e >> 2] | 0) + i;
                            return
                        }

                        function Be(e) {
                            e = e | 0;
                            return (u[e + 1 >> 0] | 0) << 8 | (u[e >> 0] | 0) | 0
                        }

                        function Ee(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            return PA(e, i, r, 520) | 0
                        }

                        function Re(e, i, r, f, n, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            u = u | 0;
                            t[u + 40 >> 2] = e;
                            t[u + 44 >> 2] = i;
                            t[u + 8 >> 2] = t[n >> 2];
                            t[u + 12 >> 2] = t[n + 4 >> 2];
                            i = u + 16 | 0;
                            t[i >> 2] = t[i >> 2] | t[n + 8 >> 2];
                            t[u + 32 >> 2] = r;
                            t[u + 36 >> 2] = f;
                            return
                        }

                        function Ge(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0;
                            e = e + 56 | 0;
                            r = t[e >> 2] | 0;
                            f = t[r >> 2] | 0;
                            if ((f | 0) != 0 ? (t[f + 36 >> 2] | 0) == 0 : 0) e = 0;
                            else {
                                t[r >> 2] = i;
                                f = i + 56 | 0;
                                t[f >> 2] = 0;
                                t[e >> 2] = f;
                                e = 1
                            }
                            return e | 0
                        }

                        function _e(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            do {
                                if ((t[e + 52 >> 2] | 0) == 0 ? (Qe(e, 8) | 0) == 0 : 0)
                                    if ((pe(e) | 0) >>> 0 >= 8) {
                                        A = Df(1, 0, 60) | 0;
                                        if (!A) i = 2;
                                        else {
                                            i = He(1, 0, e, A) | 0;
                                            if ((i | 0) != 2) {
                                                r = e + 28 | 0;
                                                f = t[r >> 2] | 0;
                                                if ((f & 16 | 0) == 0 ? (n = A + 52 | 0, t[n >> 2] | 0) : 0) {
                                                    t[A + 48 >> 2] = 0;
                                                    t[n >> 2] = 0;
                                                    t[A + 16 >> 2] = 0
                                                }
                                                if (((t[e + 24 >> 2] | 0) == 0 ? (u = t[A + 8 >> 2] | 0, (u | 0) > 0) : 0) ? (a = t[A + 12 >> 2] | 0, (a | 0) > 0) : 0) {
                                                    t[e + 20 >> 2] = 1;
                                                    t[e + 32 >> 2] = u;
                                                    t[e + 36 >> 2] = a;
                                                    t[r >> 2] = ((t[A + 16 >> 2] | 0) == 0 ? 0 : 16) | f
                                                }
                                                if (Ge(e, A) | 0) {
                                                    t[e + 48 >> 2] = 1;
                                                    break
                                                }
                                            }
                                            $e(A);
                                            i = 2
                                        }
                                    } else i = 1;
                                else i = 2
                            } while (0);
                            return i | 0
                        }

                        function Fe(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0;
                            i = t[e + 52 >> 2] | 0;
                            r = t[e + 20 >> 2] | 0;
                            if (r)
                                if ((((t[e + 32 >> 2] | 0) >= 1 ? (t[e + 36 >> 2] | 0) >= 1 : 0) ? !((i | 0) == 0 & (r | 0) == 2) : 0) ? (t[i + 8 >> 2] | 0) >= 1 : 0) return (t[i + 12 >> 2] | 0) > 0 | 0;
                                else e = 0;
                            else e = 1;
                            return e | 0
                        }

                        function Se(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            if ((pe(e) | 0) >>> 0 >= 8) {
                                t[e + 24 >> 2] = 1;
                                De(e, 4);
                                i = Me(e) | 0;
                                if ((i + -10 | 0) >>> 0 <= 4294967276 ? (r = (i & 1) + i | 0, (Qe(e, r) | 0) == 0) : 0)
                                    if ((pe(e) | 0) >>> 0 >= r >>> 0) {
                                        t[e + 28 >> 2] = (Ye(e) | 0) & 255;
                                        De(e, 3);
                                        f = e + 32 | 0;
                                        t[f >> 2] = (Ue(e) | 0) + 1;
                                        i = (Ue(e) | 0) + 1 | 0;
                                        t[e + 36 >> 2] = i;
                                        f = t[f >> 2] | 0;
                                        i = bo(f | 0, ((f | 0) < 0) << 31 >> 31 | 0, i | 0, ((i | 0) < 0) << 31 >> 31 | 0) | 0;
                                        f = y() | 0;
                                        if (!(f >>> 0 > 0 | (f | 0) == 0 & i >>> 0 > 4294967295) ? (De(e, r + -10 | 0), t[e + 20 >> 2] = 1, (Qe(e, 8) | 0) == 0) : 0)
                                            if ((pe(e) | 0) >>> 0 < 8) e = 1;
                                            else e = Ze(e) | 0;
                                        else e = 2
                                    } else e = 1;
                                else e = 2
                            } else e = 1;
                            return e | 0
                        }

                        function xe(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0;
                            r = t[e + 28 >> 2] | 0;
                            f = r & 2;
                            o = (f | 0) == 0;
                            i = t[e + 52 >> 2] | 0;
                            n = t[e + 20 >> 2] | 0;
                            e: do {
                                if (n) {
                                    a = t[e + 32 >> 2] | 0;
                                    if ((((a | 0) >= 1 ? (A = t[e + 36 >> 2] | 0, (A | 0) >= 1) : 0) ? (t[e + 40 >> 2] | 0) >= 0 : 0) ? (l = (n | 0) == 2, (r & -63 | 0) == 0 & ((i | 0) == 0 & l ^ 1)) : 0) {
                                        u = f >>> 1 ^ 1;
                                        while (1) {
                                            if (!i) {
                                                i = 1;
                                                break e
                                            }
                                            f = t[i + 32 >> 2] | 0;
                                            n = o & (f | 0) > 1;
                                            while (1) {
                                                if (!i) {
                                                    i = 0;
                                                    break
                                                }
                                                if ((t[i + 32 >> 2] | 0) != (f | 0)) break;
                                                e = i + 40 | 0;
                                                r = i + 48 | 0;
                                                if (n) {
                                                    i = 0;
                                                    break e
                                                }
                                                if (!(t[i + 36 >> 2] | 0)) {
                                                    if (l) {
                                                        i = 0;
                                                        break e
                                                    }
                                                    if ((t[i + 52 >> 2] | 0 ? t[i + 44 >> 2] | 0 : 0) ? (t[r >> 2] | 0) >>> 0 > (t[e >> 2] | 0) >>> 0 : 0) {
                                                        i = 0;
                                                        break e
                                                    }
                                                    if (t[i + 56 >> 2] | 0) {
                                                        i = 0;
                                                        break e
                                                    }
                                                    if ((t[i + 8 >> 2] | 0) > 0) c = 25
                                                } else {
                                                    if (!(t[i + 52 >> 2] | 0)) {
                                                        if (!(t[i + 44 >> 2] | 0)) {
                                                            i = 0;
                                                            break e
                                                        }
                                                    } else if ((t[r >> 2] | 0) >>> 0 > (t[e >> 2] | 0) >>> 0) {
                                                        i = 0;
                                                        break e
                                                    }
                                                    if ((t[i + 8 >> 2] | 0) < 1) {
                                                        i = 0;
                                                        break e
                                                    }
                                                    if ((t[i + 12 >> 2] | 0) < 1) {
                                                        i = 0;
                                                        break e
                                                    } else c = 25
                                                }
                                                if (((c | 0) == 25 ? (c = 0, (t[i + 12 >> 2] | 0) > 0) : 0) ? (qe(i, u, a, A) | 0) == 0 : 0) {
                                                    i = 0;
                                                    break e
                                                }
                                                i = t[i + 56 >> 2] | 0
                                            }
                                        }
                                    } else i = 0
                                } else i = 1
                            } while (0);
                            return i | 0
                        }

                        function Qe(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return ((t[e + 8 >> 2] | 0) - (t[e >> 2] | 0) | 0) >>> 0 < i >>> 0 | 0
                        }

                        function He(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0;
                            y = x;
                            x = x + 48 | 0;
                            I = y;
                            C = pe(r) | 0;
                            e: do {
                                if (C >>> 0 < 8 | C >>> 0 < i >>> 0) i = 1;
                                else {
                                    v = r + 8 | 0;
                                    C = f + 48 | 0;
                                    b = f + 52 | 0;
                                    h = f + 16 | 0;
                                    k = f + 32 | 0;
                                    w = r + 16 | 0;
                                    a = 0;
                                    u = 0;
                                    n = 0;
                                    i = 0;
                                    g = t[r >> 2] | 0;
                                    while (1) {
                                        o = Me(r) | 0;
                                        m = Me(r) | 0;
                                        A = (m & 1) + m | 0;
                                        s = pe(r) | 0;
                                        l = A >>> 0 > s >>> 0;
                                        s = l ? s : A;
                                        c = s + 8 | 0;
                                        if (m >>> 0 > 4294967286) {
                                            i = 2;
                                            break e
                                        }
                                        if (Qe(r, A) | 0) {
                                            i = 2;
                                            break e
                                        }
                                        i = l ? 1 : i;
                                        i: do {
                                            if ((o | 0) >= 1213221953) {
                                                if ((o | 0) >= 1278758998) {
                                                    switch (o | 0) {
                                                        case 1278758998:
                                                            break;
                                                        default: {
                                                            d = 14;
                                                            break i
                                                        }
                                                    }
                                                    if ((a | 0) > 0) {
                                                        i = 2;
                                                        break e
                                                    } else {
                                                        d = 9;
                                                        break
                                                    }
                                                }
                                                switch (o | 0) {
                                                    case 1213221953:
                                                        break;
                                                    default: {
                                                        d = 14;
                                                        break i
                                                    }
                                                }
                                                if (!a) {
                                                    t[C >> 2] = g;
                                                    t[b >> 2] = c;
                                                    t[h >> 2] = 1;
                                                    t[k >> 2] = e;
                                                    De(r, s);
                                                    a = 1
                                                } else d = 14
                                            } else switch (o | 0) {
                                                case 540561494: {
                                                    d = 9;
                                                    break
                                                }
                                                default:
                                                    d = 14
                                            }
                                        } while (0);
                                        if ((d | 0) == 9) {
                                            d = 0;
                                            if (!u) {
                                                u = Ee((t[w >> 2] | 0) + g | 0, c, I) | 0;
                                                if ((i | 0) == 1 & (u | 0) == 7) {
                                                    i = 1;
                                                    break
                                                }
                                                if (u | 0) {
                                                    i = 2;
                                                    break
                                                }
                                                Re(g, c, e, (i | 0) == 0 & 1, I, f);
                                                De(r, s);
                                                u = 1
                                            } else d = 14
                                        }
                                        if ((d | 0) == 14) {
                                            d = 0;
                                            Ve(r);
                                            n = 1
                                        }
                                        g = t[r >> 2] | 0;
                                        if ((g | 0) == (t[v >> 2] | 0)) n = 1;
                                        else {
                                            m = (pe(r) | 0) >>> 0 < 8;
                                            i = m ? 1 : i
                                        }
                                        if (n | i | 0) break e
                                    }
                                }
                            } while (0);
                            x = y;
                            return i | 0
                        }

                        function Me(e) {
                            e = e | 0;
                            var i = 0;
                            i = Pe((t[e + 16 >> 2] | 0) + (t[e >> 2] | 0) | 0) | 0;
                            De(e, 4);
                            return i | 0
                        }

                        function Ve(e) {
                            e = e | 0;
                            t[e >> 2] = (t[e >> 2] | 0) + -8;
                            return
                        }

                        function Ye(e) {
                            e = e | 0;
                            var i = 0;
                            i = f[(t[e + 16 >> 2] | 0) + (t[e >> 2] | 0) >> 0] | 0;
                            De(e, 1);
                            return i | 0
                        }

                        function Ue(e) {
                            e = e | 0;
                            var i = 0;
                            i = We((t[e + 16 >> 2] | 0) + (t[e >> 2] | 0) | 0) | 0;
                            De(e, 3);
                            return i | 0
                        }

                        function Ze(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            u = e + 28 | 0;
                            A = (t[u >> 2] & 2 | 0) != 0;
                            l = e + 8 | 0;
                            o = e + 44 | 0;
                            c = e + 40 | 0;
                            r = 0;
                            a = t[e >> 2] | 0;
                            e: do {
                                i = Me(e) | 0;
                                f = Me(e) | 0;
                                n = (f & 1) + f | 0;
                                if (f >>> 0 > 4294967286) {
                                    i = 2;
                                    break
                                }
                                if (Qe(e, n) | 0) {
                                    i = 2;
                                    break
                                }
                                i: do {
                                    if ((i | 0) >= 1213221953) {
                                        if ((i | 0) < 1296649793)
                                            if ((i | 0) < 1278758998) switch (i | 0) {
                                                case 1213221953: {
                                                    s = 5;
                                                    break i
                                                }
                                                default: {
                                                    i = 1;
                                                    s = 16;
                                                    break i
                                                }
                                            } else switch (i | 0) {
                                                case 1278758998: {
                                                    s = 5;
                                                    break i
                                                }
                                                default: {
                                                    i = 1;
                                                    s = 16;
                                                    break i
                                                }
                                            }
                                        if ((i | 0) >= 1346585417) {
                                            if ((i | 0) >= 1480085590) switch (i | 0) {
                                                case 1480085590: {
                                                    i = 2;
                                                    break e
                                                }
                                                default: {
                                                    i = 1;
                                                    s = 16;
                                                    break i
                                                }
                                            }
                                            switch (i | 0) {
                                                case 1346585417:
                                                    break;
                                                default: {
                                                    i = 1;
                                                    s = 16;
                                                    break i
                                                }
                                            }
                                            i = (t[u >> 2] | 0) >>> 5 & 1;
                                            s = 16;
                                            break
                                        }
                                        switch (i | 0) {
                                            case 1296649793:
                                                break;
                                            default: {
                                                i = 1;
                                                s = 16;
                                                break i
                                            }
                                        }
                                        if (n >>> 0 < 6) {
                                            i = 2;
                                            break e
                                        }
                                        if ((pe(e) | 0) >>> 0 >= n >>> 0)
                                            if (!r) {
                                                t[o >> 2] = Me(e) | 0;
                                                t[c >> 2] = Te(e) | 0;
                                                De(e, n + -6 | 0);
                                                r = 1;
                                                i = 0
                                            } else {
                                                i = 0;
                                                s = 16
                                            }
                                        else i = 1
                                    } else {
                                        if ((i | 0) < 1179211845) {
                                            if ((i | 0) < 542133592) switch (i | 0) {
                                                case 540561494: {
                                                    s = 5;
                                                    break i
                                                }
                                                default: {
                                                    i = 1;
                                                    s = 16;
                                                    break i
                                                }
                                            }
                                            switch (i | 0) {
                                                case 542133592:
                                                    break;
                                                default: {
                                                    i = 1;
                                                    s = 16;
                                                    break i
                                                }
                                            }
                                            i = (t[u >> 2] | 0) >>> 2 & 1;
                                            s = 16;
                                            break
                                        }
                                        if ((i | 0) < 1179471425) {
                                            switch (i | 0) {
                                                case 1179211845:
                                                    break;
                                                default: {
                                                    i = 1;
                                                    s = 16;
                                                    break i
                                                }
                                            }
                                            i = (t[u >> 2] | 0) >>> 3 & 1;
                                            s = 16;
                                            break
                                        }
                                        switch (i | 0) {
                                            case 1179471425:
                                                break;
                                            default: {
                                                i = 1;
                                                s = 16;
                                                break i
                                            }
                                        }
                                        if (!r) {
                                            i = 2;
                                            break e
                                        }
                                        i = Le(e, n) | 0
                                    }
                                } while (0);
                                if ((s | 0) == 5) {
                                    s = 0;
                                    if (A | (r | 0) > 0) {
                                        i = 2;
                                        break
                                    }
                                    Ve(e);
                                    i = _e(e) | 0
                                } else if ((s | 0) == 16) {
                                    s = 0;
                                    if (n >>> 0 > (pe(e) | 0) >>> 0) i = 1;
                                    else {
                                        if (i | 0 ? (ze(e, a, f + 8 | 0) | 0) == 0 : 0) {
                                            i = 2;
                                            break
                                        }
                                        De(e, n);
                                        i = 0
                                    }
                                }
                                a = t[e >> 2] | 0;
                                if ((a | 0) == (t[l >> 2] | 0)) break;
                                n = (pe(e) | 0) >>> 0 < 8;
                                i = n ? 1 : i
                            } while (!(i | 0));
                            return i | 0
                        }

                        function We(e) {
                            e = e | 0;
                            var i = 0;
                            i = Be(e) | 0;
                            return (u[e + 2 >> 0] | 0) << 16 | i | 0
                        }

                        function Te(e) {
                            e = e | 0;
                            var i = 0;
                            i = Be((t[e + 16 >> 2] | 0) + (t[e >> 2] | 0) | 0) | 0;
                            De(e, 2);
                            return i | 0
                        }

                        function Le(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            a = x;
                            x = x + 16 | 0;
                            r = a;
                            u = (t[e + 28 >> 2] & 2 | 0) != 0;
                            n = i + -16 | 0;
                            i = Je(e, i, r) | 0;
                            do {
                                if (!i) {
                                    i = (Ue(e) | 0) << 1;
                                    f = t[r >> 2] | 0;
                                    t[f >> 2] = i;
                                    t[f + 4 >> 2] = (Ue(e) | 0) << 1;
                                    r = f + 8 | 0;
                                    t[r >> 2] = (Ue(e) | 0) + 1;
                                    i = f + 12 | 0;
                                    t[i >> 2] = (Ue(e) | 0) + 1;
                                    t[f + 20 >> 2] = Ue(e) | 0;
                                    A = (Ye(e) | 0) & 255;
                                    t[f + 24 >> 2] = A & 1;
                                    t[f + 28 >> 2] = A >>> 1 & 1;
                                    r = t[r >> 2] | 0;
                                    i = t[i >> 2] | 0;
                                    r = bo(i | 0, ((i | 0) < 0) << 31 >> 31 | 0, r | 0, ((r | 0) < 0) << 31 >> 31 | 0) | 0;
                                    i = y() | 0;
                                    if (i >>> 0 > 0 | (i | 0) == 0 & r >>> 0 > 4294967295) {
                                        $e(f);
                                        i = 2;
                                        break
                                    }
                                    r = e + 48 | 0;
                                    i = He((t[r >> 2] | 0) + 1 | 0, n, e, f) | 0;
                                    if (u & (i | 0) != 2 ? (t[f + 32 >> 2] | 0) > 0 : 0)
                                        if (!(Ge(e, f) | 0)) i = 2;
                                        else {
                                            t[r >> 2] = (t[r >> 2] | 0) + 1;
                                            break
                                        } $e(f)
                                }
                            } while (0);
                            x = a;
                            return i | 0
                        }

                        function ze(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0;
                            f = Df(1, 0, 12) | 0;
                            if (!f) e = 0;
                            else {
                                t[f >> 2] = i;
                                t[f + 4 >> 2] = r;
                                Oe(e, f);
                                e = 1
                            }
                            return e | 0
                        }

                        function Je(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            if (!(i >>> 0 < 16 | (Qe(e, 16) | 0) != 0))
                                if ((pe(e) | 0) >>> 0 < 16) e = 1;
                                else {
                                    e = Df(1, 0, 60) | 0;
                                    t[r >> 2] = e;
                                    e = (e | 0) == 0 ? 2 : 0
                                }
                            else e = 2;
                            return e | 0
                        }

                        function Oe(e, i) {
                            e = e | 0;
                            i = i | 0;
                            e = e + 64 | 0;
                            t[t[e >> 2] >> 2] = i;
                            i = i + 8 | 0;
                            t[i >> 2] = 0;
                            t[e >> 2] = i;
                            return
                        }

                        function qe(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0,
                                a = 0;
                            u = t[e >> 2] | 0;
                            if (!i)
                                if ((((u | 0) >= 0 ? (n = t[e + 4 >> 2] | 0, (n | 0) >= 0) : 0) ? ((t[e + 8 >> 2] | 0) + u | 0) <= (r | 0) : 0) ? ((t[e + 12 >> 2] | 0) + n | 0) <= (f | 0) : 0) a = 10;
                                else e = 0;
                            else if ((((u | 0) == 0 ? (t[e + 4 >> 2] | 0) == 0 : 0) ? (t[e + 8 >> 2] | 0) == (r | 0) : 0) ? (t[e + 12 >> 2] | 0) == (f | 0) : 0) a = 10;
                            else e = 0;
                            if ((a | 0) == 10) e = 1;
                            return e | 0
                        }

                        function Ke(e, i) {
                            e = e | 0;
                            i = i | 0;
                            e = e + 52 | 0;
                            while (1) {
                                e = t[e >> 2] | 0;
                                if (!e) {
                                    e = 0;
                                    break
                                }
                                if ((t[e + 32 >> 2] | 0) == (i | 0)) break;
                                e = e + 56 | 0
                            }
                            return e | 0
                        }

                        function Xe(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0;
                            u = x;
                            x = x + 16 | 0;
                            f = u;
                            n = t[e + 16 >> 2] | 0;
                            t[f >> 2] = 0;
                            n = je(n, i, f) | 0;
                            if (!n) e = 0;
                            else {
                                t[r >> 2] = t[i + 32 >> 2];
                                t[r + 4 >> 2] = t[e + 48 >> 2];
                                t[r + 8 >> 2] = t[i >> 2];
                                t[r + 12 >> 2] = t[i + 4 >> 2];
                                t[r + 16 >> 2] = t[i + 8 >> 2];
                                t[r + 20 >> 2] = t[i + 12 >> 2];
                                t[r + 44 >> 2] = t[i + 16 >> 2];
                                t[r + 24 >> 2] = t[i + 20 >> 2];
                                t[r + 28 >> 2] = t[i + 24 >> 2];
                                t[r + 48 >> 2] = t[i + 28 >> 2];
                                t[r + 32 >> 2] = t[i + 36 >> 2];
                                t[r + 36 >> 2] = n;
                                t[r + 40 >> 2] = t[f >> 2];
                                e = 1
                            }
                            x = u;
                            return e | 0
                        }

                        function je(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0;
                            t[r >> 2] = 0;
                            if (!i) f = 0;
                            else {
                                n = i + 40 | 0;
                                f = t[n >> 2] | 0;
                                u = t[i + 44 >> 2] | 0;
                                t[r >> 2] = u;
                                a = t[i + 52 >> 2] | 0;
                                if (a) {
                                    n = t[n >> 2] | 0;
                                    f = t[i + 48 >> 2] | 0;
                                    t[r >> 2] = a + u + ((n | 0) == 0 ? 0 : n - a - f | 0)
                                }
                                f = e + f | 0
                            }
                            return f | 0
                        }

                        function Ne(e) {
                            e = e | 0;
                            var i = 0;
                            i = e + 2360 | 0;
                            $e(t[i >> 2] | 0);
                            t[i >> 2] = 0;
                            t[e + 2364 >> 2] = 0;
                            e = e + 2344 | 0;
                            ei(t[e >> 2] | 0);
                            t[e >> 2] = 0;
                            return
                        }

                        function $e(e) {
                            e = e | 0;
                            no(e);
                            return
                        }

                        function ei(e) {
                            e = e | 0;
                            var i = 0;
                            if (e | 0) {
                                i = e + 20 | 0;
                                ii(t[i >> 2] | 0);
                                t[i >> 2] = 0;
                                $e(e)
                            }
                            return
                        }

                        function ii(e) {
                            e = e | 0;
                            if (e | 0) {
                                ri(e);
                                $e(e)
                            }
                            return
                        }

                        function ri(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0;
                            if (e | 0) {
                                fi(e + 120 | 0);
                                r = e + 16 | 0;
                                $e(t[r >> 2] | 0);
                                t[r >> 2] = 0;
                                r = e + 176 | 0;
                                i = 0;
                                while (1) {
                                    if ((i | 0) >= (t[r >> 2] | 0)) break;
                                    ni(e + 180 + (i * 20 | 0) | 0);
                                    i = i + 1 | 0
                                }
                                t[r >> 2] = 0;
                                t[e + 260 >> 2] = 0;
                                r = e + 264 | 0;
                                $e(t[r >> 2] | 0);
                                t[r >> 2] = 0;
                                t[e + 12 >> 2] = 0
                            }
                            return
                        }

                        function fi(e) {
                            e = e | 0;
                            $e(t[e + 40 >> 2] | 0);
                            $e(t[e + 52 >> 2] | 0);
                            ti(t[e + 48 >> 2] | 0);
                            ui(e + 4 | 0);
                            ui(e + 16 | 0);
                            ai(e);
                            return
                        }

                        function ni(e) {
                            e = e | 0;
                            e = e + 16 | 0;
                            $e(t[e >> 2] | 0);
                            t[e >> 2] = 0;
                            return
                        }

                        function ti(e) {
                            e = e | 0;
                            if (e | 0) $e(e);
                            return
                        }

                        function ui(e) {
                            e = e | 0;
                            if (e | 0) {
                                $e(t[e >> 2] | 0);
                                t[e >> 2] = 0
                            }
                            return
                        }

                        function ai(e) {
                            e = e | 0;
                            var i = 0;
                            i = e + 56 | 0;
                            do {
                                t[e >> 2] = 0;
                                e = e + 4 | 0
                            } while ((e | 0) < (i | 0));
                            return
                        }

                        function Ai(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            o = t[i >> 2] | 0;
                            c = i + 88 | 0;
                            A = t[c >> 2] | 0;
                            e: do {
                                if ((r | 0) < 0 | (f | 0) < 1 | (f + r | 0) > (A | 0)) n = 0;
                                else {
                                    u = e + 2356 | 0;
                                    do {
                                        if (!(t[u >> 2] | 0)) {
                                            a = e + 2344 | 0;
                                            do {
                                                if (!(t[a >> 2] | 0)) {
                                                    s = li() | 0;
                                                    t[a >> 2] = s;
                                                    if (!s) {
                                                        n = 0;
                                                        break e
                                                    }
                                                    if (oi(e, i) | 0 ? ci(t[a >> 2] | 0, t[e + 2348 >> 2] | 0, t[e + 2352 >> 2] | 0, i, t[e + 2364 >> 2] | 0) | 0 : 0)
                                                        if ((t[(t[a >> 2] | 0) + 16 >> 2] | 0) == 1) {
                                                            n = A - r | 0;
                                                            l = 10;
                                                            break
                                                        } else {
                                                            t[e + 2372 >> 2] = 0;
                                                            n = f;
                                                            l = 10;
                                                            break
                                                        }
                                                } else {
                                                    n = f;
                                                    l = 10
                                                }
                                            } while (0);
                                            if ((l | 0) == 10 ? si(e, r, n) | 0 : 0) {
                                                if (!(t[u >> 2] | 0)) break;
                                                ei(t[a >> 2] | 0);
                                                t[a >> 2] = 0;
                                                n = t[e + 2372 >> 2] | 0;
                                                if ((n | 0) <= 0) break;
                                                s = t[i + 84 >> 2] | 0;
                                                A = (t[e + 2364 >> 2] | 0) + (v(s, o) | 0) | 0;
                                                l = t[i + 76 >> 2] | 0;
                                                if (bi(A + l | 0, (t[i + 80 >> 2] | 0) - l | 0, (t[c >> 2] | 0) - s | 0, o, n) | 0) break
                                            }
                                            Ne(e);
                                            n = 0;
                                            break e
                                        }
                                    } while (0);
                                    n = (t[e + 2364 >> 2] | 0) + (v(o, r) | 0) | 0
                                }
                            } while (0);
                            return n | 0
                        }

                        function li() {
                            return Df(1, 0, 144) | 0
                        }

                        function oi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            r = t[i >> 2] | 0;
                            i = t[i + 88 >> 2] | 0;
                            i = bo(i | 0, ((i | 0) < 0) << 31 >> 31 | 0, r | 0, ((r | 0) < 0) << 31 >> 31 | 0) | 0;
                            i = Ii(i, y() | 0, 1) | 0;
                            t[e + 2360 >> 2] = i;
                            if (!i) i = 0;
                            else {
                                t[e + 2364 >> 2] = i;
                                t[e + 2368 >> 2] = 0;
                                i = 1
                            }
                            return i | 0
                        }

                        function ci(e, i, r, n, a) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            a = a | 0;
                            var A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            c = i + 1 | 0;
                            s = r + -1 | 0;
                            b = e + 24 | 0;
                            cf();
                            t[e + 136 >> 2] = a;
                            t[e >> 2] = t[n >> 2];
                            a = n + 4 | 0;
                            A = e + 4 | 0;
                            t[A >> 2] = t[a >> 2];
                            do {
                                if ((r >>> 0 >= 2 ? (r = f[i >> 0] & 3, l = e + 8 | 0, t[l >> 2] = r & 255, t[e + 12 >> 2] = (u[i >> 0] | 0) >>> 2 & 3, o = (u[i >> 0] | 0) >>> 4 & 3, t[e + 16 >> 2] = o, (r & 255) <= 1) : 0) ? !(o >>> 0 > 1 | (u[i >> 0] | 0) > 63) : 0) {
                                    sf(b);
                                    bf(0, b);
                                    t[e + 64 >> 2] = e;
                                    t[b >> 2] = t[n >> 2];
                                    t[e + 28 >> 2] = t[a >> 2];
                                    t[e + 96 >> 2] = t[n + 72 >> 2];
                                    t[e + 100 >> 2] = t[n + 76 >> 2];
                                    t[e + 104 >> 2] = t[n + 80 >> 2];
                                    t[e + 108 >> 2] = t[n + 84 >> 2];
                                    t[e + 112 >> 2] = t[n + 88 >> 2];
                                    if (!(t[l >> 2] | 0)) {
                                        a = s >>> 0 >= (v(t[A >> 2] | 0, t[e >> 2] | 0) | 0) >>> 0 & 1;
                                        break
                                    } else {
                                        a = hf(e, c, s) | 0;
                                        break
                                    }
                                } else a = 0
                            } while (0);
                            return a | 0
                        }

                        function si(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            a = t[e + 2344 >> 2] | 0;
                            o = t[a >> 2] | 0;
                            c = t[a + 112 >> 2] | 0;
                            if (t[a + 8 >> 2] | 0) {
                                f = r + i | 0;
                                if (!(pi(a, f) | 0)) f = 0;
                                else n = 11
                            } else {
                                l = e + 2368 | 0;
                                f = t[l >> 2] | 0;
                                n = v(o, i) | 0;
                                u = (t[e + 2348 >> 2] | 0) + 1 + n | 0;
                                n = (t[e + 2364 >> 2] | 0) + n | 0;
                                A = a + 12 | 0;
                                e: do {
                                    if (!(t[A >> 2] | 0)) {
                                        a = n;
                                        n = 0;
                                        while (1) {
                                            if ((n | 0) >= (r | 0)) break e;
                                            mo(a | 0, u | 0, o | 0) | 0;
                                            f = a;
                                            a = a + o | 0;
                                            u = u + o | 0;
                                            n = n + 1 | 0
                                        }
                                    } else {
                                        a = n;
                                        n = 0;
                                        while (1) {
                                            if ((n | 0) >= (r | 0)) break e;
                                            tc[t[8528 + (t[A >> 2] << 2) >> 2] & 31](f, u, a, o);
                                            s = a;
                                            a = a + o | 0;
                                            u = u + o | 0;
                                            n = n + 1 | 0;
                                            f = s
                                        }
                                    }
                                } while (0);
                                t[l >> 2] = f;
                                f = r + i | 0;
                                n = 11
                            }
                            if ((n | 0) == 11)
                                if ((f | 0) < (c | 0)) f = 1;
                                else {
                                    t[e + 2356 >> 2] = 1;
                                    f = 1
                                } return f | 0
                        }

                        function bi(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0,
                                A = 0,
                                l = 0;
                            l = x;
                            x = x + 80 | 0;
                            A = l;
                            u = (n | 0) / 25 | 0;
                            do {
                                if (n >>> 0 <= 100 ? !((e | 0) == 0 | (i | 0) < 1 | (r | 0) < 1) : 0) {
                                    n = (u << 1 | 1 | 0) > (i | 0) ? i + -1 >> 1 : u;
                                    n = (n << 1 | 1 | 0) > (r | 0) ? r + -1 >> 1 : n;
                                    if ((n | 0) > 0) {
                                        u = A;
                                        a = u + 76 | 0;
                                        do {
                                            t[u >> 2] = 0;
                                            u = u + 4 | 0
                                        } while ((u | 0) < (a | 0));
                                        if (!(hi(e, i, r, f, n, A) | 0)) {
                                            n = 0;
                                            break
                                        }
                                        e: do {
                                            if ((t[A + 56 >> 2] | 0) > 2) {
                                                u = A + 12 | 0;
                                                a = A + 4 | 0;
                                                e = A + 24 | 0;
                                                n = t[u >> 2] | 0;
                                                while (1) {
                                                    if ((n | 0) >= (t[a >> 2] | 0)) break e;
                                                    ki(A);
                                                    n = t[u >> 2] | 0;
                                                    if ((n | 0) >= (t[e >> 2] | 0)) {
                                                        wi(A);
                                                        gi(A);
                                                        n = t[u >> 2] | 0
                                                    }
                                                    n = n + 1 | 0;
                                                    t[u >> 2] = n
                                                }
                                            }
                                        } while (0);
                                        vi(A);
                                        n = 1
                                    } else n = 1
                                } else n = 0
                            } while (0);
                            x = l;
                            return n | 0
                        }

                        function hi(e, i, r, f, n, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            u = u | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0;
                            l = n << 1 | 1;
                            o = i << 1;
                            a = v(o, l + 1 | 0) | 0;
                            A = Ii(1, 0, o + 4094 + a | 0) | 0;
                            if (!A) e = 0;
                            else {
                                t[u + 32 >> 2] = A;
                                t[u + 36 >> 2] = A;
                                t[u + 40 >> 2] = A;
                                c = A + ((v(l, i) | 0) << 1) | 0;
                                t[u + 44 >> 2] = c;
                                c = c + (0 - i << 1) | 0;
                                t[u + 48 >> 2] = c;
                                Po(c | 0, 0, o | 0) | 0;
                                A = A + a | 0;
                                t[u + 52 >> 2] = A;
                                t[u >> 2] = i;
                                t[u + 4 >> 2] = r;
                                t[u + 8 >> 2] = f;
                                t[u + 16 >> 2] = e;
                                t[u + 20 >> 2] = e;
                                t[u + 24 >> 2] = n;
                                t[u + 28 >> 2] = 262144 / ((v(l, l) | 0) >>> 0) | 0;
                                t[u + 12 >> 2] = 0 - n;
                                di(u);
                                e = A + o + 2046 | 0;
                                t[u + 72 >> 2] = e;
                                yi(e, t[u + 68 >> 2] | 0);
                                e = 1
                            }
                            return e | 0
                        }

                        function ki(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0;
                            f = e + 16 | 0;
                            l = t[f >> 2] | 0;
                            o = t[e >> 2] | 0;
                            c = e + 40 | 0;
                            s = t[c >> 2] | 0;
                            b = e + 48 | 0;
                            h = t[b >> 2] | 0;
                            k = t[e + 44 >> 2] | 0;
                            A = s;
                            i = 0;
                            r = 0;
                            while (1) {
                                if ((r | 0) >= (o | 0)) break;
                                w = (i & 65535) + (u[l + r >> 0] | 0) | 0;
                                v = w + (a[h + (r << 1) >> 1] | 0) | 0;
                                g = s + (r << 1) | 0;
                                n[k + (r << 1) >> 1] = v - (a[g >> 1] | 0);
                                n[g >> 1] = v;
                                i = w;
                                r = r + 1 | 0
                            }
                            t[b >> 2] = A;
                            v = s + (o << 1) | 0;
                            t[c >> 2] = v;
                            if ((v | 0) == (k | 0)) t[c >> 2] = t[e + 36 >> 2];
                            v = t[e + 12 >> 2] | 0;
                            if ((v | 0) > -1 ? (v | 0) < ((t[e + 4 >> 2] | 0) + -1 | 0) : 0) t[f >> 2] = l + (t[e + 8 >> 2] | 0);
                            return
                        }

                        function wi(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                u = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0;
                            A = t[e + 44 >> 2] | 0;
                            l = t[e + 52 >> 2] | 0;
                            o = t[e + 28 >> 2] | 0;
                            c = t[e >> 2] | 0;
                            f = t[e + 24 >> 2] | 0;
                            e = f + -1 | 0;
                            i = 0;
                            while (1) {
                                if ((f | 0) < (i | 0)) break;
                                n[l + (i << 1) >> 1] = (v((a[A + (f - i << 1) >> 1] | 0) + (a[A + (e + i << 1) >> 1] | 0) & 65535, o) | 0) >>> 16;
                                i = i + 1 | 0
                            }
                            r = c - f | 0;
                            u = ~f;
                            e = i;
                            while (1) {
                                if ((e | 0) >= (r | 0)) break;
                                n[l + (e << 1) >> 1] = (v((a[A + (e + f << 1) >> 1] | 0) - (a[A + (e + u << 1) >> 1] | 0) & 65535, o) | 0) >>> 16;
                                e = e + 1 | 0
                            }
                            r = A + (c + -1 << 1) | 0;
                            i = (c << 1) + -2 - f | 0;
                            while (1) {
                                if ((e | 0) >= (c | 0)) break;
                                n[l + (e << 1) >> 1] = (v(((a[r >> 1] | 0) << 1) - (a[A + (i - e << 1) >> 1] | 0) - (a[A + (e + u << 1) >> 1] | 0) & 65535, o) | 0) >>> 16;
                                e = e + 1 | 0
                            }
                            return
                        }

                        function gi(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0;
                            l = t[e + 52 >> 2] | 0;
                            o = t[e >> 2] | 0;
                            c = t[e + 72 >> 2] | 0;
                            s = e + 20 | 0;
                            b = t[s >> 2] | 0;
                            h = e + 64 | 0;
                            k = e + 60 | 0;
                            i = 0;
                            while (1) {
                                if ((i | 0) >= (o | 0)) break;
                                r = b + i | 0;
                                A = u[r >> 0] | 0;
                                if ((t[h >> 2] | 0) > (A | 0) ? (t[k >> 2] | 0) < (A | 0) : 0) f[r >> 0] = Ci((n[c + ((a[l + (i << 1) >> 1] | 0) - (A << 2) << 1) >> 1] | 0) + A | 0) | 0;
                                i = i + 1 | 0
                            }
                            t[s >> 2] = (t[s >> 2] | 0) + (t[e + 8 >> 2] | 0);
                            return
                        }

                        function vi(e) {
                            e = e | 0;
                            $e(t[e + 32 >> 2] | 0);
                            return
                        }

                        function Ci(e) {
                            e = e | 0;
                            if (e >>> 0 > 255) e = (e >> 31 & -255) + 255 | 0;
                            else e = e & 255;
                            return e & 255 | 0
                        }

                        function Ii(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            if (!(mi(e, i, r) | 0)) e = 0;
                            else e = fo(v(e, r) | 0) | 0;
                            return e | 0
                        }

                        function di(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0;
                            g = x;
                            x = x + 256 | 0;
                            k = g;
                            Po(k | 0, 0, 256) | 0;
                            l = t[e + 16 >> 2] | 0;
                            s = e + 60 | 0;
                            t[s >> 2] = 255;
                            b = e + 64 | 0;
                            t[b >> 2] = 0;
                            h = e + 8 | 0;
                            o = t[e + 4 >> 2] | 0;
                            A = 0;
                            r = 0;
                            i = 255;
                            while (1) {
                                if ((A | 0) >= (o | 0)) break;
                                c = t[e >> 2] | 0;
                                a = 0;
                                while (1) {
                                    if ((a | 0) >= (c | 0)) break;
                                    n = u[l + a >> 0] | 0;
                                    if ((i | 0) > (n | 0)) {
                                        t[s >> 2] = n;
                                        i = n
                                    }
                                    if ((r | 0) < (n | 0)) {
                                        t[b >> 2] = n;
                                        r = n
                                    }
                                    f[k + n >> 0] = 1;
                                    a = a + 1 | 0
                                }
                                A = A + 1 | 0;
                                l = l + (t[h >> 2] | 0) | 0
                            }
                            r = r - i | 0;
                            A = e + 68 | 0;
                            t[A >> 2] = r;
                            a = e + 56 | 0;
                            i = -1;
                            n = 0;
                            while (1) {
                                if ((n | 0) == 256) break;
                                if (f[k + n >> 0] | 0) {
                                    t[a >> 2] = (t[a >> 2] | 0) + 1;
                                    if ((i | 0) > -1 ? (w = n - i | 0, (w | 0) < (r | 0)) : 0) {
                                        t[A >> 2] = w;
                                        i = n;
                                        r = w
                                    } else i = n
                                }
                                n = n + 1 | 0
                            }
                            x = g;
                            return
                        }

                        function yi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                t = 0,
                                u = 0;
                            u = i << 2;
                            f = i * 12 >> 2;
                            t = u - f | 0;
                            i = 1;
                            while (1) {
                                if ((i | 0) == 1024) break;
                                if ((i | 0) > (f | 0))
                                    if ((u | 0) > (i | 0)) r = (v(u - i | 0, f) | 0) / (t | 0) | 0;
                                    else r = 0;
                                else r = i;
                                r = r >> 2;
                                n[e + (i << 1) >> 1] = r;
                                n[e + (0 - i << 1) >> 1] = 0 - r;
                                i = i + 1 | 0
                            }
                            n[e >> 1] = 0;
                            return
                        }

                        function mi(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0;
                            f = bo(r | 0, 0, e | 0, i | 0) | 0;
                            n = y() | 0;
                            if ((e | 0) == 0 & (i | 0) == 0) return 1;
                            else {
                                i = vo(2147418112, 0, e | 0, i | 0) | 0;
                                e = y() | 0;
                                return (f | 0) == (f | 0) & (n | 0) == 0 & (e >>> 0 > 0 | (e | 0) == 0 & i >>> 0 >= r >>> 0) & 1 | 0
                            }
                            return 0
                        }

                        function pi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0;
                            f = t[e + 20 >> 2] | 0;
                            do {
                                if ((t[f + 108 >> 2] | 0) < (i | 0)) {
                                    r = e + 132 | 0;
                                    if (!(t[r >> 2] | 0)) {
                                        Pi();
                                        e = t[f + 16 >> 2] | 0;
                                        if (!(t[r >> 2] | 0)) {
                                            e = Ei(f, e, t[f + 100 >> 2] | 0, t[f + 104 >> 2] | 0, i, 1) | 0;
                                            break
                                        }
                                    } else e = t[f + 16 >> 2] | 0;
                                    e = Di(f, e, t[f + 100 >> 2] | 0, t[f + 104 >> 2] | 0, i) | 0
                                } else e = 1
                            } while (0);
                            return e | 0
                        }

                        function Pi() {
                            var e = 0;
                            if (!(ao(8996) | 0)) {
                                if (!(t[1928] | 0)) e = 0;
                                else {
                                    zr();
                                    e = t[2248] | 0
                                }
                                t[1928] = e;
                                Ao(8996) | 0
                            }
                            return
                        }

                        function Di(e, i, r, n, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            u = u | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                C = 0,
                                I = 0;
                            I = e + 112 | 0;
                            l = t[I >> 2] | 0;
                            a = (l | 0) / (r | 0) | 0;
                            A = l - (v(a, r) | 0) | 0;
                            w = e + 24 | 0;
                            k = e + 120 | 0;
                            g = v(n, r) | 0;
                            b = v(u, r) | 0;
                            h = t[e + 148 >> 2] | 0;
                            if ((l | 0) < (b | 0)) n = Ri(k, A, a) | 0;
                            else n = 0;
                            C = e + 48 | 0;
                            c = a;
                            s = l;
                            a = t[C >> 2] | 0;
                            while (1) {
                                if (!((s | 0) < (b | 0) & (a | 0) == 0)) {
                                    a = 22;
                                    break
                                }
                                if (!(A & h)) l = Ri(k, A, c) | 0;
                                else l = n;
                                _i(w);
                                n = xi(t[l >> 2] | 0, w) | 0;
                                if ((n | 0) < 256) {
                                    f[i + s >> 0] = n;
                                    n = s + 1 | 0;
                                    A = A + 1 | 0;
                                    if ((A | 0) >= (r | 0)) {
                                        a = c + 1 | 0;
                                        if ((c | 0) < (u | 0) & (a & 15 | 0) == 0) {
                                            Vr(e, a);
                                            A = 0
                                        } else A = 0
                                    } else a = c
                                } else {
                                    if ((n | 0) >= 280) {
                                        a = 20;
                                        break
                                    }
                                    a = Mi(n + -256 | 0, w) | 0;
                                    n = xi(t[l + 16 >> 2] | 0, w) | 0;
                                    _i(w);
                                    n = Yi(r, Vi(n, w) | 0) | 0;
                                    if ((g - s | 0) < (a | 0) | (s | 0) < (n | 0)) {
                                        a = 20;
                                        break
                                    }
                                    Yr(i + s | 0, n, a);
                                    o = a + A | 0;
                                    while (1) {
                                        if ((o | 0) < (r | 0)) break;
                                        n = c + 1 | 0;
                                        if ((c | 0) < (u | 0) & (n & 15 | 0) == 0) Vr(e, n);
                                        c = n;
                                        o = o - r | 0
                                    }
                                    n = a + s | 0;
                                    if ((n | 0) >= (b | 0) | (o & h | 0) == 0) {
                                        a = c;
                                        A = o
                                    } else {
                                        a = c;
                                        A = o;
                                        l = Ri(k, o, c) | 0
                                    }
                                }
                                o = Si(w) | 0;
                                t[C >> 2] = o;
                                c = a;
                                s = n;
                                n = l;
                                a = o
                            }
                            if ((a | 0) == 20) {
                                n = Si(w) | 0;
                                t[C >> 2] = n;
                                a = 23
                            } else if ((a | 0) == 22) {
                                Vr(e, (c | 0) > (u | 0) ? u : c);
                                n = Si(w) | 0;
                                t[C >> 2] = n;
                                if ((g | 0) > (s | 0) & (n | 0) != 0) a = 23;
                                else {
                                    t[I >> 2] = s;
                                    n = 1
                                }
                            }
                            if ((a | 0) == 23) {
                                t[e >> 2] = (n | 0) == 0 ? 3 : 5;
                                n = 0
                            }
                            return n | 0
                        }

                        function Bi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0;
                            A = e + 108 | 0;
                            n = t[A >> 2] | 0;
                            l = e + 100 | 0;
                            u = e + 8 | 0;
                            a = e + 20 | 0;
                            r = n;
                            f = i - n | 0;
                            n = (t[e + 16 >> 2] | 0) + ((v(t[l >> 2] | 0, n) | 0) << 2) | 0;
                            while (1) {
                                if ((f | 0) <= 0) break;
                                o = (f | 0) < 16 ? f : 16;
                                s = t[u >> 2] | 0;
                                h = t[s + 40 >> 2] | 0;
                                s = t[s >> 2] | 0;
                                c = v(s, o) | 0;
                                b = (t[h + 136 >> 2] | 0) + (v(s, r) | 0) | 0;
                                k = t[a >> 2] | 0;
                                ji(e, o, n);
                                ef(k, b, c);
                                c = o + r | 0;
                                Mr(h, r, c, b, s);
                                r = c;
                                f = f - o | 0;
                                n = n + ((v(t[l >> 2] | 0, o) | 0) << 2) | 0
                            }
                            t[e + 116 >> 2] = i;
                            t[A >> 2] = i;
                            return
                        }

                        function Ei(e, i, r, f, n, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            u = u | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0,
                                D = 0,
                                B = 0,
                                E = 0,
                                R = 0,
                                G = 0;
                            G = e + 112 | 0;
                            C = t[G >> 2] | 0;
                            a = (C | 0) / (r | 0) | 0;
                            A = C - (v(a, r) | 0) | 0;
                            D = e + 24 | 0;
                            B = e + 120 | 0;
                            l = i + (C << 2) | 0;
                            E = i + ((v(f, r) | 0) << 2) | 0;
                            I = v(n, r) | 0;
                            d = i + (I << 2) | 0;
                            m = t[B >> 2] | 0;
                            y = m + 280 | 0;
                            R = e + 56 | 0;
                            o = (t[R >> 2] | 0) == 0 ? 16777216 : a;
                            m = (m | 0) > 0;
                            p = m ? e + 124 | 0 : 0;
                            P = t[e + 148 >> 2] | 0;
                            if ((C | 0) < (I | 0)) f = Ri(B, A, a) | 0;
                            else f = 0;
                            C = (u | 0) != 0;
                            I = E;
                            c = l;
                            w = l;
                            e: while (1) {
                                k = a;
                                h = c;
                                a = o;
                                while (1) {
                                    if (h >>> 0 >= d >>> 0) {
                                        s = 53;
                                        break e
                                    }
                                    if ((k | 0) < (a | 0)) g = a;
                                    else {
                                        Gi(e, h - i >> 2);
                                        g = k + 8 | 0
                                    }
                                    if (!(A & P)) f = Ri(B, A, k) | 0;
                                    if (t[f + 28 >> 2] | 0) {
                                        s = 11;
                                        break
                                    }
                                    _i(D);
                                    if (t[f + 32 >> 2] | 0) {
                                        a = Fi(f, D, h) | 0;
                                        if (Si(D) | 0) {
                                            s = 53;
                                            break e
                                        }
                                        if (!a) {
                                            s = 22;
                                            break
                                        }
                                    } else a = xi(t[f >> 2] | 0, D) | 0;
                                    if (Si(D) | 0) {
                                        s = 53;
                                        break e
                                    }
                                    if ((a | 0) < 256) {
                                        s = 18;
                                        break
                                    }
                                    if ((a | 0) >= 280) {
                                        s = 46;
                                        break
                                    }
                                    o = Mi(a + -256 | 0, D) | 0;
                                    a = xi(t[f + 16 >> 2] | 0, D) | 0;
                                    _i(D);
                                    a = Yi(r, Vi(a, D) | 0) | 0;
                                    if (Si(D) | 0) {
                                        s = 53;
                                        break e
                                    }
                                    l = h;
                                    if ((l - i >> 2 | 0) < (a | 0)) {
                                        s = 59;
                                        break e
                                    }
                                    if ((I - l >> 2 | 0) < (o | 0)) {
                                        s = 59;
                                        break e
                                    }
                                    Ui(h, a, o);
                                    a = k;
                                    A = o + A | 0;
                                    while (1) {
                                        if ((A | 0) < (r | 0)) break;
                                        l = a + 1 | 0;
                                        if (C & (a | 0) < (n | 0) & (l & 15 | 0) == 0) fc[u & 3](e, l);
                                        a = l;
                                        A = A - r | 0
                                    }
                                    c = h + (o << 2) | 0;
                                    if (A & P) f = Ri(B, A, a) | 0;
                                    if (m) {
                                        s = 43;
                                        break
                                    } else {
                                        k = a;
                                        h = c;
                                        a = g
                                    }
                                }
                                do {
                                    if ((s | 0) == 11) {
                                        t[h >> 2] = t[f + 24 >> 2];
                                        b = w;
                                        a = w;
                                        s = 23
                                    } else if ((s | 0) == 18) {
                                        s = w;
                                        if (t[f + 20 >> 2] | 0) {
                                            t[h >> 2] = t[f + 24 >> 2] | a << 8;
                                            b = w;
                                            a = s;
                                            s = 23;
                                            break
                                        }
                                        l = xi(t[f + 4 >> 2] | 0, D) | 0;
                                        _i(D);
                                        o = xi(t[f + 8 >> 2] | 0, D) | 0;
                                        c = xi(t[f + 12 >> 2] | 0, D) | 0;
                                        if (Si(D) | 0) {
                                            s = 53;
                                            break e
                                        }
                                        t[h >> 2] = l << 16 | a << 8 | o | c << 24;
                                        b = w;
                                        a = s;
                                        s = 23
                                    } else if ((s | 0) == 22) {
                                        b = w;
                                        a = w;
                                        s = 23
                                    } else if ((s | 0) == 43) {
                                        s = 0;
                                        o = ((w >>> 0 > c >>> 0 ? w : c) + 3 + (0 - w) | 0) >>> 2;
                                        l = w;
                                        while (1) {
                                            if (l >>> 0 >= c >>> 0) break;
                                            Hi(p, t[l >> 2] | 0);
                                            l = l + 4 | 0
                                        }
                                        l = w + (o << 2) | 0
                                    } else if ((s | 0) == 46) {
                                        if ((a | 0) >= (y | 0)) {
                                            s = 59;
                                            break e
                                        }
                                        o = ((w >>> 0 > h >>> 0 ? w : h) + 3 + (0 - w) | 0) >>> 2;
                                        l = w;
                                        while (1) {
                                            if (l >>> 0 >= h >>> 0) break;
                                            Hi(p, t[l >> 2] | 0);
                                            l = l + 4 | 0
                                        }
                                        s = w + (o << 2) | 0;
                                        t[h >> 2] = Zi(p, a + -280 | 0) | 0;
                                        b = s;
                                        a = s;
                                        s = 23
                                    }
                                } while (0);
                                if ((s | 0) == 23) {
                                    o = h + 4 | 0;
                                    A = A + 1 | 0;
                                    if ((A | 0) >= (r | 0)) {
                                        A = k + 1 | 0;
                                        if (C & (k | 0) < (n | 0) & (A & 15 | 0) == 0) fc[u & 3](e, A);
                                        if (m) {
                                            l = ((b >>> 0 > o >>> 0 ? b : o) + 3 + (0 - a) | 0) >>> 2;
                                            a = b;
                                            while (1) {
                                                if (a >>> 0 >= o >>> 0) break;
                                                Hi(p, t[a >> 2] | 0);
                                                a = a + 4 | 0
                                            }
                                            a = A;
                                            A = 0;
                                            c = o;
                                            l = b + (l << 2) | 0
                                        } else {
                                            a = A;
                                            A = 0;
                                            c = o;
                                            l = b
                                        }
                                    } else {
                                        a = k;
                                        c = o;
                                        l = b
                                    }
                                }
                                w = l;
                                o = g
                            }
                            do {
                                if ((s | 0) == 53) {
                                    f = Si(D) | 0;
                                    t[e + 48 >> 2] = f;
                                    f = (f | 0) == 0;
                                    if (h >>> 0 < E >>> 0 & ((f | (t[R >> 2] | 0) == 0) ^ 1)) {
                                        Wi(e);
                                        f = 1;
                                        break
                                    }
                                    if (f) {
                                        if (u | 0) fc[u & 3](e, (k | 0) > (n | 0) ? n : k);
                                        t[e >> 2] = 0;
                                        t[G >> 2] = h - i >> 2;
                                        f = 1
                                    } else s = 59
                                }
                            } while (0);
                            if ((s | 0) == 59) {
                                t[e >> 2] = 3;
                                f = 0
                            }
                            return f | 0
                        }

                        function Ri(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            r = Hr(t[e + 40 >> 2] | 0, t[e + 36 >> 2] | 0, t[e + 32 >> 2] | 0, i, r) | 0;
                            return (t[e + 48 >> 2] | 0) + (r * 548 | 0) | 0
                        }

                        function Gi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0;
                            r = e + 64 | 0;
                            f = e + 24 | 0;
                            t[r >> 2] = t[f >> 2];
                            t[r + 4 >> 2] = t[f + 4 >> 2];
                            t[r + 8 >> 2] = t[f + 8 >> 2];
                            t[r + 12 >> 2] = t[f + 12 >> 2];
                            t[r + 16 >> 2] = t[f + 16 >> 2];
                            t[r + 20 >> 2] = t[f + 20 >> 2];
                            t[r + 24 >> 2] = t[f + 24 >> 2];
                            t[r + 28 >> 2] = t[f + 28 >> 2];
                            t[e + 96 >> 2] = i;
                            if ((t[e + 120 >> 2] | 0) > 0) Ti(e + 124 | 0, e + 136 | 0);
                            return
                        }

                        function _i(e) {
                            e = e | 0;
                            if ((t[e + 20 >> 2] | 0) > 31) Qr(e);
                            return
                        }

                        function Fi(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0;
                            f = (Sr(i) | 0) & 63;
                            n = t[e + 36 + (f << 3) >> 2] | 0;
                            e = t[e + 36 + (f << 3) + 4 >> 2] | 0;
                            f = (t[i + 20 >> 2] | 0) + n | 0;
                            if ((n | 0) < 256) {
                                xr(i, f);
                                t[r >> 2] = e;
                                e = 0
                            } else xr(i, f + -256 | 0);
                            return e | 0
                        }

                        function Si(e) {
                            e = e | 0;
                            if (!(t[e + 24 >> 2] | 0))
                                if ((t[e + 16 >> 2] | 0) == (t[e + 12 >> 2] | 0)) e = (t[e + 20 >> 2] | 0) > 64 & 1;
                                else e = 0;
                            else e = 1;
                            return e | 0
                        }

                        function xi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                n = 0,
                                u = 0,
                                A = 0,
                                l = 0;
                            u = (Sr(i) | 0) & 255;
                            n = e + (u << 2) | 0;
                            r = f[n >> 0] | 0;
                            if ((r & 255) > 8) {
                                A = i + 20 | 0;
                                xr(i, (t[A >> 2] | 0) + 8 | 0);
                                l = Sr(i) | 0;
                                r = n + ((a[e + (u << 2) + 2 >> 1] | 0) << 2) + ((l & (1 << (r & 255) + -8) + -1) << 2) | 0;
                                n = r;
                                e = A;
                                r = f[r >> 0] | 0
                            } else e = i + 20 | 0;
                            xr(i, (t[e >> 2] | 0) + (r & 255) | 0);
                            return a[n + 2 >> 1] | 0 | 0
                        }

                        function Qi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            s = x;
                            x = x + 16 | 0;
                            a = s;
                            c = e + 108 | 0;
                            r = t[c >> 2] | 0;
                            f = i - r | 0;
                            if ((f | 0) > 0) {
                                A = (t[e + 16 >> 2] | 0) + ((v(t[e + 100 >> 2] | 0, r) | 0) << 2) | 0;
                                l = t[e + 8 >> 2] | 0;
                                t[a >> 2] = t[e + 20 >> 2];
                                o = t[l >> 2] << 2;
                                ji(e, f, A);
                                do {
                                    if (Ni(l, t[c >> 2] | 0, i, a, o) | 0) {
                                        r = t[e + 12 >> 2] | 0;
                                        n = t[r >> 2] | 0;
                                        if (!($i(n) | 0)) {
                                            r = t[a >> 2] | 0;
                                            if (!(t[l + 92 >> 2] | 0)) r = fr(e, r, o, t[l + 12 >> 2] | 0, t[l + 16 >> 2] | 0) | 0;
                                            else r = rr(e, r, o, t[l + 16 >> 2] | 0) | 0;
                                            t[e + 116 >> 2] = r;
                                            break
                                        } else {
                                            A = e + 116 | 0;
                                            u = t[r + 20 >> 2] | 0;
                                            f = (t[r + 16 >> 2] | 0) + (v(u, t[A >> 2] | 0) | 0) | 0;
                                            r = t[a >> 2] | 0;
                                            if (!(t[l + 92 >> 2] | 0)) r = ir(n, r, o, t[l + 12 >> 2] | 0, t[l + 16 >> 2] | 0, f, u) | 0;
                                            else r = er(e, r, o, t[l + 16 >> 2] | 0, f, u) | 0;
                                            t[A >> 2] = (t[A >> 2] | 0) + r;
                                            break
                                        }
                                    }
                                } while (0)
                            }
                            t[c >> 2] = i;
                            x = s;
                            return
                        }

                        function Hi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            r = Xi(i, t[e + 4 >> 2] | 0) | 0;
                            t[(t[e >> 2] | 0) + (r << 2) >> 2] = i;
                            return
                        }

                        function Mi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return Vi(e, i) | 0
                        }

                        function Vi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            r = e + -2 >> 1;
                            if ((e | 0) >= 4) e = (zi(i, r) | 0) + ((e & 1 | 2) << r) | 0;
                            return e + 1 | 0
                        }

                        function Yi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            if ((i | 0) > 120) e = i + -120 | 0;
                            else {
                                i = u[3632 + (i + -1) >> 0] | 0;
                                e = (v(i >>> 4, e) | 0) + (8 - (i & 15)) | 0;
                                e = (e | 0) > 1 ? e : 1
                            }
                            return e | 0
                        }

                        function Ui(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0;
                            u = e + (0 - i << 2) | 0;
                            if ((i | 0) < 3 & (r | 0) > 3 ? (e & 3 | 0) == 0 : 0) {
                                if ((i | 0) == 1) {
                                    f = t[u >> 2] | 0;
                                    i = f
                                } else {
                                    f = u;
                                    i = t[f >> 2] | 0;
                                    f = t[f + 4 >> 2] | 0
                                }
                                Li(u, e, r, i, f)
                            } else n = 7;
                            e: do {
                                if ((n | 0) == 7) {
                                    if ((i | 0) >= (r | 0)) {
                                        mo(e | 0, u | 0, r << 2 | 0) | 0;
                                        break
                                    }
                                    i = 0;
                                    while (1) {
                                        if ((i | 0) >= (r | 0)) break e;
                                        t[e + (i << 2) >> 2] = t[u + (i << 2) >> 2];
                                        i = i + 1 | 0
                                    }
                                }
                            } while (0);
                            return
                        }

                        function Zi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return t[(t[e >> 2] | 0) + (i << 2) >> 2] | 0
                        }

                        function Wi(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0;
                            t[e >> 2] = 5;
                            i = e + 24 | 0;
                            r = e + 64 | 0;
                            t[i >> 2] = t[r >> 2];
                            t[i + 4 >> 2] = t[r + 4 >> 2];
                            t[i + 8 >> 2] = t[r + 8 >> 2];
                            t[i + 12 >> 2] = t[r + 12 >> 2];
                            t[i + 16 >> 2] = t[r + 16 >> 2];
                            t[i + 20 >> 2] = t[r + 20 >> 2];
                            t[i + 24 >> 2] = t[r + 24 >> 2];
                            t[i + 28 >> 2] = t[r + 28 >> 2];
                            t[e + 112 >> 2] = t[e + 96 >> 2];
                            if ((t[e + 120 >> 2] | 0) > 0) Ti(e + 136 | 0, e + 124 | 0);
                            return
                        }

                        function Ti(e, i) {
                            e = e | 0;
                            i = i | 0;
                            mo(t[i >> 2] | 0, t[e >> 2] | 0, 4 << t[i + 8 >> 2] | 0) | 0;
                            return
                        }

                        function Li(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0,
                                A = 0;
                            if (!(i & 4)) {
                                a = r;
                                u = f;
                                f = n
                            } else {
                                t[i >> 2] = t[e >> 2];
                                a = r + -1 | 0;
                                i = i + 4 | 0;
                                e = e + 4 | 0;
                                u = n
                            }
                            n = a >> 1;
                            r = 0;
                            while (1) {
                                if ((r | 0) >= (n | 0)) break;
                                A = i + (r << 3) | 0;
                                t[A >> 2] = u;
                                t[A + 4 >> 2] = f;
                                r = r + 1 | 0
                            }
                            r = r << 1;
                            if (a & 1 | 0) t[i + (r << 2) >> 2] = t[e + (r << 2) >> 2];
                            return
                        }

                        function zi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0;
                            if ((i | 0) < 25 & (t[e + 24 >> 2] | 0) == 0) {
                                r = Ji(e) | 0;
                                r = t[3760 + (i << 2) >> 2] & r;
                                f = e + 20 | 0;
                                t[f >> 2] = (t[f >> 2] | 0) + i;
                                Oi(e);
                                e = r
                            } else {
                                qi(e);
                                e = 0
                            }
                            return e | 0
                        }

                        function Ji(e) {
                            e = e | 0;
                            var i = 0;
                            i = e;
                            e = Co(t[i >> 2] | 0, t[i + 4 >> 2] | 0, t[e + 20 >> 2] & 63 | 0) | 0;
                            y() | 0;
                            return e | 0
                        }

                        function Oi(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            i = e + 16 | 0;
                            r = e + 20 | 0;
                            f = e + 12 | 0;
                            n = e + 8 | 0;
                            a = t[r >> 2] | 0;
                            while (1) {
                                if ((a | 0) <= 7) break;
                                A = t[i >> 2] | 0;
                                if (A >>> 0 >= (t[f >> 2] | 0) >>> 0) break;
                                c = e;
                                c = Co(t[c >> 2] | 0, t[c + 4 >> 2] | 0, 8) | 0;
                                o = y() | 0;
                                s = e;
                                t[s >> 2] = c;
                                t[s + 4 >> 2] = o;
                                s = Io(u[(t[n >> 2] | 0) + A >> 0] | 0 | 0, 0, 56) | 0;
                                o = y() | 0 | o;
                                l = e;
                                t[l >> 2] = s | c;
                                t[l + 4 >> 2] = o;
                                t[i >> 2] = A + 1;
                                A = a + -8 | 0;
                                t[r >> 2] = A;
                                a = A
                            }
                            if (Ki(e) | 0) qi(e);
                            return
                        }

                        function qi(e) {
                            e = e | 0;
                            t[e + 24 >> 2] = 1;
                            t[e + 20 >> 2] = 0;
                            return
                        }

                        function Ki(e) {
                            e = e | 0;
                            if (!(t[e + 24 >> 2] | 0))
                                if ((t[e + 16 >> 2] | 0) == (t[e + 12 >> 2] | 0)) e = (t[e + 20 >> 2] | 0) > 64 & 1;
                                else e = 0;
                            else e = 1;
                            return e | 0
                        }

                        function Xi(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return (v(e, 506832829) | 0) >>> i | 0
                        }

                        function ji(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0;
                            a = t[e + 100 >> 2] | 0;
                            A = t[e + 108 >> 2] | 0;
                            l = A + i | 0;
                            u = t[e + 20 >> 2] | 0;
                            n = t[e + 176 >> 2] | 0;
                            while (1) {
                                f = n + -1 | 0;
                                if ((n | 0) <= 0) break;
                                Ir(e + 180 + (f * 20 | 0) | 0, A, l, r, u);
                                n = f;
                                r = u
                            }
                            if ((r | 0) != (u | 0)) mo(u | 0, r | 0, v(i << 2, a) | 0) | 0;
                            return
                        }

                        function Ni(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0;
                            u = t[e + 88 >> 2] | 0;
                            u = (u | 0) < (r | 0) ? u : r;
                            r = t[e + 84 >> 2] | 0;
                            if ((r | 0) > (i | 0)) {
                                i = v(r - i | 0, n) | 0;
                                t[f >> 2] = (t[f >> 2] | 0) + i;
                                i = r
                            }
                            if ((u | 0) > (i | 0)) {
                                n = t[e + 76 >> 2] | 0;
                                t[f >> 2] = (t[f >> 2] | 0) + (n << 2);
                                t[e + 8 >> 2] = i - r;
                                t[e + 12 >> 2] = (t[e + 80 >> 2] | 0) - n;
                                t[e + 16 >> 2] = u - i;
                                i = 1
                            } else i = 0;
                            return i | 0
                        }

                        function $i(e) {
                            e = e | 0;
                            return e >>> 0 < 11 | 0
                        }

                        function er(e, i, r, f, n, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            u = u | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            l = t[t[e + 12 >> 2] >> 2] | 0;
                            A = e + 268 | 0;
                            e = 0;
                            a = 0;
                            while (1) {
                                if ((e | 0) >= (f | 0)) break;
                                c = i + (v(e, r) | 0) | 0;
                                o = n + (v(a, u) | 0) | 0;
                                s = f - e | 0;
                                b = tr(t[A >> 2] | 0, s) | 0;
                                ur(c, r, t[(t[A >> 2] | 0) + 44 >> 2] | 0, b, 0);
                                c = (ar(t[A >> 2] | 0, s, c, r) | 0) + e | 0;
                                e = c;
                                a = (Cr(t[A >> 2] | 0, l, u, o) | 0) + a | 0
                            }
                            return a | 0
                        }

                        function ir(e, i, r, f, n, t, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            u = u | 0;
                            var a = 0;
                            a = n;
                            while (1) {
                                if ((a | 0) <= 0) break;
                                kr(i, f, e, t);
                                t = t + u | 0;
                                a = a + -1 | 0;
                                i = i + r | 0
                            }
                            return n | 0
                        }

                        function rr(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0;
                            a = e + 268 | 0;
                            n = 0;
                            u = t[e + 116 >> 2] | 0;
                            while (1) {
                                if ((n | 0) >= (f | 0)) break;
                                A = f - n | 0;
                                l = tr(t[a >> 2] | 0, A) | 0;
                                ur(i, r, t[(t[a >> 2] | 0) + 44 >> 2] | 0, l, 0);
                                A = (ar(t[a >> 2] | 0, A, i, r) | 0) + n | 0;
                                l = i + (v(l, r) | 0) | 0;
                                i = l;
                                n = A;
                                u = (Ar(e, u) | 0) + u | 0
                            }
                            return u | 0
                        }

                        function fr(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0;
                            a = e + 12 | 0;
                            u = t[e + 116 >> 2] | 0;
                            e = n;
                            while (1) {
                                if ((e | 0) <= 0) break;
                                nr(i, f, u, t[a >> 2] | 0);
                                u = u + 1 | 0;
                                e = e + -1 | 0;
                                i = i + r | 0
                            }
                            return u | 0
                        }

                        function nr(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            qA(e, (t[f + 16 >> 2] | 0) + (v(t[f + 32 >> 2] | 0, r) | 0) | 0, i);
                            n = r >> 1;
                            u = (t[f + 20 >> 2] | 0) + (v(t[f + 36 >> 2] | 0, n) | 0) | 0;
                            KA(e, u, (t[f + 24 >> 2] | 0) + (v(t[f + 40 >> 2] | 0, n) | 0) | 0, i, r & 1 ^ 1);
                            n = t[f + 28 >> 2] | 0;
                            if (n | 0) $r(e + 3 | 0, 0, i, 1, n + (v(t[f + 44 >> 2] | 0, r) | 0) | 0, 0) | 0;
                            return
                        }

                        function tr(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            r = t[e + 32 >> 2] | 0;
                            e = ((t[e + 24 >> 2] | 0) + -1 + r | 0) / (r | 0) | 0;
                            return ((e | 0) > (i | 0) ? i : e) | 0
                        }

                        function ur(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var t = 0;
                            t = 0;
                            while (1) {
                                if ((t | 0) >= (f | 0)) break;
                                Jr(e, r, n);
                                t = t + 1 | 0;
                                e = e + i | 0
                            }
                            return
                        }

                        function ar(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0;
                            l = e + 4 | 0;
                            o = e + 76 | 0;
                            c = e + 80 | 0;
                            s = e + 8 | 0;
                            b = e + 52 | 0;
                            h = e + 60 | 0;
                            a = e + 32 | 0;
                            A = e + 24 | 0;
                            u = 0;
                            while (1) {
                                if ((u | 0) >= (i | 0)) break;
                                if (sr(e) | 0) break;
                                if (t[l >> 2] | 0) {
                                    n = t[o >> 2] | 0;
                                    t[o >> 2] = t[c >> 2];
                                    t[c >> 2] = n
                                }
                                br(e, r);
                                e: do {
                                    if (!(t[l >> 2] | 0)) {
                                        n = 0;
                                        while (1) {
                                            if ((n | 0) >= (v(t[b >> 2] | 0, t[s >> 2] | 0) | 0)) break e;
                                            k = (t[o >> 2] | 0) + (n << 2) | 0;
                                            t[k >> 2] = (t[k >> 2] | 0) + (t[(t[c >> 2] | 0) + (n << 2) >> 2] | 0);
                                            n = n + 1 | 0
                                        }
                                    }
                                } while (0);
                                t[h >> 2] = (t[h >> 2] | 0) + 1;
                                t[A >> 2] = (t[A >> 2] | 0) - (t[a >> 2] | 0);
                                r = r + f | 0;
                                u = u + 1 | 0
                            }
                            return u | 0
                        }

                        function Ar(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0;
                            n = t[e + 268 >> 2] | 0;
                            u = t[n + 68 >> 2] | 0;
                            a = t[n + 52 >> 2] | 0;
                            f = e + 12 | 0;
                            r = 0;
                            e = i;
                            while (1) {
                                if (!(lr(n) | 0)) break;
                                or(n);
                                Jr(u, a, 1);
                                nr(u, a, e, t[f >> 2] | 0);
                                r = r + 1 | 0;
                                e = e + 1 | 0
                            }
                            return r | 0
                        }

                        function lr(e) {
                            e = e | 0;
                            if (!(cr(e) | 0)) e = (t[e + 24 >> 2] | 0) < 1 & 1;
                            else e = 0;
                            return e | 0
                        }

                        function or(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            r = e + 24 | 0;
                            if ((t[r >> 2] | 0) < 1) {
                                e: do {
                                    if (!(t[e + 4 >> 2] | 0)) {
                                        if (t[e + 20 >> 2] | 0) {
                                            Dt(e);
                                            break
                                        }
                                        n = e + 8 | 0;
                                        u = e + 52 | 0;
                                        a = e + 76 | 0;
                                        A = e + 68 | 0;
                                        i = 0;
                                        while (1) {
                                            if ((i | 0) >= (v(t[u >> 2] | 0, t[n >> 2] | 0) | 0)) break e;
                                            f[(t[A >> 2] | 0) + i >> 0] = t[(t[a >> 2] | 0) + (i << 2) >> 2];
                                            t[(t[a >> 2] | 0) + (i << 2) >> 2] = 0;
                                            i = i + 1 | 0
                                        }
                                    } else Pt(e)
                                } while (0);t[r >> 2] = (t[r >> 2] | 0) + (t[e + 28 >> 2] | 0);A = e + 68 | 0;t[A >> 2] = (t[A >> 2] | 0) + (t[e + 72 >> 2] | 0);A = e + 64 | 0;t[A >> 2] = (t[A >> 2] | 0) + 1
                            }
                            return
                        }

                        function cr(e) {
                            e = e | 0;
                            return (t[e + 64 >> 2] | 0) >= (t[e + 56 >> 2] | 0) | 0
                        }

                        function sr(e) {
                            e = e | 0;
                            if (!(hr(e) | 0)) e = (t[e + 24 >> 2] | 0) < 1 & 1;
                            else e = 0;
                            return e | 0
                        }

                        function br(e, i) {
                            e = e | 0;
                            i = i | 0;
                            if (!(t[e >> 2] | 0)) Et(e, i);
                            else Bt(e, i);
                            return
                        }

                        function hr(e) {
                            e = e | 0;
                            return (t[e + 64 >> 2] | 0) >= (t[e + 56 >> 2] | 0) | 0
                        }

                        function kr(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            do {
                                switch (r | 0) {
                                    case 0: {
                                        hn(e, i, f);
                                        break
                                    }
                                    case 1: {
                                        bn(e, i, f);
                                        break
                                    }
                                    case 7: {
                                        bn(e, i, f);
                                        Xr(f, 0, i, 1, 0);
                                        break
                                    }
                                    case 2: {
                                        kn(e, i, f);
                                        break
                                    }
                                    case 3: {
                                        wr(e, i, f, 1);
                                        break
                                    }
                                    case 8: {
                                        wr(e, i, f, 1);
                                        Xr(f, 0, i, 1, 0);
                                        break
                                    }
                                    case 4: {
                                        wr(e, i, f, 0);
                                        break
                                    }
                                    case 9: {
                                        wr(e, i, f, 0);
                                        Xr(f, 1, i, 1, 0);
                                        break
                                    }
                                    case 5: {
                                        wn(e, i, f);
                                        break
                                    }
                                    case 10: {
                                        wn(e, i, f);
                                        qr(f, i, 1, 0);
                                        break
                                    }
                                    case 6: {
                                        gn(e, i, f);
                                        break
                                    }
                                    default: {}
                                }
                            } while (0);
                            return
                        }

                        function wr(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            e: do {
                                if (!f) {
                                    i = e + (i << 2) | 0;
                                    while (1) {
                                        if (e >>> 0 >= i >>> 0) break e;
                                        vr(r, gr(t[e >> 2] | 0) | 0);
                                        e = e + 4 | 0;
                                        r = r + 4 | 0
                                    }
                                } else mo(r | 0, e | 0, i << 2 | 0) | 0
                            } while (0);
                            return
                        }

                        function gr(e) {
                            e = e | 0;
                            return yo(e | 0) | 0
                        }

                        function vr(e, i) {
                            e = e | 0;
                            i = i | 0;
                            f[e >> 0] = i;
                            f[e + 1 >> 0] = i >> 8;
                            f[e + 2 >> 0] = i >> 16;
                            f[e + 3 >> 0] = i >> 24;
                            return
                        }

                        function Cr(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            u = t[e + 68 >> 2] | 0;
                            a = t[e + 52 >> 2] | 0;
                            n = 0;
                            while (1) {
                                if (!(lr(e) | 0)) break;
                                A = f + (v(n, r) | 0) | 0;
                                or(e);
                                Jr(u, a, 1);
                                kr(u, a, i, A);
                                n = n + 1 | 0
                            }
                            return n | 0
                        }

                        function Ir(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0,
                                A = 0;
                            a = t[e + 8 >> 2] | 0;
                            e: do {
                                switch (t[e >> 2] | 0) {
                                    case 2: {
                                        cn(f, v(a, r - i | 0) | 0, n);
                                        break
                                    }
                                    case 0: {
                                        dr(e, i, r, f, n);
                                        if ((t[e + 12 >> 2] | 0) != (r | 0)) mo(n + (0 - a << 2) | 0, n + ((v(a, ~i + r | 0) | 0) << 2) | 0, a << 2 | 0) | 0;
                                        break
                                    }
                                    case 1: {
                                        yr(e, i, r, f, n);
                                        break
                                    }
                                    case 3: {
                                        if ((f | 0) == (n | 0) ? (u = t[e + 4 >> 2] | 0, (u | 0) > 0) : 0) {
                                            n = r - i | 0;
                                            A = v(a, n) | 0;
                                            n = v(mr(a, u) | 0, n) | 0;
                                            a = f + (A << 2) + (0 - n << 2) | 0;
                                            po(a | 0, f | 0, n << 2 | 0) | 0;
                                            pr(e, i, r, a, f);
                                            break e
                                        }
                                        pr(e, i, r, f, n);
                                        break
                                    }
                                    default: {}
                                }
                            } while (0);
                            return
                        }

                        function dr(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0;
                            b = t[e + 8 >> 2] | 0;
                            if (!i) {
                                Er(f, 0, 1, n);
                                Rr(f + 4 | 0, 0, b + -1 | 0, n + 4 | 0);
                                i = 1;
                                f = f + (b << 2) | 0;
                                n = n + (b << 2) | 0
                            }
                            a = t[e + 4 >> 2] | 0;
                            A = 1 << a;
                            l = A + -1 | 0;
                            o = mr(b, a) | 0;
                            c = 0 - b | 0;
                            s = 0 - A | 0;
                            a = (t[e + 16 >> 2] | 0) + ((v(i >> a, o) | 0) << 2) | 0;
                            while (1) {
                                if ((i | 0) >= (r | 0)) break;
                                Gr(f, n + (c << 2) | 0, 1, n);
                                e = 1;
                                u = a;
                                while (1) {
                                    if ((e | 0) >= (b | 0)) break;
                                    h = (e & s) + A | 0;
                                    h = (h | 0) > (b | 0) ? b : h;
                                    k = n + (e << 2) | 0;
                                    tc[t[8544 + (((t[u >> 2] | 0) >>> 8 & 15) << 2) >> 2] & 31](f + (e << 2) | 0, k + (c << 2) | 0, h - e | 0, k);
                                    e = h;
                                    u = u + 4 | 0
                                }
                                k = i + 1 | 0;
                                a = (k & l | 0) == 0 ? a + (o << 2) | 0 : a;
                                i = k;
                                f = f + (b << 2) | 0;
                                n = n + (b << 2) | 0
                            }
                            return
                        }

                        function yr(e, i, r, n, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            u = u | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0;
                            g = x;
                            x = x + 16 | 0;
                            k = g;
                            w = t[e + 8 >> 2] | 0;
                            l = t[e + 4 >> 2] | 0;
                            o = 1 << l;
                            c = o + -1 | 0;
                            s = w & 0 - o;
                            b = w - s | 0;
                            h = mr(w, l) | 0;
                            l = (t[e + 16 >> 2] | 0) + ((v(i >> l, h) | 0) << 2) | 0;
                            while (1) {
                                if ((i | 0) >= (r | 0)) break;
                                f[k >> 0] = 0;
                                f[k + 1 >> 0] = 0;
                                f[k + 2 >> 0] = 0;
                                A = n + (s << 2) | 0;
                                e = l;
                                a = n;
                                while (1) {
                                    if (a >>> 0 >= A >>> 0) break;
                                    Br(t[e >> 2] | 0, k);
                                    sn(k, a, o, u);
                                    e = e + 4 | 0;
                                    a = a + (o << 2) | 0;
                                    u = u + (o << 2) | 0
                                }
                                if (a >>> 0 < (n + (w << 2) | 0) >>> 0) {
                                    Br(t[e >> 2] | 0, k);
                                    sn(k, a, b, u);
                                    n = a + (b << 2) | 0;
                                    u = u + (b << 2) | 0
                                } else n = a;
                                A = i + 1 | 0;
                                l = (A & c | 0) == 0 ? l + (h << 2) | 0 : l;
                                i = A
                            }
                            x = g;
                            return
                        }

                        function mr(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return (e + -1 + (1 << i) | 0) >>> i | 0
                        }

                        function pr(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0;
                            u = t[e + 4 >> 2] | 0;
                            o = 8 >>> u;
                            c = t[e + 8 >> 2] | 0;
                            l = t[e + 16 >> 2] | 0;
                            e: do {
                                if ((o | 0) < 8) {
                                    a = (1 << u) + -1 | 0;
                                    A = (1 << o) + -1 | 0;
                                    while (1) {
                                        if ((i | 0) >= (r | 0)) break e;
                                        u = 0;
                                        e = 0;
                                        while (1) {
                                            if ((u | 0) >= (c | 0)) break;
                                            if (!(u & a)) {
                                                e = Pr(t[f >> 2] | 0) | 0;
                                                f = f + 4 | 0
                                            }
                                            t[n >> 2] = Dr(t[l + ((e & A) << 2) >> 2] | 0) | 0;
                                            u = u + 1 | 0;
                                            e = e >>> o;
                                            n = n + 4 | 0
                                        }
                                        i = i + 1 | 0
                                    }
                                } else vn(f, l, n, i, r, c)
                            } while (0);
                            return
                        }

                        function Pr(e) {
                            e = e | 0;
                            return e >>> 8 & 255 | 0
                        }

                        function Dr(e) {
                            e = e | 0;
                            return e | 0
                        }

                        function Br(e, i) {
                            e = e | 0;
                            i = i | 0;
                            f[i >> 0] = e;
                            f[i + 1 >> 0] = e >>> 8;
                            f[i + 2 >> 0] = e >>> 16;
                            return
                        }

                        function Er(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            i = 0;
                            while (1) {
                                if ((i | 0) >= (r | 0)) break;
                                t[f + (i << 2) >> 2] = Fr(t[e + (i << 2) >> 2] | 0, -16777216) | 0;
                                i = i + 1 | 0
                            }
                            return
                        }

                        function Rr(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            i = t[f + -4 >> 2] | 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = Fr(t[e + (n << 2) >> 2] | 0, i) | 0;
                                t[f + (n << 2) >> 2] = u;
                                i = u;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function Gr(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = _r(t[f + (n + -1 << 2) >> 2] | 0, i + (n << 2) | 0) | 0;
                                t[f + (n << 2) >> 2] = Fr(t[e + (n << 2) >> 2] | 0, u) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function _r(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return t[i >> 2] | 0
                        }

                        function Fr(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return (i & -16711936) + (e & -16711936) & -16711936 | (i & 16711935) + (e & 16711935) & 16711935 | 0
                        }

                        function Sr(e) {
                            e = e | 0;
                            var i = 0;
                            i = e;
                            e = Co(t[i >> 2] | 0, t[i + 4 >> 2] | 0, t[e + 20 >> 2] & 63 | 0) | 0;
                            y() | 0;
                            return e | 0
                        }

                        function xr(e, i) {
                            e = e | 0;
                            i = i | 0;
                            t[e + 20 >> 2] = i;
                            return
                        }

                        function Qr(e) {
                            e = e | 0;
                            Oi(e);
                            return
                        }

                        function Hr(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            if (!r) e = 0;
                            else e = t[e + ((v(n >> r, i) | 0) + (f >> r) << 2) >> 2] | 0;
                            return e | 0
                        }

                        function Mr(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0,
                                A = 0;
                            A = e + 12 | 0;
                            if (t[A >> 2] | 0) {
                                a = e + 140 | 0;
                                u = t[a >> 2] | 0;
                                e = f;
                                while (1) {
                                    if ((i | 0) >= (r | 0)) break;
                                    tc[t[8528 + (t[A >> 2] << 2) >> 2] & 31](u, e, e, n);
                                    f = e;
                                    i = i + 1 | 0;
                                    e = e + n | 0;
                                    u = f
                                }
                                t[a >> 2] = u
                            }
                            return
                        }

                        function Vr(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0;
                            f = t[e + 8 >> 2] | 0;
                            n = t[f + 40 >> 2] | 0;
                            u = e + 108 | 0;
                            a = t[((t[n + 12 >> 2] | 0) >>> 0 < 2 ? f + 84 | 0 : u) >> 2] | 0;
                            r = t[u >> 2] | 0;
                            r = (r | 0) < (a | 0) ? a : r;
                            if ((r | 0) < (i | 0)) {
                                a = t[f >> 2] | 0;
                                f = (t[n + 136 >> 2] | 0) + (v(a, r) | 0) | 0;
                                Wr(e + 180 | 0, r, i, (t[e + 16 >> 2] | 0) + (v(t[e + 100 >> 2] | 0, r) | 0) | 0, f);
                                Mr(n, r, i, f, a)
                            }
                            t[e + 116 >> 2] = i;
                            t[u >> 2] = i;
                            return
                        }

                        function Yr(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0,
                                t = 0;
                            t = e + (0 - i) | 0;
                            e: do {
                                if ((r | 0) > 7) {
                                    switch (i | 0) {
                                        case 1: {
                                            i = v(u[t >> 0] | 0, 16843009) | 0;
                                            break
                                        }
                                        case 2: {
                                            i = ((u[t >> 0] | u[t + 1 >> 0] << 8) & 65535) * 65537 | 0;
                                            break
                                        }
                                        case 4: {
                                            i = u[t >> 0] | u[t + 1 >> 0] << 8 | u[t + 2 >> 0] << 16 | u[t + 3 >> 0] << 24;
                                            break
                                        }
                                        default: {
                                            n = 7;
                                            break e
                                        }
                                    }
                                    Ur(t, e, r, i)
                                } else n = 7
                            } while (0);
                            e: do {
                                if ((n | 0) == 7) {
                                    if ((i | 0) >= (r | 0)) {
                                        mo(e | 0, t | 0, r | 0) | 0;
                                        break
                                    }
                                    i = 0;
                                    while (1) {
                                        if ((i | 0) >= (r | 0)) break e;
                                        f[e + i >> 0] = f[t + i >> 0] | 0;
                                        i = i + 1 | 0
                                    }
                                }
                            } while (0);
                            return
                        }

                        function Ur(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0;
                            a = i;
                            while (1) {
                                if (!(a & 3)) break;
                                f[a >> 0] = f[e >> 0] | 0;
                                n = Zr(n) | 0;
                                r = r + -1 | 0;
                                a = a + 1 | 0;
                                e = e + 1 | 0
                            }
                            u = r >> 2;
                            i = 0;
                            while (1) {
                                if ((i | 0) >= (u | 0)) break;
                                t[a + (i << 2) >> 2] = n;
                                i = i + 1 | 0
                            }
                            n = i << 2;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                f[a + n >> 0] = f[e + n >> 0] | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function Zr(e) {
                            e = e | 0;
                            return e << 24 | e >>> 8 | 0
                        }

                        function Wr(e, i, r, n, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            u = u | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            a = t[e + 4 >> 2] | 0;
                            c = 8 >>> a;
                            s = t[e + 8 >> 2] | 0;
                            o = t[e + 16 >> 2] | 0;
                            e: do {
                                if ((c | 0) < 8) {
                                    A = (1 << a) + -1 | 0;
                                    l = (1 << c) + -1 | 0;
                                    while (1) {
                                        if ((i | 0) >= (r | 0)) break e;
                                        a = 0;
                                        e = 0;
                                        while (1) {
                                            if ((a | 0) >= (s | 0)) break;
                                            if (!(a & A)) {
                                                e = (Tr(f[n >> 0] | 0) | 0) & 255;
                                                n = n + 1 | 0
                                            }
                                            f[u >> 0] = Lr(t[o + ((e & l) << 2) >> 2] | 0) | 0;
                                            a = a + 1 | 0;
                                            e = e >>> c;
                                            u = u + 1 | 0
                                        }
                                        i = i + 1 | 0
                                    }
                                } else Cn(n, o, u, i, r, s)
                            } while (0);
                            return
                        }

                        function Tr(e) {
                            e = e | 0;
                            return e | 0
                        }

                        function Lr(e) {
                            e = e | 0;
                            return e >>> 8 & 255 | 0
                        }

                        function zr() {
                            var e = 0,
                                i = 0,
                                r = 0,
                                f = 0,
                                n = 0;
                            e = x;
                            x = x + 16 | 0;
                            i = e + 12 | 0;
                            t[i >> 2] = 0;
                            r = e + 8 | 0;
                            t[r >> 2] = 0;
                            n = e + 4 | 0;
                            t[n >> 2] = 0;
                            f = e;
                            t[f >> 2] = 0;
                            t[n >> 2] = 1;
                            t[f >> 2] = 2;
                            t[r >> 2] = 1;
                            t[i >> 2] = 2;
                            x = e;
                            return
                        }

                        function Jr(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (i | 0)) break;
                                u = e + (n << 2) | 0;
                                f = t[u >> 2] | 0;
                                if (f >>> 0 < 4278190080) {
                                    if (f >>> 0 < 16777216) f = 0;
                                    else {
                                        a = lf(f >>> 24, r) | 0;
                                        A = of (f & 255, a) | 0 | f & -16777216;
                                        A = A | ( of (f >>> 8 & 255, a) | 0) << 8;
                                        f = A | ( of (f >>> 16 & 255, a) | 0) << 16
                                    }
                                    t[u >> 2] = f
                                }
                                n = n + 1 | 0
                            }
                            return
                        }

                        function Or(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var t = 0,
                                u = 0,
                                a = 0;
                            t = 0;
                            while (1) {
                                if ((t | 0) >= (r | 0)) break;
                                u = f[i + t >> 0] | 0;
                                switch (u << 24 >> 24) {
                                    case -1:
                                        break;
                                    case 0: {
                                        f[e + t >> 0] = 0;
                                        break
                                    }
                                    default: {
                                        a = lf(u & 255, n) | 0;
                                        u = e + t | 0;
                                        f[u >> 0] = of (f[u >> 0] | 0, a) | 0
                                    }
                                }
                                t = t + 1 | 0
                            }
                            return
                        }

                        function qr(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            tf(e, i, r, f);
                            return
                        }

                        function Kr(e, i, r, f, n, a) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            a = a | 0;
                            var A = 0,
                                l = 0;
                            A = 0;
                            l = 0;
                            while (1) {
                                if ((l | 0) >= (f | 0)) break;
                                t[a + (l << 2) >> 2] = nf(u[e + A >> 0] | 0, u[i + A >> 0] | 0, u[r + A >> 0] | 0) | 0;
                                A = A + n | 0;
                                l = l + 1 | 0
                            }
                            return
                        }

                        function Xr(e, i, r, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            s = (i | 0) != 0;
                            c = s & 1;
                            s = s ? 0 : 3;
                            i = n;
                            while (1) {
                                o = i + -1 | 0;
                                if ((i | 0) <= 0) break;
                                n = e + c | 0;
                                a = e + s | 0;
                                i = 0;
                                while (1) {
                                    if ((i | 0) >= (r | 0)) break;
                                    A = i << 2;
                                    l = f[a + A >> 0] | 0;
                                    if (l << 24 >> 24 != -1) {
                                        b = (l & 255) * 32897 | 0;
                                        l = n + A | 0;
                                        f[l >> 0] = (v(b, u[l >> 0] | 0) | 0) >>> 23;
                                        l = n + (A | 1) | 0;
                                        f[l >> 0] = (v(b, u[l >> 0] | 0) | 0) >>> 23;
                                        l = n + (A | 2) | 0;
                                        f[l >> 0] = (v(b, u[l >> 0] | 0) | 0) >>> 23
                                    }
                                    i = i + 1 | 0
                                }
                                e = e + t | 0;
                                i = o
                            }
                            return
                        }

                        function jr(e, i, r, n, t, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            u = u | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            l = 0;
                            a = 255;
                            while (1) {
                                if ((l | 0) >= (n | 0)) break;
                                A = 0;
                                while (1) {
                                    if ((A | 0) >= (r | 0)) break;
                                    o = f[e + A >> 0] | 0;
                                    f[t + (A << 2) >> 0] = o;
                                    A = A + 1 | 0;
                                    a = a & (o & 255)
                                }
                                e = e + i | 0;
                                l = l + 1 | 0;
                                t = t + u | 0
                            }
                            return (a | 0) != 255 | 0
                        }

                        function Nr(e, i, r, f, n, a) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            a = a | 0;
                            var A = 0,
                                l = 0;
                            l = 0;
                            while (1) {
                                if ((l | 0) >= (f | 0)) break;
                                A = 0;
                                while (1) {
                                    if ((A | 0) >= (r | 0)) break;
                                    t[n + (A << 2) >> 2] = (u[e + A >> 0] | 0) << 8;
                                    A = A + 1 | 0
                                }
                                l = l + 1 | 0;
                                e = e + i | 0;
                                n = n + (a << 2) | 0
                            }
                            return
                        }

                        function $r(e, i, r, n, t, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            u = u | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            l = 0;
                            a = -1;
                            while (1) {
                                if ((l | 0) >= (n | 0)) break;
                                A = 0;
                                while (1) {
                                    if ((A | 0) >= (r | 0)) break;
                                    o = f[e + (A << 2) >> 0] | 0;
                                    f[t + A >> 0] = o;
                                    A = A + 1 | 0;
                                    a = o & a
                                }
                                e = e + i | 0;
                                l = l + 1 | 0;
                                t = t + u | 0
                            }
                            return a << 24 >> 24 == -1 | 0
                        }

                        function ef(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                f[i + n >> 0] = (t[e + (n << 2) >> 2] | 0) >>> 8;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function rf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            while (1) {
                                if ((i | 0) <= 0) {
                                    e = 0;
                                    break
                                }
                                if ((f[e >> 0] | 0) == -1) {
                                    i = i + -1 | 0;
                                    e = e + 1 | 0
                                } else {
                                    e = 1;
                                    break
                                }
                            }
                            return e | 0
                        }

                        function ff(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            r = 0;
                            while (1) {
                                if ((i | 0) <= 0) {
                                    i = 0;
                                    break
                                }
                                if ((f[e + r >> 0] | 0) == -1) {
                                    r = r + 4 | 0;
                                    i = i + -1 | 0
                                } else {
                                    i = 1;
                                    break
                                }
                            }
                            return i | 0
                        }

                        function nf(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            return e << 16 | i << 8 | r | -16777216 | 0
                        }

                        function tf(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var t = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            while (1) {
                                t = r + -1 | 0;
                                if ((r | 0) <= 0) break;
                                r = 0;
                                while (1) {
                                    if ((r | 0) >= (i | 0)) break;
                                    u = r << 1;
                                    l = e + u | 0;
                                    c = f[l >> 0] | 0;
                                    u = e + (u | 1) | 0;
                                    s = f[u >> 0] | 0;
                                    a = s & 15;
                                    A = (a & 255) * 4369 | 0;
                                    o = af(uf(c) | 0, A) | 0;
                                    c = af(Af(c) | 0, A) | 0;
                                    A = af(uf(s) | 0, A) | 0;
                                    f[l >> 0] = (c & 255) >>> 4 | o & -16 & 255;
                                    f[u >> 0] = A & -16 | a;
                                    r = r + 1 | 0
                                }
                                e = e + n | 0;
                                r = t
                            }
                            return
                        }

                        function uf(e) {
                            e = e | 0;
                            e = e & 255;
                            return (e & 240 | e >>> 4) & 255 | 0
                        }

                        function af(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return (v(e & 255, i) | 0) >>> 16 & 255 | 0
                        }

                        function Af(e) {
                            e = e | 0;
                            e = e & 255;
                            return (e & 15 | e << 4) & 255 | 0
                        }

                        function lf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            if (!i) e = e * 65793 | 0;
                            else e = 4278190080 / (e >>> 0) | 0;
                            return e | 0
                        }

                        function of (e, i) {
                            e = e | 0;
                            i = i | 0;
                            return ((v(e & 255, i) | 0) + 8388608 | 0) >>> 24 | 0
                        }

                        function cf() {
                            var e = 0;
                            if (!(ao(9164) | 0)) {
                                if (!(t[1934] | 0)) e = 0;
                                else {
                                    hu();
                                    e = t[2248] | 0
                                }
                                t[1934] = e;
                                Ao(9164) | 0
                            }
                            return
                        }

                        function sf(e) {
                            e = e | 0;
                            bu(e, 520) | 0;
                            return
                        }

                        function bf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            t[i + 44 >> 2] = 7;
                            t[i + 48 >> 2] = 8;
                            t[i + 52 >> 2] = 5;
                            t[i + 40 >> 2] = e;
                            return
                        }

                        function hf(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            f = kf() | 0;
                            do {
                                if (!f) i = 0;
                                else {
                                    A = t[e >> 2] | 0;
                                    t[f + 100 >> 2] = A;
                                    n = e + 4 | 0;
                                    u = t[n >> 2] | 0;
                                    t[f + 104 >> 2] = u;
                                    a = e + 24 | 0;
                                    t[f + 8 >> 2] = a;
                                    t[e + 64 >> 2] = e;
                                    t[a >> 2] = A;
                                    t[e + 28 >> 2] = u;
                                    t[f >> 2] = 0;
                                    wf(f + 24 | 0, i, r);
                                    if (gf(t[e >> 2] | 0, t[n >> 2] | 0, 1, f, 0) | 0) {
                                        if (((t[f + 176 >> 2] | 0) == 1 ? (t[f + 180 >> 2] | 0) == 3 : 0) ? (vf(f + 120 | 0) | 0) != 0 : 0) {
                                            t[e + 132 >> 2] = 1;
                                            i = Cf(f) | 0
                                        } else {
                                            t[e + 132 >> 2] = 0;
                                            i = If(f, t[e >> 2] | 0) | 0
                                        }
                                        if (i | 0) {
                                            t[e + 20 >> 2] = f;
                                            i = 1;
                                            break
                                        }
                                    }
                                    ii(f);
                                    i = 0
                                }
                            } while (0);
                            return i | 0
                        }

                        function kf() {
                            var e = 0;
                            e = Df(1, 0, 272) | 0;
                            if (!e) e = 0;
                            else {
                                t[e >> 2] = 0;
                                t[e + 4 >> 2] = 2;
                                Vf()
                            }
                            return e | 0
                        }

                        function wf(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                a = 0,
                                A = 0;
                            t[e + 12 >> 2] = r;
                            a = e;
                            t[a >> 2] = 0;
                            t[a + 4 >> 2] = 0;
                            t[e + 20 >> 2] = 0;
                            t[e + 24 >> 2] = 0;
                            a = r >>> 0 < 8 ? r : 8;
                            r = 0;
                            f = 0;
                            n = 0;
                            while (1) {
                                if (r >>> 0 >= a >>> 0) break;
                                A = Io(u[i + r >> 0] | 0 | 0, 0, r << 3 | 0) | 0;
                                r = r + 1 | 0;
                                f = A | f;
                                n = y() | 0 | n
                            }
                            A = e;
                            t[A >> 2] = f;
                            t[A + 4 >> 2] = n;
                            t[e + 16 >> 2] = a;
                            t[e + 8 >> 2] = i;
                            return
                        }

                        function gf(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            s = x;
                            x = x + 16 | 0;
                            A = s + 4 | 0;
                            u = s;
                            t[A >> 2] = e;
                            t[u >> 2] = i;
                            a = f + 24 | 0;
                            c = f + 120 | 0;
                            l = (r | 0) != 0;
                            e: do {
                                if (l) {
                                    e = 1;
                                    while (1) {
                                        if (!e) {
                                            o = 10;
                                            break e
                                        }
                                        if (!(zi(a, 1) | 0)) {
                                            o = 6;
                                            break e
                                        }
                                        e = df(A, u, f) | 0
                                    }
                                } else o = 6
                            } while (0);
                            do {
                                if ((o | 0) == 6) {
                                    if (zi(a, 1) | 0) {
                                        e = zi(a, 4) | 0;
                                        if ((e + -1 | 0) >>> 0 >= 11) {
                                            t[f >> 2] = 3;
                                            e = 0;
                                            o = 21;
                                            break
                                        }
                                    } else e = 0;
                                    u = t[A >> 2] | 0;
                                    if (yf(f, u, i, e, r) | 0) {
                                        if ((e | 0) > 0) {
                                            t[c >> 2] = 1 << e;
                                            if (!(mf(f + 124 | 0, e) | 0)) {
                                                t[f >> 2] = 1;
                                                e = 0;
                                                o = 21;
                                                break
                                            }
                                        } else t[c >> 2] = 0;
                                        pf(f, u, i);
                                        if (!l) {
                                            e = bo(u | 0, ((u | 0) < 0) << 31 >> 31 | 0, i | 0, ((i | 0) < 0) << 31 >> 31 | 0) | 0;
                                            e = Ii(e, y() | 0, 4) | 0;
                                            if (!e) {
                                                t[f >> 2] = 1;
                                                e = 0;
                                                o = 21;
                                                break
                                            }
                                            if (!(Ei(f, e, u, i, i, 0) | 0)) {
                                                o = 21;
                                                break
                                            }
                                            if (t[f + 48 >> 2] | 0) {
                                                o = 21;
                                                break
                                            }
                                        } else {
                                            t[f + 4 >> 2] = 1;
                                            e = 0
                                        }
                                        if (n | 0) t[n >> 2] = e;
                                        t[f + 112 >> 2] = 0;
                                        if (l) e = 1;
                                        else {
                                            fi(c);
                                            e = 1
                                        }
                                    } else o = 10
                                }
                            } while (0);
                            if ((o | 0) == 10) {
                                t[f >> 2] = 3;
                                e = 0;
                                o = 21
                            }
                            if ((o | 0) == 21) {
                                $e(e);
                                fi(c);
                                e = 0
                            }
                            x = s;
                            return e | 0
                        }

                        function vf(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0;
                            e: do {
                                if ((t[e >> 2] | 0) > 0) e = 0;
                                else {
                                    n = e + 48 | 0;
                                    i = t[e + 44 >> 2] | 0;
                                    e = 0;
                                    while (1) {
                                        if ((e | 0) >= (i | 0)) {
                                            e = 1;
                                            break e
                                        }
                                        r = t[n >> 2] | 0;
                                        if (f[t[r + (e * 548 | 0) + 4 >> 2] >> 0] | 0) {
                                            e = 0;
                                            break e
                                        }
                                        if (f[t[r + (e * 548 | 0) + 8 >> 2] >> 0] | 0) {
                                            e = 0;
                                            break e
                                        }
                                        if (!(f[t[r + (e * 548 | 0) + 12 >> 2] >> 0] | 0)) e = e + 1 | 0;
                                        else {
                                            e = 0;
                                            break
                                        }
                                    }
                                }
                            } while (0);
                            return e | 0
                        }

                        function Cf(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0;
                            r = t[e + 100 >> 2] | 0;
                            i = t[e + 104 >> 2] | 0;
                            r = bo(i | 0, ((i | 0) < 0) << 31 >> 31 | 0, r | 0, ((r | 0) < 0) << 31 >> 31 | 0) | 0;
                            i = y() | 0;
                            t[e + 20 >> 2] = 0;
                            i = Ii(r, i, 1) | 0;
                            t[e + 16 >> 2] = i;
                            if (!i) {
                                t[e >> 2] = 1;
                                e = 0
                            } else e = 1;
                            return e | 0
                        }

                        function If(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0;
                            n = t[e + 100 >> 2] | 0;
                            r = t[e + 104 >> 2] | 0;
                            n = bo(r | 0, ((r | 0) < 0) << 31 >> 31 | 0, n | 0, ((n | 0) < 0) << 31 >> 31 | 0) | 0;
                            r = y() | 0;
                            f = i & 65535;
                            i = Io(i | 0, ((i | 0) < 0) << 31 >> 31 | 0, 4) | 0;
                            i = ho(i | 0, y() | 0, f | 0, 0) | 0;
                            i = ho(i | 0, y() | 0, n | 0, r | 0) | 0;
                            i = Ii(i, y() | 0, 4) | 0;
                            t[e + 16 >> 2] = i;
                            if (!i) {
                                t[e >> 2] = 1;
                                r = 0;
                                i = 0
                            } else {
                                r = 1;
                                i = i + (n << 2) + (f << 2) | 0
                            }
                            t[e + 20 >> 2] = i;
                            return r | 0
                        }

                        function df(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            A = r + 24 | 0;
                            l = r + 176 | 0;
                            c = t[l >> 2] | 0;
                            s = r + 180 + (c * 20 | 0) | 0;
                            o = zi(A, 2) | 0;
                            n = r + 260 | 0;
                            u = t[n >> 2] | 0;
                            f = 1 << o;
                            e: do {
                                if (!(u & f)) {
                                    t[n >> 2] = u | f;
                                    t[s >> 2] = o;
                                    a = r + 180 + (c * 20 | 0) + 8 | 0;
                                    t[a >> 2] = t[e >> 2];
                                    f = r + 180 + (c * 20 | 0) + 12 | 0;
                                    t[f >> 2] = t[i >> 2];
                                    u = r + 180 + (c * 20 | 0) + 16 | 0;
                                    t[u >> 2] = 0;
                                    t[l >> 2] = (t[l >> 2] | 0) + 1;
                                    switch (o | 0) {
                                        case 1:
                                        case 0: {
                                            s = (zi(A, 3) | 0) + 2 | 0;
                                            t[r + 180 + (c * 20 | 0) + 4 >> 2] = s;
                                            f = gf(Pf(t[a >> 2] | 0, s) | 0, Pf(t[f >> 2] | 0, s) | 0, 0, r, u) | 0;
                                            break e
                                        }
                                        case 3:
                                            break;
                                        default: {
                                            f = 1;
                                            break e
                                        }
                                    }
                                    f = (zi(A, 8) | 0) + 1 | 0;
                                    if ((f | 0) > 16) n = 0;
                                    else n = (f | 0) > 4 ? 1 : (f | 0) > 2 ? 2 : 3;
                                    t[e >> 2] = Pf(t[a >> 2] | 0, n) | 0;
                                    t[r + 180 + (c * 20 | 0) + 4 >> 2] = n;
                                    if (gf(f, 1, 0, r, u) | 0) f = (Mf(f, s) | 0) != 0 & 1;
                                    else f = 0
                                } else f = 0
                            } while (0);
                            return f | 0
                        }

                        function yf(e, i, r, u, A) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            u = u | 0;
                            A = A | 0;
                            var l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0,
                                D = 0,
                                B = 0,
                                E = 0,
                                R = 0,
                                G = 0,
                                _ = 0,
                                F = 0,
                                S = 0,
                                Q = 0,
                                H = 0,
                                M = 0,
                                V = 0;
                            M = x;
                            x = x + 560 | 0;
                            Q = M + 548 | 0;
                            S = M;
                            l = e + 24 | 0;
                            t[Q >> 2] = 0;
                            h = n[3872 + (u << 1) >> 1] | 0;
                            w = h & 65535;
                            do {
                                if ((A | 0) != 0 ? (zi(l, 1) | 0) != 0 : 0) {
                                    A = (zi(l, 3) | 0) + 2 | 0;
                                    E = Pf(i, A) | 0;
                                    R = Pf(r, A) | 0;
                                    b = v(R, E) | 0;
                                    if (gf(E, R, 0, e, Q) | 0) {
                                        t[e + 152 >> 2] = A;
                                        l = t[Q >> 2] | 0;
                                        A = 0;
                                        k = 1;
                                        while (1) {
                                            if ((A | 0) >= (b | 0)) break;
                                            E = l + (A << 2) | 0;
                                            R = (t[E >> 2] | 0) >>> 8 & 65535;
                                            t[E >> 2] = R;
                                            A = A + 1 | 0;
                                            k = (R | 0) < (k | 0) ? k : R + 1 | 0
                                        }
                                        if ((k | 0) > 1e3 | (k | 0) > (v(r, i) | 0)) {
                                            A = Ii(k, ((k | 0) < 0) << 31 >> 31, 4) | 0;
                                            if (!A) {
                                                t[e >> 2] = 1;
                                                c = 0;
                                                r = 0;
                                                o = 0;
                                                i = 0;
                                                l = 0;
                                                A = 0;
                                                break
                                            }
                                            Po(A | 0, -1, k << 2 | 0) | 0;
                                            c = t[Q >> 2] | 0;
                                            l = 0;
                                            o = 0;
                                            while (1) {
                                                if ((o | 0) >= (b | 0)) break;
                                                s = c + (o << 2) | 0;
                                                i = A + (t[s >> 2] << 2) | 0;
                                                r = t[i >> 2] | 0;
                                                if ((r | 0) == -1) {
                                                    t[i >> 2] = l;
                                                    i = l + 1 | 0
                                                } else {
                                                    i = l;
                                                    l = r
                                                }
                                                t[s >> 2] = l;
                                                l = i;
                                                o = o + 1 | 0
                                            }
                                            i = Ii(h & 65535, 0, 4) | 0;
                                            if (!i) {
                                                t[e >> 2] = 1;
                                                c = 0;
                                                r = 0;
                                                o = 0;
                                                l = 0
                                            } else {
                                                E = A;
                                                R = k;
                                                B = l;
                                                H = 17
                                            }
                                        } else {
                                            i = 0;
                                            E = 0;
                                            R = k;
                                            B = k;
                                            A = 0;
                                            H = 17
                                        }
                                    } else {
                                        c = 0;
                                        r = 0;
                                        o = 0;
                                        i = 0;
                                        l = 0;
                                        A = 0
                                    }
                                } else {
                                    i = 0;
                                    E = 0;
                                    R = 1;
                                    B = 1;
                                    A = 0;
                                    H = 17
                                }
                            } while (0);
                            e: do {
                                if ((H | 0) == 17)
                                    if (!(t[e + 48 >> 2] | 0)) {
                                        D = (u | 0) > 0;
                                        P = 1 << u;
                                        l = 0;
                                        r = 0;
                                        while (1) {
                                            if ((l | 0) == 5) break;
                                            p = (D & (l | 0) == 0 ? P : 0) + (a[7772 + (l << 1) >> 1] | 0) | 0;
                                            l = l + 1 | 0;
                                            r = (r | 0) < (p | 0) ? p : r
                                        }
                                        l = Df(r, ((r | 0) < 0) << 31 >> 31, 4) | 0;
                                        r = v(B, w) | 0;
                                        r = Ii(r, ((r | 0) < 0) << 31 >> 31, 4) | 0;
                                        c = Bf(B) | 0;
                                        if ((r | 0) == 0 | ((l | 0) == 0 | (c | 0) == 0)) {
                                            t[e >> 2] = 1;
                                            o = 0;
                                            break
                                        }
                                        p = (E | 0) == 0;
                                        s = r;
                                        m = 0;
                                        while (1) {
                                            if ((m | 0) >= (R | 0)) break;
                                            if (!p) {
                                                o = t[E + (m << 2) >> 2] | 0;
                                                if ((o | 0) == -1) {
                                                    I = 1;
                                                    d = S;
                                                    o = i;
                                                    y = S
                                                } else H = 27
                                            } else {
                                                o = m;
                                                H = 27
                                            }
                                            if ((H | 0) == 27) {
                                                H = 0;
                                                y = c + (o * 548 | 0) | 0;
                                                I = 0;
                                                d = y;
                                                o = s
                                            }
                                            b = 0;
                                            k = 1;
                                            w = 0;
                                            C = 0;
                                            while (1) {
                                                if (C >>> 0 >= 5) break;
                                                u = a[7772 + (C << 1) >> 1] | 0;
                                                t[y + (C << 2) >> 2] = o;
                                                u = (D & (C | 0) == 0 ? P : 0) + u | 0;
                                                h = Ef(u, e, l, o) | 0;
                                                if (!h) {
                                                    o = 0;
                                                    break e
                                                }
                                                V = f[o >> 0] | 0;
                                                g = (k | 0) == 0 | (C | 4 | 0) == 4 ? k : V << 24 >> 24 == 0 & 1;
                                                w = w + (V & 255) | 0;
                                                o = o + (h << 2) | 0;
                                                if (C >>> 0 < 4) {
                                                    h = 1;
                                                    k = t[l >> 2] | 0;
                                                    while (1) {
                                                        if ((h | 0) >= (u | 0)) break;
                                                        V = t[l + (h << 2) >> 2] | 0;
                                                        h = h + 1 | 0;
                                                        k = (V | 0) > (k | 0) ? V : k
                                                    }
                                                    b = k + b | 0
                                                }
                                                k = g;
                                                C = C + 1 | 0
                                            }
                                            s = I ? s : o;
                                            t[y + 20 >> 2] = k;
                                            o = y + 28 | 0;
                                            t[o >> 2] = 0;
                                            if (((k | 0) != 0 ? (G = (a[(t[y + 4 >> 2] | 0) + 2 >> 1] | 0) << 16 | (a[(t[y + 8 >> 2] | 0) + 2 >> 1] | 0) | (a[(t[y + 12 >> 2] | 0) + 2 >> 1] | 0) << 24, _ = y + 24 | 0, t[_ >> 2] = G, (w | 0) == 0) : 0) ? (F = n[(t[d >> 2] | 0) + 2 >> 1] | 0, (F & 65535) < 256) : 0) {
                                                t[o >> 2] = 1;
                                                t[_ >> 2] = (F & 65535) << 8 | G;
                                                t[y + 32 >> 2] = 0
                                            } else H = 41;
                                            if ((H | 0) == 41 ? (H = 0, V = (b | 0) < 6, t[y + 32 >> 2] = V & 1, V) : 0) Rf(y);
                                            m = m + 1 | 0
                                        }
                                        t[e + 160 >> 2] = t[Q >> 2];
                                        t[e + 164 >> 2] = B;
                                        t[e + 168 >> 2] = c;
                                        t[e + 172 >> 2] = r;
                                        o = 1
                                    } else {
                                        c = 0;
                                        r = 0;
                                        o = 0;
                                        l = 0
                                    }
                            } while (0);
                            $e(l);
                            $e(i);
                            $e(A);
                            if (!o) {
                                $e(t[Q >> 2] | 0);
                                $e(r);
                                ti(c)
                            }
                            x = M;
                            return o | 0
                        }

                        function mf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            r = 1 << i;
                            r = Df(r, ((r | 0) < 0) << 31 >> 31, 4) | 0;
                            t[e >> 2] = r;
                            if (!r) e = 0;
                            else {
                                t[e + 4 >> 2] = 32 - i;
                                t[e + 8 >> 2] = i;
                                e = 1
                            }
                            return e | 0
                        }

                        function pf(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0;
                            f = t[e + 152 >> 2] | 0;
                            t[e + 100 >> 2] = i;
                            t[e + 104 >> 2] = r;
                            t[e + 156 >> 2] = Pf(i, f) | 0;
                            t[e + 148 >> 2] = (f | 0) == 0 ? -1 : (1 << f) + -1 | 0;
                            return
                        }

                        function Pf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return (e + -1 + (1 << i) | 0) >>> i | 0
                        }

                        function Df(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            if (!(mi(e, i, r) | 0)) e = 0;
                            else e = to(e, r) | 0;
                            return e | 0
                        }

                        function Bf(e) {
                            e = e | 0;
                            return Ii(e, ((e | 0) < 0) << 31 >> 31, 548) | 0
                        }

                        function Ef(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            s = x;
                            x = x + 80 | 0;
                            l = s;
                            o = i + 24 | 0;
                            A = zi(o, 1) | 0;
                            Po(r | 0, 0, e << 2 | 0) | 0;
                            do {
                                if (!A) {
                                    a = l;
                                    A = a + 76 | 0;
                                    do {
                                        t[a >> 2] = 0;
                                        a = a + 4 | 0
                                    } while ((a | 0) < (A | 0));
                                    A = (zi(o, 4) | 0) + 4 | 0;
                                    if ((A | 0) > 19) {
                                        t[i >> 2] = 3;
                                        n = 0;
                                        break
                                    }
                                    a = 0;
                                    while (1) {
                                        if ((a | 0) >= (A | 0)) break;
                                        c = zi(o, 3) | 0;
                                        t[l + ((u[3904 + a >> 0] | 0) << 2) >> 2] = c;
                                        a = a + 1 | 0
                                    }
                                    if (!(_f(i, l, e, r) | 0)) c = 12;
                                    else c = 10
                                } else {
                                    c = zi(o, 1) | 0;
                                    l = (zi(o, 1) | 0) == 0;
                                    t[r + ((zi(o, l ? 1 : 8) | 0) << 2) >> 2] = 1;
                                    if ((c | 0) == 1) {
                                        t[r + ((zi(o, 8) | 0) << 2) >> 2] = 1;
                                        c = 10
                                    } else c = 10
                                }
                            } while (0);
                            if ((c | 0) == 10)
                                if (!((t[i + 48 >> 2] | 0) == 0 ? (n = Ff(f, 8, r, e) | 0, (n | 0) != 0) : 0)) c = 12;
                            if ((c | 0) == 12) {
                                t[i >> 2] = 3;
                                n = 0
                            }
                            x = s;
                            return n | 0
                        }

                        function Rf(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                u = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            b = x;
                            x = x + 16 | 0;
                            r = b + 4 | 0;
                            f = b;
                            u = e + 4 | 0;
                            A = e + 8 | 0;
                            l = e + 12 | 0;
                            i = 0;
                            while (1) {
                                if ((i | 0) == 64) break;
                                o = e + 36 + (i << 3) | 0;
                                c = (t[e >> 2] | 0) + (i << 2) | 0;
                                c = a[c >> 1] | a[c + 2 >> 1] << 16;
                                t[f >> 2] = c;
                                s = c >>> 16;
                                if ((s & 65535) > 255) {
                                    t[o >> 2] = c & 255 | 256;
                                    t[e + 36 + (i << 3) + 4 >> 2] = s
                                } else {
                                    t[o >> 2] = 0;
                                    t[e + 36 + (i << 3) + 4 >> 2] = 0;
                                    n[r >> 1] = n[f >> 1] | 0;
                                    n[r + 2 >> 1] = n[f + 2 >> 1] | 0;
                                    s = i >>> (Gf(r, 8, o) | 0);
                                    c = (t[u >> 2] | 0) + (s << 2) | 0;
                                    n[r >> 1] = n[c >> 1] | 0;
                                    n[r + 2 >> 1] = n[c + 2 >> 1] | 0;
                                    s = s >>> (Gf(r, 16, o) | 0);
                                    c = (t[A >> 2] | 0) + (s << 2) | 0;
                                    n[r >> 1] = n[c >> 1] | 0;
                                    n[r + 2 >> 1] = n[c + 2 >> 1] | 0;
                                    s = s >>> (Gf(r, 0, o) | 0);
                                    s = (t[l >> 2] | 0) + (s << 2) | 0;
                                    n[r >> 1] = n[s >> 1] | 0;
                                    n[r + 2 >> 1] = n[s + 2 >> 1] | 0;
                                    Gf(r, 24, o) | 0
                                }
                                i = i + 1 | 0
                            }
                            x = b;
                            return
                        }

                        function Gf(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0;
                            f = u[e >> 0] | 0;
                            t[r >> 2] = (t[r >> 2] | 0) + f;
                            r = r + 4 | 0;
                            t[r >> 2] = (a[e + 2 >> 1] | 0) << i | t[r >> 2];
                            return f | 0
                        }

                        function _f(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0;
                            w = x;
                            x = x + 512 | 0;
                            b = w;
                            h = e + 24 | 0;
                            e: do {
                                if (!(Ff(b, 7, i, 19) | 0)) k = 15;
                                else {
                                    if (zi(h, 1) | 0) {
                                        i = (zi(h, ((zi(h, 3) | 0) << 1) + 2 | 0) | 0) + 2 | 0;
                                        if ((i | 0) > (r | 0)) {
                                            k = 15;
                                            break
                                        }
                                    } else i = r;
                                    s = e + 44 | 0;
                                    a = 0;
                                    c = 8;
                                    while (1) {
                                        l = a;
                                        while (1) {
                                            if ((l | 0) >= (r | 0)) {
                                                i = 1;
                                                break e
                                            }
                                            o = i + -1 | 0;
                                            if (!i) {
                                                i = 1;
                                                break e
                                            }
                                            _i(h);
                                            A = (Sr(h) | 0) & 127;
                                            xr(h, (t[s >> 2] | 0) + (u[b + (A << 2) >> 0] | 0) | 0);
                                            A = n[b + (A << 2) + 2 >> 1] | 0;
                                            i = A & 65535;
                                            if ((A & 65535) < 16) break;
                                            i = i + -16 | 0;
                                            a = u[7785 + i >> 0] | 0;
                                            a = (zi(h, u[7782 + i >> 0] | 0) | 0) + a | 0;
                                            if ((a + l | 0) > (r | 0)) {
                                                k = 15;
                                                break e
                                            }
                                            A = A << 16 >> 16 == 16 ? c : 0;
                                            i = l;
                                            while (1) {
                                                if ((a | 0) <= 0) break;
                                                t[f + (i << 2) >> 2] = A;
                                                a = a + -1 | 0;
                                                i = i + 1 | 0
                                            }
                                            l = i;
                                            i = o
                                        }
                                        t[f + (l << 2) >> 2] = i;
                                        a = l + 1 | 0;
                                        c = A << 16 >> 16 == 0 ? c : i;
                                        i = o
                                    }
                                }
                            } while (0);
                            if ((k | 0) == 15) {
                                t[e >> 2] = 3;
                                i = 0
                            }
                            x = w;
                            return i | 0
                        }

                        function Ff(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                t = 0;
                            t = x;
                            x = x + 1024 | 0;
                            if ((f | 0) >= 513) {
                                n = Ii(f, ((f | 0) < 0) << 31 >> 31, 2) | 0;
                                if (!n) e = 0;
                                else {
                                    e = Sf(e, i, r, f, n) | 0;
                                    $e(n)
                                }
                            } else e = Sf(e, i, r, f, t) | 0;
                            x = t;
                            return e | 0
                        }

                        function Sf(e, i, r, u, a) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            u = u | 0;
                            a = a | 0;
                            var A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0,
                                D = 0,
                                B = 0,
                                E = 0;
                            D = x;
                            x = x + 144 | 0;
                            m = D + 132 | 0;
                            p = D + 64 | 0;
                            s = D;
                            P = D + 128 | 0;
                            A = 1 << i;
                            l = p;
                            o = l + 64 | 0;
                            do {
                                t[l >> 2] = 0;
                                l = l + 4 | 0
                            } while ((l | 0) < (o | 0));
                            l = 0;
                            while (1) {
                                if ((l | 0) >= (u | 0)) {
                                    c = 5;
                                    break
                                }
                                o = t[r + (l << 2) >> 2] | 0;
                                if ((o | 0) > 15) {
                                    A = 0;
                                    break
                                }
                                y = p + (o << 2) | 0;
                                t[y >> 2] = (t[y >> 2] | 0) + 1;
                                l = l + 1 | 0
                            }
                            e: do {
                                if ((c | 0) == 5)
                                    if ((t[p >> 2] | 0) == (u | 0)) A = 0;
                                    else {
                                        l = 0;
                                        o = 1;
                                        while (1) {
                                            t[s + (o << 2) >> 2] = l;
                                            if (o >>> 0 >= 15) break;
                                            c = t[p + (o << 2) >> 2] | 0;
                                            if ((c | 0) > (1 << o | 0)) {
                                                A = 0;
                                                break e
                                            }
                                            l = l + c | 0;
                                            o = o + 1 | 0
                                        }
                                        l = 0;
                                        while (1) {
                                            if ((l | 0) >= (u | 0)) break;
                                            o = t[r + (l << 2) >> 2] | 0;
                                            if ((o | 0) > 0) {
                                                d = s + (o << 2) | 0;
                                                y = t[d >> 2] | 0;
                                                t[d >> 2] = y + 1;
                                                n[a + (y << 1) >> 1] = l
                                            }
                                            l = l + 1 | 0
                                        }
                                        d = s + 60 | 0;
                                        if ((t[d >> 2] | 0) == 1) {
                                            f[P >> 0] = 0;
                                            n[P + 2 >> 1] = n[a >> 1] | 0;
                                            n[m >> 1] = n[P >> 1] | 0;
                                            n[m + 2 >> 1] = n[P + 2 >> 1] | 0;
                                            xf(e, 1, A, m);
                                            break
                                        }
                                        y = A + -1 | 0;
                                        w = P + 2 | 0;
                                        c = 1;
                                        b = 1;
                                        u = 0;
                                        h = 2;
                                        k = 1;
                                        s = 0;
                                        while (1) {
                                            if ((k | 0) > (i | 0)) break;
                                            c = c << 1;
                                            b = c + b | 0;
                                            o = p + (k << 2) | 0;
                                            l = t[o >> 2] | 0;
                                            c = c - l | 0;
                                            if ((c | 0) < 0) {
                                                A = 0;
                                                break e
                                            }
                                            r = k & 255;
                                            while (1) {
                                                if ((l | 0) <= 0) break;
                                                f[P >> 0] = r;
                                                n[w >> 1] = n[a + (s << 1) >> 1] | 0;
                                                n[m >> 1] = n[P >> 1] | 0;
                                                n[m + 2 >> 1] = n[P + 2 >> 1] | 0;
                                                xf(e + (u << 2) | 0, h, A, m);
                                                C = Qf(u, k) | 0;
                                                I = l + -1 | 0;
                                                t[o >> 2] = I;
                                                u = C;
                                                s = s + 1 | 0;
                                                l = I
                                            }
                                            h = h << 1;
                                            k = k + 1 | 0
                                        }
                                        C = P + 2 | 0;
                                        I = e;
                                        r = A;
                                        h = -1;
                                        l = e;
                                        o = A;
                                        v = 2;
                                        A = i;
                                        while (1) {
                                            g = A + 1 | 0;
                                            if ((A | 0) >= 15) break;
                                            c = c << 1;
                                            b = c + b | 0;
                                            k = p + (g << 2) | 0;
                                            A = t[k >> 2] | 0;
                                            c = c - A | 0;
                                            if ((c | 0) < 0) {
                                                A = 0;
                                                break e
                                            }
                                            w = g - i & 255;
                                            while (1) {
                                                if ((A | 0) <= 0) break;
                                                A = u & y;
                                                if ((A | 0) == (h | 0)) A = h;
                                                else {
                                                    l = l + (r << 2) | 0;
                                                    r = Hf(p, g, i) | 0;
                                                    h = 1 << r;
                                                    f[e + (A << 2) >> 0] = r + i;
                                                    n[e + (A << 2) + 2 >> 1] = ((l - I | 0) >>> 2) - A;
                                                    r = h;
                                                    o = h + o | 0
                                                }
                                                f[P >> 0] = w;
                                                n[C >> 1] = n[a + (s << 1) >> 1] | 0;
                                                n[m >> 1] = n[P >> 1] | 0;
                                                n[m + 2 >> 1] = n[P + 2 >> 1] | 0;
                                                xf(l + (u >>> i << 2) | 0, v, r, m);
                                                E = Qf(u, g) | 0;
                                                B = (t[k >> 2] | 0) + -1 | 0;
                                                t[k >> 2] = B;
                                                h = A;
                                                u = E;
                                                s = s + 1 | 0;
                                                A = B
                                            }
                                            v = v << 1;
                                            A = g
                                        }
                                        A = (b | 0) == ((t[d >> 2] << 1) + -1 | 0) ? o : 0
                                    }
                            } while (0);
                            x = D;
                            return A | 0
                        }

                        function xf(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var t = 0;
                            f = a[f >> 1] | a[f + 2 >> 1] << 16;
                            do {
                                r = r - i | 0;
                                t = e + (r << 2) | 0;
                                n[t >> 1] = f;
                                n[t + 2 >> 1] = f >>> 16
                            } while ((r | 0) > 0);
                            return
                        }

                        function Qf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            i = 1 << i + -1;
                            while (1)
                                if (!(i & e)) break;
                                else i = i >>> 1;
                            return ((i | 0) == 0 ? e : (i + -1 & e) + i | 0) | 0
                        }

                        function Hf(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0;
                            f = 1 << i - r;
                            while (1) {
                                if ((i | 0) >= 15) break;
                                f = f - (t[e + (i << 2) >> 2] | 0) | 0;
                                if ((f | 0) < 1) break;
                                f = f << 1;
                                i = i + 1 | 0
                            }
                            return i - r | 0
                        }

                        function Mf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                n = 0,
                                a = 0,
                                A = 0;
                            n = 1 << (8 >>> (t[i + 4 >> 2] | 0));
                            A = Ii(n, ((n | 0) < 0) << 31 >> 31, 4) | 0;
                            if (!A) i = 0;
                            else {
                                a = i + 16 | 0;
                                r = t[a >> 2] | 0;
                                t[A >> 2] = t[r >> 2];
                                e = e << 2;
                                i = 4;
                                while (1) {
                                    if ((i | 0) >= (e | 0)) break;
                                    f[A + i >> 0] = (u[A + (i + -4) >> 0] | 0) + (u[r + i >> 0] | 0);
                                    i = i + 1 | 0
                                }
                                e = n << 2;
                                while (1) {
                                    if ((i | 0) >= (e | 0)) break;
                                    f[A + i >> 0] = 0;
                                    i = i + 1 | 0
                                }
                                $e(t[a >> 2] | 0);
                                t[a >> 2] = A;
                                i = 1
                            }
                            return i | 0
                        }

                        function Vf() {
                            var e = 0;
                            if (!(ao(9024) | 0)) {
                                if (!(t[1929] | 0)) e = 0;
                                else {
                                    Yf();
                                    e = t[2248] | 0
                                }
                                t[1929] = e;
                                Ao(9024) | 0
                            }
                            return
                        }

                        function Yf() {
                            t[2152] = 3;
                            t[2153] = 4;
                            t[2154] = 5;
                            t[2155] = 6;
                            t[2156] = 7;
                            t[2157] = 8;
                            t[2158] = 9;
                            t[2159] = 10;
                            t[2160] = 11;
                            t[2161] = 12;
                            t[2162] = 13;
                            t[2163] = 14;
                            t[2164] = 15;
                            t[2165] = 16;
                            t[2166] = 3;
                            t[2167] = 3;
                            t[2184] = 3;
                            t[2185] = 4;
                            t[2186] = 5;
                            t[2187] = 6;
                            t[2188] = 7;
                            t[2189] = 8;
                            t[2190] = 9;
                            t[2191] = 10;
                            t[2192] = 11;
                            t[2193] = 12;
                            t[2194] = 13;
                            t[2195] = 14;
                            t[2196] = 15;
                            t[2197] = 16;
                            t[2198] = 3;
                            t[2199] = 3;
                            t[2136] = 1;
                            t[2137] = 2;
                            t[2138] = 3;
                            t[2139] = 4;
                            t[2140] = 5;
                            t[2141] = 6;
                            t[2142] = 7;
                            t[2143] = 8;
                            t[2144] = 9;
                            t[2145] = 10;
                            t[2146] = 11;
                            t[2147] = 12;
                            t[2148] = 13;
                            t[2149] = 14;
                            t[2150] = 1;
                            t[2151] = 1;
                            t[2168] = 1;
                            t[2169] = 2;
                            t[2170] = 3;
                            t[2171] = 4;
                            t[2172] = 5;
                            t[2173] = 6;
                            t[2174] = 7;
                            t[2175] = 8;
                            t[2176] = 9;
                            t[2177] = 10;
                            t[2178] = 11;
                            t[2179] = 12;
                            t[2180] = 13;
                            t[2181] = 14;
                            t[2182] = 1;
                            t[2183] = 1;
                            return
                        }

                        function Uf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return -16777216
                        }

                        function Zf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return e | 0
                        }

                        function Wf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return t[i + 4 >> 2] | 0
                        }

                        function Tf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return t[i + -4 >> 2] | 0
                        }

                        function Lf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return Gn(e, t[i >> 2] | 0, t[i + 4 >> 2] | 0) | 0
                        }

                        function zf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return yn(e, t[i + -4 >> 2] | 0) | 0
                        }

                        function Jf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return yn(e, t[i >> 2] | 0) | 0
                        }

                        function Of(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return yn(t[i + -4 >> 2] | 0, t[i >> 2] | 0) | 0
                        }

                        function qf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return yn(t[i >> 2] | 0, t[i + 4 >> 2] | 0) | 0
                        }

                        function Kf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return Rn(e, t[i + -4 >> 2] | 0, t[i >> 2] | 0, t[i + 4 >> 2] | 0) | 0
                        }

                        function Xf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return Bn(t[i >> 2] | 0, e, t[i + -4 >> 2] | 0) | 0
                        }

                        function jf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return Pn(e, t[i >> 2] | 0, t[i + -4 >> 2] | 0) | 0
                        }

                        function Nf(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return dn(e, t[i >> 2] | 0, t[i + -4 >> 2] | 0) | 0
                        }

                        function $f(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = Wf(t[f + (n + -1 << 2) >> 2] | 0, i + (n << 2) | 0) | 0;
                                t[f + (n << 2) >> 2] = Fr(t[e + (n << 2) >> 2] | 0, u) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function en(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = Tf(t[f + (n + -1 << 2) >> 2] | 0, i + (n << 2) | 0) | 0;
                                t[f + (n << 2) >> 2] = Fr(t[e + (n << 2) >> 2] | 0, u) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function rn(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = Lf(t[f + (n + -1 << 2) >> 2] | 0, i + (n << 2) | 0) | 0;
                                t[f + (n << 2) >> 2] = Fr(t[e + (n << 2) >> 2] | 0, u) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function fn(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = zf(t[f + (n + -1 << 2) >> 2] | 0, i + (n << 2) | 0) | 0;
                                t[f + (n << 2) >> 2] = Fr(t[e + (n << 2) >> 2] | 0, u) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function nn(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = Jf(t[f + (n + -1 << 2) >> 2] | 0, i + (n << 2) | 0) | 0;
                                t[f + (n << 2) >> 2] = Fr(t[e + (n << 2) >> 2] | 0, u) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function tn(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = Of(t[f + (n + -1 << 2) >> 2] | 0, i + (n << 2) | 0) | 0;
                                t[f + (n << 2) >> 2] = Fr(t[e + (n << 2) >> 2] | 0, u) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function un(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = qf(t[f + (n + -1 << 2) >> 2] | 0, i + (n << 2) | 0) | 0;
                                t[f + (n << 2) >> 2] = Fr(t[e + (n << 2) >> 2] | 0, u) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function an(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = Kf(t[f + (n + -1 << 2) >> 2] | 0, i + (n << 2) | 0) | 0;
                                t[f + (n << 2) >> 2] = Fr(t[e + (n << 2) >> 2] | 0, u) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function An(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = Xf(t[f + (n + -1 << 2) >> 2] | 0, i + (n << 2) | 0) | 0;
                                t[f + (n << 2) >> 2] = Fr(t[e + (n << 2) >> 2] | 0, u) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function ln(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = jf(t[f + (n + -1 << 2) >> 2] | 0, i + (n << 2) | 0) | 0;
                                t[f + (n << 2) >> 2] = Fr(t[e + (n << 2) >> 2] | 0, u) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function on(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = Nf(t[f + (n + -1 << 2) >> 2] | 0, i + (n << 2) | 0) | 0;
                                t[f + (n << 2) >> 2] = Fr(t[e + (n << 2) >> 2] | 0, u) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function cn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0;
                            f = 0;
                            while (1) {
                                if ((f | 0) >= (i | 0)) break;
                                n = t[e + (f << 2) >> 2] | 0;
                                u = n >>> 8 & 255;
                                t[r + (f << 2) >> 2] = (u << 16 | u) + (n & 16711935) & 16711935 | n & -16711936;
                                f = f + 1 | 0
                            }
                            return
                        }

                        function sn(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0;
                            a = e + 1 | 0;
                            A = e + 2 | 0;
                            u = 0;
                            while (1) {
                                if ((u | 0) >= (r | 0)) break;
                                c = t[i + (u << 2) >> 2] | 0;
                                o = c >>> 8 & 255;
                                l = (In(f[e >> 0] | 0, o) | 0) + (c >>> 16) | 0;
                                o = (In(f[a >> 0] | 0, o) | 0) + c | 0;
                                t[n + (u << 2) >> 2] = l << 16 & 16711680 | c & -16711936 | o + (In(f[A >> 0] | 0, l & 255) | 0) & 255;
                                u = u + 1 | 0
                            }
                            return
                        }

                        function bn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0;
                            n = e + (i << 2) | 0;
                            i = e;
                            while (1) {
                                if (i >>> 0 >= n >>> 0) break;
                                e = t[i >> 2] | 0;
                                f[r >> 0] = e >>> 16;
                                f[r + 1 >> 0] = e >>> 8;
                                f[r + 2 >> 0] = e;
                                f[r + 3 >> 0] = e >>> 24;
                                i = i + 4 | 0;
                                r = r + 4 | 0
                            }
                            return
                        }

                        function hn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0;
                            n = e + (i << 2) | 0;
                            i = e;
                            while (1) {
                                if (i >>> 0 >= n >>> 0) break;
                                e = t[i >> 2] | 0;
                                f[r >> 0] = e >>> 16;
                                f[r + 1 >> 0] = e >>> 8;
                                f[r + 2 >> 0] = e;
                                i = i + 4 | 0;
                                r = r + 3 | 0
                            }
                            return
                        }

                        function kn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0;
                            n = e + (i << 2) | 0;
                            i = e;
                            while (1) {
                                if (i >>> 0 >= n >>> 0) break;
                                e = t[i >> 2] | 0;
                                f[r >> 0] = e;
                                f[r + 1 >> 0] = e >>> 8;
                                f[r + 2 >> 0] = e >>> 16;
                                i = i + 4 | 0;
                                r = r + 3 | 0
                            }
                            return
                        }

                        function wn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0;
                            n = e + (i << 2) | 0;
                            i = e;
                            while (1) {
                                if (i >>> 0 >= n >>> 0) break;
                                e = t[i >> 2] | 0;
                                f[r >> 0] = e >>> 16 & 240 | e >>> 12 & 15;
                                f[r + 1 >> 0] = e & 240 | e >>> 28;
                                i = i + 4 | 0;
                                r = r + 2 | 0
                            }
                            return
                        }

                        function gn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0;
                            n = e + (i << 2) | 0;
                            i = e;
                            while (1) {
                                if (i >>> 0 >= n >>> 0) break;
                                e = t[i >> 2] | 0;
                                f[r >> 0] = e >>> 16 & 248 | e >>> 13 & 7;
                                f[r + 1 >> 0] = e >>> 5 & 224 | e >>> 3 & 31;
                                i = i + 4 | 0;
                                r = r + 2 | 0
                            }
                            return
                        }

                        function vn(e, i, r, f, n, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            u = u | 0;
                            var a = 0;
                            while (1) {
                                if ((f | 0) >= (n | 0)) break;
                                a = 0;
                                while (1) {
                                    if ((a | 0) >= (u | 0)) break;
                                    t[r >> 2] = Dr(t[i + ((Pr(t[e >> 2] | 0) | 0) << 2) >> 2] | 0) | 0;
                                    a = a + 1 | 0;
                                    e = e + 4 | 0;
                                    r = r + 4 | 0
                                }
                                f = f + 1 | 0
                            }
                            return
                        }

                        function Cn(e, i, r, n, u, a) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            u = u | 0;
                            a = a | 0;
                            var A = 0;
                            while (1) {
                                if ((n | 0) >= (u | 0)) break;
                                A = 0;
                                while (1) {
                                    if ((A | 0) >= (a | 0)) break;
                                    f[r >> 0] = Lr(t[i + (((Tr(f[e >> 0] | 0) | 0) & 255) << 2) >> 2] | 0) | 0;
                                    A = A + 1 | 0;
                                    e = e + 1 | 0;
                                    r = r + 1 | 0
                                }
                                n = n + 1 | 0
                            }
                            return
                        }

                        function In(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return (v(i << 24 >> 24, e << 24 >> 24) | 0) >> 5 | 0
                        }

                        function dn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0;
                            i = yn(e, i) | 0;
                            f = mn(i >>> 24, r >>> 24) | 0;
                            n = mn(i >>> 16 & 255, r >>> 16 & 255) | 0;
                            e = mn(i >>> 8 & 255, r >>> 8 & 255) | 0;
                            return n << 16 | f << 24 | e << 8 | (mn(i & 255, r & 255) | 0) | 0
                        }

                        function yn(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return ((i ^ e) >>> 1 & 2139062143) + (i & e) | 0
                        }

                        function mn(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return pn(((e - i | 0) / 2 | 0) + e | 0) | 0
                        }

                        function pn(e) {
                            e = e | 0;
                            return (e >>> 0 < 256 ? e : e >>> 24 ^ 255) | 0
                        }

                        function Pn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                t = 0;
                            n = Dn(e >>> 24, i >>> 24, r >>> 24) | 0;
                            t = Dn(e >>> 16 & 255, i >>> 16 & 255, r >>> 16 & 255) | 0;
                            f = Dn(e >>> 8 & 255, i >>> 8 & 255, r >>> 8 & 255) | 0;
                            return t << 16 | n << 24 | f << 8 | (Dn(e & 255, i & 255, r & 255) | 0) | 0
                        }

                        function Dn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            return pn(i + e - r | 0) | 0
                        }

                        function Bn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0;
                            f = En(e >>> 24, i >>> 24, r >>> 24) | 0;
                            f = (En(e >>> 16 & 255, i >>> 16 & 255, r >>> 16 & 255) | 0) + f | 0;
                            f = f + (En(e >>> 8 & 255, i >>> 8 & 255, r >>> 8 & 255) | 0) | 0;
                            r = (f + (En(e & 255, i & 255, r & 255) | 0) | 0) < 1;
                            return (r ? e : i) | 0
                        }

                        function En(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            i = i - r | 0;
                            r = e - r | 0;
                            return ((i | 0) > -1 ? i : 0 - i | 0) - ((r | 0) > -1 ? r : 0 - r | 0) | 0
                        }

                        function Rn(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            i = yn(e, i) | 0;
                            return yn(i, yn(r, f) | 0) | 0
                        }

                        function Gn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            return yn(yn(e, r) | 0, i) | 0
                        }

                        function _n(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            f = t[e + 40 >> 2] | 0;
                            if ((t[e + 12 >> 2] | 0) < 1 ? 1 : (t[e + 16 >> 2] | 0) < 1) e = 0;
                            else {
                                i = No[t[f + 44 >> 2] & 31](e, f) | 0;
                                r = t[f + 48 >> 2] | 0;
                                if (r | 0) $o[r & 7](e, f, i) | 0;
                                e = f + 16 | 0;
                                t[e >> 2] = (t[e >> 2] | 0) + i;
                                e = 1
                            }
                            return e | 0
                        }

                        function Fn(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            n = t[e + 40 >> 2] | 0;
                            a = t[t[n >> 2] >> 2] | 0;
                            i = xn(a) | 0;
                            f = Qn(a) | 0;
                            A = n + 40 | 0;
                            l = n + 44 | 0;
                            o = n + 48 | 0;
                            t[A >> 2] = 0;
                            t[A + 4 >> 2] = 0;
                            t[A + 8 >> 2] = 0;
                            t[A + 12 >> 2] = 0;
                            f = (f | 0) != 0;
                            do {
                                if (!(Hn(t[n + 20 >> 2] | 0, e, f ? 11 : 12) | 0)) i = 0;
                                else {
                                    if (f ? Mn(a) | 0 : 0) Vn();
                                    if (!(t[e + 92 >> 2] | 0)) {
                                        u = (i | 0) != 0;
                                        if (u) {
                                            Zn();
                                            t[l >> 2] = 17;
                                            if (t[e + 56 >> 2] | 0) {
                                                i = e + 12 | 0;
                                                r = t[i >> 2] | 0;
                                                e = r + 1 | 0;
                                                r = Ii(1, 0, (e & -2) + r | 0) | 0;
                                                t[A >> 2] = r;
                                                if (!r) {
                                                    i = 0;
                                                    break
                                                }
                                                t[n + 4 >> 2] = r;
                                                A = r + (t[i >> 2] | 0) | 0;
                                                t[n + 8 >> 2] = A;
                                                t[n + 12 >> 2] = A + (e >> 1);
                                                t[l >> 2] = 18;
                                                Vn()
                                            }
                                        } else t[l >> 2] = 19;
                                        if (f) {
                                            switch (a | 0) {
                                                case 5:
                                                case 10: {
                                                    i = 3;
                                                    break
                                                }
                                                default:
                                                    i = u ? 1 : 2
                                            }
                                            t[o >> 2] = i;
                                            if (u) Pi()
                                        }
                                    } else {
                                        if (!i) i = Un(e, n) | 0;
                                        else i = Yn(e, n) | 0;
                                        if (!i) {
                                            i = 0;
                                            break
                                        }
                                    }
                                    i = 1
                                }
                            } while (0);
                            return i | 0
                        }

                        function Sn(e) {
                            e = e | 0;
                            e = (t[e + 40 >> 2] | 0) + 40 | 0;
                            $e(t[e >> 2] | 0);
                            t[e >> 2] = 0;
                            return
                        }

                        function xn(e) {
                            e = e | 0;
                            return e >>> 0 < 11 | 0
                        }

                        function Qn(e) {
                            e = e | 0;
                            switch (e | 0) {
                                case 1:
                                case 3:
                                case 4:
                                case 5:
                                case 12: {
                                    e = 1;
                                    break
                                }
                                default:
                                    e = (Mn(e) | 0) != 0 & 1
                            }
                            return e | 0
                        }

                        function Hn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0;
                            b = x;
                            x = x + 16 | 0;
                            A = b + 4 | 0;
                            l = b;
                            c = t[i >> 2] | 0;
                            s = t[i + 4 >> 2] | 0;
                            a = (e | 0) != 0;
                            if (a) {
                                u = (t[e + 8 >> 2] | 0) > 0;
                                t[i + 72 >> 2] = u & 1;
                                if (u) {
                                    u = t[e + 20 >> 2] | 0;
                                    n = t[e + 24 >> 2] | 0;
                                    k = t[e + 12 >> 2] | 0;
                                    f = t[e + 16 >> 2] | 0;
                                    h = (cu(r) | 0) == 0;
                                    r = h ? k & -2 : k;
                                    f = h ? f & -2 : f;
                                    if ((f + n | 0) > (s | 0) | ((r + u | 0) > (c | 0) | ((n | 0) < 1 | ((u | 0) < 1 | (r | f | 0) < 0)))) r = 0;
                                    else o = 5
                                } else {
                                    n = s;
                                    u = c;
                                    f = 0;
                                    r = 0;
                                    o = 5
                                }
                            } else {
                                t[i + 72 >> 2] = 0;
                                n = s;
                                u = c;
                                f = 0;
                                r = 0;
                                o = 5
                            }
                            e: do {
                                if ((o | 0) == 5) {
                                    t[i + 76 >> 2] = r;
                                    t[i + 84 >> 2] = f;
                                    t[i + 80 >> 2] = u + r;
                                    t[i + 88 >> 2] = n + f;
                                    t[i + 12 >> 2] = u;
                                    t[i + 16 >> 2] = n;
                                    if (!a) {
                                        t[i + 92 >> 2] = 0;
                                        t[i + 68 >> 2] = 0;
                                        t[i + 56 >> 2] = 1;
                                        r = 1;
                                        break
                                    }
                                    k = (t[e + 28 >> 2] | 0) > 0;
                                    r = i + 92 | 0;
                                    t[r >> 2] = k & 1;
                                    do {
                                        if (k) {
                                            t[A >> 2] = t[e + 32 >> 2];
                                            t[l >> 2] = t[e + 36 >> 2];
                                            if (!(su(u, n, A, l) | 0)) {
                                                r = 0;
                                                break e
                                            } else {
                                                t[i + 96 >> 2] = t[A >> 2];
                                                t[i + 100 >> 2] = t[l >> 2];
                                                r = (t[r >> 2] | 0) == 0;
                                                break
                                            }
                                        } else r = 1
                                    } while (0);
                                    f = i + 68 | 0;
                                    t[f >> 2] = (t[e >> 2] | 0) != 0 & 1;
                                    n = i + 56 | 0;
                                    t[n >> 2] = (t[e + 4 >> 2] | 0) == 0 & 1;
                                    if (r) r = 1;
                                    else {
                                        if ((t[i + 96 >> 2] | 0) < ((c * 3 | 0) / 4 | 0 | 0)) r = (t[i + 100 >> 2] | 0) < ((s * 3 | 0) / 4 | 0 | 0) & 1;
                                        else r = 0;
                                        t[f >> 2] = r;
                                        t[n >> 2] = 0;
                                        r = 1
                                    }
                                }
                            } while (0);
                            x = b;
                            return r | 0
                        }

                        function Mn(e) {
                            e = e | 0;
                            return (e + -7 | 0) >>> 0 < 4 | 0
                        }

                        function Vn() {
                            var e = 0;
                            if (!(ao(9136) | 0)) {
                                if (!(t[1933] | 0)) e = 0;
                                else {
                                    fu();
                                    e = t[2248] | 0
                                }
                                t[1933] = e;
                                Ao(9136) | 0
                            }
                            return
                        }

                        function Yn(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0;
                            A = Qn(t[t[i >> 2] >> 2] | 0) | 0;
                            h = t[e + 96 >> 2] | 0;
                            k = t[e + 100 >> 2] | 0;
                            w = e + 12 | 0;
                            b = (t[w >> 2] | 0) + 1 >> 1;
                            n = e + 16 | 0;
                            u = (t[n >> 2] | 0) + 1 >> 1;
                            a = h << 1;
                            A = (A | 0) != 0;
                            l = h * 6 | 0;
                            o = h * 3 | 0;
                            c = h << 2;
                            e = A ? h << 3 : l;
                            r = (e << 2) + (A ? c : o) | 0;
                            s = Ii(1, 0, r + (A ? 367 : 283) | 0) | 0;
                            t[i + 40 >> 2] = s;
                            if (s) {
                                f = s + (e << 2) | 0;
                                v = s + r + 31 & -32;
                                t[i + 24 >> 2] = v;
                                g = i + 28 | 0;
                                t[g >> 2] = v + 84;
                                r = i + 32 | 0;
                                t[r >> 2] = v + 168;
                                e = i + 36 | 0;
                                t[e >> 2] = A ? v + 252 | 0 : 0;
                                gt(v, t[w >> 2] | 0, t[n >> 2] | 0, f, h, k, 0, 1, s);
                                gt(t[g >> 2] | 0, b, u, f + h | 0, h, k, 0, 1, s + (a << 2) | 0);
                                gt(t[r >> 2] | 0, b, u, f + a | 0, h, k, 0, 1, s + (c << 2) | 0);
                                t[i + 44 >> 2] = 20;
                                Gt();
                                if (A) {
                                    gt(t[e >> 2] | 0, t[w >> 2] | 0, t[n >> 2] | 0, f + o | 0, h, k, 0, 1, s + (l << 2) | 0);
                                    t[i + 48 >> 2] = 4;
                                    switch (t[t[i >> 2] >> 2] | 0) {
                                        case 10:
                                        case 5: {
                                            e = 5;
                                            break
                                        }
                                        default:
                                            e = 6
                                    }
                                    t[i + 52 >> 2] = e;
                                    Pi();
                                    e = 1
                                } else e = 1
                            } else e = 0;
                            return e | 0
                        }

                        function Un(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0;
                            k = t[i >> 2] | 0;
                            l = Qn(t[k >> 2] | 0) | 0;
                            w = t[e + 96 >> 2] | 0;
                            g = t[e + 100 >> 2] | 0;
                            A = w + 1 | 0;
                            c = A >> 1;
                            s = g + 1 >> 1;
                            b = e + 12 | 0;
                            h = (t[b >> 2] | 0) + 1 >> 1;
                            u = e + 16 | 0;
                            a = (t[u >> 2] | 0) + 1 >> 1;
                            r = w << 1;
                            A = A & -2;
                            l = (l | 0) != 0;
                            o = A << 1;
                            e = (o + r << 2) + (l ? w << 3 : 0) | 0;
                            f = Ii(1, 0, e + (l ? 367 : 283) | 0) | 0;
                            t[i + 40 >> 2] = f;
                            if (f) {
                                e = f + e + 31 & -32;
                                t[i + 24 >> 2] = e;
                                C = i + 28 | 0;
                                t[C >> 2] = e + 84;
                                v = i + 32 | 0;
                                t[v >> 2] = e + 168;
                                n = i + 36 | 0;
                                t[n >> 2] = l ? e + 252 | 0 : 0;
                                gt(e, t[b >> 2] | 0, t[u >> 2] | 0, t[k + 16 >> 2] | 0, w, g, t[k + 32 >> 2] | 0, 1, f);
                                e = f + (r << 2) | 0;
                                gt(t[C >> 2] | 0, h, a, t[k + 20 >> 2] | 0, c, s, t[k + 36 >> 2] | 0, 1, e);
                                gt(t[v >> 2] | 0, h, a, t[k + 24 >> 2] | 0, c, s, t[k + 40 >> 2] | 0, 1, e + (A << 2) | 0);
                                t[i + 44 >> 2] = 21;
                                if (l) {
                                    gt(t[n >> 2] | 0, t[b >> 2] | 0, t[u >> 2] | 0, t[k + 28 >> 2] | 0, w, g, t[k + 44 >> 2] | 0, 1, e + (o << 2) | 0);
                                    t[i + 48 >> 2] = 7;
                                    Pi();
                                    e = 1
                                } else e = 1
                            } else e = 0;
                            return e | 0
                        }

                        function Zn() {
                            var e = 0;
                            if (!(ao(9052) | 0)) {
                                if (!(t[1930] | 0)) e = 0;
                                else {
                                    jn();
                                    e = t[2248] | 0
                                }
                                t[1930] = e;
                                Ao(9052) | 0
                            }
                            return
                        }

                        function Wn(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0;
                            r = t[i >> 2] | 0;
                            f = t[r + 20 >> 2] | 0;
                            n = (t[r + 16 >> 2] | 0) + (v(f, t[e + 8 >> 2] | 0) | 0) | 0;
                            i = e + 16 | 0;
                            Xn(t[e + 20 >> 2] | 0, t[e + 32 >> 2] | 0, t[e + 24 >> 2] | 0, t[e + 28 >> 2] | 0, t[e + 36 >> 2] | 0, n, f, t[e + 12 >> 2] | 0, t[i >> 2] | 0, t[8928 + (t[r >> 2] << 2) >> 2] | 0);
                            return t[i >> 2] | 0
                        }

                        function Tn(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0;
                            r = t[e + 16 >> 2] | 0;
                            s = t[i >> 2] | 0;
                            l = t[e + 8 >> 2] | 0;
                            C = s + 20 | 0;
                            f = t[C >> 2] | 0;
                            u = (t[s + 16 >> 2] | 0) + (v(f, l) | 0) | 0;
                            s = t[8800 + (t[s >> 2] << 2) >> 2] | 0;
                            A = t[e + 20 >> 2] | 0;
                            n = t[e + 24 >> 2] | 0;
                            a = t[e + 28 >> 2] | 0;
                            b = i + 8 | 0;
                            h = i + 12 | 0;
                            k = l + r | 0;
                            w = t[e + 12 >> 2] | 0;
                            g = (w + 1 | 0) / 2 | 0;
                            if (!l) Ac[s & 7](A, 0, n, a, n, a, u, 0, w);
                            else {
                                Ac[s & 7](t[i + 4 >> 2] | 0, A, t[b >> 2] | 0, t[h >> 2] | 0, n, a, u + (0 - f) | 0, u, w);
                                r = r + 1 | 0
                            }
                            o = e + 36 | 0;
                            c = e + 32 | 0;
                            f = l;
                            while (1) {
                                f = f + 2 | 0;
                                if ((f | 0) >= (k | 0)) break;
                                I = t[o >> 2] | 0;
                                l = n + I | 0;
                                I = a + I | 0;
                                m = t[C >> 2] | 0;
                                y = u + (m << 1) | 0;
                                p = t[c >> 2] | 0;
                                d = A + (p << 1) | 0;
                                Ac[s & 7](d + (0 - p) | 0, d, n, a, l, I, y + (0 - m) | 0, y, w);
                                u = y;
                                A = d;
                                a = I;
                                n = l
                            }
                            f = A + (t[c >> 2] | 0) | 0;
                            if (((t[e + 84 >> 2] | 0) + k | 0) >= (t[e + 88 >> 2] | 0)) {
                                if (!(k & 1)) Ac[s & 7](f, 0, n, a, n, a, u + (t[C >> 2] | 0) | 0, 0, w)
                            } else {
                                mo(t[i + 4 >> 2] | 0, f | 0, w | 0) | 0;
                                mo(t[b >> 2] | 0, n | 0, g | 0) | 0;
                                mo(t[h >> 2] | 0, a | 0, g | 0) | 0;
                                r = r + -1 | 0
                            }
                            return r | 0
                        }

                        function Ln(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                C = 0;
                            w = t[i >> 2] | 0;
                            s = t[e + 8 >> 2] | 0;
                            o = w + 32 | 0;
                            r = (t[w + 16 >> 2] | 0) + (v(t[o >> 2] | 0, s) | 0) | 0;
                            f = t[w + 20 >> 2] | 0;
                            s = s >> 1;
                            k = w + 36 | 0;
                            n = v(t[k >> 2] | 0, s) | 0;
                            c = t[w + 24 >> 2] | 0;
                            w = w + 40 | 0;
                            s = v(t[w >> 2] | 0, s) | 0;
                            u = t[e + 12 >> 2] | 0;
                            g = e + 16 | 0;
                            a = t[g >> 2] | 0;
                            b = u + 1 | 0;
                            h = a + 1 | 0;
                            A = e + 20 | 0;
                            l = e + 32 | 0;
                            i = 0;
                            while (1) {
                                if ((i | 0) >= (a | 0)) break;
                                C = r + (v(t[o >> 2] | 0, i) | 0) | 0;
                                mo(C | 0, (t[A >> 2] | 0) + (v(t[l >> 2] | 0, i) | 0) | 0, u | 0) | 0;
                                i = i + 1 | 0
                            }
                            l = f + n | 0;
                            A = c + s | 0;
                            a = (b | 0) / 2 | 0;
                            f = (h | 0) / 2 | 0;
                            n = e + 24 | 0;
                            u = e + 36 | 0;
                            r = e + 28 | 0;
                            i = 0;
                            while (1) {
                                if ((i | 0) >= (f | 0)) break;
                                C = l + (v(t[k >> 2] | 0, i) | 0) | 0;
                                mo(C | 0, (t[n >> 2] | 0) + (v(t[u >> 2] | 0, i) | 0) | 0, a | 0) | 0;
                                C = A + (v(t[w >> 2] | 0, i) | 0) | 0;
                                mo(C | 0, (t[r >> 2] | 0) + (v(t[u >> 2] | 0, i) | 0) | 0, a | 0) | 0;
                                i = i + 1 | 0
                            }
                            return t[g >> 2] | 0
                        }

                        function zn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            n = x;
                            x = x + 16 | 0;
                            r = n + 4 | 0;
                            f = n;
                            s = t[e + 104 >> 2] | 0;
                            t[r >> 2] = s;
                            if ((s | 0 ? (c = t[e + 12 >> 2] | 0, o = t[i >> 2] | 0, u = t[o >> 2] | 0, i = (u | 0) == 4 | (u | 0) == 9, a = i & 1, l = qn(e, r, f) | 0, A = o + 20 | 0, s = t[A >> 2] | 0, l = (t[o + 16 >> 2] | 0) + (v(s, l) | 0) | 0, o = t[f >> 2] | 0, jr(t[r >> 2] | 0, t[e >> 2] | 0, c, o, l + (i ? 0 : 3) | 0, s) | 0) : 0) ? Mn(u) | 0 : 0) Xr(l, a, c, o, t[A >> 2] | 0);
                            x = n;
                            return 0
                        }

                        function Jn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            r = t[e + 104 >> 2] | 0;
                            u = t[i >> 2] | 0;
                            a = t[e + 12 >> 2] | 0;
                            A = t[e + 16 >> 2] | 0;
                            f = t[u + 28 >> 2] | 0;
                            u = u + 44 | 0;
                            n = t[u >> 2] | 0;
                            i = f + (v(n, t[e + 8 >> 2] | 0) | 0) | 0;
                            e: do {
                                if (!r) {
                                    if (f | 0) Kn(i, a, A, n)
                                } else {
                                    f = 0;
                                    while (1) {
                                        if ((f | 0) >= (A | 0)) break e;
                                        mo(i | 0, r | 0, a | 0) | 0;
                                        f = f + 1 | 0;
                                        i = i + (t[u >> 2] | 0) | 0;
                                        r = r + (t[e >> 2] | 0) | 0
                                    }
                                }
                            } while (0);
                            return 0
                        }

                        function On(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0;
                            k = x;
                            x = x + 16 | 0;
                            s = k + 4 | 0;
                            b = k;
                            h = t[e + 104 >> 2] | 0;
                            t[s >> 2] = h;
                            if (h | 0) {
                                h = t[e + 12 >> 2] | 0;
                                a = t[i >> 2] | 0;
                                l = t[a >> 2] | 0;
                                c = qn(e, s, b) | 0;
                                o = a + 20 | 0;
                                n = t[o >> 2] | 0;
                                c = (t[a + 16 >> 2] | 0) + (v(n, c) | 0) | 0;
                                a = c + 1 | 0;
                                A = 0;
                                r = 15;
                                while (1) {
                                    i = t[b >> 2] | 0;
                                    if ((A | 0) >= (i | 0)) break;
                                    i = 0;
                                    while (1) {
                                        if ((i | 0) >= (h | 0)) break;
                                        n = (u[(t[s >> 2] | 0) + i >> 0] | 0) >>> 4;
                                        w = a + (i << 1) | 0;
                                        f[w >> 0] = n | f[w >> 0] & -16 & 255;
                                        i = i + 1 | 0;
                                        r = n & r
                                    }
                                    t[s >> 2] = (t[s >> 2] | 0) + (t[e >> 2] | 0);
                                    n = t[o >> 2] | 0;
                                    a = a + n | 0;
                                    A = A + 1 | 0
                                }
                                if ((r | 0) != 15 ? Mn(l) | 0 : 0) qr(c, h, i, n)
                            }
                            x = k;
                            return 0
                        }

                        function qn(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0;
                            u = e + 8 | 0;
                            f = t[u >> 2] | 0;
                            a = e + 16 | 0;
                            n = t[a >> 2] | 0;
                            t[r >> 2] = n;
                            if (t[e + 56 >> 2] | 0) {
                                if (!f) {
                                    t[r >> 2] = n + -1;
                                    f = 0
                                } else {
                                    t[i >> 2] = (t[i >> 2] | 0) + (0 - (t[e >> 2] | 0));
                                    f = f + -1 | 0
                                }
                                n = t[e + 84 >> 2] | 0;
                                i = (t[u >> 2] | 0) + n + (t[a >> 2] | 0) | 0;
                                if ((i | 0) == (t[e + 88 >> 2] | 0)) t[r >> 2] = i - (n + f)
                            }
                            return f | 0
                        }

                        function Kn(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                Po(e | 0, -1, i | 0) | 0;
                                n = n + 1 | 0;
                                e = e + f | 0
                            }
                            return
                        }

                        function Xn(e, i, r, f, n, t, u, a, A, l) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            u = u | 0;
                            a = a | 0;
                            A = A | 0;
                            l = l | 0;
                            var o = 0,
                                c = 0;
                            o = 0;
                            while (1) {
                                if ((o | 0) >= (A | 0)) break;
                                uc[l & 31](e, r, f, t, a);
                                c = (o & 1 | 0) == 0;
                                o = o + 1 | 0;
                                e = e + i | 0;
                                r = c ? r : r + n | 0;
                                f = c ? f : f + n | 0;
                                t = t + u | 0
                            }
                            return
                        }

                        function jn() {
                            t[2232] = 1;
                            t[2233] = 2;
                            t[2234] = 3;
                            t[2235] = 4;
                            t[2236] = 5;
                            t[2237] = 6;
                            t[2238] = 7;
                            t[2239] = 2;
                            t[2240] = 4;
                            t[2241] = 5;
                            t[2242] = 6;
                            return
                        }

                        function Nn(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var t = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            o = f + ((n & -2) * 3 | 0) | 0;
                            c = n >>> 1;
                            s = f + (c * 6 | 0) | 0;
                            l = n & -2;
                            a = e;
                            A = i;
                            t = r;
                            while (1) {
                                if ((f | 0) == (o | 0)) break;
                                bt(u[a >> 0] | 0, u[A >> 0] | 0, u[t >> 0] | 0, f);
                                bt(u[a + 1 >> 0] | 0, u[A >> 0] | 0, u[t >> 0] | 0, f + 3 | 0);
                                a = a + 2 | 0;
                                A = A + 1 | 0;
                                f = f + 6 | 0;
                                t = t + 1 | 0
                            }
                            if (n & 1 | 0) bt(u[e + l >> 0] | 0, u[i + c >> 0] | 0, u[r + c >> 0] | 0, s);
                            return
                        }

                        function $n(e, i, r, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            var u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            o = n + (t << 2 & -8) | 0;
                            s = t >>> 1;
                            c = s & 536870911;
                            s = n + (s << 3) | 0;
                            l = c << 1;
                            a = e;
                            A = i;
                            u = r;
                            while (1) {
                                if ((n | 0) == (o | 0)) break;
                                wt(f[a >> 0] | 0, f[A >> 0] | 0, f[u >> 0] | 0, n);
                                wt(f[a + 1 >> 0] | 0, f[A >> 0] | 0, f[u >> 0] | 0, n + 4 | 0);
                                a = a + 2 | 0;
                                A = A + 1 | 0;
                                n = n + 8 | 0;
                                u = u + 1 | 0
                            }
                            if (t & 1 | 0) wt(f[e + l >> 0] | 0, f[i + c >> 0] | 0, f[r + c >> 0] | 0, s);
                            return
                        }

                        function et(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var t = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            o = f + ((n & -2) * 3 | 0) | 0;
                            c = n >>> 1;
                            s = f + (c * 6 | 0) | 0;
                            l = n & -2;
                            a = e;
                            A = i;
                            t = r;
                            while (1) {
                                if ((f | 0) == (o | 0)) break;
                                kt(u[a >> 0] | 0, u[A >> 0] | 0, u[t >> 0] | 0, f);
                                kt(u[a + 1 >> 0] | 0, u[A >> 0] | 0, u[t >> 0] | 0, f + 3 | 0);
                                a = a + 2 | 0;
                                A = A + 1 | 0;
                                f = f + 6 | 0;
                                t = t + 1 | 0
                            }
                            if (n & 1 | 0) kt(u[e + l >> 0] | 0, u[i + c >> 0] | 0, u[r + c >> 0] | 0, s);
                            return
                        }

                        function it(e, i, r, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            var u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            o = n + (t << 2 & -8) | 0;
                            s = t >>> 1;
                            c = s & 536870911;
                            s = n + (s << 3) | 0;
                            l = c << 1;
                            a = e;
                            A = i;
                            u = r;
                            while (1) {
                                if ((n | 0) == (o | 0)) break;
                                ht(f[a >> 0] | 0, f[A >> 0] | 0, f[u >> 0] | 0, n);
                                ht(f[a + 1 >> 0] | 0, f[A >> 0] | 0, f[u >> 0] | 0, n + 4 | 0);
                                a = a + 2 | 0;
                                A = A + 1 | 0;
                                n = n + 8 | 0;
                                u = u + 1 | 0
                            }
                            if (t & 1 | 0) ht(f[e + l >> 0] | 0, f[i + c >> 0] | 0, f[r + c >> 0] | 0, s);
                            return
                        }

                        function rt(e, i, r, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            var u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            o = n + (t << 2 & -8) | 0;
                            s = t >>> 1;
                            c = s & 536870911;
                            s = n + (s << 3) | 0;
                            l = c << 1;
                            a = e;
                            A = i;
                            u = r;
                            while (1) {
                                if ((n | 0) == (o | 0)) break;
                                st(f[a >> 0] | 0, f[A >> 0] | 0, f[u >> 0] | 0, n);
                                st(f[a + 1 >> 0] | 0, f[A >> 0] | 0, f[u >> 0] | 0, n + 4 | 0);
                                a = a + 2 | 0;
                                A = A + 1 | 0;
                                n = n + 8 | 0;
                                u = u + 1 | 0
                            }
                            if (t & 1 | 0) st(f[e + l >> 0] | 0, f[i + c >> 0] | 0, f[r + c >> 0] | 0, s);
                            return
                        }

                        function ft(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var t = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            o = f + (n << 1 & -4) | 0;
                            s = n >>> 1;
                            c = s & 1073741823;
                            s = f + (s << 2) | 0;
                            l = c << 1;
                            a = e;
                            A = i;
                            t = r;
                            while (1) {
                                if ((f | 0) == (o | 0)) break;
                                ct(u[a >> 0] | 0, u[A >> 0] | 0, u[t >> 0] | 0, f);
                                ct(u[a + 1 >> 0] | 0, u[A >> 0] | 0, u[t >> 0] | 0, f + 2 | 0);
                                a = a + 2 | 0;
                                A = A + 1 | 0;
                                f = f + 4 | 0;
                                t = t + 1 | 0
                            }
                            if (n & 1 | 0) ct(u[e + l >> 0] | 0, u[i + c >> 0] | 0, u[r + c >> 0] | 0, s);
                            return
                        }

                        function nt(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var t = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            o = f + (n << 1 & -4) | 0;
                            s = n >>> 1;
                            c = s & 1073741823;
                            s = f + (s << 2) | 0;
                            l = c << 1;
                            a = e;
                            A = i;
                            t = r;
                            while (1) {
                                if ((f | 0) == (o | 0)) break;
                                tt(u[a >> 0] | 0, u[A >> 0] | 0, u[t >> 0] | 0, f);
                                tt(u[a + 1 >> 0] | 0, u[A >> 0] | 0, u[t >> 0] | 0, f + 2 | 0);
                                a = a + 2 | 0;
                                A = A + 1 | 0;
                                f = f + 4 | 0;
                                t = t + 1 | 0
                            }
                            if (n & 1 | 0) tt(u[e + l >> 0] | 0, u[i + c >> 0] | 0, u[r + c >> 0] | 0, s);
                            return
                        }

                        function tt(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var t = 0,
                                u = 0;
                            t = ut(e, r) | 0;
                            u = at(e, i, r) | 0;
                            r = u << 3 & 224 | (At(e, i) | 0) >>> 3;
                            f[n >> 0] = u >>> 5 | t & 248;
                            f[n + 1 >> 0] = r;
                            return
                        }

                        function ut(e, i) {
                            e = e | 0;
                            i = i | 0;
                            e = lt(e, 19077) | 0;
                            return ot(e + -14234 + (lt(i, 26149) | 0) | 0) | 0
                        }

                        function at(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            e = lt(e, 19077) | 0;
                            i = lt(i, 6419) | 0;
                            return ot(e + 8708 - i - (lt(r, 13320) | 0) | 0) | 0
                        }

                        function At(e, i) {
                            e = e | 0;
                            i = i | 0;
                            e = lt(e, 19077) | 0;
                            return ot(e + -17685 + (lt(i, 33050) | 0) | 0) | 0
                        }

                        function lt(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return (v(i, e) | 0) >> 8 | 0
                        }

                        function ot(e) {
                            e = e | 0;
                            if (e >>> 0 < 16384) e = e >>> 6;
                            else e = (e >> 31 & -255) + 255 | 0;
                            return e | 0
                        }

                        function ct(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var t = 0,
                                u = 0;
                            t = ut(e, r) | 0;
                            u = at(e, i, r) | 0;
                            r = At(e, i) | 0 | 15;
                            f[n >> 0] = u >>> 4 | t & 240;
                            f[n + 1 >> 0] = r;
                            return
                        }

                        function st(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            f[n >> 0] = -1;
                            bt(e & 255, i & 255, r & 255, n + 1 | 0);
                            return
                        }

                        function bt(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            f[n >> 0] = ut(e, r) | 0;
                            f[n + 1 >> 0] = at(e, i, r) | 0;
                            f[n + 2 >> 0] = At(e, i) | 0;
                            return
                        }

                        function ht(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            kt(e & 255, i & 255, r & 255, n);
                            f[n + 3 >> 0] = -1;
                            return
                        }

                        function kt(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            f[n >> 0] = At(e, i) | 0;
                            f[n + 1 >> 0] = at(e, i, r) | 0;
                            f[n + 2 >> 0] = ut(e, r) | 0;
                            return
                        }

                        function wt(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            bt(e & 255, i & 255, r & 255, n);
                            f[n + 3 >> 0] = -1;
                            return
                        }

                        function gt(e, i, r, f, n, u, a, A, l) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            u = u | 0;
                            a = a | 0;
                            A = A | 0;
                            l = l | 0;
                            var o = 0,
                                c = 0;
                            c = (i | 0) < (n | 0);
                            t[e >> 2] = c & 1;
                            o = (r | 0) < (u | 0);
                            t[e + 4 >> 2] = o & 1;
                            t[e + 44 >> 2] = i;
                            t[e + 48 >> 2] = r;
                            t[e + 52 >> 2] = n;
                            t[e + 56 >> 2] = u;
                            t[e + 60 >> 2] = 0;
                            t[e + 64 >> 2] = 0;
                            t[e + 68 >> 2] = f;
                            t[e + 72 >> 2] = a;
                            t[e + 8 >> 2] = A;
                            f = c ? n + -1 | 0 : i;
                            t[e + 36 >> 2] = f;
                            a = c ? i + -1 | 0 : n;
                            t[e + 40 >> 2] = a;
                            if (!c) {
                                c = vo(0, 1, a | 0, ((a | 0) < 0) << 31 >> 31 | 0) | 0;
                                y() | 0;
                                t[e + 12 >> 2] = c
                            }
                            i = o << 31 >> 31;
                            a = i + r | 0;
                            t[e + 28 >> 2] = a;
                            i = i + u | 0;
                            t[e + 32 >> 2] = i;
                            r = e + 24 | 0;
                            if (o) t[r >> 2] = i;
                            else {
                                t[r >> 2] = a;
                                f = v(a, f) | 0;
                                f = vo(0, u | 0, f | 0, ((f | 0) < 0) << 31 >> 31 | 0) | 0;
                                c = (f | 0) == (f | 0) & (y() | 0) == 0;
                                t[e + 20 >> 2] = c ? f : 0;
                                f = i
                            }
                            c = vo(0, 1, f | 0, ((f | 0) < 0) << 31 >> 31 | 0) | 0;
                            y() | 0;
                            t[e + 16 >> 2] = c;
                            t[e + 76 >> 2] = l;
                            t[e + 80 >> 2] = l + ((v(A, n) | 0) << 2);
                            Po(l | 0, 0, v(n << 3, A) | 0) | 0;
                            mt();
                            return
                        }

                        function vt(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0;
                            f = t[e + 16 >> 2] | 0;
                            n = f + 1 >> 1;
                            u = t[i + 24 >> 2] | 0;
                            if (Qn(t[t[i >> 2] >> 2] | 0) | 0 ? (r = t[e + 104 >> 2] | 0, r | 0) : 0) dt(t[e + 20 >> 2] | 0, t[e + 32 >> 2] | 0, r, t[e >> 2] | 0, t[e + 12 >> 2] | 0, f, 0);
                            u = It(t[e + 20 >> 2] | 0, t[e + 32 >> 2] | 0, f, u) | 0;
                            f = e + 36 | 0;
                            It(t[e + 24 >> 2] | 0, t[f >> 2] | 0, n, t[i + 28 >> 2] | 0) | 0;
                            It(t[e + 28 >> 2] | 0, t[f >> 2] | 0, n, t[i + 32 >> 2] | 0) | 0;
                            return u | 0
                        }

                        function Ct(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0;
                            u = t[i >> 2] | 0;
                            f = t[u + 28 >> 2] | 0;
                            o = t[i + 16 >> 2] | 0;
                            c = u + 44 | 0;
                            n = t[c >> 2] | 0;
                            l = f + (v(n, o) | 0) | 0;
                            A = t[e + 104 >> 2] | 0;
                            if (!A) {
                                if (f | 0) Kn(l, t[e + 96 >> 2] | 0, r, n)
                            } else {
                                a = t[u + 16 >> 2] | 0;
                                n = u + 32 | 0;
                                u = t[n >> 2] | 0;
                                f = i + 36 | 0;
                                r = It(A, t[e >> 2] | 0, t[e + 16 >> 2] | 0, t[f >> 2] | 0) | 0;
                                if ((r | 0) > 0) {
                                    o = a + (v(u, o) | 0) | 0;
                                    dt(o, t[n >> 2] | 0, l, t[c >> 2] | 0, t[(t[f >> 2] | 0) + 52 >> 2] | 0, r, 1)
                                }
                            }
                            return 0
                        }

                        function It(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                t = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((r | 0) <= 0) break;
                                t = ar(f, r, e, i) | 0;
                                u = e + (v(t, i) | 0) | 0;
                                e = u;
                                n = (yt(f) | 0) + n | 0;
                                r = r - t | 0
                            }
                            return n | 0
                        }

                        function dt(e, i, r, f, n, t, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            u = u | 0;
                            var a = 0;
                            a = 0;
                            while (1) {
                                if ((a | 0) >= (t | 0)) break;
                                Or(e, r, n, u);
                                a = a + 1 | 0;
                                e = e + i | 0;
                                r = r + f | 0
                            }
                            return
                        }

                        function yt(e) {
                            e = e | 0;
                            var i = 0;
                            i = 0;
                            while (1) {
                                if (!(sr(e) | 0)) break;
                                or(e);
                                i = i + 1 | 0
                            }
                            return i | 0
                        }

                        function mt() {
                            var e = 0;
                            if (!(ao(9080) | 0)) {
                                if (!(t[1931] | 0)) e = 0;
                                else {
                                    pt();
                                    e = t[2248] | 0
                                }
                                t[1931] = e;
                                Ao(9080) | 0
                            }
                            return
                        }

                        function pt() {
                            return
                        }

                        function Pt(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            A = t[e + 68 >> 2] | 0;
                            u = t[e + 76 >> 2] | 0;
                            l = v(t[e + 8 >> 2] | 0, t[e + 52 >> 2] | 0) | 0;
                            a = t[e + 80 >> 2] | 0;
                            i = t[e + 24 >> 2] | 0;
                            e: do {
                                if (!i) {
                                    e = e + 16 | 0;
                                    i = 0;
                                    while (1) {
                                        if ((i | 0) >= (l | 0)) break e;
                                        u = bo(t[e >> 2] | 0, 0, t[a + (i << 2) >> 2] | 0, 0) | 0;
                                        ho(u | 0, y() | 0, -2147483648, 0) | 0;
                                        f[A + i >> 0] = y() | 0;
                                        i = i + 1 | 0
                                    }
                                } else {
                                    r = t[e + 32 >> 2] | 0;
                                    r = vo(0, 0 - i | 0, r | 0, ((r | 0) < 0) << 31 >> 31 | 0) | 0;
                                    y() | 0;
                                    n = 0 - r | 0;
                                    e = e + 16 | 0;
                                    i = 0;
                                    while (1) {
                                        if ((i | 0) >= (l | 0)) break e;
                                        b = bo(t[a + (i << 2) >> 2] | 0, 0, n | 0, 0) | 0;
                                        s = y() | 0;
                                        c = bo(r | 0, 0, t[u + (i << 2) >> 2] | 0, 0) | 0;
                                        o = y() | 0;
                                        s = ho(b | 0, s | 0, -2147483648, 0) | 0;
                                        ho(s | 0, y() | 0, c | 0, o | 0) | 0;
                                        o = y() | 0;
                                        o = bo(o | 0, 0, t[e >> 2] | 0, 0) | 0;
                                        ho(o | 0, y() | 0, -2147483648, 0) | 0;
                                        f[A + i >> 0] = y() | 0;
                                        i = i + 1 | 0
                                    }
                                }
                            } while (0);
                            return
                        }

                        function Dt(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            u = t[e + 68 >> 2] | 0;
                            a = t[e + 76 >> 2] | 0;
                            A = v(t[e + 8 >> 2] | 0, t[e + 52 >> 2] | 0) | 0;
                            r = t[e + 80 >> 2] | 0;
                            n = v(t[e + 24 >> 2] | 0, 0 - (t[e + 16 >> 2] | 0) | 0) | 0;
                            e: do {
                                if (!n) {
                                    i = e + 20 | 0;
                                    e = 0;
                                    while (1) {
                                        if ((e | 0) >= (A | 0)) break e;
                                        n = a + (e << 2) | 0;
                                        r = bo(t[i >> 2] | 0, 0, t[n >> 2] | 0, 0) | 0;
                                        ho(r | 0, y() | 0, -2147483648, 0) | 0;
                                        f[u + e >> 0] = y() | 0;
                                        t[n >> 2] = 0;
                                        e = e + 1 | 0
                                    }
                                } else {
                                    i = e + 20 | 0;
                                    e = 0;
                                    while (1) {
                                        if ((e | 0) >= (A | 0)) break e;
                                        o = bo(t[r + (e << 2) >> 2] | 0, 0, n | 0, 0) | 0;
                                        ho(o | 0, y() | 0, -2147483648, 0) | 0;
                                        o = y() | 0;
                                        l = a + (e << 2) | 0;
                                        bo((t[l >> 2] | 0) - o | 0, 0, t[i >> 2] | 0, 0) | 0;
                                        f[u + e >> 0] = y() | 0;
                                        t[l >> 2] = o;
                                        e = e + 1 | 0
                                    }
                                }
                            } while (0);
                            return
                        }

                        function Bt(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                C = 0;
                            b = t[e + 8 >> 2] | 0;
                            h = v(t[e + 52 >> 2] | 0, b) | 0;
                            k = e + 36 | 0;
                            w = e + 44 | 0;
                            g = e + 80 | 0;
                            s = e + 40 | 0;
                            o = 0;
                            while (1) {
                                if ((o | 0) >= (b | 0)) break;
                                a = t[k >> 2] | 0;
                                r = u[i + o >> 0] | 0;
                                f = o + b | 0;
                                if ((t[w >> 2] | 0) > 1) e = u[i + f >> 0] | 0;
                                else e = r;
                                c = t[g >> 2] | 0;
                                A = a;
                                n = o;
                                l = f;
                                f = a;
                                e: while (1) {
                                    a = r - e | 0;
                                    r = A;
                                    while (1) {
                                        t[c + (n << 2) >> 2] = (v(f, e) | 0) + (v(a, r) | 0);
                                        n = n + b | 0;
                                        if ((n | 0) >= (h | 0)) break e;
                                        r = r - (t[s >> 2] | 0) | 0;
                                        if ((r | 0) < 0) break;
                                        f = t[k >> 2] | 0
                                    }
                                    C = l + b | 0;
                                    f = t[k >> 2] | 0;
                                    a = e;
                                    e = u[i + C >> 0] | 0;
                                    A = f + r | 0;
                                    l = C;
                                    r = a
                                }
                                o = o + 1 | 0
                            }
                            return
                        }

                        function Et(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0;
                            o = t[e + 8 >> 2] | 0;
                            c = v(t[e + 52 >> 2] | 0, o) | 0;
                            s = e + 36 | 0;
                            b = e + 40 | 0;
                            h = e + 80 | 0;
                            l = e + 12 | 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (o | 0)) break;
                                e = 0;
                                r = 0;
                                A = n;
                                f = n;
                                while (1) {
                                    if ((A | 0) >= (c | 0)) break;
                                    a = 0;
                                    e = (t[s >> 2] | 0) + e | 0;
                                    while (1) {
                                        if ((e | 0) <= 0) break;
                                        k = u[i + f >> 0] | 0;
                                        a = k;
                                        e = e - (t[b >> 2] | 0) | 0;
                                        r = r + k | 0;
                                        f = f + o | 0
                                    }
                                    k = v(a, 0 - e | 0) | 0;
                                    r = (v(t[b >> 2] | 0, r) | 0) - k | 0;
                                    t[(t[h >> 2] | 0) + (A << 2) >> 2] = r;
                                    r = bo(t[l >> 2] | 0, 0, k | 0, 0) | 0;
                                    ho(r | 0, y() | 0, -2147483648, 0) | 0;
                                    r = y() | 0;
                                    A = A + o | 0
                                }
                                n = n + 1 | 0
                            }
                            return
                        }

                        function Rt(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                C = 0;
                            c = t[e + 16 >> 2] | 0;
                            s = c + 1 >> 1;
                            b = i + 24 | 0;
                            h = e + 20 | 0;
                            k = e + 32 | 0;
                            w = i + 28 | 0;
                            a = i + 16 | 0;
                            A = e + 24 | 0;
                            l = e + 36 | 0;
                            o = i + 32 | 0;
                            u = e + 28 | 0;
                            e = 0;
                            r = 0;
                            n = 0;
                            while (1) {
                                if ((c | 0) <= (e | 0)) break;
                                f = t[k >> 2] | 0;
                                e = (ar(t[b >> 2] | 0, c - e | 0, (t[h >> 2] | 0) + (v(f, e) | 0) | 0, f) | 0) + e | 0;
                                f = s - r | 0;
                                if (tr(t[w >> 2] | 0, f) | 0) {
                                    g = t[l >> 2] | 0;
                                    g = ar(t[w >> 2] | 0, f, (t[A >> 2] | 0) + (v(g, r) | 0) | 0, g) | 0;
                                    C = t[l >> 2] | 0;
                                    ar(t[o >> 2] | 0, f, (t[u >> 2] | 0) + (v(C, r) | 0) | 0, C) | 0;
                                    r = g + r | 0
                                }
                                n = (ru(i, (t[a >> 2] | 0) + n | 0) | 0) + n | 0
                            }
                            return n | 0
                        }

                        function Gt() {
                            var e = 0;
                            if (!(ao(9108) | 0)) {
                                if (!(t[1932] | 0)) e = 0;
                                else {
                                    Ht();
                                    e = t[2248] | 0
                                }
                                t[1932] = e;
                                Ao(9108) | 0
                            }
                            return
                        }

                        function _t(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            l = e + 104 | 0;
                            e: do {
                                if (t[l >> 2] | 0) {
                                    o = t[i + 36 >> 2] | 0;
                                    f = (t[i + 16 >> 2] | 0) + r | 0;
                                    n = o + 60 | 0;
                                    u = e + 8 | 0;
                                    a = e + 16 | 0;
                                    A = i + 52 | 0;
                                    while (1) {
                                        if ((r | 0) <= 0) break e;
                                        b = t[n >> 2] | 0;
                                        s = t[u >> 2] | 0;
                                        c = t[e >> 2] | 0;
                                        ar(o, s - b + (t[a >> 2] | 0) | 0, (t[l >> 2] | 0) + (v(c, b - s | 0) | 0) | 0, c) | 0;
                                        r = r - ($o[t[A >> 2] & 7](i, f - r | 0, r) | 0) | 0
                                    }
                                }
                            } while (0);
                            return 0
                        }

                        function Ft(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            l = t[e >> 2] | 0;
                            s = l + 20 | 0;
                            A = t[s >> 2] | 0;
                            c = (t[l + 16 >> 2] | 0) + (v(A, i) | 0) | 0;
                            l = t[l >> 2] | 0;
                            o = (l | 0) == 4 | (l | 0) == 9;
                            n = e + 36 | 0;
                            a = t[n >> 2] | 0;
                            u = t[a + 52 >> 2] | 0;
                            i = c + (o ? 0 : 3) | 0;
                            e = 0;
                            f = 0;
                            while (1) {
                                if (!((f | 0) < (r | 0) & (xt(a) | 0) != 0)) break;
                                or(a);
                                b = jr(t[(t[n >> 2] | 0) + 68 >> 2] | 0, 0, u, 1, i, 0) | 0 | e;
                                A = t[s >> 2] | 0;
                                i = i + A | 0;
                                e = b;
                                f = f + 1 | 0;
                                a = t[n >> 2] | 0
                            }
                            if ((Mn(l) | 0) != 0 & (e | 0) != 0) Xr(c, o & 1, u, f, A);
                            return f | 0
                        }

                        function St(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0;
                            c = t[e >> 2] | 0;
                            b = c + 20 | 0;
                            n = t[b >> 2] | 0;
                            s = (t[c + 16 >> 2] | 0) + (v(n, i) | 0) | 0;
                            c = t[c >> 2] | 0;
                            l = e + 36 | 0;
                            e = t[l >> 2] | 0;
                            o = t[e + 52 >> 2] | 0;
                            a = s + 1 | 0;
                            i = 15;
                            A = 0;
                            while (1) {
                                if (!((A | 0) < (r | 0) & (xt(e) | 0) != 0)) break;
                                or(e);
                                e = 0;
                                while (1) {
                                    if ((e | 0) >= (o | 0)) break;
                                    n = (u[(t[(t[l >> 2] | 0) + 68 >> 2] | 0) + e >> 0] | 0) >>> 4;
                                    h = a + (e << 1) | 0;
                                    f[h >> 0] = n | f[h >> 0] & -16 & 255;
                                    e = e + 1 | 0;
                                    i = n & i
                                }
                                n = t[b >> 2] | 0;
                                a = a + n | 0;
                                A = A + 1 | 0;
                                e = t[l >> 2] | 0
                            }
                            if ((Mn(c) | 0) != 0 & (i | 0) != 15) qr(s, o, A, n);
                            return A | 0
                        }

                        function xt(e) {
                            e = e | 0;
                            if (!(Qt(e) | 0)) e = (t[e + 24 >> 2] | 0) < 1 & 1;
                            else e = 0;
                            return e | 0
                        }

                        function Qt(e) {
                            e = e | 0;
                            return (t[e + 64 >> 2] | 0) >= (t[e + 56 >> 2] | 0) | 0
                        }

                        function Ht() {
                            t[2217] = 8;
                            t[2219] = 9;
                            t[2216] = 10;
                            t[2218] = 11;
                            t[2220] = 12;
                            t[2221] = 13;
                            t[2222] = 14;
                            t[2223] = 8;
                            t[2224] = 9;
                            t[2225] = 12;
                            t[2226] = 13;
                            return
                        }

                        function Mt(e, i, r, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            var u = 0;
                            u = 0;
                            while (1) {
                                if ((u | 0) >= (t | 0)) break;
                                iu(f[e + u >> 0] | 0, f[i + u >> 0] | 0, f[r + u >> 0] | 0, n + (u << 2) | 0);
                                u = u + 1 | 0
                            }
                            return
                        }

                        function Vt(e, i, r, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            var u = 0;
                            u = 0;
                            while (1) {
                                if ((u | 0) >= (t | 0)) break;
                                eu(f[e + u >> 0] | 0, f[i + u >> 0] | 0, f[r + u >> 0] | 0, n + (u << 2) | 0);
                                u = u + 1 | 0
                            }
                            return
                        }

                        function Yt(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var t = 0;
                            t = 0;
                            while (1) {
                                if ((t | 0) >= (n | 0)) break;
                                Nt(u[e + t >> 0] | 0, u[i + t >> 0] | 0, u[r + t >> 0] | 0, f + (t * 3 | 0) | 0);
                                t = t + 1 | 0
                            }
                            return
                        }

                        function Ut(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var t = 0;
                            t = 0;
                            while (1) {
                                if ((t | 0) >= (n | 0)) break;
                                $t(u[e + t >> 0] | 0, u[i + t >> 0] | 0, u[r + t >> 0] | 0, f + (t * 3 | 0) | 0);
                                t = t + 1 | 0
                            }
                            return
                        }

                        function Zt(e, i, r, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            var u = 0;
                            u = 0;
                            while (1) {
                                if ((u | 0) >= (t | 0)) break;
                                jt(f[e + u >> 0] | 0, f[i + u >> 0] | 0, f[r + u >> 0] | 0, n + (u << 2) | 0);
                                u = u + 1 | 0
                            }
                            return
                        }

                        function Wt(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var t = 0;
                            t = 0;
                            while (1) {
                                if ((t | 0) >= (n | 0)) break;
                                Xt(u[e + t >> 0] | 0, u[i + t >> 0] | 0, u[r + t >> 0] | 0, f + (t << 1) | 0);
                                t = t + 1 | 0
                            }
                            return
                        }

                        function Tt(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var t = 0;
                            t = 0;
                            while (1) {
                                if ((t | 0) >= (n | 0)) break;
                                Lt(u[e + t >> 0] | 0, u[i + t >> 0] | 0, u[r + t >> 0] | 0, f + (t << 1) | 0);
                                t = t + 1 | 0
                            }
                            return
                        }

                        function Lt(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var t = 0,
                                u = 0;
                            t = zt(e, r) | 0;
                            u = Jt(e, i, r) | 0;
                            r = u << 3 & 224 | (Ot(e, i) | 0) >>> 3;
                            f[n >> 0] = u >>> 5 | t & 248;
                            f[n + 1 >> 0] = r;
                            return
                        }

                        function zt(e, i) {
                            e = e | 0;
                            i = i | 0;
                            e = qt(e, 19077) | 0;
                            return Kt(e + -14234 + (qt(i, 26149) | 0) | 0) | 0
                        }

                        function Jt(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            e = qt(e, 19077) | 0;
                            i = qt(i, 6419) | 0;
                            return Kt(e + 8708 - i - (qt(r, 13320) | 0) | 0) | 0
                        }

                        function Ot(e, i) {
                            e = e | 0;
                            i = i | 0;
                            e = qt(e, 19077) | 0;
                            return Kt(e + -17685 + (qt(i, 33050) | 0) | 0) | 0
                        }

                        function qt(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return (v(i, e) | 0) >> 8 | 0
                        }

                        function Kt(e) {
                            e = e | 0;
                            if (e >>> 0 < 16384) e = e >>> 6;
                            else e = (e >> 31 & -255) + 255 | 0;
                            return e | 0
                        }

                        function Xt(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var t = 0,
                                u = 0;
                            t = zt(e, r) | 0;
                            u = Jt(e, i, r) | 0;
                            r = Ot(e, i) | 0 | 15;
                            f[n >> 0] = u >>> 4 | t & 240;
                            f[n + 1 >> 0] = r;
                            return
                        }

                        function jt(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            f[n >> 0] = -1;
                            Nt(e & 255, i & 255, r & 255, n + 1 | 0);
                            return
                        }

                        function Nt(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            f[n >> 0] = zt(e, r) | 0;
                            f[n + 1 >> 0] = Jt(e, i, r) | 0;
                            f[n + 2 >> 0] = Ot(e, i) | 0;
                            return
                        }

                        function $t(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            f[n >> 0] = Ot(e, i) | 0;
                            f[n + 1 >> 0] = Jt(e, i, r) | 0;
                            f[n + 2 >> 0] = zt(e, r) | 0;
                            return
                        }

                        function eu(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            $t(e & 255, i & 255, r & 255, n);
                            f[n + 3 >> 0] = -1;
                            return
                        }

                        function iu(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            Nt(e & 255, i & 255, r & 255, n);
                            f[n + 3 >> 0] = -1;
                            return
                        }

                        function ru(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0;
                            l = t[e >> 2] | 0;
                            a = t[8864 + (t[l >> 2] << 2) >> 2] | 0;
                            A = l + 20 | 0;
                            n = e + 28 | 0;
                            u = e + 24 | 0;
                            f = e + 32 | 0;
                            r = 0;
                            e = (t[l + 16 >> 2] | 0) + (v(t[A >> 2] | 0, i) | 0) | 0;
                            while (1) {
                                i = t[u >> 2] | 0;
                                if (!(xt(i) | 0)) break;
                                if (!(xt(t[n >> 2] | 0) | 0)) break;
                                or(i);
                                or(t[n >> 2] | 0);
                                or(t[f >> 2] | 0);
                                l = t[u >> 2] | 0;
                                uc[a & 31](t[l + 68 >> 2] | 0, t[(t[n >> 2] | 0) + 68 >> 2] | 0, t[(t[f >> 2] | 0) + 68 >> 2] | 0, e, t[l + 52 >> 2] | 0);
                                r = r + 1 | 0;
                                e = e + (t[A >> 2] | 0) | 0
                            }
                            return r | 0
                        }

                        function fu() {
                            t[2201] = 1;
                            t[2203] = 2;
                            t[2207] = 1;
                            t[2208] = 2;
                            t[2200] = 3;
                            t[2202] = 4;
                            t[2204] = 5;
                            t[2205] = 6;
                            t[2206] = 7;
                            t[2209] = 5;
                            t[2210] = 6;
                            return
                        }

                        function nu(e, i, r, n, t, a, A, l, o) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            a = a | 0;
                            A = A | 0;
                            l = l | 0;
                            o = o | 0;
                            var c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0,
                                D = 0;
                            P = o + -1 | 0;
                            d = P >> 1;
                            s = (u[n >> 0] | 0) << 16 | (u[r >> 0] | 0);
                            b = (u[a >> 0] | 0) << 16 | (u[t >> 0] | 0);
                            p = (s * 3 | 0) + 131074 + b | 0;
                            iu(f[e >> 0] | 0, p >>> 2 & 255, p >>> 18 & 255, A);
                            p = (i | 0) != 0;
                            c = s + 131074 + (b * 3 | 0) | 0;
                            if (p) iu(f[i >> 0] | 0, c >>> 2 & 255, c >>> 18 & 255, l);
                            I = 1;
                            while (1) {
                                if ((I | 0) > (d | 0)) break;
                                w = (u[n + I >> 0] | 0) << 16 | (u[r + I >> 0] | 0);
                                g = (u[a + I >> 0] | 0) << 16 | (u[t + I >> 0] | 0);
                                v = w + b | 0;
                                C = v + 524296 + s + g | 0;
                                v = (C + (v << 1) | 0) >>> 3;
                                C = (C + (g + s << 1) | 0) >>> 3;
                                k = v + s | 0;
                                D = C + w | 0;
                                c = I << 1;
                                s = c + -1 | 0;
                                h = s << 2;
                                iu(f[e + s >> 0] | 0, k >>> 1 & 255, k >>> 17 & 255, A + h | 0);
                                k = I << 3;
                                iu(f[e + c >> 0] | 0, D >>> 1 & 255, D >>> 17 & 255, A + k | 0);
                                if (p) {
                                    C = C + b | 0;
                                    D = v + g | 0;
                                    iu(f[i + s >> 0] | 0, C >>> 1 & 255, C >>> 17 & 255, l + h | 0);
                                    iu(f[i + c >> 0] | 0, D >>> 1 & 255, D >>> 17 & 255, l + k | 0)
                                }
                                I = I + 1 | 0;
                                s = w;
                                b = g
                            }
                            if ((o & 1 | 0) == 0 ? (m = b + 131074 + (s * 3 | 0) | 0, y = P << 2, iu(f[e + P >> 0] | 0, m >>> 2 & 255, m >>> 18 & 255, A + y | 0), m = s + 131074 + (b * 3 | 0) | 0, p) : 0) iu(f[i + P >> 0] | 0, m >>> 2 & 255, m >>> 18 & 255, l + y | 0);
                            return
                        }

                        function tu(e, i, r, n, t, a, A, l, o) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            a = a | 0;
                            A = A | 0;
                            l = l | 0;
                            o = o | 0;
                            var c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0,
                                D = 0;
                            P = o + -1 | 0;
                            d = P >> 1;
                            s = (u[n >> 0] | 0) << 16 | (u[r >> 0] | 0);
                            b = (u[a >> 0] | 0) << 16 | (u[t >> 0] | 0);
                            p = (s * 3 | 0) + 131074 + b | 0;
                            eu(f[e >> 0] | 0, p >>> 2 & 255, p >>> 18 & 255, A);
                            p = (i | 0) != 0;
                            c = s + 131074 + (b * 3 | 0) | 0;
                            if (p) eu(f[i >> 0] | 0, c >>> 2 & 255, c >>> 18 & 255, l);
                            I = 1;
                            while (1) {
                                if ((I | 0) > (d | 0)) break;
                                w = (u[n + I >> 0] | 0) << 16 | (u[r + I >> 0] | 0);
                                g = (u[a + I >> 0] | 0) << 16 | (u[t + I >> 0] | 0);
                                v = w + b | 0;
                                C = v + 524296 + s + g | 0;
                                v = (C + (v << 1) | 0) >>> 3;
                                C = (C + (g + s << 1) | 0) >>> 3;
                                k = v + s | 0;
                                D = C + w | 0;
                                c = I << 1;
                                s = c + -1 | 0;
                                h = s << 2;
                                eu(f[e + s >> 0] | 0, k >>> 1 & 255, k >>> 17 & 255, A + h | 0);
                                k = I << 3;
                                eu(f[e + c >> 0] | 0, D >>> 1 & 255, D >>> 17 & 255, A + k | 0);
                                if (p) {
                                    C = C + b | 0;
                                    D = v + g | 0;
                                    eu(f[i + s >> 0] | 0, C >>> 1 & 255, C >>> 17 & 255, l + h | 0);
                                    eu(f[i + c >> 0] | 0, D >>> 1 & 255, D >>> 17 & 255, l + k | 0)
                                }
                                I = I + 1 | 0;
                                s = w;
                                b = g
                            }
                            if ((o & 1 | 0) == 0 ? (m = b + 131074 + (s * 3 | 0) | 0, y = P << 2, eu(f[e + P >> 0] | 0, m >>> 2 & 255, m >>> 18 & 255, A + y | 0), m = s + 131074 + (b * 3 | 0) | 0, p) : 0) eu(f[i + P >> 0] | 0, m >>> 2 & 255, m >>> 18 & 255, l + y | 0);
                            return
                        }

                        function uu(e, i, r, f, n, t, a, A, l) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            a = a | 0;
                            A = A | 0;
                            l = l | 0;
                            var o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0;
                            p = l + -1 | 0;
                            I = p >> 1;
                            c = (u[f >> 0] | 0) << 16 | (u[r >> 0] | 0);
                            s = (u[t >> 0] | 0) << 16 | (u[n >> 0] | 0);
                            m = (c * 3 | 0) + 131074 + s | 0;
                            Nt(u[e >> 0] | 0, m >>> 2 & 255, m >>> 18, a);
                            m = (i | 0) != 0;
                            o = c + 131074 + (s * 3 | 0) | 0;
                            if (m) Nt(u[i >> 0] | 0, o >>> 2 & 255, o >>> 18, A);
                            C = 1;
                            while (1) {
                                if ((C | 0) > (I | 0)) break;
                                k = (u[f + C >> 0] | 0) << 16 | (u[r + C >> 0] | 0);
                                w = (u[t + C >> 0] | 0) << 16 | (u[n + C >> 0] | 0);
                                g = k + s | 0;
                                v = g + 524296 + c + w | 0;
                                g = (v + (g << 1) | 0) >>> 3;
                                v = (v + (w + c << 1) | 0) >>> 3;
                                h = g + c | 0;
                                P = v + k | 0;
                                o = C << 1;
                                c = o + -1 | 0;
                                b = c * 3 | 0;
                                Nt(u[e + c >> 0] | 0, h >>> 1 & 255, h >>> 17, a + b | 0);
                                h = C * 6 | 0;
                                Nt(u[e + o >> 0] | 0, P >>> 1 & 255, P >>> 17, a + h | 0);
                                if (m) {
                                    v = v + s | 0;
                                    P = g + w | 0;
                                    Nt(u[i + c >> 0] | 0, v >>> 1 & 255, v >>> 17, A + b | 0);
                                    Nt(u[i + o >> 0] | 0, P >>> 1 & 255, P >>> 17, A + h | 0)
                                }
                                C = C + 1 | 0;
                                c = k;
                                s = w
                            }
                            if ((l & 1 | 0) == 0 ? (y = s + 131074 + (c * 3 | 0) | 0, d = p * 3 | 0, Nt(u[e + p >> 0] | 0, y >>> 2 & 255, y >>> 18, a + d | 0), y = c + 131074 + (s * 3 | 0) | 0, m) : 0) Nt(u[i + p >> 0] | 0, y >>> 2 & 255, y >>> 18, A + d | 0);
                            return
                        }

                        function au(e, i, r, f, n, t, a, A, l) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            a = a | 0;
                            A = A | 0;
                            l = l | 0;
                            var o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0;
                            p = l + -1 | 0;
                            I = p >> 1;
                            c = (u[f >> 0] | 0) << 16 | (u[r >> 0] | 0);
                            s = (u[t >> 0] | 0) << 16 | (u[n >> 0] | 0);
                            m = (c * 3 | 0) + 131074 + s | 0;
                            $t(u[e >> 0] | 0, m >>> 2 & 255, m >>> 18, a);
                            m = (i | 0) != 0;
                            o = c + 131074 + (s * 3 | 0) | 0;
                            if (m) $t(u[i >> 0] | 0, o >>> 2 & 255, o >>> 18, A);
                            C = 1;
                            while (1) {
                                if ((C | 0) > (I | 0)) break;
                                k = (u[f + C >> 0] | 0) << 16 | (u[r + C >> 0] | 0);
                                w = (u[t + C >> 0] | 0) << 16 | (u[n + C >> 0] | 0);
                                g = k + s | 0;
                                v = g + 524296 + c + w | 0;
                                g = (v + (g << 1) | 0) >>> 3;
                                v = (v + (w + c << 1) | 0) >>> 3;
                                h = g + c | 0;
                                P = v + k | 0;
                                o = C << 1;
                                c = o + -1 | 0;
                                b = c * 3 | 0;
                                $t(u[e + c >> 0] | 0, h >>> 1 & 255, h >>> 17, a + b | 0);
                                h = C * 6 | 0;
                                $t(u[e + o >> 0] | 0, P >>> 1 & 255, P >>> 17, a + h | 0);
                                if (m) {
                                    v = v + s | 0;
                                    P = g + w | 0;
                                    $t(u[i + c >> 0] | 0, v >>> 1 & 255, v >>> 17, A + b | 0);
                                    $t(u[i + o >> 0] | 0, P >>> 1 & 255, P >>> 17, A + h | 0)
                                }
                                C = C + 1 | 0;
                                c = k;
                                s = w
                            }
                            if ((l & 1 | 0) == 0 ? (y = s + 131074 + (c * 3 | 0) | 0, d = p * 3 | 0, $t(u[e + p >> 0] | 0, y >>> 2 & 255, y >>> 18, a + d | 0), y = c + 131074 + (s * 3 | 0) | 0, m) : 0) $t(u[i + p >> 0] | 0, y >>> 2 & 255, y >>> 18, A + d | 0);
                            return
                        }

                        function Au(e, i, r, n, t, a, A, l, o) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            a = a | 0;
                            A = A | 0;
                            l = l | 0;
                            o = o | 0;
                            var c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0,
                                D = 0;
                            P = o + -1 | 0;
                            d = P >> 1;
                            s = (u[n >> 0] | 0) << 16 | (u[r >> 0] | 0);
                            b = (u[a >> 0] | 0) << 16 | (u[t >> 0] | 0);
                            p = (s * 3 | 0) + 131074 + b | 0;
                            jt(f[e >> 0] | 0, p >>> 2 & 255, p >>> 18 & 255, A);
                            p = (i | 0) != 0;
                            c = s + 131074 + (b * 3 | 0) | 0;
                            if (p) jt(f[i >> 0] | 0, c >>> 2 & 255, c >>> 18 & 255, l);
                            I = 1;
                            while (1) {
                                if ((I | 0) > (d | 0)) break;
                                w = (u[n + I >> 0] | 0) << 16 | (u[r + I >> 0] | 0);
                                g = (u[a + I >> 0] | 0) << 16 | (u[t + I >> 0] | 0);
                                v = w + b | 0;
                                C = v + 524296 + s + g | 0;
                                v = (C + (v << 1) | 0) >>> 3;
                                C = (C + (g + s << 1) | 0) >>> 3;
                                k = v + s | 0;
                                D = C + w | 0;
                                c = I << 1;
                                s = c + -1 | 0;
                                h = s << 2;
                                jt(f[e + s >> 0] | 0, k >>> 1 & 255, k >>> 17 & 255, A + h | 0);
                                k = I << 3;
                                jt(f[e + c >> 0] | 0, D >>> 1 & 255, D >>> 17 & 255, A + k | 0);
                                if (p) {
                                    C = C + b | 0;
                                    D = v + g | 0;
                                    jt(f[i + s >> 0] | 0, C >>> 1 & 255, C >>> 17 & 255, l + h | 0);
                                    jt(f[i + c >> 0] | 0, D >>> 1 & 255, D >>> 17 & 255, l + k | 0)
                                }
                                I = I + 1 | 0;
                                s = w;
                                b = g
                            }
                            if ((o & 1 | 0) == 0 ? (m = b + 131074 + (s * 3 | 0) | 0, y = P << 2, jt(f[e + P >> 0] | 0, m >>> 2 & 255, m >>> 18 & 255, A + y | 0), m = s + 131074 + (b * 3 | 0) | 0, p) : 0) jt(f[i + P >> 0] | 0, m >>> 2 & 255, m >>> 18 & 255, l + y | 0);
                            return
                        }

                        function lu(e, i, r, f, n, t, a, A, l) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            a = a | 0;
                            A = A | 0;
                            l = l | 0;
                            var o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0;
                            p = l + -1 | 0;
                            I = p >> 1;
                            c = (u[f >> 0] | 0) << 16 | (u[r >> 0] | 0);
                            s = (u[t >> 0] | 0) << 16 | (u[n >> 0] | 0);
                            m = (c * 3 | 0) + 131074 + s | 0;
                            Xt(u[e >> 0] | 0, m >>> 2 & 255, m >>> 18, a);
                            m = (i | 0) != 0;
                            o = c + 131074 + (s * 3 | 0) | 0;
                            if (m) Xt(u[i >> 0] | 0, o >>> 2 & 255, o >>> 18, A);
                            C = 1;
                            while (1) {
                                if ((C | 0) > (I | 0)) break;
                                k = (u[f + C >> 0] | 0) << 16 | (u[r + C >> 0] | 0);
                                w = (u[t + C >> 0] | 0) << 16 | (u[n + C >> 0] | 0);
                                g = k + s | 0;
                                v = g + 524296 + c + w | 0;
                                g = (v + (g << 1) | 0) >>> 3;
                                v = (v + (w + c << 1) | 0) >>> 3;
                                h = g + c | 0;
                                P = v + k | 0;
                                o = C << 1;
                                c = o + -1 | 0;
                                b = c << 1;
                                Xt(u[e + c >> 0] | 0, h >>> 1 & 255, h >>> 17, a + b | 0);
                                h = C << 2;
                                Xt(u[e + o >> 0] | 0, P >>> 1 & 255, P >>> 17, a + h | 0);
                                if (m) {
                                    v = v + s | 0;
                                    P = g + w | 0;
                                    Xt(u[i + c >> 0] | 0, v >>> 1 & 255, v >>> 17, A + b | 0);
                                    Xt(u[i + o >> 0] | 0, P >>> 1 & 255, P >>> 17, A + h | 0)
                                }
                                C = C + 1 | 0;
                                c = k;
                                s = w
                            }
                            if ((l & 1 | 0) == 0 ? (y = s + 131074 + (c * 3 | 0) | 0, d = p << 1, Xt(u[e + p >> 0] | 0, y >>> 2 & 255, y >>> 18, a + d | 0), y = c + 131074 + (s * 3 | 0) | 0, m) : 0) Xt(u[i + p >> 0] | 0, y >>> 2 & 255, y >>> 18, A + d | 0);
                            return
                        }

                        function ou(e, i, r, f, n, t, a, A, l) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            a = a | 0;
                            A = A | 0;
                            l = l | 0;
                            var o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0;
                            p = l + -1 | 0;
                            I = p >> 1;
                            c = (u[f >> 0] | 0) << 16 | (u[r >> 0] | 0);
                            s = (u[t >> 0] | 0) << 16 | (u[n >> 0] | 0);
                            m = (c * 3 | 0) + 131074 + s | 0;
                            Lt(u[e >> 0] | 0, m >>> 2 & 255, m >>> 18, a);
                            m = (i | 0) != 0;
                            o = c + 131074 + (s * 3 | 0) | 0;
                            if (m) Lt(u[i >> 0] | 0, o >>> 2 & 255, o >>> 18, A);
                            C = 1;
                            while (1) {
                                if ((C | 0) > (I | 0)) break;
                                k = (u[f + C >> 0] | 0) << 16 | (u[r + C >> 0] | 0);
                                w = (u[t + C >> 0] | 0) << 16 | (u[n + C >> 0] | 0);
                                g = k + s | 0;
                                v = g + 524296 + c + w | 0;
                                g = (v + (g << 1) | 0) >>> 3;
                                v = (v + (w + c << 1) | 0) >>> 3;
                                h = g + c | 0;
                                P = v + k | 0;
                                o = C << 1;
                                c = o + -1 | 0;
                                b = c << 1;
                                Lt(u[e + c >> 0] | 0, h >>> 1 & 255, h >>> 17, a + b | 0);
                                h = C << 2;
                                Lt(u[e + o >> 0] | 0, P >>> 1 & 255, P >>> 17, a + h | 0);
                                if (m) {
                                    v = v + s | 0;
                                    P = g + w | 0;
                                    Lt(u[i + c >> 0] | 0, v >>> 1 & 255, v >>> 17, A + b | 0);
                                    Lt(u[i + o >> 0] | 0, P >>> 1 & 255, P >>> 17, A + h | 0)
                                }
                                C = C + 1 | 0;
                                c = k;
                                s = w
                            }
                            if ((l & 1 | 0) == 0 ? (y = s + 131074 + (c * 3 | 0) | 0, d = p << 1, Lt(u[e + p >> 0] | 0, y >>> 2 & 255, y >>> 18, a + d | 0), y = c + 131074 + (s * 3 | 0) | 0, m) : 0) Lt(u[i + p >> 0] | 0, y >>> 2 & 255, y >>> 18, A + d | 0);
                            return
                        }

                        function cu(e) {
                            e = e | 0;
                            return e >>> 0 < 11 | 0
                        }

                        function su(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            u = t[r >> 2] | 0;
                            n = t[f >> 2] | 0;
                            A = ((i | 0) < 0) << 31 >> 31;
                            a = ((e | 0) < 0) << 31 >> 31;
                            if ((i | 0) > 0 & (u | 0) == 0) {
                                l = bo(n | 0, ((n | 0) < 0) << 31 >> 31 | 0, e | 0, a | 0) | 0;
                                u = y() | 0;
                                o = ho(i | 0, A | 0, -1, -1) | 0;
                                u = ho(o | 0, y() | 0, l | 0, u | 0) | 0;
                                u = vo(u | 0, y() | 0, i | 0, A | 0) | 0;
                                y() | 0
                            }
                            if ((e | 0) > 0 & (n | 0) == 0) {
                                o = bo(u | 0, ((u | 0) < 0) << 31 >> 31 | 0, i | 0, A | 0) | 0;
                                n = y() | 0;
                                l = ho(e | 0, a | 0, -1, -1) | 0;
                                n = ho(l | 0, y() | 0, o | 0, n | 0) | 0;
                                n = vo(n | 0, y() | 0, e | 0, a | 0) | 0;
                                y() | 0
                            }
                            if ((u | 0) < 1 | (n | 0) < 1) n = 0;
                            else {
                                t[r >> 2] = u;
                                t[f >> 2] = n;
                                n = 1
                            }
                            return n | 0
                        }

                        function bu(e, i) {
                            e = e | 0;
                            i = i | 0;
                            if ((i & -256 | 0) == 512)
                                if (!e) e = 1;
                                else {
                                    i = e + 108 | 0;
                                    do {
                                        t[e >> 2] = 0;
                                        e = e + 4 | 0
                                    } while ((e | 0) < (i | 0));
                                    e = 1
                                }
                            else e = 0;
                            return e | 0
                        }

                        function hu() {
                            t[2132] = 0;
                            t[2133] = 15;
                            t[2134] = 16;
                            t[2135] = 17;
                            t[2128] = 0;
                            t[2129] = 15;
                            t[2130] = 16;
                            t[2131] = 17;
                            return
                        }

                        function ku(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var t = 0,
                                a = 0;
                            if (!e) e = 0;
                            else e = f[e >> 0] | 0;
                            t = 0;
                            while (1) {
                                if ((t | 0) >= (n | 0)) break;
                                a = (u[i + t >> 0] | 0) + (e & 255) & 255;
                                f[r + t >> 0] = a;
                                t = t + 1 | 0;
                                e = a
                            }
                            return
                        }

                        function wu(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var t = 0;
                            e: do {
                                if (!e) ku(0, i, r, n);
                                else {
                                    t = 0;
                                    while (1) {
                                        if ((t | 0) >= (n | 0)) break e;
                                        f[r + t >> 0] = (u[i + t >> 0] | 0) + (u[e + t >> 0] | 0);
                                        t = t + 1 | 0
                                    }
                                }
                            } while (0);
                            return
                        }

                        function gu(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var t = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            e: do {
                                if (!e) ku(0, i, r, n);
                                else {
                                    A = f[e >> 0] | 0;
                                    t = 0;
                                    a = A;
                                    while (1) {
                                        if ((t | 0) >= (n | 0)) break e;
                                        l = f[e + t >> 0] | 0;
                                        o = u[i + t >> 0] | 0;
                                        o = (mu(a, l, A) | 0) + o & 255;
                                        f[r + t >> 0] = o;
                                        t = t + 1 | 0;
                                        a = o;
                                        A = l
                                    }
                                }
                            } while (0);
                            return
                        }

                        function vu(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            Pu(e, i, f, r, n);
                            return
                        }

                        function Cu(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            pu(e, i, f, r, n);
                            return
                        }

                        function Iu(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            du(e, i, f, r, n);
                            return
                        }

                        function du(e, i, r, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0;
                            f[t >> 0] = f[e >> 0] | 0;
                            yu(e + 1 | 0, e, t + 1 | 0, i + -1 | 0);
                            o = ~r;
                            l = 1;
                            while (1) {
                                A = e + r | 0;
                                t = t + r | 0;
                                if ((l | 0) >= (n | 0)) break;
                                yu(A, e, t, 1);
                                a = 1;
                                while (1) {
                                    if ((a | 0) >= (i | 0)) break;
                                    c = mu(f[A + (a + -1) >> 0] | 0, f[e + a >> 0] | 0, f[A + (a + o) >> 0] | 0) | 0;
                                    f[t + a >> 0] = (u[A + a >> 0] | 0) - c;
                                    a = a + 1 | 0
                                }
                                l = l + 1 | 0;
                                e = A
                            }
                            return
                        }

                        function yu(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var t = 0;
                            t = 0;
                            while (1) {
                                if ((t | 0) >= (n | 0)) break;
                                f[r + t >> 0] = (u[e + t >> 0] | 0) - (u[i + t >> 0] | 0);
                                t = t + 1 | 0
                            }
                            return
                        }

                        function mu(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            r = (i & 255) + (e & 255) - (r & 255) | 0;
                            return (r >>> 0 < 256 ? r : (r >> 31 & -255) + 255 | 0) | 0
                        }

                        function pu(e, i, r, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            var u = 0,
                                a = 0;
                            f[t >> 0] = f[e >> 0] | 0;
                            yu(e + 1 | 0, e, t + 1 | 0, i + -1 | 0);
                            a = 1;
                            while (1) {
                                u = e + r | 0;
                                t = t + r | 0;
                                if ((a | 0) >= (n | 0)) break;
                                yu(u, e, t, i);
                                a = a + 1 | 0;
                                e = u
                            }
                            return
                        }

                        function Pu(e, i, r, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            t = t | 0;
                            var u = 0,
                                a = 0;
                            f[t >> 0] = f[e >> 0] | 0;
                            a = i + -1 | 0;
                            yu(e + 1 | 0, e, t + 1 | 0, a);
                            u = 1;
                            i = t;
                            while (1) {
                                t = e + r | 0;
                                i = i + r | 0;
                                if ((u | 0) >= (n | 0)) break;
                                yu(t, e, i, 1);
                                yu(t + 1 | 0, t, i + 1 | 0, a);
                                u = u + 1 | 0;
                                e = t
                            }
                            return
                        }

                        function Du(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0;
                            do {
                                if (e) {
                                    r = (Bu(t[e >> 2] | 0) | 0) == 0;
                                    f = (t[e + 8 >> 2] | 0) + -1 | 0;
                                    if (!r) {
                                        r = e + 20 | 0;
                                        i = t[r >> 2] | 0;
                                        f = v(i, f) | 0;
                                        e = e + 16 | 0;
                                        t[e >> 2] = (t[e >> 2] | 0) + f;
                                        t[r >> 2] = 0 - i;
                                        e = 0;
                                        break
                                    }
                                    u = e + 32 | 0;
                                    i = t[u >> 2] | 0;
                                    a = v(i, f) | 0;
                                    r = e + 16 | 0;
                                    t[r >> 2] = (t[r >> 2] | 0) + a;
                                    t[u >> 2] = 0 - i;
                                    u = f >> 1;
                                    i = e + 36 | 0;
                                    r = t[i >> 2] | 0;
                                    a = v(r, u) | 0;
                                    n = e + 20 | 0;
                                    t[n >> 2] = (t[n >> 2] | 0) + a;
                                    t[i >> 2] = 0 - r;
                                    i = e + 40 | 0;
                                    r = t[i >> 2] | 0;
                                    u = v(r, u) | 0;
                                    n = e + 24 | 0;
                                    t[n >> 2] = (t[n >> 2] | 0) + u;
                                    t[i >> 2] = 0 - r;
                                    i = e + 28 | 0;
                                    r = t[i >> 2] | 0;
                                    if (!r) e = 0;
                                    else {
                                        e = e + 44 | 0;
                                        a = t[e >> 2] | 0;
                                        t[i >> 2] = r + (v(a, f) | 0);
                                        t[e >> 2] = 0 - a;
                                        e = 0
                                    }
                                } else e = 2
                            } while (0);
                            return e | 0
                        }

                        function Bu(e) {
                            e = e | 0;
                            return e >>> 0 < 11 | 0
                        }

                        function Eu(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            s = x;
                            x = x + 16 | 0;
                            l = s + 4 | 0;
                            o = s;
                            do {
                                if (!((i | 0) < 1 | ((e | 0) < 1 | (f | 0) == 0))) {
                                    c = (r | 0) != 0;
                                    if (c) {
                                        if (t[r + 8 >> 2] | 0) {
                                            n = t[r + 20 >> 2] | 0;
                                            A = t[r + 24 >> 2] | 0;
                                            u = t[r + 12 >> 2] | 0;
                                            a = t[r + 16 >> 2] | 0;
                                            if ((A | 0) < 1 | ((n | 0) < 1 | (a | u | 0) < 0)) {
                                                i = 2;
                                                break
                                            }
                                            if (((u & -2) + n | 0) > (e | 0) | ((a & -2) + A | 0) > (i | 0)) {
                                                i = 2;
                                                break
                                            } else {
                                                e = n;
                                                i = A
                                            }
                                        }
                                        if (t[r + 28 >> 2] | 0) {
                                            t[l >> 2] = t[r + 32 >> 2];
                                            t[o >> 2] = t[r + 36 >> 2];
                                            A = (su(e, i, l, o) | 0) == 0;
                                            if (A) {
                                                i = 2;
                                                break
                                            } else {
                                                e = t[l >> 2] | 0;
                                                i = t[o >> 2] | 0
                                            }
                                        }
                                    }
                                    t[f + 4 >> 2] = e;
                                    t[f + 8 >> 2] = i;
                                    i = Ru(f) | 0;
                                    if (!((i | 0) != 0 | c ^ 1))
                                        if (!(t[r + 48 >> 2] | 0)) i = 0;
                                        else i = Du(f) | 0
                                } else i = 2
                            } while (0);
                            x = s;
                            return i | 0
                        }

                        function Ru(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0;
                            u = t[e + 4 >> 2] | 0;
                            n = t[e + 8 >> 2] | 0;
                            k = t[e >> 2] | 0;
                            e: do {
                                if (!((u | 0) < 1 | (n | 0) < 1) ? (Gu(k) | 0) != 0 : 0) {
                                    do {
                                        if ((t[e + 12 >> 2] | 0) < 1 ? (h = e + 80 | 0, (t[h >> 2] | 0) == 0) : 0) {
                                            r = ((u | 0) < 0) << 31 >> 31;
                                            i = f[7788 + k >> 0] | 0;
                                            b = bo(i & 255 | 0, 0, u | 0, r | 0) | 0;
                                            s = y() | 0;
                                            if (s >>> 0 > 0 | (s | 0) == 0 & b >>> 0 > 4294967295) {
                                                i = 2;
                                                break e
                                            }
                                            c = v(u, i & 255) | 0;
                                            i = ((n | 0) < 0) << 31 >> 31;
                                            s = bo(c | 0, ((c | 0) < 0) << 31 >> 31 | 0, n | 0, i | 0) | 0;
                                            o = y() | 0;
                                            b = (Bu(k) | 0) == 0;
                                            if (b) {
                                                l = (u + 1 | 0) / 2 | 0;
                                                a = (n + 1 | 0) / 2 | 0;
                                                a = bo(a | 0, ((a | 0) < 0) << 31 >> 31 | 0, l | 0, ((l | 0) < 0) << 31 >> 31 | 0) | 0;
                                                g = y() | 0;
                                                w = (k | 0) == 12;
                                                A = bo(n | 0, i | 0, u | 0, r | 0) | 0;
                                                r = y() | 0;
                                                u = w ? u : 0;
                                                i = g;
                                                A = w ? A : 0;
                                                r = w ? r : 0
                                            } else {
                                                l = 0;
                                                u = 0;
                                                a = 0;
                                                i = 0;
                                                A = 0;
                                                r = 0
                                            }
                                            n = Io(a | 0, i | 0, 1) | 0;
                                            i = y() | 0;
                                            g = ho(A | 0, r | 0, s | 0, o | 0) | 0;
                                            i = ho(g | 0, y() | 0, n | 0, i | 0) | 0;
                                            i = Ii(i, y() | 0, 1) | 0;
                                            if (!i) {
                                                i = 1;
                                                break e
                                            }
                                            t[h >> 2] = i;
                                            t[e + 16 >> 2] = i;
                                            if (!b) {
                                                t[e + 20 >> 2] = c;
                                                t[e + 24 >> 2] = s;
                                                break
                                            }
                                            t[e + 32 >> 2] = c;
                                            t[e + 48 >> 2] = s;
                                            i = i + s | 0;
                                            t[e + 20 >> 2] = i;
                                            t[e + 36 >> 2] = l;
                                            t[e + 52 >> 2] = a;
                                            t[e + 24 >> 2] = i + a;
                                            t[e + 40 >> 2] = l;
                                            t[e + 56 >> 2] = a;
                                            if ((k | 0) == 12) t[e + 28 >> 2] = i + n;
                                            t[e + 60 >> 2] = A;
                                            t[e + 44 >> 2] = u
                                        }
                                    } while (0);
                                    i = _u(e) | 0
                                } else i = 2
                            } while (0);
                            return i | 0
                        }

                        function Gu(e) {
                            e = e | 0;
                            return e >>> 0 < 13 | 0
                        }

                        function _u(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                C = 0,
                                I = 0;
                            r = t[e >> 2] | 0;
                            a = t[e + 4 >> 2] | 0;
                            i = t[e + 8 >> 2] | 0;
                            e: do {
                                if (!(Gu(r) | 0)) i = 2;
                                else {
                                    do {
                                        if (!(Bu(r) | 0)) {
                                            w = (a + 1 | 0) / 2 | 0;
                                            k = t[e + 32 >> 2] | 0;
                                            k = (k | 0) > -1 ? k : 0 - k | 0;
                                            g = t[e + 36 >> 2] | 0;
                                            g = (g | 0) > -1 ? g : 0 - g | 0;
                                            C = t[e + 40 >> 2] | 0;
                                            C = (C | 0) > -1 ? C : 0 - C | 0;
                                            f = t[e + 44 >> 2] | 0;
                                            f = (f | 0) > -1 ? f : 0 - f | 0;
                                            n = i + -1 | 0;
                                            A = ((n | 0) < 0) << 31 >> 31;
                                            b = bo(k | 0, ((k | 0) < 0) << 31 >> 31 | 0, n | 0, A | 0) | 0;
                                            l = ((a | 0) < 0) << 31 >> 31;
                                            b = ho(b | 0, y() | 0, a | 0, l | 0) | 0;
                                            h = y() | 0;
                                            I = ((i + 1 | 0) / 2 | 0) + -1 | 0;
                                            o = ((I | 0) < 0) << 31 >> 31;
                                            c = bo(g | 0, ((g | 0) < 0) << 31 >> 31 | 0, I | 0, o | 0) | 0;
                                            i = ((w | 0) < 0) << 31 >> 31;
                                            c = ho(c | 0, y() | 0, w | 0, i | 0) | 0;
                                            s = y() | 0;
                                            o = bo(C | 0, ((C | 0) < 0) << 31 >> 31 | 0, I | 0, o | 0) | 0;
                                            i = ho(o | 0, y() | 0, w | 0, i | 0) | 0;
                                            o = y() | 0;
                                            i = (t[e + 24 >> 2] | 0) != 0 & ((t[e + 20 >> 2] | 0) != 0 & ((t[e + 16 >> 2] | 0) != 0 & ((C | 0) >= (w | 0) & ((g | 0) >= (w | 0) & ((k | 0) >= (a | 0) & ((h >>> 0 < 0 | ((h | 0) == 0 ? b >>> 0 <= (t[e + 48 >> 2] | 0) >>> 0 : 0)) & (s >>> 0 < 0 | ((s | 0) == 0 ? c >>> 0 <= (t[e + 52 >> 2] | 0) >>> 0 : 0)) & (o >>> 0 < 0 | ((o | 0) == 0 ? i >>> 0 <= (t[e + 56 >> 2] | 0) >>> 0 : 0))))))));
                                            if ((r | 0) == 12) {
                                                I = bo(f | 0, ((f | 0) < 0) << 31 >> 31 | 0, n | 0, A | 0) | 0;
                                                I = ho(I | 0, y() | 0, a | 0, l | 0) | 0;
                                                C = y() | 0;
                                                if ((t[e + 28 >> 2] | 0) != 0 & ((f | 0) >= (a | 0) & i & (C >>> 0 < 0 | ((C | 0) == 0 ? I >>> 0 <= (t[e + 60 >> 2] | 0) >>> 0 : 0)))) break;
                                                else {
                                                    i = 2;
                                                    break e
                                                }
                                            } else if (i) break;
                                            else {
                                                i = 2;
                                                break e
                                            }
                                        } else {
                                            w = t[e + 20 >> 2] | 0;
                                            w = (w | 0) > -1 ? w : 0 - w | 0;
                                            C = i + -1 | 0;
                                            C = bo(w | 0, ((w | 0) < 0) << 31 >> 31 | 0, C | 0, ((C | 0) < 0) << 31 >> 31 | 0) | 0;
                                            I = y() | 0;
                                            g = v(a, u[7788 + r >> 0] | 0) | 0;
                                            I = ho(C | 0, I | 0, g | 0, ((g | 0) < 0) << 31 >> 31 | 0) | 0;
                                            C = y() | 0;
                                            if (!((t[e + 16 >> 2] | 0) != 0 & ((w | 0) >= (g | 0) & (C >>> 0 < 0 | ((C | 0) == 0 ? I >>> 0 <= (t[e + 24 >> 2] | 0) >>> 0 : 0))))) {
                                                i = 2;
                                                break e
                                            }
                                        }
                                    } while (0);
                                    i = 0
                                }
                            } while (0);
                            return i | 0
                        }

                        function Fu(e, i) {
                            e = e | 0;
                            i = i | 0;
                            if ((e | 0) == 0 | (i & -256 | 0) != 512) e = 0;
                            else {
                                i = e + 84 | 0;
                                do {
                                    t[e >> 2] = 0;
                                    e = e + 4 | 0
                                } while ((e | 0) < (i | 0));
                                e = 1
                            }
                            return e | 0
                        }

                        function Su(e) {
                            e = e | 0;
                            var i = 0;
                            if (e | 0) {
                                i = e + 80 | 0;
                                if ((t[e + 12 >> 2] | 0) < 1) $e(t[i >> 2] | 0);
                                t[i >> 2] = 0
                            }
                            return
                        }

                        function xu(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                a = 0,
                                A = 0;
                            n = e + 4 | 0;
                            t[i + 4 >> 2] = t[n >> 2];
                            a = e + 8 | 0;
                            t[i + 8 >> 2] = t[a >> 2];
                            do {
                                if (!(_u(i) | 0)) {
                                    r = t[e >> 2] | 0;
                                    A = (Bu(r) | 0) == 0;
                                    f = t[e + 16 >> 2] | 0;
                                    if (!A) {
                                        A = v(t[n >> 2] | 0, u[7788 + r >> 0] | 0) | 0;
                                        Qu(f, t[e + 20 >> 2] | 0, t[i + 16 >> 2] | 0, t[i + 20 >> 2] | 0, A, t[a >> 2] | 0);
                                        e = 0;
                                        break
                                    }
                                    Qu(f, t[e + 32 >> 2] | 0, t[i + 16 >> 2] | 0, t[i + 32 >> 2] | 0, t[n >> 2] | 0, t[a >> 2] | 0);
                                    Qu(t[e + 20 >> 2] | 0, t[e + 36 >> 2] | 0, t[i + 20 >> 2] | 0, t[i + 36 >> 2] | 0, ((t[n >> 2] | 0) + 1 | 0) / 2 | 0, ((t[a >> 2] | 0) + 1 | 0) / 2 | 0);
                                    Qu(t[e + 24 >> 2] | 0, t[e + 40 >> 2] | 0, t[i + 24 >> 2] | 0, t[i + 40 >> 2] | 0, ((t[n >> 2] | 0) + 1 | 0) / 2 | 0, ((t[a >> 2] | 0) + 1 | 0) / 2 | 0);
                                    if (!(Hu(t[e >> 2] | 0) | 0)) e = 0;
                                    else {
                                        Qu(t[e + 28 >> 2] | 0, t[e + 44 >> 2] | 0, t[i + 28 >> 2] | 0, t[i + 44 >> 2] | 0, t[n >> 2] | 0, t[a >> 2] | 0);
                                        e = 0
                                    }
                                } else e = 2
                            } while (0);
                            return e | 0
                        }

                        function Qu(e, i, r, f, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            while (1) {
                                if ((t | 0) <= 0) break;
                                mo(r | 0, e | 0, n | 0) | 0;
                                t = t + -1 | 0;
                                e = e + i | 0;
                                r = r + f | 0
                            }
                            return
                        }

                        function Hu(e) {
                            e = e | 0;
                            switch (e | 0) {
                                case 1:
                                case 3:
                                case 4:
                                case 5:
                                case 12: {
                                    e = 1;
                                    break
                                }
                                default:
                                    e = (Mu(e) | 0) != 0 & 1
                            }
                            return e | 0
                        }

                        function Mu(e) {
                            e = e | 0;
                            return (e + -7 | 0) >>> 0 < 4 | 0
                        }

                        function Vu(e, i) {
                            e = e | 0;
                            i = i | 0;
                            if ((t[e + 12 >> 2] | 0) > 1 ? (i | 0) != 0 & (Mu(t[e >> 2] | 0) | 0) != 0 : 0) e = (t[i + 8 >> 2] | 0) != 0 & 1;
                            else e = 0;
                            return e | 0
                        }

                        function Yu(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                a = 0;
                            do {
                                if (e | 0) {
                                    r = t[e + 44 >> 2] | 0;
                                    do {
                                        if ((r | 0) >= 0) {
                                            if ((r | 0) <= 100) {
                                                r = r * 255 | 0;
                                                if ((r | 0) > 99) a = (r | 0) / 100 | 0;
                                                else break
                                            } else a = 255;
                                            f = 0;
                                            n = 0;
                                            while (1) {
                                                if ((f | 0) == 4) break;
                                                r = t[i + 776 + (f << 5) + 24 >> 2] | 0;
                                                if ((r | 0) < 12) {
                                                    r = (v(a, u[7801 + ((r | 0) > 0 ? r : 0) >> 0] | 0) | 0) >> 3;
                                                    t[i + 776 + (f << 5) + 28 >> 2] = r
                                                } else r = t[i + 776 + (f << 5) + 28 >> 2] | 0;
                                                f = f + 1 | 0;
                                                n = r | n
                                            }
                                            if (n | 0) {
                                                Uu(i + 544 | 0, 1.0);
                                                t[i + 540 >> 2] = 1
                                            }
                                        }
                                    } while (0);
                                    f = t[e + 52 >> 2] | 0;
                                    r = i + 2372 | 0;
                                    t[r >> 2] = f;
                                    if ((f | 0) > 100) {
                                        t[r >> 2] = 100;
                                        break
                                    }
                                    if ((f | 0) < 0) t[r >> 2] = 0
                                }
                            } while (0);
                            return
                        }

                        function Uu(e, i) {
                            e = e | 0;
                            i = +i;
                            var r = 0;
                            mo(e + 8 | 0, 3936, 220) | 0;
                            t[e >> 2] = 0;
                            t[e + 4 >> 2] = 31;
                            if (!(i < 0.0))
                                if (i > 1.0) r = 256;
                                else r = ~~(i * 256.0) >>> 0;
                            else r = 0;
                            t[e + 228 >> 2] = r;
                            return
                        }

                        function Zu(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0;
                            l = e + 160 | 0;
                            if ((t[e + 2308 >> 2] | 0) > 0 ? (r = t[e + 2300 >> 2] | 0, (r | 0) >= (t[e + 300 >> 2] | 0)) : 0) u = (r | 0) <= (t[e + 308 >> 2] | 0);
                            else u = 0;
                            n = u & 1;
                            a = e + 148 | 0;
                            if (t[a >> 2] | 0) {
                                A = e + 124 | 0;
                                if (!((jo[t[(Lu() | 0) + 8 >> 2] & 15](A) | 0) & 1)) r = 0;
                                else {
                                    f = e + 180 | 0;
                                    r = f + 108 | 0;
                                    do {
                                        t[f >> 2] = t[i >> 2];
                                        f = f + 4 | 0;
                                        i = i + 4 | 0
                                    } while ((f | 0) < (r | 0));
                                    r = e + 152 | 0;
                                    t[l >> 2] = t[r >> 2];
                                    t[e + 164 >> 2] = t[e + 2300 >> 2];
                                    t[e + 168 >> 2] = n;
                                    if ((t[a >> 2] | 0) == 2) {
                                        n = e + 176 | 0;
                                        a = t[n >> 2] | 0;
                                        l = e + 2304 | 0;
                                        t[n >> 2] = t[l >> 2];
                                        t[l >> 2] = a
                                    } else Wu(e, l);
                                    if (u) {
                                        u = e + 172 | 0;
                                        a = t[u >> 2] | 0;
                                        l = e + 2260 | 0;
                                        t[u >> 2] = t[l >> 2];
                                        t[l >> 2] = a
                                    }
                                    rc[t[(Lu() | 0) + 12 >> 2] & 31](A);
                                    l = (t[r >> 2] | 0) + 1 | 0;
                                    t[r >> 2] = (l | 0) == (t[e + 156 >> 2] | 0) ? 0 : l;
                                    return 1
                                }
                            } else {
                                t[e + 164 >> 2] = t[e + 2300 >> 2];
                                t[e + 168 >> 2] = n;
                                Wu(e, l);
                                r = Tu(e, i) | 0
                            }
                            return r | 0
                        }

                        function Wu(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                n = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0,
                                D = 0,
                                B = 0,
                                E = 0,
                                R = 0,
                                G = 0,
                                _ = 0,
                                F = 0,
                                S = 0,
                                x = 0,
                                Q = 0,
                                H = 0,
                                M = 0,
                                V = 0,
                                Y = 0;
                            M = t[i + 4 >> 2] | 0;
                            n = t[i >> 2] | 0;
                            A = t[e + 2264 >> 2] | 0;
                            V = A + 40 | 0;
                            Y = A + 584 | 0;
                            r = 0;
                            while (1) {
                                if ((r | 0) == 16) break;
                                f[V + ((r << 5) + -1) >> 0] = -127;
                                r = r + 1 | 0
                            }
                            H = A + 600 | 0;
                            r = 0;
                            while (1) {
                                if ((r | 0) == 8) break;
                                Q = (r << 5) + -1 | 0;
                                f[Y + Q >> 0] = -127;
                                f[H + Q >> 0] = -127;
                                r = r + 1 | 0
                            }
                            x = (M | 0) > 0;
                            if (x) {
                                f[A + 567 >> 0] = -127;
                                f[A + 551 >> 0] = -127;
                                f[A + 7 >> 0] = -127
                            } else {
                                o = A + 7 | 0;
                                c = o + 21 | 0;
                                do {
                                    f[o >> 0] = 127;
                                    o = o + 1 | 0
                                } while ((o | 0) < (c | 0));
                                o = A + 551 | 0;
                                c = o + 9 | 0;
                                do {
                                    f[o >> 0] = 127;
                                    o = o + 1 | 0
                                } while ((o | 0) < (c | 0));
                                o = A + 567 | 0;
                                c = o + 9 | 0;
                                do {
                                    f[o >> 0] = 127;
                                    o = o + 1 | 0
                                } while ((o | 0) < (c | 0))
                            }
                            Q = e + 288 | 0;
                            y = i + 16 | 0;
                            m = e + 2252 | 0;
                            p = A + 8 | 0;
                            P = A + 552 | 0;
                            D = A + 568 | 0;
                            B = e + 292 | 0;
                            E = A + 24 | 0;
                            R = A + 520 | 0;
                            G = A + 808 | 0;
                            _ = A + 824 | 0;
                            F = n << 4;
                            S = e + 2280 | 0;
                            g = n << 3;
                            C = e + 2284 | 0;
                            I = e + 2268 | 0;
                            d = e + 2272 | 0;
                            h = e + 2276 | 0;
                            k = A + 408 | 0;
                            w = A + 280 | 0;
                            b = A + 152 | 0;
                            s = 0;
                            while (1) {
                                if ((s | 0) >= (t[Q >> 2] | 0)) break;
                                A = t[y >> 2] | 0;
                                e: do {
                                    if (s | 0) {
                                        r = -1;
                                        while (1) {
                                            if ((r | 0) == 16) break;
                                            c = r << 5;
                                            ta(V + (c + -4) | 0, V + (c | 12) | 0);
                                            r = r + 1 | 0
                                        }
                                        r = -1;
                                        while (1) {
                                            if ((r | 0) == 8) break e;
                                            c = r << 5;
                                            o = c + -4 | 0;
                                            c = c | 4;
                                            ta(Y + o | 0, Y + c | 0);
                                            ta(H + o | 0, H + c | 0);
                                            r = r + 1 | 0
                                        }
                                    }
                                } while (0);
                                n = t[m >> 2] | 0;
                                e = n + (s << 5) | 0;
                                r = t[A + (s * 800 | 0) + 788 >> 2] | 0;
                                if (x) {
                                    o = p;
                                    l = e;
                                    c = o + 16 | 0;
                                    do {
                                        f[o >> 0] = f[l >> 0] | 0;
                                        o = o + 1 | 0;
                                        l = l + 1 | 0
                                    } while ((o | 0) < (c | 0));
                                    i = n + (s << 5) + 16 | 0;
                                    l = i;
                                    l = u[l >> 0] | u[l + 1 >> 0] << 8 | u[l + 2 >> 0] << 16 | u[l + 3 >> 0] << 24;
                                    i = i + 4 | 0;
                                    i = u[i >> 0] | u[i + 1 >> 0] << 8 | u[i + 2 >> 0] << 16 | u[i + 3 >> 0] << 24;
                                    o = P;
                                    c = o;
                                    f[c >> 0] = l;
                                    f[c + 1 >> 0] = l >> 8;
                                    f[c + 2 >> 0] = l >> 16;
                                    f[c + 3 >> 0] = l >> 24;
                                    o = o + 4 | 0;
                                    f[o >> 0] = i;
                                    f[o + 1 >> 0] = i >> 8;
                                    f[o + 2 >> 0] = i >> 16;
                                    f[o + 3 >> 0] = i >> 24;
                                    o = n + (s << 5) + 24 | 0;
                                    i = o;
                                    i = u[i >> 0] | u[i + 1 >> 0] << 8 | u[i + 2 >> 0] << 16 | u[i + 3 >> 0] << 24;
                                    o = o + 4 | 0;
                                    o = u[o >> 0] | u[o + 1 >> 0] << 8 | u[o + 2 >> 0] << 16 | u[o + 3 >> 0] << 24;
                                    c = D;
                                    l = c;
                                    f[l >> 0] = i;
                                    f[l + 1 >> 0] = i >> 8;
                                    f[l + 2 >> 0] = i >> 16;
                                    f[l + 3 >> 0] = i >> 24;
                                    c = c + 4 | 0;
                                    f[c >> 0] = o;
                                    f[c + 1 >> 0] = o >> 8;
                                    f[c + 2 >> 0] = o >> 16;
                                    f[c + 3 >> 0] = o >> 24
                                }
                                e: do {
                                    if (!(f[A + (s * 800 | 0) + 768 >> 0] | 0)) {
                                        rc[t[8400 + ((aa(s, M, f[A + (s * 800 | 0) + 769 >> 0] & 255) | 0) << 2) >> 2] & 31](V);
                                        if (r | 0) {
                                            i = 0;
                                            while (1) {
                                                if ((i | 0) == 16) break e;
                                                ua(r, A + (s * 800 | 0) + (i << 4 << 1) | 0, V + (a[4160 + (i << 1) >> 1] | 0) | 0);
                                                r = r << 2;
                                                i = i + 1 | 0
                                            }
                                        }
                                    } else {
                                        do {
                                            if (x)
                                                if ((s | 0) < ((t[Q >> 2] | 0) + -1 | 0)) {
                                                    i = e + 32 | 0;
                                                    i = u[i >> 0] | u[i + 1 >> 0] << 8 | u[i + 2 >> 0] << 16 | u[i + 3 >> 0] << 24;
                                                    f[E >> 0] = i;
                                                    f[E + 1 >> 0] = i >> 8;
                                                    f[E + 2 >> 0] = i >> 16;
                                                    f[E + 3 >> 0] = i >> 24;
                                                    break
                                                } else {
                                                    i = f[n + (s << 5) + 15 >> 0] | 0;
                                                    Po(E | 0, i | 0, 4) | 0;
                                                    i = i & 255;
                                                    i = i << 8 | i;
                                                    i = i | i << 16;
                                                    break
                                                }
                                            else i = t[E >> 2] | 0
                                        } while (0);
                                        t[k >> 2] = i;
                                        t[w >> 2] = i;
                                        t[b >> 2] = i;
                                        i = 0;
                                        while (1) {
                                            if ((i | 0) == 16) break e;
                                            c = V + (a[4160 + (i << 1) >> 1] | 0) | 0;
                                            rc[t[8432 + ((f[A + (s * 800 | 0) + 769 + i >> 0] & 255) << 2) >> 2] & 31](c);
                                            ua(r, A + (s * 800 | 0) + (i << 4 << 1) | 0, c);
                                            r = r << 2;
                                            i = i + 1 | 0
                                        }
                                    }
                                } while (0);
                                c = t[A + (s * 800 | 0) + 792 >> 2] | 0;
                                o = 8480 + ((aa(s, M, u[A + (s * 800 | 0) + 785 >> 0] | 0) | 0) << 2) | 0;
                                rc[t[o >> 2] & 31](Y);
                                rc[t[o >> 2] & 31](H);
                                Aa(c, A + (s * 800 | 0) + 512 | 0, Y);
                                Aa(c >>> 8, A + (s * 800 | 0) + 640 | 0, H);
                                if ((M | 0) < ((t[B >> 2] | 0) + -1 | 0)) {
                                    o = e;
                                    l = R;
                                    c = o + 16 | 0;
                                    do {
                                        f[o >> 0] = f[l >> 0] | 0;
                                        o = o + 1 | 0;
                                        l = l + 1 | 0
                                    } while ((o | 0) < (c | 0));
                                    A = G;
                                    l = A;
                                    l = u[l >> 0] | u[l + 1 >> 0] << 8 | u[l + 2 >> 0] << 16 | u[l + 3 >> 0] << 24;
                                    A = A + 4 | 0;
                                    A = u[A >> 0] | u[A + 1 >> 0] << 8 | u[A + 2 >> 0] << 16 | u[A + 3 >> 0] << 24;
                                    o = n + (s << 5) + 16 | 0;
                                    c = o;
                                    f[c >> 0] = l;
                                    f[c + 1 >> 0] = l >> 8;
                                    f[c + 2 >> 0] = l >> 16;
                                    f[c + 3 >> 0] = l >> 24;
                                    o = o + 4 | 0;
                                    f[o >> 0] = A;
                                    f[o + 1 >> 0] = A >> 8;
                                    f[o + 2 >> 0] = A >> 16;
                                    f[o + 3 >> 0] = A >> 24;
                                    o = _;
                                    A = o;
                                    A = u[A >> 0] | u[A + 1 >> 0] << 8 | u[A + 2 >> 0] << 16 | u[A + 3 >> 0] << 24;
                                    o = o + 4 | 0;
                                    o = u[o >> 0] | u[o + 1 >> 0] << 8 | u[o + 2 >> 0] << 16 | u[o + 3 >> 0] << 24;
                                    c = n + (s << 5) + 24 | 0;
                                    l = c;
                                    f[l >> 0] = A;
                                    f[l + 1 >> 0] = A >> 8;
                                    f[l + 2 >> 0] = A >> 16;
                                    f[l + 3 >> 0] = A >> 24;
                                    c = c + 4 | 0;
                                    f[c >> 0] = o;
                                    f[c + 1 >> 0] = o >> 8;
                                    f[c + 2 >> 0] = o >> 16;
                                    f[c + 3 >> 0] = o >> 24
                                }
                                n = v(F, t[S >> 2] | 0) | 0;
                                i = t[C >> 2] | 0;
                                n = (t[I >> 2] | 0) + (s << 4) + n | 0;
                                A = s << 3;
                                e = (t[d >> 2] | 0) + A | 0;
                                A = (t[h >> 2] | 0) + A | 0;
                                r = 0;
                                while (1) {
                                    if ((r | 0) == 16) break;
                                    o = n + (v(t[S >> 2] | 0, r) | 0) | 0;
                                    l = V + (r << 5) | 0;
                                    c = o + 16 | 0;
                                    do {
                                        f[o >> 0] = f[l >> 0] | 0;
                                        o = o + 1 | 0;
                                        l = l + 1 | 0
                                    } while ((o | 0) < (c | 0));
                                    r = r + 1 | 0
                                }
                                i = v(i, g) | 0;
                                n = e + i | 0;
                                i = A + i | 0;
                                r = 0;
                                while (1) {
                                    if ((r | 0) == 8) break;
                                    c = n + (v(t[C >> 2] | 0, r) | 0) | 0;
                                    o = r << 5;
                                    A = Y + o | 0;
                                    e = A;
                                    e = u[e >> 0] | u[e + 1 >> 0] << 8 | u[e + 2 >> 0] << 16 | u[e + 3 >> 0] << 24;
                                    A = A + 4 | 0;
                                    A = u[A >> 0] | u[A + 1 >> 0] << 8 | u[A + 2 >> 0] << 16 | u[A + 3 >> 0] << 24;
                                    l = c;
                                    f[l >> 0] = e;
                                    f[l + 1 >> 0] = e >> 8;
                                    f[l + 2 >> 0] = e >> 16;
                                    f[l + 3 >> 0] = e >> 24;
                                    c = c + 4 | 0;
                                    f[c >> 0] = A;
                                    f[c + 1 >> 0] = A >> 8;
                                    f[c + 2 >> 0] = A >> 16;
                                    f[c + 3 >> 0] = A >> 24;
                                    c = i + (v(t[C >> 2] | 0, r) | 0) | 0;
                                    o = H + o | 0;
                                    A = o;
                                    A = u[A >> 0] | u[A + 1 >> 0] << 8 | u[A + 2 >> 0] << 16 | u[A + 3 >> 0] << 24;
                                    o = o + 4 | 0;
                                    o = u[o >> 0] | u[o + 1 >> 0] << 8 | u[o + 2 >> 0] << 16 | u[o + 3 >> 0] << 24;
                                    l = c;
                                    f[l >> 0] = A;
                                    f[l + 1 >> 0] = A >> 8;
                                    f[l + 2 >> 0] = A >> 16;
                                    f[l + 3 >> 0] = A >> 24;
                                    c = c + 4 | 0;
                                    f[c >> 0] = o;
                                    f[c + 1 >> 0] = o >> 8;
                                    f[c + 2 >> 0] = o >> 16;
                                    f[c + 3 >> 0] = o >> 24;
                                    r = r + 1 | 0
                                }
                                s = s + 1 | 0
                            }
                            return
                        }

                        function Tu(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0,
                                D = 0,
                                B = 0;
                            r = e + 160 | 0;
                            y = t[r >> 2] | 0;
                            l = u[7813 + (t[e + 2308 >> 2] | 0) >> 0] | 0;
                            D = e + 2280 | 0;
                            n = t[D >> 2] | 0;
                            s = v(n, l) | 0;
                            b = e + 2284 | 0;
                            A = t[b >> 2] | 0;
                            h = v(l >>> 1, A) | 0;
                            n = v(n, y << 4) | 0;
                            A = v(A, y << 3) | 0;
                            k = e + 2268 | 0;
                            w = 0 - s | 0;
                            g = (t[k >> 2] | 0) + w + n | 0;
                            C = e + 2272 | 0;
                            I = 0 - h | 0;
                            d = (t[C >> 2] | 0) + I + A | 0;
                            m = e + 2276 | 0;
                            p = (t[m >> 2] | 0) + I + A | 0;
                            f = t[e + 164 >> 2] | 0;
                            a = (f | 0) == 0;
                            P = (f | 0) >= ((t[e + 308 >> 2] | 0) + -1 | 0);
                            if ((t[e + 148 >> 2] | 0) == 2) Wu(e, r);
                            if (t[e + 168 >> 2] | 0) $u(e);
                            if (t[e + 540 >> 2] | 0) ea(e);
                            c = i + 44 | 0;
                            do {
                                if (t[c >> 2] | 0) {
                                    f = f << 4;
                                    if (a) {
                                        t[i + 20 >> 2] = (t[k >> 2] | 0) + n;
                                        t[i + 24 >> 2] = (t[C >> 2] | 0) + A;
                                        n = 0;
                                        r = (t[m >> 2] | 0) + A | 0
                                    } else {
                                        t[i + 20 >> 2] = g;
                                        t[i + 24 >> 2] = d;
                                        n = f - l | 0;
                                        r = p
                                    }
                                    t[i + 28 >> 2] = r;
                                    A = f + 16 + (P ? 0 : 0 - l | 0) | 0;
                                    l = t[i + 88 >> 2] | 0;
                                    A = (A | 0) > (l | 0) ? l : A;
                                    l = i + 104 | 0;
                                    t[l >> 2] = 0;
                                    if ((t[e + 2348 >> 2] | 0) != 0 & (A | 0) > (n | 0)) {
                                        r = Ai(e, i, n, A - n | 0) | 0;
                                        t[l >> 2] = r;
                                        if (!r) {
                                            r = ia(e, 3, 7816) | 0;
                                            break
                                        }
                                    } else r = 0;
                                    a = t[i + 84 >> 2] | 0;
                                    if ((a | 0) > (n | 0)) {
                                        f = a - n | 0;
                                        o = v(t[D >> 2] | 0, f) | 0;
                                        n = i + 20 | 0;
                                        t[n >> 2] = (t[n >> 2] | 0) + o;
                                        n = v(t[b >> 2] | 0, f >> 1) | 0;
                                        o = i + 24 | 0;
                                        t[o >> 2] = (t[o >> 2] | 0) + n;
                                        o = i + 28 | 0;
                                        t[o >> 2] = (t[o >> 2] | 0) + n;
                                        if (!r) {
                                            n = a;
                                            r = 0
                                        } else {
                                            r = r + (v(t[i >> 2] | 0, f) | 0) | 0;
                                            t[l >> 2] = r;
                                            n = a
                                        }
                                    }
                                    if ((A | 0) > (n | 0)) {
                                        f = t[i + 76 >> 2] | 0;
                                        B = i + 20 | 0;
                                        t[B >> 2] = (t[B >> 2] | 0) + f;
                                        B = f >> 1;
                                        o = i + 24 | 0;
                                        t[o >> 2] = (t[o >> 2] | 0) + B;
                                        o = i + 28 | 0;
                                        t[o >> 2] = (t[o >> 2] | 0) + B;
                                        if (r | 0) t[l >> 2] = r + f;
                                        t[i + 8 >> 2] = n - a;
                                        t[i + 12 >> 2] = (t[i + 80 >> 2] | 0) - f;
                                        t[i + 16 >> 2] = A - n;
                                        r = jo[t[c >> 2] & 15](i) | 0;
                                        o = 21
                                    } else {
                                        r = 1;
                                        o = 21
                                    }
                                } else {
                                    r = 1;
                                    o = 21
                                }
                            } while (0);
                            if ((o | 0) == 21)
                                if (!(P | (y + 1 | 0) != (t[e + 156 >> 2] | 0))) {
                                    mo((t[k >> 2] | 0) + w | 0, g + (t[D >> 2] << 4) | 0, s | 0) | 0;
                                    mo((t[C >> 2] | 0) + I | 0, d + (t[b >> 2] << 3) | 0, h | 0) | 0;
                                    mo((t[m >> 2] | 0) + I | 0, p + (t[b >> 2] << 3) | 0, h | 0) | 0
                                } return r | 0
                        }

                        function Lu() {
                            return 7740
                        }

                        function zu(e) {
                            e = e | 0;
                            t[e >> 2] = 0;
                            t[e + 4 >> 2] = 0;
                            t[e + 8 >> 2] = 0;
                            t[e + 12 >> 2] = 0;
                            t[e + 16 >> 2] = 0;
                            t[e + 20 >> 2] = 0;
                            return
                        }

                        function Ju(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            t[e + 20 >> 2] = 0;
                            f = e + 4 | 0;
                            i = t[f >> 2] | 0;
                            e: do {
                                switch (i | 0) {
                                    case 0: {
                                        i = Df(1, 0, 80) | 0;
                                        t[e >> 2] = i;
                                        if (!i) i = 0;
                                        else {
                                            do {
                                                if (!(uo(i, 0) | 0)) {
                                                    r = i + 28 | 0;
                                                    if (E(r | 0, 0) | 0) {
                                                        lo(i) | 0;
                                                        break
                                                    }
                                                    ao(i) | 0;
                                                    if (!(_(i + 76 | 0, 0, 9, e | 0) | 0)) {
                                                        t[f >> 2] = 1;
                                                        Ao(i) | 0;
                                                        i = 1;
                                                        break e
                                                    } else {
                                                        Ao(i) | 0;
                                                        lo(i) | 0;
                                                        B(r | 0) | 0;
                                                        break
                                                    }
                                                }
                                            } while (0);
                                            $e(i);
                                            t[e >> 2] = 0;
                                            i = 0
                                        }
                                        break
                                    }
                                    case 1:
                                        break;
                                    default:
                                        i = Ou(e) | 0
                                }
                            } while (0);
                            return i | 0
                        }

                        function Ou(e) {
                            e = e | 0;
                            ju(e, 1);
                            return (t[e + 20 >> 2] | 0) == 0 | 0
                        }

                        function qu(e) {
                            e = e | 0;
                            ju(e, 2);
                            return
                        }

                        function Ku(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0;
                            i = t[e + 8 >> 2] | 0;
                            if (i | 0) {
                                r = (No[i & 31](t[e + 12 >> 2] | 0, t[e + 16 >> 2] | 0) | 0) == 0 & 1;
                                i = e + 20 | 0;
                                t[i >> 2] = t[i >> 2] | r
                            }
                            return
                        }

                        function Xu(e) {
                            e = e | 0;
                            var i = 0;
                            i = t[e >> 2] | 0;
                            if (i | 0) {
                                ju(e, 0);
                                F(t[i + 76 >> 2] | 0, 0) | 0;
                                lo(i) | 0;
                                B(i + 28 | 0) | 0;
                                $e(i);
                                t[e >> 2] = 0
                            }
                            return
                        }

                        function ju(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0;
                            n = t[e >> 2] | 0;
                            if (n | 0) {
                                ao(n) | 0;
                                r = e + 4 | 0;
                                e = t[r >> 2] | 0;
                                if (e | 0) {
                                    f = n + 28 | 0;
                                    while (1) {
                                        if ((e | 0) == 1) break;
                                        G(f | 0, n | 0) | 0;
                                        e = t[r >> 2] | 0
                                    }
                                    if ((i | 0) != 1) {
                                        t[r >> 2] = i;
                                        R(f | 0) | 0
                                    }
                                }
                                Ao(n) | 0
                            }
                            return
                        }

                        function Nu(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                u = 0;
                            r = t[e >> 2] | 0;
                            f = e + 4 | 0;
                            n = r + 28 | 0;
                            i = 0;
                            while (1) {
                                if (i | 0) break;
                                ao(r) | 0;
                                e: while (1) {
                                    switch (t[f >> 2] | 0) {
                                        case 2: {
                                            u = 6;
                                            break e
                                        }
                                        case 0: {
                                            i = 1;
                                            break e
                                        }
                                        case 1:
                                            break;
                                        default: {
                                            u = 7;
                                            break e
                                        }
                                    }
                                    G(n | 0, r | 0) | 0
                                }
                                if ((u | 0) == 6) {
                                    u = 0;
                                    rc[t[7756 >> 2] & 31](e);
                                    t[f >> 2] = 1;
                                    i = 0
                                } else if ((u | 0) == 7) {
                                    u = 0;
                                    i = 0
                                }
                                R(n | 0) | 0;
                                Ao(r) | 0
                            }
                            return 0
                        }

                        function $u(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            r = t[e + 164 >> 2] | 0;
                            f = e + 304 | 0;
                            i = t[e + 296 >> 2] | 0;
                            while (1) {
                                if ((i | 0) >= (t[f >> 2] | 0)) break;
                                na(e, i, r);
                                i = i + 1 | 0
                            }
                            return
                        }

                        function ea(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0;
                            a = e + 304 | 0;
                            A = e + 176 | 0;
                            l = e + 2284 | 0;
                            o = e + 160 | 0;
                            c = e + 2272 | 0;
                            s = e + 2276 | 0;
                            b = e + 544 | 0;
                            e = t[e + 296 >> 2] | 0;
                            while (1) {
                                if ((e | 0) >= (t[a >> 2] | 0)) break;
                                i = t[l >> 2] | 0;
                                r = (t[A >> 2] | 0) + (e * 800 | 0) + 796 | 0;
                                n = f[r >> 0] | 0;
                                if ((n & 255) > 3) {
                                    w = v(t[o >> 2] << 3, i) | 0;
                                    k = e << 3;
                                    h = (t[s >> 2] | 0) + w + k | 0;
                                    ra(b, (t[c >> 2] | 0) + w + k | 0, i, n & 255);
                                    ra(b, h, i, u[r >> 0] | 0)
                                }
                                e = e + 1 | 0
                            }
                            return
                        }

                        function ia(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            if (!(t[e >> 2] | 0)) {
                                t[e >> 2] = i;
                                t[e + 8 >> 2] = r;
                                t[e + 4 >> 2] = 0
                            }
                            return 0
                        }

                        function ra(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var t = 0,
                                u = 0,
                                a = 0;
                            a = x;
                            x = x + 64 | 0;
                            u = a;
                            t = 0;
                            while (1) {
                                if ((t | 0) == 64) break;
                                f[u + t >> 0] = fa(e, n) | 0;
                                t = t + 1 | 0
                            }
                            AA(u, i, r);
                            x = a;
                            return
                        }

                        function fa(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0;
                            n = e + 8 + (t[e >> 2] << 2) | 0;
                            f = e + 4 | 0;
                            r = (t[n >> 2] | 0) - (t[e + 8 + (t[f >> 2] << 2) >> 2] | 0) | 0;
                            t[n >> 2] = r & 2147483647;
                            n = (t[e >> 2] | 0) + 1 | 0;
                            t[e >> 2] = (n | 0) == 55 ? 0 : n;
                            e = (t[f >> 2] | 0) + 1 | 0;
                            t[f >> 2] = (e | 0) == 55 ? 0 : e;
                            return ((v(r << 1 >> 24, i) | 0) >> 8) + 128 | 0
                        }

                        function na(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0;
                            n = t[e + 160 >> 2] | 0;
                            k = t[e + 2280 >> 2] | 0;
                            o = t[e + 172 >> 2] | 0;
                            b = (t[e + 2268 >> 2] | 0) + (v(n << 4, k) | 0) + (i << 4) | 0;
                            c = u[o + (i << 2) + 1 >> 0] | 0;
                            s = f[o + (i << 2) >> 0] | 0;
                            h = s & 255;
                            do {
                                if (s << 24 >> 24)
                                    if ((t[e + 2308 >> 2] | 0) == 1) {
                                        if ((i | 0) > 0) Fa(b, k, h + 4 | 0);
                                        n = o + (i << 2) + 2 | 0;
                                        if (f[n >> 0] | 0) xa(b, k, h);
                                        if ((r | 0) > 0) _a(b, k, h + 4 | 0);
                                        if (!(f[n >> 0] | 0)) break;
                                        Sa(b, k, h);
                                        break
                                    } else {
                                        s = t[e + 2284 >> 2] | 0;
                                        A = v(s, n << 3) | 0;
                                        a = i << 3;
                                        l = (t[e + 2272 >> 2] | 0) + A + a | 0;
                                        e = (t[e + 2276 >> 2] | 0) + A + a | 0;
                                        a = u[o + (i << 2) + 3 >> 0] | 0;
                                        A = h + 4 | 0;
                                        if ((i | 0) > 0) {
                                            Ea(b, k, A, c, a);
                                            Ha(l, e, s, A, c, a)
                                        }
                                        n = o + (i << 2) + 2 | 0;
                                        if (f[n >> 0] | 0) {
                                            Qa(b, k, h, c, a);
                                            Ma(l, e, s, h, c, a)
                                        }
                                        if ((r | 0) > 0) {
                                            Da(b, k, A, c, a);
                                            Ra(l, e, s, A, c, a)
                                        }
                                        if (!(f[n >> 0] | 0)) break;
                                        Ba(b, k, h, c, a);
                                        Ga(l, e, s, h, c, a);
                                        break
                                    }
                            } while (0);
                            return
                        }

                        function ta(e, i) {
                            e = e | 0;
                            i = i | 0;
                            i = u[i >> 0] | u[i + 1 >> 0] << 8 | u[i + 2 >> 0] << 16 | u[i + 3 >> 0] << 24;
                            f[e >> 0] = i;
                            f[e + 1 >> 0] = i >> 8;
                            f[e + 2 >> 0] = i >> 16;
                            f[e + 3 >> 0] = i >> 24;
                            return
                        }

                        function ua(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            switch (e >>> 30 & 3) {
                                case 3: {
                                    da(i, r, 0);
                                    break
                                }
                                case 2: {
                                    ma(i, r);
                                    break
                                }
                                case 1: {
                                    ya(i, r);
                                    break
                                }
                                default: {}
                            }
                            return
                        }

                        function aa(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            do {
                                if (!r) {
                                    r = (i | 0) == 0;
                                    if (!e) {
                                        r = r ? 6 : 5;
                                        break
                                    } else {
                                        r = r ? 4 : 0;
                                        break
                                    }
                                }
                            } while (0);
                            return r | 0
                        }

                        function Aa(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            do {
                                if (e & 255 | 0)
                                    if (!(e & 170)) {
                                        Pa(i, r);
                                        break
                                    } else {
                                        pa(i, r);
                                        break
                                    }
                            } while (0);
                            return
                        }

                        function la(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0;
                            r = t[i + 48 >> 2] | 0;
                            if ((r | 0) != 0 ? (jo[r & 15](i) | 0) == 0 : 0) {
                                ia(e, 6, 7845) | 0;
                                r = t[e >> 2] | 0
                            } else {
                                r = e + 2308 | 0;
                                if (!(t[i + 68 >> 2] | 0)) {
                                    A = t[r >> 2] | 0;
                                    r = u[7813 + A >> 0] | 0;
                                    if ((A | 0) == 2) {
                                        t[e + 296 >> 2] = 0;
                                        f = e + 300 | 0;
                                        A = 11
                                    } else A = 8
                                } else {
                                    t[r >> 2] = 0;
                                    r = 0;
                                    A = 8
                                }
                                if ((A | 0) == 8) {
                                    l = (t[i + 76 >> 2] | 0) - r | 0;
                                    n = e + 296 | 0;
                                    t[n >> 2] = l >> 4;
                                    a = (t[i + 84 >> 2] | 0) - r | 0;
                                    f = e + 300 | 0;
                                    t[f >> 2] = a >> 4;
                                    if ((l | 0) < 0) t[n >> 2] = 0;
                                    if ((a | 0) < 0) A = 11
                                }
                                if ((A | 0) == 11) t[f >> 2] = 0;
                                r = r + 15 | 0;
                                l = r + (t[i + 88 >> 2] | 0) >> 4;
                                f = e + 308 | 0;
                                t[f >> 2] = l;
                                r = r + (t[i + 80 >> 2] | 0) >> 4;
                                i = t[e + 288 >> 2] | 0;
                                t[e + 304 >> 2] = (r | 0) > (i | 0) ? i : r;
                                r = t[e + 292 >> 2] | 0;
                                if ((l | 0) > (r | 0)) t[f >> 2] = r;
                                oa(e);
                                r = 0
                            }
                            return r | 0
                        }

                        function oa(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0;
                            e: do {
                                if ((t[e + 2308 >> 2] | 0) > 0) {
                                    l = e + 104 | 0;
                                    o = e + 60 | 0;
                                    c = e + 68 | 0;
                                    s = e + 72 | 0;
                                    b = e + 64 | 0;
                                    h = e + 88 | 0;
                                    A = e + 112 | 0;
                                    a = 0;
                                    while (1) {
                                        if ((a | 0) == 4) break e;
                                        if (t[l >> 2] | 0) {
                                            i = f[e + 120 + a >> 0] | 0;
                                            if (!(t[A >> 2] | 0)) i = (t[o >> 2] | 0) + i | 0
                                        } else i = t[o >> 2] | 0;
                                        u = 0;
                                        while (1) {
                                            if ((u | 0) == 2) break;
                                            if (t[c >> 2] | 0) {
                                                r = (t[s >> 2] | 0) + i | 0;
                                                if (u) r = (t[h >> 2] | 0) + r | 0
                                            } else r = i;
                                            n = (r | 0) < 63 ? r : 63;
                                            n = (n | 0) > 0 ? n : 0;
                                            if ((r | 0) > 0) {
                                                w = t[b >> 2] | 0;
                                                r = n >>> ((w | 0) > 4 ? 2 : 1);
                                                k = 9 - w | 0;
                                                r = (w | 0) > 0 ? (r | 0) > (k | 0) ? k : r : n;
                                                r = (r | 0) > 1 ? r : 1;
                                                f[e + 2312 + (a << 3) + (u << 2) + 1 >> 0] = r;
                                                f[e + 2312 + (a << 3) + (u << 2) + 3 >> 0] = (n | 0) > 39 ? 2 : (n | 0) > 14 & 1;
                                                r = r + (n << 1) & 255
                                            } else r = 0;
                                            f[e + 2312 + (a << 3) + (u << 2) >> 0] = r;
                                            f[e + 2312 + (a << 3) + (u << 2) + 2 >> 0] = u;
                                            u = u + 1 | 0
                                        }
                                        a = a + 1 | 0
                                    }
                                }
                            } while (0);
                            return
                        }

                        function ca(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            if ((t[e + 148 >> 2] | 0) > 0) e = jo[t[(Lu() | 0) + 8 >> 2] & 15](e + 124 | 0) | 0;
                            else e = 1;
                            r = t[i + 52 >> 2] | 0;
                            if (r | 0) rc[r & 31](i);
                            return e | 0
                        }

                        function sa(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            if (!e) return 0;
                            else return ((t[e + 40 >> 2] | 0) == 0 ? 0 : (r | 0) > 511 ? 2 : 0) | 0;
                            return 0
                        }

                        function ba(e, i) {
                            e = e | 0;
                            i = i | 0;
                            if ((ha(e) | 0) != 0 ? (ka(e) | 0) != 0 : 0) {
                                wa(e, i);
                                ga();
                                e = 1
                            } else e = 0;
                            return e | 0
                        }

                        function ha(e) {
                            e = e | 0;
                            t[e + 152 >> 2] = 0;
                            do {
                                if ((t[e + 148 >> 2] | 0) > 0)
                                    if (!(jo[t[(Lu() | 0) + 4 >> 2] & 15](e + 124 | 0) | 0)) {
                                        e = ia(e, 1, 7903) | 0;
                                        break
                                    } else {
                                        t[e + 136 >> 2] = e;
                                        t[e + 140 >> 2] = e + 180;
                                        t[e + 132 >> 2] = 22;
                                        t[e + 156 >> 2] = (t[e + 2308 >> 2] | 0) > 0 ? 3 : 2;
                                        e = 1;
                                        break
                                    }
                                else {
                                    t[e + 156 >> 2] = 1;
                                    e = 1
                                }
                            } while (0);
                            return e | 0
                        }

                        function ka(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                m = 0,
                                p = 0;
                            w = t[e + 156 >> 2] | 0;
                            I = t[e + 288 >> 2] | 0;
                            d = I << 2;
                            c = I << 5;
                            m = (I << 1) + 2 | 0;
                            p = e + 2308 | 0;
                            i = t[p >> 2] | 0;
                            o = e + 148 | 0;
                            A = t[o >> 2] | 0;
                            if ((i | 0) > 0) s = v(d, (A | 0) > 0 ? 2 : 1) | 0;
                            else s = 0;
                            g = v(I * 800 | 0, (A | 0) == 2 ? 2 : 1) | 0;
                            C = w << 4;
                            b = v(((C + (u[7813 + i >> 0] | 0) | 0) * 3 | 0) / 2 | 0, c) | 0;
                            if (!(t[e + 2348 >> 2] | 0)) {
                                h = 0;
                                k = 0
                            } else {
                                h = bo(a[e + 50 >> 1] | 0 | 0, 0, a[e + 48 >> 1] | 0 | 0, 0) | 0;
                                k = y() | 0
                            }
                            f = ho(c | 0, 0, 863, 0) | 0;
                            f = ho(f | 0, y() | 0, d | 0, 0) | 0;
                            f = ho(f | 0, y() | 0, m | 0, 0) | 0;
                            f = ho(f | 0, y() | 0, s | 0, 0) | 0;
                            f = ho(f | 0, y() | 0, g | 0, 0) | 0;
                            f = ho(f | 0, y() | 0, b | 0, 0) | 0;
                            f = ho(f | 0, y() | 0, h | 0, k | 0) | 0;
                            r = y() | 0;
                            e: do {
                                if ((f | 0) == (f | 0) & (r | 0) == 0) {
                                    n = e + 2292 | 0;
                                    l = e + 2288 | 0;
                                    i = t[l >> 2] | 0;
                                    do {
                                        if (r >>> 0 > 0 | ((r | 0) == 0 ? f >>> 0 > (t[n >> 2] | 0) >>> 0 : 0)) {
                                            $e(i);
                                            t[n >> 2] = 0;
                                            i = Ii(f, r, 1) | 0;
                                            t[l >> 2] = i;
                                            if (!i) {
                                                i = ia(e, 1, 7864) | 0;
                                                break e
                                            } else {
                                                t[n >> 2] = f;
                                                A = t[o >> 2] | 0;
                                                break
                                            }
                                        }
                                    } while (0);
                                    n = e + 2244 | 0;
                                    t[n >> 2] = i;
                                    i = i + d | 0;
                                    t[e + 2252 >> 2] = i;
                                    i = i + c | 0;
                                    f = i + 2 | 0;
                                    t[e + 2256 >> 2] = f;
                                    i = i + m | 0;
                                    r = (s | 0) == 0 ? 0 : i;
                                    t[e + 2260 >> 2] = r;
                                    t[e + 160 >> 2] = 0;
                                    t[e + 172 >> 2] = (A | 0) > 0 ? r + (I << 2) | 0 : r;
                                    i = i + s + 31 & -32;
                                    t[e + 2264 >> 2] = i;
                                    i = i + 832 | 0;
                                    t[e + 2304 >> 2] = i;
                                    r = e + 176 | 0;
                                    t[r >> 2] = i;
                                    if ((A | 0) == 2) t[r >> 2] = i + (I * 800 | 0);
                                    i = i + g | 0;
                                    g = I << 4;
                                    t[e + 2280 >> 2] = g;
                                    I = I << 3;
                                    t[e + 2284 >> 2] = I;
                                    s = u[7813 + (t[p >> 2] | 0) >> 0] | 0;
                                    p = v(s >>> 1, I) | 0;
                                    s = i + (v(g, s) | 0) | 0;
                                    t[e + 2268 >> 2] = s;
                                    C = s + (v(g, C) | 0) + p | 0;
                                    t[e + 2272 >> 2] = C;
                                    t[e + 2276 >> 2] = C + (v(w << 3, I) | 0) + p;
                                    t[e + 152 >> 2] = 0;
                                    t[e + 2364 >> 2] = (h | 0) == 0 & (k | 0) == 0 ? 0 : i + b | 0;
                                    Po(f + -2 | 0, 0, m | 0) | 0;
                                    mA(e);
                                    Po(t[n >> 2] | 0, 0, d | 0) | 0;
                                    i = 1
                                } else i = 0
                            } while (0);
                            return i | 0
                        }

                        function wa(e, i) {
                            e = e | 0;
                            i = i | 0;
                            t[i + 8 >> 2] = 0;
                            t[i + 20 >> 2] = t[e + 2268 >> 2];
                            t[i + 24 >> 2] = t[e + 2272 >> 2];
                            t[i + 28 >> 2] = t[e + 2276 >> 2];
                            t[i + 32 >> 2] = t[e + 2280 >> 2];
                            t[i + 36 >> 2] = t[e + 2284 >> 2];
                            t[i + 104 >> 2] = 0;
                            return
                        }

                        function ga() {
                            var e = 0;
                            if (!(ao(9192) | 0)) {
                                if (!(t[1941] | 0)) e = 0;
                                else {
                                    va();
                                    e = t[2248] | 0
                                }
                                t[1941] = e;
                                Ao(9192) | 0
                            }
                            return
                        }

                        function va() {
                            t[2108] = 6;
                            t[2109] = 7;
                            t[2110] = 8;
                            t[2112] = 9;
                            t[2114] = 10;
                            t[2111] = 11;
                            t[2113] = 12;
                            t[2115] = 13;
                            t[2116] = 14;
                            t[2117] = 15;
                            t[2100] = 16;
                            t[2101] = 17;
                            t[2102] = 18;
                            t[2103] = 19;
                            t[2104] = 20;
                            t[2105] = 21;
                            t[2106] = 22;
                            t[2120] = 23;
                            t[2121] = 24;
                            t[2122] = 25;
                            t[2123] = 26;
                            t[2124] = 27;
                            t[2125] = 28;
                            t[2126] = 29;
                            return
                        }

                        function Ca() {
                            return
                        }

                        function Ia(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0;
                            u = x;
                            x = x + 64 | 0;
                            f = u;
                            r = 0;
                            while (1) {
                                if ((r | 0) == 4) break;
                                h = n[e + (r << 1) >> 1] | 0;
                                a = r + 12 | 0;
                                l = n[e + (a << 1) >> 1] | 0;
                                b = l + h | 0;
                                o = r + 4 | 0;
                                k = n[e + (o << 1) >> 1] | 0;
                                c = r + 8 | 0;
                                A = n[e + (c << 1) >> 1] | 0;
                                s = A + k | 0;
                                A = k - A | 0;
                                l = h - l | 0;
                                t[f + (r << 2) >> 2] = s + b;
                                t[f + (c << 2) >> 2] = b - s;
                                t[f + (o << 2) >> 2] = A + l;
                                t[f + (a << 2) >> 2] = l - A;
                                r = r + 1 | 0
                            }
                            r = 0;
                            while (1) {
                                if ((r | 0) == 4) break;
                                k = r << 2;
                                c = (t[f + (k << 2) >> 2] | 0) + 3 | 0;
                                h = t[f + ((k | 3) << 2) >> 2] | 0;
                                s = c + h | 0;
                                o = t[f + ((k | 1) << 2) >> 2] | 0;
                                k = t[f + ((k | 2) << 2) >> 2] | 0;
                                b = k + o | 0;
                                k = o - k | 0;
                                h = c - h | 0;
                                n[i >> 1] = (b + s | 0) >>> 3;
                                n[i + 32 >> 1] = (k + h | 0) >>> 3;
                                n[i + 64 >> 1] = (s - b | 0) >>> 3;
                                n[i + 96 >> 1] = (h - k | 0) >>> 3;
                                i = i + 128 | 0;
                                r = r + 1 | 0
                            }
                            x = u;
                            return
                        }

                        function da(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            yA(e, i);
                            if (r | 0) yA(e + 32 | 0, i + 4 | 0);
                            return
                        }

                        function ya(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                t = 0,
                                a = 0,
                                A = 0;
                            t = (n[e >> 1] | 0) + 4 >> 3;
                            e = 0;
                            while (1) {
                                if ((e | 0) == 4) break;
                                a = e << 5;
                                r = 0;
                                while (1) {
                                    if ((r | 0) == 4) break;
                                    A = i + (r + a) | 0;
                                    f[A >> 0] = lA(t + (u[A >> 0] | 0) | 0) | 0;
                                    r = r + 1 | 0
                                }
                                e = e + 1 | 0
                            }
                            return
                        }

                        function ma(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                t = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            t = (n[e >> 1] | 0) + 4 | 0;
                            r = n[e + 8 >> 1] | 0;
                            l = r * 35468 >> 16;
                            r = (r * 20091 >> 16) + r | 0;
                            e = n[e + 2 >> 1] | 0;
                            a = e * 35468 >> 16;
                            e = (e * 20091 >> 16) + e | 0;
                            A = r + t | 0;
                            f[i >> 0] = lA((A + e >> 3) + (u[i >> 0] | 0) | 0) | 0;
                            o = i + 1 | 0;
                            f[o >> 0] = lA((A + a >> 3) + (u[o >> 0] | 0) | 0) | 0;
                            o = i + 2 | 0;
                            f[o >> 0] = lA((A - a >> 3) + (u[o >> 0] | 0) | 0) | 0;
                            o = i + 3 | 0;
                            f[o >> 0] = lA((A - e >> 3) + (u[o >> 0] | 0) | 0) | 0;
                            o = l + t | 0;
                            A = i + 32 | 0;
                            f[A >> 0] = lA((e + o >> 3) + (u[A >> 0] | 0) | 0) | 0;
                            A = i + 33 | 0;
                            f[A >> 0] = lA((o + a >> 3) + (u[A >> 0] | 0) | 0) | 0;
                            A = i + 34 | 0;
                            f[A >> 0] = lA((o - a >> 3) + (u[A >> 0] | 0) | 0) | 0;
                            A = i + 35 | 0;
                            f[A >> 0] = lA((o - e >> 3) + (u[A >> 0] | 0) | 0) | 0;
                            l = t - l | 0;
                            A = i + 64 | 0;
                            f[A >> 0] = lA((e + l >> 3) + (u[A >> 0] | 0) | 0) | 0;
                            A = i + 65 | 0;
                            f[A >> 0] = lA((l + a >> 3) + (u[A >> 0] | 0) | 0) | 0;
                            A = i + 66 | 0;
                            f[A >> 0] = lA((l - a >> 3) + (u[A >> 0] | 0) | 0) | 0;
                            A = i + 67 | 0;
                            f[A >> 0] = lA((l - e >> 3) + (u[A >> 0] | 0) | 0) | 0;
                            r = t - r | 0;
                            t = i + 96 | 0;
                            f[t >> 0] = lA((r + e >> 3) + (u[t >> 0] | 0) | 0) | 0;
                            t = i + 97 | 0;
                            f[t >> 0] = lA((r + a >> 3) + (u[t >> 0] | 0) | 0) | 0;
                            t = i + 98 | 0;
                            f[t >> 0] = lA((r - a >> 3) + (u[t >> 0] | 0) | 0) | 0;
                            i = i + 99 | 0;
                            f[i >> 0] = lA((r - e >> 3) + (u[i >> 0] | 0) | 0) | 0;
                            return
                        }

                        function pa(e, i) {
                            e = e | 0;
                            i = i | 0;
                            da(e, i, 1);
                            da(e + 64 | 0, i + 128 | 0, 1);
                            return
                        }

                        function Pa(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            if (n[e >> 1] | 0) ya(e, i);
                            r = e + 32 | 0;
                            if (n[r >> 1] | 0) ya(r, i + 4 | 0);
                            r = e + 64 | 0;
                            if (n[r >> 1] | 0) ya(r, i + 128 | 0);
                            r = e + 96 | 0;
                            if (n[r >> 1] | 0) ya(r, i + 132 | 0);
                            return
                        }

                        function Da(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            CA(e, i, 1, 16, r, f, n);
                            return
                        }

                        function Ba(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var t = 0,
                                u = 0,
                                a = 0;
                            u = i << 2;
                            t = 3;
                            while (1) {
                                if (!t) break;
                                a = e + u | 0;
                                hA(a, i, 1, 16, r, f, n);
                                t = t + -1 | 0;
                                e = a
                            }
                            return
                        }

                        function Ea(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            CA(e, 1, i, 16, r, f, n);
                            return
                        }

                        function Ra(e, i, r, f, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            CA(e, r, 1, 8, f, n, t);
                            CA(i, r, 1, 8, f, n, t);
                            return
                        }

                        function Ga(e, i, r, f, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            var u = 0;
                            u = r << 2;
                            hA(e + u | 0, r, 1, 8, f, n, t);
                            hA(i + u | 0, r, 1, 8, f, n, t);
                            return
                        }

                        function _a(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0;
                            f = r << 1 | 1;
                            r = 0;
                            while (1) {
                                if ((r | 0) == 16) break;
                                n = e + r | 0;
                                if (dA(n, i, f) | 0) gA(n, i);
                                r = r + 1 | 0
                            }
                            return
                        }

                        function Fa(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0;
                            f = r << 1 | 1;
                            r = 0;
                            while (1) {
                                if ((r | 0) == 16) break;
                                n = e + (v(r, i) | 0) | 0;
                                if (dA(n, 1, f) | 0) gA(n, 1);
                                r = r + 1 | 0
                            }
                            return
                        }

                        function Sa(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                t = 0;
                            n = i << 2;
                            f = 3;
                            while (1) {
                                if (!f) break;
                                t = e + n | 0;
                                _a(t, i, r);
                                f = f + -1 | 0;
                                e = t
                            }
                            return
                        }

                        function xa(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0;
                            f = 3;
                            while (1) {
                                if (!f) break;
                                n = e + 4 | 0;
                                Fa(n, i, r);
                                f = f + -1 | 0;
                                e = n
                            }
                            return
                        }

                        function Qa(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var t = 0,
                                u = 0;
                            t = 3;
                            while (1) {
                                if (!t) break;
                                u = e + 4 | 0;
                                hA(u, 1, i, 16, r, f, n);
                                t = t + -1 | 0;
                                e = u
                            }
                            return
                        }

                        function Ha(e, i, r, f, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            CA(e, 1, r, 8, f, n, t);
                            CA(i, 1, r, 8, f, n, t);
                            return
                        }

                        function Ma(e, i, r, f, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            hA(e + 4 | 0, 1, r, 8, f, n, t);
                            hA(i + 4 | 0, 1, r, 8, f, n, t);
                            return
                        }

                        function Va(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            i = 0;
                            r = 4;
                            while (1) {
                                if ((i | 0) == 4) break;
                                f = r + (u[e + (i + -32) >> 0] | 0) + (u[e + ((i << 5) + -1) >> 0] | 0) | 0;
                                i = i + 1 | 0;
                                r = f
                            }
                            r = r >>> 3 & 255;
                            i = 0;
                            while (1) {
                                if ((i | 0) == 4) break;
                                Po(e + (i << 5) | 0, r | 0, 4) | 0;
                                i = i + 1 | 0
                            }
                            return
                        }

                        function Ya(e) {
                            e = e | 0;
                            cA(e, 4);
                            return
                        }

                        function Ua(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                t = 0,
                                a = 0,
                                A = 0;
                            a = u[e + -32 >> 0] | 0;
                            n = u[e + -31 >> 0] | 0;
                            A = n + 2 | 0;
                            r = (A + (u[e + -33 >> 0] | 0) + (a << 1) | 0) >>> 2 & 255;
                            t = u[e + -30 >> 0] | 0;
                            i = t + 2 | 0;
                            n = (i + a + (n << 1) | 0) >>> 2 & 255;
                            a = u[e + -29 >> 0] | 0;
                            t = (A + (t << 1) + a | 0) >>> 2 & 255;
                            a = (i + (a << 1) + (u[e + -28 >> 0] | 0) | 0) >>> 2 & 255;
                            i = 0;
                            while (1) {
                                if ((i | 0) == 4) break;
                                A = e + (i << 5) | 0;
                                f[A >> 0] = r;
                                f[A + 1 >> 0] = n;
                                f[A + 2 >> 0] = t;
                                f[A + 3 >> 0] = a;
                                i = i + 1 | 0
                            }
                            return
                        }

                        function Za(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                t = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            l = u[e + -1 >> 0] | 0;
                            s = u[e + 31 >> 0] | 0;
                            c = u[e + 63 >> 0] | 0;
                            a = u[e + -33 >> 0] | 0;
                            t = u[e + -32 >> 0] | 0;
                            n = u[e + -31 >> 0] | 0;
                            i = u[e + -30 >> 0] | 0;
                            r = u[e + -29 >> 0] | 0;
                            o = s + 2 | 0;
                            f[e + 96 >> 0] = (o + (c << 1) + (u[e + 95 >> 0] | 0) | 0) >>> 2;
                            A = l + 2 | 0;
                            c = (A + (s << 1) + c | 0) >>> 2 & 255;
                            f[e + 64 >> 0] = c;
                            f[e + 97 >> 0] = c;
                            l = (o + (l << 1) + a | 0) >>> 2 & 255;
                            f[e + 32 >> 0] = l;
                            f[e + 65 >> 0] = l;
                            f[e + 98 >> 0] = l;
                            A = (A + t + (a << 1) | 0) >>> 2 & 255;
                            f[e >> 0] = A;
                            f[e + 33 >> 0] = A;
                            f[e + 66 >> 0] = A;
                            f[e + 99 >> 0] = A;
                            a = (a + 2 + n + (t << 1) | 0) >>> 2 & 255;
                            f[e + 1 >> 0] = a;
                            f[e + 34 >> 0] = a;
                            f[e + 67 >> 0] = a;
                            t = (t + 2 + i + (n << 1) | 0) >>> 2 & 255;
                            f[e + 2 >> 0] = t;
                            f[e + 35 >> 0] = t;
                            f[e + 3 >> 0] = (n + 2 + r + (i << 1) | 0) >>> 2;
                            return
                        }

                        function Wa(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                t = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0;
                            c = u[e + -31 >> 0] | 0;
                            o = u[e + -30 >> 0] | 0;
                            A = u[e + -29 >> 0] | 0;
                            t = u[e + -28 >> 0] | 0;
                            n = u[e + -27 >> 0] | 0;
                            r = u[e + -26 >> 0] | 0;
                            i = u[e + -25 >> 0] | 0;
                            l = o + 2 | 0;
                            f[e >> 0] = (l + (u[e + -32 >> 0] | 0) + (c << 1) | 0) >>> 2;
                            a = A + 2 | 0;
                            o = (a + c + (o << 1) | 0) >>> 2 & 255;
                            f[e + 32 >> 0] = o;
                            f[e + 1 >> 0] = o;
                            A = (l + (A << 1) + t | 0) >>> 2 & 255;
                            f[e + 64 >> 0] = A;
                            f[e + 33 >> 0] = A;
                            f[e + 2 >> 0] = A;
                            a = (a + (t << 1) + n | 0) >>> 2 & 255;
                            f[e + 96 >> 0] = a;
                            f[e + 65 >> 0] = a;
                            f[e + 34 >> 0] = a;
                            f[e + 3 >> 0] = a;
                            t = (t + 2 + (n << 1) + r | 0) >>> 2 & 255;
                            f[e + 97 >> 0] = t;
                            f[e + 66 >> 0] = t;
                            f[e + 35 >> 0] = t;
                            n = (n + 2 + (r << 1) + i | 0) >>> 2 & 255;
                            f[e + 98 >> 0] = n;
                            f[e + 67 >> 0] = n;
                            f[e + 99 >> 0] = (r + 2 + i + (i << 1) | 0) >>> 2;
                            return
                        }

                        function Ta(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                t = 0,
                                a = 0;
                            a = u[e + -1 >> 0] | 0;
                            t = u[e + 31 >> 0] | 0;
                            f = u[e + 63 >> 0] | 0;
                            i = u[e + 95 >> 0] | 0;
                            n = t + 2 | 0;
                            bA(e, v((n + (u[e + -33 >> 0] | 0) + (a << 1) | 0) >>> 2 & 255, 16843009) | 0);
                            r = f + 2 | 0;
                            bA(e + 32 | 0, v((r + a + (t << 1) | 0) >>> 2 & 255, 16843009) | 0);
                            bA(e + 64 | 0, v((n + (f << 1) + i | 0) >>> 2 & 255, 16843009) | 0);
                            bA(e + 96 | 0, v((r + i + (i << 1) | 0) >>> 2 & 255, 16843009) | 0);
                            return
                        }

                        function La(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                t = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            o = u[e + -1 >> 0] | 0;
                            c = u[e + 31 >> 0] | 0;
                            a = u[e + 63 >> 0] | 0;
                            A = u[e + -33 >> 0] | 0;
                            t = u[e + -32 >> 0] | 0;
                            n = u[e + -31 >> 0] | 0;
                            r = u[e + -30 >> 0] | 0;
                            i = u[e + -29 >> 0] | 0;
                            l = t + 1 | 0;
                            s = (l + A | 0) >>> 1 & 255;
                            f[e + 65 >> 0] = s;
                            f[e >> 0] = s;
                            l = (l + n | 0) >>> 1 & 255;
                            f[e + 66 >> 0] = l;
                            f[e + 1 >> 0] = l;
                            l = (n + 1 + r | 0) >>> 1 & 255;
                            f[e + 67 >> 0] = l;
                            f[e + 2 >> 0] = l;
                            f[e + 3 >> 0] = (r + 1 + i | 0) >>> 1;
                            l = o + 2 | 0;
                            f[e + 96 >> 0] = (l + a + (c << 1) | 0) >>> 2;
                            a = A + 2 | 0;
                            f[e + 64 >> 0] = (a + c + (o << 1) | 0) >>> 2;
                            A = (l + (A << 1) + t | 0) >>> 2 & 255;
                            f[e + 97 >> 0] = A;
                            f[e + 32 >> 0] = A;
                            a = (a + (t << 1) + n | 0) >>> 2 & 255;
                            f[e + 98 >> 0] = a;
                            f[e + 33 >> 0] = a;
                            t = (t + 2 + (n << 1) + r | 0) >>> 2 & 255;
                            f[e + 99 >> 0] = t;
                            f[e + 34 >> 0] = t;
                            f[e + 35 >> 0] = (n + 2 + (r << 1) + i | 0) >>> 2;
                            return
                        }

                        function za(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                t = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0;
                            a = u[e + -32 >> 0] | 0;
                            c = u[e + -31 >> 0] | 0;
                            o = u[e + -30 >> 0] | 0;
                            A = u[e + -29 >> 0] | 0;
                            t = u[e + -28 >> 0] | 0;
                            n = u[e + -27 >> 0] | 0;
                            r = u[e + -26 >> 0] | 0;
                            i = u[e + -25 >> 0] | 0;
                            l = c + 1 | 0;
                            f[e >> 0] = (l + a | 0) >>> 1;
                            l = (l + o | 0) >>> 1 & 255;
                            f[e + 64 >> 0] = l;
                            f[e + 1 >> 0] = l;
                            l = (o + 1 + A | 0) >>> 1 & 255;
                            f[e + 65 >> 0] = l;
                            f[e + 2 >> 0] = l;
                            l = (A + 1 + t | 0) >>> 1 & 255;
                            f[e + 66 >> 0] = l;
                            f[e + 3 >> 0] = l;
                            l = o + 2 | 0;
                            f[e + 32 >> 0] = (l + a + (c << 1) | 0) >>> 2;
                            a = A + 2 | 0;
                            o = (a + c + (o << 1) | 0) >>> 2 & 255;
                            f[e + 96 >> 0] = o;
                            f[e + 33 >> 0] = o;
                            A = (l + (A << 1) + t | 0) >>> 2 & 255;
                            f[e + 97 >> 0] = A;
                            f[e + 34 >> 0] = A;
                            a = (a + (t << 1) + n | 0) >>> 2 & 255;
                            f[e + 98 >> 0] = a;
                            f[e + 35 >> 0] = a;
                            f[e + 67 >> 0] = (t + 2 + (n << 1) + r | 0) >>> 2;
                            f[e + 99 >> 0] = (n + 2 + (r << 1) + i | 0) >>> 2;
                            return
                        }

                        function Ja(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                t = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0;
                            l = u[e + -1 >> 0] | 0;
                            t = u[e + 31 >> 0] | 0;
                            i = u[e + 63 >> 0] | 0;
                            r = u[e + 95 >> 0] | 0;
                            A = u[e + -33 >> 0] | 0;
                            n = u[e + -32 >> 0] | 0;
                            a = u[e + -31 >> 0] | 0;
                            o = u[e + -30 >> 0] | 0;
                            c = l + 1 | 0;
                            s = (c + A | 0) >>> 1 & 255;
                            f[e + 34 >> 0] = s;
                            f[e >> 0] = s;
                            c = (c + t | 0) >>> 1 & 255;
                            f[e + 66 >> 0] = c;
                            f[e + 32 >> 0] = c;
                            c = (t + 1 + i | 0) >>> 1 & 255;
                            f[e + 98 >> 0] = c;
                            f[e + 64 >> 0] = c;
                            f[e + 96 >> 0] = (i + 1 + r | 0) >>> 1;
                            f[e + 3 >> 0] = (n + 2 + (a << 1) + o | 0) >>> 2;
                            f[e + 2 >> 0] = (A + 2 + (n << 1) + a | 0) >>> 2;
                            a = l + 2 | 0;
                            n = (a + (A << 1) + n | 0) >>> 2 & 255;
                            f[e + 35 >> 0] = n;
                            f[e + 1 >> 0] = n;
                            n = t + 2 | 0;
                            A = (n + (l << 1) + A | 0) >>> 2 & 255;
                            f[e + 67 >> 0] = A;
                            f[e + 33 >> 0] = A;
                            t = (a + i + (t << 1) | 0) >>> 2 & 255;
                            f[e + 99 >> 0] = t;
                            f[e + 65 >> 0] = t;
                            f[e + 97 >> 0] = (n + r + (i << 1) | 0) >>> 2;
                            return
                        }

                        function Oa(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                t = 0,
                                a = 0,
                                A = 0;
                            A = u[e + -1 >> 0] | 0;
                            a = u[e + 31 >> 0] | 0;
                            t = u[e + 63 >> 0] | 0;
                            i = f[e + 95 >> 0] | 0;
                            r = i & 255;
                            n = a + 1 | 0;
                            f[e >> 0] = (n + A | 0) >>> 1;
                            n = (n + t | 0) >>> 1 & 255;
                            f[e + 32 >> 0] = n;
                            f[e + 2 >> 0] = n;
                            n = (t + 1 + r | 0) >>> 1 & 255;
                            f[e + 64 >> 0] = n;
                            f[e + 34 >> 0] = n;
                            n = t + 2 | 0;
                            f[e + 1 >> 0] = (n + A + (a << 1) | 0) >>> 2;
                            t = (r + 2 + a + (t << 1) | 0) >>> 2 & 255;
                            f[e + 33 >> 0] = t;
                            f[e + 3 >> 0] = t;
                            r = (n + r + (r << 1) | 0) >>> 2 & 255;
                            f[e + 65 >> 0] = r;
                            f[e + 35 >> 0] = r;
                            f[e + 66 >> 0] = i;
                            f[e + 67 >> 0] = i;
                            Po(e + 96 | 0, i | 0, 4) | 0;
                            return
                        }

                        function qa(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            i = 0;
                            r = 16;
                            while (1) {
                                if ((i | 0) == 16) break;
                                f = r + (u[e + ((i << 5) + -1) >> 0] | 0) + (u[e + (i + -32) >> 0] | 0) | 0;
                                i = i + 1 | 0;
                                r = f
                            }
                            sA(r >>> 5, e);
                            return
                        }

                        function Ka(e) {
                            e = e | 0;
                            cA(e, 16);
                            return
                        }

                        function Xa(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                t = 0,
                                u = 0;
                            r = e + -32 | 0;
                            i = 0;
                            while (1) {
                                if ((i | 0) == 16) break;
                                n = e + (i << 5) | 0;
                                t = r;
                                u = n + 16 | 0;
                                do {
                                    f[n >> 0] = f[t >> 0] | 0;
                                    n = n + 1 | 0;
                                    t = t + 1 | 0
                                } while ((n | 0) < (u | 0));
                                i = i + 1 | 0
                            }
                            return
                        }

                        function ja(e) {
                            e = e | 0;
                            var i = 0;
                            i = 16;
                            while (1) {
                                if (!i) break;
                                Po(e | 0, f[e + -1 >> 0] | 0, 16) | 0;
                                i = i + -1 | 0;
                                e = e + 32 | 0
                            }
                            return
                        }

                        function Na(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            i = 0;
                            r = 8;
                            while (1) {
                                if ((i | 0) == 16) break;
                                f = r + (u[e + ((i << 5) + -1) >> 0] | 0) | 0;
                                i = i + 1 | 0;
                                r = f
                            }
                            sA(r >>> 4, e);
                            return
                        }

                        function $a(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            i = 0;
                            r = 8;
                            while (1) {
                                if ((i | 0) == 16) break;
                                f = r + (u[e + (i + -32) >> 0] | 0) | 0;
                                i = i + 1 | 0;
                                r = f
                            }
                            sA(r >>> 4, e);
                            return
                        }

                        function eA(e) {
                            e = e | 0;
                            sA(128, e);
                            return
                        }

                        function iA(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            i = 0;
                            r = 8;
                            while (1) {
                                if ((i | 0) == 8) break;
                                f = r + (u[e + (i + -32) >> 0] | 0) + (u[e + ((i << 5) + -1) >> 0] | 0) | 0;
                                i = i + 1 | 0;
                                r = f
                            }
                            oA(r >>> 4 & 255, e);
                            return
                        }

                        function rA(e) {
                            e = e | 0;
                            cA(e, 8);
                            return
                        }

                        function fA(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                t = 0,
                                a = 0,
                                A = 0;
                            r = e + -32 | 0;
                            i = 0;
                            while (1) {
                                if ((i | 0) == 8) break;
                                t = r;
                                A = t;
                                A = u[A >> 0] | u[A + 1 >> 0] << 8 | u[A + 2 >> 0] << 16 | u[A + 3 >> 0] << 24;
                                t = t + 4 | 0;
                                t = u[t >> 0] | u[t + 1 >> 0] << 8 | u[t + 2 >> 0] << 16 | u[t + 3 >> 0] << 24;
                                n = e + (i << 5) | 0;
                                a = n;
                                f[a >> 0] = A;
                                f[a + 1 >> 0] = A >> 8;
                                f[a + 2 >> 0] = A >> 16;
                                f[a + 3 >> 0] = A >> 24;
                                n = n + 4 | 0;
                                f[n >> 0] = t;
                                f[n + 1 >> 0] = t >> 8;
                                f[n + 2 >> 0] = t >> 16;
                                f[n + 3 >> 0] = t >> 24;
                                i = i + 1 | 0
                            }
                            return
                        }

                        function nA(e) {
                            e = e | 0;
                            var i = 0;
                            i = 0;
                            while (1) {
                                if ((i | 0) == 8) break;
                                Po(e | 0, f[e + -1 >> 0] | 0, 8) | 0;
                                i = i + 1 | 0;
                                e = e + 32 | 0
                            }
                            return
                        }

                        function tA(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            i = 0;
                            r = 4;
                            while (1) {
                                if ((i | 0) == 8) break;
                                f = r + (u[e + ((i << 5) + -1) >> 0] | 0) | 0;
                                i = i + 1 | 0;
                                r = f
                            }
                            oA(r >>> 3 & 255, e);
                            return
                        }

                        function uA(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            i = 0;
                            r = 4;
                            while (1) {
                                if ((i | 0) == 8) break;
                                f = r + (u[e + (i + -32) >> 0] | 0) | 0;
                                i = i + 1 | 0;
                                r = f
                            }
                            oA(r >>> 3 & 255, e);
                            return
                        }

                        function aA(e) {
                            e = e | 0;
                            oA(-128, e);
                            return
                        }

                        function AA(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0,
                                t = 0,
                                a = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) == 8) break;
                                t = 0;
                                while (1) {
                                    if ((t | 0) == 8) break;
                                    a = i + t | 0;
                                    f[a >> 0] = lA(((u[e + t >> 0] | 0) + -120 >> 4) + (u[a >> 0] | 0) | 0) | 0;
                                    t = t + 1 | 0
                                }
                                e = e + 8 | 0;
                                i = i + r | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function lA(e) {
                            e = e | 0;
                            return (e >>> 0 > 255 ? (e >>> 31) + 255 | 0 : e) & 255 | 0
                        }

                        function oA(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            r = 0;
                            while (1) {
                                if ((r | 0) == 8) break;
                                Po(i + (r << 5) | 0, e | 0, 8) | 0;
                                r = r + 1 | 0
                            }
                            return
                        }

                        function cA(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0;
                            A = e + -32 | 0;
                            l = (t[1926] | 0) + (0 - (u[e + -33 >> 0] | 0)) | 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (i | 0)) break;
                                a = l + (u[e + -1 >> 0] | 0) | 0;
                                r = 0;
                                while (1) {
                                    if ((r | 0) == (i | 0)) break;
                                    f[e + r >> 0] = f[a + (u[A + r >> 0] | 0) >> 0] | 0;
                                    r = r + 1 | 0
                                }
                                e = e + 32 | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function sA(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            r = e & 255;
                            e = 0;
                            while (1) {
                                if ((e | 0) == 16) break;
                                Po(i + (e << 5) | 0, r | 0, 16) | 0;
                                e = e + 1 | 0
                            }
                            return
                        }

                        function bA(e, i) {
                            e = e | 0;
                            i = i | 0;
                            f[e >> 0] = i;
                            f[e + 1 >> 0] = i >> 8;
                            f[e + 2 >> 0] = i >> 16;
                            f[e + 3 >> 0] = i >> 24;
                            return
                        }

                        function hA(e, i, r, f, n, t, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            u = u | 0;
                            var a = 0;
                            a = n << 1 | 1;
                            n = f;
                            while (1) {
                                f = n + -1 | 0;
                                if ((n | 0) <= 0) break;
                                do {
                                    if (kA(e, i, a, t) | 0)
                                        if (!(wA(e, i, u) | 0)) {
                                            vA(e, i);
                                            break
                                        } else {
                                            gA(e, i);
                                            break
                                        }
                                } while (0);
                                e = e + r | 0;
                                n = f
                            }
                            return
                        }

                        function kA(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            b = u[e + (v(i, -3) | 0) >> 0] | 0;
                            s = u[e + (v(i, -2) | 0) >> 0] | 0;
                            c = u[e + (0 - i) >> 0] | 0;
                            n = u[e >> 0] | 0;
                            a = u[e + i >> 0] | 0;
                            l = u[e + (i << 1) >> 0] | 0;
                            o = u[e + (i * 3 | 0) >> 0] | 0;
                            A = t[1927] | 0;
                            if ((((((((u[A + (c - n) >> 0] | 0) << 2) + (u[A + (s - a) >> 0] | 0) | 0) <= (r | 0) ? (u[A + ((u[e + (v(i, -4) | 0) >> 0] | 0) - b) >> 0] | 0 | 0) <= (f | 0) : 0) ? (u[A + (b - s) >> 0] | 0 | 0) <= (f | 0) : 0) ? (u[A + (s - c) >> 0] | 0 | 0) <= (f | 0) : 0) ? (u[A + (o - l) >> 0] | 0 | 0) <= (f | 0) : 0) ? (u[A + (l - a) >> 0] | 0 | 0) <= (f | 0) : 0) e = (u[A + (a - n) >> 0] | 0 | 0) <= (f | 0) & 1;
                            else e = 0;
                            return e | 0
                        }

                        function wA(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0;
                            n = u[e + (v(i, -2) | 0) >> 0] | 0;
                            f = t[1927] | 0;
                            if ((u[f + (n - (u[e + (0 - i) >> 0] | 0)) >> 0] | 0 | 0) > (r | 0)) e = 1;
                            else e = (u[f + ((u[e + i >> 0] | 0) - (u[e >> 0] | 0)) >> 0] | 0 | 0) > (r | 0) & 1;
                            return e | 0
                        }

                        function gA(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            l = u[e + (v(i, -2) | 0) >> 0] | 0;
                            a = e + (0 - i) | 0;
                            A = u[a >> 0] | 0;
                            r = u[e >> 0] | 0;
                            l = ((r - A | 0) * 3 | 0) + (f[(t[1924] | 0) + (l - (u[e + i >> 0] | 0)) >> 0] | 0) | 0;
                            o = t[1925] | 0;
                            i = f[o + (l + 4 >> 3) >> 0] | 0;
                            n = t[1926] | 0;
                            f[a >> 0] = f[n + ((f[o + (l + 3 >> 3) >> 0] | 0) + A) >> 0] | 0;
                            f[e >> 0] = f[n + (r - i) >> 0] | 0;
                            return
                        }

                        function vA(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            b = e + (v(i, -2) | 0) | 0;
                            o = e + (0 - i) | 0;
                            c = u[o >> 0] | 0;
                            l = u[e >> 0] | 0;
                            i = e + i | 0;
                            n = u[i >> 0] | 0;
                            s = (l - c | 0) * 3 | 0;
                            r = t[1925] | 0;
                            A = f[r + (s + 4 >> 3) >> 0] | 0;
                            s = f[r + (s + 3 >> 3) >> 0] | 0;
                            r = A + 1 >> 1;
                            a = t[1926] | 0;
                            f[b >> 0] = f[a + (r + (u[b >> 0] | 0)) >> 0] | 0;
                            f[o >> 0] = f[a + (s + c) >> 0] | 0;
                            f[e >> 0] = f[a + (l - A) >> 0] | 0;
                            f[i >> 0] = f[a + (n - r) >> 0] | 0;
                            return
                        }

                        function CA(e, i, r, f, n, t, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            u = u | 0;
                            var a = 0;
                            a = n << 1 | 1;
                            n = f;
                            while (1) {
                                f = n + -1 | 0;
                                if ((n | 0) <= 0) break;
                                do {
                                    if (kA(e, i, a, t) | 0)
                                        if (!(wA(e, i, u) | 0)) {
                                            IA(e, i);
                                            break
                                        } else {
                                            gA(e, i);
                                            break
                                        }
                                } while (0);
                                e = e + r | 0;
                                n = f
                            }
                            return
                        }

                        function IA(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0;
                            g = e + (v(i, -3) | 0) | 0;
                            k = e + (v(i, -2) | 0) | 0;
                            w = u[k >> 0] | 0;
                            b = e + (0 - i) | 0;
                            h = u[b >> 0] | 0;
                            s = u[e >> 0] | 0;
                            A = e + i | 0;
                            o = u[A >> 0] | 0;
                            i = e + (i << 1) | 0;
                            n = u[i >> 0] | 0;
                            r = t[1924] | 0;
                            r = f[r + (((s - h | 0) * 3 | 0) + (f[r + (w - o) >> 0] | 0)) >> 0] | 0;
                            c = (r * 27 | 0) + 63 >> 7;
                            l = (r * 18 | 0) + 63 >> 7;
                            r = (r * 9 | 0) + 63 >> 7;
                            a = t[1926] | 0;
                            f[g >> 0] = f[a + (r + (u[g >> 0] | 0)) >> 0] | 0;
                            f[k >> 0] = f[a + (l + w) >> 0] | 0;
                            f[b >> 0] = f[a + (c + h) >> 0] | 0;
                            f[e >> 0] = f[a + (s - c) >> 0] | 0;
                            f[A >> 0] = f[a + (o - l) >> 0] | 0;
                            f[i >> 0] = f[a + (n - r) >> 0] | 0;
                            return
                        }

                        function dA(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0;
                            f = u[e + (v(i, -2) | 0) >> 0] | 0;
                            n = t[1927] | 0;
                            return (((u[n + ((u[e + (0 - i) >> 0] | 0) - (u[e >> 0] | 0)) >> 0] | 0) << 2) + (u[n + (f - (u[e + i >> 0] | 0)) >> 0] | 0) | 0) <= (r | 0) | 0
                        }

                        function yA(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0;
                            l = x;
                            x = x + 64 | 0;
                            r = l;
                            a = r;
                            A = 0;
                            while (1) {
                                if ((A | 0) == 4) break;
                                h = n[e >> 1] | 0;
                                b = n[e + 16 >> 1] | 0;
                                c = b + h | 0;
                                b = h - b | 0;
                                h = n[e + 8 >> 1] | 0;
                                o = n[e + 24 >> 1] | 0;
                                s = (h * 35468 >> 16) - o - (o * 20091 >> 16) | 0;
                                o = (h * 20091 >> 16) + h + (o * 35468 >> 16) | 0;
                                t[a >> 2] = o + c;
                                t[a + 4 >> 2] = s + b;
                                t[a + 8 >> 2] = b - s;
                                t[a + 12 >> 2] = c - o;
                                e = e + 2 | 0;
                                a = a + 16 | 0;
                                A = A + 1 | 0
                            }
                            e = 0;
                            while (1) {
                                if ((e | 0) == 4) break;
                                h = (t[r >> 2] | 0) + 4 | 0;
                                o = t[r + 32 >> 2] | 0;
                                s = h + o | 0;
                                o = h - o | 0;
                                h = t[r + 16 >> 2] | 0;
                                b = t[r + 48 >> 2] | 0;
                                c = (h * 35468 >> 16) - b - (b * 20091 >> 16) | 0;
                                b = (h * 20091 >> 16) + h + (b * 35468 >> 16) | 0;
                                f[i >> 0] = lA((b + s >> 3) + (u[i >> 0] | 0) | 0) | 0;
                                h = i + 1 | 0;
                                f[h >> 0] = lA((c + o >> 3) + (u[h >> 0] | 0) | 0) | 0;
                                h = i + 2 | 0;
                                f[h >> 0] = lA((o - c >> 3) + (u[h >> 0] | 0) | 0) | 0;
                                h = i + 3 | 0;
                                f[h >> 0] = lA((s - b >> 3) + (u[h >> 0] | 0) | 0) | 0;
                                i = i + 32 | 0;
                                r = r + 4 | 0;
                                e = e + 1 | 0
                            }
                            x = l;
                            return
                        }

                        function mA(e) {
                            e = e | 0;
                            var i = 0;
                            i = t[e + 2256 >> 2] | 0;
                            f[i + -2 >> 0] = 0;
                            f[i + -1 >> 0] = 0;
                            t[e + 2248 >> 2] = 0;
                            t[e + 2296 >> 2] = 0;
                            return
                        }

                        function pA(e) {
                            e = e | 0;
                            var i = 0;
                            if (e | 0) {
                                i = e + 56 | 0;
                                do {
                                    t[e >> 2] = 0;
                                    e = e + 4 | 0
                                } while ((e | 0) < (i | 0))
                            }
                            return
                        }

                        function PA(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            if ((r | 0) == 0 | (f & -256 | 0) != 512) e = 2;
                            else e = DA(e, i, r) | 0;
                            return e | 0
                        }

                        function DA(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            if ((e | 0) == 0 | (r | 0) == 0) e = 2;
                            else {
                                BA(r);
                                e = EA(e, i, r, r + 4 | 0, r + 8 | 0, r + 12 | 0, r + 16 | 0, 0) | 0
                            }
                            return e | 0
                        }

                        function BA(e) {
                            e = e | 0;
                            var i = 0;
                            i = e + 40 | 0;
                            do {
                                t[e >> 2] = 0;
                                e = e + 4 | 0
                            } while ((e | 0) < (i | 0));
                            return
                        }

                        function EA(e, i, r, f, n, u, a, A) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            u = u | 0;
                            a = a | 0;
                            A = A | 0;
                            var l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0,
                                D = 0,
                                B = 0,
                                E = 0,
                                R = 0;
                            R = x;
                            x = x + 80 | 0;
                            d = R + 60 | 0;
                            I = R + 56 | 0;
                            m = R + 64 | 0;
                            p = R + 52 | 0;
                            D = R + 48 | 0;
                            B = R + 44 | 0;
                            o = R + 40 | 0;
                            E = R + 4 | 0;
                            l = R;
                            t[d >> 2] = e;
                            t[I >> 2] = i;
                            t[m >> 2] = 0;
                            t[p >> 2] = 0;
                            t[D >> 2] = 0;
                            t[B >> 2] = 0;
                            t[o >> 2] = 0;
                            P = (A | 0) != 0;
                            if (P) v = t[A + 8 >> 2] | 0;
                            else v = 0;
                            e: do {
                                if (!((e | 0) == 0 | i >>> 0 < 12)) {
                                    b = E + 8 | 0;
                                    t[b >> 2] = 0;
                                    t[b + 4 >> 2] = 0;
                                    t[b + 8 >> 2] = 0;
                                    t[b + 12 >> 2] = 0;
                                    t[b + 16 >> 2] = 0;
                                    t[b + 20 >> 2] = 0;
                                    t[b + 24 >> 2] = 0;
                                    t[E >> 2] = e;
                                    t[E + 4 >> 2] = i;
                                    b = E + 28 | 0;
                                    e = RA(d, I, v, b) | 0;
                                    if (!e) {
                                        c = t[b >> 2] | 0;
                                        s = (c | 0) != 0;
                                        t[l >> 2] = 0;
                                        e = GA(d, I, o, m, p, l) | 0;
                                        if (!e) {
                                            i = t[l >> 2] | 0;
                                            e = i & 2;
                                            w = (e | 0) != 0;
                                            e = e >>> 1;
                                            C = t[o >> 2] | 0;
                                            g = (C | 0) != 0;
                                            if (g & (s ^ 1)) e = 3;
                                            else {
                                                y = (n | 0) == 0;
                                                if (!y) t[n >> 2] = i >>> 4 & 1;
                                                if (u | 0) t[u >> 2] = e;
                                                u = (a | 0) == 0;
                                                if (!u) t[a >> 2] = 0;
                                                t[D >> 2] = t[m >> 2];
                                                t[B >> 2] = t[p >> 2];
                                                h = (A | 0) == 0;
                                                i: do {
                                                    if (!(h & (g & w))) {
                                                        do {
                                                            if ((t[I >> 2] | 0) >>> 0 >= 4) {
                                                                if (!(s & g))
                                                                    if ((C | c | 0) == 0 ? (co(t[d >> 2] | 0, 7933, 4) | 0) == 0 : 0) k = 19;
                                                                    else e = c;
                                                                else k = 19;
                                                                if ((k | 0) == 19) {
                                                                    e = _A(d, I, c, E + 16 | 0, E + 20 | 0) | 0;
                                                                    if (e | 0) break;
                                                                    e = t[b >> 2] | 0
                                                                }
                                                                i = E + 24 | 0;
                                                                o = E + 32 | 0;
                                                                e = FA(d, I, v, e, i, o) | 0;
                                                                if (!e) {
                                                                    l = t[i >> 2] | 0;
                                                                    if (l >>> 0 > 4294967286) {
                                                                        e = 3;
                                                                        break e
                                                                    }
                                                                    e = t[o >> 2] | 0;
                                                                    if (!(u | w)) t[a >> 2] = (e | 0) == 0 ? 1 : 2;
                                                                    i = t[I >> 2] | 0;
                                                                    if (!e) {
                                                                        if (i >>> 0 < 10) {
                                                                            e = 7;
                                                                            break
                                                                        }
                                                                        e = t[d >> 2] | 0;
                                                                        if (!(SA(e, i, l, D, B) | 0)) {
                                                                            e = 3;
                                                                            break e
                                                                        }
                                                                    } else {
                                                                        if (i >>> 0 < 5) {
                                                                            e = 7;
                                                                            break
                                                                        }
                                                                        e = t[d >> 2] | 0;
                                                                        if (!(xA(e, i, D, B, n) | 0)) {
                                                                            e = 3;
                                                                            break e
                                                                        }
                                                                    }
                                                                    o = e;
                                                                    if (C | 0) {
                                                                        if ((t[m >> 2] | 0) != (t[D >> 2] | 0)) {
                                                                            e = 3;
                                                                            break e
                                                                        }
                                                                        if ((t[p >> 2] | 0) != (t[B >> 2] | 0)) {
                                                                            e = 3;
                                                                            break e
                                                                        }
                                                                    }
                                                                    if (!P) break i;
                                                                    e = A;
                                                                    i = E;
                                                                    l = e + 36 | 0;
                                                                    do {
                                                                        t[e >> 2] = t[i >> 2];
                                                                        e = e + 4 | 0;
                                                                        i = i + 4 | 0
                                                                    } while ((e | 0) < (l | 0));
                                                                    t[A + 12 >> 2] = o - (t[A >> 2] | 0);
                                                                    break i
                                                                }
                                                            } else e = 7
                                                        } while (0);
                                                        if (!(h & ((e | 0) == 7 & g))) break e
                                                    }
                                                } while (0);
                                                if (!y) t[n >> 2] = t[n >> 2] | (t[E + 16 >> 2] | 0) != 0;
                                                if (r | 0) t[r >> 2] = t[D >> 2];
                                                if (!f) {
                                                    e = 0;
                                                    break
                                                }
                                                t[f >> 2] = t[B >> 2];
                                                e = 0;
                                                break
                                            }
                                        }
                                    }
                                } else e = 7
                            } while (0);
                            x = R;
                            return e | 0
                        }

                        function RA(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                u = 0,
                                a = 0;
                            t[f >> 2] = 0;
                            u = t[i >> 2] | 0;
                            if (u >>> 0 > 11 ? (a = t[e >> 2] | 0, (co(a, 7953, 4) | 0) == 0) : 0)
                                if ((co(a + 8 | 0, 7958, 4) | 0) == 0 ? (n = VA(a + 4 | 0) | 0, (n + -12 | 0) >>> 0 <= 4294967274) : 0)
                                    if ((r | 0) != 0 & n >>> 0 > (u + -8 | 0) >>> 0) e = 7;
                                    else {
                                        t[f >> 2] = n;
                                        t[e >> 2] = a + 12;
                                        t[i >> 2] = (t[i >> 2] | 0) + -12;
                                        e = 0
                                    }
                            else e = 3;
                            else e = 0;
                            return e | 0
                        }

                        function GA(e, i, r, f, n, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            u = u | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            t[r >> 2] = 0;
                            o = t[i >> 2] | 0;
                            if (o >>> 0 >= 8) {
                                c = t[e >> 2] | 0;
                                if (!(co(c, 7948, 4) | 0))
                                    if ((VA(c + 4 | 0) | 0) == 10)
                                        if (o >>> 0 >= 18) {
                                            a = VA(c + 8 | 0) | 0;
                                            A = (UA(c + 12 | 0) | 0) + 1 | 0;
                                            l = (UA(c + 15 | 0) | 0) + 1 | 0;
                                            s = bo(l | 0, ((l | 0) < 0) << 31 >> 31 | 0, A | 0, ((A | 0) < 0) << 31 >> 31 | 0) | 0;
                                            b = y() | 0;
                                            if (b >>> 0 > 0 | (b | 0) == 0 & s >>> 0 > 4294967295) e = 3;
                                            else {
                                                if (u | 0) t[u >> 2] = a;
                                                if (f | 0) t[f >> 2] = A;
                                                if (n | 0) t[n >> 2] = l;
                                                t[e >> 2] = c + 18;
                                                t[i >> 2] = o + -18;
                                                t[r >> 2] = 1;
                                                e = 0
                                            }
                                        } else e = 7;
                                else e = 3;
                                else e = 0
                            } else e = 7;
                            return e | 0
                        }

                        function _A(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0;
                            a = t[e >> 2] | 0;
                            A = t[i >> 2] | 0;
                            t[f >> 2] = 0;
                            t[n >> 2] = 0;
                            c = (r | 0) != 0;
                            u = 22;
                            while (1) {
                                t[e >> 2] = a;
                                t[i >> 2] = A;
                                if (A >>> 0 < 8) {
                                    u = 7;
                                    break
                                }
                                l = VA(a + 4 | 0) | 0;
                                if (l >>> 0 > 4294967286) {
                                    u = 3;
                                    break
                                }
                                o = l + 9 & -2;
                                u = o + u | 0;
                                if (c & u >>> 0 > r >>> 0) {
                                    u = 3;
                                    break
                                }
                                if (!(co(a, 7943, 4) | 0)) {
                                    u = 0;
                                    break
                                }
                                if (!(co(a, 7938, 4) | 0)) {
                                    u = 0;
                                    break
                                }
                                if (A >>> 0 < o >>> 0) {
                                    u = 7;
                                    break
                                }
                                if (!(co(a, 7933, 4) | 0)) {
                                    t[f >> 2] = a + 8;
                                    t[n >> 2] = l
                                }
                                a = a + o | 0;
                                A = A - o | 0
                            }
                            return u | 0
                        }

                        function FA(e, i, r, f, n, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            u = u | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            l = t[e >> 2] | 0;
                            a = (co(l, 7938, 4) | 0) == 0;
                            o = a & 1;
                            A = t[i >> 2] | 0;
                            do {
                                if (A >>> 0 >= 8) {
                                    if (!(a | (co(l, 7943, 4) | 0) == 0)) {
                                        t[u >> 2] = QA(l, A) | 0;
                                        t[n >> 2] = t[i >> 2];
                                        a = 0;
                                        break
                                    }
                                    a = VA(l + 4 | 0) | 0;
                                    if (!(f >>> 0 > 11 & a >>> 0 > (f + -12 | 0) >>> 0))
                                        if ((r | 0) != 0 & a >>> 0 > (A + -8 | 0) >>> 0) a = 7;
                                        else {
                                            t[n >> 2] = a;
                                            t[e >> 2] = l + 8;
                                            t[i >> 2] = (t[i >> 2] | 0) + -8;
                                            t[u >> 2] = o;
                                            a = 0
                                        }
                                    else a = 3
                                } else a = 7
                            } while (0);
                            return a | 0
                        }

                        function SA(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var a = 0,
                                A = 0;
                            if (((!((e | 0) == 0 | i >>> 0 < 10) ? (MA(e + 3 | 0, i + -3 | 0) | 0) != 0 : 0) ? (i = u[e >> 0] | 0, a = (u[e + 7 >> 0] | 0) << 8 & 16128 | (u[e + 6 >> 0] | 0), A = (u[e + 9 >> 0] | 0) << 8 & 16128 | (u[e + 8 >> 0] | 0), (i & 25 | 0) == 16 ? ((u[e + 1 >> 0] | 0) << 8 | i | (u[e + 2 >> 0] | 0) << 16) >>> 5 >>> 0 < r >>> 0 : 0) : 0) ? !((a | 0) == 0 | (A | 0) == 0) : 0) {
                                if (f | 0) t[f >> 2] = a;
                                if (!n) e = 1;
                                else {
                                    t[n >> 2] = A;
                                    e = 1
                                }
                            } else e = 0;
                            return e | 0
                        }

                        function xA(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            o = x;
                            x = x + 48 | 0;
                            u = o + 40 | 0;
                            a = o + 36 | 0;
                            A = o + 32 | 0;
                            l = o;
                            if (!((e | 0) == 0 | i >>> 0 < 5) ? (QA(e, i) | 0) != 0 : 0) {
                                wf(l, e, i);
                                if (HA(l, u, a, A) | 0) {
                                    if (r | 0) t[r >> 2] = t[u >> 2];
                                    if (f | 0) t[f >> 2] = t[a >> 2];
                                    if (!n) e = 1;
                                    else {
                                        t[n >> 2] = t[A >> 2];
                                        e = 1
                                    }
                                } else e = 0
                            } else e = 0;
                            x = o;
                            return e | 0
                        }

                        function QA(e, i) {
                            e = e | 0;
                            i = i | 0;
                            if (i >>> 0 > 4 ? (f[e >> 0] | 0) == 47 : 0) e = (u[e + 4 >> 0] | 0) < 32 & 1;
                            else e = 0;
                            return e | 0
                        }

                        function HA(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            if ((zi(e, 8) | 0) == 47 ? (t[i >> 2] = (zi(e, 14) | 0) + 1, t[r >> 2] = (zi(e, 14) | 0) + 1, t[f >> 2] = zi(e, 1) | 0, (zi(e, 3) | 0) == 0) : 0) e = (t[e + 24 >> 2] | 0) == 0 & 1;
                            else e = 0;
                            return e | 0
                        }

                        function MA(e, i) {
                            e = e | 0;
                            i = i | 0;
                            if ((i >>> 0 > 2 ? (f[e >> 0] | 0) == -99 : 0) ? (f[e + 1 >> 0] | 0) == 1 : 0) e = (f[e + 2 >> 0] | 0) == 42 & 1;
                            else e = 0;
                            return e | 0
                        }

                        function VA(e) {
                            e = e | 0;
                            var i = 0;
                            i = YA(e) | 0;
                            return (YA(e + 2 | 0) | 0) << 16 | i | 0
                        }

                        function YA(e) {
                            e = e | 0;
                            return (u[e + 1 >> 0] | 0) << 8 | (u[e >> 0] | 0) | 0
                        }

                        function UA(e) {
                            e = e | 0;
                            var i = 0;
                            i = YA(e) | 0;
                            return (u[e + 2 >> 0] | 0) << 16 | i | 0
                        }

                        function ZA(e) {
                            e = e | 0;
                            if (e | 0) {
                                WA(e);
                                $e(e)
                            }
                            return
                        }

                        function WA(e) {
                            e = e | 0;
                            var i = 0;
                            if (e | 0) {
                                rc[t[(Lu() | 0) + 20 >> 2] & 31](e + 124 | 0);
                                Ne(e);
                                i = e + 2288 | 0;
                                $e(t[i >> 2] | 0);
                                t[i >> 2] = 0;
                                t[e + 2292 >> 2] = 0;
                                i = e + 12 | 0;
                                t[i >> 2] = 0;
                                t[i + 4 >> 2] = 0;
                                t[i + 8 >> 2] = 0;
                                t[i + 12 >> 2] = 0;
                                t[i + 16 >> 2] = 0;
                                t[i + 20 >> 2] = 0;
                                t[i + 24 >> 2] = 0;
                                t[e + 4 >> 2] = 0
                            }
                            return
                        }

                        function TA(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            do {
                                if (!e) i = 0;
                                else {
                                    f = t[e + 8 >> 2] | 0;
                                    u = t[f + 40 >> 2] | 0;
                                    a = e + 4 | 0;
                                    do {
                                        if (t[a >> 2] | 0) {
                                            r = e + 12 | 0;
                                            t[r >> 2] = t[u >> 2];
                                            if (!(Hn(t[u + 20 >> 2] | 0, f, 3) | 0)) {
                                                t[e >> 2] = 2;
                                                break
                                            }
                                            if (If(e, t[f >> 2] | 0) | 0) {
                                                i = f + 92 | 0;
                                                if (t[i >> 2] | 0) {
                                                    if (!(LA(e, f) | 0)) break;
                                                    if (t[i >> 2] | 0) A = 10;
                                                    else A = 9
                                                } else A = 9;
                                                if ((A | 0) == 9) {
                                                    i = t[t[r >> 2] >> 2] | 0;
                                                    if (zA(i) | 0) A = 10
                                                }
                                                if ((A | 0) == 10) {
                                                    Pi();
                                                    i = t[t[r >> 2] >> 2] | 0
                                                }
                                                if (($i(i) | 0) == 0 ? (JA(), t[(t[r >> 2] | 0) + 28 >> 2] | 0) : 0) Pi();
                                                if (((t[e + 56 >> 2] | 0 ? (t[e + 120 >> 2] | 0) > 0 : 0) ? (n = e + 136 | 0, (t[n >> 2] | 0) == 0) : 0) ? (mf(n, t[e + 132 >> 2] | 0) | 0) == 0 : 0) {
                                                    t[e >> 2] = 1;
                                                    break
                                                }
                                                t[a >> 2] = 0;
                                                A = 20
                                            }
                                        } else A = 20
                                    } while (0);
                                    if ((A | 0) == 20 ? Ei(e, t[e + 16 >> 2] | 0, t[e + 100 >> 2] | 0, t[e + 104 >> 2] | 0, t[f + 88 >> 2] | 0, 2) | 0 : 0) {
                                        t[u + 16 >> 2] = t[e + 116 >> 2];
                                        i = 1;
                                        break
                                    }
                                    ri(e);
                                    i = 0
                                }
                            } while (0);
                            return i | 0
                        }

                        function LA(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0;
                            n = t[i + 12 >> 2] | 0;
                            u = t[i + 96 >> 2] | 0;
                            a = t[i + 16 >> 2] | 0;
                            f = t[i + 100 >> 2] | 0;
                            r = ((u | 0) < 0) << 31 >> 31;
                            i = Io(u | 0, r | 0, 5) | 0;
                            l = ho(i | 0, y() | 0, 84, 0) | 0;
                            A = y() | 0;
                            r = Io(u | 0, r | 0, 2) | 0;
                            r = ho(l | 0, A | 0, r | 0, y() | 0) | 0;
                            r = Ii(r, y() | 0, 1) | 0;
                            if (!r) {
                                t[e >> 2] = 1;
                                i = 0
                            } else {
                                t[e + 264 >> 2] = r;
                                t[e + 268 >> 2] = r;
                                l = r + 84 | 0;
                                gt(r, n, a, l + i | 0, u, f, 0, 4, l);
                                i = 1
                            }
                            return i | 0
                        }

                        function zA(e) {
                            e = e | 0;
                            return (e + -7 | 0) >>> 0 < 4 | 0
                        }

                        function JA() {
                            var e = 0;
                            if (!(ao(9220) | 0)) {
                                if (!(t[1942] | 0)) e = 0;
                                else {
                                    OA();
                                    e = t[2248] | 0
                                }
                                t[1942] = e;
                                Ao(9220) | 0
                            }
                            return
                        }

                        function OA() {
                            var e = 0,
                                i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0;
                            e = x;
                            x = x + 32 | 0;
                            i = e + 20 | 0;
                            t[i >> 2] = 0;
                            r = e + 16 | 0;
                            t[r >> 2] = 0;
                            f = e + 12 | 0;
                            t[f >> 2] = 0;
                            n = e + 8 | 0;
                            t[n >> 2] = 0;
                            u = e + 4 | 0;
                            t[u >> 2] = 0;
                            a = e;
                            t[a >> 2] = 0;
                            t[a >> 2] = 3;
                            t[u >> 2] = 4;
                            t[n >> 2] = 18;
                            t[f >> 2] = 1;
                            t[r >> 2] = 19;
                            t[i >> 2] = 18;
                            x = e;
                            return
                        }

                        function qA(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0,
                                u = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                u = t[e + (n << 2) >> 2] | 0;
                                f[i + n >> 0] = ul(u >>> 16 & 255, u >>> 8 & 255, u & 255) | 0;
                                n = n + 1 | 0
                            }
                            return
                        }

                        function KA(e, i, r, n, a) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            a = a | 0;
                            var A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            l = n >> 1;
                            c = (a | 0) == 0;
                            o = 0;
                            while (1) {
                                if ((o | 0) >= (l | 0)) break;
                                a = o << 1;
                                A = t[e + (a << 2) >> 2] | 0;
                                a = t[e + ((a | 1) << 2) >> 2] | 0;
                                b = (a >>> 15 & 510) + (A >>> 15 & 510) | 0;
                                s = (a >>> 7 & 510) + (A >>> 7 & 510) | 0;
                                A = (a << 1 & 510) + (A << 1 & 510) | 0;
                                a = fl(b, s, A) | 0;
                                A = nl(b, s, A) | 0;
                                if (c) {
                                    b = i + o | 0;
                                    f[b >> 0] = (a + 1 + (u[b >> 0] | 0) | 0) >>> 1;
                                    b = r + o | 0;
                                    f[b >> 0] = (A + 1 + (u[b >> 0] | 0) | 0) >>> 1
                                } else {
                                    f[i + o >> 0] = a;
                                    f[r + o >> 0] = A
                                }
                                o = o + 1 | 0
                            }
                            do {
                                if (n & 1 | 0) {
                                    A = t[e + (o << 1 << 2) >> 2] | 0;
                                    s = A >>> 14 & 1020;
                                    b = A >>> 6 & 1020;
                                    A = A << 2 & 1020;
                                    a = fl(s, b, A) | 0;
                                    A = nl(s, b, A) | 0;
                                    if (c) {
                                        b = i + o | 0;
                                        f[b >> 0] = (a + 1 + (u[b >> 0] | 0) | 0) >>> 1;
                                        b = r + o | 0;
                                        f[b >> 0] = (A + 1 + (u[b >> 0] | 0) | 0) >>> 1;
                                        break
                                    } else {
                                        f[i + o >> 0] = a;
                                        f[r + o >> 0] = A;
                                        break
                                    }
                                }
                            } while (0);
                            return
                        }

                        function XA(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                f[i + n >> 0] = ul(u[e >> 0] | 0, u[e + 1 >> 0] | 0, u[e + 2 >> 0] | 0) | 0;
                                n = n + 1 | 0;
                                e = e + 3 | 0
                            }
                            return
                        }

                        function jA(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0;
                            n = 0;
                            while (1) {
                                if ((n | 0) >= (r | 0)) break;
                                f[i + n >> 0] = ul(u[e + 2 >> 0] | 0, u[e + 1 >> 0] | 0, u[e >> 0] | 0) | 0;
                                n = n + 1 | 0;
                                e = e + 3 | 0
                            }
                            return
                        }

                        function NA(e, i, r, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            n = n | 0;
                            var t = 0,
                                u = 0,
                                A = 0,
                                l = 0;
                            t = 0;
                            while (1) {
                                if ((t | 0) >= (n | 0)) break;
                                l = a[e >> 1] | 0;
                                A = a[e + 2 >> 1] | 0;
                                u = a[e + 4 >> 1] | 0;
                                f[i + t >> 0] = fl(l, A, u) | 0;
                                f[r + t >> 0] = nl(l, A, u) | 0;
                                e = e + 8 | 0;
                                t = t + 1 | 0
                            }
                            return
                        }

                        function $A(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var t = 0,
                                u = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            t = 0;
                            u = 0;
                            A = 0;
                            while (1) {
                                if ((t | 0) >= (f | 0)) break;
                                l = (a[e + (t << 1) >> 1] | 0) - (a[i + (t << 1) >> 1] | 0) | 0;
                                o = r + (t << 1) | 0;
                                n[o >> 1] = rl(l + (a[o >> 1] | 0) | 0) | 0;
                                l = (l | 0) > -1 ? l : 0 - l | 0;
                                l = ho(u | 0, A | 0, l | 0, ((l | 0) < 0) << 31 >> 31 | 0) | 0;
                                t = t + 1 | 0;
                                u = l;
                                A = y() | 0
                            }
                            d(A | 0);
                            return u | 0
                        }

                        function el(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var t = 0,
                                u = 0;
                            t = 0;
                            while (1) {
                                if ((t | 0) >= (f | 0)) break;
                                u = r + (t << 1) | 0;
                                n[u >> 1] = (a[e + (t << 1) >> 1] | 0) - (a[i + (t << 1) >> 1] | 0) + (a[u >> 1] | 0);
                                t = t + 1 | 0
                            }
                            return
                        }

                        function il(e, i, r, f, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            t = t | 0;
                            var u = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0;
                            u = 0;
                            while (1) {
                                if ((u | 0) >= (r | 0)) break;
                                c = n[e >> 1] | 0;
                                l = e + 2 | 0;
                                h = n[l >> 1] | 0;
                                b = n[i >> 1] | 0;
                                A = i + 2 | 0;
                                s = n[A >> 1] | 0;
                                o = u << 1;
                                n[t + (o << 1) >> 1] = rl(((c * 9 | 0) + 8 + s + ((b + h | 0) * 3 | 0) >> 4) + (a[f + (o << 1) >> 1] | 0) | 0) | 0;
                                o = o | 1;
                                n[t + (o << 1) >> 1] = rl(((h * 9 | 0) + 8 + b + ((s + c | 0) * 3 | 0) >> 4) + (a[f + (o << 1) >> 1] | 0) | 0) | 0;
                                e = l;
                                i = A;
                                u = u + 1 | 0
                            }
                            return
                        }

                        function rl(e) {
                            e = e | 0;
                            if ((e | 0) < 0) return 0;
                            else return ((e | 0) < 1023 ? e : 1023) & 65535 | 0;
                            return 0
                        }

                        function fl(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            return tl((v(i, -19081) | 0) + (v(e, -9719) | 0) + (r * 28800 | 0) | 0) | 0
                        }

                        function nl(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            return tl((v(i, -24116) | 0) + (e * 28800 | 0) + (v(r, -4684) | 0) | 0) | 0
                        }

                        function tl(e) {
                            e = e | 0;
                            var i = 0;
                            i = e + 33685504 >> 18;
                            return (i >>> 0 < 256 ? i : (e | 0) < -33685504 ? 0 : 255) | 0
                        }

                        function ul(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            return (e * 16839 | 0) + 1081344 + (i * 33059 | 0) + (r * 6420 | 0) >> 16 | 0
                        }

                        function al(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0;
                            u = x;
                            x = x + 16 | 0;
                            r = u + 8 | 0;
                            f = u + 4 | 0;
                            n = u;
                            do {
                                if (!e) e = 0;
                                else {
                                    if (!i) {
                                        t[e >> 2] = 2;
                                        e = 0;
                                        break
                                    }
                                    t[e + 8 >> 2] = i;
                                    t[e >> 2] = 0;
                                    a = e + 24 | 0;
                                    wf(a, t[i + 64 >> 2] | 0, t[i + 60 >> 2] | 0);
                                    if (HA(a, r, f, n) | 0) {
                                        t[e + 4 >> 2] = 2;
                                        n = t[r >> 2] | 0;
                                        t[i >> 2] = n;
                                        a = t[f >> 2] | 0;
                                        t[i + 4 >> 2] = a;
                                        if (gf(n, a, 1, e, 0) | 0) {
                                            e = 1;
                                            break
                                        }
                                    } else t[e >> 2] = 3;
                                    ri(e);
                                    e = 0
                                }
                            } while (0);
                            x = u;
                            return e | 0
                        }

                        function Al(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0;
                            f = i + 288 | 0;
                            r = 0;
                            while (1) {
                                if ((r | 0) >= (t[f >> 2] | 0)) break;
                                sl(e, i, r);
                                r = r + 1 | 0
                            }
                            return (t[i + 36 >> 2] | 0) == 0 | 0
                        }

                        function ll(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0;
                            n = t[e + 2256 >> 2] | 0;
                            A = e + 2296 | 0;
                            l = t[A >> 2] | 0;
                            a = n + (l << 1) | 0;
                            o = t[e + 2304 >> 2] | 0;
                            if ((t[e + 2236 >> 2] | 0) != 0 ? (c = f[o + (l * 800 | 0) + 797 >> 0] | 0, r = c & 255, c << 24 >> 24 != 0) : 0) {
                                f[a >> 0] = 0;
                                f[n + -2 >> 0] = 0;
                                if (!(f[o + (l * 800 | 0) + 768 >> 0] | 0)) {
                                    f[n + (l << 1) + 1 >> 0] = 0;
                                    f[n + -1 >> 0] = 0
                                }
                                t[o + (l * 800 | 0) + 788 >> 2] = 0;
                                t[o + (l * 800 | 0) + 792 >> 2] = 0;
                                f[o + (l * 800 | 0) + 796 >> 0] = 0
                            } else r = ol(e, a, i) | 0;
                            if ((t[e + 2308 >> 2] | 0) > 0) {
                                a = t[e + 2260 >> 2] | 0;
                                c = t[A >> 2] | 0;
                                A = a + (c << 2) | 0;
                                o = e + 2312 + (u[o + (l * 800 | 0) + 798 >> 0] << 3) + (u[o + (l * 800 | 0) + 768 >> 0] << 2) | 0;
                                o = u[o >> 0] | u[o + 1 >> 0] << 8 | u[o + 2 >> 0] << 16 | u[o + 3 >> 0] << 24;
                                f[A >> 0] = o;
                                f[A + 1 >> 0] = o >> 8;
                                f[A + 2 >> 0] = o >> 16;
                                f[A + 3 >> 0] = o >> 24;
                                c = a + (c << 2) + 2 | 0;
                                f[c >> 0] = u[c >> 0] | (r | 0) == 0
                            }
                            return (t[i + 24 >> 2] | 0) == 0 | 0
                        }

                        function ol(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0,
                                m = 0,
                                p = 0,
                                P = 0,
                                D = 0,
                                B = 0,
                                E = 0,
                                R = 0;
                            B = x;
                            x = x + 32 | 0;
                            a = B;
                            P = t[e + 2304 >> 2] | 0;
                            D = t[e + 2296 >> 2] | 0;
                            o = P + (D * 800 | 0) | 0;
                            p = u[P + (D * 800 | 0) + 798 >> 0] | 0;
                            l = t[e + 2256 >> 2] | 0;
                            Po(o | 0, 0, 768) | 0;
                            if (!(f[P + (D * 800 | 0) + 768 >> 0] | 0)) {
                                t[a >> 2] = 0;
                                t[a + 4 >> 2] = 0;
                                t[a + 8 >> 2] = 0;
                                t[a + 12 >> 2] = 0;
                                t[a + 16 >> 2] = 0;
                                t[a + 20 >> 2] = 0;
                                t[a + 24 >> 2] = 0;
                                t[a + 28 >> 2] = 0;
                                y = i + 1 | 0;
                                I = l + -1 | 0;
                                m = ic[t[2312] & 1](r, e + 2032 | 0, (u[I >> 0] | 0) + (u[y >> 0] | 0) | 0, e + 776 + (p << 5) + 8 | 0, 0, a) | 0;
                                d = (m | 0) > 0 & 1;
                                f[I >> 0] = d;
                                f[y >> 0] = d;
                                e: do {
                                    if ((m | 0) > 1) Ia(a, o);
                                    else {
                                        A = (n[a >> 1] | 0) + 3 >> 3 & 65535;
                                        a = 0;
                                        while (1) {
                                            if (a >>> 0 >= 256) break e;
                                            n[P + (D * 800 | 0) + (a << 1) >> 1] = A;
                                            a = a + 16 | 0
                                        }
                                    }
                                } while (0);
                                v = 1;
                                a = 0
                            } else {
                                v = 0;
                                a = 3
                            }
                            w = e + 1964 + (a * 68 | 0) | 0;
                            m = l + -2 | 0;
                            k = e + 776 + (p << 5) | 0;
                            g = f[i >> 0] & 15;
                            a = f[m >> 0] & 15;
                            y = 0;
                            h = 0;
                            while (1) {
                                if ((h | 0) == 4) break;
                                s = a & 255;
                                b = 0;
                                A = s & 1;
                                l = 0;
                                c = o;
                                a = g;
                                while (1) {
                                    if ((l | 0) == 4) break;
                                    d = a & 255;
                                    C = ic[t[2312] & 1](r, w, (d & 1) + A | 0, k, v, c) | 0;
                                    I = (C | 0) > (v | 0) & 1;
                                    b = cl(b, C, (n[c >> 1] | 0) != 0 & 1) | 0;
                                    A = I;
                                    l = l + 1 | 0;
                                    c = c + 32 | 0;
                                    a = (I << 7 | d >>> 1) & 255
                                }
                                o = o + 128 | 0;
                                g = (a & 255) >>> 4;
                                a = (A << 7 | s >>> 1) & 255;
                                y = b | y << 8;
                                h = h + 1 | 0
                            }
                            C = e + 2100 | 0;
                            I = e + 776 + (p << 5) + 16 | 0;
                            d = 0;
                            v = (a & 255) >>> 4;
                            s = g & 255;
                            b = 0;
                            w = P + (D * 800 | 0) + 512 | 0;
                            while (1) {
                                if (b >>> 0 >= 4) break;
                                A = b + 4 | 0;
                                a = 0;
                                h = (u[m >> 0] | 0) >>> A;
                                k = 0;
                                A = (u[i >> 0] | 0) >>> A;
                                g = w;
                                while (1) {
                                    if ((k | 0) == 2) break;
                                    c = h & 1;
                                    o = 0;
                                    l = g;
                                    while (1) {
                                        if ((o | 0) == 2) break;
                                        R = ic[t[2312] & 1](r, C, c + (A & 1) | 0, I, 0, l) | 0;
                                        E = (R | 0) > 0 & 1;
                                        c = E;
                                        a = cl(a, R, (n[l >> 1] | 0) != 0 & 1) | 0;
                                        o = o + 1 | 0;
                                        A = E << 3 | A >>> 1 & 127;
                                        l = l + 32 | 0
                                    }
                                    h = c << 5 | h >>> 1 & 127;
                                    k = k + 1 | 0;
                                    A = A >>> 2 & 63;
                                    g = g + 64 | 0
                                }
                                d = a << (b << 2) | d;
                                v = (h & 240) << b | v;
                                s = (A << 4 & 4080) << b | s;
                                b = b + 2 | 0;
                                w = w + 128 | 0
                            }
                            f[i >> 0] = s;
                            f[m >> 0] = v;
                            t[P + (D * 800 | 0) + 788 >> 2] = y;
                            t[P + (D * 800 | 0) + 792 >> 2] = d;
                            if (!(d & 43690)) a = t[e + 776 + (p << 5) + 28 >> 2] & 255;
                            else a = 0;
                            f[P + (D * 800 | 0) + 796 >> 0] = a;
                            x = B;
                            return (d | y | 0) == 0 | 0
                        }

                        function cl(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            return ((i | 0) > 3 ? 3 : (i | 0) > 1 ? 2 : r) | e << 2 | 0
                        }

                        function sl(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0;
                            w = (t[i + 2244 >> 2] | 0) + (r << 2) | 0;
                            a = i + 2248 | 0;
                            g = t[i + 2304 >> 2] | 0;
                            if (!(t[i + 108 >> 2] | 0)) n = 0;
                            else {
                                if (!(bl(e, u[i + 904 >> 0] | 0) | 0)) n = bl(e, u[i + 905 >> 0] | 0) | 0;
                                else n = (bl(e, u[i + 906 >> 0] | 0) | 0) + 2 | 0;
                                n = n & 255
                            }
                            f[g + (r * 800 | 0) + 798 >> 0] = n;
                            if (t[i + 2236 >> 2] | 0) f[g + (r * 800 | 0) + 797 >> 0] = bl(e, u[i + 2240 >> 0] | 0) | 0;
                            k = (bl(e, 145) | 0) == 0;
                            f[g + (r * 800 | 0) + 768 >> 0] = k & 1;
                            e: do {
                                if (k) {
                                    n = g + (r * 800 | 0) + 769 | 0;
                                    l = 0;
                                    while (1) {
                                        if ((l | 0) == 4) break e;
                                        c = i + 2248 + l | 0;
                                        a = 0;
                                        A = u[c >> 0] | 0;
                                        while (1) {
                                            if ((a | 0) == 4) break;
                                            s = w + a | 0;
                                            b = u[s >> 0] | 0;
                                            o = bl(e, u[4192 + (b * 90 | 0) + (A * 9 | 0) >> 0] | 0) | 0;
                                            while (1) {
                                                h = f[5104 + o >> 0] | 0;
                                                k = h << 24 >> 24;
                                                if (!(41706 >>> o & 1)) break;
                                                o = (bl(e, u[4192 + (b * 90 | 0) + (A * 9 | 0) + k >> 0] | 0) | 0) + (k << 1) | 0
                                            }
                                            A = 0 - (h << 24 >> 24) | 0;
                                            f[s >> 0] = A;
                                            a = a + 1 | 0
                                        }
                                        k = u[w >> 0] | u[w + 1 >> 0] << 8 | u[w + 2 >> 0] << 16 | u[w + 3 >> 0] << 24;
                                        f[n >> 0] = k;
                                        f[n + 1 >> 0] = k >> 8;
                                        f[n + 2 >> 0] = k >> 16;
                                        f[n + 3 >> 0] = k >> 24;
                                        f[c >> 0] = A;
                                        n = n + 4 | 0;
                                        l = l + 1 | 0
                                    }
                                } else {
                                    if (!(bl(e, 156) | 0)) {
                                        n = (bl(e, 163) | 0) == 0;
                                        n = n ? 0 : 2
                                    } else {
                                        n = (bl(e, 128) | 0) == 0;
                                        n = n ? 3 : 1
                                    }
                                    i = n & 255;
                                    f[g + (r * 800 | 0) + 769 >> 0] = i;
                                    Po(w | 0, i | 0, 4) | 0;
                                    Po(a | 0, i | 0, 4) | 0
                                }
                            } while (0);
                            if (bl(e, 142) | 0)
                                if (!(bl(e, 114) | 0)) n = 2;
                                else {
                                    n = (bl(e, 183) | 0) == 0;
                                    n = n ? 3 : 1
                                }
                            else n = 0;
                            f[g + (r * 800 | 0) + 785 >> 0] = n;
                            return
                        }

                        function bl(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            a = e + 4 | 0;
                            u = t[a >> 2] | 0;
                            A = e + 8 | 0;
                            r = t[A >> 2] | 0;
                            if ((r | 0) < 0) {
                                hl(e);
                                n = t[A >> 2] | 0
                            } else n = r;
                            r = (v(u, i) | 0) >>> 8;
                            i = t[e >> 2] | 0;
                            f = i >>> n >>> 0 > r >>> 0;
                            if (f) {
                                t[e >> 2] = i - (r + 1 << n);
                                r = u - r | 0
                            } else r = r + 1 | 0;
                            u = (kl(r) | 0) ^ 7;
                            t[A >> 2] = n - u;
                            t[a >> 2] = (r << u) + -1;
                            return f & 1 | 0
                        }

                        function hl(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            i = e + 12 | 0;
                            r = t[i >> 2] | 0;
                            if (r >>> 0 < (t[e + 20 >> 2] | 0) >>> 0) {
                                f = u[r >> 0] | u[r + 1 >> 0] << 8 | u[r + 2 >> 0] << 16 | u[r + 3 >> 0] << 24;
                                t[i >> 2] = r + 3;
                                r = (wl(f) | 0) >>> 8;
                                t[e >> 2] = t[e >> 2] << 24 | r;
                                r = e + 8 | 0;
                                t[r >> 2] = (t[r >> 2] | 0) + 24
                            } else gl(e);
                            return
                        }

                        function kl(e) {
                            e = e | 0;
                            return (C(e | 0) | 0) ^ 31 | 0
                        }

                        function wl(e) {
                            e = e | 0;
                            return yo(e | 0) | 0
                        }

                        function gl(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            i = e + 12 | 0;
                            r = t[i >> 2] | 0;
                            do {
                                if (r >>> 0 >= (t[e + 16 >> 2] | 0) >>> 0) {
                                    i = e + 24 | 0;
                                    if (!(t[i >> 2] | 0)) {
                                        t[e >> 2] = t[e >> 2] << 8;
                                        e = e + 8 | 0;
                                        t[e >> 2] = (t[e >> 2] | 0) + 8;
                                        t[i >> 2] = 1;
                                        break
                                    } else {
                                        t[e + 8 >> 2] = 0;
                                        break
                                    }
                                } else {
                                    f = e + 8 | 0;
                                    t[f >> 2] = (t[f >> 2] | 0) + 8;
                                    t[i >> 2] = r + 1;
                                    t[e >> 2] = t[e >> 2] << 8 | (u[r >> 0] | 0)
                                }
                            } while (0);
                            return
                        }

                        function vl(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0;
                            e: do {
                                if (e) {
                                    Il(e);
                                    if (!i) {
                                        ia(e, 2, 7963) | 0;
                                        r = 0;
                                        break
                                    }
                                    o = t[i + 64 >> 2] | 0;
                                    c = t[i + 60 >> 2] | 0;
                                    if (c >>> 0 < 4) {
                                        ia(e, 7, 8e3) | 0;
                                        r = 0;
                                        break
                                    }
                                    a = u[o >> 0] | 0;
                                    r = u[o + 1 >> 0] << 8 | a | u[o + 2 >> 0] << 16;
                                    l = (a & 1 ^ 1) & 255;
                                    b = e + 40 | 0;
                                    f[b >> 0] = l;
                                    A = a >>> 1 & 7;
                                    f[e + 41 >> 0] = A;
                                    a = a >>> 4 & 1;
                                    f[e + 42 >> 0] = a;
                                    r = r >>> 5;
                                    s = e + 44 | 0;
                                    t[s >> 2] = r;
                                    if ((A & 255) > 3) {
                                        ia(e, 3, 8018) | 0;
                                        r = 0;
                                        break
                                    }
                                    if (!(a << 24 >> 24)) {
                                        ia(e, 4, 8049) | 0;
                                        r = 0;
                                        break
                                    }
                                    A = o + 3 | 0;
                                    a = c + -3 | 0;
                                    do {
                                        if (l << 24 >> 24) {
                                            if (a >>> 0 < 7) {
                                                ia(e, 7, 8072) | 0;
                                                r = 0;
                                                break e
                                            }
                                            if (!(MA(A, a) | 0)) {
                                                ia(e, 3, 8100) | 0;
                                                r = 0;
                                                break e
                                            } else {
                                                l = o + 7 | 0;
                                                r = u[l >> 0] << 8 & 16128 | u[o + 6 >> 0];
                                                n[e + 48 >> 1] = r;
                                                f[e + 52 >> 0] = (u[l >> 0] | 0) >>> 6;
                                                l = o + 9 | 0;
                                                a = u[l >> 0] << 8 & 16128 | u[o + 8 >> 0];
                                                n[e + 50 >> 1] = a;
                                                f[e + 53 >> 0] = (u[l >> 0] | 0) >>> 6;
                                                t[e + 288 >> 2] = (r + 15 | 0) >>> 4;
                                                t[e + 292 >> 2] = (a + 15 | 0) >>> 4;
                                                t[i >> 2] = r;
                                                t[i + 4 >> 2] = a;
                                                t[i + 72 >> 2] = 0;
                                                t[i + 84 >> 2] = 0;
                                                t[i + 76 >> 2] = 0;
                                                t[i + 80 >> 2] = r;
                                                t[i + 88 >> 2] = a;
                                                t[i + 92 >> 2] = 0;
                                                t[i + 96 >> 2] = r;
                                                t[i + 100 >> 2] = a;
                                                t[i + 12 >> 2] = r;
                                                t[i + 16 >> 2] = a;
                                                dl(e + 904 | 0);
                                                yl(e + 104 | 0);
                                                i = o + 10 | 0;
                                                a = c + -10 | 0;
                                                r = t[s >> 2] | 0;
                                                break
                                            }
                                        } else i = A
                                    } while (0);
                                    if (r >>> 0 > a >>> 0) {
                                        ia(e, 7, 8114) | 0;
                                        r = 0;
                                        break
                                    }
                                    A = e + 12 | 0;
                                    ml(A, i, r);
                                    r = t[s >> 2] | 0;
                                    if (f[b >> 0] | 0) {
                                        f[e + 54 >> 0] = pl(A) | 0;
                                        f[e + 55 >> 0] = pl(A) | 0
                                    }
                                    if (!(Pl(A, e + 104 | 0, e + 904 | 0) | 0)) {
                                        ia(e, 3, 8135) | 0;
                                        r = 0;
                                        break
                                    }
                                    if (!(Dl(A, e) | 0)) {
                                        ia(e, 3, 8163) | 0;
                                        r = 0;
                                        break
                                    }
                                    r = Bl(e, i + r | 0, a - r | 0) | 0;
                                    if (r | 0) {
                                        ia(e, r, 8190) | 0;
                                        r = 0;
                                        break
                                    }
                                    El(e);
                                    if (!(f[b >> 0] | 0)) {
                                        ia(e, 4, 8214) | 0;
                                        r = 0;
                                        break
                                    } else {
                                        pl(A) | 0;
                                        Rl(A, e);
                                        t[e + 4 >> 2] = 1;
                                        r = 1;
                                        break
                                    }
                                } else r = 0
                            } while (0);
                            return r | 0
                        }

                        function Cl(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0;
                            t[e + 12 >> 2] = i;
                            f = i + r | 0;
                            t[e + 16 >> 2] = f;
                            t[e + 20 >> 2] = r >>> 0 > 3 ? f + -4 + 1 | 0 : i;
                            return
                        }

                        function Il(e) {
                            e = e | 0;
                            t[e >> 2] = 0;
                            t[e + 8 >> 2] = 8231;
                            return
                        }

                        function dl(e) {
                            e = e | 0;
                            n[e >> 1] = 65535;
                            f[e + 2 >> 0] = 255;
                            return
                        }

                        function yl(e) {
                            e = e | 0;
                            t[e >> 2] = 0;
                            t[e + 4 >> 2] = 0;
                            t[e + 8 >> 2] = 1;
                            t[e + 12 >> 2] = 0;
                            t[e + 16 >> 2] = 0;
                            return
                        }

                        function ml(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            t[e + 4 >> 2] = 254;
                            t[e >> 2] = 0;
                            t[e + 8 >> 2] = -8;
                            t[e + 24 >> 2] = 0;
                            Cl(e, i, r);
                            Sl(e);
                            return
                        }

                        function pl(e) {
                            e = e | 0;
                            return Gl(e, 1) | 0
                        }

                        function Pl(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0,
                                u = 0,
                                a = 0;
                            a = pl(e) | 0;
                            t[i >> 2] = a;
                            e: do {
                                if (a) {
                                    a = i + 4 | 0;
                                    t[a >> 2] = pl(e) | 0;
                                    i: do {
                                        if (pl(e) | 0) {
                                            t[i + 8 >> 2] = pl(e) | 0;
                                            n = 0;
                                            while (1) {
                                                if ((n | 0) == 4) break;
                                                if (!(pl(e) | 0)) u = 0;
                                                else u = Ml(e, 7) | 0;
                                                f[i + 12 + n >> 0] = u;
                                                n = n + 1 | 0
                                            }
                                            n = 0;
                                            while (1) {
                                                if ((n | 0) == 4) break i;
                                                if (!(pl(e) | 0)) u = 0;
                                                else u = Ml(e, 6) | 0;
                                                f[i + 16 + n >> 0] = u;
                                                n = n + 1 | 0
                                            }
                                        }
                                    } while (0);
                                    if (t[a >> 2] | 0) {
                                        n = 0;
                                        while (1) {
                                            if ((n | 0) == 3) break e;
                                            if (!(pl(e) | 0)) u = 255;
                                            else u = Gl(e, 8) | 0;
                                            f[r + n >> 0] = u;
                                            n = n + 1 | 0
                                        }
                                    }
                                } else t[i + 4 >> 2] = 0
                            } while (0);
                            return (t[e + 24 >> 2] | 0) == 0 | 0
                        }

                        function Dl(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0;
                            f = i + 56 | 0;
                            t[f >> 2] = pl(e) | 0;
                            n = i + 60 | 0;
                            t[n >> 2] = Gl(e, 6) | 0;
                            t[i + 64 >> 2] = Gl(e, 3) | 0;
                            r = pl(e) | 0;
                            t[i + 68 >> 2] = r;
                            e: do {
                                if (r | 0 ? pl(e) | 0 : 0) {
                                    r = 0;
                                    while (1) {
                                        if ((r | 0) == 4) break;
                                        if (pl(e) | 0) t[i + 72 + (r << 2) >> 2] = Ml(e, 6) | 0;
                                        r = r + 1 | 0
                                    }
                                    r = 0;
                                    while (1) {
                                        if ((r | 0) == 4) break e;
                                        if (pl(e) | 0) t[i + 88 + (r << 2) >> 2] = Ml(e, 6) | 0;
                                        r = r + 1 | 0
                                    }
                                }
                            } while (0);
                            if (!(t[n >> 2] | 0)) r = 0;
                            else r = (t[f >> 2] | 0) == 0 ? 2 : 1;
                            t[i + 2308 >> 2] = r;
                            return (t[e + 24 >> 2] | 0) == 0 | 0
                        }

                        function Bl(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0;
                            A = i + r | 0;
                            l = (1 << (Gl(e + 12 | 0, 2) | 0)) + -1 | 0;
                            t[e + 312 >> 2] = l;
                            f = l * 3 | 0;
                            if (f >>> 0 > r >>> 0) i = 7;
                            else {
                                a = 0;
                                n = r - f | 0;
                                r = i + f | 0;
                                while (1) {
                                    if ((a | 0) == (l | 0)) break;
                                    f = (u[i + 1 >> 0] | 0) << 8 | (u[i >> 0] | 0) | (u[i + 2 >> 0] | 0) << 16;
                                    f = f >>> 0 > n >>> 0 ? n : f;
                                    ml(e + 316 + (a * 28 | 0) | 0, r, f);
                                    a = a + 1 | 0;
                                    n = n - f | 0;
                                    r = r + f | 0;
                                    i = i + 3 | 0
                                }
                                ml(e + 316 + (l * 28 | 0) | 0, r, n);
                                i = r >>> 0 < A >>> 0 ? 0 : 5
                            }
                            return i | 0
                        }

                        function El(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                n = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0;
                            i = e + 12 | 0;
                            c = Gl(i, 7) | 0;
                            if (!(Hl(i) | 0)) s = 0;
                            else s = Ml(i, 4) | 0;
                            if (!(Hl(i) | 0)) b = 0;
                            else b = Ml(i, 4) | 0;
                            if (!(Hl(i) | 0)) h = 0;
                            else h = Ml(i, 4) | 0;
                            if (!(Hl(i) | 0)) k = 0;
                            else k = Ml(i, 4) | 0;
                            if (!(Hl(i) | 0)) o = 0;
                            else o = Ml(i, 4) | 0;
                            n = e + 104 | 0;
                            A = e + 112 | 0;
                            l = e + 776 | 0;
                            i = 0;
                            while (1) {
                                if ((i | 0) == 4) break;
                                if (!(t[n >> 2] | 0))
                                    if (!i) {
                                        r = c;
                                        w = 17
                                    } else {
                                        r = e + 776 + (i << 5) | 0;
                                        t[r >> 2] = t[l >> 2];
                                        t[r + 4 >> 2] = t[l + 4 >> 2];
                                        t[r + 8 >> 2] = t[l + 8 >> 2];
                                        t[r + 12 >> 2] = t[l + 12 >> 2];
                                        t[r + 16 >> 2] = t[l + 16 >> 2];
                                        t[r + 20 >> 2] = t[l + 20 >> 2];
                                        t[r + 24 >> 2] = t[l + 24 >> 2];
                                        t[r + 28 >> 2] = t[l + 28 >> 2]
                                    }
                                else {
                                    r = ((t[A >> 2] | 0) == 0 ? c : 0) + (f[e + 116 + i >> 0] | 0) | 0;
                                    w = 17
                                }
                                if ((w | 0) == 17) {
                                    w = 0;
                                    t[e + 776 + (i << 5) >> 2] = u[7280 + (Vl(r + s | 0, 127) | 0) >> 0];
                                    t[e + 776 + (i << 5) + 4 >> 2] = a[7408 + ((Vl(r, 127) | 0) << 1) >> 1];
                                    t[e + 776 + (i << 5) + 8 >> 2] = u[7280 + (Vl(r + b | 0, 127) | 0) >> 0] << 1;
                                    g = (a[7408 + ((Vl(r + h | 0, 127) | 0) << 1) >> 1] | 0) * 101581 | 0;
                                    t[e + 776 + (i << 5) + 12 >> 2] = g >>> 0 < 524288 ? 8 : g >>> 16;
                                    t[e + 776 + (i << 5) + 16 >> 2] = u[7280 + (Vl(r + k | 0, 117) | 0) >> 0];
                                    r = r + o | 0;
                                    t[e + 776 + (i << 5) + 20 >> 2] = a[7408 + ((Vl(r, 127) | 0) << 1) >> 1];
                                    t[e + 776 + (i << 5) + 24 >> 2] = r
                                }
                                i = i + 1 | 0
                            }
                            return
                        }

                        function Rl(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                n = 0,
                                a = 0,
                                A = 0,
                                l = 0;
                            l = 0;
                            while (1) {
                                if ((l | 0) == 4) break;
                                a = 0;
                                while (1) {
                                    if ((a | 0) == 8) break;
                                    n = 0;
                                    while (1) {
                                        if ((n | 0) == 3) break;
                                        r = 0;
                                        while (1) {
                                            if ((r | 0) == 11) break;
                                            if (!(bl(e, u[5136 + (l * 264 | 0) + (a * 33 | 0) + (n * 11 | 0) + r >> 0] | 0) | 0)) A = u[6192 + (l * 264 | 0) + (a * 33 | 0) + (n * 11 | 0) + r >> 0] | 0;
                                            else A = Gl(e, 8) | 0;
                                            f[i + 907 + (l * 264 | 0) + (a * 33 | 0) + (n * 11 | 0) + r >> 0] = A;
                                            r = r + 1 | 0
                                        }
                                        n = n + 1 | 0
                                    }
                                    a = a + 1 | 0
                                }
                                r = 0;
                                while (1) {
                                    if ((r | 0) == 17) break;
                                    t[i + 1964 + (l * 68 | 0) + (r << 2) >> 2] = i + 907 + (l * 264 | 0) + ((u[7248 + r >> 0] | 0) * 33 | 0);
                                    r = r + 1 | 0
                                }
                                l = l + 1 | 0
                            }
                            l = _l(e) | 0;
                            t[i + 2236 >> 2] = l;
                            if (l | 0) f[i + 2240 >> 0] = Gl(e, 8) | 0;
                            return
                        }

                        function Gl(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0;
                            f = 0;
                            while (1) {
                                r = i + -1 | 0;
                                if ((i | 0) <= 0) break;
                                f = (Fl(e) | 0) << r | f;
                                i = r
                            }
                            return f | 0
                        }

                        function _l(e) {
                            e = e | 0;
                            return Gl(e, 1) | 0
                        }

                        function Fl(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            a = e + 4 | 0;
                            u = t[a >> 2] | 0;
                            A = e + 8 | 0;
                            i = t[A >> 2] | 0;
                            if ((i | 0) < 0) {
                                Sl(e);
                                f = t[A >> 2] | 0
                            } else f = i;
                            i = u >>> 1 & 16777215;
                            r = t[e >> 2] | 0;
                            n = r >>> f >>> 0 > i >>> 0;
                            if (n) {
                                t[e >> 2] = r - (i + 1 << f);
                                i = u - i | 0
                            } else i = i + 1 | 0;
                            u = (xl(i) | 0) ^ 7;
                            t[A >> 2] = f - u;
                            t[a >> 2] = (i << u) + -1;
                            return n & 1 | 0
                        }

                        function Sl(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            i = e + 12 | 0;
                            r = t[i >> 2] | 0;
                            if (r >>> 0 < (t[e + 20 >> 2] | 0) >>> 0) {
                                f = u[r >> 0] | u[r + 1 >> 0] << 8 | u[r + 2 >> 0] << 16 | u[r + 3 >> 0] << 24;
                                t[i >> 2] = r + 3;
                                r = (Ql(f) | 0) >>> 8;
                                t[e >> 2] = t[e >> 2] << 24 | r;
                                r = e + 8 | 0;
                                t[r >> 2] = (t[r >> 2] | 0) + 24
                            } else gl(e);
                            return
                        }

                        function xl(e) {
                            e = e | 0;
                            return (C(e | 0) | 0) ^ 31 | 0
                        }

                        function Ql(e) {
                            e = e | 0;
                            return yo(e | 0) | 0
                        }

                        function Hl(e) {
                            e = e | 0;
                            return Gl(e, 1) | 0
                        }

                        function Ml(e, i) {
                            e = e | 0;
                            i = i | 0;
                            i = Gl(e, i) | 0;
                            e = (Yl(e) | 0) == 0;
                            return (e ? i : 0 - i | 0) | 0
                        }

                        function Vl(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return ((e | 0) < 0 ? 0 : (e | 0) > (i | 0) ? i : e) | 0
                        }

                        function Yl(e) {
                            e = e | 0;
                            return Gl(e, 1) | 0
                        }

                        function Ul(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0;
                            n = x;
                            x = x + 16 | 0;
                            i = n + 4 | 0;
                            r = n;
                            t[r >> 2] = 0;
                            t[i >> 2] = EA(t[e >> 2] | 0, t[e + 4 >> 2] | 0, 0, 0, 0, r, 0, e) | 0;
                            if (!(t[i >> 2] | 0)) {
                                if (t[r >> 2] | 0) f = 4
                            } else if ((t[i >> 2] | 0) == 7 & (t[r >> 2] | 0) != 0) f = 4;
                            if ((f | 0) == 4) t[i >> 2] = 8;
                            x = n;
                            return t[i >> 2] | 0
                        }

                        function Zl() {
                            var e = 0;
                            e = Df(1, 0, 2376) | 0;
                            if (e | 0) {
                                Il(e);
                                rc[t[(Lu() | 0) >> 2] & 31](e + 124 | 0);
                                t[e + 4 >> 2] = 0;
                                t[e + 312 >> 2] = 0;
                                Wl()
                            }
                            return e | 0
                        }

                        function Wl() {
                            if (!(t[2312] | 0)) t[2312] = 1;
                            return
                        }

                        function Tl(e, i, r, f, a, A) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            a = a | 0;
                            A = A | 0;
                            var l = 0,
                                o = 0,
                                c = 0;
                            r = (t[i + (a << 2) >> 2] | 0) + (r * 11 | 0) | 0;
                            e: while (1) {
                                if ((a | 0) >= 16) {
                                    a = 16;
                                    break
                                }
                                if (!(ql(e, u[r >> 0] | 0) | 0)) break;
                                while (1) {
                                    c = a + 1 | 0;
                                    if (ql(e, u[r + 1 >> 0] | 0) | 0) break;
                                    if ((c | 0) == 16) {
                                        a = 16;
                                        break e
                                    }
                                    r = t[i + (c << 2) >> 2] | 0;
                                    a = c
                                }
                                o = t[i + (c << 2) >> 2] | 0;
                                if (!(ql(e, u[r + 2 >> 0] | 0) | 0)) {
                                    l = 1;
                                    r = o + 11 | 0
                                } else {
                                    l = Ll(e, r) | 0;
                                    r = o + 22 | 0
                                }
                                o = zl(e, l) | 0;
                                o = (v(t[f + (((a | 0) > 0 & 1) << 2) >> 2] | 0, o) | 0) & 65535;
                                n[A + ((u[7664 + a >> 0] | 0) << 1) >> 1] = o;
                                a = c
                            }
                            return a | 0
                        }

                        function Ll(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                n = 0,
                                a = 0;
                            do {
                                if (!(ql(e, u[i + 3 >> 0] | 0) | 0))
                                    if (!(ql(e, u[i + 4 >> 0] | 0) | 0)) i = 2;
                                    else i = (ql(e, u[i + 5 >> 0] | 0) | 0) + 3 | 0;
                                else {
                                    if (!(ql(e, u[i + 6 >> 0] | 0) | 0))
                                        if (!(ql(e, u[i + 7 >> 0] | 0) | 0)) {
                                            i = (ql(e, 159) | 0) + 5 | 0;
                                            break
                                        } else {
                                            i = ((ql(e, 165) | 0) << 1) + 7 | 0;
                                            i = i + (ql(e, 145) | 0) | 0;
                                            break
                                        } n = ql(e, u[i + 8 >> 0] | 0) | 0;
                                    n = (ql(e, u[i + (n + 9) >> 0] | 0) | 0) + (n << 1) | 0;
                                    i = 0;
                                    r = t[7680 + (n << 2) >> 2] | 0;
                                    while (1) {
                                        a = f[r >> 0] | 0;
                                        if (!(a << 24 >> 24)) break;
                                        i = (ql(e, a & 255) | 0) + (i << 1) | 0;
                                        r = r + 1 | 0
                                    }
                                    i = (8 << n) + 3 + i | 0
                                }
                            } while (0);
                            return i | 0
                        }

                        function zl(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0;
                            f = e + 8 | 0;
                            r = t[f >> 2] | 0;
                            if ((r | 0) < 0) {
                                Jl(e);
                                r = t[f >> 2] | 0
                            }
                            A = e + 4 | 0;
                            l = t[A >> 2] | 0;
                            u = l >>> 1;
                            a = t[e >> 2] | 0;
                            n = u - (a >>> r) >> 31;
                            t[f >> 2] = r + -1;
                            t[A >> 2] = n + l | 1;
                            t[e >> 2] = a - ((n & u + 1) << r);
                            return (n ^ i) - n | 0
                        }

                        function Jl(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0;
                            i = e + 12 | 0;
                            r = t[i >> 2] | 0;
                            if (r >>> 0 < (t[e + 20 >> 2] | 0) >>> 0) {
                                f = u[r >> 0] | u[r + 1 >> 0] << 8 | u[r + 2 >> 0] << 16 | u[r + 3 >> 0] << 24;
                                t[i >> 2] = r + 3;
                                r = (Ol(f) | 0) >>> 8;
                                t[e >> 2] = t[e >> 2] << 24 | r;
                                r = e + 8 | 0;
                                t[r >> 2] = (t[r >> 2] | 0) + 24
                            } else gl(e);
                            return
                        }

                        function Ol(e) {
                            e = e | 0;
                            return yo(e | 0) | 0
                        }

                        function ql(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            a = e + 4 | 0;
                            u = t[a >> 2] | 0;
                            A = e + 8 | 0;
                            r = t[A >> 2] | 0;
                            if ((r | 0) < 0) {
                                Jl(e);
                                n = t[A >> 2] | 0
                            } else n = r;
                            r = (v(u, i) | 0) >>> 8;
                            i = t[e >> 2] | 0;
                            f = i >>> n >>> 0 > r >>> 0;
                            if (f) {
                                t[e >> 2] = i - (r + 1 << n);
                                r = u - r | 0
                            } else r = r + 1 | 0;
                            u = (Kl(r) | 0) ^ 7;
                            t[A >> 2] = n - u;
                            t[a >> 2] = (r << u) + -1;
                            return f & 1 | 0
                        }

                        function Kl(e) {
                            e = e | 0;
                            return (C(e | 0) | 0) ^ 31 | 0
                        }

                        function Xl(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0;
                            do {
                                if (!e) r = 0;
                                else {
                                    if (!i) {
                                        ia(e, 2, 8261) | 0;
                                        r = 0;
                                        break
                                    }
                                    f = e + 4 | 0;
                                    if ((t[f >> 2] | 0) == 0 ? (vl(e, i) | 0) == 0 : 0) {
                                        r = 0;
                                        break
                                    }
                                    if (!(la(e, i) | 0)) {
                                        if (!(ba(e, i) | 0)) r = 0;
                                        else r = jl(e, i) | 0;
                                        r = (ca(e, i) | 0) & r;
                                        if (r | 0) {
                                            t[f >> 2] = 0;
                                            break
                                        }
                                    }
                                    WA(e);
                                    r = 0
                                }
                            } while (0);
                            return r | 0
                        }

                        function jl(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0;
                            n = e + 2300 | 0;
                            u = e + 308 | 0;
                            a = e + 312 | 0;
                            A = e + 12 | 0;
                            l = e + 2296 | 0;
                            o = e + 288 | 0;
                            r = 0;
                            e: while (1) {
                                t[n >> 2] = r;
                                if ((r | 0) >= (t[u >> 2] | 0)) {
                                    f = 13;
                                    break
                                }
                                r = e + 316 + ((t[a >> 2] & r) * 28 | 0) | 0;
                                if (!(Al(A, e) | 0)) {
                                    f = 4;
                                    break
                                }
                                f = t[l >> 2] | 0;
                                while (1) {
                                    if ((f | 0) >= (t[o >> 2] | 0)) break;
                                    if (!(ll(e, r) | 0)) {
                                        f = 8;
                                        break e
                                    }
                                    f = (t[l >> 2] | 0) + 1 | 0;
                                    t[l >> 2] = f
                                }
                                mA(e);
                                if (!(Zu(e, i) | 0)) {
                                    f = 11;
                                    break
                                }
                                r = (t[n >> 2] | 0) + 1 | 0
                            }
                            do {
                                if ((f | 0) == 4) {
                                    ia(e, 7, 8298) | 0;
                                    r = 0
                                } else if ((f | 0) == 8) {
                                    ia(e, 7, 8339) | 0;
                                    r = 0
                                } else if ((f | 0) == 11) {
                                    ia(e, 6, 8374) | 0;
                                    r = 0
                                } else if ((f | 0) == 13) {
                                    if ((t[e + 148 >> 2] | 0) > 0 ? (jo[t[(Lu() | 0) + 8 >> 2] & 15](e + 124 | 0) | 0) == 0 : 0) {
                                        r = 0;
                                        break
                                    }
                                    r = 1
                                }
                            } while (0);
                            return r | 0
                        }

                        function Nl(e) {
                            e = e | 0;
                            Fu(e, 520) | 0;
                            return
                        }

                        function $l(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            A = x;
                            x = x + 144 | 0;
                            a = A + 36 | 0;
                            u = A;
                            t[u >> 2] = e;
                            f = u + 4 | 0;
                            t[f >> 2] = i;
                            t[u + 8 >> 2] = 1;
                            e = Ul(u) | 0;
                            do {
                                if (!e) {
                                    eo(a);
                                    n = t[u + 12 >> 2] | 0;
                                    t[a + 64 >> 2] = (t[u >> 2] | 0) + n;
                                    t[a + 60 >> 2] = (t[f >> 2] | 0) - n;
                                    bf(r, a);
                                    if (!(t[u + 32 >> 2] | 0)) {
                                        n = Zl() | 0;
                                        if (!n) {
                                            e = 1;
                                            break
                                        }
                                        t[n + 2348 >> 2] = t[u + 16 >> 2];
                                        t[n + 2352 >> 2] = t[u + 20 >> 2];
                                        if (vl(n, a) | 0) {
                                            i = a + 4 | 0;
                                            f = r + 20 | 0;
                                            e = Eu(t[a >> 2] | 0, t[i >> 2] | 0, t[f >> 2] | 0, t[r >> 2] | 0) | 0;
                                            if (!e) {
                                                t[n + 148 >> 2] = sa(t[f >> 2] | 0, u, t[a >> 2] | 0, t[i >> 2] | 0) | 0;
                                                Yu(t[f >> 2] | 0, n);
                                                if (!(Xl(n, a) | 0)) e = t[n >> 2] | 0;
                                                else e = 0
                                            }
                                        } else e = t[n >> 2] | 0;
                                        ZA(n)
                                    } else {
                                        i = kf() | 0;
                                        if (!i) {
                                            e = 1;
                                            break
                                        }
                                        if (al(i, a) | 0) {
                                            e = Eu(t[a >> 2] | 0, t[a + 4 >> 2] | 0, t[r + 20 >> 2] | 0, t[r >> 2] | 0) | 0;
                                            if (!e)
                                                if (!(TA(i) | 0)) e = t[i >> 2] | 0;
                                                else e = 0
                                        } else e = t[i >> 2] | 0;
                                        ii(i)
                                    }
                                    if (e | 0) {
                                        Su(t[r >> 2] | 0);
                                        break
                                    }
                                    a = t[r + 20 >> 2] | 0;
                                    if ((a | 0) != 0 ? (t[a + 48 >> 2] | 0) != 0 : 0) e = Du(t[r >> 2] | 0) | 0;
                                    else e = 0
                                }
                            } while (0);
                            x = A;
                            return e | 0
                        }

                        function eo(e) {
                            e = e | 0;
                            bu(e, 520) | 0;
                            return
                        }

                        function io(e, i) {
                            e = e | 0;
                            i = i | 0;
                            if ((e | 0) == 0 | (i & -256 | 0) != 512) e = 0;
                            else {
                                Po(e | 0, 0, 200) | 0;
                                BA(e);
                                Nl(e + 40 | 0);
                                e = 1
                            }
                            return e | 0
                        }

                        function ro(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            A = x;
                            x = x + 144 | 0;
                            n = A + 88 | 0;
                            a = A;
                            e: do {
                                if (!r) f = 2;
                                else {
                                    f = DA(e, i, r) | 0;
                                    switch (f | 0) {
                                        case 7: {
                                            f = 3;
                                            break e
                                        }
                                        case 0:
                                            break;
                                        default:
                                            break e
                                    }
                                    pA(n);
                                    t[n + 20 >> 2] = r + 124;
                                    u = r + 40 | 0;
                                    t[n >> 2] = u;
                                    if (!(Vu(u, r) | 0)) {
                                        f = $l(e, i, n) | 0;
                                        break
                                    }
                                    Nl(a);
                                    t[a >> 2] = t[u >> 2];
                                    t[a + 4 >> 2] = t[r >> 2];
                                    t[a + 8 >> 2] = t[r + 4 >> 2];
                                    t[n >> 2] = a;
                                    f = $l(e, i, n) | 0;
                                    if (!f) f = xu(a, u) | 0;
                                    Su(a)
                                }
                            } while (0);
                            x = A;
                            return f | 0
                        }

                        function fo(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0,
                                w = 0,
                                g = 0,
                                v = 0,
                                C = 0,
                                I = 0,
                                d = 0,
                                y = 0;
                            y = x;
                            x = x + 16 | 0;
                            b = y;
                            do {
                                if (e >>> 0 < 245) {
                                    o = e >>> 0 < 11 ? 16 : e + 11 & -8;
                                    e = o >>> 3;
                                    s = t[2313] | 0;
                                    r = s >>> e;
                                    if (r & 3 | 0) {
                                        i = (r & 1 ^ 1) + e | 0;
                                        e = 9292 + (i << 1 << 2) | 0;
                                        r = e + 8 | 0;
                                        f = t[r >> 2] | 0;
                                        n = f + 8 | 0;
                                        u = t[n >> 2] | 0;
                                        if ((u | 0) == (e | 0)) t[2313] = s & ~(1 << i);
                                        else {
                                            t[u + 12 >> 2] = e;
                                            t[r >> 2] = u
                                        }
                                        d = i << 3;
                                        t[f + 4 >> 2] = d | 3;
                                        d = f + d + 4 | 0;
                                        t[d >> 2] = t[d >> 2] | 1;
                                        d = n;
                                        x = y;
                                        return d | 0
                                    }
                                    c = t[2315] | 0;
                                    if (o >>> 0 > c >>> 0) {
                                        if (r | 0) {
                                            i = 2 << e;
                                            i = r << e & (i | 0 - i);
                                            i = (i & 0 - i) + -1 | 0;
                                            A = i >>> 12 & 16;
                                            i = i >>> A;
                                            r = i >>> 5 & 8;
                                            i = i >>> r;
                                            u = i >>> 2 & 4;
                                            i = i >>> u;
                                            e = i >>> 1 & 2;
                                            i = i >>> e;
                                            f = i >>> 1 & 1;
                                            f = (r | A | u | e | f) + (i >>> f) | 0;
                                            i = 9292 + (f << 1 << 2) | 0;
                                            e = i + 8 | 0;
                                            u = t[e >> 2] | 0;
                                            A = u + 8 | 0;
                                            r = t[A >> 2] | 0;
                                            if ((r | 0) == (i | 0)) {
                                                e = s & ~(1 << f);
                                                t[2313] = e
                                            } else {
                                                t[r + 12 >> 2] = i;
                                                t[e >> 2] = r;
                                                e = s
                                            }
                                            d = f << 3;
                                            a = d - o | 0;
                                            t[u + 4 >> 2] = o | 3;
                                            n = u + o | 0;
                                            t[n + 4 >> 2] = a | 1;
                                            t[u + d >> 2] = a;
                                            if (c | 0) {
                                                f = t[2318] | 0;
                                                i = c >>> 3;
                                                r = 9292 + (i << 1 << 2) | 0;
                                                i = 1 << i;
                                                if (!(e & i)) {
                                                    t[2313] = e | i;
                                                    i = r;
                                                    e = r + 8 | 0
                                                } else {
                                                    e = r + 8 | 0;
                                                    i = t[e >> 2] | 0
                                                }
                                                t[e >> 2] = f;
                                                t[i + 12 >> 2] = f;
                                                t[f + 8 >> 2] = i;
                                                t[f + 12 >> 2] = r
                                            }
                                            t[2315] = a;
                                            t[2318] = n;
                                            d = A;
                                            x = y;
                                            return d | 0
                                        }
                                        u = t[2314] | 0;
                                        if (u) {
                                            r = (u & 0 - u) + -1 | 0;
                                            n = r >>> 12 & 16;
                                            r = r >>> n;
                                            f = r >>> 5 & 8;
                                            r = r >>> f;
                                            a = r >>> 2 & 4;
                                            r = r >>> a;
                                            A = r >>> 1 & 2;
                                            r = r >>> A;
                                            l = r >>> 1 & 1;
                                            l = t[9556 + ((f | n | a | A | l) + (r >>> l) << 2) >> 2] | 0;
                                            r = l;
                                            A = l;
                                            l = (t[l + 4 >> 2] & -8) - o | 0;
                                            while (1) {
                                                e = t[r + 16 >> 2] | 0;
                                                if (!e) {
                                                    e = t[r + 20 >> 2] | 0;
                                                    if (!e) break
                                                }
                                                a = (t[e + 4 >> 2] & -8) - o | 0;
                                                n = a >>> 0 < l >>> 0;
                                                r = e;
                                                A = n ? e : A;
                                                l = n ? a : l
                                            }
                                            a = A + o | 0;
                                            if (a >>> 0 > A >>> 0) {
                                                n = t[A + 24 >> 2] | 0;
                                                i = t[A + 12 >> 2] | 0;
                                                do {
                                                    if ((i | 0) == (A | 0)) {
                                                        e = A + 20 | 0;
                                                        i = t[e >> 2] | 0;
                                                        if (!i) {
                                                            e = A + 16 | 0;
                                                            i = t[e >> 2] | 0;
                                                            if (!i) {
                                                                r = 0;
                                                                break
                                                            }
                                                        }
                                                        while (1) {
                                                            f = i + 20 | 0;
                                                            r = t[f >> 2] | 0;
                                                            if (!r) {
                                                                f = i + 16 | 0;
                                                                r = t[f >> 2] | 0;
                                                                if (!r) break;
                                                                else {
                                                                    i = r;
                                                                    e = f
                                                                }
                                                            } else {
                                                                i = r;
                                                                e = f
                                                            }
                                                        }
                                                        t[e >> 2] = 0;
                                                        r = i
                                                    } else {
                                                        r = t[A + 8 >> 2] | 0;
                                                        t[r + 12 >> 2] = i;
                                                        t[i + 8 >> 2] = r;
                                                        r = i
                                                    }
                                                } while (0);
                                                do {
                                                    if (n | 0) {
                                                        i = t[A + 28 >> 2] | 0;
                                                        e = 9556 + (i << 2) | 0;
                                                        if ((A | 0) == (t[e >> 2] | 0)) {
                                                            t[e >> 2] = r;
                                                            if (!r) {
                                                                t[2314] = u & ~(1 << i);
                                                                break
                                                            }
                                                        } else {
                                                            d = n + 16 | 0;
                                                            t[((t[d >> 2] | 0) == (A | 0) ? d : n + 20 | 0) >> 2] = r;
                                                            if (!r) break
                                                        }
                                                        t[r + 24 >> 2] = n;
                                                        i = t[A + 16 >> 2] | 0;
                                                        if (i | 0) {
                                                            t[r + 16 >> 2] = i;
                                                            t[i + 24 >> 2] = r
                                                        }
                                                        i = t[A + 20 >> 2] | 0;
                                                        if (i | 0) {
                                                            t[r + 20 >> 2] = i;
                                                            t[i + 24 >> 2] = r
                                                        }
                                                    }
                                                } while (0);
                                                if (l >>> 0 < 16) {
                                                    d = l + o | 0;
                                                    t[A + 4 >> 2] = d | 3;
                                                    d = A + d + 4 | 0;
                                                    t[d >> 2] = t[d >> 2] | 1
                                                } else {
                                                    t[A + 4 >> 2] = o | 3;
                                                    t[a + 4 >> 2] = l | 1;
                                                    t[a + l >> 2] = l;
                                                    if (c | 0) {
                                                        f = t[2318] | 0;
                                                        i = c >>> 3;
                                                        r = 9292 + (i << 1 << 2) | 0;
                                                        i = 1 << i;
                                                        if (!(i & s)) {
                                                            t[2313] = i | s;
                                                            i = r;
                                                            e = r + 8 | 0
                                                        } else {
                                                            e = r + 8 | 0;
                                                            i = t[e >> 2] | 0
                                                        }
                                                        t[e >> 2] = f;
                                                        t[i + 12 >> 2] = f;
                                                        t[f + 8 >> 2] = i;
                                                        t[f + 12 >> 2] = r
                                                    }
                                                    t[2315] = l;
                                                    t[2318] = a
                                                }
                                                d = A + 8 | 0;
                                                x = y;
                                                return d | 0
                                            } else s = o
                                        } else s = o
                                    } else s = o
                                } else if (e >>> 0 <= 4294967231) {
                                    e = e + 11 | 0;
                                    o = e & -8;
                                    f = t[2314] | 0;
                                    if (f) {
                                        n = 0 - o | 0;
                                        e = e >>> 8;
                                        if (e)
                                            if (o >>> 0 > 16777215) l = 31;
                                            else {
                                                s = (e + 1048320 | 0) >>> 16 & 8;
                                                w = e << s;
                                                A = (w + 520192 | 0) >>> 16 & 4;
                                                w = w << A;
                                                l = (w + 245760 | 0) >>> 16 & 2;
                                                l = 14 - (A | s | l) + (w << l >>> 15) | 0;
                                                l = o >>> (l + 7 | 0) & 1 | l << 1
                                            }
                                        else l = 0;
                                        r = t[9556 + (l << 2) >> 2] | 0;
                                        e: do {
                                            if (!r) {
                                                r = 0;
                                                e = 0;
                                                w = 61
                                            } else {
                                                e = 0;
                                                A = o << ((l | 0) == 31 ? 0 : 25 - (l >>> 1) | 0);
                                                u = 0;
                                                while (1) {
                                                    a = (t[r + 4 >> 2] & -8) - o | 0;
                                                    if (a >>> 0 < n >>> 0)
                                                        if (!a) {
                                                            e = r;
                                                            n = 0;
                                                            w = 65;
                                                            break e
                                                        } else {
                                                            e = r;
                                                            n = a
                                                        } w = t[r + 20 >> 2] | 0;
                                                    r = t[r + 16 + (A >>> 31 << 2) >> 2] | 0;
                                                    u = (w | 0) == 0 | (w | 0) == (r | 0) ? u : w;
                                                    if (!r) {
                                                        r = u;
                                                        w = 61;
                                                        break
                                                    } else A = A << 1
                                                }
                                            }
                                        } while (0);
                                        if ((w | 0) == 61) {
                                            if ((r | 0) == 0 & (e | 0) == 0) {
                                                e = 2 << l;
                                                e = (e | 0 - e) & f;
                                                if (!e) {
                                                    s = o;
                                                    break
                                                }
                                                s = (e & 0 - e) + -1 | 0;
                                                a = s >>> 12 & 16;
                                                s = s >>> a;
                                                u = s >>> 5 & 8;
                                                s = s >>> u;
                                                A = s >>> 2 & 4;
                                                s = s >>> A;
                                                l = s >>> 1 & 2;
                                                s = s >>> l;
                                                r = s >>> 1 & 1;
                                                e = 0;
                                                r = t[9556 + ((u | a | A | l | r) + (s >>> r) << 2) >> 2] | 0
                                            }
                                            if (!r) {
                                                A = e;
                                                a = n
                                            } else w = 65
                                        }
                                        if ((w | 0) == 65) {
                                            u = r;
                                            while (1) {
                                                s = (t[u + 4 >> 2] & -8) - o | 0;
                                                r = s >>> 0 < n >>> 0;
                                                n = r ? s : n;
                                                e = r ? u : e;
                                                r = t[u + 16 >> 2] | 0;
                                                if (!r) r = t[u + 20 >> 2] | 0;
                                                if (!r) {
                                                    A = e;
                                                    a = n;
                                                    break
                                                } else u = r
                                            }
                                        }
                                        if (((A | 0) != 0 ? a >>> 0 < ((t[2315] | 0) - o | 0) >>> 0 : 0) ? (c = A + o | 0, c >>> 0 > A >>> 0) : 0) {
                                            u = t[A + 24 >> 2] | 0;
                                            i = t[A + 12 >> 2] | 0;
                                            do {
                                                if ((i | 0) == (A | 0)) {
                                                    e = A + 20 | 0;
                                                    i = t[e >> 2] | 0;
                                                    if (!i) {
                                                        e = A + 16 | 0;
                                                        i = t[e >> 2] | 0;
                                                        if (!i) {
                                                            i = 0;
                                                            break
                                                        }
                                                    }
                                                    while (1) {
                                                        n = i + 20 | 0;
                                                        r = t[n >> 2] | 0;
                                                        if (!r) {
                                                            n = i + 16 | 0;
                                                            r = t[n >> 2] | 0;
                                                            if (!r) break;
                                                            else {
                                                                i = r;
                                                                e = n
                                                            }
                                                        } else {
                                                            i = r;
                                                            e = n
                                                        }
                                                    }
                                                    t[e >> 2] = 0
                                                } else {
                                                    d = t[A + 8 >> 2] | 0;
                                                    t[d + 12 >> 2] = i;
                                                    t[i + 8 >> 2] = d
                                                }
                                            } while (0);
                                            do {
                                                if (u) {
                                                    e = t[A + 28 >> 2] | 0;
                                                    r = 9556 + (e << 2) | 0;
                                                    if ((A | 0) == (t[r >> 2] | 0)) {
                                                        t[r >> 2] = i;
                                                        if (!i) {
                                                            f = f & ~(1 << e);
                                                            t[2314] = f;
                                                            break
                                                        }
                                                    } else {
                                                        d = u + 16 | 0;
                                                        t[((t[d >> 2] | 0) == (A | 0) ? d : u + 20 | 0) >> 2] = i;
                                                        if (!i) break
                                                    }
                                                    t[i + 24 >> 2] = u;
                                                    e = t[A + 16 >> 2] | 0;
                                                    if (e | 0) {
                                                        t[i + 16 >> 2] = e;
                                                        t[e + 24 >> 2] = i
                                                    }
                                                    e = t[A + 20 >> 2] | 0;
                                                    if (e) {
                                                        t[i + 20 >> 2] = e;
                                                        t[e + 24 >> 2] = i
                                                    }
                                                }
                                            } while (0);
                                            e: do {
                                                if (a >>> 0 < 16) {
                                                    d = a + o | 0;
                                                    t[A + 4 >> 2] = d | 3;
                                                    d = A + d + 4 | 0;
                                                    t[d >> 2] = t[d >> 2] | 1
                                                } else {
                                                    t[A + 4 >> 2] = o | 3;
                                                    t[c + 4 >> 2] = a | 1;
                                                    t[c + a >> 2] = a;
                                                    i = a >>> 3;
                                                    if (a >>> 0 < 256) {
                                                        r = 9292 + (i << 1 << 2) | 0;
                                                        e = t[2313] | 0;
                                                        i = 1 << i;
                                                        if (!(e & i)) {
                                                            t[2313] = e | i;
                                                            i = r;
                                                            e = r + 8 | 0
                                                        } else {
                                                            e = r + 8 | 0;
                                                            i = t[e >> 2] | 0
                                                        }
                                                        t[e >> 2] = c;
                                                        t[i + 12 >> 2] = c;
                                                        t[c + 8 >> 2] = i;
                                                        t[c + 12 >> 2] = r;
                                                        break
                                                    }
                                                    i = a >>> 8;
                                                    if (i)
                                                        if (a >>> 0 > 16777215) r = 31;
                                                        else {
                                                            I = (i + 1048320 | 0) >>> 16 & 8;
                                                            d = i << I;
                                                            C = (d + 520192 | 0) >>> 16 & 4;
                                                            d = d << C;
                                                            r = (d + 245760 | 0) >>> 16 & 2;
                                                            r = 14 - (C | I | r) + (d << r >>> 15) | 0;
                                                            r = a >>> (r + 7 | 0) & 1 | r << 1
                                                        }
                                                    else r = 0;
                                                    i = 9556 + (r << 2) | 0;
                                                    t[c + 28 >> 2] = r;
                                                    e = c + 16 | 0;
                                                    t[e + 4 >> 2] = 0;
                                                    t[e >> 2] = 0;
                                                    e = 1 << r;
                                                    if (!(f & e)) {
                                                        t[2314] = f | e;
                                                        t[i >> 2] = c;
                                                        t[c + 24 >> 2] = i;
                                                        t[c + 12 >> 2] = c;
                                                        t[c + 8 >> 2] = c;
                                                        break
                                                    }
                                                    i = t[i >> 2] | 0;
                                                    i: do {
                                                        if ((t[i + 4 >> 2] & -8 | 0) != (a | 0)) {
                                                            f = a << ((r | 0) == 31 ? 0 : 25 - (r >>> 1) | 0);
                                                            while (1) {
                                                                r = i + 16 + (f >>> 31 << 2) | 0;
                                                                e = t[r >> 2] | 0;
                                                                if (!e) break;
                                                                if ((t[e + 4 >> 2] & -8 | 0) == (a | 0)) {
                                                                    i = e;
                                                                    break i
                                                                } else {
                                                                    f = f << 1;
                                                                    i = e
                                                                }
                                                            }
                                                            t[r >> 2] = c;
                                                            t[c + 24 >> 2] = i;
                                                            t[c + 12 >> 2] = c;
                                                            t[c + 8 >> 2] = c;
                                                            break e
                                                        }
                                                    } while (0);
                                                    I = i + 8 | 0;
                                                    d = t[I >> 2] | 0;
                                                    t[d + 12 >> 2] = c;
                                                    t[I >> 2] = c;
                                                    t[c + 8 >> 2] = d;
                                                    t[c + 12 >> 2] = i;
                                                    t[c + 24 >> 2] = 0
                                                }
                                            } while (0);
                                            d = A + 8 | 0;
                                            x = y;
                                            return d | 0
                                        } else s = o
                                    } else s = o
                                } else s = -1
                            } while (0);
                            r = t[2315] | 0;
                            if (r >>> 0 >= s >>> 0) {
                                i = r - s | 0;
                                e = t[2318] | 0;
                                if (i >>> 0 > 15) {
                                    d = e + s | 0;
                                    t[2318] = d;
                                    t[2315] = i;
                                    t[d + 4 >> 2] = i | 1;
                                    t[e + r >> 2] = i;
                                    t[e + 4 >> 2] = s | 3
                                } else {
                                    t[2315] = 0;
                                    t[2318] = 0;
                                    t[e + 4 >> 2] = r | 3;
                                    d = e + r + 4 | 0;
                                    t[d >> 2] = t[d >> 2] | 1
                                }
                                d = e + 8 | 0;
                                x = y;
                                return d | 0
                            }
                            a = t[2316] | 0;
                            if (a >>> 0 > s >>> 0) {
                                C = a - s | 0;
                                t[2316] = C;
                                d = t[2319] | 0;
                                I = d + s | 0;
                                t[2319] = I;
                                t[I + 4 >> 2] = C | 1;
                                t[d + 4 >> 2] = s | 3;
                                d = d + 8 | 0;
                                x = y;
                                return d | 0
                            }
                            if (!(t[2431] | 0)) {
                                t[2433] = 4096;
                                t[2432] = 4096;
                                t[2434] = -1;
                                t[2435] = -1;
                                t[2436] = 0;
                                t[2424] = 0;
                                t[2431] = b & -16 ^ 1431655768;
                                e = 4096
                            } else e = t[2433] | 0;
                            A = s + 48 | 0;
                            l = s + 47 | 0;
                            u = e + l | 0;
                            n = 0 - e | 0;
                            o = u & n;
                            if (o >>> 0 <= s >>> 0) {
                                d = 0;
                                x = y;
                                return d | 0
                            }
                            e = t[2423] | 0;
                            if (e | 0 ? (c = t[2421] | 0, b = c + o | 0, b >>> 0 <= c >>> 0 | b >>> 0 > e >>> 0) : 0) {
                                d = 0;
                                x = y;
                                return d | 0
                            }
                            e: do {
                                if (!(t[2424] & 4)) {
                                    r = t[2319] | 0;
                                    i: do {
                                        if (r) {
                                            f = 9700;
                                            while (1) {
                                                b = t[f >> 2] | 0;
                                                if (b >>> 0 <= r >>> 0 ? (b + (t[f + 4 >> 2] | 0) | 0) >>> 0 > r >>> 0 : 0) break;
                                                e = t[f + 8 >> 2] | 0;
                                                if (!e) {
                                                    w = 128;
                                                    break i
                                                } else f = e
                                            }
                                            i = u - a & n;
                                            if (i >>> 0 < 2147483647) {
                                                e = Do(i | 0) | 0;
                                                if ((e | 0) == ((t[f >> 2] | 0) + (t[f + 4 >> 2] | 0) | 0)) {
                                                    if ((e | 0) != (-1 | 0)) {
                                                        a = i;
                                                        u = e;
                                                        w = 145;
                                                        break e
                                                    }
                                                } else {
                                                    f = e;
                                                    w = 136
                                                }
                                            } else i = 0
                                        } else w = 128
                                    } while (0);
                                    do {
                                        if ((w | 0) == 128) {
                                            r = Do(0) | 0;
                                            if ((r | 0) != (-1 | 0) ? (i = r, h = t[2432] | 0, k = h + -1 | 0, i = ((k & i | 0) == 0 ? 0 : (k + i & 0 - h) - i | 0) + o | 0, h = t[2421] | 0, k = i + h | 0, i >>> 0 > s >>> 0 & i >>> 0 < 2147483647) : 0) {
                                                b = t[2423] | 0;
                                                if (b | 0 ? k >>> 0 <= h >>> 0 | k >>> 0 > b >>> 0 : 0) {
                                                    i = 0;
                                                    break
                                                }
                                                e = Do(i | 0) | 0;
                                                if ((e | 0) == (r | 0)) {
                                                    a = i;
                                                    u = r;
                                                    w = 145;
                                                    break e
                                                } else {
                                                    f = e;
                                                    w = 136
                                                }
                                            } else i = 0
                                        }
                                    } while (0);
                                    do {
                                        if ((w | 0) == 136) {
                                            r = 0 - i | 0;
                                            if (!(A >>> 0 > i >>> 0 & (i >>> 0 < 2147483647 & (f | 0) != (-1 | 0))))
                                                if ((f | 0) == (-1 | 0)) {
                                                    i = 0;
                                                    break
                                                } else {
                                                    a = i;
                                                    u = f;
                                                    w = 145;
                                                    break e
                                                } e = t[2433] | 0;
                                            e = l - i + e & 0 - e;
                                            if (e >>> 0 >= 2147483647) {
                                                a = i;
                                                u = f;
                                                w = 145;
                                                break e
                                            }
                                            if ((Do(e | 0) | 0) == (-1 | 0)) {
                                                Do(r | 0) | 0;
                                                i = 0;
                                                break
                                            } else {
                                                a = e + i | 0;
                                                u = f;
                                                w = 145;
                                                break e
                                            }
                                        }
                                    } while (0);
                                    t[2424] = t[2424] | 4;
                                    w = 143
                                } else {
                                    i = 0;
                                    w = 143
                                }
                            } while (0);
                            if (((w | 0) == 143 ? o >>> 0 < 2147483647 : 0) ? (C = Do(o | 0) | 0, k = Do(0) | 0, g = k - C | 0, v = g >>> 0 > (s + 40 | 0) >>> 0, !((C | 0) == (-1 | 0) | v ^ 1 | C >>> 0 < k >>> 0 & ((C | 0) != (-1 | 0) & (k | 0) != (-1 | 0)) ^ 1)) : 0) {
                                a = v ? g : i;
                                u = C;
                                w = 145
                            }
                            if ((w | 0) == 145) {
                                i = (t[2421] | 0) + a | 0;
                                t[2421] = i;
                                if (i >>> 0 > (t[2422] | 0) >>> 0) t[2422] = i;
                                l = t[2319] | 0;
                                e: do {
                                    if (l) {
                                        i = 9700;
                                        while (1) {
                                            e = t[i >> 2] | 0;
                                            r = t[i + 4 >> 2] | 0;
                                            if ((u | 0) == (e + r | 0)) {
                                                w = 154;
                                                break
                                            }
                                            f = t[i + 8 >> 2] | 0;
                                            if (!f) break;
                                            else i = f
                                        }
                                        if (((w | 0) == 154 ? (I = i + 4 | 0, (t[i + 12 >> 2] & 8 | 0) == 0) : 0) ? u >>> 0 > l >>> 0 & e >>> 0 <= l >>> 0 : 0) {
                                            t[I >> 2] = r + a;
                                            d = (t[2316] | 0) + a | 0;
                                            C = l + 8 | 0;
                                            C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
                                            I = l + C | 0;
                                            C = d - C | 0;
                                            t[2319] = I;
                                            t[2316] = C;
                                            t[I + 4 >> 2] = C | 1;
                                            t[l + d + 4 >> 2] = 40;
                                            t[2320] = t[2435];
                                            break
                                        }
                                        if (u >>> 0 < (t[2317] | 0) >>> 0) t[2317] = u;
                                        r = u + a | 0;
                                        i = 9700;
                                        while (1) {
                                            if ((t[i >> 2] | 0) == (r | 0)) {
                                                w = 162;
                                                break
                                            }
                                            e = t[i + 8 >> 2] | 0;
                                            if (!e) break;
                                            else i = e
                                        }
                                        if ((w | 0) == 162 ? (t[i + 12 >> 2] & 8 | 0) == 0 : 0) {
                                            t[i >> 2] = u;
                                            c = i + 4 | 0;
                                            t[c >> 2] = (t[c >> 2] | 0) + a;
                                            c = u + 8 | 0;
                                            c = u + ((c & 7 | 0) == 0 ? 0 : 0 - c & 7) | 0;
                                            i = r + 8 | 0;
                                            i = r + ((i & 7 | 0) == 0 ? 0 : 0 - i & 7) | 0;
                                            o = c + s | 0;
                                            A = i - c - s | 0;
                                            t[c + 4 >> 2] = s | 3;
                                            i: do {
                                                if ((l | 0) == (i | 0)) {
                                                    d = (t[2316] | 0) + A | 0;
                                                    t[2316] = d;
                                                    t[2319] = o;
                                                    t[o + 4 >> 2] = d | 1
                                                } else {
                                                    if ((t[2318] | 0) == (i | 0)) {
                                                        d = (t[2315] | 0) + A | 0;
                                                        t[2315] = d;
                                                        t[2318] = o;
                                                        t[o + 4 >> 2] = d | 1;
                                                        t[o + d >> 2] = d;
                                                        break
                                                    }
                                                    e = t[i + 4 >> 2] | 0;
                                                    if ((e & 3 | 0) == 1) {
                                                        a = e & -8;
                                                        f = e >>> 3;
                                                        r: do {
                                                            if (e >>> 0 < 256) {
                                                                e = t[i + 8 >> 2] | 0;
                                                                r = t[i + 12 >> 2] | 0;
                                                                if ((r | 0) == (e | 0)) {
                                                                    t[2313] = t[2313] & ~(1 << f);
                                                                    break
                                                                } else {
                                                                    t[e + 12 >> 2] = r;
                                                                    t[r + 8 >> 2] = e;
                                                                    break
                                                                }
                                                            } else {
                                                                u = t[i + 24 >> 2] | 0;
                                                                e = t[i + 12 >> 2] | 0;
                                                                do {
                                                                    if ((e | 0) == (i | 0)) {
                                                                        r = i + 16 | 0;
                                                                        f = r + 4 | 0;
                                                                        e = t[f >> 2] | 0;
                                                                        if (!e) {
                                                                            e = t[r >> 2] | 0;
                                                                            if (!e) {
                                                                                e = 0;
                                                                                break
                                                                            }
                                                                        } else r = f;
                                                                        while (1) {
                                                                            n = e + 20 | 0;
                                                                            f = t[n >> 2] | 0;
                                                                            if (!f) {
                                                                                n = e + 16 | 0;
                                                                                f = t[n >> 2] | 0;
                                                                                if (!f) break;
                                                                                else {
                                                                                    e = f;
                                                                                    r = n
                                                                                }
                                                                            } else {
                                                                                e = f;
                                                                                r = n
                                                                            }
                                                                        }
                                                                        t[r >> 2] = 0
                                                                    } else {
                                                                        d = t[i + 8 >> 2] | 0;
                                                                        t[d + 12 >> 2] = e;
                                                                        t[e + 8 >> 2] = d
                                                                    }
                                                                } while (0);
                                                                if (!u) break;
                                                                r = t[i + 28 >> 2] | 0;
                                                                f = 9556 + (r << 2) | 0;
                                                                do {
                                                                    if ((t[f >> 2] | 0) != (i | 0)) {
                                                                        d = u + 16 | 0;
                                                                        t[((t[d >> 2] | 0) == (i | 0) ? d : u + 20 | 0) >> 2] = e;
                                                                        if (!e) break r
                                                                    } else {
                                                                        t[f >> 2] = e;
                                                                        if (e | 0) break;
                                                                        t[2314] = t[2314] & ~(1 << r);
                                                                        break r
                                                                    }
                                                                } while (0);
                                                                t[e + 24 >> 2] = u;
                                                                r = i + 16 | 0;
                                                                f = t[r >> 2] | 0;
                                                                if (f | 0) {
                                                                    t[e + 16 >> 2] = f;
                                                                    t[f + 24 >> 2] = e
                                                                }
                                                                r = t[r + 4 >> 2] | 0;
                                                                if (!r) break;
                                                                t[e + 20 >> 2] = r;
                                                                t[r + 24 >> 2] = e
                                                            }
                                                        } while (0);
                                                        i = i + a | 0;
                                                        n = a + A | 0
                                                    } else n = A;
                                                    i = i + 4 | 0;
                                                    t[i >> 2] = t[i >> 2] & -2;
                                                    t[o + 4 >> 2] = n | 1;
                                                    t[o + n >> 2] = n;
                                                    i = n >>> 3;
                                                    if (n >>> 0 < 256) {
                                                        r = 9292 + (i << 1 << 2) | 0;
                                                        e = t[2313] | 0;
                                                        i = 1 << i;
                                                        if (!(e & i)) {
                                                            t[2313] = e | i;
                                                            i = r;
                                                            e = r + 8 | 0
                                                        } else {
                                                            e = r + 8 | 0;
                                                            i = t[e >> 2] | 0
                                                        }
                                                        t[e >> 2] = o;
                                                        t[i + 12 >> 2] = o;
                                                        t[o + 8 >> 2] = i;
                                                        t[o + 12 >> 2] = r;
                                                        break
                                                    }
                                                    i = n >>> 8;
                                                    do {
                                                        if (!i) f = 0;
                                                        else {
                                                            if (n >>> 0 > 16777215) {
                                                                f = 31;
                                                                break
                                                            }
                                                            I = (i + 1048320 | 0) >>> 16 & 8;
                                                            d = i << I;
                                                            C = (d + 520192 | 0) >>> 16 & 4;
                                                            d = d << C;
                                                            f = (d + 245760 | 0) >>> 16 & 2;
                                                            f = 14 - (C | I | f) + (d << f >>> 15) | 0;
                                                            f = n >>> (f + 7 | 0) & 1 | f << 1
                                                        }
                                                    } while (0);
                                                    i = 9556 + (f << 2) | 0;
                                                    t[o + 28 >> 2] = f;
                                                    e = o + 16 | 0;
                                                    t[e + 4 >> 2] = 0;
                                                    t[e >> 2] = 0;
                                                    e = t[2314] | 0;
                                                    r = 1 << f;
                                                    if (!(e & r)) {
                                                        t[2314] = e | r;
                                                        t[i >> 2] = o;
                                                        t[o + 24 >> 2] = i;
                                                        t[o + 12 >> 2] = o;
                                                        t[o + 8 >> 2] = o;
                                                        break
                                                    }
                                                    i = t[i >> 2] | 0;
                                                    r: do {
                                                        if ((t[i + 4 >> 2] & -8 | 0) != (n | 0)) {
                                                            f = n << ((f | 0) == 31 ? 0 : 25 - (f >>> 1) | 0);
                                                            while (1) {
                                                                r = i + 16 + (f >>> 31 << 2) | 0;
                                                                e = t[r >> 2] | 0;
                                                                if (!e) break;
                                                                if ((t[e + 4 >> 2] & -8 | 0) == (n | 0)) {
                                                                    i = e;
                                                                    break r
                                                                } else {
                                                                    f = f << 1;
                                                                    i = e
                                                                }
                                                            }
                                                            t[r >> 2] = o;
                                                            t[o + 24 >> 2] = i;
                                                            t[o + 12 >> 2] = o;
                                                            t[o + 8 >> 2] = o;
                                                            break i
                                                        }
                                                    } while (0);
                                                    I = i + 8 | 0;
                                                    d = t[I >> 2] | 0;
                                                    t[d + 12 >> 2] = o;
                                                    t[I >> 2] = o;
                                                    t[o + 8 >> 2] = d;
                                                    t[o + 12 >> 2] = i;
                                                    t[o + 24 >> 2] = 0
                                                }
                                            } while (0);
                                            d = c + 8 | 0;
                                            x = y;
                                            return d | 0
                                        }
                                        i = 9700;
                                        while (1) {
                                            e = t[i >> 2] | 0;
                                            if (e >>> 0 <= l >>> 0 ? (d = e + (t[i + 4 >> 2] | 0) | 0, d >>> 0 > l >>> 0) : 0) break;
                                            i = t[i + 8 >> 2] | 0
                                        }
                                        n = d + -47 | 0;
                                        e = n + 8 | 0;
                                        e = n + ((e & 7 | 0) == 0 ? 0 : 0 - e & 7) | 0;
                                        n = l + 16 | 0;
                                        e = e >>> 0 < n >>> 0 ? l : e;
                                        i = e + 8 | 0;
                                        r = a + -40 | 0;
                                        C = u + 8 | 0;
                                        C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
                                        I = u + C | 0;
                                        C = r - C | 0;
                                        t[2319] = I;
                                        t[2316] = C;
                                        t[I + 4 >> 2] = C | 1;
                                        t[u + r + 4 >> 2] = 40;
                                        t[2320] = t[2435];
                                        r = e + 4 | 0;
                                        t[r >> 2] = 27;
                                        t[i >> 2] = t[2425];
                                        t[i + 4 >> 2] = t[2426];
                                        t[i + 8 >> 2] = t[2427];
                                        t[i + 12 >> 2] = t[2428];
                                        t[2425] = u;
                                        t[2426] = a;
                                        t[2428] = 0;
                                        t[2427] = i;
                                        i = e + 24 | 0;
                                        do {
                                            I = i;
                                            i = i + 4 | 0;
                                            t[i >> 2] = 7
                                        } while ((I + 8 | 0) >>> 0 < d >>> 0);
                                        if ((e | 0) != (l | 0)) {
                                            u = e - l | 0;
                                            t[r >> 2] = t[r >> 2] & -2;
                                            t[l + 4 >> 2] = u | 1;
                                            t[e >> 2] = u;
                                            i = u >>> 3;
                                            if (u >>> 0 < 256) {
                                                r = 9292 + (i << 1 << 2) | 0;
                                                e = t[2313] | 0;
                                                i = 1 << i;
                                                if (!(e & i)) {
                                                    t[2313] = e | i;
                                                    i = r;
                                                    e = r + 8 | 0
                                                } else {
                                                    e = r + 8 | 0;
                                                    i = t[e >> 2] | 0
                                                }
                                                t[e >> 2] = l;
                                                t[i + 12 >> 2] = l;
                                                t[l + 8 >> 2] = i;
                                                t[l + 12 >> 2] = r;
                                                break
                                            }
                                            i = u >>> 8;
                                            if (i)
                                                if (u >>> 0 > 16777215) f = 31;
                                                else {
                                                    I = (i + 1048320 | 0) >>> 16 & 8;
                                                    d = i << I;
                                                    C = (d + 520192 | 0) >>> 16 & 4;
                                                    d = d << C;
                                                    f = (d + 245760 | 0) >>> 16 & 2;
                                                    f = 14 - (C | I | f) + (d << f >>> 15) | 0;
                                                    f = u >>> (f + 7 | 0) & 1 | f << 1
                                                }
                                            else f = 0;
                                            r = 9556 + (f << 2) | 0;
                                            t[l + 28 >> 2] = f;
                                            t[l + 20 >> 2] = 0;
                                            t[n >> 2] = 0;
                                            i = t[2314] | 0;
                                            e = 1 << f;
                                            if (!(i & e)) {
                                                t[2314] = i | e;
                                                t[r >> 2] = l;
                                                t[l + 24 >> 2] = r;
                                                t[l + 12 >> 2] = l;
                                                t[l + 8 >> 2] = l;
                                                break
                                            }
                                            i = t[r >> 2] | 0;
                                            i: do {
                                                if ((t[i + 4 >> 2] & -8 | 0) != (u | 0)) {
                                                    f = u << ((f | 0) == 31 ? 0 : 25 - (f >>> 1) | 0);
                                                    while (1) {
                                                        r = i + 16 + (f >>> 31 << 2) | 0;
                                                        e = t[r >> 2] | 0;
                                                        if (!e) break;
                                                        if ((t[e + 4 >> 2] & -8 | 0) == (u | 0)) {
                                                            i = e;
                                                            break i
                                                        } else {
                                                            f = f << 1;
                                                            i = e
                                                        }
                                                    }
                                                    t[r >> 2] = l;
                                                    t[l + 24 >> 2] = i;
                                                    t[l + 12 >> 2] = l;
                                                    t[l + 8 >> 2] = l;
                                                    break e
                                                }
                                            } while (0);
                                            I = i + 8 | 0;
                                            d = t[I >> 2] | 0;
                                            t[d + 12 >> 2] = l;
                                            t[I >> 2] = l;
                                            t[l + 8 >> 2] = d;
                                            t[l + 12 >> 2] = i;
                                            t[l + 24 >> 2] = 0
                                        }
                                    } else {
                                        d = t[2317] | 0;
                                        if ((d | 0) == 0 | u >>> 0 < d >>> 0) t[2317] = u;
                                        t[2425] = u;
                                        t[2426] = a;
                                        t[2428] = 0;
                                        t[2322] = t[2431];
                                        t[2321] = -1;
                                        t[2326] = 9292;
                                        t[2325] = 9292;
                                        t[2328] = 9300;
                                        t[2327] = 9300;
                                        t[2330] = 9308;
                                        t[2329] = 9308;
                                        t[2332] = 9316;
                                        t[2331] = 9316;
                                        t[2334] = 9324;
                                        t[2333] = 9324;
                                        t[2336] = 9332;
                                        t[2335] = 9332;
                                        t[2338] = 9340;
                                        t[2337] = 9340;
                                        t[2340] = 9348;
                                        t[2339] = 9348;
                                        t[2342] = 9356;
                                        t[2341] = 9356;
                                        t[2344] = 9364;
                                        t[2343] = 9364;
                                        t[2346] = 9372;
                                        t[2345] = 9372;
                                        t[2348] = 9380;
                                        t[2347] = 9380;
                                        t[2350] = 9388;
                                        t[2349] = 9388;
                                        t[2352] = 9396;
                                        t[2351] = 9396;
                                        t[2354] = 9404;
                                        t[2353] = 9404;
                                        t[2356] = 9412;
                                        t[2355] = 9412;
                                        t[2358] = 9420;
                                        t[2357] = 9420;
                                        t[2360] = 9428;
                                        t[2359] = 9428;
                                        t[2362] = 9436;
                                        t[2361] = 9436;
                                        t[2364] = 9444;
                                        t[2363] = 9444;
                                        t[2366] = 9452;
                                        t[2365] = 9452;
                                        t[2368] = 9460;
                                        t[2367] = 9460;
                                        t[2370] = 9468;
                                        t[2369] = 9468;
                                        t[2372] = 9476;
                                        t[2371] = 9476;
                                        t[2374] = 9484;
                                        t[2373] = 9484;
                                        t[2376] = 9492;
                                        t[2375] = 9492;
                                        t[2378] = 9500;
                                        t[2377] = 9500;
                                        t[2380] = 9508;
                                        t[2379] = 9508;
                                        t[2382] = 9516;
                                        t[2381] = 9516;
                                        t[2384] = 9524;
                                        t[2383] = 9524;
                                        t[2386] = 9532;
                                        t[2385] = 9532;
                                        t[2388] = 9540;
                                        t[2387] = 9540;
                                        d = a + -40 | 0;
                                        C = u + 8 | 0;
                                        C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
                                        I = u + C | 0;
                                        C = d - C | 0;
                                        t[2319] = I;
                                        t[2316] = C;
                                        t[I + 4 >> 2] = C | 1;
                                        t[u + d + 4 >> 2] = 40;
                                        t[2320] = t[2435]
                                    }
                                } while (0);
                                i = t[2316] | 0;
                                if (i >>> 0 > s >>> 0) {
                                    C = i - s | 0;
                                    t[2316] = C;
                                    d = t[2319] | 0;
                                    I = d + s | 0;
                                    t[2319] = I;
                                    t[I + 4 >> 2] = C | 1;
                                    t[d + 4 >> 2] = s | 3;
                                    d = d + 8 | 0;
                                    x = y;
                                    return d | 0
                                }
                            }
                            t[(oo() | 0) >> 2] = 12;
                            d = 0;
                            x = y;
                            return d | 0
                        }

                        function no(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0,
                                f = 0,
                                n = 0,
                                u = 0,
                                a = 0,
                                A = 0,
                                l = 0;
                            if (!e) return;
                            r = e + -8 | 0;
                            n = t[2317] | 0;
                            e = t[e + -4 >> 2] | 0;
                            i = e & -8;
                            l = r + i | 0;
                            do {
                                if (!(e & 1)) {
                                    f = t[r >> 2] | 0;
                                    if (!(e & 3)) return;
                                    a = r + (0 - f) | 0;
                                    u = f + i | 0;
                                    if (a >>> 0 < n >>> 0) return;
                                    if ((t[2318] | 0) == (a | 0)) {
                                        e = l + 4 | 0;
                                        i = t[e >> 2] | 0;
                                        if ((i & 3 | 0) != 3) {
                                            A = a;
                                            i = u;
                                            break
                                        }
                                        t[2315] = u;
                                        t[e >> 2] = i & -2;
                                        t[a + 4 >> 2] = u | 1;
                                        t[a + u >> 2] = u;
                                        return
                                    }
                                    r = f >>> 3;
                                    if (f >>> 0 < 256) {
                                        e = t[a + 8 >> 2] | 0;
                                        i = t[a + 12 >> 2] | 0;
                                        if ((i | 0) == (e | 0)) {
                                            t[2313] = t[2313] & ~(1 << r);
                                            A = a;
                                            i = u;
                                            break
                                        } else {
                                            t[e + 12 >> 2] = i;
                                            t[i + 8 >> 2] = e;
                                            A = a;
                                            i = u;
                                            break
                                        }
                                    }
                                    n = t[a + 24 >> 2] | 0;
                                    e = t[a + 12 >> 2] | 0;
                                    do {
                                        if ((e | 0) == (a | 0)) {
                                            i = a + 16 | 0;
                                            r = i + 4 | 0;
                                            e = t[r >> 2] | 0;
                                            if (!e) {
                                                e = t[i >> 2] | 0;
                                                if (!e) {
                                                    e = 0;
                                                    break
                                                }
                                            } else i = r;
                                            while (1) {
                                                f = e + 20 | 0;
                                                r = t[f >> 2] | 0;
                                                if (!r) {
                                                    f = e + 16 | 0;
                                                    r = t[f >> 2] | 0;
                                                    if (!r) break;
                                                    else {
                                                        e = r;
                                                        i = f
                                                    }
                                                } else {
                                                    e = r;
                                                    i = f
                                                }
                                            }
                                            t[i >> 2] = 0
                                        } else {
                                            A = t[a + 8 >> 2] | 0;
                                            t[A + 12 >> 2] = e;
                                            t[e + 8 >> 2] = A
                                        }
                                    } while (0);
                                    if (n) {
                                        i = t[a + 28 >> 2] | 0;
                                        r = 9556 + (i << 2) | 0;
                                        if ((t[r >> 2] | 0) == (a | 0)) {
                                            t[r >> 2] = e;
                                            if (!e) {
                                                t[2314] = t[2314] & ~(1 << i);
                                                A = a;
                                                i = u;
                                                break
                                            }
                                        } else {
                                            A = n + 16 | 0;
                                            t[((t[A >> 2] | 0) == (a | 0) ? A : n + 20 | 0) >> 2] = e;
                                            if (!e) {
                                                A = a;
                                                i = u;
                                                break
                                            }
                                        }
                                        t[e + 24 >> 2] = n;
                                        i = a + 16 | 0;
                                        r = t[i >> 2] | 0;
                                        if (r | 0) {
                                            t[e + 16 >> 2] = r;
                                            t[r + 24 >> 2] = e
                                        }
                                        i = t[i + 4 >> 2] | 0;
                                        if (i) {
                                            t[e + 20 >> 2] = i;
                                            t[i + 24 >> 2] = e;
                                            A = a;
                                            i = u
                                        } else {
                                            A = a;
                                            i = u
                                        }
                                    } else {
                                        A = a;
                                        i = u
                                    }
                                } else {
                                    A = r;
                                    a = r
                                }
                            } while (0);
                            if (a >>> 0 >= l >>> 0) return;
                            e = l + 4 | 0;
                            f = t[e >> 2] | 0;
                            if (!(f & 1)) return;
                            if (!(f & 2)) {
                                if ((t[2319] | 0) == (l | 0)) {
                                    l = (t[2316] | 0) + i | 0;
                                    t[2316] = l;
                                    t[2319] = A;
                                    t[A + 4 >> 2] = l | 1;
                                    if ((A | 0) != (t[2318] | 0)) return;
                                    t[2318] = 0;
                                    t[2315] = 0;
                                    return
                                }
                                if ((t[2318] | 0) == (l | 0)) {
                                    l = (t[2315] | 0) + i | 0;
                                    t[2315] = l;
                                    t[2318] = a;
                                    t[A + 4 >> 2] = l | 1;
                                    t[a + l >> 2] = l;
                                    return
                                }
                                n = (f & -8) + i | 0;
                                r = f >>> 3;
                                do {
                                    if (f >>> 0 < 256) {
                                        i = t[l + 8 >> 2] | 0;
                                        e = t[l + 12 >> 2] | 0;
                                        if ((e | 0) == (i | 0)) {
                                            t[2313] = t[2313] & ~(1 << r);
                                            break
                                        } else {
                                            t[i + 12 >> 2] = e;
                                            t[e + 8 >> 2] = i;
                                            break
                                        }
                                    } else {
                                        u = t[l + 24 >> 2] | 0;
                                        e = t[l + 12 >> 2] | 0;
                                        do {
                                            if ((e | 0) == (l | 0)) {
                                                i = l + 16 | 0;
                                                r = i + 4 | 0;
                                                e = t[r >> 2] | 0;
                                                if (!e) {
                                                    e = t[i >> 2] | 0;
                                                    if (!e) {
                                                        r = 0;
                                                        break
                                                    }
                                                } else i = r;
                                                while (1) {
                                                    f = e + 20 | 0;
                                                    r = t[f >> 2] | 0;
                                                    if (!r) {
                                                        f = e + 16 | 0;
                                                        r = t[f >> 2] | 0;
                                                        if (!r) break;
                                                        else {
                                                            e = r;
                                                            i = f
                                                        }
                                                    } else {
                                                        e = r;
                                                        i = f
                                                    }
                                                }
                                                t[i >> 2] = 0;
                                                r = e
                                            } else {
                                                r = t[l + 8 >> 2] | 0;
                                                t[r + 12 >> 2] = e;
                                                t[e + 8 >> 2] = r;
                                                r = e
                                            }
                                        } while (0);
                                        if (u | 0) {
                                            e = t[l + 28 >> 2] | 0;
                                            i = 9556 + (e << 2) | 0;
                                            if ((t[i >> 2] | 0) == (l | 0)) {
                                                t[i >> 2] = r;
                                                if (!r) {
                                                    t[2314] = t[2314] & ~(1 << e);
                                                    break
                                                }
                                            } else {
                                                f = u + 16 | 0;
                                                t[((t[f >> 2] | 0) == (l | 0) ? f : u + 20 | 0) >> 2] = r;
                                                if (!r) break
                                            }
                                            t[r + 24 >> 2] = u;
                                            e = l + 16 | 0;
                                            i = t[e >> 2] | 0;
                                            if (i | 0) {
                                                t[r + 16 >> 2] = i;
                                                t[i + 24 >> 2] = r
                                            }
                                            e = t[e + 4 >> 2] | 0;
                                            if (e | 0) {
                                                t[r + 20 >> 2] = e;
                                                t[e + 24 >> 2] = r
                                            }
                                        }
                                    }
                                } while (0);
                                t[A + 4 >> 2] = n | 1;
                                t[a + n >> 2] = n;
                                if ((A | 0) == (t[2318] | 0)) {
                                    t[2315] = n;
                                    return
                                }
                            } else {
                                t[e >> 2] = f & -2;
                                t[A + 4 >> 2] = i | 1;
                                t[a + i >> 2] = i;
                                n = i
                            }
                            e = n >>> 3;
                            if (n >>> 0 < 256) {
                                r = 9292 + (e << 1 << 2) | 0;
                                i = t[2313] | 0;
                                e = 1 << e;
                                if (!(i & e)) {
                                    t[2313] = i | e;
                                    e = r;
                                    i = r + 8 | 0
                                } else {
                                    i = r + 8 | 0;
                                    e = t[i >> 2] | 0
                                }
                                t[i >> 2] = A;
                                t[e + 12 >> 2] = A;
                                t[A + 8 >> 2] = e;
                                t[A + 12 >> 2] = r;
                                return
                            }
                            e = n >>> 8;
                            if (e)
                                if (n >>> 0 > 16777215) f = 31;
                                else {
                                    a = (e + 1048320 | 0) >>> 16 & 8;
                                    l = e << a;
                                    u = (l + 520192 | 0) >>> 16 & 4;
                                    l = l << u;
                                    f = (l + 245760 | 0) >>> 16 & 2;
                                    f = 14 - (u | a | f) + (l << f >>> 15) | 0;
                                    f = n >>> (f + 7 | 0) & 1 | f << 1
                                }
                            else f = 0;
                            e = 9556 + (f << 2) | 0;
                            t[A + 28 >> 2] = f;
                            t[A + 20 >> 2] = 0;
                            t[A + 16 >> 2] = 0;
                            i = t[2314] | 0;
                            r = 1 << f;
                            e: do {
                                if (!(i & r)) {
                                    t[2314] = i | r;
                                    t[e >> 2] = A;
                                    t[A + 24 >> 2] = e;
                                    t[A + 12 >> 2] = A;
                                    t[A + 8 >> 2] = A
                                } else {
                                    e = t[e >> 2] | 0;
                                    i: do {
                                        if ((t[e + 4 >> 2] & -8 | 0) != (n | 0)) {
                                            f = n << ((f | 0) == 31 ? 0 : 25 - (f >>> 1) | 0);
                                            while (1) {
                                                r = e + 16 + (f >>> 31 << 2) | 0;
                                                i = t[r >> 2] | 0;
                                                if (!i) break;
                                                if ((t[i + 4 >> 2] & -8 | 0) == (n | 0)) {
                                                    e = i;
                                                    break i
                                                } else {
                                                    f = f << 1;
                                                    e = i
                                                }
                                            }
                                            t[r >> 2] = A;
                                            t[A + 24 >> 2] = e;
                                            t[A + 12 >> 2] = A;
                                            t[A + 8 >> 2] = A;
                                            break e
                                        }
                                    } while (0);
                                    a = e + 8 | 0;
                                    l = t[a >> 2] | 0;
                                    t[l + 12 >> 2] = A;
                                    t[a >> 2] = A;
                                    t[A + 8 >> 2] = l;
                                    t[A + 12 >> 2] = e;
                                    t[A + 24 >> 2] = 0
                                }
                            } while (0);
                            l = (t[2321] | 0) + -1 | 0;
                            t[2321] = l;
                            if (l | 0) return;
                            e = 9708;
                            while (1) {
                                e = t[e >> 2] | 0;
                                if (!e) break;
                                else e = e + 8 | 0
                            }
                            t[2321] = -1;
                            return
                        }

                        function to(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0;
                            if (e) {
                                r = v(i, e) | 0;
                                if ((i | e) >>> 0 > 65535) r = ((r >>> 0) / (e >>> 0) | 0 | 0) == (i | 0) ? r : -1
                            } else r = 0;
                            e = fo(r) | 0;
                            if (!e) return e | 0;
                            if (!(t[e + -4 >> 2] & 3)) return e | 0;
                            Po(e | 0, 0, r | 0) | 0;
                            return e | 0
                        }

                        function uo(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return 0
                        }

                        function ao(e) {
                            e = e | 0;
                            return 0
                        }

                        function Ao(e) {
                            e = e | 0;
                            return 0
                        }

                        function lo(e) {
                            e = e | 0;
                            return 0
                        }

                        function oo() {
                            return 9748
                        }

                        function co(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0,
                                t = 0;
                            e: do {
                                if (!r) e = 0;
                                else {
                                    while (1) {
                                        n = f[e >> 0] | 0;
                                        t = f[i >> 0] | 0;
                                        if (n << 24 >> 24 != t << 24 >> 24) break;
                                        r = r + -1 | 0;
                                        if (!r) {
                                            e = 0;
                                            break e
                                        } else {
                                            e = e + 1 | 0;
                                            i = i + 1 | 0
                                        }
                                    }
                                    e = (n & 255) - (t & 255) | 0
                                }
                            } while (0);
                            return e | 0
                        }

                        function so(e, i) {
                            e = e | 0;
                            i = i | 0;
                            var r = 0,
                                f = 0,
                                n = 0,
                                t = 0;
                            t = e & 65535;
                            n = i & 65535;
                            r = v(n, t) | 0;
                            f = e >>> 16;
                            e = (r >>> 16) + (v(n, f) | 0) | 0;
                            n = i >>> 16;
                            i = v(n, t) | 0;
                            return (d((e >>> 16) + (v(n, f) | 0) + (((e & 65535) + i | 0) >>> 16) | 0), e + i << 16 | r & 65535 | 0) | 0
                        }

                        function bo(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            var n = 0,
                                t = 0;
                            n = e;
                            t = r;
                            r = so(n, t) | 0;
                            e = y() | 0;
                            return (d((v(i, t) | 0) + (v(f, n) | 0) + e | e & 0 | 0), r | 0 | 0) | 0
                        }

                        function ho(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            r = e + r >>> 0;
                            return (d(i + f + (r >>> 0 < e >>> 0 | 0) >>> 0 | 0), r | 0) | 0
                        }

                        function ko(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            f = i - f - (r >>> 0 > e >>> 0 | 0) >>> 0;
                            return (d(f | 0), e - r >>> 0 | 0) | 0
                        }

                        function wo(e) {
                            e = e | 0;
                            return (e ? 31 - (C(e ^ e - 1) | 0) | 0 : 32) | 0
                        }

                        function go(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            var u = 0,
                                a = 0,
                                A = 0,
                                l = 0,
                                o = 0,
                                c = 0,
                                s = 0,
                                b = 0,
                                h = 0,
                                k = 0;
                            c = e;
                            l = i;
                            o = l;
                            a = r;
                            b = f;
                            A = b;
                            if (!o) {
                                u = (n | 0) != 0;
                                if (!A) {
                                    if (u) {
                                        t[n >> 2] = (c >>> 0) % (a >>> 0);
                                        t[n + 4 >> 2] = 0
                                    }
                                    b = 0;
                                    n = (c >>> 0) / (a >>> 0) >>> 0;
                                    return (d(b | 0), n) | 0
                                } else {
                                    if (!u) {
                                        b = 0;
                                        n = 0;
                                        return (d(b | 0), n) | 0
                                    }
                                    t[n >> 2] = e | 0;
                                    t[n + 4 >> 2] = i & 0;
                                    b = 0;
                                    n = 0;
                                    return (d(b | 0), n) | 0
                                }
                            }
                            u = (A | 0) == 0;
                            do {
                                if (a) {
                                    if (!u) {
                                        u = (C(A | 0) | 0) - (C(o | 0) | 0) | 0;
                                        if (u >>> 0 <= 31) {
                                            s = u + 1 | 0;
                                            A = 31 - u | 0;
                                            i = u - 31 >> 31;
                                            a = s;
                                            e = c >>> (s >>> 0) & i | o << A;
                                            i = o >>> (s >>> 0) & i;
                                            u = 0;
                                            A = c << A;
                                            break
                                        }
                                        if (!n) {
                                            b = 0;
                                            n = 0;
                                            return (d(b | 0), n) | 0
                                        }
                                        t[n >> 2] = e | 0;
                                        t[n + 4 >> 2] = l | i & 0;
                                        b = 0;
                                        n = 0;
                                        return (d(b | 0), n) | 0
                                    }
                                    u = a - 1 | 0;
                                    if (u & a | 0) {
                                        A = (C(a | 0) | 0) + 33 - (C(o | 0) | 0) | 0;
                                        k = 64 - A | 0;
                                        s = 32 - A | 0;
                                        l = s >> 31;
                                        h = A - 32 | 0;
                                        i = h >> 31;
                                        a = A;
                                        e = s - 1 >> 31 & o >>> (h >>> 0) | (o << s | c >>> (A >>> 0)) & i;
                                        i = i & o >>> (A >>> 0);
                                        u = c << k & l;
                                        A = (o << k | c >>> (h >>> 0)) & l | c << s & A - 33 >> 31;
                                        break
                                    }
                                    if (n | 0) {
                                        t[n >> 2] = u & c;
                                        t[n + 4 >> 2] = 0
                                    }
                                    if ((a | 0) == 1) {
                                        h = l | i & 0;
                                        k = e | 0 | 0;
                                        return (d(h | 0), k) | 0
                                    } else {
                                        k = wo(a | 0) | 0;
                                        h = o >>> (k >>> 0) | 0;
                                        k = o << 32 - k | c >>> (k >>> 0) | 0;
                                        return (d(h | 0), k) | 0
                                    }
                                } else {
                                    if (u) {
                                        if (n | 0) {
                                            t[n >> 2] = (o >>> 0) % (a >>> 0);
                                            t[n + 4 >> 2] = 0
                                        }
                                        h = 0;
                                        k = (o >>> 0) / (a >>> 0) >>> 0;
                                        return (d(h | 0), k) | 0
                                    }
                                    if (!c) {
                                        if (n | 0) {
                                            t[n >> 2] = 0;
                                            t[n + 4 >> 2] = (o >>> 0) % (A >>> 0)
                                        }
                                        h = 0;
                                        k = (o >>> 0) / (A >>> 0) >>> 0;
                                        return (d(h | 0), k) | 0
                                    }
                                    u = A - 1 | 0;
                                    if (!(u & A)) {
                                        if (n | 0) {
                                            t[n >> 2] = e | 0;
                                            t[n + 4 >> 2] = u & o | i & 0
                                        }
                                        h = 0;
                                        k = o >>> ((wo(A | 0) | 0) >>> 0);
                                        return (d(h | 0), k) | 0
                                    }
                                    u = (C(A | 0) | 0) - (C(o | 0) | 0) | 0;
                                    if (u >>> 0 <= 30) {
                                        i = u + 1 | 0;
                                        A = 31 - u | 0;
                                        a = i;
                                        e = o << A | c >>> (i >>> 0);
                                        i = o >>> (i >>> 0);
                                        u = 0;
                                        A = c << A;
                                        break
                                    }
                                    if (!n) {
                                        h = 0;
                                        k = 0;
                                        return (d(h | 0), k) | 0
                                    }
                                    t[n >> 2] = e | 0;
                                    t[n + 4 >> 2] = l | i & 0;
                                    h = 0;
                                    k = 0;
                                    return (d(h | 0), k) | 0
                                }
                            } while (0);
                            if (!a) {
                                o = A;
                                l = 0;
                                A = 0
                            } else {
                                s = r | 0 | 0;
                                c = b | f & 0;
                                o = ho(s | 0, c | 0, -1, -1) | 0;
                                r = y() | 0;
                                l = A;
                                A = 0;
                                do {
                                    f = l;
                                    l = u >>> 31 | l << 1;
                                    u = A | u << 1;
                                    f = e << 1 | f >>> 31 | 0;
                                    b = e >>> 31 | i << 1 | 0;
                                    ko(o | 0, r | 0, f | 0, b | 0) | 0;
                                    k = y() | 0;
                                    h = k >> 31 | ((k | 0) < 0 ? -1 : 0) << 1;
                                    A = h & 1;
                                    e = ko(f | 0, b | 0, h & s | 0, (((k | 0) < 0 ? -1 : 0) >> 31 | ((k | 0) < 0 ? -1 : 0) << 1) & c | 0) | 0;
                                    i = y() | 0;
                                    a = a - 1 | 0
                                } while ((a | 0) != 0);
                                o = l;
                                l = 0
                            }
                            a = 0;
                            if (n | 0) {
                                t[n >> 2] = e;
                                t[n + 4 >> 2] = i
                            }
                            h = (u | 0) >>> 31 | (o | a) << 1 | (a << 1 | u >>> 31) & 0 | l;
                            k = (u << 1 | 0 >>> 31) & -2 | A;
                            return (d(h | 0), k) | 0
                        }

                        function vo(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            return go(e, i, r, f, 0) | 0
                        }

                        function Co(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            if ((r | 0) < 32) {
                                d(i >>> r | 0);
                                return e >>> r | (i & (1 << r) - 1) << 32 - r
                            }
                            d(0);
                            return i >>> r - 32 | 0
                        }

                        function Io(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            if ((r | 0) < 32) {
                                d(i << r | (e & (1 << r) - 1 << 32 - r) >>> 32 - r | 0);
                                return e << r
                            }
                            d(e << r - 32 | 0);
                            return 0
                        }

                        function yo(e) {
                            e = e | 0;
                            return (e & 255) << 24 | (e >> 8 & 255) << 16 | (e >> 16 & 255) << 8 | e >>> 24 | 0
                        }

                        function mo(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0,
                                u = 0,
                                a = 0;
                            if ((r | 0) >= 8192) {
                                P(e | 0, i | 0, r | 0) | 0;
                                return e | 0
                            }
                            a = e | 0;
                            u = e + r | 0;
                            if ((e & 3) == (i & 3)) {
                                while (e & 3) {
                                    if (!r) return a | 0;
                                    f[e >> 0] = f[i >> 0] | 0;
                                    e = e + 1 | 0;
                                    i = i + 1 | 0;
                                    r = r - 1 | 0
                                }
                                r = u & -4 | 0;
                                n = r - 64 | 0;
                                while ((e | 0) <= (n | 0)) {
                                    t[e >> 2] = t[i >> 2];
                                    t[e + 4 >> 2] = t[i + 4 >> 2];
                                    t[e + 8 >> 2] = t[i + 8 >> 2];
                                    t[e + 12 >> 2] = t[i + 12 >> 2];
                                    t[e + 16 >> 2] = t[i + 16 >> 2];
                                    t[e + 20 >> 2] = t[i + 20 >> 2];
                                    t[e + 24 >> 2] = t[i + 24 >> 2];
                                    t[e + 28 >> 2] = t[i + 28 >> 2];
                                    t[e + 32 >> 2] = t[i + 32 >> 2];
                                    t[e + 36 >> 2] = t[i + 36 >> 2];
                                    t[e + 40 >> 2] = t[i + 40 >> 2];
                                    t[e + 44 >> 2] = t[i + 44 >> 2];
                                    t[e + 48 >> 2] = t[i + 48 >> 2];
                                    t[e + 52 >> 2] = t[i + 52 >> 2];
                                    t[e + 56 >> 2] = t[i + 56 >> 2];
                                    t[e + 60 >> 2] = t[i + 60 >> 2];
                                    e = e + 64 | 0;
                                    i = i + 64 | 0
                                }
                                while ((e | 0) < (r | 0)) {
                                    t[e >> 2] = t[i >> 2];
                                    e = e + 4 | 0;
                                    i = i + 4 | 0
                                }
                            } else {
                                r = u - 4 | 0;
                                while ((e | 0) < (r | 0)) {
                                    f[e >> 0] = f[i >> 0] | 0;
                                    f[e + 1 >> 0] = f[i + 1 >> 0] | 0;
                                    f[e + 2 >> 0] = f[i + 2 >> 0] | 0;
                                    f[e + 3 >> 0] = f[i + 3 >> 0] | 0;
                                    e = e + 4 | 0;
                                    i = i + 4 | 0
                                }
                            }
                            while ((e | 0) < (u | 0)) {
                                f[e >> 0] = f[i >> 0] | 0;
                                e = e + 1 | 0;
                                i = i + 1 | 0
                            }
                            return a | 0
                        }

                        function po(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0;
                            if ((i | 0) < (e | 0) & (e | 0) < (i + r | 0)) {
                                n = e;
                                i = i + r | 0;
                                e = e + r | 0;
                                while ((r | 0) > 0) {
                                    e = e - 1 | 0;
                                    i = i - 1 | 0;
                                    r = r - 1 | 0;
                                    f[e >> 0] = f[i >> 0] | 0
                                }
                                e = n
                            } else mo(e, i, r) | 0;
                            return e | 0
                        }

                        function Po(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            var n = 0,
                                u = 0,
                                a = 0,
                                A = 0;
                            a = e + r | 0;
                            i = i & 255;
                            if ((r | 0) >= 67) {
                                while (e & 3) {
                                    f[e >> 0] = i;
                                    e = e + 1 | 0
                                }
                                n = a & -4 | 0;
                                A = i | i << 8 | i << 16 | i << 24;
                                u = n - 64 | 0;
                                while ((e | 0) <= (u | 0)) {
                                    t[e >> 2] = A;
                                    t[e + 4 >> 2] = A;
                                    t[e + 8 >> 2] = A;
                                    t[e + 12 >> 2] = A;
                                    t[e + 16 >> 2] = A;
                                    t[e + 20 >> 2] = A;
                                    t[e + 24 >> 2] = A;
                                    t[e + 28 >> 2] = A;
                                    t[e + 32 >> 2] = A;
                                    t[e + 36 >> 2] = A;
                                    t[e + 40 >> 2] = A;
                                    t[e + 44 >> 2] = A;
                                    t[e + 48 >> 2] = A;
                                    t[e + 52 >> 2] = A;
                                    t[e + 56 >> 2] = A;
                                    t[e + 60 >> 2] = A;
                                    e = e + 64 | 0
                                }
                                while ((e | 0) < (n | 0)) {
                                    t[e >> 2] = A;
                                    e = e + 4 | 0
                                }
                            }
                            while ((e | 0) < (a | 0)) {
                                f[e >> 0] = i;
                                e = e + 1 | 0
                            }
                            return a - r | 0
                        }

                        function Do(e) {
                            e = e | 0;
                            var i = 0,
                                r = 0;
                            r = t[l >> 2] | 0;
                            i = r + e | 0;
                            if ((e | 0) > 0 & (i | 0) < (r | 0) | (i | 0) < 0) {
                                S(i | 0) | 0;
                                m(12);
                                return -1
                            }
                            if ((i | 0) > (p() | 0) ? (D(i | 0) | 0) == 0 : 0) {
                                m(12);
                                return -1
                            }
                            t[l >> 2] = i;
                            return r | 0
                        }

                        function Bo(e, i) {
                            e = e | 0;
                            i = i | 0;
                            return jo[e & 15](i | 0) | 0
                        }

                        function Eo(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            return No[e & 31](i | 0, r | 0) | 0
                        }

                        function Ro(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            return $o[e & 7](i | 0, r | 0, f | 0) | 0
                        }

                        function Go(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            return ec[e & 1](i | 0, r | 0, f | 0, n | 0) | 0
                        }

                        function _o(e, i, r, f, n, t, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            u = u | 0;
                            return ic[e & 1](i | 0, r | 0, f | 0, n | 0, t | 0, u | 0) | 0
                        }

                        function Fo(e, i) {
                            e = e | 0;
                            i = i | 0;
                            rc[e & 31](i | 0)
                        }

                        function So(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            fc[e & 3](i | 0, r | 0)
                        }

                        function xo(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            nc[e & 7](i | 0, r | 0, f | 0)
                        }

                        function Qo(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            tc[e & 31](i | 0, r | 0, f | 0, n | 0)
                        }

                        function Ho(e, i, r, f, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            uc[e & 31](i | 0, r | 0, f | 0, n | 0, t | 0)
                        }

                        function Mo(e, i, r, f, n, t, u) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            u = u | 0;
                            ac[e & 3](i | 0, r | 0, f | 0, n | 0, t | 0, u | 0)
                        }

                        function Vo(e, i, r, f, n, t, u, a, A, l) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            u = u | 0;
                            a = a | 0;
                            A = A | 0;
                            l = l | 0;
                            Ac[e & 7](i | 0, r | 0, f | 0, n | 0, t | 0, u | 0, a | 0, A | 0, l | 0)
                        }

                        function Yo(e) {
                            e = e | 0;
                            I(0);
                            return 0
                        }

                        function Uo(e, i) {
                            e = e | 0;
                            i = i | 0;
                            I(1);
                            return 0
                        }

                        function Zo(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            I(2);
                            return 0
                        }

                        function Wo(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            I(3);
                            return 0
                        }

                        function To(e, i, r, f, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            I(4);
                            return 0
                        }

                        function Lo(e) {
                            e = e | 0;
                            I(5)
                        }

                        function zo(e, i) {
                            e = e | 0;
                            i = i | 0;
                            I(6)
                        }

                        function Jo(e, i, r) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            I(7)
                        }

                        function Oo(e, i, r, f) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            I(8)
                        }

                        function qo(e, i, r, f, n) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            I(9)
                        }

                        function Ko(e, i, r, f, n, t) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            I(10)
                        }

                        function Xo(e, i, r, f, n, t, u, a, A) {
                            e = e | 0;
                            i = i | 0;
                            r = r | 0;
                            f = f | 0;
                            n = n | 0;
                            t = t | 0;
                            u = u | 0;
                            a = a | 0;
                            A = A | 0;
                            I(11)
                        }
                        var jo = [Yo, _e, Fe, Se, xe, Ju, Ou, _n, Fn, Nu, Yo, Yo, Yo, Yo, Yo, Yo];
                        var No = [Uo, rf, ff, Uf, Zf, _r, Wf, Tf, Lf, zf, Jf, Of, qf, Kf, Xf, jf, Nf, Wn, Tn, Ln, Rt, vt, Tu, Uo, Uo, Uo, Uo, Uo, Uo, Uo, Uo, Uo];
                        var $o = [Zo, zn, Jn, On, _t, St, Ft, Ct];
                        var ec = [Wo, $A];
                        var ic = [To, Tl];
                        var rc = [Lo, zu, qu, Ku, Xu, Sn, Va, Ya, Ua, Za, Wa, Ta, La, za, Ja, Oa, qa, Ka, Xa, ja, Na, $a, eA, iA, rA, fA, nA, tA, uA, aA, Lo, Lo];
                        var fc = [zo, Bi, Qi, zo];
                        var nc = [Jo, ke, we, XA, jA, Jo, Jo, Jo];
                        var tc = [Oo, Er, Rr, Gr, $f, en, rn, fn, nn, tn, un, an, An, ln, on, ku, wu, gu, NA, el, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo, Oo];
                        var uc = [qo, Nn, $n, et, it, rt, ft, nt, Mt, Vt, Yt, Ut, Zt, Wt, Tt, vu, Cu, Iu, il, qo, qo, qo, qo, qo, qo, qo, qo, qo, qo, qo, qo, qo];
                        var ac = [Ko, Kr, Nr, Ko];
                        var Ac = [Xo, nu, tu, uu, au, Au, lu, ou];
                        return {
                            _WebpToAnimationFrames: se,
                            ___errno_location: oo,
                            ___muldi3: bo,
                            ___udivdi3: vo,
                            _bitshift64Lshr: Co,
                            _bitshift64Shl: Io,
                            _free: no,
                            _i64Add: ho,
                            _llvm_bswap_i32: yo,
                            _malloc: fo,
                            _memcpy: mo,
                            _memmove: po,
                            _memset: Po,
                            _sbrk: Do,
                            dynCall_ii: Bo,
                            dynCall_iii: Eo,
                            dynCall_iiii: Ro,
                            dynCall_iiiii: Go,
                            dynCall_iiiiiii: _o,
                            dynCall_vi: Fo,
                            dynCall_vii: So,
                            dynCall_viii: xo,
                            dynCall_viiii: Qo,
                            dynCall_viiiii: Ho,
                            dynCall_viiiiii: Mo,
                            dynCall_viiiiiiiii: Vo,
                            establishStackSpace: U,
                            stackAlloc: M,
                            stackRestore: Y,
                            stackSave: V
                        }
                    }({
                        Math,
                        Int8Array,
                        Int16Array,
                        Int32Array,
                        Uint8Array,
                        Uint16Array
                    }, {
                        a: ne,
                        b: function(e) {
                            k = e
                        },
                        c: function() {
                            return k
                        },
                        d: function(e) {
                            return n.___errno_location && (p[n.___errno_location() >> 2] = e), e
                        },
                        e: U,
                        f: function(e, i, r) {
                            m.set(m.subarray(i, i + r), e)
                        },
                        g: function(e) {
                            Z()
                        },
                        h: function() {
                            return 0
                        },
                        i: function() {
                            return 0
                        },
                        j: function() {
                            return 0
                        },
                        k: function() {
                            return 0
                        },
                        l: function() {
                            return 11
                        },
                        m: function() {},
                        n: Z,
                        o: 10016,
                        p: P
                    }, d),
                    q = (n._WebpToAnimationFrames = O._WebpToAnimationFrames, n.___errno_location = O.___errno_location, n.___muldi3 = O.___muldi3, n.___udivdi3 = O.___udivdi3, n._bitshift64Lshr = O._bitshift64Lshr, n._bitshift64Shl = O._bitshift64Shl, n._free = O._free, n._i64Add = O._i64Add, n._llvm_bswap_i32 = O._llvm_bswap_i32, n._malloc = O._malloc, n._memcpy = O._memcpy, n._memmove = O._memmove, n._memset = O._memset, n._sbrk = O._sbrk, n.establishStackSpace = O.establishStackSpace, n.stackAlloc = O.stackAlloc),
                    K = n.stackRestore = O.stackRestore,
                    X = n.stackSave = O.stackSave;
                n.dynCall_ii = O.dynCall_ii, n.dynCall_iii = O.dynCall_iii, n.dynCall_iiii = O.dynCall_iiii, n.dynCall_iiiii = O.dynCall_iiiii, n.dynCall_iiiiiii = O.dynCall_iiiiiii, n.dynCall_vi = O.dynCall_vi, n.dynCall_vii = O.dynCall_vii, n.dynCall_viii = O.dynCall_viii, n.dynCall_viiii = O.dynCall_viiii, n.dynCall_viiiii = O.dynCall_viiiii, n.dynCall_viiiiii = O.dynCall_viiiiii, n.dynCall_viiiiiiiii = O.dynCall_viiiiiiiii;
                if (n.asm = O, n.cwrap = function(e, i, r, f) {
                        var n = (r = r || []).every((function(e) {
                            return "number" === e
                        }));
                        return "string" !== i && n && !f ? v(e) : function() {
                            return C(e, i, r, arguments)
                        }
                    }, M)
                    if (Y(M) || (J = M, M = n.locateFile ? n.locateFile(J, s) : s + J), a || A) {
                        var j = n.readBinary(M);
                        m.set(j, 8)
                    } else {
                        x++, n.monitorRunDependencies && n.monitorRunDependencies(x);
                        var N = function(e) {
                                e.byteLength && (e = new Uint8Array(e)), m.set(e, 8), n.memoryInitializerRequest && delete n.memoryInitializerRequest.response,
                                    function(e) {
                                        if (x--, n.monitorRunDependencies && n.monitorRunDependencies(x), 0 == x && (null !== Q && (clearInterval(Q), Q = null), H)) {
                                            var i = H;
                                            H = null, i()
                                        }
                                    }()
                            },
                            $ = function() {
                                n.readAsync(M, N, (function() {
                                    throw "could not load memory initializer " + M
                                }))
                            },
                            ee = z(M);
                        if (ee) N(ee.buffer);
                        else if (n.memoryInitializerRequest) {
                            var ie = function() {
                                var e = n.memoryInitializerRequest,
                                    i = e.response;
                                if (200 !== e.status && 0 !== e.status) {
                                    var r = z(n.memoryInitializerRequestURL);
                                    if (!r) return console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: " + e.status + ", retrying " + M), void $();
                                    i = r.buffer
                                }
                                N(i)
                            };
                            n.memoryInitializerRequest.response ? setTimeout(ie, 0) : n.memoryInitializerRequest.addEventListener("load", ie)
                        } else $()
                    }

                function re(e) {
                    this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
                }

                function fe(e) {
                    function i() {
                        n.calledRun || (n.calledRun = !0, w || (S || (S = !0, E(G)), E(_), n.onRuntimeInitialized && n.onRuntimeInitialized(), function() {
                            if (n.postRun)
                                for ("function" == typeof n.postRun && (n.postRun = [n.postRun]); n.postRun.length;) e = n.postRun.shift(), F.unshift(e);
                            var e;
                            E(F)
                        }()))
                    }
                    e = e || n.arguments, 0 < x || (function() {
                        if (n.preRun)
                            for ("function" == typeof n.preRun && (n.preRun = [n.preRun]); n.preRun.length;) e = n.preRun.shift(), R.unshift(e);
                        var e;
                        E(R)
                    }(), 0 < x || n.calledRun || (n.setStatus ? (n.setStatus("Running..."), setTimeout((function() {
                        setTimeout((function() {
                            n.setStatus("")
                        }), 1), i()
                    }), 1)) : i()))
                }

                function ne(e) {
                    throw n.onAbort && n.onAbort(e), e = void 0 !== e ? (b(e), h(e), JSON.stringify(e)) : "", w = !0, 1, "abort(" + e + "). Build with -s ASSERTIONS=1 for more info."
                }
                if (re.prototype = new Error, re.prototype.constructor = re, H = function e() {
                        n.calledRun || fe(), n.calledRun || (H = e)
                    }, n.run = fe, n.abort = ne, n.preInit)
                    for ("function" == typeof n.preInit && (n.preInit = [n.preInit]); 0 < n.preInit.length;) n.preInit.pop()();
                n.noExitRuntime = !0, fe(), e.exports = n
            },
            318: e => {
                e.exports = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
            },
            470: e => {
                "use strict";

                function i(e) {
                    if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
                }

                function r(e, i) {
                    for (var r, f = "", n = 0, t = -1, u = 0, a = 0; a <= e.length; ++a) {
                        if (a < e.length) r = e.charCodeAt(a);
                        else {
                            if (47 === r) break;
                            r = 47
                        }
                        if (47 === r) {
                            if (t === a - 1 || 1 === u);
                            else if (t !== a - 1 && 2 === u) {
                                if (f.length < 2 || 2 !== n || 46 !== f.charCodeAt(f.length - 1) || 46 !== f.charCodeAt(f.length - 2))
                                    if (f.length > 2) {
                                        var A = f.lastIndexOf("/");
                                        if (A !== f.length - 1) {
                                            -1 === A ? (f = "", n = 0) : n = (f = f.slice(0, A)).length - 1 - f.lastIndexOf("/"), t = a, u = 0;
                                            continue
                                        }
                                    } else if (2 === f.length || 1 === f.length) {
                                    f = "", n = 0, t = a, u = 0;
                                    continue
                                }
                                i && (f.length > 0 ? f += "/.." : f = "..", n = 2)
                            } else f.length > 0 ? f += "/" + e.slice(t + 1, a) : f = e.slice(t + 1, a), n = a - t - 1;
                            t = a, u = 0
                        } else 46 === r && -1 !== u ? ++u : u = -1
                    }
                    return f
                }
                var f = {
                    resolve: function() {
                        for (var e, f = "", n = !1, t = arguments.length - 1; t >= -1 && !n; t--) {
                            var u;
                            t >= 0 ? u = arguments[t] : (void 0 === e && (e = process.cwd()), u = e), i(u), 0 !== u.length && (f = u + "/" + f, n = 47 === u.charCodeAt(0))
                        }
                        return f = r(f, !n), n ? f.length > 0 ? "/" + f : "/" : f.length > 0 ? f : "."
                    },
                    normalize: function(e) {
                        if (i(e), 0 === e.length) return ".";
                        var f = 47 === e.charCodeAt(0),
                            n = 47 === e.charCodeAt(e.length - 1);
                        return 0 !== (e = r(e, !f)).length || f || (e = "."), e.length > 0 && n && (e += "/"), f ? "/" + e : e
                    },
                    isAbsolute: function(e) {
                        return i(e), e.length > 0 && 47 === e.charCodeAt(0)
                    },
                    join: function() {
                        if (0 === arguments.length) return ".";
                        for (var e, r = 0; r < arguments.length; ++r) {
                            var n = arguments[r];
                            i(n), n.length > 0 && (void 0 === e ? e = n : e += "/" + n)
                        }
                        return void 0 === e ? "." : f.normalize(e)
                    },
                    relative: function(e, r) {
                        if (i(e), i(r), e === r) return "";
                        if ((e = f.resolve(e)) === (r = f.resolve(r))) return "";
                        for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
                        for (var t = e.length, u = t - n, a = 1; a < r.length && 47 === r.charCodeAt(a); ++a);
                        for (var A = r.length - a, l = u < A ? u : A, o = -1, c = 0; c <= l; ++c) {
                            if (c === l) {
                                if (A > l) {
                                    if (47 === r.charCodeAt(a + c)) return r.slice(a + c + 1);
                                    if (0 === c) return r.slice(a + c)
                                } else u > l && (47 === e.charCodeAt(n + c) ? o = c : 0 === c && (o = 0));
                                break
                            }
                            var s = e.charCodeAt(n + c);
                            if (s !== r.charCodeAt(a + c)) break;
                            47 === s && (o = c)
                        }
                        var b = "";
                        for (c = n + o + 1; c <= t; ++c) c !== t && 47 !== e.charCodeAt(c) || (0 === b.length ? b += ".." : b += "/..");
                        return b.length > 0 ? b + r.slice(a + o) : (a += o, 47 === r.charCodeAt(a) && ++a, r.slice(a))
                    },
                    _makeLong: function(e) {
                        return e
                    },
                    dirname: function(e) {
                        if (i(e), 0 === e.length) return ".";
                        for (var r = e.charCodeAt(0), f = 47 === r, n = -1, t = !0, u = e.length - 1; u >= 1; --u)
                            if (47 === (r = e.charCodeAt(u))) {
                                if (!t) {
                                    n = u;
                                    break
                                }
                            } else t = !1;
                        return -1 === n ? f ? "/" : "." : f && 1 === n ? "//" : e.slice(0, n)
                    },
                    basename: function(e, r) {
                        if (void 0 !== r && "string" != typeof r) throw new TypeError('"ext" argument must be a string');
                        i(e);
                        var f, n = 0,
                            t = -1,
                            u = !0;
                        if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                            if (r.length === e.length && r === e) return "";
                            var a = r.length - 1,
                                A = -1;
                            for (f = e.length - 1; f >= 0; --f) {
                                var l = e.charCodeAt(f);
                                if (47 === l) {
                                    if (!u) {
                                        n = f + 1;
                                        break
                                    }
                                } else -1 === A && (u = !1, A = f + 1), a >= 0 && (l === r.charCodeAt(a) ? -1 == --a && (t = f) : (a = -1, t = A))
                            }
                            return n === t ? t = A : -1 === t && (t = e.length), e.slice(n, t)
                        }
                        for (f = e.length - 1; f >= 0; --f)
                            if (47 === e.charCodeAt(f)) {
                                if (!u) {
                                    n = f + 1;
                                    break
                                }
                            } else -1 === t && (u = !1, t = f + 1);
                        return -1 === t ? "" : e.slice(n, t)
                    },
                    extname: function(e) {
                        i(e);
                        for (var r = -1, f = 0, n = -1, t = !0, u = 0, a = e.length - 1; a >= 0; --a) {
                            var A = e.charCodeAt(a);
                            if (47 !== A) - 1 === n && (t = !1, n = a + 1), 46 === A ? -1 === r ? r = a : 1 !== u && (u = 1) : -1 !== r && (u = -1);
                            else if (!t) {
                                f = a + 1;
                                break
                            }
                        }
                        return -1 === r || -1 === n || 0 === u || 1 === u && r === n - 1 && r === f + 1 ? "" : e.slice(r, n)
                    },
                    format: function(e) {
                        if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                        return function(e, i) {
                            var r = i.dir || i.root,
                                f = i.base || (i.name || "") + (i.ext || "");
                            return r ? r === i.root ? r + f : r + e + f : f
                        }("/", e)
                    },
                    parse: function(e) {
                        i(e);
                        var r = {
                            root: "",
                            dir: "",
                            base: "",
                            ext: "",
                            name: ""
                        };
                        if (0 === e.length) return r;
                        var f, n = e.charCodeAt(0),
                            t = 47 === n;
                        t ? (r.root = "/", f = 1) : f = 0;
                        for (var u = -1, a = 0, A = -1, l = !0, o = e.length - 1, c = 0; o >= f; --o)
                            if (47 !== (n = e.charCodeAt(o))) - 1 === A && (l = !1, A = o + 1), 46 === n ? -1 === u ? u = o : 1 !== c && (c = 1) : -1 !== u && (c = -1);
                            else if (!l) {
                            a = o + 1;
                            break
                        }
                        return -1 === u || -1 === A || 0 === c || 1 === c && u === A - 1 && u === a + 1 ? -1 !== A && (r.base = r.name = 0 === a && t ? e.slice(1, A) : e.slice(a, A)) : (0 === a && t ? (r.name = e.slice(1, u), r.base = e.slice(1, A)) : (r.name = e.slice(a, u), r.base = e.slice(a, A)), r.ext = e.slice(u, A)), a > 0 ? r.dir = e.slice(0, a - 1) : t && (r.dir = "/"), r
                    },
                    sep: "/",
                    delimiter: ":",
                    win32: null,
                    posix: null
                };
                f.posix = f, e.exports = f
            },
            747: e => {
                "use strict";
                e.exports = fs
            }
        },
        i = {};

    function r(f) {
        var n = i[f];
        if (void 0 !== n) return n.exports;
        var t = i[f] = {
            exports: {}
        };
        return e[f](t, t.exports, r), t.exports
    }(() => {
        "use strict";
        var e = r(318)(r(494)),
            i = e.default.cwrap("WebpToAnimationFrames", "number", ["array", "number"]);
        self.onmessage = function(r) {
            for (var f = r.data.webpBuffer, n = new Uint8Array(f), t = i(n, n.length) >> 2, u = e.default.HEAP32[t], a = e.default.HEAP32[t + 1], A = e.default.HEAP32[t + 2], l = e.default.HEAP32[t + 3] >> 2, o = [], c = 0; c < u; c++) {
                var s = e.default.HEAP32[l + 2 * c],
                    b = e.default.HEAP32[l + 2 * c + 1],
                    h = e.default.HEAPU8.slice(b, b + A * a * 4).buffer;
                o.push({
                    duration: s,
                    rgbaBuffer: h
                })
            }
            self.postMessage({
                width: a,
                height: A,
                frames: o
            }, o.map((function(e) {
                return e.rgbaBuffer
            })))
        }
    })()
})();