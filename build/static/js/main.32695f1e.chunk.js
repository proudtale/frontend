(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    101: function (e, t, a) {
      e.exports = a.p + "static/media/no-img.6732bd42.png";
    },
    166: function (e, t, a) {
      e.exports = a.p + "static/media/proudtale.a5eb20a3.png";
    },
    266: function (e, t, a) {
      e.exports = a.p + "static/media/publishbookicon.7e09a524.png";
    },
    268: function (e, t, a) {
      e.exports = a.p + "static/media/no-book-img.bfea21da.png";
    },
    271: function (e, t, a) {
      e.exports = a.p + "static/media/proudtale404.527ba23f.png";
    },
    291: function (e, t, a) {
      e.exports = a(483);
    },
    296: function (e, t, a) {},
    483: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(23),
        l = a.n(o),
        i = a(10),
        c = a(9),
        s = a(12),
        m = a(11),
        u = a(13),
        p = a(18),
        d = a(71),
        h = (a(296), a(274)),
        g = a.n(h),
        b = a(192),
        E = a.n(b),
        f = a(248),
        y = a.n(f),
        v = a(7),
        C = a(516),
        O = a(517),
        k = function (e) {
          var t = e.children,
            a = e.onClick,
            n = e.tip,
            o = e.btnClassName,
            l = e.tipClassName;
          return r.a.createElement(
            C.a,
            { title: n, className: l, placement: "top" },
            r.a.createElement(O.a, { onClick: a, className: o }, t)
          );
        },
        S = a(37),
        I = a.n(S),
        N = a(93),
        j = a.n(N),
        A = a(275),
        x = a(519),
        w = a(56),
        B = a(518),
        T = a(169),
        D = a.n(T),
        R = a(158),
        U = a.n(R),
        L = a(94),
        P = a.n(L),
        F = a(16),
        M = a(19),
        K = a.n(M),
        H = function () {
          return function (e) {
            localStorage.removeItem("FBIdToken"),
              delete K.a.defaults.headers.common.Authorization,
              e({ type: "SET_UNAUTHENTICATED" });
          };
        },
        z = function () {
          return function (e) {
            e({ type: "LOADING_USER" }),
              K.a
                .get("/user")
                .then(function (t) {
                  e({ type: "SET_USER", payload: t.data });
                })
                .catch(function (e) {
                  return console.log(e);
                });
          };
        },
        W = function (e) {
          var t = "Bearer ".concat(e);
          localStorage.setItem("FBIdToken", t),
            (K.a.defaults.headers.common.Authorization = t);
        },
        Q = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
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
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this,
                    a = this.props.notifications,
                    o = this.state.anchorEl;
                  I.a.extend(j.a),
                    (e =
                      a &&
                      a.length > 0 &&
                      a.filter(function (e) {
                        return !1 === e.read;
                      }).length > 0
                        ? r.a.createElement(
                            B.a,
                            {
                              badgeContent: a.filter(function (e) {
                                return !1 === e.read;
                              }).length,
                              color: "secondary",
                            },
                            r.a.createElement(D.a, null)
                          )
                        : r.a.createElement(D.a, null));
                  var l =
                    a && a.length > 0
                      ? a.map(function (e) {
                          var a = "like" === e.type ? "liked" : "commented on",
                            n = I()(e.createdAt).fromNow(),
                            o = e.read ? "primary" : "secondary",
                            l =
                              "like" === e.type
                                ? r.a.createElement(U.a, {
                                    color: o,
                                    style: { marginRight: 10 },
                                  })
                                : r.a.createElement(P.a, {
                                    color: o,
                                    style: { marginRight: 10 },
                                  });
                          return r.a.createElement(
                            x.a,
                            { key: e.createdAt, onClick: t.handleClose },
                            l,
                            r.a.createElement(
                              w.a,
                              {
                                component: p.b,
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
                          x.a,
                          { onClick: this.handleClose },
                          "You have no notifications yet"
                        );
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      C.a,
                      { placement: "top", title: "Notifications" },
                      r.a.createElement(
                        O.a,
                        {
                          "aria-owns": o ? "simple-menu" : void 0,
                          "aria-haspopup": "true",
                          onClick: this.handleOpen,
                        },
                        e
                      )
                    ),
                    r.a.createElement(
                      A.a,
                      {
                        anchorEl: o,
                        open: Boolean(o),
                        onClose: this.handleClose,
                        onEntered: this.onMenuOpened,
                      },
                      l
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        G = Object(F.b)(
          function (e) {
            return { notifications: e.user.notifications };
          },
          {
            markNotificationsRead: function (e) {
              return function (t) {
                K.a
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
        )(Q),
        V = a(523),
        Y = a(524),
        X = a(15),
        q = a.n(X),
        Z = a(546),
        J = a(197),
        _ = a.n(J),
        $ = a(256),
        ee = a.n($),
        te = a(257),
        ae = a.n(te),
        ne = a(258),
        re = a.n(ne),
        oe = a(255),
        le = a.n(oe),
        ie = a(36),
        ce = a(6),
        se = a(491),
        me = a(544),
        ue = a(253),
        pe = a.n(ue),
        de = a(521);
      var he = Object(F.b)(function (e) {
          return { screams: e.data.screams };
        })(
          Object(ce.a)(function (e) {
            return Object(v.a)({}, e.spread, {
              search: Object(ie.a)(
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
              inputInput: Object(ie.a)(
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
              n = Object(me.a)({
                id: "search-hook",
                options: a,
                getOptionLabel: function (e) {
                  return e.title;
                },
              }),
              o = n.getRootProps,
              l = n.getInputLabelProps,
              i = n.getInputProps,
              c = n.getListboxProps,
              s = n.getOptionProps,
              m = n.groupedOptions,
              u = n.inputValue,
              h = Object(d.g)();
            return r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "div",
                Object.assign({ className: t.search }, o()),
                r.a.createElement(
                  p.b,
                  { to: "/search" },
                  r.a.createElement(
                    "label",
                    Object.assign({ className: t.searchIcon }, l()),
                    r.a.createElement(pe.a, null)
                  )
                ),
                r.a.createElement(
                  se.a,
                  Object.assign(
                    { classes: { root: t.inputRoot, input: t.inputInput } },
                    i(),
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
                  p.b,
                  { to: "/search/".concat(u) },
                  r.a.createElement(de.a, { className: t.button }, "Search")
                )
              ),
              m.length > 0
                ? r.a.createElement(
                    "ul",
                    Object.assign({ className: t.listBox }, c()),
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
        ge = a(102),
        be = a(485),
        Ee = a(520),
        fe = a(254),
        ye = a.n(fe),
        ve = a(522),
        Ce = Object(ve.a)(function (e) {
          return {
            menuList: { backgroundColor: "#1c2a48", color: "white" },
            menuItem: { color: "inherit" },
          };
        });
      function Oe(e) {
        var t = e.authenticated,
          a = e.logoutUser,
          o = Ce(),
          l = Object(n.useState)(null),
          i = Object(ge.a)(l, 2),
          c = i[0],
          s = i[1],
          m = function (e) {
            s(c ? null : e.currentTarget);
          };
        return r.a.createElement(
          Z.a,
          { display: { xs: "block", sm: "none" } },
          r.a.createElement(G, { tip: "Notification" }),
          r.a.createElement(
            O.a,
            {
              "aria-controls": "customized-menu",
              "aria-haspopup": "true",
              variant: "contained",
              color: "primary",
              onClick: m,
            },
            r.a.createElement(ye.a, null)
          ),
          r.a.createElement(
            be.a,
            {
              elevation: 0,
              getContentAnchorEl: null,
              anchorEl: c,
              open: Boolean(c),
              transition: !0,
            },
            r.a.createElement(
              Ee.a,
              { className: o.menuList },
              t
                ? r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      p.b,
                      { to: "/", className: o.menuItem },
                      r.a.createElement(x.a, { onClick: m }, "Home")
                    ),
                    r.a.createElement(
                      p.b,
                      { to: "community", className: o.menuItem },
                      r.a.createElement(x.a, { onClick: m }, "Community")
                    ),
                    r.a.createElement(
                      x.a,
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
                      p.b,
                      { className: o.menuItem, to: "/", onClick: m },
                      r.a.createElement(x.a, null, "Home")
                    ),
                    r.a.createElement(
                      p.b,
                      { className: o.menuItem, to: "login", onClick: m },
                      r.a.createElement(x.a, null, "Login")
                    )
                  )
            )
          )
        );
      }
      var ke = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
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
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    a = e.credentials,
                    n = a.imageUrl,
                    o = a.handle,
                    l = e.authenticated;
                  return r.a.createElement(
                    V.a,
                    null,
                    r.a.createElement(
                      Y.a,
                      {
                        className:
                          "nav-container mdb-color darken-3 d-flex justify-content-between",
                      },
                      r.a.createElement(
                        "div",
                        { className: "d-flex" },
                        r.a.createElement(
                          p.b,
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
                      r.a.createElement(he, null),
                      l
                        ? r.a.createElement(
                            Z.a,
                            { display: { xs: "none", sm: "block" } },
                            r.a.createElement(
                              p.b,
                              { to: "/users/".concat(o), variant: "h5" },
                              r.a.createElement(
                                k,
                                { tip: "Profile" },
                                r.a.createElement(
                                  "h4",
                                  { className: t.navbarHandle },
                                  o
                                ),
                                r.a.createElement("img", {
                                  src: n,
                                  alt: "profile",
                                  className: t.navbarImage,
                                })
                              )
                            ),
                            r.a.createElement(G, { tip: "Notification" }),
                            r.a.createElement(
                              p.b,
                              { to: "/" },
                              r.a.createElement(
                                k,
                                { tip: "Home" },
                                r.a.createElement(_.a, null)
                              )
                            ),
                            r.a.createElement(
                              p.b,
                              { to: "/contentcreation/".concat(o) },
                              r.a.createElement(
                                k,
                                { tip: "Content Creation" },
                                r.a.createElement(le.a, null)
                              )
                            ),
                            r.a.createElement(
                              p.b,
                              { to: "/community" },
                              r.a.createElement(
                                k,
                                { tip: "Community" },
                                r.a.createElement(ee.a, null)
                              )
                            ),
                            r.a.createElement(
                              k,
                              { tip: "Logout", onClick: this.handleLogout },
                              r.a.createElement(ae.a, { color: "primary" })
                            )
                          )
                        : r.a.createElement(
                            Z.a,
                            { display: { xs: "none", sm: "block" } },
                            r.a.createElement(
                              p.b,
                              { to: "/" },
                              r.a.createElement(
                                k,
                                { tip: "Home" },
                                r.a.createElement(_.a, null)
                              )
                            ),
                            r.a.createElement(
                              p.b,
                              { to: "login" },
                              r.a.createElement(
                                k,
                                { tip: "Login" },
                                r.a.createElement(re.a, null)
                              )
                            )
                          ),
                      r.a.createElement(Oe, {
                        logoutUser: this.props.logoutUser,
                        authenticated: l,
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Se = { logoutUser: H },
        Ie = Object(F.b)(function (e) {
          return {
            credentials: e.user.credentials,
            authenticated: e.user.authenticated,
          };
        }, Se)(
          q()(function (e) {
            return Object(v.a)({}, e.spread, {
              navbarImage: { width: 35, height: 35, borderRadius: "10%" },
              navbarHandle: {
                fontSize: "1em",
                display: "inline",
                margin: "0.1em 0.5em 0 0",
                color: "white",
              },
              navbarTitle: { marginTop: "0.9em", fontFamily: "cursive" },
            });
          })(ke)
        ),
        Ne = a(72),
        je = (function (e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    Ne.e,
                    {
                      color: "mdb-color darken-3",
                      className: "font-small pt-4 mt-4",
                    },
                    r.a.createElement(
                      Ne.d,
                      { fluid: !0 },
                      r.a.createElement(
                        Ne.j,
                        { className: "justify-content-center" },
                        r.a.createElement(
                          Ne.c,
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
                          Ne.c,
                          { md: "3" },
                          r.a.createElement(
                            "h5",
                            { className: "title font-weight-bolder" },
                            "Proudtale Advertising"
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
                          Ne.c,
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
                        Ne.d,
                        { fluid: !0 },
                        "\xa9 ",
                        new Date().getFullYear(),
                        " Copyright:",
                        " ",
                        r.a.createElement(
                          "a",
                          { href: "https://proudtale.com/" },
                          " proudtale.com"
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
        Ae = a(97),
        xe = Object(F.b)(function (e) {
          return { authenticated: e.user.authenticated };
        })(function (e) {
          var t = e.component,
            a = e.authenticated,
            n = Object(Ae.a)(e, ["component", "authenticated"]);
          return r.a.createElement(
            d.b,
            Object.assign({}, n, {
              render: function (e) {
                return !1 === a
                  ? r.a.createElement(d.a, { to: "/" })
                  : r.a.createElement(t, e);
              },
            })
          );
        }),
        we = a(199),
        Be = a.n(we),
        Te = a(530),
        De = a(531),
        Re = a(533),
        Ue = a(532),
        Le = a(529),
        Pe = a(264),
        Fe = a.n(Pe),
        Me = a(525),
        Ke = a(528),
        He = a(527),
        ze = a(548),
        We = a(526),
        Qe = a(39),
        Ge = a.n(Qe),
        Ve = a(98),
        Ye = a.n(Ve),
        Xe = Object(ve.a)(function (e) {
          return Object(v.a)({}, e.spread, {
            root: { height: "3em" },
            closeButton: { position: "absolute", left: "90%" },
            dialogContent: { padding: 30, lineHeight: "30px" },
            logo: { margin: e.spacing(3) },
            logoRoot: { height: "80px", width: "80px" },
            hoverShadow: {
              "&:hover": { textShadow: "2px -1px 3px rgba(0,0,0,0.24)" },
            },
          });
        });
      function qe() {
        var e = Xe(),
          t = Object(n.useState)(!1),
          a = Object(ge.a)(t, 2),
          o = a[0],
          l = a[1],
          i = function () {
            l(!1);
          };
        return r.a.createElement(
          n.Fragment,
          null,
          r.a.createElement(
            w.a,
            {
              className: e.root,
              onClick: function () {
                l(!0);
              },
              component: "a",
              classes: { root: e.hoverShadow },
            },
            "Copyright details"
          ),
          r.a.createElement(
            Me.a,
            { open: o, onClose: i, fullWidth: !0, maxWidth: "sm" },
            r.a.createElement(
              k,
              { tip: "Close", onClick: i, tipClassName: e.closeButton },
              r.a.createElement(Ge.a, null)
            ),
            r.a.createElement(
              We.a,
              { container: !0, justify: "center" },
              r.a.createElement(
                We.a,
                { item: !0 },
                r.a.createElement(ze.a, {
                  alt: "proudtale logo",
                  src: Ye.a,
                  className: e.logo,
                  classes: { root: e.logoRoot },
                })
              ),
              r.a.createElement(
                We.a,
                { item: !0, xs: 12 },
                r.a.createElement(
                  He.a,
                  { className: e.dialogContent },
                  "THIS IS STATIC CONTENT FOR NOW. WILL BE REPLACED WITH PROPS LATER. Copyright \xa9 2010 by Bill Shakespeare All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the publisher, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law. For permission requests, write to the publisher, addressed \u201cAttention: Permissions Coordinator,\u201d at the address below. Imaginary Press 1233 Pennsylvania Avenue San Francisco, CA 94909 www.imaginarypress.com Ordering Information: Quantity sales. Special discounts are available on quantity purchases by corporations, associations, and others. For details, contact the publisher at the address above. Orders by U.S. trade bookstores and wholesalers. Please contact Big Distribution: Tel: (800) 800-8000; Fax: (800) 800-8001 or visit www.bigbooks.com. Printed in the United States of America"
                )
              )
            )
          )
        );
      }
      var Ze = a(263),
        Je = a.n(Ze),
        _e = a(161),
        $e = a.n(_e),
        et = a(160),
        tt = a.n(et),
        at = a(99),
        nt = a.n(at),
        rt = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { open: !1 }),
              (a.handleOpen = function (e) {
                a.setState({ open: !0 });
              }),
              (a.handleClose = function () {
                a.setState({ open: !1 });
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes;
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      k,
                      {
                        tip: "Learn more",
                        onClick: this.handleOpen,
                        btnClassName: e.infoButton,
                      },
                      r.a.createElement(Je.a, null)
                    ),
                    r.a.createElement(
                      Me.a,
                      {
                        className: e.dialog,
                        open: this.state.open,
                        onClose: this.handleClose,
                        maxWidth: "52em",
                        scroll: "body",
                        "aria-labelledby": "yes-no-dialog",
                      },
                      r.a.createElement(
                        Ke.a,
                        null,
                        r.a.createElement(
                          k,
                          {
                            tip: "Close",
                            onClick: this.handleClose,
                            tipClassName: e.closeButton,
                            ml: 20,
                          },
                          r.a.createElement(Ge.a, null)
                        )
                      ),
                      r.a.createElement(
                        He.a,
                        { diviers: !0, className: e.dialogContent },
                        r.a.createElement(
                          Z.a,
                          { className: e.bookCover },
                          r.a.createElement(Le.a, {
                            component: "img",
                            alt: "".concat(this.props.title, "'s cover"),
                            image: this.props.bookImage,
                          })
                        ),
                        r.a.createElement(
                          Z.a,
                          {
                            className: e.bookContent,
                            display: "flex",
                            flexDirection: "column",
                          },
                          r.a.createElement(
                            Z.a,
                            { className: e.bookContentText },
                            r.a.createElement(
                              w.a,
                              {
                                gutterBottom: !0,
                                variant: "h6",
                                component: "h6",
                                align: "center",
                              },
                              this.props.title
                            ),
                            r.a.createElement(
                              Z.a,
                              { className: e.bookContentAuthor },
                              r.a.createElement(ze.a, {
                                src: this.props.userImage,
                              }),
                              r.a.createElement(
                                w.a,
                                {
                                  gutterBottom: !0,
                                  variant: "subtitle1",
                                  component: "span",
                                  color: "primary",
                                },
                                this.props.author
                              )
                            ),
                            r.a.createElement(
                              We.a,
                              {
                                container: !0,
                                className: e.bookContentComment,
                              },
                              r.a.createElement(
                                "span",
                                { className: e.iconParent },
                                r.a.createElement(tt.a, {
                                  className: e.icon,
                                  color: "primary",
                                }),
                                " 3"
                              ),
                              r.a.createElement(
                                "span",
                                { className: e.iconParent },
                                r.a.createElement($e.a, {
                                  className: e.icon,
                                  color: "primary",
                                }),
                                " ",
                                "3"
                              ),
                              r.a.createElement(
                                "span",
                                { className: e.iconParent },
                                r.a.createElement(nt.a, {
                                  className: e.icon,
                                  color: "primary",
                                }),
                                " ",
                                "3"
                              )
                            ),
                            r.a.createElement("br", null),
                            r.a.createElement(
                              w.a,
                              {
                                gutterBottom: !0,
                                variant: "subtitle1",
                                component: "span",
                                color: "primary",
                                align: "left",
                              },
                              "Synopsis"
                            ),
                            r.a.createElement("br", null),
                            r.a.createElement(
                              w.a,
                              {
                                gutterBottom: !0,
                                variant: "body1",
                                component: "p",
                                align: "center",
                              },
                              this.props.desc
                            ),
                            r.a.createElement(qe, null)
                          ),
                          r.a.createElement(
                            Z.a,
                            {
                              className: e.bookContentButton,
                              display: "flex",
                              justifyContent: "center",
                            },
                            r.a.createElement(
                              de.a,
                              { className: e.readmoreButton, color: "primary" },
                              "Read More"
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
        ot = q()(function (e) {
          return Object(v.a)({}, e.spread, {
            infoButton: { padding: "0", color: "#1c2a48" },
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
            dialogContent: {
              display: "flex",
              justifyContent: "space-between",
              padding: "0 2.5em 2.5em 2.5em",
            },
            bookCover: {
              width: "20em",
              "& img": {
                width: "20em",
                height: "25em",
                boxShadow: "5px 5px 5px rgba(0,0,0,0.3)",
                borderRadius: "2px",
              },
            },
            bookContent: { width: "20em", margin: "1em 0 0 1em" },
            bookContentText: {
              maxHeight: "21.5em",
              "& h6": {
                fontSize: "0.9em",
                wordWrap: "break-word",
                marginBottom: "1.4em",
                maxHeight: "2.5em",
              },
              "& p": {
                height: "10em",
                wordWrap: "break-word",
                overflowY: "auto",
                marginBottom: "0.5em",
              },
            },
            bookContentAuthor: {
              display: "flex",
              justifyContent: "end",
              "& span": { padding: "0.4em 0 0 0.4em" },
            },
            readmoreButton: {
              border: "solid #1c2a48",
              color: "#1c2a48",
              fontWeight: "bold",
              margin: "0",
              width: "100%",
              "&:hover": { background: "#1c2a48", color: "white" },
            },
            bookContentButton: { marginTop: "0.5em" },
            bookContentComment: { marginTop: "0.3em", marginBottom: "-1.2em" },
            iconParent: {
              margin: "0 1rem",
              display: "inline-flex",
              verticalAlign: "middle",
            },
          });
        })(rt);
      function lt(e) {
        return e.length < 14 ? e : e.substring(0, 13) + "...";
      }
      var it = (function (e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props.book,
                    a = t.bookImage,
                    o = t.author,
                    l = t.title,
                    i = t.desc,
                    c = t.userImage,
                    s = this.props.classes;
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      Te.a,
                      { className: s.root },
                      r.a.createElement(
                        De.a,
                        null,
                        r.a.createElement(Le.a, {
                          className: s.media,
                          image: a,
                          title: l,
                        }),
                        r.a.createElement(
                          Ue.a,
                          { className: s.content },
                          r.a.createElement(
                            w.a,
                            {
                              className: s.title,
                              gutterBottom: !0,
                              variant: "h6",
                              component: "h6",
                              align: "center",
                            },
                            lt(l)
                          ),
                          r.a.createElement(
                            w.a,
                            {
                              className: s.desc,
                              variant: "body2",
                              color: "textSecondary",
                              component: "p",
                            },
                            (e = i.replace(/(<([^>]+)>)/g, "")).length < 14
                              ? e
                              : e.substring(0, 139) + "..."
                          )
                        )
                      ),
                      r.a.createElement(
                        Re.a,
                        { className: s.cardActions },
                        r.a.createElement(
                          de.a,
                          { size: "small", className: s.button },
                          r.a.createElement(Fe.a, null)
                        ),
                        r.a.createElement(ot, {
                          bookImage: a,
                          author: o,
                          title: l,
                          desc: i.replace(/(<([^>]+)>)/g, ""),
                          userImage: c,
                        })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        ct = q()({
          root: { marginBottom: "2em", marginLeft: "0.5em", width: "22em" },
          media: { height: 280, backgroundSize: "cover" },
          content: { height: 200 },
          cardActions: { display: "flex", justifyContent: "right" },
          button: {
            color: "#1c2a48",
            "&:nth-child(2)": { marginLeft: "-1em" },
          },
          title: {
            marginTop: "0.5em",
            wordWrap: "break-word",
            fontSize: "1rem",
          },
          desc: {
            marginTop: "1em",
            wordWrap: "break-word",
            height: "10em",
            overflowY: "auto",
          },
        })(it),
        st =
          (a(374),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(i.a)(this, t),
                ((a = Object(s.a)(
                  this,
                  Object(m.a)(t).call(this, e)
                )).onChange = function (e) {
                  a.setState({ value: e });
                }),
                (a.state = { value: 0 }),
                a
              );
            }
            return (
              Object(u.a)(t, e),
              Object(c.a)(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.books;
                    return r.a.createElement(
                      n.Fragment,
                      null,
                      r.a.createElement(
                        "h1",
                        { className: "category" },
                        this.props.category
                      ),
                      r.a.createElement(
                        Be.a,
                        {
                          value: this.state.value,
                          onChange: this.onChange,
                          infinite: !0,
                          slidesPerPage: 5,
                          centered: !0,
                        },
                        e.map(function (e) {
                          return r.a.createElement(ct, { book: e });
                        })
                      ),
                      r.a.createElement(we.Dots, {
                        value: this.state.value,
                        onChange: this.onChange,
                        number: 6,
                      })
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        mt = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { popularBook: [], isLoading: !0, error: null }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "getPopluarBook",
                value: function () {
                  var e = this;
                  K()({
                    method: "GET",
                    url:
                      "https://us-central1-socialape-aa1d6.cloudfunctions.net/api/books",
                    params: { format: "json" },
                  })
                    .then(function (e) {
                      return e.data.map(function (e, t) {
                        return {
                          index: t,
                          title: e.title,
                          author: e.userHandle,
                          bookImage: e.bookImageUrl,
                          desc: e.desc,
                          userImage: e.userImage,
                        };
                      });
                    })
                    .then(function (t) {
                      e.setState({ popularBook: t, isLoading: !1 });
                    })
                    .catch(function (t) {
                      e.setState({ error: t, isLoading: !1 });
                    });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.getPopluarBook();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.isLoading,
                    a = e.popularBook;
                  return r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(
                      "div",
                      null,
                      t
                        ? r.a.createElement("h4", null, "Loading ...")
                        : r.a.createElement(st, {
                            category: "Popular",
                            books: a,
                          })
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      t
                        ? r.a.createElement("h4", null, "Loading ...")
                        : r.a.createElement(st, {
                            category: "Fairy Tale",
                            books: a,
                          })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        ut = q()(function (e) {
          return Object(v.a)({}, e.spread);
        })(mt),
        pt = a(534),
        dt = a(162),
        ht = a.n(dt),
        gt = function () {
          return function (e) {
            e({ type: "LOADING_DATA" }),
              K.a
                .get("/screams")
                .then(function (t) {
                  e({ type: "SET_SCREAMS", payload: t.data });
                })
                .catch(function (t) {
                  e({ type: "SET_SCREAMS", payload: [] });
                });
          };
        },
        bt = function (e) {
          return function (t) {
            t({ type: "LOADING_UI" }),
              K.a
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
        Et = function () {
          return function (e) {
            e({ type: "CLEAR_ERRORS" });
          };
        },
        ft = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
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
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes;
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      k,
                      {
                        tip: "Delete Book",
                        onClick: this.handleOpen,
                        btnClassName: e.deleteButton,
                      },
                      r.a.createElement(ht.a, { color: "secondary" })
                    ),
                    r.a.createElement(
                      Me.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        fullWidth: !0,
                        maxWidth: "sm",
                      },
                      r.a.createElement(
                        Ke.a,
                        null,
                        "Are you sure you want to delete this scream ?"
                      ),
                      r.a.createElement(
                        pt.a,
                        null,
                        r.a.createElement(
                          de.a,
                          { onClick: this.handleClose, color: "primary" },
                          "Cancel"
                        ),
                        r.a.createElement(
                          de.a,
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
        yt = Object(F.b)(null, {
          deleteScream: function (e) {
            return function (t) {
              K.a
                .delete("/scream/".concat(e))
                .then(function () {
                  t({ type: "DELETE_SCREAM", payload: e }), console.log(e);
                })
                .catch(function (e) {
                  return console.log(e);
                });
            };
          },
        })(
          q()({
            deleteButton: { position: "absolute", left: "90%", top: "10%" },
          })(ft)
        ),
        vt = a(200),
        Ct = a.n(vt),
        Ot = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
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
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  return this.props.user.authenticated
                    ? this.likedScream()
                      ? r.a.createElement(
                          k,
                          { tip: "Undo like", onClick: this.unlikeScream },
                          r.a.createElement(U.a, { color: "primary" })
                        )
                      : r.a.createElement(
                          k,
                          { tip: "Like", onClick: this.likeScream },
                          r.a.createElement(Ct.a, { color: "primary" })
                        )
                    : r.a.createElement(
                        p.b,
                        { to: "/login" },
                        r.a.createElement(
                          k,
                          { tip: "Like" },
                          r.a.createElement(Ct.a, { color: "primary" })
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
              K.a
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
              K.a
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
        St = Object(F.b)(function (e) {
          return { user: e.user };
        }, kt)(Ot),
        It = (function (e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.comments,
                    a = e.classes;
                  return r.a.createElement(
                    We.a,
                    { container: !0 },
                    t.map(function (e, o) {
                      var l = e.body,
                        i = e.createdAt,
                        c = e.userImage,
                        s = e.userHandle;
                      return r.a.createElement(
                        n.Fragment,
                        { key: i },
                        r.a.createElement(
                          We.a,
                          { item: !0, sm: 12 },
                          r.a.createElement(
                            We.a,
                            { container: !0 },
                            r.a.createElement(
                              We.a,
                              { item: !0, sm: 2 },
                              r.a.createElement("img", {
                                src: c,
                                alt: "comment",
                                className: a.commentImage,
                              })
                            ),
                            r.a.createElement(
                              We.a,
                              { item: !0, sm: 9 },
                              r.a.createElement(
                                "div",
                                { className: a.commentData },
                                r.a.createElement(
                                  w.a,
                                  {
                                    variant: "h5",
                                    component: p.b,
                                    to: "/users/".concat(s),
                                    color: "primary",
                                  },
                                  s
                                ),
                                r.a.createElement(
                                  w.a,
                                  { variant: "body2", color: "textSecondary" },
                                  I()(i).format("h:mm a, MMMM DD YYYY")
                                ),
                                r.a.createElement("hr", {
                                  className: a.invisibleSeparator,
                                }),
                                r.a.createElement(w.a, { variabnt: "body1" }, l)
                              )
                            )
                          )
                        ),
                        o !== t.length - 1 &&
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
        Nt = q()(function (e) {
          return Object(v.a)({}, e.spread, {
            commentImage: {
              maxWidth: "100%",
              height: 100,
              objectFit: "cover",
              borderRadius: "50%",
            },
            commentData: { marginLeft: 20 },
          });
        })(It),
        jt = a(543),
        At = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { body: "", errors: {} }),
              (a.handleChange = function (e) {
                a.setState(Object(ie.a)({}, e.target.name, e.target.value));
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
            Object(c.a)(t, [
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
                        We.a,
                        { item: !0, sm: 12, style: { textAlign: "center" } },
                        r.a.createElement(
                          "form",
                          { onSubmit: this.handleSubmit },
                          r.a.createElement(jt.a, {
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
                            de.a,
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
        xt = Object(F.b)(
          function (e) {
            return { UI: e.UI, authenticated: e.user.authenticated };
          },
          {
            submitComment: function (e, t) {
              return function (a) {
                K.a
                  .post("/scream/".concat(e, "/comment"), t)
                  .then(function (e) {
                    a({ type: "SUBMIT_COMMENT", payload: e.data }), a(Et());
                  })
                  .catch(function (e) {
                    a({ type: "SET_ERRORS", payload: e.response.data });
                  });
              };
            },
          }
        )(
          q()(function (e) {
            return Object(v.a)({}, e.spread);
          })(At)
        ),
        wt = a(536),
        Bt = a(43),
        Tt = a(100),
        Dt = a.n(Tt),
        Rt =
          (a(247),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(i.a)(this, t),
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
                  Object(Bt.a)(Object(Bt.a)(a))
                )),
                a
              );
            }
            return (
              Object(u.a)(t, e),
              Object(c.a)(t, [
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
                      r.a.createElement(Dt.a, {
                        theme: this.state.theme,
                        onChange: this.handleChange,
                        value: this.state.editorHtml,
                        modules: t.modules,
                        formats: t.formats,
                        placeholder: this.props.placeholder,
                      }),
                      r.a.createElement(
                        de.a,
                        {
                          type: "submit",
                          variant: "contained",
                          color: "primary",
                          className: a.submitButton,
                          disabled: n,
                          onClick: this.handleClick,
                        },
                        "Proceed",
                        n &&
                          r.a.createElement(wt.a, {
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
      (Rt.modules = {
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
        (Rt.formats = [
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
      var Ut = Object(F.b)(
          function (e) {
            return { data: e.data, UI: e.UI };
          },
          {
            getScreams: gt,
            submitEdit: function (e) {
              return function (t) {
                t({ type: "LOADING_UI" }),
                  K.a
                    .post("/scream/".concat(e.screamId, "/edit"), e)
                    .then(function (a) {
                      t({ type: "SUBMIT_EDIT", payload: a.data }),
                        t(bt(e.screamId));
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              };
            },
          }
        )(
          q()({
            submitButton: {
              position: "relative",
              float: "right",
              marginTop: "2em",
            },
          })(Rt)
        ),
        Lt = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
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
                  o = "/users/".concat(n, "/scream/").concat(r);
                e === o && (e = "/users/".concat(n)),
                  window.history.pushState(null, null, o),
                  a.setState({ open: !0, oldPath: e, newPath: o }),
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
            Object(c.a)(t, [
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
                    o = a.title,
                    l = a.screamId,
                    i = a.body,
                    c = a.createdAt,
                    s = a.likeCount,
                    m = a.commentCount,
                    u = a.userImage,
                    d = a.userHandle,
                    h = a.comments,
                    g = e.UI.loading,
                    b = e.user,
                    E = b.authenticated,
                    f = b.credentials.handle,
                    y = e.edit,
                    v =
                      E && d === f
                        ? r.a.createElement(
                            de.a,
                            {
                              onClick: this.props.editScream,
                              color: "primary",
                            },
                            "Edit"
                          )
                        : null,
                    C = g
                      ? r.a.createElement(
                          "div",
                          { className: t.spinnerDiv },
                          r.a.createElement(wt.a, { size: 200, thickness: 2 })
                        )
                      : r.a.createElement(
                          We.a,
                          { container: !0 },
                          r.a.createElement(
                            We.a,
                            { item: !0, sm: 5 },
                            r.a.createElement("img", {
                              src: u,
                              alt: "Profile",
                              className: t.profileImage,
                            })
                          ),
                          r.a.createElement(
                            We.a,
                            { item: !0, sm: 7 },
                            r.a.createElement(
                              w.a,
                              {
                                component: p.b,
                                color: "primary",
                                variant: "h5",
                                to: "/users/".concat(d),
                              },
                              "@",
                              d
                            ),
                            r.a.createElement("hr", {
                              className: t.invisibleSeparator,
                            }),
                            r.a.createElement(
                              w.a,
                              { variant: "body2", color: "textSecondary" },
                              I()(c).format("h:mm a, MMMM DD YYYY")
                            ),
                            r.a.createElement("hr", {
                              className: t.invisibleSeparator,
                            }),
                            r.a.createElement(w.a, { variant: "body1" }, o),
                            r.a.createElement(St, null),
                            r.a.createElement("span", null, s, " likes"),
                            r.a.createElement(
                              k,
                              { tip: "comments" },
                              r.a.createElement(P.a, { color: "primary" })
                            ),
                            r.a.createElement("span", null, m, " comments"),
                            r.a.createElement("hr", {
                              className: t.invisibleSeparator,
                            }),
                            v
                          ),
                          y
                            ? r.a.createElement(Ut, {
                                scream: this.props.scream,
                              })
                            : r.a.createElement(
                                w.a,
                                { variant: "body1" },
                                r.a.createElement("div", {
                                  dangerouslySetInnerHTML: { __html: i },
                                })
                              ),
                          r.a.createElement("hr", {
                            className: t.visibleSeparator,
                          }),
                          r.a.createElement(xt, { screamId: l }),
                          r.a.createElement(Nt, { comments: h })
                        );
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      k,
                      {
                        onClick: this.handleOpen,
                        tip: "Expand book",
                        tipClassName: t.expandButton,
                      },
                      r.a.createElement(nt.a, { color: "primary" })
                    ),
                    r.a.createElement(
                      Me.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        fullWidth: !0,
                        maxWidth: "sm",
                      },
                      r.a.createElement(
                        k,
                        {
                          tip: "Close",
                          onClick: this.handleClose,
                          tipClassName: t.closeButton,
                        },
                        r.a.createElement(Ge.a, null)
                      ),
                      r.a.createElement(He.a, { className: t.dialogContent }, C)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Pt = {
          getScream: bt,
          clearErrors: Et,
          editScream: function () {
            return function (e) {
              e({ type: "EDIT_SCREAM" });
            };
          },
        },
        Ft = Object(F.b)(function (e) {
          return {
            scream: e.data.scream,
            edit: e.data.edit,
            UI: e.UI,
            user: e.user,
          };
        }, Pt)(
          q()(function (e) {
            return Object(v.a)({}, e.spread, {
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
          })(Lt)
        ),
        Mt = (function (e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  I.a.extend(j.a);
                  var e = this.props,
                    t = e.classes,
                    a = e.scream,
                    n = a.title,
                    o = a.createdAt,
                    l = a.userImage,
                    i = a.userHandle,
                    c = a.screamId,
                    s = a.likeCount,
                    m = a.commentCount,
                    u = e.user,
                    d = u.authenticated,
                    h = u.credentials.handle,
                    g =
                      d && i === h
                        ? r.a.createElement(yt, { screamId: c })
                        : null;
                  return r.a.createElement(
                    Te.a,
                    { className: t.card },
                    r.a.createElement(Le.a, {
                      image: l,
                      title: "User image",
                      className: t.image,
                    }),
                    r.a.createElement(
                      Ue.a,
                      { className: t.content },
                      r.a.createElement(
                        w.a,
                        {
                          variant: "h5",
                          component: p.b,
                          to: "/users/".concat(i),
                          color: "primary",
                        },
                        r.a.createElement("img", {
                          src: l,
                          alt: "Profile",
                          className: t.profileImage,
                        }),
                        i
                      ),
                      g,
                      r.a.createElement(
                        w.a,
                        { variant: "body2", color: "textSecondary" },
                        I()(o).fromNow()
                      ),
                      r.a.createElement(w.a, { variant: "body1" }, n),
                      r.a.createElement(St, { screamId: c }),
                      r.a.createElement("span", null, s, " Likes"),
                      r.a.createElement(
                        k,
                        { tip: "comments" },
                        r.a.createElement(P.a, { color: "primary" })
                      ),
                      r.a.createElement("span", null, m, " comments"),
                      r.a.createElement(Ft, {
                        screamId: c,
                        userHandle: i,
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
        Kt = Object(F.b)(function (e) {
          return { user: e.user };
        })(
          q()({
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
          })(Mt)
        ),
        Ht = a(66),
        zt = a.n(Ht),
        Wt = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
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
                a.setState(Object(ie.a)({}, e.target.name, e.target.value));
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
            Object(c.a)(t, [
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
                      k,
                      {
                        tip: "Edit Details",
                        onClick: this.handleOpen,
                        btnClassName: e.button,
                      },
                      r.a.createElement(zt.a, { color: "primary" })
                    ),
                    r.a.createElement(
                      Me.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        fullWidth: !0,
                        maxWidth: "sm",
                      },
                      r.a.createElement(Ke.a, null, "Edit your details"),
                      r.a.createElement(
                        He.a,
                        null,
                        r.a.createElement(
                          "form",
                          null,
                          r.a.createElement(jt.a, {
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
                          r.a.createElement(jt.a, {
                            name: "website",
                            tpye: "text",
                            label: "Website",
                            placeholder: "Your personal/professinal website",
                            className: e.textField,
                            value: this.state.website,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(jt.a, {
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
                        pt.a,
                        null,
                        r.a.createElement(
                          de.a,
                          { onClick: this.handleClose, color: "primary" },
                          "Cancel"
                        ),
                        r.a.createElement(
                          de.a,
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
        Qt = Object(F.b)(
          function (e) {
            return { credentials: e.user.credentials };
          },
          {
            editUserDetails: function (e) {
              return function (t) {
                t({ type: "LOADING_USER" }),
                  K.a
                    .post("/user", e)
                    .then(function () {
                      t(z());
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
              };
            },
          }
        )(
          q()(function (e) {
            return Object(v.a)({}, e.spread, { button: { float: "right" } });
          })(Wt)
        ),
        Gt = a(201),
        Vt = a(163),
        Yt = a.n(Vt),
        Xt = a(164),
        qt = a.n(Xt),
        Zt = a(165),
        Jt = a.n(Zt),
        _t = a(101),
        $t = a.n(_t),
        ea = q()(function (e) {
          return Object(v.a)({}, e.spread, {
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
            Gt.a,
            { className: t.paper },
            r.a.createElement(
              "div",
              { className: t.profile },
              r.a.createElement(
                "div",
                { className: "image-wrapper" },
                r.a.createElement("img", {
                  src: $t.a,
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
                r.a.createElement(Yt.a, { color: "primary" }),
                " ",
                r.a.createElement("span", null, "Location"),
                r.a.createElement("hr", null),
                r.a.createElement(qt.a, { color: "primary" }),
                " https://website.com",
                r.a.createElement("hr", null),
                r.a.createElement(Jt.a, { color: "primary" }),
                " Joined date"
              )
            )
          );
        }),
        ta = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).handleImageChange = function (e) {
                var t = e.target.files[0],
                  n = new FormData();
                n.append("image", t, t.name),
                  a.props.uploadImage(n),
                  console.log(n);
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
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    a = e.user,
                    o = a.credentials,
                    l = o.handle,
                    i = o.createdAt,
                    c = o.imageUrl,
                    s = o.bio,
                    m = o.website,
                    u = o.location,
                    d = a.loading,
                    h = a.authenticated;
                  return d
                    ? r.a.createElement(ea, null)
                    : h
                    ? r.a.createElement(
                        Gt.a,
                        { className: t.paper },
                        r.a.createElement(
                          "div",
                          { className: t.profile },
                          r.a.createElement(
                            "div",
                            { className: "image-wrapper" },
                            r.a.createElement("img", {
                              src: c,
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
                              k,
                              {
                                tip: "Edit profile picture",
                                onClick: this.handleEditPicture,
                                btnClassName: "button",
                              },
                              r.a.createElement(zt.a, { color: "primary" })
                            )
                          ),
                          r.a.createElement("hr", null),
                          r.a.createElement(
                            "div",
                            { className: "profile-details" },
                            r.a.createElement(Qt, null),
                            r.a.createElement(
                              w.a,
                              { color: "primary", variant: "h5" },
                              l
                            ),
                            r.a.createElement("hr", null),
                            s &&
                              r.a.createElement(w.a, { variant: "body2" }, s),
                            r.a.createElement("hr", null),
                            u &&
                              r.a.createElement(
                                n.Fragment,
                                null,
                                r.a.createElement(Yt.a, { color: "primary" }),
                                " ",
                                r.a.createElement("span", null, u),
                                r.a.createElement("hr", null)
                              ),
                            m &&
                              r.a.createElement(
                                n.Fragment,
                                null,
                                r.a.createElement(qt.a, { color: "primary" }),
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
                            r.a.createElement(Jt.a, { color: "primary" }),
                            " ",
                            r.a.createElement(
                              "span",
                              null,
                              "Joined ",
                              I()(i).format("MMM YYYY")
                            )
                          )
                        )
                      )
                    : r.a.createElement(
                        Gt.a,
                        { className: t.paper },
                        r.a.createElement(
                          w.a,
                          { variant: "body2", align: "center" },
                          "No profile found, please login again"
                        ),
                        r.a.createElement(
                          "div",
                          { className: t.buttons },
                          r.a.createElement(
                            de.a,
                            {
                              variant: "contained",
                              color: "primary",
                              component: p.b,
                              to: "/login",
                            },
                            "Login"
                          ),
                          r.a.createElement(
                            de.a,
                            {
                              variant: "contained",
                              color: "secondary",
                              component: p.b,
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
        aa = {
          uploadImage: function (e) {
            return function (t) {
              t({ type: "LOADING_USER" }),
                K.a
                  .post("/user/image", e)
                  .then(function () {
                    t(z());
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
            };
          },
        },
        na = Object(F.b)(function (e) {
          return { user: e.user };
        }, aa)(
          q()(function (e) {
            return Object(v.a)({}, e.spread);
          })(ta)
        ),
        ra = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
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
            Object(c.a)(t, [
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
                      Me.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        maxWidth: "xl",
                        "aria-labelledby": "scroll-dialog-title",
                      },
                      r.a.createElement(
                        Ke.a,
                        { id: "scroll-dialog-title" },
                        "Post your scream",
                        r.a.createElement(
                          k,
                          {
                            tip: "Close",
                            onClick: this.handleClose,
                            tipClassName: t.closeButton,
                            ml: 20,
                          },
                          r.a.createElement(Ge.a, null)
                        )
                      ),
                      r.a.createElement(
                        He.a,
                        { dividers: !0 },
                        r.a.createElement(
                          "div",
                          { className: "image-wrapper" },
                          r.a.createElement("input", {
                            type: "file",
                            id: "imageInput",
                            hidden: "hidden",
                            onChange: this.handleImageChange,
                          })
                        ),
                        r.a.createElement(
                          "form",
                          { onSubmit: this.handleSubmit },
                          r.a.createElement(jt.a, {
                            name: "title",
                            type: "text",
                            label: "Scream title",
                            multiline: !0,
                            placeholder: "Input your scream title",
                            error: !!e.body,
                            helperText: e.body,
                            className: t.textField,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(
                            "h6",
                            { className: "font-weight-bolder mt-5" },
                            "Scream"
                          ),
                          r.a.createElement(Ut, {
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
        oa = Object(F.b)(
          function (e) {
            return { UI: e.UI };
          },
          {
            postScream: function (e) {
              return function (t) {
                t({ type: "LOADING_UI" }),
                  K.a
                    .post("/scream", e)
                    .then(function (e) {
                      t({ type: "POST_SCREAM", payload: e.data }), t(Et());
                    })
                    .catch(function (e) {
                      t({ type: "SET_ERRORS", payload: e.response.data });
                    });
              };
            },
            clearErrors: Et,
          }
        )(
          q()(function (e) {
            return Object(v.a)({}, e.spread, {
              button: {
                fontSize: "1.2em",
                marginBottom: e.spacing(2),
                color: "#1c2a48",
                padding: "0.5em",
              },
              progressSpinner: { position: "absolute" },
              closeButton: {
                position: "absolute",
                right: e.spacing(1),
                top: e.spacing(1),
                color: e.palette.grey[500],
              },
            });
          })(ra)
        ),
        la = q()(function (e) {
          return Object(v.a)({}, e.spread, {
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
            a = e.image,
            o = Array.from({ length: 3 }).map(function (e, n) {
              return r.a.createElement(
                Te.a,
                { className: t.card, key: n },
                r.a.createElement(Le.a, { className: t.cover, image: a }),
                r.a.createElement(
                  Ue.a,
                  { className: t.cardContent },
                  r.a.createElement("div", { className: t.handle }),
                  r.a.createElement("div", { className: t.date }),
                  r.a.createElement("div", { className: t.fullLine }),
                  r.a.createElement("div", { className: t.fullLine }),
                  r.a.createElement("div", { className: t.halfLine })
                )
              );
            });
          return r.a.createElement(n.Fragment, null, o);
        }),
        ia = (function (e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
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
                      ? r.a.createElement(la, { image: $t.a })
                      : t.map(function (e) {
                          return r.a.createElement(Kt, {
                            key: e.screamId,
                            scream: e,
                          });
                        });
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(oa, null),
                    r.a.createElement(
                      We.a,
                      { container: !0, spacing: 10 },
                      r.a.createElement(We.a, { item: !0, sm: 8, xs: 12 }, a),
                      r.a.createElement(
                        We.a,
                        { item: !0, sm: 4, xs: 12 },
                        r.a.createElement(na, null)
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        ca = Object(F.b)(
          function (e) {
            return { data: e.data };
          },
          { getScreams: gt }
        )(ia),
        sa = a(166),
        ma = a.n(sa),
        ua = (function (e) {
          function t() {
            var e;
            return (
              Object(i.a)(this, t),
              ((e = Object(s.a)(
                this,
                Object(m.a)(t).call(this)
              )).handleSubmit = function (t) {
                t.preventDefault();
                var a = { email: e.state.email, password: e.state.password };
                e.props.loginUser(a, e.props.history);
              }),
              (e.handleChange = function (t) {
                e.setState(Object(ie.a)({}, t.target.name, t.target.value));
              }),
              (e.state = { email: "", password: "", errors: {} }),
              e
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
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
                    Gt.a,
                    { className: t.paper },
                    r.a.createElement(
                      We.a,
                      { container: !0, className: t.form },
                      r.a.createElement(
                        We.a,
                        { item: !0, xs: 12 },
                        r.a.createElement("img", {
                          src: ma.a,
                          alt: "proudtalelog",
                          className: t.image,
                        }),
                        r.a.createElement(
                          w.a,
                          { variant: "h4", className: t.pageTitle },
                          "Log in"
                        ),
                        r.a.createElement(
                          "form",
                          { noValidate: !0, onSubmit: this.handleSubmit },
                          r.a.createElement(jt.a, {
                            id: "email",
                            name: "email",
                            type: "email",
                            label: "Email",
                            variant: "outlined",
                            className: t.textField,
                            helperText: n.email,
                            error: !!n.email,
                            value: this.state.email,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(jt.a, {
                            id: "password",
                            name: "password",
                            type: "password",
                            label: "Password",
                            variant: "outlined",
                            className: t.textField,
                            helperText: n.password,
                            error: !!n.password,
                            value: this.state.password,
                            onChange: this.handleChange,
                            fullWidth: !0,
                            mb: "2em",
                          }),
                          n.general &&
                            r.a.createElement(
                              w.a,
                              { variant: "body2", className: t.customError },
                              n.general
                            ),
                          r.a.createElement(
                            de.a,
                            {
                              type: "submit",
                              variant: "contained",
                              color: "primary",
                              fullWidth: !0,
                              className: t.button,
                              disabled: a,
                            },
                            "Log in",
                            a &&
                              r.a.createElement(wt.a, {
                                size: 30,
                                className: t.progress,
                              })
                          ),
                          r.a.createElement(
                            Z.a,
                            { className: t.signupLink },
                            r.a.createElement(
                              "span",
                              null,
                              r.a.createElement(
                                p.b,
                                { to: "/signup" },
                                "Don't have an account ? Create account"
                              )
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
        pa = {
          loginUser: function (e, t) {
            return function (a) {
              a({ type: "LOADING_UI" }),
                K.a
                  .post("/login", e)
                  .then(function (e) {
                    W(e.data.token),
                      a(z()),
                      a({ type: "CLEAR_ERRORS" }),
                      t.push("/");
                  })
                  .catch(function (e) {
                    a({ type: "SET_ERRORS", payload: e.response.data });
                  });
            };
          },
        },
        da = Object(F.b)(function (e) {
          return { user: e.user, UI: e.UI };
        }, pa)(
          q()(function (e) {
            return Object(v.a)({}, e.spread, {
              paper: {
                borderRadius: "1em",
                padding: "4em",
                margin: "auto",
                marginTop: "10em",
                maxWidth: 700,
                boxShadow: "none",
              },
              signupLink: { marginTop: "1em" },
            });
          })(ua)
        ),
        ha = a(537),
        ga = a(545),
        ba = (function (e) {
          function t() {
            var e;
            return (
              Object(i.a)(this, t),
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
                e.setState(Object(ie.a)({}, t.target.name, t.target.value));
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
            Object(c.a)(t, [
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
                    Gt.a,
                    { className: t.paper },
                    r.a.createElement(
                      We.a,
                      { container: !0, className: t.form },
                      r.a.createElement(
                        We.a,
                        { item: !0, xs: 12 },
                        r.a.createElement("img", {
                          src: ma.a,
                          alt: "proudtale",
                          className: t.image,
                        }),
                        r.a.createElement(
                          w.a,
                          { variant: "h4", className: t.pageTitle },
                          "Create a new account"
                        ),
                        r.a.createElement(
                          "form",
                          { noValidate: !0, onSubmit: this.handleSubmit },
                          r.a.createElement(jt.a, {
                            id: "email",
                            name: "email",
                            type: "email",
                            label: "Email",
                            variant: "outlined",
                            className: t.textField,
                            helperText: n.email,
                            error: !!n.email,
                            value: this.state.email,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(jt.a, {
                            id: "password",
                            name: "password",
                            type: "password",
                            label: "Password",
                            variant: "outlined",
                            className: t.textField,
                            helperText: n.password,
                            error: !!n.password,
                            value: this.state.password,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(jt.a, {
                            id: "confirmPassword",
                            name: "confirmPassword",
                            type: "password",
                            label: "Confirm Password",
                            variant: "outlined",
                            className: t.textField,
                            helperText: n.confirmPassword,
                            error: !!n.confirmPassword,
                            value: this.state.confirmPassword,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(jt.a, {
                            id: "handle",
                            name: "handle",
                            type: "text",
                            label: "Handle",
                            variant: "outlined",
                            className: t.textField,
                            helperText: n.handle,
                            error: !!n.handle,
                            value: this.state.handle,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          n.general &&
                            r.a.createElement(
                              w.a,
                              { variant: "body2", className: t.customError },
                              n.general
                            ),
                          r.a.createElement(ha.a, {
                            control: r.a.createElement(ga.a, {
                              color: "primary",
                              name: "agreement",
                            }),
                            value: "I agree",
                            label: "I agree to the Proudtale Agreement",
                          }),
                          r.a.createElement(
                            de.a,
                            {
                              type: "submit",
                              variant: "contained",
                              color: "primary",
                              fullWidth: !0,
                              className: t.button,
                              disabled: a,
                            },
                            "Create account",
                            a &&
                              r.a.createElement(wt.a, {
                                size: 30,
                                className: t.progress,
                              })
                          ),
                          r.a.createElement(
                            Z.a,
                            { className: t.signupLink },
                            r.a.createElement(
                              "span",
                              null,
                              r.a.createElement(
                                p.b,
                                { to: "/login" },
                                "Already have an account ? Log in"
                              )
                            )
                          )
                        )
                      ),
                      r.a.createElement(We.a, { item: !0, sm: !0 })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Ea = Object(F.b)(
          function (e) {
            return { user: e.user, UI: e.UI };
          },
          {
            signupUser: function (e, t) {
              return function (a) {
                a({ type: "LOADING_UI" }),
                  K.a
                    .post("/signup", e)
                    .then(function (e) {
                      W(e.data.token),
                        a(z()),
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
          q()(function (e) {
            return Object(v.a)({}, e.spread, {
              paper: {
                borderRadius: "1em",
                padding: "4em",
                margin: "auto",
                marginTop: "10em",
                maxWidth: 700,
                boxShadow: "none",
              },
              signupLink: { marginTop: "1em" },
            });
          })(ba)
        ),
        fa = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
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
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.props.match.params.handle,
                    a = this.props.match.params.screamId;
                  a && this.setState({ screamIdParam: a }),
                    this.props.getUserData(t),
                    K.a
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
                  return r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(
                      We.a,
                      { container: !0, spacing: 10 },
                      r.a.createElement(
                        We.a,
                        { item: !0, sm: 4, xs: 12 },
                        null === this.state.profile
                          ? r.a.createElement(ea, null)
                          : r.a.createElement(na, null)
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        ya = Object(F.b)(
          function (e) {
            return { data: e.data };
          },
          {
            getUserData: function (e) {
              return function (t) {
                t({ type: "LOADING_DATA" }),
                  K.a
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
        )(
          q()(function (e) {
            return Object(v.a)({}, e.spread);
          })(fa)
        ),
        va = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
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
            Object(c.a)(t, [
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
                      ? r.a.createElement(la, { image: $t.a })
                      : t.length < 1
                      ? r.a.createElement(w.a, { variant: "h6" }, " No results")
                      : t.map(function (e) {
                          return r.a.createElement(Kt, {
                            key: e.screamId,
                            scream: e,
                          });
                        });
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      w.a,
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
        Ca = {
          searchScreams: function (e, t) {
            return function (a) {
              a({ type: "LOADING_DATA" }),
                t.length < 1
                  ? K.a
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
          getScreams: gt,
        },
        Oa = Object(F.b)(function (e) {
          return { data: e.data };
        }, Ca)(va),
        ka = function (e) {
          return function (t) {
            t({ type: "LOADING_DATA" }),
              K.a
                .get("/user/".concat(e, "/books"))
                .then(function (e) {
                  t({ type: "SET_BOOKS", payload: e.data.books });
                })
                .catch(function () {
                  t({ type: "SET_BOOKS", payload: null });
                });
          };
        },
        Sa = function () {
          return function (e) {
            e({ type: "CLEAR_ERRORS" });
          };
        },
        Ia = a(538),
        Na = a(122),
        ja = Object(Na.a)(function (e) {
          return {
            dialog: {
              width: "100%",
              padding: "1em",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              "& img": {
                marginLeft: "24px",
                width: "calc(15% - 24px)",
                borderRadius: "50%",
              },
            },
            firstDiv: {
              width: "100%",
              display: "flex",
              paddingBottom: "0.8em",
            },
            secondDiv: { width: "100%", "& p": { marginTop: "0.5em" } },
            dialogTitle: { textAlign: "center", flexGrow: "1" },
            dialogContent: {
              "& span": { wordWrap: "break-word" },
              "& p": { fontSize: "1.1em" },
            },
          };
        });
      function Aa(e) {
        var t = e.open,
          a = e.handleClose,
          n = (e.title, e.dialogTitle),
          o = e.children,
          l = e.onClick,
          i = Object(Ae.a)(e, [
            "open",
            "handleClose",
            "title",
            "dialogTitle",
            "children",
            "onClick",
          ]),
          c = ja();
        return r.a.createElement(
          Me.a,
          Object.assign(
            {
              open: t,
              onClose: a,
              fullWidth: !0,
              maxWidth: "sm",
              scroll: "body",
              "aria-labelledby": "yes-no-dialog",
            },
            i
          ),
          r.a.createElement(
            "div",
            { className: c.dialog },
            r.a.createElement(
              "div",
              { className: c.firstDiv },
              r.a.createElement("img", {
                className: "logo",
                alt: "proudtale logo",
                src: Ye.a,
              }),
              r.a.createElement(Ke.a, null, n),
              "`"
            ),
            r.a.createElement(
              "div",
              { className: c.secondDiv },
              r.a.createElement(Ia.a, { light: !0 }),
              r.a.createElement(He.a, { className: c.dialogContent }, o),
              r.a.createElement(
                pt.a,
                null,
                r.a.createElement(
                  de.a,
                  { onClick: l, color: "primary" },
                  "Yes"
                ),
                r.a.createElement(
                  de.a,
                  { onClick: a, color: "secondary" },
                  "No"
                )
              )
            )
          )
        );
      }
      var xa = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { open: !1 }),
              (a.handleOpen = function (e) {
                a.setState({ open: !0 });
              }),
              (a.handleClose = function () {
                a.setState({ open: !1 });
              }),
              (a.deleteBook = function () {
                a.props.deleteBook(a.props.bookId), a.setState({ open: !1 });
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes;
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      k,
                      {
                        tip: "Delete Book",
                        onClick: this.handleOpen,
                        btnClassName: e.deleteButton,
                      },
                      r.a.createElement(ht.a, { color: "secondary" })
                    ),
                    r.a.createElement(
                      Aa,
                      {
                        handleClose: this.handleClose,
                        open: this.state.open,
                        title: this.props.title,
                        dialogTitle: r.a.createElement(
                          "div",
                          null,
                          "Confirm delete the book"
                        ),
                        onClick: this.deleteBook,
                      },
                      r.a.createElement(
                        "p",
                        null,
                        "Are you sure you want to delete",
                        " ",
                        r.a.createElement(
                          "span",
                          { className: e.deleteButton },
                          this.props.title
                        ),
                        " ?"
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        wa = Object(F.b)(null, {
          deleteBook: function (e) {
            return function (t) {
              K.a
                .delete("/book/".concat(e))
                .then(function () {
                  t({ type: "DELETE_BOOK", payload: e });
                })
                .catch(function (e) {
                  return console.log(e);
                });
            };
          },
        })(q()({ deleteButton: { padding: "0", color: "#fb4207" } })(xa)),
        Ba = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { open: !1 }),
              (a.handleOpen = function (e) {
                a.setState({ open: !0 }),
                  console.log(e.currentTarget.nextSibling);
              }),
              (a.handleClose = function () {
                a.setState({ open: !1 });
              }),
              (a.handleBookImageChange = function (e) {
                var t = e.target.files[0],
                  n = new FormData();
                n.append("image", t, t.name),
                  a.props.uploadBookImage(
                    n,
                    a.props.book.bookId,
                    a.props.book.userHandle
                  );
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  I.a.extend(j.a);
                  var e = this.props,
                    t = e.classes,
                    a = e.book,
                    o = a.title,
                    l = a.createdAt,
                    i = a.userImage,
                    c = a.userHandle,
                    s = a.bookId,
                    m = a.bookImageUrl,
                    u = e.user,
                    d = u.authenticated,
                    h = u.credentials.handle,
                    g =
                      d && c === h
                        ? r.a.createElement(wa, { bookId: s, title: o })
                        : null,
                    b = r.a.createElement(
                      Aa,
                      {
                        handleClose: this.handleClose,
                        open: this.state.open,
                        title: o,
                        dialogTitle: r.a.createElement(
                          "div",
                          null,
                          "Confirm writing the chapter"
                        ),
                      },
                      r.a.createElement(
                        "p",
                        null,
                        "Do you want to proceed with writing chapters of",
                        " ",
                        r.a.createElement(
                          "span",
                          { className: t.wirtechapter },
                          o
                        ),
                        " ?"
                      )
                    );
                  return r.a.createElement(
                    w.a,
                    { className: t.root },
                    r.a.createElement(
                      n.Fragment,
                      null,
                      r.a.createElement(
                        Te.a,
                        { className: t.card },
                        r.a.createElement(
                          p.b,
                          { onClick: this.handleOpen },
                          r.a.createElement(Le.a, {
                            image: m,
                            className: t.image,
                          })
                        ),
                        r.a.createElement(
                          Ue.a,
                          null,
                          r.a.createElement(
                            Z.a,
                            { className: t.cardContentBox1 },
                            r.a.createElement(
                              "div",
                              null,
                              r.a.createElement(ze.a, {
                                className: t.avatar,
                                src: i,
                              }),
                              r.a.createElement(
                                w.a,
                                {
                                  className: "MuiTypography--heading",
                                  variant: "h6",
                                  gutterBottom: !0,
                                },
                                c
                              )
                            ),
                            r.a.createElement(
                              w.a,
                              {
                                className: t.createdat,
                                variant: "body2",
                                color: "textSecondary",
                              },
                              I()(l).fromNow()
                            ),
                            r.a.createElement(
                              C.a,
                              {
                                title: o,
                                placement: "top-start",
                                classes: { tooltip: t.tooltip },
                              },
                              r.a.createElement(
                                w.a,
                                { variant: "body1", className: t.title },
                                lt(o)
                              )
                            )
                          ),
                          r.a.createElement(Ia.a, { light: !0 }),
                          r.a.createElement(
                            Z.a,
                            { className: t.cardContentBox2 },
                            r.a.createElement(
                              k,
                              { tip: "Add book cover picture" },
                              r.a.createElement(
                                w.a,
                                { className: t.editbtn },
                                r.a.createElement(
                                  "label",
                                  { className: "bookImageInput" },
                                  r.a.createElement("input", {
                                    className: t.input,
                                    type: "file",
                                    id: "bookImageInput",
                                    onChange: this.handleBookImageChange,
                                  }),
                                  r.a.createElement(zt.a, { color: "primary" })
                                )
                              )
                            ),
                            r.a.createElement(w.a, null, g)
                          )
                        )
                      ),
                      b
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Ta = {
          uploadBookImage: function (e, t, a) {
            return function (n) {
              K.a
                .post("/book/bookImage/".concat(t), e)
                .then(function () {
                  n({ type: "LOADING_DATA", payload: t }), n(ka(a));
                })
                .catch(function (e) {
                  return console.log(e);
                });
            };
          },
        },
        Da = Object(F.b)(function (e) {
          return { user: e.user };
        }, Ta)(
          q()({
            root: {
              maxWidth: "15em",
              maxHeight: "27em",
              position: "relative",
              display: "flex",
              margin: "0.3em 0.5em 0.5em 3em",
              boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
              "&:hover": { boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)" },
            },
            card: { width: "15em" },
            cardContentBox1: {
              height: "7.8em",
              "& div": {
                display: "flex",
                justifyContent: "left",
                "& h6": { padding: "0.2em" },
              },
            },
            cardContentBox2: {
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "0.3em",
              "& button": { padding: "0" },
            },
            image: { minWidth: "12em", minHeight: "16em" },
            title: { fontSize: "1.2em" },
            createdat: {
              color: "#00d9fd",
              textAlign: "left",
              fontWeight: "bold",
            },
            editbtn: { display: "inline", "& label": { cursor: "pointer" } },
            avatar: { display: "inline-block", border: "2px solid white" },
            tooltip: { fontSize: "1.4em", backgroundColor: "#1c2a48" },
            input: { display: "none" },
            wirtechapter: { color: "#00d9fd" },
          })(Ba)
        ),
        Ra = (function (e) {
          function t(e) {
            var a;
            return (
              Object(i.a)(this, t),
              ((a = Object(s.a)(
                this,
                Object(m.a)(t).call(this, e)
              )).handleClick = function (e) {
                if (a.props.data.edit) {
                  e.preventDefault();
                  var t = a.props.book;
                  (t.desc = a.state.editorHtml), a.props.submitEdit(t);
                } else a.props.setValue(a.state.editorHtml);
              }),
              (a.state = {
                editorHtml: a.props.book ? a.props.book.desc : "",
                theme: "snow",
              }),
              (a.handleChange = a.handleChange.bind(
                Object(Bt.a)(Object(Bt.a)(a))
              )),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
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
                    r.a.createElement(Dt.a, {
                      theme: this.state.theme,
                      onChange: this.handleChange,
                      value: this.state.editorHtml,
                      modules: t.modules,
                      formats: t.formats,
                      placeholder: this.props.placeholder,
                    }),
                    r.a.createElement(
                      de.a,
                      {
                        type: "submit",
                        variant: "contained",
                        color: "primary",
                        className: a.submitButton,
                        disabled: n,
                        onClick: this.handleClick,
                      },
                      "Save",
                      n &&
                        r.a.createElement(wt.a, {
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
        })(n.Component);
      (Ra.modules = {
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
        (Ra.formats = [
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
      var Ua = Object(F.b)(
          function (e) {
            return { data: e.data, UI: e.UI };
          },
          {
            getBooks: function () {
              return function (e) {
                e({ type: "LOADING_DATA" }),
                  K.a
                    .get("/books")
                    .then(function (t) {
                      e({ type: "SET_BOOKS", payload: t.data });
                    })
                    .catch(function (t) {
                      e({ type: "SET_BOOKS", payload: [] }), console.log(t);
                    });
              };
            },
            submitEdit: function (e) {
              return function (t) {
                t({ type: "LOADING_UI" }),
                  K.a
                    .post("/book/".concat(e.bookId, "/edit"), e)
                    .then(function (a) {
                      var n;
                      t({ type: "SUBMIT_EDIT_BOOK", payload: a.data }),
                        t(
                          ((n = e.bookId),
                          function (e) {
                            e({ type: "LOADING_UI" }),
                              K.a
                                .get("/book/".concat(n))
                                .then(function (t) {
                                  e({ type: "SET_BOOK", payload: t.data }),
                                    e({ type: "STOP_LOADING_UI" });
                                })
                                .catch(function (e) {
                                  return console.log(e);
                                });
                          })
                        );
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              };
            },
          }
        )(
          q()({
            submitButton: {
              position: "relative",
              float: "right",
              marginTop: "2em",
            },
          })(Ra)
        ),
        La = a(267),
        Pa = a.n(La),
        Fa = a(266),
        Ma = a.n(Fa),
        Ka = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                open: !1,
                title: "",
                value: "",
                bookImageUrl: "",
                errors: {},
              }),
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
                  a.props.postBook({
                    title: a.state.title,
                    desc: a.state.value,
                    bookImageUrl: a.state.bookImageUrl,
                  });
              }),
              (a.postBookImageChange = function (e) {
                var t = e.target.files[0],
                  n = new FormData(),
                  r = t.name,
                  o = r.split(".")[r.split(".").length - 1];
                (r = ""
                  .concat(Math.round(1e12 * Math.random()).toString(), ".")
                  .concat(o)),
                  console.log(r),
                  n.append("image", t, r),
                  a.props.initialPostBookImage(n);
                var l = "https://firebasestorage.googleapis.com/v0/b/"
                  .concat(
                    "socialape-aa1d6.appspot.com",
                    "/o/initialcoverimage%2F"
                  )
                  .concat(r, "?alt=media");
                a.setState({ bookImageUrl: l });
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
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
                        bookImage: {},
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
                    "div",
                    { className: t.postbook },
                    r.a.createElement(
                      n.Fragment,
                      null,
                      r.a.createElement(
                        de.a,
                        {
                          onClick: this.handleOpen,
                          tip: "Create book",
                          className: t.button,
                        },
                        r.a.createElement("img", {
                          src: Ma.a,
                          alt: "create book",
                        })
                      ),
                      r.a.createElement(
                        Me.a,
                        {
                          open: this.state.open,
                          onClose: this.handleClose,
                          maxWidth: "lg",
                          fullWidth: !0,
                          "aria-labelledby": "scroll-dialog-title",
                        },
                        r.a.createElement(
                          Ke.a,
                          { id: "scroll-dialog-title" },
                          "Publish your new book",
                          r.a.createElement(
                            k,
                            {
                              tip: "Close",
                              onClick: this.handleClose,
                              tipClassName: t.closeButton,
                              ml: 20,
                            },
                            r.a.createElement(Ge.a, null)
                          )
                        ),
                        r.a.createElement(
                          He.a,
                          { dividers: !0 },
                          r.a.createElement(
                            "div",
                            { className: "image-wrapper" },
                            r.a.createElement("input", {
                              type: "file",
                              id: "imageInput",
                              hidden: "hidden",
                              onChange: this.handleImageChange,
                            })
                          ),
                          r.a.createElement(
                            "form",
                            { onSubmit: this.handleSubmit },
                            r.a.createElement(jt.a, {
                              name: "title",
                              type: "text",
                              label: "Book Title",
                              multiline: !0,
                              placeholder: "Input your book title",
                              error: !!e.body,
                              helperText: e.body,
                              className: t.textField,
                              onChange: this.handleChange,
                              fullWidth: !0,
                            }),
                            r.a.createElement(
                              "h6",
                              { className: "font-weight-bolder mt-5" },
                              "Synopsis"
                            ),
                            r.a.createElement(Ua, {
                              type: "text",
                              label: "Book Synopsis",
                              setValue: this.setValue,
                            }),
                            r.a.createElement(
                              Z.a,
                              { className: t.box },
                              r.a.createElement(
                                k,
                                { tip: "Add book cover picture" },
                                r.a.createElement(
                                  w.a,
                                  { className: t.editbtn },
                                  r.a.createElement(
                                    "label",
                                    { className: "bookImageInput" },
                                    r.a.createElement("input", {
                                      className: t.input,
                                      type: "file",
                                      id: "bookImageInput",
                                      onChange: this.postBookImageChange,
                                    }),
                                    r.a.createElement(Pa.a, {
                                      color: "primary",
                                    }),
                                    r.a.createElement(
                                      w.a,
                                      { variant: "span", color: "primary" },
                                      "Upload book cover image"
                                    )
                                  )
                                )
                              )
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
        Ha = Object(F.b)(
          function (e) {
            return { UI: e.UI };
          },
          {
            postBook: function (e) {
              return function (t) {
                t({ type: "LOADING_UI" }),
                  K.a
                    .post("/book", e)
                    .then(function (e) {
                      t({ type: "POST_BOOK", payload: e.data }), t(Sa());
                    })
                    .catch(function (e) {
                      t({ type: "SET_ERRORS", payload: e });
                    });
              };
            },
            clearErrors: Sa,
            initialPostBookImage: function (e) {
              return function (t) {
                K.a.post("/book/initialBookImage", e).catch(function (e) {
                  return console.log(e);
                });
              };
            },
          }
        )(
          q()(function (e) {
            return Object(v.a)({}, e.spread, {
              postbook: { display: "inline" },
              button: {
                background: "#1c2a48",
                marginTop: e.spacing(0.7),
                fontSize: "8em",
                height: "2em",
                "& img": { width: "1.5em" },
              },
              closeButton: {
                position: "absolute",
                right: e.spacing(1),
                top: e.spacing(1),
                color: e.palette.grey[500],
              },
              uploadButton: { marginTop: "1em" },
              editbtn: { display: "inline", "& label": { cursor: "pointer" } },
              input: { display: "none" },
              box: {
                paddingTop: "1em",
                "& button": { padding: "0", "&:hover": { borderRadius: "0" } },
              },
            });
          })(Ka)
        ),
        za = a(268),
        Wa = a.n(za),
        Qa = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { bookIdParam: null }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.props.match.params.handle,
                    a = this.props.match.params.bookId;
                  a && this.setState({ bookIdParam: a }),
                    this.props.getBookData(t),
                    K.a
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
                    t = e.books,
                    a = e.loading,
                    n = this.props.classes,
                    o = this.state.bookIdParam,
                    l = a
                      ? r.a.createElement(la, { image: Wa.a })
                      : null === t
                      ? r.a.createElement("p", null, "No books from this user")
                      : o
                      ? t.map(function (e) {
                          return e.bookId !== o
                            ? r.a.createElement(Da, { key: e.bookId, book: e })
                            : r.a.createElement(Da, {
                                key: e.bookId,
                                book: e,
                                openDialog: !0,
                              });
                        })
                      : t.map(function (e) {
                          return r.a.createElement(Da, {
                            key: e.bookId,
                            book: e,
                          });
                        });
                  return r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(
                      We.a,
                      { className: n.inProgress },
                      r.a.createElement(
                        "h2",
                        { className: n.inProgressTitle },
                        "In Progress"
                      ),
                      r.a.createElement(
                        We.a,
                        { className: n.publishBody },
                        r.a.createElement(Ha, null),
                        r.a.createElement(
                          "div",
                          { className: n.bookCardContainer },
                          l
                        )
                      )
                    ),
                    r.a.createElement(
                      We.a,
                      null,
                      r.a.createElement(
                        "h2",
                        { className: n.inProgressTitle },
                        "Completed"
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        Ga = Object(F.b)(
          function (e) {
            return { data: e.bookData };
          },
          { getBookData: ka }
        )(
          q()(function (e) {
            return Object(v.a)({}, e.spread, {
              inProgress: { marginBottom: "5em" },
              inProgressTitle: {
                color: "#1c2a48",
                fontWeight: "bolder",
                fontFamily: "Times New Roman",
                textShadow: "2px 2px #fff",
              },
              bookCardContainer: { display: "flex" },
              publishBody: { display: "flex" },
              avatar: {
                margin: e.spacing(1),
                marginLeft: e.spacing(2),
                backgroundColor: e.palette.primary.main,
              },
            });
          })(Qa)
        ),
        Va = a(547),
        Ya = a(539),
        Xa = a(4),
        qa = a(488),
        Za = a(269),
        Ja = a.n(Za),
        _a = a(270),
        $a = a.n(_a),
        en = a(487),
        tn = a(540),
        an = a(535),
        nn = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = { open: !1, title: "", errors: {} }),
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
                e.preventDefault(), alert("submit");
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  e.UI.errors && this.setState({ errors: e.UI.errors }),
                    e.UI.errors ||
                      e.UI.loading ||
                      this.setState({ title: "", open: !1, errors: {} });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.errors,
                    t = this.props.classes;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      de.a,
                      {
                        className: t.button,
                        onClick: this.handleOpen,
                        fullWidth: !0,
                      },
                      "+"
                    ),
                    r.a.createElement(
                      Me.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        maxWidth: "xl",
                        "aria-labelledby": "scroll-dialog-title",
                      },
                      r.a.createElement(
                        Ke.a,
                        { id: "scroll-dialog-title" },
                        "New Chapter",
                        r.a.createElement(
                          k,
                          {
                            tip: "Close",
                            onClick: this.handleClose,
                            tipClassName: t.closeButton,
                            ml: 20,
                          },
                          r.a.createElement(Ge.a, null)
                        )
                      ),
                      r.a.createElement(
                        He.a,
                        { dividers: !0 },
                        r.a.createElement(
                          "form",
                          { onSubmit: this.handleSubmit },
                          r.a.createElement(jt.a, {
                            name: "title",
                            type: "text",
                            label: "Chapter title",
                            multiline: !0,
                            placeholder: "Chapter ...",
                            error: !!e.body,
                            helperText: e.body,
                            className: t.textField,
                            onChange: this.handleChange,
                            fullWidth: !0,
                          }),
                          r.a.createElement(de.a, { type: "submit" }, "Submit")
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
        rn = Object(F.b)(
          function (e) {
            return { UI: e.UI };
          },
          { clearErrors: Et }
        )(
          q()(function (e) {
            return Object(v.a)({}, e.primary, e.spread, {
              button: {
                fontSize: "1.2em",
                marginBottom: e.spacing(2),
                color: "#fff",
                padding: "0.5em",
                background: "#1c2a48",
              },
              progressSpinner: { position: "absolute" },
              closeButton: {
                position: "absolute",
                right: e.spacing(1),
                top: e.spacing(1),
                color: e.palette.grey[500],
              },
            });
          })(nn)
        ),
        on = (function (e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                open: !0,
                edit: !1,
                title: "Title of Chapter",
                chapters: ["Title of Chapter"],
              }),
              (a.handleDrawer = function () {
                a.setState({ open: !a.state.open });
              }),
              (a.handleEditTitle = function () {
                a.setState({ edit: !a.state.edit });
              }),
              (a.handleChange = function (e) {
                a.setState({ title: e.target.value });
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes;
                  return r.a.createElement(
                    Gt.a,
                    {
                      className: Object(Xa.a)(
                        e.paper,
                        Object(ie.a)({}, e.paperShift, this.state.open)
                      ),
                    },
                    r.a.createElement(Ya.a, null),
                    r.a.createElement(
                      Va.a,
                      {
                        className: e.drawer,
                        variant: "persistent",
                        anchor: "left",
                        open: this.state.open,
                        classes: { paper: e.drawerPaper },
                      },
                      r.a.createElement("div", { className: e.drawerHeader }),
                      r.a.createElement(
                        Z.a,
                        { height: "100%", marginTop: "50%" },
                        r.a.createElement(
                          w.a,
                          { align: "center", variant: "h5" },
                          "Chapters"
                        ),
                        r.a.createElement(
                          qa.a,
                          null,
                          this.state.chapters.map(function (t, a) {
                            return r.a.createElement(
                              en.a,
                              { button: !0, key: t },
                              r.a.createElement(tn.a, {
                                classes: { primary: e.centerText },
                                primary: t,
                              })
                            );
                          })
                        ),
                        r.a.createElement(rn, null)
                      )
                    ),
                    r.a.createElement(
                      We.a,
                      {
                        className: Object(Xa.a)(
                          e.content,
                          Object(ie.a)({}, e.contentShift, this.state.open)
                        ),
                        container: !0,
                        direction: "column",
                      },
                      r.a.createElement(
                        de.a,
                        {
                          style: { textAlign: "left" },
                          className: e.chapterBtn,
                          onClick: this.handleDrawer,
                        },
                        this.state.open
                          ? r.a.createElement(Ja.a, null)
                          : r.a.createElement($a.a, null),
                        r.a.createElement(w.a, null, "Chapters")
                      ),
                      r.a.createElement(
                        We.a,
                        { className: e.titleInput, item: !0, xs: 12 },
                        this.state.edit
                          ? r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(an.a, {
                                inputProps: { style: { fontSize: "3rem" } },
                                placeholder: "Enter Your Title",
                                value: this.state.title,
                                onChange: this.handleChange,
                              }),
                              r.a.createElement(
                                de.a,
                                { onClick: this.handleEditTitle },
                                "Done"
                              )
                            )
                          : r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                w.a,
                                { display: "inline", variant: "h3" },
                                this.state.title
                              ),
                              r.a.createElement(
                                k,
                                {
                                  tip: "Edit chapter title",
                                  onClick: this.handleEditTitle,
                                  btnClassName: "button",
                                },
                                r.a.createElement(zt.a, { color: "primary" })
                              )
                            )
                      ),
                      r.a.createElement(
                        We.a,
                        { classes: { root: e.gridItem }, item: !0, xs: 12 },
                        r.a.createElement(Dt.a, { className: e.quillStyles })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        ln = Object(ce.a)(function (e) {
          return {
            paper: {
              transition: e.transitions.create(["margin", "width"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
              height: "100%",
              padding: e.spacing(3),
            },
            paperShift: {
              marginLeft: 240,
              transition: e.transitions.create(["margin", "width"], {
                easing: e.transitions.easing.easeOut,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            menuButton: { marginRight: e.spacing(2) },
            hide: { display: "none" },
            drawer: { width: 240, flexShrink: 0 },
            drawerPaper: {
              width: 240,
              zIndex: 1,
              background: "#2C3B5A",
              boxShadow: "inset 0px 4px 62px rgba(0, 0, 0, 0.25)",
              color: "white",
            },
            drawerHeader: Object(v.a)(
              {
                display: "flex",
                alignItems: "center",
                padding: e.spacing(0, 1),
              },
              e.mixins.toolbar,
              { justifyContent: "flex-end" }
            ),
            content: {
              flexGrow: 1,
              padding: e.spacing(3),
              transition: e.transitions.create("margin", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
              marginLeft: 0,
              height: "100%",
            },
            contentShift: {
              transition: e.transitions.create("margin", {
                easing: e.transitions.easing.easeOut,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            centerText: { textAlign: "center" },
            gridItem: { flex: "1 1 auto" },
            quillStyles: { height: "calc(100% - 3rem)" },
            titleInput: { marginBottom: e.spacing(3), flex: "0 1 auto" },
            chapterBtn: { maxWidth: "150px" },
          };
        })(on),
        cn = a(271),
        sn = a.n(cn),
        mn = q()(function (e) {
          return Object(v.a)({}, e.spread, {
            nomatchContainer: {
              display: "flex",
              justifyContent: "center",
              marginTop: "10em",
              "& div:nth-child(2)": { marginLeft: "2em" },
              "& img": { width: "22em" },
            },
            nomatchContainertext: {
              marginTop: "5em",
              "& div:nth-child(1)": { display: "flex" },
              "& h2:nth-child(1)": {
                color: "#1c2a48",
                fontWeight: "bolder",
                fontSize: "3.5em",
              },
              "& h5": { marginTop: "1em", color: "#1c2a48", fontSize: "2em" },
              "& p": { marginTop: "1em", fontSize: "1.7em", color: "#1c2a48" },
            },
            "@media (max-width: 640px)": {
              nomatchContainer: {
                flexDirection: "column-reverse",
                "& img": { width: "17em" },
              },
              nomatchContainertext: { marginTop: "0.1em" },
            },
          });
        })(
          (function (e) {
            function t() {
              return (
                Object(i.a)(this, t),
                Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(u.a)(t, e),
              Object(c.a)(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.classes,
                      t = this.props.location.pathname;
                    return r.a.createElement(
                      "div",
                      { className: e.nomatchContainer },
                      r.a.createElement(
                        "div",
                        { className: e.nomatchContainertext },
                        r.a.createElement(
                          "div",
                          null,
                          r.a.createElement("h2", null, "proudtale.com")
                        ),
                        r.a.createElement(
                          "h5",
                          null,
                          r.a.createElement("strong", null, "404."),
                          " That's an error."
                        ),
                        r.a.createElement(
                          "p",
                          null,
                          "The requested URL",
                          t,
                          " was not found on this server"
                        )
                      ),
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement("img", {
                          src: sn.a,
                          alt: "proudtale 404",
                          width: "300",
                        })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(n.Component)
        ),
        un = a(541);
      function pn(e) {
        var t = e.label,
          a = e.color,
          n = Object(Ae.a)(e, ["label", "color"]);
        return r.a.createElement(
          de.a,
          Object.assign({}, n, {
            size: "small",
            variant: "contained",
            style: { backgroundColor: a, borderRadius: "16px" },
            disableElevation: !0,
          }),
          t
        );
      }
      function dn() {
        var e = hn(),
          t = Object(n.useState)(!1),
          a = Object(ge.a)(t, 2),
          o = a[0],
          l = a[1],
          i = function () {
            l(!1);
          };
        return r.a.createElement(
          We.a,
          {
            container: !0,
            direction: "column",
            alignItems: "center",
            spacing: 3,
          },
          r.a.createElement(
            We.a,
            {
              className: e.root,
              justify: "center",
              container: !0,
              spacing: 4,
              wrap: "wrap",
              item: !0,
            },
            r.a.createElement(
              We.a,
              { item: !0 },
              r.a.createElement("img", {
                className: e.media,
                src:
                  "https://marketplace.canva.com/EADaiVGpN7g/1/0/1003w/canva-red-sushi-japanese-cooking-recipe-ebook-cover-cN1LLwUwKqM.jpg",
                alt: "Book Cover",
              })
            ),
            r.a.createElement(
              We.a,
              { item: !0, xs: 6, container: !0 },
              r.a.createElement(
                We.a,
                {
                  className: e.bookInfo,
                  item: !0,
                  container: !0,
                  direction: "column",
                  justify: "space-around",
                },
                r.a.createElement(
                  We.a,
                  { item: !0 },
                  r.a.createElement(
                    We.a,
                    { container: !0, justify: "space-between" },
                    r.a.createElement(
                      w.a,
                      { variant: "h2", classes: { h2: e.title } },
                      "Name of Book"
                    ),
                    r.a.createElement(pn, {
                      classes: { root: e.progress, disabled: e.blackText },
                      label: "completed",
                      color: "#ABFFC8",
                      disabled: !0,
                    })
                  ),
                  r.a.createElement(un.a, {
                    avatar: r.a.createElement("img", {
                      className: "profile-image",
                      src:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1024px-Cat03.jpg",
                    }),
                    title: "username1",
                    subheader: "September 14, 2016",
                    classes: { title: e.username },
                  }),
                  r.a.createElement(
                    We.a,
                    { container: !0 },
                    r.a.createElement(
                      "span",
                      { className: e.iconParent },
                      r.a.createElement(tt.a, { className: e.icon }),
                      " 3"
                    ),
                    r.a.createElement(
                      "span",
                      { className: e.iconParent },
                      r.a.createElement($e.a, { className: e.icon }),
                      " 3"
                    ),
                    r.a.createElement(
                      "span",
                      { className: e.iconParent },
                      r.a.createElement(nt.a, { className: e.icon }),
                      " 3"
                    )
                  )
                ),
                r.a.createElement(
                  We.a,
                  { item: !0 },
                  ["nonfiction", "cooking"].map(function (t) {
                    return r.a.createElement(pn, {
                      className: e.tag,
                      label: t,
                      color: "#F1F1F1",
                    });
                  })
                ),
                r.a.createElement(
                  We.a,
                  { item: !0 },
                  r.a.createElement(
                    w.a,
                    { variant: "body2", component: "p" },
                    "Continue As:"
                  ),
                  r.a.createElement(
                    We.a,
                    { container: !0, spacing: 3 },
                    r.a.createElement(
                      We.a,
                      { item: !0, xs: 6 },
                      r.a.createElement(
                        de.a,
                        {
                          fullWidth: !0,
                          variant: "contained",
                          color: "primary",
                        },
                        "eBook"
                      )
                    ),
                    r.a.createElement(
                      We.a,
                      { item: !0, xs: 6 },
                      r.a.createElement(
                        de.a,
                        {
                          fullWidth: !0,
                          variant: "outlined",
                          color: "primary",
                        },
                        "Audio Book"
                      )
                    )
                  )
                )
              )
            )
          ),
          r.a.createElement(
            We.a,
            { item: !0, container: !0, justify: "center" },
            r.a.createElement(
              We.a,
              { item: !0, xs: 8 },
              r.a.createElement(
                w.a,
                { variant: "h4", component: "h3" },
                "Synopsis"
              ),
              r.a.createElement("br", null),
              r.a.createElement(
                w.a,
                { variant: "body2", color: "textSecondary", component: "p" },
                "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
              ),
              r.a.createElement(
                w.a,
                {
                  onClick: function () {
                    l(!0);
                  },
                  component: "a",
                  classes: { root: e.hoverShadow },
                },
                "Copyright Details"
              ),
              r.a.createElement(
                Me.a,
                { open: o, onClose: i, fullWidth: !0, maxWidth: "sm" },
                r.a.createElement(
                  k,
                  { tip: "Close", onClick: i, tipClassName: e.closeButton },
                  r.a.createElement(Ge.a, null)
                ),
                r.a.createElement(
                  We.a,
                  { container: !0, justify: "center" },
                  r.a.createElement(
                    We.a,
                    { item: !0 },
                    r.a.createElement(ze.a, {
                      alt: "proudtale logo",
                      src: Ye.a,
                      className: e.logo,
                      classes: { root: e.logoRoot },
                    })
                  ),
                  r.a.createElement(
                    We.a,
                    { item: !0, xs: 12 },
                    r.a.createElement(
                      He.a,
                      { className: e.dialogContent },
                      "THIS IS STATIC CONTENT FOR NOW. WILL BE REPLACED WITH PROPS LATER. Copyright \xa9 2010 by Bill Shakespeare All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the publisher, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law. For permission requests, write to the publisher, addressed \u201cAttention: Permissions Coordinator,\u201d at the address below. Imaginary Press 1233 Pennsylvania Avenue San Francisco, CA 94909 www.imaginarypress.com Ordering Information: Quantity sales. Special discounts are available on quantity purchases by corporations, associations, and others. For details, contact the publisher at the address above. Orders by U.S. trade bookstores and wholesalers. Please contact Big Distribution: Tel: (800) 800-8000; Fax: (800) 800-8001 or visit www.bigbooks.com. Printed in the United States of America"
                    )
                  )
                )
              )
            )
          )
        );
      }
      var hn = Object(ve.a)(function (e) {
          return Object(v.a)({}, e.spread, {
            root: { width: "100%" },
            media: { width: 300 },
            title: { fontWeight: 500 },
            iconParent: {
              margin: "0 1rem",
              display: "inline-flex",
              verticalAlign: "middle",
            },
            icon: { marginRight: "7px" },
            progress: { maxHeight: "35px", padding: e.spacing(0, 4) },
            blackText: { color: "rgb(0, 0, 0) !important" },
            tag: { margin: "0 8px 0 0", padding: e.spacing(0, 4) },
            username: { fontSize: "2rem", fontWeight: "300" },
            closeButton: { position: "absolute", left: "90%" },
            dialogContent: { padding: 30, lineHeight: "30px" },
            logo: { margin: e.spacing(3) },
            logoRoot: { height: "80px", width: "80px" },
            hoverShadow: {
              "&:hover": { textShadow: "2px -1px 3px rgba(0,0,0,0.24)" },
            },
          });
        }),
        gn = a(542),
        bn = a(272),
        En = a.n(bn),
        fn = [
          { title: "chapter 1: hello", completed: !0 },
          { title: "chapter 2: hi", completed: !1 },
        ],
        yn = (function (e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes;
                  return r.a.createElement(
                    Gt.a,
                    { className: e.paper, elevation: 3 },
                    r.a.createElement("div", { className: e.spacing }),
                    r.a.createElement(
                      We.a,
                      { justify: "center", container: !0, wrap: "wrap" },
                      r.a.createElement(
                        We.a,
                        { item: !0, xs: 12 },
                        r.a.createElement(dn, null)
                      ),
                      r.a.createElement(
                        We.a,
                        { item: !0, xs: 8 },
                        r.a.createElement(
                          qa.a,
                          null,
                          fn.map(function (t) {
                            return r.a.createElement(
                              en.a,
                              { className: e.item, button: !0 },
                              r.a.createElement(tn.a, null, t.title),
                              t.completed
                                ? r.a.createElement(
                                    gn.a,
                                    null,
                                    r.a.createElement(En.a, {
                                      color: "primary",
                                    })
                                  )
                                : ""
                            );
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
        vn = Object(ce.a)(function (e) {
          return {
            item: { backgroundColor: "#F1F1F1", padding: "15px 30px" },
            paper: { marginTop: "5rem", width: "75%", alignSelf: "center" },
            spacing: Object(v.a)(
              {
                display: "flex",
                alignItems: "center",
                padding: e.spacing(0, 1),
              },
              e.mixins.toolbar,
              { justifyContent: "flex-end" }
            ),
          };
        })(yn),
        Cn = a(81),
        On = a(273),
        kn = a(70),
        Sn = {
          authenticated: !1,
          loading: !1,
          credentials: {},
          likes: [],
          notifications: [],
        },
        In = {
          screams: [],
          filteredScreams: [],
          scream: {},
          loading: !1,
          edit: !1,
        },
        Nn = { books: [], filteredBooks: [], book: {}, loading: !1, edit: !1 },
        jn = { loading: !1, errors: null },
        An = [On.a],
        xn = Object(Cn.c)({
          user: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Sn,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SET_AUTHENTICATED":
                return Object(v.a)({}, e, { authenticated: !0 });
              case "SET_UNAUTHENTICATED":
                return Sn;
              case "SET_USER":
                return Object(v.a)(
                  { authenticated: !0, loading: !1 },
                  t.payload
                );
              case "LOADING_USER":
                return Object(v.a)({}, e, { loading: !0 });
              case "LIKE_SCREAM":
                return Object(v.a)({}, e, {
                  likes: [].concat(Object(kn.a)(e.likes), [
                    {
                      userHandle: e.credentials.handle,
                      screamId: t.payload.screamId,
                    },
                  ]),
                });
              case "UNLIKE_SCREAM":
                return Object(v.a)({}, e, {
                  likes: e.likes.filter(function (e) {
                    return e.screamId !== t.payload.screamId;
                  }),
                });
              case "MARK_NOTIFICATIONS_READ":
                return (
                  e.notifications.forEach(function (e) {
                    return (e.read = !0);
                  }),
                  Object(v.a)({}, e)
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
                  : In,
              n = arguments.length > 1 ? arguments[1] : void 0;
            switch (n.type) {
              case "LOADING_DATA":
                return Object(v.a)({}, a, { loading: !0 });
              case "SET_SCREAMS":
                return Object(v.a)({}, a, { screams: n.payload, loading: !1 });
              case "SET_SCREAM":
                return Object(v.a)({}, a, { scream: n.payload });
              case "EDIT_SCREAM":
                return Object(v.a)({}, a, { edit: !a.edit });
              case "SUBMIT_EDIT":
                return Object(v.a)({}, a, { scream: n.payload, edit: !1 });
              case "LIKE_SCREAM":
              case "UNLIKE_SCREAM":
                var r = a.screams.findIndex(function (e) {
                  return e.screamId === n.payload.screamId;
                });
                return (
                  (a.screams[r] = n.payload),
                  a.scream.screamId === n.payload.screamId &&
                    (a.scream = n.payload),
                  Object(v.a)({}, a)
                );
              case "DELETE_SCREAM":
                return (
                  (r = a.screams.findIndex(function (e) {
                    return e.screamId === n.payload;
                  })),
                  a.screams.splice(r, 1),
                  Object(v.a)({}, a)
                );
              case "POST_SCREAM":
                return Object(v.a)({}, a, {
                  screams: [n.payload].concat(Object(kn.a)(a.screams)),
                });
              case "SUBMIT_COMMENT":
                return Object(v.a)({}, a, {
                  scream: Object(v.a)({}, a.scream, {
                    comments: [n.payload].concat(
                      Object(kn.a)(a.scream.comments)
                    ),
                  }),
                });
              case "SEARCH_SCREAM":
                return Object(v.a)({}, a, {
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
          bookData: function () {
            var e,
              t,
              a =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Nn,
              n = arguments.length > 1 ? arguments[1] : void 0;
            switch (n.type) {
              case "LOADING_DATA":
                return Object(v.a)({}, a, { loading: !0 });
              case "SET_BOOKS":
                return Object(v.a)({}, a, { books: n.payload, loading: !1 });
              case "SET_BOOK":
                return Object(v.a)({}, a, { book: n.payload });
              case "EDIT_BOOK":
                return Object(v.a)({}, a, { edit: !a.edit });
              case "SUBMIT_EDIT_BOOK":
                return Object(v.a)({}, a, { book: n.payload, edit: !1 });
              case "LIKE_BOOK":
              case "UNLIKE_BOOK":
                var r = a.books.findIndex(function (e) {
                  return e.bookId === n.payload.bookId;
                });
                return (
                  (a.books[r] = n.payload),
                  a.book.bookId === n.payload.bookId && (a.book = n.payload),
                  Object(v.a)({}, a)
                );
              case "DELETE_BOOK":
                return (
                  (r = a.books.findIndex(function (e) {
                    return e.bookId === n.payload;
                  })),
                  a.books.splice(r, 1),
                  Object(v.a)({}, a)
                );
              case "POST_BOOK":
                return Object(v.a)({}, a, {
                  books: [n.payload].concat(Object(kn.a)(a.books)),
                });
              case "SUBMIT_COMMENT_BOOK":
                return Object(v.a)({}, a, {
                  book: Object(v.a)({}, a.book, {
                    comments: [n.payload].concat(Object(kn.a)(a.book.comments)),
                  }),
                });
              case "SEARCH_BOOK":
                return Object(v.a)({}, a, {
                  filteredBooks:
                    ((e = a.books),
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
                  : jn,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "SET_ERRORS":
                return Object(v.a)({}, e, { loading: !1, errors: t.payload });
              case "CLEAR_ERRORS":
                return Object(v.a)({}, e, { loading: !1, errors: null });
              case "LOADING_UI":
                return Object(v.a)({}, e, { loading: !0 });
              case "STOP_LOADING_UI":
                return Object(v.a)({}, e, { loading: !1 });
              default:
                return e;
            }
          },
        }),
        wn = ("object" === typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
          : Cn.d)(Cn.a.apply(void 0, An)),
        Bn = Object(Cn.e)(xn, {}, wn),
        Tn = E()({
          palette: {
            primary: {
              light: "#33c9dc",
              main: "#1C2A48",
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
          spacing: function (e) {
            return "".concat(0.25 * e, "rem");
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
            bookInfo: {
              "& .profile-image": {
                width: 70,
                height: 70,
                objectFit: "cover",
                maxWidth: "100%",
                borderRadius: "50%",
              },
            },
            buttons: { textAlign: "center", "& a": { margin: "20px 10px" } },
          },
        });
      K.a.defaults.baseURL =
        "https://us-central1-socialape-aa1d6.cloudfunctions.net/api";
      var Dn = localStorage.FBIdToken;
      Dn &&
        (1e3 * y()(Dn).exp < Date.now()
          ? (Bn.dispatch(H()), (window.location.href = "/login"))
          : (Bn.dispatch({ type: "SET_AUTHENTICATED" }),
            (K.a.defaults.headers.common.Authorization = Dn),
            Bn.dispatch(z())));
      var Rn = (function (e) {
        function t() {
          return (
            Object(i.a)(this, t),
            Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
          );
        }
        return (
          Object(u.a)(t, e),
          Object(c.a)(t, [
            {
              key: "render",
              value: function () {
                return r.a.createElement(
                  g.a,
                  { theme: Tn },
                  r.a.createElement(
                    F.a,
                    { store: Bn },
                    r.a.createElement(
                      p.a,
                      null,
                      r.a.createElement(Ie, null),
                      r.a.createElement(
                        "div",
                        { className: "home-page-container" },
                        r.a.createElement(
                          "div",
                          { className: "adjust-top" },
                          r.a.createElement(
                            d.d,
                            null,
                            r.a.createElement(d.b, {
                              exact: !0,
                              path: "/",
                              component: ut,
                            }),
                            r.a.createElement(xe, {
                              exact: !0,
                              path: "/contentcreation/:handle",
                              component: Ga,
                            }),
                            r.a.createElement(xe, {
                              exact: !0,
                              path: "/community",
                              component: ca,
                            }),
                            r.a.createElement(d.b, {
                              exact: !0,
                              path: "/login",
                              component: da,
                            }),
                            r.a.createElement(d.b, {
                              exact: !0,
                              path: "/signup",
                              component: Ea,
                            }),
                            r.a.createElement(xe, {
                              exact: !0,
                              path: "/users/:handle",
                              component: ya,
                            }),
                            r.a.createElement(xe, {
                              exact: !0,
                              path: "/users/:handle/scream/:screamId",
                              component: ya,
                            }),
                            r.a.createElement(d.b, {
                              exact: !0,
                              path: "/books/:bookId",
                              component: vn,
                            }),
                            r.a.createElement(d.b, {
                              exact: !0,
                              path: "/book/:bookId/chapter/:chapterId",
                              component: ln,
                            }),
                            r.a.createElement(d.b, {
                              exact: !0,
                              path: "/search/:searchValue",
                              component: Oa,
                            }),
                            r.a.createElement(d.b, {
                              exact: !0,
                              path: "/search",
                              component: Oa,
                            }),
                            r.a.createElement(d.b, { component: mn })
                          )
                        )
                      ),
                      r.a.createElement(je, null)
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
      a(480), a(481), a(482);
      l.a.render(r.a.createElement(Rn, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
    98: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
  },
  [[291, 1, 2]],
]);
//# sourceMappingURL=main.32695f1e.chunk.js.map
