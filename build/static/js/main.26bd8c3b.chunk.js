(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    145: function (e, t, a) {
      e.exports = a.p + "static/media/no-img.6732bd42.png";
    },
    146: function (e, t, a) {
      e.exports = a.p + "static/media/icon.a5eb20a3.png";
    },
    270: function (e, t, a) {
      e.exports = a(456);
    },
    275: function (e, t, a) {},
    456: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(21),
        c = a.n(l),
        o = a(12),
        i = a(10),
        s = a(14),
        m = a(13),
        u = a(15),
        d = a(16),
        p = a(61),
        h = (a(275), a(245)),
        E = a.n(h),
        f = a(170),
        b = a.n(f),
        g = a(222),
        y = a.n(g),
        v = a(17),
        O = a(68),
        C = a(224),
        j = a(108),
        S = a(8),
        k = {
          authenticated: !1,
          loading: !1,
          credentials: {},
          likes: [],
          notifications: [],
        },
        N = {
          screams: [],
          filteredScreams: [],
          scream: {},
          loading: !1,
          edit: !1,
        },
        I = { loading: !1, errors: null },
        w = [C.a],
        x = Object(O.c)({
          user: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : k,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SET_AUTHENTICATED":
                return Object(S.a)({}, e, { authenticated: !0 });
              case "SET_UNAUTHENTICATED":
                return k;
              case "SET_USER":
                return Object(S.a)(
                  { authenticated: !0, loading: !1 },
                  t.payload
                );
              case "LOADING_USER":
                return Object(S.a)({}, e, { loading: !0 });
              case "LIKE_SCREAM":
                return Object(S.a)({}, e, {
                  likes: [].concat(Object(j.a)(e.likes), [
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
            var e,
              t,
              a =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : N,
              n = arguments.length > 1 ? arguments[1] : void 0;
            switch (n.type) {
              case "LOADING_DATA":
                return Object(S.a)({}, a, { loading: !0 });
              case "SET_SCREAMS":
                return Object(S.a)({}, a, { screams: n.payload, loading: !1 });
              case "SET_SCREAM":
                return Object(S.a)({}, a, { scream: n.payload });
              case "EDIT_SCREAM":
                return Object(S.a)({}, a, { edit: !a.edit });
              case "SUBMIT_EDIT":
                return Object(S.a)({}, a, { scream: n.payload, edit: !1 });
              case "LIKE_SCREAM":
              case "UNLIKE_SCREAM":
                var r = a.screams.findIndex(function (e) {
                  return e.screamId === n.payload.screamId;
                });
                return (
                  (a.screams[r] = n.payload),
                  a.scream.screamId === n.payload.screamId &&
                    (a.scream = n.payload),
                  Object(S.a)({}, a)
                );
              case "DELETE_SCREAM":
                return (
                  (r = a.screams.findIndex(function (e) {
                    return e.screamId === n.payload;
                  })),
                  a.screams.splice(r, 1),
                  Object(S.a)({}, a)
                );
              case "POST_SCREAM":
                return Object(S.a)({}, a, {
                  screams: [n.payload].concat(Object(j.a)(a.screams)),
                });
              case "SUBMIT_COMMENT":
                return Object(S.a)({}, a, {
                  scream: Object(S.a)({}, a.scream, {
                    comments: [n.payload].concat(
                      Object(j.a)(a.scream.comments)
                    ),
                  }),
                });
              case "SEARCH_SCREAM":
                return Object(S.a)({}, a, {
                  filteredScreams:
                    ((e = a.screams),
                    (t = n.payload),
                    e.filter(function (e) {
                      return e.title.indexOf(t) > -1;
                    })),
                  loading: !1,
                });
              default:
                return a;
            }
          },
          UI: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : I,
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
        A = ("object" === typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
          : O.d)(O.a.apply(void 0, w)),
        R = Object(O.e)(x, {}, A),
        T = a(23),
        _ = a.n(T),
        L = function () {
          return function (e) {
            localStorage.removeItem("FBIdToken"),
              delete _.a.defaults.headers.common.Authorization,
              e({ type: "SET_UNAUTHENTICATED" });
          };
        },
        U = function () {
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
        D = a(481),
        P = a(482),
        B = function (e) {
          var t = e.children,
            a = e.onClick,
            n = e.tip,
            l = e.btnClassName,
            c = e.tipClassName;
          return r.a.createElement(
            D.a,
            { title: n, className: c, placement: "top" },
            r.a.createElement(P.a, { onClick: a, className: l }, t)
          );
        },
        F = a(20),
        W = a.n(F),
        H = a(498),
        Y = a(502),
        G = a(486),
        V = a(485),
        z = a(229),
        K = a.n(z),
        X = a(141),
        J = a.n(X),
        q = a(85),
        $ = a.n(q),
        Q = function () {
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
        Z = function (e) {
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
        ee = function () {
          return function (e) {
            e({ type: "CLEAR_ERRORS" });
          };
        },
        te = a(25),
        ae = a(483),
        ne = a(484),
        re = a(228),
        le = a.n(re),
        ce =
          (a(403),
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
                  Object(te.a)(Object(te.a)(a))
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
                      r.a.createElement(le.a, {
                        theme: this.state.theme,
                        onChange: this.handleChange,
                        value: this.state.editorHtml,
                        modules: t.modules,
                        formats: t.formats,
                        placeholder: this.props.placeholder,
                      }),
                      r.a.createElement(
                        ae.a,
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
                          r.a.createElement(ne.a, {
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
      (ce.modules = {
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
        (ce.formats = [
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
      var oe = Object(v.b)(
          function (e) {
            return { data: e.data, UI: e.UI };
          },
          {
            getScreams: Q,
            submitEdit: function (e) {
              return function (t) {
                t({ type: "LOADING_UI" }),
                  _.a
                    .post("/scream/".concat(e.screamId, "/edit"), e)
                    .then(function (a) {
                      t({ type: "SUBMIT_EDIT", payload: a.data }),
                        t(Z(e.screamId));
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              };
            },
          }
        )(
          W()({
            submitButton: {
              position: "relative",
              float: "right",
              marginTop: 10,
            },
          })(ce)
        ),
        ie = (function (e) {
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
                  console.log("HIII"),
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
                    t = this.props,
                    a = t.classes,
                    l = t.bookImage;
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      B,
                      { onClick: this.handleOpen, tip: "Create book" },
                      r.a.createElement(K.a, null)
                    ),
                    r.a.createElement(
                      Y.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        fullScreen: !0,
                      },
                      r.a.createElement(
                        B,
                        {
                          tip: "Close",
                          onClick: this.handleClose,
                          tipClassName: a.closeButton,
                          ml: 20,
                        },
                        r.a.createElement(J.a, null)
                      ),
                      r.a.createElement(V.a, null, "Publish your new book"),
                      r.a.createElement(
                        G.a,
                        null,
                        r.a.createElement(
                          "div",
                          { className: "image-wrapper" },
                          r.a.createElement("img", {
                            src: l,
                            alt: "book",
                            className: "profile-image",
                          }),
                          r.a.createElement("input", {
                            type: "file",
                            id: "imageInput",
                            hidden: "hidden",
                            onChange: this.handleImageChange,
                          }),
                          r.a.createElement(
                            B,
                            {
                              tip: "Edit profile picture",
                              onClick: this.handleEditPicture,
                              btnClassName: "button",
                            },
                            r.a.createElement($.a, { color: "primary" })
                          )
                        ),
                        r.a.createElement(
                          "form",
                          { onSubmit: this.handleSubmit },
                          r.a.createElement(H.a, {
                            name: "title",
                            type: "text",
                            label: "Title",
                            multiline: !0,
                            placeholder: "Title of your book",
                            error: !!e.body,
                            helperText: e.body,
                            className: a.textField,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(oe, {
                            type: "text",
                            label: "Body",
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
        se = Object(v.b)(
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
                      t({ type: "POST_SCREAM", payload: e.data }), t(ee());
                    })
                    .catch(function (e) {
                      t({ type: "SET_ERRORS", payload: e.response.data });
                    });
              };
            },
            clearErrors: ee,
          }
        )(
          W()(function (e) {
            return Object(S.a)({}, e.spread, {
              progressSpinner: { position: "absolute" },
              closeButton: { position: "absolute", left: "91%", top: "6%" },
            });
          })(ie)
        ),
        me = a(36),
        ue = a.n(me),
        de = a(143),
        pe = a.n(de),
        he = a(247),
        Ee = a(506),
        fe = a(179),
        be = a(487),
        ge = a(149),
        ye = a.n(ge),
        ve = a(144),
        Oe = a.n(ve),
        Ce = a(86),
        je = a.n(Ce),
        Se = (function (e) {
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
                  ue.a.extend(pe.a),
                    (e =
                      a &&
                      a.length > 0 &&
                      a.filter(function (e) {
                        return !1 === e.read;
                      }).length > 0
                        ? r.a.createElement(
                            be.a,
                            {
                              badgeContent: a.filter(function (e) {
                                return !1 === e.read;
                              }).length,
                              color: "secondary",
                            },
                            r.a.createElement(ye.a, null)
                          )
                        : r.a.createElement(ye.a, null));
                  var c =
                    a && a.length > 0
                      ? a.map(function (e) {
                          var a = "like" === e.type ? "liked" : "commented on",
                            n = ue()(e.createdAt).fromNow(),
                            l = e.read ? "primary" : "secondary",
                            c =
                              "like" === e.type
                                ? r.a.createElement(Oe.a, {
                                    color: l,
                                    style: { marginRight: 10 },
                                  })
                                : r.a.createElement(je.a, {
                                    color: l,
                                    style: { marginRight: 10 },
                                  });
                          return r.a.createElement(
                            Ee.a,
                            { key: e.createdAt, onClick: t.handleClose },
                            c,
                            r.a.createElement(
                              fe.a,
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
                          Ee.a,
                          { onClick: this.handleClose },
                          "You have no notifications yet"
                        );
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      D.a,
                      { placement: "top", title: "Notifications" },
                      r.a.createElement(
                        P.a,
                        {
                          "aria-owns": l ? "simple-menu" : void 0,
                          "aria-haspopup": "true",
                          onClick: this.handleOpen,
                        },
                        e
                      )
                    ),
                    r.a.createElement(
                      he.a,
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
        ke = Object(v.b)(
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
        )(Se),
        Ne = a(489),
        Ie = a(490),
        we = a(503),
        xe = a(176),
        Ae = a.n(xe),
        Re = a(233),
        Te = a.n(Re),
        _e = a(235),
        Le = a.n(_e),
        Ue = a(236),
        Me = a.n(Ue),
        De = a(234),
        Pe = a.n(De),
        Be = a(237),
        Fe = a.n(Be),
        We = a(37),
        He = a(6),
        Ye = a(504),
        Ge = a(499),
        Ve = a(231),
        ze = a.n(Ve);
      var Ke = Object(v.b)(function (e) {
          return { screams: e.data.screams };
        })(
          Object(He.a)(function (e) {
            return Object(S.a)({}, e.spread, {
              search: Object(We.a)(
                {
                  position: "relative",
                  borderRadius: e.shape.borderRadius,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.20)" },
                  marginLeft: 0,
                  marginRight: "1rem",
                },
                e.breakpoints.up("sm"),
                { width: "auto" }
              ),
              searchIcon: {
                padding: "0px 1rem",
                height: "100%",
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              inputRoot: { color: "inherit", marginLeft: "3rem" },
              inputInput: Object(We.a)(
                { transition: e.transitions.create("width"), width: "100%" },
                e.breakpoints.up("md"),
                { width: "50ch" }
              ),
              listBox: {
                width: "300px",
                margin: "2px 0 0",
                padding: 0,
                position: "absolute",
                listStyle: "none",
                backgroundColor: "#fff",
                overflow: "auto",
                maxHeight: "250px",
                borderRadius: "4px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                zIndex: 1,
                color: "black",
                "& li": {
                  padding: "5px 12px",
                  display: "flex",
                  "& span": { flexGrow: 1 },
                  "& svg": { color: "transparent" },
                },
                "& li[aria-selected='true']": {
                  backgroundColor: "#fafafa",
                  fontWeight: "600",
                  "& svg": { color: "#1890ff" },
                },
                "& li[data-focus='true']": {
                  backgroundColor: "#e6f7ff",
                  cursor: "pointer",
                  "& svg": { color: "#000" },
                },
              },
              button: { color: "white" },
            });
          })(function (e) {
            var t = e.classes,
              a = e.screams,
              n = Object(Ge.a)({
                id: "search-hook",
                options: a,
                getOptionLabel: function (e) {
                  return e.title;
                },
              }),
              l = n.getRootProps,
              c = n.getInputLabelProps,
              o = n.getInputProps,
              i = n.getListboxProps,
              s = n.getOptionProps,
              m = n.groupedOptions,
              u = n.inputValue,
              h = Object(p.g)();
            return r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "div",
                Object.assign({ className: t.search }, l()),
                r.a.createElement(
                  d.b,
                  { to: "/search" },
                  r.a.createElement(
                    "label",
                    Object.assign({ className: t.searchIcon }, c()),
                    r.a.createElement(ze.a, null)
                  )
                ),
                r.a.createElement(
                  Ye.a,
                  Object.assign(
                    { classes: { root: t.inputRoot, input: t.inputInput } },
                    o(),
                    {
                      onKeyPress: function (e) {
                        return (function (e, t) {
                          "Enter" === e.key && h.push("/search/".concat(t));
                        })(e, u);
                      },
                    }
                  )
                ),
                r.a.createElement(
                  d.b,
                  { to: "/search/".concat(u) },
                  r.a.createElement(ae.a, { className: t.button }, "Search")
                )
              ),
              m.length > 0
                ? r.a.createElement(
                    "ul",
                    Object.assign({ className: t.listBox }, i()),
                    m.map(function (e, t) {
                      return r.a.createElement(
                        "li",
                        s({ option: e, index: t }),
                        r.a.createElement("span", null, e.title)
                      );
                    })
                  )
                : null
            );
          })
        ),
        Xe = a(246),
        Je = a(458),
        qe = a(505),
        $e = a(232),
        Qe = a.n($e),
        Ze = a(488),
        et = Object(Ze.a)(function (e) {
          return {
            menuList: { backgroundColor: "#1c2a48", color: "white" },
            menuItem: { color: "inherit" },
          };
        });
      function tt(e) {
        var t = e.authenticated,
          a = e.logoutUser,
          l = et(),
          c = Object(n.useState)(null),
          o = Object(Xe.a)(c, 2),
          i = o[0],
          s = o[1],
          m = function (e) {
            s(i ? null : e.currentTarget);
          };
        return r.a.createElement(
          we.a,
          { display: { xs: "block", sm: "none" } },
          r.a.createElement(ke, { tip: "Notification" }),
          r.a.createElement(
            P.a,
            {
              "aria-controls": "customized-menu",
              "aria-haspopup": "true",
              variant: "contained",
              color: "primary",
              onClick: m,
            },
            r.a.createElement(Qe.a, null)
          ),
          r.a.createElement(
            Je.a,
            {
              elevation: 0,
              getContentAnchorEl: null,
              anchorEl: i,
              open: Boolean(i),
              transition: !0,
            },
            r.a.createElement(
              qe.a,
              { className: l.menuList },
              t
                ? r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      d.b,
                      { to: "/", className: l.menuItem },
                      r.a.createElement(Ee.a, { onClick: m }, "Home")
                    ),
                    r.a.createElement(
                      d.b,
                      { to: "community", className: l.menuItem },
                      r.a.createElement(Ee.a, { onClick: m }, "Community")
                    ),
                    r.a.createElement(
                      Ee.a,
                      {
                        onClick: function () {
                          a(), m();
                        },
                      },
                      "Logout"
                    )
                  )
                : r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      d.b,
                      { className: l.menuItem, to: "/", onClick: m },
                      r.a.createElement(Ee.a, null, "Home")
                    ),
                    r.a.createElement(
                      d.b,
                      { className: l.menuItem, to: "login", onClick: m },
                      r.a.createElement(Ee.a, null, "Login")
                    )
                  )
            )
          )
        );
      }
      var at = (function (e) {
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
                    n = a.imageUrl,
                    l = a.handle,
                    c = e.authenticated;
                  return r.a.createElement(
                    Ne.a,
                    null,
                    r.a.createElement(
                      Ie.a,
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
                      r.a.createElement(Ke, null),
                      c
                        ? r.a.createElement(
                            we.a,
                            { display: { xs: "none", sm: "block" } },
                            r.a.createElement(
                              "h4",
                              { className: t.navbarHandle },
                              l
                            ),
                            r.a.createElement("img", {
                              src: n,
                              alt: "profile",
                              className: t.navbarImage,
                            }),
                            r.a.createElement(se, null),
                            r.a.createElement(ke, { tip: "Notification" }),
                            r.a.createElement(
                              d.b,
                              { to: "/" },
                              r.a.createElement(
                                B,
                                { tip: "Home" },
                                r.a.createElement(Ae.a, null)
                              )
                            ),
                            r.a.createElement(
                              d.b,
                              { to: "community" },
                              r.a.createElement(
                                B,
                                { tip: "Community" },
                                r.a.createElement(Te.a, null)
                              )
                            ),
                            r.a.createElement(
                              B,
                              { tip: "Logout", onClick: this.handleLogout },
                              r.a.createElement(Pe.a, { color: "primary" })
                            )
                          )
                        : r.a.createElement(
                            we.a,
                            { display: { xs: "none", sm: "block" } },
                            r.a.createElement(
                              ae.a,
                              null,
                              r.a.createElement(Le.a, null)
                            ),
                            r.a.createElement(
                              ae.a,
                              null,
                              r.a.createElement(Me.a, null)
                            ),
                            r.a.createElement(
                              d.b,
                              { to: "/" },
                              r.a.createElement(
                                B,
                                { tip: "Home" },
                                r.a.createElement(Ae.a, null)
                              )
                            ),
                            r.a.createElement(
                              d.b,
                              { to: "login" },
                              r.a.createElement(
                                B,
                                { tip: "Login" },
                                r.a.createElement(Fe.a, null)
                              )
                            )
                          ),
                      r.a.createElement(tt, {
                        logoutUser: this.props.logoutUser,
                        authenticated: c,
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        nt = { logoutUser: L },
        rt = Object(v.b)(function (e) {
          return {
            credentials: e.user.credentials,
            authenticated: e.user.authenticated,
          };
        }, nt)(
          W()(function (e) {
            return Object(S.a)({}, e.spread, {
              navbarImage: { width: 50, height: 50, borderRadius: "10%" },
              navbarHandle: {
                display: "inline",
                fontWeight: "bolder",
                margin: "2em 0.7em 0 0",
              },
              navbarTitle: { marginTop: "0.9em", fontFamily: "cursive" },
            });
          })(at)
        ),
        lt = a(238),
        ct = Object(v.b)(function (e) {
          return { authenticated: e.user.authenticated };
        })(function (e) {
          var t = e.component,
            a = e.authenticated,
            n = Object(lt.a)(e, ["component", "authenticated"]);
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
        ot = a(63),
        it = (function (e) {
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
                    ot.e,
                    {
                      color: "mdb-color darken-3",
                      className: "font-small pt-4 mt-4",
                    },
                    r.a.createElement(
                      ot.d,
                      { fluid: !0 },
                      r.a.createElement(
                        ot.i,
                        { className: "justify-content-center" },
                        r.a.createElement(
                          ot.c,
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
                          ot.c,
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
                          ot.c,
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
                        ot.d,
                        { fluid: !0 },
                        "\xa9 ",
                        new Date().getFullYear(),
                        " Copyright:",
                        " ",
                        r.a.createElement(
                          "a",
                          { href: "https://proudtale.com/" },
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
        st = (function (e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(
                this,
                Object(m.a)(t).call(this, e)
              )).handleMouseMove = a.handleMouseMove.bind(
                Object(te.a)(Object(te.a)(a))
              )),
              (a.handleMouseLeave = a.handleMouseLeave.bind(
                Object(te.a)(Object(te.a)(a))
              )),
              (a.handleSlideClick = a.handleSlideClick.bind(
                Object(te.a)(Object(te.a)(a))
              )),
              (a.imageLoaded = a.imageLoaded.bind(
                Object(te.a)(Object(te.a)(a))
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
                    t = e.bookImage,
                    a = e.author,
                    n = e.title,
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
                        d.b,
                        { to: "" },
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
                            "h5",
                            { className: "white-text font-weight-bolder" },
                            a
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
        mt = W()(function (e) {
          return Object(S.a)({}, e.spread);
        })(st),
        ut = (function (e) {
          function t(e) {
            var a;
            return (
              Object(o.a)(this, t),
              ((a = Object(s.a)(this, Object(m.a)(t).call(this, e))).state = {
                current: 0,
              }),
              (a.handlePreviousClick = a.handlePreviousClick.bind(
                Object(te.a)(Object(te.a)(a))
              )),
              (a.handleNextClick = a.handleNextClick.bind(
                Object(te.a)(Object(te.a)(a))
              )),
              (a.handleSlideClick = a.handleSlideClick.bind(
                Object(te.a)(Object(te.a)(a))
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
                        return r.a.createElement(mt, {
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
        dt = [];
      function pt(e, t, a, n) {
        (this.index = e),
          (this.title = t),
          (this.author = a),
          (this.bookImage = n);
      }
      var ht = (function (e) {
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
                  var e = this;
                  _.a
                    .get(
                      "https://us-central1-socialape-aa1d6.cloudfunctions.net/api/screams"
                    )
                    .then(function (t) {
                      for (var a = t.data, n = 0; n < a.length; ) {
                        var r = new pt(
                          n,
                          a[n].title,
                          a[n].userHandle,
                          a[n].userImage
                        );
                        dt.push(r), n++;
                      }
                      console.log(a), console.log(dt), e.setState(dt);
                    });
                },
              },
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
                        "Popular Book"
                      ),
                      r.a.createElement(ut, {
                        heading: "Popular Book",
                        slides: dt,
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
                      r.a.createElement(ut, {
                        heading: "Biography",
                        slides: dt,
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
                      r.a.createElement(ut, { heading: "Fiction", slides: dt })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Et = W()(function (e) {
          return Object(S.a)({}, e.spread, {
            styleTitle: {
              color: "white",
              fontWeight: "bolder",
              fontFamily: "cursive",
              textShadow: "2px 1px #1c2a48",
            },
          });
        })(ht),
        ft = a(492),
        bt = a(491),
        gt = a(243),
        yt = a.n(gt),
        vt = (function (e) {
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
                      B,
                      {
                        tip: "Delete Book",
                        onClick: this.handleOpen,
                        btnClassName: e.deleteButton,
                      },
                      r.a.createElement(yt.a, { color: "secondary" })
                    ),
                    r.a.createElement(
                      Y.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        fullWidth: !0,
                        maxWidth: "sm",
                      },
                      r.a.createElement(
                        V.a,
                        null,
                        "Are you sure you want to delete this scream ?"
                      ),
                      r.a.createElement(
                        bt.a,
                        null,
                        r.a.createElement(
                          ae.a,
                          { onClick: this.handleClose, color: "primary" },
                          "Cancel"
                        ),
                        r.a.createElement(
                          ae.a,
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
        Ot = Object(v.b)(null, {
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
          W()({
            deleteButton: { position: "absolute", left: "90%", top: "10%" },
          })(vt)
        ),
        Ct = a(178),
        jt = a.n(Ct),
        St = (function (e) {
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
                          B,
                          { tip: "Undo like", onClick: this.unlikeScream },
                          r.a.createElement(Oe.a, { color: "primary" })
                        )
                      : r.a.createElement(
                          B,
                          { tip: "Like", onClick: this.likeScream },
                          r.a.createElement(jt.a, { color: "primary" })
                        )
                    : r.a.createElement(
                        d.b,
                        { to: "/login" },
                        r.a.createElement(
                          B,
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
        kt = {
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
        }, kt)(St),
        It = (function (e) {
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
                    ft.a,
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
                          ft.a,
                          { item: !0, sm: 12 },
                          r.a.createElement(
                            ft.a,
                            { container: !0 },
                            r.a.createElement(
                              ft.a,
                              { item: !0, sm: 2 },
                              r.a.createElement("img", {
                                src: i,
                                alt: "comment",
                                className: a.commentImage,
                              })
                            ),
                            r.a.createElement(
                              ft.a,
                              { item: !0, sm: 9 },
                              r.a.createElement(
                                "div",
                                { className: a.commentData },
                                r.a.createElement(
                                  fe.a,
                                  {
                                    variant: "h5",
                                    component: d.b,
                                    to: "/users/".concat(s),
                                    color: "primary",
                                  },
                                  s
                                ),
                                r.a.createElement(
                                  fe.a,
                                  { variant: "body2", color: "textSecondary" },
                                  ue()(o).format("h:mm a, MMMM DD YYYY")
                                ),
                                r.a.createElement("hr", {
                                  className: a.invisibleSeparator,
                                }),
                                r.a.createElement(
                                  fe.a,
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
        wt = W()(function (e) {
          return Object(S.a)({}, e.spread, {
            commentImage: {
              maxWidth: "100%",
              height: 100,
              objectFit: "cover",
              borderRadius: "50%",
            },
            commentData: { marginLeft: 20 },
          });
        })(It),
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
                a.setState(Object(We.a)({}, e.target.name, e.target.value));
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
                        ft.a,
                        { item: !0, sm: 12, style: { textAlign: "center" } },
                        r.a.createElement(
                          "form",
                          { onSubmit: this.handleSubmit },
                          r.a.createElement(H.a, {
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
                            ae.a,
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
        At = Object(v.b)(
          function (e) {
            return { UI: e.UI, authenticated: e.user.authenticated };
          },
          {
            submitComment: function (e, t) {
              return function (a) {
                _.a
                  .post("/scream/".concat(e, "/comment"), t)
                  .then(function (e) {
                    a({ type: "SUBMIT_COMMENT", payload: e.data }), a(ee());
                  })
                  .catch(function (e) {
                    a({ type: "SET_ERRORS", payload: e.response.data });
                  });
              };
            },
          }
        )(
          W()(function (e) {
            return Object(S.a)({}, e.spread);
          })(xt)
        ),
        Rt = a(244),
        Tt = a.n(Rt),
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
                    f = e.user,
                    b = f.authenticated,
                    g = f.credentials.handle,
                    y = e.edit,
                    v =
                      b && p === g
                        ? r.a.createElement(
                            ae.a,
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
                          r.a.createElement(ne.a, { size: 200, thickness: 2 })
                        )
                      : r.a.createElement(
                          ft.a,
                          { container: !0 },
                          r.a.createElement(
                            ft.a,
                            { item: !0, sm: 5 },
                            r.a.createElement("img", {
                              src: u,
                              alt: "Profile",
                              className: t.profileImage,
                            })
                          ),
                          r.a.createElement(
                            ft.a,
                            { item: !0, sm: 7 },
                            r.a.createElement(
                              fe.a,
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
                              fe.a,
                              { variant: "body2", color: "textSecondary" },
                              ue()(i).format("h:mm a, MMMM DD YYYY")
                            ),
                            r.a.createElement("hr", {
                              className: t.invisibleSeparator,
                            }),
                            r.a.createElement(fe.a, { variant: "body1" }, l),
                            r.a.createElement(Nt, null),
                            r.a.createElement("span", null, s, " likes"),
                            r.a.createElement(
                              B,
                              { tip: "comments" },
                              r.a.createElement(je.a, { color: "primary" })
                            ),
                            r.a.createElement("span", null, m, " comments"),
                            r.a.createElement("hr", {
                              className: t.invisibleSeparator,
                            }),
                            v
                          ),
                          y
                            ? r.a.createElement(oe, {
                                scream: this.props.scream,
                              })
                            : r.a.createElement(
                                fe.a,
                                { variant: "body1" },
                                r.a.createElement("div", {
                                  dangerouslySetInnerHTML: { __html: o },
                                })
                              ),
                          r.a.createElement("hr", {
                            className: t.visibleSeparator,
                          }),
                          r.a.createElement(At, { screamId: c }),
                          r.a.createElement(wt, { comments: h })
                        );
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      B,
                      {
                        onClick: this.handleOpen,
                        tip: "Expand book",
                        tipClassName: t.expandButton,
                      },
                      r.a.createElement(Tt.a, { color: "primary" })
                    ),
                    r.a.createElement(
                      Y.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        fullWidth: !0,
                        maxWidth: "sm",
                      },
                      r.a.createElement(
                        B,
                        {
                          tip: "Close",
                          onClick: this.handleClose,
                          tipClassName: t.closeButton,
                        },
                        r.a.createElement(J.a, null)
                      ),
                      r.a.createElement(G.a, { className: t.dialogContent }, O)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Lt = {
          getScream: Z,
          clearErrors: ee,
          editScream: function () {
            return function (e) {
              e({ type: "EDIT_SCREAM" });
            };
          },
        },
        Ut = Object(v.b)(function (e) {
          return {
            scream: e.data.scream,
            edit: e.data.edit,
            UI: e.UI,
            user: e.user,
          };
        }, Lt)(
          W()(function (e) {
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
        Mt = a(493),
        Dt = a(495),
        Pt = a(494),
        Bt = (function (e) {
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
                  ue.a.extend(pe.a);
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
                        ? r.a.createElement(Ot, { screamId: i })
                        : null;
                  return r.a.createElement(
                    Mt.a,
                    { className: t.card },
                    r.a.createElement(Pt.a, {
                      image: c,
                      title: "Book image",
                      className: t.image,
                    }),
                    r.a.createElement(
                      Dt.a,
                      { className: t.content },
                      r.a.createElement(
                        fe.a,
                        {
                          variant: "h5",
                          component: d.b,
                          to: "/users/".concat(o),
                          color: "primary",
                        },
                        r.a.createElement("img", {
                          src: c,
                          alt: "Profile",
                          className: t.profileImage,
                        }),
                        o
                      ),
                      E,
                      r.a.createElement(
                        fe.a,
                        { variant: "body2", color: "textSecondary" },
                        ue()(l).fromNow()
                      ),
                      r.a.createElement(fe.a, { variant: "body1" }, n),
                      r.a.createElement(Nt, { screamId: i }),
                      r.a.createElement("span", null, s, " Likes"),
                      r.a.createElement(
                        B,
                        { tip: "comments" },
                        r.a.createElement(je.a, { color: "primary" })
                      ),
                      r.a.createElement("span", null, m, " comments"),
                      r.a.createElement(Ut, {
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
        Ft = Object(v.b)(function (e) {
          return { user: e.user };
        })(
          W()({
            card: {
              position: "relative",
              display: "flex",
              marginBottom: 20,
              marginRight: 20,
            },
            image: { minWidth: "12em", minHeight: "13em" },
            content: { padding: 25, objectFit: "cover" },
            profileImage: {
              width: 47,
              height: 50,
              borderRadius: "10%",
              marginRight: "0.5em",
            },
          })(Bt)
        ),
        Wt = (function (e) {
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
                a.setState(Object(We.a)({}, e.target.name, e.target.value));
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
                      B,
                      {
                        tip: "Edit Details",
                        onClick: this.handleOpen,
                        btnClassName: e.button,
                      },
                      r.a.createElement($.a, { color: "primary" })
                    ),
                    r.a.createElement(
                      Y.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        fullWidth: !0,
                        maxWidth: "sm",
                      },
                      r.a.createElement(V.a, null, "Edit your details"),
                      r.a.createElement(
                        G.a,
                        null,
                        r.a.createElement(
                          "form",
                          null,
                          r.a.createElement(H.a, {
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
                          r.a.createElement(H.a, {
                            name: "website",
                            tpye: "text",
                            label: "Website",
                            placeholder: "Your personal/professinal website",
                            className: e.textField,
                            value: this.state.website,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(H.a, {
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
                          ae.a,
                          { onClick: this.handleClose, color: "primary" },
                          "Cancel"
                        ),
                        r.a.createElement(
                          ae.a,
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
        Ht = Object(v.b)(
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
                      t(U());
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
              };
            },
          }
        )(
          W()(function (e) {
            return Object(S.a)({}, e.spread, { button: { float: "right" } });
          })(Wt)
        ),
        Yt = a(145),
        Gt = a.n(Yt),
        Vt = a(248),
        zt = a(87),
        Kt = a.n(zt),
        Xt = a(88),
        Jt = a.n(Xt),
        qt = a(89),
        $t = a.n(qt),
        Qt = W()(function (e) {
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
            Vt.a,
            { className: t.paper },
            r.a.createElement(
              "div",
              { className: t.profile },
              r.a.createElement(
                "div",
                { className: "image-wrapper" },
                r.a.createElement("img", {
                  src: Gt.a,
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
                r.a.createElement(Kt.a, { color: "primary" }),
                " ",
                r.a.createElement("span", null, "Location"),
                r.a.createElement("hr", null),
                r.a.createElement(Jt.a, { color: "primary" }),
                " https://website.com",
                r.a.createElement("hr", null),
                r.a.createElement($t.a, { color: "primary" }),
                " Joined date"
              )
            )
          );
        }),
        Zt = a(496),
        ea = (function (e) {
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
                    ? r.a.createElement(Qt, null)
                    : h
                    ? r.a.createElement(
                        Vt.a,
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
                              B,
                              {
                                tip: "Edit profile picture",
                                onClick: this.handleEditPicture,
                                btnClassName: "button",
                              },
                              r.a.createElement($.a, { color: "primary" })
                            )
                          ),
                          r.a.createElement("hr", null),
                          r.a.createElement(
                            "div",
                            { className: "profile-details" },
                            r.a.createElement(Ht, null),
                            r.a.createElement(
                              Zt.a,
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
                              r.a.createElement(fe.a, { variant: "body2" }, s),
                            r.a.createElement("hr", null),
                            u &&
                              r.a.createElement(
                                n.Fragment,
                                null,
                                r.a.createElement(Kt.a, { color: "primary" }),
                                " ",
                                r.a.createElement("span", null, u),
                                r.a.createElement("hr", null)
                              ),
                            m &&
                              r.a.createElement(
                                n.Fragment,
                                null,
                                r.a.createElement(Jt.a, { color: "primary" }),
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
                            r.a.createElement($t.a, { color: "primary" }),
                            " ",
                            r.a.createElement(
                              "span",
                              null,
                              "Joined ",
                              ue()(o).format("MMM YYYY")
                            )
                          )
                        )
                      )
                    : r.a.createElement(
                        Vt.a,
                        { className: t.paper },
                        r.a.createElement(
                          fe.a,
                          { variant: "body2", align: "center" },
                          "No profile found, please login again"
                        ),
                        r.a.createElement(
                          "div",
                          { className: t.buttons },
                          r.a.createElement(
                            ae.a,
                            {
                              variant: "contained",
                              color: "primary",
                              component: d.b,
                              to: "/login",
                            },
                            "Login"
                          ),
                          r.a.createElement(
                            ae.a,
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
        ta = {
          uploadImage: function (e) {
            return function (t) {
              t({ type: "LOADING_USER" }),
                _.a
                  .post("/user/image", e)
                  .then(function () {
                    t(U());
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
            };
          },
        },
        aa = Object(v.b)(function (e) {
          return { user: e.user };
        }, ta)(
          W()(function (e) {
            return Object(S.a)({}, e.spread);
          })(ea)
        ),
        na = W()(function (e) {
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
                Mt.a,
                { className: t.card, key: a },
                r.a.createElement(Pt.a, { className: t.cover, image: Gt.a }),
                r.a.createElement(
                  Dt.a,
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
        ra = (function (e) {
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
                      ? r.a.createElement(na, null)
                      : t.map(function (e) {
                          return r.a.createElement(Ft, {
                            key: e.screamId,
                            scream: e,
                          });
                        });
                  return r.a.createElement(
                    ft.a,
                    { container: !0, spacing: 16 },
                    r.a.createElement(ft.a, { item: !0, sm: 8, xs: 12 }, a),
                    r.a.createElement(
                      ft.a,
                      { item: !0, sm: 4, xs: 12 },
                      r.a.createElement(aa, null)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        la = Object(v.b)(
          function (e) {
            return { data: e.data };
          },
          { getScreams: Q }
        )(ra),
        ca = a(146),
        oa = a.n(ca),
        ia = (function (e) {
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
                e.setState(Object(We.a)({}, t.target.name, t.target.value));
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
                      ft.a,
                      { container: !0, className: t.form },
                      r.a.createElement(ft.a, { item: !0, sm: !0 }),
                      r.a.createElement(
                        ft.a,
                        { item: !0, sm: !0 },
                        r.a.createElement("img", {
                          src: oa.a,
                          alt: "proudtalelog",
                          className: t.image,
                        }),
                        r.a.createElement(
                          fe.a,
                          { variant: "h4", className: t.pageTitle },
                          "Login"
                        ),
                        r.a.createElement(
                          "form",
                          { noValidate: !0, onSubmit: this.handleSubmit },
                          r.a.createElement(H.a, {
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
                          r.a.createElement(H.a, {
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
                              fe.a,
                              { variant: "body2", className: t.customError },
                              n.general
                            ),
                          r.a.createElement(
                            ae.a,
                            {
                              type: "submit",
                              variant: "contained",
                              color: "primary",
                              className: t.button,
                              disabled: a,
                            },
                            "Login",
                            a &&
                              r.a.createElement(ne.a, {
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
                      r.a.createElement(ft.a, { item: !0, sm: !0 })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        sa = {
          loginUser: function (e, t) {
            return function (a) {
              a({ type: "LOADING_UI" }),
                _.a
                  .post("/login", e)
                  .then(function (e) {
                    M(e.data.token),
                      a(U()),
                      a({ type: "CLEAR_ERRORS" }),
                      t.push("/");
                  })
                  .catch(function (e) {
                    a({ type: "SET_ERRORS", payload: e.response.data });
                  });
            };
          },
        },
        ma = Object(v.b)(function (e) {
          return { user: e.user, UI: e.UI };
        }, sa)(
          W()(function (e) {
            return Object(S.a)({}, e.spread, {
              loginStyle: {
                background: "white",
                padding: "2em",
                borderRadius: "1em",
                marginTop: "3em",
              },
            });
          })(ia)
        ),
        ua = a(497),
        da = a(501),
        pa = (function (e) {
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
                e.setState(Object(We.a)({}, t.target.name, t.target.value));
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
                      ft.a,
                      { container: !0, className: t.form },
                      r.a.createElement(ft.a, { item: !0, sm: !0 }),
                      r.a.createElement(
                        ft.a,
                        { item: !0, sm: !0 },
                        r.a.createElement("img", {
                          src: oa.a,
                          alt: "proudtale",
                          className: t.image,
                        }),
                        r.a.createElement(
                          fe.a,
                          { variant: "h4", className: t.pageTitle },
                          "Register"
                        ),
                        r.a.createElement(
                          "form",
                          { noValidate: !0, onSubmit: this.handleSubmit },
                          r.a.createElement(H.a, {
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
                          r.a.createElement(H.a, {
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
                          r.a.createElement(H.a, {
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
                          r.a.createElement(H.a, {
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
                              fe.a,
                              { variant: "body2", className: t.customError },
                              n.general
                            ),
                          r.a.createElement(ua.a, {
                            control: r.a.createElement(da.a, {
                              color: "primary",
                              name: "agreement",
                            }),
                            value: "I agree",
                            label: "I agree to the Proudtale Agreement",
                          }),
                          r.a.createElement(
                            ae.a,
                            {
                              type: "submit",
                              variant: "contained",
                              color: "primary",
                              className: t.button,
                              disabled: a,
                            },
                            "Register",
                            a &&
                              r.a.createElement(ne.a, {
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
                      r.a.createElement(ft.a, { item: !0, sm: !0 })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        ha = Object(v.b)(
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
                        a(U()),
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
          W()(function (e) {
            return Object(S.a)({}, e.spread, {
              registerStyle: {
                background: "white",
                padding: "2em",
                borderRadius: "1em",
                marginTop: "3em",
              },
            });
          })(pa)
        ),
        Ea = W()(function (e) {
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
            Vt.a,
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
                  Zt.a,
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
                i && r.a.createElement(fe.a, { variant: "body2" }, i),
                r.a.createElement("hr", null),
                m &&
                  r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(Kt.a, { color: "primary" }),
                    " ",
                    r.a.createElement("span", null, m),
                    r.a.createElement("hr", null)
                  ),
                s &&
                  r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(Jt.a, { color: "primary" }),
                    r.a.createElement(
                      "a",
                      { href: s, target: "_blank", rel: "noopener noreferrer" },
                      " ",
                      s
                    ),
                    r.a.createElement("hr", null)
                  ),
                r.a.createElement($t.a, { color: "primary" }),
                " ",
                r.a.createElement(
                  "span",
                  null,
                  "Joined ",
                  ue()(c).format("MMM YYYY")
                )
              )
            )
          );
        }),
        fa = (function (e) {
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
                      ? r.a.createElement(na, null)
                      : null === t
                      ? r.a.createElement(
                          "p",
                          null,
                          "No screams from this user"
                        )
                      : n
                      ? t.map(function (e) {
                          return e.screamId !== n
                            ? r.a.createElement(Ft, {
                                key: e.screamId,
                                scream: e,
                              })
                            : r.a.createElement(Ft, {
                                key: e.screamId,
                                scream: e,
                                openDialog: !0,
                              });
                        })
                      : t.map(function (e) {
                          return r.a.createElement(Ft, {
                            key: e.screamId,
                            scream: e,
                          });
                        });
                  return r.a.createElement(
                    ft.a,
                    { container: !0, spacing: 10 },
                    r.a.createElement(ft.a, { item: !0, sm: 8, xs: 12 }, l),
                    r.a.createElement(
                      ft.a,
                      { item: !0, sm: 4, xs: 12 },
                      null === this.state.profile
                        ? r.a.createElement(Qt, null)
                        : r.a.createElement(Ea, { profile: this.state.profile })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        ba = Object(v.b)(
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
        )(fa),
        ga = (function (e) {
          function t() {
            var e, a;
            Object(o.a)(this, t);
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { value: a.props.match.params.searchValue }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentWillMount",
                value: function () {
                  this.props.searchScreams(
                    this.state.value,
                    this.props.data.screams
                  );
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  var t = this.props.match.params.searchValue;
                  e.match.params.searchValue !== t &&
                    (this.setState({ value: t }),
                    this.props.searchScreams(t, this.props.data.screams));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.data,
                    t = e.filteredScreams,
                    a = e.loading
                      ? r.a.createElement(na, null)
                      : t.length < 1
                      ? r.a.createElement(
                          fe.a,
                          { variant: "h6" },
                          " No results"
                        )
                      : t.map(function (e) {
                          return r.a.createElement(Ft, {
                            key: e.screamId,
                            scream: e,
                          });
                        });
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      fe.a,
                      { variant: "h4" },
                      "Results for ",
                      this.state.value
                    ),
                    a
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        ya = {
          searchScreams: function (e, t) {
            return function (a) {
              a({ type: "LOADING_DATA" }),
                t.length < 1
                  ? _.a
                      .get("/screams")
                      .then(function (e) {
                        a({ type: "SET_SCREAMS", payload: e.data });
                      })
                      .then(function () {
                        a({ type: "SEARCH_SCREAM", payload: e });
                      })
                  : a({ type: "SEARCH_SCREAM", payload: e });
            };
          },
          getScreams: Q,
        },
        va = Object(v.b)(function (e) {
          return { data: e.data };
        }, ya)(ga),
        Oa = b()({
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
      var Ca = localStorage.FBIdToken;
      Ca &&
        (1e3 * y()(Ca).exp < Date.now()
          ? (R.dispatch(L()), (window.location.href = "/login"))
          : (R.dispatch({ type: "SET_AUTHENTICATED" }),
            (_.a.defaults.headers.common.Authorization = Ca),
            R.dispatch(U())));
      var ja = (function (e) {
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
                  { theme: Oa },
                  r.a.createElement(
                    v.a,
                    { store: R },
                    r.a.createElement(
                      d.a,
                      null,
                      r.a.createElement(rt, null),
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
                              component: Et,
                            }),
                            r.a.createElement(p.b, {
                              exact: !0,
                              path: "/community",
                              component: la,
                            }),
                            r.a.createElement(ct, {
                              exact: !0,
                              path: "/login",
                              component: ma,
                            }),
                            r.a.createElement(ct, {
                              exact: !0,
                              path: "/signup",
                              component: ha,
                            }),
                            r.a.createElement(p.b, {
                              exact: !0,
                              path: "/users/:handle",
                              component: ba,
                            }),
                            r.a.createElement(p.b, {
                              exact: !0,
                              path: "/users/:handle/scream/:screamId",
                              component: ba,
                            }),
                            r.a.createElement(p.b, {
                              exact: !0,
                              path: "/search/:searchValue",
                              component: va,
                            }),
                            r.a.createElement(p.b, {
                              exact: !0,
                              path: "/search",
                              component: va,
                            })
                          )
                        )
                      ),
                      r.a.createElement(it, null)
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
      a(453), a(454), a(455);
      c.a.render(r.a.createElement(ja, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[270, 1, 2]],
]);
//# sourceMappingURL=main.26bd8c3b.chunk.js.map
