/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [7205], {
        30523: e => {
            ! function() {
                "use strict";
                e.exports = {
                    polyfill: function() {
                        var e = window,
                            t = document;
                        if (!("scrollBehavior" in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                            var a, n = e.HTMLElement || e.Element,
                                l = {
                                    scroll: e.scroll || e.scrollTo,
                                    scrollBy: e.scrollBy,
                                    elementScroll: n.prototype.scroll || r,
                                    scrollIntoView: n.prototype.scrollIntoView
                                },
                                i = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                                o = (a = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(a) ? 1 : 0);
                            e.scroll = e.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== u(arguments[0]) ? m.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : l.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                            }, e.scrollBy = function() {
                                void 0 !== arguments[0] && (u(arguments[0]) ? l.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : m.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                            }, n.prototype.scroll = n.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== u(arguments[0])) {
                                        var e = arguments[0].left,
                                            t = arguments[0].top;
                                        m.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                    } else {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        l.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, n.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== u(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : l.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, n.prototype.scrollIntoView = function() {
                                if (!0 !== u(arguments[0])) {
                                    var a = f(this),
                                        n = a.getBoundingClientRect(),
                                        i = this.getBoundingClientRect();
                                    a !== t.body ? (m.call(this, a, a.scrollLeft + i.left - n.left, a.scrollTop + i.top - n.top), "fixed" !== e.getComputedStyle(a).position && e.scrollBy({
                                        left: n.left,
                                        top: n.top,
                                        behavior: "smooth"
                                    })) : e.scrollBy({
                                        left: i.left,
                                        top: i.top,
                                        behavior: "smooth"
                                    })
                                } else l.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function r(e, t) {
                            this.scrollLeft = e, this.scrollTop = t
                        }

                        function u(e) {
                            if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                            if ("object" == typeof e && "smooth" === e.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function d(e, t) {
                            return "Y" === t ? e.clientHeight + o < e.scrollHeight : "X" === t ? e.clientWidth + o < e.scrollWidth : void 0
                        }

                        function s(t, a) {
                            var n = e.getComputedStyle(t, null)["overflow" + a];
                            return "auto" === n || "scroll" === n
                        }

                        function c(e) {
                            var t = d(e, "Y") && s(e, "Y"),
                                a = d(e, "X") && s(e, "X");
                            return t || a
                        }

                        function f(e) {
                            for (; e !== t.body && !1 === c(e);) e = e.parentNode || e.host;
                            return e
                        }

                        function p(t) {
                            var a, n, l, o, r = (i() - t.startTime) / 468;
                            o = r = r > 1 ? 1 : r, a = .5 * (1 - Math.cos(Math.PI * o)), n = t.startX + (t.x - t.startX) * a, l = t.startY + (t.y - t.startY) * a, t.method.call(t.scrollable, n, l), n === t.x && l === t.y || e.requestAnimationFrame(p.bind(e, t))
                        }

                        function m(a, n, o) {
                            var u, d, s, c, f = i();
                            a === t.body ? (u = e, d = e.scrollX || e.pageXOffset, s = e.scrollY || e.pageYOffset, c = l.scroll) : (u = a, d = a.scrollLeft, s = a.scrollTop, c = r), p({
                                scrollable: u,
                                method: c,
                                startTime: f,
                                startX: d,
                                startY: s,
                                x: n,
                                y: o
                            })
                        }
                    }
                }
            }()
        },
        61934: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                l = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setGroupDesc = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return h((0, m.unproxy)(e), t)
            };
            var o = i(a(67294)),
                r = a(83180),
                u = i(a(34541)),
                d = a(14650),
                s = l(a(98569)),
                c = i(a(89115)),
                f = a(9578),
                p = i(a(75554)),
                m = a(89305);

            function h(e) {
                var t, a, l, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    m = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r.genId)(),
                    v = i && i.trim();
                if (v === (null === (t = e.groupMetadata) || void 0 === t ? void 0 : t.desc)) return n.reject(new s.ActionError);
                "" === v && (v = null);
                var g = (0, f.sendSetGroupDescription)(e.id, v, (0, p.default)(), null === (a = e.groupMetadata) || void 0 === a ? void 0 : a.descId),
                    E = null === (l = e.groupMetadata) || void 0 === l ? void 0 : l.desc,
                    _ = new r.ActionType(c.default.t(107)),
                    C = g.then((function() {
                        return new r.ActionType(c.default.t(109), {
                            actionText: c.default.t(207),
                            actionHandler: function() {
                                return h(e, E, m)
                            }
                        })
                    })).catchType(d.ServerStatusCodeError, (function(e) {
                        if (e.status >= 400) return new r.ActionType(c.default.t(108))
                    })).catch((function() {
                        return __LOG__(3)`models:chat:setGroupDesc dropped`, new r.ActionType(c.default.t(108), {
                            actionText: c.default.t(203),
                            actionHandler: function() {
                                return h(e, v, m)
                            }
                        })
                    }));
                return u.default.openToast(o.default.createElement(r.ActionToast, {
                    id: m,
                    initialAction: _,
                    pendingAction: C
                })), g.then((function(t) {
                    var a;
                    t._duplicate || (null === (a = e.groupMetadata) || void 0 === a || a.set({
                        desc: v || ""
                    }))
                })).catchType(d.ServerStatusCodeError, (function() {}))
            }
        },
        31914: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                l = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setGroupSubject = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return h((0, p.unproxy)(e), t)
            };
            var o = i(a(67294)),
                r = a(83180),
                u = i(a(34541)),
                d = a(14650),
                s = l(a(98569)),
                c = i(a(89115)),
                f = a(9578),
                p = a(89305),
                m = a(29846);

            function h(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r.genId)(),
                    l = t.trim();
                if (!l) return n.reject(new s.ActionError);
                if (l === e.contact.name) return n.reject(new s.ActionError);
                var i = (0, f.sendSetGroupSubject)(e.id, l),
                    p = e.contact.name,
                    v = new r.ActionType(c.default.t(127)),
                    g = i.then((function() {
                        return new r.ActionType(c.default.t(126, {
                            subject: l
                        }), {
                            actionText: c.default.t(207),
                            actionHandler: function() {
                                return h(e, p, a)
                            }
                        })
                    })).catchType(d.ServerStatusCodeError, (function(e) {
                        if (e.status >= 400) return new r.ActionType(c.default.t(125))
                    })).catch((function() {
                        return __LOG__(3)`models:chat:setSubject dropped`, new r.ActionType(c.default.t(125), {
                            actionText: c.default.t(203),
                            actionHandler: function() {
                                return h(e, l, a)
                            }
                        })
                    }));
                return u.default.openToast(o.default.createElement(r.ActionToast, {
                    id: a,
                    initialAction: v,
                    pendingAction: g
                })), i.then((function(t) {
                    if (!t._duplicate) {
                        var a = {
                            name: l
                        };
                        return (0, m.updateLocal)(e.contact.id, a).then((function() {
                            e.contact.set(a)
                        }))
                    }
                })).catchType(d.ServerStatusCodeError, (function() {}))
            }
        },
        54634: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    a = e.onClick,
                    n = e.contextMenu,
                    r = e.isPendingParticipant,
                    u = e.contextEnabled,
                    d = e.onContext,
                    s = (0, o.default)(e.participant, ["isAdmin"]);
                return l.default.createElement(i.default, {
                    contact: t,
                    admin: s.isAdmin,
                    onClick: a,
                    theme: "drawer-list",
                    contextEnabled: function() {
                        return null != u && u(t)
                    },
                    contextMenu: n,
                    onContext: function(e) {
                        return d && d(e, t)
                    },
                    isPendingParticipant: r,
                    showNotifyName: !0,
                    waitIdle: !0
                })
            };
            var l = n(a(67294)),
                i = n(a(63637)),
                o = n(a(33819))
        },
        45463: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(67154)),
                o = l(a(6479)),
                r = l(a(34575)),
                u = l(a(93913)),
                d = l(a(2205)),
                s = l(a(99842)),
                c = n(a(67294)),
                f = a(54654),
                p = l(a(42905)),
                m = l(a(22021)),
                h = l(a(89115)),
                v = l(a(68390)),
                g = l(a(24249)),
                E = l(a(75131)),
                _ = function(e) {
                    (0, d.default)(a, e);
                    var t = (0, s.default)(a);

                    function a() {
                        var e;
                        (0, r.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l)))._setGallery = function(t) {
                            e._gallery = t
                        }, e._queryCollection = function(t, a) {
                            var n = e.props,
                                l = n.docMsgs,
                                i = n.chat;
                            e.props.listeners.uiIdle((function() {
                                l.queryDocs(i, a)
                            }))
                        }, e
                    }
                    return (0, u.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.props.listeners.add(this.props.docMsgs, "add remove reset", (function() {
                                var t;
                                null === (t = e._gallery) || void 0 === t || t.forceUpdate()
                            })), this.props.listeners.add(this.props.docMsgs, "query_doc_before", (function() {
                                var t;
                                null === (t = e._gallery) || void 0 === t || t.forceUpdate()
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.docMsgs,
                                n = (t.listeners, t.chat),
                                l = (0, o.default)(t, ["docMsgs", "listeners", "chat"]);
                            return m.default.supportsFeature(m.default.F.MD_BACKEND) && n.endOfHistoryTransferType === f.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (e = c.default.createElement(p.default, {
                                icon: c.default.createElement(E.default, {
                                    name: "content-chat"
                                }),
                                theme: "list",
                                secondary: h.default.t(587)
                            }, h.default.t(588))), c.default.createElement(c.default.Fragment, null, c.default.createElement(g.default, (0, i.default)({
                                ref: this._setGallery,
                                msgsCollection: a,
                                queryCollection: this._queryCollection,
                                hasBefore: a.hasDocBefore,
                                queryBefore: a.queryDocBefore,
                                emptyText: h.default.t(1194),
                                chat: n
                            }, l)), e)
                        }
                    }]), a
                }(c.Component);
            _.displayName = "DocGallery";
            var C = (0, v.default)(_);
            t.default = C
        },
        82745: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = null != e.side ? o.default.createElement("div", {
                        className: u.default.side
                    }, e.side) : null,
                    a = (0, i.default)(u.default.container, (0, l.default)({}, u.default.multiline, e.multiline));
                return o.default.createElement("div", {
                    "data-a8n": r.default.key(e.a8nText),
                    className: a,
                    role: e.onClick ? "button" : null,
                    onClick: e.onClick
                }, o.default.createElement("div", {
                    className: u.default.block
                }, o.default.createElement("div", {
                    className: u.default.main
                }, e.children), t))
            };
            var l = n(a(59713)),
                i = n(a(94184)),
                o = n(a(67294)),
                r = n(a(97930)),
                u = n(a(41323))
        },
        31660: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.chat,
                    a = e.groupMetadata,
                    n = e.onClick;
                return a ? d.default.createElement(T, {
                    groupMetadata: a,
                    onClick: n
                }) : d.default.createElement(S, {
                    chat: t,
                    onClick: n
                })
            }, t.BaseEphemeralSettingRow = P;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                d = n(a(67294)),
                s = a(99703),
                c = l(a(34541)),
                f = l(a(25960)),
                p = l(a(82745)),
                m = l(a(66322)),
                h = l(a(22021)),
                v = a(7617),
                g = l(a(89115)),
                E = l(a(44589)),
                _ = l(a(75131)),
                C = a(28770);
            var M = function(e) {
                (0, r.default)(a, e);
                var t = (0, u.default)(a);

                function a() {
                    var e;
                    (0, i.default)(this, a);
                    for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(l)))._getEphemeralDuration = function() {
                        var t;
                        return null !== (t = e.props.chat.ephemeralDuration) && void 0 !== t ? t : 0
                    }, e._unblockContact = function() {
                        var t = e.props,
                            a = t.chat,
                            n = t.onClick;
                        a.contact.addPendingAction((0, s.unblockContact)(a.contact)).then((function() {
                            n(), c.default.closeModal()
                        })).catch((function() {}))
                    }, e._closeModal = function() {
                        c.default.closeModal()
                    }, e._openUnblockContactModal = function() {
                        c.default.openModal(d.default.createElement(f.default, {
                            onOK: e._unblockContact,
                            okText: g.default.t(1500),
                            onCancel: e._closeModal,
                            cancelText: g.default.t(1694)
                        }, e._getEphemeralDuration() ? g.default.t(733) : g.default.t(734)))
                    }, e._handleClick = function() {
                        var t = e.props,
                            a = t.chat,
                            n = t.onClick;
                        a.contact.isContactBlocked ? e._openUnblockContactModal() : n()
                    }, e
                }
                return (0, o.default)(a, [{
                    key: "render",
                    value: function() {
                        return d.default.createElement(P, {
                            ephemeralDuration: this._getEphemeralDuration(),
                            canChange: !0,
                            onClick: this._handleClick
                        })
                    }
                }]), a
            }(d.PureComponent);
            M.CONCERNS = {
                chat: ["contact", "ephemeralDuration"]
            }, M.displayName = "ContactEphemeralSettingRow";
            var S = (0, E.default)(M, M.CONCERNS),
                y = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l)))._closeModal = function() {
                            c.default.closeModal()
                        }, e._openNonAdminModal = function() {
                            c.default.openModal(d.default.createElement(f.default, {
                                onOK: e._closeModal,
                                okText: g.default.t(1865)
                            }, g.default.t(673)))
                        }, e._handleClick = function() {
                            var t = e.props,
                                a = t.onClick;
                            t.groupMetadata.canSetEphemeralSetting() ? a() : e._openNonAdminModal()
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "render",
                        value: function() {
                            var e, t = this.props.groupMetadata;
                            return d.default.createElement(P, {
                                ephemeralDuration: null !== (e = t.ephemeralDuration) && void 0 !== e ? e : 0,
                                canChange: t.canSetEphemeralSetting(),
                                onClick: this._handleClick
                            })
                        }
                    }]), a
                }(d.PureComponent);
            y.CONCERNS = {
                groupMetadata: ["ephemeralDuration", "participants"]
            }, y.displayName = "GroupEphemeralSettingRow";
            var T = (0, E.default)(y, y.CONCERNS);

            function P(e) {
                var t, a = e.ephemeralDuration,
                    n = e.canChange,
                    l = e.onClick;
                t = a > 0 ? n ? h.default.isEphemeral24HDurationEnabled() ? (0, v.getDisappearingMessageDurationString)(a) : g.default.t(728) : (0, v.getDisappearingMessageExplanationString)(a) : g.default.t(727);
                var i = d.default.createElement(_.default, {
                    className: n ? m.default.chevronIcon : m.default.ephemeralIcon,
                    name: n ? "chevron-right-alt" : "disappearing",
                    directional: !0
                });
                return d.default.createElement(p.default, {
                    onClick: l,
                    side: i,
                    multiline: !0
                }, d.default.createElement("div", {
                    className: m.default.header
                }, d.default.createElement(C.TextSpan, {
                    theme: "title"
                }, g.default.t(836))), d.default.createElement(C.TextDiv, {
                    theme: "muted"
                }, t))
            }
        },
        63744: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                l = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = i(a(67154)),
                r = i(a(6479)),
                u = i(a(34575)),
                d = i(a(93913)),
                s = i(a(2205)),
                c = i(a(99842)),
                f = l(a(67294)),
                p = a(54654),
                m = i(a(34263)),
                h = i(a(42905)),
                v = i(a(22021)),
                g = i(a(89115)),
                E = i(a(31710)),
                _ = i(a(68390)),
                C = i(a(24249)),
                M = i(a(52558)),
                S = i(a(75131)),
                y = function(e) {
                    (0, s.default)(a, e);
                    var t = (0, c.default)(a);

                    function a() {
                        var e;
                        (0, u.default)(this, a);
                        for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)))._setGallery = function(t) {
                            e._gallery = t
                        }, e._handleNewMsgs = function(t) {
                            if (t) {
                                var a = [],
                                    l = Array.isArray(t) ? t : [t];
                                n.all(l.map((function(e) {
                                    return e.getLinks().length && a.push(e), n.resolve()
                                }))).then((function() {
                                    a.length && e.props.linkMsgs.add(a)
                                }))
                            }
                        }, e._queryCollection = function(t, a) {
                            var n = e.props,
                                l = n.linkMsgs,
                                i = n.chat;
                            e.props.listeners.uiIdle((function() {
                                l.queryLinks(i, a)
                            }))
                        }, e._renderLinks = function(t) {
                            var a = e.props,
                                n = a.linkMsgs,
                                l = a.selectedMessages,
                                i = [];
                            return n.forEach((function(a) {
                                var n = !a.isSentByMe && a.isGroupMsg;
                                a.getGalleryLinks().forEach((function(o, r) {
                                    o.href !== a.matchedText && i.push(f.default.createElement(E.default, {
                                        key: `${a.id.toString()}-${r}`,
                                        msg: a.safe(),
                                        link: o,
                                        displayAuthor: n,
                                        selectable: e.props.selectable,
                                        selectedMessages: l,
                                        onMessageSelect: e.props.onMessageSelect,
                                        onClickMsg: t
                                    }))
                                })), a.linkPreview && i.push(f.default.createElement(M.default, {
                                    key: a.id.toString(),
                                    msg: a,
                                    selectable: e.props.selectable,
                                    selectedMessages: l,
                                    onMessageSelect: e.props.onMessageSelect,
                                    displayType: m.default.DISP_TYPE.GALLERY,
                                    onClickMsg: t
                                }))
                            })), i.reverse(), i
                        }, e
                    }
                    return (0, d.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.props.listeners.add(this.props.linkMsgs, "add remove reset", (function() {
                                var t;
                                null === (t = e._gallery) || void 0 === t || t.forceUpdate()
                            })), this.props.listeners.add(this.props.linkMsgs, "query_link_before", (function() {
                                var t;
                                null === (t = e._gallery) || void 0 === t || t.forceUpdate()
                            })), this.props.listeners.add(this.props.chat.msgs, "add bulk_add", this._handleNewMsgs)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.linkMsgs,
                                n = (t.listeners, t.chat),
                                l = (0, r.default)(t, ["linkMsgs", "listeners", "chat"]);
                            return v.default.supportsFeature(v.default.F.MD_BACKEND) && n.endOfHistoryTransferType === p.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (e = f.default.createElement(h.default, {
                                icon: f.default.createElement(S.default, {
                                    name: "content-chat"
                                }),
                                theme: "list",
                                secondary: g.default.t(587)
                            }, g.default.t(590))), f.default.createElement(f.default.Fragment, null, f.default.createElement(C.default, (0, o.default)({
                                ref: this._setGallery,
                                msgsCollection: a,
                                queryCollection: this._queryCollection,
                                hasBefore: a.hasLinkBefore,
                                queryBefore: a.queryLinkBefore,
                                renderElements: this._renderLinks,
                                emptyText: g.default.t(1196),
                                chat: n
                            }, l)), e)
                        }
                    }]), a
                }(f.Component);
            y.displayName = "LinkGallery";
            var T = (0, _.default)(y);
            t.default = T
        },
        31710: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(59713)),
                o = l(a(34575)),
                r = l(a(93913)),
                u = l(a(2205)),
                d = l(a(99842)),
                s = l(a(94184)),
                c = n(a(67294)),
                f = l(a(22965)),
                p = a(59518),
                m = l(a(34263)),
                h = l(a(41769)),
                v = l(a(53697)),
                g = l(a(89115)),
                E = l(a(8767)),
                _ = l(a(52933)),
                C = l(a(68390)),
                M = l(a(44706)),
                S = l(a(44589)),
                y = l(a(73975)),
                T = l(a(38512)),
                P = a(60438),
                b = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, d.default)(a);

                    function a(e) {
                        var n;
                        (0, o.default)(this, a), (n = t.call(this, e)).mouseOver = function() {
                            n.state.hover || n.setState({
                                hover: !0
                            })
                        }, n.mouseEnter = function() {
                            n.state.hover || n.setState({
                                hover: !0
                            })
                        }, n.mouseLeave = function() {
                            n.state.hover && n.setState({
                                hover: !1
                            })
                        }, n.handleSelectChange = function(e) {
                            n.state.selected !== e && n.setState({
                                selected: e
                            })
                        }, n.handleSelectClick = function(e) {
                            e && e.stopPropagation(), n.props.onMessageSelect(n.props.msg.unsafe(), !n.state.selected)
                        }, n.handleClick = function() {
                            n.props.onClickMsg(n.props.msg.unsafe(), !n.state.selected)
                        };
                        var l = e.msg,
                            i = e.selectedMessages;
                        return n.state = {
                            hover: !1,
                            selected: i.isSelected(l.unsafe())
                        }, n
                    }
                    return (0, r.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.listeners.add(this.props.selectedMessages, this.props.msg.id.toString(), this.handleSelectChange)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.msg,
                                n = t.link,
                                l = t.displayAuthor,
                                o = this.props.selectable || this.state.hover ? c.default.createElement(M.default, {
                                    checked: this.state.selected,
                                    onClick: this.handleSelectClick,
                                    msgTheme: "gallery"
                                }) : null,
                                r = (0, p.Conversation)({
                                    mentions: a.mentionMap(),
                                    links: a.getLinks(),
                                    selectable: true,
                                    trusted: a.isTrusted()
                                }),
                                u = a.body && a.body.includes(n.url) ? a.body : a.caption,
                                d = l ? c.default.createElement("div", {
                                    className: E.default.author
                                }, c.default.createElement(f.default, {
                                    msg: a,
                                    contact: a.senderObj
                                })) : null,
                                C = a.getSuspiciousLinks().length > 0;
                            return c.default.createElement(v.default, {
                                hover: this.state.hover,
                                onClick: this.handleClick,
                                onMouseEnter: this.state.hover ? null : this.mouseEnter,
                                onMouseOver: this.state.hover ? null : this.mouseOver,
                                onMouseLeave: this.state.hover ? this.mouseLeave : null
                            }, c.default.createElement("div", {
                                className: E.default.msg
                            }, c.default.createElement(T.default, {
                                transitionName: "delay-leave"
                            }, o), c.default.createElement(P.MessageContainer, {
                                isSentByMe: a.isSentByMe
                            }, c.default.createElement("div", {
                                className: (0, s.default)(E.default.bubble, (e = {}, (0, i.default)(e, E.default.hasAuthor, l), (0, i.default)(e, E.default.hasSuspiciousLinks, C), e))
                            }, d, c.default.createElement(y.default, {
                                link: n,
                                displayType: m.default.DISP_TYPE.GALLERY
                            }), c.default.createElement(_.default, {
                                title: n.url,
                                isSentByMe: a.isSentByMe,
                                canonicalUrl: n.domain,
                                displayType: m.default.DISP_TYPE.GALLERY,
                                star: a.star
                            }), c.default.createElement(h.default, {
                                text: u,
                                selectable: true,
                                className: E.default.text,
                                dirMismatch: a.rtl !== g.default.isRTL(),
                                direction: a.dir,
                                formatters: r
                            })))))
                        }
                    }]), a
                }(c.Component);
            b.CONCERNS = {
                msg: ["body", "caption", "dir", "id", "isSentByMe", "mediaData", "type", "rtl", "senderObj", "star", "mediaData", "asRevoked"]
            }, b.displayName = "LinkMsg";
            var k = (0, C.default)((0, S.default)(b, b.CONCERNS));
            t.default = k
        },
        24249: (e, t, a) => {
            "use strict";
            var n = a(95318),
                l = a(20862);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(67294)),
                o = n(a(34541)),
                r = n(a(34263)),
                u = a(67485),
                d = n(a(96658)),
                s = n(a(68198)),
                c = n(a(52558)),
                f = a(89305),
                p = n(a(92234)),
                m = n(a(94126));

            function h(e, t) {
                var a = e.queryBefore,
                    n = e.hasBefore,
                    l = e.msgsCollection,
                    h = e.emptyText,
                    v = e.scrollOffset,
                    g = void 0 === v ? 0 : v,
                    E = e.selectable,
                    _ = e.onMessageSelect,
                    C = e.queryCollection,
                    M = e.selectedMessages,
                    S = e.renderElements,
                    y = e.onProductDetail,
                    T = e.setScrollOffset,
                    P = (0, p.default)();
                (0, i.useImperativeHandle)(t, (function() {
                    return {
                        forceUpdate: P
                    }
                }));
                var b = (0, i.useRef)(null),
                    k = function(e) {
                        n && C(e)
                    },
                    I = (0, m.default)((function(e) {
                        var t = e.scrollHeight - e.clientHeight - e.scrollTop < r.default.SCROLL_FUDGE;
                        n && t && k(l.head()), T && T(e.scrollTop)
                    }), 100);
                (0, i.useEffect)((function() {
                    n && k();
                    var e = b.current;
                    return e && (e.scrollTop = g),
                        function() {
                            I.cancel()
                        }
                }), []);
                var N = function(e, t) {
                        var a = (0, f.unproxy)(e);
                        E && void 0 !== t ? _(a, t) : o.default.openChatAt(a.chat, a.chat.getSearchContext(a))
                    },
                    A = S ? S(N) : l.map((function(e, t) {
                        return i.default.createElement(c.default, {
                            key: `${e.id.toString()}_${t}`,
                            msg: e,
                            selectable: E,
                            selectedMessages: M,
                            onMessageSelect: _,
                            displayType: r.default.DISP_TYPE.GALLERY,
                            onClickMsg: N,
                            onProductClick: y
                        })
                    })).reverse();
                if (a) {
                    if (0 === A.length) return i.default.createElement(u.Loading, null);
                    A.push(i.default.createElement(d.default, null))
                }
                return 0 !== l.length || a || n ? i.default.createElement("div", {
                    ref: b,
                    onScroll: function(e) {
                        I(e.target)
                    },
                    className: s.default.wrapper
                }, A) : i.default.createElement(u.Empty, {
                    text: h,
                    a8nText: "no-elements"
                })
            }
            var v = (0, i.forwardRef)(h);
            t.default = v
        },
        87327: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, h.default)(e.chat, ["isGroup", "muteExpiration", "archive"]),
                    a = (0, h.default)(e.mute, ["isMuted"]),
                    n = (0, h.default)(e.settings, ["showArchiveV2"]),
                    v = function(e) {
                        u.default.muteChat((0, p.unproxy)(t), e)
                    },
                    g = function() {
                        v(!1), u.default.closeModal()
                    },
                    E = a.isMuted,
                    _ = t.muteExpiration;
                if (t.archive && (0, c.archiveV2Supported)() && n.showArchiveV2) return l.default.createElement(s.default, null, l.default.createElement(m.TextSpan, {
                    theme: "muted",
                    size: "16"
                }, f.default.t(241)));
                var C, M = E ? function() {
                        var e = t.isGroup ? f.default.t(572) : f.default.t(570);
                        u.default.openModal(l.default.createElement(d.default, {
                            onOK: g,
                            okText: f.default.t(87),
                            onCancel: function() {
                                return u.default.closeModal()
                            },
                            cancelText: f.default.t(1694)
                        }, e))
                    } : function() {
                        v(!0)
                    },
                    S = l.default.createElement(o.default, {
                        checked: E,
                        onChange: M
                    }),
                    y = E ? f.default.t(1703) : f.default.t(1844);
                if (E && _) {
                    var T = r.default.untilStr(_);
                    C = l.default.createElement(m.TextDiv, {
                        theme: "muted"
                    }, T)
                }
                return l.default.createElement(s.default, {
                    a8nText: i.default.key("block-mute"),
                    side: S,
                    onClick: M,
                    multiline: !(!E || !_)
                }, l.default.createElement(m.TextSpan, {
                    theme: "title"
                }, y), C)
            };
            var l = n(a(67294)),
                i = n(a(97930)),
                o = n(a(26015)),
                r = n(a(79140)),
                u = n(a(34541)),
                d = n(a(25960)),
                s = n(a(82745)),
                c = a(31230),
                f = n(a(89115)),
                p = a(89305),
                m = a(28770),
                h = n(a(33819))
        },
        15939: (e, t, a) => {
            "use strict";
            var n = a(60077).default,
                l = a(20862),
                i = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = i(a(67154)),
                r = i(a(6479)),
                u = i(a(34575)),
                d = i(a(93913)),
                s = i(a(2205)),
                c = i(a(99842)),
                f = l(a(67294)),
                p = a(54654),
                m = i(a(42905)),
                h = i(a(22021)),
                v = i(a(89115)),
                g = i(a(68390)),
                E = i(a(24249)),
                _ = i(a(75131)),
                C = function(e) {
                    (0, s.default)(a, e);
                    var t = (0, c.default)(a);

                    function a() {
                        var e;
                        (0, u.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l)))._setGallery = function(t) {
                            e._gallery = t
                        }, e._queryCollection = function(t, a) {
                            var n = e.props,
                                l = n.productMsgs,
                                i = n.chat;
                            e.props.listeners.uiIdle((function() {
                                l.queryProducts(i, a)
                            }))
                        }, e
                    }
                    return (0, d.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.props.listeners.add(this.props.productMsgs, "add remove reset", (function() {
                                var t;
                                null === (t = e._gallery) || void 0 === t || t.forceUpdate()
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.productMsgs,
                                l = (t.listeners, t.chat),
                                i = (0, r.default)(t, ["productMsgs", "listeners", "chat"]);
                            return h.default.supportsFeature(h.default.F.MD_BACKEND) && l.endOfHistoryTransferType === p.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY && (e = f.default.createElement(m.default, {
                                icon: f.default.createElement(_.default, {
                                    name: "content-chat"
                                }),
                                theme: "list",
                                secondary: v.default.t(587)
                            }, v.default.t(593))), f.default.createElement(f.default.Fragment, null, f.default.createElement(E.default, (0, o.default)({
                                ref: this._setGallery,
                                msgsCollection: a,
                                queryCollection: this._queryCollection,
                                hasBefore: a.hasProductBefore,
                                queryBefore: a.hasProductBefore ? n.resolve() : null,
                                emptyText: v.default.t(1200),
                                chat: l
                            }, i)), e)
                        }
                    }]), a
                }(f.Component);
            C.displayName = "ProductGallery";
            var M = (0, g.default)(C);
            t.default = M
        },
        99472: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(a(34575)),
                i = n(a(93913)),
                o = n(a(81506)),
                r = n(a(2205)),
                u = n(a(99842)),
                d = n(a(67294)),
                s = n(a(34541)),
                c = n(a(25960)),
                f = n(a(48629)),
                p = n(a(84576)),
                m = n(a(41769)),
                h = n(a(28082)),
                v = n(a(89115)),
                g = a(11367),
                E = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, l.default)(this, a);
                        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(i))).contactFilter = function(t) {
                            var a = e.props.chat.groupMetadata;
                            return !!f.default.isFilteredContact(t) && (!(null == a ? void 0 : a.participants.get(t.id)) || v.default.t(228))
                        }, e.confirmAddParticipant = function(t) {
                            var a = e.onAddParticipant.bind((0, o.default)(e), t),
                                n = v.default.t(554, {
                                    participant: t.formattedName,
                                    subject: e.props.chat.contact.name
                                });
                            e.push(d.default.createElement(c.default, {
                                onOK: a,
                                okText: v.default.t(217),
                                onCancel: e._pop,
                                cancelText: v.default.t(1694)
                            }, d.default.createElement(m.default, {
                                text: n
                            })))
                        }, e.onAddParticipant = function(t) {
                            (0, g.addParticipants)(e.props.chat, [t]).catch((function() {})), s.default.closeModal()
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push(d.default.createElement(p.default, {
                                title: v.default.t(217),
                                filter: this.contactFilter,
                                onCancel: this._pop,
                                onSelect: this.confirmAddParticipant
                            }))
                        }
                    }]), a
                }(h.default);
            t.default = E
        },
        31828: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(319)),
                o = l(a(34575)),
                r = l(a(93913)),
                u = l(a(81506)),
                d = l(a(2205)),
                s = l(a(99842)),
                c = l(a(67294)),
                f = a(90695),
                p = l(a(34541)),
                m = l(a(25960)),
                h = l(a(48629)),
                v = l(a(41769)),
                g = l(a(28082)),
                E = l(a(89115)),
                _ = a(11367),
                C = n(a(66132)),
                M = function(e) {
                    (0, d.default)(a, e);
                    var t = (0, s.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(l)))._isGroupParticipant = function(t) {
                            var a;
                            return !!(null === (a = e.props.chat.groupMetadata) || void 0 === a ? void 0 : a.participants.get(t))
                        }, e.customSecondaryText = function(t) {
                            var a;
                            return (null === (a = e.props.chat.groupMetadata) || void 0 === a ? void 0 : a.participants.get(t)) ? E.default.t(228) : null
                        }, e.contactFilter = function(t) {
                            var a = e.props.chat.groupMetadata;
                            return !!h.default.isFilteredContact(t) && (!(null == a ? void 0 : a.participants.get(t.id)) || E.default.t(228))
                        }, e.confirmAddParticipant = function(t) {
                            var a = e.props.chat;
                            e.push(c.default.createElement(m.default, {
                                onOK: e.onAddParticipant.bind((0, u.default)(e), t),
                                okText: E.default.t(217, {
                                    _plural: t.length
                                }),
                                onCancel: e._pop,
                                cancelText: E.default.t(1694)
                            }, c.default.createElement(v.default, {
                                text: e._makeNameEnumeration(t, a.contact.name)
                            })))
                        }, e._makeNameEnumeration = function(e, t) {
                            var a = e.map((function(e) {
                                return e.formattedShortName || e.shortName
                            })).reduce((function(t, a, n) {
                                return [].concat((0, i.default)(t), [a, n !== e.length - 1 && E.default.t(672) || ""])
                            }), []);
                            return E.default.t(555, {
                                participants: a.join(""),
                                subject: t
                            })
                        }, e.onAddParticipant = function(t) {
                            (0, _.addParticipants)(e.props.chat, t).catch((function() {})), p.default.closeModal()
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, r.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push(c.default.createElement(C.default, {
                                onConfirm: this.confirmAddParticipant,
                                filter: this.contactFilter,
                                title: E.default.t(217),
                                isDisabled: this._isGroupParticipant,
                                isSelected: this._isGroupParticipant,
                                customSecondaryText: this.customSecondaryText,
                                listType: C.ListType.PARTICIPANT_MANAGE_MODAL,
                                singleSelectionFooterType: f.FooterType.CONFIRM,
                                multipleSelectionFooterType: f.FooterType.CONFIRM
                            }))
                        }
                    }]), a
                }(g.default);
            t.default = M
        },
        6026: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = n(a(34575)),
                i = n(a(93913)),
                o = n(a(2205)),
                r = n(a(99842)),
                u = n(a(67294)),
                d = n(a(83365)),
                s = n(a(86922)),
                c = n(a(28082)),
                f = n(a(58695)),
                p = function(e) {
                    (0, o.default)(a, e);
                    var t = (0, r.default)(a);

                    function a() {
                        var e;
                        (0, l.default)(this, a);
                        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i)))._showArchiveSettingsDrawer = function() {
                            e.push(u.default.createElement(d.default, {
                                settings: f.default,
                                onClose: e._pop
                            }))
                        }, e._pop = function() {
                            e.pop()
                        }, e
                    }
                    return (0, i.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.push(u.default.createElement(s.default, {
                                showSettings: this._showArchiveSettingsDrawer,
                                onClose: this._pop,
                                settings: f.default
                            }))
                        }
                    }]), a
                }(c.default);
            t.default = p
        },
        55571: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(67154)),
                o = l(a(34575)),
                r = l(a(93913)),
                u = l(a(2205)),
                d = l(a(99842)),
                s = l(a(67294)),
                c = l(a(99301)),
                f = l(a(46991)),
                p = l(a(61418)),
                m = l(a(34541)),
                h = l(a(96438)),
                v = l(a(91411)),
                g = l(a(47518)),
                E = a(78911),
                _ = l(a(66015)),
                C = l(a(66577)),
                M = l(a(28082)),
                S = a(31230),
                y = l(a(2714)),
                T = l(a(55375)),
                P = l(a(92511)),
                b = a(43481),
                k = a(85539),
                I = n(a(48310)),
                N = l(a(8643)),
                A = a(79164),
                w = l(a(73626)),
                O = l(a(71431)),
                R = l(a(10437)),
                x = l(a(89193)),
                D = l(a(82260)),
                L = l(a(32702)),
                B = l(a(43112)),
                F = l(a(98740)),
                G = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        (0, o.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(l)))._scrollOffset = 0, e._setScrollOffset = function(t) {
                            e._scrollOffset = t
                        }, e.onProductDetail = function(t, a) {
                            var n = e.props.chat,
                                l = s.default.createElement(O.default, {
                                    chat: n,
                                    collectionId: a,
                                    product: t,
                                    onEnd: e._end,
                                    onBack: e._popAndUpdate,
                                    refreshCarousel: !1,
                                    onProductLinkClick: e._onProductLinkClick,
                                    onCartClick: e._onCartClick
                                });
                            e.push(l)
                        }, e.onProductDetailFromInfo = function(t) {
                            var a = s.default.createElement(R.default, {
                                chat: e.props.chat,
                                productInfo: t,
                                onEnd: e._end,
                                onBack: e._pop,
                                onProductDetail: e.onProductDetail,
                                onProductCatalog: e.onProductCatalogHeaderClick,
                                onProductLinkClick: e._onProductLinkClick,
                                onCartClick: e._onCartClick
                            });
                            e.push(a)
                        }, e.onCollectionSeeAll = function(t) {
                            var a = e.props.chat.id;
                            e.push(s.default.createElement(h.default, {
                                contact: e.props.chat.contact,
                                onProductDetail: e.onProductDetail,
                                catalogId: a,
                                onBack: e._pop,
                                onCatalogLinkClick: e._onCatalogLinkClick,
                                onCartClick: e._onCartClick,
                                collection: t
                            }))
                        }, e._onProductLinkClick = function(t) {
                            e.push(s.default.createElement(x.default, {
                                product: t,
                                onBack: e._pop
                            }))
                        }, e._onCatalogLinkClick = function(t, a) {
                            e.push(s.default.createElement(f.default, {
                                catalog: t,
                                contact: a,
                                onBack: e._pop
                            }))
                        }, e._onCartClick = function(t) {
                            var a = (0, A.getProductCatalogContext)(e.props.context),
                                n = (0, L.default)(t, e.props.chat, a);
                            n && e.push(n)
                        }, e.pushProductCatalog = function() {
                            var t = e.props.chat,
                                a = (0, S.canViewCollections)() ? s.default.createElement(p.default, {
                                    contact: t.contact,
                                    onProductDetail: e.onProductDetail,
                                    catalogId: t.id,
                                    onBack: e._pop,
                                    businessProfile: t.contact.businessProfile,
                                    onCatalogLinkClick: e._onCatalogLinkClick,
                                    onCartClick: e._onCartClick,
                                    onCollectionSeeAll: e.onCollectionSeeAll
                                }) : s.default.createElement(D.default, {
                                    contact: t.contact,
                                    onProductDetail: e.onProductDetail,
                                    catalogId: t.id,
                                    onBack: e._pop,
                                    businessProfile: t.contact.businessProfile,
                                    onCatalogLinkClick: e._onCatalogLinkClick,
                                    onCartClick: e._onCartClick
                                });
                            e.push(a)
                        }, e.onProductCatalog = function(t) {
                            var a = e.props.chat.id;
                            (0, k.logCarouselViewMoreClick)({
                                catalogOwnerWid: a,
                                catalogContext: t
                            }), e.pushProductCatalog(a)
                        }, e.onProductCatalogHeaderClick = function(t, a) {
                            (0, k.logCarouselViewMoreClick)({
                                catalogOwnerWid: t,
                                catalogContext: a
                            }), e.onProductCatalog(a)
                        }, e.onStarred = function() {
                            var t = s.default.createElement(B.default, {
                                chat: e.props.chat,
                                starredMsgs: e.props.chat.getStarredMsgs(),
                                onClose: e._pop
                            });
                            e.push(t)
                        }, e.onAdminSetting = function() {
                            var t = e.props.chat,
                                a = s.default.createElement(P.default, {
                                    chat: t,
                                    groupMetadata: t.groupMetadata,
                                    onClose: e._pop
                                });
                            e.push(a)
                        }, e.onContactCard = function() {
                            e.push(s.default.createElement(v.default, {
                                chat: e.props.chat,
                                onClose: e._pop
                            }))
                        }, e.onMediaGallery = function() {
                            var t = s.default.createElement(I.default, {
                                chat: e.props.chat,
                                onBack: e._pop,
                                onProductDetail: e.onProductDetail,
                                setProductsScrollOffset: e._setScrollOffset
                            });
                            e.push(t)
                        }, e.onGroupInviteLink = function() {
                            var t = e.props.chat,
                                a = s.default.createElement(T.default, {
                                    chat: e.props.chat,
                                    groupMetadata: t.groupMetadata,
                                    onBack: e._pop
                                });
                            e.push(a)
                        }, e._pop = function() {
                            e.pop()
                        }, e._popAndUpdate = function() {
                            e.popAndUpdate({
                                initialTab: I.TABS.PRODUCTS,
                                productsScrollOffset: e._scrollOffset
                            })
                        }, e._end = function() {
                            e.end(!0)
                        }, e.onVerification = function(t) {
                            var a = t || e.props.chat.contact,
                                n = s.default.createElement(F.default, {
                                    contact: a,
                                    onClose: e._pop,
                                    isFirstLevel: !1
                                });
                            e.push(n)
                        }, e.onLiveLocation = function() {
                            var t = s.default.createElement(b.LiveLocationDrawerLoadable, {
                                chat: e.props.chat,
                                onClose: e._pop
                            });
                            e.push(t)
                        }, e.onEphemeral = function() {
                            var t = e.props.chat,
                                a = s.default.createElement(C.default, {
                                    chat: t,
                                    fromInfoFlow: !0,
                                    onClose: e._pop
                                });
                            e.push(a)
                        }, e
                    }
                    return (0, r.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.onStarred,
                                t = this.onMediaGallery,
                                a = this.props.chat;
                            this.props.chat.isGroup ? this.push(s.default.createElement(y.default, {
                                chat: a,
                                showFullGroupDescription: this.props.showFullGroupDescription,
                                scrollToParticipantList: this.props.scrollToParticipantList,
                                groupMetadata: a.groupMetadata,
                                contact: a.contact,
                                profilePicThumb: a.contact.getProfilePicThumb(),
                                onVerification: this.onVerification,
                                onStarred: e,
                                onMediaGallery: t,
                                onAdminSetting: this.onAdminSetting,
                                onGroupInviteLink: this.onGroupInviteLink,
                                onLiveLocation: this.onLiveLocation,
                                onEphemeral: this.onEphemeral,
                                onClose: this._pop
                            })) : a.isBroadcast ? this.push(s.default.createElement(c.default, {
                                chat: a,
                                contact: a.contact,
                                onStarred: e,
                                onMediaGallery: t,
                                onClose: this._pop
                            })) : a.isUser && (a.contact.isBusiness && (0, S.canSeeBizProfileV3)() && m.default.setDrawerContext("right", (0, A.buildProductCatalogContext)(new w.default, (0, E.getMaybeBizPlatformForLogging)(a.contact.id.toString()), N.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE)), this.push(s.default.createElement(g.default, {
                                contact: a.contact,
                                onVerification: this.onVerification,
                                onStarred: e,
                                onContactCard: this.onContactCard,
                                onMediaGallery: t,
                                onProductCatalog: this.onProductCatalog,
                                onProductDetail: this.onProductDetail,
                                onLiveLocation: this.onLiveLocation,
                                onEphemeral: this.onEphemeral,
                                onClose: this._pop
                            })))
                        }
                    }]), a
                }(M.default);
            t.default = function(e) {
                return s.default.createElement(_.default.Consumer, null, (function(t) {
                    return s.default.createElement(G, (0, i.default)({
                        context: t
                    }, e))
                }))
            }
        },
        62372: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(81506)),
                u = l(a(2205)),
                d = l(a(99842)),
                s = l(a(91080)),
                c = l(a(96486)),
                f = n(a(67294)),
                p = l(a(34541)),
                m = l(a(34263)),
                h = n(a(98569)),
                v = l(a(22021)),
                g = l(a(89115)),
                E = l(a(68390)),
                _ = a(87261),
                C = l(a(58003)),
                M = l(a(49172)),
                S = l(a(8643)),
                y = l(a(42027)),
                T = l(a(77478)),
                P = a(85779),
                b = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, d.default)(a);

                    function a(e) {
                        var n;
                        (0, i.default)(this, a), (n = t.call(this, e))._unmounted = !1, n._addListeners = function() {
                            var e = function() {
                                    return n.state.activeMsg
                                },
                                t = (0, r.default)(n).mediaMsgs,
                                a = n.props.listeners;
                            a.uiIdle((function() {
                                var a = e();
                                a && t.loadMoreAroundIfNeeded(a)
                            }));
                            var l = e();
                            (null == l ? void 0 : l.isViewOnce) ? a.add(l, "revoked", (function() {
                                n.setState({
                                    activeMsg: null
                                }), n.endFlow()
                            })): (a.add(t, "remove", (function(a, l, i) {
                                var o = e();
                                if (t.includes(a) || null != o && null != o.id && o.id.toString() !== a.id.toString()) n.forceUpdate();
                                else {
                                    var r = i.index;
                                    0 === t.length ? n.endFlow() : t.length === r ? n.handleSelectThumb((0, s.default)(t.at(r - 1), "mediaMsgs.at(index - 1)")) : n.handleSelectThumb((0, s.default)(t.at(r), "mediaMsgs.at(index)"))
                                }
                            })), a.add(t, "reset", (function() {
                                n.endFlow()
                            })), a.add(t, "query_media_after", (function() {
                                n.forceUpdate()
                            })), a.add(t, "query_media_before", (function() {
                                var e = n._refThumbs;
                                e && (n._prevScrollWidth = e.scrollWidth, e instanceof HTMLElement && n.forceUpdate())
                            })))
                        }, n.handleKeyDown = function(e) {
                            var t = g.default.isRTL();
                            37 === e.keyCode ? t ? n.handleNext() : n.handlePrev() : 39 === e.keyCode && (t ? n.handlePrev() : n.handleNext())
                        }, n.handleImageLoad = function() {
                            var e = (0, r.default)(n).uiActionEvent;
                            e && (e.markUiActionT(), e.commit(), delete n.uiActionEvent)
                        }, n.handleScroll = function(e) {
                            n._handleScrollThrottled(e.currentTarget, n.mediaMsgs, e.currentTarget.scrollLeft, n.props.listeners)
                        }, n.handleNext = function(e) {
                            if (e && e.stopPropagation(), !n.state.imgZoomed) {
                                var t = n.state.activeMsg;
                                if (t) {
                                    var a = null;
                                    for (a = n.mediaMsgs.getAfter(t); a && a.mediaData && !(0, P.hasThumbnail)(a.mediaData);) a = n.mediaMsgs.getAfter(a);
                                    a ? n.handleSelectThumb(a) : n.mediaMsgs.hasMediaAfter && (n._queryMediaAfter || (n._queryMediaAfter = n.mediaMsgs.queryMedia({
                                        chat: t.chat,
                                        msg: t,
                                        direction: "after"
                                    }).checkpoint(n.props.rejectOnUnmount()).then((function(e) {
                                        "number" == typeof e.length && e.length > 0 && n.state.activeMsg === t && n.handleNext()
                                    })).catchType(h.Unmount, (function() {})).catch((function() {
                                        __LOG__(3)`query media msgs error: `
                                    })).finally((function() {
                                        n._queryMediaAfter = null
                                    }))))
                                }
                            }
                        }, n.handlePrev = function(e) {
                            if (e && e.stopPropagation(), !n.state.imgZoomed) {
                                var t = n.state.activeMsg;
                                if (t) {
                                    var a = null;
                                    for (a = n.mediaMsgs.getBefore(t); a && a.mediaData && !(0, P.hasThumbnail)(a.mediaData);) a = n.mediaMsgs.getBefore(a);
                                    a ? n.handleSelectThumb(a) : n.mediaMsgs.hasMediaBefore && (n._queryMediaBefore || (n._queryMediaBefore = n.mediaMsgs.queryMedia({
                                        chat: t.chat,
                                        msg: t,
                                        direction: "before"
                                    }).checkpoint(n.props.rejectOnUnmount()).then((function(e) {
                                        "number" == typeof e.length && e.length > 0 && n.state.activeMsg === t && n.handlePrev()
                                    })).catchType(h.Unmount, (function() {})).catch((function() {
                                        __LOG__(3)`query media msgs error: `
                                    })).finally((function() {
                                        n._queryMediaBefore = null
                                    }))))
                                }
                            }
                        }, n.handleImgZoomIn = function(e) {
                            n.setState({
                                imgZoomed: e
                            })
                        }, n.endFlow = function() {
                            p.default.closeModalMedia()
                        }, n.willEndFlow = function() {
                            var e;
                            (e = n._refThumbsContainer) && (0, T.default)(e, {
                                opacity: [0, 1],
                                translateY: ["100%", "0%"]
                            }, {
                                duration: 300,
                                easing: [.1, .82, .25, 1]
                            })
                        }, n.handleSelectThumb = function(e) {
                            n.props.listeners.uiIdle((function() {
                                n.mediaMsgs.loadMoreAroundIfNeeded(e)
                            })), n.setState({
                                activeMsg: e
                            })
                        }, n.scrollToActive = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = n._refThumbsContainer,
                                a = n._refThumbs,
                                l = n._refActiveThumb;
                            if (t && a && l) {
                                var i = 0;
                                l instanceof HTMLElement && (i = l.clientWidth / 2 - t.clientWidth / 2), (0, T.default)(a, "stop");
                                var o = 0;
                                e && (o = 300), (0, T.default)(l, "scroll", {
                                    duration: o,
                                    container: a,
                                    offset: i,
                                    axis: "x",
                                    easing: [.1, .82, .25, 1]
                                })
                            }
                        }, n._setRefActiveThumb = function(e) {
                            n._refActiveThumb = e
                        }, n.setRefThumbsContainer = function(e) {
                            n._refThumbsContainer = e
                        }, n.setRefThumbs = function(e) {
                            n._refThumbs = e
                        }, n._getActiveMsgIndexInAlbum = function() {
                            var e = -1,
                                t = n.props.highlightedMsgIds;
                            if (!t || !n.state.activeMsg) return e;
                            var a = n.state.activeMsg.id.toString();
                            if (!t.has(a)) return e;
                            var l = 0;
                            return t.forEach((function(t) {
                                t === a && (e = l), l++
                            })), e
                        }, n._previousMediaHasThumb = function() {
                            var e = n.state.activeMsg;
                            if (!e) return !1;
                            for (var t = n.mediaMsgs.indexOf(e) - 1; t > 0; t--) {
                                var a = n.mediaMsgs.at(t);
                                if (a && (0, P.hasThumbnail)(a.mediaData)) return !0
                            }
                            return !1
                        }, n._prevScrollWidth = null;
                        var l = n.props.msg;
                        return n.mediaMsgs = l.chat.constructMediaMsgs(l), n._handleScrollThrottled = c.default.throttle(n._handleScroll.bind((0, r.default)(n)), 100), l.type === m.default.MSG_TYPE.IMAGE && (n.uiActionEvent = new S.default.UiAction({
                            uiActionType: S.default.UI_ACTION_TYPE.IMAGE_OPEN,
                            uiActionPreloaded: l.mediaData.mediaStage === _.MEDIA_DATA_STAGE.RESOLVED
                        })), n.state = {
                            activeMsg: l,
                            imgZoomed: !1,
                            animatingThumbs: n._hasThumbList(l)
                        }, n
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e, t = this;
                            this.props.listeners.add(window, "keydown", this.handleKeyDown), this._addListeners(), this.scrollToActive(), (e = this._refThumbsContainer) && (0, T.default)(e, {
                                opacity: [1, 0],
                                translateY: ["0%", "100%"]
                            }, {
                                duration: 300,
                                delay: 100,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                t._unmounted || t.setState({
                                    animatingThumbs: !1
                                })
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            if (t.activeMsg !== this.state.activeMsg) this.scrollToActive(!0);
                            else {
                                var a = this._refThumbs;
                                if (!a || null == this._prevScrollWidth || 0 === this._prevScrollWidth) return;
                                a instanceof HTMLElement && (a.scrollLeft += a.scrollWidth - this._prevScrollWidth), this._prevScrollWidth = null
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._handleScrollThrottled.cancel(), this._unmounted = !0
                        }
                    }, {
                        key: "_hasThumbList",
                        value: function(e) {
                            return !(null == e ? void 0 : e.isViewOnce)
                        }
                    }, {
                        key: "_handleScroll",
                        value: function(e, t, a, n) {
                            var l = this;
                            if (0 !== t.length && null != a) {
                                if (t.hasMediaBefore && a < e.clientWidth) {
                                    var i = (0, s.default)(t.head(), "mediaMsgs.head()");
                                    n.uiIdle((function() {
                                        t.queryMedia({
                                            chat: i.chat,
                                            msg: i
                                        }), l.forceUpdate()
                                    }))
                                }
                                if (t.hasMediaAfter && a + m.default.SCROLL_FUDGE > e.scrollWidth - 2 * e.clientWidth) {
                                    var o = (0, s.default)(t.last(), "mediaMsgs.last()");
                                    n.uiIdle((function() {
                                        t.queryMedia({
                                            chat: o.chat,
                                            msg: o,
                                            direction: "after"
                                        }), l.forceUpdate()
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.state.activeMsg;
                            if (!t) return null;
                            var a = this.mediaMsgs.last(),
                                n = this.mediaMsgs.hasMediaAfter || this.state.activeMsg !== a ? this.handleNext : null,
                                l = this.mediaMsgs.head(),
                                i = null;
                            return i = this.mediaMsgs.hasMediaBefore || this.state.activeMsg !== l ? this.handlePrev : null, v.default.supportsFeature(v.default.F.MD_BACKEND) && (i = (this.mediaMsgs.hasMediaBefore || this.state.activeMsg !== l) && this._previousMediaHasThumb() ? this.handlePrev : null), f.default.createElement("div", {
                                className: this.state.imgZoomed ? "img-zoomed-in" : null
                            }, this._hasThumbList(t) && f.default.createElement(M.default, {
                                activeMsg: t,
                                mediaMsgs: this.mediaMsgs,
                                highlightedMsgIds: this.props.highlightedMsgIds,
                                onSelectThumb: this.handleSelectThumb,
                                onSetActiveThumb: this._setRefActiveThumb,
                                onScroll: this.handleScroll,
                                setRefThumbsContainer: this.setRefThumbsContainer,
                                setRefThumbs: this.setRefThumbs
                            }), f.default.createElement(C.default, {
                                msg: t,
                                mediaData: t.mediaData,
                                onBack: this.endFlow,
                                onExitAnimation: this.willEndFlow,
                                onNext: n,
                                onPrev: i,
                                onImgZoomIn: this.handleImgZoomIn,
                                getZoomNode: this.props.getZoomNode,
                                startTime: this.props.startTime,
                                isAnimatingIn: this.state.animatingThumbs,
                                onImageLoad: this.uiActionEvent ? this.handleImageLoad : null,
                                msgIndexInAlbum: this._getActiveMsgIndexInAlbum(),
                                albumSize: (null === (e = this.props.highlightedMsgIds) || void 0 === e ? void 0 : e.size) || 0
                            }))
                        }
                    }]), a
                }(f.Component);
            b.displayName = "MediaViewerFlow";
            var k = (0, y.default)((0, E.default)(b));
            t.default = k
        },
        6358: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.requireBundle = void 0;
            var l = n(a(67294)),
                i = n(a(68356)),
                o = n(a(34263)),
                r = n(a(89115)),
                u = n(a(11243)),
                d = (0, n(a(83010)).default)((function() {
                    return Promise.all([a.e(7167), a.e(7630), a.e(275)]).then(a.bind(a, 83836)).then((function(e) {
                        return e.default
                    }))
                }), "SendContactFlow");
            t.requireBundle = d;
            var s = (0, i.default)({
                loader: d,
                loading: function(e) {
                    return l.default.createElement(u.default, {
                        title: r.default.t(1394),
                        error: Boolean(e.error)
                    })
                },
                delay: o.default.LOADABLE_DELAY
            });
            t.default = s
        },
        86922: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                d = n(a(67294)),
                s = l(a(85967)),
                c = n(a(72259)),
                f = l(a(26671)),
                p = l(a(34541)),
                m = l(a(34263)),
                h = l(a(81997)),
                v = l(a(25259)),
                g = n(a(62647)),
                E = l(a(75300)),
                _ = l(a(33079)),
                C = a(67485),
                M = l(a(60482)),
                S = l(a(50842)),
                y = a(32002),
                T = l(a(31722)),
                P = a(71701),
                b = a(31230),
                k = l(a(76568)),
                I = l(a(89115)),
                N = l(a(68390)),
                A = a(53418),
                w = l(a(10560)),
                O = l(a(44589)),
                R = l(a(75131)),
                x = l(a(28770)),
                D = l(a(38512)),
                L = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l))).flatListController = new S.default, e.selection = new w.default([], (function(e) {
                            return e.id.toString()
                        })), e.state = {
                            forceHideNux: !1,
                            chats: e._getArchivedChats()
                        }, e.handleClick = function(t, a) {
                            p.default.openChatFromUnread(a).then((function(e) {
                                e && p.default.focusChatTextInput(a)
                            })), (0, b.archiveV2Supported)() && e.props.settings.archive.enabled || e.handleClose()
                        }, e._updateSelected = function(t) {
                            e.selection.setVal(t, !1)
                        }, e.handleClose = function() {
                            e.props.onClose()
                        }, e.handleNextChat = function(t) {
                            t.preventDefault(), t.stopPropagation(), e.selection.setNext(!0)
                        }, e.handlePrevChat = function(t) {
                            t.preventDefault(), t.stopPropagation(), e.selection.setPrev(!0)
                        }, e.shouldShowArchiveV2 = function() {
                            return (0, b.archiveV2Supported)() && e.props.settings.showArchiveV2
                        }, e._handleCloseChat = function(t) {
                            t === e.selection.getVal() && e.selection.unset()
                        }, e.renderItem = function(t) {
                            return d.default.createElement(c.default, {
                                chat: t.chat,
                                mode: c.Mode.LAST,
                                active: e.selection,
                                onClick: e.handleClick,
                                hideArchivedIcon: (0, b.archiveV2Supported)() && e.props.settings.archive.enabled,
                                hideMuteIcon: e.shouldShowArchiveV2(),
                                hideMuteOption: e.shouldShowArchiveV2(),
                                showEphemeralIcon: !0
                            })
                        }, e.setRefHotKeys = function(t) {
                            e.refList = t
                        }, e._handleCloseNux = function() {
                            (0, P.setNUX)(m.default.NUX.ARCHIVE, {
                                views: m.default.ARCHIVE_NUX_MAX_VIEWS,
                                maxViews: m.default.ARCHIVE_NUX_MAX_VIEWS
                            }), e.setState({
                                forceHideNux: !0
                            })
                        }, e._showNux = function() {
                            var t = f.default.some((function(e) {
                                return e.archive
                            }));
                            return e.shouldShowArchiveV2() && t && (0, P.shouldShowNUX)(m.default.NUX.ARCHIVE) && !e.state.forceHideNux
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.shouldShowArchiveV2() && !(0, P.getNUX)(m.default.NUX.ARCHIVE) && (0, P.setNUX)(m.default.NUX.ARCHIVE, {
                                views: 0,
                                maxViews: m.default.ARCHIVE_NUX_MAX_VIEWS
                            }), this._showNux() && (0, P.viewNUX)(m.default.NUX.ARCHIVE), this.shouldShowArchiveV2() ? this.props.listeners.add(f.default, "sort change:archive add remove", (function() {
                                e.setState({
                                    chats: e._getArchivedChats()
                                })
                            })) : this.props.listeners.add(f.default, "change:archive add remove", (function() {
                                e.setState({
                                    chats: e._getArchivedChats()
                                })
                            })), this.refList && T.default.focus(this.refList), this.props.listeners.add(p.default, "update_chatlist_selection", this._updateSelected), this.props.listeners.add(p.default, "close_chat", this._handleCloseChat);
                            var t = this._getActiveArchiveChat();
                            t && this._updateSelected(t)
                        }
                    }, {
                        key: "_getActiveArchiveChat",
                        value: function() {
                            return f.default.toArray().find((function(e) {
                                return e.active && e.archive
                            }))
                        }
                    }, {
                        key: "_getArchivedChats",
                        value: function() {
                            return f.default.filter((function(e) {
                                return e.archive
                            }))
                        }
                    }, {
                        key: "getData",
                        value: function() {
                            return this.state.chats.map((function(e) {
                                return {
                                    itemKey: e.id.toString(),
                                    chat: e
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t;
                            if (this.selection.init(this.state.chats, !0), this._showNux() && (t = d.default.createElement("div", {
                                    className: s.default.nuxContainer
                                }, d.default.createElement(y.FlexColumn, {
                                    align: "center"
                                }, d.default.createElement("span", {
                                    className: s.default.nuxIcon
                                }, d.default.createElement(R.default, {
                                    name: "archive-nux"
                                })), d.default.createElement("div", {
                                    className: s.default.nuxHeader
                                }, d.default.createElement(x.default, {
                                    theme: "large",
                                    as: "h1"
                                }, I.default.t(236))), d.default.createElement("div", {
                                    className: s.default.nuxContent
                                }, d.default.createElement("div", {
                                    className: s.default.nuxText
                                }, d.default.createElement(x.default, {
                                    theme: "plain",
                                    as: "p"
                                }, I.default.t(235))))), d.default.createElement("button", {
                                    onClick: this._handleCloseNux,
                                    className: s.default.btnClose
                                }, d.default.createElement(R.default, {
                                    name: "x-alt"
                                })))), this.state.chats.length > 0) {
                                var a = {
                                    down: this.handleNextChat,
                                    up: this.handlePrevChat
                                };
                                e = d.default.createElement(k.default, {
                                    onRef: this.setRefHotKeys,
                                    handlers: a
                                }, d.default.createElement(D.default, {
                                    transitionName: "slide"
                                }, t), d.default.createElement(M.default, {
                                    className: s.default.flatListContainer,
                                    data: this.getData(),
                                    flatListController: this.flatListController,
                                    direction: "vertical",
                                    renderItem: this.renderItem
                                }))
                            } else e = d.default.createElement(C.Archived, null);
                            var n = (0, b.archiveV2Supported)() && this.props.settings.archive.enabled ? d.default.createElement(A.MenuBarItem, {
                                    a8nText: "archived-menu",
                                    icon: d.default.createElement(R.default, {
                                        name: "menu"
                                    }),
                                    title: I.default.t(1046)
                                }, d.default.createElement(E.default, {
                                    type: "dropdown_menu",
                                    flipOnRTL: !0,
                                    key: "ArchivedDrawerHeader",
                                    dirX: "LEFT"
                                }, d.default.createElement(_.default, {
                                    a8n: "open-archive-settings menu-item",
                                    action: this.props.showSettings
                                }, I.default.t(237)))) : null,
                                l = (0, b.archiveV2Supported)() && this.props.settings.archive.enabled ? I.default.t(240) : I.default.t(239);
                            return d.default.createElement(h.default, {
                                theme: "archived"
                            }, d.default.createElement(g.default, {
                                title: l,
                                onBack: this.handleClose,
                                type: g.DRAWER_HEADER_TYPE.LARGE,
                                menu: n
                            }), d.default.createElement(v.default, {
                                flatListControllers: [this.flatListController]
                            }, e))
                        }
                    }]), a
                }(d.Component);
            L.CONCERNS = {
                settings: ["showArchiveV2", "archive"]
            }, L.displayName = "ArchivedDrawer";
            var B = (0, N.default)((0, O.default)(L, L.CONCERNS));
            t.default = B
        },
        99301: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                d = n(a(67294)),
                s = l(a(83442)),
                c = l(a(26671)),
                f = l(a(79140)),
                p = l(a(34541)),
                m = l(a(63637)),
                h = l(a(48629)),
                v = n(a(42575)),
                g = l(a(81997)),
                E = l(a(25259)),
                _ = l(a(10869)),
                C = n(a(62647)),
                M = l(a(51376)),
                S = l(a(60482)),
                y = l(a(50842)),
                T = a(71701),
                P = l(a(17957)),
                b = l(a(89115)),
                k = l(a(68390)),
                I = l(a(68708)),
                N = l(a(44589)),
                A = a(89305),
                w = l(a(75131)),
                O = a(28770),
                R = l(a(12717)),
                x = l(a(22021)),
                D = l(a(54047)),
                L = l(a(80297)),
                B = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l))).flatListController = new y.default, e.handleParticipantClick = function(e, t) {
                            R.default.equals((0, T.getMaybeMeUser)(), t.id) || c.default.find(t.id).then((function(e) {
                                p.default.openChatFromUnread(e).then((function(t) {
                                    t && p.default.focusChatTextInput(e)
                                }))
                            }))
                        }, e.handleClose = function() {
                            e.props.onClose ? e.props.onClose() : e.props.uim.uie.requestDismiss()
                        }, e.handleDelete = function() {
                            p.default.deleteOrExitChat((0, A.unproxy)(e.props.chat))
                        }, e.showEncryptionInfoPopup = function() {
                            p.default.openModal(d.default.createElement(L.default, {
                                chatId: e.props.chat.id,
                                e2eSubtype: "info_encrypted"
                            }))
                        }, e.renderItem = function(t) {
                            var a = t.participant,
                                n = h.default.gadd(a.id);
                            return d.default.createElement(m.default, {
                                contact: n,
                                theme: "drawer-list",
                                admin: !!a.isAdmin,
                                onClick: e.handleParticipantClick,
                                key: a.id.toString(),
                                waitIdle: !0
                            })
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.chat.groupMetadata;
                            null != t && this.props.listeners.add(t.participants, "add remove sort reset", (function() {
                                e.forceUpdate()
                            }))
                        }
                    }, {
                        key: "getData",
                        value: function() {
                            var e, t;
                            return (null !== (e = null === (t = this.props.chat.groupMetadata) || void 0 === t ? void 0 : t.participants) && void 0 !== e ? e : []).map((function(e) {
                                return {
                                    itemKey: e.id.toString(),
                                    participant: e
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, n = this.props.chat,
                                l = null;
                            if (this.props.onMediaGallery) {
                                var i = d.default.createElement(w.default, {
                                        className: s.default.chevron,
                                        name: "chevron-right-alt",
                                        directional: !0
                                    }),
                                    o = b.default.t(1026);
                                l = d.default.createElement(M.default, {
                                    title: o,
                                    titleOnClick: this.props.onMediaGallery || function() {},
                                    subtitle: i,
                                    theme: "padding"
                                }, d.default.createElement(I.default, {
                                    chat: (0, A.unproxy)(n),
                                    mediaMsgs: n.getMediaMsgs()
                                }))
                            }
                            var r, u = null !== (e = null === (t = this.props.chat.groupMetadata) || void 0 === t ? void 0 : t.participants) && void 0 !== e ? e : [],
                                c = d.default.createElement(O.TextSpan, {
                                    theme: "section-title"
                                }, b.default.n(u.length)),
                                p = u.length ? d.default.createElement(M.default, {
                                    title: b.default.t(1919),
                                    subtitle: c
                                }, d.default.createElement(S.default, {
                                    flatListController: this.flatListController,
                                    direction: "vertical",
                                    forceConsistentRenderCount: !1,
                                    data: this.getData(),
                                    renderItem: this.renderItem
                                })) : null,
                                m = d.default.createElement(M.default, null, d.default.createElement(_.default, {
                                    a8nText: "li-delete-broadcast",
                                    icon: d.default.createElement(w.default, {
                                        name: "delete"
                                    }),
                                    color: "danger",
                                    theme: "list-aligned",
                                    onClick: this.handleDelete
                                }, b.default.t(1735)));
                            (null === (a = n.groupMetadata) || void 0 === a ? void 0 : a.creation) ? (r = f.default.createdStr(n.groupMetadata.creation), r = d.default.createElement(O.TextDiv, {
                                theme: "small"
                            }, r)) : r = null;
                            var h = null;
                            x.default.supportsFeature(x.default.F.MD_BACKEND) && (h = d.default.createElement(D.default, {
                                onClick: this.showEncryptionInfoPopup,
                                text: b.default.t(1683)
                            }));
                            var y = null;
                            return h && (y = d.default.createElement(M.default, null, null, h)), d.default.createElement(g.default, {
                                key: "contact-info-modal",
                                theme: "striped"
                            }, d.default.createElement(C.default, {
                                type: C.DRAWER_HEADER_TYPE.SMALL,
                                onCancel: this.handleClose
                            }, d.default.createElement(O.TextDiv, {
                                theme: "title"
                            }, b.default.t(355)), r), d.default.createElement(E.default, {
                                flatListControllers: [this.flatListController]
                            }, d.default.createElement("div", {
                                className: s.default.body
                            }, d.default.createElement("div", {
                                className: s.default.photo
                            }, d.default.createElement(v.default, {
                                id: n.id,
                                size: v.DETAIL_IMAGE_SIZE.LARGE
                            })), l, y, p, m)))
                        }
                    }]), a
                }(d.Component);
            B.CONCERNS = {
                chat: ["id", "groupMetadata"]
            }, B.displayName = "BroadcastInfoDrawer";
            var F = (0, P.default)((0, k.default)((0, N.default)(B, B.CONCERNS)));
            t.default = F
        },
        53400: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = (0, m.default)(e.contact, ["name", "verifiedLevel", "verifiedName", "formattedName"]);
                t = f.default.supportsFeature(f.default.F.VNAME_V_2) ? function() {
                    var e = a;
                    switch (e.verifiedLevel) {
                        case u.default.VERIFIED_LEVEL.HIGH:
                            return e.name === e.verifiedName ? p.default.t(1687, {
                                businessName: e.verifiedName
                            }) : p.default.t(1688, {
                                businessName: e.verifiedName
                            });
                        case u.default.VERIFIED_LEVEL.LOW:
                        case u.default.VERIFIED_LEVEL.UNKNOWN:
                            return p.default.t(1689)
                    }
                }() : function() {
                    var e = a;
                    switch (e.verifiedLevel) {
                        case u.default.VERIFIED_LEVEL.HIGH:
                            return p.default.t(1947);
                        case u.default.VERIFIED_LEVEL.LOW:
                            return p.default.t(1949);
                        case u.default.VERIFIED_LEVEL.UNKNOWN:
                            return p.default.t(1951, {
                                businessName: e.formattedName
                            })
                    }
                }();
                var n = l.default.createElement(i.default, {
                    href: (0, c.getBusinessFaqUrl)(),
                    onClick: function(e) {
                        e.preventDefault(), o.default.closeModal("none"), setTimeout((function() {
                            return (0, s.openExternalLink)((0, c.getBusinessFaqUrl)())
                        }), 10)
                    }
                }, p.default.t(936));
                return l.default.createElement(r.default, {
                    onOK: function() {
                        o.default.closeModal()
                    },
                    okText: p.default.t(1221)
                }, l.default.createElement(d.default, {
                    text: t
                }), " ", n)
            };
            var l = n(a(67294)),
                i = n(a(76)),
                o = n(a(34541)),
                r = n(a(25960)),
                u = n(a(34263)),
                d = n(a(41769)),
                s = a(19129),
                c = a(92618),
                f = n(a(22021)),
                p = n(a(89115)),
                m = n(a(33819))
        },
        3461: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = e.contact,
                    n = p.default.t(407);

                function h() {
                    u.default.openModal(l.default.createElement(o.default, {
                        contact: a
                    }))
                }

                function v() {
                    u.default.openModal(l.default.createElement(r.default, {
                        contact: a
                    }))
                }
                t = (0, f.canSeeSMBUpsell)() ? l.default.createElement(d.default, {
                    a8nText: "business-title",
                    onClick: v,
                    side: l.default.createElement(m.default, {
                        display: "inline",
                        name: "info"
                    })
                }, n) : l.default.createElement(s.default, {
                    a8nText: "business-title",
                    className: i.default.businessTitleText,
                    onClick: h
                }, n);
                return l.default.createElement(c.default, {
                    className: i.default.businessAccount
                }, t)
            };
            var l = n(a(67294)),
                i = n(a(91548)),
                o = n(a(53400)),
                r = n(a(83934)),
                u = n(a(34541)),
                d = n(a(82745)),
                s = n(a(10869)),
                c = n(a(51376)),
                f = a(31230),
                p = n(a(89115)),
                m = n(a(75131))
        },
        57495: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n, l = e.contact,
                    o = e.onProductCatalog,
                    r = N(v.default),
                    C = (0, _.getProductCatalogSessionId)(r);
                var y, A = p.default.toArray().find((function(e) {
                    return e.active
                }));
                (null == A ? void 0 : A.id.equals(l.id)) || ((0, s.logMessageClick)(l.id, C), n = u.default.createElement(I, {
                    icon: "chat-msg",
                    label: E.default.t(1047),
                    onClick: function() {
                        p.default.find(l.id).then((function(e) {
                            m.default.openChatFromUnread(e).then((function() {
                                m.default.closeDrawerRight()
                            }))
                        }))
                    },
                    a8nText: "business-action chat"
                }));
                var w, O, R = (0, u.useState)(),
                    x = (0, i.default)(R, 2)[1],
                    D = (0, u.useState)(),
                    L = (0, i.default)(D, 2)[1];
                (0, T.useListener)(h.default, "change:isVoipInitialized", (function() {
                    x(h.default.isVoipInitialized)
                })), (0, T.useListener)(k, "change:activeCall", (function() {
                    L(k.activeCall)
                })), b.isVoiceCallButtonVisible(l) && (y = u.default.createElement(I, {
                    icon: "voice-call-filled",
                    label: E.default.t(1582),
                    disabled: !!k.activeCall || l.isMe,
                    onClick: function() {
                        (0, s.logVoiceCallClick)(l.id, C), b.checkIfCanStartCall({
                            contact: l,
                            isVideo: !1
                        }) && P && P.callStart(l.id, !1)
                    },
                    a8nText: "business-action voice-call"
                }));
                (null === (t = l.businessProfile) || void 0 === t || null === (a = t.profileOptions) || void 0 === a ? void 0 : a.commerceExperience) === c.COMMERCE_EXPERIENCE_TYPES.CATALOG && (w = u.default.createElement(I, {
                    icon: "catalog-filled",
                    label: E.default.t(922),
                    onClick: function() {
                        (0, s.logCatalogClick)(l.id, C), o((0, _.getProductCatalogContext)(r))
                    },
                    a8nText: "business-action catalog"
                }));
                (0, f.hasShop)(l.businessProfile) && (O = u.default.createElement(I, {
                    icon: "shop-filled",
                    label: E.default.t(1423),
                    onClick: function() {
                        (0, s.logShopsClick)(l.id, C), (0, f.goToShop)(l.businessProfile)
                    },
                    a8nText: "business-action shop"
                }));
                var B = u.default.createElement(I, {
                    icon: "forward-filled",
                    label: E.default.t(761),
                    onClick: function() {
                        (0, s.logForwardClick)(l.id, C), m.default.openModal(u.default.createElement(M.default, {
                            contacts: [(0, S.unproxy)(l)],
                            onContactsSent: function(e) {
                                m.default.openChatFromUnread(e).then((function() {}))
                            }
                        }))
                    },
                    a8nText: "business-action forward"
                });
                return u.default.createElement(g.FlexRow, {
                    className: d.default.actionsRow,
                    justify: "evenly"
                }, n, y, w, O, B)
            };
            var i = l(a(63038)),
                o = l(a(59713)),
                r = l(a(94184)),
                u = n(a(67294)),
                d = l(a(70615)),
                s = a(22918),
                c = a(58435),
                f = a(79984),
                p = l(a(26671)),
                m = l(a(34541)),
                h = l(a(93743)),
                v = l(a(66015)),
                g = a(32002),
                E = l(a(89115)),
                _ = a(79164),
                C = l(a(40746)),
                M = l(a(6358)),
                S = a(89305),
                y = l(a(75131)),
                T = a(19247),
                P = a(78919).default,
                b = a(15340).default,
                k = a(68950).default;

            function I(e) {
                var t = e.a8nText,
                    a = e.icon,
                    n = e.label,
                    l = e.disabled,
                    i = e.onClick;
                return u.default.createElement("div", {
                    className: (0, r.default)(d.default.actionButton, (0, o.default)({}, d.default.actionDisabled, l))
                }, u.default.createElement(C.default, {
                    inverted: !0,
                    onClick: i,
                    disabled: l,
                    a8nText: t
                }, u.default.createElement(y.default, {
                    name: a,
                    directional: !0
                })), u.default.createElement("div", {
                    className: d.default.actionLabel
                }, n))
            }
            var N = u.default.useContext
        },
        37076: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.businessHours,
                    a = e.contact,
                    n = (0, p.getProductCatalogSessionId)(E(s.default)),
                    l = (0, g.getBusinessOpenState)(t),
                    o = _(!0),
                    c = (0, i.default)(o, 2),
                    h = c[0],
                    M = c[1];
                if (null == t) return null;
                var S = (0, m.getBusinessHours)(t).map((function(e) {
                    var t = e.day,
                        a = e.hours,
                        n = e.first,
                        i = t,
                        o = a,
                        u = !1;
                    if (n) switch (l.status) {
                        case g.BUSINESS_OPEN_STATUS.OPEN_24H:
                            i = f.default.t(374), o = f.default.t(370), u = !0;
                            break;
                        case g.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                            i = f.default.t(374), o = f.default.t(373), u = !0;
                            break;
                        case g.BUSINESS_OPEN_STATUS.OPEN:
                            i = f.default.t(374), u = !0;
                            break;
                        case g.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                            o = f.default.t(359)
                    }
                    return !n && h ? null : r.default.createElement(C, {
                        day: i,
                        dayIsOpen: u,
                        key: t,
                        hours: o,
                        first: n,
                        collapsed: h
                    })
                }));
                return r.default.createElement(v.default, {
                    className: u.default.businessHours,
                    onClick: function() {
                        (0, d.logHoursClick)(a.id, n), M(!h)
                    },
                    a8nText: "business-hours-expand"
                }, S)
            };
            var l = n(a(59713)),
                i = n(a(63038)),
                o = n(a(94184)),
                r = n(a(67294)),
                u = n(a(46604)),
                d = a(22918),
                s = n(a(66015)),
                c = n(a(41769)),
                f = n(a(89115)),
                p = a(79164),
                m = a(30063),
                h = n(a(75131)),
                v = n(a(23225)),
                g = a(89822),
                E = r.default.useContext,
                _ = r.default.useState;

            function C(e) {
                if (e.first) {
                    var t = r.default.createElement("div", {
                        className: u.default.businessHoursChevron,
                        role: "button"
                    }, r.default.createElement(h.default, {
                        className: e.collapsed ? "" : u.default.flipSvg,
                        display: "inline",
                        name: "chevron-down-alt"
                    }));
                    return r.default.createElement("div", {
                        className: (0, o.default)(u.default.businessHoursRow, (0, l.default)({}, u.default.firstRow, e.first))
                    }, r.default.createElement("div", {
                        className: (0, o.default)(u.default.businessHoursDay, (0, l.default)({}, u.default.dayIsOpen, e.dayIsOpen))
                    }, r.default.createElement(c.default, {
                        direction: "auto",
                        text: e.day
                    })), r.default.createElement("div", {
                        className: u.default.businessHoursHours
                    }, r.default.createElement(c.default, {
                        direction: "auto",
                        text: e.hours
                    })), t)
                }
                return r.default.createElement("div", {
                    className: u.default.businessHoursRow
                }, r.default.createElement("div", {
                    className: u.default.businessHoursDay
                }, r.default.createElement(c.default, {
                    direction: "auto",
                    text: e.day
                })), r.default.createElement("div", {
                    className: u.default.businessHoursHours
                }, r.default.createElement(c.default, {
                    direction: "auto",
                    text: e.hours
                })))
            }
        },
        42004: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n, _, C, M, S = e.businessProfile,
                    y = e.contact,
                    T = (0, g.default)(S, ["description", "address", "latitude", "longitude", "website", "email", "businessHours"]),
                    P = T.description,
                    b = T.address,
                    k = T.latitude,
                    I = T.longitude,
                    N = T.website,
                    A = T.email,
                    w = T.businessHours,
                    O = E(s.default),
                    R = (0, v.getProductCatalogSessionId)(O);
                null != P && (t = i.default.createElement("div", {
                    className: r.default.section
                }, i.default.createElement(p.default, {
                    text: P,
                    textLimit: d.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                }, (function(e) {
                    var t = e.textLimit;
                    return i.default.createElement(f.default, {
                        className: r.default.description,
                        selectable: !0,
                        direction: "auto",
                        text: P,
                        textLimit: t
                    })
                }))));
                null != w && (a = i.default.createElement("div", {
                    className: r.default.section
                }, i.default.createElement(o.default, {
                    businessHours: w,
                    contact: y
                })));
                null != b && (n = i.default.createElement("div", {
                    className: r.default.section
                }, i.default.createElement(f.default, {
                    selectable: !0,
                    direction: "auto",
                    text: b
                })));
                null != k && null != I && (_ = i.default.createElement("div", {
                    style: {
                        height: 132
                    },
                    className: (0, l.default)(r.default.section, r.default.map)
                }, i.default.createElement(h.default, {
                    lat: k,
                    lng: I,
                    name: b || "",
                    width: 590,
                    height: 132,
                    onClick: function() {
                        return (0, u.logLocationClick)(y.id, R)
                    },
                    a8nText: "business-info-map"
                })));
                null != A && (C = i.default.createElement("div", {
                    className: r.default.section
                }, i.default.createElement(m.default, {
                    href: `mailto:${A}`,
                    onClick: function() {
                        return (0, u.logEmailClick)(y.id, R)
                    },
                    a8nText: "business-info-email"
                }, A)));
                null != N && N.length > 0 && (M = i.default.createElement("div", {
                    className: r.default.section
                }, N.map((function(e) {
                    return i.default.createElement("div", {
                        key: e
                    }, i.default.createElement(m.default, {
                        href: e,
                        onClick: function() {
                            return (0, u.logWebsiteClick)(y.id, R)
                        },
                        a8nText: "business-info-website"
                    }, e))
                }))));
                return null == t && null == a && null == n && null == _ && null == C && null == M ? null : i.default.createElement(c.default, {
                    theme: "padding"
                }, t, a, n, _, C, M)
            };
            var l = n(a(94184)),
                i = n(a(67294)),
                o = n(a(37076)),
                r = n(a(62260)),
                u = a(22918),
                d = n(a(34263)),
                s = n(a(66015)),
                c = n(a(51376)),
                f = n(a(41769)),
                p = n(a(69984)),
                m = n(a(19129)),
                h = n(a(78973)),
                v = a(79164),
                g = n(a(33819)),
                E = i.default.useContext
        },
        22918: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.logProfileImpression = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logProfileExit = function(e, t, a) {
                var n = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_EXIT,
                    catalogSessionId: t,
                    scrollDepth: a
                });
                n && n.commit()
            }, t.logMessageClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_MESSAGE,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logVoiceCallClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_VOICE_CALL,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logShopsClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_SHOPS_ICON,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logCatalogClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_CATALOG_ICON,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logForwardClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_FORWARD,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logEmailClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_EMAIL,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logWebsiteClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_WEBSITE,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logLocationClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_LOCATION,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logHoursClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_HOURS,
                    catalogSessionId: t
                });
                a && a.commit()
            }, t.logStatusClick = function(e, t) {
                var a = new l.default.ViewBusinessProfile({
                    businessProfileJid: e.toString(),
                    viewBusinessProfileAction: l.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_STATUS,
                    catalogSessionId: t
                });
                a && a.commit()
            };
            var l = n(a(8643))
        },
        96910: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a, n = e.contact;
                if (n.isMyContact)
                    if (n.name !== n.verifiedName) {
                        var d;
                        n.showBusinessCheckmarkAsSecondary && (d = l.default.createElement("div", {
                            className: i.default.icon
                        }, l.default.createElement(u.default, {
                            name: "psa-verified"
                        }))), t = l.default.createElement(r.default, {
                            contact: n
                        }), a = l.default.createElement("div", {
                            className: i.default.wrapper
                        }, l.default.createElement(o.default, {
                            text: `~${n.verifiedName}`,
                            className: i.default.verifiedText,
                            direction: "auto",
                            ellipsify: !0,
                            titlify: !0
                        }), d)
                    } else t = l.default.createElement(r.default, {
                        contact: n,
                        showBusinessCheckmark: n.showBusinessCheckmarkAsPrimary
                    });
                else t = l.default.createElement(o.default, {
                    text: n.verifiedName,
                    direction: "auto",
                    ellipsify: !0,
                    titlify: !0
                }), a = l.default.createElement(r.default, {
                    contact: n,
                    showBusinessCheckmark: n.showBusinessCheckmarkAsPrimary
                });
                return l.default.createElement("div", null, l.default.createElement("div", {
                    className: i.default.title
                }, t), l.default.createElement("div", {
                    className: i.default.subtitle
                }, a))
            };
            var l = n(a(67294)),
                i = n(a(67666)),
                o = n(a(41769)),
                r = n(a(45706)),
                u = n(a(75131))
        },
        17995: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.BusinessProfile = void 0;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                d = l(a(94184)),
                s = n(a(67294)),
                c = l(a(53400)),
                f = l(a(83934)),
                p = l(a(11582)),
                m = l(a(34541)),
                h = l(a(34263)),
                v = l(a(82745)),
                g = l(a(10869)),
                E = l(a(51376)),
                _ = l(a(41769)),
                C = l(a(69984)),
                M = l(a(19129)),
                S = l(a(22021)),
                y = a(31230),
                T = l(a(89115)),
                P = l(a(45425)),
                b = l(a(78973)),
                k = a(76064),
                I = l(a(8643)),
                N = a(30063),
                A = l(a(87729)),
                w = l(a(44589)),
                O = l(a(75131)),
                R = h.default.VERIFIED_LEVEL,
                x = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l))).state = {
                            collapsedHours: !0
                        }, e._onBusinessHoursClick = function() {
                            e.setState({
                                collapsedHours: !e.state.collapsedHours
                            })
                        }, e._onBusinessInfoClick = function() {
                            m.default.openModal(s.default.createElement(c.default, {
                                contact: e.props.contact
                            }))
                        }, e._onBusinessInfoWithUpsellClick = function() {
                            m.default.openModal(s.default.createElement(f.default, {
                                contact: e.props.contact
                            }))
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            new I.default.ViewBusinessProfile({
                                viewBusinessProfileAction: I.default.VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
                            }).commit()
                        }
                    }, {
                        key: "_getBusinessInfoTitle",
                        value: function() {
                            var e, t = this.props.contact,
                                a = !t.name || t.name === t.verifiedName,
                                n = "psa-unverified";
                            switch (t.verifiedLevel) {
                                case R.HIGH:
                                    n = "psa-verified", a ? e = s.default.createElement(_.default, {
                                        className: p.default.verifiedLabel,
                                        text: T.default.t(410)
                                    }) : (e = s.default.createElement(_.default, {
                                        className: p.default.verifiedLabel,
                                        text: T.default.t(408)
                                    }), e = s.default.createElement(P.default, {
                                        id: 409,
                                        params: {
                                            verified: e,
                                            businessName: t.verifiedName
                                        }
                                    }));
                                    break;
                                case R.LOW:
                                    e = a ? s.default.createElement(_.default, {
                                        text: T.default.t(387)
                                    }) : T.default.t(386, {
                                        businessName: t.verifiedName
                                    });
                                    break;
                                case R.UNKNOWN:
                                    e = T.default.t(382)
                            }
                            return s.default.createElement(L, {
                                icon: n,
                                className: p.default.businessMarker,
                                onClick: this._onBusinessInfoClick
                            }, e)
                        }
                    }, {
                        key: "_getBusinessInfoTitleV2",
                        value: function() {
                            var e;
                            switch (this.props.contact.verifiedLevel) {
                                case R.HIGH:
                                    e = T.default.t(405);
                                    break;
                                case R.LOW:
                                case R.UNKNOWN:
                                    e = T.default.t(382)
                            }
                            return s.default.createElement(g.default, {
                                a8nText: "business-title",
                                className: p.default.businessTitleText,
                                onClick: this._onBusinessInfoClick
                            }, e)
                        }
                    }, {
                        key: "_getBusinessInfoTitleWithSMBUpsell",
                        value: function() {
                            var e = this.props.contact.verifiedLevel === R.HIGH ? T.default.t(405) : T.default.t(382);
                            return s.default.createElement(v.default, {
                                a8nText: "business-title",
                                onClick: this._onBusinessInfoWithUpsellClick,
                                side: s.default.createElement(O.default, {
                                    className: p.default.infoIcon,
                                    display: "inline",
                                    name: "info"
                                })
                            }, e)
                        }
                    }, {
                        key: "_getBusinessHours",
                        value: function(e) {
                            var t = this,
                                a = (0, N.getBusinessHours)(e).map((function(e) {
                                    var a = e.day,
                                        n = e.hours,
                                        l = e.first;
                                    return !l && t.state.collapsedHours ? null : s.default.createElement(D, {
                                        day: a,
                                        key: a,
                                        hours: n,
                                        first: l,
                                        collapsed: t.state.collapsedHours
                                    })
                                }));
                            return s.default.createElement(L, {
                                icon: "business-hours",
                                onClick: this._onBusinessHoursClick
                            }, a)
                        }
                    }, {
                        key: "getAddressString",
                        value: function(e) {
                            var t = e.streetAddress,
                                a = e.localizedCityName,
                                n = e.zipCode;
                            return t && a && n ? T.default.t(381, {
                                streetAddress: t,
                                city: a,
                                zipCode: n
                            }) : t && a ? T.default.t(380, {
                                streetAddress: t,
                                city: a
                            }) : t
                        }
                    }, {
                        key: "_getAddress",
                        value: function(e, t, a, n) {
                            var l, i, o, r = n ? this.getAddressString(n) : null;
                            (null != t && null != a && (l = s.default.createElement("div", {
                                style: {
                                    height: 150
                                },
                                className: p.default.businessMap
                            }, s.default.createElement(b.default, {
                                lat: t,
                                lng: a,
                                name: r || e,
                                width: 565,
                                height: 150
                            }))), r) && (o = null != t && null != a ? (0, k.getMapUrl)(t, a, r) : (0, k.getSearchUrl)(r), i = s.default.createElement("div", {
                                className: p.default.address
                            }, s.default.createElement(M.default, {
                                href: o
                            }, s.default.createElement(_.default, {
                                selectable: !0,
                                direction: "auto",
                                text: r
                            }))));
                            return i || l ? s.default.createElement(L, {
                                icon: "business-address"
                            }, i, l) : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, n, l, i, o, r;
                            e = (0, y.canSeeSMBUpsell)() ? this._getBusinessInfoTitleWithSMBUpsell() : S.default.supportsFeature(S.default.F.VNAME_V_2) ? this._getBusinessInfoTitleV2() : this._getBusinessInfoTitle();
                            var u, d = this.props.businessProfile;
                            if (d.stale) t = s.default.createElement("div", {
                                className: p.default.contactBusinessInfoSpinner
                            }, s.default.createElement(A.default, {
                                size: 20,
                                stroke: 5
                            }));
                            else if (a = d.categories && d.categories.length ? s.default.createElement(L, {
                                    icon: "business-category"
                                }, s.default.createElement(_.default, {
                                    selectable: !0,
                                    direction: "auto",
                                    text: d.categories.map((function(e) {
                                        return e.localized_display_name
                                    })).join(T.default.t(672))
                                })) : null, n = d.description ? s.default.createElement(L, {
                                    icon: "business-description"
                                }, s.default.createElement(C.default, {
                                    text: d.description,
                                    textLimit: h.default.BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
                                }, (function(e) {
                                    var t = e.textLimit;
                                    return s.default.createElement(_.default, {
                                        selectable: !0,
                                        direction: "auto",
                                        breakWord: !0,
                                        text: d.description,
                                        textLimit: t
                                    })
                                }))) : null, l = this._getAddress(this.props.contact.name, d.latitude, d.longitude, d.structuredAddress), d.website && Array.isArray(d.website) && d.website.length && (i = d.website.map((function(e, t) {
                                    var a = (0, N.getWebsiteLink)(e),
                                        n = s.default.createElement(_.default, {
                                            selectable: !0,
                                            direction: "auto",
                                            text: e
                                        }),
                                        l = s.default.createElement(M.default, {
                                            className: p.default.link,
                                            href: a
                                        }, n);
                                    return s.default.createElement(L, {
                                        icon: "business-website",
                                        key: t
                                    }, l)
                                }))), d.businessHours && (o = this._getBusinessHours(d.businessHours)), d.email) {
                                var c = s.default.createElement(_.default, {
                                        selectable: !0,
                                        direction: "auto",
                                        text: d.email
                                    }),
                                    f = s.default.createElement(M.default, {
                                        className: p.default.link,
                                        href: `mailto:${d.email}`
                                    }, c);
                                r = s.default.createElement(L, {
                                    icon: "business-email",
                                    dir: "auto"
                                }, f)
                            }
                            return (t || null != l || a || n || null != o || r || i) && (u = s.default.createElement(E.default, {
                                theme: "padding"
                            }, s.default.createElement("div", {
                                className: p.default.contactBusinessInfo
                            }, t, l, a, n, o, r, i))), s.default.createElement(s.default.Fragment, null, s.default.createElement(E.default, null, e), u)
                        }
                    }]), a
                }(s.PureComponent);
            t.BusinessProfile = x, x.CONCERNS = {
                contact: ["id", "verifiedLevel", "name", "verifiedName"],
                businessProfile: ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]
            }, x.displayName = "BusinessProfile";
            var D = function(e) {
                    var t = e.first ? s.default.createElement("div", {
                        className: p.default.businessHoursChevron,
                        role: "button"
                    }, s.default.createElement(O.default, {
                        className: e.collapsed ? "" : p.default.flipSvg,
                        display: "inline",
                        name: "chevron-down-alt"
                    })) : null;
                    return s.default.createElement("div", {
                        className: p.default.businessHoursRow
                    }, s.default.createElement("div", {
                        className: p.default.businessHoursDay
                    }, s.default.createElement(_.default, {
                        direction: "auto",
                        text: e.day
                    })), s.default.createElement("div", {
                        className: p.default.businessHoursHours
                    }, s.default.createElement(_.default, {
                        direction: "auto",
                        text: e.hours
                    })), t)
                },
                L = function(e) {
                    return s.default.createElement("div", {
                        className: (0, d.default)(p.default.dataRow, e.className),
                        onClick: e.onClick
                    }, s.default.createElement("div", {
                        className: p.default.dataRowIcon
                    }, s.default.createElement(O.default, {
                        name: e.icon
                    })), s.default.createElement("div", {
                        className: p.default.dataRowText
                    }, e.children))
                },
                B = (0, w.default)(x, x.CONCERNS);
            t.default = B
        },
        28849: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                d = n(a(67294)),
                s = l(a(10598)),
                c = n(a(72259)),
                f = l(a(34541)),
                p = l(a(34263)),
                m = l(a(51376)),
                h = a(74796),
                v = l(a(60482)),
                g = l(a(89115)),
                E = l(a(68390)),
                _ = l(a(2740)),
                C = l(a(44589)),
                M = l(a(75131)),
                S = a(28770),
                y = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l)))._commonGroupInitialized = !1, e.state = {
                            collapsed: !1,
                            numGroups: 0
                        }, e.rerender = function() {
                            e.forceUpdate()
                        }, e.handleClick = function(t, a) {
                            f.default.openChatFromUnread(a).then((function(e) {
                                e && f.default.focusChatTextInput(a)
                            })), e.props.onClose()
                        }, e.handleShowMore = function() {
                            e.setState({
                                collapsed: !1
                            })
                        }, e.renderItem = function(t) {
                            var a = t.chat;
                            return d.default.createElement(c.default, {
                                chat: a,
                                theme: "drawer-list",
                                contact: a.contact,
                                mode: c.Mode.INFO,
                                onClick: e.handleClick,
                                key: a.id.toString()
                            })
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.contact.commonGroups;
                            e && (this.props.listeners.add(e, "add remove", this.rerender), this._commonGroupInitialized = !0), (0, h.findCommonGroups)(this.props.contact).catch((function() {
                                throw __LOG__(4, !0, new Error, !0)`get from participants table failed`, SEND_LOGS("get from participants table failed when finding common groups"), new Error("get from participants table failed")
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            if (e.contact !== this.props.contact) {
                                var t = e.contact.commonGroups;
                                t && e.listeners.remove(t, "add remove", this.rerender), this._commonGroupInitialized = !1
                            }
                            var a = this.props.contact.commonGroups;
                            a && (this._commonGroupInitialized || (this.props.listeners.add(a, "add remove", this.rerender), this._commonGroupInitialized = !0))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props.contact.commonGroups;
                            e && this._commonGroupInitialized && (this.props.listeners.remove(e, "add remove", this.rerender), this._commonGroupInitialized = !1)
                        }
                    }, {
                        key: "getData",
                        value: function() {
                            var e = this.props.contact.commonGroups;
                            return e.length > p.default.INFO_DRAWER_MAX_ROWS && this.state.collapsed && (e = e.slice(0, p.default.INFO_DRAWER_MAX_ROWS)), e.map((function(e) {
                                return {
                                    itemKey: e.id.toString(),
                                    chat: e
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.contact.commonGroups;
                            if (!e || !e.length) return null;
                            var t, a = d.default.createElement(S.TextSpan, {
                                theme: "section-title"
                            }, g.default.n(e.length));
                            if (e.length > p.default.INFO_DRAWER_MAX_ROWS && this.state.collapsed) {
                                var n = e.length - p.default.INFO_DRAWER_MAX_ROWS,
                                    l = d.default.createElement(_.default, {
                                        theme: "transparent"
                                    }, d.default.createElement(M.default, {
                                        name: "down"
                                    }));
                                t = d.default.createElement(s.default, {
                                    image: l,
                                    theme: "drawer-list",
                                    primary: g.default.t(845, {
                                        count: n,
                                        _plural: n
                                    }),
                                    onClick: this.handleShowMore
                                })
                            }
                            return d.default.createElement(m.default, {
                                a8nText: "section-common-groups",
                                title: g.default.t(1819),
                                subtitle: a
                            }, d.default.createElement(v.default, {
                                flatListController: this.props.flatListController,
                                direction: "vertical",
                                forceConsistentRenderCount: !1,
                                data: this.getData(),
                                renderItem: this.renderItem
                            }), t)
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var a = e.contact.commonGroups,
                                n = a ? a.length : 0;
                            return t.numGroups <= p.default.INFO_DRAWER_MAX_ROWS && n > p.default.INFO_DRAWER_MAX_ROWS ? {
                                numGroups: n,
                                collapsed: !0
                            } : {
                                numGroups: n
                            }
                        }
                    }]), a
                }(d.Component);
            y.CONCERNS = {
                contact: ["commonGroups"]
            }, y.displayName = "CommonGroupsWell";
            var T = (0, E.default)((0, C.default)(y, y.CONCERNS));
            t.default = T
        },
        62570: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(81109)),
                o = l(a(34575)),
                r = l(a(93913)),
                u = l(a(2205)),
                d = l(a(99842)),
                s = n(a(67294)),
                c = a(99703),
                f = l(a(76088)),
                p = l(a(3461)),
                m = l(a(42004)),
                h = a(22918),
                v = l(a(17995)),
                g = a(79984),
                E = l(a(10725)),
                _ = l(a(51934)),
                C = l(a(26671)),
                M = l(a(34541)),
                S = l(a(28849)),
                y = l(a(25960)),
                T = l(a(42799)),
                P = a(78911),
                b = l(a(77365)),
                k = n(a(42575)),
                I = l(a(81997)),
                N = l(a(82745)),
                A = l(a(25259)),
                w = l(a(10869)),
                O = l(a(66015)),
                R = n(a(62647)),
                x = l(a(51376)),
                D = l(a(41769)),
                L = l(a(31660)),
                B = a(14650),
                F = l(a(50842)),
                G = l(a(22021)),
                V = a(31230),
                U = l(a(17957)),
                H = l(a(37286)),
                W = l(a(89115)),
                j = l(a(45425)),
                Y = l(a(68390)),
                q = l(a(13782)),
                K = l(a(68708)),
                X = l(a(8643)),
                z = l(a(87327)),
                Z = l(a(45706)),
                $ = l(a(1935)),
                J = a(79164),
                Q = l(a(73626)),
                ee = l(a(42027)),
                te = l(a(70215)),
                ae = a(36474),
                ne = a(82565),
                le = l(a(58695)),
                ie = l(a(57478)),
                oe = a(97849),
                re = l(a(44589)),
                ue = l(a(56830)),
                de = l(a(75131)),
                se = a(28770),
                ce = l(a(26865)),
                fe = l(a(78422)),
                pe = l(a(63056)),
                me = a(7991),
                he = a(6603),
                ve = a(17259),
                ge = a(71701),
                Ee = l(a(54047)),
                _e = l(a(63805)),
                Ce = a(92618),
                Me = a(87617),
                Se = l(a(72521)),
                ye = l(a(2180)),
                Te = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, d.default)(a);

                    function a(e) {
                        var n;
                        return (0, o.default)(this, a), (n = t.call(this, e)).flatListController = new F.default, n._handleBlocklistChange = function() {
                            n.state.contactIsBlocked !== !!f.default.get(n.props.contact.id) && n.setState({
                                contactIsBlocked: !!f.default.get(n.props.contact.id)
                            })
                        }, n.handleVerificationClick = function() {
                            n.props.onVerification()
                        }, n._handleDeleteChat = function() {
                            var e = C.default.assertGet(n.props.contact.id);
                            M.default.deleteOrExitChat(e)
                        }, n.handleBlockContact = function() {
                            var e = s.default.createElement(Z.default, {
                                contact: n.props.contact
                            });
                            M.default.openModal(s.default.createElement(y.default, {
                                onOK: n.blockContact,
                                okText: W.default.t(284),
                                onCancel: function() {
                                    return M.default.closeModal()
                                },
                                cancelText: W.default.t(1694)
                            }, s.default.createElement(j.default, {
                                id: 286,
                                params: {
                                    contact: e
                                }
                            })))
                        }, n.handleReportSpam = function() {
                            M.default.openModal(s.default.createElement(te.default, {
                                isBusiness: n.props.contact.isBusiness,
                                isGroupChat: !1,
                                onReport: n.reportSpam,
                                onReportBlockClear: n.reportSpamBlockClear,
                                onCancel: function() {
                                    return M.default.closeModal()
                                }
                            }))
                        }, n.reportSpam = function() {
                            var e = C.default.get(n.props.contact.id);
                            e && (0, ne.sendSpamReport)(e, oe.SpamFlow.Account), M.default.closeModal()
                        }, n.reportSpamBlockClear = function() {
                            var e = C.default.get(n.props.contact.id);
                            e && (0, ne.sendSpamBlockClear)(e, oe.SpamFlow.Block), M.default.closeModal()
                        }, n.handleUnblockContact = function() {
                            var e = s.default.createElement(Z.default, {
                                contact: n.props.contact
                            });
                            M.default.openModal(s.default.createElement(y.default, {
                                okText: W.default.t(1500),
                                onOK: n.unblockContact,
                                cancelText: W.default.t(1694),
                                onCancel: function() {
                                    return M.default.closeModal()
                                }
                            }, s.default.createElement(j.default, {
                                id: 1501,
                                params: {
                                    contact: e
                                }
                            })))
                        }, n.blockContact = function() {
                            (0, c.blockContact)(n.props.contact), M.default.closeModal()
                        }, n.unblockContact = function() {
                            (0, c.unblockContact)(n.props.contact), M.default.closeModal()
                        }, n.handleClose = function() {
                            n.props.onClose ? n.props.onClose() : n.props.uim.uie.requestDismiss()
                        }, n._handleViewPicture = function(e) {
                            if (n._canViewPicture) {
                                var t = e.target;
                                M.default.openModalMedia(s.default.createElement($.default, {
                                    contact: n.props.contact,
                                    profilePicThumb: n.props.contact.getProfilePicThumb(),
                                    animateBorderRadius: !0,
                                    getZoomNode: function(e) {
                                        e(t)
                                    }
                                }), {
                                    transition: "profile-viewer",
                                    uim: n.props.uim
                                })
                            }
                        }, n._handleOpenStatus = function() {
                            (0, h.logStatusClick)(n.props.contact.id, (0, J.getProductCatalogSessionId)(n.context))
                        }, n._handleDetailImageLoad = function() {
                            n._canViewPicture = !0
                        }, n._canViewPicture = !1, n.state = {
                            contactIsBlocked: !!f.default.get(e.contact.id),
                            scrollDepth: 100
                        }, n
                    }
                    return (0, r.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.listeners.add(f.default, "add remove reset sync", this._handleBlocklistChange);
                            var e = this.props.contact;
                            e.businessProfile && !e.businessProfile.stale && e.businessCatalog && E.default.findCarouselCatalog(e.id).catchType(B.ServerStatusCodeError, (function() {
                                __LOG__(3)`Failed to fetch product catalog in contact drawer from server`
                            })), G.default.supportsFeature(G.default.F.MD_BACKEND) && (0, ve.getFanOutList)([e.id, (0, ge.assertGetMe)()]).then((function(e) {
                                (0, me.ensureE2ESessions)(e)
                            })), (0, J.getProductCatalogContext)(this.context).session.isAccidental() ? M.default.setDrawerContext("right", (0, J.buildProductCatalogContext)(new Q.default, (0, P.getMaybeBizPlatformForLogging)(e.id.toString()), X.default.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE)) : e.isBusiness && (0, V.canSeeBizProfileV3)() && (0, h.logProfileImpression)(e.id, (0, J.getProductCatalogSessionId)(this.context))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props.contact;
                            (0, J.getProductCatalogContext)(this.context).session.isAccidental() || e.isBusiness && (0, V.canSeeBizProfileV3)() && (0, h.logProfileExit)(e.id, (0, J.getProductCatalogSessionId)(this.context), this.state.scrollDepth)
                        }
                    }, {
                        key: "_shouldRenderCatalog",
                        value: function() {
                            var e = this.props.contact;
                            return !!(e && e.isBusiness && e.businessProfile) && !!e.businessCatalog
                        }
                    }, {
                        key: "_renderBusinessProfileTopCard",
                        value: function() {
                            return this.props.contact.businessProfile ? s.default.createElement(b.default, {
                                contact: this.props.contact,
                                onProfilePicLoad: this._handleDetailImageLoad,
                                onProfilePicClick: this._handleViewPicture,
                                onOpenStatus: this._handleOpenStatus,
                                businessProfile: this.props.contact.businessProfile,
                                onProductCatalog: this.props.onProductCatalog
                            }) : null
                        }
                    }, {
                        key: "_renderTopCard",
                        value: function() {
                            var e = this.props.contact;
                            if ((0, V.canSeeBizProfileV3)() && e.isBusiness) return this._renderBusinessProfileTopCard();
                            var t = C.default.get(e.id),
                                a = !e.name && e.notifyName ? s.default.createElement("div", {
                                    className: T.default.nameSecondary
                                }, s.default.createElement(se.TextSpan, {
                                    theme: "muted"
                                }, s.default.createElement(D.default, {
                                    className: T.default.screenName,
                                    direction: "auto",
                                    text: e.notifyName,
                                    selectable: !0
                                }))) : null,
                                n = e.showBusinessCheckmarkAsSecondary && G.default.supportsFeature(G.default.F.VNAME_V_2) ? s.default.createElement("div", {
                                    className: T.default.businessVname
                                }, s.default.createElement(D.default, {
                                    text: e.verifiedName,
                                    direction: "auto"
                                }), s.default.createElement("div", {
                                    className: T.default.icon
                                }, s.default.createElement(de.default, {
                                    name: "psa-verified"
                                }))) : null,
                                l = t && t.presence ? s.default.createElement(ce.default, {
                                    contact: e,
                                    presence: t.presence,
                                    chatstate: t.presence.chatstate,
                                    location: "info"
                                }) : null;
                            return s.default.createElement(x.default, {
                                theme: "padding-large"
                            }, s.default.createElement("div", {
                                className: T.default.avatar
                            }, s.default.createElement(k.default, {
                                id: e.id,
                                size: k.DETAIL_IMAGE_SIZE.LARGE,
                                loader: !0,
                                onLoad: this._handleDetailImageLoad,
                                onClick: this._handleViewPicture,
                                quality: k.DETAIL_IMAGE_QUALITY.HIGH
                            })), s.default.createElement(se.TextHeader, {
                                level: "2",
                                theme: "large"
                            }, s.default.createElement(Z.default, {
                                contact: e,
                                selectable: !0,
                                showBusinessCheckmark: e.showBusinessCheckmarkAsPrimary
                            })), a, s.default.createElement("div", {
                                className: T.default.nameSecondary
                            }, s.default.createElement(se.TextSpan, {
                                theme: "muted"
                            }, n), s.default.createElement(se.TextSpan, {
                                theme: "muted"
                            }, l)), s.default.createElement(H.default, {
                                labels: e.labels
                            }))
                        }
                    }, {
                        key: "_handleScroll",
                        value: function(e) {
                            var t = Math.floor(100 * (1 + e.currentTarget.scrollTop / e.currentTarget.offsetHeight));
                            t > this.state.scrollDepth && this.setState({
                                scrollDepth: t
                            })
                        }
                    }, {
                        key: "renderProductCatalogSection",
                        value: function() {
                            if (!this._shouldRenderCatalog()) return null;
                            var e = this.props,
                                t = e.contact,
                                a = e.onProductCatalog,
                                n = e.onProductDetail,
                                l = E.default.get(t.id);
                            if (!l) return null;
                            var i = "",
                                o = !1;
                            return (0, V.canSeeBizProfileV3)() && (i = W.default.t(484), o = !0), (0, J.getProductCatalogContext)(this.context).session.isAccidental() ? null : (0, g.hasShop)(t.businessProfile) ? s.default.createElement(ie.default, {
                                businessProfile: t.businessProfile,
                                catalog: l,
                                subtitle: i,
                                hideIncompleteRows: o
                            }) : s.default.createElement(_.default, {
                                onProductDetail: n,
                                onProductCatalog: a,
                                catalog: l,
                                subtitle: i,
                                hideIncompleteRows: o,
                                shouldLog: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props.contact,
                                a = s.default.createElement(S.default, {
                                    contact: this.props.contact,
                                    onClose: this.handleClose,
                                    flatListController: this.flatListController
                                }),
                                n = C.default.get(t.id);
                            n && (e = s.default.createElement(x.default, null, s.default.createElement(w.default, {
                                a8nText: "li-delete-chat",
                                icon: s.default.createElement(de.default, {
                                    name: "delete"
                                }),
                                color: "danger",
                                onClick: this._handleDeleteChat
                            }, W.default.t(607))));
                            var l = null;
                            l = this.state.contactIsBlocked ? s.default.createElement(x.default, null, s.default.createElement(w.default, {
                                a8nText: "li-unblock",
                                color: "success",
                                icon: s.default.createElement(de.default, {
                                    name: "settings-blocked",
                                    directional: !0
                                }),
                                onClick: this.handleUnblockContact
                            }, W.default.t(1500))) : s.default.createElement(x.default, null, s.default.createElement(w.default, {
                                a8nText: "li-block",
                                color: "danger",
                                icon: s.default.createElement(de.default, {
                                    name: "settings-blocked",
                                    directional: !0
                                }),
                                onClick: this.handleBlockContact
                            }, W.default.t(284)));
                            var i = s.default.createElement(x.default, null, s.default.createElement(w.default, {
                                    a8nText: "li-report-spam",
                                    color: "danger",
                                    icon: s.default.createElement(de.default, {
                                        name: "thumbs-down",
                                        directional: !0
                                    }),
                                    onClick: this.handleReportSpam
                                }, t.isBusiness ? W.default.t(1318) : W.default.t(1321))),
                                o = null;
                            if (this.props.onMediaGallery && n) {
                                var r = this.props.onMediaGallery,
                                    u = s.default.createElement(de.default, {
                                        className: T.default.chevron,
                                        name: "chevron-right-alt",
                                        directional: !0
                                    }),
                                    d = W.default.t(1026);
                                o = s.default.createElement(x.default, {
                                    a8nText: "section-media",
                                    title: d,
                                    titleOnClick: r,
                                    subtitle: u,
                                    theme: "padding"
                                }, s.default.createElement(K.default, {
                                    chat: n,
                                    mediaMsgs: n.getMediaMsgs()
                                }))
                            }
                            var c = null;
                            G.default.supportsFeature(G.default.F.LIVE_LOCATIONS) && n && (c = s.default.createElement(q.default, {
                                chat: n,
                                onClick: this.props.onLiveLocation
                            }));
                            var f = null,
                                h = null;
                            (0, V.canSeeBizProfileV3)() ? h = this.renderProductCatalogSection(): f = this.renderProductCatalogSection();
                            var g = n && n.mute.canMute() ? s.default.createElement(z.default, {
                                    chat: n,
                                    mute: n.mute,
                                    settings: le.default
                                }) : null,
                                E = null;
                            if (this.props.onStarred) {
                                var _ = s.default.createElement(de.default, {
                                    className: T.default.chevron,
                                    name: "chevron-right-alt",
                                    directional: !0
                                });
                                E = s.default.createElement(N.default, {
                                    a8nText: "block-starred-messages",
                                    side: _,
                                    onClick: this.props.onStarred
                                }, s.default.createElement(se.TextSpan, {
                                    theme: "title"
                                }, W.default.t(524)))
                            }
                            var M = n && n.shouldShowEphemeralSetting() ? s.default.createElement(L.default, {
                                    onClick: this.props.onEphemeral,
                                    chat: n
                                }) : null,
                                y = null,
                                P = n && n.getReceivedVcardMsgs();
                            if (G.default.supportsFeature(G.default.F.INDEX_RECEIVED_VCARD) && P && P.length) {
                                var b = s.default.createElement(de.default, {
                                    className: T.default.chevron,
                                    name: "chevron-right-alt",
                                    directional: !0
                                });
                                y = s.default.createElement(N.default, {
                                    a8nText: "block-contact-card",
                                    side: b,
                                    onClick: this.props.onContactCard
                                }, s.default.createElement(se.TextSpan, {
                                    theme: "title"
                                }, W.default.t(577, {
                                    _plural: P.length
                                })))
                            }
                            var k = G.default.supportsFeature(G.default.F.MD_BACKEND) ? s.default.createElement(Pe, {
                                    reducedPrivacyMode: (0, he.getReducedPrivacyMode)(this.props.contact.privacyMode),
                                    onVerificationClick: this.handleVerificationClick,
                                    contactId: this.props.contact.id
                                }) : null,
                                O = null;
                            (g || E || M || y || k) && (O = s.default.createElement(x.default, null, g, E, M, y, k));
                            var D, B, F = s.default.createElement(N.default, {
                                    multiline: !0
                                }, s.default.createElement(se.TextSpan, {
                                    theme: "title"
                                }, s.default.createElement(ue.default, {
                                    id: t.id
                                }))),
                                U = s.default.createElement(N.default, null, s.default.createElement(ae.SelectableSpan, {
                                    dir: "auto",
                                    selectable: !0
                                }, s.default.createElement(se.TextSpan, {
                                    theme: "title"
                                }, (0, fe.default)(t.id)))),
                                j = s.default.createElement(x.default, {
                                    a8nText: "section-about-and-phone-number"
                                }, s.default.createElement("div", {
                                    className: T.default.titleAbout
                                }, s.default.createElement(se.TextSpan, {
                                    theme: "section-title"
                                }, W.default.t(578))), F, U),
                                Y = this._renderTopCard(),
                                X = null,
                                Z = void 0;
                            return t.isBusiness && t.businessProfile && ((0, V.canSeeBizProfileV3)() && t.businessProfile ? (X = s.default.createElement(m.default, {
                                businessProfile: t.businessProfile,
                                contact: t
                            }), D = s.default.createElement(p.default, {
                                contact: t
                            }), t.labels && t.labels.length > 0 && (B = s.default.createElement(x.default, {
                                theme: "padding"
                            }, s.default.createElement(H.default, {
                                labels: t.labels,
                                theme: "standalone"
                            }))), Z = this._handleScroll.bind(this)) : t.businessProfile && (X = s.default.createElement(v.default, {
                                contact: t,
                                businessProfile: t.businessProfile
                            }))), s.default.createElement(I.default, {
                                key: "contact-info-modal",
                                theme: "striped"
                            }, s.default.createElement(R.default, {
                                title: W.default.t(1706),
                                type: R.DRAWER_HEADER_TYPE.SMALL,
                                onCancel: this.handleClose
                            }), s.default.createElement(A.default, {
                                flatListControllers: [this.flatListController],
                                onScroll: Z
                            }, s.default.createElement("section", {
                                className: T.default.body
                            }, Y, D, B, h, X, c, f, o, O, j, null, a, l, i, e)))
                        }
                    }]), a
                }(s.Component);

            function Pe(e) {
                var t = e.reducedPrivacyMode,
                    a = e.onVerificationClick,
                    n = e.contactId,
                    l = _e.default.isVoiceCallEnabled() || _e.default.isVideoCallEnabled() ? W.default.t(1710) : W.default.t(1709);
                if (pe.default.bspSystemMessageEnabled) {
                    var o = function(e, t) {
                            if ((0, ye.default)(t.user)) return {
                                text: W.default.t(1472),
                                title: W.default.t(2039),
                                onClick: function() {
                                    (0, Se.default)(W.default.t(1470), (0, Ce.getSupportChatSafetyFaqUrl)(), W.default.t(1471))
                                }
                            };
                            switch (e) {
                                case he.ReducedPrivacyMode.E2EE:
                                    return (0, i.default)({}, null);
                                case he.ReducedPrivacyMode.BSP:
                                    return {
                                        text: W.default.t(2031), title: W.default.t(2039), onClick: function() {
                                            (0, Se.default)((0, Me.formatBspModalText)(), (0, Ce.getE2EEnterpriseFaqUrl)())
                                        }
                                    };
                                case he.ReducedPrivacyMode.FB:
                                    return {
                                        text: W.default.t(2032), title: W.default.t(2039), onClick: function() {
                                            (0, Se.default)((0, Me.formatFbModalText)(), (0, Ce.getE2EEnterpriseFaqUrl)())
                                        }
                                    }
                            }
                        }(t, n),
                        r = o.title,
                        u = o.text,
                        d = o.onClick;
                    return s.default.createElement(Ee.default, {
                        title: r,
                        text: null != u ? u : l,
                        onClick: null != d ? d : a
                    })
                }
                return s.default.createElement(Ee.default, {
                    onClick: a,
                    text: l
                })
            }
            Te.contextType = O.default, Te.CONCERNS = {
                contact: ["id", "formattedName", "formattedUser", "formattedShortName", "isBusiness", "isEnterprise", "isMyContact", "commonGroups", "businessProfile", "showBusinessCheckmarkAsPrimary", "showBusinessCheckmarkAsSecondary", "verifiedName", "verifiedLevel", "name", "notifyName", "labels", "businessCatalog", "isContactBlocked", "isMe", "statusMute", "privacyMode"]
            }, Te.displayName = "ContactInfoDrawer";
            var be = (0, U.default)((0, ee.default)((0, Y.default)((0, re.default)(Te, Te.CONCERNS))));
            t.default = be
        },
        77365: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, a = e.contact,
                    n = e.businessProfile,
                    p = e.onOpenStatus,
                    m = e.onProductCatalog,
                    h = e.onProfilePicLoad,
                    v = e.onProfilePicClick,
                    g = (0, f.default)(n, ["businessHours", "categories"]),
                    E = g.businessHours,
                    _ = g.categories,
                    C = l.default.createElement(o.default, {
                        contact: a
                    });
                null != _ && _.length > 0 && (t = l.default.createElement("div", {
                    className: u.default.categories
                }, _.map((function(e) {
                    return e.localized_display_name
                })).join(s.default.t(671))));
                var M = E ? l.default.createElement(c.default, {
                    hours: E
                }) : null;
                return l.default.createElement(d.default, {
                    className: u.default.noPaddingBottom,
                    theme: "padding"
                }, l.default.createElement(r.default, {
                    contact: a,
                    onClick: v,
                    onOpenStatus: p,
                    onLoad: h
                }), l.default.createElement("div", {
                    className: u.default.info
                }, C, t, M, l.default.createElement(i.default, {
                    contact: a,
                    onProductCatalog: m
                })))
            };
            var l = n(a(67294)),
                i = n(a(57495)),
                o = n(a(96910)),
                r = n(a(47322)),
                u = n(a(32234)),
                d = n(a(51376)),
                s = n(a(89115)),
                c = n(a(51804)),
                f = n(a(33819))
        },
        47518: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            });
            var l = n(a(62570))
        },
        51804: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.hours,
                    a = function(e) {
                        switch (e.status) {
                            case u.BUSINESS_OPEN_STATUS.OPEN_24H:
                                return o.default.t(371, {
                                    open: `<span class="${r.default.open}">${o.default.t(369)}</span>`
                                });
                            case u.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                                return o.default.t(372, {
                                    open: `<span class="${r.default.open}">${o.default.t(369)}</span>`
                                });
                            case u.BUSINESS_OPEN_STATUS.OPEN:
                                if (e.openUntil && e.additionalOpen && e.additionalClose) return o.default.t(376, {
                                    open: `<span class="${r.default.open}">${o.default.t(369)}</span>`,
                                    time: d(e.openUntil),
                                    additionalOpenTime: d(e.additionalOpen),
                                    additionalCloseTime: d(e.additionalClose)
                                });
                                if (e.openUntil) return o.default.t(375, {
                                    open: `<span class="${r.default.open}">${o.default.t(369)}</span>`,
                                    time: d(e.openUntil)
                                });
                                break;
                            case u.BUSINESS_OPEN_STATUS.CLOSED:
                                return e.opensAt ? o.default.t(361, {
                                    closed: `<span class="${r.default.closed}">${o.default.t(360)}</span>`,
                                    time: d(e.opensAt)
                                }) : `<span class="${r.default.closed}">${o.default.t(360)}</span>`;
                            case u.BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                                return `<span class="${r.default.closed}">${o.default.t(362)}</span>`
                        }
                        return null
                    }((0, u.getBusinessOpenState)(t));
                if (null == a) return null;
                var n = l.default.sanitize(a);
                return i.default.createElement("div", {
                    className: r.default.openStatus,
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                })
            };
            var l = n(a(27856)),
                i = n(a(67294)),
                o = n(a(89115)),
                r = n(a(13916)),
                u = a(89822);

            function d(e) {
                return null == e ? "" : e.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit"
                })
            }
        },
        54047: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                if (i.default.supportsFeature(i.default.F.MD_BACKEND)) {
                    var t, a = e.onClick,
                        n = e.text,
                        c = l.default.createElement(r.default, {
                            name: "lock",
                            className: d.default.icon
                        });
                    return l.default.createElement(u.default, {
                        onClick: a,
                        side: c,
                        multiline: !0
                    }, l.default.createElement("div", {
                        className: d.default.header
                    }, l.default.createElement(o.TextSpan, {
                        theme: "title"
                    }, null !== (t = e.title) && void 0 !== t ? t : s.default.t(1737))), l.default.createElement(o.TextDiv, {
                        theme: "muted"
                    }, n))
                }
                return null
            };
            var l = n(a(67294)),
                i = n(a(22021)),
                o = a(28770),
                r = n(a(75131)),
                u = n(a(82745)),
                d = n(a(21477)),
                s = n(a(89115))
        },
        2714: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(67154)),
                o = l(a(63038)),
                r = l(a(319)),
                u = l(a(87757)),
                d = l(a(48926)),
                s = l(a(34575)),
                c = l(a(93913)),
                f = l(a(81506)),
                p = l(a(2205)),
                m = l(a(99842)),
                h = n(a(67294)),
                v = l(a(97930)),
                g = l(a(99472)),
                E = l(a(31828)),
                _ = l(a(10598)),
                C = l(a(26671)),
                M = l(a(79140)),
                S = l(a(34541)),
                y = l(a(25960)),
                T = l(a(34263)),
                P = l(a(81997)),
                b = l(a(82745)),
                k = l(a(25259)),
                I = l(a(10869)),
                N = n(a(62647)),
                A = l(a(51376)),
                w = l(a(33079)),
                O = l(a(80297)),
                R = l(a(41769)),
                x = l(a(42715)),
                D = l(a(31660)),
                L = n(a(98569)),
                B = n(a(60482)),
                F = l(a(50842)),
                G = a(71701),
                V = l(a(22021)),
                U = l(a(17847)),
                H = l(a(11514)),
                W = l(a(17957)),
                j = a(12518),
                Y = l(a(37286)),
                q = l(a(89115)),
                K = n(a(46515)),
                X = l(a(68390)),
                z = l(a(13782)),
                Z = l(a(68708)),
                $ = a(11367),
                J = l(a(87327)),
                Q = a(45706),
                ee = l(a(54634)),
                te = l(a(84520)),
                ae = l(a(32874)),
                ne = a(95373),
                le = l(a(42027)),
                ie = l(a(70215)),
                oe = l(a(2740)),
                re = a(82565),
                ue = l(a(63056)),
                de = a(61934),
                se = a(31914),
                ce = l(a(58695)),
                fe = a(97849),
                pe = l(a(44589)),
                me = a(89305),
                he = l(a(97181)),
                ve = l(a(75131)),
                ge = a(28770),
                Ee = n(a(79077)),
                _e = n(a(92631)),
                Ce = l(a(4268)),
                Me = l(a(88117)),
                Se = l(a(12717)),
                ye = a(17890),
                Te = l(a(54047)),
                Pe = l(a(63805)),
                be = a(38271),
                ke = (0, _e.genId)("max_participant_toast"),
                Ie = function(e) {
                    (0, p.default)(a, e);
                    var t = (0, m.default)(a);

                    function a(e) {
                        var n;
                        (0, s.default)(this, a), (n = t.call(this, e))._participantFlatListController = new F.default, n._pendingParticipantFlatListController = new F.default, n._setRefContainer = function(e) {
                            n._refContainer = e
                        }, n._updateGroupDescOnModelChange = function() {
                            n.props.groupMetadata && n.setState({
                                groupDesc: n.props.groupMetadata.desc
                            })
                        }, n.handleImageSet = function(e, t) {
                            var a = n.props.profilePicThumb;
                            n.setState({
                                pendingPhoto: !0
                            }), (e && t ? (0, ne.setProfilePic)(a, e, t) : (0, ne.deleteProfilePic)(a)).checkpoint(n.props.rejectOnUnmount()).catchType(L.Unmount, (function() {})).catchType(L.ActionError, (function() {
                                __LOG__(3)`GroupInfoDrawer: failed to set/delete group image`, n.setState({
                                    resetPhotoPicker: !n.state.resetPhotoPicker
                                })
                            })).finally((function() {
                                n.setState({
                                    pendingPhoto: !1
                                })
                            }))
                        }, n.handleParticipantClick = function(e, t) {
                            Se.default.equals((0, G.getMaybeMeUser)(), t.id) || C.default.find(t.id).then((function(e) {
                                S.default.openChatFromUnread(e).then((function(t) {
                                    t && S.default.focusChatTextInput(e)
                                }))
                            }))
                        }, n._menuEnabled = function(e) {
                            var t = n.props.groupMetadata.participants,
                                a = t.get(e.id);
                            return !!a && (t.canPromote(a) || t.canRemove(a) || t.canVerifyIdentity(a))
                        }, n.handleDemoteAdmin = function(e) {
                            e.contact.pendingAction++, (0, $.demoteParticipants)(n.props.chat, [e]).then((function() {
                                e.contact.pendingAction--
                            })), n.setState({
                                contextMenu: null
                            })
                        }, n.handleParticipantMenu = function(e, t) {
                            var a = n.props.groupMetadata.participants,
                                l = a.assertGet(t.id);
                            if (n._menuEnabled(t)) {
                                var i = [];
                                if (a.canPromote(l)) {
                                    var o = n._confirmParticipantPromote.bind((0, f.default)(n), l);
                                    i.push(h.default.createElement(w.default, {
                                        a8n: "mi-grp-promote-admin",
                                        key: "promote",
                                        action: o
                                    }, q.default.t(1034)))
                                }
                                if (a.canRemove(l)) {
                                    var r = n._confirmParticipantRemove.bind((0, f.default)(n), l);
                                    i.push(h.default.createElement(w.default, {
                                        a8n: "mi-grp-remove-participant",
                                        key: "remove",
                                        action: r
                                    }, q.default.t(1039)))
                                }
                                if (V.default.supportsFeature(V.default.F.GROUPS_V_3) && a.canDemote(l)) {
                                    var u = n.handleDemoteAdmin.bind((0, f.default)(n), l);
                                    i.push(h.default.createElement(w.default, {
                                        a8n: "mi-grp-verify-identify",
                                        key: "demote-admin",
                                        action: u
                                    }, q.default.t(638)))
                                }
                                if (V.default.supportsFeature(V.default.F.MD_BACKEND) && a.canVerifyIdentity(l)) {
                                    var d = n._handleVerifyIdentity.bind((0, f.default)(n), l);
                                    i.push(h.default.createElement(w.default, {
                                        a8n: "mi-grp-verify-identify",
                                        key: "verify-identity",
                                        action: d
                                    }, q.default.t(1993)))
                                }
                                e.event && e.event.persist(), n.setState({
                                    contextMenu: {
                                        contactId: t.id,
                                        menu: i,
                                        anchor: e.anchor,
                                        event: e.event
                                    }
                                })
                            }
                        }, n.closeContextMenu = function() {
                            n.setState({
                                contextMenu: null
                            })
                        }, n._confirmParticipantRemove = function(e) {
                            var t = n.handleParticipantRemove.bind((0, f.default)(n), e, !0),
                                a = q.default.t(563, {
                                    participant: e.contact.formattedName,
                                    subject: n.props.contact.name
                                });
                            S.default.openModal(h.default.createElement(y.default, {
                                onOK: t,
                                okText: q.default.t(1310),
                                onCancel: function() {
                                    return S.default.closeModal()
                                },
                                cancelText: q.default.t(1694)
                            }, h.default.createElement(R.default, {
                                text: a
                            })))
                        }, n.handleParticipantRemove = function(e, t) {
                            e.contact.pendingAction++, (0, $.removeParticipants)(n.props.chat, [e]).then((function() {
                                e.contact.pendingAction--
                            })), t && S.default.closeModal()
                        }, n._confirmParticipantPromote = function(e) {
                            var t = n.handleParticipantPromote.bind((0, f.default)(n), e, !0),
                                a = q.default.t(562, {
                                    participant: e.contact.formattedName,
                                    subject: n.props.contact.name
                                });
                            S.default.openModal(h.default.createElement(y.default, {
                                onOK: t,
                                okText: q.default.t(1034),
                                onCancel: function() {
                                    return S.default.closeModal()
                                },
                                cancelText: q.default.t(1694)
                            }, h.default.createElement(R.default, {
                                text: a
                            })))
                        }, n.handleParticipantPromote = function(e, t) {
                            e.contact.pendingAction++, (0, $.promoteParticipants)(n.props.chat, [e]).then((function() {
                                e.contact.pendingAction--
                            })), t && S.default.closeModal()
                        }, n._handleVerifyIdentity = function(e) {
                            n.props.onVerification && n.props.onVerification(e.contact)
                        }, n._openAddGroupParticipantFlow = function() {
                            var e = n.props.chat;
                            if (n.props.groupMetadata.participants.length >= ue.default.maxParticipants) {
                                var t = q.default.t(100, {
                                    max: ue.default.maxParticipants
                                });
                                S.default.openToast(h.default.createElement(_e.default, {
                                    msg: t,
                                    id: ke
                                }))
                            } else {
                                var a = V.default.supportsFeature(V.default.F.GROUPS_V_3) ? h.default.createElement(E.default, {
                                    chat: (0, me.unproxy)(e),
                                    pushTransition: "none",
                                    popTransition: "none"
                                }) : h.default.createElement(g.default, {
                                    chat: (0, me.unproxy)(e),
                                    pushTransition: "none",
                                    popTransition: "none"
                                });
                                S.default.openModal(a, {
                                    transition: "modal-flow"
                                })
                            }
                        }, n._openParticpantSearch = function() {
                            S.default.openModal(h.default.createElement(H.default, {
                                chat: (0, me.unproxy)(n.props.chat),
                                onParticipantPromote: n.handleParticipantPromote,
                                onParticipantRemove: n.handleParticipantRemove,
                                onDemoteAdmin: n.handleDemoteAdmin
                            }), {
                                transition: "modal-flow"
                            })
                        }, n.handleClose = function() {
                            n.props.onClose ? n.props.onClose() : n.props.uim.uie.requestDismiss()
                        }, n._handleExitOrDeleteGroup = function() {
                            S.default.deleteOrExitChat(n.props.chat)
                        }, n._handleGroupDescChange = function(e) {
                            n.setState({
                                groupDesc: e
                            })
                        }, n._handleSetSubject = function() {
                            var e = (0, d.default)(u.default.mark((function e(t) {
                                var a;
                                return u.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((a = (0, x.default)(t)) !== n.props.contact.name) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return e.next = 5, (0, se.setGroupSubject)(n.props.chat, a).catchType(L.Unmount, (function() {})).catch((function() {
                                                __LOG__(3)`group_info_drawer:onSetSubject failed`
                                            }));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), n._handleSetDescription = function() {
                            var e = n.props,
                                t = e.chat,
                                a = e.groupMetadata;
                            if (a.canSetDescription()) {
                                var l = n.state.groupDesc || "",
                                    i = l.match(/\r\n/gm) ? "\r\n" : "\n",
                                    o = new RegExp(`^(${i}{2,})([^\n])`, "gm");
                                l = l.replace(o, `${i}$2`);
                                var r = (0, x.default)(l || "");
                                if (r === a.desc) return n.setState({
                                    groupDesc: r
                                });
                                n.setState({
                                    pendingDesc: !0
                                }), (0, de.setGroupDesc)(t, r).then((function() {
                                    n.setState({
                                        groupDesc: a.desc,
                                        pendingDesc: !1
                                    })
                                })).catchType(L.Unmount, (function() {})).catch((function() {
                                    __LOG__(3)`group_info_drawer:onSetDescription failed`, n.setState({
                                        groupDesc: n.props.groupMetadata.desc,
                                        pendingDesc: !1
                                    })
                                }))
                            }
                        }, n._handleCancelDesc = function() {
                            n.setState({
                                groupDesc: n.props.groupMetadata.desc
                            })
                        }, n.showEncryptionInfoPopup = function() {
                            S.default.openModal(h.default.createElement(O.default, {
                                chatId: n.props.chat.id,
                                e2eSubtype: "info_encrypted"
                            }))
                        }, n._showSecurityInfoPopup = function() {
                            S.default.openModal(h.default.createElement(O.default, {
                                chat: n.props.chat,
                                chatId: n.props.chat.id,
                                e2eSubtype: "info_encrypted"
                            }))
                        }, n.handleShowMore = function() {
                            n.setState({
                                participantListCollapsed: !1
                            })
                        }, n._handleShowMorePendingParticipants = function() {
                            n.setState({
                                pendingParticipantListCollapsed: !1
                            })
                        }, n.renderItem = function(e) {
                            var t = e.id,
                                a = n.props.groupMetadata.participants.get(t);
                            if (!a) throw new B.UnknownDataError(e);
                            var l = a.contact,
                                i = !!n.state.contextMenu && Se.default.equals(l.id, n.state.contextMenu.contactId);
                            return h.default.createElement(ee.default, {
                                contact: l,
                                participant: a,
                                key: a.id.toString(),
                                onClick: n.handleParticipantClick,
                                contextEnabled: n._menuEnabled.bind((0, f.default)(n), l),
                                contextMenu: i,
                                onContext: function(e) {
                                    return n.handleParticipantMenu(e, l)
                                },
                                showNotifyName: !0,
                                waitIdle: !0
                            })
                        }, n.handleReportSpam = function() {
                            S.default.openModal(h.default.createElement(ie.default, {
                                isGroupChat: !0,
                                onReport: n.reportSpam,
                                onReportExitClear: n.reportSpamExitClear,
                                onCancel: function() {
                                    return S.default.closeModal()
                                }
                            }))
                        }, n.reportSpam = function() {
                            (0, re.sendSpamReport)(n.props.chat, fe.SpamFlow.Group), S.default.closeModal()
                        }, n.reportSpamExitClear = function() {
                            (0, re.sendSpamExitClear)(n.props.chat, fe.SpamFlow.Block), S.default.closeModal()
                        }, n._handleDescriptionReadMore = function() {
                            n.setState({
                                descTruncated: !1
                            })
                        }, n._showEditRestrictionInfo = function() {
                            S.default.openModal(h.default.createElement(y.default, {
                                onOK: function() {
                                    return S.default.closeModal()
                                },
                                okText: q.default.t(1865)
                            }, q.default.t(1222)))
                        }, n.revokeGrpV4Invite = function(e) {
                            S.default.openModal(h.default.createElement(y.default, {
                                onOK: function() {
                                    S.default.closeModal(), n.props.groupMetadata.revokeGroupV4AddInvite([e.id.toString()]).then((function() {
                                        S.default.openToast(h.default.createElement(_e.default, {
                                            msg: q.default.t(1817),
                                            id: (0, _e.genId)()
                                        }))
                                    }))
                                },
                                okText: q.default.t(1924),
                                onCancel: function() {
                                    return S.default.closeModal()
                                },
                                cancelText: q.default.t(1694)
                            }, h.default.createElement(R.default, {
                                text: q.default.t(857, {
                                    participant: e.contact.formattedName
                                })
                            })))
                        }, n._renderPendingParticipantItem = function(e) {
                            var t = e.id,
                                a = n.props.groupMetadata.pendingParticipants.get(t);
                            if (!a) throw new B.UnknownDataError(e);
                            var l = a.contact;
                            return h.default.createElement(ee.default, {
                                contact: l,
                                participant: a,
                                key: a.id.toString(),
                                contextEnabled: function() {
                                    return !0
                                },
                                contextMenu: !0,
                                onContext: function(e) {
                                    return n._handlePendingParticipantMenu(e, l)
                                },
                                showNotifyName: !0,
                                isPendingParticipant: !0,
                                waitIdle: !0
                            })
                        }, n._handlePendingParticipantMenu = function(e, t) {
                            var a = n.props.groupMetadata.pendingParticipants.assertGet(t.id),
                                l = [h.default.createElement(w.default, {
                                    a8n: "mi-grp-promote-admin",
                                    key: "promote",
                                    action: n.revokeGrpV4Invite.bind((0, f.default)(n), a)
                                }, q.default.t(1354))];
                            e.event && e.event.persist(), n.setState({
                                contextMenu: {
                                    contactId: t.id,
                                    menu: l,
                                    anchor: e.anchor,
                                    event: e.event
                                }
                            })
                        };
                        var l = n.props,
                            i = l.groupMetadata,
                            o = i.desc,
                            r = i.participants,
                            c = i.pendingParticipants,
                            p = l.showFullGroupDescription;
                        return n.state = {
                            pendingDesc: !1,
                            pendingPhoto: !1,
                            contextMenu: null,
                            groupDraftSubject: null,
                            groupDesc: o,
                            descTruncated: !p && !!(o && o.length > 30),
                            participantListCollapsed: r.length > T.default.INFO_DRAWER_MAX_ROWS,
                            pendingParticipantListCollapsed: c.length > T.default.INFO_DRAWER_MAX_ROWS,
                            resetPhotoPicker: !1
                        }, n
                    }
                    return (0, c.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.groupMetadata;
                            V.default.supportsFeature(V.default.F.MD_BACKEND) && (0, be.queryAndUpdateGroupMetadataById)(t.id), V.default.supportsFeature(V.default.F.GROUPS_V_4_JOIN_PERMISSION) && t.queryGroupV4PendingInvite(), this.props.listeners.add(t.participants, "add remove reset sort change:isAdmin change:isSuperAdmin", (function() {
                                e.forceUpdate()
                            })), this.props.listeners.add(t.pendingParticipants, "add remove reset", (function() {
                                e.forceUpdate()
                            })), this.props.listeners.add(t, "change:desc", (function() {
                                e._updateGroupDescOnModelChange()
                            })), this.ensureParticipantsSorted(), V.default.supportsFeature(V.default.F.MD_BACKEND) && this.props.scrollToParticipantList && this._refContainer && (0, ye.scrollIntoViewIfNeeded)(this._refContainer, !1)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.ensureParticipantsSorted()
                        }
                    }, {
                        key: "ensureParticipantsSorted",
                        value: function() {
                            this.props.groupMetadata.participants.ensureSorted(), this.props.groupMetadata.pendingParticipants.ensureSorted()
                        }
                    }, {
                        key: "getData",
                        value: function() {
                            var e, t = [],
                                a = [],
                                n = this.props.groupMetadata.participants;
                            n.forEach((function(n) {
                                n.contact.isMe ? e = n : n.isAdmin ? t.push(n) : a.push(n)
                            }));
                            var l = [];
                            return e && l.push(e), l = l.concat(t, a), n.length > T.default.INFO_DRAWER_MAX_ROWS && this.state.participantListCollapsed && (l = l.slice(0, T.default.INFO_DRAWER_MAX_ROWS)), l.map((function(e) {
                                return {
                                    itemKey: e.id.toString(),
                                    id: e.id
                                }
                            }))
                        }
                    }, {
                        key: "_getPendingParticipantListData",
                        value: function() {
                            var e = this.props.groupMetadata.pendingParticipants.toArray(),
                                t = (0, r.default)(e);
                            return e.length > T.default.INFO_DRAWER_MAX_ROWS && this.state.pendingParticipantListCollapsed && (t = t.slice(0, T.default.INFO_DRAWER_MAX_ROWS)), t.map((function(e) {
                                return {
                                    itemKey: e.id.toString(),
                                    id: e.id
                                }
                            }))
                        }
                    }, {
                        key: "_getTitle",
                        value: function() {
                            return ue.default.productMediaAttachments ? q.default.t(1027) : q.default.t(1026)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a, n, l, i, o, r = this.props,
                                u = r.chat,
                                d = r.groupMetadata,
                                s = h.default.createElement(A.default, null, h.default.createElement(I.default, {
                                    a8nText: "li-delete-group",
                                    icon: h.default.createElement(ve.default, {
                                        name: "exit",
                                        directional: !0
                                    }),
                                    theme: "list-aligned",
                                    color: "danger",
                                    onClick: this._handleExitOrDeleteGroup
                                }, u.isReadOnly ? q.default.t(1734) : q.default.t(1739)));
                            if (u.isReadOnly || (e = h.default.createElement(A.default, null, h.default.createElement(I.default, {
                                    a8nText: "li-report-spam",
                                    theme: "list-aligned",
                                    color: "danger",
                                    icon: h.default.createElement(ve.default, {
                                        name: "thumbs-down",
                                        directional: !0
                                    }),
                                    onClick: this.handleReportSpam
                                }, q.default.t(1325)))), d.participants.canAdd() && !d.support) {
                                var c = h.default.createElement(oe.default, null, h.default.createElement(ve.default, {
                                    name: "add-user",
                                    directional: !0
                                }));
                                t = h.default.createElement(_.default, {
                                    image: c,
                                    theme: "drawer-list",
                                    primary: q.default.t(217),
                                    onClick: this._openAddGroupParticipantFlow
                                })
                            }
                            if (d.participants.iAmAdmin() && this.props.onGroupInviteLink && !d.support) {
                                var f = h.default.createElement(oe.default, null, h.default.createElement(ve.default, {
                                    name: "link"
                                }));
                                a = h.default.createElement(_.default, {
                                    image: f,
                                    theme: "drawer-list",
                                    primary: q.default.t(819),
                                    onClick: this.props.onGroupInviteLink
                                })
                            }
                            if (d.participants.length > T.default.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST && this.state.participantListCollapsed) {
                                var p = d.participants.length - T.default.INFO_DRAWER_MAX_ROWS,
                                    m = h.default.createElement(oe.default, {
                                        theme: "transparent"
                                    }, h.default.createElement(ve.default, {
                                        name: "down"
                                    }));
                                n = h.default.createElement(_.default, {
                                    image: m,
                                    theme: "drawer-list",
                                    primary: q.default.t(845, {
                                        count: p,
                                        _plural: p
                                    }),
                                    onClick: this.handleShowMore
                                })
                            }
                            if (d.pendingParticipants.length > T.default.INFO_DRAWER_MAX_ROWS && this.state.pendingParticipantListCollapsed && !V.default.supportsFeature(V.default.F.MD_BACKEND)) {
                                var g = d.pendingParticipants.length - T.default.INFO_DRAWER_MAX_ROWS,
                                    E = h.default.createElement(oe.default, {
                                        theme: "transparent"
                                    }, h.default.createElement(ve.default, {
                                        name: "down"
                                    }));
                                l = h.default.createElement(_.default, {
                                    image: E,
                                    theme: "drawer-list",
                                    primary: q.default.t(845, {
                                        count: g,
                                        _plural: g
                                    }),
                                    onClick: this._handleShowMorePendingParticipants
                                })
                            }
                            if (d.pendingParticipants.length > 0 && !V.default.supportsFeature(V.default.F.MD_BACKEND) && (i = h.default.createElement(B.default, {
                                    flatListController: this._pendingParticipantFlatListController,
                                    direction: "vertical",
                                    forceConsistentRenderCount: !1,
                                    data: this._getPendingParticipantListData(),
                                    renderItem: this._renderPendingParticipantItem
                                })), d.participants.iAmAdmin() && V.default.supportsFeature(V.default.F.GROUPS_V_3) && !d.support) {
                                var C = h.default.createElement(ve.default, {
                                    className: U.default.chevron,
                                    name: "chevron-right-alt",
                                    directional: !0
                                });
                                o = h.default.createElement(b.default, {
                                    onClick: this.props.onAdminSetting,
                                    side: C
                                }, h.default.createElement(ge.TextSpan, {
                                    theme: "title"
                                }, q.default.t(843)))
                            }
                            var S, y = h.default.createElement(ve.default, {
                                    name: "search",
                                    className: U.default.iconSearch
                                }),
                                w = d.participants.length ? h.default.createElement(A.default, {
                                    onRef: this._setRefContainer,
                                    a8nText: "section-participants",
                                    title: q.default.t(1867, {
                                        count: d.participants.length,
                                        _plural: d.participants.length
                                    }),
                                    titleOnClick: V.default.supportsFeature(V.default.F.GROUPS_V_3) ? this._openParticpantSearch : void 0,
                                    subtitle: V.default.supportsFeature(V.default.F.GROUPS_V_3) ? y : void 0
                                }, t, a, h.default.createElement(B.default, {
                                    flatListController: this._participantFlatListController,
                                    direction: "vertical",
                                    forceConsistentRenderCount: !1,
                                    data: this.getData(),
                                    renderItem: this.renderItem
                                }), n) : null;
                            d.participants.iAmAdmin() && d.pendingParticipants.length > 0 && (S = h.default.createElement(A.default, {
                                a8nText: "section-participants",
                                title: q.default.t(849, {
                                    number: d.pendingParticipants.length
                                })
                            }, i, l));
                            var O = null;
                            if (this.props.onMediaGallery) {
                                var R = this.props.onMediaGallery,
                                    x = h.default.createElement(ve.default, {
                                        className: U.default.chevron,
                                        name: "chevron-right-alt",
                                        directional: !0
                                    }),
                                    L = this._getTitle();
                                O = h.default.createElement(A.default, {
                                    a8nText: "section-media",
                                    title: L,
                                    titleOnClick: R,
                                    subtitle: x,
                                    theme: "padding"
                                }, h.default.createElement(Z.default, {
                                    chat: (0, me.unproxy)(u),
                                    mediaMsgs: u.getMediaMsgs()
                                }))
                            }
                            var F = this.props.contact.profilePicThumb,
                                G = ae.default.GROUP,
                                H = u.isReadOnly || !F.canDelete() && !F.canSet() || u.isSupportGroup(),
                                W = h.default.createElement("div", {
                                    className: U.default.avatar
                                }, h.default.createElement(te.default, {
                                    key: String(this.state.resetPhotoPicker),
                                    type: G,
                                    id: this.props.contact.id,
                                    attachToChat: !0,
                                    pending: this.state.pendingPhoto,
                                    startImage: this.props.profilePicThumb.imgFull,
                                    readOnly: H,
                                    onImageSet: this.handleImageSet
                                })),
                                X = null;
                            this.props.groupMetadata.creation && (X = h.default.createElement("div", {
                                "data-a8n": v.default.key("group-created-time"),
                                className: U.default.nameSecondary
                            }, h.default.createElement(ge.TextSpan, {
                                theme: "muted"
                            }, M.default.createdStr(this.props.groupMetadata.creation, this.props.chat.isSupportGroup()))));
                            var $ = null;
                            V.default.supportsFeature(V.default.F.LIVE_LOCATIONS) && ($ = h.default.createElement(z.default, {
                                chat: u,
                                onClick: this.props.onLiveLocation
                            }));
                            var ee = u && u.shouldShowEphemeralSetting() ? h.default.createElement(D.default, {
                                    onClick: this.props.onEphemeral,
                                    chat: u,
                                    groupMetadata: d
                                }) : null,
                                ne = null;
                            V.default.supportsFeature(V.default.F.MD_BACKEND) && (ne = h.default.createElement(Te.default, {
                                onClick: this.showEncryptionInfoPopup,
                                text: Pe.default.isGroupCallEnabled() ? q.default.t(1772) : q.default.t(1771)
                            })), this.props.chat.isSupportGroup() && (ne = h.default.createElement(he.default, {
                                onClick: this._showSecurityInfoPopup
                            }));
                            var le, ie = u.mute.canMute() ? h.default.createElement(J.default, {
                                    chat: u,
                                    mute: u.mute,
                                    settings: ce.default
                                }) : null,
                                re = null;
                            if (this.props.onStarred) {
                                var de = h.default.createElement(ve.default, {
                                    className: U.default.chevron,
                                    name: "chevron-right-alt",
                                    directional: !0
                                });
                                re = h.default.createElement(b.default, {
                                    side: de,
                                    onClick: this.props.onStarred
                                }, h.default.createElement(ge.TextSpan, {
                                    theme: "title"
                                }, q.default.t(524)))
                            }
                            this.state.contextMenu && (le = h.default.createElement(Ce.default, {
                                displayName: "ChatContextMenu",
                                escapable: !0,
                                popable: !0,
                                requestDismiss: this.closeContextMenu
                            }, h.default.createElement(Me.default, {
                                contextMenu: this.state.contextMenu
                            })));
                            var se, fe = null;
                            if ((ie || re || ne || ee) && (fe = h.default.createElement(A.default, null, ie, re, ee, ne, o)), V.default.supportsFeature(V.default.F.GROUPS_V_3) && ue.default.groupDescLength > 0) {
                                var pe = this.state.groupDesc || "",
                                    _e = {
                                        textLimit: this.state.descTruncated ? T.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH : 1 / 0,
                                        readMoreText: q.default.t(1308),
                                        onReadMore: this._handleDescriptionReadMore,
                                        formatters: this.props.chat.isTrusted() ? j.Configuration.TrustedGroupDesc({
                                            links: K.findLinks(pe)
                                        }) : j.Configuration.UntrustedGroupDesc()
                                    };
                                se = h.default.createElement(A.default, {
                                    theme: "group-desc-padding",
                                    title: q.default.t(808)
                                }, h.default.createElement("div", {
                                    className: U.default.description
                                }, h.default.createElement(Ee.default, {
                                    a8n: "group-info-drawer-description-title-input",
                                    value: pe,
                                    emptyValuePlaceholder: q.default.t(215),
                                    renderEmojiTextInLockMode: _e,
                                    editable: d.canSetDescription(),
                                    pending: this.state.pendingDesc,
                                    showRemaining: !0,
                                    maxLength: ue.default.groupDescLength,
                                    onChange: this._handleGroupDescChange,
                                    onSave: this._handleSetDescription,
                                    onCancel: this._handleCancelDesc,
                                    multiline: !0,
                                    editRestrictionInfo: d.restrict ? this._showEditRestrictionInfo : void 0,
                                    supportsEmoji: !0,
                                    lockable: !0,
                                    lowProfile: !0,
                                    customStyleThemes: [Ee.TextInputCustomStyleThemes.groupInfoName],
                                    theme: "small"
                                })))
                            }
                            return h.default.createElement(P.default, {
                                key: "contact-info-modal",
                                theme: "striped"
                            }, h.default.createElement(N.default, {
                                title: q.default.t(1770),
                                type: N.DRAWER_HEADER_TYPE.SMALL,
                                onCancel: this.handleClose
                            }), h.default.createElement(k.default, {
                                flatListControllers: [this._pendingParticipantFlatListController, this._participantFlatListController]
                            }, h.default.createElement("section", {
                                className: U.default.body
                            }, null, h.default.createElement(A.default, {
                                theme: "padding-large"
                            }, W, d.support ? h.default.createElement(ge.TextHeader, {
                                className: U.default.title,
                                level: "2",
                                theme: "large"
                            }, h.default.createElement(Q.GroupNameClass, {
                                chat: u,
                                groupMetadata: d
                            })) : h.default.createElement(Ne, {
                                subject: this.props.contact.name,
                                onSave: this._handleSetSubject,
                                textInputProps: {
                                    editable: d.canSetSubject(),
                                    editRestrictionInfo: d.restrict ? this._showEditRestrictionInfo : void 0
                                }
                            }), X, h.default.createElement(Y.default, {
                                labels: u.labels
                            })), se, $, O, fe, null, w, S, s, e)), le)
                        }
                    }]), a
                }(h.Component);

            function Ne(e) {
                var t = (0, h.useState)(null),
                    a = (0, o.default)(t, 2),
                    n = a[0],
                    l = a[1],
                    r = (0, h.useState)(!1),
                    s = (0, o.default)(r, 2),
                    c = s[0],
                    f = s[1],
                    p = (0, h.useRef)(!1),
                    m = function() {
                        var t = (0, d.default)(u.default.mark((function t() {
                            return u.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n && n !== e.subject) {
                                            t.next = 4;
                                            break
                                        }
                                        return p.current = !1, l(null), t.abrupt("return");
                                    case 4:
                                        return f(!0), t.prev = 5, t.next = 8, e.onSave(n);
                                    case 8:
                                        return t.prev = 8, p.current = !1, l(null), f(!1), t.finish(8);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [5, , 8, 13]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                return h.default.createElement(Ee.default, (0, i.default)({
                    a8n: "group-info-drawer-subject-input",
                    value: null != n ? n : e.subject,
                    pending: c,
                    showRemaining: !0,
                    validate: function(e) {
                        return !(!e || !e.trim())
                    },
                    maxLength: ue.default.maxSubject,
                    onBeginEdit: function() {
                        p.current = !0
                    },
                    onChange: function(e) {
                        p.current && l(e)
                    },
                    onSave: m,
                    onError: function() {
                        S.default.openModal(h.default.createElement(y.default, {
                            onOK: function() {
                                return S.default.closeModal()
                            },
                            okText: q.default.t(1865)
                        }, q.default.t(128)))
                    },
                    onCancel: function() {
                        p.current = !1, l(null)
                    },
                    supportsEmoji: !0,
                    lockable: !0,
                    lowProfile: !0,
                    theme: "large",
                    customStyleThemes: [Ee.TextInputCustomStyleThemes.groupInfoName]
                }, e.textInputProps))
            }
            Ie.CONCERNS = {
                chat: ["isReadOnly", "mute", "id", "pendingAction", "liveLocation", "labels"],
                groupMetadata: ["id", "desc", "participants", "pendingParticipants", "creation", "restrict", "announce", "support"],
                contact: ["name", "id", "profilePicThumb", "pendingAction"],
                profilePicThumb: ["imgFull"]
            }, Ie.displayName = "GroupInfoDrawer";
            var Ae = (0, W.default)((0, le.default)((0, X.default)((0, pe.default)(Ie, Ie.CONCERNS))));
            t.default = Ae
        },
        11514: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(81506)),
                u = l(a(2205)),
                d = l(a(99842)),
                s = n(a(67294)),
                c = l(a(26671)),
                f = l(a(34541)),
                p = l(a(84576)),
                m = l(a(33079)),
                h = a(71701),
                v = l(a(22021)),
                g = l(a(89115)),
                E = l(a(68390)),
                _ = l(a(35643)),
                C = l(a(4268)),
                M = l(a(88117)),
                S = l(a(12717)),
                y = function(e) {
                    (0, u.default)(a, e);
                    var t = (0, d.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l))).state = {
                            contextMenu: null
                        }, e.openChat = function(e) {
                            c.default.find(e).then((function(e) {
                                f.default.closeModal(), f.default.openChatFromUnread(e)
                            }))
                        }, e.contextMenu = function(e) {
                            return !S.default.equals((0, h.getMaybeMeUser)(), e)
                        }, e.handleParticipantMenu = function(t, a) {
                            var n = (0, _.default)(e.props.chat.groupMetadata, "_this.props.chat.groupMetadata").participants,
                                l = n.assertGet(a.id),
                                i = [];
                            if (n.canPromote(l)) {
                                var o = e.props.onParticipantPromote.bind(null, l, !1);
                                i.push(s.default.createElement(m.default, {
                                    a8n: "mi-grp-promote-admin",
                                    key: "promote",
                                    action: o
                                }, g.default.t(1034)))
                            }
                            if (n.canRemove(l)) {
                                var u = e.props.onParticipantRemove.bind(null, l, !1);
                                i.push(s.default.createElement(m.default, {
                                    a8n: "mi-grp-remove-participant",
                                    key: "remove",
                                    action: u
                                }, g.default.t(1039)))
                            }
                            if (v.default.supportsFeature(v.default.F.GROUPS_V_3) && n.canDemote(l)) {
                                var d = e.props.onDemoteAdmin.bind((0, r.default)(e), l);
                                i.push(s.default.createElement(m.default, {
                                    a8n: "mi-grp-verify-identify",
                                    key: "demote-admin",
                                    action: d
                                }, g.default.t(638)))
                            }
                            S.default.equals((0, h.getMaybeMeUser)(), l.id) || i.push(s.default.createElement(m.default, {
                                key: "message author",
                                action: e.openChat.bind(null, l.contact.id)
                            }, g.default.t(1050, {
                                author: l.contact.formattedName
                            }))), t.anchor || t.event || t.persist(), e.setState({
                                contextMenu: {
                                    contactId: a.id,
                                    menu: i,
                                    anchor: t.anchor,
                                    event: t.anchor ? void 0 : t
                                }
                            })
                        }, e.closeContextMenu = function() {
                            e.setState({
                                contextMenu: null
                            })
                        }, e.contextEnabled = function() {
                            return !1
                        }, e.cancel = function() {
                            f.default.closeModal()
                        }, e.isAdmin = function(t) {
                            return (0, _.default)(e.props.chat.groupMetadata, "_this.props.chat.groupMetadata").participants.assertGet(t).isAdmin
                        }, e.contactFilter = function(t) {
                            var a = e.props.chat.groupMetadata;
                            return !(null == a || !a.participants.get(t.id))
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e, t = this,
                                a = null === (e = this.props.chat.groupMetadata) || void 0 === e ? void 0 : e.participants;
                            null != a && this.props.listeners.add(a, "add remove reset", (function() {
                                t.forceUpdate()
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e;
                            return this.state.contextMenu && (e = s.default.createElement(C.default, {
                                displayName: "ChatContextMenu",
                                escapable: !0,
                                popable: !0,
                                requestDismiss: this.closeContextMenu
                            }, s.default.createElement(M.default, {
                                contextMenu: this.state.contextMenu
                            }))), s.default.createElement(s.default.Fragment, null, s.default.createElement(p.default, {
                                title: g.default.t(1371),
                                filter: this.contactFilter,
                                onCancel: this.cancel,
                                openContextOnClick: !0,
                                contextEnabled: this.contextEnabled,
                                contextMenu: this.contextMenu,
                                onContext: this.handleParticipantMenu,
                                showNotifyName: !0,
                                listenForAdminChange: !0,
                                participantCollection: (0, _.default)(this.props.chat.groupMetadata, "this.props.chat.groupMetadata").participants
                            }), e)
                        }
                    }]), a
                }(s.Component);
            y.displayName = "GroupParticipantSearch";
            var T = (0, E.default)(y);
            t.default = T
        },
        92511: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                d = l(a(96486)),
                s = n(a(67294)),
                c = a(90695),
                f = l(a(34541)),
                p = l(a(34263)),
                m = l(a(81997)),
                h = l(a(82745)),
                v = l(a(25259)),
                g = n(a(62647)),
                E = l(a(51376)),
                _ = a(71701),
                C = l(a(22021)),
                M = l(a(64287)),
                S = l(a(24007)),
                y = l(a(17957)),
                T = l(a(89115)),
                P = l(a(68390)),
                b = a(11367),
                k = n(a(66132)),
                I = l(a(63056)),
                N = l(a(44589)),
                A = a(28770),
                w = l(a(12717)),
                O = function(e) {
                    var t = e.isRestricted,
                        a = e.onClick;
                    return s.default.createElement(h.default, {
                        onClick: a,
                        multiline: !0
                    }, s.default.createElement("div", {
                        className: M.default.header
                    }, s.default.createElement(A.TextSpan, {
                        theme: "title"
                    }, T.default.t(835))), s.default.createElement(A.TextDiv, {
                        theme: "muted"
                    }, t ? T.default.t(841) : T.default.t(834)))
                },
                R = function(e) {
                    var t = e.isAnnouncement,
                        a = e.onClick;
                    return s.default.createElement(h.default, {
                        onClick: a,
                        multiline: !0
                    }, s.default.createElement("div", {
                        className: M.default.header
                    }, s.default.createElement(A.TextSpan, {
                        theme: "title"
                    }, T.default.t(842))), s.default.createElement(A.TextDiv, {
                        theme: "muted"
                    }, t ? T.default.t(841) : T.default.t(834)))
                },
                x = function(e) {
                    var t = e.isNoFrequentlyForwarded,
                        a = e.onClick,
                        n = I.default.hfmStringChanges ? T.default.t(839) : T.default.t(838);
                    return s.default.createElement(h.default, {
                        onClick: a,
                        multiline: !0
                    }, s.default.createElement("div", {
                        className: M.default.header
                    }, s.default.createElement(A.TextSpan, {
                        theme: "title"
                    }, n)), s.default.createElement(A.TextDiv, {
                        theme: "muted"
                    }, t ? T.default.t(840) : T.default.t(837)))
                },
                D = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l)))._openSettingModal = function(t) {
                            var a = e.props,
                                n = a.chat,
                                l = a.groupMetadata;
                            f.default.openModal(s.default.createElement(S.default, {
                                settingType: t,
                                chat: n,
                                groupMetadata: l
                            }), {
                                transition: "modal",
                                uim: e.props.uim
                            })
                        }, e._openAnnouncementSettingModal = function() {
                            e._openSettingModal(p.default.GROUP_SETTING_TYPE.ANNOUNCEMENT)
                        }, e._openRestrictedSettingModal = function() {
                            e._openSettingModal(p.default.GROUP_SETTING_TYPE.RESTRICT)
                        }, e._openNoFrequentlyForwardedSettingModal = function() {
                            e._openSettingModal(p.default.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED)
                        }, e._getCurrentAdmins = function() {
                            return e.props.groupMetadata.participants.filter((function(e) {
                                return e.isAdmin
                            })).map((function(e) {
                                return e.contact
                            }))
                        }, e._filterParticipants = function(t) {
                            return !!e.props.groupMetadata.participants.get(t.id)
                        }, e.isDisabled = function(t) {
                            var a = e.props.groupMetadata;
                            return w.default.equals(t, a.owner) || (0, _.getMaybeMeUser)().equals(t)
                        }, e._openManageAdminModal = function() {
                            f.default.openModal(s.default.createElement(k.default, {
                                onConfirm: e._updateAdmins,
                                getInitialItems: e._getCurrentAdmins,
                                isDisabled: e.isDisabled,
                                isSelected: e.isDisabled,
                                filter: e._filterParticipants,
                                title: T.default.t(994),
                                useShortName: !0,
                                useAllContacts: !0,
                                listType: k.ListType.PARTICIPANT_MANAGE_MODAL,
                                singleSelectionFooterType: c.FooterType.CONFIRM,
                                multipleSelectionFooterType: c.FooterType.CONFIRM
                            }))
                        }, e._updateAdmins = function(t) {
                            var a = e.props,
                                n = a.chat,
                                l = a.groupMetadata.participants,
                                i = l.filter((function(e) {
                                    return e.isAdmin
                                })),
                                o = d.default.differenceWith(t, i, (function(e, t) {
                                    return e.id.equals(t.id)
                                })).map((function(e) {
                                    return l.assertGet(e.id)
                                })),
                                r = d.default.differenceWith(i, t, (function(e, t) {
                                    return e.id.equals(t.id)
                                }));
                            o.length > 0 && (o.forEach((function(e) {
                                e.contact.pendingAction++
                            })), (0, b.promoteParticipants)(n, o).finally((function() {
                                o.forEach((function(e) {
                                    e.contact.pendingAction--
                                }))
                            }))), r.length > 0 && (r.forEach((function(e) {
                                e.contact.pendingAction++
                            })), (0, b.demoteParticipants)(n, r).finally((function() {
                                r.forEach((function(e) {
                                    e.contact.pendingAction--
                                }))
                            }))), f.default.closeModal()
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.groupMetadata;
                            return s.default.createElement(m.default, {
                                theme: "striped"
                            }, s.default.createElement(g.default, {
                                title: T.default.t(843),
                                type: g.DRAWER_HEADER_TYPE.SMALL,
                                onBack: this.props.onClose
                            }), s.default.createElement(v.default, null, s.default.createElement(E.default, {
                                animation: !1
                            }, s.default.createElement(O, {
                                onClick: this._openRestrictedSettingModal,
                                isRestricted: e.restrict
                            })), C.default.isEphemeralAllowGroupMembersEnabled() ? s.default.createElement("div", {
                                className: M.default.restrictText
                            }, s.default.createElement(A.TextSpan, {
                                theme: "muted"
                            }, T.default.t(656))) : null, s.default.createElement(E.default, {
                                animation: !1
                            }, s.default.createElement(R, {
                                onClick: this._openAnnouncementSettingModal,
                                isAnnouncement: e.announce
                            }), I.default.frequentlyForwardedGroupSetting && C.default.supportsFeature(C.default.F.FREQUENTLY_FORWARDED_SETTING) ? s.default.createElement(x, {
                                onClick: this._openNoFrequentlyForwardedSettingModal,
                                isNoFrequentlyForwarded: e.noFrequentlyForwarded
                            }) : null), s.default.createElement(E.default, {
                                animation: !1
                            }, s.default.createElement(h.default, {
                                onClick: this._openManageAdminModal,
                                multiline: !0
                            }, s.default.createElement("div", {
                                className: M.default.header
                            }, s.default.createElement(A.TextSpan, {
                                theme: "title"
                            }, T.default.t(994)))))))
                        }
                    }]), a
                }(s.Component);
            D.CONCERNS = {
                chat: ["id"],
                groupMetadata: ["restrict", "announce", "noFrequentlyForwarded", "participants", "owner"]
            }, D.displayName = "GroupAdminSetting";
            var L = (0, y.default)((0, P.default)((0, N.default)(D, D.CONCERNS)));
            t.default = L
        },
        24007: (e, t, a) => {
            "use strict";
            var n = a(95318),
                l = a(20862);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.settingType,
                    a = (0, f.default)(e.chat, ["id"]),
                    n = (0, f.default)(e.groupMetadata, ["restrict", "announce", "noFrequentlyForwarded"]),
                    l = (0, i.useMemo)((function() {
                        switch (t) {
                            case o.default.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                            case o.default.GROUP_SETTING_TYPE.RESTRICT:
                                return [{
                                    label: u.default.t(834),
                                    value: 0
                                }, {
                                    label: u.default.t(841),
                                    value: 1
                                }];
                            case o.default.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                return [{
                                    label: u.default.t(837),
                                    value: 0
                                }, {
                                    label: u.default.t(840),
                                    value: 1
                                }];
                            default:
                                return []
                        }
                    }), [t]),
                    p = (0, i.useMemo)((function() {
                        var e = n.restrict,
                            a = n.announce,
                            l = n.noFrequentlyForwarded;
                        switch (t) {
                            case o.default.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                                return a ? 1 : 0;
                            case o.default.GROUP_SETTING_TYPE.RESTRICT:
                                return e ? 1 : 0;
                            case o.default.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                return l ? 1 : 0;
                            default:
                                return 0
                        }
                    }), [t, n]),
                    m = (0, i.useMemo)((function() {
                        switch (t) {
                            case o.default.GROUP_SETTING_TYPE.ANNOUNCEMENT:
                                return u.default.t(842);
                            case o.default.GROUP_SETTING_TYPE.RESTRICT:
                                return u.default.t(835);
                            case o.default.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                                return d.default.hfmStringChanges ? u.default.t(839) : u.default.t(838);
                            default:
                                return ""
                        }
                    }), [t]),
                    h = (0, i.useMemo)((function() {
                        return t === o.default.GROUP_SETTING_TYPE.RESTRICT && r.default.isEphemeralAllowGroupMembersEnabled() ? u.default.t(656) : null
                    }), [t]);
                return i.default.createElement(c.default, {
                    options: l,
                    initialValue: p,
                    title: m,
                    onSelect: function(e) {
                        e !== p && (0, s.setGroupProperty)(a, t, e).catch((function() {
                            return function() {}
                        }))
                    },
                    explanation: h
                })
            };
            var i = l(a(67294)),
                o = n(a(34263)),
                r = n(a(22021)),
                u = n(a(89115)),
                d = n(a(63056)),
                s = a(98209),
                c = n(a(85099)),
                f = n(a(33819))
        },
        13782: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                d = n(a(67294)),
                s = l(a(51376)),
                c = l(a(89115)),
                f = l(a(68390)),
                p = l(a(90481)),
                m = a(28365),
                h = l(a(66863)),
                v = l(a(44589)),
                g = a(89305),
                E = l(a(75131)),
                _ = a(28770),
                C = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a(e) {
                        var n;
                        return (0, i.default)(this, a), (n = t.call(this, e))._updateParticipants = function() {
                            n.setState({
                                participants: n.getParticipants(n.props.chat)
                            })
                        }, n.state = {
                            participants: n.getParticipants(e.chat)
                        }, n
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.chat;
                            t.liveLocationQueried || p.default.getActive(t.id.toString()).then((function() {
                                t.liveLocationQueried = !0
                            })).catch((function() {})), this.props.listeners.add((0, g.unproxy)(t), "change:liveLocation", (function() {
                                var a = t.liveLocation;
                                a && (e._removeParticipantListener(a), e._addParticipantListener(a), e._updateParticipants())
                            }));
                            var a = t.liveLocation;
                            a && this._addParticipantListener(a)
                        }
                    }, {
                        key: "_addParticipantListener",
                        value: function(e) {
                            this.props.listeners.add(e.participants, "add remove", this._updateParticipants)
                        }
                    }, {
                        key: "_removeParticipantListener",
                        value: function(e) {
                            this.props.listeners.remove(e.participants, "add remove", this._updateParticipants)
                        }
                    }, {
                        key: "getParticipants",
                        value: function(e) {
                            var t = e.liveLocation;
                            return t ? t.participants.toArray() : []
                        }
                    }, {
                        key: "getText",
                        value: function() {
                            var e, t, a = this.props.chat,
                                n = this.state.participants,
                                l = 0;
                            if (n.forEach((function(a) {
                                    a.isMe ? e = !0 : (t || (t = a.contact), l++)
                                })), a.isGroup) return e ? 1 === n.length ? c.default.t(966) : c.default.t(965, {
                                count: l,
                                _plural: l
                            }) : c.default.t(962, {
                                count: l,
                                _plural: l
                            });
                            if (e) {
                                if (1 === n.length) return c.default.t(966);
                                if (t) return c.default.t(964, {
                                    name: t.formattedShortNameWithNonBreakingSpaces
                                })
                            } else if (t) return c.default.t(961, {
                                name: t.formattedShortNameWithNonBreakingSpaces
                            });
                            return ""
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.onClick;
                            if (!this.state.participants.length) return null;
                            var t = d.default.createElement(E.default, {
                                name: (0, m.liveLocationIcon)(!0)
                            });
                            return d.default.createElement(s.default, {
                                a8nText: "section-live-location",
                                theme: "padding",
                                title: c.default.t(969),
                                titleOnClick: e
                            }, d.default.createElement(h.default, {
                                side: t,
                                onClick: e
                            }, d.default.createElement(_.TextSpan, {
                                theme: "title"
                            }, this.getText())))
                        }
                    }]), a
                }(d.Component);
            C.CONCERNS = {
                chat: ["id", "isGroup", "liveLocation", "liveLocationQueried"]
            }, C.displayName = "LiveLocationRow";
            var M = (0, f.default)((0, v.default)(C, C.CONCERNS));
            t.default = M
        },
        48310: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.TABS = void 0;
            var i = l(a(59713)),
                o = l(a(34575)),
                r = l(a(93913)),
                u = l(a(2205)),
                d = l(a(99842)),
                s = l(a(94184)),
                c = l(a(96486)),
                f = n(a(67294)),
                p = a(83180),
                m = l(a(45463)),
                h = l(a(81997)),
                v = l(a(25259)),
                g = n(a(62647)),
                E = l(a(89115)),
                _ = l(a(63744)),
                C = l(a(68708)),
                M = l(a(65636)),
                S = l(a(99356)),
                y = l(a(11832)),
                T = l(a(15939)),
                P = l(a(63056)),
                b = l(a(4268)),
                k = l(a(38512)),
                I = {
                    MEDIA: "media",
                    DOCS: "docs",
                    LINKS: "links",
                    PRODUCTS: "products"
                };
            t.TABS = I;
            var N = function(e) {
                (0, u.default)(a, e);
                var t = (0, d.default)(a);

                function a() {
                    var e;
                    return (0, o.default)(this, a), (e = t.apply(this, arguments)).state = {
                        selected: e.props.initialTab,
                        direction: null,
                        selectable: !1
                    }, e.handleSelectMessages = function() {
                        e.state.selectable || e.setState({
                            selectable: !0
                        })
                    }, e.handleCancelSelection = function() {
                        e.state.selectable && (e.selectedMessages.unsetAll(), e.setState({
                            selectable: !1
                        }))
                    }, e.handleMessageSelect = function(t, a) {
                        e.handleSelectMessages(), e.selectedMessages.setVal(t, a), 0 === e.selectedMessages.getSelected().length && e.handleCancelSelection()
                    }, e.selectedMessages = new y.default([], (function(e) {
                        return e.id.toString()
                    })), e
                }
                return (0, r.default)(a, [{
                    key: "_handleSelectTab",
                    value: function(e) {
                        var t = c.default.values(I).indexOf(this.state.selected),
                            a = c.default.values(I).indexOf(e);
                        t !== a && this.selectedMessages.unsetAll();
                        var n = a > t ? "right" : "left";
                        this.setState({
                            selected: e,
                            direction: n,
                            selectable: !1
                        })
                    }
                }, {
                    key: "_getTabs",
                    value: function() {
                        var e = this,
                            t = [{
                                tab: I.MEDIA,
                                title: E.default.t(1e3)
                            }, {
                                tab: I.DOCS,
                                title: E.default.t(639)
                            }, {
                                tab: I.LINKS,
                                title: E.default.t(940)
                            }];
                        P.default.productMediaAttachments && t.push({
                            tab: I.PRODUCTS,
                            title: E.default.t(1300)
                        });
                        var a = t.map((function(t) {
                                var a = (0, s.default)(M.default.menuItem, (0, i.default)({}, M.default.active, e.state.selected === t.tab));
                                return f.default.createElement("button", {
                                    className: a,
                                    onClick: e._handleSelectTab.bind(e, t.tab),
                                    key: t.tab,
                                    title: t.title
                                }, t.title)
                            })),
                            n = (0, s.default)(M.default.menuTabsLists, P.default.productMediaAttachments ? M.default.fourTabs : M.default.threeTabs);
                        return f.default.createElement("div", {
                            className: n,
                            "data-active-tab": this.state.selected
                        }, a)
                    }
                }, {
                    key: "_getContent",
                    value: function() {
                        var e, t = this.props.chat;
                        switch (this.state.selected) {
                            case I.MEDIA:
                                e = f.default.createElement(C.default, {
                                    chat: t,
                                    mediaMsgs: t.getMediaMsgs(),
                                    selectable: this.state.selectable,
                                    onMessageSelect: this.handleMessageSelect,
                                    selectedMessages: this.selectedMessages,
                                    fullCollection: !0
                                });
                                break;
                            case I.LINKS:
                                e = f.default.createElement(_.default, {
                                    chat: t,
                                    linkMsgs: t.getLinkMsgs(),
                                    selectable: this.state.selectable,
                                    onMessageSelect: this.handleMessageSelect,
                                    selectedMessages: this.selectedMessages
                                });
                                break;
                            case I.DOCS:
                                e = f.default.createElement(m.default, {
                                    chat: t,
                                    docMsgs: t.getDocMsgs(),
                                    selectable: this.state.selectable,
                                    onMessageSelect: this.handleMessageSelect,
                                    selectedMessages: this.selectedMessages
                                });
                                break;
                            case I.PRODUCTS:
                                e = f.default.createElement(T.default, {
                                    chat: t,
                                    productMsgs: t.getProductMsgs(),
                                    selectable: this.state.selectable,
                                    onMessageSelect: this.handleMessageSelect,
                                    selectedMessages: this.selectedMessages,
                                    onProductDetail: this.props.onProductDetail,
                                    setScrollOffset: this.props.setProductsScrollOffset,
                                    scrollOffset: this.props.productsScrollOffset
                                })
                        }
                        return e
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.chat,
                            t = this._getTabs(),
                            a = this._getContent(),
                            n = [I.MEDIA, I.DOCS].includes(this.state.selected),
                            l = this.state.selectable ? f.default.createElement(b.default, {
                                displayName: "MediaMultiSelect",
                                escapable: !0,
                                requestDismiss: this.handleCancelSelection
                            }, f.default.createElement(S.default, {
                                chat: e,
                                noSortOnForward: !0,
                                theme: "mediaGallery",
                                toastPosition: p.ToastPosition.RIGHT,
                                downloadButton: n,
                                selectedMessages: this.selectedMessages,
                                onCancel: this.handleCancelSelection
                            })) : null,
                            i = "right" === this.state.direction ? "slide-forward" : "slide-back";
                        return f.default.createElement(h.default, {
                            theme: "gallery"
                        }, f.default.createElement(g.default, {
                            title: " ",
                            onBack: this.props.onBack,
                            type: g.DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY
                        }), l, t, f.default.createElement(v.default, {
                            "data-list-scroll-container": !0
                        }, f.default.createElement(k.default, {
                            transitionName: i,
                            className: M.default.column
                        }, f.default.createElement("div", {
                            className: M.default.multimediaGallery,
                            key: this.state.selected
                        }, f.default.createElement("div", {
                            className: M.default.column
                        }, a)))))
                    }
                }]), a
            }(f.Component);
            t.default = N, N.defaultProps = {
                initialTab: I.MEDIA,
                productsScrollOffset: 0
            }, N.displayName = "MediaGalleryDrawer"
        },
        35713: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, s.default)(e.mediaData, ["mediaStage", "renderableUrl"]);
                return i.default.createElement(d.default, {
                    mediaData: t,
                    placeholderRenderer: p
                }, (function(e) {
                    return i.default.createElement(f, {
                        url: e
                    })
                }))
            };
            var l = n(a(94184)),
                i = n(a(67294)),
                o = n(a(14594)),
                r = n(a(89115)),
                u = n(a(79741)),
                d = n(a(93482)),
                s = n(a(33819)),
                c = function(e) {
                    e.stopPropagation()
                };

            function f(e) {
                var t = e.url;
                return i.default.createElement(o.default, {
                    url: t,
                    className: u.default.mediaViewerAudio,
                    onClick: c,
                    autoPlay: !0,
                    controls: !0
                }, r.default.t(250))
            }

            function p() {
                return i.default.createElement("div", {
                    className: (0, l.default)(u.default.imageAudio, u.default.mediaViewerPlaceholder),
                    onClick: c
                })
            }
        },
        68151: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                d = n(a(67294)),
                s = l(a(10598)),
                c = l(a(79140)),
                f = l(a(34541)),
                p = l(a(42575)),
                m = n(a(75300)),
                h = l(a(33079)),
                v = l(a(41769)),
                g = l(a(89115)),
                E = l(a(68390)),
                _ = l(a(77375)),
                C = a(87261),
                M = a(53418),
                S = l(a(89769)),
                y = a(82565),
                T = a(97849),
                P = l(a(44589)),
                b = a(89305),
                k = l(a(75131)),
                I = l(a(6476)),
                N = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l)))._refCloseBtn = (0, d.createRef)(), e._getMenuBtns = function() {
                            return e.props.msg.isViewOnce ? e._getViewOnceMediaMenuBtns() : e.props.msgIndexInAlbum >= 0 ? e._getAlbumMediaMenuBtns() : e._getNonAlbumMediaMenuBtns()
                        }, e._getViewOnceMediaMenuBtns = function() {
                            return [d.default.createElement(M.MenuBarItem, {
                                key: "btnViewOnceInfo",
                                icon: d.default.createElement(k.default, {
                                    name: "view-once",
                                    className: _.default.voIcon
                                }),
                                title: g.default.t(36),
                                onClick: e.props.onViewOnceInfoClick
                            }), e._getDropdownMenuBarItem()]
                        }, e._getNonAlbumMediaMenuBtns = function() {
                            var t = e.props.msg;
                            return [d.default.createElement(M.MenuBarItem, {
                                key: "btnGoToMsg",
                                icon: d.default.createElement(k.default, {
                                    name: "bubble"
                                }),
                                title: g.default.t(801),
                                onClick: e.props.onGoToMsgClick
                            }), t.canStar() ? e._getStarMenuBarItem() : null, t.canForward() ? e._getForwardMenuBarItem() : null, d.default.createElement(M.MenuBarItem, {
                                key: "btnDownload",
                                icon: d.default.createElement(k.default, {
                                    name: "download"
                                }),
                                title: g.default.t(1690),
                                disabled: !e._isMediaDownloadable(),
                                onClick: e.props.onDownloadClick
                            })].filter(Boolean)
                        }, e._getAlbumMediaMenuBtns = function() {
                            var t = e.props.msg;
                            return [t.canReply() ? d.default.createElement(M.MenuBarItem, {
                                key: "btnReply",
                                icon: d.default.createElement(k.default, {
                                    name: "reply"
                                }),
                                title: g.default.t(1315),
                                onClick: e.props.onReplyClick
                            }) : null, t.canStar() ? e._getStarMenuBarItem() : null, d.default.createElement(M.MenuBarItem, {
                                key: "btnDelete",
                                icon: d.default.createElement(k.default, {
                                    name: "delete"
                                }),
                                title: g.default.t(1733),
                                onClick: e.props.onDeleteClick
                            }), t.canForward() ? e._getForwardMenuBarItem() : null, e._getDropdownMenuBarItem()].filter(Boolean)
                        }, e._getStarMenuBarItem = function() {
                            var t, a, n;
                            return e.props.msg.star ? (t = e.props.onUnstarClick, a = "unstar-btn", n = g.default.t(1512)) : (t = e.props.onStarClick, a = "star-btn", n = g.default.t(1432)), d.default.createElement(M.MenuBarItem, {
                                key: a,
                                icon: d.default.createElement(k.default, {
                                    name: a
                                }),
                                title: n,
                                onClick: t
                            })
                        }, e._getForwardMenuBarItem = function() {
                            return d.default.createElement(M.MenuBarItem, {
                                key: "btnForward",
                                icon: d.default.createElement(k.default, {
                                    name: "forward"
                                }),
                                title: g.default.t(761),
                                onClick: e.props.openForwardFlow
                            })
                        }, e.handlePrivateReplyMessage = function() {
                            var t = (0, b.unproxy)(e.props.msg);
                            (0, S.default)(t)
                        }, e._getDropdownMenuBarItem = function() {
                            var t = e.props.msg,
                                a = [];
                            return (t.canPrivateReply() || t.canPrivateReplyInRestrictedGrp()) && a.push(d.default.createElement(h.default, {
                                key: "private_reply",
                                a8n: "mi-msg-reply",
                                action: e.handlePrivateReplyMessage
                            }, g.default.t(1264))), t.isViewOnce ? a.push(d.default.createElement(h.default, {
                                key: "dropdownMsgInfo",
                                action: e._handleDropdownViewOnceReportSpam
                            }, e._getViewOnceReportTitle())) : (t.isSentByMe && a.push(d.default.createElement(h.default, {
                                key: "dropdownMsgInfo",
                                action: e.props.onMsgInfoClick
                            }, g.default.t(1054))), a.push(d.default.createElement(h.default, {
                                key: "dropdownGoToMsg",
                                action: e.props.onGoToMsgClick
                            }, g.default.t(801)), d.default.createElement(h.default, {
                                key: "dropdownDownload",
                                action: e.props.onDownloadClick,
                                disabled: !e._isMediaDownloadable()
                            }, g.default.t(1690)))), d.default.createElement(M.MenuBarItem, {
                                key: "btnMenu",
                                icon: d.default.createElement(k.default, {
                                    name: "menu"
                                }),
                                title: g.default.t(1046)
                            }, d.default.createElement(m.default, {
                                type: "dropdown_menu",
                                key: "MediaPanelHeaderDropdown",
                                flipOnRTL: !0,
                                dirX: m.DirX.LEFT
                            }, a))
                        }, e._isMediaDownloadable = function() {
                            var t = e.props,
                                a = t.mediaData;
                            return !t.msg.isViewOnce && (!!a.renderableUrl || a.mediaStage === C.MEDIA_DATA_STAGE.RESOLVED)
                        }, e._handleDropdownViewOnceReportSpam = function() {
                            f.default.openModal(d.default.createElement(I.default, {
                                isBusiness: e.props.msg.senderObj.isBusiness,
                                isGroup: e.props.msg.chat.isGroup,
                                onReport: e._handleReport,
                                onCancel: function() {
                                    return f.default.closeModal()
                                },
                                title: e._getViewOnceReportTitle()
                            }))
                        }, e._handleReport = function(t) {
                            var a = e.props.msg.chat;
                            a && (t ? a.isGroup ? (0, y.sendSpamExitClear)(a, T.SpamFlow.MediaViewer) : (0, y.sendSpamBlockClear)(a, T.SpamFlow.MediaViewer) : (0, y.sendSpamReport)(a, T.SpamFlow.MediaViewer)), f.default.closeModal()
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "_getViewOnceReportTitle",
                        value: function() {
                            var e = this.props.msg;
                            return e.chat.isGroup ? g.default.t(1325) : g.default.t(1324, {
                                contactInfo: e.senderObj.displayName
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            null != this._refCloseBtn.current && this.props.listeners.add(this._refCloseBtn.current, "animationend", (function() {
                                e.props.onHightlightCloseEnd()
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.msg,
                                t = e.displayName(!0, !0);
                            e.isGroupMsg && (t += " @ " + e.chat.title());
                            return "x", d.default.createElement("div", {
                                className: _.default.mediaPanelHeader
                            }, d.default.createElement("div", {
                                className: _.default.info
                            }, d.default.createElement(s.default, {
                                idle: !0,
                                image: d.default.createElement(p.default, {
                                    id: e.sender,
                                    size: 40
                                }),
                                primary: d.default.createElement(v.default, {
                                    ellipsify: !0,
                                    text: t
                                }),
                                secondary: c.default.relativeDateAndTimeStr(e.t),
                                theme: "media"
                            })), d.default.createElement("div", {
                                className: _.default.mediaPanelTools
                            }, d.default.createElement(M.MenuBar, {
                                key: "media-panel-header",
                                theme: "strong"
                            }, this._getMenuBtns(), d.default.createElement(M.MenuBarItem, {
                                a8nText: "btn-close",
                                icon: d.default.createElement(k.default, {
                                    className: this.props.isHighlightClose ? _.default.highlightClose : null,
                                    containerRef: this._refCloseBtn,
                                    name: "x"
                                }),
                                title: g.default.t(1705),
                                onClick: this.props.onClose
                            }))))
                        }
                    }]), a
                }(d.PureComponent);
            N.CONCERNS = {
                msg: ["star", "isGroupMsg", "chat", "type", "isGif", "isViewOnce", "sender", "senderObj", "t", "isSentByMe"],
                mediaData: ["filehash", "mediaStage", "renderableUrl"]
            }, N.displayName = "MediaPanelHeader";
            var A = (0, E.default)((0, P.default)(N, N.CONCERNS));
            t.default = A
        },
        1580: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                d = n(a(67294)),
                s = l(a(12940)),
                c = l(a(75020)),
                f = a(9438),
                p = a(95037),
                m = l(a(89115)),
                h = l(a(89805)),
                v = a(87261),
                g = l(a(8643)),
                E = l(a(64882)),
                _ = l(a(69052)),
                C = l(a(44589)),
                M = l(a(56059)),
                S = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a() {
                        var e;
                        (0, i.default)(this, a);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(l))).state = {
                            played: !1,
                            size: {
                                width: 0,
                                height: 0
                            },
                            isFullscreenMode: !1
                        }, e._setRefContainer = function(t) {
                            e.refContainer = t
                        }, e.stopPropagation = function(e) {
                            e.stopPropagation()
                        }, e._handleFullscreenToggle = function(t) {
                            e.setState({
                                isFullscreenMode: t
                            })
                        }, e
                    }
                    return (0, o.default)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.mediaData.isStreamable() || this.props.msg.downloadMedia({
                                downloadEvenIfExpensive: !0,
                                rmrReason: g.default.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                                isUserInitiated: !0
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.msg.mediaObject && this.props.msg.cancelDownload()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.msg,
                                n = t.mediaData,
                                l = n.isGif,
                                i = n.mediaStage === v.MEDIA_DATA_STAGE.RESOLVED || n.streamable && n.isStreamable();
                            if (i = i || a.isForcingRMR()) {
                                var o, r, u = m.default.t(1559);
                                return !this.state.isFullscreenMode && a && a.interactiveAnnotations && a.interactiveAnnotations.length > 0 && (o = d.default.createElement(s.default, {
                                    annotations: a.interactiveAnnotations
                                })), r = l ? d.default.createElement("div", {
                                    className: h.default.mediaViewerImg,
                                    ref: this._setRefContainer
                                }, d.default.createElement(M.default, {
                                    src: n.renderableUrl,
                                    onClick: this.stopPropagation,
                                    autoPlay: !0,
                                    loop: !0
                                }, u), o) : d.default.createElement("div", {
                                    ref: this._setRefContainer,
                                    className: h.default.mediaViewerImg,
                                    onClick: this.stopPropagation
                                }, d.default.createElement(E.default, {
                                    msg: a,
                                    mediaData: n,
                                    startTime: this.props.startTime,
                                    onClose: this.props.onClose,
                                    onError: function() {},
                                    onFullscreenToggle: this._handleFullscreenToggle,
                                    autoPlay: this.props.autoPlay,
                                    type: f.PLAYER_TYPE.MEDIA_VIEWER,
                                    overlays: o,
                                    noPip: a.isViewOnce
                                })), d.default.createElement(_.default, {
                                    type: "scaleDown",
                                    position: "relative",
                                    objectPosition: "relative",
                                    size: this.state.size,
                                    onObjectLoad: this.props.onLoad
                                }, r)
                            }
                            return d.default.createElement(_.default, {
                                type: "scaleDown",
                                position: "relative",
                                objectPosition: "relative",
                                size: {
                                    width: this.props.mediaData.fullWidth,
                                    height: this.props.mediaData.fullHeight
                                }
                            }, d.default.createElement(c.default, {
                                altText: null !== (e = a.caption) && void 0 !== e ? e : "",
                                mediaData: n
                            }))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e) {
                            var t = e.mediaData;
                            return (t.mediaStage === v.MEDIA_DATA_STAGE.RESOLVED || t.streamable && t.isStreamable()) && t.fullWidth && t.fullHeight ? {
                                size: a.getSize(t)
                            } : null
                        }
                    }, {
                        key: "getSize",
                        value: function(e) {
                            if (e.isGif) {
                                return e.fullWidth >= 330 ? {
                                    width: e.fullWidth,
                                    height: e.fullHeight
                                } : {
                                    width: 330,
                                    height: 330 * e.fullHeight / e.fullWidth
                                }
                            }
                            return e.fullWidth >= p.MIN_WIDTH ? {
                                width: e.fullWidth,
                                height: e.fullHeight
                            } : {
                                width: p.MIN_WIDTH,
                                height: e.fullHeight
                            }
                        }
                    }]), a
                }(d.PureComponent);
            S.CONCERNS = {
                mediaData: ["mediaStage", "fullWidth", "fullHeight", "isGif", "isViewOnce", "preview", "renderableUrl", "streamable"]
            }, S.defaultProps = {
                startTime: 0
            }, S.displayName = "MediaVideo";
            var y = function(e) {
                (0, r.default)(a, e);
                var t = (0, u.default)(a);

                function a() {
                    return (0, i.default)(this, a), t.apply(this, arguments)
                }
                return (0, o.default)(a, [{
                    key: "getContainerElement",
                    value: function() {
                        return this.getComponent().refContainer
                    }
                }]), a
            }((0, C.default)(S, S.CONCERNS));
            t.default = y
        },
        58003: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(59713)),
                o = l(a(34575)),
                r = l(a(93913)),
                u = l(a(2205)),
                d = l(a(99842)),
                s = l(a(94184)),
                c = a(53615),
                f = l(a(96486)),
                p = n(a(67294)),
                m = n(a(57617)),
                h = l(a(34541)),
                v = l(a(4990)),
                g = l(a(25960)),
                E = l(a(34263)),
                _ = l(a(1876)),
                C = l(a(41769)),
                M = l(a(62993)),
                S = l(a(31722)),
                y = l(a(89792)),
                T = a(71701),
                P = l(a(17362)),
                b = l(a(76568)),
                k = a(12518),
                I = l(a(89115)),
                N = a(59996),
                A = l(a(35713)),
                w = l(a(28719)),
                O = l(a(3986)),
                R = l(a(68151)),
                x = l(a(52315)),
                D = a(87261),
                L = l(a(1580)),
                B = l(a(80674)),
                F = l(a(15201)),
                G = a(40746),
                V = l(a(44589)),
                U = a(89305),
                H = a(28770),
                W = a(88828),
                j = l(a(4268)),
                Y = l(a(23225)),
                q = l(a(77478));

            function K(e) {
                null == e || e.stopPropagation()
            }

            function X(e) {
                var t = e.chat;
                t.composeQuotedMsg = e, h.default.focusChatTextInput(t)
            }
            var z = function(e) {
                (0, u.default)(a, e);
                var t = (0, d.default)(a);

                function a(e) {
                    var n;
                    (0, o.default)(this, a), (n = t.call(this, e))._setRefMediaImage = function(e) {
                        n._refMediaImage = e
                    }, n._setRefMediaVideo = function(e) {
                        n._refMediaVideo = e
                    }, n._setRefHotKeys = function(e) {
                        n._refHotKeys = e
                    }, n._handleViewOnceInfoClick = function() {
                        n._showViewOnceNux()
                    }, n._showViewOnceNux = function() {
                        var e = n.props.mediaData,
                            t = p.default.createElement(F.default, {
                                isPhoto: e.type === w.default.TYPE.IMAGE,
                                onOkClick: function() {
                                    h.default.closeModal()
                                }
                            });
                        h.default.openModal(t)
                    }, n._handleImageLoad = function(e) {
                        n.props.onImageLoad && n.props.onImageLoad();
                        var t = n.state.zoomElement;
                        t && e && n.props.isAnimatingIn && e instanceof HTMLElement && (n._zoomed || (n._zoomed = !0, n.animateZoom(t, e)))
                    }, n.animateZoom = function(e, t) {
                        var a, l = t.getBoundingClientRect(),
                            i = e.getBoundingClientRect(),
                            o = i.top - l.top,
                            r = i.left - l.left,
                            u = e.clientWidth / t.clientWidth;
                        o -= (t.clientHeight - e.clientHeight) / 2, r -= (t.clientWidth - e.clientWidth) / 2, (0, q.default)(t, {
                            opacity: [1, 0],
                            translateX: [0, r],
                            translateY: [0, o],
                            scale: [1, u]
                        }, {
                            duration: E.default.MEDIA_VIEWER.ANIMATION_DURATION,
                            easing: [.1, .82, .25, 1]
                        });
                        var d = null === (a = n._refCaption) || void 0 === a ? void 0 : a.getContainerElement();
                        d && (0, q.default)(d, {
                            opacity: [1, 0]
                        }, {
                            duration: E.default.MEDIA_VIEWER.ANIMATION_DURATION
                        })
                    }, n.openForwardFlow = function(e) {
                        e.stopPropagation();
                        var t = n.props.msg;
                        t.isUnsentMedia ? h.default.openModal(p.default.createElement(g.default, {
                            title: I.default.t(745),
                            onOK: function() {
                                return h.default.closeModal()
                            },
                            okText: I.default.t(1865)
                        }, I.default.t(742))) : h.default.openModal(p.default.createElement(y.default, {
                            msgs: [(0, U.unproxy)(t)]
                        }), {
                            transition: "modal-flow"
                        })
                    }, n._handleReplyClick = function() {
                        n._handleClose(), (0, c.delayMs)(E.default.MEDIA_VIEWER.CLOSE_ANIMATION_DURATION).then(X.bind(null, (0, U.unproxy)(n.props.msg)))
                    }, n._handleDeleteClick = function() {
                        var e = n.props.msg;
                        h.default.openModal(p.default.createElement(_.default, {
                            chat: e.chat,
                            msgList: [(0, U.unproxy)(e)],
                            deletePrompt: !0,
                            revokePrompt: e.canRevoke()
                        }))
                    }, n._handleMsgInfoClick = function() {
                        n._handleClose(), (0, c.delayMs)(E.default.MEDIA_VIEWER.CLOSE_ANIMATION_DURATION + 250).then(h.default.msgInfoDrawer.bind(h.default, (0, U.unproxy)(n.props.msg)))
                    }, n._handleImgZoomIn = function(e) {
                        var t = n._refMediaImage;
                        e && t && (n._listenToMouseMove = t.heightOverflow > 0 || t.widthOverflow > 0), n.setState({
                            imgZoomed: e
                        }), n.props.onImgZoomIn(e)
                    }, n._handleZoomOut = function(e) {
                        n._updateZoomPosition.cancel();
                        var t = n._refMediaImage;
                        t && n.state.imgZoomed && t.onImageClick(e)
                    }, n._handleMouseMove = function(e) {
                        n._updateZoomPosition(e.pageX, e.pageY)
                    }, n._updateZoomPosition = f.default.throttle((function(e, t) {
                        if (!n.state.annotationTooltipDisplayed) {
                            var a = n._refMediaImage;
                            if (a) {
                                var l = a.getInsideContainer();
                                if (l && l instanceof HTMLElement) {
                                    var i = a.getOutsideContainer();
                                    if (i && i instanceof HTMLElement) {
                                        var o = a.getTranslatePosition(i, e, t),
                                            r = o.translateX,
                                            u = o.translateY;
                                        (0, q.default)(l, "stop"), (0, q.default)(l, {
                                            translateX: r,
                                            translateY: u,
                                            scale: E.default.MEDIA_VIEWER.ZOOM_IN_FACTOR
                                        }, {
                                            duration: 0
                                        })
                                    }
                                }
                            }
                        }
                    })), n._handleKeyboardZoom = function(e) {
                        if (!n.props.isAnimatingIn) {
                            n._updateZoomPosition.cancel();
                            var t = n._refMediaImage;
                            null != t && t.onImageKeyboardZoom(e)
                        }
                    }, n._handleDownloadClick = function(e) {
                        e.stopPropagation(), M.default.initDownload((0, U.unproxy)(n.props.msg))
                    }, n._handleStarClick = function(e) {
                        e.stopPropagation();
                        var t = n.props.msg;
                        h.default.sendStarMsgs(t.chat, [(0, U.unproxy)(t)])
                    }, n._handleUnstarClick = function(e) {
                        e.stopPropagation();
                        var t = n.props.msg;
                        h.default.sendUnstarMsgs(t.chat, [(0, U.unproxy)(t)])
                    }, n._handleGoToMsgClick = function(e) {
                        e.stopPropagation(), n._handleClose(), h.default.existsDrawerRight((function(e) {
                            e && 2 === v.default.column && h.default.closeDrawerRight()
                        }));
                        var t = n.props.msg,
                            a = t.chat.getSearchContext((0, U.unproxy)(t));
                        h.default.openChatAt(t.chat, a).then((function(e) {
                            e && h.default.focusChatTextInput(t.chat)
                        }))
                    }, n._handleClose = function() {
                        if (!n._closing) {
                            n._closing = !0, (0, W.isFunction)(n.props.onExitAnimation) && n.props.onExitAnimation();
                            var e, t = n.props.getZoomNode && n.props.getZoomNode(n.props.msg.id);
                            if (!t) return n.props.onBack();
                            if (n.props.mediaData.type === w.default.TYPE.IMAGE && n._refMediaImage ? e = n._refMediaImage.getInsideContainer() : n.props.mediaData.isGif && n._refMediaVideo && (e = n._refMediaVideo.getContainerElement()), !e) return n.props.onBack();
                            var a, l = e,
                                i = e.getBoundingClientRect(),
                                o = t.getBoundingClientRect(),
                                r = o.top - i.top,
                                u = o.left - i.left,
                                d = t.clientWidth / l.clientWidth;
                            r -= (l.clientHeight - t.clientHeight) / 2, u -= (l.clientWidth - t.clientWidth) / 2, (0, q.default)(e, {
                                translateX: [u, 0],
                                translateY: [r, 0],
                                scale: [d, 1]
                            }, {
                                duration: E.default.MEDIA_VIEWER.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            }).then((function() {
                                n.props.onBack()
                            }));
                            var s = null === (a = n._refCaption) || void 0 === a ? void 0 : a.getContainerElement();
                            s && (0, q.default)(s, {
                                opacity: [0, 1]
                            }, {
                                duration: E.default.MEDIA_VIEWER.CLOSE_ANIMATION_DURATION,
                                easing: [.1, .82, .25, 1]
                            })
                        }
                    }, n._handleClickToCloseBlocked = function() {
                        n.setState({
                            isHighlightClose: !0
                        })
                    }, n._handleHighlightCloseEnd = function() {
                        n.setState({
                            isHighlightClose: !1
                        })
                    }, n._handleAnnotationTooltipDisplay = function() {
                        return n.setState({
                            annotationTooltipDisplayed: !0
                        })
                    }, n._handleAnnotationTooltipDismiss = function() {
                        return n.setState({
                            annotationTooltipDisplayed: !1
                        })
                    }, n._handleCaptionClick = function(e) {
                        e.stopPropagation(), n.setState((function(e) {
                            return {
                                isCaptionExpanded: !e.isCaptionExpanded
                            }
                        }))
                    }, n._zoomed = !1, n._closing = !1, n._listenToMouseMove = !1, n._shouldShowViewOnceNux = e.msg.isViewOnce && (0, T.shouldShowNUX)(E.default.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER);
                    var l = e.mediaData.mediaStage === D.MEDIA_DATA_STAGE.RESOLVED && e.isAnimatingIn && e.getZoomNode ? e.getZoomNode(e.msg.id) : null;
                    return n.state = {
                        zoomElement: l,
                        imgZoomed: !1,
                        annotationTooltipDisplayed: !1,
                        isCaptionVisible: !e.isAnimatingIn,
                        isCaptionExpanded: !1,
                        isHighlightClose: !1
                    }, n
                }
                return (0, r.default)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props.msg;
                        e.isViewOnce && (0, N.canMarkPlayed)(e) && (0, N.markPlayed)(e), this._shouldShowViewOnceNux && this._showViewOnceNux(), S.default.focus(this._refHotKeys)
                    }
                }, {
                    key: "getSnapshotBeforeUpdate",
                    value: function() {
                        var e, t = null === (e = this._refCaption) || void 0 === e ? void 0 : e.getContainerElement();
                        return null != t && null == this._captionExpandable && (this._captionExpandable = t.scrollHeight > t.clientHeight), null
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.state.isCaptionVisible;
                        this.props.isAnimatingIn || t || !e.isAnimatingIn || this.setState({
                            isCaptionVisible: !0
                        })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._updateZoomPosition.cancel()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, a, n, l, o, r, u = this,
                            d = this.props,
                            c = d.msg,
                            f = d.mediaData;
                        switch (f.type) {
                            case w.default.TYPE.IMAGE:
                                o = p.default.createElement(O.default, {
                                    key: c.id.toString(),
                                    msg: c,
                                    mediaData: f,
                                    onLoad: this._handleImageLoad,
                                    onImgZoomIn: this._handleImgZoomIn,
                                    onAnnotationTooltipDisplay: this._handleAnnotationTooltipDisplay,
                                    onAnnotationTooltipDismiss: this._handleAnnotationTooltipDismiss,
                                    preventDownload: c.isViewOnce,
                                    ref: this._setRefMediaImage
                                });
                                break;
                            case w.default.TYPE.VIDEO:
                                o = p.default.createElement(L.default, {
                                    key: c.id.toString(),
                                    autoPlay: !this._shouldShowViewOnceNux,
                                    msg: c,
                                    mediaData: f,
                                    onLoad: f.isGif ? this._handleImageLoad : null,
                                    startTime: this.props.startTime,
                                    onClose: this._handleClose,
                                    ref: this._setRefMediaVideo
                                });
                                break;
                            case w.default.TYPE.AUDIO:
                                o = p.default.createElement(A.default, {
                                    mediaData: f,
                                    key: c.id.toString()
                                });
                                break;
                            default:
                                __LOG__(4, void 0, new Error, !0)`type: ${f.type}`, SEND_LOGS("MediaViewerModal: unexpected media type")
                        }
                        var h = this.props.msgIndexInAlbum >= 0 && this.props.albumSize >= 0;
                        if (c.caption || h) {
                            var v, g;
                            if (h) {
                                var E = {
                                    number: this.props.msgIndexInAlbum + 1,
                                    totalNumber: this.props.albumSize
                                };
                                g = I.default.t(1208, E)
                            }
                            var _ = k.Configuration.Conversation({
                                    mentions: c.mentionMap(),
                                    links: c.getLinks(),
                                    trusted: !0
                                }),
                                M = !this.state.isCaptionVisible && (f.isGif || f.type === w.default.TYPE.IMAGE);
                            r = p.default.createElement(p.default.Fragment, null, p.default.createElement("p", {
                                className: (0, s.default)(B.default.captionWrapper, this._captionExpandable && B.default.captionWrapperExpandable),
                                onClick: this._captionExpandable ? this._handleCaptionClick : void 0,
                                title: this._captionExpandable ? I.default.t(1308) : void 0,
                                "aria-hidden": this.state.isCaptionExpanded || void 0
                            }, p.default.createElement(C.default, {
                                className: (0, s.default)(B.default.mediaCaption, (v = {}, (0, i.default)(v, B.default.captionHidden, M), (0, i.default)(v, B.default.expanded, this.state.isCaptionExpanded), v)),
                                formatters: _,
                                ref: function(e) {
                                    function t() {
                                        return e.apply(this, arguments)
                                    }
                                    return t.toString = function() {
                                        return e.toString()
                                    }, t
                                }((function(e) {
                                    u._refCaption = e
                                })),
                                text: c.caption || g
                            }), this._captionExpandable && p.default.createElement(Y.default, {
                                className: (0, s.default)(B.default.captionReadMoreBtn, (0, i.default)({}, B.default.expanded, this.state.isCaptionExpanded)),
                                onClick: this._handleCaptionClick
                            }, p.default.createElement(H.TextSpan, null, I.default.t(1308)))), this.state.isCaptionExpanded && p.default.createElement("p", {
                                className: (0, s.default)(B.default.captionWrapper, B.default.captionWrapperExpandable, B.default.captionExpanded),
                                onClick: this._handleCaptionClick
                            }, p.default.createElement(C.default, {
                                className: (0, s.default)(B.default.mediaCaption, B.default.mediaCaptionExpanded),
                                formatters: _,
                                text: c.caption
                            })))
                        }
                        var S = (0, s.default)(B.default.media, (0, i.default)({}, B.default.mediaWithCaption, !!r)),
                            y = (0, s.default)("overlay", B.default.mediaViewer, (e = {}, (0, i.default)(e, B.default.viewOnce, c.isViewOnce), (0, i.default)(e, B.default.mediaViewerAnimate, this.props.isAnimatingIn), (0, i.default)(e, B.default.cursorZoomOut, this.state.imgZoomed), e)),
                            T = this.state.imgZoomed && this._listenToMouseMove ? this._handleMouseMove : null,
                            N = this.state.imgZoomed ? this._handleZoomOut : null,
                            D = this.state.imgZoomed ? null : this._handleClose;
                        null != D && c.isViewOnce && (D = this._handleClickToCloseBlocked);
                        var F = !c.isViewOnce;
                        return p.default.createElement(j.default, {
                            displayName: "MediaViewer",
                            escapable: !0,
                            requestDismiss: this._handleClose
                        }, p.default.createElement(b.default, {
                            handlers: {
                                space: this._handleKeyboardZoom
                            },
                            onRef: this._setRefHotKeys
                        }, p.default.createElement("div", {
                            className: y,
                            "data-animate-media-viewer": !0,
                            onClick: N,
                            onMouseMove: T
                        }, p.default.createElement(R.default, {
                            isHighlightClose: this.state.isHighlightClose,
                            msg: c,
                            mediaData: f,
                            onClose: this._handleClose,
                            onGoToMsgClick: this._handleGoToMsgClick,
                            onHightlightCloseEnd: this._handleHighlightCloseEnd,
                            onReplyClick: this._handleReplyClick,
                            onUnstarClick: this._handleUnstarClick,
                            onStarClick: this._handleStarClick,
                            onDeleteClick: this._handleDeleteClick,
                            openForwardFlow: this.openForwardFlow,
                            onDownloadClick: this._handleDownloadClick,
                            onMsgInfoClick: this._handleMsgInfoClick,
                            onViewOnceInfoClick: this._handleViewOnceInfoClick,
                            msgIndexInAlbum: this.props.msgIndexInAlbum
                        }), p.default.createElement("div", {
                            className: B.default.mediaContent,
                            onClick: D
                        }, F && p.default.createElement("div", {
                            className: (0, s.default)(B.default.btnMediaPrev)
                        }, p.default.createElement(m.default, {
                            type: m.ButtonType.Prev,
                            onClick: null !== (t = this.props.onPrev) && void 0 !== t ? t : K,
                            onKeyDown: null !== (a = this.props.onPrev) && void 0 !== a ? a : K,
                            disabled: !this.props.onPrev || this.state.imgZoomed,
                            theme: G.RoundTheme.Default
                        })), p.default.createElement("div", {
                            className: S
                        }, p.default.createElement(x.default, {
                            msg: c,
                            mediaData: f
                        }), o, p.default.createElement(P.default.Provider, {
                            value: c.chat.groupMetadata
                        }, r)), F && p.default.createElement("div", {
                            className: (0, s.default)(B.default.btnMediaNext)
                        }, p.default.createElement(m.default, {
                            type: m.ButtonType.Next,
                            onClick: null !== (n = this.props.onNext) && void 0 !== n ? n : K,
                            onKeyDown: null !== (l = this.props.onNext) && void 0 !== l ? l : K,
                            disabled: !this.props.onNext || this.state.imgZoomed,
                            theme: G.RoundTheme.Default
                        }))))))
                    }
                }]), a
            }(p.PureComponent);
            z.CONCERNS = {
                msg: ["id", "star", "isUnsentMedia", "isViewOnce", "chat", "caption", "interactiveAnnotations"],
                mediaData: ["mediaStage", "type", "isGif"]
            }, z.displayName = "MediaViewerModal";
            var Z = (0, V.default)(z, z.CONCERNS);
            t.default = Z
        },
        49172: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                d = l(a(96486)),
                s = n(a(67294)),
                c = l(a(86572)),
                f = l(a(85779)),
                p = l(a(76479)),
                m = l(a(87729)),
                h = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a(e) {
                        var n;
                        return (0, i.default)(this, a), (n = t.call(this, e))._setThumbRef = function(e, t) {
                            n._thumbRefs[t] = e
                        }, n._isPreviewPreferred = function(e) {
                            var t = n._thumbRefs[e];
                            if (!t) return !1;
                            var a = t.getBoundingClientRect(),
                                l = (a.left + a.right) / 2;
                            return !(l > -1 * window.innerWidth && l < 2 * window.innerWidth)
                        }, n._getMsgIdToPreferPreview = function() {
                            var e = new Map;
                            return n.props.mediaMsgs.forEach((function(t) {
                                var a = t.id.toString();
                                e.set(a, n._isPreviewPreferred(a))
                            })), e
                        }, n.onScroll = function(e) {
                            n.handleScroll(), n.props.onScroll(e)
                        }, n._handleScroll = function() {
                            var e = n._getMsgIdToPreferPreview();
                            (0, c.default)(n.state.msgIdToPreferPreview, e) || n.setState({
                                msgIdToPreferPreview: e
                            })
                        }, n.getThumbs = function() {
                            var e = n.props.highlightedMsgIds,
                                t = e && e.size > 0 && e.has(n.props.activeMsg.id.toString()),
                                a = [];
                            return n.props.mediaMsgs.forEach((function(l) {
                                if (null != l.mediaData) {
                                    var i = t && e && !e.has(l.id.toString()) ? "viewerFlowTransparent" : "viewerFlow";
                                    a.push(s.default.createElement(f.default, {
                                        theme: i,
                                        active: l === n.props.activeMsg,
                                        msg: l,
                                        containerRef: function(e) {
                                            n._setThumbRef(e, l.id.toString()), l === n.props.activeMsg && n.props.onSetActiveThumb(e)
                                        },
                                        key: `media-${l.id.id}`,
                                        onClick: function() {
                                            n.props.onSelectThumb(l)
                                        },
                                        preferPreview: !!n.state.msgIdToPreferPreview.get(l.id.toString())
                                    }))
                                } else {
                                    var o = n.props.activeMsg;
                                    __LOG__(3, !0)`MediaViewerFlow: attempted to render a msg without mediaData: ${JSON.stringify({type:l.type,isMedia:l.isMedia,startMsgType:o.type,startMsgIsMedia:o.isMedia})}`
                                }
                            })), a.push(s.default.createElement("div", {
                                className: p.default.mediaThumb,
                                key: "spinner-right"
                            }, n.props.mediaMsgs.queryMediaAfter ? s.default.createElement(m.default, {
                                stroke: 6,
                                size: 24
                            }) : null)), a.unshift(s.default.createElement("div", {
                                className: p.default.mediaThumb,
                                key: "spinner-left"
                            }, n.props.mediaMsgs.queryMediaBefore ? s.default.createElement(m.default, {
                                stroke: 6,
                                size: 24
                            }) : null)), a.push(s.default.createElement("div", {
                                className: p.default.thumbPadding,
                                key: "padding-right"
                            })), a.unshift(s.default.createElement("div", {
                                className: p.default.thumbPadding,
                                key: "padding-left"
                            })), a
                        }, n._thumbRefs = {}, n.handleScroll = d.default.throttle(n._handleScroll, 100), n.state = {
                            msgIdToPreferPreview: n._getMsgIdToPreferPreview()
                        }, n
                    }
                    return (0, o.default)(a, [{
                        key: "componentWillUnmount",
                        value: function() {
                            this.handleScroll.cancel()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.getThumbs();
                            return s.default.createElement("div", {
                                className: p.default.thumbsContainer,
                                ref: this.props.setRefThumbsContainer
                            }, s.default.createElement("div", {
                                className: p.default.scrollContainer,
                                dir: "ltr"
                            }, s.default.createElement("div", {
                                onScroll: this.onScroll,
                                className: p.default.viewerThumbs,
                                ref: this.props.setRefThumbs
                            }, e)))
                        }
                    }]), a
                }(s.Component);
            t.default = h, h.displayName = "MediaViewerThumbList"
        },
        15201: (e, t, a) => {
            "use strict";
            var n = a(95318),
                l = a(20862);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, i.useEffect)((function() {
                    (0, c.setNUX)(r.default.NUX.EPHEMERAL_VIEW_ONCE_RECEIVER, {
                        views: 1,
                        maxViews: 1
                    })
                }), []), i.default.createElement(o.default, {
                    onOK: e.onOkClick,
                    cancelText: f.default.t(936),
                    onCancel: function() {
                        (0, u.openExternalLink)((0, d.getViewOnceFaqUrl)())
                    }
                }, i.default.createElement(s.FlexColumn, null, i.default.createElement(s.FlexItem, {
                    className: p.default.graphic,
                    align: "center"
                }, i.default.createElement(m.default, {
                    name: "view-once-sender-nux"
                })), i.default.createElement(h.TextHeader, {
                    className: p.default.text,
                    theme: "popup-title"
                }, e.isPhoto ? f.default.t(1573) : f.default.t(1576)), i.default.createElement(h.TextParagraph, {
                    className: p.default.text
                }, e.isPhoto ? f.default.t(1572) : f.default.t(1575))))
            };
            var i = l(a(67294)),
                o = n(a(25960)),
                r = n(a(34263)),
                u = a(19129),
                d = a(92618),
                s = a(32002),
                c = a(71701),
                f = n(a(89115)),
                p = n(a(82326)),
                m = n(a(75131)),
                h = a(28770)
        },
        85099: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(a(34575)),
                o = l(a(93913)),
                r = l(a(2205)),
                u = l(a(99842)),
                d = n(a(67294)),
                s = l(a(34541)),
                c = l(a(25960)),
                f = l(a(89115)),
                p = l(a(17391)),
                m = a(28770),
                h = function(e) {
                    (0, r.default)(a, e);
                    var t = (0, u.default)(a);

                    function a(e) {
                        var n;
                        return (0, i.default)(this, a), (n = t.call(this, e))._handleOK = function() {
                            var e = n.state.selectedValue;
                            null != e && n.props.onSelect(e), n.closeModal()
                        }, n._handleChange = function(e) {
                            var t = e.target;
                            t instanceof HTMLInputElement && n.setState({
                                selectedValue: parseInt(t.value, 10)
                            })
                        }, n.closeModal = function() {
                            s.default.closeModal()
                        }, n.state = {
                            selectedValue: e.initialValue
                        }, n
                    }
                    return (0, o.default)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.options,
                                n = t.explanation,
                                l = a.map((function(t) {
                                    var a = t.value,
                                        n = t.label;
                                    return d.default.createElement("li", {
                                        key: `setting-${a}`
                                    }, d.default.createElement("label", {
                                        className: p.default.label
                                    }, d.default.createElement("input", {
                                        type: "radio",
                                        className: p.default.input,
                                        value: String(a),
                                        checked: a === e.state.selectedValue,
                                        onChange: e._handleChange
                                    }), n))
                                }));
                            return d.default.createElement(c.default, {
                                title: this.props.title,
                                okText: f.default.t(556),
                                onOK: this._handleOK,
                                onCancel: this.closeModal
                            }, n ? d.default.createElement(m.TextDiv, {
                                theme: "muted",
                                className: p.default.explanation
                            }, n) : null, d.default.createElement("form", null, d.default.createElement("ol", null, l)))
                        }
                    }]), a
                }(d.PureComponent);
            t.default = h, h.displayName = "SettingsPopup"
        },
        83934: (e, t, a) => {
            "use strict";
            var n = a(95318),
                l = a(20862);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.contact,
                    a = (0, _.default)(t, ["verifiedLevel", "verifiedName"]),
                    n = a.verifiedLevel,
                    l = a.verifiedName,
                    C = (0, m.getBusinessFaqUrl)(),
                    M = !s.default.isSMB;
                (0, i.useEffect)((function() {
                    M && new v.default.BannerEvent({
                        bannerType: v.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                        bannerOperation: v.default.BANNER_OPERATIONS.SHOWN
                    }).commit()
                }), [M]);
                var S = n === c.default.VERIFIED_LEVEL.HIGH ? h.default.t(1935, {
                    businessName: l
                }) : h.default.t(1934);
                return i.default.createElement(d.default, {
                    title: h.default.t(1937),
                    onOK: function() {
                        u.default.closeModal(), M && new v.default.BannerEvent({
                            bannerType: v.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: v.default.BANNER_OPERATIONS.DISMISS
                        }).commit()
                    },
                    okText: h.default.t(1865)
                }, i.default.createElement(f.default, {
                    text: S
                }), " ", i.default.createElement(r.default, {
                    href: C,
                    onClick: function(e) {
                        e.preventDefault(), u.default.closeModal(), setTimeout((function() {
                            return (0, p.openExternalLink)(C)
                        }), 10)
                    }
                }, h.default.t(936)), M && i.default.createElement("div", {
                    className: o.default.footerNote
                }, i.default.createElement(E.TextSpan, {
                    theme: "muted",
                    size: "13"
                }, h.default.t(1938), i.default.createElement("br", null), i.default.createElement(r.default, {
                    onClick: function(e) {
                        e.preventDefault(), u.default.closeModal(), new v.default.BannerEvent({
                            bannerType: v.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: v.default.BANNER_OPERATIONS.CLICK
                        }).commit(), setTimeout((function() {
                            return u.default.openModal(i.default.createElement(g.default, null))
                        }), 200)
                    },
                    className: o.default.getTheAppLink
                }, h.default.t(1936)))))
            };
            var i = l(a(67294)),
                o = n(a(75632)),
                r = n(a(76)),
                u = n(a(34541)),
                d = n(a(25960)),
                s = n(a(93743)),
                c = n(a(34263)),
                f = n(a(41769)),
                p = a(19129),
                m = a(92618),
                h = n(a(89115)),
                v = n(a(8643)),
                g = n(a(29360)),
                E = a(28770),
                _ = n(a(33819))
        },
        29360: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return l.default.createElement(r.default, {
                    title: s.default.t(1941),
                    onOK: function() {
                        new c.default.BannerEvent({
                            bannerType: c.default.BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                            bannerOperation: c.default.BANNER_OPERATIONS.DISMISS
                        }).commit(), o.default.closeModal()
                    },
                    okText: s.default.t(1705)
                }, l.default.createElement(f.default, null), l.default.createElement("p", null, l.default.createElement(u.default, {
                    text: s.default.t(1939)
                })), l.default.createElement("br", null), l.default.createElement("p", null, l.default.createElement(u.default, {
                    text: s.default.t(1940)
                }), " ", l.default.createElement(i.default, {
                    href: p,
                    onClick: function(e) {
                        e.preventDefault(), o.default.closeModal(), setTimeout((function() {
                            return (0, d.openExternalLink)(p)
                        }), 10)
                    }
                }, s.default.t(936))))
            }, t.WHATSAPP_BUSINESS_URL = void 0;
            var l = n(a(67294)),
                i = n(a(76)),
                o = n(a(34541)),
                r = n(a(25960)),
                u = n(a(41769)),
                d = a(19129),
                s = n(a(89115)),
                c = n(a(8643)),
                f = n(a(47650)),
                p = "https://www.whatsapp.com/business";
            t.WHATSAPP_BUSINESS_URL = p
        },
        47650: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e = (0, r.useRef)(null),
                    t = (0, r.useRef)(null),
                    a = (0, r.useContext)(c.default).theme,
                    n = "dark" === a;
                return (0, r.useEffect)((function() {
                    return null != e.current && (t.current = new d.default(e.current, {
                            text: "https://www.whatsapp.com/business/download",
                            colorDark: "#122e31",
                            colorLight: "#ffffff",
                            width: u.default.QR_EDGE / 2,
                            height: u.default.QR_EDGE / 2,
                            typeNumber: 4,
                            correctLevel: d.default.CorrectLevel.H
                        })),
                        function() {
                            null != t.current && (t.current.clear(), t.current = null, e.current = null)
                        }
                }), [n]), r.default.createElement("div", {
                    className: s.default.wrapper
                }, r.default.createElement("div", {
                    ref: e,
                    className: (0, o.default)(s.default.code, (0, i.default)({}, s.default.codeDarkMode, n))
                }, r.default.createElement(f, {
                    theme: a
                })))
            };
            var i = l(a(59713)),
                o = l(a(94184)),
                r = n(a(67294)),
                u = l(a(34263)),
                d = l(a(31516)),
                s = l(a(88959)),
                c = l(a(34970));

            function f() {
                return r.default.createElement("div", {
                    className: s.default.codeLogo
                }, r.default.createElement("svg", {
                    width: "100%",
                    viewBox: "0 0 50 50",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.default.createElement("path", {
                    d: "M42.6776 42.6779C37.9558 47.3997 31.6777 50.0001 24.9999 50.0001C21.0047 50.0001 17.0541 49.0389 13.5244 47.2141L0.601068 49.3339L2.72832 36.3645C0.941278 32.8647 0 28.9525 0 25.0001C0 18.3223 2.60042 12.0443 7.32229 7.32237C12.0442 2.6005 18.3221 0 24.9999 0C31.6777 0 37.9558 2.6005 42.6776 7.32237C47.3995 12.0443 50 18.3223 50 25.0001C50 31.678 47.3995 37.9558 42.6776 42.6779ZM24.9999 4.33778C13.6067 4.33778 4.33772 13.607 4.33772 25.0001C4.33772 28.4792 5.21935 31.9192 6.8868 34.9487L7.24853 35.6054L5.85915 44.0756L14.2959 42.6918L14.9565 43.0601C18.0107 44.7624 21.4837 45.6622 24.9999 45.6622C36.3932 45.6622 45.6622 36.3933 45.6622 25.0001C45.6622 13.607 36.3932 4.33778 24.9999 4.33778ZM31.1133 24.3614C32.4522 24.9804 34.1536 26.3725 34.1208 29.3117C34.0749 33.4266 31.2191 35.6542 27.2744 35.6542H19.4594H18.3042C17.5079 35.6542 16.8645 35.0053 16.8713 34.2092L17.0344 15.0573C17.041 14.2714 17.6794 13.6377 18.4652 13.6366L27.1493 13.6256C31.4651 13.6256 33.9598 16.039 33.9177 19.8134C33.8903 22.2579 32.2484 23.8355 31.1133 24.3614ZM26.766 17.4622H21.3643L21.3076 22.5361H26.7093C28.5347 22.5361 29.5672 21.5152 29.584 19.9992C29.6009 18.4831 28.5915 17.4622 26.766 17.4622ZM26.9444 26.4035H21.2643L21.2038 31.8178H26.884C28.8333 31.8178 29.7752 30.5802 29.792 29.0952C29.8085 27.6101 28.8939 26.4035 26.9444 26.4035Z",
                    fill: "currentColor"
                })))
            }
        },
        97181: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.onClick;
                return l.default.createElement(i.default, {
                    onClick: t,
                    side: l.default.createElement(u.default, {
                        name: "lock",
                        className: o.default.icon
                    }),
                    multiline: !0
                }, l.default.createElement("div", {
                    className: o.default.header
                }, l.default.createElement(d.TextSpan, {
                    theme: "title"
                }, r.default.t(1473))), l.default.createElement(d.TextDiv, {
                    theme: "muted"
                }, r.default.t(1472)))
            };
            var l = n(a(67294)),
                i = n(a(82745)),
                o = n(a(21477)),
                r = n(a(89115)),
                u = n(a(75131)),
                d = a(28770)
        },
        6476: (e, t, a) => {
            "use strict";
            var n = a(20862),
                l = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = (0, o.useState)(!1),
                    a = (0, i.default)(t, 2),
                    n = a[0],
                    l = a[1];
                return o.default.createElement(u.default, {
                    onOK: function() {
                        e.onReport(n)
                    },
                    okText: s.default.t(1316),
                    onCancel: e.onCancel,
                    title: e.title
                }, o.default.createElement(c.TextParagraph, {
                    className: f.default.section,
                    color: "muted"
                }, e.isGroup ? s.default.t(1337) : s.default.t(1336)), o.default.createElement(c.TextParagraph, {
                    className: f.default.section,
                    color: "muted"
                }, e.isGroup ? s.default.t(1340) : e.isBusiness ? s.default.t(1339) : s.default.t(1338)), o.default.createElement(d.FlexRow, {
                    align: "center",
                    justify: "start"
                }, o.default.createElement(r.default, {
                    onChange: function() {
                        return l((function(e) {
                            return !e
                        }))
                    },
                    checked: n,
                    id: "menu-icon-report-spam"
                }), o.default.createElement(c.TextLabel, {
                    className: f.default.checkboxLabel,
                    htmlFor: "menu-icon-report-spam",
                    color: "muted"
                }, e.isGroup ? s.default.t(1739) : e.isBusiness ? s.default.t(285) : s.default.t(287))))
            };
            var i = l(a(63038)),
                o = n(a(67294)),
                r = l(a(26015)),
                u = l(a(25960)),
                d = a(32002),
                s = l(a(89115)),
                c = a(28770),
                f = l(a(56454))
        },
        86572: (e, t, a) => {
            "use strict";
            var n = a(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var a;
                if (e.size !== t.size) return !1;
                var n, o = (0, i.default)(e);
                try {
                    for (o.s(); !(n = o.n()).done;) {
                        var r = (0, l.default)(n.value, 2),
                            u = r[0],
                            d = r[1];
                        if ((a = t.get(u)) !== d || void 0 === a && !t.has(u)) return !1
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return !0
            };
            var l = n(a(63038)),
                i = n(a(43269))
        },
        41323: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                container: "_36FbL",
                block: "_11V85",
                main: "_1ER5I",
                side: "_1YLup",
                multiline: "_1tPXz"
            }
        },
        66322: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                header: "_2J_Rg",
                chevronIcon: "_3grvf",
                ephemeralIcon: "_36-dp"
            }
        },
        8767: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                msg: "_3YiZC",
                text: "RmpKn",
                bubble: "_2z0p1",
                author: "XntIB",
                hasSuspiciousLinks: "_3bU-2",
                hasAuthor: "_2cFHu",
                suspiciousLabel: "_2tYTz"
            }
        },
        68198: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                wrapper: "_11tTr"
            }
        },
        85967: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                nuxContainer: "_2MN2b",
                flatListContainer: "_3P67r",
                btnClose: "_1rNId",
                nuxHeader: "_1fDhw",
                nuxContent: "_3CSup",
                nuxIcon: "wZmgd",
                nuxText: "_23F3I"
            }
        },
        83442: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                body: "_2j9Df",
                photo: "_3wMpK",
                chevron: "_2o-Pp"
            }
        },
        91548: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                businessAccount: "_3Wx0w",
                businessTitleText: "_3hEvS"
            }
        },
        70615: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                actionsRow: "_2kAwJ",
                actionButton: "_2iUPD",
                actionLabel: "_2oaCg",
                actionDisabled: "_3GWG6"
            }
        },
        46604: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                businessHours: "_1I5MS",
                businessHoursRow: "_1E5MZ",
                firstRow: "_3qGzL",
                businessHoursDay: "CY6kT",
                businessHoursHours: "_1ujuU",
                dayIsOpen: "_3nRm3",
                businessHoursChevron: "_36zDQ",
                flipSvg: "_3-kwz"
            }
        },
        62260: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                section: "_2yoR2",
                description: "_2COKu",
                map: "_2FPvQ"
            }
        },
        67666: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                wrapper: "_-68fg",
                title: "_1FhZx",
                subtitle: "_3YwTO",
                verifiedText: "_25I1z",
                icon: "_2ie2d"
            }
        },
        11582: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                contactBusinessInfo: "_2Qmz_",
                contactBusinessInfoSpinner: "_3UShD",
                dataRow: "_2GoqA",
                businessHoursRow: "T9W1E",
                businessHoursDay: "_1Qi8h",
                businessHoursHours: "_265N_",
                businessHoursChevron: "_235Hk",
                flipSvg: "sdLP_",
                dataRowIcon: "uj7Hl",
                dataRowText: "_1y-yA",
                businessTitleText: "_20eRR",
                businessMarker: "-ouoI",
                verifiedLabel: "_3WNAO",
                businessMap: "_34r-I",
                address: "HXkG_",
                link: "_3AYvg",
                infoIcon: "_3hzkD"
            }
        },
        42799: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                body: "_2YEfx",
                avatar: "_2ALnh",
                nameSecondary: "_3l1_9",
                screenName: "_2UVLe",
                businessVname: "_1viks",
                icon: "_37Tl1",
                titleAbout: "Xt0cg",
                chevron: "_1Fclf"
            }
        },
        32234: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                info: "_2U0ik",
                categories: "_2oH_b",
                noPaddingBottom: "_3W57d"
            }
        },
        13916: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                open: "_25r2J",
                closed: "_5Xa1z",
                openStatus: "_1i7Je"
            }
        },
        21477: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                header: "_2zyOo",
                icon: "_4aKqp"
            }
        },
        17847: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                body: "_f0hJ",
                avatar: "_3zYOj",
                description: "_8xDKI",
                nameSecondary: "_3IaWU",
                chevron: "_1kh2B",
                iconSearch: "PLicp",
                title: "_1VJFC",
                dogfoodingGroupBannerInternalOnly: "_2j99K"
            }
        },
        64287: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                header: "_3AwRc",
                restrictText: "_1fFgT"
            }
        },
        65636: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                multimediaGallery: "_3M644",
                column: "_3nvje",
                menuItem: "OJuvv",
                active: "_KRg9",
                menuTabsLists: "_3CC5A",
                threeTabs: "_1KRHF",
                fourTabs: "rLX29"
            }
        },
        79741: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                mediaViewerPlaceholder: "nehFG",
                imageAudio: "_2OreO",
                mediaViewerAudio: "_1alR8"
            }
        },
        76479: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                thumbsContainer: "_1XWMx",
                scrollContainer: "_1MhXb",
                viewerThumbs: "_1FS45",
                mediaThumb: "_52crR",
                thumbPadding: "_1833d"
            }
        },
        82326: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                text: "_1iOjC",
                graphic: "_1WxSS"
            }
        },
        17391: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                label: "QzWWL",
                input: "_1LOWN",
                explanation: "_37J_Y"
            }
        },
        75632: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                footerNote: "_1chRk",
                getTheAppLink: "_3t8G3"
            }
        },
        88959: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                wrapper: "_2Cwyq",
                code: "_3LMFv",
                codeDarkMode: "_3-nnq",
                codeLogo: "_3wVH-"
            }
        },
        56454: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => n
            });
            const n = {
                section: "_2ppks",
                checkboxLabel: "l2_nh"
            }
        }
    }
]);