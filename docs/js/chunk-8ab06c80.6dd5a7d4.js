(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-8ab06c80"],
  {
    "1af6": function(t, e, r) {
      var n = r("63b6");
      n(n.S, "Array", { isArray: r("9003") });
    },
    "20fd": function(t, e, r) {
      "use strict";
      var n = r("d9f6"),
        i = r("aebd");
      t.exports = function(t, e, r) {
        e in t ? n.f(t, e, i(0, r)) : (t[e] = r);
      };
    },
    "549b": function(t, e, r) {
      "use strict";
      var n = r("d864"),
        i = r("63b6"),
        a = r("241e"),
        s = r("b0dc"),
        o = r("3702"),
        c = r("b447"),
        u = r("20fd"),
        l = r("7cd6");
      i(
        i.S +
          i.F *
            !r("4ee1")(function(t) {
              Array.from(t);
            }),
        "Array",
        {
          from: function(t) {
            var e,
              r,
              i,
              f,
              p = a(t),
              h = "function" == typeof this ? this : Array,
              g = arguments.length,
              d = g > 1 ? arguments[1] : void 0,
              v = void 0 !== d,
              b = 0,
              y = l(p);
            if (
              (v && (d = n(d, g > 2 ? arguments[2] : void 0, 2)),
              void 0 == y || (h == Array && o(y)))
            )
              for (e = c(p.length), r = new h(e); e > b; b++)
                u(r, b, v ? d(p[b], b) : p[b]);
            else
              for (f = y.call(p), r = new h(); !(i = f.next()).done; b++)
                u(r, b, v ? s(f, d, [i.value, b], !0) : i.value);
            return (r.length = b), r;
          }
        }
      );
    },
    "54a1": function(t, e, r) {
      r("6c1c"), r("1654"), (t.exports = r("95d5"));
    },
    "5dbc": function(t, e, r) {
      var n = r("d3f4"),
        i = r("8b97").set;
      t.exports = function(t, e, r) {
        var a,
          s = e.constructor;
        return (
          s !== r &&
            "function" == typeof s &&
            (a = s.prototype) !== r.prototype &&
            n(a) &&
            i &&
            i(t, a),
          t
        );
      };
    },
    "64e5": function(t, e, r) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", [
            t.isLoading
              ? r("div", { staticClass: "question-preview" }, [
                  t._v("Loading questions...")
                ])
              : r(
                  "div",
                  [
                    0 === t.questions.length
                      ? r("div", { staticClass: "question-preview" }, [
                          t._v("\n      No questions are here... yet.\n    ")
                        ])
                      : t._e(),
                    t._l(t.questions, function(t, e) {
                      return r("RwvQuestionPreview", {
                        key: t.title + e,
                        attrs: { question: t }
                      });
                    }),
                    r("VPagination", {
                      attrs: { pages: t.pages, currentPage: t.currentPage },
                      on: {
                        "update:currentPage": function(e) {
                          t.currentPage = e;
                        },
                        "update:current-page": function(e) {
                          t.currentPage = e;
                        }
                      }
                    })
                  ],
                  2
                )
          ]);
        },
        i = [],
        a = (r("8e6e"), r("456d"), r("ac6a"), r("a745")),
        s = r.n(a);
      function o(t) {
        if (s()(t)) {
          for (var e = 0, r = new Array(t.length); e < t.length; e++)
            r[e] = t[e];
          return r;
        }
      }
      var c = r("774e"),
        u = r.n(c),
        l = r("c8bb"),
        f = r.n(l);
      function p(t) {
        if (
          f()(Object(t)) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return u()(t);
      }
      function h() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function g(t) {
        return o(t) || p(t) || h();
      }
      var d = r("bd86"),
        v = (r("c5f6"), r("2f62")),
        b = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            { staticClass: "question-preview" },
            [
              r(
                "router-link",
                { staticClass: "preview-link", attrs: { to: t.questionLink } },
                [
                  r("h1", { domProps: { textContent: t._s(t.question.title) } }),
                  r("TagList", { attrs: { tags: t.question.tagList } })
                ],
                1
              ),
              r("RwvQuestionMeta", {
                attrs: { isPreview: "", question: t.question }
              })
            ],
            1
          );
        },
        y = [],
        m = r("f1f8"),
        P = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "ul",
            { staticClass: "tag-list" },
            t._l(t.tags, function(e, n) {
              return r(
                "li",
                { key: n, staticClass: "tag-default tag-pill tag-outline" },
                [r("span", { domProps: { textContent: t._s(e) } })]
              );
            }),
            0
          );
        },
        O = [],
        w = { name: "TagList", props: { tags: Array } },
        A = w,
        _ = r("2877"),
        j = Object(_["a"])(A, P, O, !1, null, null, null),
        C = j.exports,
        x = {
          name: "RwvQuestionPreview",
          components: { RwvQuestionMeta: m["a"], TagList: C },
          props: { question: { type: Object, required: !0 } },
          computed: {
            questionLink: function() {
              return { name: "question", params: { slug: this.question.slug } };
            }
          }
        },
        k = x,
        E = Object(_["a"])(k, b, y, !1, null, null, null),
        N = E.exports,
        I = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("nav", [
            r(
              "ul",
              { staticClass: "pagination" },
              t._l(t.pages, function(e) {
                return r(
                  "li",
                  {
                    key: e,
                    class: t.paginationClass(e),
                    attrs: { "data-test": "page-link-" + e },
                    on: {
                      click: function(r) {
                        return r.preventDefault(), t.changePage(e);
                      }
                    }
                  },
                  [
                    r("a", {
                      staticClass: "page-link",
                      attrs: { href: "" },
                      domProps: { textContent: t._s(e) }
                    })
                  ]
                );
              }),
              0
            )
          ]);
        },
        S = [],
        L = {
          name: "Pagination",
          props: {
            pages: { type: Array, required: !0 },
            currentPage: { type: Number, required: !0 }
          },
          methods: {
            changePage: function(t) {
              t !== this.currentPage && this.$emit("update:currentPage", t);
            },
            paginationClass: function(t) {
              return { "page-item": !0, active: this.currentPage === t };
            }
          }
        },
        F = L,
        $ = Object(_["a"])(F, I, S, !1, null, null, null),
        R = $.exports,
        D = r("6c33");
      function q(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function M(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? q(r, !0).forEach(function(e) {
                Object(d["a"])(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : q(r).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var T = {
          name: "RwvQuestionList",
          components: { RwvQuestionPreview: N, VPagination: R },
          props: {
            type: { type: String, required: !1, default: "all" },
            author: { type: String, required: !1 },
            tag: { type: String, required: !1 },
            favorited: { type: String, required: !1 },
            itemsPerPage: { type: Number, required: !1, default: 10 }
          },
          data: function() {
            return { currentPage: 1 };
          },
          computed: M(
            {
              listConfig: function() {
                var t = this.type,
                  e = {
                    offset: (this.currentPage - 1) * this.itemsPerPage,
                    limit: this.itemsPerPage
                  };
                return (
                  this.author && (e.author = this.author),
                  this.tag && (e.tag = this.tag),
                  this.favorited && (e.favorited = this.favorited),
                  { type: t, filters: e }
                );
              },
              pages: function() {
                return this.isLoading || this.questionsCount <= this.itemsPerPage
                  ? []
                  : this.questionsCount
                  ? g(
                      Array(
                        Math.ceil(this.questionsCount / this.itemsPerPage)
                      ).keys()
                    ).map(function(t) {
                      return t + 1;
                    })
                  : [];
              }
            },
            Object(v["b"])(["questionsCount", "isLoading", "questions"])
          ),
          watch: {
            currentPage: function(t) {
              (this.listConfig.filters.offset = (t - 1) * this.itemsPerPage),
                this.fetchQuestions();
            },
            type: function() {
              this.resetPagination(), this.fetchQuestions();
            },
            author: function() {
              this.resetPagination(), this.fetchQuestions();
            },
            tag: function() {
              this.resetPagination(), this.fetchQuestions();
            },
            favorited: function() {
              this.resetPagination(), this.fetchQuestions();
            }
          },
          mounted: function() {
            this.fetchQuestions();
          },
          methods: {
            fetchQuestions: function() {
              this.$store.dispatch(D["m"], this.listConfig);
            },
            resetPagination: function() {
              (this.listConfig.offset = 0), (this.currentPage = 1);
            }
          }
        },
        U = T,
        V = Object(_["a"])(U, n, i, !1, null, null, null);
      e["a"] = V.exports;
    },
    "774e": function(t, e, r) {
      t.exports = r("d2d5");
    },
    "8b97": function(t, e, r) {
      var n = r("d3f4"),
        i = r("cb7c"),
        a = function(t, e) {
          if ((i(t), !n(e) && null !== e))
            throw TypeError(e + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function(t, e, n) {
                try {
                  (n = r("9b43")(
                    Function.call,
                    r("11e9").f(Object.prototype, "__proto__").set,
                    2
                  )),
                    n(t, []),
                    (e = !(t instanceof Array));
                } catch (i) {
                  e = !0;
                }
                return function(t, r) {
                  return a(t, r), e ? (t.__proto__ = r) : n(t, r), t;
                };
              })({}, !1)
            : void 0),
        check: a
      };
    },
    9003: function(t, e, r) {
      var n = r("6b4c");
      t.exports =
        Array.isArray ||
        function(t) {
          return "Array" == n(t);
        };
    },
    "95d5": function(t, e, r) {
      var n = r("40c3"),
        i = r("5168")("iterator"),
        a = r("481b");
      t.exports = r("584a").isIterable = function(t) {
        var e = Object(t);
        return void 0 !== e[i] || "@@iterator" in e || a.hasOwnProperty(n(e));
      };
    },
    a745: function(t, e, r) {
      t.exports = r("f410");
    },
    aa77: function(t, e, r) {
      var n = r("5ca1"),
        i = r("be13"),
        a = r("79e5"),
        s = r("fdef"),
        o = "[" + s + "]",
        c = "​",
        u = RegExp("^" + o + o + "*"),
        l = RegExp(o + o + "*$"),
        f = function(t, e, r) {
          var i = {},
            o = a(function() {
              return !!s[t]() || c[t]() != c;
            }),
            u = (i[t] = o ? e(p) : s[t]);
          r && (i[r] = u), n(n.P + n.F * o, "String", i);
        },
        p = (f.trim = function(t, e) {
          return (
            (t = String(i(t))),
            1 & e && (t = t.replace(u, "")),
            2 & e && (t = t.replace(l, "")),
            t
          );
        });
      t.exports = f;
    },
    c5f6: function(t, e, r) {
      "use strict";
      var n = r("7726"),
        i = r("69a8"),
        a = r("2d95"),
        s = r("5dbc"),
        o = r("6a99"),
        c = r("79e5"),
        u = r("9093").f,
        l = r("11e9").f,
        f = r("86cc").f,
        p = r("aa77").trim,
        h = "Number",
        g = n[h],
        d = g,
        v = g.prototype,
        b = a(r("2aeb")(v)) == h,
        y = "trim" in String.prototype,
        m = function(t) {
          var e = o(t, !1);
          if ("string" == typeof e && e.length > 2) {
            e = y ? e.trim() : p(e, 3);
            var r,
              n,
              i,
              a = e.charCodeAt(0);
            if (43 === a || 45 === a) {
              if (((r = e.charCodeAt(2)), 88 === r || 120 === r)) return NaN;
            } else if (48 === a) {
              switch (e.charCodeAt(1)) {
                case 66:
                case 98:
                  (n = 2), (i = 49);
                  break;
                case 79:
                case 111:
                  (n = 8), (i = 55);
                  break;
                default:
                  return +e;
              }
              for (var s, c = e.slice(2), u = 0, l = c.length; u < l; u++)
                if (((s = c.charCodeAt(u)), s < 48 || s > i)) return NaN;
              return parseInt(c, n);
            }
          }
          return +e;
        };
      if (!g(" 0o1") || !g("0b1") || g("+0x1")) {
        g = function(t) {
          var e = arguments.length < 1 ? 0 : t,
            r = this;
          return r instanceof g &&
            (b
              ? c(function() {
                  v.valueOf.call(r);
                })
              : a(r) != h)
            ? s(new d(m(e)), r, g)
            : m(e);
        };
        for (
          var P,
            O = r("9e1e")
              ? u(d)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            w = 0;
          O.length > w;
          w++
        )
          i(d, (P = O[w])) && !i(g, P) && f(g, P, l(d, P));
        (g.prototype = v), (v.constructor = g), r("2aba")(n, h, g);
      }
    },
    c8bb: function(t, e, r) {
      t.exports = r("54a1");
    },
    d2d5: function(t, e, r) {
      r("1654"), r("549b"), (t.exports = r("584a").Array.from);
    },
    f1f8: function(t, e, r) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            { staticClass: "question-meta" },
            [
              r("div", { staticClass: "info" }, [
                r("span", { staticClass: "date" }, [
                  t._v(t._s(t._f("date")(t.question.createdAt)))
                ])
              ]),
              t.actions
                ? r("rwv-question-actions", {
                    attrs: { question: t.question, canModify: t.isCurrentUser() }
                  })
                : r(
                    "button",
                    {
                      staticClass: "btn btn-sm pull-xs-right",
                      class: {
                        "btn-primary": t.question.favorited,
                        "btn-outline-primary": !t.question.favorited
                      },
                      on: { click: t.toggleFavorite }
                    },
                    [
                      r("i", { staticClass: "ion-heart" }),
                      r("span", { staticClass: "counter" }, [
                        t._v(" " + t._s(t.question.favoritesCount) + " ")
                      ])
                    ]
                  )
            ],
            1
          );
        },
        i = [],
        a = (r("8e6e"), r("ac6a"), r("456d"), r("bd86")),
        s = r("2f62"),
        o = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return t.canModify
            ? r(
                "span",
                [
                  r(
                    "router-link",
                    {
                      staticClass: "btn btn-sm btn-outline-secondary",
                      attrs: { to: t.editQuestionLink }
                    },
                    [
                      r("i", { staticClass: "ion-edit" }),
                      r("span", [t._v(" Edit")])
                    ]
                  ),
                  r("span", [t._v("  ")]),
                  r(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger btn-sm",
                      on: { click: t.deleteQuestion }
                    },
                    [
                      r("i", { staticClass: "ion-trash-a" }),
                      r("span", [t._v(" Delete")])
                    ]
                  )
                ],
                1
              )
            : r("span", [
                r(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-outline-secondary",
                    on: { click: t.toggleFollow }
                  },
                  [
                    r("i", { staticClass: "ion-plus-round" }),
                    r("span", [t._v(" ")]),
                    r("span", {
                      domProps: { textContent: t._s(t.followUserLabel) }
                    })
                  ]
                ),
                r("span", [t._v("  ")]),
                r(
                  "button",
                  {
                    staticClass: "btn btn-sm",
                    class: t.toggleFavoriteButtonClasses,
                    on: { click: t.toggleFavorite }
                  },
                  [
                    r("i", { staticClass: "ion-heart" }),
                    r("span", [t._v(" ")]),
                    r("span", {
                      domProps: { textContent: t._s(t.favoriteQuestionLabel) }
                    }),
                    r("span", [t._v(" ")]),
                    r("span", {
                      staticClass: "counter",
                      domProps: { textContent: t._s(t.favoriteCounter) }
                    })
                  ]
                )
              ]);
        },
        c = [],
        u = (r("96cf"), r("3b8d")),
        l = r("6c33");
      function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(r, !0).forEach(function(e) {
                Object(a["a"])(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f(r).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var h = {
          name: "RwvQuestionActions",
          props: {
            question: { type: Object, required: !0 },
            canModify: { type: Boolean, required: !0 }
          },
          computed: p({}, Object(s["b"])(["profile", "isAuthenticated"]), {
            editQuestionLink: function() {
              return {
                name: "question-edit",
                params: { slug: this.question.slug }
              };
            },
            toggleFavoriteButtonClasses: function() {
              return {
                "btn-primary": this.question.favorited,
                "btn-outline-primary": !this.question.favorited
              };
            },
            followUserLabel: function() {
              return ""
                .concat(this.profile.following ? "Unfollow" : "Follow", " ")
                .concat(this.question.author.username);
            },
            favoriteQuestionLabel: function() {
              return this.question.favorited
                ? "Unfavorite Question"
                : "Favorite Question";
            },
            favoriteCounter: function() {
              return "(".concat(this.question.favoritesCount, ")");
            }
          }),
          methods: {
            toggleFavorite: function() {
              if (this.isAuthenticated) {
                var t = this.question.favorited ? l["k"] : l["j"];
                this.$store.dispatch(t, this.question.slug);
              } else this.$router.push({ name: "login" });
            },
            toggleFollow: function() {
              if (this.isAuthenticated) {
                var t = this.question.following ? l["q"] : l["p"];
                this.$store.dispatch(t, { username: this.profile.username });
              } else this.$router.push({ name: "login" });
            },
            deleteQuestion: (function() {
              var t = Object(u["a"])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              this.$store.dispatch(l["a"], this.question.slug)
                            );
                          case 3:
                            this.$router.push("/"), (t.next = 9);
                            break;
                          case 6:
                            (t.prev = 6),
                              (t.t0 = t["catch"](0)),
                              console.error(t.t0);
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[0, 6]]
                  );
                })
              );
              function e() {
                return t.apply(this, arguments);
              }
              return e;
            })()
          }
        },
        g = h,
        d = r("2877"),
        v = Object(d["a"])(g, o, c, !1, null, null, null),
        b = v.exports;
      function y(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(r, !0).forEach(function(e) {
                Object(a["a"])(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : y(r).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var P = {
          name: "RwvQuestionMeta",
          components: { RwvQuestionActions: b },
          props: {
            question: { type: Object, required: !0 },
            actions: { type: Boolean, required: !1, default: !1 }
          },
          computed: m({}, Object(s["b"])(["currentUser", "isAuthenticated"])),
          methods: {
            isCurrentUser: function() {
              return (
                !(
                  !this.currentUser.username || !this.question.author.username
                ) && this.currentUser.username === this.question.author.username
              );
            },
            toggleFavorite: function() {
              if (this.isAuthenticated) {
                var t = this.question.favorited ? l["k"] : l["j"];
                this.$store.dispatch(t, this.question.slug);
              } else this.$router.push({ name: "login" });
            }
          }
        },
        O = P,
        w = Object(d["a"])(O, n, i, !1, null, null, null);
      e["a"] = w.exports;
    },
    f410: function(t, e, r) {
      r("1af6"), (t.exports = r("584a").Array.isArray);
    },
    fdef: function(t, e) {
      t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
    }
  }
]);
//# sourceMappingURL=chunk-8ab06c80.6dd5a7d4.js.map