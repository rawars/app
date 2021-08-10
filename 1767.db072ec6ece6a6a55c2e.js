/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [1767], {
        70411: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineWebPersistedJob = function(e) {
                return (0, n.definePersistedJob)(e)
            };
            var n = s(50210)
        },
        71767: (e, t, s) => {
            "use strict";
            var n = s(95318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = s(18712),
                u = s(4746),
                a = s(70411),
                d = new(n(s(98112)).default)("aboutResponse", (function(e) {
                    return e.assertAttr("type", "result"), {
                        id: e.attrInt("id")
                    }
                })),
                i = (0, a.defineWebPersistedJob)("setAbout").finalStep("sendStanza", (function(e) {
                    var t = e.content,
                        s = (0, r.wap)("iq", {
                            to: r.S_WHATSAPP_NET,
                            type: "set",
                            xmlns: "status",
                            id: (0, r.generateId)()
                        }, (0, r.wap)("status", null, t));
                    return (0, u.sendIq)(s, d).then((function(e) {
                        return e.success ? {
                            status: 200
                        } : {
                            status: e.errorCode
                        }
                    }))
                })).end();
            t.default = i
        }
    }
]);