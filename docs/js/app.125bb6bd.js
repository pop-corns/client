(function(t) {
  function e(e) {
    for (
      var r, o, i = e[0], u = e[1], s = e[2], l = 0, d = [];
      l < i.length;
      l++
    )
      (o = i[l]),
        Object.prototype.hasOwnProperty.call(c, o) && c[o] && d.push(c[o][0]),
        (c[o] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);
    f && f(e);
    while (d.length) d.shift()();
    return a.push.apply(a, s || []), n();
  }
  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], r = !0, o = 1; o < n.length; o++) {
        var u = n[o];
        0 !== c[u] && (r = !1);
      }
      r && (a.splice(e--, 1), (t = i((i.s = n[0]))));
    }
    return t;
  }
  var r = {},
    c = { app: 0 },
    a = [];
  function o(t) {
    return (
      i.p +
      "js/" +
      ({}[t] || t) +
      "." +
      {
        "chunk-2d0b3289": "9b197190",
        "chunk-2d0d6d35": "63dc8e57",
        "chunk-2d2086b7": "f3dd9d38",
        "chunk-2d217357": "cb3f4e13",
        "chunk-52fabea2": "d079063a",
        "chunk-704fe663": "998c9bbc",
        "chunk-8ab06c80": "6dd5a7d4",
        "chunk-2d0bac97": "74e3c28d",
        "chunk-2d0bd246": "b354ca7f",
        "chunk-2d0cedd0": "ea949ae4",
        "chunk-2d0f1193": "12c44839",
        "chunk-2d207fb4": "245dc458",
        "chunk-fee37f4e": "62dfb21e"
      }[t] +
      ".js"
    );
  }
  function i(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.e = function(t) {
    var e = [],
      n = c[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var r = new Promise(function(e, r) {
          n = c[t] = [e, r];
        });
        e.push((n[2] = r));
        var a,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          i.nc && u.setAttribute("nonce", i.nc),
          (u.src = o(t));
        var s = new Error();
        a = function(e) {
          (u.onerror = u.onload = null), clearTimeout(l);
          var n = c[t];
          if (0 !== n) {
            if (n) {
              var r = e && ("load" === e.type ? "missing" : e.type),
                a = e && e.target && e.target.src;
              (s.message =
                "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")"),
                (s.name = "ChunkLoadError"),
                (s.type = r),
                (s.request = a),
                n[1](s);
            }
            c[t] = void 0;
          }
        };
        var l = setTimeout(function() {
          a({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = a), document.head.appendChild(u);
      }
    return Promise.all(e);
  }),
    (i.m = t),
    (i.c = r),
    (i.d = function(t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          i.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = "/"),
    (i.oe = function(t) {
      throw (console.error(t), t);
    });
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = u.push.bind(u);
  (u.push = e), (u = u.slice());
  for (var l = 0; l < u.length; l++) e(u[l]);
  var f = s;
  a.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("56d7");
  },
  "00c2": function(t, e, n) {
    "use strict";
    var r = "id_token",
      c = function() {
        return window.localStorage.getItem(r);
      },
      a = function(t) {
        window.localStorage.setItem(r, t);
      },
      o = function() {
        window.localStorage.removeItem(r);
      };
    e["a"] = { getToken: c, saveToken: a, destroyToken: o };
  },
  4360: function(t, e, n) {
    "use strict";
    var r,
      c,
      a,
      o,
      i,
      u,
      s = n("2b0e"),
      l = n("2f62"),
      f = n("bd86"),
      d = n("5ce5"),
      m = n("6c33"),
      p = "setQuestions",
      h = "setLoading",
      b = "logOut",
      v = "setQuestion",
      g = "setUser",
      O = "setComments",
      w = "setError",
      j = "setProfile",
      k = "setTags",
      y = "addTag",
      P = "removeTag",
      x = "updateQuestionInList",
      C = "resetModuleState",
      A = { tags: [], questions: [], isLoading: !0, questionsCount: 0 },
      R = {
        questionsCount: function(t) {
          return t.questionsCount;
        },
        questions: function(t) {
          return t.questions;
        },
        isLoading: function(t) {
          return t.isLoading;
        },
        tags: function(t) {
          return t.tags;
        }
      },
      T =
        ((r = {}),
        Object(f["a"])(r, m["m"], function(t, e) {
          var n = t.commit;
          return (
            n(h),
            d["a"]
              .query(e.type, e.filters)
              .then(function(t) {
                var e = t.data;
                n(p, e);
              })
              .catch(function(t) {
                throw new Error(t);
              })
          );
        }),
        Object(f["a"])(r, m["r"], function(t) {
          var e = t.commit;
          return d["d"]
            .get()
            .then(function(t) {
              var n = t.data;
              e(k, n.tags);
            })
            .catch(function(t) {
              throw new Error(t);
            });
        }),
        r),
      E =
        ((c = {}),
        Object(f["a"])(c, h, function(t) {
          t.isLoading = !0;
        }),
        Object(f["a"])(c, p, function(t, e) {
          var n = e.questions,
            r = e.questionsCount;
          (t.questions = n), (t.questionsCount = r), (t.isLoading = !1);
        }),
        Object(f["a"])(c, k, function(t, e) {
          t.tags = e;
        }),
        Object(f["a"])(c, x, function(t, e) {
          t.questions = t.questions.map(function(t) {
            return t.slug !== e.slug
              ? t
              : ((t.favorited = e.favorited),
                (t.favoritesCount = e.favoritesCount),
                t);
          });
        }),
        c),
      S = { state: A, getters: R, actions: T, mutations: E },
      _ = n("00c2"),
      L = { errors: null, user: {}, isAuthenticated: !!_["a"].getToken() },
      D = {
        currentUser: function(t) {
          return (
            t.user && !t.user.image && (t.user.image = "/img/avatar.png"),
            t.user
          );
        },
        isAuthenticated: function(t) {
          return t.isAuthenticated;
        }
      },
      F =
        ((a = {}),
        Object(f["a"])(a, m["s"], function(t, e) {
          return new Promise(function(n) {
            d["e"]
              .post("users/login", { user: e })
              .then(function(e) {
                var r = e.data;
                t.commit(g, r.user), n(r);
              })
              .catch(function(e) {
                var n = e.response;
                t.commit(w, n.data.errors);
              });
          });
        }),
        Object(f["a"])(a, m["t"], function(t) {
          t.commit(b);
        }),
        Object(f["a"])(a, m["u"], function(t, e) {
          return new Promise(function(n, r) {
            d["e"]
              .post("users", { user: e })
              .then(function(e) {
                var r = e.data;
                t.commit(g, r.user), n(r);
              })
              .catch(function(e) {
                var n = e.response;
                t.commit(w, n.data.errors), r(n);
              });
          });
        }),
        Object(f["a"])(a, m["g"], function(t) {
          _["a"].getToken()
            ? (d["e"].setHeader(),
              d["e"]
                .get("user")
                .then(function(e) {
                  var n = e.data;
                  t.commit(g, n.user);
                })
                .catch(function(e) {
                  var n = e.response;
                  t.commit(w, n.data.errors);
                }))
            : t.commit(b);
        }),
        Object(f["a"])(a, m["v"], function(t, e) {
          e.email;
          var n = e.username,
            r = e.password,
            c = e.image,
            a = e.bio,
            o = { username: n, bio: a, image: c };
          return (
            r && (o.password = r),
            d["e"].put("user", { user: o }).then(function(e) {
              var n = e.data;
              return t.commit(g, n.user), n;
            })
          );
        }),
        a),
      U =
        ((o = {}),
        Object(f["a"])(o, w, function(t, e) {
          t.errors = e;
        }),
        Object(f["a"])(o, g, function(t, e) {
          (t.isAuthenticated = !0),
            (t.user = e),
            (t.errors = {}),
            _["a"].saveToken(t.user.token);
        }),
        Object(f["a"])(o, b, function(t) {
          (t.isAuthenticated = !1),
            (t.user = {}),
            (t.errors = {}),
            _["a"].destroyToken();
        }),
        o),
      q = { state: L, actions: F, mutations: U, getters: D },
      M = (n("8e6e"), n("ac6a"), n("456d"), n("96cf"), n("3b8d"));
    function I(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function H(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? I(n, !0).forEach(function(e) {
              Object(f["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : I(n).forEach(function(e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var N,
      W = {
        question: {
          author: {},
          title: "",
          description: "",
          body: "",
          tagList: []
        },
        comments: []
      },
      V = H({}, W),
      Y =
        ((i = {}),
        Object(f["a"])(
          i,
          m["l"],
          (function() {
            var t = Object(M["a"])(
              regeneratorRuntime.mark(function t(e, n, r) {
                var c, a;
                return regeneratorRuntime.wrap(function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (void 0 === r) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return", e.commit(v, r));
                      case 2:
                        return (t.next = 4), d["a"].get(n);
                      case 4:
                        return (
                          (c = t.sent),
                          (a = c.data),
                          e.commit(v, a.question),
                          t.abrupt("return", a)
                        );
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(e, n, r) {
              return t.apply(this, arguments);
            };
          })()
        ),
        Object(f["a"])(
          i,
          m["n"],
          (function() {
            var t = Object(M["a"])(
              regeneratorRuntime.mark(function t(e, n) {
                var r, c;
                return regeneratorRuntime.wrap(function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), d["b"].get(n);
                      case 2:
                        return (
                          (r = t.sent),
                          (c = r.data),
                          e.commit(O, c.comments),
                          t.abrupt("return", c.comments)
                        );
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(e, n) {
              return t.apply(this, arguments);
            };
          })()
        ),
        Object(f["a"])(
          i,
          m["h"],
          (function() {
            var t = Object(M["a"])(
              regeneratorRuntime.mark(function t(e, n) {
                return regeneratorRuntime.wrap(function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), d["b"].post(n.slug, n.comment);
                      case 2:
                        e.dispatch(m["n"], n.slug);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(e, n) {
              return t.apply(this, arguments);
            };
          })()
        ),
        Object(f["a"])(
          i,
          m["i"],
          (function() {
            var t = Object(M["a"])(
              regeneratorRuntime.mark(function t(e, n) {
                return regeneratorRuntime.wrap(function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2), d["b"].destroy(n.slug, n.commentId)
                        );
                      case 2:
                        e.dispatch(m["n"], n.slug);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(e, n) {
              return t.apply(this, arguments);
            };
          })()
        ),
        Object(f["a"])(
          i,
          m["j"],
          (function() {
            var t = Object(M["a"])(
              regeneratorRuntime.mark(function t(e, n) {
                var r, c;
                return regeneratorRuntime.wrap(function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), d["c"].add(n);
                      case 2:
                        (r = t.sent),
                          (c = r.data),
                          e.commit(x, c.question, { root: !0 }),
                          e.commit(v, c.question);
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(e, n) {
              return t.apply(this, arguments);
            };
          })()
        ),
        Object(f["a"])(
          i,
          m["k"],
          (function() {
            var t = Object(M["a"])(
              regeneratorRuntime.mark(function t(e, n) {
                var r, c;
                return regeneratorRuntime.wrap(function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), d["c"].remove(n);
                      case 2:
                        (r = t.sent),
                          (c = r.data),
                          e.commit(x, c.question, { root: !0 }),
                          e.commit(v, c.question);
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function(e, n) {
              return t.apply(this, arguments);
            };
          })()
        ),
        Object(f["a"])(i, m["e"], function(t) {
          var e = t.state;
          return d["a"].create(e.question);
        }),
        Object(f["a"])(i, m["a"], function(t, e) {
          return d["a"].destroy(e);
        }),
        Object(f["a"])(i, m["b"], function(t) {
          var e = t.state;
          return d["a"].update(e.question.slug, e.question);
        }),
        Object(f["a"])(i, m["c"], function(t, e) {
          t.commit(y, e);
        }),
        Object(f["a"])(i, m["d"], function(t, e) {
          t.commit(P, e);
        }),
        Object(f["a"])(i, m["f"], function(t) {
          var e = t.commit;
          e(C);
        }),
        i),
      $ =
        ((u = {}),
        Object(f["a"])(u, v, function(t, e) {
          t.question = e;
        }),
        Object(f["a"])(u, O, function(t, e) {
          t.comments = e;
        }),
        Object(f["a"])(u, y, function(t, e) {
          t.question.tagList = t.question.tagList.concat([e]);
        }),
        Object(f["a"])(u, P, function(t, e) {
          t.question.tagList = t.question.tagList.filter(function(t) {
            return t !== e;
          });
        }),
        Object(f["a"])(u, C, function() {
          for (var t in V) s["a"].set(V, t, W[t]);
        }),
        u),
      G = {
        question: function(t) {
          return t.question;
        },
        comments: function(t) {
          return t.comments;
        }
      },
      J = { state: V, actions: Y, mutations: $, getters: G },
      Q = { errors: {}, profile: {} },
      z = {
        profile: function(t) {
          return t.profile;
        }
      },
      B =
        ((N = {}),
        Object(f["a"])(N, m["o"], function(t, e) {
          var n = e.username;
          return d["e"]
            .get("profiles", n)
            .then(function(e) {
              var n = e.data;
              return (
                n.profile.image || (n.profile.image = "/img/avatar.png"),
                t.commit(j, n.profile),
                n
              );
            })
            .catch(function() {});
        }),
        Object(f["a"])(N, m["p"], function(t, e) {
          var n = e.username;
          return d["e"]
            .post("profiles/".concat(n, "/follow"))
            .then(function(e) {
              var n = e.data;
              return t.commit(j, n.profile), n;
            })
            .catch(function() {});
        }),
        Object(f["a"])(N, m["q"], function(t, e) {
          var n = e.username;
          return d["e"]
            .delete("profiles/".concat(n, "/follow"))
            .then(function(e) {
              var n = e.data;
              return t.commit(j, n.profile), n;
            })
            .catch(function() {});
        }),
        N),
      K = Object(f["a"])({}, j, function(t, e) {
        (t.profile = e), (t.errors = {});
      }),
      X = { state: Q, actions: B, mutations: K, getters: z };
    s["a"].use(l["a"]);
    e["a"] = new l["a"].Store({
      modules: { home: S, auth: q, question: J, profile: X }
    });
  },
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e);
    n("ac6a"), n("5df3"), n("cadf"), n("551c"), n("f751"), n("097d");
    var r = n("2b0e"),
      c = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { id: "app" } },
          [n("RwvHeader"), n("router-view"), n("RwvFooter")],
          1
        );
      },
      a = [],
      o = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("nav", { staticClass: "navbar navbar-light" }, [
          n(
            "div",
            { staticClass: "container" },
            [
              n(
                "router-link",
                {
                  staticClass: "navbar-brand",
                  attrs: { to: { name: "home" } }
                },
                [t._v("\n      Popcorns\n    ")]
              ),
              t.isAuthenticated
                ? n("ul", { staticClass: "nav navbar-nav pull-xs-right" }, [
                    n(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        n(
                          "router-link",
                          {
                            staticClass: "btn btn-sm btn-primary",
                            staticStyle: { "margin-top": "11%" },
                            attrs: {
                              "active-class": "active",
                              to: { name: "question-edit" }
                            }
                          },
                          [t._v("\n          NEW QUESTION\n        ")]
                        )
                      ],
                      1
                    ),
                    t.currentUser.username
                      ? n(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            n(
                              "router-link",
                              {
                                staticClass: "nav-link",
                                attrs: {
                                  "active-class": "active",
                                  exact: "",
                                  to: {
                                    name: "profile",
                                    params: { username: t.currentUser.username }
                                  }
                                }
                              },
                              [
                                n("img", {
                                  staticClass: "user-img",
                                  staticStyle: {
                                    width: "39px",
                                    height: "39px",
                                    "border-radius": "50%"
                                  },
                                  attrs: { src: t.currentUser.image }
                                })
                              ]
                            )
                          ],
                          1
                        )
                      : t._e()
                  ])
                : n("ul", { staticClass: "nav navbar-nav pull-xs-right" }, [
                    n(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        n(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              "active-class": "active",
                              exact: "",
                              to: { name: "login" }
                            }
                          },
                          [t._v("\n          LOG IN\n        ")]
                        )
                      ],
                      1
                    ),
                    n(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        n(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              "active-class": "active",
                              exact: "",
                              to: { name: "register" }
                            }
                          },
                          [t._v("\n          REGISTER\n        ")]
                        )
                      ],
                      1
                    )
                  ])
            ],
            1
          )
        ]);
      },
      i = [],
      u = (n("8e6e"), n("456d"), n("bd86")),
      s = n("2f62");
    function l(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function f(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? l(n, !0).forEach(function(e) {
              Object(u["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : l(n).forEach(function(e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var d = {
        name: "RwvHeader",
        computed: f({}, Object(s["b"])(["currentUser", "isAuthenticated"]))
      },
      m = d,
      p = n("2877"),
      h = Object(p["a"])(m, o, i, !1, null, null, null),
      b = h.exports,
      v = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("footer", [
          n(
            "div",
            { staticClass: "container" },
            [
              n(
                "router-link",
                {
                  staticClass: "logo-font",
                  attrs: { to: { name: "home", params: {} } }
                },
                [t._v("\n      Popcorns\n    ")]
              ),
              n("span", { staticClass: "attribution" }, [
                t._v(
                  "\n      For Product People That Gain Knowledge by Asking Questions\n    "
                )
              ])
            ],
            1
          )
        ]);
      },
      g = [],
      O = { name: "RwvFooter" },
      w = O,
      j = Object(p["a"])(w, v, g, !1, null, null, null),
      k = j.exports,
      y = { name: "App", components: { RwvHeader: b, RwvFooter: k } },
      P = y,
      x = Object(p["a"])(P, c, a, !1, null, null, null),
      C = x.exports,
      A = n("8c4f");
    r["a"].use(A["a"]);
    var R = new A["a"]({
        routes: [
          {
            path: "/",
            component: function() {
              return n.e("chunk-704fe663").then(n.bind(null, "bb51"));
            },
            children: [
              {
                path: "",
                name: "home",
                component: function() {
                  return Promise.all([
                    n.e("chunk-8ab06c80"),
                    n.e("chunk-2d0bac97")
                  ]).then(n.bind(null, "3961"));
                }
              },
              {
                path: "my-feed",
                name: "home-my-feed",
                component: function() {
                  return Promise.all([
                    n.e("chunk-8ab06c80"),
                    n.e("chunk-2d207fb4")
                  ]).then(n.bind(null, "a39e"));
                }
              },
              {
                path: "tag/:tag",
                name: "home-tag",
                component: function() {
                  return Promise.all([
                    n.e("chunk-8ab06c80"),
                    n.e("chunk-2d0cedd0")
                  ]).then(n.bind(null, "60ee"));
                }
              }
            ]
          },
          {
            name: "login",
            path: "/login",
            component: function() {
              return n.e("chunk-2d2086b7").then(n.bind(null, "a55b"));
            }
          },
          {
            name: "register",
            path: "/register",
            component: function() {
              return n.e("chunk-2d0d6d35").then(n.bind(null, "73cf"));
            }
          },
          {
            name: "settings",
            path: "/settings",
            component: function() {
              return n.e("chunk-2d0b3289").then(n.bind(null, "26d3"));
            }
          },
          {
            path: "/@:username",
            component: function() {
              return n.e("chunk-2d217357").then(n.bind(null, "c66d"));
            },
            children: [
              {
                path: "",
                name: "profile",
                component: function() {
                  return Promise.all([
                    n.e("chunk-8ab06c80"),
                    n.e("chunk-2d0f1193")
                  ]).then(n.bind(null, "9ed5"));
                }
              },
              {
                name: "profile-favorites",
                path: "favorites",
                component: function() {
                  return Promise.all([
                    n.e("chunk-8ab06c80"),
                    n.e("chunk-2d0bd246")
                  ]).then(n.bind(null, "2b77"));
                }
              }
            ]
          },
          {
            name: "question",
            path: "/questions/:slug",
            component: function() {
              return n.e("chunk-52fabea2").then(n.bind(null, "3ad6"));
            },
            props: !0
          },
          {
            name: "question-edit",
            path: "/editor/:slug?",
            props: !0,
            component: function() {
              return n.e("chunk-fee37f4e").then(n.bind(null, "04d0"));
            }
          }
        ]
      }),
      T = n("4360"),
      E = n("9483");
    Object(E["a"])("".concat("/", "service-worker.js"), {
      ready: function() {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      cached: function() {
        console.log("Content has been cached for offline use.");
      },
      updated: function() {
        console.log("New content is available; please refresh.");
      },
      offline: function() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function(t) {
        console.error("Error during service worker registration:", t);
      }
    });
    var S = n("6c33"),
      _ = n("5ce5"),
      L = n("70f2"),
      D = n.n(L),
      F = function(t) {
        return D()(new Date(t), "MMMM D, YYYY");
      },
      U = function(t) {
        return "".concat(t[0]);
      };
    (r["a"].config.productionTip = !1),
      r["a"].filter("date", F),
      r["a"].filter("error", U),
      _["e"].init(),
      R.beforeEach(function(t, e, n) {
        return Promise.all([T["a"].dispatch(S["g"])]).then(n);
      }),
      new r["a"]({
        router: R,
        store: T["a"],
        render: function(t) {
          return t(C);
        }
      }).$mount("#app");
  },
  "5ce5": function(t, e, n) {
    "use strict";
    var r = n("2b0e"),
      c = n("bc3a"),
      a = n.n(c),
      o = n("a7fe"),
      i = n.n(o),
      u = n("00c2"),
      s = "http://localhost:3000/api";
    n.d(e, "d", function() {
      return f;
    }),
      n.d(e, "a", function() {
        return d;
      }),
      n.d(e, "b", function() {
        return m;
      }),
      n.d(e, "c", function() {
        return p;
      });
    var l = {
        init: function() {
          r["a"].use(i.a, a.a), (r["a"].axios.defaults.baseURL = s);
        },
        setHeader: function() {
          r["a"].axios.defaults.headers.common[
            "Authorization"
          ] = "Token ".concat(u["a"].getToken());
        },
        query: function(t, e) {
          return r["a"].axios.get(t, e).catch(function(t) {
            throw new Error("[RWV] ApiService ".concat(t));
          });
        },
        get: function(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return r["a"].axios
            .get("".concat(t, "/").concat(e))
            .catch(function(t) {
              throw new Error("[RWV] ApiService ".concat(t));
            });
        },
        post: function(t, e) {
          return r["a"].axios.post("".concat(t), e);
        },
        update: function(t, e, n) {
          return r["a"].axios.put("".concat(t, "/").concat(e), n);
        },
        put: function(t, e) {
          return r["a"].axios.put("".concat(t), e);
        },
        delete: function(t) {
          return r["a"].axios.delete(t).catch(function(t) {
            throw new Error("[RWV] ApiService ".concat(t));
          });
        }
      },
      f =
        ((e["e"] = l),
        {
          get: function() {
            return l.get("tags");
          }
        }),
      d = {
        query: function(t, e) {
          return l.query("questions" + ("feed" === t ? "/feed" : ""), {
            params: e
          });
        },
        get: function(t) {
          return l.get("questions", t);
        },
        create: function(t) {
          return l.post("questions", { question: t });
        },
        update: function(t, e) {
          return l.update("questions", t, { question: e });
        },
        destroy: function(t) {
          return l.delete("questions/".concat(t));
        }
      },
      m = {
        get: function(t) {
          if ("string" !== typeof t)
            throw new Error(
              "[RWV] CommentsService.get() question slug required to fetch comments"
            );
          return l.get("questions", "".concat(t, "/comments"));
        },
        post: function(t, e) {
          return l.post("questions/".concat(t, "/comments"), {
            comment: { body: e }
          });
        },
        destroy: function(t, e) {
          return l.delete("questions/".concat(t, "/comments/").concat(e));
        }
      },
      p = {
        add: function(t) {
          return l.post("questions/".concat(t, "/favorite"));
        },
        remove: function(t) {
          return l.delete("questions/".concat(t, "/favorite"));
        }
      };
  },
  "6c33": function(t, e, n) {
    "use strict";
    n.d(e, "e", function() {
      return r;
    }),
      n.d(e, "a", function() {
        return c;
      }),
      n.d(e, "b", function() {
        return a;
      }),
      n.d(e, "c", function() {
        return o;
      }),
      n.d(e, "d", function() {
        return i;
      }),
      n.d(e, "f", function() {
        return u;
      }),
      n.d(e, "g", function() {
        return s;
      }),
      n.d(e, "h", function() {
        return l;
      }),
      n.d(e, "i", function() {
        return f;
      }),
      n.d(e, "j", function() {
        return d;
      }),
      n.d(e, "k", function() {
        return m;
      }),
      n.d(e, "l", function() {
        return p;
      }),
      n.d(e, "m", function() {
        return h;
      }),
      n.d(e, "n", function() {
        return b;
      }),
      n.d(e, "o", function() {
        return v;
      }),
      n.d(e, "p", function() {
        return g;
      }),
      n.d(e, "q", function() {
        return O;
      }),
      n.d(e, "r", function() {
        return w;
      }),
      n.d(e, "s", function() {
        return j;
      }),
      n.d(e, "t", function() {
        return k;
      }),
      n.d(e, "u", function() {
        return y;
      }),
      n.d(e, "v", function() {
        return P;
      });
    var r = "publishQuestion",
      c = "deleteQuestion",
      a = "editQuestion",
      o = "addTagToQuestion",
      i = "removeTagFromQuestion",
      u = "resetQuestionState",
      s = "checkAuth",
      l = "createComment",
      f = "destroyComment",
      d = "addFavorite",
      m = "removeFavorite",
      p = "fetchQuestion",
      h = "fetchQuestions",
      b = "fetchComments",
      v = "fetchProfile",
      g = "fetchProfileFollow",
      O = "fetchProfileUnfollow",
      w = "fetchTags",
      j = "login",
      k = "logout",
      y = "register",
      P = "updateUser";
  }
});
//# sourceMappingURL=app.125bb6bd.js.map