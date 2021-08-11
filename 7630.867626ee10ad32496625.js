/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [7630], {
        40346: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatRemoveResult = function(e, t) {
                return i(e, f, p, m, t)
            }, t.formatResult = i, t.formatParticipantActionString = d, t.formatGroupStatusReasonString = s, t.formatParticipantStatusReasonString = c, t.addSuccessString = function(e, t) {
                return l.default.t(165, {
                    participantNames: e,
                    _plural: t
                })
            }, t.addFailedString = function(e, t) {
                return l.default.t(163, {
                    participantNames: e,
                    _plural: t
                })
            }, t.addPartialFailedString = function() {
                return l.default.t(164)
            }, t.removeSuccessString = f, t.removeFailedString = p, t.removePartialFailedString = m, t.promoteSuccessString = function(e, t) {
                return l.default.t(178, {
                    participantNames: e,
                    _plural: t
                })
            }, t.promoteFailedString = function(e, t) {
                return l.default.t(176, {
                    participantNames: e,
                    _plural: t
                })
            }, t.promotePartialFailedString = function() {
                return l.default.t(177)
            }, t.demoteFailedString = function(e, t, a) {
                switch (a) {
                    case 406:
                        return l.default.t(168, {
                            participant: e
                        });
                    default:
                        return l.default.t(167, {
                            participantNames: e,
                            _plural: t
                        })
                }
            }, t.demoteSuccessString = function(e, t) {
                return l.default.t(170, {
                    participantNames: e,
                    _plural: t
                })
            }, t.demotePartialFailedString = function() {
                return l.default.t(169)
            };
            var r = n(a(48629)),
                o = n(a(22021)),
                l = n(a(89115)),
                u = n(a(12717));

            function i(e, t, a, n, l) {
                var i;
                if (207 === e.status) {
                    var f = {};
                    for (var p in e)
                        if (u.default.isWid(p)) {
                            var m = e[p];
                            if ((403 !== m || !o.default.supportsFeature(o.default.F.GROUPS_V_4_JOIN_PERMISSION)) && 207 !== m) {
                                f[m] || (f[m] = []);
                                var h = r.default.get(p);
                                h && f[m].push(h)
                            }
                        } var v = [];
                    for (var g in f) {
                        var _ = d(t, a, c, parseInt(g, 10), f[g]);
                        _ && v.push(_)
                    }
                    i = v.length > 0 ? v.join("\n") : n()
                } else i = d(t, a, s, e.status, l);
                return i
            }

            function d(e, t, a, n, r) {
                var o = r.map((function(e) {
                        return e.formattedShortName
                    })).join(l.default.t(672)),
                    u = 200 === n;
                return (u ? e(o, r.length) : t(o, r.length, n)) + (u ? "" : a(n, r.length))
            }

            function s(e) {
                var t = "";
                switch (e) {
                    case 403:
                        t = " " + l.default.t(113);
                        break;
                    case 408:
                        t = " " + l.default.t(173);
                        break;
                    case 404:
                        t = " " + l.default.t(114);
                        break;
                    case 429:
                        t = " " + l.default.t(115)
                }
                return t
            }

            function c(e, t) {
                var a = "";
                switch (e) {
                    case 401:
                    case 406:
                    case 409:
                        break;
                    case 404:
                        a = " " + l.default.t(172, {
                            _plural: t
                        });
                        break;
                    case 408:
                        a = " " + l.default.t(173, {
                            _plural: t
                        });
                        break;
                    case 500:
                        a = " " + l.default.t(174);
                        break;
                    default:
                        a = " " + l.default.t(175)
                }
                return a
            }

            function f(e, t) {
                return l.default.t(183, {
                    participantNames: e,
                    _plural: t
                })
            }

            function p(e, t, a) {
                switch (a) {
                    case 406:
                        return l.default.t(182, {
                            participant: e
                        });
                    default:
                        return l.default.t(180, {
                            participantNames: e,
                            _plural: t
                        })
                }
            }

            function m() {
                return l.default.t(181)
            }
        },
        11367: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                r = a(20862),
                o = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.addParticipants = function(e, t) {
                return m((0, p.unproxy)(e), t)
            }, t.removeParticipants = function(e, t) {
                return h((0, p.unproxy)(e), t)
            }, t.promoteParticipants = function(e, t) {
                return v((0, p.unproxy)(e), t)
            }, t.demoteParticipants = function(e, t) {
                return g((0, p.unproxy)(e), t)
            };
            var l = o(a(67294)),
                u = a(83180),
                i = o(a(34541)),
                d = r(a(98569)),
                s = r(a(40346)),
                c = o(a(89115)),
                f = a(39771),
                p = a(89305);

            function m(e, t) {
                var a, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, u.genId)(),
                    o = null === (a = e.groupMetadata) || void 0 === a ? void 0 : a.participants;
                if (null == o) return n.reject(new d.ActionError);
                if (t.some((function(e) {
                        return o.get(e.id)
                    }))) return __LOG__(3)`models:groupMetadata:participantCollection:addParticipants already a group member`, n.reject(new d.ActionError);
                if (!o.canAdd()) return n.reject(new d.ActionError);
                var p = (0, f.sendAddParticipants)(e.id, t.map((function(e) {
                        return e.id
                    }))),
                    h = t.map((function(e) {
                        return e.formattedShortName
                    })).join(c.default.t(672)),
                    v = new u.ActionType(c.default.t(166, {
                        participantNames: h,
                        _plural: t.length
                    })),
                    g = p.then((function(e) {
                        o.sendForNeededAddRequest(e);
                        var a = s.formatResult(e, s.addSuccessString, s.addFailedString, s.addPartialFailedString, t);
                        return new u.ActionType(a)
                    })).catch((function() {
                        return __LOG__(3)`models:groupMetadata:participantCollection:addParticipants dropped`, new u.ActionType(c.default.t(163, {
                            participantNames: h,
                            _plural: t.length
                        }), {
                            actionText: c.default.t(203),
                            actionHandler: function() {
                                return m(e, t, r)
                            }
                        })
                    }));
                return i.default.openToast(l.default.createElement(u.ActionToast, {
                    id: r,
                    initialAction: v,
                    pendingAction: g
                })), p.then((function() {}))
            }

            function h(e, t) {
                var a, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, u.genId)(),
                    o = null === (a = e.groupMetadata) || void 0 === a ? void 0 : a.participants;
                if (null == o) return n.reject(new d.ActionError);
                if (t.some((function(e) {
                        return !o.canRemove(e)
                    }))) return n.reject(new d.ActionError);
                var p = (0, f.sendRemoveParticipants)(e.id, t.map((function(e) {
                        return e.id
                    }))),
                    m = t.map((function(e) {
                        return e.contact.formattedShortName
                    })).join(c.default.t(672)),
                    v = new u.ActionType(c.default.t(184, {
                        participantNames: m,
                        _plural: t.length
                    })),
                    g = p.then((function(e) {
                        var a = s.formatRemoveResult(e, t.map((function(e) {
                            return e.contact
                        })));
                        return new u.ActionType(a)
                    })).catch((function() {
                        return __LOG__(3)`models:groupMetadata:participantCollection:removeParticipants dropped`, new u.ActionType(c.default.t(180, {
                            participantNames: m,
                            _plural: t.length
                        }), {
                            actionText: c.default.t(203),
                            actionHandler: function() {
                                return h(e, t, r)
                            }
                        })
                    }));
                return i.default.openToast(l.default.createElement(u.ActionToast, {
                    id: r,
                    initialAction: v,
                    pendingAction: g
                })), p.then((function() {}))
            }

            function v(e, t) {
                var a, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, u.genId)(),
                    o = null === (a = e.groupMetadata) || void 0 === a ? void 0 : a.participants;
                if (null == o) return n.reject(new d.ActionError);
                if (t.some((function(e) {
                        return !o.canPromote(e)
                    }))) return n.reject(new d.ActionError);
                var p = (0, f.sendPromoteParticipants)(e.id, t.map((function(e) {
                        return e.id
                    }))),
                    m = t.map((function(e) {
                        return e.contact.formattedShortName
                    })).join(c.default.t(672)),
                    h = new u.ActionType(c.default.t(179, {
                        participantNames: m,
                        _plural: t.length
                    })),
                    g = p.then((function(e) {
                        var a = s.formatResult(e, s.promoteSuccessString, s.promoteFailedString, s.promotePartialFailedString, t.map((function(e) {
                            return e.contact
                        })));
                        return new u.ActionType(a)
                    })).catch((function() {
                        return __LOG__(3)`models:groupMetadata:participantCollection:removeParticipants dropped`, new u.ActionType(c.default.t(176, {
                            participantNames: m,
                            _plural: t.length
                        }), {
                            actionText: c.default.t(203),
                            actionHandler: function() {
                                return v(e, t, r)
                            }
                        })
                    }));
                return i.default.openToast(l.default.createElement(u.ActionToast, {
                    id: r,
                    initialAction: h,
                    pendingAction: g
                })), p.then((function() {}))
            }

            function g(e, t) {
                var a, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, u.genId)(),
                    o = null === (a = e.groupMetadata) || void 0 === a ? void 0 : a.participants;
                if (null == o) return n.reject(new d.ActionError);
                if (t.some((function(e) {
                        return !o.canDemote(e)
                    }))) return n.reject(new d.ActionError);
                var p = (0, f.sendDemoteParticipants)(e.id, t.map((function(e) {
                        return e.id
                    }))),
                    m = t.map((function(e) {
                        return e.contact.formattedShortName
                    })).join(c.default.t(672)),
                    h = new u.ActionType(c.default.t(171, {
                        participantNames: m,
                        _plural: t.length
                    })),
                    v = p.then((function(e) {
                        var a = s.formatResult(e, s.demoteSuccessString, s.demoteFailedString, s.demotePartialFailedString, t.map((function(e) {
                            return e.contact
                        })));
                        return new u.ActionType(a)
                    })).catch((function() {
                        return __LOG__(3)`models:groupMetadata:participantCollection:demoteParticipants dropped`, new u.ActionType(c.default.t(167, {
                            participantNames: m,
                            _plural: t.length
                        }), {
                            actionText: c.default.t(203),
                            actionHandler: function() {
                                return g(e, t, r)
                            }
                        })
                    }));
                return i.default.openToast(l.default.createElement(u.ActionToast, {
                    id: r,
                    initialAction: h,
                    pendingAction: v
                })), p.then((function() {}))
            }
        },
        50588: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.removeGroupParticipants = function(e, t) {
                return v(e, t, f).catch((function(e) {
                    __LOG__(3)`error sending removing group participants iq: ${e}`
                }))
            }, t.addGroupParticipants = function(e, t) {
                return v(e, t, p).catchType(d.ServerStatusCodeError, (function(e) {
                    return {
                        status: e.statusCode
                    }
                }))
            }, t.demoteGroupParticipants = function(e, t) {
                return v(e, t, m).catch((function(e) {
                    __LOG__(3)`error sending demoting group participants iq: ${e}`
                }))
            }, t.promoteGroupParticipants = function(e, t) {
                return v(e, t, h).catch((function(e) {
                    __LOG__(3)`error sending promoting group participants iq: ${e}`
                }))
            };
            var o = r(a(81109)),
                l = r(a(59713)),
                u = a(18712),
                i = a(4746),
                d = a(14650),
                s = r(a(98112)),
                c = a(19325),
                f = "remove",
                p = "add",
                m = "demote",
                h = "promote";

            function v(e, t, a) {
                var r, v = t.map((function(e) {
                    return (0, u.wap)("participant", {
                        jid: (0, c.JID)(e)
                    })
                }));
                switch (a) {
                    case p:
                        r = (0, u.wap)("add", null, v);
                        break;
                    case f:
                        r = (0, u.wap)("remove", null, v);
                        break;
                    case m:
                        r = (0, u.wap)("demote", null, v);
                        break;
                    case h:
                        r = (0, u.wap)("promote", null, v);
                        break;
                    default:
                        return n.reject(new Error(`invalid group operation ${a}`))
                }
                var g = (0, u.wap)("iq", {
                    to: (0, c.GROUP_JID)(e),
                    type: "set",
                    xmlns: "w:g2",
                    id: (0, u.generateId)()
                }, r);
                return (0, i.sendIq)(g, function(e) {
                    return new s.default(`${e}GroupParticipantsReplyParser`, (function(t) {
                        return {
                            id: t.attrString("id"),
                            participants: t.child(e).mapChildren((function(e) {
                                var t = e.maybeChild("add_request");
                                return {
                                    wid: e.attrUserWid("jid"),
                                    error: e.hasAttr("error") ? e.attrInt("error") : null,
                                    invite_code: t && t.attrString("code"),
                                    invite_code_exp: t && t.attrString("expiration")
                                }
                            }))
                        }
                    }))
                }(a)).then((function(e) {
                    if (e.success) {
                        var t = e.result.participants,
                            a = {};
                        return t.forEach((function(e) {
                            Object.assign(a, (0, l.default)({}, e.wid.toString(), null != e.error ? e.error : 200))
                        })), (0, o.default)((0, o.default)({}, a), {}, {
                            status: 207,
                            participants: t.map((function(e) {
                                return (0, l.default)({}, e.wid.toString(), {
                                    code: null != e.error && e.error.toString() || "200",
                                    invite_code: e.invite_code,
                                    invite_code_exp: e.invite_code_exp
                                })
                            }))
                        })
                    }
                    return n.reject(new d.ServerStatusCodeError(e.errorCode, e.errorText))
                }))
            }
        },
        39771: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendAddParticipants = function(e, t) {
                var a;
                if (o.default.supportsFeature(o.default.F.MD_BACKEND)) {
                    if (!(a = (0, u.addGroupParticipants)(e, t))) return n.reject(new Error("addParticipants: not supported when not build with MD_BACKEND"))
                } else a = l.default.addParticipants(e, t);
                return a
            }, t.sendRemoveParticipants = function(e, t) {
                var a;
                if (o.default.supportsFeature(o.default.F.MD_BACKEND)) {
                    if (!(a = (0, u.removeGroupParticipants)(e, t))) return n.reject(new Error("sendRemoveParticipants: not supported when not build with MD_BACKEND"))
                } else a = l.default.removeParticipants(e, t);
                return a
            }, t.sendDemoteParticipants = function(e, t) {
                var a;
                if (o.default.supportsFeature(o.default.F.MD_BACKEND)) {
                    if (!(a = (0, u.demoteGroupParticipants)(e, t))) return n.reject(new Error("sendDemoteParticipants: not supported when not build with MD_BACKEND"))
                } else a = l.default.demoteParticipants(e, t);
                return a
            }, t.sendPromoteParticipants = function(e, t) {
                var a;
                if (o.default.supportsFeature(o.default.F.MD_BACKEND)) {
                    if (!(a = (0, u.promoteGroupParticipants)(e, t))) return n.reject(new Error("sendPromoteParticipants: not supported when not build with MD_BACKEND"))
                } else a = l.default.promoteParticipants(e, t);
                return a
            };
            var o = r(a(22021)),
                l = r(a(23306)),
                u = a(50588)
        },
        72042: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LoadType = t.EditType = void 0;
            var n = a(54302).Mirrored(["EDITING", "PENDING", "DONE", "ERROR"]);
            t.EditType = n;
            var r = a(54302).Mirrored(["PENDING", "DONE", "ERROR"]);
            t.LoadType = r
        },
        47322: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    a = e.editable,
                    n = e.profilePicThumb,
                    r = e.onClick,
                    P = e.onOpenStatus,
                    T = e.onLoad,
                    k = e.hideStatusV3,
                    w = S(window.innerWidth),
                    I = (0, l.default)(w, 2),
                    M = I[0],
                    N = I[1],
                    O = S(null),
                    b = (0, l.default)(O, 2),
                    D = b[0],
                    R = b[1];
                y((function() {
                    function e() {
                        N(window.innerWidth)
                    }
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []);
                var x = M > 1300 ? 152 : 122,
                    A = !(0, p.canSeeStatusV3OnContact)() || t.statusMute || k ? null : g.default.get(t.id);

                function L() {
                    A && (d.default.openModalMedia(i.default.createElement(v.default, {
                        removeTopDrawer: !1,
                        statusV3: A
                    }), {
                        transition: "status-v3-modal"
                    }), P && P())
                }
                var F = null;
                D && (F = i.default.createElement(C.default, {
                    displayName: "ContextMenu",
                    escapable: !0,
                    popable: !0,
                    requestDismiss: function() {
                        R(null)
                    }
                }, i.default.createElement(E.default, {
                    contextMenu: D
                })));
                var U, V = null,
                    B = s.default.noStatusBorder;
                null != A && (V = i.default.createElement(_.default, {
                    statusV3: A,
                    size: x + 24,
                    stroke: 3,
                    theme: _.RingTheme.BUSINESS_CONTACT_INFO
                }), B = s.default.hasStatusBorder);
                U = a && null != n ? i.default.createElement(h.default, {
                    profilePicThumb: n,
                    size: x
                }) : i.default.createElement(c.default, {
                    id: t.id,
                    size: x,
                    loader: !0,
                    onLoad: T,
                    onClick: function(e) {
                        if (r)
                            if (null != A) {
                                e.stopPropagation(), e.preventDefault();
                                var t = [i.default.createElement(f.default, {
                                    a8n: "mi-view-photo",
                                    key: "view-photo",
                                    action: function() {
                                        r(e)
                                    }
                                }, m.default.t(1580)), i.default.createElement(f.default, {
                                    a8n: "mi-view-status",
                                    key: "view-status",
                                    action: L
                                }, m.default.t(1450))];
                                e.persist(), R({
                                    menu: t,
                                    event: e
                                })
                            } else r(e)
                    },
                    quality: c.DETAIL_IMAGE_QUALITY.HIGH
                });
                return i.default.createElement(i.default.Fragment, null, i.default.createElement("div", {
                    className: (0, u.default)(s.default.coverPhoto, (0, o.default)({}, s.default.isEditable, a))
                }), i.default.createElement("div", {
                    className: s.default.avatar
                }, V, i.default.createElement("div", {
                    className: B
                }, U)), F)
            };
            var o = r(a(59713)),
                l = r(a(63038)),
                u = r(a(94184)),
                i = r(a(67294)),
                d = r(a(34541)),
                s = r(a(21997)),
                c = n(a(42575)),
                f = r(a(33079)),
                p = a(31230),
                m = r(a(89115)),
                h = r(a(42315)),
                v = r(a(71609)),
                g = r(a(66005)),
                _ = n(a(79974)),
                C = r(a(4268)),
                E = r(a(88117)),
                S = i.default.useState,
                y = i.default.useEffect
        },
        29793: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RawBusinessProfile", {
                enumerable: !0,
                get: function() {
                    return n.RawBusinessProfile
                }
            }), Object.defineProperty(t, "BUSINESS_HOUR_MODES", {
                enumerable: !0,
                get: function() {
                    return r.BUSINESS_HOUR_MODES
                }
            }), Object.defineProperty(t, "DAYS_OF_WEEK", {
                enumerable: !0,
                get: function() {
                    return r.DAYS_OF_WEEK
                }
            });
            var n = a(54587),
                r = a(58435)
        },
        89822: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getBusinessOpenState = function(e, t) {
                var a, n;
                if (null == e.timezone) return {
                    status: "unknown"
                };
                var r = t || new Date,
                    o = new Date(r.toLocaleString("en-US", {
                        timeZone: e.timezone
                    })),
                    i = (r.getTime() - o.getTime()) / 1e3 / 60,
                    d = e.config[l.DAYS_OF_WEEK[r.getDay()]];
                if (!d) return {
                    status: s.CLOSED_TODAY
                };
                switch (d.mode) {
                    case u.BUSINESS_HOUR_MODES.OPEN_24H:
                        if (d) return {
                            status: s.OPEN_24H
                        };
                        break;
                    case u.BUSINESS_HOUR_MODES.APPOINTMENT_ONLY:
                        if (d) return {
                            status: s.OPEN_APPOINTMENT
                        };
                        break;
                    case u.BUSINESS_HOUR_MODES.SPECIFIC_HOURS:
                        var f = 60 * r.getHours() + r.getMinutes();
                        if (1 === (null === (a = d.hours) || void 0 === a ? void 0 : a.length)) {
                            var p = d.hours[0][0],
                                m = d.hours[0][1];
                            return f >= p && f <= m ? {
                                status: s.OPEN,
                                openUntil: c(i + m)
                            } : f <= p ? {
                                status: s.CLOSED,
                                opensAt: c(i + p)
                            } : {
                                status: s.CLOSED
                            }
                        }
                        if (2 === (null === (n = d.hours) || void 0 === n ? void 0 : n.length)) {
                            var h = d.hours[0][0],
                                v = d.hours[0][1],
                                g = d.hours[1][0],
                                _ = d.hours[1][1];
                            return f >= h && f <= v ? {
                                status: s.OPEN,
                                openUntil: c(i + v),
                                additionalOpen: c(i + g),
                                additionalClose: c(i + _)
                            } : f < h ? {
                                status: s.CLOSED,
                                opensAt: c(i + h),
                                additionalOpen: c(i + g),
                                additionalClose: c(i + _)
                            } : f >= g && f <= _ ? {
                                status: s.OPEN,
                                openUntil: c(i + _)
                            } : f < g ? {
                                status: s.CLOSED,
                                opensAt: c(i + g)
                            } : {
                                status: s.CLOSED
                            }
                        }
                }
                return {
                    status: "unknown"
                }
            }, Object.defineProperty(t, "minutesToTime", {
                enumerable: !0,
                get: function() {
                    return i.minutesToTime
                }
            }), Object.defineProperty(t, "timeStringToMinutes", {
                enumerable: !0,
                get: function() {
                    return i.timeStringToMinutes
                }
            }), t.BUSINESS_OPEN_STATUS = t.convertToRawBusinessProfile = t.isValidBusinessHours = t.isValidTime = void 0;
            var r = n(a(63038)),
                o = n(a(43269)),
                l = a(58435),
                u = a(29793),
                i = a(30063),
                d = function(e) {
                    return void 0 !== (0, i.timeStringToMinutes)(e)
                };
            t.isValidTime = d;
            t.isValidBusinessHours = function(e, t) {
                if (e === u.BUSINESS_HOUR_MODES.SPECIFIC_HOURS)
                    for (var a in t) {
                        var n = t[a],
                            l = n.closed,
                            i = n.hours;
                        if (!l) {
                            var s, c = (0, o.default)(i);
                            try {
                                for (c.s(); !(s = c.n()).done;) {
                                    var f = (0, r.default)(s.value, 2),
                                        p = f[0],
                                        m = f[1];
                                    if (!d(p) || !d(m)) return !1
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                        }
                    }
                return !0
            };
            t.convertToRawBusinessProfile = function(e) {
                var t = e.mode,
                    a = e.dayValues,
                    n = e.note,
                    o = e.timezone,
                    l = {};
                for (var d in a) {
                    var s = a[d],
                        c = s.closed,
                        f = s.hours;
                    if (!c) {
                        var p = {
                            mode: t
                        };
                        t === u.BUSINESS_HOUR_MODES.SPECIFIC_HOURS && (p.hours = f.map((function(e) {
                            var t = (0, r.default)(e, 2),
                                a = t[0],
                                n = t[1];
                            return [(0, i.timeStringToMinutes)(a) || 0, (0, i.timeStringToMinutes)(n) || 0]
                        }))), l[d] = p
                    }
                }
                return {
                    businessHours: {
                        config: l,
                        note: n,
                        timezone: o || Intl.DateTimeFormat().resolvedOptions().timeZone
                    }
                }
            };
            var s = {
                OPEN: "open",
                CLOSED: "closed",
                OPEN_TODAY: "open_today",
                CLOSED_TODAY: "closed_today",
                OPEN_APPOINTMENT: "open_appointment",
                OPEN_24H: "open_24h",
                UNKNOWN: "unknown"
            };

            function c(e) {
                var t = new Date,
                    a = Math.floor(e / 60);
                return t.setHours(a), t.setMinutes(e % 60), t.setSeconds(0), t
            }
            t.BUSINESS_OPEN_STATUS = s
        },
        54587: (e, t, a) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "EditType", {
                enumerable: !0,
                get: function() {
                    return n.EditType
                }
            }), Object.defineProperty(t, "LoadType", {
                enumerable: !0,
                get: function() {
                    return n.LoadType
                }
            });
            var n = a(72042)
        },
        72283: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return l.default.createElement(i.default, {
                    name: "shopping-cart",
                    className: (0, o.default)(u.default.cartIcon, (0, r.default)({}, u.default.inheritColor, "inherit-color" === e.theme))
                })
            };
            var r = n(a(59713)),
                o = n(a(94184)),
                l = n(a(67294)),
                u = n(a(91214)),
                i = n(a(75131))
        },
        56213: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var a = (0, d.useState)(null),
                    n = (0, u.default)(a, 2),
                    r = n[0],
                    f = n[1],
                    p = function() {
                        f(null)
                    };
                return (0, d.useEffect)((function() {
                    if (p(), e) {
                        var a = new s.default,
                            n = a.signal;
                        return (0, i.default)(o.default.mark((function a() {
                                var r, u, i;
                                return o.default.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.prev = 0, a.next = 3, (0, E.default)((0, h.default)(e), n);
                                        case 3:
                                            if (r = a.sent, u = null == r ? void 0 : r.data) {
                                                a.next = 7;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 7:
                                            if (f(u), m.default.supportsFeature(m.default.F.HIGH_QUALITY_LINK_PREVIEWS) && y.default.webUploadLinkThumbMmsEnabled && u.thumbnailHQ) {
                                                a.next = 10;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 10:
                                            return a.next = 12, T(u.thumbnailHQ, n, t);
                                        case 12:
                                            if (i = a.sent) {
                                                a.next = 15;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 15:
                                            f((0, l.default)((0, l.default)({}, u), i)), a.next = 23;
                                            break;
                                        case 18:
                                            if (a.prev = 18, a.t0 = a.catch(0), a.t0.name !== c.ABORT_ERROR) {
                                                a.next = 22;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 22:
                                            __LOG__(2)`useLinkPreview: error`;
                                        case 23:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [0, 18]
                                ])
                            })))(),
                            function() {
                                a.signal.aborted || a.abort()
                            }
                    }
                }), [e, t]), {
                    linkPreview: r,
                    clearLinkPreview: p
                }
            }, t.findFirstWebLink = void 0;
            var o = r(a(87757)),
                l = r(a(81109)),
                u = r(a(63038)),
                i = r(a(48926)),
                d = a(67294),
                s = r(a(35340)),
                c = a(2277),
                f = a(73797),
                p = r(a(34263)),
                m = r(a(22021)),
                h = r(a(80774)),
                v = n(a(46515)),
                g = a(16952),
                _ = r(a(16024)),
                C = r(a(74984)),
                E = r(a(69673)),
                S = r(a(94025)),
                y = r(a(63056)),
                P = r(a(27410));

            function T() {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = (0, i.default)(o.default.mark((function e(t, a, n) {
                    var r, l, u;
                    return o.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, E.default)(C.default.createFromBase64Jpeg(t), a);
                            case 3:
                                return r = e.sent, e.next = 6, (0, P.default)({
                                    thumbnail: r,
                                    mediaType: _.default.THUMBNAIL_LINK,
                                    mediaKeyInfo: (0, S.default)(),
                                    uploadOrigin: (0, g.getUploadOriginForChat)(n),
                                    forwardedFromWeb: !1,
                                    signal: a,
                                    timeout: p.default.MMS_THUMBNAIL_UPLOAD_TIMEOUT
                                });
                            case 6:
                                if (l = e.sent, u = l.mediaEntry) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return");
                            case 10:
                                return e.abrupt("return", {
                                    mediaKey: u.mediaKey,
                                    mediaKeyTimestamp: u.mediaKeyTimestamp,
                                    thumbnailDirectPath: u.directPath,
                                    thumbnailSha256: l.filehash,
                                    thumbnailEncSha256: u.encFilehash
                                });
                            case 13:
                                if (e.prev = 13, e.t0 = e.catch(0), e.t0.name !== c.ABORT_ERROR) {
                                    e.next = 17;
                                    break
                                }
                                return e.abrupt("return");
                            case 17:
                                __LOG__(2)`useLinkPreview.uploadHQPreview: error`;
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 13]
                    ])
                })))).apply(this, arguments)
            }
            t.findFirstWebLink = function(e) {
                var t = (0, f.removeCodeBlocks)(e),
                    a = v.findLinks(t, !0)[0];
                if (a) return a.url
            }
        },
        92999: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                r = a(20862),
                o = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = e.images,
                    r = e.renderFallback,
                    o = e.fallbackMediaData,
                    s = e.fetching,
                    C = e.onClick,
                    E = (0, d.useRef)(null),
                    S = (0, d.useRef)(null),
                    y = (0, d.useRef)(null),
                    P = (0, d.useRef)(null),
                    T = (0, d.useRef)(null),
                    k = (0, d.useState)(null),
                    w = (0, u.default)(k, 2),
                    I = w[0],
                    M = w[1],
                    N = (0, d.useState)(a.filter((function(e) {
                        return e.mediaData.mediaStage === m.MEDIA_DATA_STAGE.RESOLVED
                    })).length),
                    O = (0, u.default)(N, 2),
                    b = O[0],
                    D = O[1],
                    R = (0, d.useState)(!1),
                    x = (0, u.default)(R, 2),
                    A = x[0],
                    L = x[1],
                    F = b === a.length,
                    U = function() {
                        return D((function(e) {
                            return e + 1
                        }))
                    };
                (0, d.useEffect)((function() {
                    if (!F && !r) {
                        var e, t = S.current;
                        if (!t) return;
                        null === (e = y.current) || void 0 === e || e.cancel(), y.current = (y.current || n.resolve()).then((function() {
                            return (0, _.default)(t, {
                                opacity: [1, 0]
                            }, {
                                delay: 75,
                                duration: 50
                            })
                        })).cancellable().then((function() {
                            L(!0)
                        })).catchType(n.CancellationError, (function() {
                            (0, _.default)(t, "stop", !0)
                        })).finally((function() {
                            y.current = null
                        }))
                    }
                    return function() {
                        var e;
                        null === (e = y.current) || void 0 === e || e.cancel()
                    }
                }), [F, r]);
                var V, B, j, H = function() {
                    var e;
                    return (null === (e = E.current) || void 0 === e ? void 0 : e.children) ? E.current.scrollWidth === E.current.offsetWidth ? null : 0 === E.current.scrollLeft ? "next" : E.current.scrollWidth - 1 <= E.current.scrollLeft + E.current.offsetWidth ? "prev" : "both" : null
                };
                if ((0, d.useEffect)((function() {
                        M(H())
                    }), [F]), r && 0 === a.length) return d.default.createElement("div", {
                    className: f.default.carousel,
                    dir: "ltr"
                }, d.default.createElement("div", {
                    className: (0, i.default)(f.default.contentContainer, f.default.slidesContainer)
                }, o && d.default.createElement(p.default, {
                    altText: "",
                    mediaData: o,
                    renderFallback: !0,
                    singleSlide: !0
                })));
                var W = function() {
                    P.current = null;
                    var e = H();
                    I !== e && M(e)
                };
                if (a.length > 1) {
                    var G = function() {
                            var e = E.current;
                            if (null != e && ("prev" === I || "both" === I)) {
                                for (var t = 0, a = e.scrollLeft + Math.floor(e.offsetWidth / 2), n = e.lastElementChild; n instanceof HTMLElement && 0 === t;) {
                                    var r = n.offsetLeft + Math.floor(n.offsetWidth / 2);
                                    r < a && (t = r - a), n = n.previousElementSibling
                                }
                                0 !== t && e.scrollBy({
                                    left: t,
                                    behavior: "smooth"
                                })
                            }
                        },
                        Y = function() {
                            var e = E.current;
                            if (null != e && ("next" === I || "both" === I)) {
                                for (var t = 0, a = e.scrollLeft + Math.floor(e.offsetWidth / 2), n = e.firstElementChild; n instanceof HTMLElement && 0 === t;) {
                                    var r = n.offsetLeft + Math.floor(n.offsetWidth / 2);
                                    a < r && (t = r - a), n = n.nextElementSibling
                                }
                                0 !== t && e.scrollBy({
                                    left: t,
                                    behavior: "smooth"
                                })
                            }
                        },
                        K = function() {
                            T.current = null;
                            var e = H();
                            I !== e && M(e)
                        };
                    j = function() {
                        null == T.current && (T.current = requestAnimationFrame(K))
                    }, F && null != I && (V = d.default.createElement(c.default, {
                        type: c.ButtonType.Prev,
                        onClick: G,
                        onKeyDown: G,
                        disabled: "prev" !== I && "both" !== I,
                        theme: v.RoundTheme.Small,
                        overMedia: !0
                    }), B = d.default.createElement(c.default, {
                        type: c.ButtonType.Next,
                        onClick: Y,
                        onKeyDown: Y,
                        disabled: "next" !== I && "both" !== I,
                        theme: v.RoundTheme.Small,
                        overMedia: !0
                    }))
                }
                var z = 1 === a.length,
                    $ = a.map((function(e, t) {
                        return d.default.createElement(p.default, {
                            key: t,
                            altText: "",
                            image: e,
                            singleSlide: z,
                            mediaData: e.mediaData,
                            onClick: C,
                            onLoad: U
                        })
                    })),
                    q = F ? null : d.default.createElement("div", {
                        className: (0, i.default)(f.default.contentContainer, f.default.spinnerContainer)
                    }, d.default.createElement("div", {
                        className: f.default.spinner,
                        ref: S
                    }, d.default.createElement(g.default, {
                        color: "default",
                        size: 50,
                        stroke: 4
                    }))),
                    X = (0, i.default)(f.default.carousel, (t = {}, (0, l.default)(t, f.default.loaded, !s && F), (0, l.default)(t, f.default.fadeIn, A), t));
                return d.default.createElement("div", {
                    className: X,
                    dir: "ltr"
                }, q, d.default.createElement("div", {
                    ref: E,
                    className: (0, i.default)(f.default.contentContainer, f.default.slidesContainer),
                    onScroll: j
                }, $), V, B, d.default.createElement(h.default, {
                    onResize: function() {
                        null == P.current && (P.current = requestAnimationFrame(W))
                    }
                }))
            };
            var l = o(a(59713)),
                u = o(a(63038)),
                i = o(a(94184)),
                d = r(a(67294)),
                s = o(a(30523)),
                c = r(a(57617)),
                f = o(a(55140)),
                p = o(a(24972)),
                m = a(87261),
                h = o(a(74086)),
                v = a(40746),
                g = o(a(87729)),
                _ = o(a(77478));
            s.default.polyfill()
        },
        24972: (e, t, a) => {
            "use strict";
            var n = a(95318),
                r = a(20862);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(67294)),
                l = n(a(57246)),
                u = a(87261),
                i = n(a(33819)),
                d = function(e) {
                    var t = e.mediaData,
                        a = e.altText,
                        n = e.image,
                        r = e.singleSlide,
                        d = e.renderFallback,
                        s = e.onClick,
                        c = e.onLoad,
                        f = e.forwardRef,
                        p = (0, i.default)(t, ["fullHeight", "fullWidth", "mediaStage", "renderableUrl"]),
                        m = p.fullHeight,
                        h = p.fullWidth,
                        v = p.mediaStage,
                        g = p.renderableUrl,
                        _ = (0, o.useRef)(null),
                        C = (0, o.useRef)(v === u.MEDIA_DATA_STAGE.RESOLVED);
                    (0, o.useEffect)((function() {
                        !c || C.current || d || v !== u.MEDIA_DATA_STAGE.RESOLVED || (c(), C.current = !0)
                    }), [c, d, v]);
                    var E = h && m ? h / m : .8;
                    E < .8 && (E = .8), E > 1.91 && (E = 1.91), E > 1 && !r && (E = 1);
                    var S = {
                            width: r && E < 1 ? 100 * E + "%" : 1 !== E || r ? null : "100%"
                        },
                        y = {
                            paddingTop: `${Math.floor(100/E)}%`
                        },
                        P = {
                            cursor: "" + (s ? "pointer" : "auto")
                        };
                    return o.default.createElement("div", {
                        ref: f ? function(e) {
                            return f(e)
                        } : null,
                        className: l.default.slide,
                        style: S
                    }, o.default.createElement("div", {
                        className: l.default.slideInnerContainer,
                        style: y
                    }, o.default.createElement("img", {
                        ref: _,
                        alt: a,
                        src: g,
                        className: l.default.image,
                        style: P,
                        draggable: "false",
                        onClick: function() {
                            s && _.current && n && s(_.current, n)
                        }
                    })))
                };
            t.default = d
        },
        68708: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Gallery = L, t.default = void 0;
            var o = r(a(319)),
                l = r(a(59713)),
                u = r(a(34575)),
                i = r(a(93913)),
                d = r(a(2205)),
                s = r(a(99842)),
                c = r(a(94184)),
                f = r(a(96486)),
                p = n(a(67294)),
                m = r(a(97930)),
                h = a(54654),
                v = r(a(34541)),
                g = r(a(34263)),
                _ = r(a(42905)),
                C = a(67485),
                E = r(a(22021)),
                S = r(a(89115)),
                y = r(a(68390)),
                P = r(a(28719)),
                T = r(a(87917)),
                k = r(a(80793)),
                w = r(a(85779)),
                I = a(87261),
                M = r(a(63056)),
                N = r(a(87729)),
                O = r(a(44589)),
                b = a(89305),
                D = r(a(75131)),
                R = function(e) {
                    (0, d.default)(a, e);
                    var t = (0, s.default)(a);

                    function a() {
                        var e;
                        (0, u.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).handleScroll = function(t) {
                            e._handleScroll(t.currentTarget)
                        }, e._handleScroll = f.default.throttle((function(t) {
                            var a = e.props.mediaMsgs;
                            a.hasMediaBefore && t.scrollTop + g.default.SCROLL_FUDGE > t.scrollHeight - t.clientHeight && e._scheduleMediaQuery(a.head())
                        }), 100), e
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.props.mediaMsgs.hasMediaBefore && this._scheduleMediaQuery(), this.props.listeners.add(this.props.mediaMsgs, "add", (function() {
                                e.forceUpdate()
                            })), this.props.listeners.add(this.props.mediaMsgs, "remove", (function(t) {
                                var a = e.props.selectedMessages;
                                a && a.isSelected(t) && a.setVal(t, !1), e.forceUpdate()
                            })), this.props.listeners.add(this.props.mediaMsgs, "reset", (function() {
                                e.props.selectedMessages && e.props.selectedMessages.unsetAll(), e.forceUpdate()
                            })), this.props.listeners.add(this.props.mediaMsgs, "query_media_before", (function() {
                                e.forceUpdate()
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._handleScroll.cancel()
                        }
                    }, {
                        key: "_scheduleMediaQuery",
                        value: function(e) {
                            var t = this,
                                a = this.props.mediaMsgs;
                            a.hasMediaBefore && this.props.listeners.uiIdle((function() {
                                a.queryMedia({
                                    chat: (0, b.unproxy)(t.props.chat),
                                    msg: e
                                })
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.fullCollection,
                                n = t.selectedMessages,
                                r = t.chat,
                                o = t.mediaMsgs,
                                l = t.selectable,
                                u = t.onMessageSelect,
                                i = o.map((function(e, t) {
                                    var r;
                                    return !a && t >= o.length - 6 && t <= o.length - 4 && (r = "hideableSecondRow"), p.default.createElement(A, {
                                        msg: e,
                                        hoverEvent: a,
                                        selectable: l,
                                        selectedMessages: n,
                                        onMessageSelect: u,
                                        theme: r,
                                        key: e.id.toString()
                                    })
                                }));
                            i.reverse(), a || (i = i.slice(0, 6));
                            var d = !1;
                            return E.default.supportsFeature(E.default.F.MD_BACKEND) && r.endOfHistoryTransferType === h.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (d = !0, a ? e = S.default.t(591) : 0 === o.length && 0 === r.docCount && 0 === r.linkCount && 0 === r.productCount && (e = S.default.t(589))), p.default.createElement(p.default.Fragment, null, p.default.createElement(L, {
                                medias: i,
                                mediaCollection: o,
                                fullCollection: a,
                                chat: (0, b.unproxy)(r),
                                onScroll: this.handleScroll
                            }), d ? p.default.createElement(_.default, {
                                icon: p.default.createElement(D.default, {
                                    name: "content-chat"
                                }),
                                theme: "list",
                                secondary: S.default.t(587)
                            }, e) : null)
                        }
                    }]), a
                }(p.Component);
            R.CONCERNS = {
                chat: ["linkCount", "docCount", "productCount", "endOfHistoryTransferType"]
            }, R.displayName = "MediaGallery";
            var x = function(e) {
                (0, d.default)(a, e);
                var t = (0, s.default)(a);

                function a() {
                    var e;
                    (0, u.default)(this, a), (e = t.apply(this, arguments)).setRefImg = function(t) {
                        e.img = t
                    }, e._handleSelectChange = function(t) {
                        e.state.selected !== t && e.setState({
                            selected: t
                        })
                    }, e.handleClick = function(t) {
                        var a = e.props,
                            n = a.msg,
                            r = a.selectable,
                            o = a.onMessageSelect,
                            l = n.mediaData;
                        if (r && o) o(n, !e.state.selected);
                        else if (l.mediaStage !== I.MEDIA_DATA_STAGE.ERROR_MISSING) {
                            var u;
                            t && t.stopPropagation();
                            var i = n.id;
                            if (l.isGif || l.type === P.default.TYPE.IMAGE) {
                                var d = e.img;
                                u = function(e) {
                                    return i.equals(e) && d ? d : null
                                }
                            }
                            v.default.mediaViewerModal({
                                msg: (0, b.unproxy)(n),
                                getZoomNode: u
                            })
                        } else v.default.openModal(p.default.createElement(k.default, {
                            msg: n
                        }))
                    }, e.handleDragStart = function(t) {
                        t.nativeEvent.dataTransfer.setData("text/uri-list", e.props.msg.mediaData.renderableUrl)
                    };
                    var n = e.props,
                        r = n.msg,
                        o = n.selectedMessages;
                    return e.state = {
                        selected: !(!o || !o.isSelected(r))
                    }, e
                }
                return (0, i.default)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.selectedMessages && this.props.listeners.add(this.props.selectedMessages, this.props.msg.id.toString(), this._handleSelectChange)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.msg,
                            a = e.hoverEvent,
                            n = e.selectable,
                            r = e.onMessageSelect,
                            o = e.theme,
                            l = e.className,
                            u = t.mediaData,
                            i = u.type === P.default.TYPE.IMAGE && u.renderableUrl ? this.handleDragStart : null,
                            d = (0, c.default)(l);
                        return p.default.createElement(w.default, {
                            classes: d,
                            onClick: this.handleClick,
                            hoverEvent: a,
                            selectable: n,
                            selected: this.state.selected,
                            onMessageSelect: r,
                            onDragStart: i,
                            msg: t,
                            theme: o,
                            imgRef: this.setRefImg
                        })
                    }
                }]), a
            }(p.Component);
            x.displayName = "MediaCanvas";
            var A = (0, y.default)(x);

            function L(e) {
                var t, a = e.mediaCollection,
                    n = e.fullCollection,
                    r = e.chat,
                    u = e.onScroll,
                    i = e.justify,
                    d = e.medias || e.productMedias;
                if (!d) return null;
                var s, f, h, v, g = (0, c.default)(T.default.container, (t = {}, (0, l.default)(t, T.default.drawer, n), (0, l.default)(t, T.default.galleryEmpty, 0 === a.length), (0, l.default)(t, T.default.justifySpaceBetween, "space-between" === i), t)),
                    _ = (0, o.default)(d);
                if (a.queryMediaBefore && (n || _.length < 6)) {
                    var E, y = (0, c.default)(T.default.more, T.default.canvasComponent, (E = {}, (0, l.default)(E, T.default.canvasSecondRow, !n && _.length >= 3), (0, l.default)(E, T.default.canvasFirst, 0 === a.length), E));
                    _.push(p.default.createElement("div", {
                        className: y,
                        key: "spinner"
                    }, p.default.createElement(N.default, {
                        stroke: 6,
                        size: 24
                    })))
                }
                if (0 === a.length) {
                    if (n) return a.queryMediaBefore ? p.default.createElement("div", {
                        className: (0, c.default)(T.default.drawer, T.default.drawerBody)
                    }, p.default.createElement(C.Loading, null)) : p.default.createElement(C.MediaMsgs, null);
                    a.queryMediaBefore || a.hasMediaBefore || (g = (0, c.default)(g, T.default.galleryEmpty), _ = [(s = Math.max(r ? r.docCount : 0, 0), f = Math.max(r ? r.linkCount : 0, 0), h = Math.max(r ? r.productCount : 0, 0), v = [], null != s && s > 0 && v.push(S.default.t(640, {
                        count: s,
                        _plural: s
                    })), null != f && f > 0 && v.push(S.default.t(941, {
                        count: f,
                        _plural: f
                    })), M.default.productMediaAttachments && null != h && h > 0 && v.push(S.default.t(1301, {
                        count: h,
                        _plural: h
                    })), v.length > 0 ? v.join(S.default.t(672)) : M.default.productMediaAttachments ? S.default.t(1199) : S.default.t(1198))])
                } else
                    for (var P = 0; P < 6; P++) _.push(p.default.createElement("div", {
                        className: T.default.canvasEmpty,
                        key: "empty" + P
                    }));
                return p.default.createElement("div", {
                    onScroll: u,
                    "data-a8n": m.default.key("media-gallery"),
                    className: g
                }, _)
            }
            var F = (0, y.default)((0, O.default)(R, R.CONCERNS));
            t.default = F
        },
        85779: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hasThumbnail = T, t.default = t.MediaThumb = void 0;
            var o = r(a(59713)),
                l = r(a(34575)),
                u = r(a(93913)),
                i = r(a(2205)),
                d = r(a(99842)),
                s = r(a(94184)),
                c = n(a(67294)),
                f = r(a(72210)),
                p = r(a(79140)),
                m = r(a(68390)),
                h = r(a(28719)),
                v = r(a(26251)),
                g = r(a(93482)),
                _ = r(a(8643)),
                C = r(a(75131)),
                E = r(a(76486)),
                S = a(87261),
                y = function(e) {
                    (0, i.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        (0, l.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            hover: !1
                        }, e._setRefImg = function(t) {
                            e._img = t
                        }, e._setRefContainer = function(t) {
                            e._container = t
                        }, e._handleSelectClick = function() {
                            e.props.onMessageSelect && e.props.onMessageSelect(e.props.msg, !e.props.selected)
                        }, e._handleMouseOver = function() {
                            e.state.hover || e.setState({
                                hover: !0
                            })
                        }, e._handleMouseEnter = function() {
                            e.state.hover || e.setState({
                                hover: !0
                            })
                        }, e._handleMouseLeave = function() {
                            e.state.hover && e.setState({
                                hover: !1
                            })
                        }, e.maybeDownloadMediaMD = function() {
                            var t = e.props.msg;
                            t.mediaData.preview || t.mediaData.fullPreviewData || t.mediaData.type !== h.default.TYPE.IMAGE && t.mediaData.type !== h.default.TYPE.VIDEO || t.downloadMedia({
                                downloadEvenIfExpensive: !1,
                                isUserInitiated: !1,
                                rmrReason: _.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
                            })
                        }, e._renderImgNode = function(t, a, n, r) {
                            var o = n ? c.default.createElement("div", {
                                    className: v.default.shade
                                }) : null,
                                l = a ? {
                                    backgroundImage: `url(${a})`
                                } : null;
                            return c.default.createElement("div", {
                                className: t,
                                style: l,
                                onClick: e.props.onClick,
                                ref: e._setRefImg,
                                onDragStart: e.props.onDragStart,
                                draggable: null != e.props.onDragStart || null
                            }, r, o)
                        }, e._downloadMedia = function() {
                            e.props.msg.downloadMedia({
                                downloadEvenIfExpensive: !1,
                                isUserInitiated: !1,
                                rmrReason: _.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER
                            })
                        }, e._renderImg = function() {
                            var t, a = e.props,
                                n = a.msg.mediaData,
                                r = a.preferPreview;
                            switch (n.type) {
                                case h.default.TYPE.AUDIO:
                                    return e._renderImgNode(`${v.default.mediaCanvas} attach-media-audio-thumb`);
                                case h.default.TYPE.VIDEO:
                                    var o = (0, s.default)(v.default.mediaCanvas, {
                                            "media-video-thumb": n.isGif && !n.preview
                                        }),
                                        l = null === (t = n.preview) || void 0 === t ? void 0 : t.url();
                                    return e._renderImgNode(o, l, !0);
                                case h.default.TYPE.IMAGE:
                                    var u = function(t) {
                                            var a, r = null != t ? c.default.createElement("div", {
                                                className: v.default.mediaCanvas,
                                                style: {
                                                    backgroundImage: `url(${t})`
                                                }
                                            }) : null;
                                            return e._renderImgNode(v.default.mediaCanvas, null === (a = n.preview) || void 0 === a ? void 0 : a.url(), e.props.msg.star, r)
                                        },
                                        i = function() {
                                            return n.preview ? u(null) : e._renderImgNode(v.default.mediaCanvas, null, e.props.msg.star)
                                        };
                                    return r ? i() : c.default.createElement("div", {
                                        className: v.default.mediaCanvas
                                    }, c.default.createElement(g.default, {
                                        mediaData: n,
                                        placeholderRenderer: i,
                                        renderProgressively: !0,
                                        downloadMedia: e._downloadMedia
                                    }, u));
                                default:
                                    return e._renderImgNode(null, null, e.props.msg.star)
                            }
                        }, e._renderIcon = function() {
                            var t, a = e.props.msg.mediaData;
                            if (!a) return null;
                            switch (a.type) {
                                case h.default.TYPE.AUDIO:
                                    t = "msg-audio";
                                    break;
                                case h.default.TYPE.VIDEO:
                                    t = a.isGif ? "msg-gif" : "msg-video"
                            }
                            return null == t ? null : c.default.createElement("div", {
                                className: v.default.iconType
                            }, c.default.createElement(C.default, {
                                name: t
                            }))
                        }, e._renderDuration = function() {
                            var t = e.props.msg.mediaData;
                            switch (t.type) {
                                case h.default.TYPE.AUDIO:
                                    return c.default.createElement(P, {
                                        duration: t.duration
                                    });
                                case h.default.TYPE.VIDEO:
                                    return t.isGif ? null : c.default.createElement(P, {
                                        duration: t.duration
                                    });
                                default:
                                    return null
                            }
                        }, e
                    }
                    return (0, u.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.props.listeners.add(this.props.msg.mediaData, "change:preview", (function() {
                                e.forceUpdate()
                            })), this.props.listeners.add(this.props.msg, "change:star", (function() {
                                e.forceUpdate()
                            })), this.props.imgRef && this.props.imgRef(this._img), this.props.containerRef && this.props.containerRef(this._container), this.maybeDownloadMediaMD(), this.props.listeners.add(this.props.msg.mediaData, "change:mediaStage", (function() {
                                e.props.msg.mediaData.mediaStage === S.MEDIA_DATA_STAGE.RESOLVED && e.forceUpdate()
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.imgRef && this.props.imgRef(this._img), this.props.containerRef && this.props.containerRef(this._container)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.imgRef && this.props.imgRef(null), this.props.containerRef && this.props.containerRef(null)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a = this.props,
                                n = a.msg,
                                r = a.selectable,
                                l = a.theme,
                                u = a.active,
                                i = this.props.selected || !1;
                            (r || this.state.hover) && (t = c.default.createElement("div", {
                                className: v.default.mediaSelect
                            }, c.default.createElement("div", {
                                className: v.default.shadeTop,
                                onClick: this.props.onClick
                            }), c.default.createElement(f.default, {
                                onChange: this._handleSelectClick,
                                hover: this.state.hover,
                                checked: i
                            })));
                            var d = null,
                                p = null,
                                m = null;
                            this.props.hoverEvent && (d = this._handleMouseOver, p = this._handleMouseEnter, m = this._handleMouseLeave);
                            var h = (0, s.default)(this.props.classes, v.default.canvasComponent, (e = {}, (0, o.default)(e, v.default.canvasSelected, i), (0, o.default)(e, v.default.canvasSecondRow, "hideableSecondRow" === l), (0, o.default)(e, v.default.viewerFlow, "viewerFlow" === l || "viewerFlowTransparent" === l), (0, o.default)(e, v.default.viewerFlowTransparent, "viewerFlowTransparent" === l), (0, o.default)(e, v.default.active, u), e)),
                                g = n.star ? c.default.createElement("div", {
                                    className: v.default.iconStar
                                }, c.default.createElement(C.default, {
                                    name: "star"
                                })) : null;
                            return !0, T(n.mediaData) ? c.default.createElement("div", {
                                ref: this._setRefContainer,
                                className: h,
                                onMouseOver: d,
                                onMouseEnter: p,
                                onMouseLeave: m
                            }, t, c.default.createElement("div", {
                                className: v.default.canvasBody
                            }, this._renderIcon(), this._renderDuration(), g), this._renderImg()) : null
                        }
                    }]), a
                }(c.Component);

            function P(e) {
                var t = e.duration,
                    a = p.default.durationStr(t);
                return a ? c.default.createElement("span", {
                    className: v.default.mediaCanvasDuration
                }, a) : null
            }

            function T(e) {
                switch (e.type) {
                    case h.default.TYPE.VIDEO:
                    case h.default.TYPE.IMAGE:
                        if (e.preview || e.fullPreviewData || e.mediaStage === S.MEDIA_DATA_STAGE.RESOLVED) return !0;
                        if (E.default.has(e.filehash)) {
                            try {
                                E.default.getOrCreateURL(e.filehash)
                            } catch (e) {
                                return !1
                            }
                            return !0
                        }
                        return !1;
                    default:
                        return !0
                }
            }
            t.MediaThumb = y, y.displayName = "MediaThumb";
            var k = (0, m.default)(y);
            t.default = k
        },
        2740: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t;
                return l.default.createElement("div", {
                    className: (0, o.default)(u.default.icon, (t = {}, (0, r.default)(t, u.default.transparent, e.theme && "transparent" === e.theme), (0, r.default)(t, u.default.compact, e.theme && "compact" === e.theme), (0, r.default)(t, u.default.disabled, e.disabled), t))
                }, e.children)
            };
            var r = n(a(59713)),
                o = n(a(94184)),
                l = n(a(67294)),
                u = n(a(87041))
        },
        75314: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(81506)),
                i = r(a(2205)),
                d = r(a(99842)),
                s = r(a(96486)),
                c = n(a(67294)),
                f = r(a(34541)),
                p = r(a(34263)),
                m = r(a(39239)),
                h = a(71701),
                v = r(a(68390)),
                g = r(a(44589)),
                _ = r(a(73358)),
                C = n(a(7860)),
                E = s.default.debounce((function(e, t) {
                    (0, h.setVideoVolumeSettings)(e, t)
                }), 500),
                S = function(e) {
                    (0, i.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(r))).checkIteration = 0, e.checkForSuccessInterval = 0, e.hasCalledPlaying = !1, e.mediaBlobWasDownloadedBeforeMount = Boolean(e.props.mediaData.mediaBlob), e.refVideo = (0, c.createRef)(), e.onVolumeChange = function() {
                            var t = e.refVideo && e.refVideo.current;
                            t && E(t.volume, t.muted)
                        }, e.startCheckForSuccess = function() {
                            e.checkIteration = 0, e.checkForSuccessInterval || (e.checkForSuccessInterval = setInterval(e.checkForSuccess, 250))
                        }, e.clearCheckForSuccess = function() {
                            e.checkForSuccessInterval && (clearInterval(e.checkForSuccessInterval), e.checkIteration = 0, e.checkForSuccessInterval = 0)
                        }, e.checkForSuccess = function() {
                            if (C.default.state === C.STATE.CONNECTED) {
                                e.checkIteration++;
                                var t = e.refVideo && e.refVideo.current,
                                    a = t && t.buffered;
                                a && a.length && a.end(0) > 0 ? e.onPlaying() : e.checkIteration > 240 && e.clearCheckForSuccess()
                            }
                        }, e.onPlayerError = function() {
                            e.clearCheckForSuccess()
                        }, e.onOtherPlaying = function(t) {
                            t !== (0, u.default)(e) && e.pause()
                        }, e.pause = function() {
                            var t = e.refVideo && e.refVideo.current;
                            t && (t.paused || t.pause())
                        }, e.onPlaying = function() {
                            e.clearCheckForSuccess(), f.default.mediaPlaying((0, u.default)(e))
                        }, e.onLoadedMetadata = function(t) {
                            e.setStartTime();
                            var a = e.props.onLoadedMetadata;
                            a && a(t)
                        }, e.setStartTime = function() {
                            var t = e.refVideo && e.refVideo.current;
                            null != e.props.startTime && 0 !== e.props.startTime && t && (t.currentTime = e.props.startTime)
                        }, e.onContextMenu = function(t) {
                            e.props.disableContextMenu && t.preventDefault()
                        }, e
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.listeners.add(f.default, "mediaPlaying", this.onOtherPlaying), this.props.listeners.add(f.default, "pttRecording", this.pause), this._updateVideoUserPrefs(), this.props.refVideo && this.props.refVideo(this.refVideo)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            E.flush(), this.clearCheckForSuccess(), this.pause(), _.default.isBlink && this.refVideo.current && (0, m.default)(this.refVideo.current)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            this._updateVideoUserPrefs(), e.startTime !== this.props.startTime && this.setStartTime(), this.props.refVideo && this.props.refVideo(this.refVideo)
                        }
                    }, {
                        key: "_updateVideoUserPrefs",
                        value: function() {
                            var e = this.refVideo && this.refVideo.current;
                            if (e) {
                                var t = (0, h.getVideoVolumeSettings)();
                                t && ("number" == typeof t.volume && (e.volume = t.volume), "boolean" == typeof t.muted && (e.muted = t.muted)), P() && this.props.autoPlay && this.startCheckForSuccess()
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.mediaData,
                                n = a.mediaBlob,
                                r = a.streamable && a.isStreamable();
                            if (!this.mediaBlobWasDownloadedBeforeMount && r || !n) {
                                if (!a.streamable || !a.isStreamable()) return null;
                                e = `${p.default.VIDEO_STREAM_URL}?key=${this.props.msg.id.toString()}`
                            } else e = n.url();
                            var o = P() && !t.autoPlay ? this.startCheckForSuccess : void 0;
                            return c.default.createElement("video", {
                                ref: this.refVideo,
                                src: e,
                                poster: t.poster,
                                className: t.className,
                                controls: t.controls,
                                autoPlay: t.autoPlay,
                                onClick: t.onClick,
                                onDoubleClick: t.onDoubleClick,
                                onVolumeChange: this.onVolumeChange,
                                onLoadedMetadata: this.onLoadedMetadata,
                                onPlay: o,
                                onPlaying: this.onPlaying,
                                onError: this.clearCheckForSuccess,
                                onContextMenu: this.onContextMenu
                            }, t.children)
                        }
                    }]), a
                }(c.PureComponent);
            S.CONCERNS = {
                msg: ["id"],
                mediaData: ["mediaBlob", "streamable"]
            }, S.displayName = "VideoTag";
            var y = (0, v.default)((0, g.default)(S, S.CONCERNS));

            function P() {
                return _.default.isGecko || _.default.isSafari
            }
            t.default = y
        },
        71609: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(a(34575)),
                o = n(a(93913)),
                l = n(a(2205)),
                u = n(a(99842)),
                i = n(a(67294)),
                d = n(a(28082)),
                s = n(a(27124)),
                c = function(e) {
                    (0, l.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, r.default)(this, a);
                        for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(o))).closeStatusViewer = function() {
                            e.end()
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push(i.default.createElement(s.default, {
                                initialStatusV3: this.props.statusV3,
                                quotedMsgKey: this.props.msgKey,
                                closeStatusViewer: this.closeStatusViewer,
                                onMsgNotFound: this.props.onMsgNotFound
                            }), "none")
                        }
                    }]), a
                }(d.default);
            t.default = c
        },
        90356: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.catalog,
                    a = e.onSend,
                    n = (0, i.createCatalogLink)(t.id.user),
                    d = t.id.equals((0, o.getMaybeMeUser)()) ? `${l.default.t(1270)} ${n}` : n;
                return r.default.createElement(u.default, {
                    text: d,
                    pushTransition: "none",
                    popTransition: "none",
                    onSend: a
                })
            };
            var r = n(a(67294)),
                o = a(71701),
                l = n(a(89115)),
                u = n(a(98648)),
                i = a(64478)
        },
        82610: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.product,
                    a = e.onSend,
                    n = (0, i.createProductLink)(t.catalogWid.user, t.id.toString()),
                    d = t.catalogWid.equals((0, o.getMaybeMeUser)()) ? `${l.default.t(1298)} ${n}` : n;
                return r.default.createElement(u.default, {
                    text: d,
                    pushTransition: "none",
                    popTransition: "none",
                    onSend: a
                })
            };
            var r = n(a(67294)),
                o = a(71701),
                l = n(a(89115)),
                u = n(a(98648)),
                i = a(64478)
        },
        98648: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(87757)),
                l = r(a(48926)),
                u = r(a(34575)),
                i = r(a(93913)),
                d = r(a(2205)),
                s = r(a(99842)),
                c = r(a(67294)),
                f = a(99703),
                p = a(90695),
                m = r(a(34541)),
                h = r(a(34263)),
                v = r(a(28082)),
                g = r(a(89115)),
                _ = n(a(66132)),
                C = a(47805),
                E = r(a(63056)),
                S = r(a(9381)),
                y = function(e) {
                    (0, d.default)(a, e);
                    var t = (0, s.default)(a);

                    function a() {
                        var e;
                        (0, u.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)))._selected = [], e._getSelected = function() {
                            return e._selected
                        }, e._handleSelectionChange = function(t, a, n) {
                            e._selected = n
                        }, e._handleForwardConfirmed = function(t) {
                            e._send(t)
                        }, e._handleCancel = function() {
                            e.end()
                        }, e._send = function() {
                            var t = (0, l.default)(o.default.mark((function t(a) {
                                var n, r, l, u, i;
                                return o.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (n = e.props, r = n.text, l = n.title, u = n.onSend, 1 !== a.length) {
                                                t.next = 9;
                                                break
                                            }
                                            return i = a[0], t.next = 5, e._pasteText(i, r);
                                        case 5:
                                            e.end(), window.innerWidth <= h.default.LAYOUT_2COLUMNS_MAX_WIDTH && m.default.closeDrawerRight(), t.next = 10;
                                            break;
                                        case 9:
                                            e.push(c.default.createElement(S.default, {
                                                defaultText: r,
                                                title: l || g.default.t(1098),
                                                onSend: function(t, n) {
                                                    return e._handleSend(a, t, n)
                                                },
                                                onBack: e._handleBack
                                            }));
                                        case 10:
                                            u && u();
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(), e._handleSend = function(t, a, n) {
                            e._sendText(t, a, n), e.end()
                        }, e._handleBack = function() {
                            e.pop()
                        }, e._pasteText = function() {
                            var t = (0, l.default)(o.default.mark((function t(a, n) {
                                return o.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e._ensureContactUnblocked(a);
                                        case 2:
                                            a.active ? m.default.pasteChatTextInput(a, n) : (a.setComposeContents({
                                                text: n
                                            }), m.default.openChatFromUnread(a).then((function(e) {
                                                e && m.default.focusChatTextInput(a)
                                            })));
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(), e._sendText = function(t, a, n) {
                            t.forEach(function() {
                                var t = (0, l.default)(o.default.mark((function t(r) {
                                    return o.default.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, e._ensureContactUnblocked(r);
                                            case 2:
                                                m.default.once("ui_idle", (function() {
                                                    (0, C.sendTextMsgToChat)(r, a, {
                                                        linkPreview: n
                                                    })
                                                }));
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }, e._ensureContactUnblocked = function() {
                            var e = (0, l.default)(o.default.mark((function e(t) {
                                return o.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.isUser || !t.contact.isBlocked()) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.next = 3, (0, f.unblockContact)(t.contact);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), e
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push(c.default.createElement(_.default, {
                                title: this.props.title || g.default.t(1098),
                                listType: _.ListType.CHAT_SELECT_MODAL,
                                getInitialItems: this._getSelected,
                                maxItems: E.default.multicastLimitGlobal,
                                onConfirm: this._handleForwardConfirmed,
                                onCancel: this._handleCancel,
                                onSelectionChanged: this._handleSelectionChange,
                                singleSelectionFooterType: p.FooterType.NEXT,
                                multipleSelectionFooterType: p.FooterType.NEXT
                            }))
                        }
                    }]), a
                }(v.default);
            t.default = y
        },
        37286: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.labels,
                    a = e.theme;
                return t && (0, u.canDisplayLabel)() ? l.default.createElement("div", {
                    className: (0, o.default)(i.default.labelContainer, (0, r.default)({}, i.default.standaloneLabelContainer, "standalone" === a))
                }, function() {
                    if (t) return t.map((function(e, t) {
                        return l.default.createElement("div", {
                            key: t,
                            className: (0, o.default)(i.default.labelRow, (0, r.default)({}, i.default.standaloneLabelRow, "standalone" === a))
                        }, l.default.createElement(d.default, {
                            labels: [e],
                            showName: !0
                        }))
                    }))
                }()) : null
            };
            var r = n(a(59713)),
                o = n(a(94184)),
                l = n(a(67294)),
                u = a(31230),
                i = n(a(87571)),
                d = n(a(85221))
        },
        83365: (e, t, a) => {
            "use strict";
            var n = a(95318),
                r = a(20862);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(67294)),
                l = n(a(97930)),
                u = n(a(59271)),
                i = n(a(26015)),
                d = n(a(81997)),
                s = n(a(25259)),
                c = r(a(62647)),
                f = n(a(89115)),
                p = a(37475),
                m = a(28770),
                h = n(a(33819)),
                v = (0, o.forwardRef)((function(e, t) {
                    var a = e.settings,
                        n = e.onClose,
                        r = (0, h.default)(a, ["archive"]).archive,
                        v = !r.classic;
                    return o.default.createElement(d.default, {
                        ref: t
                    }, o.default.createElement(c.default, {
                        title: f.default.t(237),
                        type: c.DRAWER_HEADER_TYPE.LARGE,
                        onBack: n
                    }), o.default.createElement(s.default, null, o.default.createElement("div", {
                        className: u.default.section
                    }, o.default.createElement("div", {
                        "data-a8n": l.default.key("auto-unarchive-setting"),
                        className: u.default.control
                    }, o.default.createElement(i.default, {
                        onChange: function() {
                            var e = !r.classic;
                            (0, p.setArchiveClassicSetting)(e)
                        },
                        checked: v
                    })), o.default.createElement("div", {
                        "data-a8n": l.default.key("auto-unarchive-setting-text")
                    }, f.default.t(257), o.default.createElement(m.TextDiv, {
                        theme: "muted"
                    }, f.default.t(256))))))
                }));
            t.default = v
        },
        55523: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.elementId,
                    a = e.onClick;
                return document.queryCommandSupported("copy") ? o.default.createElement(d.default, {
                    a8nText: "li-copy-link",
                    icon: o.default.createElement(c.default, {
                        name: "copy",
                        className: u.default.icon
                    }),
                    onClick: function() {
                        return function(e, t) {
                            (0, i.default)(e) ? l.default.openToast(o.default.createElement(f.default, {
                                msg: s.default.t(939),
                                id: (0, f.genId)()
                            })): l.default.openToast(o.default.createElement(f.default, {
                                msg: s.default.t(938),
                                id: (0, f.genId)()
                            }));
                            null != t && t()
                        }(t, a)
                    }
                }, s.default.t(599)) : null
            };
            var o = r(a(67294)),
                l = r(a(34541)),
                u = r(a(555)),
                i = r(a(72520)),
                d = r(a(10869)),
                s = r(a(89115)),
                c = r(a(75131)),
                f = n(a(92631))
        },
        10869: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n = e.children,
                    p = e.onClick,
                    m = e.icon,
                    h = e.className,
                    v = e.color,
                    g = e.theme,
                    _ = (0, f.default)(p),
                    C = (0, l.default)(_, 2),
                    E = C[0],
                    S = C[1],
                    y = null != m ? i.default.createElement("div", {
                        className: (0, u.default)(s.default.icon, (t = {}, (0, o.default)(t, s.default.danger, "danger" === v), (0, o.default)(t, s.default.success, "success" === v), t))
                    }, m) : null,
                    P = (0, u.default)(s.default.container, h, (a = {}, (0, o.default)(a, s.default.containerNoIcon, !m), (0, o.default)(a, s.default.containerListAligned, "list-aligned" === g), a)),
                    T = "string" == typeof n ? n : null;
                return i.default.createElement("div", (0, r.default)({}, S, {
                    className: P,
                    "data-a8n": d.default.key(e.a8nText),
                    "data-ignore-capture": "any",
                    ref: E,
                    title: T
                }), y, i.default.createElement("div", {
                    className: s.default.bodyContainer
                }, i.default.createElement("div", {
                    className: s.default.body
                }, i.default.createElement(c.TextSpan, {
                    theme: "title",
                    color: v
                }, n))))
            };
            var r = n(a(67154)),
                o = n(a(59713)),
                l = n(a(63038)),
                u = n(a(94184)),
                i = n(a(67294)),
                d = n(a(97930)),
                s = n(a(73858)),
                c = a(28770),
                f = n(a(10394))
        },
        74101: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = r(a(67294)),
                s = a(4976),
                c = r(a(10725)),
                f = r(a(70583)),
                p = r(a(93743)),
                m = r(a(58479)),
                h = a(71701),
                v = r(a(89115)),
                g = r(a(8643)),
                _ = a(87874),
                C = r(a(61206)),
                E = n(a(82265)),
                S = _.NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS,
                y = {
                    COOL_OFF_DURATION_IN_DAYS: 2,
                    VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1,
                    CLICKS_BEFORE_COOL_OFF: 1,
                    MAX_VIEWS_IN_DAYS: 2,
                    COOL_OFF_START_STORAGE_KEY: _.CoolOffPeriodKeys.COLLECTIONS
                };
            var P = function(e) {
                (0, u.default)(a, e);
                var t = (0, i.default)(a);

                function a() {
                    return (0, o.default)(this, a), t.apply(this, arguments)
                }
                return (0, l.default)(a, [{
                    key: "render",
                    value: function() {
                        var e = this.props.onClick,
                            t = new E.default(S, g.default.BANNER_TYPES.SMB_COLLECTION_CREATION, y),
                            a = d.default.createElement("span", {
                                className: f.default.actionText
                            }, v.default.t(1212));
                        return d.default.createElement(m.default, {
                            title: v.default.t(1214),
                            subtitle: v.default.t(1213),
                            actionText: a,
                            onClick: e,
                            nuxManager: t,
                            theme: "nuxBlue"
                        })
                    }
                }], [{
                    key: "shouldShow",
                    value: function() {
                        return (0, s.getABPropConfigValue)("web_abprop_collections_nux_banner") && p.default.isSMB && function() {
                            var e = c.default.get((0, h.getMeUser)());
                            if (e && e.collections) {
                                var t = e.collections.getCollectionModels(!0);
                                return 0 !== e.productCollection.getProductModels(!0).length && 0 === t.length
                            }
                            return !1
                        }() && (0, E.shouldShowNUX)(S, y)
                    }
                }]), a
            }(C.default);
            t.default = P, P.displayName = "CollectionsBanner"
        },
        1935: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = r(a(94184)),
                s = r(a(91080)),
                c = n(a(67294)),
                f = r(a(10598)),
                p = r(a(34541)),
                m = r(a(42575)),
                h = r(a(41769)),
                v = r(a(34432)),
                g = r(a(89115)),
                _ = a(53418),
                C = r(a(69052)),
                E = r(a(67978)),
                S = r(a(44589)),
                y = r(a(75131)),
                P = r(a(4268)),
                T = r(a(77478)),
                k = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            style: {
                                visibility: "hidden"
                            }
                        }, e.handleScroll = function(t) {
                            Math.abs(t.deltaY) > 3 && e.handleClose()
                        }, e.handleClose = function() {
                            if (!e.closing) {
                                var t;
                                if (e.closing = !0, e.props.getZoomNode((function(e) {
                                        t = e
                                    })), !t) return p.default.closeModalMedia();
                                var a = e._refImage;
                                if (a) {
                                    e.props.animateBorderRadius && (a.style.transition = "border-radius 500ms cubic-bezier(.1,.82,.25,1)", a.style.borderRadius = "50%");
                                    var n = (0, s.default)(t, "start"),
                                        r = a.getBoundingClientRect(),
                                        o = n.getBoundingClientRect(),
                                        l = o.top - r.top,
                                        u = o.left - r.left,
                                        i = n.clientWidth / a.clientWidth;
                                    (0, T.default)(a, {
                                        translateX: [u, 0],
                                        translateY: [l, 0],
                                        scale: [i, 1]
                                    }, {
                                        duration: 200,
                                        easing: [.1, .82, .25, 1]
                                    }).then((function() {
                                        p.default.closeModalMedia()
                                    }))
                                }
                            }
                        }, e.handleImageLoad = function(t) {
                            var a = t.target;
                            e.setState({
                                size: {
                                    width: a.naturalWidth,
                                    height: a.naturalHeight
                                }
                            }, (function() {
                                e.props.getZoomNode((function(t) {
                                    var n = a.getBoundingClientRect(),
                                        r = t.getBoundingClientRect(),
                                        o = r.top - n.top,
                                        l = {
                                            visibility: "hidden",
                                            transform: `translateX(${r.left-n.left}px) translateY(${o}px) scale(${t.clientWidth/a.clientWidth})`,
                                            transition: "transform 0s",
                                            borderRadius: void 0
                                        };
                                    e.props.animateBorderRadius && (l.borderRadius = "50%"), e.setState({
                                        style: l
                                    }, (function() {
                                        var t = {
                                            transform: "translateX(0px) translateY(0px) scale(1)",
                                            transition: "transform 500ms cubic-bezier(.1,.82,.25,1)"
                                        };
                                        e.props.animateBorderRadius && (t = {
                                            transform: "translateX(0px) translateY(0px) scale(1)",
                                            borderRadius: "0%",
                                            transition: "transform 500ms cubic-bezier(.1,.82,.25,1),\n                                         border-radius 500ms cubic-bezier(.1,.82,.25,1)"
                                        }), e.setState({
                                            style: t
                                        })
                                    }))
                                }))
                            }))
                        }, e.setRefImage = function(t) {
                            e._refImage = t
                        }, e
                    }
                    return (0, l.default)(a, [{
                        key: "shouldComponentUpdate",
                        value: function(e) {
                            return !!e.profilePicThumb.imgFull || (this.handleClose(), !1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.contact,
                                n = t.profilePicThumb;
                            return n.imgFull && (e = c.default.createElement(v.default, {
                                src: n.imgFull,
                                hasPrivacyChecks: !0,
                                onLoad: this.handleImageLoad,
                                className: E.default.profileViewerImg
                            })), c.default.createElement(P.default, {
                                displayName: "PhotoViewer",
                                escapable: !0,
                                requestDismiss: this.handleClose
                            }, c.default.createElement("div", {
                                className: (0, d.default)("overlay", E.default.container),
                                onWheel: this.handleScroll,
                                onClick: this.handleClose
                            }, c.default.createElement("div", {
                                className: E.default.headerContainer
                            }, c.default.createElement("div", {
                                className: E.default.profileThumb
                            }, c.default.createElement(f.default, {
                                image: c.default.createElement(m.default, {
                                    id: a.id,
                                    size: 40
                                }),
                                theme: "plain",
                                primary: c.default.createElement(h.default, {
                                    text: a.formattedUser
                                })
                            })), c.default.createElement("div", {
                                className: E.default.mediaPanelTools
                            }, c.default.createElement(_.MenuBar, {
                                key: "media-panel-header",
                                theme: "strong"
                            }, c.default.createElement(_.MenuBarItem, {
                                a8nText: "btn-close",
                                icon: c.default.createElement(y.default, {
                                    name: "x-viewer"
                                }),
                                title: g.default.t(1705),
                                onClick: this.handleClose
                            })))), c.default.createElement("div", {
                                className: E.default.profileContainer,
                                dir: "ltr"
                            }, c.default.createElement("div", {
                                className: E.default.media
                            }, c.default.createElement(C.default, {
                                type: "scaleDown",
                                size: this.state.size
                            }, c.default.createElement("div", {
                                className: E.default.profileViewer,
                                "data-animate-profile-viewer": !0,
                                ref: this.setRefImage,
                                style: this.state.style
                            }, e))))))
                        }
                    }]), a
                }(c.Component);
            k.CONCERNS = {
                contact: ["formattedUser", "id"],
                profilePicThumb: ["imgFull"]
            }, k.displayName = "PhotoViewerModal";
            var w = (0, S.default)(k, k.CONCERNS);
            t.default = w
        },
        42315: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.profilePicThumb,
                    a = e.size,
                    n = !t.canSet() && !t.canDelete(),
                    r = m(!1),
                    h = (0, o.default)(r, 2),
                    v = h[0],
                    g = h[1],
                    _ = (0, p.default)();
                return l.default.createElement(d.default, {
                    type: s.default.PROFILE,
                    id: t.id,
                    attachToChat: !1,
                    pending: v,
                    startImage: t.imgFull,
                    readOnly: n,
                    onImageSet: function(t, a) {
                        var n, r = e.profilePicThumb;
                        g(!0), n = t && a ? (0, c.setProfilePic)(r, t, a) : (0, c.deleteProfilePic)(r), (0, f.default)(n, _).catchType(i.ActionError, (function() {
                            __LOG__(3)`ProfileDrawer: failed to set/delete profile image`
                        })).catch((function(e) {
                            if (e.name !== u.ABORT_ERROR) throw e
                        })).finally((function() {
                            g(!1)
                        }))
                    },
                    size: a
                })
            };
            var o = r(a(63038)),
                l = r(a(67294)),
                u = a(2277),
                i = n(a(98569)),
                d = r(a(84520)),
                s = r(a(32874)),
                c = a(95373),
                f = r(a(69673)),
                p = r(a(13605)),
                m = l.default.useState
        },
        78724: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return r.default.createElement(o.default, {
                    a8nText: "li-share-link",
                    icon: r.default.createElement(i.default, {
                        name: "forward",
                        className: u.default.icon
                    }),
                    onClick: e.onClick
                }, l.default.t(1396))
            };
            var r = n(a(67294)),
                o = n(a(10869)),
                l = n(a(89115)),
                u = n(a(60654)),
                i = n(a(75131))
        },
        88258: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return r.default.createElement(o.default, {
                    a8nText: "li-share-link",
                    icon: r.default.createElement(i.default, {
                        name: "forward",
                        className: u.default.icon
                    }),
                    onClick: e.onClick
                }, l.default.t(1419))
            };
            var r = n(a(67294)),
                o = n(a(10869)),
                l = n(a(89115)),
                u = n(a(67873)),
                i = n(a(75131))
        },
        45333: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = n(a(67294)),
                s = r(a(26671)),
                c = r(a(34541)),
                f = r(a(70167)),
                p = a(75300),
                m = r(a(14360)),
                h = r(a(93868)),
                v = a(6067),
                g = r(a(42715)),
                _ = r(a(89115)),
                C = r(a(42027)),
                E = r(a(6353)),
                S = a(47805),
                y = r(a(19614)),
                P = r(a(75131)),
                T = n(a(92631)),
                k = r(a(4268)),
                w = r(a(88117)),
                I = r(a(38512)),
                M = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a() {
                        var e;
                        return (0, o.default)(this, a), (e = t.apply(this, arguments)).emojiInputComponent = (0, m.default)(), e._refEmojiPanel = (0, d.createRef)(), e.isSkinTonePickerOpen = !1, e.handleSend = function(t) {
                            var a;
                            if (t.preventDefault(), e._refInputLine) {
                                var n = e._refInputLine.value.trim();
                                if (n.length) {
                                    var r = (0, T.genId)();
                                    s.default.find(e.props.msg.sender).then((function(t) {
                                        return c.default.openToast(d.default.createElement(T.default, {
                                            msg: _.default.t(1446),
                                            id: r
                                        })), (0, S.sendTextMsgToChat)(t, (0, g.default)(n), {
                                            quotedMsg: e.props.msg
                                        })
                                    })).then((function() {
                                        e.props.onSend()
                                    })).catchType(f.default, (function() {
                                        var t = e.state.chat;
                                        t && c.default.openToast(d.default.createElement(T.default, {
                                            msg: _.default.t(1696, {
                                                contact: t.contact.formattedName
                                            }),
                                            id: r
                                        }))
                                    })), null === (a = e._refInputLine) || void 0 === a || a.reset(), e._emojiPickerClose(), e.props.dismissReply()
                                }
                            }
                        }, e.handleFocus = function() {
                            e.setState({
                                focused: !0
                            })
                        }, e.handleBlur = function() {
                            e.isSkinTonePickerOpen || document.activeElement === document.body && e.setState({
                                focused: !1
                            })
                        }, e.handleSkinTonePicker = function(t) {
                            e.isSkinTonePickerOpen = t
                        }, e.isFocused = function() {
                            return e.state.focused
                        }, e.handleEmojiPicker = function(t) {
                            t && (t.preventDefault(), t.stopPropagation());
                            var a = d.default.createElement(h.default, {
                                ref: e._refEmojiPanel,
                                onEmoji: e.handleEmoji,
                                onFocusNext: e.restoreFocus,
                                onFocusPrev: e.restoreFocus
                            });
                            e.setState({
                                emojiPicker: {
                                    menu: a,
                                    dirY: p.DirY.TOP,
                                    type: "emoji_picker",
                                    anchor: t.target
                                }
                            })
                        }, e.handleEmoji = function(t) {
                            e._refInputLine && e._refInputLine.replaceSelection(t)
                        }, e.restoreFocus = function() {
                            e._refInputLine && e._refInputLine.focus()
                        }, e._restoreEmojiPickerFocus = function() {
                            var t;
                            null === (t = e._refEmojiPanel.current) || void 0 === t || t.restoreFocus()
                        }, e._emojiPickerClose = function() {
                            e.setState({
                                emojiPicker: void 0
                            }), e.restoreFocus()
                        }, e.state = {
                            replyCaption: "",
                            focused: !1,
                            emojiPicker: void 0,
                            chat: void 0
                        }, s.default.find(e.props.msg.sender).checkpoint(e.props.rejectOnUnmount()).then((function(t) {
                            e.setState({
                                chat: t
                            })
                        })), e
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            this._shouldPausePlayback(t) && !this._shouldPausePlayback(this.state) ? this.props.play() : !this._shouldPausePlayback(t) && this._shouldPausePlayback(this.state) && this.props.pause()
                        }
                    }, {
                        key: "_shouldPausePlayback",
                        value: function(e) {
                            return Boolean(e.emojiPicker) || e.focused
                        }
                    }, {
                        key: "isPaused",
                        value: function() {
                            return this._shouldPausePlayback(this.state)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, n = this;
                            this.state.emojiPicker && (e = d.default.createElement(k.default, {
                                displayName: "EmojiPicker",
                                escapable: !0,
                                popable: !0,
                                requestDismiss: this._emojiPickerClose,
                                requestFocus: this._restoreEmojiPickerFocus
                            }, d.default.createElement(w.default, {
                                contextMenu: this.state.emojiPicker
                            })), t = d.default.createElement(k.default, {
                                displayName: "EmojiPicker",
                                escapable: !0,
                                requestFocus: this._restoreEmojiPickerFocus
                            }, d.default.createElement("div", null, e)));
                            var r = this.state.chat;
                            r && this.state.focused && !this.state.emojiPicker && (a = d.default.createElement(k.default, {
                                displayName: "StatusV3Reply",
                                escapable: !0,
                                requestDismiss: this.props.dismissReply
                            }, d.default.createElement("div", {
                                className: y.default.popupPanel
                            }, d.default.createElement(E.default, {
                                msg: this.props.msg.safe(),
                                theme: "statusV3",
                                key: this.props.msg.id.toString(),
                                chat: r
                            }))));
                            var o = this.emojiInputComponent;
                            return d.default.createElement("div", {
                                className: y.default.container
                            }, d.default.createElement(I.default, {
                                transitionName: "status-v3-quoted-msg",
                                transitionAppear: !0
                            }, a), d.default.createElement("div", {
                                className: y.default.wrapper
                            }, d.default.createElement("button", {
                                className: y.default.emojiIcon,
                                onClick: this.handleEmojiPicker
                            }, d.default.createElement(P.default, {
                                name: "smiley"
                            })), d.default.createElement("div", {
                                className: y.default.lineWrapper
                            }, d.default.createElement(o.EmojiSuggestions, {
                                theme: v.ThemeOptions.EMOJI_INPUT,
                                onSkinTonePicker: this.handleSkinTonePicker
                            }), d.default.createElement(o, {
                                ref: function(e) {
                                    n._refInputLine = e
                                },
                                theme: "status-reply",
                                spellCheck: !0,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                onEnter: this.handleSend,
                                placeholder: _.default.t(1498),
                                editable: !0,
                                multiline: !0
                            })), d.default.createElement("button", {
                                className: y.default.sendIcon,
                                onClick: this.handleSend
                            }, d.default.createElement(P.default, {
                                name: "send",
                                directional: !0
                            })), t))
                        }
                    }]), a
                }(d.Component);
            M.displayName = "StatusV3ComposeBox";
            var N = function(e) {
                (0, u.default)(a, e);
                var t = (0, i.default)(a);

                function a() {
                    return (0, o.default)(this, a), t.apply(this, arguments)
                }
                return (0, l.default)(a, [{
                    key: "isFocused",
                    value: function() {
                        return !0 === this.getComponent().isFocused()
                    }
                }, {
                    key: "isPaused",
                    value: function() {
                        return this.getComponent().isPaused()
                    }
                }, {
                    key: "restoreFocus",
                    value: function() {
                        this.getComponent().restoreFocus()
                    }
                }]), a
            }((0, C.default)(M));
            t.default = N
        },
        77630: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StatusV3Text = t.default = void 0;
            var o = r(a(59713)),
                l = r(a(34575)),
                u = r(a(93913)),
                i = r(a(2205)),
                d = r(a(99842)),
                s = r(a(94184)),
                c = r(a(96486)),
                f = n(a(67294)),
                p = r(a(12940)),
                m = r(a(26671)),
                h = r(a(79140)),
                v = r(a(34541)),
                g = r(a(34263)),
                _ = r(a(42575)),
                C = r(a(41769)),
                E = a(14650),
                S = n(a(98569)),
                y = r(a(31722)),
                P = r(a(32855)),
                T = r(a(22021)),
                k = r(a(76568)),
                w = r(a(34432)),
                I = a(12518),
                M = r(a(89115)),
                N = r(a(68390)),
                O = r(a(28719)),
                b = a(87261),
                D = r(a(93482)),
                R = r(a(8643)),
                x = r(a(44982)),
                A = r(a(69052)),
                L = r(a(42027)),
                F = r(a(87729)),
                U = r(a(44589)),
                V = r(a(45333)),
                B = a(23669),
                j = r(a(4764)),
                H = r(a(33864)),
                W = r(a(71267)),
                G = r(a(4268)),
                Y = a(30564),
                K = r(a(33819)),
                z = r(a(75314)),
                $ = function(e) {
                    (0, i.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        return (0, l.default)(this, a), (e = t.apply(this, arguments))._refProgressBar = (0, f.createRef)(), e._refProgressBarComponent = (0, f.createRef)(), e._refMeasuringProfile = (0, f.createRef)(), e._refWrapper = (0, f.createRef)(), e.componentWillUnmount = function() {
                            if (e._playbackController.removeListeners(), null != e.props.sessionId) {
                                var t = Math.round(e._playbackController.duration || 0);
                                e._statusViewEvent.webcStatusPlaybackT = t;
                                var a = e._playStartTime;
                                null != a && (e._statusViewEvent.webcStatusViewT += Math.round(window.performance.now() - a), e._playStartTime = void 0), e._statusViewEvent.commit()
                            }
                        }, e._updateStatusViewers = function() {
                            x.default.find(e.props.msg.id).checkpoint(e.props.rejectOnUnmount()).then((function(t) {
                                e.setState({
                                    seenBy: t.read
                                })
                            })).catchType(S.Unmount, (function() {})).catchType(E.EphemeralDrop, (function() {}))
                        }, e._handleWindowResize = function() {
                            var t = e._refMeasuringProfile && e._refMeasuringProfile.current,
                                a = e._refProgressBar && e._refProgressBar.current;
                            if (t && a) {
                                var n = t.getBoundingClientRect(),
                                    r = a.getBoundingClientRect();
                                !M.default.isRTL() && n.right > r.left - 5 || M.default.isRTL() && n.left < r.right + 5 ? e.setState({
                                    narrow: !0
                                }) : e.setState({
                                    narrow: !1
                                })
                            }
                        }, e._handleTab = function(t) {
                            var a;
                            (t && (t.stopPropagation(), t.preventDefault()), e.props.statusV3.contact.isMe) || ((null === (a = e._refComposeBox) || void 0 === a ? void 0 : a.isFocused()) ? e.dismissReply() : e._startReply())
                        }, e.handleWindowGainedFocus = function() {
                            e._windowFocused = !0, e.play()
                        }, e.handleWindowLostFocus = function() {
                            e._windowFocused = !1, e.pause()
                        }, e._handleClickProfile = function() {
                            var t = e.props.statusV3.contact.id;
                            m.default.find(t).then((function(e) {
                                return v.default.openChatBottom(e)
                            })).then((function() {
                                e.props.closeStatusViewer(!0)
                            }))
                        }, e.play = function() {
                            var t, a = e.props.mediaData;
                            if (a) {
                                if (a.mediaStage !== b.MEDIA_DATA_STAGE.RESOLVED) return;
                                e._statusViewEvent.webcStatusLoadT || (e._statusViewEvent.markWebcStatusLoadT(), e._statusViewEvent.webcStatusLoaded = !0)
                            }(null === (t = e._refComposeBox) || void 0 === t ? void 0 : t.isPaused()) || e._windowFocused && (e._playStartTime = window.performance.now(), e._playbackController.resume())
                        }, e.pause = function() {
                            var t = e.props.mediaData;
                            if (!t || t.mediaStage === b.MEDIA_DATA_STAGE.RESOLVED) {
                                var a = e._playStartTime;
                                null != a && (e._statusViewEvent.webcStatusViewT += Math.round(window.performance.now() - a), e._playStartTime = void 0), e._playbackController.pause()
                            }
                        }, e.handleMouseDown = function() {
                            e.pause()
                        }, e.handleMouseUp = function() {
                            e.play()
                        }, e.dismissReply = function() {
                            var t = e._refWrapper && e._refWrapper.current;
                            t && y.default.focus(t)
                        }, e._startReply = function() {
                            var t;
                            null === (t = e._refComposeBox) || void 0 === t || t.restoreFocus()
                        }, e.handleSend = function() {
                            e._statusViewEvent.webcStatusReplyCount++
                        }, e.state = {
                            chat: void 0,
                            narrow: !1
                        }, e._windowFocused = !0, e._playbackController = (0, B.setupStatusV3Controller)(e.props.mediaData, e.props.msg), e._statusViewEvent = new R.default.WebcStatusView({
                            webcStatusLoaded: !1,
                            webcStatusReplyCount: 0,
                            webcStatusViewT: 0
                        }), e
                    }
                    return (0, u.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.statusV3,
                                n = t.msg,
                                r = t.mediaData,
                                o = t.msgIdx,
                                l = t.sessionId;
                            if (null != l) {
                                var u;
                                a.contact.isMe ? (u = R.default.WEBC_STATUS_ROW_SECTION.MY, this._updateStatusViewers()) : u = a.contact.statusMute ? R.default.WEBC_STATUS_ROW_SECTION.MUTED : a.hasUnread ? R.default.WEBC_STATUS_ROW_SECTION.RECENT : R.default.WEBC_STATUS_ROW_SECTION.VIEWED;
                                var i, d = this.props.rowIdx || 0,
                                    s = a.msgs.length - 1 - o < a.unreadCount;
                                r ? i = r.isGif ? R.default.WEBC_STATUS_MEDIA_TYPE.GIF : "video" === r.type ? R.default.WEBC_STATUS_MEDIA_TYPE.VIDEO : R.default.WEBC_STATUS_MEDIA_TYPE.IMAGE : (i = n.getLinks().length ? R.default.WEBC_STATUS_MEDIA_TYPE.URL : R.default.WEBC_STATUS_MEDIA_TYPE.TEXT, this._statusViewEvent.markWebcStatusLoadT(), this._statusViewEvent.webcStatusLoaded = !0), this._statusViewEvent.webcStatusSessionId = l, this._statusViewEvent.webcStatusRowSection = u, this._statusViewEvent.webcStatusRowIndex = d, this._statusViewEvent.webcStatusMediaType = i, this._statusViewEvent.webcStatusUnread = s
                            }
                            this._refProgressBarComponent && this._refProgressBarComponent.current && this._playbackController.addListeners((function(t, a) {
                                var n = e._refProgressBarComponent && e._refProgressBarComponent.current;
                                n && n.handleStart(t, a)
                            }), (function() {
                                var t = e._refProgressBarComponent && e._refProgressBarComponent.current;
                                t && t.handlePause()
                            }), (function() {
                                var t = e._refProgressBarComponent && e._refProgressBarComponent.current;
                                t && t.handleEnded().checkpoint(e.props.rejectOnUnmount()).then((function() {
                                    e.props.onNext()
                                })).catchType(S.Unmount, (function() {}))
                            })), r ? (this.play(), r && r.mediaStage === b.MEDIA_DATA_STAGE.RESOLVED && this.props.markRead(this.props.statusV3, this.props.msg)) : (this.props.msg.type, g.default.MSG_TYPE.CHAT, this.play(), this.props.markRead(this.props.statusV3, this.props.msg));
                            var f = this._refWrapper && this._refWrapper.current;
                            f && f.focus();
                            var p = this.props.listeners;
                            p.add(window, "focus", this.handleWindowGainedFocus), p.add(window, "blur", this.handleWindowLostFocus), p.add(window, "resize", c.default.debounce(this._handleWindowResize)), this._handleWindowResize()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, n = this,
                                r = this.props,
                                l = r.msg,
                                u = r.mediaData,
                                i = r.statusV3;
                            if (u) {
                                var d = te(u);
                                d && (t = {
                                    backgroundImage: `url(${d})`
                                })
                            } else if (l.type === g.default.MSG_TYPE.CHAT) {
                                t = {
                                    backgroundColor: l.statusV3TextBg
                                }
                            }
                            if (u) switch (u.type) {
                                case O.default.TYPE.IMAGE:
                                    a = f.default.createElement(X, {
                                        msg: l,
                                        statusV3: i,
                                        mediaData: u,
                                        markRead: this.props.markRead,
                                        play: this.play,
                                        pause: this.pause,
                                        onMouseDown: this.handleMouseDown,
                                        onMouseUp: this.handleMouseUp
                                    });
                                    break;
                                case O.default.TYPE.VIDEO:
                                    a = f.default.createElement(J, {
                                        msg: l,
                                        statusV3: i,
                                        mediaData: u,
                                        markRead: this.props.markRead,
                                        play: this.play,
                                        pause: this.pause,
                                        playbackController: this._playbackController,
                                        onMouseDown: this.handleMouseDown,
                                        onMouseUp: this.handleMouseUp
                                    });
                                    break;
                                default:
                                    __LOG__(3)`Invalid status v3 image type: ${u.type}`
                            } else a = l.type === g.default.MSG_TYPE.CHAT ? f.default.createElement(Q, {
                                msg: l,
                                onMouseDown: this.handleMouseDown,
                                onMouseUp: this.handleMouseUp
                            }) : f.default.createElement(ee, {
                                onMouseDown: this.handleMouseDown,
                                onMouseUp: this.handleMouseUp
                            });
                            var c, p = f.default.createElement("div", {
                                ref: this._refProgressBar
                            }, f.default.createElement(H.default, {
                                ref: this._refProgressBarComponent,
                                current: this.props.msgIdx,
                                total: this.props.totalMsgs,
                                onClick: this.props.onClickProgressBar
                            }));
                            l.type !== g.default.MSG_TYPE.CHAT && (c = f.default.createElement("div", {
                                className: j.default.captionBackdrop
                            }, f.default.createElement(C.default, {
                                className: j.default.mediaCaption,
                                text: l.caption,
                                formatters: I.Configuration.StatusV3Caption()
                            })));
                            var m, v, E = (0, s.default)(j.default.profile, (e = {}, (0, o.default)(e, j.default.nonClickProfile, l.isSentByMe), (0, o.default)(e, j.default.profileNarrow, this.state.narrow), e)),
                                S = (0, s.default)(j.default.profile, j.default.measuringProfile, {}),
                                y = f.default.createElement("div", {
                                    className: E,
                                    onClick: l.isSentByMe ? null : this._handleClickProfile
                                }, f.default.createElement("div", {
                                    className: j.default.playerAvatar
                                }, f.default.createElement(_.default, {
                                    id: i.contact.id,
                                    theme: "status_v3",
                                    size: 40
                                })), f.default.createElement("div", {
                                    className: j.default.msgInfo
                                }, f.default.createElement(C.default, {
                                    className: j.default.msgInfoName,
                                    text: i.contact.formattedName
                                }), f.default.createElement("div", {
                                    className: j.default.timestamp
                                }, h.default.relativeDateAndTimeStr(l.t)))),
                                P = f.default.createElement("div", {
                                    ref: this._refMeasuringProfile,
                                    className: S
                                }, f.default.createElement("div", {
                                    className: j.default.playerAvatar
                                }, f.default.createElement(_.default, {
                                    id: i.contact.id,
                                    theme: "status_v3",
                                    size: 40
                                })), f.default.createElement("div", {
                                    className: j.default.msgInfo
                                }, f.default.createElement(C.default, {
                                    className: j.default.msgInfoName,
                                    text: i.contact.formattedName
                                }), f.default.createElement("div", {
                                    className: j.default.timestamp
                                }, h.default.relativeDateAndTimeStr(l.t)))),
                                w = {
                                    tab: this._handleTab,
                                    "shift+tab": this._handleTab
                                },
                                M = function(e) {
                                    return e.stopPropagation()
                                };
                            u && (m = f.default.createElement(ae, {
                                mediaData: u
                            }));
                            var N = this.props.statusV3.contact;
                            N.isMe || N.isPSA || (v = f.default.createElement(k.default, {
                                handlers: {
                                    left: M,
                                    right: M
                                }
                            }, f.default.createElement(V.default, {
                                msg: this.props.msg,
                                dismissReply: this.dismissReply,
                                onSend: this.handleSend,
                                pause: this.pause,
                                play: this.play,
                                ref: function(e) {
                                    n._refComposeBox = e
                                }
                            })));
                            var b, D = T.default.supportsFeature(T.default.F.SEE_STATUS_VIEWERS) && N.isMe && this.state.seenBy ? f.default.createElement("div", {
                                    className: j.default.seen
                                }, f.default.createElement(W.default, {
                                    seenCount: this.state.seenBy.length
                                })) : null,
                                R = (0, s.default)(j.default.playerBackground, (0, o.default)({}, j.default.media, u)),
                                x = (0, s.default)(j.default.progressBackdrop, (0, o.default)({}, j.default.progressBarBackdropNarrow, this.state.narrow));
                            return l.type !== g.default.MSG_TYPE.CHAT && (b = f.default.createElement("div", {
                                className: x
                            })), f.default.createElement(G.default, {
                                displayName: "StatusV3Player",
                                escapable: !0,
                                requestDismiss: function(e) {
                                    e || n.props.closeStatusViewer()
                                },
                                requestFocus: this.dismissReply
                            }, f.default.createElement(k.default, {
                                handlers: w
                            }, f.default.createElement("div", {
                                className: j.default.playerWrapper,
                                key: l.id.toString(),
                                tabIndex: -1,
                                ref: this._refWrapper
                            }, P, y, b, p, c, f.default.createElement("div", {
                                className: R,
                                style: t
                            }), a, m, D, v)))
                        }
                    }]), a
                }(f.Component);
            $.displayName = "_StatusV3Player";
            var q = function(e) {
                (0, i.default)(a, e);
                var t = (0, d.default)(a);

                function a() {
                    var e;
                    (0, l.default)(this, a);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(r)))._renderImage = function(t) {
                        var a = e.props,
                            n = a.msg,
                            r = a.mediaData,
                            o = (0, s.default)(j.default.playerContent, j.default.v3Image);
                        return f.default.createElement("div", {
                            className: o,
                            onMouseDown: e.props.onMouseDown,
                            onMouseUp: e.props.onMouseUp,
                            onDragEnd: e.props.onMouseUp
                        }, f.default.createElement(A.default, {
                            type: "contain",
                            size: {
                                width: r.fullWidth,
                                height: r.fullHeight
                            }
                        }, f.default.createElement("div", {
                            className: j.default.mediaViewer
                        }, f.default.createElement(w.default, {
                            src: t,
                            disableContextMenu: !0
                        }), n && n.interactiveAnnotations && n.interactiveAnnotations.length > 0 && f.default.createElement(p.default, {
                            annotations: n.interactiveAnnotations,
                            onTooltipDisplay: e.props.onMouseDown,
                            onTooltipDismiss: e.props.onMouseUp
                        }))))
                    }, e._renderPreviewImage = function() {
                        var t, a = e.props.mediaData,
                            n = (0, s.default)(j.default.playerContent, j.default.v3Image, j.default.loading);
                        return f.default.createElement("div", {
                            className: n,
                            onMouseDown: e.props.onMouseDown,
                            onMouseUp: e.props.onMouseUp
                        }, f.default.createElement(A.default, {
                            type: "contain",
                            size: {
                                width: a.aspectRatio,
                                height: 1
                            }
                        }, f.default.createElement(w.default, {
                            src: null !== (t = te(a)) && void 0 !== t ? t : ""
                        })))
                    }, e._downloadMedia = function() {
                        return e.props.msg.downloadMedia({
                            downloadEvenIfExpensive: !0,
                            rmrReason: R.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                            isUserInitiated: !0
                        })
                    }, e
                }
                return (0, u.default)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.mediaData.mediaStage !== b.MEDIA_DATA_STAGE.RESOLVED && this.props.msg.downloadMedia({
                            downloadEvenIfExpensive: !0,
                            rmrReason: R.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                            isUserInitiated: !0
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.props.play();
                        var e = this.props.mediaData;
                        e && e.mediaStage === b.MEDIA_DATA_STAGE.RESOLVED && this.props.markRead(this.props.statusV3, this.props.msg)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.props.pause()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return f.default.createElement(D.default, {
                            mediaData: this.props.mediaData,
                            placeholderRenderer: this._renderPreviewImage,
                            downloadMedia: this._downloadMedia,
                            renderProgressively: !0
                        }, this._renderImage)
                    }
                }]), a
            }(f.PureComponent);
            q.CONCERNS = {
                mediaData: ["mediaStage", "renderableUrl", "preview", "fullWidth", "fullHeight", "aspectRatio", "fullPreviewData"]
            }, q.displayName = "_StatusV3Img";
            var X = (0, U.default)(q, q.CONCERNS),
                Z = function(e) {
                    (0, i.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        (0, l.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).refVideo = (0, f.createRef)(), e.setRefVideo = function(t) {
                            e.refVideo = t, e.props.playbackController.setVideo(e.refVideo.current)
                        }, e
                    }
                    return (0, u.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.mediaData;
                            e.streamable || e.isStreamable() || this.props.msg.downloadMedia({
                                downloadEvenIfExpensive: !0,
                                rmrReason: R.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                                isUserInitiated: !0
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.play();
                            var e = this.props.mediaData;
                            e && e.mediaStage === b.MEDIA_DATA_STAGE.RESOLVED && this.props.markRead(this.props.statusV3, this.props.msg)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.pause()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.msg,
                                n = t.mediaData,
                                r = t.onMouseDown,
                                o = t.onMouseUp,
                                l = n.mediaStage !== b.MEDIA_DATA_STAGE.RESOLVED,
                                u = (0, s.default)(j.default.playerContent, j.default.v3Video, {
                                    loading: l
                                });
                            return f.default.createElement("div", {
                                className: u,
                                onMouseDown: r,
                                onMouseUp: o
                            }, f.default.createElement(A.default, {
                                type: "contain",
                                size: {
                                    width: n.fullWidth,
                                    height: n.fullHeight
                                }
                            }, f.default.createElement("div", {
                                className: j.default.mediaViewer
                            }, f.default.createElement(z.default, {
                                msg: a,
                                mediaData: n,
                                autoPlay: !0,
                                refVideo: this.setRefVideo,
                                poster: null !== (e = te(n)) && void 0 !== e ? e : "",
                                disableContextMenu: !0
                            }, M.default.t(1559)), a && a.interactiveAnnotations && a.interactiveAnnotations.length > 0 && f.default.createElement(p.default, {
                                annotations: a.interactiveAnnotations,
                                onTooltipDisplay: this.props.onMouseDown,
                                onTooltipDismiss: this.props.onMouseUp
                            }))))
                        }
                    }]), a
                }(f.PureComponent);
            Z.CONCERNS = {
                mediaData: ["preview", "mediaStage", "fullWidth", "fullHeight", "streamable", "fullPreviewData"]
            }, Z.displayName = "_StatusV3Video";
            var J = (0, U.default)(Z, Z.CONCERNS),
                Q = function(e) {
                    (0, i.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        return (0, l.default)(this, a), t.apply(this, arguments)
                    }
                    return (0, u.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            P.default.load(this.props.msg.font).catch((function() {}))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, n = (0, Y.numCodepoints)(this.props.msg.body),
                                r = (0, o.default)({}, j.default[`font_${this.props.msg.font}`], !0);
                            return n <= 60 ? (t = (0, s.default)(j.default.text, j.default.textLarge, r), a = I.Configuration.StatusV3Text({
                                links: this.props.msg.getLinks()
                            })) : n <= 240 ? (t = (0, s.default)(j.default.text, j.default.textMedium, r), a = I.Configuration.StatusV3Text({
                                links: this.props.msg.getLinks()
                            })) : t = (0, s.default)(j.default.text, j.default.textSmall, r), f.default.createElement("div", {
                                className: (0, s.default)(j.default.playerContent, (e = {}, (0, o.default)(e, j.default.statusPanelPlayerContent, "status-panel" === this.props.theme), (0, o.default)(e, j.default.statusThumbnailPlayerContent, "status-thumbnail" === this.props.theme), (0, o.default)(e, j.default.textThumbnailPlayerContent, "text-thumb" === this.props.theme), e)),
                                onMouseDown: this.props.onMouseDown,
                                onMouseUp: this.props.onMouseUp
                            }, f.default.createElement("div", {
                                className: t
                            }, f.default.createElement(C.default, {
                                text: this.props.msg.body,
                                formatters: a
                            })))
                        }
                    }]), a
                }(f.PureComponent);

            function ee(e) {
                return f.default.createElement("div", {
                    className: j.default.playerContent,
                    onMouseDown: e.onMouseDown,
                    onMouseUp: e.onMouseUp
                }, f.default.createElement("div", {
                    className: j.default.unknown
                }, M.default.t(1447)))
            }

            function te(e) {
                return e ? e.fullPreviewData ? e.fullPreviewData.url() : e.preview ? e.preview.url() : null : null
            }
            t.StatusV3Text = Q, Q.displayName = "StatusV3Text";
            var ae = function(e) {
                    return (0, K.default)(e.mediaData, ["mediaStage"]).mediaStage !== b.MEDIA_DATA_STAGE.RESOLVED ? f.default.createElement("div", {
                        className: j.default.mediaStateControls
                    }, f.default.createElement("button", {
                        className: "icon-media-disabled"
                    }, f.default.createElement(F.default, {
                        size: 50,
                        stroke: 4,
                        color: "white"
                    }))) : null
                },
                ne = (0, L.default)((0, N.default)($));
            t.default = ne
        },
        27124: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = r(a(94184)),
                s = a(53615),
                c = n(a(67294)),
                f = r(a(34541)),
                p = r(a(34263)),
                m = a(14650),
                h = n(a(98569)),
                v = r(a(32855)),
                g = r(a(76568)),
                _ = r(a(89115)),
                C = a(87261),
                E = r(a(8643)),
                S = r(a(42027)),
                y = r(a(87729)),
                P = r(a(77630)),
                T = n(a(60879)),
                k = r(a(17394)),
                w = r(a(75131)),
                I = n(a(92631)),
                M = r(a(38512)),
                N = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a), (e = t.apply(this, arguments)).handleClickProgressBar = function(t) {
                            var a = e.state.iterator;
                            if ((!a || t !== a.msgIdx) && a) {
                                var n = e._statusV3Snapshot.statusAt(a, t);
                                n.isFulfilled() || e.setState({
                                    loading: !0
                                }), n.checkpoint(e.props.rejectOnUnmount()).then((function(t) {
                                    e.setState({
                                        iterator: t
                                    })
                                })).catchType(h.Unmount, (function() {})).catchType(m.EphemeralDrop, (function() {})).catchType(T.InvalidStatusV3Iterator, (function() {
                                    __LOG__(3)`Invalid iterator while getting next status msg`
                                })).catchType(T.StatusV3LoadingError, (function() {
                                    __LOG__(3)`No more status v3 while preloading next status`
                                })).finally((function() {
                                    e.setState({
                                        loading: !1
                                    })
                                }))
                            }
                        }, e._preloadNextStatus = function() {
                            var t = e.state.iterator;
                            t && e._statusV3Snapshot.hasNext(t) && e._statusV3Snapshot.getNext(t).checkpoint(e.props.rejectOnUnmount()).then((function(t) {
                                var a = e._statusV3Snapshot.statuses[t.statusIdx].msgs[t.msgIdx];
                                if (!a) throw new T.StatusV3MsgNotFound;
                                if (a.type === p.default.MSG_TYPE.CHAT) v.default.load(a.font).catch((function() {}));
                                else {
                                    var n = a.mediaData;
                                    n && n.mediaStage !== C.MEDIA_DATA_STAGE.RESOLVED && a.downloadMedia({
                                        downloadEvenIfExpensive: !0,
                                        rmrReason: E.default.WEBC_RMR_REASON_CODE.STATUS_V3,
                                        isUserInitiated: !1
                                    })
                                }
                            })).catchType(h.Unmount, (function() {})).catchType(m.EphemeralDrop, (function() {})).catchType(T.InvalidStatusV3Iterator, (function() {
                                __LOG__(3)`Invalid iterator while preloading next status`
                            })).catchType(T.StatusV3MsgNotFound, (function() {
                                __LOG__(3)`Error finding next status while preloading next status`
                            })).catchType(T.StatusV3LoadingError, (function() {
                                __LOG__(3)`No more status v3 while preloading next status`
                            }))
                        }, e.handlePrev = function() {
                            var t = e.state.iterator;
                            if (t && e._statusV3Snapshot.hasPrev(t)) {
                                var a = t.statusIdx;
                                e._statusV3Snapshot.getPrev(t).checkpoint(e.props.rejectOnUnmount()).then((function(t) {
                                    t.statusIdx === a ? e.setState({
                                        iterator: t
                                    }) : (e.setState({
                                        transitioning: !0
                                    }), (0, s.delayMs)(200).checkpoint(e.props.rejectOnUnmount()).then((function() {
                                        e.setState({
                                            iterator: t,
                                            transitioning: !1
                                        })
                                    })).catchType(h.Unmount, (function() {})))
                                })).catchType(h.Unmount, (function() {})).catchType(m.EphemeralDrop, (function() {})).catchType(T.InvalidStatusV3Iterator, (function() {
                                    __LOG__(3)`Invalid iterator while getting previous status msg`
                                })).catchType(T.StatusV3LoadingError, (function() {
                                    __LOG__(3)`No more status v3 while preloading next status`
                                }))
                            }
                        }, e.handleNext = function() {
                            var t = e.state.iterator;
                            if (t && e._statusV3Snapshot.hasNext(t)) {
                                var a = t.statusIdx,
                                    n = e._statusV3Snapshot.getNext(t);
                                n.isFulfilled() || e.setState({
                                    loading: !0
                                }), n.checkpoint(e.props.rejectOnUnmount()).then((function(t) {
                                    t.statusIdx === a ? e.setState({
                                        iterator: t
                                    }) : (e.setState({
                                        transitioning: !0,
                                        loading: !1
                                    }), (0, s.delayMs)(200).checkpoint(e.props.rejectOnUnmount()).then((function() {
                                        e.setState({
                                            iterator: t,
                                            transitioning: !1
                                        })
                                    })).catchType(h.Unmount, (function() {})))
                                })).catchType(h.Unmount, (function() {})).catchType(m.EphemeralDrop, (function() {})).catchType(T.InvalidStatusV3Iterator, (function() {
                                    __LOG__(3)`Invalid iterator while getting next status msg`, e.closeStatusViewer()
                                })).catchType(T.StatusV3LoadingError, (function() {
                                    __LOG__(3)`No more status v3 while preloading next status`
                                })).finally((function() {
                                    e.setState({
                                        loading: !1
                                    })
                                }))
                            } else e.closeStatusViewer()
                        }, e.markRead = function(t, a) {
                            if (a) {
                                var n = t.unreadCount,
                                    r = t.totalCount;
                                t.msgs.getModelsArray().findIndex((function(e) {
                                    return e === a
                                })) >= r - n && t.sendReadStatus(a.id, a.author);
                                var o = e._statusV3Snapshot.statuses.find((function(e) {
                                    return e.statusV3 === t
                                }));
                                o && o.readMsgKeys.push(a.id.toString())
                            }
                        }, e.closeStatusViewer = function(t) {
                            e.setState({
                                transitioning: !0
                            }), (0, s.delayMs)(200).checkpoint(e.props.rejectOnUnmount()).then((function() {
                                e.props.closeStatusViewer(t)
                            })).catchType(h.Unmount, (function() {}))
                        };
                        var n = e.props.initialStatusV3;
                        if (e.props.quotedMsgKey) {
                            e.state = {};
                            var r = e.props.quotedMsgKey,
                                l = n.msgs.getModelsArray().findIndex((function(e) {
                                    return e.id.toString() === r.toString()
                                }));
                            if (-1 !== l) {
                                e._statusV3Snapshot = new T.default(n, r);
                                var u = e._statusV3Snapshot.getFirstUnread(n, !0, r);
                                u.checkpoint(e.props.rejectOnUnmount()).then((function(t) {
                                    e.setState({
                                        iterator: t,
                                        loading: !1
                                    })
                                })).catchType(h.Unmount, (function() {})).catchType(m.EphemeralDrop, (function() {})).catchType(T.InvalidStatusV3Iterator, (function() {
                                    __LOG__(3)`Invalid iterator while loading first unread msg`, f.default.openToast(c.default.createElement(I.default, {
                                        msg: _.default.t(1440),
                                        id: (0, I.genId)()
                                    })), e.props.closeStatusViewer()
                                }))
                            } else e.state = {
                                loading: !0
                            }, n.loadMore(n.totalCount).then((function() {
                                (e.setState({
                                    loading: !1
                                }), -1 !== n.msgs.getModelsArray().findIndex((function(e) {
                                    return e.id.toString() === r.toString()
                                }))) ? (e._statusV3Snapshot = new T.default(n, r), e._statusV3Snapshot.getFirstUnread(n, !0, r).checkpoint(e.props.rejectOnUnmount()).then((function(t) {
                                    e.setState({
                                        iterator: t,
                                        loading: !1
                                    })
                                })).catchType(h.Unmount, (function() {})).catchType(m.EphemeralDrop, (function() {})).catchType(T.InvalidStatusV3Iterator, (function() {
                                    __LOG__(3)`Invalid iterator while loading first unread msg`, f.default.openToast(c.default.createElement(I.default, {
                                        msg: _.default.t(1440),
                                        id: (0, I.genId)()
                                    })), e.props.closeStatusViewer()
                                }))) : (e.props.onMsgNotFound && e.props.onMsgNotFound(), f.default.openToast(c.default.createElement(I.default, {
                                    msg: _.default.t(1440),
                                    id: (0, I.genId)()
                                })), e.props.closeStatusViewer())
                            })).catch((function() {
                                f.default.openToast(c.default.createElement(I.default, {
                                    msg: _.default.t(1440),
                                    id: (0, I.genId)()
                                })), e.props.closeStatusViewer()
                            })).finally((function() {
                                e.setState({
                                    loading: !1
                                })
                            }))
                        } else {
                            var i = e.props.initialStatusMsg;
                            e._statusV3Snapshot = new T.default(n);
                            var d = e._statusV3Snapshot.getFirstUnread(n, !0, i && i.id);
                            d.isFulfilled() ? e.state = {} : e.state = {
                                loading: !0
                            }, d.checkpoint(e.props.rejectOnUnmount()).then((function(t) {
                                e.setState({
                                    iterator: t,
                                    loading: !1
                                })
                            })).catchType(h.Unmount, (function() {})).catchType(m.EphemeralDrop, (function() {})).catchType(T.InvalidStatusV3Iterator, (function() {
                                __LOG__(3)`Invalid iterator while loading first unread msg`, f.default.openToast(c.default.createElement(I.default, {
                                    msg: _.default.t(1440),
                                    id: (0, I.genId)()
                                })), e.props.closeStatusViewer()
                            }))
                        }
                        return e
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this._preloadNextStatus()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this._preloadNextStatus()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, n, r, o, l, u, i = this,
                                s = this.state.iterator;
                            s && (o = (r = this._statusV3Snapshot).statuses[s.statusIdx], l = o.statusV3, u = o.msgs[s.msgIdx], r.hasPrev(s) && (a = c.default.createElement("div", {
                                className: k.default.chevronLeft
                            }, c.default.createElement(w.default, {
                                name: "chevron-left"
                            })), n = c.default.createElement("div", {
                                className: k.default.chevronLeftBg,
                                onClick: this.handlePrev
                            })), r.hasNext(s) && (e = c.default.createElement("div", {
                                className: k.default.chevronRight
                            }, c.default.createElement(w.default, {
                                name: "chevron-right"
                            })), t = c.default.createElement("div", {
                                className: k.default.chevronRightBg,
                                onClick: function() {
                                    i.handleNext(), i.markRead(l, u)
                                }
                            })));
                            var f, p = {
                                left: this.handlePrev,
                                right: this.handleNext
                            };
                            !this.state.transitioning && !this.state.loading && u && s && o && l && (f = c.default.createElement("div", {
                                className: k.default.playerContainer,
                                key: u.id
                            }, c.default.createElement(P.default, {
                                key: u.id,
                                statusV3: l,
                                msg: u,
                                mediaData: u.mediaData,
                                msgIdx: s.msgIdx,
                                totalMsgs: o.totalCount,
                                markRead: this.markRead,
                                closeStatusViewer: this.closeStatusViewer,
                                onClickProgressBar: this.handleClickProgressBar,
                                onNext: this.handleNext,
                                onPrev: this.handlePrev,
                                sessionId: this.props.sessionId,
                                rowIdx: this.props.rowIdx
                            })));
                            var m, h = (0, d.default)(k.default.v3X, {}),
                                v = c.default.createElement("button", {
                                    className: h,
                                    onClick: function() {
                                        return i.props.closeStatusViewer(!0)
                                    }
                                }, c.default.createElement(w.default, {
                                    name: "x-viewer"
                                })),
                                _ = (0, d.default)(k.default.backIcon, {}),
                                C = c.default.createElement("button", {
                                    className: _,
                                    onClick: function() {
                                        return i.props.closeStatusViewer()
                                    }
                                }, c.default.createElement(w.default, {
                                    name: "back",
                                    directional: !0
                                }));
                            return this.state.loading && (m = c.default.createElement("div", {
                                className: k.default.mediaStateControls
                            }, c.default.createElement("button", null, c.default.createElement(y.default, {
                                size: 50,
                                stroke: 4,
                                color: "white"
                            })))), c.default.createElement(g.default, {
                                handlers: p
                            }, c.default.createElement("div", {
                                className: k.default.viewer,
                                "data-animate-status-v3-viewer": !0
                            }, v, C, n, a, t, e, m, c.default.createElement(M.default, {
                                transitionName: "status-v3-player",
                                transitionAppear: !0
                            }, f)))
                        }
                    }]), a
                }(c.Component);
            N.displayName = "StatusV3Viewer";
            var O = (0, S.default)(N);
            t.default = O
        },
        9381: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(63038)),
                l = n(a(67294)),
                u = r(a(34263)),
                i = r(a(81997)),
                d = r(a(25259)),
                s = n(a(62647)),
                c = r(a(41769)),
                f = r(a(76568)),
                p = r(a(52933)),
                m = n(a(55090)),
                h = r(a(75741)),
                v = r(a(40746)),
                g = r(a(75131)),
                _ = r(a(79077)),
                C = r(a(43693)),
                E = r(a(4268)),
                S = n(a(56213)),
                y = function(e, t) {
                    var a = e.defaultText,
                        n = e.title,
                        r = e.onSend,
                        y = e.onBack,
                        P = (0, l.useState)(a),
                        T = (0, o.default)(P, 2),
                        k = T[0],
                        w = T[1],
                        I = (0, S.findFirstWebLink)(k),
                        M = (0, S.default)(I),
                        N = M.linkPreview,
                        O = M.clearLinkPreview,
                        b = n ? l.default.createElement(c.default, {
                            text: n,
                            direction: "auto",
                            titlify: !0,
                            ellipsify: !0
                        }) : null,
                        D = N || {},
                        R = D.title,
                        x = D.canonicalUrl,
                        A = D.description,
                        L = D.thumbnail,
                        F = N ? l.default.createElement(E.default, {
                            displayName: "ComposeBoxLinkPreview",
                            escapable: !0,
                            requestDismiss: O
                        }, l.default.createElement(h.default, {
                            onOmit: O
                        }, l.default.createElement(p.default, {
                            title: R,
                            compose: !0,
                            canonicalUrl: x,
                            description: A,
                            thumbnailJpeg: L
                        }))) : null;
                    return l.default.createElement(m.default, {
                        type: m.BoxModalType,
                        ref: t
                    }, l.default.createElement(i.default, null, l.default.createElement(s.default, {
                        type: s.DRAWER_HEADER_TYPE.POPUP,
                        onBack: y
                    }, b), l.default.createElement(d.default, null, l.default.createElement(f.default, {
                        className: C.default.container
                    }, l.default.createElement("div", {
                        className: C.default.inputContainer
                    }, l.default.createElement(_.default, {
                        a8n: "text-message-modal-text-unput",
                        value: k,
                        maxLength: u.default.MAX_TXT_MSG_SIZE,
                        onChange: function(e) {
                            w(e)
                        },
                        supportsEmoji: !0,
                        multiline: !0,
                        spellCheck: !0,
                        showRemaining: !0,
                        focusOnMount: !0,
                        theme: "small"
                    })), F)), l.default.createElement("div", {
                        className: C.default.btnContainer
                    }, l.default.createElement("div", {
                        className: C.default.btnPosition
                    }, l.default.createElement(v.default, {
                        large: !0,
                        onClick: function() {
                            k.length && r(k, N)
                        }
                    }, l.default.createElement(g.default, {
                        name: "send",
                        directional: !0
                    }))))))
                },
                P = (0, l.forwardRef)(y);
            t.default = P
        },
        66979: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = n(a(67294)),
                s = r(a(72283)),
                c = r(a(66015)),
                f = r(a(75300)),
                p = r(a(33079)),
                m = a(31230),
                h = r(a(89115)),
                v = r(a(8326)),
                g = a(92919),
                _ = a(53418),
                C = a(79164),
                E = r(a(75131)),
                S = a(88828),
                y = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a() {
                        return (0, o.default)(this, a), t.apply(this, arguments)
                    }
                    return (0, l.default)(a, [{
                        key: "_getCartIcon",
                        value: function() {
                            var e = this.props,
                                t = e.onCartClick,
                                a = e.cartCount,
                                n = e.catalogId;
                            if (t && n) {
                                var r = (0, S.isNumber)(a) && a > 0 ? a.toString() : void 0,
                                    o = (0, g.getOnCartClickWithLog)(t, n, (0, C.getProductCatalogContext)(this.context));
                                return d.default.createElement(_.MenuBarItem, {
                                    a8nText: "menu-bar-cart-link",
                                    icon: d.default.createElement(s.default, {
                                        theme: "inherit-color"
                                    }),
                                    text: r,
                                    title: h.default.t(424),
                                    onClick: o
                                })
                            }
                            return null
                        }
                    }, {
                        key: "_getMenuItems",
                        value: function() {
                            var e = this.props,
                                t = e.canManageCatalog,
                                a = e.onSendCatalog,
                                n = e.onOpenCollections,
                                r = e.onOpenSettings;
                            return t ? d.default.createElement(_.MenuBarItem, {
                                a8nText: "menu-bar-menu",
                                icon: d.default.createElement(E.default, {
                                    name: "menu"
                                }),
                                title: h.default.t(1046)
                            }, d.default.createElement(f.default, {
                                type: "dropdown_menu",
                                flipOnRTL: !0,
                                key: "CatalogDetailHeader",
                                dirX: "LEFT"
                            }, d.default.createElement(p.default, {
                                a8n: "mi-foward menu-item",
                                action: a
                            }, h.default.t(761)), n && d.default.createElement(p.default, {
                                a8n: "mi-collections menu-item",
                                action: n
                            }, h.default.t(548)), (0, m.canToggleCartOnOff)() && r && d.default.createElement(p.default, {
                                a8n: "mi-settings menu-item",
                                action: r
                            }, h.default.t(488)))) : d.default.createElement(_.MenuBarItem, {
                                a8nText: "menu-bar-catalog-link",
                                icon: d.default.createElement(v.default, null),
                                title: h.default.t(482),
                                onClick: a
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return d.default.createElement(d.default.Fragment, null, this._getCartIcon(), this._getMenuItems())
                        }
                    }]), a
                }(d.PureComponent);
            t.default = y, y.contextType = c.default, y.displayName = "DetailDrawerMenu"
        },
        51934: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(59713)),
                l = r(a(34575)),
                u = r(a(93913)),
                i = r(a(2205)),
                d = r(a(99842)),
                s = r(a(94184)),
                c = n(a(67294)),
                f = r(a(16973)),
                p = r(a(89729)),
                m = r(a(66015)),
                h = r(a(51376)),
                v = a(32002),
                g = a(31230),
                _ = r(a(89115)),
                C = a(85539),
                E = a(68708),
                S = a(79164),
                y = r(a(88577)),
                P = r(a(5548)),
                T = a(89305),
                k = r(a(75131)),
                w = r(a(23225)),
                I = function(e) {
                    (0, i.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        (0, l.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).handleProductDetail = function(t) {
                            var a = e.props,
                                n = a.onProductDetail;
                            a.shouldLog && (0, C.logProfileProductClick)({
                                product: (0, T.unproxy)(t),
                                catalogContext: (0, S.getProductCatalogContext)(e.context)
                            }), n(t)
                        }, e
                    }
                    return (0, u.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.shouldLog,
                                a = e.catalog;
                            t && null != a && (0, C.logBusinessProfileCatalogView)({
                                catalogOwnerWid: a.id,
                                catalogContext: (0, S.getProductCatalogContext)(this.context)
                            })
                        }
                    }, {
                        key: "_renderGallery",
                        value: function() {
                            var e, t = this,
                                a = this.props,
                                n = a.catalog,
                                r = a.filterProductId,
                                l = a.productsToShow,
                                u = a.hideIncompleteRows,
                                i = a.onProductCatalog,
                                d = a.showProductPlaceholders,
                                f = a.seeMoreOverlay,
                                m = [],
                                h = l,
                                v = void 0;
                            if ((0, g.canSeeBizProfileV3)() && (v = "largeGallerySpacing"), null != n ? (e = n.productCollection, m = n.productCollection.getProductModels(), u && m.length > 3 && (h = Math.min(l, m.length - m.length % 3)), m = (m = m.slice(0, h + 1)).filter((function(e) {
                                    return e.id.toString() !== r
                                })).map((function(e, a) {
                                    var r, o, l = null === (r = e.getPreviewImage()) || void 0 === r ? void 0 : r.mediaData;
                                    return l ? (f && a === h - 1 && n.productCollection.length > h - 1 && (o = _.default.t(1391)), c.default.createElement(P.default, {
                                        key: e.id.toString(),
                                        onClick: function() {
                                            return t.handleProductDetail(e)
                                        },
                                        mediaData: l,
                                        overlayContent: o,
                                        theme: v
                                    })) : c.default.createElement(c.default.Fragment, null)
                                })).slice(0, h)) : (e = new y.default).add({
                                    id: "_ph"
                                }), !m.length && !d) return null;
                            for (var C, T = p.default.addIcon; d && m.length < h;) m.push(c.default.createElement(w.default, {
                                key: `_ph${m.length}`,
                                onClick: i.bind(this, (0, S.getProductCatalogContext)(this.context)),
                                className: (0, s.default)(T, (0, o.default)({}, p.default.largeGallerySpacing, "largeGallerySpacing" === v)),
                                title: _.default.t(2)
                            }, c.default.createElement(c.default.Fragment, null))), T = p.default.placeholderThumb;
                            return (0, g.canSeeBizProfileV3)() && (C = "space-between"), c.default.createElement(E.Gallery, {
                                productMedias: m,
                                mediaCollection: e,
                                justify: C
                            })
                        }
                    }, {
                        key: "_renderCatalogEntryButton",
                        value: function() {
                            var e = this.props,
                                t = e.onProductCatalog,
                                a = e.catalogEntryLabel;
                            return null == a ? null : c.default.createElement("div", {
                                className: p.default.catalogEntryButton
                            }, c.default.createElement(f.default, {
                                a8nText: "catalog-entry-button",
                                type: "secondary",
                                onClick: t.bind(this, (0, S.getProductCatalogContext)(this.context))
                            }, a))
                        }
                    }, {
                        key: "_renderShopsLogo",
                        value: function() {
                            return this.props.showShopsLogo ? c.default.createElement("div", {
                                className: p.default.shopsLogo
                            }, c.default.createElement(k.default, {
                                name: "fbshops",
                                display: "inline"
                            })) : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.onProductCatalog,
                                a = e.title,
                                n = e.subtitle,
                                r = e.animation,
                                o = e.sectionTheme,
                                l = this._renderCatalogEntryButton(),
                                u = this._renderGallery(),
                                i = n ? c.default.createElement(v.FlexItem, {
                                    className: p.default.subtitle
                                }, n) : null,
                                d = c.default.createElement(v.FlexRow, {
                                    align: "center"
                                }, i, c.default.createElement(v.FlexItem, null, c.default.createElement(k.default, {
                                    className: p.default.chevron,
                                    name: "chevron-right-alt",
                                    directional: !0
                                })));
                            return c.default.createElement(h.default, {
                                title: a || _.default.t(1300),
                                titleOnClick: t.bind(this, (0, S.getProductCatalogContext)(this.context)),
                                subtitle: d,
                                theme: o,
                                animation: r
                            }, u, l, this._renderShopsLogo())
                        }
                    }]), a
                }(c.Component);
            t.default = I, I.contextType = m.default, I.defaultProps = {
                productsToShow: 6,
                sectionTheme: "padding",
                hideIncompleteRows: !1
            }, I.displayName = "CatalogDrawerSection"
        },
        46991: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = n(a(67294)),
                s = r(a(73040)),
                c = r(a(10598)),
                f = r(a(34541)),
                p = r(a(55523)),
                m = n(a(42575)),
                h = r(a(81997)),
                v = r(a(25259)),
                g = r(a(66015)),
                _ = n(a(62647)),
                C = r(a(89115)),
                E = r(a(28669)),
                S = a(85539),
                y = r(a(45706)),
                P = a(79164),
                T = r(a(90356)),
                k = r(a(78724)),
                w = a(64478),
                I = "catalog-link-anchor",
                M = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(r)))._handleCatalogLinkClick = function(t) {
                            t.preventDefault(), e._handleSendCatalogLinkClick()
                        }, e._handleSendCatalogLinkClick = function() {
                            var t = e.props,
                                a = t.catalog,
                                n = t.onSend;
                            f.default.openModal(d.default.createElement(T.default, {
                                catalog: a,
                                onSend: n
                            }), {
                                transition: "modal-flow"
                            }), (0, S.logShareCatalogViaWALinkClick)({
                                catalogOwnerWid: a.id,
                                catalogContext: (0, P.getProductCatalogContext)(e.context)
                            })
                        }, e._handleCopyLinkClick = function() {
                            var t = e.props.catalog;
                            (0, S.logShareCatalogCopyLinkClick)({
                                catalogOwnerWid: t.id,
                                catalogContext: (0, P.getProductCatalogContext)(e.context)
                            })
                        }, e
                    }
                    return (0, l.default)(a, [{
                        key: "render",
                        value: function() {
                            var e, t, a = this.props,
                                n = a.onBack,
                                r = a.onCancel,
                                o = a.catalog,
                                l = a.contact,
                                u = a.prompt,
                                i = a.centerDrawer,
                                f = d.default.createElement(m.default, {
                                    id: l.id,
                                    size: 82,
                                    quality: m.DETAIL_IMAGE_QUALITY.HIGH
                                });
                            return i && (e = "labels", t = "center-column"), d.default.createElement(h.default, {
                                key: "catalog-link-drawer",
                                theme: e
                            }, d.default.createElement(_.default, {
                                a8n: "catalog-link-title",
                                title: C.default.t(482),
                                onBack: n,
                                onCancel: r,
                                type: _.DRAWER_HEADER_TYPE.SMALL
                            }), d.default.createElement(v.default, {
                                theme: t
                            }, d.default.createElement("div", {
                                className: s.default.prompt
                            }, u), d.default.createElement(c.default, {
                                image: f,
                                primary: d.default.createElement(y.default, {
                                    contact: l,
                                    useVerifiedName: !0
                                }),
                                theme: "identity",
                                secondary: d.default.createElement(E.default, {
                                    id: I,
                                    href: (0, w.createCatalogLink)(o.id.user),
                                    onClick: this._handleCatalogLinkClick,
                                    noHandle: !0
                                })
                            }), d.default.createElement(k.default, {
                                onClick: this._handleSendCatalogLinkClick
                            }), d.default.createElement(p.default, {
                                elementId: I,
                                onClick: this._handleCopyLinkClick
                            })))
                        }
                    }]), a
                }(d.Component);
            t.default = M, M.contextType = g.default, M.displayName = "CatalogLinkDrawer"
        },
        91549: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return i.apply(this, arguments)
            };
            var r = n(a(87757)),
                o = n(a(48926)),
                l = n(a(93250)),
                u = a(31230);

            function i() {
                return (i = (0, o.default)(r.default.mark((function e(t) {
                    var a, n, o;
                    return r.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((0, u.cartPropEnabled)()) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 2:
                                if ((n = l.default.get(t)) && !n.stale) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6, l.default.update(t);
                            case 6:
                                o = e.sent, n = Array.isArray(o) ? o[0] : o;
                            case 8:
                                return e.abrupt("return", (null === (a = n.profileOptions) || void 0 === a ? void 0 : a.cartEnabled) || !1);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        29607: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = n(a(67294)),
                s = r(a(72283)),
                c = r(a(66015)),
                f = r(a(75300)),
                p = r(a(33079)),
                m = r(a(89115)),
                h = r(a(8326)),
                v = a(92919),
                g = a(53418),
                _ = a(79164),
                C = r(a(75131)),
                E = a(88828),
                S = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a() {
                        return (0, o.default)(this, a), t.apply(this, arguments)
                    }
                    return (0, l.default)(a, [{
                        key: "_getCartIcon",
                        value: function() {
                            var e = this.props,
                                t = e.onCartClick,
                                a = e.cartCount,
                                n = e.catalogId;
                            if (t && n) {
                                var r = (0, E.isNumber)(a) && a > 0 ? a.toString() : void 0,
                                    o = (0, v.getOnCartClickWithLog)(t, n, (0, _.getProductCatalogContext)(this.context));
                                return d.default.createElement(g.MenuBarItem, {
                                    a8nText: "menu-bar-cart-link",
                                    icon: d.default.createElement(s.default, null),
                                    text: r,
                                    title: m.default.t(424),
                                    onClick: o
                                })
                            }
                            return null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.onSendProduct,
                                a = e.onReportProduct,
                                n = e.onProductLinkClick;
                            return d.default.createElement(d.default.Fragment, null, this._getCartIcon(), d.default.createElement(g.MenuBarItem, {
                                a8nText: "menu-bar-product-link",
                                icon: d.default.createElement(h.default, null),
                                title: m.default.t(1277),
                                onClick: n
                            }), d.default.createElement(g.MenuBarItem, {
                                a8nText: "menu-bar-menu",
                                icon: d.default.createElement(C.default, {
                                    name: "menu"
                                }),
                                title: m.default.t(1046)
                            }, d.default.createElement(f.default, {
                                type: "dropdown_menu",
                                flipOnRTL: !0,
                                key: "ProductDetailHeader",
                                dirX: "LEFT"
                            }, d.default.createElement(p.default, {
                                a8n: "mi-send menu-item",
                                action: t
                            }, m.default.t(1419)), d.default.createElement(p.default, {
                                a8n: "mi-report menu-item",
                                action: a
                            }, m.default.t(1328)))))
                        }
                    }]), a
                }(d.PureComponent);
            t.default = S, S.contextType = c.default, S.displayName = "DetailDrawerMenu"
        },
        71719: (e, t, a) => {
            "use strict";
            var n = a(20862);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseErrorState = function(e, t) {
                if (e instanceof o.Unmount);
                else if (e instanceof r.ServerStatusCodeError) "not_found" === e.status || 404 === e.status ? t("NOT_FOUND") : (t("ERROR"), __LOG__(3)`parseErrorState:Failed to fetch from server`);
                else {
                    if (!(e instanceof r.WebdDrop)) throw t("ERROR"), e;
                    t("ERROR"), __LOG__(3)`parseErrorState:Failed to fetch due to WebdDrop`
                }
            };
            var r = a(14650),
                o = n(a(98569))
        },
        19539: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.fetchState;
                switch (t) {
                    case "NONE":
                    case "SUCCESS":
                        return null;
                    case "PENDING":
                        return l.default.createElement("div", {
                            className: (0, o.default)(i.default.loadingContainer)
                        }, l.default.createElement(d.default, {
                            size: 14,
                            color: d.colorOptions.highlight
                        }), l.default.createElement(s.TextSpan, {
                            className: (0, o.default)(i.default.text, i.default.loadingText),
                            theme: "small"
                        }, u.default.t(1299)));
                    case "NOT_FOUND":
                    case "ERROR":
                        return l.default.createElement("div", {
                            className: (0, o.default)(i.default.loadingContainer)
                        }, l.default.createElement(s.TextSpan, {
                            className: i.default.text,
                            theme: "small",
                            color: "danger"
                        }, "NOT_FOUND" === t ? u.default.t(1285) : u.default.t(1271)));
                    default:
                        throw new Error(`invalid fetchState ${t}`)
                }
            };
            var o = r(a(94184)),
                l = r(a(67294)),
                u = r(a(89115)),
                i = r(a(35769)),
                d = n(a(87729)),
                s = a(28770)
        },
        8326: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return l.default.createElement(i.default, {
                    name: "link",
                    className: (0, o.default)(u.default.linkIcon, (0, r.default)({}, u.default.inheritColor, "inherit-color" === e.theme))
                })
            };
            var r = n(a(59713)),
                o = n(a(94184)),
                l = n(a(67294)),
                u = n(a(52160)),
                i = n(a(75131))
        },
        28669: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.id,
                    a = e.href,
                    n = e.onClick,
                    u = e.noHandle;
                return r.default.createElement("span", {
                    className: o.default.linkContainer
                }, r.default.createElement(l.SelectableLink, {
                    id: t,
                    href: a,
                    className: o.default.activeLink,
                    selectable: !0,
                    onClick: n,
                    "data-nohandle": u
                }, a))
            };
            var r = n(a(67294)),
                o = n(a(78097)),
                l = a(36474)
        },
        16452: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                r = a(20862),
                o = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleProductDelete = function(e, t, a) {
                return (0, m.logDeleteProductClick)(t, 1, a), new n((function(n, r) {
                    s.default.openModal(d.default.createElement(c.default, {
                        title: p.default.t(459),
                        okText: p.default.t(1865),
                        cancelText: p.default.t(1694),
                        onOK: function() {
                            s.default.closeModal(),
                                function(e, t, a) {
                                    return (0, v.deleteProducts)([t.id.toString()]).then((function() {
                                        return (0, m.logDeleteProductSuccess)(t, 1, a), e.productCollection.evictImagesFromCache(t.id.toString()), e.productCollection.remove(t.id.toString()), e.collections.forEach((function(e) {
                                            return e.productCollection.remove(t.id.toString())
                                        })), !0
                                    })).catchType(f.ServerStatusCodeError, (function(e) {
                                        return (0, m.logDeleteProductFailed)(t, 1, a, e.statusCode), s.default.openToast(d.default.createElement(E.default, {
                                            msg: p.default.t(460),
                                            id: (0, E.genId)("catalog_delete_product_failed")
                                        })), !1
                                    }))
                                }(e, t, a).then((function(e) {
                                    return n(e)
                                })).catch((function(e) {
                                    return r(e)
                                }))
                        },
                        onCancel: function() {
                            s.default.closeModal(), n(!1)
                        }
                    }, d.default.createElement("div", null, p.default.t(458))))
                }))
            }, t.handleProductVisibilityChange = function(e, t, a) {
                var r = t.id.toString(),
                    o = !t.isHidden;
                o ? (0, m.logCatalogProductHideClick)(r, a) : (0, m.logCatalogProductShowClick)(r, a);
                return new n((function(n, l) {
                    var u = t.isHidden ? p.default.t(479) : p.default.t(470);
                    s.default.openModal(d.default.createElement(c.default, {
                        okText: p.default.t(1865),
                        cancelText: p.default.t(1694),
                        onOK: function() {
                            s.default.closeModal(),
                                function() {
                                    return S.apply(this, arguments)
                                }(e, t).then((function() {
                                    o ? (0, m.logCatalogProductHideSuccess)(r, a) : (0, m.logCatalogProductShowSuccess)(r, a), n(!0)
                                })).catch((function(e) {
                                    o ? (0, m.logCatalogProductHideFailed)(r, a) : (0, m.logCatalogProductShowFailed)(r, a), l(e)
                                }))
                        },
                        onCancel: function() {
                            s.default.closeModal(), o ? (0, m.logCatalogProductHideCancelled)(r, a) : (0, m.logCatalogProductShowCancelled)(r, a), n(!1)
                        }
                    }, d.default.createElement("div", null, u)))
                }))
            }, t.handleCollectionDelete = function(e, t, a) {
                return new n((function(n, r) {
                    s.default.openModal(d.default.createElement(c.default, {
                        title: p.default.t(447),
                        okText: p.default.t(1865),
                        cancelText: p.default.t(1694),
                        onOK: function() {
                            s.default.closeModal(),
                                function(e, t, a) {
                                    return (0, C.deleteCollection)(t.id.toString(), a.session.sessionId.toString()).then((function() {
                                        return e.collections.remove(t.id.toString()), (0, h.logCollectionDeleted)({
                                            catalogContext: a,
                                            collectionId: t.id
                                        }), !0
                                    })).catchType(f.ServerStatusCodeError, (function() {
                                        return s.default.openToast(d.default.createElement(E.default, {
                                            msg: p.default.t(444),
                                            id: (0, E.genId)("catalog_delete_product_failed")
                                        })), !1
                                    }))
                                }(e, t, a).then((function(e) {
                                    return n(e)
                                })).catch((function(e) {
                                    return r(e)
                                }))
                        },
                        onCancel: function() {
                            s.default.closeModal(), n(!1)
                        }
                    }, d.default.createElement("div", null, p.default.t(445))))
                }))
            }, t.handleCollectionSave = function(e, t, a, n, r, o) {
                return (t ? (0, C.editCollection)(t.id.toString() || "", a === t.name ? void 0 : a, !1, n.map((function(e) {
                    return e.id.toString()
                })), r.map((function(e) {
                    return e.id.toString()
                })), "").then((function(r) {
                    return t.name = a, t.reviewStatus = r.reviewStatus, t.productCollection.reset(), t.productCollection.add(n), e.collections.replaceId(t.id, r.id), !0
                })) : (0, C.createCollection)(a, n.map((function(e) {
                    return e.id.toString()
                })), "").then((function(t) {
                    (0, h.logCollectionCreated)({
                        catalogContext: o,
                        collectionId: t.id,
                        productCount: n.length
                    });
                    var r = new _.default;
                    return r.id = t.id, r.reviewStatus = t.reviewStatus, r.isHidden = !1, r.name = a, r.totalItemsCount = n.length, r.productCollection.add(n, {
                        merge: !0
                    }), e.collections.add(r), !0
                }))).catch((function(e) {
                    var t = p.default.t(457);
                    return "not-acceptable" === e.text && "products" === e.fieldName && "duplicate" === e.fieldReason && (t = p.default.t(456)), s.default.openToast(d.default.createElement(E.default, {
                        msg: t,
                        id: (0, E.genId)("catalog_save_collection_failed")
                    })), !1
                }))
            };
            var l = o(a(87757)),
                u = o(a(319)),
                i = o(a(48926)),
                d = o(a(67294)),
                s = o(a(34541)),
                c = o(a(25960)),
                f = a(14650),
                p = o(a(89115)),
                m = a(85539),
                h = a(45184),
                v = a(59078),
                g = a(86763),
                _ = o(a(61921)),
                C = a(12989),
                E = r(a(92631));

            function S() {
                return (S = (0, i.default)(l.default.mark((function e(t, a) {
                    return l.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.productVisibilitySet)([{
                                    productId: a.id.toString(),
                                    isHidden: !a.isHidden
                                }]);
                            case 2:
                                a.isHidden = !a.isHidden, [t.productCollection].concat((0, u.default)((t.collections || []).map((function(e) {
                                    return e.productCollection
                                })))).forEach((function(e) {
                                    var t = e.get(a.id);
                                    t && (t.isHidden = a.isHidden)
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        65389: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = e.onClick,
                    n = (0, o.default)(u.default.addItemButton, (t = {}, (0, r.default)(t, u.default.themeDefault, "default" === e.theme), (0, r.default)(t, u.default.themeInList, "in-list" === e.theme), (0, r.default)(t, u.default.themeCollections, "collections" === e.theme), t));
                return l.default.createElement(i.default, {
                    theme: "add-item",
                    image: l.default.createElement("div", {
                        className: u.default.addIcon
                    }),
                    customImage: !0,
                    primary: e.title || d.default.t(440),
                    className: n,
                    onClick: a,
                    idle: e.idle,
                    a8n: "add-item"
                })
            };
            var r = n(a(59713)),
                o = n(a(94184)),
                l = n(a(67294)),
                u = n(a(26886)),
                i = n(a(10598)),
                d = n(a(89115))
        },
        58897: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                switch (e.collection.reviewStatus) {
                    case i.PRODUCT_REVIEW_STATUS.PENDING:
                        return r.default.createElement("div", {
                            className: l.default.pendingBanner
                        }, u.default.t(547), r.default.createElement("div", {
                            className: l.default.iconContainerPending
                        }, r.default.createElement(d.default, {
                            name: "info"
                        })));
                    case i.PRODUCT_REVIEW_STATUS.REJECTED:
                        return r.default.createElement("div", {
                            className: l.default.rejectedBanner
                        }, u.default.t(549), r.default.createElement(o.default, {
                            onClick: function() {
                                e.onEditCollection && e.onEditCollection(e.collection)
                            }
                        }, u.default.t(550)), r.default.createElement("div", {
                            className: l.default.iconContainerRejected
                        }, r.default.createElement(d.default, {
                            name: "info"
                        })));
                    default:
                        return null
                }
            };
            var r = n(a(67294)),
                o = n(a(76)),
                l = n(a(7105)),
                u = n(a(89115)),
                i = a(88577),
                d = n(a(75131))
        },
        53423: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = n(a(67294)),
                s = a(16452),
                c = r(a(34541)),
                f = r(a(34263)),
                p = r(a(66015)),
                m = r(a(60482)),
                h = r(a(55959)),
                v = a(85539),
                g = a(79164),
                _ = r(a(78509)),
                C = r(a(44589)),
                E = a(89305),
                S = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            openedProductId: void 0
                        }, e.handleProductDetail = function(t, a) {
                            var n = e.props.onProductDetail;
                            return (0, v.logCatalogListDetailClick)({
                                product: (0, E.unproxy)(t),
                                catalogContext: a
                            }), e.setState({
                                openedProductId: t.id.toString()
                            }), n(t)
                        }, e.handleProductShare = function(t) {
                            var a = e.props.onProductShare;
                            a && a(t)
                        }, e.handleProductDelete = function(t, a) {
                            var n = e.props.catalog;
                            (0, s.handleProductDelete)(n, t, a).then((function() {
                                t.id === e.state.openedProductId && (c.default.closeDrawerMid(), e.setState({
                                    openedProductId: void 0
                                }))
                            }))
                        }, e.handleProductHideShow = function(t, a) {
                            var n = e.props.catalog;
                            (0, s.handleProductVisibilityChange)(n, t, a)
                        }, e.renderItem = function(t) {
                            var a = t.product,
                                n = e.props,
                                r = n.onCartOpen,
                                o = n.shareLinks;
                            return d.default.createElement(p.default.Consumer, null, (function(t) {
                                var n = (0, g.getProductCatalogContext)(t);
                                return d.default.createElement(_.default, {
                                    product: a,
                                    onCartOpen: r,
                                    onClick: function() {
                                        return e.handleProductDetail(a, n)
                                    },
                                    onProductShare: o ? e.handleProductShare : null,
                                    onProductDelete: function(t) {
                                        return e.handleProductDelete(t, n)
                                    },
                                    onProductHideShow: function(t) {
                                        return e.handleProductHideShow(t, n)
                                    },
                                    canManageCatalog: e.props.canManageCatalog
                                })
                            }))
                        }, e
                    }
                    return (0, l.default)(a, [{
                        key: "getData",
                        value: function() {
                            var e = this.props,
                                t = e.catalog,
                                a = void 0 !== e.onCartOpen;
                            return t.productCollection.getProductModels(this.props.canManageCatalog).map((function(e) {
                                return {
                                    itemKey: `${e.id.toString()}_${a.toString()}`,
                                    product: e
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.catalog;
                            return e.productCollection && e.productCollection.getProductModels(this.props.canManageCatalog).length ? d.default.createElement(h.default, {
                                flatListControllers: [this.props.flatListController]
                            }, d.default.createElement(m.default, {
                                flatListController: this.props.flatListController,
                                direction: "vertical",
                                forceConsistentRenderCount: !1,
                                data: this.getData(),
                                renderItem: this.renderItem,
                                defaultItemHeight: f.default.PRODUCT_LIST_ITEM_HEIGHT
                            })) : null
                        }
                    }]), a
                }(d.Component);
            S.CONCERNS = {
                catalog: ["productCollection", "afterCursor", "id", "index"]
            }, S.displayName = "ProductCatalogList";
            var y = (0, C.default)(S, S.CONCERNS);
            t.default = y
        },
        61418: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.CatalogViewDrawer = void 0;
            var o = r(a(87757)),
                l = r(a(48926)),
                u = r(a(34575)),
                i = r(a(93913)),
                d = r(a(2205)),
                s = r(a(99842)),
                c = r(a(96486)),
                f = n(a(67294)),
                p = r(a(65389)),
                m = r(a(73293)),
                h = r(a(10725)),
                v = r(a(66979)),
                g = a(78271),
                _ = r(a(23628)),
                C = r(a(91549)),
                E = r(a(74101)),
                S = r(a(34263)),
                y = r(a(81997)),
                P = r(a(25259)),
                T = n(a(62647)),
                k = a(71719),
                w = r(a(19539)),
                I = r(a(50842)),
                M = r(a(96658)),
                N = r(a(22021)),
                O = r(a(89115)),
                b = r(a(68390)),
                D = r(a(37303)),
                R = r(a(63128)),
                x = r(a(31483)),
                A = r(a(42027)),
                L = r(a(44589)),
                F = function(e) {
                    (0, d.default)(n, e);
                    var t, a = (0, s.default)(n);

                    function n(e) {
                        var t;
                        (0, u.default)(this, n), (t = a.call(this, e))._catalogFlatListController = new I.default, t._handleScroll = function(e, a) {
                            var n, r;
                            t.props.setScrollOffset && t.props.setScrollOffset(a.scrollTop), (null === (n = t.state.scrollHelper) || void 0 === n ? void 0 : n.willLoadMore(a)) && t.setState({
                                loadingMore: !0
                            }), null === (r = t.state.scrollHelper) || void 0 === r || r.onScroll(e, a).then((function(e) {
                                e && t.setState({
                                    loadingMore: !1
                                })
                            })).catch((function(e) {
                                throw t.setState({
                                    loadingMore: !1
                                }), e
                            }))
                        }, t.handleScroll = c.default.throttle(t._handleScroll, 100), t.onScroll = function(e) {
                            t.handleScroll(e, e.currentTarget)
                        }, t._handleCartChange = function() {
                            var e = t.state.cart.itemCount;
                            t.state.cartCount !== e && t.setState({
                                cartCount: e
                            })
                        }, t._handleCartClick = function() {
                            var e = t.props,
                                a = e.contact,
                                n = e.onCartClick;
                            n && n(a.id.toString())
                        }, t._handleCatalogLinkClick = function() {
                            var e = t.state.catalog,
                                a = t.props,
                                n = a.onCatalogLinkClick,
                                r = a.contact;
                            e && n(e, r)
                        };
                        var r = m.default.findCart(t.props.contact.id.toString());
                        return t.state = {
                            cartEnabled: !1,
                            catalog: null,
                            cartCount: r.itemCount,
                            catalogFetchState: "NONE",
                            dataSource: null,
                            scrollHelper: null,
                            loadingMore: !0,
                            cart: r
                        }, t
                    }
                    return (0, i.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.catalogId,
                                n = t.listeners;
                            this._setupCatalog(), (0, C.default)(a).then((function(t) {
                                e.setState({
                                    cartEnabled: t
                                }), t && n.add(e.state.cart, "all", e._handleCartChange)
                            }))
                        }
                    }, {
                        key: "_setupCatalog",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.catalogId,
                                n = t.rejectOnUnmount,
                                r = t.canManageCatalog,
                                o = t.scrollOffset;
                            h.default.find(a).checkpoint(n()).then((function(t) {
                                var a = new g.CatalogWithCollectionsDataSource(t, r || !1, S.default.PRODUCT_LIST_ITEM_HEIGHT),
                                    n = new g.CatalogListItemScrollHelper(a);
                                e.setState({
                                    catalog: t,
                                    dataSource: a,
                                    scrollHelper: n,
                                    catalogFetchState: "SUCCESS"
                                }, (function() {
                                    e.loadInitialItems(), e._watchProductCollection(), void 0 !== o && e._catalogFlatListController.setScrollFromStart(o)
                                }))
                            })).catch((function(t) {
                                (0, k.parseErrorState)(t, (function(t) {
                                    return e.setState({
                                        catalogFetchState: t,
                                        loadingMore: !1
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "_watchProductCollection",
                        value: function() {
                            var e = this,
                                t = this.state.catalog;
                            this.props.autoUpdate && null != t && (t.productCollection.on("add", c.default.debounce((function() {
                                return e.forceUpdate()
                            }), 100)), t.productCollection.on("remove", c.default.debounce((function() {
                                return e.forceUpdate()
                            }), 100)), t.collections.on("add", c.default.debounce((function() {
                                return e.forceUpdate()
                            }), 100)), t.collections.on("remove", c.default.debounce((function() {
                                return e.forceUpdate()
                            }), 100)))
                        }
                    }, {
                        key: "_getDrawerContent",
                        value: function() {
                            var e, t, a, n = this.state,
                                r = n.catalog,
                                o = n.cartEnabled,
                                l = n.dataSource,
                                u = this.props,
                                i = u.contact,
                                d = u.businessProfile,
                                s = u.canManageCatalog,
                                c = u.onAddProduct,
                                m = u.onCartClick,
                                h = o && m ? this._handleCartClick : void 0;
                            return s && c && (e = f.default.createElement(p.default, {
                                onClick: function() {
                                    return c()
                                },
                                theme: "collections"
                            })), r && l ? (t = f.default.createElement(R.default, {
                                onCartOpen: h,
                                onProductDetail: this.props.onProductDetail,
                                flatListController: this._catalogFlatListController,
                                catalog: r,
                                canManageCatalog: this.props.canManageCatalog,
                                shareLinks: this.props.canManageCatalog,
                                onProductShare: this.props.onProductShare,
                                onCollectionSeeAll: this.props.onCollectionSeeAll,
                                data: l.getData(),
                                onEditCollection: this.props.onEditCollection
                            }), N.default.supportsFeature(N.default.F.MD_BACKEND) && (a = f.default.createElement(D.default, null, f.default.createElement(E.default, {
                                onClick: this.props.onOpenCollections
                            })))) : t = f.default.createElement(w.default, {
                                fetchState: this.state.catalogFetchState
                            }), f.default.createElement(f.default.Fragment, null, d && f.default.createElement("div", {
                                className: _.default.header
                            }, f.default.createElement(x.default, {
                                profilePicThumb: i.getProfilePicThumb(),
                                contact: i,
                                businessProfile: d
                            })), f.default.createElement("div", {
                                className: _.default.list
                            }, a, e, t, this.state.loadingMore && f.default.createElement(M.default, null)))
                        }
                    }, {
                        key: "loadInitialItems",
                        value: (t = (0, l.default)(o.default.mark((function e() {
                            var t;
                            return o.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = this.state.dataSource, e.next = 3, null == t ? void 0 : t.loadInitialItems();
                                    case 3:
                                        this.setState({
                                            loadingMore: !1
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "_renderDrawerMenu",
                        value: function() {
                            var e = this.state.cartEnabled ? this._handleCartClick : void 0;
                            return f.default.createElement(v.default, {
                                onSendCatalog: this._handleCatalogLinkClick,
                                onCartClick: e,
                                cartCount: this.state.cart.itemCount,
                                catalogId: this.props.catalogId.toString(),
                                canManageCatalog: this.props.canManageCatalog,
                                onOpenCollections: this.props.onOpenCollections,
                                onOpenSettings: this.props.onOpenSettings
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return f.default.createElement(y.default, {
                                theme: "products",
                                onDrop: this.props.onBack
                            }, f.default.createElement(T.default, {
                                title: O.default.t(1272),
                                type: this.props.headerType || T.DRAWER_HEADER_TYPE.SMALL,
                                onBack: this.props.onBack,
                                menu: this._renderDrawerMenu()
                            }), f.default.createElement(P.default, {
                                onScroll: this.onScroll,
                                flatListControllers: [this._catalogFlatListController]
                            }, this._getDrawerContent()))
                        }
                    }]), n
                }(f.Component);
            t.CatalogViewDrawer = F, F.CONCERNS = {
                contact: ["id"]
            }, F.displayName = "CatalogViewDrawer";
            var U = (0, A.default)((0, b.default)((0, L.default)(F, F.CONCERNS)));
            t.default = U
        },
        96438: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.CollectionContentDrawer = void 0;
            var o = r(a(87757)),
                l = r(a(48926)),
                u = r(a(34575)),
                i = r(a(93913)),
                d = r(a(2205)),
                s = r(a(99842)),
                c = r(a(96486)),
                f = n(a(67294)),
                p = r(a(65389)),
                m = r(a(73293)),
                h = r(a(10725)),
                v = r(a(66979)),
                g = a(78271),
                _ = r(a(91549)),
                C = r(a(83669)),
                E = r(a(58897)),
                S = r(a(34263)),
                y = r(a(81997)),
                P = r(a(25259)),
                T = r(a(66015)),
                k = n(a(62647)),
                w = a(71719),
                I = r(a(19539)),
                M = r(a(50842)),
                N = r(a(96658)),
                O = r(a(89115)),
                b = r(a(68390)),
                D = a(45184),
                R = a(79164),
                x = r(a(63128)),
                A = r(a(42027)),
                L = r(a(44589)),
                F = function(e) {
                    (0, d.default)(n, e);
                    var t, a = (0, s.default)(n);

                    function n(e) {
                        var t;
                        (0, u.default)(this, n), (t = a.call(this, e))._collectionFlatListController = new M.default, t._handleCartChange = function() {
                            var e = t.state.cart.itemCount;
                            t.state.cartCount !== e && t.setState({
                                cartCount: e
                            })
                        }, t._handleCartClick = function() {
                            var e = t.props,
                                a = e.contact,
                                n = e.onCartClick;
                            n && n(a.id.toString())
                        }, t._handleCatalogLinkClick = function() {
                            var e = t.state.catalog;
                            if (e) {
                                var a = t.props;
                                (0, a.onCatalogLinkClick)(e, a.contact)
                            }
                        }, t._handleScroll = function(e, a) {
                            var n, r;
                            t.props.setScrollOffset && t.props.setScrollOffset(a.scrollTop), (null === (n = t.state.scrollHelper) || void 0 === n ? void 0 : n.willLoadMore(a)) && t.setState({
                                loadingMore: !0
                            }), null === (r = t.state.scrollHelper) || void 0 === r || r.onScroll(e, a).then((function(e) {
                                e && t.setState({
                                    loadingMore: !1
                                })
                            })).catch((function(e) {
                                throw t.setState({
                                    loadingMore: !1
                                }), e
                            }))
                        }, t.handleScroll = c.default.throttle(t._handleScroll, 100), t.onScroll = function(e) {
                            t.handleScroll(e, e.currentTarget)
                        };
                        var r = m.default.findCart(t.props.contact.id.toString());
                        return t.state = {
                            cartEnabled: !1,
                            catalog: null,
                            cartCount: r.itemCount,
                            catalogFetchState: "NONE",
                            dataSource: null,
                            scrollHelper: null,
                            loadingMore: !0,
                            cart: r
                        }, t
                    }
                    return (0, i.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.catalogId,
                                n = t.listeners;
                            this._setupCatalog(), (0, _.default)(a).then((function(t) {
                                e.setState({
                                    cartEnabled: t
                                }), t && n.add(e.state.cart, "all", e._handleCartChange)
                            }))
                        }
                    }, {
                        key: "_setupCatalog",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.canManageCatalog,
                                n = t.catalogId,
                                r = t.rejectOnUnmount,
                                o = t.scrollOffset;
                            h.default.find(n).then((function(t) {
                                var n;
                                e.setState({
                                    catalog: t,
                                    catalogFetchState: "SUCCESS"
                                });
                                var r = new g.SingleCollectionDataSource(t, null === (n = e.props.collection) || void 0 === n ? void 0 : n.id.toString(), a || !1, S.default.PRODUCT_LIST_ITEM_HEIGHT),
                                    l = new g.CatalogListItemScrollHelper(r);
                                e.setState({
                                    dataSource: r,
                                    scrollHelper: l
                                }, (function() {
                                    e.loadInitialItems(), e._watchProductCollection(), void 0 !== o && e._collectionFlatListController.setScrollFromStart(o)
                                }))
                            })).checkpoint(r()).catch((function(t) {
                                (0, w.parseErrorState)(t, (function(t) {
                                    return e.setState({
                                        catalogFetchState: t,
                                        loadingMore: !1
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "_watchProductCollection",
                        value: function() {
                            var e = this,
                                t = this.props.collection,
                                a = this.state.catalog;
                            null != t && (t.productCollection.on("add", (function() {
                                return e.forceUpdate()
                            })), t.productCollection.on("remove", (function() {
                                return e.forceUpdate()
                            })), this.props.listeners.add(t, "change:reviewStatus", (function() {
                                return e.forceUpdate()
                            }))), null != a && (a.productCollection.on("add", (function() {
                                return e.forceUpdate()
                            })), a.productCollection.on("remove", (function() {
                                return e.forceUpdate()
                            })), a.collections.on("add", (function() {
                                return e.forceUpdate()
                            })), a.collections.on("remove", (function() {
                                return e.forceUpdate()
                            })))
                        }
                    }, {
                        key: "_getDrawerContent",
                        value: function() {
                            var e, t = this,
                                a = this.state,
                                n = a.catalog,
                                r = a.cartEnabled,
                                o = a.dataSource,
                                l = a.catalogFetchState,
                                u = a.loadingMore,
                                i = this.props,
                                d = i.canManageCatalog,
                                s = i.onCartClick,
                                c = i.onProductDetail,
                                m = i.onProductShare,
                                h = i.collection,
                                v = r && s ? this._handleCartClick : void 0;
                            if (!n || !o) return f.default.createElement(I.default, {
                                fetchState: l
                            });
                            var g = o.getData();
                            if (0 === g.length && !u && d && h) return f.default.createElement(f.default.Fragment, null, f.default.createElement("div", {
                                className: C.default.list
                            }, f.default.createElement(p.default, {
                                theme: "collections",
                                onClick: function() {
                                    t.props.onEditCollection && t.props.onEditCollection(h)
                                }
                            }), f.default.createElement("div", {
                                className: C.default.addItemsNotice
                            }, O.default.t(453))));
                            var _ = f.default.createElement(x.default, {
                                    onCartOpen: v,
                                    onProductDetail: c,
                                    flatListController: this._collectionFlatListController,
                                    catalog: n,
                                    canManageCatalog: d,
                                    shareLinks: d,
                                    onProductShare: m,
                                    collectionId: null === (e = this.props.collection) || void 0 === e ? void 0 : e.id.toString(),
                                    data: g
                                }),
                                S = this.props.collection ? f.default.createElement(E.default, {
                                    collection: this.props.collection,
                                    onEditCollection: this.props.onEditCollection
                                }) : void 0;
                            return f.default.createElement(f.default.Fragment, null, f.default.createElement("div", {
                                className: C.default.list
                            }, S, _, u && f.default.createElement(N.default, null)))
                        }
                    }, {
                        key: "loadInitialItems",
                        value: (t = (0, l.default)(o.default.mark((function e() {
                            var t;
                            return o.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = this.state.dataSource, e.next = 3, null == t ? void 0 : t.loadInitialItems();
                                    case 3:
                                        this.setState({
                                            loadingMore: !1
                                        }), (0, D.logCollectionSeeAllView)({
                                            catalogOwnerJid: this.props.catalogId.toString(),
                                            catalogContext: (0, R.getProductCatalogContext)(this.context),
                                            collectionId: null == t ? void 0 : t.collectionId
                                        });
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "_renderDrawerMenu",
                        value: function() {
                            var e = this.state.cartEnabled ? this._handleCartClick : void 0;
                            return f.default.createElement(v.default, {
                                onSendCatalog: this._handleCatalogLinkClick,
                                onCartClick: e,
                                cartCount: this.state.cart.itemCount,
                                catalogId: this.props.catalogId.toString(),
                                canManageCatalog: this.props.canManageCatalog
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = (null === (e = this.props.collection) || void 0 === e ? void 0 : e.name) || O.default.t(543);
                            return f.default.createElement(y.default, {
                                theme: "products",
                                onDrop: this.props.onBack
                            }, f.default.createElement(k.default, {
                                title: t,
                                type: this.props.headerType || k.DRAWER_HEADER_TYPE.SMALL,
                                onBack: this.props.onBack,
                                menu: this._renderDrawerMenu()
                            }), f.default.createElement(P.default, {
                                flatListControllers: [this._collectionFlatListController],
                                onScroll: this.onScroll
                            }, this._getDrawerContent()))
                        }
                    }]), n
                }(f.Component);
            t.CollectionContentDrawer = F, F.contextType = T.default, F.CONCERNS = {
                contact: ["id"]
            }, F.displayName = "CollectionContentDrawer";
            var U = (0, A.default)((0, b.default)((0, L.default)(F, F.CONCERNS)));
            t.default = U
        },
        35877: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n = e.collection,
                    f = e.onSeeAll,
                    p = e.allItems;
                n ? (t = n.name, a = n.id) : p && (t = d.default.t(543));
                var m = r.default.createElement(c.TextDiv, {
                    theme: "title"
                }, r.default.createElement(i.default, {
                    text: t,
                    ellipsify: !0,
                    titlify: !0
                }));

                function h(e) {
                    ! function(e) {
                        e.preventDefault(), e.stopPropagation()
                    }(e), f && n ? f(n) : f && f()
                }
                var v = void 0;
                if (n) switch (n.reviewStatus) {
                    case s.PRODUCT_REVIEW_STATUS.REJECTED:
                        v = r.default.createElement("span", {
                            className: u.default.reviewStateRejected
                        }, d.default.t(545))
                }
                return r.default.createElement(o.default, {
                    key: a,
                    primary: m,
                    secondary: v,
                    detail: r.default.createElement(l.default, {
                        onClick: h
                    }, d.default.t(546)),
                    theme: "collection-header",
                    idle: !0,
                    className: u.default.collectionListItem
                })
            };
            var r = n(a(67294)),
                o = n(a(10598)),
                l = n(a(76)),
                u = n(a(74591)),
                i = n(a(41769)),
                d = n(a(89115)),
                s = a(88577),
                c = a(28770)
        },
        45184: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logCollectionSeeAllView = function(e) {
                var t = e.catalogOwnerJid,
                    a = e.catalogContext,
                    n = e.collectionId,
                    d = (0, o.getProductStatsInFetched)(t, n),
                    s = null == d ? void 0 : d.productIndex,
                    c = null == d ? void 0 : d.collectionIndex;
                (0, i.createCatalogViewEvent)((0, r.default)({
                    isOwner: (0, i.isCatalogOwner)({
                        catalogOwnerJid: t
                    }),
                    catalogBizAction: l.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_IMPRESSION,
                    catalogViewAction: l.default.CATALOG_VIEW_ACTION.ACTION_COLLECTION_IMPRESSION,
                    productIndex: s,
                    collectionIndex: c
                }, (0, u.toDataForCatalogViewEvents)(a))).commit()
            }, t.logCollectionItemsAssignment = function(e) {
                var t = e.catalogContext,
                    a = e.collectionId,
                    n = e.addedCount,
                    r = e.removedCount;
                n > 0 && new l.default.CatalogBiz({
                    catalogBizAction: l.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_ASSIGN_ITEMS,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: n,
                    collectionId: a
                }).commit();
                r > 0 && new l.default.CatalogBiz({
                    catalogBizAction: l.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_UNASSIGN_ITEMS,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: r,
                    collectionId: a
                }).commit()
            }, t.logCollectionDeleted = function(e) {
                var t = e.catalogContext,
                    a = e.collectionId;
                new l.default.CatalogBiz({
                    catalogBizAction: l.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    collectionId: a
                }).commit()
            }, t.logCollectionRenamed = function(e) {
                var t = e.catalogContext,
                    a = e.collectionId;
                new l.default.CatalogBiz({
                    catalogBizAction: l.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    collectionId: a
                }).commit()
            }, t.logCollectionMenuClicked = function(e) {
                new l.default.CatalogBiz({
                    catalogBizAction: l.default.CATALOG_BIZ_ACTION.ACTION_MENU_COLLECTIONS_CLICK,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit()
            }, t.logCollectionCreated = function(e) {
                var t = e.catalogContext,
                    a = (e.collectionId, e.productCount);
                new l.default.CatalogBiz({
                    catalogBizAction: l.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATED,
                    catalogEntryPoint: t.entryPoint,
                    catalogSessionId: t.session.toString(),
                    productCount: a
                }).commit()
            }, t.logCollectionCreateClicked = function(e) {
                new l.default.CatalogBiz({
                    catalogBizAction: l.default.CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATE_CLICKED,
                    catalogEntryPoint: e.entryPoint,
                    catalogSessionId: e.session.toString()
                }).commit()
            };
            var r = n(a(81109)),
                o = a(78271),
                l = n(a(8643)),
                u = a(79164),
                i = a(26703)
        },
        63128: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = n(a(67294)),
                s = a(16452),
                c = r(a(34541)),
                f = r(a(58897)),
                p = r(a(35877)),
                m = r(a(34263)),
                h = r(a(66015)),
                v = r(a(60482)),
                g = r(a(55959)),
                _ = r(a(50842)),
                C = r(a(68390)),
                E = a(85539),
                S = a(79164),
                y = r(a(78509)),
                P = a(88577),
                T = r(a(42027)),
                k = r(a(44589)),
                w = a(89305),
                I = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a(e) {
                        var n;
                        return (0, o.default)(this, a), (n = t.call(this, e)).attachedListeners = new Set, n._catalogFlatListController = new _.default, n.handleProductDetail = function(e, t) {
                            var a = n.props.onProductDetail;
                            return (0, E.logCatalogListDetailClick)({
                                product: (0, w.unproxy)(e),
                                catalogContext: (0, S.getProductCatalogContext)(n.context)
                            }), n.setState({
                                openedProductId: e.id.toString()
                            }), a(e, t)
                        }, n.handleProductShare = function(e) {
                            var t = n.props.onProductShare;
                            t && t(e)
                        }, n.handleProductDelete = function(e) {
                            var t = n.props.catalog;
                            (0, s.handleProductDelete)(t, e, (0, S.getProductCatalogContext)(n.context)).then((function() {
                                e.id === n.state.openedProductId && (c.default.closeDrawerMid(), n.setState({
                                    openedProductId: void 0
                                }))
                            }))
                        }, n.handleProductHideShow = function(e) {
                            var t = n.props.catalog;
                            (0, s.handleProductVisibilityChange)(t, e, (0, S.getProductCatalogContext)(n.context))
                        }, n.renderItem = function(e) {
                            var t = e.collection,
                                a = e.product,
                                r = e.allItems,
                                o = e.reviewBanner,
                                l = e.collectionId,
                                u = n.props,
                                i = u.onCartOpen,
                                s = u.shareLinks;
                            return t ? o ? d.default.createElement(f.default, {
                                collection: t,
                                onEditCollection: n.props.onEditCollection
                            }) : d.default.createElement(p.default, {
                                collection: t,
                                onSeeAll: n.props.onCollectionSeeAll
                            }) : r ? d.default.createElement(p.default, {
                                allItems: r,
                                onSeeAll: n.props.onCollectionSeeAll
                            }) : a ? d.default.createElement(y.default, {
                                collectionId: l,
                                product: a,
                                onCartOpen: i,
                                onClick: function() {
                                    return n.handleProductDetail(a, l)
                                },
                                onProductShare: s ? n.handleProductShare : null,
                                onProductDelete: n.handleProductDelete,
                                onProductHideShow: n.handleProductHideShow,
                                theme: "product-of-collection",
                                canManageCatalog: n.props.canManageCatalog
                            }) : null
                        }, n.state = {
                            openedProductId: void 0,
                            loadingMore: !1,
                            stopLoading: !1,
                            catalogFetchState: e.catalog ? "SUCCESS" : "NONE"
                        }, n
                    }
                    return (0, l.default)(a, [{
                        key: "getData",
                        value: function() {
                            var e = this,
                                t = void 0 !== this.props.onCartOpen,
                                a = this.props.data || [],
                                n = [];
                            return a.forEach((function(a) {
                                var r = a.collection,
                                    o = a.product,
                                    l = a.allItems;
                                if (r && o) {
                                    var u = r.id;
                                    n.push({
                                        itemKey: `${u.toString()}_${o.id.toString()}_${t.toString()}`,
                                        product: o,
                                        collectionId: u
                                    })
                                } else if (r) e.attachedListeners.has(r.id) || (e.attachedListeners.add(r.id), e.props.listeners.add(r, "change:reviewStatus", (function() {
                                    e.forceUpdate()
                                }))), n.push({
                                    itemKey: r.id.toString(),
                                    collection: r
                                }), r.reviewStatus !== P.PRODUCT_REVIEW_STATUS.PENDING && r.reviewStatus !== P.PRODUCT_REVIEW_STATUS.REJECTED || n.push({
                                    itemKey: `${r.id.toString()}_reviewBanner`,
                                    collection: r,
                                    reviewBanner: !0
                                });
                                else if (l) n.push({
                                    itemKey: "view_all",
                                    allItems: l
                                });
                                else if (o) {
                                    var i = e.props.collectionId || void 0;
                                    n.push({
                                        itemKey: `${o.id.toString()}_${t.toString()}`,
                                        product: o,
                                        collectionId: i
                                    })
                                }
                            })), n
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.getData();
                            return d.default.createElement(d.default.Fragment, null, d.default.createElement(g.default, {
                                flatListControllers: [this._catalogFlatListController]
                            }, d.default.createElement(v.default, {
                                flatListController: this._catalogFlatListController,
                                direction: "vertical",
                                forceConsistentRenderCount: !1,
                                data: e,
                                renderItem: this.renderItem,
                                defaultItemHeight: m.default.PRODUCT_LIST_ITEM_HEIGHT
                            })))
                        }
                    }]), a
                }(d.Component);
            I.CONCERNS = {
                catalog: ["productCollection", "collections", "afterCursor", "id", "index"]
            }, I.contextType = h.default, I.displayName = "ProductCollectionsList";
            var M = (0, T.default)((0, C.default)((0, k.default)(I, I.CONCERNS)));
            t.default = M
        },
        71431: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                r = a(20862),
                o = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = o(a(59713)),
                u = o(a(63038)),
                i = o(a(34575)),
                d = o(a(93913)),
                s = o(a(2205)),
                c = o(a(99842)),
                f = o(a(94184)),
                p = r(a(67294)),
                m = o(a(93250)),
                h = a(79984),
                v = o(a(73293)),
                g = o(a(10725)),
                _ = o(a(51934)),
                C = o(a(91549)),
                E = o(a(34541)),
                S = o(a(29607)),
                y = o(a(81997)),
                P = o(a(25259)),
                T = o(a(66015)),
                k = r(a(62647)),
                w = a(14650),
                I = r(a(98569)),
                M = o(a(89115)),
                N = o(a(68390)),
                O = a(85539),
                b = a(59078),
                D = a(79164),
                R = a(88577),
                x = o(a(35769)),
                A = o(a(16158)),
                L = o(a(16576)),
                F = a(97098),
                U = o(a(42027)),
                V = o(a(93433)),
                B = r(a(87729)),
                j = o(a(44589)),
                H = a(89305),
                W = a(28770),
                G = function(e) {
                    (0, s.default)(a, e);
                    var t = (0, c.default)(a);

                    function a(e) {
                        var n;
                        (0, i.default)(this, a), (n = t.call(this, e)).handleCartClick = function() {
                            var e = n.props,
                                t = e.product,
                                a = e.onCartClick;
                            a && a(t.catalogWid.toString())
                        }, n._handleReportProduct = function() {
                            var e = n.props.product;
                            E.default.openModal(p.default.createElement(V.default, {
                                product: e,
                                sessionId: (0, D.getProductCatalogSessionId)(n.context)
                            }))
                        }, n.handleProductLinkClick = function() {
                            var e = n.props.product;
                            n.props.onProductLinkClick(e)
                        }, n.handleSendChat = function() {
                            var e = n.props.product,
                                t = g.default.get(e.catalogWid);
                            (0, b.sendProductToChat)(e, t, (0, D.getProductCatalogContext)(n.context)), (0, O.logProductMessageBusinessClick)(e, (0, D.getProductCatalogContext)(n.context))
                        }, n._handleSendProduct = function() {
                            var e = n.props.product,
                                t = e.catalogWid,
                                a = g.default.get(t);
                            if (a) {
                                var r = a.productCollection.get(e.id),
                                    o = r ? (0, H.unproxy)(r) : (0, H.unproxy)(e);
                                E.default.attachProduct({
                                    product: o
                                })
                            }
                        }, n.handleBack = function() {
                            var e = n.props.onBack;
                            if (e) return e()
                        }, n.handleProductCatalog = function() {
                            var e = n.props,
                                t = e.onProductCatalog,
                                a = e.product;
                            t && t(a.catalogWid, (0, D.getProductCatalogContext)(n.context))
                        }, n.handleProductDetail = function(e) {
                            var t = n.props.onProductDetail;
                            if (t) return t(e)
                        }, n.isRejected = function() {
                            return n.props.product.reviewStatus === R.PRODUCT_REVIEW_STATUS.REJECTED
                        }, n._isAvailable = function() {
                            var e = n.state.productFetchState;
                            return "ERROR" !== e && "NOT_FOUND" !== e && !n.isRejected()
                        };
                        var r = e.product.fetchedFromServer ? "SUCCESS" : "PENDING",
                            o = null,
                            l = "NONE";
                        e.refreshCarousel && ((o = g.default.get(e.product.catalogWid)) && o.productCollection && o.fetchedFromServer ? l = "SUCCESS" : (o = null, l = "PENDING"));
                        var u = v.default.findCart(n.props.product.catalogWid.toString());
                        return n.state = {
                            businessProfile: null,
                            cartEnabled: !1,
                            productCatalog: o,
                            productFetchState: r,
                            productCatalogFetchState: l,
                            cart: u
                        }, n
                    }
                    return (0, d.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.product,
                                n = t.listeners,
                                r = t.collectionId,
                                o = this.state.cart,
                                l = a.catalogWid,
                                u = a.id.toString();
                            l && u && (this._fetchData(), n.add(o, "change:cartItemCollection", (function() {
                                e.forceUpdate()
                            })), (0, C.default)(l).then((function(t) {
                                e.setState({
                                    cartEnabled: t
                                })
                            })), (0, O.logProductDetailView)({
                                product: (0, H.unproxy)(a),
                                catalogContext: (0, D.getProductCatalogContext)(this.context),
                                cartToggle: this.state.cartEnabled,
                                collectionId: r
                            }))
                        }
                    }, {
                        key: "_fetchData",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.product,
                                r = t.rejectOnUnmount,
                                o = a.catalogWid,
                                l = a.id.toString(),
                                i = g.default.findProduct({
                                    catalogWid: o,
                                    productId: l,
                                    productMsgMediaData: (0, H.unproxy)(a).productMsgMediaData
                                }),
                                d = m.default.find(o);
                            return n.all([d, i]).checkpoint(r()).then((function(t) {
                                var a = (0, u.default)(t, 1)[0];
                                return e.setState({
                                    productFetchState: "SUCCESS",
                                    businessProfile: a
                                }), a
                            })).then((function(t) {
                                (0, h.hasCatalog)(t) && "PENDING" === e.state.productCatalogFetchState && e._fetchProductCatalog()
                            })).catchType(w.E404, (function() {
                                e.setState({
                                    productFetchState: "NOT_FOUND"
                                })
                            })).catchType(I.Unmount, (function() {})).catchType(w.ServerStatusCodeError, (function() {
                                e.setState({
                                    productFetchState: "ERROR"
                                }), __LOG__(3)`Failed to fetch product from server`
                            })).catchType(w.WebdDrop, (function() {
                                e.setState({
                                    productFetchState: "ERROR"
                                }), __LOG__(3)`Failed to fetch product`
                            }))
                        }
                    }, {
                        key: "_fetchProductCatalog",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.product,
                                n = t.rejectOnUnmount,
                                r = a.catalogWid;
                            g.default.findCarouselCatalog(r).checkpoint(n()).then((function(t) {
                                var a = Array.isArray(t) ? t[0] : t;
                                e.setState({
                                    productCatalog: a || null,
                                    productCatalogFetchState: a ? "SUCCESS" : "NONE"
                                })
                            })).catchType(I.Unmount, (function() {})).catchType(w.ServerStatusCodeError, (function(t) {
                                "not_found" === t.status || 404 === t.status ? e.setState({
                                    productCatalog: null,
                                    productCatalogFetchState: "NOT_FOUND"
                                }) : (e.setState({
                                    productCatalog: null,
                                    productCatalogFetchState: "ERROR"
                                }), __LOG__(3)`Failed to fetch product catalog from server`)
                            })).catchType(w.WebdDrop, (function() {
                                e.setState({
                                    productCatalog: null,
                                    productCatalogFetchState: "ERROR"
                                }), __LOG__(3)`Failed to fetch product catalog`
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props.product,
                                t = e.catalogWid,
                                a = e.id.toString();
                            if (t && a) {
                                var n = g.default.get(t),
                                    r = n && n.msgProductCollection.get(a);
                                r && r.fetchedFromServer && n && n.msgProductCollection.remove(r)
                            }
                        }
                    }, {
                        key: "_renderTopBar",
                        value: function() {
                            var e, t, a = this.state,
                                n = a.productFetchState,
                                r = a.productCatalogFetchState,
                                o = this._isAvailable();
                            t = "ERROR" === n ? p.default.createElement(W.TextSpan, {
                                className: x.default.text,
                                theme: "small",
                                color: "danger"
                            }, M.default.t(1271)) : o ? [p.default.createElement(B.default, {
                                size: 14,
                                color: B.colorOptions.highlight,
                                key: "DetailDrawer-loadingBar-spinner"
                            }), p.default.createElement(W.TextSpan, {
                                className: (0, f.default)(x.default.text, x.default.loadingText),
                                theme: "small",
                                key: "DetailDrawer-loadingBar-msg"
                            }, M.default.t(1299))] : p.default.createElement(W.TextSpan, {
                                className: x.default.text,
                                theme: "small",
                                color: "danger"
                            }, M.default.t(1285));
                            var u = "PENDING" === n || "PENDING" === r || !o;
                            return p.default.createElement("div", {
                                className: (0, f.default)((e = {}, (0, l.default)(e, x.default.loadingContainer, u), (0, l.default)(e, x.default.shiftUp, !u), e))
                            }, t)
                        }
                    }, {
                        key: "_renderDrawerMenu",
                        value: function() {
                            if (!this._isAvailable()) return null;
                            var e = this.state.cartEnabled ? this.handleCartClick : void 0;
                            return p.default.createElement(S.default, {
                                onSendProduct: this._handleSendProduct,
                                onReportProduct: this._handleReportProduct,
                                onProductLinkClick: this.handleProductLinkClick,
                                onCartClick: e,
                                cartCount: this.state.cart.itemCount,
                                catalogId: this.props.product.catalogWid.toString()
                            })
                        }
                    }, {
                        key: "_renderDrawerHeader",
                        value: function() {
                            return p.default.createElement(k.default, {
                                a8n: "drawer-title-profile",
                                title: M.default.t(1275),
                                onBack: this.handleBack,
                                type: k.DRAWER_HEADER_TYPE.SMALL,
                                menu: this._renderDrawerMenu()
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.product,
                                a = e.collectionId,
                                n = this.state,
                                r = n.productCatalog,
                                o = n.productFetchState,
                                l = this._isAvailable(),
                                u = (0, h.hasCatalog)(this.state.businessProfile);
                            return p.default.createElement(y.default, {
                                onDrop: this.handleBack,
                                theme: "striped",
                                key: "product-details-drawer"
                            }, this._renderDrawerHeader(), p.default.createElement(P.default, null, p.default.createElement("div", {
                                className: x.default.body
                            }, this._renderTopBar(), p.default.createElement(L.default, {
                                product: t,
                                isAvailable: l,
                                fetching: "PENDING" === o
                            }), t.availability === F.ProductAvailability.OUT_OF_STOCK ? p.default.createElement("div", {
                                className: x.default.availabilityBanner
                            }, M.default.t(1274)) : null, p.default.createElement(A.default, {
                                product: t,
                                collectionId: a,
                                onSendChat: this.handleSendChat,
                                isAvailable: l
                            }), u && r ? p.default.createElement(_.default, {
                                catalog: r,
                                onProductCatalog: this.handleProductCatalog,
                                onProductDetail: this.handleProductDetail,
                                filterProductId: t.id.toString(),
                                title: M.default.t(1268),
                                animation: !1
                            }) : null)))
                        }
                    }]), a
                }(p.Component);
            G.CONCERNS = {
                product: ["id", "catalogWid", "productImageCollection", "fetchedFromServer", "name", "availability", "reviewStatus"]
            }, G.contextType = T.default, G.displayName = "ProductDetails";
            var Y = (0, U.default)((0, N.default)((0, j.default)(G, G.CONCERNS)));
            t.default = Y
        },
        16158: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(59713)),
                l = r(a(34575)),
                u = r(a(93913)),
                i = r(a(2205)),
                d = r(a(99842)),
                s = r(a(94184)),
                c = n(a(67294)),
                f = r(a(84831)),
                p = r(a(29005)),
                m = r(a(16973)),
                h = r(a(91549)),
                v = r(a(34263)),
                g = r(a(66015)),
                _ = r(a(51376)),
                C = r(a(41769)),
                E = a(19129),
                S = a(12518),
                y = r(a(89115)),
                P = n(a(46515)),
                T = a(85539),
                k = a(79164),
                w = a(88577),
                I = r(a(57142)),
                M = r(a(69027)),
                N = a(97098),
                O = r(a(44589)),
                b = a(89305),
                D = a(28770),
                R = function(e) {
                    (0, i.default)(a, e);
                    var t = (0, d.default)(a);

                    function a(e) {
                        var n;
                        return (0, l.default)(this, a), (n = t.call(this, e)).handleAddToCart = function(e) {
                            var t = n.props,
                                a = t.product,
                                r = t.collectionId;
                            (0, f.default)(a, (0, k.getProductCatalogContext)(n.context), r), e.stopPropagation()
                        }, n.handleReadMore = function() {
                            n.setState({
                                isDescExpanded: !0
                            })
                        }, n._handleClickUrl = function(e, t) {
                            e.stopPropagation();
                            var a = n.props.product;
                            (0, T.logDetailLinkClick)({
                                product: (0, b.unproxy)(a),
                                catalogContext: (0, k.getProductCatalogContext)(n.context)
                            });
                            var r = t && P.findLink(t);
                            r && (0, E.openExternalLink)(r.url)
                        }, n.state = {
                            isDescExpanded: !1,
                            cartEnabled: !1
                        }, n
                    }
                    return (0, u.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            (0, h.default)(this.props.product.catalogWid).then((function(t) {
                                e.setState({
                                    cartEnabled: t
                                })
                            }))
                        }
                    }, {
                        key: "_renderMessageBusinessButton",
                        value: function() {
                            var e = this.props,
                                t = e.onSendChat,
                                a = e.product,
                                n = e.isAvailable;
                            if (!t || !a.fetchedFromServer || !n || a.reviewStatus !== w.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                            var r = y.default.t(1280);
                            return c.default.createElement("div", {
                                className: I.default.buttonContainer,
                                title: r
                            }, c.default.createElement(m.default, {
                                className: I.default.button,
                                onClick: t,
                                type: "secondary"
                            }, r))
                        }
                    }, {
                        key: "_renderAddToCartButton",
                        value: function() {
                            var e = this.props,
                                t = e.product,
                                a = e.isAvailable;
                            if (!this.state.cartEnabled || !t.fetchedFromServer || !a || t.reviewStatus !== w.PRODUCT_REVIEW_STATUS.APPROVED) return null;
                            var n = y.default.t(1265),
                                r = t.availability === N.ProductAvailability.OUT_OF_STOCK;
                            return c.default.createElement("div", {
                                className: I.default.buttonContainer,
                                title: n
                            }, c.default.createElement(m.default, {
                                className: (0, s.default)(I.default.button, I.default.addToCartButton),
                                onClick: this.handleAddToCart,
                                type: "secondary",
                                disabled: r
                            }, c.default.createElement("span", {
                                className: I.default.addToCartContainer
                            }, c.default.createElement(p.default, {
                                className: (0, s.default)(I.default.addToCartIcon, (0, o.default)({}, I.default.addToCartIconDisabled, r))
                            }), n)))
                        }
                    }, {
                        key: "_renderLink",
                        value: function(e) {
                            var t = this,
                                a = this.props,
                                n = a.product,
                                r = a.isAvailable;
                            if (!n.fetchedFromServer || !e || !r) return null;
                            var o = S.Configuration.TrustedGroupDesc({
                                links: P.findLinks(e)
                            });
                            return c.default.createElement("div", {
                                className: I.default.descBlock
                            }, c.default.createElement(C.default, {
                                selectable: !0,
                                formatters: o,
                                text: e,
                                onClick: function(a) {
                                    return t._handleClickUrl(a, e)
                                }
                            }))
                        }
                    }, {
                        key: "_renderDesc",
                        value: function() {
                            var e = this.props.product,
                                t = this.state.isDescExpanded;
                            if (!e.description && !e.url && !e.retailerId) return null;
                            var a, n = !(!e || !e.description) && e.description.length > v.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH;
                            return e.description && (a = c.default.createElement("div", {
                                className: I.default.descBlock
                            }, c.default.createElement(C.default, {
                                selectable: !0,
                                multiline: !0,
                                text: e.description,
                                textLimit: t ? 1 / 0 : v.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                            }), n && !t ? c.default.createElement("span", {
                                className: I.default.more,
                                role: "button",
                                onClick: this.handleReadMore
                            }, ` ${y.default.t(1308)}`) : null)), c.default.createElement(D.TextDiv, {
                                theme: "plain",
                                className: I.default.description
                            }, a, this._renderLink(e.url), e.retailerId ? c.default.createElement("div", {
                                className: I.default.descBlock
                            }, c.default.createElement(C.default, {
                                text: e.retailerId,
                                selectable: !0,
                                direction: "inherit"
                            })) : null)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.product;
                            return c.default.createElement(_.default, {
                                theme: "padding-product",
                                animation: !1
                            }, c.default.createElement(D.TextDiv, {
                                theme: "title",
                                className: I.default.name
                            }, c.default.createElement(C.default, {
                                text: e.name,
                                selectable: !0
                            })), null != e.priceAmount1000 ? c.default.createElement(D.TextDiv, {
                                className: I.default.price,
                                color: "dark",
                                theme: "plain"
                            }, c.default.createElement(M.default, {
                                product: e,
                                selectable: !0,
                                direction: "inherit"
                            })) : null, this._renderDesc(), this._renderMessageBusinessButton(), this._renderAddToCartButton())
                        }
                    }]), a
                }(c.Component);
            R.contextType = g.default, R.CONCERNS = {
                product: ["name", "url", "description", "availability", "currency", "priceAmount1000", "salePriceAmount1000", "salePriceStartDate", "salePriceEndDate", "fetchedFromServer", "retailerId", "catalogWid", "productImageCollection", "imageHash", "reviewStatus", "imageCdnUrl", "id"]
            }, R.displayName = "ProductDetailsInfo";
            var x = (0, O.default)(R, R.CONCERNS);
            t.default = x
        },
        10437: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.ProductDetailsForDeepLink = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = r(a(91080)),
                s = n(a(67294)),
                c = r(a(10725)),
                f = r(a(81997)),
                p = r(a(25259)),
                m = n(a(62647)),
                h = a(71719),
                v = r(a(19539)),
                g = r(a(30303)),
                _ = r(a(89115)),
                C = r(a(71431)),
                E = r(a(42027)),
                S = a(75793),
                y = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a(e) {
                        var n;
                        (0, o.default)(this, a), (n = t.call(this, e)).state = {
                            product: null,
                            productFetchState: "NONE"
                        };
                        var r = n.props.productInfo,
                            l = r.productId,
                            u = r.businessOwnerJid,
                            i = (0, g.default)({
                                productId: l,
                                businessOwnerJid: u
                            });
                        return n.state = i ? {
                            product: i,
                            productFetchState: "NONE"
                        } : {
                            product: i,
                            productFetchState: "PENDING"
                        }, n
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.state.product || this._fetchProduct()
                        }
                    }, {
                        key: "_fetchProduct",
                        value: function() {
                            var e = this,
                                t = this.props.productInfo,
                                a = t.productId,
                                n = t.businessOwnerJid,
                                r = (0, S.createWid)(n);
                            c.default.findProduct({
                                catalogWid: r,
                                productId: a
                            }).checkpoint(this.props.rejectOnUnmount()).then((function() {
                                var t = c.default.get(r),
                                    n = (0, d.default)(t, "catalog").productCollection.get(a);
                                e.setState({
                                    product: n,
                                    productFetchState: "SUCCESS"
                                })
                            })).catch((function(t) {
                                (0, h.parseErrorState)(t, (function(t) {
                                    return e.setState({
                                        productFetchState: t
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.product ? s.default.createElement(C.default, {
                                product: this.state.product,
                                onEnd: this.props.onEnd,
                                onBack: this.props.onBack,
                                onProductDetail: this.props.onProductDetail,
                                onProductCatalog: this.props.onProductCatalog,
                                refreshCarousel: !0,
                                onProductLinkClick: this.props.onProductLinkClick,
                                onCartClick: this.props.onCartClick
                            }) : s.default.createElement(f.default, {
                                onDrop: this.props.onBack,
                                key: "product-details-drawer"
                            }, s.default.createElement(m.default, {
                                a8n: "drawer-title-profile",
                                title: _.default.t(1275),
                                onBack: this.props.onBack,
                                type: m.DRAWER_HEADER_TYPE.SMALL
                            }), s.default.createElement(p.default, null, s.default.createElement(v.default, {
                                fetchState: this.state.productFetchState
                            })))
                        }
                    }]), a
                }(s.PureComponent);
            t.ProductDetailsForDeepLink = y, y.displayName = "ProductDetailsForDeepLink";
            var P = (0, E.default)(y);
            t.default = P
        },
        89193: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = r(a(94184)),
                s = n(a(67294)),
                c = r(a(10598)),
                f = r(a(34541)),
                p = r(a(55523)),
                m = r(a(81997)),
                h = r(a(25259)),
                v = r(a(66015)),
                g = n(a(62647)),
                _ = r(a(41769)),
                C = r(a(89115)),
                E = r(a(28669)),
                S = a(85539),
                y = a(79164),
                P = r(a(65374)),
                T = n(a(5548)),
                k = r(a(78724)),
                w = r(a(88258)),
                I = r(a(82610)),
                M = a(64478),
                N = a(89305),
                O = "product-link-anchor";

            function b(e) {
                var t = e.productImageCollection.head();
                return t ? s.default.createElement(T.default, {
                    className: (0, d.default)(P.default.productImage, P.default.productImageContainer),
                    mediaData: t.mediaData
                }) : s.default.createElement(T.ProductThumbPlaceholder, {
                    className: (0, d.default)(P.default.productThumb, P.default.productThumbContainer)
                })
            }
            var D = function(e) {
                (0, u.default)(a, e);
                var t = (0, i.default)(a);

                function a() {
                    var e;
                    (0, o.default)(this, a);
                    for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
                    return (e = t.call.apply(t, [this].concat(r)))._handleProductLinkClick = function(t) {
                        t.preventDefault(), e._handleSendProductLinkClick()
                    }, e._handleSendProductLinkClick = function() {
                        var t = e.props,
                            a = t.product,
                            n = t.onSend;
                        f.default.openModal(s.default.createElement(I.default, {
                            product: a,
                            onSend: n
                        }), {
                            transition: "modal-flow"
                        }), (0, S.logShareProductViaWALinkClick)({
                            product: a,
                            catalogContext: (0, y.getProductCatalogContext)(e.context)
                        })
                    }, e._handleCopyLinkClick = function() {
                        var t = e.props.product;
                        (0, S.logShareProductCopyLinkClick)({
                            product: t,
                            catalogContext: (0, y.getProductCatalogContext)(e.context)
                        })
                    }, e._handleSendProduct = function() {
                        var t = e.props,
                            a = t.product,
                            n = t.onSend;
                        f.default.attachProduct({
                            product: (0, N.unproxy)(a),
                            onSend: n
                        })
                    }, e
                }
                return (0, l.default)(a, [{
                    key: "render",
                    value: function() {
                        var e, t, a, n = this.props,
                            r = n.onBack,
                            o = n.onCancel,
                            l = n.product,
                            u = n.prompt,
                            i = n.centerDrawer,
                            d = n.sendProductMsg,
                            f = (0, M.createProductLink)(l.catalogWid.user, l.id.toString());
                        return i && (e = "labels", t = "center-column"), a = null != d ? s.default.createElement(w.default, {
                            onClick: this._handleSendProduct
                        }) : s.default.createElement(k.default, {
                            onClick: this._handleSendProductLinkClick
                        }), s.default.createElement(m.default, {
                            key: "product-link-drawer",
                            theme: e
                        }, s.default.createElement(g.default, {
                            a8n: "product-link-title",
                            title: C.default.t(1277),
                            onBack: r,
                            onCancel: o,
                            type: g.DRAWER_HEADER_TYPE.SMALL
                        }), s.default.createElement(h.default, {
                            theme: t
                        }, s.default.createElement("div", {
                            className: P.default.prompt
                        }, u), s.default.createElement(c.default, {
                            image: b(l),
                            primary: s.default.createElement(_.default, {
                                text: l.name,
                                direction: "auto"
                            }),
                            theme: "identity",
                            secondary: s.default.createElement(E.default, {
                                id: O,
                                href: f,
                                onClick: this._handleProductLinkClick,
                                noHandle: !0
                            })
                        }), a, s.default.createElement(p.default, {
                            elementId: O,
                            onClick: this._handleCopyLinkClick
                        })))
                    }
                }]), a
            }(s.Component);
            t.default = D, D.contextType = v.default, D.displayName = "ProductLinkDrawer"
        },
        82260: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.ProductListDrawer = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = r(a(96486)),
                s = n(a(67294)),
                c = r(a(65389)),
                f = r(a(73293)),
                p = r(a(72283)),
                m = r(a(10725)),
                h = r(a(91549)),
                v = r(a(34263)),
                g = r(a(81997)),
                _ = r(a(25259)),
                C = r(a(66015)),
                E = n(a(62647)),
                S = r(a(75300)),
                y = r(a(33079)),
                P = a(14650),
                T = n(a(98569)),
                k = a(71719),
                w = r(a(19539)),
                I = r(a(50842)),
                M = r(a(96658)),
                N = a(31230),
                O = r(a(89115)),
                b = r(a(8326)),
                D = r(a(68390)),
                R = a(85539),
                x = a(92919),
                A = a(53418),
                L = a(79164),
                F = r(a(53423)),
                U = r(a(81618)),
                V = r(a(31483)),
                B = r(a(42027)),
                j = r(a(44589)),
                H = r(a(75131)),
                W = a(88828),
                G = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a(e) {
                        var n;
                        (0, o.default)(this, a), (n = t.call(this, e))._catalogFlatListController = new I.default, n._handleScroll = function(e) {
                            n.state.loadingMore || e.scrollTop + v.default.SCROLL_FUDGE > e.scrollHeight - e.clientHeight && n._loadMoreProduct()
                        }, n.handleScroll = d.default.throttle(n._handleScroll, 100), n._loadMoreProduct = function() {
                            var e = n.props.catalogId,
                                t = n.state,
                                a = t.stopLoading,
                                r = t.loadedProducts;
                            if (!a) {
                                var o = m.default.assertGet(e);
                                if (o.afterCursor) {
                                    var l = o.productCollection.getProductModels().length;
                                    n.setState({
                                        loadingMore: !0,
                                        loadedProducts: l
                                    }), m.default.update(e).checkpoint(n.props.rejectOnUnmount()).then((function(e) {
                                        n.setState({
                                            loadingMore: !1
                                        }), (Array.isArray(e) ? e[0] : e).productCollection.getProductModels().length === r && n.setState({
                                            stopLoading: !0
                                        }), l * v.default.PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight && n._loadMoreProduct()
                                    })).catchType(T.Unmount, (function() {})).catch((function() {
                                        n.setState({
                                            loadingMore: !1,
                                            stopLoading: !0
                                        })
                                    }))
                                }
                            }
                        }, n.onScroll = function(e) {
                            n.handleScroll(e.currentTarget), n.props.setScrollOffset && n.props.setScrollOffset(e.currentTarget.scrollTop)
                        }, n._handleCartChange = function() {
                            var e = n.state.cart.itemCount;
                            n.state.cartCount !== e && n.setState({
                                cartCount: e
                            })
                        }, n._handleCartClick = function() {
                            var e = n.props,
                                t = e.contact,
                                a = e.onCartClick;
                            a && a(t.id.toString())
                        }, n._handleCatalogLinkClick = function() {
                            var e = n.state.catalog;
                            if (e) {
                                var t = n.props,
                                    a = t.onCatalogLinkClick,
                                    r = t.contact,
                                    o = t.catalogId;
                                a(e, r), (0, R.logCatalogShareLinkClick)({
                                    catalogOwnerWid: o,
                                    catalogContext: (0, L.getProductCatalogContext)(n.context)
                                })
                            }
                        };
                        var r = m.default.get(n.props.catalogId),
                            l = !r || r.stale ? null : r,
                            u = f.default.findCart(n.props.contact.id.toString());
                        return n.state = {
                            loadingMore: !1,
                            loadedProducts: 0,
                            stopLoading: !1,
                            cartEnabled: !1,
                            catalog: l,
                            cart: u,
                            cartCount: u.itemCount,
                            catalogFetchState: l ? "SUCCESS" : "NONE"
                        }, n
                    }
                    return (0, l.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.catalogId;
                            t.listeners.add(this.state.cart, "all", this._handleCartChange), (0, R.logCatalogListView)({
                                catalogOwnerWid: a,
                                catalogContext: (0, L.getProductCatalogContext)(this.context),
                                cartToggle: this.state.cartEnabled
                            }), this.state.catalog ? (this._loadMoreProduct(), this._watchProductCollection()) : this._findCatalog(), (0, h.default)(a).then((function(t) {
                                e.setState({
                                    cartEnabled: t
                                })
                            }))
                        }
                    }, {
                        key: "_findCatalog",
                        value: function() {
                            var e = this;
                            return m.default.find(this.props.catalogId).checkpoint(this.props.rejectOnUnmount()).then((function(t) {
                                e.setState({
                                    catalog: t,
                                    catalogFetchState: "SUCCESS"
                                }), e._loadMoreProduct(), e._watchProductCollection()
                            })).catchType(P.ServerStatusCodeError, (function(t) {
                                403 !== t.status && 404 !== t.status || e.setState({
                                    catalog: null,
                                    catalogFetchState: "NOT_FOUND"
                                })
                            })).catch((function(t) {
                                (0, k.parseErrorState)(t, (function(t) {
                                    return e.setState({
                                        catalogFetchState: t
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "_watchProductCollection",
                        value: function() {
                            var e = this,
                                t = this.state.catalog;
                            this.props.autoUpdate && null != t && (t.productCollection.on("add", d.default.debounce((function() {
                                return e.forceUpdate()
                            }), 100)), t.productCollection.on("remove", d.default.debounce((function() {
                                return e.forceUpdate()
                            }), 100)))
                        }
                    }, {
                        key: "_getDrawerContent",
                        value: function() {
                            var e, t = this.state,
                                a = t.catalog,
                                n = t.cartEnabled,
                                r = this.props,
                                o = r.contact,
                                l = r.businessProfile,
                                u = r.canManageCatalog,
                                i = r.onAddProduct,
                                d = r.onCartClick,
                                f = n && d ? this._handleCartClick : void 0;
                            return a ? (u && i && (e = s.default.createElement(c.default, {
                                onClick: function() {
                                    return i()
                                },
                                theme: "in-list"
                            })), s.default.createElement(s.default.Fragment, null, l && s.default.createElement("div", {
                                className: U.default.header
                            }, s.default.createElement(V.default, {
                                profilePicThumb: o.getProfilePicThumb(),
                                contact: o,
                                businessProfile: l
                            })), s.default.createElement("div", {
                                className: U.default.list
                            }, e, s.default.createElement(F.default, {
                                onCartOpen: f,
                                onProductDetail: this.props.onProductDetail,
                                flatListController: this._catalogFlatListController,
                                catalog: a,
                                canManageCatalog: this.props.canManageCatalog,
                                shareLinks: this.props.canManageCatalog,
                                onProductShare: this.props.onProductShare
                            }), this.state.loadingMore && s.default.createElement(M.default, null)))) : s.default.createElement(w.default, {
                                fetchState: this.state.catalogFetchState
                            })
                        }
                    }, {
                        key: "_getCartIcon",
                        value: function() {
                            var e = this.props,
                                t = e.onCartClick,
                                a = e.headerType,
                                n = e.catalogId;
                            if (this.state.cartEnabled && t) {
                                var r = this.state.cartCount,
                                    o = (0, W.isNumber)(r) && r > 0 ? r.toString() : void 0,
                                    l = (0, x.getOnCartClickWithLog)(this._handleCartClick, n.toString(), (0, L.getProductCatalogContext)(this.context));
                                return s.default.createElement(A.MenuBarItem, {
                                    a8nText: "menu-bar-cart-link",
                                    icon: s.default.createElement(p.default, {
                                        theme: a === E.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                                    }),
                                    text: o,
                                    title: O.default.t(424),
                                    onClick: l
                                })
                            }
                            return null
                        }
                    }, {
                        key: "_getDrawerHeaderMenu",
                        value: function() {
                            var e = this.props,
                                t = e.canManageCatalog,
                                a = e.onOpenSettings,
                                n = t && (0, N.canToggleCartOnOff)() ? s.default.createElement(A.MenuBarItem, {
                                    a8nText: "menu-bar-menu",
                                    icon: s.default.createElement(H.default, {
                                        name: "menu"
                                    }),
                                    title: O.default.t(1046)
                                }, s.default.createElement(S.default, {
                                    type: "dropdown_menu",
                                    flipOnRTL: !0,
                                    key: "CatalogDetailHeader",
                                    dirX: "LEFT"
                                }, s.default.createElement(y.default, {
                                    a8n: "mi-foward menu-item",
                                    action: this._handleCatalogLinkClick
                                }, O.default.t(761)), a && s.default.createElement(y.default, {
                                    a8n: "mi-settings menu-item",
                                    action: a
                                }, O.default.t(488)))) : s.default.createElement(A.MenuBarItem, {
                                    a8nText: "menu-bar-catalog-link",
                                    icon: s.default.createElement(b.default, {
                                        theme: this.props.headerType === E.DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
                                    }),
                                    title: O.default.t(482),
                                    onClick: this._handleCatalogLinkClick
                                });
                            return s.default.createElement(s.default.Fragment, null, this._getCartIcon(), n)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return s.default.createElement(g.default, {
                                theme: "products",
                                onDrop: this.props.onBack
                            }, s.default.createElement(E.default, {
                                title: O.default.t(1272),
                                type: this.props.headerType || E.DRAWER_HEADER_TYPE.SMALL,
                                onBack: this.props.onBack,
                                menu: this._getDrawerHeaderMenu()
                            }), s.default.createElement(_.default, {
                                onScroll: this.onScroll,
                                flatListControllers: [this._catalogFlatListController],
                                scrollOffset: this.props.scrollOffset
                            }, this._getDrawerContent()))
                        }
                    }]), a
                }(s.Component);
            t.ProductListDrawer = G, G.CONCERNS = {
                contact: ["id"]
            }, G.contextType = C.default, G.displayName = "ProductListDrawer";
            var Y = (0, B.default)((0, D.default)((0, j.default)(G, G.CONCERNS)));
            t.default = Y
        },
        31483: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = n(a(67294)),
                s = a(42575),
                c = r(a(41769)),
                f = r(a(45706)),
                p = r(a(81891)),
                m = r(a(44589)),
                h = a(28770),
                v = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a() {
                        return (0, o.default)(this, a), t.apply(this, arguments)
                    }
                    return (0, l.default)(a, [{
                        key: "_renderDescription",
                        value: function() {
                            var e = this.props.businessProfile;
                            return e && e.description ? d.default.createElement("div", {
                                className: p.default.description
                            }, d.default.createElement(c.default, {
                                text: e.description,
                                direction: "auto",
                                selectable: !0,
                                titlify: !0
                            })) : null
                        }
                    }, {
                        key: "_renderPicture",
                        value: function() {
                            var e = this.props,
                                t = e.profilePicThumb,
                                a = e.contact;
                            if (!t) return null;
                            var n = (0, s.getDefaultIcon)(a.id);
                            return d.default.createElement("div", {
                                className: p.default.photo
                            }, d.default.createElement(s.DetailImageCommon, {
                                profilePicThumb: t,
                                loader: !0,
                                defaultIcon: n,
                                profilePicThumbImg: t.imgFull,
                                spinnerClassName: p.default.spinner,
                                imgClassName: p.default.img,
                                theme: "business"
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.contact;
                            return d.default.createElement("div", {
                                className: p.default.header,
                                "data-testid": "product-list-header"
                            }, this._renderPicture(), d.default.createElement("div", {
                                className: p.default.text
                            }, d.default.createElement(h.TextDiv, {
                                className: p.default.name,
                                theme: "large"
                            }, d.default.createElement(f.default, {
                                contact: e,
                                selectable: !0,
                                useVerifiedName: !0
                            })), this._renderDescription()))
                        }
                    }]), a
                }(d.Component);
            v.CONCERNS = {
                profilePicThumb: ["imgFull"],
                contact: ["id", "isMe"],
                businessProfile: ["description"]
            }, v.displayName = "ProductListDrawerHeader";
            var g = (0, m.default)(v, v.CONCERNS);
            t.default = g
        },
        16576: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = n(a(67294)),
                s = r(a(34541)),
                c = r(a(66015)),
                f = r(a(92999)),
                p = a(85539),
                m = a(79164),
                h = r(a(44612)),
                v = r(a(44589)),
                g = a(89305),
                _ = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(r))).handleClick = function(t, a) {
                            var n = e.props.product;
                            (0, p.logDetailImageClick)({
                                product: (0, g.unproxy)(n),
                                catalogContext: (0, m.getProductCatalogContext)(e.context)
                            });
                            var r = {
                                activeProductImage: a,
                                productImageCollection: n.productImageCollection,
                                getZoomNode: function() {
                                    return t
                                },
                                product: n
                            };
                            s.default.productImageViewerModal(r, (0, m.getProductCatalogSessionId)(e.context))
                        }, e
                    }
                    return (0, l.default)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.product,
                                a = e.isAvailable,
                                n = e.fetching,
                                r = t.productImageCollection.toArray();
                            return d.default.createElement("div", {
                                className: h.default.imageCarouselContainer
                            }, d.default.createElement(f.default, {
                                images: r,
                                fetching: n,
                                onClick: a ? this.handleClick : null,
                                renderFallback: !a,
                                fallbackMediaData: t.productMsgMediaData
                            }))
                        }
                    }]), a
                }(d.Component);
            _.contextType = c.default, _.CONCERNS = {
                product: ["productImageCollection", "productMsgMediaData", "catalogWid", "imageCdnUrl"]
            }, _.displayName = "ProductTile";
            var C = (0, v.default)(_, _.CONCERNS);
            t.default = C
        },
        99953: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onPopupCancel,
                    a = e.onReport,
                    n = e.onTellUsMore,
                    s = function() {
                        t()
                    },
                    c = u.default.t(1332),
                    f = r.default.createElement("div", {
                        key: "ReportProductChoicePopup-desc"
                    }, u.default.t(1330)),
                    p = r.default.createElement(o.default, {
                        a8nText: "popup-controls-more",
                        type: "secondary",
                        onClick: function() {
                            n()
                        },
                        key: "ReportProductChoicePopup-moreBtn"
                    }, u.default.t(1333)),
                    m = r.default.createElement(o.default, {
                        a8nText: "popup-controls-report",
                        type: "secondary",
                        onClick: function() {
                            a()
                        },
                        key: "ReportProductChoicePopup-reportBtn"
                    }, u.default.t(1329)),
                    h = r.default.createElement(o.default, {
                        type: "secondary",
                        onClick: s,
                        key: 0
                    }, u.default.t(1694)),
                    v = r.default.createElement("div", {
                        className: d.default.buttons
                    }, r.default.createElement("div", {
                        className: d.default.button
                    }, p), r.default.createElement("div", {
                        className: d.default.button
                    }, m), r.default.createElement("div", {
                        className: d.default.button
                    }, h));
                return r.default.createElement(l.default, {
                    handlers: {
                        escape: s
                    }
                }, r.default.createElement(i.default, {
                    title: c,
                    actions: v,
                    children: f
                }))
            };
            var r = n(a(67294)),
                o = n(a(16973)),
                l = n(a(76568)),
                u = n(a(89115)),
                i = n(a(55090)),
                d = n(a(78140))
        },
        93433: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(a(34575)),
                o = n(a(93913)),
                l = n(a(2205)),
                u = n(a(99842)),
                i = n(a(67294)),
                d = a(83180),
                s = n(a(34541)),
                c = n(a(28082)),
                f = n(a(89115)),
                p = a(85539),
                m = a(59078),
                h = n(a(99953)),
                v = n(a(39211)),
                g = a(89305),
                _ = function(e) {
                    (0, l.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, r.default)(this, a);
                        for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(o)))._submitReason = function(t) {
                            var a = e.props,
                                n = a.product,
                                r = a.sessionId;
                            return (0, p.logReportProduct)({
                                product: (0, g.unproxy)(n),
                                catalogSessionId: r
                            }), (0, m.reportProduct)(n.catalogWid, n.id.toString(), t)
                        }, e.onDelete = function() {
                            e.end()
                        }, e.onReport = function(t) {
                            e._onShowSubmittedToast(t)
                        }, e.onTellUsMore = function() {
                            e.push(i.default.createElement(v.default, {
                                onTellUsMoreSubmit: e.onReport,
                                onCancel: e.onCancel
                            }), "none")
                        }, e.onPopupCancel = function() {
                            e.end()
                        }, e.onCancel = function() {
                            e.end()
                        }, e._onReportSubmitted = function() {
                            e.end()
                        }, e._onShowSubmittedToast = function(t) {
                            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, d.genId)(),
                                n = e.props,
                                r = n.product,
                                o = n.sessionId,
                                l = e._submitReason(t),
                                u = new d.ActionType(f.default.t(1296)),
                                c = l.then((function() {
                                    return (0, p.logReportProductSuccess)({
                                        product: (0, g.unproxy)(r),
                                        catalogSessionId: o
                                    }), new d.ActionType(`${f.default.t(1295)}. ${f.default.t(1331)}`)
                                })).catch((function() {
                                    return (0, p.logReportProductFailure)({
                                        product: (0, g.unproxy)(r),
                                        catalogSessionId: o
                                    }), __LOG__(3)`error submitting product report`, new d.ActionType(f.default.t(1294), {
                                        actionText: f.default.t(1347),
                                        actionHandler: function() {
                                            return e._onShowSubmittedToast(t, a)
                                        }
                                    })
                                }));
                            return s.default.openToast(i.default.createElement(d.ActionToast, {
                                id: a,
                                initialAction: u,
                                pendingAction: c
                            })), e._onReportSubmitted(), l
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push(i.default.createElement(h.default, {
                                onTellUsMore: this.onTellUsMore,
                                onReport: this.onReport,
                                onPopupCancel: this.onPopupCancel,
                                onCancel: this.onCancel
                            }))
                        }
                    }]), a
                }(c.default);
            t.default = _
        },
        39211: (e, t, a) => {
            "use strict";
            var n = a(20862),
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(34575)),
                l = r(a(93913)),
                u = r(a(2205)),
                i = r(a(99842)),
                d = r(a(94184)),
                s = n(a(67294)),
                c = r(a(16973)),
                f = r(a(34541)),
                p = r(a(76568)),
                m = r(a(89115)),
                h = r(a(45425)),
                v = r(a(55090)),
                g = r(a(85371)),
                _ = n(a(92631)),
                C = ["NO_MATCH", "SPAM", "ILLEGAL", "SCAM", "KNOCKOFF", "OTHER"],
                E = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            reason: null
                        }, e.handleCancel = function() {
                            var t = e.props.onCancel;
                            t && t()
                        }, e._handleSubmit = function() {
                            if (!e.state.reason) return e._noSelectionToast();
                            e.props.onTellUsMoreSubmit(e.state.reason)
                        }, e._handleReasonChange = function(t) {
                            t.target && t.target.value && e.setState({
                                reason: t.target.value
                            })
                        }, e
                    }
                    return (0, l.default)(a, [{
                        key: "_noSelectionToast",
                        value: function() {
                            f.default.openToast(s.default.createElement(_.default, {
                                msg: m.default.t(1297),
                                id: (0, _.genId)()
                            }))
                        }
                    }, {
                        key: "_renderRadioOptions",
                        value: function() {
                            var e = this,
                                t = this.state.reason;
                            return C.map((function(a) {
                                return s.default.createElement("li", {
                                    key: `ReportProductReasonPopup-${a}-option`
                                }, s.default.createElement("label", {
                                    className: g.default.label
                                }, s.default.createElement("input", {
                                    type: "radio",
                                    name: a,
                                    value: a,
                                    onChange: e._handleReasonChange,
                                    className: g.default.input,
                                    checked: t === a
                                }), s.default.createElement(S, {
                                    reason: a
                                })))
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = m.default.t(1290),
                                t = s.default.createElement("div", {
                                    className: (0, d.default)(g.default.section)
                                }, s.default.createElement("ul", {
                                    className: g.default.reasonList
                                }, this._renderRadioOptions())),
                                a = s.default.createElement(c.default, {
                                    a8nText: "popup-controls-submit",
                                    type: "primary",
                                    onClick: this._handleSubmit,
                                    key: "ReportProductReasonPopup-submitButton",
                                    disabled: !this.state.reason
                                }, m.default.t(1293)),
                                n = s.default.createElement(c.default, {
                                    type: "secondary",
                                    a8nText: "popup-controls-cancel",
                                    onClick: this.handleCancel,
                                    key: "ReportProductReasonPopup-cancelButton"
                                }, m.default.t(1694)),
                                r = {
                                    escape: this.handleCancel
                                },
                                o = s.default.createElement("div", {
                                    className: g.default.buttons
                                }, n, a);
                            return s.default.createElement(p.default, {
                                handlers: r
                            }, s.default.createElement(v.default, {
                                title: e,
                                actions: o,
                                children: t
                            }))
                        }
                    }]), a
                }(s.Component);

            function S(e) {
                var t = e.reason;
                switch (t) {
                    case "NO_MATCH":
                        return s.default.createElement(h.default, {
                            id: 1288
                        });
                    case "SPAM":
                        return s.default.createElement(h.default, {
                            id: 1292
                        });
                    case "ILLEGAL":
                        return s.default.createElement(h.default, {
                            id: 1286
                        });
                    case "SCAM":
                        return s.default.createElement(h.default, {
                            id: 1291
                        });
                    case "KNOCKOFF":
                        return s.default.createElement(h.default, {
                            id: 1287
                        });
                    case "OTHER":
                        return s.default.createElement(h.default, {
                            id: 1289
                        });
                    default:
                        throw new Error(`Invalid reason: ${t}`)
                }
            }
            t.default = E, E.displayName = "ReportProductReasonPopup"
        },
        57478: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.isEditMode,
                    a = e.catalog,
                    n = e.subtitle,
                    f = e.hideIncompleteRows,
                    p = e.productsToShow,
                    m = e.businessProfile;
                return r.default.createElement(u.default, {
                    onProductDetail: function(e) {
                        if (t) i.default.openModal(r.default.createElement(c.default, null));
                        else {
                            var a = new URL((0, s.default)(e.url, "product.url"), `https://${d.default.HOSTNAME.FACEBOOK}`);
                            o.default.open(String(a))
                        }
                    },
                    onProductCatalog: function() {
                        t ? i.default.openModal(r.default.createElement(c.default, null)) : (0, l.goToShop)(m)
                    },
                    catalog: a,
                    subtitle: n,
                    hideIncompleteRows: f,
                    productsToShow: p,
                    showShopsLogo: !0
                })
            };
            var r = n(a(67294)),
                o = n(a(21144)),
                l = a(79984),
                u = n(a(51934)),
                i = n(a(34541)),
                d = n(a(34263)),
                s = n(a(35643)),
                c = n(a(96182))
        },
        79974: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.RingTheme = void 0;
            var r = n(a(59713)),
                o = n(a(67154)),
                l = n(a(94184)),
                u = n(a(67294)),
                i = n(a(50234)),
                d = n(a(33819)),
                s = a(54302).Mirrored(["STATUS_V3_PANEL", "BUSINESS_CONTACT_INFO"]);
            t.RingTheme = s;

            function c(e) {
                var t, a = e.stroke,
                    n = e.size,
                    c = (0, d.default)(e.statusV3, ["unreadCount", "totalCount", "contact"]),
                    f = function(e) {
                        var t = 100 + a;
                        return u.default.createElement("circle", (0, o.default)({
                            cx: t / 2,
                            cy: t / 2,
                            r: 50,
                            fill: "none",
                            strokeLinecap: "round",
                            strokeWidth: a
                        }, e))
                    },
                    p = function(e, t, a, n) {
                        for (var r = "", o = 0; o < e; o++) r += o === e - 1 ? `${t} ${a-e*(n+t)+n} ` : `${t} ${n} `;
                        return r
                    },
                    m = 100 + a,
                    h = c.totalCount,
                    v = 10,
                    g = 50 * Math.PI * 2;
                g - 10 * h < 1 && (v = g / h / 1.2);
                var _, C, E = (g - v * h) / h,
                    S = g / 4 - v / 2,
                    y = c.contact.isMe ? 0 : c.unreadCount,
                    P = h - y;
                if (y) {
                    var T, k = S + h * (v + E);
                    1 !== h && (T = p(y, E, g, v)), _ = f({
                        strokeDashoffset: k,
                        strokeDasharray: T,
                        className: i.default.unread
                    })
                }
                if (P) {
                    var w, I = S + P * (v + E);
                    1 !== h && (w = p(P, E, g, v)), C = f({
                        strokeDashoffset: I,
                        strokeDasharray: w,
                        className: i.default.read
                    })
                }
                return u.default.createElement("svg", {
                    className: (0, l.default)((t = {}, (0, r.default)(t, i.default.statusV3PanelRing, e.theme === s.STATUS_V3_PANEL), (0, r.default)(t, i.default.businessContactInfoRing, e.theme === s.BUSINESS_CONTACT_INFO), t)),
                    width: n,
                    height: n,
                    viewBox: `0 0 ${m} ${m}`
                }, _, C)
            }
            c.defaultProps = {
                size: 48,
                stroke: 4,
                theme: s.STATUS_V3_PANEL
            };
            var f = c;
            t.default = f
        },
        23669: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setupStatusV3Controller = function(e, t) {
                if (e) {
                    if (e.type === i.default.TYPE.IMAGE) {
                        var a = 4500;
                        return l.default.isEmpty(t.caption) || (a += 2e3 * Math.min(t.caption.length / 150, 1)), new s(a)
                    }
                    return e.type === i.default.TYPE.VIDEO ? t.isGif ? new f : new d.default : new s(3e3)
                }
                if (t.type === u.default.MSG_TYPE.CHAT) {
                    var n = 2e3 + 60 * Math.min(t.body.length, 1e3);
                    return new s(n)
                }
                return new s(3e3)
            }, t.StatusV3GifController = t.StatusV3CountdownController = void 0;
            var r = n(a(34575)),
                o = n(a(93913)),
                l = n(a(96486)),
                u = n(a(34263)),
                i = n(a(28719)),
                d = n(a(35805)),
                s = function() {
                    function e(t) {
                        var a = this;
                        (0, r.default)(this, e), this.addListeners = function(e, t, n) {
                            a._onStart = e, a._onPause = t, a._onEnded = n
                        }, this.removeListeners = function() {
                            a._onStart = void 0, a._onPause = void 0, a._onEnded = void 0
                        }, this.play = function() {
                            if (a._timer) __LOG__(2)`Duplicate timer start`;
                            else {
                                a._timer = setTimeout(a._onTimeup, a._timeout), a._start = (new Date).getTime();
                                var e = a._onStart;
                                e && e(a._timeout, a._duration)
                            }
                        }, this.stop = function() {
                            if (a._timer) {
                                clearTimeout(a._timer), a._timer = null;
                                var e = (new Date).getTime();
                                a._timeout -= e - a._start;
                                var t = a._onPause;
                                t && t()
                            } else __LOG__(2)`Timer stop called on stopped timer`
                        }, this.resume = function() {
                            a.play()
                        }, this.pause = function() {
                            a.stop()
                        }, this._onTimeup = function() {
                            var e = a._onEnded;
                            e && e()
                        }, this._duration = t, this._timeout = this._duration, this._start = 0
                    }
                    return (0, o.default)(e, [{
                        key: "duration",
                        get: function() {
                            return this._duration
                        }
                    }]), e
                }();
            t.StatusV3CountdownController = s;
            var c = 6e3,
                f = function() {
                    function e() {
                        var t = this;
                        (0, r.default)(this, e), this.removeListeners = function() {
                            t._onStart = void 0, t._onPause = void 0, t._onEnded = void 0, t._videoController.removeListeners(), t._countdownController.removeListeners()
                        }, this.setVideo = function(e, a) {
                            t._video !== e && (t._video = e, null != a && (t._duration = a), t._videoController.setVideo(e))
                        }, this._onVideoStartHandler = function() {
                            var e = t._video;
                            if (null != e) {
                                var a = t._onStart,
                                    n = e.duration || t._duration,
                                    r = Math.max(3 * n * 1e3, c);
                                a && a(r - 1e3 * n * t._playCounter - 1e3 * e.currentTime, r)
                            }
                        }, this._onVideoPauseHandler = function() {
                            var e = t._onPause;
                            e && e()
                        }, this._onVideoEndedHandler = function() {
                            var e = t._video;
                            if (null != e) {
                                t._playCounter++;
                                var a = t._onEnded;
                                3 === t._playCounter && (t._videoEnded = !0, t._timerEnded && a && a()), e.currentTime = 0, t._videoEnded && t._timerEnded || setTimeout((function() {
                                    t._videoController.play()
                                }), 0)
                            }
                        }, this._onTimerEndedHandler = function() {
                            var e = t._onEnded;
                            t._timerEnded = !0, e && t._videoEnded && e()
                        }, this.play = function() {
                            t._videoController.play(), t._countdownController.play()
                        }, this.stop = function() {
                            t._videoController.stop(), t._countdownController.stop()
                        }, this.resume = function() {
                            t._videoController.resume(), t._countdownController.resume()
                        }, this.pause = function() {
                            t._videoController.pause(), t._countdownController.pause()
                        }, this._playCounter = 0, this._timerEnded = !1, this._videoEnded = !1, this._videoController = new d.default, this._countdownController = new s(c), this._videoController.addListeners(this._onVideoStartHandler, this._onVideoPauseHandler, this._onVideoEndedHandler), this._countdownController.addListeners(void 0, void 0, this._onTimerEndedHandler)
                    }
                    return (0, o.default)(e, [{
                        key: "addListeners",
                        value: function(e, t, a) {
                            this._onStart = e, this._onPause = t, this._onEnded = a
                        }
                    }, {
                        key: "duration",
                        get: function() {
                            return Math.max(3 * (this._video && this._video.duration || this._duration) * 1e3, c)
                        }
                    }]), e
                }();
            t.StatusV3GifController = f
        },
        33864: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                r = a(20862),
                o = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = o(a(59713)),
                u = o(a(34575)),
                i = o(a(93913)),
                d = o(a(2205)),
                s = o(a(99842)),
                c = o(a(94184)),
                f = r(a(67294)),
                p = o(a(63056)),
                m = o(a(57136)),
                h = o(a(77478)),
                v = function(e) {
                    (0, d.default)(a, e);
                    var t = (0, s.default)(a);

                    function a() {
                        var e;
                        return (0, u.default)(this, a), (e = t.apply(this, arguments))._setRefBar = function(t) {
                            e._refBar = t
                        }, e.handleClick = function(t) {
                            e.props.onClick && e.props.onClick(t)
                        }, e.handleStart = function(t, a) {
                            if (e._refBar) {
                                var n = 1e3 * p.default.statusVideoMaxDuration,
                                    r = Math.min(t, n),
                                    o = Math.min(a, n);
                                (0, h.default)(e._refBar, "stop"), e._barAnimation = (0, h.default)(e._refBar, {
                                    translateX: ["0%", `-${r/o*100}%`]
                                }, {
                                    duration: r,
                                    easing: "linear"
                                })
                            }
                        }, e.handlePause = function() {
                            e._refBar && (0, h.default)(e._refBar, "stop")
                        }, e.handleEnded = function() {
                            return e._barAnimation ? e._barAnimation : n.resolve()
                        }, __LOG__(2)`Current index: ${e.props.current}, total count: ${e.props.total}`, e.props.current >= 0 && e.props.current < e.props.total || (__LOG__(4, void 0, new Error, !0)`Assertion failed!`, SEND_LOGS("bad current status v3 index")), e
                    }
                    return (0, i.default)(a, [{
                        key: "render",
                        value: function() {
                            for (var e = this, t = [], a = 100 / this.props.total + "%", n = function(n) {
                                    var r, o = (0, c.default)(m.default.foreground, (r = {}, (0, l.default)(r, m.default.filled, n < e.props.current), (0, l.default)(r, m.default.empty, n > e.props.current), (0, l.default)(r, m.default.active, n === e.props.current), r)),
                                        u = f.default.createElement("div", {
                                            className: m.default.wrapper,
                                            style: {
                                                width: a
                                            },
                                            key: n,
                                            onClick: function() {
                                                return e.handleClick(n)
                                            }
                                        }, f.default.createElement("div", {
                                            className: m.default.bg
                                        }), f.default.createElement("div", {
                                            className: m.default.mask
                                        }, f.default.createElement("div", {
                                            className: o,
                                            ref: n === e.props.current ? e._setRefBar : function() {}
                                        })));
                                    t.push(u)
                                }, r = 0; r < this.props.total; ++r) n(r);
                            return f.default.createElement("div", {
                                className: m.default.container
                            }, t)
                        }
                    }]), a
                }(f.Component);
            t.default = v, v.displayName = "StatusV3ProgressBar"
        },
        71267: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.seenCount;
                if (null != t) return r.default.createElement("div", {
                    className: l.default.container
                }, r.default.createElement(u.default, {
                    name: "status-v3-seen",
                    className: l.default.iconSeen
                }), r.default.createElement("div", {
                    className: l.default.seenCount
                }, t));
                return r.default.createElement(o.default, {
                    stroke: 3,
                    size: 12
                })
            };
            var r = n(a(67294)),
                o = n(a(87729)),
                l = n(a(76168)),
                u = n(a(75131))
        },
        60879: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                r = a(20862),
                o = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.StatusV3MsgNotFound = t.StatusV3LoadingError = t.InvalidStatusV3Iterator = void 0;
            var l = o(a(34575)),
                u = o(a(2205)),
                i = o(a(99842)),
                d = a(53615),
                s = a(80835),
                c = a(1838),
                f = o(a(96486)),
                p = o(a(66005)),
                m = r(a(59502)),
                h = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, i.default)(a);

                    function a() {
                        return (0, l.default)(this, a), t.apply(this, arguments)
                    }
                    return a
                }((0, c.customError)("InvalidStatusV3Iterator"));
            t.InvalidStatusV3Iterator = h;
            var v = function(e) {
                (0, u.default)(a, e);
                var t = (0, i.default)(a);

                function a() {
                    return (0, l.default)(this, a), t.apply(this, arguments)
                }
                return a
            }((0, c.customError)("StatusV3LoadingError"));
            t.StatusV3LoadingError = v;
            var g = function(e) {
                (0, u.default)(a, e);
                var t = (0, i.default)(a);

                function a() {
                    return (0, l.default)(this, a), t.apply(this, arguments)
                }
                return a
            }((0, c.customError)("StatusV3MsgNotFound"));
            t.StatusV3MsgNotFound = g;
            t.default = function e(t, a) {
                var r = this;
                if ((0, l.default)(this, e), this._printInfo = function() {
                        r.statuses.forEach((function(e) {
                            __LOG__(2)`Total count: ${e.totalCount}, unread count: ${e.unreadCount}, msgs length: ${e.msgs.length}`
                        }))
                    }, this.getFirstUnread = function(e, t, a) {
                        var o = r.statuses.findIndex((function(t) {
                            return t.statusV3 === e
                        }));
                        if (-1 !== o) {
                            var l, u = r.statuses[o],
                                i = u.readMsgKeys;
                            return a ? (l = u.msgs ? u.msgs.findIndex((function(e) {
                                return a && e.id.toString() === a.toString()
                            })) : -1) >= 0 ? n.resolve({
                                msgIdx: l,
                                statusIdx: o
                            }) : n.reject(new h) : -1 === (l = u.msgs ? u.msgs.findIndex((function(e) {
                                return !i.includes(e.id.toString())
                            })) : -1) && e.msgs.msgLoadState.noEarlierMsgs ? (l = t ? 0 : u.msgs.length - 1, n.resolve({
                                msgIdx: l,
                                statusIdx: o
                            })) : -1 !== l ? n.resolve({
                                msgIdx: l,
                                statusIdx: o
                            }) : 0 === u.unreadCount && t && u.msgs.length > 0 ? n.resolve({
                                msgIdx: 0,
                                statusIdx: o
                            }) : r._fetchMore(e).then((function() {
                                return r.getFirstUnread(e, t, a)
                            })).catch((function(e) {
                                return __LOG__(3)`error while getting first unread status: ${String(e)}`, n.reject(new h)
                            }))
                        }
                        return n.reject(new h)
                    }, this.hasNext = function(e) {
                        var t = r.statuses[e.statusIdx];
                        return e.msgIdx + 1 < t.totalCount || e.statusIdx + 1 < r.statuses.length
                    }, this.getNext = function(e) {
                        var t = r.statuses[e.statusIdx],
                            a = t.statusV3;
                        if (e.msgIdx + 1 < t.totalCount && e.msgIdx + 1 < t.msgs.length) return n.resolve({
                            msgIdx: e.msgIdx + 1,
                            statusIdx: e.statusIdx
                        });
                        if (e.msgIdx + 1 < t.totalCount) return a.msgs.msgLoadState.noEarlierMsgs ? (__LOG__(3)`Loaded ${t.msgs.length} messages with total count ${t.totalCount}, but noEarlierMsgs set`, n.reject(new h)) : r._fetchMore(a).then((function() {
                            return r.getNext(e)
                        })).catch((function(t) {
                            if (__LOG__(3)`error while loading more status msgs: ${String(t)}`, e.statusIdx + 1 < r.statuses.length) {
                                var a = r.statuses[e.statusIdx + 1].statusV3;
                                return r.getFirstUnread(a, !0)
                            }
                            return n.reject(new h)
                        }));
                        if (e.statusIdx + 1 < r.statuses.length) {
                            var o = r.statuses[e.statusIdx + 1].statusV3;
                            return r.getFirstUnread(o, !0)
                        }
                        return n.reject(new h)
                    }, this.hasPrev = function(e) {
                        return e.msgIdx > 0 || e.statusIdx > 0
                    }, this.getPrev = function(e) {
                        if (e.msgIdx > 0) return n.resolve({
                            msgIdx: e.msgIdx - 1,
                            statusIdx: e.statusIdx
                        });
                        if (e.statusIdx > 0) {
                            var t = r.statuses[e.statusIdx - 1].statusV3;
                            return r.getFirstUnread(t, !1)
                        }
                        return n.reject(new h)
                    }, this.statusAt = function(e, t) {
                        var a = r.statuses[e.statusIdx],
                            o = a.statusV3;
                        return t < a.msgs.length ? n.resolve({
                            msgIdx: t,
                            statusIdx: e.statusIdx
                        }) : o.msgs.msgLoadState.noEarlierMsgs ? n.reject(new h) : r._fetchMore(o).then((function() {
                            return r.statusAt(e, t)
                        })).catch((function(e) {
                            return __LOG__(3)`error while loading more status msgs: ${String(e)}`, n.reject(new h)
                        }))
                    }, this._fetchMore = function(e) {
                        return (0, s.promiseLoop)((function(t, a, n) {
                            var o = (0, d.delayMs)(m.expBackoff(n, 12e4, 1e3, .1));
                            return e.loadMore().then((function() {
                                var a = r.statuses.findIndex((function(t) {
                                    return t.statusV3 === e
                                }));
                                if (-1 !== a) {
                                    var l = r.statuses[a],
                                        u = l.totalCount,
                                        i = l.unreadCount,
                                        d = e.msgs.getModelsArray().slice(0, u),
                                        s = d.slice(0, u - i),
                                        c = f.default.map(s, (function(e) {
                                            return e.id.toString()
                                        }));
                                    l.msgs = d, l.readMsgKeys = f.default.uniq(f.default.concat(l.readMsgKeys, c)), t(!0)
                                } else {
                                    if (!(n >= 4)) return o;
                                    t(!1)
                                }
                            })).catch((function() {
                                if (!(n >= 4)) return o;
                                t(!1)
                            }))
                        })).then((function(e) {
                            if (!e) throw new v
                        }))
                    }, a) {
                    var o = t.msgs.getModelsArray().find((function(e) {
                        return a && e.id.toString() === a.toString()
                    }));
                    if (!o) throw new g;
                    this.statuses = [{
                        statusV3: t,
                        totalCount: 1,
                        unreadCount: 0,
                        msgs: [o],
                        readMsgKeys: [o.id.toString()]
                    }]
                } else if (t.unreadCount > 0 && !t.contact.isMe && !t.contact.statusMute) {
                    var u = p.default.getUnexpired(!0),
                        i = [];
                    u.forEach((function(e) {
                        if (!e.contact.statusMute) {
                            var t = e.msgs.getModelsArray(),
                                a = e.totalCount - e.unreadCount,
                                n = t.slice(0, a),
                                r = f.default.map(n, (function(e) {
                                    return e.id.toString()
                                }));
                            i.push({
                                statusV3: e,
                                totalCount: e.totalCount,
                                unreadCount: e.unreadCount,
                                msgs: t,
                                readMsgKeys: r
                            })
                        }
                    })), this.statuses = i
                } else {
                    var c = t.msgs.getModelsArray(),
                        _ = t.totalCount - t.unreadCount,
                        C = c.slice(0, _),
                        E = f.default.map(C, (function(e) {
                            return e.id.toString()
                        })),
                        S = [{
                            statusV3: t,
                            totalCount: t.totalCount,
                            unreadCount: t.unreadCount,
                            msgs: c,
                            readMsgKeys: E
                        }];
                    this.statuses = S
                }
                this._printInfo()
            }
        },
        35805: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(a(34575)),
                o = n(a(93913)),
                l = n(a(63056));

            function u(e) {
                return Math.min(e, l.default.statusVideoMaxDuration)
            }
            var i = function() {
                function e() {
                    var t = this;
                    (0, r.default)(this, e), this.addListeners = function(e, a, n) {
                        t._onStart = e, t._onPause = a, t._onEnded = n
                    }, this.setVideo = function(e) {
                        t._video !== e && (t._unsetVideo(), t._video = e, null != e && (e.addEventListener("playing", t._onPlayingHandler), e.addEventListener("pause", t._onPauseHandler), e.addEventListener("ended", t._onEndedHandler), e.addEventListener("timeupdate", t._onTimeUpdate)))
                    }, this._unsetVideo = function() {
                        var e = t._video;
                        e && (t.stop(), e.removeEventListener("playing", t._onPlayingHandler), e.removeEventListener("pause", t._onPauseHandler), e.removeEventListener("ended", t._onEndedHandler), e.removeEventListener("timeupdate", t._onTimeUpdate))
                    }, this.play = function() {
                        t._video && t._video.play()
                    }, this.pause = function() {
                        t._video && !t._video.paused && t._video.pause()
                    }, this.resume = function() {
                        t._video && t._video.play()
                    }, this.stop = function() {
                        t._video && !t._video.paused && t._video.pause()
                    }, this._onPlayingHandler = function() {
                        var e = t._video;
                        if (null != e) {
                            var a = t._onStart;
                            if (a) {
                                var n = u(e.duration);
                                a(1e3 * (n - e.currentTime), 1e3 * n)
                            }
                        }
                    }, this._onPauseHandler = function() {
                        var e = t._onPause;
                        e && e()
                    }, this._onEndedHandler = function() {
                        var e = t._onEnded;
                        e && e()
                    }, this._onTimeUpdate = function() {
                        var e, a = null === (e = t._video) || void 0 === e ? void 0 : e.currentTime;
                        if (null != a && a >= l.default.statusVideoMaxDuration) {
                            t.stop(), t._onEndedHandler();
                            var n = t._video;
                            n && (n.removeEventListener("timeupdate", t._onTimeUpdate), n.removeEventListener("ended", t._onEndedHandler))
                        }
                    }, this.removeListeners = function() {
                        t.stop(), t._onStart = void 0, t._onPause = void 0, t._onEnded = void 0
                    }
                }
                return (0, o.default)(e, [{
                    key: "duration",
                    get: function() {
                        return null == this._video ? 0 : 1e3 * u(this._video.duration)
                    }
                }]), e
            }();
            t.default = i
        },
        72520: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                window.getSelection().removeAllRanges();
                var t = document.getElementById(e),
                    a = document.createRange();
                t && a.selectNode(t), window.getSelection().addRange(a);
                try {
                    var n = document.execCommand("copy");
                    return window.getSelection().removeAllRanges(), n
                } catch (e) {
                    return !1
                }
            }
        },
        32855: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                r = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(a(81109)),
                l = r(a(34575)),
                u = r(a(93913)),
                i = a(676),
                d = a(10901),
                s = {};
            s[i.ExtendedTextMessageFontType.SERIF] = {
                google: {
                    families: ["Roboto"]
                }
            }, s[i.ExtendedTextMessageFontType.SANS_SERIF] = {
                google: {
                    families: ["Droid Serif"]
                }
            }, s[i.ExtendedTextMessageFontType.NORICAN_REGULAR] = {
                google: {
                    families: ["Norican"]
                }
            }, s[i.ExtendedTextMessageFontType.BRYNDAN_WRITE] = {
                custom: {
                    families: ["Bryndan-Write"]
                }
            }, s[i.ExtendedTextMessageFontType.OSWALD_HEAVY] = {
                google: {
                    families: ["Oswald:bold"]
                }
            };
            var c = {};
            c[i.ExtendedTextMessageFontType.BRYNDAN_WRITE] = `@font-face {font-family:"Bryndan-Write"; src:url("${d}") format("truetype");}`;
            var f = new(function() {
                function e() {
                    (0, l.default)(this, e), this.loadedFonts = {}, this.loadingPromise = {}
                }
                return (0, u.default)(e, [{
                    key: "load",
                    value: function(e) {
                        var t = this;
                        if (this.loadedFonts[e]) return n.resolve();
                        if (this.loadingPromise[e]) return this.loadingPromise[e];
                        var a = s[e],
                            r = c[e],
                            l = (r ? new n((function(e, t) {
                                var a = document.createElement("style");
                                a.appendChild(document.createTextNode(r)), a.onload = e, a.onerror = t, document.head && document.head.appendChild(a)
                            })) : n.resolve()).then((function() {
                                return new n((function(n, r) {
                                    var l = (0, o.default)((0, o.default)({}, a), {}, {
                                        active: function() {
                                            t.loadedFonts[e] = !0, n()
                                        },
                                        inactive: function() {
                                            t.loadingPromise[e] = void 0, r("Failed to load font: " + e)
                                        }
                                    });
                                    WebFont.load(l)
                                }))
                            }));
                        return this.loadingPromise[e] = l, l
                    }
                }, {
                    key: "loadAllFonts",
                    value: function() {
                        var e = this;
                        return n.all(Array.from(i.ExtendedTextMessageFontType.members()).map((function(t) {
                            return e.load(t)
                        })))
                    }
                }]), e
            }());
            t.default = f
        },
        42715: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return o.default.supportsFeature(o.default.F.RICH_TEXT) ? (0, r.default)(e, i, u.TextSerializer) : e
            };
            var r = n(a(50875)),
                o = n(a(22021)),
                l = a(12518),
                u = a(38628),
                i = l.Configuration.ComposeBox()
        },
        64478: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createProductLink = function(e, t) {
                return `https://wa.me/p/${t}/${e}`
            }, t.createCatalogLink = function(e) {
                return `https://wa.me/c/${e}`
            }
        },
        30063: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.dayToWeekday = s, t.businessHoursFromConfig = c, t.getWebsiteLink = function(e) {
                return `https://l.wl.co/l?u=${encodeURIComponent(e)}`
            }, t.getBusinessHours = function(e) {
                var t = e.config,
                    a = (new Date).getDay();
                return u.DAYS_OF_WEEK.map((function(e, n) {
                    var r = (a + n) % u.DAYS_OF_WEEK.length,
                        o = u.DAYS_OF_WEEK[r];
                    return {
                        day: s(r),
                        hours: c(t[o]),
                        first: 0 === n
                    }
                }))
            }, t.getBusinessHoursForEdit = function(e) {
                var t, a = null == e ? {} : e.config,
                    n = e || {},
                    i = n.note,
                    s = n.timezone,
                    c = u.DAYS_OF_WEEK.map((function(e, n) {
                        var r, u = a[e],
                            i = l.default.weekdays(n);
                        return u && (t = u.mode, u.hours && (r = u.hours.map((function(e) {
                            var t = (0, o.default)(e, 2),
                                a = t[0],
                                n = t[1];
                            return [(0, d.minutesToTime)(a), (0, d.minutesToTime)(n)]
                        })))), {
                            dayName: i,
                            dayKey: e,
                            closed: !u,
                            hours: r
                        }
                    })),
                    f = l.default.weekdays(!0, 0),
                    p = l.default.weekdays().indexOf(f),
                    m = c.splice(p);
                return {
                    mode: t,
                    days: [].concat((0, r.default)(m), (0, r.default)(c)),
                    timezone: s,
                    note: i
                }
            }, Object.defineProperty(t, "minutesToTime", {
                enumerable: !0,
                get: function() {
                    return d.minutesToTime
                }
            }), Object.defineProperty(t, "timeStringToMinutes", {
                enumerable: !0,
                get: function() {
                    return d.timeStringToMinutes
                }
            });
            var r = n(a(319)),
                o = n(a(63038)),
                l = n(a(30381)),
                u = a(58435),
                i = n(a(89115)),
                d = a(22223);

            function s(e) {
                return l.default.weekdays(e)
            }

            function c(e) {
                switch (e && e.mode) {
                    case u.BUSINESS_HOUR_MODES.SPECIFIC_HOURS:
                        return e && e.hours ? e.hours.map((function(e) {
                            return e.map(d.minutesToTime).join(" - ")
                        })).join("\n") : "";
                    case u.BUSINESS_HOUR_MODES.APPOINTMENT_ONLY:
                        return i.default.t(358);
                    case u.BUSINESS_HOUR_MODES.OPEN_24H:
                        return i.default.t(370);
                    default:
                        return i.default.t(359)
                }
            }
        },
        22223: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.minutesToTime = function(e) {
                return o.default.utc().startOf("day").add(e, "minutes").format(l.default.timestampStrFormat())
            }, t.timeStringToMinutes = void 0;
            var r = n(a(43269)),
                o = n(a(30381)),
                l = n(a(79140)),
                u = ["h:mm A", "h:mmA", "HH:mm", "HH.mm", "H:mm", "H.mm"];
            t.timeStringToMinutes = function(e) {
                var t, a = e.trim();
                if (a) {
                    var n, l = (0, r.default)(u);
                    try {
                        for (l.s(); !(n = l.n()).done;) {
                            var i = n.value,
                                d = (0, o.default)(a, i, !0);
                            if (d.isValid()) {
                                t = d;
                                break
                            }
                        }
                    } catch (e) {
                        l.e(e)
                    } finally {
                        l.f()
                    }
                    if (t) {
                        var s = t,
                            c = (0, o.default)().startOf("day"),
                            f = s.diff(c);
                        return o.default.duration(f).asMinutes()
                    }
                }
            }
        },
        10901: (e, t, a) => {
            e.exports = a.p + "bryndan_write_20e48b2ec8c64b2a1ceb5b28d9bcc9d0.ttf"
        },
        21997: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                coverPhoto: "_3_2za",
                isEditable: "_1aFdX",
                avatar: "_3RULU",
                noStatusBorder: "_3xp59",
                hasStatusBorder: "IYr2u"
            }
        },
        91214: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                cartIcon: "PKmps",
                inheritColor: "qM2C3"
            }
        },
        55140: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                carousel: "alksS",
                contentContainer: "OkAlG",
                slidesContainer: "_1w5W1",
                loaded: "j1J2j",
                fadeIn: "_2QkLV",
                spinnerContainer: "_1kDDe",
                spinner: "_3j4fM"
            }
        },
        57246: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                slide: "_2MjCA",
                slideInnerContainer: "_2cG76",
                image: "ubkU5"
            }
        },
        87917: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                canvasComponent: "_2hvhy",
                canvasEmpty: "K5agt",
                canvasSecondRow: "_1oFnY",
                canvasFirst: "_35MQv",
                more: "_1s12y",
                container: "BPtzo",
                justifySpaceBetween: "_1BP_C",
                galleryEmpty: "_3l3Pp",
                drawer: "_3rdfe",
                drawerBody: "_3COK4"
            }
        },
        26251: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                mediaCanvas: "_7xcOR",
                shade: "_3t-Dc",
                iconType: "_3SfD8",
                iconStar: "qSojz",
                mediaCanvasDuration: "_2ENh_",
                shadeTop: "kt7p8",
                canvasBody: "_2pnVj",
                canvasSelected: "xRcWX",
                mediaSelect: "_2GKAW",
                canvasComponent: "_3_8JL",
                canvasSecondRow: "_2j2vv",
                viewerFlow: "q0PwG",
                active: "_2IToT",
                viewerFlowTransparent: "_1Brnl"
            }
        },
        87041: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                icon: "_23QTJ",
                disabled: "iP9Fm",
                transparent: "_2HMfd",
                compact: "_25tj-"
            }
        },
        87571: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                labelRow: "_1_9J2",
                standaloneLabelRow: "_2Lv1o",
                labelContainer: "_3A-ba",
                standaloneLabelContainer: "_34ojr"
            }
        },
        59271: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                section: "_17dED",
                control: "_3T0RE"
            }
        },
        555: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                icon: "_2I7Gg"
            }
        },
        73858: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                container: "_2QzJd",
                containerNoIcon: "_1EaD-",
                containerListAligned: "_1I4H7",
                icon: "_13qOF",
                danger: "_1O1hL",
                success: "x8B-w",
                bodyContainer: "_36Lzk",
                body: "Qy5WW"
            }
        },
        70583: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                actionText: "_3nrbz"
            }
        },
        67978: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                mediaPanelTools: "f3Dup",
                profileThumb: "_2xUs5",
                profileContainer: "Cq6XJ",
                media: "_1_TZb",
                profileViewer: "_3OWRM",
                profileViewerImg: "_2hH_e",
                container: "_9-YHG",
                "media-viewer-animate": "_7DTuk",
                mediaViewerAnimate: "_7DTuk",
                headerContainer: "_1U_13"
            }
        },
        60654: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                icon: "woEzZ"
            }
        },
        67873: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                icon: "_1eLBZ"
            }
        },
        19614: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                container: "xWfq_",
                popupPanel: "B7YnW",
                wrapper: "_35Bca",
                emojiIcon: "_1nsaN",
                sendIcon: "dJI7Y",
                lineWrapper: "_2X8K7"
            }
        },
        4764: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                playerWrapper: "_1E241",
                mediaViewer: "_19K91",
                mediaStateControls: "_12QEi",
                playerBackground: "_20Ki1",
                media: "Kr9Tk",
                captionBackdrop: "_43j_5",
                mediaCaption: "_3yP6V",
                progressBackdrop: "_21bEk",
                progressBarBackdropNarrow: "_2paot",
                profile: "_1Oh7Z",
                nonClickProfile: "_3AuES",
                profileNarrow: "_2iahT",
                playerAvatar: "_19BWt",
                measuringProfile: "nF1-N",
                profileMac: "_1At-O",
                msgInfo: "_2LKvA",
                msgInfoName: "_3VYz8",
                timestamp: "_2tXxE",
                playerContent: "_2MwhR",
                statusPanelPlayerContent: "_2HrM5",
                statusThumbnailPlayerContent: "_1CbQs",
                loading: "_3e8Or",
                v3Image: "_1pf64",
                v3Video: "_3uHZH",
                text: "ecFHI",
                textLarge: "nRSvd",
                textMedium: "_1WIYL",
                textSmall: "_1PvQk",
                font_1: "_2b6no",
                font1: "_2b6no",
                font_2: "_3KLoY",
                font2: "_3KLoY",
                font_3: "_2LoU3",
                font3: "_2LoU3",
                font_5: "wQ88j",
                font5: "wQ88j",
                unknown: "_3-Nhy",
                seen: "_1PF3_",
                textThumbnailPlayerContent: "_3wxAA"
            }
        },
        43693: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                container: "_1ufTj",
                inputContainer: "_1rO5S",
                btnContainer: "_3KRZ3",
                btnPosition: "D6yuB"
            }
        },
        89729: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                chevron: "_23hMF",
                catalogEntryButton: "_3GuCY",
                subtitle: "_3nHWT",
                addIcon: "_2bk1N",
                placeholderThumb: "_1yVu_",
                largeGallerySpacing: "_2VRfc",
                shopsLogo: "taQA_"
            }
        },
        73040: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                prompt: "_1MKrR"
            }
        },
        52160: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                linkIcon: "_3n54f",
                inheritColor: "dF0c_"
            }
        },
        78097: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                linkContainer: "_36niN",
                activeLink: "_218Ww"
            }
        },
        26886: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                addItemButton: "_2e394",
                themeInList: "_2tMVN",
                themeCollections: "_1AeNq",
                themeDefault: "_28K_k",
                addIcon: "_3UMBX"
            }
        },
        7105: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                pendingBanner: "_3oeDZ",
                iconContainerPending: "_1lkig",
                iconContainerRejected: "NHVOL",
                rejectedBanner: "_14t2G"
            }
        },
        23628: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                header: "_361SI",
                list: "_300on"
            }
        },
        83669: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                list: "_1x_gj",
                addItemsNotice: "_3uGr0"
            }
        },
        74591: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                collectionListItem: "V0C2k",
                reviewStateRejected: "_22_86"
            }
        },
        35769: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                body: "_3I775",
                loadingContainer: "AOdvD",
                text: "_2yxqg",
                loadingText: "_38kp2",
                shiftUp: "_1gMAq",
                availabilityBanner: "_32wIk"
            }
        },
        57142: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                buttonContainer: "_1IcSo",
                button: "_2I8rD",
                addToCartButton: "_1jLhq",
                addToCartIcon: "PoXRl",
                addToCartIconDisabled: "_3l5-l",
                addToCartContainer: "_3shFG",
                name: "_1l7n8",
                price: "_27spI",
                originalPrice: "_1DYEx",
                description: "_2f0i8",
                more: "Jjucz",
                descBlock: "_2IFFX"
            }
        },
        65374: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                productImage: "_3rmhv",
                productImageContainer: "_1E8LA",
                productThumb: "_3HQ90",
                productThumbContainer: "_6O-Qy",
                prompt: "_3K3du"
            }
        },
        81618: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                header: "_9UV-x",
                list: "_8UHUF"
            }
        },
        81891: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                header: "_1fhXS",
                photo: "_1XF90",
                text: "_3oXCf",
                name: "_3o6p1",
                description: "_2OTQS",
                spinner: "_2Fceq",
                img: "sz61d"
            }
        },
        44612: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                imageCarouselContainer: "_33-Dh"
            }
        },
        78140: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                buttons: "wH7Ij",
                button: "_2Na0-"
            }
        },
        85371: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                section: "_3KLwP",
                reasonList: "CsJ_u",
                label: "KvCZU",
                input: "_3uXLe",
                buttons: "_1VUcX"
            }
        },
        50234: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                statusV3PanelRing: "cFfKt",
                businessContactInfoRing: "_3EL6s",
                read: "_3tgk6",
                unread: "_1min4"
            }
        },
        57136: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                container: "_3b17O",
                wrapper: "sZBni",
                mask: "_3CRhO",
                bg: "_3r7AV",
                foreground: "_3f8oh",
                filled: "_3t0iC",
                empty: "_1A2HZ",
                active: "_2gskD"
            }
        },
        76168: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                iconSeen: "_1VGOo",
                seenCount: "_1QbZj",
                container: "PP_R1"
            }
        }
    }
]);