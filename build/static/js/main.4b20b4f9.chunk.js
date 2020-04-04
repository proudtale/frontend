(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    117: function (e, t, a) {
      e.exports = a.p + "static/media/no-img.6732bd42.png";
    },
    118: function (e, t, a) {
      e.exports = a.p + "static/media/icon.a5eb20a3.png";
    },
    306: function (e, t, a) {
      e.exports = a(596);
    },
    311: function (e, t, a) {},
    596: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        r = a.n(n),
        l = a(30),
        c = a.n(l),
        o = a(9),
        i = a(10),
        s = a(12),
        m = a(11),
        u = a(13),
        d = a(16),
        p = a(53),
        h = (a(311), a(158)),
        E = a.n(h),
        b = a(87),
        f = a.n(b),
        g = a(228),
        y = a.n(g),
        v = a(15),
        O = a(59),
        j = a(230),
        C = a(89),
        S = a(8),
        N = {
          authenticated: !1,
          loading: !1,
          credentials: {},
          likes: [],
          notifications: [],
        },
        k = { screams: [], scream: {}, loading: !1, edit: !1 },
        w = { loading: !1, errors: null },
        I = [j.a],
        x = Object(O.c)({
          user: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : N,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SET_AUTHENTICATED":
                return Object(S.a)({}, e, { authenticated: !0 });
              case "SET_UNAUTHENTICATED":
                return N;
              case "SET_USER":
                return Object(S.a)(
                  { authenticated: !0, loading: !1 },
                  t.payload
                );
              case "LOADING_USER":
                return Object(S.a)({}, e, { loading: !0 });
              case "LIKE_SCREAM":
                return Object(S.a)({}, e, {
                  likes: [].concat(Object(C.a)(e.likes), [
                    {
                      userHandle: e.credentials.handle,
                      screamId: t.payload.screamId,
                    },
                  ]),
                });
              case "UNLIKE_SCREAM":
                return Object(S.a)({}, e, {
                  likes: e.likes.filter(function (e) {
                    return e.screamId !== t.payload.screamId;
                  }),
                });
              case "MARK_NOTIFICATIONS_READ":
                return (
                  e.notifications.forEach(function (e) {
                    return (e.read = !0);
                  }),
                  Object(S.a)({}, e)
                );
              default:
                return e;
            }
          },
          data: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : k,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "LOADING_DATA":
                return Object(S.a)({}, e, { loading: !0 });
              case "SET_SCREAMS":
                return Object(S.a)({}, e, { screams: t.payload, loading: !1 });
              case "SET_SCREAM":
                return Object(S.a)({}, e, { scream: t.payload });
              case "EDIT_SCREAM":
                return Object(S.a)({}, e, { edit: !e.edit });
              case "SUBMIT_EDIT":
                return Object(S.a)({}, e, { scream: t.payload, edit: !1 });
              case "LIKE_SCREAM":
              case "UNLIKE_SCREAM":
                var a = e.screams.findIndex(function (e) {
                  return e.screamId === t.payload.screamId;
                });
                return (
                  (e.screams[a] = t.payload),
                  e.scream.screamId === t.payload.screamId &&
                    (e.scream = t.payload),
                  Object(S.a)({}, e)
                );
              case "DELETE_SCREAM":
                return (
                  (a = e.screams.findIndex(function (e) {
                    return e.screamId === t.payload;
                  })),
                  e.screams.splice(a, 1),
                  Object(S.a)({}, e)
                );
              case "POST_SCREAM":
                return Object(S.a)({}, e, {
                  screams: [t.payload].concat(Object(C.a)(e.screams)),
                });
              case "SUBMIT_COMMENT":
                return Object(S.a)({}, e, {
                  scream: Object(S.a)({}, e.scream, {
                    comments: [t.payload].concat(
                      Object(C.a)(e.scream.comments)
                    ),
                  }),
                });
              default:
                return e;
            }
          },
          UI: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : w,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SET_ERRORS":
                return Object(S.a)({}, e, { loading: !1, errors: t.payload });
              case "CLEAR_ERRORS":
                return Object(S.a)({}, e, { loading: !1, errors: null });
              case "LOADING_UI":
                return Object(S.a)({}, e, { loading: !0 });
              case "STOP_LOADING_UI":
                return Object(S.a)({}, e, { loading: !1 });
              default:
                return e;
            }
          },
        }),
        T = ("object" === typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
          : O.d)(O.a.apply(void 0, I)),
        R = Object(O.e)(x, {}, T),
        A = a(28),
        _ = a.n(A),
        U = function () {
          return function (e) {
            localStorage.removeItem("FBIdToken"),
              delete _.a.defaults.headers.common.Authorization,
              e({ type: "SET_UNAUTHENTICATED" });
          };
        },
        L = function () {
          return function (e) {
            e({ type: "LOADING_USER" }),
              _.a
                .get("/user")
                .then(function (t) {
                  e({ type: "SET_USER", payload: t.data });
                })
                .catch(function (e) {
                  return console.log(e);
                });
          };
        },
        M = function (e) {
          var t = "Bearer ".concat(e);
          localStorage.setItem("FBIdToken", t),
            (_.a.defaults.headers.common.Authorization = t);
        },
        D = a(65),
        F = a.n(D),
        P = a(57),
        B = a.n(P),
        W = function (e) {
          var t = e.children,
            a = e.onClick,
            n = e.tip,
            l = e.btnClassName,
            c = e.tipClassName;
          return r.a.createElement(
            F.a,
            { title: n, className: c, placement: "top" },
            r.a.createElement(B.a, { onClick: a, className: l }, t)
          );
        },
        Y = a(4),
        H = a.n(Y),
        z = a(32),
        G = a.n(z),
        V = a(42),
        K = a.n(V),
        X = a(52),
        J = a.n(X),
        q = a(51),
        $ = a.n(q),
        Q = a(232),
        Z = a.n(Q),
        ee = a(113),
        te = a.n(ee),
        ae = function () {
          return function (e) {
            e({ type: "LOADING_DATA" }),
              _.a
                .get("/screams")
                .then(function (t) {
                  e({ type: "SET_SCREAMS", payload: t.data });
                })
                .catch(function (t) {
                  e({ type: "SET_SCREAMS", payload: [] });
                });
          };
        },
        ne = function (e) {
          return function (t) {
            t({ type: "LOADING_UI" }),
              _.a
                .get("/scream/".concat(e))
                .then(function (e) {
                  t({ type: "SET_SCREAM", payload: e.data }),
                    t({ type: "STOP_LOADING_UI" });
                })
                .catch(function (e) {
                  return console.log(e);
                });
          };
        },
        re = function () {
          return function (e) {
            e({ type: "CLEAR_ERRORS" });
          };
        },
        le = a(29),
        ce = a(27),
        oe = a.n(ce),
        ie = a(41),
        se = a.n(ie),
        me = a(231),
        ue = a.n(me),
        de =
          (a(506),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(o.a)(this, t),
                ((a = Object(s.a)(
                  this,
                  Object(m.a)(t).call(this, e)
                )).handleClick = function (e) {
                  if (a.props.data.edit) {
                    e.preventDefault();
                    var t = a.props.scream;
                    (t.body = a.state.editorHtml), a.props.submitEdit(t);
                  } else a.props.setValue(a.state.editorHtml);
                }),
                (a.state = {
                  editorHtml: a.props.scream ? a.props.scream.body : "",
                  theme: "snow",
                }),
                (a.handleChange = a.handleChange.bind(
                  Object(le.a)(Object(le.a)(a))
                )),
                a
              );
            }
            return (
              Object(u.a)(t, e),
              Object(i.a)(t, [
                {
                  key: "handleChange",
                  value: function (e) {
                    this.setState({ editorHtml: e });
                  },
                },
                {
                  key: "handleThemeChange",
                  value: function (e) {
                    "core" === e && (e = null), this.setState({ theme: e });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      a = e.classes,
                      n = e.UI.loading;
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(ue.a, {
                        theme: this.state.theme,
                        onChange: this.handleChange,
                        value: this.state.editorHtml,
                        modules: t.modules,
                        formats: t.formats,
                        placeholder: this.props.placeholder,
                      }),
                      r.a.createElement(
                        oe.a,
                        {
                          type: "submit",
                          variant: "contained",
                          color: "primary",
                          className: a.submitButton,
                          disabled: n,
                          onClick: this.handleClick,
                        },
                        "Submit",
                        n &&
                          r.a.createElement(se.a, {
                            size: 30,
                            className: a.progressSpinner,
                          })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component));
      (de.modules = {
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
        clipboard: { matchVisual: !1 },
      }),
        (de.formats = [
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
        ]);
      var pe = Object(v.b)(
          function (e) {
            return { data: e.data, UI: e.UI };
          },
          {
            getScreams: ae,
            submitEdit: function (e) {
              return function (t) {
                t({ type: "LOADING_UI" }),
                  _.a
                    .post("/scream/".concat(e.screamId, "/edit"), e)
                    .then(function (a) {
                      t({ type: "SUBMIT_EDIT", payload: a.data }),
                        t(ne(e.screamId));
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              };
            },
          }
        )(
          H()({
            submitButton: {
              position: "relative",
              float: "right",
              marginTop: 10,
            },
          })(de)
        ),
        he = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { open: !1, title: "", value: "", errors: {} }),
              (a.setValue = function (e) {
                a.setState({ value: e });
              }),
              (a.handleOpen = function () {
                a.setState({ open: !0 });
              }),
              (a.handleClose = function () {
                a.props.clearErrors(), a.setState({ open: !1, errors: {} });
              }),
              (a.handleChange = function (e) {
                a.setState({ title: e.target.value });
              }),
              (a.handleSubmit = function (e) {
                e.preventDefault(),
                  a.props.postScream({
                    title: a.state.title,
                    body: a.state.value,
                  });
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  e.UI.errors && this.setState({ errors: e.UI.errors }),
                    e.UI.errors ||
                      e.UI.loading ||
                      this.setState({
                        title: "",
                        value: "",
                        open: !1,
                        errors: {},
                      });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.errors,
                    t = this.props.classes;
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      W,
                      { onClick: this.handleOpen, tip: "Create book" },
                      r.a.createElement(Z.a, null)
                    ),
                    r.a.createElement(
                      K.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        fullWidth: !0,
                        maxWidth: "sm",
                      },
                      r.a.createElement(
                        W,
                        {
                          tip: "Close",
                          onClick: this.handleClose,
                          tipClassName: t.closeButton,
                        },
                        r.a.createElement(te.a, null)
                      ),
                      r.a.createElement($.a, null, "Publish your new book"),
                      r.a.createElement(
                        J.a,
                        null,
                        r.a.createElement(
                          "form",
                          { onSubmit: this.handleSubmit },
                          r.a.createElement(G.a, {
                            name: "title",
                            type: "text",
                            label: "Title",
                            multiline: !0,
                            placeholder: "Title of your book",
                            error: !!e.body,
                            helperText: e.body,
                            className: t.textField,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(pe, {
                            type: "text",
                            label: "Body",
                            multiline: !0,
                            rows: "3",
                            error: !!e.body,
                            setValue: this.setValue,
                          })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Ee = Object(v.b)(
          function (e) {
            return { UI: e.UI };
          },
          {
            postScream: function (e) {
              return function (t) {
                t({ type: "LOADING_UI" }),
                  _.a
                    .post("/scream", e)
                    .then(function (e) {
                      t({ type: "POST_SCREAM", payload: e.data }), t(re());
                    })
                    .catch(function (e) {
                      t({ type: "SET_ERRORS", payload: e.response.data });
                    });
              };
            },
            clearErrors: re,
          }
        )(
          H()(function (e) {
            return Object(S.a)({}, e.spread, {
              progressSpinner: { position: "absolute" },
              closeButton: { position: "absolute", left: "91%", top: "6%" },
            });
          })(he)
        ),
        be = a(35),
        fe = a.n(be),
        ge = a(114),
        ye = a.n(ge),
        ve = a(109),
        Oe = a.n(ve),
        je = a(88),
        Ce = a.n(je),
        Se = a(18),
        Ne = a.n(Se),
        ke = a(108),
        we = a.n(ke),
        Ie = a(119),
        xe = a.n(Ie),
        Te = a(115),
        Re = a.n(Te),
        Ae = a(72),
        _e = a.n(Ae),
        Ue = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { anchorEl: null }),
              (a.handleOpen = function (e) {
                a.setState({ anchorEl: e.target });
              }),
              (a.handleClose = function () {
                a.setState({ anchorEl: null });
              }),
              (a.onMenuOpened = function () {
                var e = a.props.notifications
                  .filter(function (e) {
                    return !e.read;
                  })
                  .map(function (e) {
                    return e.notificationId;
                  });
                a.props.markNotificationsRead(e);
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this,
                    a = this.props.notifications,
                    l = this.state.anchorEl;
                  fe.a.extend(ye.a),
                    (e =
                      a &&
                      a.length > 0 &&
                      a.filter(function (e) {
                        return !1 === e.read;
                      }).length > 0
                        ? r.a.createElement(
                            we.a,
                            {
                              badgeContent: a.filter(function (e) {
                                return !1 === e.read;
                              }).length,
                              color: "secondary",
                            },
                            r.a.createElement(xe.a, null)
                          )
                        : r.a.createElement(xe.a, null));
                  var c =
                    a && a.length > 0
                      ? a.map(function (e) {
                          var a = "like" === e.type ? "liked" : "commented on",
                            n = fe()(e.createdAt).fromNow(),
                            l = e.read ? "primary" : "secondary",
                            c =
                              "like" === e.type
                                ? r.a.createElement(Re.a, {
                                    color: l,
                                    style: { marginRight: 10 },
                                  })
                                : r.a.createElement(_e.a, {
                                    color: l,
                                    style: { marginRight: 10 },
                                  });
                          return r.a.createElement(
                            Ce.a,
                            { key: e.createdAt, onClick: t.handleClose },
                            c,
                            r.a.createElement(
                              Ne.a,
                              {
                                component: d.b,
                                color: "default",
                                variant: "body1",
                                to: "/users/"
                                  .concat(e.recipient, "/scream/")
                                  .concat(e.screamId),
                              },
                              e.sender,
                              " ",
                              a,
                              " your scream ",
                              n
                            )
                          );
                        })
                      : r.a.createElement(
                          Ce.a,
                          { onClick: this.handleClose },
                          "You have no notifications yet"
                        );
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      F.a,
                      { placement: "top", title: "Notifications" },
                      r.a.createElement(
                        B.a,
                        {
                          "aria-owns": l ? "simple-menu" : void 0,
                          "aria-haspopup": "true",
                          onClick: this.handleOpen,
                        },
                        e
                      )
                    ),
                    r.a.createElement(
                      Oe.a,
                      {
                        anchorEl: l,
                        open: Boolean(l),
                        onClose: this.handleClose,
                        onEntered: this.onMenuOpened,
                      },
                      c
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Le = Object(v.b)(
          function (e) {
            return { notifications: e.user.notifications };
          },
          {
            markNotificationsRead: function (e) {
              return function (t) {
                _.a
                  .post("/notifications", e)
                  .then(function (e) {
                    t({ type: "MARK_NOTIFICATIONS_READ" });
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              };
            },
          }
        )(Ue),
        Me = a(110),
        De = a.n(Me),
        Fe = a(111),
        Pe = a.n(Fe),
        Be = a(162),
        We = a.n(Be),
        Ye = a(234),
        He = a.n(Ye),
        ze = a(236),
        Ge = a.n(ze),
        Ve = a(237),
        Ke = a.n(Ve),
        Xe = a(235),
        Je = a.n(Xe),
        qe = a(238),
        $e = a.n(qe),
        Qe = a(233),
        Ze = a.n(Qe),
        et = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).handleLogout = function () {
                a.props.logoutUser();
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    a = e.credentials,
                    l = a.imageUrl,
                    c = a.handle,
                    o = e.authenticated;
                  return r.a.createElement(
                    De.a,
                    null,
                    r.a.createElement(
                      Pe.a,
                      {
                        className:
                          "nav-container mdb-color darken-3 d-flex justify-content-between",
                      },
                      r.a.createElement(
                        "div",
                        { className: "d-flex" },
                        r.a.createElement(
                          d.b,
                          { to: "/" },
                          r.a.createElement("img", {
                            height: "60",
                            widht: "60",
                            src: "/proudtalelog.png",
                            alt: "proudetale",
                          })
                        ),
                        r.a.createElement(
                          "h4",
                          { className: t.navbarTitle },
                          "proudtale"
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "navNarrow" },
                        r.a.createElement(Ze.a, { className: "menuIcon" })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "navWide" },
                        o
                          ? r.a.createElement(
                              n.Fragment,
                              null,
                              r.a.createElement(
                                "h4",
                                { className: t.navbarHandle },
                                c
                              ),
                              r.a.createElement("img", {
                                src: l,
                                alt: "profile",
                                className: t.navbarImage,
                              }),
                              r.a.createElement(Ee, null),
                              r.a.createElement(Le, { tip: "Notification" }),
                              r.a.createElement(
                                d.b,
                                { to: "/" },
                                r.a.createElement(
                                  W,
                                  { tip: "Home" },
                                  r.a.createElement(We.a, null)
                                )
                              ),
                              r.a.createElement(
                                d.b,
                                { to: "community" },
                                r.a.createElement(
                                  W,
                                  { tip: "Community" },
                                  r.a.createElement(He.a, null)
                                )
                              ),
                              r.a.createElement(
                                W,
                                { tip: "Logout", onClick: this.handleLogout },
                                r.a.createElement(Je.a, { color: "primary" })
                              )
                            )
                          : r.a.createElement(
                              n.Fragment,
                              null,
                              r.a.createElement(
                                oe.a,
                                null,
                                r.a.createElement(Ge.a, null)
                              ),
                              r.a.createElement(
                                oe.a,
                                null,
                                r.a.createElement(Ke.a, null)
                              ),
                              r.a.createElement(
                                d.b,
                                { to: "/" },
                                r.a.createElement(
                                  W,
                                  { tip: "Home" },
                                  r.a.createElement(We.a, null)
                                )
                              ),
                              r.a.createElement(
                                d.b,
                                { to: "login" },
                                r.a.createElement(
                                  W,
                                  { tip: "Login" },
                                  r.a.createElement($e.a, null)
                                )
                              )
                            )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        tt = { logoutUser: U },
        at = Object(v.b)(function (e) {
          return {
            credentials: e.user.credentials,
            authenticated: e.user.authenticated,
          };
        }, tt)(
          H()(function (e) {
            return Object(S.a)({}, e.spread, {
              navbarImage: { width: 50, height: 50, borderRadius: "10%" },
              navbarHandle: {
                display: "inline",
                fontWeight: "bolder",
                margin: "2em 0.7em 0 0",
              },
              navbarTitle: { marginTop: "0.9em", fontFamily: "cursive" },
            });
          })(et)
        ),
        nt = a(239),
        rt = Object(v.b)(function (e) {
          return { authenticated: e.user.authenticated };
        })(function (e) {
          var t = e.component,
            a = e.authenticated,
            n = Object(nt.a)(e, ["component", "authenticated"]);
          return r.a.createElement(
            p.b,
            Object.assign({}, n, {
              render: function (e) {
                return !0 === a
                  ? r.a.createElement(p.a, { to: "/" })
                  : r.a.createElement(t, e);
              },
            })
          );
        }),
        lt = a(54),
        ct = (function (e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    lt.e,
                    {
                      color: "mdb-color darken-3",
                      className: "font-small pt-4 mt-4",
                    },
                    r.a.createElement(
                      lt.d,
                      { fluid: !0 },
                      r.a.createElement(
                        lt.i,
                        { className: "justify-content-center" },
                        r.a.createElement(
                          lt.c,
                          { md: "3" },
                          r.a.createElement(
                            "h5",
                            { className: "title font-weight-bolder" },
                            "Navigation"
                          ),
                          r.a.createElement(
                            "ul",
                            { className: "pl-0" },
                            r.a.createElement(
                              "li",
                              { className: "list-unstyled" },
                              r.a.createElement("a", { href: "#!" }, "Home")
                            ),
                            r.a.createElement(
                              "li",
                              { className: "list-unstyled" },
                              r.a.createElement("a", { href: "#!" }, "Register")
                            ),
                            r.a.createElement(
                              "li",
                              { className: "list-unstyled" },
                              r.a.createElement("a", { href: "#!" }, "Signin")
                            ),
                            r.a.createElement(
                              "li",
                              { className: "list-unstyled" },
                              r.a.createElement(
                                "a",
                                { href: "#!" },
                                "Contact Information"
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          lt.c,
                          { md: "3" },
                          r.a.createElement(
                            "h5",
                            { className: "title font-weight-bolder" },
                            "Proudtales Advertising"
                          ),
                          r.a.createElement(
                            "ul",
                            { className: "pl-0" },
                            r.a.createElement(
                              "li",
                              { className: "list-unstyled" },
                              r.a.createElement(
                                "a",
                                { href: "#!" },
                                "Instagram"
                              )
                            ),
                            r.a.createElement(
                              "li",
                              { className: "list-unstyled" },
                              r.a.createElement("a", { href: "#!" }, "Facebook")
                            ),
                            r.a.createElement(
                              "li",
                              { className: "list-unstyled" },
                              r.a.createElement("a", { href: "#!" }, "Twitter")
                            ),
                            r.a.createElement(
                              "li",
                              { className: "list-unstyled" },
                              r.a.createElement("a", { href: "#!" }, "Youtube")
                            )
                          )
                        ),
                        r.a.createElement(
                          lt.c,
                          { md: "3" },
                          r.a.createElement(
                            "h5",
                            { className: "title font-weight-bolder" },
                            "Let Us Help You"
                          ),
                          r.a.createElement(
                            "ul",
                            { className: "pl-0" },
                            r.a.createElement(
                              "li",
                              { className: "list-unstyled" },
                              r.a.createElement("a", { href: "#!" }, "Link 1")
                            ),
                            r.a.createElement(
                              "li",
                              { className: "list-unstyled" },
                              r.a.createElement("a", { href: "#!" }, "Link 2")
                            ),
                            r.a.createElement(
                              "li",
                              { className: "list-unstyled" },
                              r.a.createElement("a", { href: "#!" }, "Link 3")
                            ),
                            r.a.createElement(
                              "li",
                              { className: "list-unstyled" },
                              r.a.createElement("a", { href: "#!" }, "Link 4")
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "footer-copyright text-center py-3 mdb-color darken-4",
                      },
                      r.a.createElement(
                        lt.d,
                        { fluid: !0 },
                        "\xa9 ",
                        new Date().getFullYear(),
                        " Copyright:",
                        " ",
                        r.a.createElement(
                          "a",
                          { href: "https://www.proudtale.com/" },
                          " proudtales.com"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        ot = (function (e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(
                this,
                Object(m.a)(t).call(this, e)
              )).handleMouseMove = a.handleMouseMove.bind(
                Object(le.a)(Object(le.a)(a))
              )),
              (a.handleMouseLeave = a.handleMouseLeave.bind(
                Object(le.a)(Object(le.a)(a))
              )),
              (a.handleSlideClick = a.handleSlideClick.bind(
                Object(le.a)(Object(le.a)(a))
              )),
              (a.imageLoaded = a.imageLoaded.bind(
                Object(le.a)(Object(le.a)(a))
              )),
              (a.slide = r.a.createRef()),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "handleMouseMove",
                value: function (e) {
                  var t = this.slide.current,
                    a = t.getBoundingClientRect();
                  t.style.setProperty(
                    "--x",
                    e.clientX - (a.left + Math.floor(a.width / 2))
                  ),
                    t.style.setProperty(
                      "--y",
                      e.clientY - (a.top + Math.floor(a.height / 2))
                    );
                },
              },
              {
                key: "handleMouseLeave",
                value: function (e) {
                  this.slide.current.style.setProperty("--x", 0),
                    this.slide.current.style.setProperty("--y", 0);
                },
              },
              {
                key: "handleSlideClick",
                value: function (e) {
                  this.props.handleSlideClick(this.props.slide.index);
                },
              },
              {
                key: "imageLoaded",
                value: function (e) {
                  e.target.style.opacity = 1;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.slide,
                    t = e.src,
                    a = e.button,
                    n = e.headline,
                    l = e.index,
                    c = this.props.current,
                    o = "slide";
                  return (
                    c === l
                      ? (o += " slide--current")
                      : c - 1 === l
                      ? (o += " slide--previous")
                      : c + 1 === l && (o += " slide--next"),
                    r.a.createElement(
                      "li",
                      {
                        ref: this.slide,
                        className: o,
                        onClick: this.handleSlideClick,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                      },
                      r.a.createElement(
                        "div",
                        { className: "slide__image-wrapper" },
                        r.a.createElement("img", {
                          className: "slide__image",
                          alt: n,
                          src: t,
                          onLoad: this.imageLoaded,
                        })
                      ),
                      r.a.createElement(
                        "article",
                        { className: "slide__content" },
                        r.a.createElement(
                          "h4",
                          { className: "slide__headline" },
                          n
                        ),
                        r.a.createElement(
                          "button",
                          { className: "btn white-text p-0 m-0" },
                          a
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        it = H()(function (e) {
          return Object(S.a)({}, e.spread);
        })(ot),
        st = (function (e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(this, Object(m.a)(t).call(this, e))).state = {
                current: 0,
              }),
              (a.handlePreviousClick = a.handlePreviousClick.bind(
                Object(le.a)(Object(le.a)(a))
              )),
              (a.handleNextClick = a.handleNextClick.bind(
                Object(le.a)(Object(le.a)(a))
              )),
              (a.handleSlideClick = a.handleSlideClick.bind(
                Object(le.a)(Object(le.a)(a))
              )),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "handlePreviousClick",
                value: function () {
                  var e = this.state.current - 1;
                  this.setState({
                    current: e < 0 ? this.props.slides.length - 1 : e,
                  });
                },
              },
              {
                key: "handleNextClick",
                value: function () {
                  var e = this.state.current + 1;
                  this.setState({
                    current: e === this.props.slides.length ? 0 : e,
                  });
                },
              },
              {
                key: "handleSlideClick",
                value: function (e) {
                  this.state.current !== e && this.setState({ current: e });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state.current,
                    a = this.props,
                    n = a.slides,
                    l = a.heading,
                    c = "slider-heading__".concat(
                      l.replace(/\s+/g, "-").toLowerCase()
                    ),
                    o = {
                      transform: "translateX(-".concat(
                        t * (100 / n.length),
                        "%)"
                      ),
                    };
                  return r.a.createElement(
                    "div",
                    { className: "slider", "aria-labelledby": c },
                    r.a.createElement(
                      "ul",
                      { className: "slider__wrapper", style: o },
                      r.a.createElement(
                        "h4",
                        { id: c, class: "visuallyhidden" },
                        l
                      ),
                      n.map(function (a) {
                        return r.a.createElement(it, {
                          key: a.index,
                          slide: a,
                          current: t,
                          handleSlideClick: e.handleSlideClick,
                        });
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        mt = [
          {
            index: 0,
            headline: "New Fashion",
            button: "Read Now",
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
          },
          {
            index: 1,
            headline: "In The Wilderness",
            button: "Read Now",
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
          },
          {
            index: 2,
            headline: "For Your Current Mood",
            button: "Read Now",
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
          },
          {
            index: 3,
            headline: "Focus On The Writing",
            button: "Read Now",
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
          },
          {
            index: 4,
            headline: "New Fashion Trend",
            button: "Read Now",
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
          },
          {
            index: 5,
            headline: "In The Wilderness",
            button: "Read Now",
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
          },
          {
            index: 6,
            headline: "For Your Current Mood",
            button: "Read Now",
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
          },
          {
            index: 7,
            headline: "Focus On The Writing",
            button: "Read Now",
            src:
              "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
          },
        ],
        ut = (function (e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes;
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "h1",
                        { className: e.styleTitle },
                        "Book"
                      ),
                      r.a.createElement(st, {
                        heading: "Example Slider",
                        slides: mt,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "h1",
                        { className: e.styleTitle },
                        "Biography"
                      ),
                      r.a.createElement(st, {
                        heading: "Example Slider",
                        slides: mt,
                      })
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "h1",
                        { className: e.styleTitle },
                        "Fiction"
                      ),
                      r.a.createElement(st, {
                        heading: "Example Slider",
                        slides: mt,
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        dt = Object(v.b)()(
          H()(function (e) {
            return Object(S.a)({}, e.spread, {
              styleTitle: {
                color: "white",
                fontWeight: "bolder",
                fontFamily: "cursive",
                textShadow: "2px 1px #1c2a48",
              },
            });
          })(ut)
        ),
        pt = a(17),
        ht = a.n(pt),
        Et = a(66),
        bt = a.n(Et),
        ft = a(243),
        gt = a.n(ft),
        yt = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { open: !1 }),
              (a.handleOpen = function () {
                a.setState({ open: !0 });
              }),
              (a.handleClose = function () {
                a.setState({ open: !1 });
              }),
              (a.deleteScream = function () {
                a.props.deleteScream(a.props.screamId),
                  a.setState({ open: !1 });
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes;
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      W,
                      {
                        tip: "Delete Book",
                        onClick: this.handleOpen,
                        btnClassName: e.deleteButton,
                      },
                      r.a.createElement(gt.a, { color: "secondary" })
                    ),
                    r.a.createElement(
                      K.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        fullWidth: !0,
                        maxWidth: "sm",
                      },
                      r.a.createElement(
                        $.a,
                        null,
                        "Are you sure you want to delete this scream ?"
                      ),
                      r.a.createElement(
                        bt.a,
                        null,
                        r.a.createElement(
                          oe.a,
                          { onClick: this.handleClose, color: "primary" },
                          "Cancel"
                        ),
                        r.a.createElement(
                          oe.a,
                          { onClick: this.deleteScream, color: "secondary" },
                          "Delete"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        vt = Object(v.b)(null, {
          deleteScream: function (e) {
            return function (t) {
              _.a
                .delete("/scream/".concat(e))
                .then(function () {
                  t({ type: "DELETE_SCREAM", payload: e });
                })
                .catch(function (e) {
                  return console.log(e);
                });
            };
          },
        })(
          H()({
            deleteButton: { position: "absolute", left: "90%", top: "10%" },
          })(yt)
        ),
        Ot = a(164),
        jt = a.n(Ot),
        Ct = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).likedScream = function () {
                return !(
                  !a.props.user.likes ||
                  !a.props.user.likes.find(function (e) {
                    return e.screamId === a.props.screamId;
                  })
                );
              }),
              (a.likeScream = function () {
                a.props.likeScream(a.props.screamId);
              }),
              (a.unlikeScream = function () {
                a.props.unlikeScream(a.props.screamId);
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function () {
                  return this.props.user.authenticated
                    ? this.likedScream()
                      ? r.a.createElement(
                          W,
                          { tip: "Undo like", onClick: this.unlikeScream },
                          r.a.createElement(Re.a, { color: "primary" })
                        )
                      : r.a.createElement(
                          W,
                          { tip: "Like", onClick: this.likeScream },
                          r.a.createElement(jt.a, { color: "primary" })
                        )
                    : r.a.createElement(
                        d.b,
                        { to: "/login" },
                        r.a.createElement(
                          W,
                          { tip: "Like" },
                          r.a.createElement(jt.a, { color: "primary" })
                        )
                      );
                },
              },
            ]),
            t
          );
        })(n.Component),
        St = {
          likeScream: function (e) {
            return function (t) {
              _.a
                .get("/scream/".concat(e, "/like"))
                .then(function (e) {
                  t({ type: "LIKE_SCREAM", payload: e.data });
                })
                .catch(function (e) {
                  return console.log(e);
                });
            };
          },
          unlikeScream: function (e) {
            return function (t) {
              _.a
                .get("/scream/".concat(e, "/unlike"))
                .then(function (e) {
                  t({ type: "UNLIKE_SCREAM", payload: e.data });
                })
                .catch(function (e) {
                  return console.log(e);
                });
            };
          },
        },
        Nt = Object(v.b)(function (e) {
          return { user: e.user };
        }, St)(Ct),
        kt = (function (e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.comments,
                    a = e.classes;
                  return r.a.createElement(
                    ht.a,
                    { container: !0 },
                    t.map(function (e, l) {
                      var c = e.body,
                        o = e.createdAt,
                        i = e.userImage,
                        s = e.userHandle;
                      return r.a.createElement(
                        n.Fragment,
                        { key: o },
                        r.a.createElement(
                          ht.a,
                          { item: !0, sm: 12 },
                          r.a.createElement(
                            ht.a,
                            { container: !0 },
                            r.a.createElement(
                              ht.a,
                              { item: !0, sm: 2 },
                              r.a.createElement("img", {
                                src: i,
                                alt: "comment",
                                className: a.commentImage,
                              })
                            ),
                            r.a.createElement(
                              ht.a,
                              { item: !0, sm: 9 },
                              r.a.createElement(
                                "div",
                                { className: a.commentData },
                                r.a.createElement(
                                  Ne.a,
                                  {
                                    variant: "h5",
                                    component: d.b,
                                    to: "/users/".concat(s),
                                    color: "primary",
                                  },
                                  s
                                ),
                                r.a.createElement(
                                  Ne.a,
                                  { variant: "body2", color: "textSecondary" },
                                  fe()(o).format("h:mm a, MMMM DD YYYY")
                                ),
                                r.a.createElement("hr", {
                                  className: a.invisibleSeparator,
                                }),
                                r.a.createElement(
                                  Ne.a,
                                  { variabnt: "body1" },
                                  c
                                )
                              )
                            )
                          )
                        ),
                        l !== t.length - 1 &&
                          r.a.createElement("hr", {
                            className: a.visibleSeparator,
                          })
                      );
                    })
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        wt = H()(function (e) {
          return Object(S.a)({}, e.spread, {
            commentImage: {
              maxWidth: "100%",
              height: 100,
              objectFit: "cover",
              borderRadius: "50%",
            },
            commentData: { marginLeft: 20 },
          });
        })(kt),
        It = a(43),
        xt = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { body: "", errors: {} }),
              (a.handleChange = function (e) {
                a.setState(Object(It.a)({}, e.target.name, e.target.value));
              }),
              (a.handleSubmit = function (e) {
                e.preventDefault(),
                  a.props.submitComment(a.props.screamId, {
                    body: a.state.body,
                  });
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  e.UI.errors && this.setState({ errors: e.UI.errors }),
                    e.UI.errors || e.UI.loading || this.setState({ body: "" });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    a = e.authenticated,
                    n = this.state.errors;
                  return a
                    ? r.a.createElement(
                        ht.a,
                        { item: !0, sm: 12, style: { textAlign: "center" } },
                        r.a.createElement(
                          "form",
                          { onSubmit: this.handleSubmit },
                          r.a.createElement(G.a, {
                            name: "body",
                            type: "text",
                            label: "Comment on scream",
                            error: !!n.comment,
                            helperText: n.comment,
                            value: this.state.body,
                            onChange: this.handleChange,
                            fullWidth: !0,
                            className: t.textField,
                          }),
                          r.a.createElement(
                            oe.a,
                            {
                              type: "submit",
                              variant: "contained",
                              color: "primary",
                              className: t.button,
                            },
                            "Submit"
                          )
                        ),
                        r.a.createElement("hr", {
                          className: t.visibleSeparator,
                        })
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(n.Component),
        Tt = Object(v.b)(
          function (e) {
            return { UI: e.UI, authenticated: e.user.authenticated };
          },
          {
            submitComment: function (e, t) {
              return function (a) {
                _.a
                  .post("/scream/".concat(e, "/comment"), t)
                  .then(function (e) {
                    a({ type: "SUBMIT_COMMENT", payload: e.data }), a(re());
                  })
                  .catch(function (e) {
                    a({ type: "SET_ERRORS", payload: e.response.data });
                  });
              };
            },
          }
        )(
          H()(function (e) {
            return Object(S.a)({}, e.spread);
          })(xt)
        ),
        Rt = a(244),
        At = a.n(Rt),
        _t = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { open: !1, oldPath: "", newPath: "" }),
              (a.handleOpen = function () {
                var e = window.location.pathname,
                  t = a.props,
                  n = t.userHandle,
                  r = t.screamId,
                  l = "/users/".concat(n, "/scream/").concat(r);
                e === l && (e = "/users/".concat(n)),
                  window.history.pushState(null, null, l),
                  a.setState({ open: !0, oldPath: e, newPath: l }),
                  a.props.getScream(a.props.screamId);
              }),
              (a.handleClose = function () {
                window.history.pushState(null, null, a.state.oldPath),
                  a.setState({ open: !1 }),
                  a.props.edit && a.props.editScream(),
                  a.props.clearErrors();
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.openDialog && this.handleOpen();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    a = e.scream,
                    l = a.title,
                    c = a.screamId,
                    o = a.body,
                    i = a.createdAt,
                    s = a.likeCount,
                    m = a.commentCount,
                    u = a.userImage,
                    p = a.userHandle,
                    h = a.comments,
                    E = e.UI.loading,
                    b = e.user,
                    f = b.authenticated,
                    g = b.credentials.handle,
                    y = e.edit,
                    v =
                      f && p === g
                        ? r.a.createElement(
                            oe.a,
                            {
                              onClick: this.props.editScream,
                              color: "primary",
                            },
                            "Edit"
                          )
                        : null,
                    O = E
                      ? r.a.createElement(
                          "div",
                          { className: t.spinnerDiv },
                          r.a.createElement(se.a, { size: 200, thickness: 2 })
                        )
                      : r.a.createElement(
                          ht.a,
                          { container: !0, spacing: 16 },
                          r.a.createElement(
                            ht.a,
                            { item: !0, sm: 5 },
                            r.a.createElement("img", {
                              src: u,
                              alt: "Profile",
                              className: t.profileImage,
                            })
                          ),
                          r.a.createElement(
                            ht.a,
                            { item: !0, sm: 7 },
                            r.a.createElement(
                              Ne.a,
                              {
                                component: d.b,
                                color: "primary",
                                variant: "h5",
                                to: "/users/".concat(p),
                              },
                              "@",
                              p
                            ),
                            r.a.createElement("hr", {
                              className: t.invisibleSeparator,
                            }),
                            r.a.createElement(
                              Ne.a,
                              { variant: "body2", color: "textSecondary" },
                              fe()(i).format("h:mm a, MMMM DD YYYY")
                            ),
                            r.a.createElement("hr", {
                              className: t.invisibleSeparator,
                            }),
                            r.a.createElement(Ne.a, { variant: "body1" }, l),
                            r.a.createElement(Nt, null),
                            r.a.createElement("span", null, s, " likes"),
                            r.a.createElement(
                              W,
                              { tip: "comments" },
                              r.a.createElement(_e.a, { color: "primary" })
                            ),
                            r.a.createElement("span", null, m, " comments"),
                            r.a.createElement("hr", {
                              className: t.invisibleSeparator,
                            }),
                            v
                          ),
                          y
                            ? r.a.createElement(pe, {
                                scream: this.props.scream,
                              })
                            : r.a.createElement(
                                Ne.a,
                                { variant: "body1" },
                                r.a.createElement("div", {
                                  dangerouslySetInnerHTML: { __html: o },
                                })
                              ),
                          r.a.createElement("hr", {
                            className: t.visibleSeparator,
                          }),
                          r.a.createElement(Tt, { screamId: c }),
                          r.a.createElement(wt, { comments: h })
                        );
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      W,
                      {
                        onClick: this.handleOpen,
                        tip: "Expand book",
                        tipClassName: t.expandButton,
                      },
                      r.a.createElement(At.a, { color: "primary" })
                    ),
                    r.a.createElement(
                      K.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        fullWidth: !0,
                        maxWidth: "sm",
                      },
                      r.a.createElement(
                        W,
                        {
                          tip: "Close",
                          onClick: this.handleClose,
                          tipClassName: t.closeButton,
                        },
                        r.a.createElement(te.a, null)
                      ),
                      r.a.createElement(J.a, { className: t.dialogContent }, O)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Ut = {
          getScream: ne,
          clearErrors: re,
          editScream: function () {
            return function (e) {
              e({ type: "EDIT_SCREAM" });
            };
          },
        },
        Lt = Object(v.b)(function (e) {
          return {
            scream: e.data.scream,
            edit: e.data.edit,
            UI: e.UI,
            user: e.user,
          };
        }, Ut)(
          H()(function (e) {
            return Object(S.a)({}, e.spread, {
              profileImage: {
                maxWidth: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
              },
              dialogContent: { padding: 20 },
              closeButton: { position: "absolute", left: "90%" },
              expandButton: { position: "absolute", left: "90%" },
              spinnerDiv: {
                textAlign: "center",
                marginTop: 50,
                marginBottom: 50,
              },
            });
          })(_t)
        ),
        Mt = a(67),
        Dt = a.n(Mt),
        Ft = a(69),
        Pt = a.n(Ft),
        Bt = a(68),
        Wt = a.n(Bt),
        Yt = (function (e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function () {
                  fe.a.extend(ye.a);
                  var e = this.props,
                    t = e.classes,
                    a = e.scream,
                    n = a.title,
                    l = a.createdAt,
                    c = a.userImage,
                    o = a.userHandle,
                    i = a.screamId,
                    s = a.likeCount,
                    m = a.commentCount,
                    u = e.user,
                    p = u.authenticated,
                    h = u.credentials.handle,
                    E =
                      p && o === h
                        ? r.a.createElement(vt, { screamId: i })
                        : null;
                  return r.a.createElement(
                    Dt.a,
                    { className: t.card },
                    r.a.createElement(Wt.a, {
                      image: c,
                      title: "Profile image",
                      className: t.image,
                    }),
                    r.a.createElement(
                      Pt.a,
                      { className: t.content },
                      r.a.createElement(
                        Ne.a,
                        {
                          variant: "h5",
                          component: d.b,
                          to: "/users/".concat(o),
                          color: "primary",
                        },
                        o
                      ),
                      E,
                      r.a.createElement(
                        Ne.a,
                        { variant: "body2", color: "textSecondary" },
                        fe()(l).fromNow()
                      ),
                      r.a.createElement(Ne.a, { variant: "body1" }, n),
                      r.a.createElement(Nt, { screamId: i }),
                      r.a.createElement("span", null, s, " Likes"),
                      r.a.createElement(
                        W,
                        { tip: "comments" },
                        r.a.createElement(_e.a, { color: "primary" })
                      ),
                      r.a.createElement("span", null, m, " comments"),
                      r.a.createElement(Lt, {
                        screamId: i,
                        userHandle: o,
                        openDialog: this.props.openDialog,
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Ht = Object(v.b)(function (e) {
          return { user: e.user };
        })(
          H()({
            card: { position: "relative", display: "flex", marginBottom: 20 },
            image: { minWidth: 200 },
            content: { padding: 25, objectFit: "cover" },
          })(Yt)
        ),
        zt = a(116),
        Gt = a.n(zt),
        Vt = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { bio: "", website: "", location: "", open: !1 }),
              (a.mapUserDetailsToState = function (e) {
                a.setState({
                  bio: e.bio ? e.bio : "",
                  website: e.website ? e.website : "",
                  location: e.location ? e.location : "",
                });
              }),
              (a.handleOpen = function () {
                a.setState({ open: !0 }),
                  a.mapUserDetailsToState(a.props.credentials);
              }),
              (a.handleClose = function () {
                a.setState({ open: !1 });
              }),
              (a.handleChange = function (e) {
                a.setState(Object(It.a)({}, e.target.name, e.target.value));
              }),
              (a.handleSubmit = function () {
                var e = {
                  bio: a.state.bio,
                  website: a.state.website,
                  location: a.state.location,
                };
                a.props.editUserDetails(e), a.handleClose();
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props.credentials;
                  this.mapUserDetailsToState(e);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.classes;
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      W,
                      {
                        tip: "Edit Details",
                        onClick: this.handleOpen,
                        btnClassName: e.button,
                      },
                      r.a.createElement(Gt.a, { color: "primary" })
                    ),
                    r.a.createElement(
                      K.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        fullWidth: !0,
                        maxWidth: "sm",
                      },
                      r.a.createElement($.a, null, "Edit your details"),
                      r.a.createElement(
                        J.a,
                        null,
                        r.a.createElement(
                          "form",
                          null,
                          r.a.createElement(G.a, {
                            name: "bio",
                            tpye: "text",
                            label: "Bio",
                            multiline: !0,
                            rows: "3",
                            placeholder: "A short bio about yourself",
                            className: e.textField,
                            value: this.state.bio,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(G.a, {
                            name: "website",
                            tpye: "text",
                            label: "Website",
                            placeholder: "Your personal/professinal website",
                            className: e.textField,
                            value: this.state.website,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(G.a, {
                            name: "location",
                            tpye: "text",
                            label: "Location",
                            placeholder: "Where you live",
                            className: e.textField,
                            value: this.state.location,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          })
                        )
                      ),
                      r.a.createElement(
                        bt.a,
                        null,
                        r.a.createElement(
                          oe.a,
                          { onClick: this.handleClose, color: "primary" },
                          "Cancel"
                        ),
                        r.a.createElement(
                          oe.a,
                          { onClick: this.handleSubmit, color: "primary" },
                          "Save"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Kt = Object(v.b)(
          function (e) {
            return { credentials: e.user.credentials };
          },
          {
            editUserDetails: function (e) {
              return function (t) {
                t({ type: "LOADING_USER" }),
                  _.a
                    .post("/user", e)
                    .then(function () {
                      t(L());
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
              };
            },
          }
        )(
          H()(function (e) {
            return Object(S.a)({}, e.spread, { button: { float: "right" } });
          })(Vt)
        ),
        Xt = a(117),
        Jt = a.n(Xt),
        qt = a(37),
        $t = a.n(qt),
        Qt = a(73),
        Zt = a.n(Qt),
        ea = a(74),
        ta = a.n(ea),
        aa = a(75),
        na = a.n(aa),
        ra = H()(function (e) {
          return Object(S.a)({}, e.spread, {
            handle: {
              height: 20,
              backgroundColor: e.palette.primary.main,
              width: 60,
              margin: "0 auto 7px auto",
            },
            fullLine: {
              height: 15,
              backgroundColor: "rgba(0,0,0,0.6)",
              width: "100%",
              marginBottom: 10,
            },
            halfLine: {
              height: 15,
              backgroundColor: "rgba(0,0,0,0.6)",
              width: "50%",
              marginBottom: 10,
            },
          });
        })(function (e) {
          var t = e.classes;
          return r.a.createElement(
            $t.a,
            { className: t.paper },
            r.a.createElement(
              "div",
              { className: t.profile },
              r.a.createElement(
                "div",
                { className: "image-wrapper" },
                r.a.createElement("img", {
                  src: Jt.a,
                  alt: "profile",
                  className: "profile-image",
                })
              ),
              r.a.createElement("hr", null),
              r.a.createElement(
                "div",
                { className: "profile-details" },
                r.a.createElement("div", { className: t.handle }),
                r.a.createElement("hr", null),
                r.a.createElement("div", { className: t.fullLine }),
                r.a.createElement("div", { className: t.fullLine }),
                r.a.createElement("hr", null),
                r.a.createElement(Zt.a, { color: "primary" }),
                " ",
                r.a.createElement("span", null, "Location"),
                r.a.createElement("hr", null),
                r.a.createElement(ta.a, { color: "primary" }),
                " https://website.com",
                r.a.createElement("hr", null),
                r.a.createElement(na.a, { color: "primary" }),
                " Joined date"
              )
            )
          );
        }),
        la = a(70),
        ca = a.n(la),
        oa = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).handleImageChange = function (e) {
                var t = e.target.files[0],
                  n = new FormData();
                n.append("image", t, t.name), a.props.uploadImage(n);
              }),
              (a.handleEditPicture = function () {
                document.getElementById("imageInput").click();
              }),
              (a.handleLogout = function () {
                a.props.logoutUser();
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    a = e.user,
                    l = a.credentials,
                    c = l.handle,
                    o = l.createdAt,
                    i = l.imageUrl,
                    s = l.bio,
                    m = l.website,
                    u = l.location,
                    p = a.loading,
                    h = a.authenticated;
                  return p
                    ? r.a.createElement(ra, null)
                    : h
                    ? r.a.createElement(
                        $t.a,
                        { className: t.paper },
                        r.a.createElement(
                          "div",
                          { className: t.profile },
                          r.a.createElement(
                            "div",
                            { className: "image-wrapper" },
                            r.a.createElement("img", {
                              src: i,
                              alt: "profile",
                              className: "profile-image",
                            }),
                            r.a.createElement("input", {
                              type: "file",
                              id: "imageInput",
                              hidden: "hidden",
                              onChange: this.handleImageChange,
                            }),
                            r.a.createElement(
                              W,
                              {
                                tip: "Edit profile picture",
                                onClick: this.handleEditPicture,
                                btnClassName: "button",
                              },
                              r.a.createElement(Gt.a, { color: "primary" })
                            )
                          ),
                          r.a.createElement("hr", null),
                          r.a.createElement(
                            "div",
                            { className: "profile-details" },
                            r.a.createElement(Kt, null),
                            r.a.createElement(
                              ca.a,
                              {
                                component: d.b,
                                to: "/users/".concat(c),
                                color: "primary",
                                variant: "h5",
                              },
                              c
                            ),
                            r.a.createElement("hr", null),
                            s &&
                              r.a.createElement(Ne.a, { variant: "body2" }, s),
                            r.a.createElement("hr", null),
                            u &&
                              r.a.createElement(
                                n.Fragment,
                                null,
                                r.a.createElement(Zt.a, { color: "primary" }),
                                " ",
                                r.a.createElement("span", null, u),
                                r.a.createElement("hr", null)
                              ),
                            m &&
                              r.a.createElement(
                                n.Fragment,
                                null,
                                r.a.createElement(ta.a, { color: "primary" }),
                                r.a.createElement(
                                  "a",
                                  {
                                    href: m,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                  " ",
                                  m
                                ),
                                r.a.createElement("hr", null)
                              ),
                            r.a.createElement(na.a, { color: "primary" }),
                            " ",
                            r.a.createElement(
                              "span",
                              null,
                              "Joined ",
                              fe()(o).format("MMM YYYY")
                            )
                          )
                        )
                      )
                    : r.a.createElement(
                        $t.a,
                        { className: t.paper },
                        r.a.createElement(
                          Ne.a,
                          { variant: "body2", align: "center" },
                          "No profile found, please login again"
                        ),
                        r.a.createElement(
                          "div",
                          { className: t.buttons },
                          r.a.createElement(
                            oe.a,
                            {
                              variant: "contained",
                              color: "primary",
                              component: d.b,
                              to: "/login",
                            },
                            "Login"
                          ),
                          r.a.createElement(
                            oe.a,
                            {
                              variant: "contained",
                              color: "secondary",
                              component: d.b,
                              to: "/signup",
                            },
                            "Register"
                          )
                        )
                      );
                },
              },
            ]),
            t
          );
        })(n.Component),
        ia = {
          uploadImage: function (e) {
            return function (t) {
              t({ type: "LOADING_USER" }),
                _.a
                  .post("/user/image", e)
                  .then(function () {
                    t(L());
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
            };
          },
        },
        sa = Object(v.b)(function (e) {
          return { user: e.user };
        }, ia)(
          H()(function (e) {
            return Object(S.a)({}, e.spread);
          })(oa)
        ),
        ma = H()(function (e) {
          return Object(S.a)({}, e.spread, {
            card: { display: "flex", marginBottom: 20 },
            cardContent: {
              width: "100%",
              flexDirection: "column",
              padding: 25,
            },
            cover: { minWidth: 200, objectFit: "cover" },
            handle: {
              width: 60,
              height: 18,
              backgroundColor: e.palette.primary.main,
              marginBottom: 7,
            },
            date: {
              height: 14,
              width: 100,
              backgroundColor: "rgba(0,0,0, 0.3)",
              marginBottom: 10,
            },
            fullLine: {
              height: 15,
              width: "90%",
              backgroundColor: "rgba(0,0,0, 0.6)",
              marginBottom: 10,
            },
            halfLine: {
              height: 15,
              width: "50%",
              backgroundColor: "rgba(0,0,0, 0.6)",
              marginBottom: 10,
            },
          });
        })(function (e) {
          var t = e.classes,
            a = Array.from({ length: 5 }).map(function (e, a) {
              return r.a.createElement(
                Dt.a,
                { className: t.card, key: a },
                r.a.createElement(Wt.a, { className: t.cover, image: Jt.a }),
                r.a.createElement(
                  Pt.a,
                  { className: t.cardContent },
                  r.a.createElement("div", { className: t.handle }),
                  r.a.createElement("div", { className: t.date }),
                  r.a.createElement("div", { className: t.fullLine }),
                  r.a.createElement("div", { className: t.fullLine }),
                  r.a.createElement("div", { className: t.halfLine })
                )
              );
            });
          return r.a.createElement(n.Fragment, null, a);
        }),
        ua = (function (e) {
          function t() {
            return (
              Object(o.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getScreams();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.data,
                    t = e.screams,
                    a = e.loading
                      ? r.a.createElement(ma, null)
                      : t.map(function (e) {
                          return r.a.createElement(Ht, {
                            key: e.screamId,
                            scream: e,
                          });
                        });
                  return r.a.createElement(
                    ht.a,
                    { container: !0, spacing: 16 },
                    r.a.createElement(ht.a, { item: !0, sm: 8, xs: 12 }, a),
                    r.a.createElement(
                      ht.a,
                      { item: !0, sm: 4, xs: 12 },
                      r.a.createElement(sa, null)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        da = Object(v.b)(
          function (e) {
            return { data: e.data };
          },
          { getScreams: ae }
        )(ua),
        pa = a(118),
        ha = a.n(pa),
        Ea = (function (e) {
          function t() {
            var e;
            return (
              Object(o.a)(this, t),
              ((e = Object(s.a)(
                this,
                Object(m.a)(t).call(this)
              )).handleSubmit = function (t) {
                t.preventDefault();
                var a = { email: e.state.email, password: e.state.password };
                e.props.loginUser(a, e.props.history);
              }),
              (e.handleChange = function (t) {
                e.setState(Object(It.a)({}, t.target.name, t.target.value));
              }),
              (e.state = { email: "", password: "", errors: {} }),
              e
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  e.UI.errors && this.setState({ errors: e.UI.errors });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    a = e.UI.loading,
                    n = this.state.errors;
                  return r.a.createElement(
                    "div",
                    { className: t.loginStyle },
                    r.a.createElement(
                      ht.a,
                      { container: !0, className: t.form },
                      r.a.createElement(ht.a, { item: !0, sm: !0 }),
                      r.a.createElement(
                        ht.a,
                        { item: !0, sm: !0 },
                        r.a.createElement("img", {
                          src: ha.a,
                          alt: "proudtalelog",
                          className: t.image,
                        }),
                        r.a.createElement(
                          Ne.a,
                          { variant: "h4", className: t.pageTitle },
                          "Login"
                        ),
                        r.a.createElement(
                          "form",
                          { noValidate: !0, onSubmit: this.handleSubmit },
                          r.a.createElement(G.a, {
                            id: "email",
                            name: "email",
                            type: "email",
                            label: "Email",
                            className: t.textField,
                            helperText: n.email,
                            error: !!n.email,
                            value: this.state.email,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(G.a, {
                            id: "password",
                            name: "password",
                            type: "password",
                            label: "Password",
                            className: t.textField,
                            helperText: n.password,
                            error: !!n.password,
                            value: this.state.password,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          n.general &&
                            r.a.createElement(
                              Ne.a,
                              { variant: "body2", className: t.customError },
                              n.general
                            ),
                          r.a.createElement(
                            oe.a,
                            {
                              type: "submit",
                              variant: "contained",
                              color: "primary",
                              className: t.button,
                              disabled: a,
                            },
                            "Login",
                            a &&
                              r.a.createElement(se.a, {
                                size: 30,
                                className: t.progress,
                              })
                          ),
                          r.a.createElement("br", null),
                          r.a.createElement(
                            "small",
                            null,
                            "dont have an account ? Register ",
                            r.a.createElement(d.b, { to: "/signup" }, "here")
                          )
                        )
                      ),
                      r.a.createElement(ht.a, { item: !0, sm: !0 })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        ba = {
          loginUser: function (e, t) {
            return function (a) {
              a({ type: "LOADING_UI" }),
                _.a
                  .post("/login", e)
                  .then(function (e) {
                    M(e.data.token),
                      a(L()),
                      a({ type: "CLEAR_ERRORS" }),
                      t.push("/");
                  })
                  .catch(function (e) {
                    a({ type: "SET_ERRORS", payload: e.response.data });
                  });
            };
          },
        },
        fa = Object(v.b)(function (e) {
          return { user: e.user, UI: e.UI };
        }, ba)(
          H()(function (e) {
            return Object(S.a)({}, e.spread, {
              loginStyle: {
                background: "white",
                padding: "2em",
                borderRadius: "1em",
                marginTop: "3em",
              },
            });
          })(Ea)
        ),
        ga = a(165),
        ya = (function (e) {
          function t() {
            var e;
            return (
              Object(o.a)(this, t),
              ((e = Object(s.a)(
                this,
                Object(m.a)(t).call(this)
              )).handleSubmit = function (t) {
                t.preventDefault(), e.setState({ loading: !0 });
                var a = {
                  email: e.state.email,
                  password: e.state.password,
                  confirmPassword: e.state.confirmPassword,
                  handle: e.state.handle,
                };
                e.props.signupUser(a, e.props.history);
              }),
              (e.handleChange = function (t) {
                e.setState(Object(It.a)({}, t.target.name, t.target.value));
              }),
              (e.state = {
                email: "",
                password: "",
                confirmPassword: "",
                handle: "",
                errors: {},
              }),
              e
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  e.UI.errors && this.setState({ errors: e.UI.errors });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    a = e.UI.loading,
                    n = this.state.errors;
                  return r.a.createElement(
                    "div",
                    { className: t.registerStyle },
                    r.a.createElement(
                      ht.a,
                      { container: !0, className: t.form },
                      r.a.createElement(ht.a, { item: !0, sm: !0 }),
                      r.a.createElement(
                        ht.a,
                        { item: !0, sm: !0 },
                        r.a.createElement("img", {
                          src: ha.a,
                          alt: "proudtale",
                          className: t.image,
                        }),
                        r.a.createElement(
                          Ne.a,
                          { variant: "h4", className: t.pageTitle },
                          "Register"
                        ),
                        r.a.createElement(
                          "form",
                          { noValidate: !0, onSubmit: this.handleSubmit },
                          r.a.createElement(G.a, {
                            id: "email",
                            name: "email",
                            type: "email",
                            label: "Email",
                            className: t.textField,
                            helperText: n.email,
                            error: !!n.email,
                            value: this.state.email,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(G.a, {
                            id: "password",
                            name: "password",
                            type: "password",
                            label: "Password",
                            className: t.textField,
                            helperText: n.password,
                            error: !!n.password,
                            value: this.state.password,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(G.a, {
                            id: "confirmPassword",
                            name: "confirmPassword",
                            type: "password",
                            label: "Confirm Password",
                            className: t.textField,
                            helperText: n.confirmPassword,
                            error: !!n.confirmPassword,
                            value: this.state.confirmPassword,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(G.a, {
                            id: "handle",
                            name: "handle",
                            type: "text",
                            label: "Handle",
                            className: t.textField,
                            helperText: n.handle,
                            error: !!n.handle,
                            value: this.state.handle,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          n.general &&
                            r.a.createElement(
                              Ne.a,
                              { variant: "body2", className: t.customError },
                              n.general
                            ),
                          r.a.createElement(ga.b, {
                            control: r.a.createElement(ga.a, {
                              color: "primary",
                              name: "agreement",
                            }),
                            value: "I agree",
                            label: "I agree to the Proudtale Agreement",
                          }),
                          r.a.createElement(
                            oe.a,
                            {
                              type: "submit",
                              variant: "contained",
                              color: "primary",
                              className: t.button,
                              disabled: a,
                            },
                            "Register",
                            a &&
                              r.a.createElement(se.a, {
                                size: 30,
                                className: t.progress,
                              })
                          ),
                          r.a.createElement("br", null),
                          r.a.createElement(
                            "small",
                            null,
                            "Already have an account ? Login ",
                            r.a.createElement(d.b, { to: "/login" }, "here")
                          )
                        )
                      ),
                      r.a.createElement(ht.a, { item: !0, sm: !0 })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        va = Object(v.b)(
          function (e) {
            return { user: e.user, UI: e.UI };
          },
          {
            signupUser: function (e, t) {
              return function (a) {
                a({ type: "LOADING_UI" }),
                  _.a
                    .post("/signup", e)
                    .then(function (e) {
                      M(e.data.token),
                        a(L()),
                        a({ type: "CLEAR_ERRORS" }),
                        t.push("/");
                    })
                    .catch(function (e) {
                      a({ type: "SET_ERRORS", payload: e.response.data });
                    });
              };
            },
          }
        )(
          H()(function (e) {
            return Object(S.a)({}, e.spread, {
              registerStyle: {
                background: "white",
                padding: "2em",
                borderRadius: "1em",
                marginTop: "3em",
              },
            });
          })(ya)
        ),
        Oa = H()(function (e) {
          return Object(S.a)({}, e.spread);
        })(function (e) {
          var t = e.classes,
            a = e.profile,
            l = a.handle,
            c = a.createdAt,
            o = a.imageUrl,
            i = a.bio,
            s = a.website,
            m = a.location;
          return r.a.createElement(
            $t.a,
            { className: t.paper },
            r.a.createElement(
              "div",
              { className: t.profile },
              r.a.createElement(
                "div",
                { className: "image-wrapper" },
                r.a.createElement("img", {
                  src: o,
                  alt: "profile",
                  className: "profile-image",
                })
              ),
              r.a.createElement("hr", null),
              r.a.createElement(
                "div",
                { className: "profile-details" },
                r.a.createElement(
                  ca.a,
                  {
                    component: d.b,
                    to: "/users/".concat(l),
                    color: "primary",
                    variant: "h5",
                  },
                  "@",
                  l
                ),
                r.a.createElement("hr", null),
                i && r.a.createElement(Ne.a, { variant: "body2" }, i),
                r.a.createElement("hr", null),
                m &&
                  r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(Zt.a, { color: "primary" }),
                    " ",
                    r.a.createElement("span", null, m),
                    r.a.createElement("hr", null)
                  ),
                s &&
                  r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(ta.a, { color: "primary" }),
                    r.a.createElement(
                      "a",
                      { href: s, target: "_blank", rel: "noopener noreferrer" },
                      " ",
                      s
                    ),
                    r.a.createElement("hr", null)
                  ),
                r.a.createElement(na.a, { color: "primary" }),
                " ",
                r.a.createElement(
                  "span",
                  null,
                  "Joined ",
                  fe()(c).format("MMM YYYY")
                )
              )
            )
          );
        }),
        ja = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { profile: null, screamIdParam: null }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.props.match.params.handle,
                    a = this.props.match.params.screamId;
                  a && this.setState({ screamIdParam: a }),
                    this.props.getUserData(t),
                    _.a
                      .get("/user/".concat(t))
                      .then(function (t) {
                        e.setState({ profile: t.data.user });
                      })
                      .catch(function (e) {
                        return console.log(e);
                      });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.data,
                    t = e.screams,
                    a = e.loading,
                    n = this.state.screamIdParam,
                    l = a
                      ? r.a.createElement(ma, null)
                      : null === t
                      ? r.a.createElement(
                          "p",
                          null,
                          "No screams from this user"
                        )
                      : n
                      ? t.map(function (e) {
                          return e.screamId !== n
                            ? r.a.createElement(Ht, {
                                key: e.screamId,
                                scream: e,
                              })
                            : r.a.createElement(Ht, {
                                key: e.screamId,
                                scream: e,
                                openDialog: !0,
                              });
                        })
                      : t.map(function (e) {
                          return r.a.createElement(Ht, {
                            key: e.screamId,
                            scream: e,
                          });
                        });
                  return r.a.createElement(
                    ht.a,
                    { container: !0, spacing: 16 },
                    r.a.createElement(ht.a, { item: !0, sm: 8, xs: 12 }, l),
                    r.a.createElement(
                      ht.a,
                      { item: !0, sm: 4, xs: 12 },
                      null === this.state.profile
                        ? r.a.createElement(ra, null)
                        : r.a.createElement(Oa, { profile: this.state.profile })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Ca = Object(v.b)(
          function (e) {
            return { data: e.data };
          },
          {
            getUserData: function (e) {
              return function (t) {
                t({ type: "LOADING_DATA" }),
                  _.a
                    .get("/user/".concat(e))
                    .then(function (e) {
                      t({ type: "SET_SCREAMS", payload: e.data.screams });
                    })
                    .catch(function () {
                      t({ type: "SET_SCREAMS", payload: null });
                    });
              };
            },
          }
        )(ja),
        Sa = f()({
          palette: {
            primary: {
              light: "#33c9dc",
              main: "#00bcd4",
              dark: "#008394",
              contrastText: "#fff",
            },
            secondary: {
              light: "#ff6333",
              main: "#ff3d00",
              dark: "#b22a00",
              contrastText: "#fff",
            },
          },
          spread: {
            typography: { useNextVariants: !0 },
            form: { textAlign: "center" },
            image: { margin: "20px auto 20px auto" },
            pageTitle: { margin: "10px auto 10px auto" },
            textField: { margin: "10px auto 10px auto" },
            button: { marginTop: 20, position: "relative" },
            customError: { color: "red", fontSize: "0.8rem", marginTop: 10 },
            progress: { position: "absolute" },
            invisibleSeparator: { border: "none", margin: 4 },
            visibleSeparator: {
              width: "100%",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              marginBottom: 20,
            },
            paper: { padding: 20 },
            profile: {
              "& .image-wrapper": {
                textAlign: "center",
                position: "relative",
                "& button": { position: "absolute", top: "80%", left: "70%" },
              },
              "& .profile-image": {
                width: 200,
                height: 200,
                objectFit: "cover",
                maxWidth: "100%",
                borderRadius: "50%",
              },
              "& .profile-details": {
                textAlign: "center",
                "& span, svg": { verticalAlign: "middle" },
                "& a": { color: "#00bcd4" },
              },
              "& hr": { border: "none", margin: "0 0 10px 0" },
              "& svg.button": { "&:hover": { cursor: "pointer" } },
            },
            buttons: { textAlign: "center", "& a": { margin: "20px 10px" } },
          },
        });
      _.a.defaults.baseURL =
        "https://us-central1-socialape-aa1d6.cloudfunctions.net/api";
      var Na = localStorage.FBIdToken;
      Na &&
        (1e3 * y()(Na).exp < Date.now()
          ? (R.dispatch(U()), (window.location.href = "/login"))
          : (R.dispatch({ type: "SET_AUTHENTICATED" }),
            (_.a.defaults.headers.common.Authorization = Na),
            R.dispatch(L())));
      var ka = (function (e) {
        function t() {
          return (
            Object(o.a)(this, t),
            Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
          );
        }
        return (
          Object(u.a)(t, e),
          Object(i.a)(t, [
            {
              key: "render",
              value: function () {
                return r.a.createElement(
                  E.a,
                  { theme: Sa },
                  r.a.createElement(
                    v.a,
                    { store: R },
                    r.a.createElement(
                      d.a,
                      null,
                      r.a.createElement(at, null),
                      r.a.createElement(
                        "div",
                        { className: "home-page-container" },
                        r.a.createElement(
                          "div",
                          { className: "container" },
                          r.a.createElement(
                            p.d,
                            null,
                            r.a.createElement(p.b, {
                              exact: !0,
                              path: "/",
                              component: dt,
                            }),
                            r.a.createElement(p.b, {
                              exact: !0,
                              path: "/community",
                              component: da,
                            }),
                            r.a.createElement(rt, {
                              exact: !0,
                              path: "/login",
                              component: fa,
                            }),
                            r.a.createElement(rt, {
                              exact: !0,
                              path: "/signup",
                              component: va,
                            }),
                            r.a.createElement(p.b, {
                              exact: !0,
                              path: "/users/:handle",
                              component: Ca,
                            }),
                            r.a.createElement(p.b, {
                              exact: !0,
                              path: "/users/:handle/scream/:screamId",
                              component: Ca,
                            })
                          )
                        )
                      ),
                      r.a.createElement(ct, null)
                    )
                  )
                );
              },
            },
          ]),
          t
        );
      })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a(593), a(594), a(595);
      c.a.render(r.a.createElement(ka, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[306, 1, 2]],
]);
//# sourceMappingURL=main.4b20b4f9.chunk.js.map
