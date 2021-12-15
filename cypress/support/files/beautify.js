(this.webpackJsonpqdx360 = this.webpackJsonpqdx360 || []).push([[0], {
    304: function (e, t) {
    }, 399: function (e, t) {
    }, 410: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(2), a = n.n(i), r = n(253), o = n.n(r), c = n(41), s = {
            aws_project_region: "us-west-2",
            aws_cognito_identity_pool_id: "us-west-2:956b5867-bd23-44c4-88bf-666d83cf5785",
            aws_cognito_region: "us-west-2",
            aws_user_pools_id: "us-west-2_OXDkkhB2F",
            aws_user_pools_web_client_id: "1v6rr1ihgh1ou5b6dairckvk1n",
            oauth: {},
            aws_cognito_username_attributes: [],
            aws_cognito_social_providers: [],
            aws_cognito_signup_attributes: ["EMAIL"],
            aws_cognito_mfa_configuration: "OFF",
            aws_cognito_mfa_types: ["SMS"],
            aws_cognito_password_protection_settings: {passwordPolicyMinLength: 8, passwordPolicyCharacters: []},
            aws_cognito_verification_mechanisms: ["EMAIL"],
            aws_appsync_graphqlEndpoint: "https://izkriswmjra25jcloafsnbvfdu.appsync-api.us-west-2.amazonaws.com/graphql",
            aws_appsync_region: "us-west-2",
            aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
            aws_cloud_logic_custom: [{
                name: "hitachicontentapi",
                endpoint: "https://nr8ic9s7j8.execute-api.us-west-2.amazonaws.com/dev",
                region: "us-west-2"
            }, {
                name: "points",
                endpoint: "https://ytordt61jd.execute-api.us-west-2.amazonaws.com/dev",
                region: "us-west-2"
            }],
            aws_user_files_s3_bucket: "hitachilightamplifyce2ed1d315e14f6b8509c0a6fdd4154036-dev",
            aws_user_files_s3_bucket_region: "us-west-2",
            aws_content_delivery_bucket: "hitachilightamplify-20210830184953-hostingbucket-dev",
            aws_content_delivery_bucket_region: "us-west-2",
            aws_content_delivery_url: "https://d3sg95t3v75p7w.cloudfront.net"
        }, l = n(3), d = n.n(l), p = n(7), m = n(5), u = n(24), h = n(30);

        function b() {
            return new URLSearchParams(Object(h.h)().search)
        }

        function f() {
            var e, t;
            return null !== (e = null === (t = b().get("debug")) || void 0 === t ? void 0 : t.split(",")) && void 0 !== e ? e : []
        }

        function g(e) {
            return Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0
            })["".concat("REACT_APP_").concat(e)]
        }

        function x(e) {
            var t = e.id.split("/");
            return t[t.length - 1]
        }

        var j = !1,
            v = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            w = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
            y = ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St. Kitts & Nevis", "St. Lucia", "St. Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"],
            O = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"],
            C = ["AS", "GU", "MP", "PR", "UM", "VI"],
            k = ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"], L = n(17), N = n(450),
            I = n(166), S = n(277), z = n(8), E = n(453), M = n(188), _ = n(451), T = n(449), R = n(1),
            A = Object(i.createContext)(), P = {
                PAGE_VIEW: "PAGE_VIEW",
                NAV_CLICK: "NAV_CLICK",
                USER_PROFILE_COMPLETE: "USER_PROFILE_COMPLETE",
                USER_REGISTERED: "USER_REGISTERED",
                USER_LOGGED_IN: "USER_LOGGED_IN",
                USER_LOGGED_OUT: "USER_LOGGED_OUT",
                USER_EMAIL_CONFIRMED: "USER_EMAIL_CONFIRMED",
                POLL_SUBMITTED: "POLL_SUBMITTED",
                SESSION_JOINED: "SESSION_JOINED",
                SESSION_LEFT: "SESSION_LEFT",
                SESSION_COMPLETED: "SESSION_COMPLETED"
            }, D = new T.a, Z = function () {
                return Object(i.useContext)(A)
            }, q = function (e) {
                var t = e.children;

                function n(e) {
                    var t = e.type, n = e.payload;
                    D.next({type: t, payload: n})
                }

                return Object(R.jsx)(A.Provider, {
                    value: {
                        trackPageView: function (e) {
                            n({type: P.PAGE_VIEW, payload: e})
                        }, trackNavClick: function (e) {
                            n({type: P.NAV_CLICK, payload: e})
                        }, trackUserProfileComplete: function (e) {
                            n({type: P.USER_PROFILE_COMPLETE, payload: e})
                        }, trackUserLogin: function (e) {
                            n({type: P.USER_LOGGED_IN, payload: e})
                        }, trackUserLogout: function (e) {
                            n({type: P.USER_LOGGED_OUT, payload: e})
                        }, trackUserRegistered: function (e) {
                            n({type: P.USER_REGISTERED, payload: e})
                        }, trackUserEmailConfirmed: function (e) {
                            n({type: P.USER_EMAIL_CONFIRMED, payload: e})
                        }, trackPollSubmitted: function (e) {
                            n({type: P.POLL_SUBMITTED, payload: e})
                        }, trackSessionJoined: function (e) {
                            n({type: P.SESSION_JOINED, payload: e})
                        }, trackSessionLeft: function (e) {
                            n({type: P.SESSION_LEFT, payload: e})
                        }, trackSessionCompleted: function (e) {
                            n({type: P, payload: e})
                        }, dataEventSubject$: D, types: P
                    }, children: t
                })
            }, U = n(137);

        function H(e) {
            return B.apply(this, arguments)
        }

        function B() {
            return (B = Object(p.a)(d.a.mark((function e(t) {
                var n, i, a, r, o, c;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.firstName, i = t.lastName, a = t.username, r = t.password, o = t.email, e.prev = 1, e.next = 4, U.a.signUp({
                                username: a,
                                password: r,
                                attributes: {email: o, "custom:firstName": n, "custom:lastName": i}
                            });
                        case 4:
                            return c = e.sent, e.abrupt("return", c);
                        case 8:
                            throw e.prev = 8, e.t0 = e.catch(1), e.t0;
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[1, 8]])
            })))).apply(this, arguments)
        }

        function F() {
            return (F = Object(p.a)(d.a.mark((function e(t) {
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, U.a.resendSignUp(t);
                        case 3:
                            e.next = 8;
                            break;
                        case 5:
                            throw e.prev = 5, e.t0 = e.catch(0), e.t0;
                        case 8:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 5]])
            })))).apply(this, arguments)
        }

        function $(e) {
            return V.apply(this, arguments)
        }

        function V() {
            return (V = Object(p.a)(d.a.mark((function e(t) {
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, U.a.forgotPassword(t);
                        case 3:
                            e.next = 8;
                            break;
                        case 5:
                            throw e.prev = 5, e.t0 = e.catch(0), e.t0;
                        case 8:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 5]])
            })))).apply(this, arguments)
        }

        function W() {
            return (W = Object(p.a)(d.a.mark((function e(t) {
                var n, i, a;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.username, i = t.code, a = t.password, e.prev = 1, e.next = 4, U.a.forgotPasswordSubmit(n, i, a);
                        case 4:
                            e.next = 9;
                            break;
                        case 6:
                            throw e.prev = 6, e.t0 = e.catch(1), e.t0;
                        case 9:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[1, 6]])
            })))).apply(this, arguments)
        }

        function G() {
            return (G = Object(p.a)(d.a.mark((function e(t) {
                var n, i;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.username, i = t.code, e.prev = 1, e.next = 4, U.a.confirmSignUp(n, i);
                        case 4:
                            e.next = 9;
                            break;
                        case 6:
                            throw e.prev = 6, e.t0 = e.catch(1), e.t0;
                        case 9:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[1, 6]])
            })))).apply(this, arguments)
        }

        function X() {
            return Q.apply(this, arguments)
        }

        function Q() {
            return (Q = Object(p.a)(d.a.mark((function e() {
                var t;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, U.a.currentSession();
                        case 3:
                            return t = e.sent, e.abrupt("return", t);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function K(e) {
            return Y.apply(this, arguments)
        }

        function Y() {
            return (Y = Object(p.a)(d.a.mark((function e(t) {
                var n, i, a;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.username, i = t.password, e.prev = 1, e.next = 4, U.a.signIn(n, i);
                        case 4:
                            return a = e.sent, e.abrupt("return", a);
                        case 8:
                            throw e.prev = 8, e.t0 = e.catch(1), e.t0;
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[1, 8]])
            })))).apply(this, arguments)
        }

        function J() {
            return ee.apply(this, arguments)
        }

        function ee() {
            return (ee = Object(p.a)(d.a.mark((function e() {
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, U.a.signOut();
                        case 3:
                            e.next = 8;
                            break;
                        case 5:
                            throw e.prev = 5, e.t0 = e.catch(0), e.t0;
                        case 8:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 5]])
            })))).apply(this, arguments)
        }

        var te = ["userInfo"], ne = Object(i.createContext)(), ie = function () {
            return Object(i.useContext)(ne)
        };

        function ae() {
            return re.apply(this, arguments)
        }

        function re() {
            return (re = Object(p.a)(d.a.mark((function e() {
                var t, n, i;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, X();
                        case 3:
                            return t = e.sent, n = t.accessToken.payload.username, i = t.idToken.payload, e.abrupt("return", {
                                username: n,
                                userInfo: i
                            });
                        case 9:
                            throw e.prev = 9, e.t0 = e.catch(0), e.t0;
                        case 12:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 9]])
            })))).apply(this, arguments)
        }

        var oe = function (e) {
                var t = e.children, n = Object(i.useState)(null), a = Object(z.a)(n, 2), r = a[0], o = a[1],
                    c = Object(i.useState)(null), s = Object(z.a)(c, 2), l = s[0], d = s[1], p = Z(),
                    m = (p.trackUserLogout, p.trackUserLogin);
                Object(i.useEffect)((function () {
                    M.a.listen("auth", (function (e) {
                        "signOut" === e.payload.event && window.location.reload()
                    }))
                }), []);
                var h = Object(_.a)("session", ae, {
                    staleTime: 1 / 0,
                    retry: !1,
                    refetchOnWindowFocus: !1,
                    onSuccess: function (e) {
                        var t, n = e.userInfo, i = (Object(u.a)(e, te), {
                            id: n.sub,
                            email: n.email,
                            firstName: n["custom:firstName"],
                            lastName: n["custom:lastName"],
                            fullName: "".concat(n["custom:firstName"], " ").concat(n["custom:lastName"]),
                            isAdmin: !!(null === (t = n["cognito:groups"]) || void 0 === t ? void 0 : t.includes("admin"))
                        });
                        m(i.id), o(i.id), d(i)
                    },
                    onError: function (e) {
                        console.trace(e)
                    }
                }), b = h.refetch, f = h.status;
                return Object(R.jsx)(ne.Provider, {
                    value: {
                        signIn: K,
                        signOut: J,
                        currentUserId: r,
                        currentUserInfo: l,
                        status: f,
                        refetchSession: b
                    }, children: t
                })
            }, ce = n(6), se = n(446), le = n(49), de = n.n(le), pe = Object(R.jsxs)("svg", {
                viewBox: "0 0 57 57",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M5.46666667,29.0903627 C5.46666667,28.0922647 5.70828062,27.1677215 6.19217597,26.3163926 C6.6757376,25.4650637 7.33450271,24.7925138 8.16913876,24.2987431 C9.00377481,23.8053128 9.90982713,23.5580869 10.8876295,23.5580869 L11.8440736,23.5580869 L11.8440736,24.8595986 L10.8876295,24.8595986 C10.1327527,24.8595986 9.43928062,25.0499557 8.80687946,25.4293079 C8.17414457,25.8090006 7.67222829,26.3215006 7.30012946,26.9668079 C6.92803062,27.6124557 6.74214806,28.3204208 6.74214806,29.0900221 L6.74214806,30.0659856 L5.46666667,30.0659856 L5.46666667,29.0903627 Z M8.33666667,20.1582198 C7.84743178,19.8653627 7.45964806,19.4720487 7.17298178,18.978278 C6.88598178,18.4848477 6.74248178,17.9399972 6.74248178,17.3433859 C6.74248178,16.7573311 6.88598178,16.2155454 7.17298178,15.7163261 C7.45964806,15.2177879 7.84743178,14.8214092 8.33666667,14.5288926 C8.82556783,14.2360354 9.35718527,14.0892663 9.93118527,14.0892663 C10.5051853,14.0892663 11.036469,14.2360354 11.5253702,14.5288926 C12.0142713,14.8214092 12.4023888,15.2177879 12.689055,15.7163261 C12.976055,16.2155454 13.119555,16.7576717 13.119555,17.3433859 C13.119555,17.9399972 12.976055,18.4848477 12.689055,18.978278 C12.4023888,19.4720487 12.0142713,19.8650221 11.5253702,20.1582198 C11.0361353,20.4507364 10.5048516,20.5971656 9.93118527,20.5971656 C9.35685155,20.5975055 8.82523411,20.451077 8.33666667,20.1582198 Z M11.2860922,18.7262846 C11.6578574,18.3469324 11.8440736,17.8858527 11.8440736,17.3433859 C11.8440736,16.8009192 11.6578574,16.34018 11.2860922,15.9601467 C10.9139934,15.5807946 10.4621353,15.3904374 9.93085155,15.3904374 C9.40957946,15.3904374 8.96072481,15.5807946 8.58328643,15.9601467 C8.20584806,16.3398394 8.01762946,16.8009192 8.01762946,17.3433859 C8.01762946,17.8858527 8.20351202,18.3465919 8.57561085,18.7262846 C8.94737597,19.1059773 9.39923411,19.2956534 9.93118527,19.2956534 C10.462469,19.2956534 10.9139934,19.1063178 11.2860922,18.7262846 Z M11.2063329,29.0903627 C11.2063329,28.0922647 11.4482806,27.1677215 11.932176,26.3163926 C12.4154039,25.4650637 13.0745027,24.7925138 13.9091388,24.2987431 C14.7434411,23.8053128 15.6498271,23.5580869 16.6276295,23.5580869 L23.0053702,23.5580869 C23.9831725,23.5580869 24.8892248,23.8053128 25.7238609,24.2987431 C26.5581632,24.7925138 27.217262,25.4650637 27.7011574,26.3163926 C28.184719,27.1677215 28.4266667,28.0922647 28.4266667,29.0903627 L28.4266667,30.0663261 L27.1511853,30.0663261 L27.1511853,29.0903627 C27.1511853,28.3204208 26.964969,27.6127962 26.5932039,26.9671484 C26.2207713,26.3218411 25.7185213,25.8096816 25.0861202,25.4296484 C24.4533853,25.0502962 23.7599132,24.8599391 23.0057039,24.8599391 L16.6276295,24.8599391 C15.8727527,24.8599391 15.1789469,25.0502962 14.5468795,25.4296484 C13.9141446,25.8093411 13.4122283,26.3218411 13.0401295,26.9671484 C12.6680306,27.6127962 12.4818143,28.3207614 12.4818143,29.0903627 L12.4818143,30.0663261 L11.2063329,30.0663261 L11.2063329,29.0903627 Z M17.0978422,19.8895404 C16.2632062,19.3961102 15.6041074,18.7235604 15.1205457,17.8722315 C14.6369841,17.0209025 14.3950364,16.0960188 14.3950364,15.0982614 C14.3950364,14.1005039 14.6369841,13.1759607 15.1205457,12.3242913 C15.6041074,11.4729623 16.2632062,10.8004125 17.0978422,10.3069823 C17.9321446,9.81355205 18.8381969,9.56666667 19.8163329,9.56666667 C20.7941353,9.56666667 21.7001876,9.81355205 22.5348236,10.3069823 C23.369126,10.8004125 24.0282248,11.4729623 24.5121202,12.3242913 C24.9956818,13.1763012 25.2376295,14.1008444 25.2376295,15.0982614 C25.2376295,16.0963594 24.9956818,17.0209025 24.5121202,17.8722315 C24.0282248,18.7235604 23.369126,19.3961102 22.5348236,19.8895404 C21.7001876,20.3833112 20.7941353,20.629856 19.8163329,20.629856 C18.8381969,20.629856 17.9321446,20.3836517 17.0978422,19.8895404 Z M21.8970829,18.7589756 C22.5294841,18.3792829 23.0317341,17.8671235 23.4041667,17.2211351 C23.7759318,16.5758278 23.9621481,15.8682032 23.9621481,15.0982614 C23.9621481,14.3283195 23.7759318,13.6203544 23.4041667,12.9753876 C23.0320678,12.3297398 22.5294841,11.8175803 21.8970829,11.4375471 C21.2643481,11.0578544 20.570876,10.8681783 19.8166667,10.8681783 C19.0614562,10.8681783 18.3679841,11.0578544 17.7359167,11.4375471 C17.1031818,11.8172398 16.6012655,12.3297398 16.2291667,12.9753876 C15.8570678,13.6206949 15.6708516,14.3283195 15.6708516,15.0982614 C15.6708516,15.8682032 15.8570678,16.5761683 16.2291667,17.2211351 C16.6009318,17.8667829 17.1031818,18.3789424 17.7359167,18.7589756 C18.3683178,19.1386683 19.0617899,19.3283444 19.8166667,19.3283444 C20.5712097,19.3283444 21.2646818,19.1386683 21.8970829,18.7589756 Z M28.1076295,20.1582198 C27.6187283,19.8653627 27.2309446,19.4720487 26.9439446,18.978278 C26.6569446,18.4848477 26.5134446,17.9399972 26.5134446,17.3433859 C26.5134446,16.7573311 26.6569446,16.2155454 26.9439446,15.7163261 C27.2309446,15.2177879 27.6187283,14.8214092 28.1076295,14.5288926 C28.5965306,14.2360354 29.1284818,14.0892663 29.7021481,14.0892663 C30.2758143,14.0892663 30.8074318,14.2360354 31.2963329,14.5288926 C31.7852341,14.8214092 32.1733516,15.2177879 32.4603516,15.7163261 C32.7470178,16.2155454 32.8908516,16.7576717 32.8908516,17.3433859 C32.8908516,17.9399972 32.7470178,18.4848477 32.4603516,18.978278 C32.1733516,19.4720487 31.7852341,19.8650221 31.2963329,20.1582198 C30.8074318,20.4507364 30.2758143,20.597165 29.7021481,20.597165 C29.1284818,20.597165 28.5965306,20.451077 28.1076295,20.1582198 Z M31.0573888,18.7262846 C31.4294876,18.3469324 31.6157039,17.8858527 31.6157039,17.3433859 C31.6157039,16.8009192 31.4294876,16.34018 31.0573888,15.9601467 C30.6852899,15.5807946 30.2334318,15.3904374 29.7021481,15.3904374 C29.180876,15.3904374 28.7320213,15.5807946 28.3549167,15.9601467 C27.9774783,16.3398394 27.788926,16.8009192 27.788926,17.3433859 C27.788926,17.8858527 27.9748085,18.3465919 28.3469074,18.7262846 C28.7190062,19.1059773 29.1708643,19.2956534 29.7024818,19.2956534 C30.2334318,19.2956534 30.6849562,19.1063178 31.0573888,18.7262846 Z M32.8911853,29.0903627 C32.8911853,28.3204208 32.704969,27.6127962 32.3328702,26.9671484 C31.9607713,26.3218411 31.4585213,25.8096816 30.8261202,25.4296484 C30.1933853,25.0502962 29.4999132,24.8599391 28.7453702,24.8599391 L27.788926,24.8599391 L27.788926,23.5584275 L28.7453702,23.5584275 C29.7235062,23.5584275 30.6295585,23.8056534 31.4638609,24.2990836 C32.2981632,24.7928544 32.957262,25.4654042 33.4411574,26.3167331 C33.9243853,27.168062 34.1666667,28.0926052 34.1666667,29.0907032 L34.1666667,30.0666667 L32.8911853,30.0666667 L32.8911853,29.0903627 Z",
                        id: "icon-society-topic"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        children: Object(R.jsxs)("g", {
                            transform: "translate(9.000000, 8.000000)",
                            children: [Object(R.jsx)("mask", {
                                id: "icon-society-mask",
                                fill: "white",
                                children: Object(R.jsx)("use", {xlinkHref: "#icon-society-topic"})
                            }), Object(R.jsx)("use", {
                                fill: "currentColor",
                                fillRule: "nonzero",
                                xlinkHref: "#icon-society-topic"
                            }), Object(R.jsx)("g", {
                                mask: "url(#icon-society-mask)",
                                children: Object(R.jsx)("g", {
                                    transform: "translate(-24.600000, -24.600000)",
                                    children: Object(R.jsx)("rect", {
                                        fill: "currentColor",
                                        x: "0",
                                        y: "0",
                                        width: "88.8333333",
                                        height: "88.8333333"
                                    })
                                })
                            })]
                        })
                    })
                })]
            }), me = Object(R.jsxs)("svg", {
                viewBox: "0 0 30 30",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M30,0 L30,30 L0,30 L0,0 L30,0 Z M29,1 L1,1 L1,29 L29,29 L29,1 Z M18.0675204,11 L22,15.5302401 L18.0675204,20 L17.2333839,19.1593481 L20.0768948,16.1136446 L9,16.1136446 L9,14.9375602 L20.0768948,14.9375602 L17.2333839,11.882176 L18.0675204,11 Z",
                        id: "icon-arrow-box"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-arrow-box"})
                        }), Object(R.jsx)("use", {fill: "currentColor", xlinkHref: "#icon-arrow-box"})]
                    })
                })]
            }), ue = Object(R.jsxs)("svg", {
                viewBox: "0 0 16 16",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnslink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("polygon", {
                        id: "icon-arrow-corner",
                        points: "22.9999664 22.4826888 22.9999664 7 7.50955307 7 7.50955307 8.92913561 19.5350055 8.92913561 7 21.5170413 8.4607188 23 20.9617541 10.2741447 20.9617541 22.4826888"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-7.000000, -7.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-arrow-corner"})
                        }), Object(R.jsx)("use", {
                            fill: "currentColor",
                            fillRule: "nonzero",
                            xlinkHref: "#icon-arrow-corner"
                        })]
                    })
                })]
            }), he = Object(R.jsxs)("svg", {
                viewBox: "0 0 30 30",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M30,0 L30,30 L0,30 L0,0 L30,0 Z M29,1 L1,1 L1,29 L29,29 L29,1 Z M20,19.6766805 L20,10 L10.3184707,10 L10.3184707,11.2057098 L17.8343785,11.2057098 L10,19.0731508 L10.9129493,20 L18.7260963,12.0463404 L18.7260963,19.6766805 L20,19.6766805 Z",
                        id: "icon-arrow-corner-box"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-arrow-corner-box"})
                        }), Object(R.jsx)("use", {fill: "currentColor", xlinkHref: "#icon-arrow-corner-box"})]
                    })
                })]
            }), be = Object(R.jsxs)("svg", {
                viewBox: "0 0 16 11",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("polygon", {
                        id: "icon-arrow",
                        points: "7 14.7768673 7 16.2036389 20.2854844 16.2036389 16.8750143 19.8985465 17.8754668 20.9183868 22.592032 15.4958793 17.8754668 10 16.8750143 11.0702154 20.2854844 14.7768673"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-7.000000, -10.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-arrow"})
                        }), Object(R.jsx)("use", {fill: "currentColor", xlinkHref: "#icon-arrow"})]
                    })
                })]
            }), fe = Object(R.jsxs)("svg", {
                viewBox: "0 0 57 57",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M29.6627957,4.1 C29.8858319,4.1 30.0666667,4.27592997 30.0666667,4.49291667 L30.0666667,4.49291667 L30.0666667,35.1404167 C30.0666667,35.3574034 29.8858319,35.5333333 29.6627957,35.5333333 L29.6627957,35.5333333 L9.97053761,35.5333333 C9.74750146,35.5333333 9.56666667,35.3574034 9.56666667,35.1404167 L9.56666667,35.1404167 L9.56666667,4.49291667 C9.56666667,4.27592997 9.74750146,4.1 9.97053761,4.1 L9.97053761,4.1 Z M22.6417912,26.305931 L16.9915421,26.305931 L16.9915421,34.7475 L22.6417912,34.7475 L22.6417912,26.305931 Z M29.2589248,4.88583333 L10.3744086,4.88583333 L10.3744086,34.7475 L16.1838002,34.7475 L16.1838002,25.9130143 C16.1838002,25.6960276 16.364635,25.5200977 16.5876711,25.5200977 L16.5876711,25.5200977 L23.0456622,25.5200977 C23.2686983,25.5200977 23.4495331,25.6960276 23.4495331,25.9130143 L23.4495331,25.9130143 L23.4495331,34.7475 L29.2589248,34.7475 L29.2589248,4.88583333 Z M17.9213524,16.6940536 C18.1443885,16.6940536 18.3252233,16.8699835 18.3252233,17.0869702 L18.3252233,17.0869702 L18.3252233,22.5463631 C18.3252233,22.7633498 18.1443885,22.9392798 17.9213524,22.9392798 L17.9213524,22.9392798 L13.7402626,22.9392798 C13.5172265,22.9392798 13.3363917,22.7633498 13.3363917,22.5463631 L13.3363917,22.5463631 L13.3363917,17.0869702 C13.3363917,16.8699835 13.5172265,16.6940536 13.7402626,16.6940536 L13.7402626,16.6940536 Z M25.8930706,16.6940536 C26.1161068,16.6940536 26.2969416,16.8699835 26.2969416,17.0869702 L26.2969416,17.0869702 L26.2969416,22.5463631 C26.2969416,22.7633498 26.1161068,22.9392798 25.8930706,22.9392798 L25.8930706,22.9392798 L21.7119809,22.9392798 C21.4889448,22.9392798 21.30811,22.7633498 21.30811,22.5463631 L21.30811,22.5463631 L21.30811,17.0869702 C21.30811,16.8699835 21.4889448,16.6940536 21.7119809,16.6940536 L21.7119809,16.6940536 Z M17.5174814,17.4798869 L14.1441336,17.4798869 L14.1441336,22.1534464 L17.5174814,22.1534464 L17.5174814,17.4798869 Z M25.4891997,17.4798869 L22.1158519,17.4798869 L22.1158519,22.1534464 L25.4891997,22.1534464 L25.4891997,17.4798869 Z M17.9213524,7.86800946 C18.1443885,7.86800946 18.3252233,8.04393943 18.3252233,8.26092613 L18.3252233,8.26092613 L18.3252233,13.720319 C18.3252233,13.9373057 18.1443885,14.1132357 17.9213524,14.1132357 L17.9213524,14.1132357 L13.7402626,14.1132357 C13.5172265,14.1132357 13.3363917,13.9373057 13.3363917,13.720319 L13.3363917,13.720319 L13.3363917,8.26092613 C13.3363917,8.04393943 13.5172265,7.86800946 13.7402626,7.86800946 L13.7402626,7.86800946 Z M25.8930706,7.86800946 C26.1161068,7.86800946 26.2969416,8.04393943 26.2969416,8.26092613 L26.2969416,8.26092613 L26.2969416,13.720319 C26.2969416,13.9373057 26.1161068,14.1132357 25.8930706,14.1132357 L25.8930706,14.1132357 L21.7119809,14.1132357 C21.4889448,14.1132357 21.30811,13.9373057 21.30811,13.720319 L21.30811,13.720319 L21.30811,8.26092613 C21.30811,8.04393943 21.4889448,7.86800946 21.7119809,7.86800946 L21.7119809,7.86800946 Z M17.5174814,8.65384279 L14.1441336,8.65384279 L14.1441336,13.3274023 L17.5174814,13.3274023 L17.5174814,8.65384279 Z M25.4891997,8.65384279 L22.1158519,8.65384279 L22.1158519,13.3274023 L25.4891997,13.3274023 L25.4891997,8.65384279 Z",
                        id: "icon-business-topic"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        id: "business-topic",
                        children: Object(R.jsxs)("g", {
                            transform: "translate(9.000000, 8.000000)",
                            children: [Object(R.jsx)("mask", {
                                fill: "white",
                                children: Object(R.jsx)("use", {xlinkHref: "#icon-business-topic"})
                            }), Object(R.jsx)("use", {
                                fill: "currentColor",
                                fillRule: "nonzero",
                                xlinkHref: "#icon-business-topic"
                            })]
                        })
                    })
                })]
            }), ge = Object(R.jsxs)("svg", {
                viewBox: "0 0 24 15",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("polygon", {
                        id: "icon-chevron",
                        points: "11.7942736 14.7230565 13.0624168 13.4847307 23.3294364 3.43839029 20.7931892 0.03725 11.7942736 8.84526458 2.79537762 0.03725 0.259130435 3.43839029 10.52615 13.4847307"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(12.000000, 7.500000) scale(-1, 1) translate(-12.000000, -7.500000) ",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-chevron"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-chevron"})]
                    })
                })]
            }), xe = Object(R.jsxs)("svg", {
                viewBox: "0 0 30 30",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M30,0 L30,30 L0,30 L0,0 L30,0 Z M29,1 L1,1 L1,29 L29,29 L29,1 Z M21.0382177,12 L22,12.8839013 L15.5137155,19 L9,12.8839013 L9.98921333,12 L15.5137155,17.175154 L21.0382177,12 Z",
                        id: "icon-chevron-box"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-chevron-box"})
                        }), Object(R.jsx)("use", {id: "icon-arrow5", fill: "currentColor", xlinkHref: "#icon-chevron-box"})]
                    })
                })]
            }), je = Object(R.jsxs)("svg", {
                viewBox: "0 0 24 24",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M15,3 C21.627417,3 27,8.372583 27,15 C27,21.627417 21.627417,27 15,27 C8.372583,27 3,21.627417 3,15 C3,8.372583 8.372583,3 15,3 Z M15,5 C9.4771525,5 5,9.4771525 5,15 C5,20.5228475 9.4771525,25 15,25 C20.5228475,25 25,20.5228475 25,15 C25,9.4771525 20.5228475,5 15,5 Z",
                        id: "icon-circle-outline"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-3.000000, -3.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-circle-outline"})
                        }), Object(R.jsx)("use", {fill: "currentColor", xlinkHref: "#icon-circle-outline"})]
                    })
                })]
            }), ve = Object(R.jsxs)("svg", {
                viewBox: "0 0 24 24",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("circle", {
                        id: "icon-circle-filled",
                        cx: "15",
                        cy: "15",
                        r: "12"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-3.000000, -3.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-circle-filled"})
                        }), Object(R.jsx)("use", {
                            id: "icon-circle",
                            fill: "currentColor",
                            xlinkHref: "#icon-circle-filled"
                        })]
                    })
                })]
            }), we = Object(R.jsxs)("svg", {
                viewBox: "0 0 19 21",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M21.3836164,6.04795205 L20.3596404,6.04795205 L20.3596404,4 L18.3116883,4 L18.3116883,6.04795205 L10.1198801,6.04795205 L10.1198801,4 L8.07192807,4 L8.07192807,6.04795205 L7.04795205,6.04795205 C5.91133866,6.04795205 5.01023976,6.96953047 5.01023976,8.0959041 L5,22.4315684 C5,23.5579421 5.91133866,24.4795205 7.04795205,24.4795205 L21.3836164,24.4795205 C22.50999,24.4795205 23.4315684,23.5579421 23.4315684,22.4315684 L23.4315684,8.0959041 C23.4315684,6.96953047 22.50999,6.04795205 21.3836164,6.04795205 Z M21.3836164,22.4315684 L7.04795205,22.4315684 L7.04795205,12.1918082 L21.3836164,12.1918082 L21.3836164,22.4315684 Z M21.3836164,10.1438561 L7.04795205,10.1438561 L7.04795205,8.0959041 L21.3836164,8.0959041 L21.3836164,10.1438561 Z M14.2157842,15.2637363 L19.3356643,15.2637363 L19.3356643,20.3836164 L14.2157842,20.3836164 L14.2157842,15.2637363 Z",
                        id: "icon-calendar"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-5.000000, -4.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-calendar"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-calendar"})]
                    })
                })]
            }), ye = Object(R.jsxs)("svg", {
                viewBox: "0 0 22 23",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M19.286,15.656 L19.286,18.358 L21.848,18.358 L21.848,20.122 L19.286,20.122 L19.286,22.852 L17.41,22.852 L17.41,20.122 L14.848,20.122 L14.848,18.358 L17.41,18.358 L17.41,15.656 L19.286,15.656 Z M5,0 L5,2 L15,2 L15,0 L17,0 L17,2 L18,2 C19.05,2 19.9177686,2.82004132 19.9944872,3.85130541 L20,4 L20,13 L18,13 L18,9 L2,9 L2,20 L12,20 L12,22 L2,22 C0.95,22 0.082231405,21.1799587 0.00551277235,20.1486946 L0,20 L0,4 C0,2.95 0.820041322,2.0822314 1.85130541,2.00551277 L2,2 L3,2 L3,0 L5,0 Z M18,4 L2,4 L2,7 L18,7 L18,4 Z",
                        id: "icon-cal-add"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        transform: "translate(-4.000000, -4.000000)",
                        children: Object(R.jsxs)("g", {
                            transform: "translate(4.000000, 4.000000)",
                            children: [Object(R.jsx)("mask", {
                                fill: "white",
                                children: Object(R.jsx)("use", {xlinkHref: "#icon-cal-add"})
                            }), Object(R.jsx)("use", {
                                fill: "currentColor",
                                fillRule: "nonzero",
                                xlinkHref: "#icon-cal-add"
                            })]
                        })
                    })
                })]
            }), Oe = Object(R.jsx)("img", {
                src: "/static/images/hitachi/icons/icon-cal-remove.svg",
                alt: "Remove from my calendar"
            }), Ce = Object(R.jsx)("img", {
                src: "/static/images/hitachi/icons/icon-cal-remove-dark.svg",
                alt: "Remove from my calendar"
            }), ke = Object(R.jsxs)("svg", {
                viewBox: "0 0 30 30",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M30,0 L30,30 L0,30 L0,0 L30,0 Z M29,1 L1,1 L1,29 L29,29 L29,1 Z M21.284375,18.2941176 L21.284375,20.0611124 L23,20.0611124 L23,21.2146944 L21.284375,21.2146944 L21.284375,23 L20.028125,23 L20.028125,21.2146944 L18.3125,21.2146944 L18.3125,20.0611124 L20.028125,20.0611124 L20.028125,18.2941176 L21.284375,18.2941176 Z M11.515625,7 L11.515625,8.36898396 L18.546875,8.36898396 L18.546875,7 L19.953125,7 L19.953125,8.36898396 L20.65625,8.36898396 C21.3841912,8.36898396 21.9875649,8.91468275 22.0560312,9.60661456 L22.0625,9.73796791 L22.062,15.898 L20.656,15.898 L20.65625,13.1604278 L9.40625,13.1604278 L9.40625,20.6898396 L16.437,20.689 L16.437,22.058 L9.40625,22.0588235 C8.67830882,22.0588235 8.07493512,21.5131247 8.00646881,20.8211929 L8,20.6898396 L8,9.73796791 C8,9.0293174 8.56055363,8.44193328 9.27132099,8.37528134 L9.40625,8.36898396 L10.109375,8.36898396 L10.109375,7 L11.515625,7 Z M20.65625,9.73796791 L9.40625,9.73796791 L9.40625,11.7914439 L20.65625,11.7914439 L20.65625,9.73796791 Z",
                        id: "icon-cal-add-box"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-cal-add-box"})
                        }), Object(R.jsx)("use", {fill: "currentColor", xlinkHref: "#icon-cal-add-box"})]
                    })
                })]
            }), Le = Object(R.jsxs)("svg", {
                viewBox: "0 0 21 21",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M19.95,4.2 L17.85,4.2 L17.85,13.65 L4.2,13.65 L4.2,15.75 C4.2,16.3275 4.6725,16.8 5.25,16.8 L16.8,16.8 L21,21 L21,5.25 C21,4.6725 20.5275,4.2 19.95,4.2 Z M14.7,11.55 C15.2775,11.55 15.75,11.0775 15.75,10.5 L15.75,1.05 C15.75,0.4725 15.2775,0 14.7,0 L1.05,0 C0.4725,0 0,0.4725 0,1.05 L0,15.75 L4.2,11.55 L14.7,11.55 Z M2.7195,10.0695 L2.1,10.6785 L2.1,2.1 L13.65,2.1 L13.65,9.45 L3.3285,9.45 L2.7195,10.0695 Z",
                        id: "icon-chat"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        transform: "translate(-4.000000, -4.000000)",
                        children: Object(R.jsxs)("g", {
                            transform: "translate(4.000000, 4.000000)",
                            children: [Object(R.jsx)("mask", {
                                fill: "white",
                                children: Object(R.jsx)("use", {xlinkHref: "#icon-chat"})
                            }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-chat"})]
                        })
                    })
                })]
            }), Ne = Object(R.jsxs)("svg", {
                viewBox: "0 0 18 18",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M23,18.5 C21.75,18.5 20.55,18.3 19.43,17.93 C19.33,17.9 19.22,17.88 19.12,17.88 C18.86,17.88 18.61,17.98 18.41,18.17 L16.21,20.37 C13.38,18.93 11.06,16.62 9.62,13.79 L11.82,11.58 C12.1,11.31 12.18,10.92 12.07,10.57 C11.7,9.45 11.5,8.25 11.5,7 C11.5,6.45 11.05,6 10.5,6 L7,6 C6.45,6 6,6.45 6,7 C6,16.39 13.61,24 23,24 C23.55,24 24,23.55 24,23 L24,19.5 C24,18.95 23.55,18.5 23,18.5 Z M8.03,8 L9.53,8 C9.6,8.88 9.75,9.75 9.99,10.59 L8.79,11.8 C8.38,10.59 8.12,9.32 8.03,8 L8.03,8 Z M22,21.97 C20.68,21.88 19.4,21.62 18.2,21.21 L19.4,20.01 C20.25,20.25 21.12,20.4 22,20.46 L22,21.97 Z M15,6 L15,16 L18,13 L24,13 L24,6 L15,6 Z M22,11 L17,11 L17,8 L22,8 L22,11 Z",
                        id: "icon-chat-phone"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-6.000000, -6.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-chat-phone"})
                        }), Object(R.jsx)("use", {
                            fill: "currentColor",
                            fillRule: "nonzero",
                            xlinkHref: "#icon-chat-phone"
                        })]
                    })
                })]
            }), Ie = Object(R.jsxs)("svg", {
                viewBox: "0 0 15 11",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("polygon", {
                        id: "icon-checkmark",
                        points: "21.3730769 10 13.7692308 17.6953291 9.62692308 13.514862 8 15.1613588 13.7692308 21 23 11.6581741"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-8.000000, -10.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-checkmark"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-checkmark"})]
                    })
                })]
            }), Se = Object(R.jsxs)("svg", {
                viewBox: "0 0 24 24",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M15,3 C21.627417,3 27,8.372583 27,15 C27,21.627417 21.627417,27 15,27 C8.372583,27 3,21.627417 3,15 C3,8.372583 8.372583,3 15,3 Z M20.0899636,10.2333333 L13.5000107,16.9026185 L9.91003638,13.2795471 L8.50004646,14.706511 L13.5000107,19.7666667 L21.4999535,11.6704176 L20.0899636,10.2333333 Z",
                        id: "icon-checkmark-filled"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-3.000000, -3.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-checkmark-filled"})
                        }), Object(R.jsx)("use", {fill: "currentColor", xlinkHref: "#icon-checkmark-filled"})]
                    })
                })]
            }), ze = Object(R.jsxs)("svg", {
                viewBox: "0 0 24 24",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M15,3 C21.627417,3 27,8.372583 27,15 C27,21.627417 21.627417,27 15,27 C8.372583,27 3,21.627417 3,15 C3,8.372583 8.372583,3 15,3 Z M15,5 C9.4771525,5 5,9.4771525 5,15 C5,20.5228475 9.4771525,25 15,25 C20.5228475,25 25,20.5228475 25,15 C25,9.4771525 20.5228475,5 15,5 Z M19.6734572,11.3333238 L20.8665241,12.5493165 L14.0973505,19.3999799 L9.86661707,15.1183153 L11.0596839,13.9108858 L14.0973505,16.9765577 L19.6734572,11.3333238 Z",
                        id: "icon-checkmark-outline"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-3.000000, -3.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-checkmark-outline"})
                        }), Object(R.jsx)("use", {fill: "currentColor", xlinkHref: "#icon-checkmark-outline"})]
                    })
                })]
            }), Ee = Object(R.jsxs)("svg", {
                viewBox: "0 0 16 16",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("polygon", {
                        id: "icon-close",
                        points: "23 20.5598344 17.4412048 14.9998928 23 9.44038 20.5598671 7 15.0006432 12.5592984 9.44141923 7 7.00107193 9.44038 12.5605102 14.9998928 7 20.5598344 9.44013292 23 15.0006432 17.439844 20.5598671 23"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-7.000000, -7.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-close"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-close"})]
                    })
                })]
            }), Me = Object(R.jsxs)("svg", {
                viewBox: "0 0 30 30",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M30,0 L30,30 L0,30 L0,0 L30,0 Z M29,1 L1,1 L1,29 L29,29 L29,1 Z M23,16.6012363 L22.9998646,14.3987483 L8,14.3987637 L8.00001538,16.6013717 L23,16.6012363 Z",
                        id: "icon-close-box"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-close-box"})
                        }), Object(R.jsx)("use", {fill: "currentColor", xlinkHref: "#icon-close-box"})]
                    })
                })]
            }), _e = Object(R.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 18 18",
                children: Object(R.jsx)("path", {fill: "currentColor", d: "M.006 9L9.007-.001 18.008 9l-9.001 9.001z"})
            }), Te = Object(R.jsxs)("svg", {
                viewBox: "0 0 15 15",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M16.2166667,9.66041667 L19.3416667,12.7854167 L10.125,22.0020833 L7,22.0020833 L7,18.8770833 L16.2166667,9.66041667 Z M18.6333333,7.24375 C18.9583333,6.91875 19.4833333,6.91875 19.8083333,7.24375 L19.8083333,7.24375 L21.7583333,9.19375 C22.0833333,9.51875 22.0833333,10.04375 21.7583333,10.36875 L21.7583333,10.36875 L20.2333333,11.89375 L17.1083333,8.76875 Z",
                        id: "icon-edit"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-7.000000, -7.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-edit"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-edit"})]
                    })
                })]
            }), Re = Object(R.jsxs)("svg", {
                viewBox: "0 0 30 30",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M15,3 C21.627417,3 27,8.372583 27,15 C27,21.627417 21.627417,27 15,27 C8.372583,27 3,21.627417 3,15 C3,8.372583 8.372583,3 15,3 Z M15,5 C9.4771525,5 5,9.4771525 5,15 C5,20.5228475 9.4771525,25 15,25 C20.5228475,25 25,20.5228475 25,15 C25,9.4771525 20.5228475,5 15,5 Z M16.7579503,10.9507013 L19.0492987,13.2420497 L12.2913484,20 L10,20 L10,17.7086516 L16.7579503,10.9507013 Z M19.307011,9.1081177 L19.3914734,9.17872518 L20.8212748,10.6085266 C21.0330973,10.820349 21.0566331,11.1480401 20.8918823,11.3856112 L20.8212748,11.4700736 L19.7030968,12.5882516 L17.4117484,10.2969032 L18.5299264,9.17872518 C18.7417488,8.96690274 19.0694399,8.94336692 19.307011,9.1081177 Z",
                        id: "icon-edit-circle"
                    })
                }), Object(R.jsxs)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: [Object(R.jsx)("mask", {
                        fill: "white",
                        children: Object(R.jsx)("use", {xlinkHref: "#icon-edit-circle"})
                    }), Object(R.jsx)("use", {fill: "currentColor", xlinkHref: "#icon-edit-circle"})]
                })]
            }), Ae = Object(R.jsx)("svg", {
                viewBox: "0 0 14 8",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        transform: "translate(-1165.000000, -464.000000)",
                        fill: "currentColor",
                        fillRule: "nonzero",
                        children: Object(R.jsxs)("g", {
                            transform: "translate(1165.000000, 464.000000)",
                            children: [Object(R.jsx)("path", {d: "M13.8395833,3.46051282 C13.16875,2.59897436 10.8208333,0.0143589744 7,0.0143589744 C3.17916667,0.0143589744 0.845833333,2.59897436 0.160416667,3.46051282 C0.0291666667,3.61846154 0.0291666667,3.84820513 0.160416667,4.00615385 C0.83125,4.86769231 3.17916667,7.45230769 7,7.45230769 C10.8208333,7.45230769 13.1541667,4.86769231 13.8395833,4.00615385 C13.95625,3.84820513 13.95625,3.61846154 13.8395833,3.46051282 Z M7,6.50461538 C5.43958333,6.50461538 4.18541667,5.26974359 4.18541667,3.73333333 C4.18541667,2.19692308 5.43958333,0.962051282 7,0.962051282 C8.56041667,0.962051282 9.81458333,2.19692308 9.81458333,3.73333333 C9.81458333,5.26974359 8.56041667,6.50461538 7,6.50461538 Z"}), Object(R.jsx)("ellipse", {
                                cx: "7",
                                cy: "3.73333333",
                                rx: "1.80833333",
                                ry: "1.78051282"
                            })]
                        })
                    })
                })
            }), Pe = Object(R.jsx)("svg", {
                viewBox: "0 0 20 12",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnslink: "http://www.w3.org/1999/xlink",
                children: Object(R.jsx)("g", {
                    id: "v15",
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        transform: "translate(-2.000000, 0.000000)",
                        fill: "currentColor",
                        fillRule: "nonzero",
                        children: Object(R.jsx)("path", {d: "M2,6 C7.5,-2 16.5,-2 22,6 C16.5,14 7.5,14 2,6 Z M12,2 C9.8,2 8,3.8 8,6 C8,8.2 9.8,10 12,10 C14.2,10 16,8.2 16,6 C16,3.8 14.2,2 12,2 Z M12,4 C13.1045695,4 14,4.8954305 14,6 C14,7.1045695 13.1045695,8 12,8 C10.8954305,8 10,7.1045695 10,6 C10,4.8954305 10.8954305,4 12,4 Z"})
                    })
                })
            }), De = Object(R.jsx)("svg", {
                viewBox: "0 0 20 20",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        transform: "translate(-1160.000000, -385.000000)",
                        fill: "currentColor",
                        fillRule: "nonzero",
                        children: Object(R.jsx)("g", {
                            transform: "translate(1158.000000, 383.000000)",
                            children: Object(R.jsx)("path", {d: "M14.59,8 L12,10.59 L9.41,8 L8,9.41 L10.59,12 L8,14.59 L9.41,16 L12,13.41 L14.59,16 L16,14.59 L13.41,12 L16,9.41 L14.59,8 Z M12,2 C6.47,2 2,6.47 2,12 C2,17.53 6.47,22 12,22 C17.53,22 22,17.53 22,12 C22,6.47 17.53,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z"})
                        })
                    })
                })
            }), Ze = Object(R.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: 12.8,
                height: 22.1,
                viewBox: "0 0 12.8 22.1",
                overflow: "visible",
                children: Object(R.jsx)("path", {
                    fill: "#C00",
                    d: "M8.1 15.2H4.7v-1.9c0-.6.1-1.3.3-1.8.3-.6.8-1.1 1.3-1.6l2.2-2.2c.5-.5.7-1.2.7-1.9S9 4.4 8.5 3.9c-.5-.5-1.2-.8-1.9-.7-.7 0-1.4.2-1.9.7-.5.5-.8 1.2-.9 1.9H0c.1-1.6.9-3.2 2.1-4.3C3.4.4 5-.1 6.6-.1 8.2-.2 9.8.4 11 1.4c1.1 1 1.7 2.4 1.7 4.1 0 1.1-.3 2.2-1 3-.3.4-.6.7-.9 1l-.8.8c-.3.3-.6.6-.9.8l-.6.6c-.4.5-.6 1.2-.5 1.9l.1 1.6zm.7 4.5c0 1-.6 1.8-1.5 2.2-.9.4-1.9.2-2.6-.5s-.9-1.7-.5-2.6c.4-.9 1.2-1.5 2.2-1.5 1.3 0 2.4 1.1 2.4 2.4z"
                })
            }), qe = Object(R.jsxs)("svg", {
                viewBox: "0 0 26 22",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M0,12.2972973 L24.7207207,12.2972973 L24.7207207,8.66486486 L0,8.66486486 L0,12.2972973 Z M0,20.9621622 L24.7207207,20.9621622 L24.7207207,17.3297297 L0,17.3297297 L0,20.9621622 Z M0,0 L0,3.63243243 L24.7207207,3.63243243 L24.7207207,0 L0,0 Z",
                        id: "hamburger-path"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        id: "hamburger",
                        transform: "translate(-31.000000, -20.000000)",
                        children: Object(R.jsx)("g", {
                            transform: "translate(23.000000, 11.000000)",
                            children: Object(R.jsxs)("g", {
                                transform: "translate(8.538739, 9.686486)",
                                children: [Object(R.jsx)("mask", {
                                    id: "hamburger-mask",
                                    fill: "white",
                                    children: Object(R.jsx)("use", {xlinkHref: "#hamburger-path"})
                                }), Object(R.jsx)("use", {
                                    fill: "currentColor",
                                    fillRule: "nonzero",
                                    xlinkHref: "#hamburger-path"
                                }), Object(R.jsx)("g", {
                                    mask: "url(#hamburger-mask)",
                                    children: Object(R.jsx)("g", {
                                        transform: "translate(-37.938739, -34.886486)",
                                        children: Object(R.jsx)("rect", {
                                            fill: "currentColor",
                                            x: "0",
                                            y: "0",
                                            width: "91",
                                            height: "91"
                                        })
                                    })
                                })]
                            })
                        })
                    })
                })]
            }), Ue = Object(R.jsxs)("svg", {
                viewBox: "0 0 20 17",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M15,9.69 L20,14.19 L20,22 L18,22 L18,16 L12,16 L12,22 L10,22 L10,14.19 L15,9.69 M15,7 L5,16 L8,16 L8,24 L14,24 L14,18 L16,18 L16,24 L22,24 L22,16 L25,16 L15,7 Z",
                        id: "icon-home"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-5.000000, -7.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-home"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-home"})]
                    })
                })]
            }), He = Object(R.jsx)("svg", {
                viewBox: "0 0 18 18",
                children: Object(R.jsx)("path", {
                    d: "M9 0C4.0296 0 0 4.0296 0 9s4.0296 9 9 9 9-4.0296 9-9-4.0296-9-9-9zM7.96 12.8848v-4.12c0-.574376.4656239-1.04 1.04-1.04.5743761 0 1.04.465624 1.04 1.04v4.12c0 .574376-.4656239 1.04-1.04 1.04-.5743761 0-1.04-.465624-1.04-1.04zM9 6.59c-.5055778 0-.9613732-.304553-1.1548494-.771646-.1934763-.467093-.0865316-1.00474.2709659-1.362237.3574975-.357498.8951448-.464443 1.3622378-.270966C9.9454473 4.378627 10.25 4.834422 10.25 5.34c0 .690356-.5596441 1.25-1.25 1.25z",
                    fill: "currentColor",
                    fillRule: "nonzero"
                })
            }), Be = Object(R.jsxs)("svg", {
                viewBox: "0 0 15 15",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M15.5,9.351875 C17.5025,9.351875 17.74,9.359375 18.53125,9.395625 C20.56375,9.488125 21.513125,10.4525 21.605625,12.47 C21.641875,13.260625 21.64875,13.498125 21.64875,15.500625 C21.64875,17.50375 21.64125,17.740625 21.605625,18.53125 C21.5125,20.546875 20.565625,21.513125 18.53125,21.605625 C17.74,21.641875 17.50375,21.649375 15.5,21.649375 C13.4975,21.649375 13.26,21.641875 12.469375,21.605625 C10.431875,21.5125 9.4875,20.54375 9.395,18.530625 C9.35875,17.74 9.35125,17.503125 9.35125,15.5 C9.35125,13.4975 9.359375,13.260625 9.395,12.469375 C9.488125,10.4525 10.435,9.4875 12.469375,9.395 C13.260625,9.359375 13.4975,9.351875 15.5,9.351875 L15.5,9.351875 Z M15.5,8 C13.463125,8 13.208125,8.00875 12.408125,8.045 C9.684375,8.17 8.170625,9.68125 8.045625,12.4075 C8.00875,13.208125 8,13.463125 8,15.5 C8,17.536875 8.00875,17.7925 8.045,18.5925 C8.17,21.31625 9.68125,22.83 12.4075,22.955 C13.208125,22.99125 13.463125,23 15.5,23 C17.536875,23 17.7925,22.99125 18.5925,22.955 C21.31375,22.83 22.83125,21.31875 22.954375,18.5925 C22.99125,17.7925 23,17.536875 23,15.5 C23,13.463125 22.99125,13.208125 22.955,12.408125 C22.8325,9.686875 21.319375,8.170625 18.593125,8.045625 C17.7925,8.00875 17.536875,8 15.5,8 Z M15.5,11.64875 C13.373125,11.64875 11.64875,13.373125 11.64875,15.5 C11.64875,17.626875 13.373125,19.351875 15.5,19.351875 C17.626875,19.351875 19.35125,17.6275 19.35125,15.5 C19.35125,13.373125 17.626875,11.64875 15.5,11.64875 Z M15.5,18 C14.119375,18 13,16.88125 13,15.5 C13,14.119375 14.119375,13 15.5,13 C16.880625,13 18,14.119375 18,15.5 C18,16.88125 16.880625,18 15.5,18 Z M19.50375,10.596875 C19.00625,10.596875 18.603125,11 18.603125,11.496875 C18.603125,11.99375 19.00625,12.396875 19.50375,12.396875 C20.000625,12.396875 20.403125,11.99375 20.403125,11.496875 C20.403125,11 20.000625,10.596875 19.50375,10.596875 Z",
                        id: "instagram-icon"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-8.000000, -8.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#instagram-icon"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#instagram-icon"})]
                    })
                })]
            }), Fe = Object(R.jsx)("svg", {
                viewBox: "0 0 32 32",
                xmlns: "http://www.w3.org/2000/svg",
                children: Object(R.jsx)("path", {
                    d: "M23.992.014h-.016c-.631 0-1.142.512-1.142 1.142 0 .63.511 1.142 1.142 1.142H28.087L9.483 20.902c-.207.207-.335.492-.335.808 0 .631.512 1.142 1.142 1.142.315 0 .601-.128.807-.334L29.701 3.914v4.11c0 .631.511 1.142 1.142 1.142.631 0 1.142-.511 1.142-1.142v-.017.001-6.666c.01-.055.015-.12.015-.185 0-.631-.511-1.142-1.142-1.142h-6.867l.001-.001zM1.155 6.865c-.63 0-1.142.511-1.142 1.142v22.837c0 .631.512 1.142 1.142 1.142h22.837c.631 0 1.142-.511 1.142-1.142v-17.23-.016c0-.631-.511-1.142-1.142-1.142-.631 0-1.142.511-1.142 1.142v.017-.001 16.088H2.296V9.148h16.173c.631 0 1.142-.511 1.142-1.142 0-.631-.511-1.142-1.142-1.142h-.017l-17.297.001z",
                    fill: "currentColor",
                    fillRule: "nonzero"
                })
            }), $e = Object(R.jsxs)("svg", {
                viewBox: "0 0 16 21",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M21,11 L20,11 L20,9 C20,6.24 17.76,4 15,4 C12.24,4 10,6.24 10,9 L10,11 L9,11 C7.9,11 7,11.9 7,13 L7,23 C7,24.1 7.9,25 9,25 L21,25 C22.1,25 23,24.1 23,23 L23,13 C23,11.9 22.1,11 21,11 Z M12,9 C12,7.34 13.34,6 15,6 C16.66,6 18,7.34 18,9 L18,11 L12,11 L12,9 Z M21,23 L9,23 L9,13 L21,13 L21,23 Z M15,20 C16.1,20 17,19.1 17,18 C17,16.9 16.1,16 15,16 C13.9,16 13,16.9 13,18 C13,19.1 13.9,20 15,20 Z",
                        id: "icon-lock"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-7.000000, -4.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-lock"})
                        }), Object(R.jsx)("use", {
                            id: "icon-lock",
                            fill: "currentColor",
                            fillRule: "nonzero",
                            xlinkHref: "#icon-lock"
                        })]
                    })
                })]
            }), Ve = Object(R.jsxs)("svg", {
                viewBox: "0 0 20 20",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M20.5555556,10.5555556 L18.9888889,12.1222222 L20.7444444,13.8888889 L11.6666667,13.8888889 L11.6666667,16.1111111 L20.7444444,16.1111111 L18.9888889,17.8666667 L20.5555556,19.4444444 L25,15 L20.5555556,10.5555556 Z M7.22222222,7.22222222 L15,7.22222222 L15,5 L7.22222222,5 C6,5 5,6 5,7.22222222 L5,22.7777778 C5,24 6,25 7.22222222,25 L15,25 L15,22.7777778 L7.22222222,22.7777778 L7.22222222,7.22222222 Z",
                        id: "icon-logout"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-5.000000, -5.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-logout"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-logout"})]
                    })
                })]
            }), We = Object(R.jsxs)("svg", {
                viewBox: "0 0 13 19",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M14.5,5 C10.912,5 8,7.86021505 8,11.3844086 C8,15.0235215 11.796,20.5907258 14.5,24 C17.243,20.5651882 21,15.061828 21,11.3844086 C21,7.86021505 18.088,5 14.5,5 Z M14.5,14.5766129 C12.706,14.5766129 11.25,13.1465054 11.25,11.3844086 C11.25,9.62231183 12.706,8.1922043 14.5,8.1922043 C16.294,8.1922043 17.75,9.62231183 17.75,11.3844086 C17.75,13.1465054 16.294,14.5766129 14.5,14.5766129 Z",
                        id: "icon-location"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-8.000000, -5.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-location"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-location"})]
                    })
                })]
            }), Ge = Object(R.jsxs)("svg", {
                viewBox: "0 0 23 16",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M0.0540540541,9.7027027 L2.57657658,9.7027027 L2.57657658,7.10810811 L0.0540540541,7.10810811 L0.0540540541,9.7027027 Z M0.0540540541,15.8918919 L2.57657658,15.8918919 L2.57657658,13.2972973 L0.0540540541,13.2972973 L0.0540540541,15.8918919 Z M0.0540540541,3.51351351 L2.57657658,3.51351351 L2.57657658,0.918918919 L0.0540540541,0.918918919 L0.0540540541,3.51351351 Z M5.0990991,9.7027027 L22.7567568,9.7027027 L22.7567568,7.10810811 L5.0990991,7.10810811 L5.0990991,9.7027027 Z M5.0990991,15.8918919 L22.7567568,15.8918919 L22.7567568,13.2972973 L5.0990991,13.2972973 L5.0990991,15.8918919 Z M5.0990991,0.918918919 L5.0990991,3.51351351 L22.7567568,3.51351351 L22.7567568,0.918918919 L5.0990991,0.918918919 Z",
                        id: "icon-menu"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        transform: "translate(-4.000000, -6.000000)",
                        children: Object(R.jsxs)("g", {
                            transform: "translate(4.000000, 6.000000)",
                            children: [Object(R.jsx)("mask", {
                                fill: "white",
                                children: Object(R.jsx)("use", {xlinkHref: "#icon-menu"})
                            }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-menu"})]
                        })
                    })
                })]
            }), Xe = Object(R.jsxs)("svg", {
                viewBox: "0 0 27 27",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M13.5,0.314593776 C21.4218286,0.314593776 26.7030476,6.40830806 26.7030476,13.5176414 L26.7030476,13.5176414 L26.7030476,13.6192033 C26.7030476,20.7285366 21.4726095,26.9238128 13.5,26.9238128 C5.57817143,26.9238128 0.296952381,20.8300985 0.296952381,13.7207652 L0.296952381,13.7207652 L0.296952381,13.6192033 C0.296952381,6.50986997 5.52739048,0.314593776 13.5,0.314593776 Z M13.449219,1.33021282 C6.28910476,1.33021282 1.41413333,6.91611759 1.41413333,13.5684223 L1.41413333,13.5684223 L1.41413333,13.6699843 C1.41413333,20.322289 6.44144762,25.9081938 13.550781,25.9081938 C20.7108952,25.9081938 25.5858667,20.322289 25.5858667,13.6699843 L25.5858667,13.6699843 L25.5858667,13.5684223 C25.5858667,6.91611759 20.5585524,1.33021282 13.449219,1.33021282 Z M20.5302946,13.1868565 L20.5303918,14.0705005 L14.5180611,14.0705977 L7.6220864,14.0705977 L7.62207535,13.1868675 L20.5302946,13.1868565 Z",
                        id: "icon-minus"
                    })
                }), Object(R.jsxs)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: [Object(R.jsx)("mask", {
                        fill: "white",
                        children: Object(R.jsx)("use", {xlinkHref: "#icon-minus"})
                    }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-minus"})]
                })]
            }), Qe = Object(R.jsx)("svg", {
                viewBox: "0 0 710 701", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: Object(R.jsx)("g", {
                    stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: Object(R.jsxs)("g", {
                        transform: "translate(0.449636, 0.000000)",
                        fill: "currentColor",
                        fillRule: "nonzero",
                        children: [Object(R.jsx)("path", {d: "M676.971597,183.605286 C661.447832,185.967598 646.008435,188.245542 630.48467,190.607854 C593.278255,196.26053 556.07184,201.828837 518.949793,207.481512 C474.150232,214.230975 429.350671,220.980438 384.466742,227.814269 C345.741698,233.635681 307.016653,239.541461 268.207241,245.362873 C249.308744,248.231395 230.325879,250.593707 211.596119,253.88407 C211.343014,253.968439 211.08991,253.968439 210.836805,253.968439 C221.551577,262.067794 232.181982,270.251518 242.896754,278.350874 C242.896754,257.680643 242.896754,237.094781 242.896754,216.42455 C242.896754,183.689655 242.896754,150.954759 242.896754,118.304231 C242.896754,110.795454 242.896754,103.202308 242.896754,95.69353 C236.737869,103.792886 230.494616,111.97661 224.335731,120.075965 C239.859496,117.713653 255.298893,115.435709 270.822658,113.073397 C308.029073,107.420722 345.235488,101.852415 382.357535,96.1997397 C427.157096,89.4502766 471.956657,82.7008136 516.840586,75.8669822 C555.56563,70.0455703 594.290675,64.1397902 633.100087,58.3183783 C651.998584,55.4498565 670.981449,53.0875444 689.711209,49.7971812 C689.964313,49.7128129 690.217418,49.7128129 690.470523,49.7128129 C679.755751,41.6134572 669.125346,33.4297333 658.410574,25.3303776 C658.410574,46.0006082 658.410574,66.5864705 658.410574,87.2567011 C658.410574,119.991597 658.410574,152.726493 658.410574,185.37702 C658.410574,192.885798 658.410574,200.478944 658.410574,207.987722 C658.410574,221.233543 670.053397,233.888786 683.72106,233.298208 C697.473091,232.70763 709.031547,222.161594 709.031547,207.987722 C709.031547,187.317491 709.031547,166.731629 709.031547,146.061398 C709.031547,113.326502 709.031547,80.5916064 709.031547,47.9410788 C709.031547,40.4323012 709.031547,32.8391552 709.031547,25.3303776 C709.031547,17.3153902 705.319342,10.3128223 699.076089,5.41946157 C692.242257,0.104259414 685.324058,-0.401950316 676.971597,0.863574008 C661.447832,3.22588608 646.008435,5.50382986 630.48467,7.86614193 C593.278255,13.5188172 556.07184,19.0871243 518.949793,24.7397996 C474.150232,31.4892626 429.350671,38.2387257 384.466742,45.072557 C345.741698,50.8939689 307.016653,56.7997491 268.207241,62.621161 C255.383261,64.5616316 242.559281,66.5021022 229.735301,68.4425729 C223.660784,69.370624 217.501899,69.9612021 211.511751,71.2267264 C211.258646,71.3110947 211.005541,71.3110947 210.752436,71.3110947 C205.521603,72.0704093 200.628242,76.4575603 197.590983,80.4228698 C194.216252,84.8100208 192.191413,90.0408547 192.191413,95.7778983 C192.191413,116.448129 192.191413,137.033991 192.191413,157.704222 C192.191413,190.439118 192.191413,223.174013 192.191413,255.824541 C192.191413,263.333319 192.191413,270.926465 192.191413,278.435242 C192.191413,286.45023 195.903618,293.452798 202.146871,298.346158 C208.980702,303.66136 215.898902,304.16757 224.251363,302.902046 C239.775128,300.539734 255.214524,298.26179 270.738289,295.899478 C307.944704,290.246803 345.15112,284.678496 382.273166,279.02582 C427.072727,272.276357 471.872288,265.526894 516.756218,258.693063 C555.481262,252.871651 594.206306,246.965871 633.015719,241.144459 C651.829847,238.275937 670.89708,236.082362 689.62684,232.623262 C689.879945,232.538893 690.13305,232.538893 690.386155,232.538893 C696.207567,231.695211 702.703925,225.78943 705.488078,220.89607 C708.694073,215.496499 710.043966,207.481512 708.019127,201.406995 C706.078657,195.24811 702.282084,189.34233 696.376303,186.305072 C690.048682,182.761603 684.142902,182.508499 676.971597,183.605286 Z"}), Object(R.jsx)("path", {d: "M0,579.123821 C0.169189,603.253152 7.25612521,627.97306 21.2612611,647.71524 C36.5319212,669.144785 56.7803104,684.66855 81.4158506,693.780325 C127.059094,710.569614 182.657796,695.636427 213.53659,658.092539 C230.410248,637.591045 240.196969,613.883556 242.474913,587.391914 C244.499752,563.093847 238.087762,537.445887 225.516887,516.60692 C213.367853,496.611636 195.059935,479.316136 173.63039,469.613783 C148.910481,458.477169 122.84068,455.186806 96.0959327,460.41764 C49.2715327,469.529415 9.19659584,510.448035 2.02529134,557.863013 C0.928503594,564.949949 0.0848207119,571.952517 0,579.123821 C-0.0839158646,592.369643 11.7276445,605.024886 25.3109389,604.434308 C39.0629699,603.84373 50.5370571,593.297694 50.6214254,579.123821 C50.6214254,574.821039 50.9588985,570.518256 51.4651082,566.299842 C51.1276351,568.577785 50.8745302,570.771361 50.5370571,573.049305 C51.7182131,564.781212 53.8274203,556.766225 57.0334153,549.004343 C56.1897324,551.029181 55.3460495,553.05402 54.5023666,555.078859 C56.8646787,549.426184 59.7332005,544.026614 63.107932,538.964516 C63.9516149,537.698992 64.7952978,536.517836 65.6389807,535.33668 C68.5075025,531.287002 61.8424077,539.892567 65.0484026,536.095994 C67.0732416,533.733682 69.0980805,531.37137 71.3760243,529.177795 C73.4852315,527.068588 75.5944387,525.128117 77.8723824,523.272015 C78.1254873,523.103278 79.3066433,521.837754 79.5597482,521.922122 C79.5597482,521.922122 74.2445461,525.887432 77.0286996,523.862593 C78.2098556,523.01891 79.3910116,522.175227 80.656536,521.331544 C85.8873698,517.788076 91.4556769,514.835186 97.2770887,512.388505 C95.2522498,513.232188 93.2274109,514.075871 91.202572,514.919554 C98.9644545,511.713559 106.979442,509.604352 115.247534,508.423196 C112.96959,508.760669 110.776015,509.013774 108.498071,509.351247 C117.019268,508.254459 125.624834,508.254459 134.230399,509.351247 C131.952455,509.013774 129.75888,508.760669 127.480936,508.423196 C135.749028,509.604352 143.764016,511.713559 151.525898,514.919554 C149.501059,514.075871 147.47622,513.232188 145.451381,512.388505 C151.104057,514.750818 156.503627,517.619339 161.565724,520.994071 C162.831249,521.837754 164.012405,522.681437 165.193561,523.52512 C169.243239,526.393641 160.637673,519.728547 164.434246,522.934541 C166.796558,524.95938 169.15887,526.984219 171.352446,529.262163 C173.461653,531.37137 175.402124,533.480578 177.258226,535.758521 C177.426963,536.011626 178.692487,537.192782 178.608119,537.445887 C178.608119,537.445887 174.642809,532.130685 176.667648,534.914838 C177.511331,536.095994 178.355014,537.27715 179.198697,538.542675 C182.742165,543.773509 185.695055,549.341816 188.141735,555.163228 C187.298052,553.138389 186.454369,551.11355 185.610687,549.088711 C188.816681,556.850593 190.925889,564.865581 192.107045,573.133673 C191.769572,570.855729 191.516467,568.662154 191.178994,566.38421 C192.275781,574.905407 192.275781,583.510972 191.178994,592.116538 C191.516467,589.838594 191.769572,587.645019 192.107045,585.367075 C190.925889,593.635167 188.816681,601.650154 185.610687,609.412037 C186.454369,607.387198 187.298052,605.362359 188.141735,603.33752 C185.779423,608.990195 182.910901,614.389766 179.53617,619.451863 C178.692487,620.717388 177.848804,621.898544 177.005121,623.0797 C174.136599,627.129377 180.801694,618.523812 177.595699,622.320385 C175.57086,624.682697 173.546021,627.045009 171.268078,629.238585 C169.15887,631.347792 167.049663,633.288262 164.771719,635.144365 C164.518614,635.313101 163.337458,636.578626 163.084354,636.494257 C163.084354,636.494257 168.399556,632.528948 165.615402,634.553787 C164.434246,635.39747 163.25309,636.241153 161.987566,637.084835 C156.756732,640.628304 151.188425,643.581194 145.367013,646.027874 C147.391852,645.184191 149.416691,644.340508 151.44153,643.496825 C143.679647,646.70282 135.66466,648.812028 127.396568,649.993184 C129.674511,649.65571 131.868087,649.402606 134.146031,649.065132 C125.624834,650.16192 117.019268,650.16192 108.413703,649.065132 C110.691647,649.402606 112.885222,649.65571 115.163166,649.993184 C106.895074,648.812028 98.8800862,646.70282 91.1182037,643.496825 C93.1430426,644.340508 95.1678815,645.184191 97.1927204,646.027874 C91.5400451,643.665562 86.1404747,640.79704 81.0783774,637.422309 C79.8128531,636.578626 78.631697,635.734943 77.450541,634.89126 C73.4008632,632.022738 82.0064286,638.687833 78.2098556,635.481838 C75.8475435,633.456999 73.4852315,631.43216 71.291656,629.154216 C69.1824488,627.045009 67.2419781,624.935802 65.3858758,622.657858 C65.2171392,622.404753 63.9516149,621.223597 64.0359832,620.970492 C64.0359832,620.970492 68.0012927,626.285695 65.9764538,623.501541 C65.1327709,622.320385 64.289088,621.139229 63.4454052,619.873705 C59.9019371,614.642871 56.949047,609.074564 54.5023666,603.253152 C55.3460495,605.277991 56.1897324,607.30283 57.0334153,609.327669 C53.8274203,601.565786 51.7182131,593.550799 50.5370571,585.282706 C50.8745302,587.56065 51.1276351,589.754226 51.4651082,592.03217 C50.9588985,587.729387 50.6214254,583.510972 50.6214254,579.20819 C50.5370571,565.962368 39.0629699,553.307125 25.3109389,553.897703 C11.6432762,554.488281 -0.0839158646,564.949949 0,579.123821 Z"}), Object(R.jsx)("path", {d: "M466.134792,508.760669 C466.303981,532.89 473.390918,557.609908 487.396053,577.352087 C502.666714,598.781633 522.915103,614.305398 547.550643,623.417173 C593.193887,640.206462 648.792589,625.273275 679.671382,587.729387 C696.54504,567.227893 706.331761,543.520404 708.609705,517.028761 C710.634544,492.730694 704.222554,467.082735 691.651679,446.243768 C679.502646,426.248483 661.194727,408.952984 639.765182,399.250631 C615.045274,388.114017 588.975472,384.823654 562.230725,390.054488 C515.321957,399.166263 475.24702,440.084882 468.075715,487.49986 C467.063296,494.502428 466.219613,501.589365 466.134792,508.760669 C466.050877,522.00649 477.862437,534.661734 491.445731,534.071156 C505.197762,533.480578 516.671849,522.934541 516.756218,508.760669 C516.756218,504.457886 517.093691,500.155104 517.599901,495.936689 C517.262427,498.214633 517.009323,500.408209 516.671849,502.686152 C517.853006,494.41806 519.962213,486.403073 523.168208,478.64119 C522.324525,480.666029 521.480842,482.690868 520.637159,484.715707 C522.999471,479.063032 525.867993,473.663461 529.242724,468.601364 C530.086407,467.33584 530.93009,466.154684 531.773773,464.973527 C534.642295,460.92385 527.9772,469.529415 531.183195,465.732842 C533.208034,463.37053 535.232873,461.008218 537.510817,458.814642 C539.620024,456.705435 541.729231,454.764965 544.007175,452.908862 C544.26028,452.740126 545.441436,451.474601 545.694541,451.55897 C545.694541,451.55897 540.379338,455.524279 543.163492,453.49944 C544.344648,452.655757 545.525804,451.812075 546.791328,450.968392 C552.022162,447.424924 557.590469,444.472033 563.411881,442.025353 C561.387042,442.869036 559.362203,443.712719 557.337364,444.556402 C565.099247,441.350407 573.114234,439.2412 581.382327,438.060044 C579.104383,438.397517 576.910807,438.650622 574.632863,438.988095 C583.154061,437.891307 591.759626,437.891307 600.365191,438.988095 C598.087248,438.650622 595.893672,438.397517 593.615728,438.060044 C601.883821,439.2412 609.898808,441.350407 617.66069,444.556402 C615.635852,443.712719 613.611013,442.869036 611.586174,442.025353 C617.238849,444.387665 622.638419,447.256187 627.700517,450.630918 C628.966041,451.474601 630.147197,452.318284 631.328353,453.161967 C635.378031,456.030489 626.772466,449.365394 630.569039,452.571389 C632.931351,454.596228 635.293663,456.621067 637.487238,458.899011 C639.596445,461.008218 641.536916,463.117425 643.393018,465.395369 C643.561755,465.648474 644.827279,466.82963 644.742911,467.082735 C644.742911,467.082735 640.777601,461.767533 642.80244,464.551686 C643.646123,465.732842 644.489806,466.913998 645.333489,468.179522 C648.876957,473.410356 651.829847,478.978663 654.276528,484.800075 C653.432845,482.775236 652.589162,480.750397 651.745479,478.725558 C654.951474,486.487441 657.060681,494.502428 658.241837,502.770521 C657.904364,500.492577 657.651259,498.299001 657.313786,496.021058 C658.410574,504.542255 658.410574,513.14782 657.313786,521.753385 C657.651259,519.475442 657.904364,517.281866 658.241837,515.003922 C657.060681,523.272015 654.951474,531.287002 651.745479,539.048885 C652.589162,537.024046 653.432845,534.999207 654.276528,532.974368 C651.914215,538.627043 649.045694,544.026614 645.670962,549.088711 C644.827279,550.354235 643.983596,551.535391 643.139914,552.716547 C640.271392,556.766225 646.936486,548.16066 643.730492,551.957233 C641.705653,554.319545 639.680814,556.681857 637.40287,558.875432 C635.293663,560.984639 633.184455,562.92511 630.906512,564.781212 C630.653407,564.949949 629.472251,566.215473 629.219146,566.131105 C629.219146,566.131105 634.534348,562.165796 631.750195,564.190634 C630.569039,565.034317 629.387883,565.878 628.122358,566.721683 C622.891524,570.265151 617.323217,573.218041 611.501805,575.664722 C613.526644,574.821039 615.551483,573.977356 617.576322,573.133673 C609.81444,576.339668 601.799452,578.448875 593.53136,579.630031 C595.809304,579.292558 598.002879,579.039453 600.280823,578.70198 C591.759626,579.798768 583.154061,579.798768 574.548495,578.70198 C576.826439,579.039453 579.020014,579.292558 581.297958,579.630031 C573.029866,578.448875 565.014879,576.339668 557.252996,573.133673 C559.277835,573.977356 561.302674,574.821039 563.327513,575.664722 C557.674838,573.30241 552.275267,570.433888 547.21317,567.059156 C545.947645,566.215473 544.766489,565.37179 543.585333,564.528108 C539.535656,561.659586 548.141221,568.324681 544.344648,565.118686 C541.982336,563.093847 539.620024,561.069008 537.426448,558.791064 C535.317241,556.681857 533.376771,554.57265 531.520668,552.294706 C531.351932,552.041601 530.086407,550.860445 530.170776,550.60734 C530.170776,550.60734 534.136085,555.922542 532.111246,553.138389 C531.267563,551.957233 530.42388,550.776077 529.580198,549.510552 C526.036729,544.279718 523.083839,538.711411 520.637159,532.89 C521.480842,534.914838 522.324525,536.939677 523.168208,538.964516 C519.962213,531.202634 517.853006,523.187646 516.671849,514.919554 C517.009323,517.197498 517.262427,519.391073 517.599901,521.669017 C517.093691,517.366234 516.756218,513.14782 516.756218,508.845037 C516.671849,495.599216 505.197762,482.943973 491.445731,483.534551 C477.778069,484.040761 466.050877,494.586797 466.134792,508.760669 Z"}), Object(R.jsx)("path", {d: "M217.586268,70.4674118 C231.25393,69.8768338 242.896754,82.532077 242.896754,95.7778983 L242.896754,95.7778983 L242.896754,96.6215811 C243.234227,116.110656 242.896754,135.684099 242.896754,155.257541 L242.896754,155.257541 L242.896754,579.20819 C242.896754,593.382062 231.338299,603.928098 217.586268,604.518676 C203.918605,605.109254 192.275781,592.454011 192.275781,579.20819 L192.275781,579.20819 L192.275781,578.364507 C191.938308,558.875432 192.275781,539.301989 192.275781,519.728547 L192.275781,519.728547 L192.275781,95.7778983 C192.275781,81.5196575 203.834237,71.0579898 217.586268,70.4674118 Z M683.72106,0.0198911256 C697.388723,-0.570686892 709.031547,12.0845563 709.031547,25.3303776 L709.031547,25.3303776 L709.031547,26.1740605 C709.36902,45.6631351 709.031547,65.2365779 709.031547,84.8100208 L709.031547,84.8100208 L709.031547,508.760669 C709.031547,522.934541 697.473091,533.480578 683.72106,534.071156 C670.053397,534.661734 658.410574,522.00649 658.410574,508.760669 L658.410574,508.760669 L658.410574,507.916986 C658.073101,488.427912 658.410574,468.854469 658.410574,449.281026 L658.410574,449.281026 L658.410574,25.3303776 C658.410574,11.1565052 669.969029,0.694837431 683.72106,0.0198911256 Z"})]
                    })
                })
            }), Ke = Object(R.jsxs)("svg", {
                viewBox: "0 0 18 20",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M22,7 L17.82,7 C17.4,5.84 16.3,5 15,5 C13.7,5 12.6,5.84 12.18,7 L8,7 C6.9,7 6,7.9 6,9 L6,23 C6,24.1 6.9,25 8,25 L22,25 C23.1,25 24,24.1 24,23 L24,9 C24,7.9 23.1,7 22,7 Z M15,6.75 C15.22,6.75 15.41,6.85 15.55,7 C15.67,7.13 15.75,7.31 15.75,7.5 C15.75,7.91 15.41,8.25 15,8.25 C14.59,8.25 14.25,7.91 14.25,7.5 C14.25,7.31 14.33,7.13 14.45,7 C14.59,6.85 14.78,6.75 15,6.75 Z M22,23 L8,23 L8,9 L22,9 L22,23 Z M15,10 C13.35,10 12,11.35 12,13 C12,14.65 13.35,16 15,16 C16.65,16 18,14.65 18,13 C18,11.35 16.65,10 15,10 Z M15,14 C14.45,14 14,13.55 14,13 C14,12.45 14.45,12 15,12 C15.55,12 16,12.45 16,13 C16,13.55 15.55,14 15,14 Z M9,20.47 L9,22 L21,22 L21,20.47 C21,17.97 17.03,16.89 15,16.89 C12.97,16.89 9,17.96 9,20.47 Z M11.31,20 C12,19.44 13.69,18.88 15,18.88 C16.31,18.88 18.01,19.44 18.69,20 L11.31,20 Z",
                        id: "icon-person"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-6.000000, -5.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-person"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-person"})]
                    })
                })]
            }), Ye = Object(R.jsxs)("svg", {
                viewBox: "0 0 24 25",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M15,2.64892937 C21.627417,2.64892937 27,8.02151238 27,14.6489294 C27,21.2763464 21.627417,26.6489294 15,26.6489294 C8.372583,26.6489294 3,21.2763464 3,14.6489294 C3,8.02151238 8.372583,2.64892937 15,2.64892937 Z M12.2941553,9.75189904 C11.9779797,9.64587531 11.6343698,9.88134789 11.6374557,10.2314049 L11.6374557,10.2314049 L11.6977091,17.0664496 L11.7065567,17.1562507 C11.7509471,17.3891177 11.9566468,17.5641864 12.2020971,17.5620226 L12.2020971,17.5620226 L12.2918983,17.553175 C12.5247652,17.5087846 12.6998339,17.3030849 12.6976702,17.0576346 L12.6976702,17.0576346 L12.6444977,11.0642103 L19.4786847,14.7022747 L12.5892834,19.3910472 L12.5195231,19.4482838 C12.3505377,19.614541 12.3192127,19.8828322 12.4573454,20.0857359 L12.4573454,20.0857359 L12.5145703,20.1555078 C12.6808392,20.3244816 12.9491304,20.3558066 13.1520341,20.2176739 L13.1520341,20.2176739 L20.7246634,15.0623811 L20.7904566,15.0092648 C21.0298634,14.7807038 20.9847213,14.3708809 20.6782628,14.2077211 L20.6782628,14.2077211 L12.3724111,9.7856508 Z",
                        id: "icon-play"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        id: "icon/play",
                        transform: "translate(-3.000000, -2.000000)",
                        children: [Object(R.jsx)("mask", {
                            id: "mask-2",
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-play"})
                        }), Object(R.jsx)("use", {fill: "currentColor", xlinkHref: "#icon-play"})]
                    })
                })]
            }), Je = Object(R.jsxs)("svg", {
                viewBox: "0 0 21 21",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M16.5846104,5 L16.584,13.618 L25.202911,13.6183006 L25.2030933,16.584772 L16.584,16.584 L16.5847927,25.2030726 L13.6181597,25.2030933 L13.618,16.584 L5.00002071,16.5849543 L5,13.6183214 L13.618,13.618 L13.618139,5.00018234 L16.5846104,5 Z",
                        id: "icon-plus"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-5.000000, -5.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-plus"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-plus"})]
                    })
                })]
            }), et = Object(R.jsxs)("svg", {
                viewBox: "0 0 30 30",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M30,0 L30,30 L0,30 L0,0 L30,0 Z M29,1 L1,1 L1,29 L29,29 L29,1 Z M16.6011163,7 L16.601,13.398 L22.9998646,13.3987483 L23,15.6012363 L16.601,15.601 L16.6012517,21.9999846 L14.3986437,22 L14.398,15.601 L8.00001538,15.6013717 L8,13.3987637 L14.398,13.398 L14.3986283,7.00013538 L16.6011163,7 Z",
                        id: "icon-plus-box"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-plus-box"})
                        }), Object(R.jsx)("use", {fill: "currentColor", xlinkHref: "#icon-plus-box"})]
                    })
                })]
            }), tt = Object(R.jsx)("svg", {
                viewBox: "0 0 19 19", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: Object(R.jsx)("g", {
                    stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: Object(R.jsx)("path", {
                        d: "M9.24880876,0.474612601 C14.1562688,0.502103712 18.1262621,4.5169926 18.0989129,9.42405705 C18.0712799,14.3145082 14.0836843,18.274217 9.19975987,18.274217 L9.19975987,18.274217 L9.14912876,18.274217 C4.24186654,18.2467259 0.271675426,14.231837 0.299024625,9.32457482 C0.326657649,4.43412371 4.3142532,0.474414823 9.19817765,0.474612601 L9.19817765,0.474612601 Z M9.24069987,1.92748816 L9.19837543,1.92748816 C5.11149543,1.92748816 1.77518209,5.24066149 1.75212175,9.33268371 C1.72929765,13.4387482 5.0511732,16.7982015 9.15723765,16.8211933 C13.2597421,16.835977 16.6227554,13.5222104 16.6460136,9.41594816 C16.6688376,5.30988371 13.3469621,1.95062816 9.24069987,1.92748816 L9.24069987,1.92748816 Z M9.60164432,4.70270593 C10.0029354,4.70488149 10.3263021,5.03200593 10.3241375,5.43329705 L10.3241375,5.43329705 L10.3021732,9.38054593 C10.2997999,9.67681705 10.1833088,9.95271705 9.97425765,10.159197 L9.97425765,10.159197 L6.37766876,13.7162304 C6.23605987,13.856257 6.05133543,13.9260726 5.86680876,13.9260726 C5.6795132,13.9260726 5.49241543,13.8540815 5.3502132,13.710297 C5.06798432,13.4249037 5.07055543,12.9648726 5.35594876,12.6828415 L5.35594876,12.6828415 L8.84989098,9.22766371 L8.8710532,5.42518816 C8.87322876,5.02528149 9.19817765,4.70270593 9.59749098,4.70270593 L9.59749098,4.70270593 Z",
                        id: "icon_schedule",
                        fill: "currentColor",
                        fillRule: "nonzero"
                    })
                })
            }), nt = Object(R.jsxs)("svg", {
                viewBox: "0 0 20 20",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M22.43,15.98 C22.47,15.66 22.5,15.34 22.5,15 C22.5,14.66 22.47,14.34 22.43,14.02 L24.54,12.37 C24.73,12.22 24.78,11.95 24.66,11.73 L22.66,8.27 C22.57,8.11 22.4,8.02 22.22,8.02 C22.16,8.02 22.1,8.03 22.05,8.05 L19.56,9.05 C19.04,8.65 18.48,8.32 17.87,8.07 L17.49,5.42 C17.46,5.18 17.25,5 17,5 L13,5 C12.75,5 12.54,5.18 12.51,5.42 L12.13,8.07 C11.52,8.32 10.96,8.66 10.44,9.05 L7.95,8.05 C7.89,8.03 7.83,8.02 7.77,8.02 C7.6,8.02 7.43,8.11 7.34,8.27 L5.34,11.73 C5.21,11.95 5.27,12.22 5.46,12.37 L7.57,14.02 C7.53,14.34 7.5,14.67 7.5,15 C7.5,15.33 7.53,15.66 7.57,15.98 L5.46,17.63 C5.27,17.78 5.22,18.05 5.34,18.27 L7.34,21.73 C7.43,21.89 7.6,21.98 7.78,21.98 C7.84,21.98 7.9,21.97 7.95,21.95 L10.44,20.95 C10.96,21.35 11.52,21.68 12.13,21.93 L12.51,24.58 C12.54,24.82 12.75,25 13,25 L17,25 C17.25,25 17.46,24.82 17.49,24.58 L17.87,21.93 C18.48,21.68 19.04,21.34 19.56,20.95 L22.05,21.95 C22.11,21.97 22.17,21.98 22.23,21.98 C22.4,21.98 22.57,21.89 22.66,21.73 L24.66,18.27 C24.78,18.05 24.73,17.78 24.54,17.63 L22.43,15.98 Z M20.45,14.27 C20.49,14.58 20.5,14.79 20.5,15 C20.5,15.21 20.48,15.43 20.45,15.73 L20.31,16.86 L21.2,17.56 L22.28,18.4 L21.58,19.61 L20.31,19.1 L19.27,18.68 L18.37,19.36 C17.94,19.68 17.53,19.92 17.12,20.09 L16.06,20.52 L15.9,21.65 L15.7,23 L14.3,23 L14.11,21.65 L13.95,20.52 L12.89,20.09 C12.46,19.91 12.06,19.68 11.66,19.38 L10.75,18.68 L9.69,19.11 L8.42,19.62 L7.72,18.41 L8.8,17.57 L9.69,16.87 L9.55,15.74 C9.52,15.43 9.5,15.2 9.5,15 C9.5,14.8 9.52,14.57 9.55,14.27 L9.69,13.14 L8.8,12.44 L7.72,11.6 L8.42,10.39 L9.69,10.9 L10.73,11.32 L11.63,10.64 C12.06,10.32 12.47,10.08 12.88,9.91 L13.94,9.48 L14.1,8.35 L14.3,7 L15.69,7 L15.88,8.35 L16.04,9.48 L17.1,9.91 C17.53,10.09 17.93,10.32 18.33,10.62 L19.24,11.32 L20.3,10.89 L21.57,10.38 L22.27,11.59 L21.2,12.44 L20.31,13.14 L20.45,14.27 Z M15,11 C12.79,11 11,12.79 11,15 C11,17.21 12.79,19 15,19 C17.21,19 19,17.21 19,15 C19,12.79 17.21,11 15,11 Z M15,17 C13.9,17 13,16.1 13,15 C13,13.9 13.9,13 15,13 C16.1,13 17,13.9 17,15 C17,16.1 16.1,17 15,17 Z",
                        id: "icon-settings"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-5.000000, -5.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-settings"})
                        }), Object(R.jsx)("use", {
                            id: "icon-settings",
                            fill: "currentColor",
                            fillRule: "nonzero",
                            xlinkHref: "#icon-settings"
                        })]
                    })
                })]
            }), it = Object(R.jsxs)("svg", {
                viewBox: "0 0 22 20",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M12,25 L21,25 C21.83,25 22.54,24.5 22.84,23.78 L25.86,16.73 C25.95,16.5 26,16.26 26,16 L26,14 C26,12.9 25.1,12 24,12 L17.69,12 L18.64,7.43 L18.67,7.11 C18.67,6.7 18.5,6.32 18.23,6.05 L17.17,5 L10.58,11.59 C10.22,11.95 10,12.45 10,13 L10,23 C10,24.1 10.9,25 12,25 Z M12,13 L16.34,8.66 L15,14 L24,14 L24,16 L21,23 L12,23 L12,13 Z M4,13 L8,13 L8,25 L4,25 L4,13 Z",
                        id: "icon-social"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-4.000000, -5.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-social"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-social"})]
                    })
                })]
            }), at = Object(R.jsx)("svg", {
                viewBox: "0 0 18 22", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: Object(R.jsx)("g", {
                    stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: Object(R.jsx)("g", {
                        transform: "translate(-571.000000, -275.000000)",
                        fill: "currentColor",
                        fillRule: "nonzero",
                        children: Object(R.jsx)("g", {
                            transform: "translate(48.625000, 267.000000)", children: Object(R.jsx)("g", {
                                transform: "translate(511.375000, 0.000000)", children: Object(R.jsx)("g", {
                                    transform: "translate(11.000000, 8.000000)",
                                    children: Object(R.jsx)("path", {d: "M14.2500005,0.0915857471 C12.1878255,0.0915857471 10.4999995,1.79878575 10.4999995,3.8846892 C10.4999995,4.21059264 10.5476005,4.5226892 10.6250005,4.82505011 L6.0547005,7.97808 C5.4177755,7.47364782 4.6166505,7.17204552 3.7500005,7.17204552 C1.6878255,7.17204552 -5.00000002e-07,8.87924552 -5.00000002e-07,10.965154 C-5.00000002e-07,13.0510322 1.6878255,14.7582575 3.7500005,14.7582575 C4.6205255,14.7582575 5.4242005,14.4528368 6.0625005,13.944308 L10.6250005,17.0973379 C10.5463755,17.4019241 10.4999995,17.7170299 10.4999995,18.0456138 C10.4999995,20.131492 12.1878255,21.8387172 14.2500005,21.8387172 C16.3121755,21.8387172 17.9999995,20.131492 17.9999995,18.0456138 C17.9999995,15.9597103 16.3121755,14.2525103 14.2500005,14.2525103 C13.0544755,14.2525103 11.9848255,14.8256989 11.2968755,15.714423 L7.0390505,12.7826828 C7.3338005,12.2417103 7.4999995,11.6232069 7.4999995,10.965154 C7.4999995,10.3032271 7.3292005,9.68290299 7.0312505,9.13970529 L11.2968755,6.20796506 C11.9847005,7.09949609 13.0522505,7.67779264 14.2500005,7.67779264 C16.3121755,7.67779264 17.9999995,5.97056736 17.9999995,3.8846892 C17.9999995,1.79878575 16.3121755,0.0915857471 14.2500005,0.0915857471 Z M14.2500005,1.60882713 C15.5015255,1.60882713 16.5000005,2.61877885 16.5000005,3.8846892 C16.5000005,5.15059954 15.5015255,6.16055126 14.2500005,6.16055126 C12.9984755,6.16055126 12.0000005,5.15059954 12.0000005,3.8846892 C12.0000005,2.61877885 12.9984755,1.60882713 14.2500005,1.60882713 Z M3.7500005,8.6892869 C5.0015255,8.6892869 6.0000005,9.69923862 6.0000005,10.965154 C6.0000005,12.2310644 5.0015255,13.2410161 3.7500005,13.2410161 C2.4984755,13.2410161 1.5000005,12.2310644 1.5000005,10.965154 C1.5000005,9.69923862 2.4984755,8.6892869 3.7500005,8.6892869 Z M14.2500005,15.7697517 C15.5015255,15.7697517 16.5000005,16.7797034 16.5000005,18.0456138 C16.5000005,19.3115241 15.5015255,20.3214759 14.2500005,20.3214759 C12.9984755,20.3214759 12.0000005,19.3115241 12.0000005,18.0456138 C12.0000005,16.7797034 12.9984755,15.7697517 14.2500005,15.7697517 L14.2500005,15.7697517 Z"})
                                })
                            })
                        })
                    })
                })
            }), rt = Object(R.jsxs)("svg", {
                viewBox: "0 0 20 19",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("polygon", {
                        id: "icon-star",
                        points: "15 20 9.12214748 23.0901699 10.2447174 16.545085 5.48943484 11.9098301 12.0610737 10.954915 15 5 17.9389263 10.954915 24.5105652 11.9098301 19.7552826 16.545085 20.8778525 23.0901699"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-5.000000, -5.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-star"})
                        }), Object(R.jsx)("use", {fill: "currentColor", xlinkHref: "#icon-star"})]
                    })
                })]
            }), ot = Object(R.jsxs)("svg", {
                viewBox: "0 0 16 20",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M20,7.14 L20,5 L17,5 L17,7 L13,7 L13,5 L10,5 L10,7.14 C8.28,7.59 7,9.14 7,11 L7,23 C7,24.1 7.9,25 9,25 L21,25 C22.1,25 23,24.1 23,23 L23,11 C23,9.14 21.72,7.59 20,7.14 Z M21,23 L9,23 L9,11 C9,9.9 9.9,9 11,9 L19,9 C20.1,9 21,9.9 21,11 L21,23 Z M19.5,15 L19.5,19 L17.5,19 L17.5,17 L10.5,17 L10.5,15 L19.5,15 Z",
                        id: "icon-swag"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-7.000000, -5.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-swag"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-swag"})]
                    })
                })]
            }), ct = Object(R.jsx)("img", {src: "/static/images/hitachi/icons/icon-swag-add.svg", alt: "swag added"}),
            st = Object(R.jsx)("svg", {
                viewBox: "0 0 26 26",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                children: Object(R.jsx)("g", {
                    id: "v15",
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        id: "23",
                        transform: "translate(-1096.000000, -219.000000)",
                        fill: "currentColor",
                        fillRule: "nonzero",
                        children: Object(R.jsx)("path", {
                            d: "M1097.01256,237.71562 C1097.19379,237.934035 1097.40876,238.122074 1097.64935,238.272616 C1097.13276,238.561085 1096.81261,239.106421 1096.8125,239.698096 L1096.8125,239.698096 L1096.8125,244.184323 L1099.45313,244.184323 C1099.45318,244.470851 1099.52904,244.752265 1099.673,245 L1099.673,245 L1096.8125,245 C1096.59659,244.999576 1096.38969,244.9134 1096.23732,244.76043 C1096.08494,244.607459 1095.99958,244.400224 1096,244.184315 L1096,244.184315 L1096,239.698096 C1095.99958,238.913013 1096.37627,238.175504 1097.01256,237.71562 Z M1120.98745,237.71562 C1121.62375,238.1755 1122.00043,238.913013 1122,239.698096 L1122,239.698096 L1122,244.184323 C1122.00042,244.400232 1121.91506,244.607466 1121.76268,244.760435 C1121.61031,244.913404 1121.40341,244.999579 1121.1875,245 L1121.1875,245 L1118.327,245 C1118.47097,244.752263 1118.54682,244.470845 1118.54687,244.184315 L1118.54687,244.184315 L1121.1875,244.184315 L1121.1875,239.698096 C1121.18739,239.106422 1120.86724,238.56109 1120.35065,238.272614 C1120.59124,238.122073 1120.80622,237.934035 1120.98745,237.71562 Z M1112.45312,233.172693 C1112.94038,233.198885 1113.37701,233.482052 1113.59966,233.916256 L1113.59966,233.916256 L1117.60348,242.829004 C1117.66765,243.003272 1117.71157,243.184342 1117.73437,243.368646 L1117.73437,243.368646 L1117.73437,244.184323 C1117.73394,244.633386 1117.37094,244.997807 1116.92187,245 L1116.92187,245 L1101.07813,245 C1100.62906,244.997807 1100.26606,244.633387 1100.26563,244.184325 L1100.26563,244.184325 L1100.26563,243.368648 C1100.28843,243.184343 1100.33235,243.003272 1100.39654,242.829004 L1100.39654,242.829004 L1104.40036,233.916256 C1104.62299,233.482051 1105.05962,233.198882 1105.54688,233.172693 L1105.54688,233.172693 Z M1116.92187,243.368646 L1101.07813,243.368646 L1101.07813,244.184323 L1116.92187,244.184323 L1116.92187,243.368646 Z M1112.45312,233.98837 L1105.54688,233.98837 C1105.38033,234.01445 1105.23275,234.11016 1105.14101,234.251582 L1105.14101,234.251582 L1101.41184,242.552971 L1116.5881,242.552971 L1112.85899,234.251582 C1112.76725,234.110157 1112.61967,234.014447 1112.45312,233.98837 L1112.45312,233.98837 Z M1101.08124,237.715644 C1101.27059,237.854726 1101.43908,238.020172 1101.58158,238.206959 L1101.58158,238.206959 L1101.17188,239.118979 C1101.03599,238.76041 1100.77857,238.460901 1100.44449,238.272661 C1100.68507,238.122115 1100.90004,237.934069 1101.08124,237.715644 Z M1116.91877,237.715642 C1117.09998,237.934064 1117.31494,238.122111 1117.55552,238.272661 C1117.22145,238.460896 1116.96404,238.760396 1116.82814,239.118955 L1116.82814,239.118955 L1116.41844,238.206957 C1116.56094,238.02017 1116.72942,237.854724 1116.91877,237.715642 Z M1098.35333,234.331311 C1099.04,234.047654 1099.82994,234.205954 1100.35428,234.732289 C1100.87863,235.258624 1101.03392,236.049156 1100.74765,236.734728 C1100.46138,237.4203 1099.79002,237.865658 1099.04708,237.862846 C1098.56122,237.862026 1098.09559,237.668185 1097.75269,237.32398 C1097.40978,236.979774 1097.21771,236.513416 1097.21875,236.02756 C1097.21875,235.284621 1097.66667,234.614969 1098.35333,234.331311 Z M1118.95292,234.192289 C1119.96167,234.192177 1120.77987,235.00915 1120.78126,236.017886 C1120.78265,237.026621 1119.9667,237.845847 1118.95796,237.848523 C1117.94922,237.851186 1117.12895,237.036289 1117.12499,236.02756 C1117.12396,235.541775 1117.31598,235.075481 1117.65879,234.731289 C1118.00161,234.387096 1118.46713,234.193207 1118.95292,234.192289 Z M1099.04708,235.007959 C1098.48523,235.009532 1098.03073,235.465713 1098.03125,236.02756 C1098.03125,236.440295 1098.28008,236.812319 1098.66155,236.969912 C1099.04302,237.127505 1099.48187,237.039578 1099.77318,236.747189 C1100.06449,236.4548 1100.15079,236.015631 1099.99178,235.634755 C1099.83277,235.253878 1099.45982,235.006433 1099.04708,235.007959 Z M1118.95292,235.007964 C1118.39255,235.00808 1117.93816,235.462028 1117.93751,236.02239 C1117.93685,236.582751 1118.39018,237.03776 1118.95055,237.039189 C1119.51091,237.040612 1119.96655,236.587917 1119.96875,236.02756 C1119.96915,235.465759 1119.51472,235.009644 1118.95292,235.007964 Z M1115.09065,232.413746 C1115.27186,232.632168 1115.48682,232.820214 1115.7274,232.970765 C1115.21085,233.259249 1114.89073,233.804562 1114.89062,234.396208 L1114.89062,234.396208 L1114.89062,234.806024 L1114.34036,233.581128 C1114.31999,233.535762 1114.29732,233.49123 1114.27289,233.447418 C1114.44626,233.034822 1114.72902,232.677407 1115.09065,232.413746 Z M1102.90937,232.413746 C1103.27096,232.677387 1103.55369,233.034761 1103.72706,233.447307 C1103.70265,233.491092 1103.68,233.5356 1103.65964,233.580929 L1103.65964,233.580929 L1103.10938,234.805875 L1103.10938,234.396208 C1103.10928,233.804563 1102.78917,233.259248 1102.27262,232.970765 C1102.5132,232.820218 1102.72816,232.632171 1102.90937,232.413746 Z M1119.15932,232.413716 C1119.57034,232.713034 1119.8782,233.132654 1120.04035,233.614554 C1119.71439,233.46579 1119.36131,233.385665 1119.00306,233.379159 C1118.8708,233.213216 1118.70761,233.074505 1118.52253,232.97071 C1118.76312,232.820169 1118.9781,232.632131 1119.15932,232.413716 Z M1098.84069,232.413716 C1099.02191,232.632137 1099.23688,232.820181 1099.47748,232.970728 C1099.29239,233.074512 1099.1292,233.213218 1098.99694,233.379157 C1098.6387,233.385661 1098.28563,233.465782 1097.95967,233.614541 C1098.12182,233.132647 1098.42968,232.713032 1098.84069,232.413716 Z M1100.87016,228.904701 C1101.87891,228.902038 1102.69918,229.716935 1102.70313,230.725664 C1102.70417,231.21145 1102.51215,231.677745 1102.16934,232.021939 C1101.82652,232.366132 1101.361,232.56002 1100.87521,232.560935 C1099.86646,232.561047 1099.04826,231.744073 1099.04686,230.735338 C1099.04547,229.726603 1099.86142,228.907376 1100.87016,228.904701 Z M1116.43155,229.029373 C1117.11826,228.745738 1117.90824,228.904112 1118.43255,229.430532 C1118.95686,229.956953 1119.11206,230.747552 1118.82566,231.433112 C1118.53926,232.118671 1117.86777,232.563925 1117.12479,232.56095 C1116.11328,232.558766 1115.29497,231.737166 1115.29687,230.725664 C1115.29687,229.982687 1115.74483,229.313007 1116.43155,229.029373 Z M1111.55538,226.005456 C1112.80991,226.476229 1113.64921,227.665963 1113.67187,229.005693 L1113.67187,229.005693 L1113.67187,231.235461 L1114.5345,231.235461 C1114.59091,231.522518 1114.69472,231.79818 1114.84167,232.051142 L1114.84167,232.051142 L1103.15833,232.051142 C1103.30528,231.79818 1103.40909,231.522518 1103.4655,231.235461 L1103.4655,231.235461 L1104.32813,231.235461 L1104.32813,229.005693 C1104.35076,227.665949 1105.19006,226.476189 1106.4446,226.005456 C1106.64252,226.259034 1106.87668,226.482108 1107.13955,226.667507 C1106.00211,226.872596 1105.16634,227.850207 1105.14063,229.005693 L1105.14063,229.005693 L1105.14063,231.235461 L1112.85937,231.235461 L1112.85937,229.005693 C1112.83357,227.850245 1111.99784,226.872689 1110.86045,226.667544 C1111.12331,226.482141 1111.35746,226.259073 1111.55538,226.005456 Z M1118.88112,219.000316 C1119.46624,218.986219 1119.95256,219.447995 1119.96875,220.033054 L1119.96875,220.033054 L1119.96875,231.0184 C1119.9654,231.357925 1119.79271,231.673351 1119.50848,231.859098 C1119.95171,230.929309 1119.81423,229.826707 1119.15625,229.034226 L1119.15625,229.034226 L1119.15625,220.033054 C1119.13678,219.899092 1119.01594,219.803751 1118.88112,219.815991 L1118.88112,219.815991 L1099.11899,219.815991 C1098.98415,219.803745 1098.86327,219.899075 1098.84375,220.033054 L1098.84375,220.033054 L1098.84375,229.03422 C1098.18631,229.82605 1098.04847,230.927559 1098.4905,231.856977 C1098.20685,231.670694 1098.03464,231.355345 1098.03125,231.016009 L1098.03125,231.016009 L1098.03125,220.033054 C1098.04746,219.44796 1098.53383,218.986176 1099.11899,219.000316 L1099.11899,219.000316 Z M1101.26023,229.783272 C1100.87871,229.625703 1100.43983,229.713706 1100.14855,230.00618 C1099.85727,230.298654 1099.77108,230.737891 1099.93022,231.118755 C1100.08936,231.499618 1100.46243,231.746958 1100.87521,231.745268 C1101.43685,231.743356 1101.89103,231.287306 1101.89063,230.725664 C1101.89063,230.312891 1101.64175,229.940841 1101.26023,229.783272 Z M1117.12479,229.706059 C1116.56315,229.707971 1116.10897,230.164021 1116.10937,230.725664 C1116.10937,231.138437 1116.35825,231.510487 1116.73977,231.668055 C1117.12129,231.825624 1117.56017,231.737622 1117.85145,231.445148 C1118.14273,231.152673 1118.22892,230.713436 1118.06978,230.332573 C1117.91064,229.95171 1117.53757,229.70437 1117.12479,229.706059 Z M1108.04025,227.113617 C1108.3007,227.193087 1108.57017,227.239256 1108.84222,227.251023 L1108.84222,227.251023 L1108.60713,229.272541 L1109.00307,229.683765 L1109.38769,229.28429 L1109.08231,227.254844 C1109.35418,227.248177 1109.62411,227.207122 1109.88567,227.13266 L1109.88567,227.13266 L1110.2002,229.223156 C1110.26001,229.482799 1110.15111,229.752133 1109.92765,229.897245 L1109.92765,229.897245 L1109.44305,230.400471 L1109.38711,230.430533 C1109.14546,230.55221 1108.86043,230.552134 1108.61884,230.43033 L1108.61884,230.43033 L1108.563,230.400268 L1108.0784,229.897042 C1107.86135,229.753882 1107.74938,229.496013 1107.79295,229.239682 L1107.79295,229.239682 Z M1108.99359,221.568386 C1110.33857,221.56486 1111.43223,222.651381 1111.43751,223.996334 C1111.4389,224.644076 1111.18287,225.265832 1110.72575,225.724764 C1110.26863,226.183696 1109.64789,226.442193 1109.00014,226.443364 C1107.65516,226.443438 1106.56429,225.354108 1106.56248,224.009146 C1106.56068,222.664183 1107.64862,221.571929 1108.99359,221.568386 Z M1109.61641,222.488524 C1109.006,222.236402 1108.30381,222.377171 1107.83775,222.845091 C1107.37169,223.31301 1107.23373,224.015758 1107.48829,224.625146 C1107.74285,225.234534 1108.33971,225.630327 1109.00014,225.6277 C1109.89886,225.624793 1110.6257,224.895055 1110.625,223.996334 C1110.625,223.335914 1110.22682,222.740646 1109.61641,222.488524 Z",
                            id: "sessionrooms"
                        })
                    })
                })
            }), lt = Object(R.jsx)("svg", {
                viewBox: "0 0 26 26", xmlns: "http://www.w3.org/2000/svg", children: Object(R.jsx)("g", {
                    stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: Object(R.jsx)("g", {
                        transform: "translate(-1097.000000, -374.000000)",
                        fill: "currentColor",
                        fillRule: "nonzero",
                        children: Object(R.jsx)("path", {d: "M1119.90476,398.731738 C1120.24648,398.731738 1120.52381,399.015195 1120.52381,399.365869 C1120.52381,399.716543 1120.24648,400 1119.90476,400 L1119.90476,400 L1097.61905,400 C1097.27733,400 1097,399.716543 1097,399.365869 C1097,399.015195 1097.27733,398.731738 1097.61905,398.731738 L1097.61905,398.731738 Z M1119.28571,386.04912 C1119.62743,386.04912 1119.90476,386.332577 1119.90476,386.683251 C1119.90476,387.112558 1119.8769,387.534889 1119.83171,387.951513 L1119.83171,387.951513 L1122.38095,387.951513 C1122.72267,387.951513 1123,388.23497 1123,388.585644 L1123,388.585644 L1123,392.390429 C1123,392.741104 1122.72267,393.02456 1122.38095,393.02456 L1122.38095,393.02456 L1118.04762,393.02456 C1118.03895,393.02456 1118.03214,393.019487 1118.02348,393.019487 C1116.02271,396.078535 1112.61857,398.097607 1108.7619,398.097607 C1102.61786,398.097607 1097.61905,392.977 1097.61905,386.683251 C1097.61905,386.332577 1097.89638,386.04912 1098.2381,386.04912 L1098.2381,386.04912 Z M1118.64748,387.317382 L1098.87633,387.317382 C1099.197,392.617448 1103.50867,396.829346 1108.7619,396.829346 C1114.01514,396.829346 1118.32681,392.617448 1118.64748,387.317382 L1118.64748,387.317382 Z M1121.7619,389.219775 L1119.61814,389.219775 C1119.42005,390.110095 1119.11795,390.957928 1118.72919,391.756298 L1118.72919,391.756298 L1121.7619,391.756298 L1121.7619,389.219775 Z M1103.23257,374.404575 C1103.35576,374.078631 1103.71481,373.91566 1104.03362,374.043754 C1104.10048,374.069754 1105.66667,374.71847 1105.66667,376.854222 C1105.66667,378.3736 1104.26143,379.516304 1104.1921,379.572107 C1104.19148,379.572107 1104.19148,379.572742 1104.19086,379.573376 C1103.91229,379.798492 1103.19048,380.544864 1103.19048,381.293139 C1103.19048,382.570912 1104.02557,382.917782 1104.03362,382.920953 C1104.35243,383.047145 1104.51029,383.414941 1104.38648,383.741518 C1104.29114,383.992634 1104.05714,384.146094 1103.80952,384.146094 C1103.73524,384.146094 1103.6591,384.132777 1103.58543,384.102973 C1103.51857,384.076973 1101.95238,383.428891 1101.95238,381.293139 C1101.95238,379.773127 1103.35762,378.631057 1103.42695,378.575254 L1103.42695,378.575254 C1103.70676,378.348869 1104.42857,377.602497 1104.42857,376.854222 C1104.42857,375.575814 1103.59348,375.228945 1103.58543,375.22514 C1103.26662,375.098948 1103.10876,374.731152 1103.23257,374.404575 Z M1108.18495,374.404575 C1108.30876,374.078631 1108.66781,373.91566 1108.986,374.043754 C1109.05286,374.069754 1110.61905,374.71847 1110.61905,376.854222 C1110.61905,378.3736 1109.21381,379.516304 1109.14448,379.572107 C1109.14386,379.572107 1109.14386,379.572742 1109.14324,379.573376 C1108.86467,379.798492 1108.14286,380.544864 1108.14286,381.293139 C1108.14286,382.570912 1108.97795,382.917782 1108.986,382.920953 C1109.30481,383.047145 1109.46267,383.414941 1109.33886,383.741518 C1109.24352,383.992634 1109.00952,384.146094 1108.7619,384.146094 C1108.68762,384.146094 1108.61148,384.132777 1108.53781,384.102973 C1108.47095,384.076973 1106.90476,383.428891 1106.90476,381.293139 C1106.90476,379.773127 1108.31,378.631057 1108.37933,378.575254 C1108.37995,378.575254 1108.37995,378.574619 1108.38057,378.573985 C1108.65914,378.348869 1109.38095,377.602497 1109.38095,376.854222 C1109.38095,375.575814 1108.54586,375.228945 1108.53781,375.22514 C1108.219,375.098948 1108.06114,374.730518 1108.18495,374.404575 Z M1113.13733,374.404575 C1113.26114,374.078631 1113.62019,373.91566 1113.93838,374.043754 C1114.00524,374.069754 1115.57143,374.71847 1115.57143,376.854222 C1115.57143,378.3736 1114.16619,379.516304 1114.09686,379.572107 L1114.09686,379.572107 C1113.81705,379.798492 1113.09524,380.544864 1113.09524,381.293139 C1113.09524,382.570912 1113.93033,382.917782 1113.93838,382.920953 C1114.25719,383.047145 1114.41505,383.414941 1114.29124,383.741518 C1114.1959,383.992634 1113.9619,384.146094 1113.71429,384.146094 C1113.64,384.146094 1113.56386,384.132777 1113.49019,384.102973 C1113.42333,384.076973 1111.85714,383.428891 1111.85714,381.293139 C1111.85714,379.773127 1113.26238,378.631057 1113.33171,378.575254 C1113.33233,378.575254 1113.33233,378.574619 1113.33295,378.573985 C1113.61152,378.348869 1114.33333,377.602497 1114.33333,376.854222 C1114.33333,375.575814 1113.49824,375.228945 1113.49019,375.22514 C1113.17138,375.098948 1113.01352,374.730518 1113.13733,374.404575 Z"})
                    })
                })
            }), dt = Object(R.jsxs)("svg", {
                viewBox: "0 0 57 57",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("title", {children: "Tech Topic"}), Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M10.7299656,27.3498634 C10.922447,27.3148667 11.1044295,27.4408546 11.1394261,27.6263367 C11.1604241,27.7348262 11.1709231,27.8503151 11.1709231,27.976303 C11.1709231,28.5327493 10.953944,29.0611984 10.5584821,29.4601599 C10.1560209,29.8591215 9.63107152,30.0761005 9.07112551,30.0761005 C8.03522537,30.0761005 7.16730904,29.3376717 6.99932524,28.3192699 C6.97132794,28.1267885 7.10081545,27.9483057 7.28979723,27.9168087 C7.48227868,27.8888114 7.66076147,28.0182989 7.69225843,28.2072807 C7.80074798,28.8827156 8.38169197,29.376168 9.07112551,29.376168 C9.44558941,29.376168 9.79905533,29.2291822 10.0650297,28.9667075 C10.3240047,28.7007331 10.4709906,28.3507669 10.4709906,27.976303 C10.4709906,27.8958107 10.4639912,27.8223178 10.4534922,27.7593239 C10.414996,27.5703421 10.5409838,27.38486 10.7299656,27.3498634 Z M14.2331279,24.7251164 C14.4256093,24.6936194 14.6040921,24.823107 14.6355891,25.0120887 C14.667086,25.2010705 14.5375985,25.383053 14.3486167,25.4145499 L14.3486167,25.4145499 L3.90912314,27.1503826 C3.89162483,27.1538823 3.87062686,27.1538823 3.85312854,27.1538823 C3.68164507,27.1538823 3.53465924,27.0313941 3.50666194,26.8599106 C3.47516498,26.6709288 3.6046525,26.4889464 3.79363428,26.4574494 L3.79363428,26.4574494 Z M14.2331279,22.1003694 C14.4256093,22.0688725 14.6040921,22.19836 14.6355891,22.3873418 C14.667086,22.5763235 14.5375985,22.758306 14.3486167,22.789803 L14.3486167,22.789803 L3.90912314,24.5256356 C3.89162483,24.5291353 3.87062686,24.5291353 3.85312854,24.5291353 C3.68164507,24.5291353 3.53465924,24.4066471 3.50666194,24.2351636 C3.47516498,24.0461818 3.6046525,23.8641994 3.79363428,23.8327024 L3.79363428,23.8327024 Z M9.09912281,0.0174983131 C12.2873155,0.0174983131 15.1815364,1.5538502 16.8333772,4.12610223 C18.3627298,6.50237314 18.5692099,9.3336002 17.4038222,11.8848543 L17.4038222,11.8848543 L14.7230806,17.7607878 L14.7125816,19.5876117 C14.7125816,19.7835928 14.5550968,19.9375779 14.3626154,19.9375779 L14.3626154,19.9375779 L14.2913098,19.9304351 C14.130544,19.8976599 14.0126491,19.7560329 14.0126491,19.5876117 L14.0126491,19.5876117 L14.0231481,17.6103023 L16.7668836,11.5978819 C17.8342807,9.26360695 17.6417993,6.67735628 16.2454339,4.50406579 C14.719581,2.13129453 12.0493384,0.717430837 9.09912281,0.717430837 C6.14890722,0.717430837 3.47866464,2.1347942 1.95281174,4.50756545 C0.556446356,6.67735628 0.367464575,9.26360695 1.43136201,11.6013816 L1.43136201,11.6013816 L4.1750975,17.613802 L4.18559649,21.358441 C4.18559649,21.5509224 4.02811167,21.7084072 3.83563023,21.7084072 L3.83563023,21.7084072 L3.76532939,21.7012644 C3.60623828,21.6684892 3.48566397,21.5268622 3.48566397,21.358441 L3.48566397,21.358441 L3.47516498,17.7677871 L0.794423414,11.8918536 C-0.370964238,9.3336002 -0.164484143,6.50237314 1.36486842,4.12610223 C3.01670918,1.5538502 5.91093016,0.0174983131 9.09912281,0.0174983131 Z M3.68514474,9.68706613 C4.36057962,9.68706613 4.91002665,10.2365132 4.91002665,10.911948 C4.91002665,11.0939305 4.8680307,11.265414 4.79453779,11.4228988 L4.79453779,11.4228988 L7.70625709,14.3346181 L7.70625709,21.358441 C7.70625709,21.5509224 7.54877227,21.7084072 7.35629082,21.7084072 C7.16380938,21.7084072 7.00632456,21.5509224 7.00632456,21.358441 L7.00632456,21.358441 L7.00632456,14.6250901 L4.32908266,11.9478482 C4.14360054,12.0668367 3.92312179,12.13683 3.68514474,12.13683 C3.00970985,12.13683 2.46026282,11.5873829 2.46026282,10.911948 C2.46026282,10.2365132 3.00970985,9.68706613 3.68514474,9.68706613 Z M14.4046113,9.46308772 C15.0800462,9.46308772 15.6294933,10.0125348 15.6294933,10.6879696 C15.6294933,11.3634045 15.0800462,11.9128516 14.4046113,11.9128516 C14.2156296,11.9128516 14.0336471,11.8673559 13.8726626,11.7868637 L13.8726626,11.7868637 L11.1709231,14.4886032 L11.1709231,20.0075712 C11.1709231,20.2000526 11.0134383,20.3575374 10.8209568,20.3575374 C10.6284754,20.3575374 10.4709906,20.2000526 10.4709906,20.0075712 L10.4709906,20.0075712 L10.4709906,14.1946316 L13.3547126,11.3109096 C13.246223,11.1289271 13.1797294,10.9154477 13.1797294,10.6879696 C13.1797294,10.0125348 13.7291765,9.46308772 14.4046113,9.46308772 Z M11.7763647,4.22759244 C12.4517996,4.22759244 13.0012466,4.77703947 13.0012466,5.45247436 C13.0012466,6.00542105 12.6302824,6.47087618 12.126331,6.62136167 L12.126331,6.62136167 L12.126331,9.32310121 L9.44908907,12.0003431 L9.44908907,18.8736805 C9.44908907,19.0661619 9.29160425,19.2236468 9.09912281,19.2236468 C8.90664136,19.2236468 8.74915655,19.0661619 8.74915655,18.8736805 L8.74915655,18.8736805 L8.74915655,11.7133708 L11.4263984,9.03262922 L11.4263984,6.62136167 C10.922447,6.46737652 10.5514828,6.00542105 10.5514828,5.45247436 C10.5514828,4.77703947 11.1009298,4.22759244 11.7763647,4.22759244 Z M4.73504352,3.27918387 C5.41047841,3.27918387 5.95992544,3.8286309 5.95992544,4.50406579 C5.95992544,5.05701248 5.5889612,5.51896795 5.08500978,5.6729531 L5.08500978,5.6729531 L5.08500978,6.84883974 L7.70625709,9.47008704 L7.70625709,12.6057848 C7.70625709,12.7982662 7.54877227,12.955751 7.35629082,12.955751 C7.16380938,12.955751 7.00632456,12.7982662 7.00632456,12.6057848 L7.00632456,12.6057848 L7.00632456,9.76055904 L4.38507726,7.13931174 L4.38507726,5.6729531 C3.88112584,5.51896795 3.51016161,5.05701248 3.51016161,4.50406579 C3.51016161,3.8286309 4.05960864,3.27918387 4.73504352,3.27918387 Z M3.68514474,10.3869987 C3.39467274,10.3869987 3.16019534,10.621476 3.16019534,10.911948 C3.16019534,11.1989204 3.39467274,11.4368974 3.68514474,11.4368974 C3.97561673,11.4368974 4.21009413,11.20242 4.21009413,10.911948 C4.21009413,10.621476 3.97561673,10.3869987 3.68514474,10.3869987 Z M14.4046113,10.1665199 C14.117639,10.1665199 13.8796619,10.4009973 13.8796619,10.6914693 C13.8796619,10.9819413 14.1141393,11.2164187 14.4046113,11.2164187 C14.6950833,11.2164187 14.9295607,10.9819413 14.9295607,10.6914693 C14.9295607,10.4009973 14.6950833,10.1665199 14.4046113,10.1665199 Z M11.7763647,4.93102463 C11.4858927,4.93102463 11.2514153,5.16550202 11.2514153,5.45597402 C11.2514153,5.74644602 11.4858927,5.98092341 11.7763647,5.98092341 C12.0668367,5.98092341 12.3013141,5.74644602 12.3013141,5.45597402 C12.3013141,5.16550202 12.0668367,4.93102463 11.7763647,4.93102463 Z M4.73504352,3.9791164 C4.44457152,3.9791164 4.21009413,4.21359379 4.21009413,4.50406579 C4.21009413,4.79453779 4.44457152,5.02901518 4.73504352,5.02901518 C5.02551552,5.02901518 5.25999291,4.79453779 5.25999291,4.50406579 C5.25999291,4.21359379 5.02551552,3.9791164 4.73504352,3.9791164 Z",
                        id: "icon-tech-topic"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        children: Object(R.jsx)("g", {
                            transform: "translate(10.000000, 9.000000)",
                            children: Object(R.jsxs)("g", {
                                transform: "translate(9.566667, 4.100000)",
                                children: [Object(R.jsx)("mask", {
                                    id: "tech-topic-mask",
                                    fill: "white",
                                    children: Object(R.jsx)("use", {xlinkHref: "#icon-tech-topic"})
                                }), Object(R.jsx)("use", {
                                    fill: "currentColor",
                                    fillRule: "nonzero",
                                    xlinkHref: "#icon-tech-topic"
                                }), Object(R.jsx)("g", {
                                    mask: "url(#tech-topic-mask)",
                                    children: Object(R.jsx)("g", {
                                        transform: "translate(-34.166667, -28.700000)",
                                        children: Object(R.jsx)("rect", {
                                            id: "Rectangle",
                                            fill: "currentColor",
                                            x: "0",
                                            y: "0",
                                            width: "88.8333333",
                                            height: "88.8333333"
                                        })
                                    })
                                })]
                            })
                        })
                    })
                })]
            }), pt = Object(R.jsxs)("svg", {
                viewBox: "0 0 20 24",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M15.1269466,26.704436 C18.8624899,26.7071118 22.2670197,24.5625893 23.8778633,21.1922074 C25.4887069,17.8218256 25.019057,13.8256739 22.6706872,10.9206007 L24.3935354,9.19775246 C24.5138637,9.07741302 24.5138637,8.88231604 24.3935354,8.7619766 L23.3711277,7.73956884 C23.2507882,7.61924053 23.0556913,7.61924053 22.9353518,7.73956884 L21.2125035,9.46241712 C19.9039622,8.40241228 18.3409886,7.70299695 16.6786708,7.43357143 L16.6786708,6.01477833 L18.1808768,6.01477833 C18.3510566,6.0147769 18.4890142,5.8768193 18.4890156,5.70663953 L18.4890156,3.73671022 C18.4890142,3.56653046 18.3510566,3.42857143 18.1808768,3.42857143 L12.0730165,3.42857143 C11.9028367,3.42857143 11.7648791,3.56653046 11.7648777,3.73671022 L11.7648777,5.70663953 C11.7648791,5.8768193 11.9028367,6.0147769 12.0730165,6.01477833 L13.5752225,6.01477833 L13.5752225,7.43357143 C11.9129052,7.70299544 10.3499317,8.40240897 9.04138974,9.46241195 L7.31854147,7.73956884 C7.19820203,7.61924053 7.00310504,7.61924053 6.8827656,7.73956884 L5.86035785,8.7619766 C5.74002953,8.88231604 5.74002953,9.07741302 5.86035785,9.19775246 L7.58320612,10.9206007 C5.23483628,13.8256739 4.76518638,17.8218256 6.37602998,21.1922074 C7.98687358,24.5625893 11.3914033,26.7071118 15.1269466,26.704436 L15.1269466,26.704436 Z M15.1269466,25.41133 C10.4848981,25.41133 6.72177422,21.6482062 6.72177422,17.0061576 C6.72177422,12.3641091 10.4848981,8.60098522 15.1269466,8.60098522 C19.7689952,8.60098522 23.5321191,12.3641091 23.5321191,17.0061576 C23.5268898,21.6460384 19.7668274,25.4061008 15.1269466,25.41133 Z M19.8793061,12.2537982 C20.0116297,12.386115 20.0198877,12.5979624 19.8982656,12.7401783 L16.6171889,16.5769637 C16.8148147,17.2588331 16.525712,17.9879952 15.9145284,18.3491829 C15.3033448,18.7103706 14.5251621,18.6119361 14.0231651,18.1099392 C13.5211681,17.6079422 13.4227336,16.8297594 13.7839213,16.2185758 C14.145109,15.6073922 14.8742711,15.3182895 15.5561406,15.5159154 L19.3929259,12.2348387 C19.5351418,12.1132166 19.7469892,12.1214746 19.8793061,12.2537982 Z M14.7390156,22.9889076 L15.5148777,22.9889076 L15.5148777,24.7647783 L14.7390156,24.7647783 L14.7390156,22.9889076 Z M15.5148777,11.0234076 L14.7390156,11.0234076 L14.7390156,9.24753695 L15.5148777,9.24753695 L15.5148777,11.0234076 Z M7.36832595,16.6182266 L9.14406991,16.6182266 L9.14406991,17.3940887 L7.36832595,17.3940887 L7.36832595,16.6182266 Z M22.8855673,17.3940887 L21.1098234,17.3940887 L21.1098234,16.6182266 L22.8855673,16.6182266 L22.8855673,17.3940887 Z",
                        id: "icon-timer"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-5.000000, -3.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-timer"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-timer"})]
                    })
                })]
            }), mt = Object(R.jsxs)("svg", {
                viewBox: "0 0 15 12",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M22.7662018,10.4206317 C22.2229286,10.661813 21.6390484,10.8242412 21.026251,10.8974569 C21.6519688,10.5227646 22.1324856,9.9290402 22.3582855,9.22149303 C21.7731747,9.56849877 21.1246924,9.82075472 20.4343724,9.95672683 C19.8824856,9.36792453 19.0943396,9 18.2231337,9 C16.2672272,9 14.8299836,10.8248564 15.2717391,12.7192371 C12.754717,12.5931091 10.5225595,11.3872026 9.0280968,9.55434783 C8.23441345,10.9159147 8.61648893,12.6970878 9.96513536,13.5990566 C9.46923708,13.5830599 9.00164069,13.4470878 8.59372436,13.2200574 C8.56050041,14.6234619 9.56644791,15.9364233 11.0233798,16.228671 C10.5970057,16.3443396 10.1300246,16.371411 9.65504512,16.2803527 C10.0401969,17.4837982 11.1587367,18.3593109 12.4852338,18.3839212 C11.2116489,19.3824856 9.60705496,19.828548 8,19.6390484 C9.34064807,20.4985644 10.9335521,21 12.6439705,21 C18.2686628,21 21.4464725,16.2495898 21.2545119,11.9889253 C21.8463905,11.5613208 22.3601313,11.0278917 22.7662018,10.4206317 Z",
                        id: "icon-twitter"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-8.000000, -9.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-twitter"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-twitter"})]
                    })
                })]
            }), ut = Object(R.jsxs)("svg", {
                viewBox: "0 0 17 17",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: [Object(R.jsx)("defs", {
                    children: Object(R.jsx)("path", {
                        d: "M7.7,10.4 L6,10.4 L6,22.3 C6,23.235 6.765,24 7.7,24 L19.6,24 L19.6,22.3 L7.7,22.3 L7.7,10.4 Z M21.3,7 L11.1,7 C10.165,7 9.4,7.765 9.4,8.7 L9.4,18.9 C9.4,19.835 10.165,20.6 11.1,20.6 L21.3,20.6 C22.235,20.6 23,19.835 23,18.9 L23,8.7 C23,7.765 22.235,7 21.3,7 Z M21.3,18.9 L11.1,18.9 L11.1,8.7 L21.3,8.7 L21.3,18.9 Z M14.5,9.975 L14.5,17.625 L19.6,13.8 L14.5,9.975 Z",
                        id: "icon-video"
                    })
                }), Object(R.jsx)("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsxs)("g", {
                        transform: "translate(-6.000000, -7.000000)",
                        children: [Object(R.jsx)("mask", {
                            fill: "white",
                            children: Object(R.jsx)("use", {xlinkHref: "#icon-video"})
                        }), Object(R.jsx)("use", {fill: "currentColor", fillRule: "nonzero", xlinkHref: "#icon-video"})]
                    })
                })]
            }), ht = Object(R.jsx)("svg", {
                viewBox: "0 0 29 25", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: Object(R.jsx)("g", {
                    id: "v15",
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        id: "23",
                        transform: "translate(-1095.000000, -273.000000)",
                        fill: "currentColor",
                        fillRule: "nonzero",
                        children: Object(R.jsx)("path", {
                            d: "M1096.68605,273 C1095.75781,273 1095,273.780312 1095,274.73611 L1095,292.097226 C1095,293.053024 1095.75781,293.833336 1096.68605,293.833336 L1106.80233,293.833336 L1106.80233,297.305556 L1105.45349,297.305556 C1105.26725,297.305556 1105.11628,297.461007 1105.11628,297.652778 C1105.11628,297.844549 1105.26725,298 1105.45349,298 L1113.54651,298 C1113.73275,298 1113.88372,297.844549 1113.88372,297.652778 C1113.88372,297.461007 1113.73275,297.305556 1113.54651,297.305556 L1112.19767,297.305556 L1112.19767,293.833336 L1122.31395,293.833336 C1123.24219,293.833336 1124,293.053024 1124,292.097226 L1124,274.73611 C1124,273.780312 1123.24219,273 1122.31395,273 L1096.68605,273 Z M1096.68605,273.694444 L1122.31395,273.694444 C1122.88023,273.694444 1123.32558,274.15302 1123.32558,274.73611 L1123.32558,288.972227 L1095.67442,288.972227 L1095.67442,274.73611 C1095.67442,274.15302 1096.11977,273.694444 1096.68605,273.694444 Z M1109.37355,275.452082 L1099.93169,279.271524 C1099.68866,279.376767 1099.68866,279.806455 1099.93169,279.911698 L1103.1141,281.202964 C1103.09926,281.244457 1103.09319,281.288898 1103.09319,281.333172 L1103.09319,284.805389 C1103.09319,285.213097 1103.35601,285.530632 1103.70438,285.803653 C1104.05275,286.076673 1104.52407,286.321638 1105.09537,286.530666 C1106.23797,286.948687 1107.78222,287.235943 1109.50017,287.235943 C1111.21812,287.235943 1112.76237,286.948687 1113.90497,286.530666 C1114.47627,286.321638 1114.94758,286.076673 1115.29595,285.803653 C1115.64432,285.530632 1115.90715,285.213097 1115.90715,284.805389 L1115.90715,281.333172 C1115.90715,281.288898 1115.90074,281.244457 1115.88624,281.202964 L1117.93057,280.367461 L1117.93057,282.472477 C1117.72932,282.593588 1117.59336,282.81522 1117.59336,283.069283 C1117.59336,283.448692 1117.89931,283.763727 1118.26778,283.763727 C1118.63625,283.763727 1118.9422,283.448692 1118.9422,283.069283 C1118.9422,282.815217 1118.80623,282.593588 1118.60499,282.472477 L1118.60499,280.096177 L1119.06865,279.911698 C1119.31168,279.806489 1119.31168,279.376767 1119.06865,279.271524 L1109.62679,275.452082 C1109.50073,275.405273 1109.41661,275.439582 1109.37355,275.452082 Z M1109.5,276.1467 L1118.02506,279.597219 L1109.5,283.036887 L1100.97494,279.597219 L1109.5,276.1467 Z M1103.76744,281.463554 L1109.37355,283.731331 C1109.45367,283.764664 1109.54633,283.764664 1109.62645,283.731331 L1115.23256,281.463554 L1115.23256,284.805563 C1115.23256,284.875598 1115.14913,285.043306 1114.88483,285.250424 C1114.62042,285.457646 1114.2093,285.676569 1113.68349,285.86893 C1112.6319,286.253687 1111.1447,286.541673 1109.5,286.541673 C1107.8553,286.541673 1106.3681,286.253687 1105.31651,285.86893 C1104.79064,285.676569 1104.37951,285.457646 1104.11517,285.250424 C1103.85093,285.043306 1103.76744,284.875598 1103.76744,284.805563 L1103.76744,281.463554 Z M1095.67442,289.666671 L1123.32558,289.666671 L1123.32558,292.097226 C1123.32558,292.680315 1122.88023,293.138892 1122.31395,293.138892 L1096.68605,293.138892 C1096.11977,293.138892 1095.67442,292.680315 1095.67442,292.097226 L1095.67442,289.666671 Z M1109.5,290.708337 C1109.12752,290.708337 1108.82558,291.01924 1108.82558,291.402781 C1108.82558,291.786323 1109.12752,292.097226 1109.5,292.097226 C1109.87248,292.097226 1110.17442,291.786323 1110.17442,291.402781 C1110.17442,291.01924 1109.87248,290.708337 1109.5,290.708337 Z M1107.47674,293.833336 L1111.52326,293.833336 L1111.52326,297.305556 L1107.47674,297.305556 L1107.47674,293.833336 Z",
                            id: "demo-center"
                        })
                    })
                })
            }), bt = Object(R.jsx)("svg", {
                viewBox: "0 0 30 23", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: Object(R.jsx)("g", {
                    id: "v15",
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        id: "23",
                        transform: "translate(-1094.000000, -168.000000)",
                        fill: "currentColor",
                        fillRule: "nonzero",
                        children: Object(R.jsx)("path", {
                            d: "M1097.42297,168.000287 C1097.2562,168.032076 1097.13655,168.179186 1097.13954,168.348768 L1097.13954,186.121273 L1096.09303,186.121273 C1096.08213,186.120762 1096.07122,186.120762 1096.06033,186.121273 C1095.88055,186.138199 1095.74341,186.289368 1095.74419,186.469754 L1095.74419,188.212156 L1094.34884,188.212156 C1094.33795,188.211645 1094.32704,188.211645 1094.31614,188.212156 C1094.13637,188.229082 1093.99923,188.380251 1094,188.560637 L1094,190.65152 C1094,190.843972 1094.15619,191 1094.34884,191 L1123.65116,191 C1123.84381,191 1124,190.843972 1124,190.65152 L1124,188.560637 C1124,188.368184 1123.84381,188.212175 1123.65116,188.212156 L1122.25581,188.212156 L1122.25581,186.469754 C1122.2558,186.277301 1122.09963,186.121292 1121.90698,186.121273 L1120.86047,186.121273 L1120.86047,168.348768 C1120.86045,168.156315 1120.70428,168.000307 1120.51163,168.000287 L1097.48838,168.000287 C1097.47748,167.999904 1097.46657,167.999904 1097.45567,168.000287 C1097.44478,167.999904 1097.43387,167.999904 1097.42297,168.000287 Z M1097.83722,168.697248 L1120.16279,168.697248 L1120.16279,171.953363 C1120.15908,171.956913 1120.15544,171.960543 1120.15189,171.964253 C1119.87051,172.695744 1119.18513,173.227495 1118.3532,173.227495 C1117.24195,173.227495 1116.32558,172.529048 1116.32558,171.485092 C1116.32289,171.294553 1116.1675,171.141505 1115.97675,171.141505 C1115.78599,171.141505 1115.63061,171.294553 1115.62791,171.485092 C1115.62791,172.563369 1114.89687,173.227495 1113.78561,173.227495 C1112.67436,173.227495 1111.7907,172.535537 1111.7907,171.485092 C1111.788,171.294553 1111.63262,171.141505 1111.44186,171.141505 C1111.25111,171.141505 1111.09572,171.294553 1111.09303,171.485092 C1111.09303,172.568008 1110.37597,173.227495 1109.34884,173.227495 L1108.65117,173.227495 C1107.62404,173.227495 1106.90698,172.568008 1106.90698,171.485092 C1106.90428,171.294553 1106.7489,171.141505 1106.55814,171.141505 C1106.36739,171.141505 1106.212,171.294553 1106.20931,171.485092 C1106.20931,172.535537 1105.32565,173.227495 1104.21439,173.227495 C1103.10314,173.227495 1102.3721,172.563369 1102.3721,171.485092 C1102.37213,171.390754 1102.33389,171.300432 1102.26609,171.234759 C1102.1983,171.169086 1102.10675,171.133673 1102.01236,171.136612 C1101.82398,171.142514 1101.67435,171.296813 1101.67442,171.485092 C1101.67442,172.529048 1100.75806,173.227495 1099.64681,173.227495 C1098.81488,173.227495 1098.1295,172.695744 1097.84812,171.964253 C1097.84502,171.953191 1097.84138,171.942288 1097.83722,171.931583 L1097.83722,168.697248 Z M1102.00146,172.650324 C1102.42645,173.417963 1103.23416,173.924456 1104.21439,173.924456 C1105.18956,173.924456 1106.065,173.433631 1106.53634,172.672104 C1106.63466,172.851709 1106.74897,173.015017 1106.88518,173.162155 C1106.88518,173.165784 1106.88518,173.169415 1106.88518,173.173045 C1106.65482,174.796286 1105.7131,176.103252 1104.47602,177.18057 C1103.23894,178.257888 1101.71787,179.088065 1100.38809,179.717944 C1100.22742,179.792069 1100.14777,179.97462 1100.20277,180.142655 L1102.27399,186.121273 L1097.83722,186.121273 L1097.83722,173.183935 C1098.30593,173.636788 1098.94164,173.924456 1099.64681,173.924456 C1100.63064,173.924456 1101.52342,173.424152 1102.00146,172.650324 Z M1115.99855,172.650324 C1116.47658,173.424152 1117.36936,173.924456 1118.3532,173.924456 C1119.05837,173.924456 1119.69408,173.636788 1120.16279,173.183935 L1120.16279,186.121273 L1115.72602,186.121273 L1117.79724,180.142655 C1117.85224,179.97462 1117.77258,179.792069 1117.61192,179.717944 C1116.28542,179.089619 1114.77033,178.26491 1113.53489,177.19146 C1112.29945,176.118011 1111.35159,174.810796 1111.11483,173.194825 C1111.11145,173.18744 1111.10781,173.180176 1111.10393,173.173045 C1111.10393,173.169415 1111.10393,173.165784 1111.10393,173.162155 C1111.24214,173.013716 1111.3642,172.853814 1111.46367,172.672104 C1111.93501,173.433631 1112.81045,173.924456 1113.78561,173.924456 C1114.76585,173.924456 1115.57355,173.417963 1115.99855,172.650324 Z M1107.50654,173.641315 C1107.84384,173.822233 1108.2321,173.924456 1108.65117,173.924456 L1109.34884,173.924456 C1109.76434,173.924456 1110.14728,173.81935 1110.48256,173.641315 C1110.82698,175.304407 1111.84671,176.645175 1113.07704,177.714181 C1114.30461,178.780791 1115.7457,179.572798 1117.03416,180.197105 L1114.98474,186.121273 L1103.01527,186.121273 L1100.96585,180.197105 C1102.25755,179.57119 1103.70447,178.773919 1104.93387,177.703291 C1106.16044,176.635124 1107.16419,175.300274 1107.50654,173.641315 Z M1096.44187,186.818234 L1121.55814,186.818234 L1121.55814,188.212156 L1096.44187,188.212156 L1096.44187,186.818234 Z M1094.69768,188.909117 L1123.30233,188.909117 L1123.30233,190.303039 L1094.69768,190.303039 L1094.69768,188.909117 Z",
                            id: "mainstage"
                        })
                    })
                })
            }), ft = Object(R.jsx)("svg", {
                viewBox: "0 0 29 25", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: Object(R.jsx)("g", {
                    id: "v15",
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: Object(R.jsx)("g", {
                        id: "23",
                        transform: "translate(-1095.000000, -326.000000)",
                        fill: "currentColor",
                        fillRule: "nonzero",
                        children: Object(R.jsx)("path", {
                            d: "M1121.85618,326 L1097.68952,326 L1095,330.057377 L1095,330.262295 C1095,331.368852 1095.74059,332.311475 1096.79301,332.639344 L1096.79301,351 L1122.09005,351 L1122.09005,332.680328 C1123.18145,332.393443 1124,331.409836 1124,330.262295 L1124,330.098361 L1121.85618,326 Z M1119.47849,331.860656 C1119.8293,332.270492 1120.33602,332.598361 1120.9207,332.721311 L1120.9207,333.991803 L1116.04839,333.991803 L1116.04839,340.139344 L1120.9207,340.139344 L1120.9207,341.901639 L1113.70968,341.901639 C1113.6707,340.057377 1112.61828,338.786885 1110.86425,338.295082 C1111.40995,337.803279 1111.76075,337.065574 1111.76075,336.245902 C1111.76075,334.770492 1110.63038,333.581967 1109.22715,333.581967 C1107.82392,333.581967 1106.69355,334.770492 1106.69355,336.245902 C1106.69355,337.065574 1107.04435,337.803279 1107.59005,338.295082 C1105.83602,338.786885 1104.7836,340.057377 1104.74462,341.901639 L1097.96237,341.901639 L1097.96237,340.139344 L1102.7957,340.139344 L1102.7957,333.991803 L1097.96237,333.991803 L1097.96237,332.721311 C1098.58602,332.639344 1099.13172,332.311475 1099.52151,331.860656 C1099.98925,332.393443 1100.69086,332.762295 1101.47043,332.762295 C1102.25,332.762295 1102.95161,332.393443 1103.41935,331.860656 C1103.8871,332.393443 1104.58871,332.762295 1105.36828,332.762295 C1106.14785,332.762295 1106.84946,332.393443 1107.3172,331.860656 C1107.78495,332.393443 1108.48656,332.762295 1109.26613,332.762295 C1110.0457,332.762295 1110.74731,332.393443 1111.21505,331.860656 C1111.6828,332.393443 1112.38441,332.762295 1113.16398,332.762295 C1113.98253,332.762295 1114.84005,332.393443 1115.42473,331.778689 C1115.89247,332.352459 1116.63306,332.762295 1117.45161,332.762295 C1118.30914,332.762295 1119.01075,332.393443 1119.47849,331.860656 Z M1120.72581,335.221311 L1120.72581,338.909836 L1117.21774,338.909836 L1117.21774,335.221311 L1120.72581,335.221311 Z M1109.22715,337.680328 C1108.48656,337.680328 1107.8629,337.02459 1107.8629,336.245902 C1107.8629,335.467213 1108.48656,334.811475 1109.22715,334.811475 C1109.96774,334.811475 1110.5914,335.467213 1110.5914,336.245902 C1110.5914,337.02459 1109.96774,337.680328 1109.22715,337.680328 Z M1112.54032,341.901639 L1105.91398,341.901639 C1105.99194,339.606557 1108.25269,339.319672 1109.22715,339.319672 C1110.20161,339.319672 1112.46237,339.565574 1112.54032,341.901639 Z M1098.11828,338.909836 L1098.11828,335.221311 L1101.62634,335.221311 L1101.62634,338.909836 L1098.11828,338.909836 Z M1101.58737,327.229508 L1103.73118,327.229508 L1102.83468,330.180328 L1102.83468,330.262295 C1102.83468,330.959016 1102.21102,331.532787 1101.47043,331.532787 C1100.76882,331.532787 1100.18414,331.040984 1100.10618,330.385246 L1101.58737,327.270492 C1101.58737,327.270492 1101.58737,327.270492 1101.58737,327.229508 Z M1107.12231,327.229508 L1106.77151,330.180328 L1106.77151,330.262295 C1106.77151,330.959016 1106.14785,331.532787 1105.40726,331.532787 C1104.66667,331.532787 1104.08199,331 1104.04301,330.344262 L1105.01747,327.229508 L1107.12231,327.229508 Z M1110.35753,327.229508 L1110.66935,330.303279 C1110.66935,331 1110.0457,331.532787 1109.30511,331.532787 C1108.56452,331.532787 1107.94086,331 1107.94086,330.303279 L1108.29167,327.229508 L1110.35753,327.229508 Z M1113.86559,327.229508 L1114.99597,330.303279 C1114.99597,330.344262 1114.99597,330.344262 1114.99597,330.385246 C1114.87903,330.959016 1114.02151,331.532787 1113.24194,331.532787 C1112.50134,331.532787 1111.87769,330.959016 1111.87769,330.262295 C1111.87769,330.221311 1111.87769,330.180328 1111.87769,330.139344 L1111.56586,327.229508 L1113.86559,327.229508 C1113.86559,327.229508 1113.86559,327.229508 1113.86559,327.229508 Z M1117.52957,331.532787 C1116.82796,331.532787 1116.24328,331.040984 1116.16532,330.385246 C1116.16532,330.344262 1116.16532,330.303279 1116.16532,330.262295 L1116.16532,330.139344 L1115.1129,327.229508 L1117.45161,327.229508 L1118.89382,330.385246 C1118.81586,331.040984 1118.23118,331.532787 1117.52957,331.532787 Z M1096.16935,330.42623 L1098.27419,327.229508 L1100.2621,327.229508 L1098.89785,330.139344 L1098.89785,330.303279 C1098.89785,331 1098.27419,331.57377 1097.5336,331.57377 C1096.83199,331.532787 1096.28629,331.040984 1096.16935,330.42623 Z M1097.96237,349.770492 L1097.96237,343.131148 L1120.9207,343.131148 L1120.9207,349.770492 L1097.96237,349.770492 Z M1121.4664,331.532787 C1120.72581,331.532787 1120.10215,330.959016 1120.10215,330.262295 C1120.10215,330.098361 1120.06317,329.97541 1119.94624,329.852459 L1118.7379,327.188525 L1121.15457,327.188525 L1122.83065,330.385246 C1122.75269,331.040984 1122.16801,331.532787 1121.4664,331.532787 Z",
                            id: "tradeshow"
                        })
                    })
                })
            }), gt = ce.b.span.withConfig({
                displayName: "Icons__IconContainerStyles",
                componentId: "sc-1s01ooq-0"
            })(["width:", ";height:", ";color:", ";display:inline-flex;justify-content:center;align-items:center;svg,img{width:100%;}"], (function (e) {
                return e.containerWidth
            }), (function (e) {
                return e.containerHeight
            }), (function (e) {
                return e.containerColor
            }));
        var xt, jt = function (e) {
                var t = e.name, n = e.width, i = void 0 === n ? "18px" : n, a = e.height, r = void 0 === a ? "auto" : a,
                    o = e.color, c = void 0 === o ? "inherit" : o, s = e.style, l = {
                        containerWidth: i,
                        containerHeight: r,
                        containerColor: c,
                        style: void 0 === s ? null : s,
                        className: e.className
                    };
                switch (t) {
                    case"arrow":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: be}));
                    case"arrow-box":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: me}));
                    case"arrow-corner":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: ue}));
                    case"arrow-corner-box":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: he}));
                    case"business-topic":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: fe}));
                    case"calendar":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: we}));
                    case"calendar-add":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: ye}));
                    case"calendar-add-box":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: ke}));
                    case"calendar-remove":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Oe}));
                    case"calendar-remove-dark":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Ce}));
                    case"chat":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Le}));
                    case"chat-phone":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Ne}));
                    case"check":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Ie}));
                    case"check-filled":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Se}));
                    case"check-outline":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: ze}));
                    case"chevron":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: ge}));
                    case"chevron-box":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: xe}));
                    case"circle-outline":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: je}));
                    case"circle":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: ve}));
                    case"close":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Ee}));
                    case"close-box":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Me}));
                    case"diamond":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: _e}));
                    case"edit":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Te}));
                    case"edit-circle":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Re}));
                    case"eye":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Ae}));
                    case"eye-live":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Pe}));
                    case"error":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: De}));
                    case"faq":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Ze}));
                    case"hamburger":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: qe}));
                    case"home":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Ue}));
                    case"info":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: He}));
                    case"instagram":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Be}));
                    case"link":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Fe}));
                    case"lock":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: $e}));
                    case"logout":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Ve}));
                    case"location":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: We}));
                    case"menu":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Ge}));
                    case"minus":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Xe}));
                    case"music":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Qe}));
                    case"person":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Ke}));
                    case"play":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Ye}));
                    case"plus":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: Je}));
                    case"plus-box":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: et}));
                    case"schedule":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: tt}));
                    case"settings":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: nt}));
                    case"share":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: at}));
                    case"social":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: it}));
                    case"society-topic":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: pe}));
                    case"star":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: rt}));
                    case"swag":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: ot}));
                    case"swag-add":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: ct}));
                    case"tech-topic":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: dt}));
                    case"timer":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: pt}));
                    case"twitter":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: mt}));
                    case"video":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: ut}));
                    case"session-room":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: st}));
                    case"social-lounge":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: lt}));
                    case"theatre-room":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: ht}));
                    case"main-stage":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: bt}));
                    case"on-demand-zone":
                        return Object(R.jsx)(gt, Object(m.a)(Object(m.a)({}, l), {}, {children: ft}))
                }
                return null
            }, vt = n(111),
            wt = Object(ce.c)(xt || (xt = Object(vt.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
            yt = Object(ce.b)(se.a.button).withConfig({
                displayName: "styles__InvertedButtonStyles",
                componentId: "sc-1o5eo0o-0"
            })(["font-size:", ";min-height:", ";position:relative;font-weight:600;background:var(--color-white);color:var(--color-primary);padding:", ";border-radius:", ';border:2px solid var(--color-primary);margin:0;cursor:pointer;box-shadow:0 12px 17px 0 rgba(0,0,0,0.09);transition:0.3s;&:hover{color:var(--color-white);background-color:var(--color-primary);box-shadow:none;}&[disabled]{color:#dadada;background:var(--color-primary-tint-2);border-color:var(--color-primary-tint-2);cursor:not-allowed;box-shadow:none;}&.loading{cursor:wait;&:before{content:"";animation:', " 1s linear infinite;position:absolute;top:calc(50% - 9px);left:calc(50% - 9px);width:18px;height:18px;background:0 0;border:4px solid var(--color-white);border-radius:50%;-webkit-clip-path:inset(0 0 50% 50%);clip-path:inset(0 0 50% 0);}}"], (function (e) {
                return e.size.fontSize
            }), (function (e) {
                return e.size.height
            }), (function (e) {
                return e.size.padding
            }), (function (e) {
                return e.size.borderRadius
            }), wt), Ot = Object(ce.b)(se.a.button).withConfig({
                displayName: "styles__BasicButtonStyles",
                componentId: "sc-1o5eo0o-1"
            })(["font-size:", ";min-height:", ";position:relative;font-weight:600;background:", ";color:var(--color-white);padding:", ";border-radius:", ";border:2px solid var(--color-primary);margin:0;cursor:pointer;box-shadow:0 12px 17px 0 rgba(0,0,0,0.09);transition:0.3s;text-align:center;&:visited{color:var(--color-white);}&:hover{color:var(--color-white);background:", ';box-shadow:none;}&[disabled]{color:#b1b1b1;background:#7c7c7c;border-color:#7c7c7c;cursor:not-allowed;box-shadow:none;}&.loading{cursor:wait;&:before{content:"";animation:', " 1s linear infinite;position:absolute;top:calc(50% - 9px);left:calc(50% - 9px);width:18px;height:18px;background:0 0;border:4px solid var(--color-white);border-radius:50%;-webkit-clip-path:inset(0 0 50% 50%);clip-path:inset(0 0 50% 0);}}"], (function (e) {
                return e.size.fontSize
            }), (function (e) {
                return e.size.height
            }), (function (e) {
                return e.isInverted ? "transparent" : "var(--color-primary)"
            }), (function (e) {
                return e.size.padding
            }), (function (e) {
                return e.size.borderRadius
            }), (function (e) {
                return e.isInverted ? "var(--color-primary)" : "transparent"
            }), wt), Ct = (ce.b.a.withConfig({
                displayName: "styles__MediaButtonStyles",
                componentId: "sc-1o5eo0o-2"
            })(["font-size:var(--font-size-medium);position:relative;font-weight:600;color:var(--color-white);margin:0;cursor:pointer;transition:0.3s;display:flex;flex-direction:column;align-items:center;justify-content:center;.media-icon{color:var(--color-primary);transition:0.3s;}.text{}&:hover{color:", ";.media-icon{color:", ';}}&:visited{color:var(--color-white);}&[disabled],&.disabled{color:#979797;cursor:not-allowed;justify-content:center;.media-icon{color:#979797;}}&.loading{cursor:wait;&:before{content:"";animation:', " 1s linear infinite;position:absolute;top:calc(50% - 9px);left:calc(50% - 9px);width:18px;height:18px;background:0 0;border:4px solid var(--color-white);border-radius:50%;-webkit-clip-path:inset(0 0 50% 50%);clip-path:inset(0 0 50% 0);}}"], (function (e) {
                return "outline" === e.theme ? "var(--color-black)" : "var(--color-primary)"
            }), (function (e) {
                return "outline" === e.theme ? "var(--color-black)" : "var(--color-primary)"
            }), wt), Object(ce.b)(se.a.button).withConfig({
                displayName: "styles__CalendarButtonStyles",
                componentId: "sc-1o5eo0o-3"
            })(["position:absolute;right:0;top:calc(50% - 16px);background:", ";width:32px;height:32px;display:flex;justify-content:center;align-items:center;border-radius:50%;box-shadow:0 2px 12px 0 rgba(0,0,0,0.26);color:", ";border:none;cursor:pointer;svg{width:16px;height:16px;}"], (function (e) {
                return e.backgroundColor
            }), (function (e) {
                return e.color
            })), ["onClick", "children", "className", "isLoading", "isDisabled", "inverted", "size"]),
            kt = ["onClick", "to", "href", "children", "className", "isLoading", "isInverted", "isDisabled", "size"],
            Lt = function (e) {
                var t = e.onClick, n = e.children, i = e.className, a = void 0 === i ? "default" : i, r = e.isLoading,
                    o = e.isDisabled, c = e.inverted, s = void 0 !== c && c, l = e.size,
                    d = void 0 === l ? "medium" : l, p = Object(u.a)(e, Ct);
                return Object(R.jsx)(yt, Object(m.a)(Object(m.a)({}, p), {}, {
                    onClick: t,
                    className: "".concat(r ? "loading " : "").concat(a),
                    size: {
                        small: {fontSize: "var(--font-size-medium)", padding: "1rem 5rem", height: "38px"},
                        medium: {fontSize: "var(--font-size-large)", padding: "1.4rem 3.5rem", height: "41px"},
                        large: {fontSize: "var(--font-size-extra-large)", padding: "1.5rem 4rem", height: "58px"}
                    }[d],
                    inverted: s,
                    disabled: o || r,
                    children: !r && n
                }))
            }, Nt = function (e) {
                var t = e.onClick, n = e.to, i = e.href, a = e.children, r = e.className, o = void 0 === r ? "default" : r,
                    c = e.isLoading, s = e.isInverted, l = void 0 !== s && s, d = e.isDisabled, p = e.size,
                    h = void 0 === p ? "medium" : p, b = Object(u.a)(e, kt);
                var f = n ? L.b : i ? "a" : "button";
                return Object(R.jsx)(Ot, Object(m.a)(Object(m.a)({isInverted: l, as: f}, b), {}, {
                    to: n,
                    href: i,
                    onClick: t,
                    className: "".concat(c ? "loading " : "").concat(o),
                    size: {
                        small: {fontSize: "var(--font-size-medium)", padding: "1rem 1.4rem", height: "38px"},
                        medium: {fontSize: "var(--font-size-large)", padding: "1.4rem 1.5rem", height: "41px"},
                        large: {fontSize: "var(--font-size-extra-large)", padding: "1.5rem 4rem", height: "58px"}
                    }[h],
                    disabled: d || c,
                    children: !c && a
                }))
            };
        var It = ce.b.div.withConfig({
                displayName: "styles__GdprOptIn",
                componentId: "sc-1ywsskm-0"
            })(["display:flex;flex-direction:column;.gdpr-description-container{p{font-size:var(--font-size-medium);}a{color:var(--color-white);text-decoration:underline;font-weight:600;}}"]),
            St = (ce.b.div.withConfig({
                displayName: "styles__RadioInputStyles",
                componentId: "sc-1ywsskm-1"
            })(['width:100%;color:var(--color-white);position:relative;cursor:pointer;user-select:none;font-size:var(--font-size-large);font-family:var(--font-body);text-align:center;border:1px solid var(--color-input-border);background:var(--color-input-background);margin:0 0 2rem 0;&:before{content:"";height:100%;width:10px;background:', ";position:absolute;left:0;top:0;}label{color:var(--color-white);cursor:pointer;width:100%;height:100%;display:flex;justify-content:space-between;align-items:center;text-align:left;padding:15px 18px;font-size:12px;}input{display:none;}label img{height:75px;width:75px;}.label-text{margin:0 1rem 0 0;padding:0;line-height:1.4;}.check-container{width:20px;height:20px;border:1px solid #b9b9b9;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;}&.checked{font-weight:bold;.check-container{border:none;}}"], (function (e) {
                return e.labelColor
            })), ce.b.div.withConfig({
                displayName: "styles__CheckboxBasicStyles",
                componentId: "sc-1ywsskm-2"
            })(["width:100%;cursor:pointer;user-select:none;font-size:var(--font-size-large);font-family:var(--font-body);text-align:center;border:1px solid #dadada;background-color:var(--color-white);margin:0 0 2rem 0;label{color:var(--color-gray-1);cursor:pointer;width:100%;height:100%;display:flex;justify-content:start;align-items:center;text-align:left;padding:15px 18px;font-size:12px;}.label-text{margin:0 0 0 1rem;padding:0;line-height:1.4;}input{display:none;}label img{height:75px;width:75px;}.check-container{width:20px;height:20px;border:1px solid #b9b9b9;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:var(--color-brand-purple);}&.checked{font-weight:bold;.check-container{border:none;}}"]), Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__CheckboxStyles",
                componentId: "sc-1ywsskm-3"
            })(["width:100%;cursor:pointer;user-select:none;font-size:var(--font-size-large);font-family:var(--font-body);text-align:center;border:2px solid var(--color-input-border);background-color:var(--color-black);margin:0 0 3rem 0;transition:0.2s;label{}input{display:none;}label img{filter:grayscale(1) brightness(5);}.label-text{font-size:var(--font-size-medium);font-weight:600;color:#979797;}&.checked{font-weight:bold;.check-container{border:none;}}"])),
            zt = (Object(ce.b)(St).withConfig({
                displayName: "styles__ImageCheckboxStyles",
                componentId: "sc-1ywsskm-4"
            })(["width:140px;padding:0;margin:0;position:relative;label{width:100%;height:100%;display:flex;cursor:pointer;padding:1rem 18px;text-align:center;flex-direction:column;align-items:center;justify-content:flex-start;line-height:1.2;span{display:block;margin:0 0 1rem 0;}}.label-text{font-size:var(--font-size-medium);font-weight:600;color:#979797;margin:1rem 0 0 0;}.check-container{position:absolute;right:10px;top:10px;}&.checked{border-color:var(--color-white);img{filter:grayscale(0);}label{font-weight:700;color:#002f44;}}"]), ce.b.div.withConfig({
                displayName: "styles__RegistrationTabStyles",
                componentId: "sc-1ywsskm-5"
            })(["height:48px;width:100%;box-shadow:0 2px 14px 0 rgba(0,0,0,0.21);.reg-tab-menu{width:100%;}.reg-tab-menu-list{width:100%;display:flex;justify-content:space-around;margin:0;padding:0px;list-style:none;}.reg-tab-menu-item{color:#bfbfbf;border:none;background:transparent;cursor:pointer;padding:15px;font-size:14px;margin:0;transition:0.2s;text-align:center;width:50%;}.reg-tab-menu-item.reg-tab-active{border-bottom:5px solid var(--color-primary);color:var(--color-primary);font-weight:600;padding-bottom:12px;text-align:center;width:50%;}"]), ce.b.div.withConfig({
                displayName: "styles__FormSectionStyles",
                componentId: "sc-1ywsskm-6"
            })(["height:100vh;display:flex;justify-content:flex-start;position:relative;padding:6rem 2rem 2rem;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}.switch-form{margin:14px 0 0 0;font-size:12px;position:absolute;display:flex;align-items:center;right:2rem;top:1rem;.change-form-button{border:2px solid var(--color-primary);padding:10px 12px;margin:0 0 0 12.5px;color:var(--color-white);background:transparent;font-weight:700;transition:0.2s;&:hover{background-color:var(--color-primary);color:var(--color-white);}}}@media (max-width:1150px){height:auto;align-items:flex-start;padding:0 2rem 2rem;.switch-form{margin:1.4rem 0 2rem 0;padding:0;font-size:12px;position:unset;display:flex;align-items:center;right:unset;top:unset;.change-form-button{border:none;background:transparent;padding:0;margin:0 0 0 0.5rem;&:hover{color:var(--color-primary);background:transparent;text-decoration:underline;}}}}@media (max-width:960px){flex:1;width:100%;}@media (max-width:800px){padding:6.4rem 0;}@media (max-width:586px){padding:0rem 0;overflow-y:scroll;}"])),
            Et = Object(ce.b)(se.a.form).withConfig({
                displayName: "styles__AuthFormStyles",
                componentId: "sc-1ywsskm-7"
            })(['width:100%;max-width:460px;padding:0;margin:4rem 0 0 0;input[type="hidden"]{display:none;}.title-group{margin:0 0 5rem;}.message-container{}.message{display:flex;align-items:center;border:1px solid var(--color-input-border);background:var(--color-black);padding:0.5rem 1.2rem;span{margin:0 1rem 0 0;}&.success-message{color:var(--color-success);border-color:var(--color-success);background:var(--color-green-tint-1);}&.error-message{color:var(--color-error);border-color:var(--color-error);background:var(--color-error-tint-1);}}.form-title{color:var(--color-white);font-size:var(--font-size-title);font-family:var(--font-body);font-weight:600;margin:0;}.blurb{font-size:var(--font-size-large);}.field-action-button{font-size:var(--font-size-medium);color:var(--color-primary);background:transparent;border:none;font-weight:400;position:absolute;right:0;top:0;transition:0.2s;span{margin:0 0 0 1rem;}}.secondary-field-action-button{font-size:var(--font-size-medium);color:var(--color-primary);background:transparent;border:none;font-weight:400;display:inline-block;margin:0.5rem 0 0 0;text-decoration:underline;}.terms{font-size:10px;color:#5f5f5f;text-align:center;margin:50px 0 0 0;}@media (max-width:568px){padding:0 2rem;.form-title{margin-top:2rem;font-size:36px;line-height:1;}.terms{margin:35px 20px 20px 0;}}']),
            Mt = ce.b.label.withConfig({
                displayName: "styles__FieldLabelStyles",
                componentId: "sc-1ywsskm-8"
            })(["font-size:var(--font-size-medium);color:var(--color-white);display:flex;position:relative;font-weight:400;margin:0;.required-label{height:0;margin:0 0.2rem 0 0;transform:translateY(0);color:var(--color-error);font-size:var(--font-size-extra-large);font-weight:600;}@media only screen and (min-width:320px) and (max-width:480px){font-size:14px;}"]),
            _t = ce.b.div.withConfig({
                displayName: "styles__ValidationContainerStyles",
                componentId: "sc-1ywsskm-9"
            })(['position:relative;width:100%;transition:0.2s;&:after{content:"";width:20px;height:20px;position:absolute;top:33px;right:19px;}&.valid{&:after{background:url("/static/images/form-icons/check.svg") no-repeat center center;}}&.invalid{&:after{background:url("/static/images/form-icons/error.svg") no-repeat center center;}}.error-message{display:inline-block;color:var(--color-error);font-size:10px;width:100%;text-align:left;margin:0.5rem 0 0 0;}@media only screen and (max-width:480px){.error-message{font-size:14px;}}']),
            Tt = ce.b.div.withConfig({
                displayName: "styles__SideBarStyles",
                componentId: "sc-1ywsskm-10"
            })(["color:#818181;width:50%;height:100vh;padding-top:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";position:relative;display:flex;flex-direction:column;align-items:start;justify-content:space-between;background-color:var(--color-primary);background-position:center top;background-image:", ";background-size:cover;flex-shrink:0;.brand-container{display:flex;align-items:center;align-self:flex-start;}.event-name{margin:0 0 0 1rem;color:var(--color-primary);font-weight:500;font-size:var(--font-size-large);}.sidebar-header{width:100%;display:flex;flex-direction:column;align-items:center;align-self:start;.tagline{margin:10px 0 0 0;color:#696969;font-size:11px;font-weight:600;}}.sidebar-content-container{display:flex;flex-direction:column;}.promo-container{width:100%;display:flex;align-items:center;justify-content:center;}.promo-card{width:185px;height:300px;display:flex;flex-direction:column;border:1px solid #474747;background:var(--color-black);&:nth-child(2){margin:0 0 0 2.8rem;}.promo-image-container{img{}}.promo-title{font-size:var(--font-size-large);font-family:var(--font-body);color:var(--color-white);font-weight:600;margin:0 0 0.8rem 0;}.promo-content{display:flex;align-items:flex-start;flex-direction:column;padding:1rem 1.5rem;}.promo-text{font-size:var(--font-size-medium);color:var(--color-white);font-weight:300;}}.sponsor-container{width:100%;display:flex;justify-content:center;align-items:center;margin:3.4rem 0 2.8rem 0;.sponsor-label{font-size:var(--font-size-medium);margin:0 3.5rem 0 0;color:var(--color-white);font-weight:300;}.sponsor-list{display:flex;margin:0;padding:0;list-style:none;.sponsor-item{font-size:var(--font-size-medium);margin:0 2.8rem 0 0;color:var(--color-white);}}}@media (max-width:568px){display:none;}"], (function (e) {
                return e.paddingTopAndBottom || "2rem"
            }), (function (e) {
                return e.paddingTopAndBottom || "2rem"
            }), (function (e) {
                return e.paddingLeftAndRight || "3.5rem"
            }), (function (e) {
                return e.paddingLeftAndRight || "3.5rem"
            }), (function (e) {
                var t = e.backgroundUrl;
                return t ? "url(".concat(t, ")") : "var(--gradient-orange-1)"
            })), Rt = ce.b.input.withConfig({
                displayName: "styles__TextFieldStyles",
                componentId: "sc-1ywsskm-11"
            })(["color:var(--color-white);width:100%;border:1px solid var(--color-input-border);height:43px;padding:10px 15px;font-size:12px;transition:0.2s;background:var(--color-input-background);&.invalid{border-color:var(--color-error);padding-right:45px;}&.valid{border-color:var(--color-success);padding-right:45px;}@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2){font-size:16px;}"]),
            At = (ce.b.textarea.withConfig({
                displayName: "styles__TextAreaStyles",
                componentId: "sc-1ywsskm-12"
            })(["width:100%;height:120px;border:1px solid var(--color-input-border);padding:5px;margin-top:2rem;font-family:var(--font-body);outline:none;resize:none;@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2){font-size:16px;}"]), ce.b.select.withConfig({
                displayName: "styles__SelectFieldStyles",
                componentId: "sc-1ywsskm-13"
            })(["color:var(--color-white);width:100%;border:1px solid var(--color-input-border);height:43px;padding:10px 15px;font-size:12px;cursor:pointer;background:var(--color-input-background);-webkit-appearance:none;&.invalid{border:1px solid var(--color-error);}&.valid{border:1px solid var(--color-success);}option{color:var(--color-white);font-size:14px;}@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2){font-size:16px;&:focus{font-size:16px;}}"])),
            Pt = (ce.b.div.withConfig({
                displayName: "styles__RequiredLabelStyles",
                componentId: "sc-1ywsskm-14"
            })(["display:inline-block;padding:0.1rem 0.8rem;color:var(--color-white);background:#ff2727;font-size:var(--font-size-medium);font-weight:500;border-radius:12px;"]), Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__FieldGroupStyles",
                componentId: "sc-1ywsskm-15"
            })(["margin:0 0 1.5rem 0;&.half{display:flex;justify-content:space-between;& > div:nth-child(1){flex:1;margin:0 0 0 0;}& > div:nth-child(2){margin:0 0 0 2rem;flex:1;}}&.group{display:flex;flex-direction:column;justify-content:stretch;align-content:center;background:transparent;padding:2rem 5rem;flex:1;margin:0;&:nth-child(2){margin:0 0 0 2rem;}}&.radio-group{display:flex;div{margin:0 0 0 2rem;cursor:pointer;&:first-child{margin:0;}label,input{cursor:pointer;}}}&.networking{display:flex;flex-direction:column;}&.interest{}&.subgroup{display:flex;flex-direction:row;justify-content:space-between;}.gdpr-group{display:flex;align-items:flex-start;input{font-size:var(--font-size-small);margin:0.6rem 1rem 0 0;}.hitachi-group-link{color:#ce0000;text-decoration:none;cursor:pointer;}.hitachi-group-company{position:absolute;background:#000;z-index:1;border:2px solid white;padding:1rem;width:70%;.hitachi-close-box{width:100%;text-align:right;padding:0;cursor:pointer;p{padding:0 0.5rem 0;margin:0;display:inline-block;font-size:1.7rem;transform:scale(1.5,1);}}ul{margin-top:-1rem;}}a{text-decoration:none;font-weight:300;}}@media (max-width:568px){&:not(.picture-field){margin:1.2rem 0;}}"])),
            Dt = (Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__ModalContainerStyles",
                componentId: "sc-1ywsskm-16"
            })(["position:fixed;display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;top:0;left:0;z-index:10;background:rgba(0,0,0,0.4);.registration-modal-content{display:flex;position:relative;max-width:650px;flex-direction:column;align-items:center;padding:50px;background:var(--color-white);}.modal-header{color:var(--color-black);font-family:var(--font-display);font-size:42px;margin:0;font-weight:300;}.modal-message{color:var(--color-black);font-size:14px;max-width:450px;margin:40px 0;}.button-group{display:flex;justify-content:space-between;button{font-size:14px;margin:0 20px;}}"]), Object(ce.b)(se.a.a).withConfig({
                displayName: "styles__ModalLinkStyles",
                componentId: "sc-1ywsskm-17"
            })(["height:45px;font-weight:700;background:var(--color-primary);color:#ffffff;border-radius:0.8rem;padding:10px 15px;border:none;font-size:14px;margin:0 20px;cursor:pointer;box-shadow:0 13px 18px 0 rgba(0,0,0,0.2);&:visited{color:#ffffff;}"]), Object(ce.b)(se.a.button).withConfig({
                displayName: "styles__ModalCloseStyles",
                componentId: "sc-1ywsskm-18"
            })(["color:var(--color-black);background:transparent;border:none;width:17px;height:17px;border:none;position:absolute;top:16px;right:19px;padding-top:0;cursor:pointer;z-index:7;svg{width:15px;}"]), ["children"]),
            Zt = ["children", "className"], qt = ["children"], Ut = ["children", "className"],
            Ht = ["children", "className"], Bt = ["required", "children"], Ft = ["children"];

        function $t(e) {
            var t = e.message;
            return Object(R.jsx)("div", {
                className: "message-container",
                children: Object(R.jsx)(E.a, {
                    children: t && Object(R.jsxs)(se.a.p, {
                        layout: !0,
                        className: "message ".concat(t.type, "-message"),
                        children: [Object(R.jsx)(jt, {name: "error" === t.type ? "error" : "check-outline"}), " ", t.text]
                    }, t.text)
                })
            })
        }

        var Vt = Object(ce.b)(Nt).withConfig({
            displayName: "Forms__FormButton",
            componentId: "sc-3ou94x-0"
        })(["width:100%;font-size:13px;&.skipButton{margin-right:20px;background-color:white;color:var(--color-primary);border:2px solid;&.loading:before{border-color:var(--color-primary);}}"]);
        Object(ce.b)(Nt).withConfig({
            displayName: "Forms__FormButtonSkinny",
            componentId: "sc-3ou94x-1"
        })(["margin:1em 40%;align-self:center;font-size:13px;&.skipButton{margin-right:20px;background-color:white;color:var(--color-primary);border:2px solid;&.loading:before{border-color:var(--color-primary);}}"]);
        var Wt = function (e) {
            var t = e.children, n = Object(u.a)(e, Dt);
            return Object(R.jsx)(_t, Object(m.a)(Object(m.a)({}, n), {}, {children: t}))
        }, Gt = Object(i.forwardRef)((function (e, t) {
            var n = e.children, i = e.className, a = Object(u.a)(e, Zt);
            return Object(R.jsx)(zt, Object(m.a)(Object(m.a)({className: i}, a), {}, {ref: t, children: n}))
        })), Xt = Object(i.forwardRef)((function (e, t) {
            return Object(R.jsx)(Rt, Object(m.a)(Object(m.a)({}, e), {}, {ref: t}))
        })), Qt = Object(i.forwardRef)((function (e, t) {
            var n = e.children, i = Object(u.a)(e, qt);
            return Object(R.jsx)(At, Object(m.a)(Object(m.a)({}, i), {}, {ref: t, children: n}))
        }));

        function Kt(e) {
            var t = e.children, n = e.className, i = Object(u.a)(e, Ht);
            return Object(R.jsx)(Pt, Object(m.a)(Object(m.a)({className: n}, i), {}, {children: t}))
        }

        var Yt = Object(i.forwardRef)((function (e, t) {
                var n = e.required, i = void 0 !== n && n, a = e.children, r = Object(u.a)(e, Bt);
                return Object(R.jsxs)(Mt, Object(m.a)(Object(m.a)({required: i}, r), {}, {
                    ref: t,
                    children: [i && Object(R.jsx)("span", {className: "required-label", children: "*"}), a]
                }))
            })), Jt = Object(i.forwardRef)((function (e, t) {
                var n = e.children, i = Object(u.a)(e, Ft);
                return Object(R.jsx)(Et, Object(m.a)(Object(m.a)({}, i), {}, {ref: t, children: n}))
            })), en = Object(ce.b)((function (e) {
                var t = e.children, n = e.className, i = Object(u.a)(e, Ut);
                return Object(R.jsx)(Tt, Object(m.a)(Object(m.a)({className: n}, i), {}, {children: t}))
            })).withConfig({
                displayName: "styles__RegistrationSidebar",
                componentId: "sc-1h51gcw-0"
            })(['display:flex;justify-content:flex-start;background:transparent;.sidebar-content-container{display:flex;flex-direction:column;h2{color:var(--color-white);font-size:var(--font-size-h1);font-weight:700;text-shadow:0px 0px 14px rgba(150,150,150,0.88);}p{color:var(--color-white);font-size:var(--font-size-extra-large);font-weight:500;text-align:center;text-shadow:0px 0px 14px rgba(150,150,150,0.88);}}.cta-container{display:flex;flex-direction:column;justify-content:space-around;margin-top:60px;.re-date{font-style:normal;font-weight:bold;font-size:18px;line-height:26px;color:var(--color-white);margin-top:1rem;}.reg-title{color:var(--color-white);font-style:normal;font-weight:bold;font-size:44px;line-height:48px;max-width:450px;.reg-underline::after{content:"";display:block;width:269px;margin-left:153px;border-bottom:10px solid var(--color-red);margin-top:-13px;}}.reg-description{font-style:normal;font-weight:normal;font-size:16px;line-height:22px;color:var(--color-white);.reg-card-promo{font-style:italic;font-weight:normal;font-size:10px;line-height:19px;color:var(--color-white);margin-top:1rem;padding-bottom:10px;}}.reg-card{background-color:var(--color-white);background-image:url(/static/images/registration/josef-newgarden-hitachi.png);background-repeat:no-repeat;background-position:left -10px top 5px;display:flex;flex-direction:column;min-height:232px;width:550px;margin-top:60px;img{float:left;max-width:129px;}.reg-content-wrapper{display:flex;flex-direction:column;margin-left:205px;margin-top:14px;}.reg-card-callout{font-style:normal;font-weight:bold;font-size:12px;line-height:18px;color:var(--color-red);}.reg-card-title{font-style:normal;font-weight:bold;font-size:18px;line-height:26px;color:var(--color-black);margin-top:0rem;margin-bottom:0rem;}.reg-card-description{font-style:normal;font-weight:normal;font-size:12px;line-height:19px;color:var(--color-black);margin-top:0rem;padding-right:4px;}}}.cta-card{margin:0 0 0 3rem;img{width:175px;height:175px;border:1px solid var(--color-input-border);}h2{color:var(--color-white);font-size:var(--font-size-large);margin:1rem 0;}p{color:var(--color-white);font-size:var(--font-size-extra-large-plus);line-height:var(--font-size-h2);font-weight:700;margin:1rem 0 0;max-width:150px;display:flex;}span{padding-right:10px;}&:first-child{margin:0;}}@media (max-width:1150px){display:none;}']),
            tn = (ce.b.div.withConfig({
                displayName: "styles__RegistrationTabStyles",
                componentId: "sc-1h51gcw-1"
            })(["height:48px;width:100%;box-shadow:0 2px 14px 0 rgba(0,0,0,0.21);.reg-tab-menu{width:100%;}.reg-tab-menu-list{width:100%;display:flex;justify-content:space-around;margin:0;padding:0px;list-style:none;}.reg-tab-menu-item{color:#bfbfbf;border:none;background:transparent;cursor:pointer;padding:15px;font-size:14px;margin:0;transition:0.2s;text-align:center;width:50%;}.reg-tab-menu-item.reg-tab-active{border-bottom:5px solid var(--color-primary);color:var(--color-primary);font-weight:600;padding-bottom:12px;text-align:center;width:50%;}"]), ce.b.select.withConfig({
                displayName: "styles__SelectField",
                componentId: "sc-1h51gcw-2"
            })(["width:100%;border:1px solid #e5e5e5;box-shadow:inset 0 0 9px 0 rgba(0,0,0,0.23);height:45px;padding:10px 15px;font-size:12px;cursor:pointer;&.invalid{border:1px solid #bd0000;}&.valid{border:1px solid #009981;}option{height:45px;font-size:12px;}"]), ce.b.div.withConfig({
                displayName: "styles__RegistrationPageContainer",
                componentId: "sc-1h51gcw-3"
            })(['background-image:url(/static/images/registration/registration-bkg.png);background-repeat:no-repeat;background-size:contain;width:100%;.registration-page-container-inner{display:flex;flex-direction:row;justify-content:center;height:auto;max-width:1280px;overflow:hidden;margin:0 auto;}button[type="submit"]{margin:0 0 5rem 0;}img{width:100%;}&:before{content:" ";width:100%;height:100%;position:absolute;top:0;left:0;background:linear-gradient(66deg,rgba(0,0,0,0.3897934173669467) 0%,rgba(5,28,52,1) 49%);}'])),
            nn = (ce.b.div.withConfig({
                displayName: "styles__RegistrationSteps",
                componentId: "sc-1h51gcw-4"
            })(["color:#818181;width:50%;height:100vh;padding:2rem 3.5rem;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:var(--color-primary);background-position:center bottom;background-image:", ";background-size:cover;@media (max-width:568px){width:100%;height:80vh;overflow-y:scroll;}.brand-container{position:absolute;top:3rem;left:5rem;display:flex;align-items:center;align-self:flex-start;@media (max-width:568px){display:none;}}.event-name{margin:0 0 0 1rem;color:var(--color-primary);font-weight:500;font-size:var(--font-size-large);}"], (function (e) {
                var t = e.backgroundUrl;
                return "url(".concat(t, ")")
            })), ce.b.div.withConfig({
                displayName: "styles__FormSection",
                componentId: "sc-1h51gcw-5"
            })(["background:var(--color-white);display:flex;flex:0 0 40%;@media (max-width:1150px){flex:0 0 100%;}justify-content:flex-start !important;align-items:flex-start;position:relative;padding:6rem 2rem 2rem;overflow-y:auto;@media (max-width:568px){padding:0px 0px 0 15px;height:100%;width:100%;}.switch-form{margin:14px 0 0 0;font-size:12px;position:absolute;display:flex;align-items:center;right:2rem;top:1rem;@media (max-width:568px){margin:30px 0 0 0;font-size:12px;position:unset;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;right:unset;top:unset;padding:10px;}.change-form-button{height:30px;border:1px solid #5f5f5f;padding:5px 25px;margin:0 0 0 12.5px;border-radius:14.5px;color:var(--color-white);background:transparent;font-weight:700;}}"]), Object(ce.b)(se.a.form).withConfig({
                displayName: "styles__AuthForm",
                componentId: "sc-1h51gcw-6"
            })(["width:100%;max-width:400px;padding:10rem 0;border:2px solid white;.title-group{margin:0 0 3rem;}.form-title{color:var(--color-white);font-size:var(--font-size-title);font-family:var(--font-display);font-weight:600;font-size:28px;letter-spacing:0;line-height:34px;margin:0;@media (max-width:568px){margin-top:3rem;font-size:36px;}}.blurb{font-size:var(--font-size-extra-large);}.check-spam{font-size:var(--font-size-medium);font-weight:400;}.field-action-button{font-size:var(--font-size-medium);color:var(--color-secondary);background:transparent;border:none;font-weight:400;position:absolute;right:0;top:0;span{margin:0 0 0 1rem;}}.secondary-field-action-button{font-size:var(--font-size-medium);color:var(--color-secondary);background:transparent;border:none;font-weight:400;display:flex;margin:0.5rem 0 0 0;width:100%;height:30px;}.terms{font-size:10px;color:#5f5f5f;text-align:center;margin:50px 0 0 0;@media (max-width:568px){margin:35px 20px 20px 0;}}label{font-size:var(--font-size-medium);color:#5f5f5f;}"]), ce.b.div.withConfig({
                displayName: "styles__ValidationContainer",
                componentId: "sc-1h51gcw-7"
            })(['position:relative;width:100%;&:after{content:"";width:20px;height:20px;position:absolute;top:34px;right:19px;}&.valid{&:after{background:url("/static/images/form-icons/check.svg") no-repeat center center;}}&.invalid{&:after{background:url("/static/images/form-icons/error.svg") no-repeat center center;}}.error-message{color:#bd0000;font-size:10px;position:absolute;width:100%;right:0;bottom:-20px;text-align:right;}']), ce.b.input.withConfig({
                displayName: "styles__TextField",
                componentId: "sc-1h51gcw-8"
            })(["width:100%;border:1px solid var(--color-input-border);height:45px;padding:10px 15px;font-size:12px;background:var(--color-input-background);&.invalid{border:1px solid #bd0000;}&.valid{border:1px solid #009981;}"]), ce.b.div.withConfig({
                displayName: "styles__FieldGroup",
                componentId: "sc-1h51gcw-9"
            })(["margin:0 0 32px 0;&.half{display:flex;justify-content:space-between;& > div:nth-child(1){margin:0 1rem 0 0;}& > div:nth-child(2){margin:0 0 0 1rem;}}&.group{display:flex;flex-direction:column;justify-content:space-between;align-content:center;}&.networking{display:flex;flex-direction:column;}&.interest{}&.subgroup{display:flex;flex-direction:row;justify-content:space-between;}@media (max-width:568px){margin:0 20px 32px 0;}"]), Object(ce.b)(Nt).withConfig({
                displayName: "styles__FormButton",
                componentId: "sc-1h51gcw-10"
            })(["width:100%;@media (max-width:568px){width:95%;}font-size:13px;&.skipButton{margin-right:20px;background-color:white;color:var(--color-primary);border:2px solid;&.loading::before{border-color:var(--color-primary);}}"]), Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__RegistrationCompleteStyles",
                componentId: "sc-1h51gcw-11"
            })(["background-color:#000D1B;width:100%;height:100%;padding:1rem 3rem;display:flex;align-items:center;justify-content:center;.reward-step-container{display:flex;flex-direction:column;}.page-title{color:var(--color-white);font-style:normal;font-weight:bold;font-size:38px;line-height:42px;text-align:center;}.page-call-out{font-style:normal;font-weight:normal;font-size:16px;line-height:22px;text-align:center;color:var(--color-white);}.page-description{font-family:var(--font-body);color:var(--color-white);font-size:15px;max-width:320px;}.hero-container{width:100%;display:flex;justify-content:center;align-items:center;background:transparent;margin:0 0 3rem 0;}.points-cta{font-size:1.8rem;margin:2rem 0 1rem 0;}.hero-content{max-width:446px;display:flex;flex-direction:column;padding:3rem 0 3rem 4rem;}.cta-content{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0 0 0 4rem;max-width:640px;.controls-container{width:100%;display:flex;justify-content:center;align-items:center;margin:2rem 0 0 0;> *{flex:1;white-space:nowrap;}> *:not(:first-child){margin:0 0 0 1.5rem;}.cta-button{width:100%;max-width:300px;}}@media (max-width:800px){margin:0;}}.cta-avatar{display:flex;justify-content:center;align-items:center;width:265px;height:265px;border:2px solid var(--color-primary);border-radius:100%;flex-shrink:0;.cta-button{}.avatar-image{border-radius:100%;width:212px;height:212px;margin:0;padding:0;}}.speakers-container{width:100%;display:flex;justify-content:center;align-items:center;margin:10rem 0 0 0;flex-direction:row;flex-wrap:wrap;.speakers-title{font-style:normal;font-weight:bold;font-size:26px;line-height:32px;color:var(--color-white);}.title,.company{font-weight:normal;font-size:12px;line-height:15px;text-align:center;color:var(--color-white);}.speaker{display:flex;flex-direction:column;width:200px;height:248px;position:relative;align-items:center;&:not(:last-child){margin:0 1rem 0 0;}}.speaker-image-container-mark{width:150px;height:200px;background-image:url('/static/images/registration/mark-ablett.jpeg');background-size:cover;display:block;border-radius:100px;}.speaker-image-container-radhika{width:150px;height:150px;background-image:url('/static/images/registration/radhika.jpeg');background-size:cover;display:block;border-radius:100px;}.speaker-image-container-colin{width:150px;height:150px;background-image:url('/static/images/registration/colin.jpeg');background-size:cover;display:block;border-radius:100px;}.speaker-image-container-kimberly{width:150px;height:200px;background-image:url('/static/images/registration/kimberly-king.jpeg');background-size:cover;display:block;border-radius:100px;}.speaker-info{width:100%;display:flex;flex-direction:column;align-items:center;}.speaker-name{font-style:normal;font-weight:bold;font-size:14px;line-height:18px;text-align:center;color:var(--color-white);}}@media (max-width:800px){height:unset;padding:5rem 2rem;.speakers-container{flex-direction:column;flex-wrap:nowrap;.speaker:not(:last-child){margin:4rem 0;}}}"])),
            an = Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__ModalContainer",
                componentId: "sc-1h51gcw-12"
            })(["position:fixed;display:flex;align-items:flex-start;justify-content:center;width:100vw;height:100vh;top:0;left:0;z-index:1000;background:rgba(0,0,0,0.4);.registration-modal-content{color:var(--color-black);display:flex;position:relative;max-width:650px;flex-direction:column;align-items:center;padding:2rem;transform:translateY(20%);background:var(--color-white);}.modal-header{font-family:var(--font-display);font-size:28px;margin:0;font-weight:300;}.modal-message{font-size:14px;max-width:350px;margin:4rem 0;}.button-group{display:flex;justify-content:space-between;button{font-size:14px;margin:0 1.4rem;}}"]),
            rn = Object(ce.b)(se.a.a).withConfig({
                displayName: "styles__ModalLinkStyles",
                componentId: "sc-1h51gcw-13"
            })(["font-weight:700;text-align:center;background:var(--color-primary);color:#ffffff;padding:1rem 1.2rem;border:none;font-size:14px;margin:0 20px;cursor:pointer;box-shadow:0 13px 18px 0 rgba(0,0,0,0.2);&:visited{color:#ffffff;}"]),
            on = Object(ce.b)(se.a.button).withConfig({
                displayName: "styles__ModalClose",
                componentId: "sc-1h51gcw-14"
            })(["color:var(--color-black);background:transparent;border:none;width:28px;height:17px;border:none;position:absolute;top:16px;right:30px;padding-top:0;cursor:pointer;z-index:7;svg{width:15px;}"]),
            cn = (Object(ce.b)(se.a.img).withConfig({
                displayName: "styles__ProfilePhoto",
                componentId: "sc-1h51gcw-15"
            })(["border-radius:50%;width:250px;height:250px;object-fit:cover;background:var(--color-black);"]), n(90)),
            sn = ["children"];
        var ln = Object(i.forwardRef)((function (e, t) {
            var n = e.children, i = Object(u.a)(e, sn);
            return Object(R.jsx)(rn, Object(m.a)(Object(m.a)({ref: t}, i), {}, {children: n}))
        })), dn = function (e) {
            var t = e.children, n = e.closeModal, i = void 0 === n ? function () {
            } : n;
            return Object(R.jsx)(an, {
                initial: {opacity: 0},
                animate: {opacity: 1},
                exit: {opacity: 0},
                transition: {duration: .2},
                children: Object(R.jsxs)("div", {
                    className: "registration-modal-content",
                    children: [Object(R.jsx)(on, {
                        whileHover: {scale: 1.2},
                        onClick: i,
                        children: Object(R.jsx)(jt, {name: "close"})
                    }), t]
                })
            }, "registration-modal")
        }, pn = {enter: {opacity: 1}, exit: {opacity: 0}};
        var mn = function () {
            var e = Object(i.useState)(null), t = Object(z.a)(e, 2), n = t[0], a = t[1], r = Object(i.useState)(!1),
                o = Object(z.a)(r, 2), c = o[0], s = o[1], l = Object(i.useState)(!1), m = Object(z.a)(l, 2), u = m[0],
                b = m[1], f = Object(i.useState)(!1), g = Object(z.a)(f, 2), x = g[0], j = g[1],
                w = u ? "Hide" : "Show", y = Object(i.useState)(null), O = Object(z.a)(y, 2), C = O[0], k = O[1],
                N = Object(h.h)().state, I = null === N || void 0 === N ? void 0 : N.email,
                S = null === N || void 0 === N ? void 0 : N.message, M = ie(), _ = M.signIn, T = M.refetchSession,
                A = new URLSearchParams(Object(h.h)().search), P = Object(cn.a)({mode: "all"}), D = P.register,
                Z = P.handleSubmit, q = P.errors, U = P.formState, H = P.setError, B = P.getValues, F = P.clearErrors,
                $ = P.setValue;

            function V() {
                return V = Object(p.a)(d.a.mark((function e(t) {
                    var n, i, a, r, o, c;
                    return d.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.password, i = t.email, a = decodeURIComponent(i.toLowerCase()), s(!0), e.prev = 3, e.next = 6, _({
                                    password: n,
                                    username: a
                                });
                            case 6:
                                return r = e.sent, s(!1), e.next = 10, T();
                            case 10:
                                return e.abrupt("return", r);
                            case 13:
                                e.prev = 13, e.t0 = e.catch(3), o = e.t0.code, c = e.t0.message, s(!1), k("UserNotConfirmedException" === o ? "Look for the verification email in your inbox and click the link in that email" : "The email and password combination entered was incorrect. Try again, reset your password, or register if you need an account."), H("email", {
                                    type: "",
                                    message: c
                                }), H("password", {type: "", message: c}), j(!0);
                            case 21:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[3, 13]])
                }))), V.apply(this, arguments)
            }

            function W(e) {
                return q[e] || q[e] && U.isSubmitted ? "invalid" : !q[e] && U.dirtyFields[e] ? "valid" : null
            }

            function G() {
                j(!1), F(), $("password", "", {shouldValidate: !0, shouldDirty: !0})
            }

            return Object(i.useEffect)((function () {
                S && a(S)
            }), [S]), Object(i.useEffect)((function () {
                I && $("email", I, {shouldDirty: !0, shouldValidate: !0})
            }), [I, $]), Object(R.jsxs)(Jt, {
                variants: pn,
                initial: "exit",
                animate: "enter",
                exit: "exit",
                onSubmit: Z((function (e) {
                    return V.apply(this, arguments)
                })),
                children: [Object(R.jsx)(E.a, {
                    children: x && Object(R.jsxs)(dn, {
                        closeModal: G,
                        children: [Object(R.jsx)("h2", {
                            className: "modal-header",
                            children: "Uh Oh!"
                        }), Object(R.jsx)("p", {
                            className: "modal-message",
                            children: C
                        }), Object(R.jsxs)("div", {
                            className: "button-group",
                            children: [Object(R.jsx)(L.b, {
                                whileHover: {scale: 1.1},
                                component: ln,
                                onClick: function () {
                                    G()
                                },
                                children: "Try again"
                            }), Object(R.jsx)(L.b, {
                                whileHover: {scale: 1.1},
                                component: ln,
                                to: "/go/storage-acceleration/en/registration?ecid=".concat(A.get("ecid"), "&utmMedium=").concat(A.get("utmMedium"), "&utmSource=").concat(A.get("utmSource"), "&utmCampaign").concat(A.get("utmCampaign"), "&utmContent=").concat(A.get("utmContent")),
                                children: "Register"
                            })]
                        })]
                    })
                }), Object(R.jsxs)("div", {
                    className: "title-group",
                    children: [Object(R.jsxs)("span", {
                        className: "switch-form",
                        children: ["Don't have an account?", Object(R.jsx)(L.b, {
                            to: "/go/storage-acceleration/en/registration?ecid=".concat(A.get("ecid"), "&utmMedium=").concat(A.get("utmMedium"), "&utmSource=").concat(A.get("utmSource"), "&utmCampaign").concat(A.get("utmCampaign"), "&utmContent=").concat(A.get("utmContent")),
                            className: "change-form-button",
                            children: "Register"
                        })]
                    }), Object(R.jsx)("h1", {
                        className: "form-title",
                        children: "Sign into the Hitachi Event"
                    }), Object(R.jsx)($t, {message: n})]
                }), Object(R.jsxs)("div", {
                    className: "input_files_",
                    children: [Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: W("email"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                htmlFor: "email",
                                children: "Email"
                            }), Object(R.jsx)(Xt, {
                                required: !0,
                                type: "email",
                                name: "email",
                                id: "email",
                                ref: D({required: "Please enter a valid email.", pattern: v}),
                                className: W("email")
                            }), q.email && Object(R.jsx)("span", {
                                className: "error-message",
                                children: "Please enter a valid email."
                            })]
                        })
                    }), Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: W("password"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                htmlFor: "password",
                                children: "Password"
                            }), Object(R.jsxs)("button", {
                                onClick: function () {
                                    b(!u)
                                },
                                className: "field-action-button",
                                type: "button",
                                children: [w, Object(R.jsx)(jt, {name: "eye", width: "14px"})]
                            }), Object(R.jsx)(Xt, {
                                required: !0,
                                type: u ? "text" : "password",
                                name: "password",
                                id: "password",
                                ref: D({required: !0}),
                                className: W("password")
                            }), q.password && Object(R.jsx)("span", {
                                className: "error-message",
                                children: q.password.message
                            }), Object(R.jsx)(L.b, {
                                className: "secondary-field-action-button", to: function (e) {
                                    var t = B("email");
                                    return {
                                        pathname: "/go/storage-acceleration/en/registration/forgot-password?ecid=".concat(A.get("ecid"), "&utmMedium=").concat(A.get("utmMedium"), "&utmSource=").concat(A.get("utmSource"), "&utmCampaign").concat(A.get("utmCampaign"), "&utmContent=").concat(A.get("utmContent")),
                                        state: {email: null !== t && void 0 !== t ? t : null}
                                    }
                                }, children: "Forgot Password? Create new password"
                            })]
                        })
                    }), Object(R.jsx)(Vt, {isDisabled: !U.isValid, isLoading: c, type: "submit", children: "Sign in"})]
                })]
            })
        }, un = {enter: {opacity: 1}, exit: {opacity: 0}};
        var hn = function () {
            var e = Object(i.useState)(!1), t = Object(z.a)(e, 2), n = t[0], a = t[1], r = Object(i.useState)(),
                o = Object(z.a)(r, 2), c = o[0], s = o[1], l = Object(i.useState)(null), d = Object(z.a)(l, 2),
                p = d[0], m = d[1], u = Object(h.h)().state, b = new URLSearchParams(Object(h.h)().search),
                f = Object(cn.a)({mode: "all"}), g = f.register, x = f.handleSubmit, j = f.errors, w = f.formState,
                y = f.setValue;

            function O(e) {
                return j[e] || j[e] && w.isSubmitted ? "invalid" : !j[e] && w.dirtyFields[e] ? "valid" : null
            }

            return Object(i.useEffect)((function () {
                var e = null === u || void 0 === u ? void 0 : u.email;
                e && y("email", e, {shouldDirty: !0, shouldValidate: !0})
            }), []), Object(R.jsxs)(Jt, {
                variants: un,
                initial: "exit",
                animate: "enter",
                exit: "exit",
                onSubmit: x((function (e) {
                    e.email, function (e) {
                        $(e).then((function (e) {
                            m({type: "success", text: "A link to reset your password has been sent to your email."})
                        })).catch((function (t) {
                            s(t.message);
                            var n = t.code;
                            a(!1), "InvalidParameterException" === n && (!function (e) {
                                F.apply(this, arguments)
                            }(e), m({
                                type: "error",
                                text: "Your email needs to be confirmed. We sent you a new email confirmation link."
                            }))
                        }))
                    }(decodeURIComponent(e.email.toLowerCase()))
                })),
                children: [Object(R.jsxs)("div", {
                    className: "title-group",
                    children: [Object(R.jsx)("h1", {
                        className: "form-title",
                        children: "Reset Password"
                    }), Object(R.jsxs)("span", {
                        className: "switch-form",
                        children: ["Don't have an account?", Object(R.jsx)(L.b, {
                            to: "/go/storage-acceleration/en/registration?ecid=".concat(b.get("ecid"), "&utmMedium=").concat(b.get("utmMedium"), "&utmSource=").concat(b.get("utmSource"), "&utmCampaign").concat(b.get("utmCampaign"), "&utmContent=").concat(b.get("utmContent")),
                            className: "change-form-button",
                            children: "Get Started"
                        })]
                    }), Object(R.jsx)("p", {
                        className: "blurb",
                        children: "We'll reset your password and send a confirmation link to the email bellow."
                    }), Object(R.jsx)("div", {
                        className: "message-container",
                        children: Object(R.jsx)($t, {message: p})
                    })]
                }), Object(R.jsx)(Kt, {
                    children: Object(R.jsxs)(Wt, {
                        className: O("email"),
                        children: [Object(R.jsx)(Yt, {
                            required: !0,
                            htmlFor: "email",
                            children: "Email"
                        }), Object(R.jsx)(Xt, {
                            type: "email",
                            name: "email",
                            id: "email",
                            ref: g({required: "Please enter a valid email.", pattern: v}),
                            className: O("email")
                        }), j.email && Object(R.jsx)("span", {
                            className: "error-message",
                            children: j.email.message
                        }), c && Object(R.jsx)("span", {className: "error-message", children: c})]
                    })
                }), Object(R.jsx)(Vt, {isLoading: n, isDisabled: !w.isValid, type: "submit", children: "Reset"})]
            })
        }, bn = {enter: {opacity: 1}, exit: {opacity: 0}};
        var fn = function () {
                var e = Object(i.useState)(!1), t = Object(z.a)(e, 2), n = t[0], a = t[1],
                    r = Object(i.useState)({type: "success", text: "Your password was reset. Choose a new one."}),
                    o = Object(z.a)(r, 2), c = o[0], s = o[1], l = Object(h.g)(), d = b(), p = d.get("email"),
                    m = d.get("code"), u = Object(cn.a)({mode: "all"}), f = u.register, g = u.handleSubmit, x = u.errors,
                    j = u.formState;

                function v(e) {
                    return x[e] || x[e] && j.isSubmitted ? "invalid" : !x[e] && j.dirtyFields[e] ? "valid" : null
                }

                return Object(R.jsxs)(Jt, {
                    variants: bn,
                    initial: "exit",
                    animate: "enter",
                    exit: "exit",
                    onSubmit: g((function (e) {
                        a(!0);
                        var t = e.password, n = decodeURIComponent(p.toLowerCase());
                        (function (e) {
                            return W.apply(this, arguments)
                        })({code: m, username: n, password: t}).then((function (e) {
                            a(!1), l.push({
                                pathname: "/go/storage-acceleration/en/registration/login",
                                state: {formattedEmail: n, message: {type: "success", text: "Your password was updated."}}
                            })
                        })).catch((function (e) {
                            a(!1), s({type: "error", text: e.message})
                        }))
                    })),
                    children: [Object(R.jsxs)("div", {
                        className: "title-group",
                        children: [Object(R.jsx)("h1", {
                            className: "form-title",
                            children: "Reset Password"
                        }), Object(R.jsxs)("span", {
                            className: "switch-form",
                            children: ["Don't have an account?", Object(R.jsx)(L.b, {
                                to: "/go/storage-acceleration/en/registration",
                                className: "change-form-button",
                                children: "Get started"
                            })]
                        }), Object(R.jsx)("p", {
                            className: "blurb",
                            children: "Choose a new password."
                        }), Object(R.jsx)($t, {message: c})]
                    }), Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: v("password"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                htmlFor: "password",
                                children: "Password"
                            }), Object(R.jsx)("button", {
                                onClick: function () {
                                    $(p).then((function (e) {
                                    })).catch((function (e) {
                                    })), s({type: "success", text: "A new verification email was sent to ".concat(p)})
                                }, className: "field-action-button", type: "button", children: "Resend verification email"
                            }), Object(R.jsx)(Xt, {
                                required: !0,
                                type: "password",
                                name: "password",
                                id: "password",
                                ref: f({required: !0, minLength: 8}),
                                className: v("password")
                            }), x.password && "required" === x.password.type && Object(R.jsx)("span", {
                                className: "error-message",
                                children: "Please enter a password"
                            }), x.password && "minLength" === x.password.type && Object(R.jsx)("span", {
                                className: "error-message",
                                children: "Must be at least 8 characters"
                            })]
                        })
                    }), Object(R.jsx)(Vt, {isLoading: n, isDisabled: !j.isValid, type: "submit", children: "Confirm"})]
                })
            },
            gn = ["@gmail.", "@yahoo.", "@hotmail.", "@live.", "@aol.", "@outlook.", "@0-mail.com", "@0815.ru", "@0815.su", "@0clickemail.com", "@0wnd.net", "@0wnd.org", "@10minutemail.com", "@10minutemail.de", "@123-m.com", "@1chuan.com", "@1pad.de", "@1zhuan.com", "@20mail.it", "@20minutemail.com", "@21cn.com", "@2prong.com", "@30minutemail.com", "@33mail.com", "@3d-painting.com", "@4warding.com", "@4warding.net", "@4warding.org", "@60minutemail.com", "@675hosting.com", "@675hosting.net", "@675hosting.org", "@6ip.us", "@6paq.com", "@6url.com", "@75hosting.com", "@75hosting.net", "@75hosting.org", "@7days-printing.com", "@7tags.com", "@99experts.com", "@9ox.net", "@a-bc.net", "@a45.in", "@acentri.com", "@advantimo.com", "@afrobacon.com", "@ag.us.to", "@agedmail.com", "@ahk.jp", "@ajaxapp.net", "@alivance.com", "@amail.com", "@amilegit.com", "@amiri.net", "@amiriindustries.com", "@anappthat.com", "@ano-mail.net", "@anonbox.net", "@anonymail.dk", "@anonymbox.com", "@antichef.com", "@antichef.net", "@antispam.de", "@appixie.com", "@armyspy.com", "@aver.com", "@azmeil.tk", "@baxomale.ht.cx", "@beddly.com", "@beefmilk.com", "@bigprofessor.so", "@bigstring.com", "@binkmail.com", "@bio-muesli.net", "@blogmyway.org", "@bobmail.info", "@bodhi.lawlita.com", "@bofthew.com", "@bootybay.de", "@boun.cr", "@bouncr.com", "@boxformail.in", "@brefmail.com", "@brennendesreich.de", "@broadbandninja.com", "@bsnow.net", "@bu.mintemail.com", "@buffemail.com", "@bugmenot.com", "@bumpymail.com", "@bund.us", "@bundes-li.ga", "@burnthespam.info", "@burstmail.info", "@buyusedlibrarybooks.org", "@c2.hu", "@cachedot.net", "@casualdx.com", "@cbair.com", "@cellurl.com", "@centermail.com", "@centermail.net", "@chammy.info", "@cheatmail.de", "@chogmail.com", "@choicemail1.com", "@chong-mail.com", "@chong-mail.net", "@chong-mail.org", "@clixser.com", "@cmail.com", "@cmail.net", "@cmail.org", "@coldemail.info", "@consumerriot.com", "@cool.fr.nf", "@correo.blogos.net", "@cosmorph.com", "@courriel.fr.nf", "@courrieltemporaire.com", "@crapmail.org", "@crazymailing.com", "@cubiclink.com", "@curryworld.de", "@cust.in", "@cuvox.de", "@dacoolest.com", "@daintly.com", "@dandikmail.com", "@dayrep.com", "@dbunker.com", "@dcemail.com", "@deadaddress.com", "@deadspam.com", "@deagot.com", "@dealja.com", "@despam.it", "@despammed.com", "@devnullmail.com", "@dfgh.net", "@digitalsanctuary.com", "@dingbone.com", "@discard.email", "@discardmail.com", "@discardmail.de", "@disposableaddress.com", "@disposableemailaddresses.com", "@disposableemailaddresses.emailmiser.com", "@disposableinbox.com", "@dispose.it", "@disposeamail.com", "@disposemail.com", "@dispostable.com", "@dm.w3internet.co.uk", "@dodgeit.com", "@dodgit.com", "@dodgit.org", "@doiea.com", "@domozmail.com", "@donemail.ru", "@dontreg.com", "@dontsendmespam.de", "@dotmsg.com", "@drdrb.com", "@drdrb.net", "@droplar.com", "@duam.net", "@dudmail.com", "@dump-email.info", "@dumpandjunk.com", "@dumpmail.de", "@dumpyemail.com", "@duskmail.com", "@e-mail.com", "@e-mail.org", "@e4ward.com", "@easytrashmail.com", "@einrot.com", "@einrot.de", "@email60.com", "@emaildienst.de", "@emailgo.de", "@emailias.com", "@emailigo.de", "@emailinfive.com", "@emaillime.com", "@emailmiser.com", "@emailproxsy.com", "@emailsensei.com", "@emailtemporar.ro", "@emailtemporario.com.br", "@emailthe.net", "@emailtmp.com", "@emailto.de", "@emailwarden.com", "@emailx.at.hm", "@emailxfer.com", "@emeil.in", "@emeil.ir", "@emil.com", "@emz.net", "@enterto.com", "@ephemail.net", "@etranquil.com", "@etranquil.net", "@etranquil.org", "@evopo.com", "@explodemail.com", "@eyepaste.com", "@fakeinbox.com", "@fakeinformation.com", "@fakemail.fr", "@fakemailz.com", "@fammix.com", "@fansworldwide.de", "@fantasymail.de", "@fastacura.com", "@fastchevy.com", "@fastchrysler.com", "@fastkawasaki.com", "@fastmazda.com", "@fastmitsubishi.com", "@fastnissan.com", "@fastsubaru.com", "@fastsuzuki.com", "@fasttoyota.com", "@fastyamaha.com", "@fatflap.com", "@fdfdsfds.com", "@fightallspam.com", "@filzmail.com", "@fixmail.tk", "@fizmail.com", "@fleckens.hu", "@flyspam.com", "@footard.com", "@forgetmail.com", "@fr33mail.info", "@frapmail.com", "@freundin.ru", "@friendlymail.co.uk", "@front14.org", "@fuckingduh.com", "@fudgerub.com", "@fux0ringduh.com", "@garliclife.com", "@gelitik.in", "@get1mail.com", "@get2mail.fr", "@getairmail.com", "@getmails.eu", "@getonemail.com", "@getonemail.net", "@ghosttexter.de", "@girlsundertheinfluence.com", "@gishpuppy.com", "@goemailgo.com", "@gorillaswithdirtyarmpits.com", "@gotmail.com", "@gotmail.net", "@gotmail.org", "@gotti.otherinbox.com", "@gowikibooks.com", "@gowikicampus.com", "@gowikicars.com", "@gowikifilms.com", "@gowikigames.com", "@gowikimusic.com", "@gowikinetwork.com", "@gowikitravel.com", "@gowikitv.com", "@grandmamail.com", "@grandmasmail.com", "@great-host.in", "@greensloth.com", "@grr.la", "@gsrv.co.uk", "@guerillamail.biz", "@guerillamail.com", "@guerillamail.net", "@guerillamail.org", "@guerrillamail.biz", "@guerrillamail.com", "@guerrillamail.de", "@guerrillamail.net", "@guerrillamail.org", "@guerrillamailblock.com", "@gustr.com", "@h.mintemail.com", "@h8s.org", "@hacccc.com", "@haltospam.com", "@harakirimail.com", "@hartbot.de", "@hatespam.org", "@hellodream.mobi", "@herp.in", "@hidemail.de", "@hidzz.com", "@hochsitze.com", "@hopemail.biz", "@hotpop.com", "@hulapla.de", "@ieatspam.eu", "@ieatspam.info", "@ieh-mail.de", "@ihateyoualot.info", "@iheartspam.org", "@imails.info", "@imgof.com", "@imstations.com", "@inbax.tk", "@inbox.si", "@inboxalias.com", "@inboxclean.com", "@inboxclean.org", "@inboxproxy.com", "@incognitomail.com", "@incognitomail.net", "@incognitomail.org", "@insorg-mail.info", "@instant-mail.de", "@ipoo.org", "@irish2me.com", "@iwi.net", "@jetable.com", "@jetable.fr.nf", "@jetable.net", "@jetable.org", "@jnxjn.com", "@jourrapide.com", "@jsrsolutions.com", "@junk1e.com", "@kasmail.com", "@kaspop.com", "@keepmymail.com", "@killmail.com", "@killmail.net", "@kimsdisk.com", "@kingsq.ga", "@kir.ch.tc", "@klassmaster.com", "@klassmaster.net", "@klzlk.com", "@kook.ml", "@koszmail.pl", "@kulturbetrieb.info", "@kurzepost.de", "@l33r.eu", "@lackmail.net", "@lags.us", "@lazyinbox.com", "@letthemeatspam.com", "@lhsdv.com", "@lifebyfood.com", "@link2mail.net", "@litedrop.com", "@loadby.us", "@login-email.ml", "@lol.ovpn.to", "@lookugly.com", "@lopl.co.cc", "@lortemail.dk", "@lovemeleaveme.com", "@lr78.com", "@lroid.com", "@m4ilweb.info", "@maboard.com", "@mail-filter.com", "@mail-temporaire.fr", "@mail.by", "@mail.mezimages.net", "@mail114.net", "@mail2rss.org", "@mail333.com", "@mail4trash.com", "@mailbidon.com", "@mailblocks.com", "@mailbucket.org", "@mailcat.biz", "@mailcatch.com", "@maildrop.cc", "@maildx.com", "@maileater.com", "@mailexpire.com", "@mailfa.tk", "@mailforspam.com", "@mailfreeonline.com", "@mailfs.com", "@mailguard.me", "@mailimate.com", "@mailin8r.com", "@mailinater.com", "@mailinator.com", "@mailinator.net", "@mailinator.org", "@mailinator.us", "@mailinator2.com", "@mailincubator.com", "@mailismagic.com", "@mailmate.com", "@mailme.ir", "@mailme.lv", "@mailmetrash.com", "@mailmoat.com", "@mailnator.com", "@mailnesia.com", "@mailnull.com", "@mailpick.biz", "@mailproxsy.com", "@mailquack.com", "@mailrock.biz", "@mailscrap.com", "@mailshell.com", "@mailsiphon.com", "@mailslapping.com", "@mailslite.com", "@mailtemp.info", "@mailtothis.com", "@mailzilla.com", "@mailzilla.org", "@mailzilla.orgmbx.cc", "@makemetheking.com", "@manifestgenerator.com", "@manybrain.com", "@mbx.cc", "@mega.zik.dj", "@meinspamschutz.de", "@meltmail.com", "@messagebeamer.de", "@mezimages.net", "@mfsa.ru", "@mierdamail.com", "@migumail.com", "@mintemail.com", "@mjukglass.nu", "@moakt.com", "@mobi.web.id", "@mobileninja.co.uk", "@moburl.com", "@moncourrier.fr.nf", "@monemail.fr.nf", "@monmail.fr.nf", "@monumentmail.com", "@msa.minsmail.com", "@mt2009.com", "@mt2014.com", "@mx0.wwwnew.eu", "@my10minutemail.com", "@mycleaninbox.net", "@myemailboxy.com", "@mymail-in.net", "@mymailoasis.com", "@mynetstore.de", "@mypacks.net", "@mypartyclip.de", "@myphantomemail.com", "@myspaceinc.com", "@myspaceinc.net", "@myspaceinc.org", "@myspacepimpedup.com", "@myspamless.com", "@mytemp.email", "@mytempemail.com", "@mytrashmail.com", "@neomailbox.com", "@nepwk.com", "@nervmich.net", "@nervtmich.net", "@netmails.com", "@netmails.net", "@netzidiot.de", "@neverbox.com", "@nice-4u.com", "@no-spam.ws", "@nobulk.com", "@noclickemail.com", "@nogmailspam.info", "@nomail.xl.cx", "@nomail2me.com", "@nomorespamemails.com", "@nonspam.eu", "@nonspammer.de", "@noref.in", "@nospam.ze.tc", "@nospam4.us", "@nospamfor.us", "@nospamthanks.info", "@notmailinator.com", "@notsharingmy.info", "@nowhere.org", "@nowmymail.com", "@nurfuerspam.de", "@nus.edu.sg", "@nwldx.com", "@objectmail.com", "@obobbo.com", "@odaymail.com", "@one-time.email", "@oneoffemail.com", "@oneoffmail.com", "@onewaymail.com", "@online.ms", "@oopi.org", "@opayq.com", "@ordinaryamerican.net", "@otherinbox.com", "@ourklips.com", "@outlawspam.com", "@ovpn.to", "@owlpic.com", "@pancakemail.com", "@paplease.com", "@pcusers.otherinbox.com", "@pepbot.com", "@pfui.ru", "@pimpedupmyspace.com", "@pjjkp.com", "@plexolan.de", "@poczta.onet.pl", "@politikerclub.de", "@poofy.org", "@pookmail.com", "@privacy.net", "@privy-mail.com", "@privymail.de", "@proxymail.eu", "@prtnx.com", "@prtz.eu", "@punkass.com", "@putthisinyourspamdatabase.com", "@pwrby.com", "@quickinbox.com", "@quickmail.nl", "@rcpt.at", "@reallymymail.com", "@recode.me", "@recursor.net", "@recyclemail.dk", "@regbypass.com", "@regbypass.comsafe-mail.net", "@rejectmail.com", "@rhyta.com", "@rklips.com", "@rmqkr.net", "@royal.net", "@rppkn.com", "@rtrtr.com", "@s0ny.net", "@safe-mail.net", "@safersignup.de", "@safetymail.info", "@safetypost.de", "@sandelf.de", "@saynotospams.com", "@schafmail.de", "@selfdestructingmail.com", "@selfdestructingmail.org", "@sendspamhere.com", "@sharedmailbox.org", "@sharklasers.com", "@shieldedmail.com", "@shiftmail.com", "@shitmail.me", "@shitmail.org", "@shitware.nl", "@shortmail.net", "@sibmail.com", "@sinnlos-mail.de", "@siteposter.net", "@skeefmail.com", "@slaskpost.se", "@slopsbox.com", "@slushmail.com", "@smashmail.de", "@smellfear.com", "@smellrear.com", "@snakemail.com", "@sneakemail.com", "@snkmail.com", "@sofimail.com", "@sofort-mail.de", "@softpls.asia", "@sogetthis.com", "@sohu.com", "@solvemail.info", "@soodonims.com", "@spam.la", "@spam.su", "@spam4.me", "@spamavert.com", "@spambob.com", "@spambob.net", "@spambob.org", "@spambog.com", "@spambog.de", "@spambog.net", "@spambog.ru", "@spambox.info", "@spambox.irishspringrealty.com", "@spambox.us", "@spamcannon.com", "@spamcannon.net", "@spamcero.com", "@spamcon.org", "@spamcorptastic.com", "@spamcowboy.com", "@spamcowboy.net", "@spamcowboy.org", "@spamday.com", "@spamex.com", "@spamfree.eu", "@spamfree24.com", "@spamfree24.de", "@spamfree24.eu", "@spamfree24.info", "@spamfree24.net", "@spamfree24.org", "@spamgoes.in", "@spamgourmet.com", "@spamgourmet.net", "@spamgourmet.org", "@spamherelots.com", "@spamhereplease.com", "@spamhole.com", "@spamify.com", "@spaminator.de", "@spamkill.info", "@spaml.com", "@spaml.de", "@spammotel.com", "@spamobox.com", "@spamoff.de", "@spamsalad.in", "@spamslicer.com", "@spamspot.com", "@spamstack.net", "@spamthis.co.uk", "@spamthisplease.com", "@spamtrail.com", "@spamtroll.net", "@speed.1s.fr", "@spikio.com", "@spoofmail.de", "@squizzy.de", "@ssoia.com", "@startkeys.com", "@stinkefinger.net", "@stop-my-spam.com", "@stuffmail.de", "@supergreatmail.com", "@supermailer.jp", "@superrito.com", "@superstachel.de", "@suremail.info", "@svk.jp", "@sweetxxx.de", "@tagyourself.com", "@talkinator.com", "@tapchicuoihoi.com", "@teewars.org", "@teleworm.com", "@teleworm.us", "@temp.emeraldwebmail.com", "@temp.headstrong.de", "@tempalias.com", "@tempe-mail.com", "@tempemail.biz", "@tempemail.co.za", "@tempemail.com", "@tempemail.net", "@tempinbox.co.uk", "@tempinbox.com", "@tempmail.it", "@tempmail2.com", "@tempmaildemo.com", "@tempomail.fr", "@temporarily.de", "@temporarioemail.com.br", "@temporaryemail.net", "@temporaryemail.us", "@temporaryforwarding.com", "@temporaryinbox.com", "@tempsky.com", "@tempthe.net", "@tempymail.com", "@thanksnospam.info", "@thankyou2010.com", "@thecloudindex.com", "@thisisnotmyrealemail.com", "@throwawayemailaddress.com", "@tilien.com", "@tittbit.in", "@tmail.ws", "@tmailinator.com", "@toiea.com", "@toomail.biz", "@tradermail.info", "@trash-amil.com", "@trash-mail.at", "@trash-mail.com", "@trash-mail.de", "@trash2009.com", "@trash2010.com", "@trash2011.com", "@trashdevil.com", "@trashdevil.de", "@trashemail.de", "@trashmail.at", "@trashmail.com", "@trashmail.de", "@trashmail.me", "@trashmail.net", "@trashmail.org", "@trashmail.ws", "@trashmailer.com", "@trashymail.com", "@trashymail.net", "@trbvm.com", "@trillianpro.com", "@tryalert.com", "@turual.com", "@twinmail.de", "@twoweirdtricks.com", "@tyldd.com", "@uggsrock.com", "@umail.net", "@upliftnow.com", "@uplipht.com", "@uroid.com", "@username.e4ward.com", "@venompen.com", "@veryrealemail.com", "@vidchart.com", "@viditag.com", "@viewcastmedia.com", "@viewcastmedia.net", "@viewcastmedia.org", "@vomoto.com", "@vubby.com", "@walala.org", "@walkmail.net", "@webemail.me", "@webm4il.info", "@webuser.in", "@wee.my", "@weg-werf-email.de", "@wegwerf-email-addressen.de", "@wegwerf-emails.de", "@wegwerfadresse.de", "@wegwerfemail.de", "@wegwerfmail.de", "@wegwerfmail.info", "@wegwerfmail.net", "@wegwerfmail.org", "@wetrainbayarea.com", "@wetrainbayarea.org", "@wh4f.org", "@whatiaas.com", "@whatpaas.com", "@whatsaas.com", "@whopy.com", "@whtjddn.33mail.com", "@whyspam.me", "@wilemail.com", "@willselfdestruct.com", "@winemaven.info", "@wronghead.com", "@wuzup.net", "@wuzupmail.net", "@www.e4ward.com", "@www.gishpuppy.com", "@www.mailinator.com", "@wwwnew.eu", "@xagloo.com", "@xemaps.com", "@xents.com", "@xmaily.com", "@xoxy.net", "@xyzfree.net", "@yapped.net", "@yeah.net", "@yep.it", "@yogamaven.com", "@yopmail.com", "@yopmail.fr", "@yopmail.net", "@ypmail.webarnak.fr.eu.org", "@yuurok.com", "@za.com", "@zehnminutenmail.de", "@zetmail.com", "@zippymail.info", "@zoaxe.com", "@zoemail.com", "@zoemail.net", "@zoemail.org", "@zomg.info", "@zxcv.com", "@zxcvbnm.com", "@zzz.com", "@aol.com", "@att.net", "@comcast.net", "@facebook.com", "@gmail.com", "@gmx.com", "@googlemail.com", "@google.com", "@hotmail.com", "@hotmail.co.uk", "@mac.com", "@me.com", "@mail.com", "@msn.com", "@live.com", "@sbcglobal.net", "@verizon.net", "@yahoo.com", "@yahoo.co.uk", "@email.com", "@games.com", "@gmx.net", "@hush.com", "@hushmail.com", "@inbox.com", "@lavabit.com", "@love.com", "@pobox.com", "@rocketmail.com", "@safe-mail.net", "@wow.com", "@ygm.com", "@ymail.com", "@zoho.com", "@fastmail.fm", "@bellsouth.net", "@charter.net", "@cox.net", "@earthlink.net", "@juno.com", "@btinternet.com", "@virginmedia.com", "@blueyonder.co.uk", "@freeserve.co.uk", "@live.co.uk", "@ntlworld.com", "@o2.co.uk", "@orange.net", "@sky.com", "@talktalk.co.uk", "@tiscali.co.uk", "@virgin.net", "@wanadoo.co.uk", "@bt.com", "@sina.com", "@qq.com", "@naver.com", "@hanmail.net", "@daum.net", "@nate.com", "@yahoo.co.jp", "@yahoo.co.kr", "@yahoo.co.id", "@yahoo.co.in", "@yahoo.com.sg", "@yahoo.com.ph", "@hotmail.fr", "@live.fr", "@laposte.net", "@yahoo.fr", "@wanadoo.fr", "@orange.fr", "@gmx.fr", "@sfr.fr", "@neuf.fr", "@free.fr", "@gmx.de", "@hotmail.de", "@live.de", "@online.de", "@t-online.de", "@web.de", "@yahoo.de", "@mail.ru", "@rambler.ru", "@yandex.ru", "@hotmail.be", "@live.be", "@skynet.be", "@voo.be", "@tvcablenet.be", "@telenet.be", "@hotmail.com.ar", "@live.com.ar", "@yahoo.com.ar", "@fibertel.com.ar", "@speedy.com.ar", "@arnet.com.ar", "@hotmail.com", "@gmail.com", "@yahoo.com.mx", "@live.com.mx", "@yahoo.com", "@hotmail.es", "@live.com", "@hotmail.com.mx", "@prodigy.net.mx", "@msn.com", "@google.com", "@dell.com", "@delltechnologies.com", "@hpe.com", "@netapp.com", "@purestorage.com", "@huawei.com", "@ibm.com", "@infinidat.com", "@nutanix.com", "@talend.com", "@alteryx.com", "@informatica.com", "@tibco.com", "@globant.com", "@epam.com", "@tnfosys.com", "@mindtree.com", "@lntinfotech.com"],
            xn = {enter: {opacity: 1}, exit: {opacity: 0}};
        var jn = function () {
            var e = Object(i.useState)(!1), t = Object(z.a)(e, 2), n = t[0], a = t[1], r = Object(i.useState)(!1),
                o = Object(z.a)(r, 2), c = o[0], s = o[1], l = Object(i.useState)(!1), m = Object(z.a)(l, 2),
                u = (m[0], m[1], b()), f = Object(i.useRef)({
                    utmMedium: u.get("utmMedium"),
                    utmCampaign: u.get("utmCampaign"),
                    utmSource: u.get("utmSource"),
                    utmRegion: u.get("utmRegion"),
                    utmContent: u.get("utmContent"),
                    utmCreative: u.get("utmCreative"),
                    utmTerm: u.get("utmTerm"),
                    utmKeyword: u.get("utmKeyword"),
                    ecid: u.get("ecid")
                }), g = Z().trackUserRegistered, x = Object(h.g)(), j = Object(h.j)().url, N = Object(cn.a)({mode: "all"}),
                I = N.register, S = N.handleSubmit, M = N.errors, _ = N.formState, T = N.setError, A = N.getValues,
                P = N.clearErrors, D = N.setValue, q = (0, N.watch)("country"), U = function (e) {
                    return e.endsWith("/") ? e.slice(0, -1) : e
                };

            function B() {
                return (B = Object(p.a)(d.a.mark((function e(t) {
                    var n, i, r, o, c, l, p, m, h, b, v, w, y, O, C, k, L;
                    return d.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.firstName, i = t.lastName, r = t.password, o = t.email, c = decodeURIComponent(o.toLowerCase()), a(!0), e.prev = 3, e.next = 6, H({
                                    firstName: n,
                                    lastName: i,
                                    email: c,
                                    password: r,
                                    username: c
                                });
                            case 6:
                                return l = e.sent, p = f.current, m = p.utmMedium, h = p.utmCampaign, b = p.utmSource, v = p.utmRegion, w = p.utmContent, y = p.utmCreative, O = p.utmTerm, C = p.utmKeyword, g({
                                    id: l.userSub,
                                    firstName: t.firstName,
                                    lastName: t.lastName,
                                    email: t.email,
                                    country: t.country,
                                    phoneNumber: t.phone,
                                    company: t.companyName,
                                    state: t.state,
                                    province: t.province,
                                    jobTitle: t.jobTitle,
                                    optiIn: t.Comms_Opt_In__c,
                                    attendeeType: t.attendeeCategory,
                                    mktoCampaignID: "2-4-1 Storage-Acceleration-Enter-FY21-Q2-Global-EMB",
                                    utmMedium: m,
                                    utmCampaign: h,
                                    utmSource: b,
                                    utmRegion: v,
                                    utmContent: w,
                                    utmCreative: y,
                                    utmTerm: O,
                                    utmKeyword: C,
                                    mCVID: t.mCVID
                                }), a(!1), x.push({
                                    pathname: "".concat(U(j), "/confirm-email-success?ecid=").concat(u.get("ecid"), "&utmMedium=").concat(u.get("utmMedium"), "&utmSource=").concat(u.get("utmSource"), "&utmCampaign").concat(u.get("utmCampaign"), "&utmContent=").concat(u.get("utmContent")),
                                    state: {
                                        email: c,
                                        message: {type: "success", text: "We sent you a confirmation email."}
                                    }
                                }), e.abrupt("return", l);
                            case 14:
                                e.prev = 14, e.t0 = e.catch(3), k = e.t0.code, L = e.t0.message, a(!1), T("email", {
                                    type: k,
                                    message: L
                                }), s(!0);
                            case 20:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[3, 14]])
                })))).apply(this, arguments)
            }

            function F() {
                s(!1), P("email"), D("email", "", {shouldValidate: !0, shouldDirty: !0})
            }

            function $(e) {
                return M[e] || M[e] && _.isSubmitted ? "invalid" : !M[e] && _.dirtyFields[e] ? "valid" : null
            }

            return Object(R.jsxs)(Jt, {
                variants: xn,
                initial: "exit",
                animate: "enter",
                exit: "exit",
                onSubmit: S((function (e) {
                    return B.apply(this, arguments)
                })),
                children: [Object(R.jsx)(E.a, {
                    children: c && Object(R.jsxs)(dn, {
                        closeModal: F,
                        children: [Object(R.jsx)("h2", {
                            className: "modal-header",
                            children: "Uh Oh!"
                        }), Object(R.jsxs)("p", {
                            className: "modal-message",
                            children: ["The email ", Object(R.jsx)("strong", {children: A("email")}), " is already in use."]
                        }), Object(R.jsxs)("div", {
                            className: "button-group",
                            children: [Object(R.jsx)(Nt, {
                                type: "button", onClick: function () {
                                    F()
                                }, children: "Register with a different Email"
                            }), Object(R.jsx)(L.b, {
                                component: ln,
                                to: "/go/storage-acceleration/en/registration/login?ecid=".concat(u.get("ecid"), "&utmMedium=").concat(u.get("utmMedium"), "&utmSource=").concat(u.get("utmSource"), "&utmCampaign").concat(u.get("utmCampaign"), "&utmContent=").concat(u.get("utmContent")),
                                children: "Sign in instead"
                            })]
                        })]
                    })
                }), Object(R.jsxs)("div", {
                    className: "title-group",
                    children: [Object(R.jsx)("h1", {
                        className: "form-title",
                        children: "Register Now"
                    }), Object(R.jsxs)("span", {
                        className: "switch-form",
                        children: ["Already have an account?", Object(R.jsx)(L.b, {
                            className: "change-form-button",
                            to: "/go/storage-acceleration/en/registration/login?ecid=".concat(u.get("ecid"), "&utmMedium=").concat(u.get("utmMedium"), "&utmSource=").concat(u.get("utmSource"), "&utmCampaign").concat(u.get("utmCampaign"), "&utmContent=").concat(u.get("utmContent")),
                            children: "Login"
                        })]
                    }), Object(R.jsx)("p", {className: "blurb", children: "Enter your details below"})]
                }), Object(R.jsx)("input", {type: "hidden", id: "mCVID", name: "mCVID", ref: I}), Object(R.jsxs)(Kt, {
                    className: "half",
                    children: [Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: $("email"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                htmlFor: "email",
                                children: "Work Email:"
                            }), Object(R.jsx)(Xt, {
                                type: "text",
                                name: "email",
                                id: "email",
                                ref: I({
                                    required: "Please enter your work email.",
                                    pattern: {value: v, message: "Please enter a valid email."},
                                    validate: {
                                        validDomain: function (e) {
                                            var t = "@".concat(e.split("@")[1]).toLowerCase();
                                            return !gn.includes(t) || "Please enter a valid business email address. If you believe this is an error or need assistance please email info@hsifamericas.com."
                                        }
                                    }
                                }),
                                className: $("email")
                            }), M.email && Object(R.jsx)("span", {
                                className: "error-message",
                                children: M.email.message
                            })]
                        })
                    }), Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: $("companyName"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                htmlFor: "companyName",
                                children: "Company Name"
                            }), Object(R.jsx)(Xt, {
                                type: "text",
                                name: "companyName",
                                id: "companyName",
                                ref: I({required: "Please enter the company name"}),
                                className: $("companyName")
                            }), M.lastName && Object(R.jsx)("span", {
                                className: "error-message",
                                children: M.companyName.message
                            })]
                        })
                    })]
                }), Object(R.jsxs)(Kt, {
                    className: "half",
                    children: [Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: $("firstName"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                htmlFor: "firstName",
                                children: "First Name"
                            }), Object(R.jsx)(Xt, {
                                type: "text",
                                name: "firstName",
                                id: "firstName",
                                ref: I({required: "Please enter your first name."}),
                                className: $("firstName")
                            }), M.firstName && Object(R.jsx)("span", {
                                className: "error-message",
                                children: M.firstName.message
                            })]
                        })
                    }), Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: $("lastName"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                htmlFor: "lastName",
                                children: "Last Name"
                            }), Object(R.jsx)(Xt, {
                                type: "text",
                                name: "lastName",
                                id: "lastName",
                                ref: I({required: "Please enter your last name."}),
                                className: $("lastName")
                            }), M.lastName && Object(R.jsx)("span", {
                                className: "error-message",
                                children: M.lastName.message
                            })]
                        })
                    })]
                }), Object(R.jsxs)(Kt, {
                    className: "half",
                    children: [Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: $("phone"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                htmlFor: "phone",
                                children: "Phone"
                            }), Object(R.jsx)(Xt, {
                                type: "tel",
                                name: "phone",
                                id: "phone",
                                ref: I({required: "Please enter a valid phone number.", pattern: w}),
                                className: $("phone")
                            }), M.phone && Object(R.jsx)("span", {
                                className: "error-message",
                                children: M.phone.message
                            })]
                        })
                    }), Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: $("jobTitle"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                htmlFor: "jobTitle",
                                children: "Job Title"
                            }), Object(R.jsx)(Xt, {
                                type: "text",
                                name: "jobTitle",
                                id: "jobTitle",
                                ref: I({required: "Please enter your job title."}),
                                className: $("jobTitle")
                            }), M.jobTitle && Object(R.jsx)("span", {
                                className: "error-message",
                                children: M.jobTitle.message
                            })]
                        })
                    })]
                }), Object(R.jsxs)(Kt, {
                    className: "half", children: [Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: $("industry"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                htmlFor: "industry",
                                children: "Industry"
                            }), Object(R.jsxs)(Qt, {
                                type: "text",
                                name: "industry",
                                id: "industry",
                                defaultValue: "",
                                ref: I({required: "Please enter industry"}),
                                className: $("industry"),
                                children: [Object(R.jsx)("option", {
                                    default: !0,
                                    value: "",
                                    children: "Please Select One"
                                }), Object(R.jsx)("option", {
                                    value: "Business Services",
                                    children: "Business Services"
                                }), Object(R.jsx)("option", {
                                    value: "Communications Media and Entertainment",
                                    children: "Communications Media and Entertainment"
                                }), Object(R.jsx)("option", {
                                    value: "Consumer Services",
                                    children: "Consumer Services"
                                }), Object(R.jsx)("option", {
                                    value: "Education",
                                    children: "Education"
                                }), Object(R.jsx)("option", {
                                    value: "Energy",
                                    children: "Energy"
                                }), Object(R.jsx)("option", {
                                    value: "Financial Services",
                                    children: "Financial Services"
                                }), Object(R.jsx)("option", {
                                    value: "Government",
                                    children: "Government"
                                }), Object(R.jsx)("option", {
                                    value: "Healthcare and Life Sciences",
                                    children: "Healthcare and Life Sciences"
                                }), Object(R.jsx)("option", {
                                    value: "Insurance",
                                    children: "Insurance"
                                }), Object(R.jsx)("option", {
                                    value: "Manufacturing",
                                    children: "Manufacturing"
                                }), Object(R.jsx)("option", {
                                    value: "Miscellaneous",
                                    children: "Miscellaneous"
                                }), Object(R.jsx)("option", {
                                    value: "Retail",
                                    children: "Retail"
                                }), Object(R.jsx)("option", {
                                    value: "Technology",
                                    children: "Technology"
                                }), Object(R.jsx)("option", {
                                    value: "Transportation Services",
                                    children: "Transportation Services"
                                }), Object(R.jsx)("option", {value: "Unknown", children: "Unknown"})]
                            }), M.industry && Object(R.jsx)("span", {
                                className: "error-message",
                                children: M.industry.message
                            })]
                        })
                    }), Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: $("attendeeCategory"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                htmlFor: "attendeeCategory",
                                children: "Attendee Category"
                            }), Object(R.jsxs)(Qt, {
                                defaultValue: "",
                                name: "attendeeCategory",
                                id: "attendeeCategory",
                                ref: I({required: "Please select your attendee category"}),
                                className: $("attendeeCategory"),
                                children: [Object(R.jsx)("option", {
                                    disabled: !0,
                                    value: "",
                                    children: "Please Select One"
                                }), Object(R.jsx)("option", {
                                    value: "Existing Customer",
                                    children: "Existing Customer"
                                }), Object(R.jsx)("option", {
                                    value: "Hitachi Employee",
                                    children: "Hitachi Employee"
                                }), Object(R.jsx)("option", {
                                    value: "Partner",
                                    children: "Partner"
                                }), Object(R.jsx)("option", {
                                    value: "Press/Analyst",
                                    children: "Press/Analyst"
                                }), Object(R.jsx)("option", {
                                    value: "Prospective Customer",
                                    children: "Prospective Customer"
                                })]
                            }), M.attendeeCategory && Object(R.jsx)("span", {
                                className: "error-message",
                                children: M.attendeeCategory.message
                            })]
                        })
                    })]
                }), Object(R.jsxs)(Kt, {
                    className: "half",
                    children: [Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: $("country"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                htmlFor: "country",
                                children: "Country"
                            }), Object(R.jsxs)(Qt, {
                                defaultValue: "",
                                name: "country",
                                id: "country",
                                ref: I({required: "Please select your country"}),
                                className: $("country"),
                                children: [Object(R.jsx)("option", {
                                    disabled: !0,
                                    value: "",
                                    children: "Select Country"
                                }), y.map((function (e) {
                                    return Object(R.jsx)("option", {value: e, children: e}, "".concat(e, "-option"))
                                }))]
                            }), M.country && Object(R.jsx)("span", {
                                className: "error-message",
                                children: M.country.message
                            })]
                        })
                    }), "United States" === q && Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: $("state"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                children: "State"
                            }), Object(R.jsxs)(Qt, {
                                defaultValue: "",
                                name: "state",
                                id: "state",
                                ref: I({required: "Please select your state."}),
                                className: $("state"),
                                children: [Object(R.jsx)("optgroup", {
                                    children: Object(R.jsx)("option", {
                                        disabled: !0,
                                        value: "",
                                        children: "Select State"
                                    })
                                }), Object(R.jsx)("optgroup", {
                                    label: "States", children: O.map((function (e) {
                                        return Object(R.jsx)("option", {value: e, children: e}, "".concat(e, "-option"))
                                    }))
                                }), Object(R.jsx)("optgroup", {
                                    label: "US Outlying Territories",
                                    children: C.map((function (e) {
                                        return Object(R.jsx)("option", {value: e, children: e}, "".concat(e, "-option"))
                                    }))
                                })]
                            }), M.state && Object(R.jsx)("span", {
                                className: "error-message",
                                children: M.state.message
                            })]
                        })
                    }), "Canada" === q && Object(R.jsx)(Kt, {
                        children: Object(R.jsxs)(Wt, {
                            className: $("province"),
                            children: [Object(R.jsx)(Yt, {
                                required: !0,
                                children: "Province"
                            }), Object(R.jsxs)(Qt, {
                                defaultValue: "",
                                name: "province",
                                id: "province",
                                ref: I({required: "Please select your province."}),
                                className: $("province"),
                                children: [Object(R.jsx)("option", {
                                    disabled: !0,
                                    value: "",
                                    children: "Select Province"
                                }), k.map((function (e) {
                                    return Object(R.jsx)("option", {value: e, children: e}, "".concat(e, "-option"))
                                }))]
                            }), M.province && Object(R.jsx)("span", {
                                className: "error-message",
                                children: M.province.message
                            })]
                        })
                    })]
                }), Object(R.jsx)(Kt, {
                    children: Object(R.jsxs)(Wt, {
                        className: $("password"),
                        children: [Object(R.jsx)(Yt, {
                            required: !0,
                            htmlFor: "password",
                            children: "Password"
                        }), Object(R.jsx)(Xt, {
                            type: "password",
                            name: "password",
                            id: "password",
                            "aria-invalid": M.password ? "true" : "false",
                            ref: I({required: !0, minLength: 8}),
                            className: $("password")
                        }), M.password && "required" === M.password.type && Object(R.jsx)("span", {
                            className: "error-message",
                            children: "Please enter a password"
                        }), M.password && "minLength" === M.password.type && Object(R.jsx)("span", {
                            className: "error-message",
                            children: "Must be at least 8 characters"
                        })]
                    })
                }), Object(R.jsx)(Kt, {
                    className: "gdpr-group", children: Object(R.jsx)(Wt, {
                        children: Object(R.jsx)("div", {
                            className: "gdpr-group", children: Object(R.jsxs)(It, {
                                children: [Object(R.jsx)("div", {
                                    className: "gdpr-description-container",
                                    children: Object(R.jsxs)("p", {
                                        htmlFor: "Comms_Opt_In__c",
                                        children: ["By selecting  \u201cRegister\u201d, you explicitly consent to the processing of your personal information by the event organizers, Hitachi Vantara for the purposes of receiving commercial communications, including by phone and email, in relation to their own products and services and the Event, in accordance with applicable laws and our", " ", Object(R.jsx)("a", {
                                            href: "https://www.hitachivantara.com/en-us/company/legal.privacy.html",
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: Object(R.jsx)("span", {
                                                className: "hitachi-group-link",
                                                children: "Privacy Policy"
                                            })
                                        }), " ", "for additional details."]
                                    })
                                }), Object(R.jsx)("div", {
                                    className: "gdpr-input-container",
                                    children: Object(R.jsxs)(Kt, {
                                        className: "radio-group",
                                        children: [Object(R.jsxs)(Kt, {
                                            children: [Object(R.jsx)("input", {
                                                type: "radio",
                                                id: "Comms_Opt_In__c-yes",
                                                name: "Comms_Opt_In__c",
                                                value: "Yes",
                                                className: $("Comms_Opt_In__c"),
                                                ref: I
                                            }), Object(R.jsx)("label", {
                                                htmlFor: "Comms_Opt_In__c-yes",
                                                children: Object(R.jsx)("strong", {children: "Yes"})
                                            })]
                                        }), Object(R.jsxs)(Kt, {
                                            children: [Object(R.jsx)("input", {
                                                type: "radio",
                                                id: "Comms_Opt_In__c-no",
                                                name: "Comms_Opt_In__c",
                                                value: "No",
                                                ref: I({required: !0}),
                                                className: $("Comms_Opt_In__c")
                                            }), Object(R.jsx)("label", {
                                                htmlFor: "Comms_Opt_In__c-no",
                                                children: Object(R.jsx)("strong", {children: "No"})
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }), Object(R.jsx)(Vt, {isDisabled: !_.isValid, isLoading: n, type: "submit", children: "Register Now"})]
            })
        };
        var vn = function () {
            var e = Object(h.g)(), t = b(), n = Z().trackUserEmailConfirmed;
            return Object(i.useEffect)((function () {
                var i = decodeURIComponent(t.get("email")), a = i.toLowerCase();
                (function (e) {
                    return G.apply(this, arguments)
                })({code: t.get("code"), username: a}).then((function (t) {
                    e.push({
                        pathname: "/go/storage-acceleration/en/registration/login",
                        state: {
                            email: i,
                            message: {type: "success", text: "Your account has been confirmed. You can now log in."}
                        }
                    }), n({confirmed: !0})
                })).catch((function (e) {
                    n({confirmed: !1}), console.log("error", e)
                }))
            }), []), null
        }, wn = {enter: {opacity: 1}, exit: {opacity: 0}};
        var yn = function () {
            var e, t = Object(i.useState)({type: "success", text: "Succesfully registered, confirm your account."}),
                n = Object(z.a)(t, 1)[0], a = Object(h.h)();
            return (null === a || void 0 === a || null === (e = a.state) || void 0 === e ? void 0 : e.email) ? Object(R.jsxs)(Jt, {
                variants: wn,
                initial: "exit",
                animate: "enter",
                exit: "exit",
                children: [Object(R.jsx)(E.a, {}), Object(R.jsxs)("div", {
                    className: "title-group",
                    children: [Object(R.jsx)("h1", {
                        className: "form-title",
                        children: "We sent you a confirmation email."
                    }), Object(R.jsxs)("span", {
                        className: "switch-form",
                        children: ["Already confirmed your account?", Object(R.jsx)(L.b, {
                            className: "change-form-button",
                            to: "/go/storage-acceleration/en/registration/login",
                            children: "Log In"
                        })]
                    }), Object(R.jsxs)("p", {
                        className: "check-spam",
                        children: ["Click on the link in your email to confirm account. If you are unable to locate the email, please check your SPAM folder. If you are still having trouble email", " ", Object(R.jsx)("a", {
                            href: "mailto:events@hitachivantara.com",
                            children: "events@hitachivantara.com"
                        }), "."]
                    }), Object(R.jsx)($t, {message: n})]
                })]
            }) : Object(R.jsx)(h.a, {to: {pathname: "/go/storage-acceleration/en/registration/login"}})
        }, On = n(439), Cn = n(440), kn = n(14), Ln = n.n(kn);
        Ln.a.object({
            id: Ln.a.string().required(),
            company: Ln.a.string().required(),
            business_role: Ln.a.string().required(),
            product_interest: Ln.a.string().required(),
            topic_interest: Ln.a.string().required()
        });

        function Nn(e, t) {
            return t === e
        }

        var In = n(252), Sn = "hitachicontentapi";

        function zn() {
            return (zn = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.post("".concat(Sn), "/content/marketo", t);
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            e.prev = 7, e.t0 = e.catch(0), console.error({submitToMarketo: e.t0});
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        var En = function () {
                var e = Z(), t = e.dataEventSubject$, n = e.types;
                Object(i.useEffect)((function () {
                    var e = t.pipe(Object(On.a)((function (e) {
                        return Nn(e.type, n.USER_REGISTERED)
                    })), Object(Cn.a)((function (e) {
                        return Object(m.a)(Object(m.a)({}, e.payload), {}, {type: e.type})
                    }))).subscribe({
                        next: function (e) {
                            !function (e) {
                                zn.apply(this, arguments)
                            }({
                                body: {
                                    input: [{
                                        leadFormFields: Object(m.a)(Object(m.a)({
                                            email: e.email,
                                            company: e.company,
                                            firstName: e.firstName,
                                            lastName: e.lastName,
                                            phoneforForm: e.phoneNumber,
                                            title: e.jobTitle || "HSIF",
                                            industry: e.industry,
                                            leadSourceDetail: "2-4-1-Storage Acceleration-Enter-FY21-Q2-Global-EVW",
                                            country: e.country
                                        }, !!e.state && {state: e.state || e.province}), {}, {
                                            globalOptinConsentProxyField: e.optiIn,
                                            utm_medium__c: e.utmMedium || "",
                                            utm_campaign__c: e.utmCampaign || "",
                                            utm_source__c: e.utmSource || "",
                                            utm_content__c: e.utmContent || "",
                                            lTAdKeyword: e.utmKeyword || "",
                                            mCVID: e.mCVID,
                                            attendeeCategory: e.attendeeCategory
                                        })
                                    }], formId: 20057
                                }
                            })
                        }
                    });
                    return function () {
                        return e.unsubscribe()
                    }
                }), [t, n.USER_REGISTERED])
            }, Mn = (Ln.a.object({
                id: Ln.a.string().required(),
                firstName: Ln.a.string().required(),
                lastName: Ln.a.string().required(),
                email: Ln.a.string().required(),
                company: Ln.a.string().required().allow(null),
                businessRole: Ln.a.string().required().allow(null),
                pointsAccrued: Ln.a.string().required(),
                jobTitle: Ln.a.string().required().allow(null),
                phone: Ln.a.string().required().allow(null),
                attendeeType: Ln.a.string().required().allow(null)
            }), Ln.a.object({
                id: Ln.a.string().required(),
                firstName: Ln.a.string().required(),
                lastName: Ln.a.string().required(),
                email: Ln.a.string().required(),
                country: Ln.a.string().required(),
                state: Ln.a.string().required().allow(null),
                mCVID: Ln.a.string().required().allow(null),
                mktoCampaignID: Ln.a.string().required().allow(null),
                company: Ln.a.string().required().allow(null),
                utmCampaign: Ln.a.string().required().allow(null),
                province: Ln.a.string().required().allow(null),
                utmKeyword: Ln.a.string().required().allow(null),
                utmSource: Ln.a.string().required().allow(null),
                phone: Ln.a.string().required().allow(null),
                utmCreative: Ln.a.string().required().allow(null),
                utmMedium: Ln.a.string().required().allow(null),
                utmContent: Ln.a.string().required().allow(null),
                optiIn: Ln.a.string().required().allow(null),
                utmRegion: Ln.a.string().required().allow(null),
                utmTerm: Ln.a.string().required().allow(null),
                attendeeType: Ln.a.string().required().allow(null),
                jobTitle: Ln.a.string().required().allow(null)
            }), n(411)), _n = "\n  mutation UpVote($id: ID) {\n    upVote(id: $id) {\n      id\n    }\n  }\n",
            Tn = "\n  mutation CreateUserProfile(\n    $input: CreateUserProfileInput!\n    $condition: ModelUserProfileConditionInput\n  ) {\n    createUserProfile(input: $input, condition: $condition) {\n      id\n      firstName\n      lastName\n      email\n      company\n      businessRole\n      currentLevelId\n      linkedinProfile\n      instagramHandle\n      twitterHandle\n      professionalLevel\n      trackInterests\n      productInterests\n      gainFromEvent\n      attendeeType\n      phone\n      currentLevel {\n        id\n        tier\n        title\n        threshold\n        levelUpBonus\n        otherBonus\n        userProfiles {\n          nextToken\n        }\n        createdAt\n        updatedAt\n      }\n      userAddresses {\n        items {\n          id\n          userProfileId\n          streetAddress1\n          streetAddress2\n          city\n          state\n          country\n          zipCode\n          addressType\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      userCalendar {\n        items {\n          id\n          title\n          space\n          imageUrl\n          day\n          zoneId\n          zoneName\n          userProfileId\n          contentId\n          points\n          eventType\n          eventTypeTitle\n          startTime\n          endTime\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      userActivities {\n        items {\n          id\n          userProfileId\n          title\n          location\n          points\n          sponsor\n          swagActivity\n          activityType\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n      pointsAccrued {\n        id\n        sortKey\n        userProfileId\n        value\n        userProfile {\n          id\n          firstName\n          lastName\n          email\n          company\n          businessRole\n          currentLevelId\n          linkedinProfile\n          instagramHandle\n          twitterHandle\n          professionalLevel\n          trackInterests\n          productInterests\n          gainFromEvent\n          attendeeType\n          phone\n          createdAt\n          updatedAt\n        }\n        createdAt\n        updatedAt\n      }\n      userSwag {\n        items {\n          id\n          title\n          imageUrl\n          userProfileId\n          contentId\n          swagType\n          points\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      userPointsHistory {\n        items {\n          id\n          userProfileId\n          eventActivityId\n          points\n          type\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n",
            Rn = "\n  mutation CreateConvo(\n    $input: CreateConvoInput!\n    $condition: ModelConvoConditionInput\n  ) {\n    createConvo(input: $input, condition: $condition) {\n      id\n      user1Id\n      user2Id\n      createdAt\n      updatedAt\n      confirmed\n      messages {\n        items {\n          id\n          content\n          convoId\n          fromName\n          fromUserId\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n",
            An = "\n  mutation UpdateConvo(\n    $input: UpdateConvoInput!\n    $condition: ModelConvoConditionInput\n  ) {\n    updateConvo(input: $input, condition: $condition) {\n      id\n      user1Id\n      user2Id\n      createdAt\n      updatedAt\n      confirmed\n      messages {\n        items {\n          id\n          content\n          convoId\n          fromName\n          fromUserId\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n",
            Pn = "\n  mutation CreateConvoMessage(\n    $input: CreateConvoMessageInput!\n    $condition: ModelConvoMessageConditionInput\n  ) {\n    createConvoMessage(input: $input, condition: $condition) {\n      id\n      content\n      convoId\n      fromName\n      fromUserId\n      createdAt\n      updatedAt\n      room {\n        id\n        user1Id\n        user2Id\n        createdAt\n        updatedAt\n        confirmed\n        messages {\n          nextToken\n        }\n      }\n    }\n  }\n",
            Dn = "\n  mutation DeleteConvoMessage(\n    $input: DeleteConvoMessageInput!\n    $condition: ModelConvoMessageConditionInput\n  ) {\n    deleteConvoMessage(input: $input, condition: $condition) {\n      id\n      content\n      convoId\n      fromName\n      fromUserId\n      createdAt\n      updatedAt\n      room {\n        id\n        user1Id\n        user2Id\n        createdAt\n        updatedAt\n        confirmed\n        messages {\n          nextToken\n        }\n      }\n    }\n  }\n",
            Zn = "\n  mutation CreateTrackUserLogin(\n    $input: CreateTrackUserLoginInput!\n    $condition: ModelTrackUserLoginConditionInput\n  ) {\n    createTrackUserLogin(input: $input, condition: $condition) {\n      id\n      userProfileId\n      email\n      firstName\n      lastName\n      eventType\n      jobTitle\n      company\n      createdAt\n      updatedAt\n    }\n  }\n",
            qn = "\n  mutation CreateTrackUserSession(\n    $input: CreateTrackUserSessionInput!\n    $condition: ModelTrackUserSessionConditionInput\n  ) {\n    createTrackUserSession(input: $input, condition: $condition) {\n      id\n      userProfileId\n      email\n      firstName\n      lastName\n      eventType\n      jobTitle\n      company\n      sessionId\n      sessionTitle\n      createdAt\n      updatedAt\n    }\n  }\n",
            Un = "\n  mutation CreateTrackResource(\n    $input: CreateTrackResourceInput!\n    $condition: ModelTrackResourceConditionInput\n  ) {\n    createTrackResource(input: $input, condition: $condition) {\n      id\n      userProfileId\n      email\n      firstName\n      lastName\n      eventType\n      jobTitle\n      company\n      resourceId\n      resourceTitle\n      createdAt\n      updatedAt\n    }\n  }\n",
            Hn = "\n  mutation CreateTrackPoll(\n    $input: CreateTrackPollInput!\n    $condition: ModelTrackPollConditionInput\n  ) {\n    createTrackPoll(input: $input, condition: $condition) {\n      id\n      userProfileId\n      email\n      firstName\n      lastName\n      eventType\n      jobTitle\n      company\n      question\n      answer\n      sessionId\n      sessionTitle\n      createdAt\n      updatedAt\n    }\n  }\n",
            Bn = "\n  mutation CreateUserLogin(\n    $input: CreateUserLoginInput!\n    $condition: ModelUserLoginConditionInput\n  ) {\n    createUserLogin(input: $input, condition: $condition) {\n      id\n      firstName\n      lastName\n      email\n      expirationUnixTime\n      createdAt\n      updatedAt\n    }\n  }\n",
            Fn = "\n  mutation UpdateUserLogin(\n    $input: UpdateUserLoginInput!\n    $condition: ModelUserLoginConditionInput\n  ) {\n    updateUserLogin(input: $input, condition: $condition) {\n      id\n      firstName\n      lastName\n      email\n      expirationUnixTime\n      createdAt\n      updatedAt\n    }\n  }\n",
            $n = "\n  mutation CreatePoll(\n    $input: CreatePollInput!\n    $condition: ModelPollConditionInput\n  ) {\n    createPoll(input: $input, condition: $condition) {\n      id\n      contentId\n      option\n      optionCount\n      eventContentId\n      question\n      createdAt\n      updatedAt\n    }\n  }\n",
            Vn = "\n  mutation CreateUserRegistrationRaffle(\n    $input: CreateUserRegistrationRaffleInput!\n    $condition: ModelUserRegistrationRaffleConditionInput\n  ) {\n    createUserRegistrationRaffle(input: $input, condition: $condition) {\n      id\n      firstName\n      lastName\n      email\n      userProfile\n      winner\n      createdAt\n      updatedAt\n    }\n  }\n",
            Wn = "\n  mutation CreateTopic(\n    $input: CreateTopicInput!\n    $condition: ModelTopicConditionInput\n  ) {\n    createTopic(input: $input, condition: $condition) {\n      id\n      name\n      contentId\n      type\n      icon\n      createdAt\n      updatedAt\n      messages {\n        items {\n          id\n          content\n          topicId\n          fromName\n          fromFirstName\n          fromLastName\n          fromUserId\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n",
            Gn = "\n  mutation DeleteTopic(\n    $input: DeleteTopicInput!\n    $condition: ModelTopicConditionInput\n  ) {\n    deleteTopic(input: $input, condition: $condition) {\n      id\n      name\n      contentId\n      type\n      icon\n      createdAt\n      updatedAt\n      messages {\n        items {\n          id\n          content\n          topicId\n          fromName\n          fromFirstName\n          fromLastName\n          fromUserId\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n",
            Xn = "\n  mutation CreateMessage(\n    $input: CreateMessageInput!\n    $condition: ModelMessageConditionInput\n  ) {\n    createMessage(input: $input, condition: $condition) {\n      id\n      content\n      topicId\n      fromName\n      fromFirstName\n      fromLastName\n      fromUserId\n      createdAt\n      updatedAt\n      topic {\n        id\n        name\n        contentId\n        type\n        icon\n        createdAt\n        updatedAt\n        messages {\n          nextToken\n        }\n      }\n      messageReplies {\n        items {\n          id\n          content\n          topicId\n          messageId\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n",
            Qn = "\n  mutation DeleteMessage(\n    $input: DeleteMessageInput!\n    $condition: ModelMessageConditionInput\n  ) {\n    deleteMessage(input: $input, condition: $condition) {\n      id\n      content\n      topicId\n      fromName\n      fromFirstName\n      fromLastName\n      fromUserId\n      createdAt\n      updatedAt\n      topic {\n        id\n        name\n        contentId\n        type\n        icon\n        createdAt\n        updatedAt\n        messages {\n          nextToken\n        }\n      }\n      messageReplies {\n        items {\n          id\n          content\n          topicId\n          messageId\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n",
            Kn = "\n  mutation CreateMessageReply(\n    $input: CreateMessageReplyInput!\n    $condition: ModelMessageReplyConditionInput\n  ) {\n    createMessageReply(input: $input, condition: $condition) {\n      id\n      content\n      topicId\n      messageId\n      createdAt\n      updatedAt\n      message {\n        id\n        content\n        topicId\n        fromName\n        fromFirstName\n        fromLastName\n        fromUserId\n        createdAt\n        updatedAt\n        topic {\n          id\n          name\n          contentId\n          type\n          icon\n          createdAt\n          updatedAt\n        }\n        messageReplies {\n          nextToken\n        }\n      }\n    }\n  }\n",
            Yn = "\n  query GetUserProfile($id: ID!) {\n    getUserProfile(id: $id) {\n      id\n      firstName\n      lastName\n      email\n      company\n      businessRole\n      currentLevelId\n      linkedinProfile\n      instagramHandle\n      twitterHandle\n      professionalLevel\n      trackInterests\n      productInterests\n      gainFromEvent\n      attendeeType\n      phone\n      currentLevel {\n        id\n        tier\n        title\n        threshold\n        levelUpBonus\n        otherBonus\n        userProfiles {\n          nextToken\n        }\n        createdAt\n        updatedAt\n      }\n      userAddresses {\n        items {\n          id\n          userProfileId\n          streetAddress1\n          streetAddress2\n          city\n          state\n          country\n          zipCode\n          addressType\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      userCalendar {\n        items {\n          id\n          title\n          space\n          imageUrl\n          day\n          zoneId\n          zoneName\n          userProfileId\n          contentId\n          points\n          eventType\n          eventTypeTitle\n          startTime\n          endTime\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      userActivities {\n        items {\n          id\n          userProfileId\n          title\n          location\n          points\n          sponsor\n          swagActivity\n          activityType\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n      pointsAccrued {\n        id\n        sortKey\n        userProfileId\n        value\n        userProfile {\n          id\n          firstName\n          lastName\n          email\n          company\n          businessRole\n          currentLevelId\n          linkedinProfile\n          instagramHandle\n          twitterHandle\n          professionalLevel\n          trackInterests\n          productInterests\n          gainFromEvent\n          attendeeType\n          phone\n          createdAt\n          updatedAt\n        }\n        createdAt\n        updatedAt\n      }\n      userSwag {\n        items {\n          id\n          title\n          imageUrl\n          userProfileId\n          contentId\n          swagType\n          points\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      userPointsHistory {\n        items {\n          id\n          userProfileId\n          eventActivityId\n          points\n          type\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n",
            Jn = "\n  query ListConvos(\n    $filter: ModelConvoFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listConvos(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        user1Id\n        user2Id\n        createdAt\n        updatedAt\n        confirmed\n        messages {\n          nextToken\n        }\n      }\n      nextToken\n    }\n  }\n",
            ei = "\n  query GetUserLogin($id: ID!) {\n    getUserLogin(id: $id) {\n      id\n      firstName\n      lastName\n      email\n      expirationUnixTime\n      createdAt\n      updatedAt\n    }\n  }\n",
            ti = "\n  query ListPolls(\n    $filter: ModelPollFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        contentId\n        option\n        optionCount\n        eventContentId\n        question\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",
            ni = "\n  query ListUserRegistrationRaffles(\n    $filter: ModelUserRegistrationRaffleFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listUserRegistrationRaffles(\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        firstName\n        lastName\n        email\n        userProfile\n        winner\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",
            ii = "\n  query ListTopics(\n    $filter: ModelTopicFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        name\n        contentId\n        type\n        icon\n        createdAt\n        updatedAt\n        messages {\n          nextToken\n        }\n      }\n      nextToken\n    }\n  }\n",
            ai = "\n  query ListTopicsByContentId(\n    $contentId: String\n    $sortDirection: ModelSortDirection\n    $filter: ModelTopicFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listTopicsByContentId(\n      contentId: $contentId\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        name\n        contentId\n        type\n        icon\n        createdAt\n        updatedAt\n        messages {\n          nextToken\n        }\n      }\n      nextToken\n    }\n  }\n";

        function ri(e) {
            return oi.apply(this, arguments)
        }

        function oi() {
            return (oi = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.post("".concat(Sn), "/content/register/create", {body: Object(m.a)({}, t)});
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function ci() {
            return si.apply(this, arguments)
        }

        function si() {
            return (si = Object(p.a)(d.a.mark((function e() {
                var t, n, i;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, X();
                        case 3:
                            return t = e.sent, console.log({currentSession: t}), n = t.accessToken.payload.sub, e.next = 8, In.a.post("".concat(Sn), "/content/register/get", {body: {id: n}});
                        case 8:
                            return i = e.sent, console.log({registrationResponse: i}), e.abrupt("return", i.data.getUserRegistration);
                        case 13:
                            throw e.prev = 13, e.t0 = e.catch(0), e.t0;
                        case 16:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 13]])
            })))).apply(this, arguments)
        }

        var li = n(68), di = n(454), pi = n(12), mi = n(447);

        function ui(e) {
            if (null === e || void 0 === e) return "";
            var t = Object(pi.a)(e);
            return Object(mi.a)(t, "h:mmaaa")
        }

        function hi(e) {
            var t = new Date;
            return t.setMinutes(t.getMinutes() + e), new Date(t)
        }

        function bi() {
            return Object(_.a)("currentUser", (function () {
                return U.a.currentAuthenticatedUser({bypassCache: !0})
            }))
        }

        function fi() {
            var e = bi().data;
            return Object(_.a)(["profile", null === e || void 0 === e ? void 0 : e.attributes.sub], Object(p.a)(d.a.mark((function t() {
                var n, i, a, r, o;
                return d.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, In.a.graphql(Object(Mn.b)(Yn, {id: e.attributes.sub}));
                        case 2:
                            if ((i = t.sent).data.getUserProfile) {
                                t.next = 5;
                                break
                            }
                            return t.abrupt("return", Promise.resolve(null));
                        case 5:
                            return a = null !== (n = e.signInUserSession.accessToken.payload["cognito:groups"]) && void 0 !== n ? n : [], r = a.includes("admin"), o = Object(m.a)(Object(m.a)({}, i.data.getUserProfile), {}, {isAdmin: r}), t.abrupt("return", Promise.resolve(o));
                        case 9:
                        case"end":
                            return t.stop()
                    }
                }), t)
            }))), {enabled: !!e})
        }

        function gi() {
            var e = Object(I.b)();
            return Object(di.a)((function (e) {
                var t = e.profileData;
                return In.a.graphql(Object(Mn.b)(Tn, {input: t}))
            }), {
                onSuccess: function (t) {
                    e.invalidateQueries(["profile", t.data.createUserProfile.id])
                }, onError: function (e) {
                    console.error(e)
                }, retry: !1
            })
        }

        function xi(e) {
            return ji.apply(this, arguments)
        }

        function ji() {
            return (ji = Object(p.a)(d.a.mark((function e(t) {
                var n, i, a;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, null !== (n = li.a.getItem(t))) {
                                e.next = 7;
                                break
                            }
                            return e.next = 5, In.a.graphql(Object(Mn.b)(Yn, {id: t}));
                        case 5:
                            n = e.sent, li.a.setItem(t, n, {expires: hi(2).getTime()});
                        case 7:
                            if (n.data.getUserProfile) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return", n);
                        case 9:
                            return e.next = 11, yi();
                        case 11:
                            return i = e.sent, a = {data: {getUserProfile: Object(m.a)(Object(m.a)({}, n.data.getUserProfile), {}, {isAdmin: i})}}, e.abrupt("return", Promise.resolve(a));
                        case 16:
                            throw e.prev = 16, e.t0 = e.catch(0), e.t0;
                        case 19:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 16]])
            })))).apply(this, arguments)
        }

        function vi() {
            return wi.apply(this, arguments)
        }

        function wi() {
            return (wi = Object(p.a)(d.a.mark((function e() {
                var t;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, t = U.a.currentAuthenticatedUser({bypassCache: !1}), e.abrupt("return", t);
                        case 5:
                            throw e.prev = 5, e.t0 = e.catch(0), e.t0;
                        case 8:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 5]])
            })))).apply(this, arguments)
        }

        function yi() {
            return Oi.apply(this, arguments)
        }

        function Oi() {
            return (Oi = Object(p.a)(d.a.mark((function e() {
                var t, n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, vi();
                        case 2:
                            if (t = e.sent, void 0 === (n = t.signInUserSession.accessToken.payload["cognito:groups"]) || !n.includes("admin")) {
                                e.next = 8;
                                break
                            }
                            return e.abrupt("return", !0);
                        case 8:
                            return e.abrupt("return", !1);
                        case 9:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function Ci(e) {
            return ki.apply(this, arguments)
        }

        function ki() {
            return (ki = Object(p.a)(d.a.mark((function e(t) {
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            In.a.graphql(Object(Mn.b)(Zn, {input: t}));
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function Li(e) {
            return Ni.apply(this, arguments)
        }

        function Ni() {
            return (Ni = Object(p.a)(d.a.mark((function e(t) {
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            In.a.graphql(Object(Mn.b)(Zn, {input: t}));
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var Ii = function () {
            var e = Z(), t = e.dataEventSubject$, n = e.types;
            Object(i.useEffect)((function () {
                var e = t.pipe(Object(On.a)((function (e) {
                    return Nn(e.type, n.USER_REGISTERED)
                })), Object(Cn.a)((function (e) {
                    return Object(m.a)(Object(m.a)({}, e.payload), {}, {type: e.type})
                }))).subscribe({
                    next: function () {
                        var e = Object(p.a)(d.a.mark((function e(t) {
                            var n, i, a;
                            return d.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        ri({
                                            id: t.id,
                                            firstName: t.firstName,
                                            lastName: t.lastName,
                                            email: t.email,
                                            country: t.country,
                                            phone: t.phoneNumber,
                                            company: t.company,
                                            state: null !== (n = t.state) && void 0 !== n ? n : null,
                                            province: null !== (i = t.province) && void 0 !== i ? i : null,
                                            jobTitle: t.jobTitle,
                                            optiIn: t.optiIn,
                                            mktoCampaignID: t.mktoCampaignID,
                                            attendeeType: t.attendeeType,
                                            utmMedium: t.utmMedium,
                                            utmCampaign: t.utmCampaign,
                                            utmSource: t.utmSource,
                                            utmRegion: t.utmRegion,
                                            utmContent: t.utmContent,
                                            utmCreative: t.utmCreative,
                                            utmTerm: t.utmTerm,
                                            utmKeyword: t.utmKeyword,
                                            mCVID: null !== (a = t.mCVID) && void 0 !== a ? a : null
                                        });
                                    case 1:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                });
                return function () {
                    return e.unsubscribe()
                }
            }), [n.USER_REGISTERED, t]), Object(i.useEffect)((function () {
                var e = t.pipe(Object(On.a)((function (e) {
                    return Nn(e.type, n.USER_LOGGED_IN)
                })), Object(Cn.a)((function (e) {
                    return e.payload
                }))).subscribe({
                    next: function () {
                        var e = Object(p.a)(d.a.mark((function e(t) {
                            var n;
                            return d.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ci();
                                    case 2:
                                        if (n = e.sent) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        Ci({
                                            firstName: n.firstName,
                                            lastName: n.lastName,
                                            email: n.email,
                                            jobTitle: n.jobTitle,
                                            company: n.company,
                                            eventType: "LOGIN",
                                            userProfileId: n.id
                                        });
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(), error: function (e) {
                        console.error({})
                    }
                });
                return function () {
                    return e.unsubscribe()
                }
            }), [])
        }, Si = n(441), zi = Ln.a.object({
            company: Ln.a.string().required(),
            business_role: Ln.a.string().required(),
            attendee_type: Ln.a.string().required()
        }), Ei = function (e) {
            var t, n = Object(m.a)({tealium_event: "userProfileCompleteEvent"}, e);
            null === (t = window.utag) || void 0 === t || t.link(n)
        }, Mi = function () {
            var e = new CustomEvent("pollSubmitEvent");
            document.querySelector("body").dispatchEvent(e)
        }, _i = function () {
            var e = new CustomEvent("userIsChattingEvent");
            document.querySelector("body").dispatchEvent(e)
        };
        var Ti = function () {
            var e = Z(), t = e.dataEventSubject$, n = e.types;
            Object(i.useEffect)((function () {
                window.digital_data ? window.digital_data = {} : window.digital_data = window.digital_data || {}
            }), []), Object(i.useEffect)((function () {
                var e = t.pipe(Object(On.a)((function (e) {
                    return e.type === n.PAGE_VIEW
                })), Object(Cn.a)((function (e) {
                    return Object(m.a)({}, e.payload)
                }))).subscribe({
                    next: function (e) {
                        var t = e.pathname, n = t.split("/"), i = e.lang, a = "hv-event", r = n[n.length - 1];
                        window.digital_data.page = {
                            page: Object(m.a)(Object(m.a)({
                                locale: i,
                                page_path: t,
                                page_name: "".concat(a, ":").concat(r),
                                page_url: window.location.href,
                                site_id: a,
                                section_cat1_cat2: r,
                                page_name_loc: "".concat(a, ":").concat(i, ":").concat(r)
                            }, !!e.userId && {user_id: e.userId}), {}, {login_status: e.userId ? "Logged In" : "Logged Out"})
                        }
                    }
                });
                return function () {
                    return e.unsubscribe()
                }
            }), []), Object(i.useEffect)((function () {
                var e = t.pipe(Object(On.a)((function (e) {
                    return e.type === n.USER_PROFILE_COMPLETE
                })), Object(Cn.a)((function (e) {
                    return {
                        company: e.payload.company,
                        business_role: e.payload.professionalLevel,
                        attendee_type: e.payload.attendeeType
                    }
                })), Object(Si.a)((function (e) {
                    var t = zi.validate(e);
                    if (t.error) throw Ei(e), t.error
                }))).subscribe({
                    next: function (e) {
                        Ei(e)
                    }, error: function (e) {
                    }
                });
                return function () {
                    return e.unsubscribe()
                }
            }), []), Object(i.useEffect)((function () {
                var e = t.pipe(Object(On.a)((function (e) {
                    return e.type === n.USER_LOGGED_IN
                }))).subscribe({
                    next: function (e) {
                        !function () {
                            var e = new CustomEvent("userLoginEvent");
                            document.querySelector("body").dispatchEvent(e)
                        }()
                    }, error: function (e) {
                    }
                });
                return function () {
                    return e.unsubscribe()
                }
            }), []), Object(i.useEffect)((function () {
                var e = t.pipe(Object(On.a)((function (e) {
                    return e.type === n.USER_REGISTERED
                }))).subscribe({
                    next: function (e) {
                        !function () {
                            var e = new CustomEvent("userRegistrationEvent");
                            document.querySelector("body").dispatchEvent(e)
                        }()
                    }, error: function (e) {
                    }
                });
                return function () {
                    return e.unsubscribe()
                }
            }), [])
        }, Ri = n(21), Ai = n(210), Pi = n(265), Di = n(267);
        var Zi = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "no name", t = Z(),
                n = t.dataEventSubject$;
            return Object(i.useEffect)((function () {
                var t = n.subscribe((function (t) {
                    console.log(e, t)
                }));
                return function () {
                    return t.unsubscribe()
                }
            }), []), {dataEventSubject$: n}
        };
        Ai.a.registerLanguage("json", Pi.a);
        var qi = ce.b.div.withConfig({
            displayName: "DataCollectionMonitor__DataCollectionMonitorStyles",
            componentId: "sc-qyt4w9-0"
        })(['font-family:"Courier New",Courier,monospace;font-size:1.2rem;position:fixed;width:90%;max-height:50%;top:55px;left:50%;transform:translateX(-50%);z-index:24;background:#141414;color:#ffffff;padding:2rem;overflow-y:auto;overflow-x:hidden;h3{color:#00e0e0;font-size:1.4rem;font-weight:600;small{color:#abe338;}}.close-button{position:absolute;top:20px;right:20px;color:#ffffff;z-index:22;cursor:pointer;}']);
        ce.b.button.withConfig({
            displayName: "DataCollectionMonitor__DataCollectionMonitorToggleStyles",
            componentId: "sc-qyt4w9-1"
        })(["position:fixed;left:120px;z-index:24;bottom:75px;.icon{font-size:22px;}"]);
        var Ui = function (e) {
            var t = e.isActive, n = e.onClose, a = void 0 === n ? function () {
                } : n, r = Object(i.useState)([]), o = Object(z.a)(r, 2), c = o[0], s = o[1],
                l = Zi("DataCollectionMonitor").dataEventSubject$, d = Object(i.useRef)();
            return Object(i.useLayoutEffect)((function () {
                var e = l.subscribe((function (e) {
                    s((function (t) {
                        return [].concat(Object(Ri.a)(t), [e])
                    }))
                }));
                return function () {
                    return e.unsubscribe()
                }
            }), []), Object(i.useLayoutEffect)((function () {
                d.current && (d.current.scrollTop = d.current.scrollHeight)
            }), [c]), Object(R.jsx)(R.Fragment, {
                children: t && Object(R.jsxs)(qi, {
                    ref: d,
                    children: [Object(R.jsx)("button", {
                        className: "close-button",
                        onClick: a,
                        children: Object(R.jsx)(jt, {name: "close", width: "15px"})
                    }), Object(R.jsx)("ol", {
                        children: c.map((function (e, t) {
                            return Object(R.jsxs)("li", {
                                children: [Object(R.jsx)("h3", {children: e.type}), Object(R.jsx)(Ai.a, {
                                    language: "json",
                                    style: Di.a,
                                    children: JSON.stringify(e.payload)
                                })]
                            }, t)
                        }))
                    })]
                })
            })
        };
        var Hi = function () {
                var e = Object(i.useState)(!1), t = Object(z.a)(e, 2), n = t[0], a = t[1], r = ie().currentUserId,
                    o = Object(h.g)(), c = Object(h.h)(), s = Object(h.j)().path, l = Object(h.i)().lang,
                    d = Z().trackPageView, p = f(), u = new URLSearchParams(Object(h.h)().search);
                return Object(i.useEffect)((function () {
                    r && o.replace("/go/storage-acceleration/en?ecid=".concat(u.get("ecid"), "&utmMedium=").concat(u.get("utmMedium"), "&utmSource=").concat(u.get("utmSource"), "&utmCampaign").concat(u.get("utmCampaign"), "&utmContent=").concat(u.get("utmContent")))
                }), [r, u, o]), En(), Ii(), Ti(), Object(i.useEffect)((function () {
                    d(Object(m.a)({lang: l}, c))
                }), [c, l, d]), Object(R.jsxs)(tn, {
                    children: [j, p.includes("analytics") && Object(R.jsx)(Ui, {
                        isActive: n || p.includes("analytics"),
                        onClose: function () {
                            return a(!1)
                        }
                    }), Object(R.jsxs)("div", {
                        className: "registration-page-container-inner", children: [Object(R.jsxs)(en, {
                            children: [Object(R.jsx)("div", {
                                className: "hero-container",
                                children: Object(R.jsx)("img", {
                                    src: "/static/images/registration/registration-hitachi-logo.png",
                                    alt: "Hitachi Registration Hero Header"
                                })
                            }), Object(R.jsxs)("div", {
                                className: "cta-container",
                                children: [Object(R.jsxs)("h1", {
                                    className: "reg-title",
                                    children: ["The Road Ahead: Digital Infrastructure for the ", Object(R.jsx)("span", {
                                        className: "reg-underline",
                                        children: "Data-Driven."
                                    })]
                                }), Object(R.jsx)("h3", {
                                    className: "re-date",
                                    children: "October 12th at 8:30am PT | 4:30pm BST"
                                }), Object(R.jsxs)("div", {
                                    className: "reg-description",
                                    children: ["Leaders are constantly navigating change in the race to digital. Join us for this special launch event to hear how we\u2019re super-charging infrastructure innovation. The first 100 registrants will be eligible to receive an autographed Team Penske & Hitachi 2021 diecast car! All registrants are eligible to win VIP INDYCAR tickets when you join us online for the event! Learn more about the event here. ", Object(R.jsx)("a", {
                                        href: "https://www.hitachivantara.com/go/storage-acceleration/",
                                        children: "hitachivantara.com"
                                    }), Object(R.jsx)("div", {
                                        className: "reg-card-promo",
                                        children: " No Purchase Necessary. Void Where Prohibited By Law. Odds of Winning Will Depend on the Total Number of Entries Received. Open to legal residents 18+ in the continental United States (excluding residents of Puerto Rico, Hawaii, and Alaska) Only attendees to the live event (\u201cEvent\u201d) are eligible to win. Winner will be announced at the end of the Event. Other restrictions apply, subject to winner\u2019s acceptance following announcement at Event. Prize and conditions may be changed at any time by Hitachi Vantara, LLC."
                                    })]
                                })]
                            })]
                        }), Object(R.jsx)(Gt, {
                            children: Object(R.jsx)(E.a, {
                                exitBeforeEnter: !0,
                                initial: !1,
                                children: Object(R.jsxs)(h.d, {
                                    children: [Object(R.jsx)(h.b, {
                                        path: "".concat(s, "/forgot-password"),
                                        children: Object(R.jsx)(hn, {})
                                    }, "forgot-password"), Object(R.jsx)(h.b, {
                                        path: "".concat(s, "/confirm-password"),
                                        children: Object(R.jsx)(fn, {})
                                    }, "confirm-password"), Object(R.jsx)(h.b, {
                                        path: "".concat(s, "/confirm-email"),
                                        children: Object(R.jsx)(vn, {})
                                    }, "confirm-email"), Object(R.jsx)(h.b, {
                                        path: "".concat(s, "/confirm-email-success"),
                                        children: Object(R.jsx)(yn, {})
                                    }, "confirm-email-success"), Object(R.jsx)(h.b, {
                                        path: "".concat(s, "/login"),
                                        children: Object(R.jsx)(mn, {})
                                    }, "login"), Object(R.jsx)(h.b, {
                                        path: "".concat(s),
                                        children: Object(R.jsx)(jn, {})
                                    }, "registration")]
                                })
                            })
                        })]
                    })]
                })
            }, Bi = Object(i.createContext)(), Fi = {
                SPOTLIGHT: "spotlight",
                HEATMAP: "heatmap",
                SIDE_NAV: "sideNav",
                MOBILE_NAV: "mobileNav",
                CHAT: "chat",
                USER_DRAWER: "userDrawer",
                USER_DASHBOARD: "userDashboard",
                AGENDA_MENU: "agenda"
            }, $i = function (e) {
                var t = e.children, n = Object(i.useState)(null), a = Object(z.a)(n, 2), r = a[0], o = a[1],
                    c = Object(i.useState)(null), s = Object(z.a)(c, 2), l = s[0], d = s[1];
                return Object(R.jsx)(Bi.Provider, {
                    value: {
                        currentMenu: r, showMenu: function (e) {
                            o(e)
                        }, hideMenus: function () {
                            o(null)
                        }, toggleMenu: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                            };
                            o((function (n) {
                                var i = n === e ? null : e;
                                return t(i), d(null), i
                            }))
                        }, currentHotspot: l, triggerHotspot: function (e) {
                            d("string" === typeof e ? e : null)
                        }, menuTypes: Fi
                    }, children: t
                })
            },
            Vi = "\n  subscription OnCreateMessage($topicId: ID!) {\n    onCreateMessage(topicId: $topicId) {\n      id\n      content\n      topicId\n      fromName\n      fromFirstName\n      fromLastName\n      fromUserId\n      createdAt\n      updatedAt\n      topic {\n        id\n        name\n        contentId\n        type\n        icon\n        createdAt\n        updatedAt\n        messages {\n          nextToken\n        }\n      }\n      messageReplies {\n        items {\n          id\n          content\n          topicId\n          messageId\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n",
            Wi = "\n  subscription OnDeleteMessage($topicId: ID!) {\n    onDeleteMessage(topicId: $topicId) {\n      id\n      content\n      topicId\n      fromName\n      fromFirstName\n      fromLastName\n      fromUserId\n      createdAt\n      updatedAt\n      topic {\n        id\n        name\n        contentId\n        type\n        icon\n        createdAt\n        updatedAt\n        messages {\n          nextToken\n        }\n      }\n      messageReplies {\n        items {\n          id\n          content\n          topicId\n          messageId\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n",
            Gi = "\n  subscription OnCreateConvoMessage($convoId: ID!) {\n    onCreateConvoMessage(convoId: $convoId) {\n      id\n      content\n      convoId\n      fromName\n      fromUserId\n      createdAt\n      updatedAt\n      room {\n        id\n        user1Id\n        user2Id\n        createdAt\n        updatedAt\n        confirmed\n        messages {\n          nextToken\n        }\n      }\n    }\n  }\n",
            Xi = "\n  query ListMessagesByTopicId(\n    $topicId: ID\n    $createdAt: ModelStringKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelMessageFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listMessagesByTopicId(\n      topicId: $topicId\n      createdAt: $createdAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        content\n        topicId\n        fromName\n        fromFirstName\n        fromLastName\n        fromUserId\n        createdAt\n        updatedAt\n        topic {\n          id\n          name\n          contentId\n          type\n          createdAt\n          updatedAt\n        }\n        messageReplies {\n          items {\n            content\n            createdAt\n            id\n            messageId\n            topicId\n          }\n        }\n      }\n      nextToken\n    }\n  }\n";

        function Qi(e) {
            return Ki.apply(this, arguments)
        }

        function Ki() {
            return (Ki = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(Jn, {filter: {or: [{user1Id: {contains: t}}, {user2Id: {contains: t}}]}}));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function Yi(e) {
            return Ji.apply(this, arguments)
        }

        function Ji() {
            return (Ji = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(An, {
                                input: {
                                    id: t,
                                    confirmed: !0
                                }
                            }));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function ea(e, t) {
            return ta.apply(this, arguments)
        }

        function ta() {
            return (ta = Object(p.a)(d.a.mark((function e(t, n) {
                var i;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(Rn, {
                                input: {
                                    user1Id: t,
                                    user2Id: n,
                                    confirmed: !1
                                }
                            }));
                        case 3:
                            return i = e.sent, e.abrupt("return", i);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function na() {
            return ia.apply(this, arguments)
        }

        function ia() {
            return (ia = Object(p.a)(d.a.mark((function e() {
                var t;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(ii, {limit: 1e3}));
                        case 3:
                            return t = e.sent, e.abrupt("return", t);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function aa(e) {
            return ra.apply(this, arguments)
        }

        function ra() {
            return (ra = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(Xi, {
                                topicId: t,
                                limit: 200,
                                sortDirection: "DESC"
                            }));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function oa(e) {
            return ca.apply(this, arguments)
        }

        function ca() {
            return (ca = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(Xn, {input: t}));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function sa(e) {
            return la.apply(this, arguments)
        }

        function la() {
            return (la = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(Pn, {input: t}));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function da(e) {
            return pa.apply(this, arguments)
        }

        function pa() {
            return (pa = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(Wn, {input: t}));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function ma(e) {
            return ua.apply(this, arguments)
        }

        function ua() {
            return (ua = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(Kn, {input: t}));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function ha(e) {
            return ba.apply(this, arguments)
        }

        function ba() {
            return (ba = Object(p.a)(d.a.mark((function e(t) {
                var n, i;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, n = {id: t}, e.next = 4, In.a.graphql(Object(Mn.b)(Qn, {input: n}));
                        case 4:
                            return i = e.sent, e.abrupt("return", i);
                        case 8:
                            throw e.prev = 8, e.t0 = e.catch(0), e.t0;
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 8]])
            })))).apply(this, arguments)
        }

        function fa() {
            return (fa = Object(p.a)(d.a.mark((function e(t) {
                var n, i;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, n = {id: t}, e.next = 4, In.a.graphql(Object(Mn.b)(Dn, {input: n}));
                        case 4:
                            return i = e.sent, e.abrupt("return", i);
                        case 8:
                            throw e.prev = 8, e.t0 = e.catch(0), e.t0;
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 8]])
            })))).apply(this, arguments)
        }

        function ga(e) {
            return xa.apply(this, arguments)
        }

        function xa() {
            return (xa = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(ai, {contentId: t}));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function ja(e) {
            return va.apply(this, arguments)
        }

        function va() {
            return (va = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(Gn, {input: {id: t}}));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        var wa = n(103), ya = n(104), Oa = function () {
                function e() {
                    Object(wa.a)(this, e), this.list = new Map, this.emitQueue = new Map
                }

                return Object(ya.a)(e, [{
                    key: "on", value: function (e, t) {
                        return this.list.has(e) ? this.list.get(e).push(t) : this.list.set(e, [t]), this
                    }
                }, {
                    key: "off", value: function (e, t) {
                        if (!this.list.get(e)) return this;
                        if (t) {
                            var n = this.list.get(e).filter((function (e) {
                                return e !== t
                            }));
                            return this.list.set(e, n), this
                        }
                        return this.list.delete(e), this
                    }
                }, {
                    key: "cancelEmit", value: function (e) {
                        var t = this.emitQueue.get(e);
                        return t && (t.forEach((function (e) {
                            return clearTimeout(e)
                        })), this.emitQueue.delete(e)), this
                    }
                }, {
                    key: "emit", value: function (e) {
                        for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                        return this.list.has(e) && this.list.get(e).forEach((function (n) {
                            var a = setTimeout((function () {
                                n.apply(void 0, i)
                            }), 0);
                            t.emitQueue.has(e) ? t.emitQueue.get(e).push(a) : t.emitQueue.set(e, [n])
                        })), this
                    }
                }]), e
            }(), Ca = Oa, ka = function () {
                function e(t) {
                    var n = t.time, i = void 0 === n ? 1e4 : n, a = t.onStart, r = void 0 === a ? function () {
                    } : a, o = t.onUpdate, c = void 0 === o ? function () {
                    } : o, s = t.onComplete, l = t.autoStart, d = void 0 !== l && l;
                    Object(wa.a)(this, e), this.states = {
                        playing: "playing",
                        paused: "paused"
                    }, this.time = i, this.frames = this.time / 30, this.autoStart = d, this.state = this.states.playing, this.onStart = r, this.onUpdate = c, this.onComplete = s, this.autoStart && this.start()
                }

                return Object(ya.a)(e, [{
                    key: "start", value: function (e) {
                        var t = this;
                        "function" === typeof e && (this.onUpdate = e), this.state = this.states.playing, requestAnimationFrame((function () {
                            t.update()
                        }))
                    }
                }, {
                    key: "update", value: function () {
                        var e = this;
                        return this.onUpdate(this.frames, 30 * this.frames / this.time * 100), this._decrement(), this.frames <= 0 ? (this.onComplete(), this) : (this.state === this.states.playing && requestAnimationFrame((function () {
                            return e.update()
                        })), this)
                    }
                }, {
                    key: "_decrement", value: function () {
                        return this.frames -= 1, this
                    }
                }, {
                    key: "stop", value: function () {
                        return this.state = this.states.paused, this
                    }
                }, {
                    key: "reset", value: function () {
                        return this.frames = this.time / 30, this.onUpdate(this.frames), this
                    }
                }]), e
            }(), La = "STARTED", Na = "STOPPED", Ia = {
                INFO: "INFO",
                ERROR: "ERROR",
                SUCCESS: "SUCCESS",
                GENERIC: "GENERIC",
                CHAT_REQUEST: "CHAT_REQUEST",
                BIG_BONUS: "BIG_BONUS",
                SWAG_EARNED: "SWAG_EARNED",
                LEVEL_UP: "LEVEL_UP",
                SESSION_SCHEDULED: "SESSION_SCHEDULED",
                SESSION_REMINDER: "SESSION_REMINDER",
                MESSAGE_RECEIVED: "MESSAGE_RECEIVED",
                ZONE_CHANGED: "ZONE_CHANGED"
            }, Sa = "SHOW", za = "HIDE", Ea = Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__NotificationContainerStyles",
                componentId: "sc-4jz82i-0"
            })(["position:fixed;width:330px;height:calc(100vh - 80px);bottom:115px;right:30px;z-index:101;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end;pointer-events:none;@media (max-width:790px){display:none;}"]),
            Ma = Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__NotificationStyles",
                componentId: "sc-4jz82i-1"
            })(["pointer-events:auto;position:relative;display:flex;margin:20px 0 0 0;@media (max-width:790px){display:none;}"]),
            _a = Object(ce.b)(se.a.button).withConfig({
                displayName: "styles__NotificationCloseStyles",
                componentId: "sc-4jz82i-2"
            })(["color:var(--color-white);background:transparent;position:absolute;right:10px;top:-20px;border:none;display:flex;justify-content:center;align-items:center;padding:0;"]),
            Ta = (Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__BasicNotificationStyles",
                componentId: "sc-4jz82i-3"
            })(["min-height:65px;width:250px;padding:0 2rem;border:1px solid var(--color-medium-gray);background:rgba(0,0,0,0.9);box-shadow:0 22px 34px 0 var(-color-notification-shadow);display:flex;justify-content:flex-start;align-items:center;overflow:hidden;.image-container{margin:0 1rem 0 0;}span{font-size:11px;}@media (max-width:575px){width:100%;}"]), Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__ImageNotificationStyles",
                componentId: "sc-4jz82i-4"
            })(["width:100%;padding:15px 15px 15px 20px;background-color:var(--color-notification-background);border:1px solid var(--color-medium-gray);box-shadow:0 22px 34px 0 var(--color-notification-shadow);display:flex;justify-content:flex-start;align-items:center;flex-wrap:nowrap;gap:1.5em;", "{top:-18px;right:3px;}.image-fallback{width:100%;height:100%;display:flex;align-items:center;justify-content:center;}.icon-container{width:62px;height:62px;color:#ffffff;background:#000000;border-radius:50%;display:flex;justify-content:center;align-items:center;}.notification-button{margin:10px 0 0 0;}.message{font-size:13px;letter-spacing:0;line-height:18px;}.image-container{width:96px;height:96px;background:#eeeeee;flex-shrink:0;img{width:96px;height:96px;}}.calendar-icon-container{padding-bottom:4rem;}"], _a)),
            Ra = ce.b.div.withConfig({
                displayName: "styles__TimerStyles",
                componentId: "sc-4jz82i-5"
            })(["width:100%;height:2px;position:absolute;bottom:0;left:1px;"]), Aa = Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__TimerBarStyles",
                componentId: "sc-4jz82i-6"
            })(["position:absolute;left:0;top:0;height:2px;background:var(--color-primary);"]), Pa = ce.b.div.withConfig({
                displayName: "styles__ZoneNotificationContainerStyles",
                componentId: "sc-4jz82i-7"
            })(["position:absolute;width:420px;height:245px;left:40px;bottom:250px;z-index:1;"]),
            Da = Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__ZoneNotificationStyles",
                componentId: "sc-4jz82i-8"
            })(['width:420px;height:245px;background:#ffffff;padding:74px 0 40px 65px;position:absolute;left:0;top:0;.content-container{margin:0 0 0 20px;position:relative;&:after{content:"";width:294px;height:200px;position:absolute;top:-55px;left:-65px;border-left:4px solid var(--color-notification-border);border-top:4px solid var(--color-notification-border);}}h1{color:#000000;font-family:var(--font-display);font-size:75px;font-weight:300;line-height:61px;padding:0;margin:0 0 0 30px;position:relative;white-space:pre;&:before{content:"Welcome to the";position:absolute;left:-95px;top:21px;margin:0;padding:0;color:#000000;font-family:var(--font-display);font-size:17px;letter-spacing:1.6px;font-weight:300;line-height:68px;transform:rotate(-90deg);white-space:nowrap;text-align:center;}}']),
            Za = (Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__ModalContainer",
                componentId: "sc-4jz82i-9"
            })(["position:fixed;display:flex;align-items:flex-start;justify-content:center;text-align:center;width:100vw;height:100vh;top:0;left:0;z-index:1000;background:var(--color-notification-modal-container);.notification-modal-content{position:fixed;width:537px;border:1px solid var(--color-medium-gray);height:245px;flex-direction:column;align-items:center;margin-top:12rem;padding:3rem;transform:translateY(20%);background:var(--color-notification-background);box-shadow:0 22px 34px 0 var(-color-notification-shadow);}.modal-header{font-family:var(--font-display);font-size:28px;margin:0;font-weight:300;}.modal-message{font-size:18px;font-weight:bold;margin:4rem 0;}.button-group{display:flex;justify-content:center;button{width:175px;font-size:14px;margin:0 1.4rem;}}"]), Object(ce.b)(se.a.button).withConfig({
                displayName: "styles__ModalClose",
                componentId: "sc-4jz82i-10"
            })(["color:var(--color-white);background:transparent;border:none;width:28px;height:17px;border:none;position:absolute;top:-24px;right:-32px;padding-top:0;cursor:pointer;z-index:7;svg{width:15px;}"]), Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__PrizeModalContainer",
                componentId: "sc-4jz82i-11"
            })(['position:fixed;display:flex;align-items:flex-start;justify-content:center;width:100vw;height:100vh;top:0;left:0;z-index:1000;.notification-modal-content{position:fixed;width:1028px;height:468px;flex-direction:column;margin-top:5rem;padding:3rem;transform:translateY(20%);background-color:var(--color-white);background-image:url(/static/images/hitachi-light/prize-modal-driver.png);background-repeat:no-repeat;background-position:left -10px bottom 0px;}.modal-title-wrapper{display:flex;flex-direction:column;padding-left:280px;margin-top:50px;.modal-sub-title{font-style:normal;font-weight:bold;font-size:48px;line-height:50px;color:var(--color-black);margin-bottom:15px;}.modal-title{font-style:normal;font-weight:bold;font-size:78px;line-height:64px;color:var(--color-black);&::after{content:"";display:block;width:612px;border-bottom:10px solid var(--color-red);margin-top:-10px;}}}.modal-thank-you-message{font-style:normal;font-weight:normal;font-size:26px;line-height:32px;color:var(--color-black);padding-left:280px;margin-top:35px;}.modal-prize-message{font-style:italic;font-weight:normal;font-size:20px;line-height:28px;color:var(--color-black);padding-left:280px;margin-top:15px;}'])),
            qa = Object(ce.b)(se.a.button).withConfig({
                displayName: "styles__PrizeModalClose",
                componentId: "sc-4jz82i-12"
            })(["color:var(--color-red);background:transparent;border:none;width:28px;height:17px;border:none;position:absolute;top:24px;right:32px;padding-top:0;cursor:pointer;z-index:7;svg{width:15px;}"]);

        function Ua(e) {
            var t = e.message;
            return e.type === Ia.CHAT_REQUEST ? Object(R.jsxs)("div", {
                className: "message",
                children: [Object(R.jsx)("strong", {children: t}), " has invited you to chat"]
            }) : Object(R.jsx)("div", {className: "message", children: t})
        }

        function Ha(e) {
            var t = e.type, n = e.imgSrc;
            switch (t) {
                case Ia.CHAT_REQUEST:
                    return Object(R.jsx)(se.a.div, {
                        className: "image-container",
                        children: !n && Object(R.jsx)("div", {
                            className: "image-fallback",
                            children: Object(R.jsx)("div", {
                                className: "icon-container",
                                children: Object(R.jsx)(jt, {width: "35px", name: "chat"})
                            })
                        })
                    });
                case Ia.SWAG_EARNED:
                    return Object(R.jsx)(se.a.div, {
                        className: "medium-image-container",
                        children: !n && Object(R.jsx)("div", {
                            className: "image-fallback",
                            children: Object(R.jsx)("div", {
                                className: "icon-container green",
                                children: Object(R.jsx)(jt, {width: "50px", name: "swag-add"})
                            })
                        })
                    });
                case Ia.SUCCESS:
                    return Object(R.jsx)(se.a.div, {
                        className: "calendar-icon-container",
                        children: Object(R.jsx)("div", {
                            className: "icon-wrapper",
                            children: Object(R.jsx)(jt, {name: "calendar", width: "30px"})
                        })
                    });
                default:
                    return Object(R.jsx)(se.a.div, {
                        className: "image-container",
                        children: !n && Object(R.jsx)("div", {
                            className: "image-fallback",
                            children: Object(R.jsx)("div", {
                                className: "icon-container",
                                children: Object(R.jsx)(jt, {width: "35px", name: "chat"})
                            })
                        })
                    })
            }
        }

        var Ba = function (e) {
            var t = e.message, n = e.button, i = void 0 === n ? {
                    text: null, action: function () {
                    }
                } : n, a = e.type, r = void 0 === a ? Ia.GENERIC : a, o = e.imgSrc, c = void 0 === o ? null : o,
                s = e.closeNotification;
            return Object(R.jsxs)(Ta, {
                children: [Object(R.jsx)(_a, {
                    onClick: function () {
                        return s()
                    }, children: Object(R.jsx)(jt, {color: "#979797", name: "close", width: "11px"})
                }), Object(R.jsx)(Ha, {imgSrc: c, type: r}), Object(R.jsxs)("div", {
                    className: "content-container",
                    children: [Object(R.jsx)(Ua, {
                        type: r,
                        message: t
                    }), i.text && Object(R.jsx)(Nt, {
                        onClick: function () {
                            i.action(), s()
                        }, className: "notification-button", size: "small", children: i.text
                    })]
                })]
            })
        }, Fa = new Ca;

        function $a() {
            return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10)
        }

        var Va = {
            initial: {opacity: 0, x: 200},
            show: {opacity: 1, x: 0, transition: {ease: "easeOut"}},
            hide: {opacity: 0, x: 200, transition: {ease: "easeOut", duration: .2}}
        };

        function Wa(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ia.GENERIC,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Fa.emit(Sa, {message: e, type: t, options: n})
        }

        function Ga() {
            return {notify: Wa, notificationTypes: Ia}
        }

        function Xa() {
            var e = Object(i.useState)([]), t = Object(z.a)(e, 2), n = t[0], a = t[1], r = Object(i.useState)(null),
                o = Object(z.a)(r, 2), c = o[0], s = o[1];

            function l(e, t, n) {
                return Object(R.jsx)(Ba, {message: t, type: e, button: null === n || void 0 === n ? void 0 : n.button})
            }

            return Object(i.useEffect)((function () {
                return Fa.on(Sa, (function (e) {
                    var t = e.message, n = e.type, i = e.options;
                    n === Ia.ZONE_CHANGED ? s({message: t, type: n, options: i, id: $a()}) : a((function (e) {
                        return [].concat(Object(Ri.a)(e), [{message: t, type: n, options: i, id: $a()}])
                    }))
                })), function () {
                    return Fa.off(Sa)
                }
            }), []), Object(i.useEffect)((function () {
                return Fa.on(za, (function (e, t) {
                    t === Ia.ZONE_CHANGED ? s((function (t) {
                        return t.id === e ? null : t
                    })) : a((function (t) {
                        return t.filter((function (t) {
                            return t.id !== e
                        }))
                    }))
                })), function () {
                    return Fa.off(za)
                }
            }), []), Object(R.jsxs)("div", {
                children: [Object(R.jsx)(E.a, {
                    children: c && Object(R.jsx)(Pa, {
                        children: Object(R.jsx)(Qa, {
                            layout: !0,
                            message: c.message,
                            id: c.id
                        }, c.id)
                    })
                }), Object(R.jsx)(Ea, {
                    children: Object(R.jsx)(E.a, {
                        initial: !1, children: n.map((function (e) {
                            var t, n = e.message, i = e.type, a = e.id, r = e.options;
                            return Object(R.jsx)(Ka, {
                                id: a,
                                hasTimer: null !== (t = null === r || void 0 === r ? void 0 : r.hasTimer) && void 0 !== t && t,
                                children: l(i, n, r)
                            }, "type-".concat(a))
                        }))
                    })
                })]
            })
        }

        function Qa(e) {
            var t = e.id, n = e.message, a = Object(i.useRef)(new ka({
                onComplete: function () {
                    return Fa.emit(za, t, Ia.ZONE_CHANGED)
                }
            }));
            return Object(i.useEffect)((function () {
                a.current.start()
            }), []), Object(R.jsx)(Da, {
                initial: {opacity: 0},
                animate: {opacity: 1},
                exit: {opacity: 0},
                children: Object(R.jsx)("div", {
                    className: "content-container",
                    children: Object(R.jsx)("h1", {children: n})
                })
            })
        }

        function Ka(e) {
            var t = e.children, n = e.id, a = e.hasTimer, r = void 0 !== a && a, o = Object(i.useState)(r ? La : Na),
                c = Object(z.a)(o, 2), s = c[0], l = c[1], d = Object(i.useRef)(), p = Object(i.useRef)(new ka({
                    onComplete: function () {
                        return Fa.emit(za, n)
                    }
                })), m = function (e, t) {
                    return i.Children.toArray(e).map((function (e, n) {
                        return Object(i.cloneElement)(e, t)
                    }))
                }(t, {
                    closeNotification: function () {
                        Fa.emit(za, n)
                    }
                });
            return Object(i.useEffect)((function () {
                s === Na ? p.current.stop() : p.current.start((function (e, t) {
                    d.current && d.current.setAttribute("style", "width: ".concat(t, "%;"))
                }))
            }), [p, s]), Object(R.jsxs)(Ma, {
                initial: "initial",
                animate: "show",
                exit: "hide",
                layout: !0,
                variants: Va,
                onPointerEnter: function () {
                    r && l(Na)
                },
                onPointerLeave: function () {
                    r && l(La)
                },
                children: [m, Object(R.jsx)(Ra, {children: Object(R.jsx)(Aa, {ref: d})})]
            })
        }

        var Ya = Object(i.createContext)(), Ja = function (e) {
                var t = e.children, n = Object(i.useState)(null), a = Object(z.a)(n, 2), r = a[0], o = a[1],
                    c = Object(i.useState)([]), s = Object(z.a)(c, 2), l = s[0], m = s[1], u = Object(i.useState)([]),
                    h = Object(z.a)(u, 2), b = h[0], f = h[1], g = Object(i.useContext)(Bi), x = g.menuTypes,
                    j = g.showMenu, v = g.currentMenu, w = fi(), y = w.data, O = (w.isLoading, w.isIdle, Ga()),
                    C = O.notify, k = O.notificationTypes;

                function L() {
                    return (L = Object(p.a)(d.a.mark((function e(t) {
                        var n, i, a;
                        return d.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.userId, !(null === (i = l.find((function (e) {
                                        return e.user2Id === n && e.user1Id === y.id || e.user2Id === y.id && e.user1Id === n
                                    }))) || void 0 === i ? void 0 : i.id)) {
                                        e.next = 7;
                                        break
                                    }
                                    o({convoId: i.id}), j(x.CHAT), e.next = 11;
                                    break;
                                case 7:
                                    return e.next = 9, ea(y.id, n);
                                case 9:
                                    a = e.sent, o({convoId: a.data.createConvo.id});
                                case 11:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                return Object(i.useEffect)((function () {
                    if (y) {
                        var e, t = (e = function (e) {
                            var t = e.user1Id, i = y.id, a = t === i, r = e.user2Id === i;
                            !a && r && function (e, t) {
                                n.apply(this, arguments)
                            }(e, t), m([].concat(Object(Ri.a)(l), [e]))
                        }, In.a.graphql(Object(Mn.b)("\n  subscription OnCreateConvo {\n    onCreateConvo {\n      id\n      user1Id\n      user2Id\n      createdAt\n      updatedAt\n      confirmed\n      messages {\n        items {\n          id\n          content\n          convoId\n          fromName\n          fromUserId\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n")).subscribe({
                            next: function (t) {
                                var n = t.value.data.onCreateConvo;
                                e(n)
                            }
                        }));
                        return function () {
                            t.unsubscribe()
                        }
                    }

                    function n() {
                        return (n = Object(p.a)(d.a.mark((function e(t, n) {
                            var i, a, r;
                            return d.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, xi(n);
                                    case 2:
                                        i = e.sent, a = i.data.getUserProfile, r = "".concat(a.firstName, " ").concat(a.lastName), C(r, k.CHAT_REQUEST, {
                                            button: {
                                                text: "accept",
                                                action: function () {
                                                    Yi(t.id), o({convoId: t.id}), j(x.CHAT)
                                                }
                                            }
                                        });
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                }), [l, y, x.CHAT, k.CHAT_REQUEST, C, j]), Object(i.useEffect)((function () {
                    function e() {
                        return (e = Object(p.a)(d.a.mark((function e() {
                            var t, n;
                            return d.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Qi(y.id);
                                    case 2:
                                        t = e.sent, n = t.data.listConvos.items, m(n);
                                    case 5:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    y && function () {
                        e.apply(this, arguments)
                    }()
                }), [y]), Object(i.useEffect)((function () {
                    if (y) {
                        var e = [];
                        return l.forEach((function (n) {
                            var i, a, r = (i = n.id, a = function (e) {
                                var n = e.room, i = y.id, a = e.fromUserId === i, r = n.user2Id === i || n.user1Id === i;
                                !a && r && v !== x.CHAT && function (e) {
                                    t.apply(this, arguments)
                                }(e)
                            }, In.a.graphql(Object(Mn.b)(Gi, {convoId: i})).subscribe({
                                next: function (e) {
                                    var t = e.value.data.onCreateConvoMessage;
                                    a(t)
                                }
                            }));
                            e.push(r)
                        })), function () {
                            e.forEach((function (e) {
                                return e.unsubscribe()
                            }))
                        }
                    }

                    function t() {
                        return (t = Object(p.a)(d.a.mark((function e(t) {
                            var n, i, a;
                            return d.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        n = t.content, i = t.convoId, a = t.fromName, C("".concat(a, ' says: "').concat(n, '"'), k.MESSAGE_RECEIVED, {
                                            hasTimer: !0,
                                            button: {
                                                text: "respond", action: function () {
                                                    o({convoId: i}), j(x.CHAT)
                                                }
                                            }
                                        });
                                    case 2:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                }), [l, v, y, x.CHAT, k.MESSAGE_RECEIVED, C, j]), Object(R.jsx)(Ya.Provider, {
                    value: {
                        activeChat: r,
                        setActiveChat: o,
                        convos: l,
                        setConvos: m,
                        openDirectChat: function (e) {
                            return L.apply(this, arguments)
                        },
                        attendees: b,
                        setAttendees: f
                    }, children: t
                })
            }, er = Ya, tr = g("BRIGHTCOVE_ACCOUNT_ID"), nr = g("BRIGHTCOVE_PLAYER_ID"), ir = Object(i.createContext)(),
            ar = function (e) {
                var t = e.children, n = Object(i.useState)(null), a = Object(z.a)(n, 2), r = a[0], o = a[1];
                return Object(R.jsx)(ir.Provider, {
                    value: {
                        currentBrightcoveVideo: r, loadVideo: function (e) {
                            var t = e.videoId;
                            o(t)
                        }, closeVideo: function () {
                            o(null)
                        }, accountId: tr, playerId: nr
                    }, children: t
                })
            }, rr = Object(i.createContext)(), or = function (e) {
                var t = e.children, n = Object(i.useContext)(ir), a = n.currentBrightcoveVideo, r = n.loadVideo,
                    o = n.closeVideo, c = n.accountId, s = n.playerId;
                return Object(R.jsx)(rr.Provider, {
                    value: {
                        brightcove: {
                            currentBrightcoveVideo: a,
                            loadVideo: r,
                            closeVideo: o,
                            accountId: c,
                            playerId: s
                        }
                    }, children: t
                })
            }, cr = ["children"];
        var sr = function (e) {
            var t = e.children, n = Object(u.a)(e, cr), i = ie(), a = i.currentUserId, r = i.status,
                o = new URLSearchParams(Object(h.h)().search);
            return "loading" === r ? Object(R.jsx)("div", {children: "Loading..."}) : Object(R.jsx)(h.b, Object(m.a)(Object(m.a)({}, n), {}, {
                render: function (e) {
                    var n = e.location;
                    e.match;
                    return a ? t : Object(R.jsx)(h.a, {
                        to: {
                            pathname: "/go/storage-acceleration/en/registration/login",
                            query: "?ecid=".concat(o.get("ecid"), "&utmMedium=").concat(o.get("utmMedium"), "&utmSource=").concat(o.get("utmSource"), "&utmCampaign").concat(o.get("utmCampaign"), "&utmContent=").concat(o.get("utmContent")),
                            state: {from: n}
                        }
                    })
                }
            }))
        };
        Ln.a.object({
            id: Ln.a.string(),
            firstName: Ln.a.string().required(),
            lastName: Ln.a.string().required(),
            email: Ln.a.string().required(),
            professionalLevel: Ln.a.string().required()
        });
        var lr = ce.b.div.withConfig({
            displayName: "ErrorPage__ErrorMessageStyles",
            componentId: "sc-mnut5c-0"
        })(["width:500px;position:fixed;left:50%;top:10rem;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;.error-message{color:red;font-size:var(--font-size-large);}.error-button{border:1px solid var(--color-gray-4);padding:1rem 2rem;border-radius:20px;transition:0.2s;font-weight:500;margin:2rem 0 0 0;&:hover{background:var(--color-gray-5);}}"]);
        var dr, pr = function (e) {
                var t = e.error, n = e.resetErrorBoundary;
                return Object(R.jsxs)(lr, {
                    role: "alert",
                    children: [Object(R.jsx)("h1", {children: "Something went wrong"}), Object(R.jsx)("pre", {
                        className: "error-message",
                        children: t.message
                    }), Object(R.jsx)("button", {className: "error-button", onClick: n, children: "Try again"})]
                })
            }, mr = ["top", "left", "size", "color", "className"],
            ur = Object(ce.c)(dr || (dr = Object(vt.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
            hr = Object(ce.b)(se.a.div).withConfig({
                displayName: "Loaders__SpinnerStyles",
                componentId: "sc-1a4ld88-0"
            })(['margin:0;padding:0;&:before{content:"";animation:', " 1s linear infinite;position:absolute;top:", ";left:", ";width:", ";height:", ";background:0 0;border:4px solid ", ";border-radius:50%;-webkit-clip-path:inset(0 0 50% 50%);clip-path:inset(0 0 50% 0);}"], ur, (function (e) {
                return e.top
            }), (function (e) {
                return e.left
            }), (function (e) {
                return e.size.width
            }), (function (e) {
                return e.size.height
            }), (function (e) {
                return e.color
            }));

        function br(e) {
            var t = e.top, n = void 0 === t ? "calc(50% - 9px)" : t, i = e.left,
                a = void 0 === i ? "calc(50% - 9px)" : i, r = e.size,
                o = void 0 === r ? {width: "18px", height: "18px"} : r, c = e.color,
                s = void 0 === c ? "var(--color-white)" : c, l = e.className, d = Object(u.a)(e, mr), p = de()(l);
            return Object(R.jsx)(hr, Object(m.a)({className: p, top: n, left: a, size: o, color: s}, d))
        }

        var fr = n(442), gr = n(455), xr = n(271), jr = n(268), vr = "720px", wr = "538px",
            yr = Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__HomePageContentWrapper",
                componentId: "sc-14ef639-0"
            })(["position:relative;padding:0 10px;display:flex;flex-direction:row;height:100%;width:100%;margin:0 0 0 12rem;.home-main-event{background-color:transparent;width:719px;margin-right:20px;}.home-line-up{background-color:transparent;height:600px;width:274px;margin-right:20px;}.home-much-more{background-color:transparent;height:600px;width:274px;}.home-titles{color:var(--color-white);font-style:normal;font-weight:bold;font-size:26px;line-height:32px;margin-top:0;}.home-event-speakers{background-color:transparent;width:420px;margin-right:20px;}.home-event-resources{background-color:transparent;margin-right:20px;}.home-case-study{background-color:transparent;height:574px;width:420px;}.feature-group{margin:10px;padding:10px;display:flex;max-height:100%;}.feature-group .feature-item{margin:10px;padding:10px;.card{width:440px;height:522px;@media (max-width:", "),(max-height:", "){height:inherit;}.image-container{@media (max-width:", "),(max-height:", "){height:inherit;}}&.advertisement{width:620px;}}.promo-card{height:522px;}.hero-card{width:928px;height:522px;@media (max-width:", "),(max-height:", "){height:inherit;}.main-content{width:440px;}}}.section-title{color:var(--color-white);font-family:var(--font-display);font-weight:600;font-size:24px;letter-spacing:0;line-height:26px;position:absolute;left:4.5rem;top:0;}@media (max-width:", "),(max-height:", "){margin:0;padding-left:0;padding-right:0;.section-title{width:100%;margin:auto;left:0;right:0;}.feature-group{width:100%;display:block;margin:0;padding:0;}.feature-group .feature-item{width:100%;margin:4rem 0;padding:0;.card{width:100%;}.hero-card{width:100%;.image-container{width:100%;}.main-content{width:100%;height:275px;padding:1.7rem 3.3rem;justify-content:space-between;}}.promo-card{width:100%;}}.image-container{position:relative;width:100%;img{width:100%;}}.hero-card{width:100%;.image-container{position:relative;}.main-content{height:auto;position:relative;}}.footer-content{margin-top:30px;}.feature-item{width:100%;padding:0;margin:0;.card{width:100%;}}.promo-card{width:100%;}}@media (max-width:", "),(max-height:", "){height:auto;.main-content{padding-left:15px;padding-right:15px;}.section-title{font-size:22px;}.feature-group{margin:0;padding:0;}.feature-group .feature-item{margin:4rem 0;padding:0px;.hero-card,.basic-card{.main-content{height:inherit;}}}.image-container{width:100%;img{width:100%;}}.up-next-card{.main-content{padding-left:0px;padding-right:0px;}}}@media (max-width:", "),(max-height:", "){align-items:center;flex-direction:column;margin:0;.home-main-event{width:719px;margin:3rem 0;}.home-event-speakers{width:719px;margin:3rem 0;}.home-event-resources{width:719px;margin:3rem 0;}.image-container{max-width:100%;img{max-width:100%;}}}@media (max-width:", "){align-items:center;flex-direction:column;margin:0;.home-main-event{width:100%;margin:3rem 0;}.home-event-speakers{width:100%;margin:3rem 0;}.home-event-resources{width:100%;margin:3rem 0;}.image-container{max-width:100%;img{max-width:100%;}}}"], wr, vr, wr, vr, wr, vr, vr, vr, wr, vr, vr, vr, wr),
            Or = (Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__HomePageMenuWrapper",
                componentId: "sc-14ef639-1"
            })(["position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:7;display:flex;flex-direction:column;align-items:center;padding:44px 50px;.scroll-icon{position:absolute;top:730px;display:flex;left:calc(50% - 50px);flex-direction:column;align-items:center;z-index:4;@media (max-width:", "),(max-height:", "){display:none;}svg{width:30px;height:30px;}span{font-size:10px;font-weight:700;margin:15px 0 0 0;}}.spotlight-nav{background-color:rgba(0,0,0,0.5);display:flex;justify-content:space-between;margin:0;width:520px;@media (max-width:", '){display:none;}}.spotlight-nav-item{background:transparent;border:none;position:relative;color:var(--color-white);font-size:12px;font-weight:600;font-family:var(--font-body);margin:10px;padding:5px 10px;transition:0.3s;white-space:nowrap;&.active-item{:after{content:"";position:absolute;width:5px;height:5px;background:var(--color-primary);border-radius:100%;bottom:-2px;left:50%;transform:translateX(-50%);}}&:hover{color:var(--color-primary);}}.title-section-container{background-color:var(--color-black-alpha);display:flex;flex-direction:column;align-items:center;height:60px;z-index:2;position:absolute;top:0px;}@media (max-width:', "),(max-height:", "){overflow-x:hidden;width:100%;left:0;position:relative;overflow-y:scroll;margin:0;padding:0;}"], vr, vr, vr, vr, vr), ce.b.div.withConfig({
                displayName: "styles__FeaturedContentWrapper",
                componentId: "sc-14ef639-2"
            })(["padding:10px;position:relative;display:flex;flex-wrap:nowrap;height:100%;width:100%;margin:0 0 0 22rem;@media (max-width:", "),(max-height:", "){width:100%;padding-bottom:100px;align-items:center;flex-direction:column;margin:0;padding-left:0;padding-right:0;}.feature-group{margin:10px;padding:10px;display:flex;max-height:100%;@media (max-width:", "),(max-height:", "){width:100%;display:block;margin:0;padding:0;}@media (max-width:", "),(max-height:", "){margin:0px;padding:0px;}}.feature-item{margin:10px;padding:10px;.card{width:440px;&.advertisement{width:620px;}&.sponsor{width:620px;}}.promo-card{height:522px;@media (max-width:", "),(max-height:", "){height:inherit;}}@media (max-width:", "),(max-height:", "){width:100%;padding:0;margin:3rem 0 0 0;.card{width:100%;&.advertisement{width:100%;}&.sponsor{width:100%;}}}.image-container{@media (max-width:", "){width:100%;height:auto;}}.main-content{@media (max-width:", "){height:auto;}@media (max-width:", "){padding-left:15px;padding-right:15px;}.footer-content{@media (max-width:", "){margin-top:30px;}}}.sponsor{.card-body{@media (max-width:", "){display:block;padding-bottom:25px;height:auto;}}.cta-text{@media (max-width:", "){width:100%;}}.card-button-container{@media (max-width:", "){width:100%;margin-top:30px;}a{@media (max-width:", "){display:block;max-width:290px;margin:auto;}}}}}.section-title{color:var(--color-white);font-family:var(--font-dispaly);font-weight:600;font-size:24px;letter-spacing:0;line-height:26px;position:absolute;left:50px;top:0px;@media (max-width:", "){width:100%;margin:auto;left:0;right:0;}@media (max-width:", "){max-width:320px;font-size:22px;}}"], vr, vr, vr, vr, wr, vr, wr, vr, vr, vr, wr, vr, wr, vr, wr, wr, wr, wr, vr, wr), Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__FeaturedCardWrapper",
                componentId: "sc-14ef639-3"
            })(["background-color:var(--color-black);background-image:url(/static/images/hitachi/homepage/featured-card-slash.png);background-repeat:no-repeat;background-position-x:160%;width:700px;height:518px;position:relative;border:10px solid;border-image-slice:1;border-width:10px;border-image-source:linear-gradient( -45deg,#2f1b1c 0%,#7a5243 9.43%,#554d55 22.19%,#7f877c 29.34%,#2b6388 48.92%,#f80116 100% );@media (max-width:", "){height:450px;}.featured-card{position:relative;display:flex;flex-direction:column;width:100%;height:100%;word-wrap:break-word;background-clip:border-box;padding:5rem;@media (max-width:", "){padding:2rem;}}.controls-container{display:flex;margin:2rem 0 0 0;}.content{z-index:1;.title{color:var(--color-white);font-family:var(--font-dispaly);font-weight:600;font-size:24px;letter-spacing:0;line-height:32px;max-width:300px;margin-top:0px;@media (max-width:", "){max-width:100%;}@media (max-width:", "){font-size:22px;}}.time{color:var(--color-white);font-family:var(--font-dispaly);font-size:12px;letter-spacing:0;line-height:18px;margin-top:30px;}}.tag-container{display:flex;> *:not(:first-child){margin:0 0 0 1rem;}@media (max-width:", "){padding-left:0px;padding-right:0px;}}.image-container{position:absolute;bottom:-6px;right:-120px;z-index:0;width:675px;pointer-events:none;@media (max-width:", "){right:-90px;}img{width:100%;}}.featured-slider{width:100%;height:100%;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;overflow:hidden;}.slider-controls-container{display:flex;position:absolute;left:5rem;bottom:4rem;@media (max-width:", "){left:2rem;}.previous-button,.next-button{width:50px;height:50px;border:1px solid var(--color-white);margin:0;padding:0;transition:0.2s;&:hover{background:var(--color-white);border-color:var(--color-black);svg{color:var(--color-black);}}}.next-button{margin:0 0 0 1rem;}}@media (max-width:", "){width:100%;}"], wr, wr, vr, wr, wr, wr, wr, vr), Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__FeaturedSlideStyles",
                componentId: "sc-14ef639-4"
            })(["position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;top:0;left:0;.media-button{}img{}h4{margin:10px 0 0 0;}"]), Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__UpNextContentWrapper",
                componentId: "sc-14ef639-5"
            })(["width:440px;height:522px;display:flex;flex-direction:column;background-color:var(--color-white);padding:0 3.4rem;@media (max-width:", "){width:100%;padding:1.5rem 3.3rem 2.2rem 3.3rem;}.up-next-title{color:var(--color-black);font-size:1.8rem;font-weight:600;padding:2.2rem 0 0;}.up-next-card{display:flex;border-bottom:1px dotted #979797;align-items:center;justify-content:flex-start;padding:2.6rem 0;&:last-child{border:none;}.main-content{width:100%;display:flex;justify-content:space-between;}.content{display:flex;flex-direction:column;}.controls-container{display:flex;align-items:center;margin:0 0 0 1rem;.calendar-button{color:var(--color-black);transition:0.3s;&:hover{color:var(--color-primary);}&.added{color:var(--color-green);}}.media-button{.text{color:var(--color-black);}}}.time{color:#979797;font-family:var(--font-dispaly);font-size:12px;font-weight:500;letter-spacing:0;line-height:16px;}.title{color:var(--color-black);font-family:var(--font-dispaly);font-size:1.4rem;font-weight:600;line-height:20px;margin:0;}.image-container{width:120px;height:67px;flex-shrink:0;margin:0 2rem 0 0;img{width:100%;height:100%;}@media (max-width:", "){display:none;}}}.section-date{height:16.2px;width:196.49px;color:var(--color-medium-gray);font-family:var(--font-dispaly);font-weight:400;font-size:12px;letter-spacing:0;line-height:18px;margin-top:52px;margin-bottom:18px;}.section-title{height:128px;width:375px;color:var(--color-black);font-family:var(--font-dispaly);font-weight:600;font-size:24px;letter-spacing:0;line-height:32px;padding-left:40px;}.section-chip-container{display:flex;flex-direction:row;margin-top:20px;}.section-button-container{margin-top:42px;max-width:65%;}@media (max-width:", "){height:auto;margin-bottom:80px;margin-top:50px;}@media (max-width:", "){padding:1.7rem 20px;.up-next-title{padding:0;}}"], vr, wr, vr, wr), Object(ce.b)(se.a.button).withConfig({
                displayName: "styles__SpotlightArrow",
                componentId: "sc-14ef639-6"
            })(["color:var(--color-white);width:77px;height:77px;position:absolute;display:flex;justify-content:center;align-items:center;top:50%;margin-top:-17px;cursor:pointer;background:var(--color-brand-red);box-shadow:0 2px 44px 0 rgba(0,0,0,0.5);padding:1px 0 0 1px;border:none;z-index:2;@media (max-width:", "),(max-height:", "){display:none;}svg{width:10px;}&.arrow-left{left:0;transform:rotate(180deg);}&.arrow-right{right:0;}"], vr, vr)),
            Cr = (Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__ProgressStyles",
                componentId: "sc-14ef639-7"
            })(["width:100vw;height:5px;position:fixed;top:0;left:0;z-index:4;.progress-bar{position:absolute;height:5px;background:#616161;top:0;left:0;}"]), Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__SlideContainer",
                componentId: "sc-14ef639-8"
            })(["display:flex;position:absolute;left:0;top:0;z-index:1;overflow-x:auto;overflow-y:hidden;width:100vw;height:calc(100% - 70px);align-items:center;&::-webkit-scrollbar{width:0px;background:transparent;}@media (max-width:", "),(max-height:", "){overflow:visible;display:flex;flex-direction:column;align-items:center;height:auto;margin:3rem 0;padding:0 3rem 9rem 3rem;&::-webkit-scrollbar{width:auto;background:inherit;}}@media (max-width:", "){padding-left:15px;padding-right:15px;}"], vr, vr, vr)),
            kr = Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__Slide",
                componentId: "sc-14ef639-9"
            })(["position:relative;display:flex;justify-content:space-between;align-items:flex-start;margin:0;.mission-card{cursor:pointer;}&.active-slide{transform:translate(0,0);}&.next-slide{position:absolute;top:0;left:0;transform:translate(85vw,0);z-index:-1;}.slide-section{display:flex;justify-content:space-between;align-items:center;flex-wrap:nowrap;@media (max-width:", "),(max-height:", "){width:100%;margin:0px;flex-direction:column;}}"], vr, vr),
            Lr = ce.b.div.withConfig({
                displayName: "styles__ScrollerWrapper",
                componentId: "sc-14ef639-10"
            })(["width:100vw;height:100vh;position:absolute;z-index:20;top:0;@media (max-width:", "),(max-height:", "){width:100%;height:100vh;overflow-x:hidden;overflow-y:auto;position:relative;display:flex;flex-direction:column;align-items:center;top:0;left:0;margin:0 auto;}"], vr, vr),
            Nr = (ce.b.div.withConfig({
                displayName: "styles__HomeCaseStudyWrapper",
                componentId: "sc-14ef639-11"
            })(["background-image:url(/static/images/hitachi-light/case-study-bkg.png);background-size:cover;background-repeat:no-repeat;width:420px;height:574px;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:30px;padding-right:30px;padding-left:30px;.case-study-wrapper{.case-study-title{font-style:normal;font-weight:bold;font-size:26px;line-height:32px;color:var(--color-white);margin-top:20px;}.case-study-sub-title{font-style:normal;font-weight:normal;font-size:16px;line-height:22px;color:var(--color-white);margin-top:20px;}}"]), ce.b.div.withConfig({
                displayName: "styles__HomeEventsWrapper",
                componentId: "sc-14ef639-12"
            })(['background-color:var(--color-black);height:574px;display:flex;flex-direction:row;padding-top:20px;padding-right:30px;padding-left:30px;display:flex;.events-wrapper{padding-left:15px;padding-right:15px;padding-top:20px;flex-basis:50%;.event-container{display:flex;flex-direction:row;margin-top:40px;&:first-child{margin-top:0;}.event-info{padding-left:20px;.event-title{width:250px;font-style:normal;font-weight:bold;font-size:16px;line-height:22px;color:var(--color-white);margin-top:0;}.event-link{font-style:normal;font-weight:bold;font-size:14px;line-height:18px;color:var(--color-primary);cursor:pointer;&::after{content:"";display:block;width:100px;border-bottom:3px solid var(--color-red);margin-top:2px;}}}}}@media (max-width:', "),(max-height:", "){flex-direction:column;height:auto;}"], vr, vr)),
            Ir = ce.b.div.withConfig({
                displayName: "styles__HomeSpeakersWrapper",
                componentId: "sc-14ef639-13"
            })(["background-color:#184675;width:420px;height:574px;display:flex;flex-direction:column;padding-top:20px;padding-right:30px;padding-left:30px;.speakers-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;.speakers-title{font-style:normal;font-weight:bold;font-size:26px;line-height:32px;color:var(--color-white);}.speaker{width:200px;height:225px;position:relative;align-items:center;margin-top:20px;flex-basis:50%;}.title{font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:var(--color-white);text-align:center;}.image-container{display:flex;align-items:center;justify-content:center;}.speaker-info{width:100%;display:flex;flex-direction:column;align-items:center;}.speaker-name{font-style:normal;font-weight:bold;font-size:14px;line-height:18px;text-align:center;color:var(--color-white);margin-top:10px;margin-bottom:7px;}}@media (max-width:", "),(max-height:", "){width:719px;}"], wr, vr),
            Sr = ce.b.div.withConfig({
                displayName: "styles__HomeMainEventWrapper",
                componentId: "sc-14ef639-14"
            })(["width:719px;height:574px;display:flex;flex-direction:column;justify-content:flex-end;@media (max-width:", '){min-height:700px;display:block;}.main-event-wrapper{background-color:rgba(255,255,255,0.9);height:355px;padding-left:46px;padding-right:20px;padding-top:20px;width:375px;.main-event-title{color:var(--color-black);font-style:normal;font-weight:bold;font-size:48px;line-height:50px;.highlight::after{content:"";display:block;width:179px;border-bottom:10px solid var(--color-red);margin-left:60px;margin-top:-13px;}}.main-event-sub-title{font-style:normal;font-weight:normal;font-size:16px;line-height:24px;color:var(--color-black);}.main-event-cta-wrapper{display:flex;flex-direction:row;.main-event-cta{color:var(--color-red);font-style:normal;font-weight:bold;font-size:18px;line-height:21px;max-width:93px;padding-top:35px;}.main-event-date{border:solid 5px var(--color-red);display:flex;height:108px;flex-direction:column;min-width:100px;width:100px;.date-title,.date-time{color:var(--color-red);font-style:normal;font-weight:bold;font-size:12px;line-height:16px;margin-top:3px;text-align:center;}.date-day{font-style:normal;font-weight:bold;font-size:38px;line-height:42px;text-align:center;color:var(--color-red);}}.pre-event-message{color:#595959;font-style:normal;font-weight:bold;font-size:22px;line-height:24px;max-width:235px;padding-left:15px;padding-top:15px;}}}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,0.125);}.card-header{background-color:var(--color-black);color:var(--color-white);height:30px;font-family:var(--font-dispaly);font-weight:600;font-size:13px;letter-spacing:5.57px;line-height:10.9px;text-align:center;padding:8px;}.card-body{flex:1 1 auto;padding:1.25rem;height:235px;width:440px;@media (max-width:', "){width:100%;width:320px;}.card-title{color:var(--color-white);font-family:var(--font-dispaly);font-weight:600;font-size:18px;letter-spacing:0;line-height:24px;max-width:264px;margin-top:0;}.card-text{color:var(--color-medium-white);font-family:var(--font-dispaly);font-weight:400;font-size:1.2rem;}}.card-chip-container{display:flex;flex-direction:row;margin-top:10px;padding:10px;.icon-wrapper{border:1px solid #000;padding:6px;padding-left:8px;padding-top:8px;}}.card-cta{border-bottom:1px solid var(--color-white);color:var(--color-white);font-family:var(--font-dispaly);font-weight:400;font-size:12px;width:180px;}.card-button-container{}.advertisement{width:620px;background-color:var(--color-navy-blue);background-image:linear-gradient(180deg,#150f77 0%,#090642 100%);padding:1rem 2rem;.card-body{width:100%;display:flex;align-items:center;justify-content:space-between;@media (max-width:", "){display:block;min-height:380px;}}.card-title{margin:0 2rem 0 0;padding:0;@media (max-width:", "){width:100%;margin:0;}}@media (max-width:", "){width:100%;}}.sponsor{width:620px;border:1px solid #1d1d1d;background-color:var(--color-black);margin-top:20px;@media (max-width:", "){width:100%;}.card-body{display:flex;align-items:center;justify-content:space-around;width:100%;}}@media (max-width:", "){width:100%;}"], wr, vr, wr, wr, vr, vr, vr),
            zr = ce.b.div.withConfig({
                displayName: "styles__HomeMuchMoreWrapper",
                componentId: "sc-14ef639-15"
            })(["background-color:transparent;width:274px;height:569px;display:flex;flex-direction:column;justify-content:space-between;.much-more-wrapper{width:274px;height:314px;min-height:330px;.prize-cta{color:var(--color-white);font-style:normal;font-weight:bold;font-size:14px;line-height:22px;margin-top:213px;padding-left:30px;max-width:245px;}.prize-href{color:var(--color-white);font-size:14px;line-height:22px;margin-top:240px;padding-left:30px;max-width:245px;}}.things-wrapper{width:274px;height:314px;background-color:var(--color-black);display:flex;flex-direction:column;margin-top:49px;.things-title{color:var(--color-white);font-style:normal;font-weight:bold;font-size:26px;line-height:32px;text-align:center;width:100%;min-width:274px;}.things-description{font-style:normal;font-weight:normal;font-size:16px;line-height:22px;color:var(--color-white);margin-left:20px;}.things-image-container{display:flex;justify-content:space-evenly;.things-image{}}}"]),
            Er = ce.b.div.withConfig({
                displayName: "styles__HomeLineUpWrapper",
                componentId: "sc-14ef639-16"
            })(['background-color:#184675;width:274px;height:574px;display:flex;flex-direction:column;justify-content:space-between;padding-left:35px;padding-right:35px;.line-up-wrapper{ul{list-style:none;margin:0;padding:0;position:relative;&:before{content:"";display:inline-block;width:2px;background:rgba(255,255,255,0.2);position:absolute;left:3px;top:5px;height:calc(100% - 45px);}li{position:relative;padding-left:15px;margin-top:40px;margin-bottom:15px;&:before{content:"";display:inline-block;width:8px;height:8px;background:red;position:absolute;left:0;top:5px;border-radius:10px;}}}}.time-header{font-style:normal;font-weight:bold;font-size:18px;line-height:26px;color:var(--color-white);.time-description{font-weight:normal;font-size:14px;line-height:18px;}}']),
            Mr = (ce.b.div.withConfig({
                displayName: "styles__SpotLightButton",
                componentId: "sc-14ef639-17"
            })(["font-size:var(--font-size-large);position:relative;font-weight:600;background-color:transparent;border:2px solid var(--color-brand-red);color:var(--color-white);padding:1rem 1.5rem;margin:0;cursor:pointer;box-shadow:0 12px 17px 0 rgb(0 0 0 / 9%);-webkit-transition:0.3s;transition:0.3s;text-align:center;margin:0 auto;&[disabled]{color:var(--color-gray-3);background-color:transparent;border-color:var(--color-gray-3);cursor:not-allowed;box-shadow:none;}&:hover{background-color:var(--color-brand-red);border:unset;box-shadow:none;color:var(---color-black);}"]), Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__ModalContainer",
                componentId: "sc-14ef639-18"
            })(["position:fixed;display:flex;align-items:flex-start;justify-content:center;width:100vw;height:100vh;top:0;left:0;z-index:1000;background:rgba(0,0,0,0.75);.video-wrapper{width:650px;max-width:650px;height:350px;.video-js{width:50%;height:50%;margin:auto;margin-top:10%;}}.modal-header{font-family:var(--font-display);font-size:28px;margin:0;font-weight:300;}.modal-message{font-size:14px;max-width:350px;margin:4rem 0;}.button-group{display:flex;justify-content:space-between;button{font-size:14px;margin:0 1.4rem;}}"])),
            _r = (Object(ce.b)(se.a.a).withConfig({
                displayName: "styles__ModalLinkStyles",
                componentId: "sc-14ef639-19"
            })(["font-weight:700;text-align:center;background:var(--color-primary);color:#ffffff;padding:1rem 1.2rem;border:none;font-size:14px;margin:0 20px;cursor:pointer;box-shadow:0 13px 18px 0 rgba(0,0,0,0.2);&:visited{color:#ffffff;}"]), Object(ce.b)(se.a.button).withConfig({
                displayName: "styles__ModalClose",
                componentId: "sc-14ef639-20"
            })(["color:var(--color-white);background:transparent;border:none;width:28px;height:17px;border:none;position:absolute;top:16px;right:30px;padding-top:0;cursor:pointer;z-index:25;svg{width:15px;}"])),
            Tr = n(79), Rr = n.n(Tr), Ar = n(269), Pr = "PRE_EVENT", Dr = "ACTIVE_EVENT", Zr = "POST_EVENT",
            qr = "LOADING_STATE", Ur = n.n(Ar)()((function (e) {
                return {
                    eventState: qr, setPreEvent: function () {
                        return e((function () {
                            return {eventState: Pr}
                        }))
                    }, setActiveEvent: function () {
                        return e((function () {
                            return {eventState: Dr}
                        }))
                    }, setPostEvent: function () {
                        return e((function () {
                            return {eventState: Zr}
                        }))
                    }
                }
            }));
        var Hr = function (e) {
            var t = e.featuredEvent, n = Object(i.useState)(!0), a = Object(z.a)(n, 2), r = a[0], o = a[1],
                c = Object(i.useState)(!1), s = Object(z.a)(c, 2), l = s[0], d = s[1], p = Object(i.useState)([]),
                m = Object(z.a)(p, 2), u = m[0], b = m[1], f = Object(i.useState)(""), g = Object(z.a)(f, 2), j = g[0],
                v = g[1], w = Object(i.useState)(""), y = Object(z.a)(w, 2), O = y[0], C = y[1],
                k = Object(i.useState)(""), L = Object(z.a)(k, 2), N = L[0], I = L[1], S = Object(i.useState)(""),
                E = Object(z.a)(S, 2), M = E[0], _ = E[1], T = Object(i.useState)(""), A = Object(z.a)(T, 2), P = A[0],
                D = A[1], Z = Object(h.g)(), q = Ur((function (e) {
                    return e.eventState
                }));
            return Object(i.useEffect)((function () {
                if (void 0 !== t) {
                    var e = Rr.a.sanitize(t[0].eventDescription);
                    v(e);
                    var n = function (e) {
                        if (null === e || void 0 === e) return "";
                        var t = Object(pi.a)(e);
                        return Object(mi.a)(t, "MMMM")
                    }(t[0].eventTime);
                    _(n);
                    var i = function (e) {
                        if (null === e || void 0 === e) return "";
                        var t = Object(pi.a)(e);
                        return Object(mi.a)(t, "d")
                    }(t[0].eventTime);
                    D(i), b(t[0]);
                    var a = ui(t[0].eventTime);
                    C(a);
                    var r = ui(t[0].eventEndTime);
                    switch (I(r), q) {
                        case Pr:
                            o(!0);
                            break;
                        case Dr:
                            o(!1);
                            break;
                        case Zr:
                            o(!1), d(!0);
                            break;
                        default:
                            o(!0)
                    }
                }
            }), [t, q]), Object(R.jsx)(R.Fragment, {
                children: !!u && Object(R.jsx)(Sr, {
                    style: {backgroundImage: "url(".concat(u.eventImage, ")"), backgroundSize: "no-repeat"},
                    children: Object(R.jsxs)("div", {
                        className: "main-event-wrapper",
                        children: [Object(R.jsxs)("h1", {
                            className: "main-event-title",
                            children: ["Finally Free to ", Object(R.jsx)("span", {
                                className: "highlight",
                                children: "Floor It."
                            })]
                        }), Object(R.jsx)("div", {
                            className: "main-event-sub-title",
                            dangerouslySetInnerHTML: {__html: j}
                        }), r ? Object(R.jsxs)("div", {
                            className: "main-event-cta-wrapper",
                            children: [Object(R.jsxs)("div", {
                                className: "main-event-date",
                                children: [Object(R.jsx)("div", {
                                    className: "date-title",
                                    children: M
                                }), Object(R.jsx)("div", {
                                    className: "date-day",
                                    children: P
                                }), Object(R.jsxs)("div", {
                                    className: "date-time",
                                    children: ["".concat(O), " - ", "".concat(N)]
                                })]
                            }), Object(R.jsx)("div", {
                                className: "pre-event-message",
                                children: "Event has not started yet."
                            })]
                        }) : Object(R.jsxs)("div", {
                            className: "main-event-cta-wrapper",
                            children: [Object(R.jsx)("button", {
                                title: "session video",
                                type: "button",
                                style: {paddingLeft: "unset"},
                                onClick: function () {
                                    !function () {
                                        var e = new CustomEvent("startSessionVideoEvent");
                                        document.querySelector("body").dispatchEvent(e)
                                    }();
                                    var e = x(u);
                                    Z.push("/go/storage-acceleration/en/media?event=".concat(e))
                                },
                                children: Object(R.jsx)(jt, {className: "play-icon", name: "play", width: "104px"})
                            }), l ? Object(R.jsx)("div", {
                                className: "main-event-cta",
                                children: "Watch the Session"
                            }) : Object(R.jsx)("div", {className: "main-event-cta", children: "Join the Session"})]
                        })]
                    })
                })
            })
        };
        var Br = function (e) {
            var t = e.agendaData, n = Object(i.useState)([]), a = Object(z.a)(n, 2), r = a[0], o = a[1];
            return Object(i.useEffect)((function () {
                void 0 !== t && o(t[0].agenda)
            }), [t]), Object(R.jsx)(Er, {
                children: Object(R.jsx)("div", {
                    className: "line-up-wrapper",
                    children: Object(R.jsx)("ul", {
                        children: !!r.length && r.map((function (e) {
                            return Object(R.jsxs)("li", {
                                className: "time-header",
                                children: [e.title, Object(R.jsx)("div", {
                                    className: "time-description",
                                    children: e.description
                                })]
                            }, e.title)
                        }))
                    })
                })
            })
        };
        var Fr = function (e) {
            return e.cardData, Object(R.jsxs)(zr, {
                children: [Object(R.jsx)("div", {
                    className: "much-more-wrapper",
                    children: Object(R.jsx)("img", {
                        src: "/static/images/hitachi-light/tickets-promo.png",
                        alt: "event-ad"
                    })
                }), Object(R.jsx)("div", {
                    className: "things-wrapper",
                    children: Object(R.jsx)("div", {
                        className: "things-image-container",
                        children: Object(R.jsx)("img", {
                            src: "/static/images/hitachi-light/ad-eventplatform.gif",
                            alt: "event-ad"
                        })
                    })
                })]
            })
        };
        var $r = function (e) {
            var t = e.featuredEvent, n = Object(i.useState)(!0), a = Object(z.a)(n, 2), r = (a[0], a[1]),
                o = Object(i.useState)(!1), c = Object(z.a)(o, 2), s = (c[0], c[1]), l = Object(i.useState)(!1),
                d = Object(z.a)(l, 2), p = d[0], m = d[1], u = Ur((function (e) {
                    return e.eventState
                }));
            return Object(i.useEffect)((function () {
                switch (u) {
                    case Pr:
                        r(!0), m(!1), s(!1);
                        break;
                    case Dr:
                        s(!0), r(!1), m(!1);
                        break;
                    case Zr:
                        m(!0), r(!1), s(!1);
                        break;
                    default:
                        r(!0)
                }
            }), [u]), Object(R.jsxs)(yr, {
                initial: {opacity: 0},
                animate: {opacity: 1},
                exit: {opacity: 0},
                children: [Object(R.jsxs)("div", {
                    className: "home-main-event",
                    children: [p ? Object(R.jsx)("h2", {
                        className: "home-titles",
                        children: "Rewatch the Event"
                    }) : Object(R.jsx)("h2", {
                        className: "home-titles",
                        children: "The Main Event"
                    }), Object(R.jsx)(Hr, {featuredEvent: t})]
                }), !p && Object(R.jsxs)(R.Fragment, {
                    children: [Object(R.jsxs)("div", {
                        className: "home-line-up",
                        children: [Object(R.jsx)("h2", {
                            className: "home-titles",
                            children: "The Line Up"
                        }), Object(R.jsx)(Br, {agendaData: t})]
                    }), Object(R.jsxs)("div", {
                        className: "home-much-more",
                        children: [Object(R.jsx)("h2", {
                            className: "home-titles",
                            children: "Much More"
                        }), Object(R.jsx)(Fr, {})]
                    })]
                })]
            })
        };
        var Vr = function (e) {
            var t = e.speakerData, n = Object(i.useState)([]), a = Object(z.a)(n, 2), r = a[0], o = a[1];
            return Object(i.useEffect)((function () {
                void 0 !== t && o(t)
            }), [t]), Object(R.jsx)(Ir, {
                children: Object(R.jsxs)("div", {
                    className: "speakers-wrapper",
                    children: [Object(R.jsx)("div", {
                        className: "speakers-title",
                        children: "Buckle up with our industry leading team."
                    }), !!r.length && r.map((function (e) {
                        return Object(R.jsxs)("div", {
                            className: "speaker",
                            children: [Object(R.jsx)("div", {
                                className: "image-container",
                                children: Object(R.jsx)("div", {
                                    style: {
                                        width: "120px",
                                        height: "120px",
                                        backgroundImage: "url(".concat(e.image, ")"),
                                        backgroundSize: "cover",
                                        display: "block",
                                        borderRadius: "100px"
                                    }
                                })
                            }), Object(R.jsxs)("div", {
                                className: "speaker-info",
                                children: [Object(R.jsx)("h3", {
                                    className: "speaker-name",
                                    children: e.fullName
                                }), Object(R.jsx)("span", {className: "title", children: e.jobTitle})]
                            })]
                        }, e.id)
                    }))]
                })
            })
        };
        var Wr = function (e) {
                var t = e.children, n = e.closeModal, i = void 0 === n ? function () {
                } : n;
                return Object(R.jsx)(Mr, {
                    initial: {opacity: 0},
                    animate: {opacity: 1},
                    exit: {opacity: 0},
                    transition: {duration: .2},
                    children: Object(R.jsxs)("div", {
                        className: "video-modal-content",
                        children: [Object(R.jsx)(_r, {
                            whileHover: {scale: 1.2},
                            onClick: i,
                            children: Object(R.jsx)(jt, {name: "close"})
                        }), t]
                    })
                }, "video-modal")
            }, Gr = {accountId: "3971130171001", brightcovePlayerId: "mkn1t5sda"}, Xr = n(270),
            Qr = Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__BrightcoveStyles",
                componentId: "sc-utd3o0-0"
            })(["--container-width:calc(100vw - 513px);--container-height:calc(100vh - 200px);width:", ";height:", ";position:absolute;z-index:10;top:0;left:0;background:var(--color-black);@media (max-width:768px){width:100%;}.brightcove-react-player-loader{width:", ";height:", ";transition:0.2s;@media (max-width:768px){width:100%;}}.video-js{width:100%;height:100%;}video{object-fit:", ";}.bc-iframe,.bc-iframe body,.bc-player-default_default,.bc-player-default_default .vjs-poster{background-color:var(--color-black);}"], (function (e) {
                return e.containerWidth
            }), (function (e) {
                return e.containerHeight
            }), (function (e) {
                return e.containerWidth
            }), (function (e) {
                return e.containerHeight
            }), (function (e) {
                return e.shouldCover ? "cover" : "revert"
            })), Kr = (Object(ce.b)(se.a.button).withConfig({
                displayName: "styles__CloseButtonStyles",
                componentId: "sc-utd3o0-1"
            })(["color:var(--color-white);width:33px;height:33px;position:absolute;right:386px;top:16px;display:flex;justify-content:center;align-items:center;cursor:pointer;background:transparent;padding:1px 0 0 0;border-radius:50%;border:1px solid var(--color-white);z-index:9;"]), ["videoId", "onClose", "handleVideoPlayback", "handleVideoComplete", "onEnded", "eventStartTime", "accountId", "playerId", "chatId", "isChatOpen", "shouldCover", "playerOptions", "isOnDemand"]),
            Yr = {show: {scale: 1, opacity: 1}, hide: {scale: 0, opacity: 0}, exit: {opacity: 0}};
        var Jr, eo = function (e) {
            var t = e.videoId, n = (e.onClose, e.handleVideoPlayback), i = void 0 === n ? function () {
                } : n, a = e.handleVideoComplete, r = void 0 === a ? function () {
                } : a, o = e.onEnded, c = void 0 === o ? function () {
                } : o, s = e.eventStartTime, l = e.accountId, d = e.playerId, p = (e.chatId, e.isChatOpen),
                h = e.shouldCover, b = void 0 !== h && h, f = e.playerOptions, g = e.isOnDemand;
            return Object(u.a)(e, Kr), Object(R.jsx)(E.a, {
                children: t && Object(R.jsx)(Qr, {
                    shouldCover: b,
                    variants: Yr,
                    initial: "hide",
                    animate: "show",
                    containerWidth: p ? "var(--container-width)" : "100%",
                    containerHeight: p ? "var(--container-height)" : "100%",
                    exit: "exit",
                    children: Object(R.jsx)(Xr.a, Object(m.a)({
                        playerId: d,
                        accountId: l,
                        videoId: t,
                        onSuccess: function (e) {
                            var t = e.ref, n = Date.now() - s;
                            g || t.controlBar.progressControl.disable(), f && (t.options(f), !1 === f.controls && t.controlBar.hide()), t.on("loadeddata", (function () {
                                n && !g && t.currentTime(new Date(n).getTime() / 1e3)
                            })), t.on("playing", (function (e) {
                                t.duration()
                            })), t.on("timeupdate", (function () {
                                var e = t.currentTime();
                                i(e)
                            })), t.on("ended", (function (e) {
                                r(), c()
                            }))
                        }
                    }, f))
                }, "brightcove-video-player")
            })
        };

        function to(e, t, n, i) {
            return no.apply(this, arguments)
        }

        function no() {
            return (no = Object(p.a)(d.a.mark((function e(t, n, i, a) {
                var r;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            r = {
                                firstName: t.firstName,
                                lastName: t.lastName,
                                email: t.email,
                                jobTitle: t.professionalLevel,
                                company: t.company,
                                eventType: a,
                                userProfileId: t.id,
                                resourceId: n,
                                resourceTitle: i
                            }, In.a.graphql(Object(Mn.b)(Un, {input: r}));
                        case 2:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function io(e, t, n) {
            return ao.apply(this, arguments)
        }

        function ao() {
            return (ao = Object(p.a)(d.a.mark((function e(t, n, i) {
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            to(t, n, i, "CLICKED");
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        ce.b.span(Jr || (Jr = Object(vt.a)(["\n  .text-post {\n    display: inline-block;\n    width: ", ";\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"])), (function (e) {
            return e.groupWidth
        }));
        var ro = function (e) {
            var t = e.resourceData, n = Object(i.useState)([]), a = Object(z.a)(n, 2), r = a[0], o = a[1],
                c = Object(i.useState)(!1), s = Object(z.a)(c, 2), l = s[0], d = s[1], p = Object(i.useState)(!0),
                m = Object(z.a)(p, 2), u = m[0], h = m[1], b = Object(i.useState)(!1), f = Object(z.a)(b, 2), g = f[0],
                x = f[1], j = Object(i.useState)(!1), v = Object(z.a)(j, 2), w = v[0], y = v[1], O = Ur((function (e) {
                    return e.eventState
                })), C = fi().data;

            function k(e) {
                d(!0), io(C, e), function () {
                    var e = new CustomEvent("startResourceVideoEvent");
                    document.querySelector("body").dispatchEvent(e)
                }()
            }

            function L(e, t, n) {
                e.preventDefault(), function () {
                    var e = new CustomEvent("pdfDownloadEvent");
                    document.querySelector("body").dispatchEvent(e)
                }(), io(C, n), window.open(t, "_blank")
            }

            return Object(i.useEffect)((function () {
                switch (O) {
                    case Pr:
                        h(!0);
                        break;
                    case Dr:
                        h(!1), x(!1), y(!0);
                        break;
                    case Zr:
                        h(!1), x(!0);
                        break;
                    default:
                        h(!0)
                }
            }), [O]), Object(i.useEffect)((function () {
                void 0 !== t && o(t)
            }), [t]), Object(R.jsxs)(Nr, {
                children: [Object(R.jsx)("div", {
                    className: "events-wrapper",
                    style: u || w ? {flexBasis: "unset"} : {flexBasis: "50%"},
                    children: !!r.length && r.slice(0, 3).map((function (e) {
                        return Object(R.jsxs)("div", {
                            className: "event-container",
                            children: [Object(R.jsx)("div", {
                                className: "event-image",
                                children: Object(R.jsx)("img", {src: e.imageUrl, alt: "Resources"})
                            }), Object(R.jsxs)("div", {
                                className: "event-info",
                                children: [Object(R.jsxs)("h2", {
                                    className: "event-title",
                                    children: [" ", e.title]
                                }), e.videoId ? Object(R.jsxs)("span", {
                                    onClick: function () {
                                        return k(e.id)
                                    },
                                    className: "event-link",
                                    children: [e.ctaLabel, " ", Object(R.jsx)(jt, {
                                        name: "arrow",
                                        style: {marginLeft: "5px"}
                                    })]
                                }) : Object(R.jsxs)("span", {
                                    onClick: function (t) {
                                        return L(t, e.document, e.id)
                                    },
                                    className: "event-link",
                                    children: [e.ctaLabel, " ", Object(R.jsx)(jt, {
                                        name: "arrow",
                                        style: {marginLeft: "5px"}
                                    })]
                                })]
                            })]
                        }, e.id)
                    }))
                }), g && Object(R.jsx)("div", {
                    className: "events-wrapper",
                    children: !!r.length && r.slice(3, 6).map((function (e) {
                        return Object(R.jsxs)("div", {
                            className: "event-container",
                            children: [Object(R.jsx)("div", {
                                className: "event-image",
                                children: Object(R.jsx)("img", {src: e.imageUrl, alt: "Resources"})
                            }), Object(R.jsxs)("div", {
                                className: "event-info",
                                children: [Object(R.jsx)("h2", {
                                    className: "event-title",
                                    children: e.title
                                }), e.videoId ? Object(R.jsxs)("span", {
                                    onClick: function () {
                                        return k(e.id)
                                    },
                                    className: "event-link",
                                    children: [e.ctaLabel, " ", Object(R.jsx)(jt, {
                                        name: "arrow",
                                        style: {marginLeft: "5px"}
                                    })]
                                }) : Object(R.jsxs)("span", {
                                    onClick: function (t) {
                                        return L(t, e.document, e.id)
                                    },
                                    className: "event-link",
                                    children: [e.ctaLabel, " ", Object(R.jsx)(jt, {
                                        name: "arrow",
                                        style: {marginLeft: "5px"}
                                    })]
                                })]
                            })]
                        }, e.id)
                    }))
                }), l && Object(R.jsx)(Wr, {
                    closeModal: function () {
                        d(!1)
                    },
                    children: Object(R.jsx)("div", {
                        className: "video-wrapper",
                        children: Object(R.jsx)(eo, {
                            videoId: r[1].videoId,
                            accountId: Gr.accountId,
                            chatId: null,
                            isChatOpen: !1,
                            playerId: Gr.brightcovePlayerId,
                            handleVideoPlayback: function () {
                            },
                            handleVideoComplete: function () {
                            },
                            points: 1e3,
                            onEnded: function () {
                                return console.log("video complete")
                            },
                            onClose: function () {
                                return console.log("close video")
                            },
                            isOnDemand: !1,
                            playerOptions: {autoplay: !0}
                        })
                    })
                })]
            })
        };
        var oo = function (e) {
            e.caseStudyEvent;
            var t = e.speakerData, n = e.resourceData, a = Object(i.useState)(!0), r = Object(z.a)(a, 2),
                o = (r[0], r[1]), c = Object(i.useState)(!1), s = Object(z.a)(c, 2), l = (s[0], s[1]),
                d = Ur((function (e) {
                    return e.eventState
                }));
            return Object(i.useEffect)((function () {
                switch (d) {
                    case Pr:
                        o(!0);
                        break;
                    case Dr:
                        o(!1), l(!1);
                        break;
                    case Zr:
                        o(!1), l(!0);
                        break;
                    default:
                        o(!0)
                }
            }), [d]), Object(R.jsxs)(yr, {
                initial: {opacity: 0},
                animate: {opacity: 1},
                exit: {opacity: 0},
                children: [Object(R.jsxs)("div", {
                    className: "home-event-speakers",
                    children: [Object(R.jsx)("h2", {
                        className: "home-titles",
                        children: "The Crew"
                    }), Object(R.jsx)(Vr, {speakerData: t})]
                }), Object(R.jsxs)("div", {
                    className: "home-event-resources",
                    children: [Object(R.jsx)("h2", {
                        className: "home-titles",
                        children: "The Tech Garage"
                    }), Object(R.jsx)(ro, {resourceData: n})]
                })]
            })
        };
        var co = function (e) {
            var t = e.featuredEvent, n = e.eventSpeakers, a = e.eventResoures, r = Object(i.useState)(0),
                o = Object(z.a)(r, 2), c = o[0], s = o[1], l = Object(i.useRef)(null), d = Object(i.useRef)(null),
                p = Object(i.useRef)(null), m = Object(fr.a)(0),
                u = (Object(gr.a)(p).scrollXProgress, Object(i.useState)(null)), h = Object(z.a)(u, 2), b = h[0],
                f = h[1], g = Object(jr.useMediaQuery)({query: "(max-width: 720px), (max-height: 720px)"});
            Object(i.useEffect)((function () {
                f([{name: "Featured Content", key: "featuredContent", ref: d, data: [t]}, {
                    name: "Resource Content",
                    key: "resourceContent",
                    ref: l,
                    data: [n, a]
                }])
            }), [t, a, n]);
            var x = Object(i.useCallback)((function (e) {
                if (!g) {
                    var t = e.deltaY, n = window.innerWidth, i = n / 2, a = m.get() + t,
                        r = b[b.length - 1].ref.current, o = r.getBoundingClientRect().width - n + r.offsetLeft;
                    a <= 0 && (a = 0), a >= (o += 600) && (a = o), m.set(a), 0 !== c && a + i > 0 && a + i < b[0].ref.current.getBoundingClientRect().width ? s(0) : 1 !== c && a + i > b[1].ref.current.offsetLeft && a + i < b[1].ref.current.offsetLeft + b[1].ref.current.getBoundingClientRect().width && s(1)
                }
            }), [c, g, m, b]);

            function j(e) {
                var t = b[e].ref.current;
                Object(xr.a)(p.current.scrollLeft, t.offsetLeft, {
                    type: "tween",
                    ease: "easeOut",
                    onUpdate: function (e) {
                        return p.current.scrollLeft = e
                    }
                }), m.set(t.offsetLeft, !1)
            }

            return Object(i.useEffect)((function () {
                return window.addEventListener("wheel", x), function () {
                    window.removeEventListener("wheel", x)
                }
            }), [x]), Object(i.useEffect)((function () {
                return m.onChange((function (e) {
                    Object(xr.a)(p.current.scrollLeft, e, {
                        type: "tween", ease: "easeOut", onUpdate: function (e) {
                            return p.current.scrollLeft = e
                        }
                    })
                }))
            }), []), Object(R.jsxs)(R.Fragment, {
                children: [b && c < b.length - 1 && Object(R.jsx)(Or, {
                    initial: {x: 30, opacity: .4},
                    whileHover: {x: 10, opacity: 1},
                    onTap: function (e, t) {
                        var n = c + 1 <= b.length - 1 ? c + 1 : 0;
                        j(n), s(n)
                    },
                    className: "arrow-right",
                    children: Object(R.jsx)("svg", {
                        viewBox: "0 0 8 14",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: Object(R.jsx)("path", {
                            d: "M7.744 7.608l-6.23 6.14a.913.913 0 01-1.258 0 .875.875 0 010-1.236L5.866 7 .257 1.488a.874.874 0 010-1.237.913.913 0 011.259 0l6.229 6.12a.874.874 0 010 1.237z",
                            fill: "currentColor",
                            fillRule: "evenodd"
                        })
                    })
                }), c > 0 && Object(R.jsx)(Or, {
                    initial: {x: -30, opacity: .4, rotateY: "180deg"},
                    whileHover: {x: -10, opacity: 1},
                    onTap: function (e, t) {
                        var n = c - 1 >= 0 ? c - 1 : b.length - 1;
                        j(n), s(n)
                    },
                    className: "arrow-left",
                    children: Object(R.jsx)("svg", {
                        viewBox: "0 0 8 14",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: Object(R.jsx)("path", {
                            d: "M7.744 7.608l-6.23 6.14a.913.913 0 01-1.258 0 .875.875 0 010-1.236L5.866 7 .257 1.488a.874.874 0 010-1.237.913.913 0 011.259 0l6.229 6.12a.874.874 0 010 1.237z",
                            fill: "currentColor",
                            fillRule: "evenodd"
                        })
                    })
                }), Object(R.jsxs)(Cr, {
                    className: "scroll-container",
                    ref: p,
                    children: [Object(R.jsx)(kr, {
                        ref: d,
                        children: Object(R.jsx)("section", {
                            className: "slide-section",
                            children: Object(R.jsx)($r, {featuredEvent: t})
                        })
                    }), Object(R.jsx)(kr, {
                        ref: l,
                        children: Object(R.jsx)("section", {
                            className: "slide-section",
                            children: Object(R.jsx)(oo, {speakerData: n, resourceData: a})
                        })
                    })]
                })]
            })
        };

        function so() {
            return lo.apply(this, arguments)
        }

        function lo() {
            return lo = Object(p.a)(d.a.mark((function e() {
                var t, n, i, a = arguments;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return t = a.length > 0 && void 0 !== a[0] ? a[0] : "en", n = a.length > 1 && void 0 !== a[1] ? a[1] : "", e.prev = 2, e.next = 5, In.a.get("".concat(Sn), "/content/events?lang=".concat(t, "&tag=").concat(n));
                        case 5:
                            return i = e.sent, e.abrupt("return", i);
                        case 9:
                            throw e.prev = 9, e.t0 = e.catch(2), e.t0;
                        case 12:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[2, 9]])
            }))), lo.apply(this, arguments)
        }

        function po(e) {
            return mo.apply(this, arguments)
        }

        function mo() {
            return (mo = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.t0 = ho, e.next = 4, so(t, "");
                        case 4:
                            return e.t1 = e.sent, e.next = 7, (0, e.t0)(e.t1);
                        case 7:
                            return n = e.sent, e.abrupt("return", n);
                        case 11:
                            throw e.prev = 11, e.t2 = e.catch(0), e.t2;
                        case 14:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 11]])
            })))).apply(this, arguments)
        }

        function uo(e) {
            var t = e.lastIndexOf("/");
            return e.substring(t + 1)
        }

        function ho(e) {
            var t = {};
            return t.events = e.events.filter((function (e) {
                return !1 === e.isPast
            })), t
        }

        function bo(e) {
            return fo.apply(this, arguments)
        }

        function fo() {
            return (fo = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(Bn, {input: t}));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function go(e) {
            return xo.apply(this, arguments)
        }

        function xo() {
            return (xo = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(Fn, {input: t}));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function jo(e) {
            return vo.apply(this, arguments)
        }

        function vo() {
            return (vo = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(ei, {id: t}));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        var wo = function () {
            var e = Object(h.i)().lang, t = fi().data, n = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return Object(_.a)(["events", e + t], Object(p.a)(d.a.mark((function n() {
                    var i;
                    return d.a.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, In.a.get("".concat(Sn), "/content/events?lang=".concat(e, "&tag=").concat(t));
                            case 2:
                                return i = n.sent, n.abrupt("return", i.events);
                            case 4:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                }))))
            }(e), a = n.data, r = n.isLoading, o = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return Object(_.a)(["speakers", e], Object(p.a)(d.a.mark((function n() {
                    var i, a;
                    return d.a.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, In.a.get("".concat(Sn), "/content/speakers?lang=".concat(e, "&tag=").concat(t));
                            case 2:
                                return i = n.sent, a = i.speakers.map((function (e) {
                                    return e
                                })), n.abrupt("return", a);
                            case 5:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                }))))
            }(e), c = o.data, s = o.isLoading, l = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
                return Object(_.a)(["contenthub", e], Object(p.a)(d.a.mark((function t() {
                    var n, i;
                    return d.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, In.a.get("".concat(Sn), "/content/contenthub?lang=".concat(e));
                            case 2:
                                return n = t.sent, i = n.resources.map((function (e) {
                                    return e
                                })), t.abrupt("return", i);
                            case 5:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                }))))
            }(e), m = l.data, u = l.isLoading, b = null === a || void 0 === a ? void 0 : a.filter((function (e) {
                return e.preferences.includes("virtual-events:session/featured")
            }));
            return Object(i.useEffect)((function () {
                function e() {
                    return (e = Object(p.a)(d.a.mark((function e() {
                        var n, i, a, r, o, c, s, l;
                        return d.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return 20, n = new Date, i = new Date(n.getTime() + 12e5), a = Math.floor(i.getTime() / 1e3), r = t.id, o = t.firstName, c = t.lastName, s = t.email, l = {
                                        id: r,
                                        firstName: o,
                                        lastName: c,
                                        email: s,
                                        expirationUnixTime: a
                                    }, e.next = 8, jo(r);
                                case 8:
                                    null !== e.sent.data.getUserLogin ? go(l) : bo(l);
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                !function () {
                    e.apply(this, arguments)
                }()
            }), [t, e]), r || s || u ? Object(R.jsx)(R.Fragment, {
                children: Object(R.jsx)(br, {
                    top: "30%",
                    size: {width: "120px", height: "120px"}
                })
            }) : Object(R.jsx)(se.a.div, {
                initial: {opacity: 0},
                animate: {opacity: 1},
                exit: {opacity: 0},
                children: Object(R.jsx)(Lr, {
                    children: Object(R.jsx)(co, {
                        featuredEvent: null !== b && void 0 !== b ? b : [],
                        eventSpeakers: null !== c && void 0 !== c ? c : [],
                        eventResoures: null !== m && void 0 !== m ? m : []
                    })
                })
            })
        }, yo = function (e, t) {
            return Math.random() * (t - e) + e
        }, Oo = function (e, t) {
            var n = yo(e[0], e[1]), i = t[1] - t[0] + 1, a = t[1] - Math.abs(yo(0, i) + yo(0, i) - i);
            return a >= t[1] - 1 && (a += Math.random() < .25 ? yo(1, 3) : 0), {x: n, y: -a}
        };
        var Co = {
            color: {r: 255, g: 0, b: 255},
            width: window.innerWidth,
            height: window.innerHeight,
            count: 360,
            size: {x: [5, 9], y: [8, 15]},
            gravity: .4,
            drag: .075,
            terminalVelocity: 4,
            el: document.createElement("div"),
            isFall: !1,
            decay: .01,
            styles: "height: 100vh; pointer-events: none; position: fixed; width: 100%; z-index: 2; top: 0; left: 0;"
        }, ko = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.color,
                    i = void 0 === n ? Co.color : n, a = t.width, r = void 0 === a ? Co.width : a, o = t.height,
                    c = void 0 === o ? Co.height : o, s = t.count, l = void 0 === s ? Co.count : s, d = t.size,
                    p = void 0 === d ? Co.size : d, m = t.gravity, u = void 0 === m ? Co.gravity : m, h = t.drag,
                    b = void 0 === h ? Co.drag : h, f = t.terminalVelocity, g = void 0 === f ? Co.terminalVelocity : f,
                    x = t.el, j = void 0 === x ? Co.el : x, v = t.styles, w = void 0 === v ? Co.styles : v,
                    y = t.isFall, O = void 0 === y ? Co.isFall : y, C = t.decay, k = void 0 === C ? Co.decay : C;
                Object(wa.a)(this, e), this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.confetti = [], this.count = l, this.size = p, this.gravity = u, this.drag = b, this.terminalVelocity = g, this.decay = k, this.canvasStyles = w, this.color = i, this.canvas.width = r, this.canvas.height = c, this.reqId = null, this.el = j, this.isFall = O, this.canvas.setAttribute("style", this.canvasStyles), this.canvas.setAttribute("class", "big-confetti-canvas"), this.el.appendChild(this.canvas)
            }

            return Object(ya.a)(e, [{
                key: "initBurst", value: function () {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.reqId && (window.cancelAnimationFrame(this.reqId), this.reqId = null), this.confetti = [];
                    for (var e = 0; e < this.count; e++) this.confetti.push(new Lo({
                        count: this.count,
                        gravity: this.gravity,
                        colors: this.colors,
                        width: this.canvas.width,
                        height: this.canvas.height,
                        size: this.size,
                        drag: this.drag,
                        terminalVelocity: this.terminalVelocity,
                        isFall: this.isFall,
                        decay: this.decay
                    }))
                }
            }, {
                key: "render", value: function (e, t, n, i, a) {
                    var r = this;
                    t.clearRect(0, 0, n, i), a.forEach((function (e, n) {
                        t.fillStyle = "rgba(".concat(r.color.r, ", ").concat(r.color.g, ", ").concat(r.color.b, ", ").concat(e.totalDecay, ")");
                        var i = e.dimensions.x * e.scale.x, a = e.dimensions.y * e.scale.y + i,
                            o = a * Math.cos(Math.PI / 6), c = e.position.x, s = e.position.y;
                        switch (e.shape) {
                            case"triangle":
                                t.translate(e.position.x + a / 2, e.position.y + a / 2), t.rotate(e.rotation), t.translate(-e.position.x - a / 2, -e.position.y - a / 2), t.beginPath(), t.moveTo(c, s), t.lineTo(c + a, s), t.lineTo(c + a / 2, s - o), t.fill(), t.closePath();
                                break;
                            case"square":
                                t.translate(e.position.x + a / 2, e.position.y + a / 2), t.rotate(e.rotation), t.translate(-e.position.x - a / 2, -e.position.y - a / 2), t.fillRect(c, s, a, a);
                                break;
                            case"circle":
                                t.beginPath(), t.arc(Math.abs(c), Math.abs(s), Math.abs(a) / 2, 0, 2 * Math.PI, !1), t.fill(), t.closePath();
                                break;
                            default:
                                t.beginPath(), t.moveTo(c, s), t.lineTo(c + a, s), t.lineTo(c + a / 2, s - o), t.fill(), t.closePath()
                        }
                        t.setTransform(1, 0, 0, 1, 0, 0), e.update()
                    }));
                    var o = this.isFall;
                    a.forEach((function (e, t) {
                        e.position.y >= i && (o && (e.position.y = 0), o && 0 !== e.totalDecay || a.splice(t, 1))
                    })), a.length > 0 ? this.reqId = window.requestAnimationFrame((function () {
                        return e.render(e, t, n, i, a)
                    })) : this.reqId && (window.cancelAnimationFrame(this.reqId), this.reqId = null)
                }
            }, {
                key: "appendTo", value: function (e) {
                    this.el = e, this.el.appendChild(this.canvas)
                }
            }, {
                key: "boom", value: function () {
                    this.initBurst(), this.render(this, this.ctx, this.canvas.width, this.canvas.height, this.confetti)
                }
            }]), e
        }();
        var Lo = function () {
            function e(t) {
                t.colors;
                var n = t.width, i = t.height, a = t.size, r = t.drag, o = t.gravity, c = t.terminalVelocity,
                    s = t.isFall, l = void 0 !== s && s, d = t.decay;
                Object(wa.a)(this, e), this.drag = r, this.gravity = o, this.terminalVelocity = c, this.isFall = l, this.decay = d, this.totalDecay = 1;
                var p = ["triangle", "square"];
                this.shape = p[Math.floor(Math.random() * Math.floor(p.length))], this.randomModifier = yo(0, 99), this.dimensions = {
                    x: yo(a.x[0], a.x[1]),
                    y: yo(a.y[0], a.y[1])
                }, this.position = l ? function (e, t) {
                    return {x: yo(0, e), y: yo(0, t)}
                }(n, i) : function (e, t) {
                    return {x: yo(e / 2, e / 2), y: yo(0, t / 2)}
                }(n, i), this.rotation = yo(0, 2 * Math.PI), this.scale = {
                    x: 1,
                    y: 1
                }, this.isFall ? this.velocity = Oo([-10, 10], [0, 12]) : this.velocity = Oo([-100, 100], [2, 20])
            }

            return Object(ya.a)(e, [{
                key: "updateFallPosisiton", value: function () {
                    this.rotation = this.rotation + .01 * this.velocity.y, this.velocity.x -= this.velocity.x * this.drag, this.velocity.y = this.velocity.y > this.terminalVelocity ? this.velocity.y - this.gravity : this.velocity.y < 0 ? this.velocity.y + this.gravity : this.velocity.y - this.gravity, this.velocity.x += Math.random() > .5 ? Math.random() : -Math.random(), this.position.x += this.velocity.x, this.position.y += this.velocity.y + 10 * Math.random()
                }
            }, {
                key: "updateBurstPosition", value: function () {
                    this.rotation = this.rotation + .03 * this.velocity.y, this.velocity.x -= this.velocity.x * this.drag, this.velocity.y = Math.min(this.velocity.y + this.gravity * Math.random(), this.terminalVelocity), this.position.x += this.velocity.x, this.position.y += this.velocity.y
                }
            }, {
                key: "update", value: function () {
                    this.isFall ? this.updateFallPosisiton() : this.updateBurstPosition(), this.totalDecay > 0 && (this.totalDecay -= .1 * this.decay)
                }
            }]), e
        }(), No = ko, Io = {r: 235, g: 189, b: 101}, So = {
            width: 100,
            height: 100,
            count: 55,
            size: {x: [1, 3], y: [2, 4]},
            gravity: 1.2,
            drag: .1,
            terminalVelocity: 1,
            color: Io,
            styles: "height: 100px; pointer-events: none; position: absolute; width: 100px; z-index: 2; bottom: -28px; right: -30px;"
        }, zo = new No({
            color: Io,
            width: window.innerWidth,
            height: window.innerHeight,
            count: 600,
            drag: .1,
            gravity: 1,
            terminalVelocity: 1.2,
            isFall: !1,
            size: {x: [3, 7], y: [3, 7]},
            styles: "width: 100vw; height: 100vh; pointer-events: none; z-index: 10; top: 0; left: 0; position: fixed;"
        }), Eo = new No(So);

        function Mo() {
            zo.boom()
        }

        function _o() {
            Eo.boom()
        }

        function To() {
            return {bigBoom: Mo, badgeBoom: _o, bigConfetti: zo, badgeConfetti: Eo}
        }

        var Ro = ce.b.div.withConfig({
            displayName: "WelcomeBanner__WelcomeBannerContainerStyles",
            componentId: "sc-7pbnsq-0"
        })(["background-color:rgba(0,0,0,0.8);width:calc(100vw - 513px);height:200px;padding-left:22%;position:absolute;bottom:0;left:0;z-index:20;@media (max-width:768px){display:none;}.welcome-content-wrapper{display:flex;flex-direction:row;padding:75px;.welcome-logo{width:114px;height:40px;img{width:100%;height:100%;margin-top:5px;}}.welcome-title{height:55px;width:207px;color:var(--color-white);font-style:normal;font-weight:bold;font-size:18px;line-height:26px;margin-left:20px;border-left:1px solid #2C2C2C;padding-left:20px;}}"]);
        var Ao = function () {
            return Object(R.jsx)(Ro, {
                children: Object(R.jsxs)("div", {
                    className: "welcome-content-wrapper",
                    children: [Object(R.jsx)("div", {
                        className: "welcome-logo",
                        children: Object(R.jsx)("img", {
                            src: "/static/images/registration/registration-hitachi-logo.png",
                            alt: "logo"
                        })
                    }), Object(R.jsx)("div", {
                        className: "welcome-title",
                        children: "Digital Infrastructure For The Data-Driven."
                    })]
                })
            })
        }, Po = n(207);
        n(44), ce.b.button.withConfig({
            displayName: "Debugger__DebugButtonStyles",
            componentId: "sc-fz0m8x-0"
        })(["font-size:28px;position:fixed;bottom:73px;left:60px;z-index:190;"]);
        var Do = ce.b.div.withConfig({
                displayName: "styles__NavBottomContainer",
                componentId: "sc-1mpm9gs-0"
            })(["position:fixed;width:100vw;z-index:24;bottom:0;left:0;background:rgba(0,0,0,0.85);box-shadow:0 -12px 14px 0 rgba(0,0,0,0.17);.logo-link{cursor:pointer;margin:0 0 0 3.4rem;&:hover{text-decoration:none;color:var(--color-white);}&:visited{text-decoration:none;}}.nav-logo{margin-top:8px;}.user-avatar{margin:0 3rem 0 4rem;}.tagline-wrapper{width:100%;text-align:center;.nav-bottom-tag-line{font-style:normal;font-weight:bold;font-size:18px;color:var(--color-white);margin-top:0;padding-left:25px;padding-top:10px;width:100%;}}.agenda-button{min-width:130px;display:flex;align-items:center;justify-content:space-between;padding:1rem 2.2rem 1rem 1rem;}.nav-user-bar{flex-shrink:0;}.nav-bottom-content{display:flex;width:100%;height:63px;padding:1rem 4rem;}.nav-bottom{display:flex;}.nav-group-left{justify-content:flex-start;}.nav-group-right{justify-content:flex-end;align-items:flex-end;.nav-button{margin:0 0 0 30px;}}.logout-button{display:flex;font-style:normal;font-weight:bold;font-size:14px;line-height:22px;color:var(--color-white);.button-lable{margin-right:10px;padding-top:5px;}}@media (max-width:750px){.nav-user-bar{width:130px;}}@media (max-width:700px){.nav-user-bar{display:none;}}@media (max-width:650px){.chat-button{display:none;}}@media (max-width:500px){.nav-logo{display:none;}}@media (max-width:400px){.agenda-button{min-width:40px;padding:2rem;.calendar-icon{margin:0;}.text{display:none;}}}"]),
            Zo = (Object(ce.b)(se.a.button).withConfig({
                displayName: "styles__NavButtonStyles",
                componentId: "sc-1mpm9gs-1"
            })(["padding:0.5rem;color:var(--color-primary);background:transparent;margin:0;cursor:pointer;position:relative;transition:0.2s;&:hover,&.nav-button-active{color:var(--color-white);}"]), Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__BrandLogoStyles",
                componentId: "sc-5n7rfa-0"
            })(["display:flex;width:", ";align-items:center;justify-content:center;img{width:100%;}"], (function (e) {
                return e.width
            })));
        var qo = function (e) {
            var t = e.style, n = e.width, i = void 0 === n ? "100px" : n, a = e.className, r = de()("brand-logo", a);
            return Object(R.jsx)(Zo, {
                width: i,
                style: t,
                className: r,
                children: Object(R.jsx)("img", {
                    src: "/static/images/registration/registration-hitachi-logo.png",
                    alt: "Hitachi Social Innovation Forum 2021 Americas"
                })
            })
        };
        var Uo = function () {
                Object(h.i)().lang;
                var e = ie(), t = e.signOut, n = e.refetchSession;

                function i() {
                    return (i = Object(p.a)(d.a.mark((function e() {
                        var i;
                        return d.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, n();
                                case 3:
                                    Li(e.sent.data), t(), e.next = 12;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), i = e.t0.message, console.log("Error is signing out" + i);
                                case 12:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 8]])
                    })))).apply(this, arguments)
                }

                return Object(R.jsx)(Do, {
                    children: Object(R.jsxs)("div", {
                        className: "nav-bottom-content",
                        children: [Object(R.jsx)("div", {
                            className: "nav-bottom nav-group-left",
                            children: Object(R.jsx)(L.b, {
                                to: "/go/storage-acceleration/en",
                                className: "logo-link",
                                children: Object(R.jsx)(qo, {className: "nav-logo"})
                            })
                        }), Object(R.jsx)("div", {
                            className: "tagline-wrapper",
                            children: Object(R.jsx)("div", {
                                className: "nav-bottom-tag-line",
                                children: "Digital Infrastructure For The Data-Driven."
                            })
                        }), Object(R.jsx)("div", {
                            className: "nav-bottom nav-group-right",
                            children: Object(R.jsx)("div", {
                                children: Object(R.jsxs)(se.a.button, {
                                    onClick: function () {
                                        return i.apply(this, arguments)
                                    },
                                    className: "logout-button",
                                    children: [Object(R.jsx)("span", {
                                        className: "button-lable",
                                        children: "Logout"
                                    }), "  ", Object(R.jsx)(jt, {name: "logout", width: "30px", color: "white"})]
                                })
                            })
                        })]
                    })
                })
            }, Ho = ce.b.div.withConfig({
                displayName: "styles__PageLayoutStyles",
                componentId: "sc-ghbc72-0"
            })(['background-image:url(/static/images/hitachi-light/event-bkg.png);background-repeat:no-repeat;background-size:cover;width:100%;position:relative;margin:0;padding:0;display:flex;height:100%;flex-direction:column;overflow:hidden;background-color:var(--color-brand-dark-blue);.full-height{height:100%;flex-basis:100%;}&::before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,.625);}']),
            Bo = (ce.b.div.withConfig({
                displayName: "styles__PageHeadingStyles",
                componentId: "sc-ghbc72-1"
            })(["position:relative;z-index:0;h1,h2,h3{color:var(--color-white);position:relative;z-index:1;}h1{font-weight:600;margin:3rem 0 0 0;font-size:5rem;}h2,h3{text-align:center;font-weight:300;margin:0;}"]), ce.b.div.withConfig({
                displayName: "styles__PageMediaContentStyles",
                componentId: "sc-ghbc72-2"
            })(["position:relative;top:0;bottom:0;z-index:0;height:100%;background:var(--color-gray-4);flex:0 1 auto;"]));
        ce.b.div.withConfig({
            displayName: "styles__PageContentContainerStyles",
            componentId: "sc-ghbc72-3"
        })(["max-width:var(--page-max-width);margin:0 auto;padding:0 var(--page-side-spacing);"]);

        function Fo(e) {
            var t = e.children;
            return Object(R.jsx)(Bo, {children: t})
        }

        var $o = function (e) {
                var t = e.children, n = e.meta, a = void 0 === n ? {} : n, r = Object(i.useState)(!1),
                    o = Object(z.a)(r, 2), c = (o[0], o[1], Object(i.useState)(!1)), s = Object(z.a)(c, 2), l = s[0],
                    d = s[1], p = Object(h.h)(), m = new URLSearchParams(Object(h.h)().search);
                return Object(i.useEffect)((function () {
                    var e = m.get("event");
                    d(null != e)
                }), [m, l, p.pathname]), Object(R.jsx)(Po.b, {
                    children: Object(R.jsxs)(Ho, {
                        children: [Object(R.jsxs)(Po.a, {
                            children: [Object(R.jsx)("title", {children: "".concat(a.title ? a.title + "|" : "", "  Hitachi")}), Object(R.jsx)("meta", {
                                name: "description",
                                content: a.description ? a.description : ""
                            })]
                        }), j, j, Object(R.jsx)(Xa, {}), !l && Object(R.jsx)(Uo, {}), t]
                    })
                })
            }, Vo = ce.b.div.withConfig({
                displayName: "SessionEndPage__AgendaButton",
                componentId: "sc-15i10sg-0"
            })(["font-size:var(--font-size-large);max-height:50px;min-width:165px;position:relative;font-weight:600;background:var(--color-primary);color:var(--color-white);padding:1.4rem 1.5rem;margin:0;cursor:pointer;box-shadow:0 12px 17px 0 rgb(0 0 0 / 9%);-webkit-transition:0.3s;transition:0.3s;text-align:center;&[disabled]{color:var(--color-gray-3);background:transparent;border-color:var(--color-gray-3);cursor:not-allowed;box-shadow:none;}&:hover{border:2px solid var(--color-primary);color:var(--color-primary);background-color:var(--color-white);box-shadow:none;}"]),
            Wo = ce.b.img.withConfig({
                displayName: "SessionEndPage__BackgroundImageStyles",
                componentId: "sc-15i10sg-1"
            })(["width:100%;height:100%;object-fit:cover;position:absolute;bottom:0;left:0;z-index:-20;"]),
            Go = ce.b.div.withConfig({
                displayName: "SessionEndPage__EndScreenHeadingStyles",
                componentId: "sc-15i10sg-2"
            })(["background-color:rgba(255,255,255,0.19);height:63px;left:0;object-fit:cover;position:absolute;top:0;width:100%;z-index:10;.header-container{display:flex;flex-direction:row;}.poll-close-btn{cursor:pointer;display:flex;height:15px;justify-content:flex-start;margin:15px;width:15px;}.end-poll-header-text{color:var(--color-white);font-family:var(--font-display);font-size:18px;font-weight:bold;height:45px;letter-spacing:0;padding-top:15px;width:100%;text-align:center;}"]),
            Xo = (ce.b.div.withConfig({
                displayName: "SessionEndPage__PageLayout",
                componentId: "sc-15i10sg-3"
            })(["position:relative;margin:0;padding:0;display:flex;height:100%;min-height:-webkit-fill-available;flex-direction:column;overflow:hidden !important;"]), ce.b.div.withConfig({
                displayName: "SessionEndPage__PageMediaContentStyles",
                componentId: "sc-15i10sg-4"
            })(["background:var(--color-black);height:100%;"])), Qo = ce.b.div.withConfig({
                displayName: "SessionEndPage__ErrorMessageContainer",
                componentId: "sc-15i10sg-5"
            })(["position:relative;display:flex;align-items:center;justify-content:center;width:600px;height:400px;z-index:10;background-color:rgba(255,255,255,0.19);margin:0 auto;margin-top:10%;.registration-modal-content{display:flex;position:relative;max-width:650px;flex-direction:column;align-items:center;padding:50px;}.modal-header{font-family:var(--font-display);font-size:42px;margin:0;font-weight:300;}.modal-message{font-size:14px;max-width:450px;margin:40px 0;}.button-group{display:flex;justify-content:space-between;button{font-size:14px;margin:0 20px;}}"]);
        var Ko = function () {
                var e = Object(h.i)().lang, t = Object(h.g)();
                Object(i.useEffect)((function () {
                }), []);
                var n = function () {
                    return Object(R.jsx)(Go, {
                        children: Object(R.jsxs)("div", {
                            className: "header-container",
                            children: [Object(R.jsx)("div", {className: "poll-close-btn"}), Object(R.jsx)("div", {
                                className: "end-poll-header-text",
                                children: "Oops! We can't find that content."
                            })]
                        })
                    })
                };
                return Object(R.jsxs)(R.Fragment, {
                    children: [Object(R.jsx)(n, {}), Object(R.jsxs)(Xo, {
                        children: [Object(R.jsx)(Qo, {
                            children: Object(R.jsxs)("div", {
                                className: "registration-modal-content",
                                children: [Object(R.jsx)("h2", {
                                    className: "modal-header",
                                    children: "Uh Oh!"
                                }), Object(R.jsx)("p", {
                                    className: "modal-message",
                                    children: "Looks like that content is unavailable, take a look at the event agenda page for currently available content."
                                }), Object(R.jsx)(Vo, {
                                    onClick: function () {
                                        t.push("/".concat(e, "/agenda"))
                                    }, children: "Event Agenda"
                                })]
                            })
                        }), Object(R.jsx)(Wo, {src: "/static/images/pure-accelerate/homepage-bg.jpg"})]
                    })]
                })
            }, Yo = ce.b.div.withConfig({
                displayName: "VodEndPage__AgendaButton",
                componentId: "sc-4sxztj-0"
            })(["font-size:var(--font-size-large);max-height:50px;min-width:165px;position:relative;font-weight:600;background:var(--color-primary);color:var(--color-white);padding:1.4rem 1.5rem;margin:0;cursor:pointer;box-shadow:0 12px 17px 0 rgb(0 0 0 / 9%);-webkit-transition:0.3s;transition:0.3s;text-align:center;&[disabled]{color:var(--color-gray-3);background:transparent;border-color:var(--color-gray-3);cursor:not-allowed;box-shadow:none;}&:hover{border:2px solid var(--color-primary);color:var(--color-primary);background-color:var(--color-white);box-shadow:none;}"]),
            Jo = ce.b.img.withConfig({
                displayName: "VodEndPage__BackgroundImageStyles",
                componentId: "sc-4sxztj-1"
            })(["width:100%;height:100%;object-fit:cover;position:absolute;bottom:0;left:0;z-index:-20;"]),
            ec = ce.b.div.withConfig({
                displayName: "VodEndPage__EndScreenHeadingStyles",
                componentId: "sc-4sxztj-2"
            })(["background-color:#fe5000;height:63px;left:0;object-fit:cover;position:absolute;top:0;width:100%;z-index:10;.header-container{display:flex;flex-direction:row;}.poll-close-btn{cursor:pointer;display:flex;height:15px;justify-content:flex-start;margin:15px;width:15px;}.end-poll-header-text{color:var(--color-white);font-family:Gotham;font-size:18px;font-weight:bold;height:45px;letter-spacing:0;padding-top:15px;width:100%;text-align:center;}"]),
            tc = (ce.b.div.withConfig({
                displayName: "VodEndPage__PageLayout",
                componentId: "sc-4sxztj-3"
            })(["position:relative;margin:0;padding:0;display:flex;height:100%;min-height:800px;flex-direction:column;overflow:hidden !important;"]), ce.b.div.withConfig({
                displayName: "VodEndPage__ErrorMessageContainer",
                componentId: "sc-4sxztj-4"
            })(["position:relative;display:flex;align-items:center;justify-content:center;width:600px;height:400px;z-index:10;background:var(--color-white);border-radius:8px;margin:0 auto;margin-top:10%;.registration-modal-content{display:flex;position:relative;max-width:650px;flex-direction:column;align-items:center;padding:25px;background:var(--color-white);}.modal-header{font-family:var(--font-display);font-size:42px;margin:0;font-weight:300;}.modal-message{font-size:14px;max-width:450px;margin:40px 0;}.button-group{display:flex;justify-content:space-between;button{font-size:14px;margin:0 20px;}}"]));
        var nc = function (e) {
                var t = e.endScreen, n = Object(h.i)().lang, a = Object(h.g)();
                Object(i.useEffect)((function () {
                }), []);
                var r = Rr.a.sanitize(t.description), o = function () {
                    return Object(R.jsx)(ec, {
                        children: Object(R.jsxs)("div", {
                            className: "header-container",
                            children: [Object(R.jsx)("div", {className: "poll-close-btn"}), Object(R.jsx)("div", {
                                className: "end-poll-header-text",
                                children: t.summary
                            })]
                        })
                    })
                };
                return Object(R.jsxs)(R.Fragment, {
                    children: [Object(R.jsx)(o, {}), Object(R.jsxs)(Fo, {
                        children: [Object(R.jsx)(tc, {
                            children: Object(R.jsxs)("div", {
                                className: "registration-modal-content",
                                children: [Object(R.jsx)("h2", {
                                    className: "modal-header",
                                    children: t.title
                                }), Object(R.jsx)("p", {
                                    className: "modal-message",
                                    dangerouslySetInnerHTML: {__html: r}
                                }), Object(R.jsx)(Yo, {
                                    onClick: function () {
                                        a.push("/".concat(n, "/agenda"))
                                    }, children: "Event Agenda"
                                })]
                            })
                        }), Object(R.jsx)(Jo, {src: t.backgroundImage})]
                    })]
                })
            }, ic = n(47), ac = n(452), rc = {left: "45deg", right: "-135deg", up: "-225deg", down: "-45deg"},
            oc = ce.b.div.withConfig({
                displayName: "Triangle__TriangleStyles",
                componentId: "sc-fyuc06-0"
            })(["background-color:", ";position:absolute;display:block;height:", ";width:", ";border-bottom:1px solid var(--color-white);border-left:1px solid var(--color-white);position:absolute;top:", ";left:", ";right:", ";bottom:", ";clip-path:polygon(0% 0%,100% 100%,0% 100%);transform:", ";border-radius:0.25rem;"], (function (e) {
                return e.color
            }), (function (e) {
                return e.size
            }), (function (e) {
                return e.size
            }), (function (e) {
                return e.top
            }), (function (e) {
                return e.left
            }), (function (e) {
                return e.right
            }), (function (e) {
                return e.bottom
            }), (function (e) {
                var t = e.direction;
                return "rotate(".concat(rc[t], ")")
            }));
        var cc = function (e) {
                var t = e.borderRadius, n = void 0 === t ? "30%" : t, i = e.color, a = void 0 === i ? "black" : i,
                    r = e.direction, o = void 0 === r ? "left" : r, c = e.left, s = void 0 === c ? "-0.6rem" : c, l = e.top,
                    d = void 0 === l ? "1rem" : l, p = e.right, m = void 0 === p ? "unset" : p, u = e.bottom,
                    h = void 0 === u ? "unset" : u, b = e.size, f = void 0 === b ? "1.2rem" : b;
                return Object(R.jsx)(oc, {
                    size: f,
                    left: s,
                    right: m,
                    bottom: h,
                    top: d,
                    direction: o,
                    borderRadius: n,
                    color: a
                })
            }, sc = Object(ce.b)(se.a.img).withConfig({
                displayName: "styles__ProfilePhoto",
                componentId: "sc-1woav9t-0"
            })(["border-radius:50%;width:", ";height:", ";object-fit:cover;"], (function (e) {
                return e.imageWidth
            }), (function (e) {
                return e.imageHeight
            })), lc = Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__ImageWrapperStyles",
                componentId: "sc-1woav9t-1"
            })(["border-radius:100%;width:40px;height:40px;"]),
            dc = ["userId", "alt", "className", "imageWidth", "imageHeight", "showIcon"],
            pc = "/static/images/avatar-placeholder.svg";
        var mc = function (e) {
                e.userId;
                var t = e.alt, n = void 0 === t ? "default avatar" : t, a = e.className, r = e.imageWidth,
                    o = void 0 === r ? "100%" : r, c = e.imageHeight, s = void 0 === c ? "100%" : c, l = e.showIcon,
                    d = void 0 !== l && l, p = Object(u.a)(e, dc), h = Object(i.useState)(pc), b = Object(z.a)(h, 2),
                    f = b[0], g = b[1], x = Object(i.useState)(!1), j = Object(z.a)(x, 2), v = (j[0], j[1]),
                    w = Object(i.useState)(!0), y = Object(z.a)(w, 2), O = y[0], C = y[1], k = Object(i.useRef)(),
                    L = de()("image-wrapper", a);
                Object(i.useEffect)((function () {
                    if (k.current) {
                        var e = k.current;
                        return e.addEventListener("error", (function (e) {
                            g(pc), C(!1)
                        })), e.addEventListener("load", t), function () {
                            e.removeEventListener("load", t)
                        }
                    }

                    function t(e) {
                        v(!0), C(!1)
                    }
                }), [f]);
                var N = {show: {opacity: 1}, hide: {opacity: 0}};
                return Object(R.jsxs)(E.a, {
                    children: [f && Object(R.jsx)(lc, {
                        initial: "hide",
                        animate: "show",
                        exit: "hide",
                        variants: N,
                        className: L,
                        children: d ? Object(R.jsx)(se.a.span, {
                            initial: "hide",
                            animate: "show",
                            exit: "hide",
                            variants: N,
                            className: "person-icon-wrapper",
                            children: Object(R.jsx)(jt, {name: "person", width: "20px", color: "var(--color-brand-red)"})
                        }, "icon") : Object(R.jsx)(sc, Object(m.a)({
                            whileHover: {scale: 1.2},
                            initial: "hide",
                            animate: "show",
                            exit: "hide",
                            variants: N,
                            imageWidth: o,
                            imageHeight: s,
                            ref: k,
                            src: f,
                            alt: n,
                            className: "".concat(a)
                        }, p))
                    }, "image-wrapper"), O && !d && Object(R.jsx)(se.a.div, {
                        initial: "hide",
                        animate: "show",
                        exit: "hide",
                        variants: N,
                        className: "loading",
                        children: "Loading..."
                    }, "loader")]
                })
            }, uc = Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__ChatViewStyles",
                componentId: "sc-nktju5-0"
            })([".message-composer{.message-form{width:100%;background-color:#000;.message-input{width:87%;}}}"]),
            hc = (Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__ChatStyles",
                componentId: "sc-nktju5-1"
            })(['width:513px;height:calc(100vh - 60px);position:fixed;right:0;z-index:100;box-shadow:0 -3px 34px 0 rgba(0,0,0,0.48);background-color:var(--color-chat-dark-gray-two-semi-darker);@media (max-width:575px){height:calc(100vh);bottom:0;width:100%;right:0;}.chat-list-container{height:calc(100vh - 63px);overflow-x:hidden;overflow-y:auto;}.message-window{width:100%;color:#eeeeee;height:calc(100vh - 271px);position:absolute;top:75px;left:0;overflow-x:hidden;overflow-y:auto;padding:0 20px;.message-list{list-style:none;margin:0;padding:32px 0 0 0;display:flex;flex-direction:column;}}.message-composer,.confirm-card{width:100%;height:100px;position:absolute;padding:25px 30px;bottom:0;left:0;background:var(--color-gray-1);}.message-composer input[type="text"]{color:var(--color-white);font-family:var(--font-body);font-size:14px;letter-spacing:0;line-height:17px;height:54px;padding:10px 20px;background:#000000;border:none;width:100%;}.message-composer input[type="text"]::placeholder{color:var(--color-chat-gray);font-size:14px;}.message-composer button{position:absolute;font-weight:600;height:54px;width:60px;right:45px;outline:none;}.message-composer button:focus{outline:0;}.user-list{color:#cccccc;}.user-list ul{list-style:none;margin:20px 5px;padding:0;}.info-bar{display:block;}.top-chat-bar{height:60px;background-color:var(--color-chat-dark-gray);position:absolute;top:0;left:0;width:100%;}.info-bar span{font-size:14px;color:var(--color-white);position:absolute;line-height:4.5;text-align:center;width:100%;font-weight:400;}.info-bar .user-email{font-family:var(--font-body);text-transform:none;display:block;font-size:12px;}.info-bar .back-button{z-index:10;background:transparent;font-family:var(--font-body);font-size:18px;font-weight:400;cursor:pointer;border:none;left:15px;top:20px;position:absolute;width:18px;}.tab-menu-container{height:58px;width:100%;background-color:var(--color-chat-dark-gray);position:relative;}.tab-menu-container .tab-menu{width:100%;position:relative;.edit-circle-icon-wrapper{position:absolute;top:10px;right:15px;svg{color:var(--color-chat-red);}}}.tab-menu-container .tab-menu-list{width:100%;display:flex;margin:0;list-style:none;padding:0px;.close-button{position:relative;right:-30px;cursor:pointer;}}.tab-menu-container .tab-menu-item{color:var(--color-chat-gray);border:none;background:transparent;cursor:pointer;padding:15px;font-size:14px;margin:0;line-height:28px;transition:0.2s;letter-spacing:0;text-align:center;width:216px;padding-left:0px;padding-right:0px;border-bottom:2px solid var(--color-chat-gray);font-weight:600;}.tab-menu-container .tab-menu-item.tab-active{border-bottom:2px solid var(--color-chat-red);box-sizing:border-box;color:var(--color-white);font-weight:600;padding-bottom:12px;}.chat-list-view .chat-content{}.chat-list-view .chat-list{list-style:none;padding-left:2rem;}.chat-list-view .chat-list-item{font-size:18px;margin-top:15px;cursor:pointer;min-height:70px;padding-bottom:20px;border-bottom:1px solid var(--color-chat-dark-gray);width:437px;display:flex;align-items:center;position:relative;.topic-icon-wrapper{svg{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;}}.arrow-corner-icon-wrapper{position:absolute;right:15px;width:20px;height:20px;top:15px;margin:auto;svg{color:var(--color-medium-gray);}}.bfTmKg{position:relative;left:20px;margin-right:30px;}}.chat-list-view .chat-list-item{.user-bar-avatar{margin-right:30px;}.edit-icon-wrapper{position:absolute;right:15px;width:20px;height:20px;top:15px;margin:auto;svg{color:var(--color-medium-gray);}}}.topic-icon-wrapper{width:50px;height:50px;display:inline-block;border-radius:50%;position:relative;&.business-icon{background-color:var(--color-chat-purple);}&.society-icon{background-color:var(--color-chat-yellow);}&.tech-icon{background-color:var(--color-chat-blue);}}.chat-list-view .chat-list-item span.user-avatar{margin-right:20px;width:54px;height:54px;border-radius:50%;background-position:center;background-size:cover;}.chat-list-view .chat-list-item span.user-name{color:var(--color-white);font-size:14px;}.chat-list-view .chat-list-item span.topic-name{color:var(--color-white);font-size:14px;line-height:3.5;margin-left:25px;}.chat-list-view .chat-list-item span.title-company-block{color:var(--color-chat-light-gray);font-size:14px;text-transform:capitalize;}.chat-list-view .chat-list-item span.title-company-block span{display:inline-block;}.chat-list-view .chat-list-item span.title-company-block .user-company span{text-transform:lowercase;}.list-name{display:none;}.defaultAvatar{background-color:#ffad00;font-weight:bolder;user-select:none;}.confirm-card{display:flex;flex-direction:column;justify-content:space-between;font-size:14px;padding:10px 15px;}.confirm-buttons-container{display:flex;flex-direction:row;justify-content:space-around;}.confirm-button{text-align:center;width:30%;}']), Object(ce.b)(se.a.li).withConfig({
                displayName: "styles__MessageStyles",
                componentId: "sc-nktju5-2"
            })(["display:flex;align-items:flex-start;.chat-content{color:var(--color-gray-2);position:relative;display:flex;flex-direction:column;font-family:var(--font-body);font-weight:400;font-size:var(--font-size-medium);margin:1.5rem 1rem;width:100%;top:-12px;}.message-content{padding:1rem 1.5rem;padding-top:20px;padding-bottom:20px;padding-left:20px;}.reply-button{padding:0;&:hover{color:var(--color-primary-tint);}}.answer-content{background-color:var(--color-gray-4);}.answer{color:var(--color-gray-2);font-family:var(--font-body);border-top:2px solid var(--color-secondary);padding:1rem 1.5rem;}.answer-controls{display:flex;padding:0.8rem 0;}.answer-field{width:100%;padding:1rem;border:1px solid var(--color-gray-4);}.answer-composer{width:100%;}.question-content{padding:1rem 1.5rem;background:#184675;color:var(--color-white);border-radius:5px;}.avatar{color:var(--color-gray-3);font-size:var(--font-size-large);letter-spacing:0.25rem;line-height:0;font-weight:800;text-transform:uppercase;text-align:center;width:45px;height:45px;border-radius:50%;display:flex;align-items:center;justify-content:center;background-size:cover;overflow:hidden;}.user-details{position:relative;.name-tip{position:absolute;top:-30px;color:#000000;font-size:10px;background:var(--color-white);border:1px solid #e4e4e4;border-radius:8px;white-space:nowrap;padding:5px 8px;}}&.received-message{flex-direction:row;.message-content{background:#F0F0F0;border:1px solid #F0F0F0;border-radius:5px;color:var(--color-black);}.name-tip{left:-10px;}.question-content{background:#F0F0F0;border:1px solid #F0F0F0;border-radius:5px;border-bottom:0;color:var(--color-gray-3);}.answer{background:var(--color-chat-dark-gray-two-semi-darker);border:1px solid var(--color-gray-3);color:var(--color-white);border-top:0;}}&.sent-message{flex-direction:row-reverse;.name-tip{right:-5px;}.message-content{background:#184675;color:var(--color-white);border-radius:5px;}}.delete-message-button{font-size:14px;width:20px;height:20px;background:#000000;color:#ffffff;border:none;position:absolute;display:flex;justify-content:center;align-items:center;border-radius:50%;border:1px solid #ffffff;cursor:pointer;padding:0;right:-7px;top:-7px;svg{width:10px;}}.display-name{font-weight:600;}.timestamp{font-size:14px;color:#cccccc;}.chat-content{margin-right:25px;margin-left:25px;}"]));
        var bc = function (e) {
            var t, n = e.messages, a = e.setMessages, r = e.setTitleText, o = e.activeChat, c = e.userInfo,
                s = e.isModerator, l = e.showModal, m = e.handleConfirmClick, u = void 0 === m ? function () {
                } : m, h = e.handleDeleteClick, b = void 0 === h ? function () {
                } : h, f = Object(i.useState)(""), g = Object(z.a)(f, 2), x = g[0], j = g[1], v = Object(i.useState)(null),
                w = Object(z.a)(v, 2), y = w[0], O = w[1], C = Object(i.useRef)(),
                k = null === o || void 0 === o ? void 0 : o.topicId,
                L = null === o || void 0 === o ? void 0 : o.convoId;

            function N() {
                return N = Object(p.a)(d.a.mark((function e(t, n) {
                    var i, a;
                    return d.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (t.preventDefault(), _i(), x) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return");
                            case 4:
                                if (!n) {
                                    e.next = 11;
                                    break
                                }
                                return i = {
                                    topicId: n,
                                    content: x,
                                    fromName: "".concat(c.firstName, " ").concat(c.lastName),
                                    fromFirstName: c.firstName,
                                    fromLastName: c.lastName,
                                    fromUserId: c.id
                                }, e.next = 8, oa(i);
                            case 8:
                                j(""), e.next = 15;
                                break;
                            case 11:
                                return a = {
                                    content: x,
                                    fromName: "".concat(c.firstName, " ").concat(c.lastName),
                                    fromUserId: c.id,
                                    convoId: L
                                }, e.next = 14, sa(a);
                            case 14:
                                j("");
                            case 15:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                }))), N.apply(this, arguments)
            }

            Object(i.useEffect)((function () {
                if (o) {
                    if (C.current && (C.current.scrollTop = C.current.scrollHeight), null === o || void 0 === o ? void 0 : o.topicId) {
                        var e = In.a.graphql(Object(Mn.b)(Vi, {topicId: k})).subscribe({
                            next: function (e) {
                                a([].concat(Object(Ri.a)(n), [e.value.data.onCreateMessage])), C.current.scrollTop = C.current.scrollHeight
                            }
                        }), t = In.a.graphql(Object(Mn.b)(Wi, {topicId: k})).subscribe({
                            next: function (e) {
                                a(n.filter((function (t) {
                                    return t.id !== e.value.data.onDeleteMessage.id
                                })))
                            }
                        });
                        return function () {
                            e.unsubscribe(), t.unsubscribe()
                        }
                    }
                    var i = In.a.graphql(Object(Mn.b)(Gi, {convoId: L})).subscribe({
                            next: function (e) {
                                a([].concat(Object(Ri.a)(n), [e.value.data.onCreateConvoMessage])), C.current.scrollTop = C.current.scrollHeight
                            }
                        }),
                        r = In.a.graphql(Object(Mn.b)("\n  subscription OnDeleteConvoMessage($convoId: ID!) {\n    onDeleteConvoMessage(convoId: $convoId) {\n      id\n      content\n      convoId\n      fromName\n      fromUserId\n      createdAt\n      updatedAt\n      room {\n        id\n        user1Id\n        user2Id\n        createdAt\n        updatedAt\n        confirmed\n        messages {\n          nextToken\n        }\n      }\n    }\n  }\n", {convoId: L})).subscribe({
                            next: function (e) {
                                a(n.filter((function (t) {
                                    return t.id !== e.value.data.onDeleteConvoMessage.id
                                })))
                            }
                        });
                    return function () {
                        i.unsubscribe(), r.unsubscribe()
                    }
                }
            }), [k, n, a, o, c.Id, r, L]);
            var I = c.id, S = {
                hide: {opacity: 0, y: 30},
                show: {opacity: 1, y: 0, originX: .5},
                exit: {opacity: 0, x: 150, scale: .9, originX: .5},
                transition: {type: "tween", ease: "easeOut", duration: .8}
            };
            return Object(R.jsx)(uc, {
                className: "chat-view",
                initial: "hide",
                animate: "show",
                exit: "hide",
                variants: {show: {opacity: 1}, hide: {opacity: 0}},
                children: Object(R.jsxs)("div", {
                    className: "chat-content", children: [Object(R.jsx)("div", {
                        ref: C, className: "message-window", children: Object(R.jsx)(ac.a, {
                            children: Object(R.jsx)(se.a.ul, {
                                layout: !0, className: "message-list", children: Object(R.jsx)(E.a, {
                                    initial: !1, presenceAffectsLayout: !0, children: n.map((function (e) {
                                        "".concat(null !== (t = null === (n = e.fromFirstName) || void 0 === n ? void 0 : n.substr(0, 1)) && void 0 !== t ? t : "").concat(null !== (i = null === (a = e.fromLastName) || void 0 === a ? void 0 : a.substr(0, 1)) && void 0 !== i ? i : "");
                                        var t, n, i, a, r = e.fromUserId === I;
                                        return Object(R.jsxs)(hc, {
                                            layout: !0,
                                            initial: "hide",
                                            animate: "show",
                                            exit: "exit",
                                            variants: S,
                                            onMouseEnter: function () {
                                                return O(e.id)
                                            },
                                            onMouseLeave: function () {
                                                return O(null)
                                            },
                                            className: "".concat(r ? "sent-message" : "received-message"),
                                            children: [Object(R.jsxs)(se.a.div, {
                                                className: "user-details",
                                                children: [Object(R.jsx)(mc, {
                                                    className: "user-bar-avatar",
                                                    alt: "".concat(e.fromFirstName, " ").concat(e.lastName, " avatar"),
                                                    userId: e.fromUserId
                                                }), Object(R.jsx)(E.a, {
                                                    children: !r && y === e.id && Object(R.jsx)(se.a.span, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        animate: {opacity: 1, y: 0},
                                                        exit: {opacity: 0, y: 20},
                                                        className: "name-tip",
                                                        children: e.fromName
                                                    }, "".concat(e.id, "-tip"))
                                                })]
                                            }), Object(R.jsxs)(se.a.div, {
                                                className: "chat-content",
                                                children: [r ? Object(R.jsx)(cc, {
                                                    color: "#184675",
                                                    right: "-0.6rem",
                                                    left: "unset",
                                                    direction: "right"
                                                }) : Object(R.jsx)(cc, {
                                                    color: "#F0F0F0",
                                                    left: "-4px"
                                                }), Object(R.jsxs)("div", {
                                                    className: "message-content",
                                                    children: [s && e.fromUserId === I && Object(R.jsx)("div", {
                                                        className: "role-label",
                                                        children: "Moderator"
                                                    }), e.content]
                                                }), (s || e.fromUserId === I) && y === e.id && Object(R.jsx)(se.a.button, {
                                                    initial: {
                                                        opacity: 0,
                                                        scale: 0
                                                    },
                                                    animate: {opacity: 1, scale: 1},
                                                    whileHover: {scale: 1.4},
                                                    className: "delete-message-button",
                                                    onClick: function (t) {
                                                        return e.convoId ? function (e) {
                                                            return fa.apply(this, arguments)
                                                        }(e.id) : ha(e.id)
                                                    },
                                                    children: Object(R.jsx)(jt, {width: "21px", name: "close"})
                                                })]
                                            })]
                                        }, e.id)
                                    }))
                                })
                            })
                        })
                    }), l ? Object(R.jsxs)("div", {
                        className: "confirm-card",
                        children: [Object(R.jsx)("div", {children: "Do you wish to chat with ".concat(null === (t = n[0]) || void 0 === t ? void 0 : t.fromName, " or prefer to delete this chat?")}), Object(R.jsxs)("div", {
                            className: "confirm-buttons-container",
                            children: [Object(R.jsx)("button", {
                                className: "confirm-button",
                                onClick: u,
                                children: "Confirm"
                            }), Object(R.jsx)("button", {className: "confirm-button", onClick: b, children: "Delete"})]
                        })]
                    }) : Object(R.jsx)("div", {
                        className: "message-composer",
                        children: Object(R.jsxs)("form", {
                            onSubmit: function (e) {
                                return function (e, t) {
                                    return N.apply(this, arguments)
                                }(e, k)
                            },
                            className: "message-form",
                            children: [Object(R.jsx)("input", {
                                type: "text",
                                value: x,
                                placeholder: "Type something...",
                                onChange: function (e) {
                                    return j(e.target.value)
                                },
                                className: "message-input"
                            }), Object(R.jsx)("button", {type: "submit", children: "Send"})]
                        })
                    })]
                })
            }, "chat-view-container")
        };
        var fc = function (e) {
                var t = e.messages, n = e.setMessages, a = e.setTitleText, r = e.activeChat, o = e.userInfo,
                    c = e.isModerator, s = Object(i.useState)(""), l = Object(z.a)(s, 2), m = l[0], u = l[1],
                    h = Object(i.useState)(null), b = Object(z.a)(h, 2), f = b[0], g = b[1], x = Object(i.useState)(null),
                    j = Object(z.a)(x, 2), v = j[0], w = j[1], y = Object(i.useRef)(),
                    O = null === r || void 0 === r ? void 0 : r.topicId;

                function C() {
                    return (C = Object(p.a)(d.a.mark((function e() {
                        var t;
                        return d.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (m) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return t = {
                                        topicId: O,
                                        content: m,
                                        fromName: "".concat(o.firstName, " ").concat(o.lastName),
                                        fromFirstName: o.firstName,
                                        fromLastName: o.lastName,
                                        fromUserId: o.id
                                    }, e.next = 5, oa(t);
                                case 5:
                                    u("");
                                case 6:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function k() {
                    return (k = Object(p.a)(d.a.mark((function e(t) {
                        var n;
                        return d.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (m) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return n = {topicId: O, content: m, messageId: t}, e.next = 5, ma(n);
                                case 5:
                                    u("");
                                case 6:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                Object(i.useEffect)((function () {
                    if (r) {
                        y.current && (y.current.scrollTop = y.current.scrollHeight);
                        var e = In.a.graphql(Object(Mn.b)(Vi, {topicId: O})).subscribe({
                                next: function (e) {
                                    n([].concat(Object(Ri.a)(t), [e.value.data.onCreateMessage])), y.current.scrollTop = y.current.scrollHeight
                                }
                            }),
                            i = In.a.graphql(Object(Mn.b)("\n  subscription OnCreateMessageReply($topicId: ID!) {\n    onCreateMessageReply(topicId: $topicId) {\n      id\n      content\n      topicId\n      messageId\n      createdAt\n      updatedAt\n      message {\n        id\n        content\n        topicId\n        fromName\n        fromFirstName\n        fromLastName\n        fromUserId\n        createdAt\n        updatedAt\n        topic {\n          id\n          name\n          contentId\n          type\n          icon\n          createdAt\n          updatedAt\n        }\n        messageReplies {\n          nextToken\n        }\n      }\n    }\n  }\n", {topicId: O})).subscribe({
                                next: function (e) {
                                    var i = e.value.data.onCreateMessageReply,
                                        a = null === i || void 0 === i ? void 0 : i.messageId,
                                        r = t.findIndex((function (e) {
                                            return e.id === a
                                        })), o = Object(Ri.a)(t);
                                    o[r].messageReplies.items.push(i), n(o)
                                }
                            }), a = In.a.graphql(Object(Mn.b)(Wi, {topicId: O})).subscribe({
                                next: function (e) {
                                    n(t.filter((function (t) {
                                        return t.id !== e.value.data.onDeleteMessage.id
                                    })))
                                }
                            });
                        return function () {
                            e.unsubscribe(), i.unsubscribe(), a.unsubscribe()
                        }
                    }
                }), [O, t, n, r, o.Id, a]);
                var L = o.id, N = {
                    hide: {opacity: 0, y: 30},
                    show: {opacity: 1, y: 0, originX: .5},
                    exit: {opacity: 0, x: 150, scale: .9, originX: .5},
                    transition: {type: "tween", ease: "easeOut", duration: .8}
                };
                return Object(R.jsx)(uc, {
                    className: "chat-view",
                    initial: "hide",
                    animate: "show",
                    exit: "hide",
                    variants: {show: {opacity: 1}, hide: {opacity: 0}},
                    children: Object(R.jsxs)("div", {
                        className: "chat-content", children: [Object(R.jsx)("div", {
                            ref: y, className: "message-window q-and-a", children: Object(R.jsx)(ac.a, {
                                children: Object(R.jsx)(se.a.ul, {
                                    layout: !0, className: "message-list", children: Object(R.jsx)(E.a, {
                                        initial: !1, presenceAffectsLayout: !0, children: t.map((function (e) {
                                            var t, n, i, a, r = e.messageReplies.items;
                                            "".concat(null !== (t = null === (n = e.fromFirstName) || void 0 === n ? void 0 : n.substr(0, 1)) && void 0 !== t ? t : "").concat(null !== (i = null === (a = e.fromLastName) || void 0 === a ? void 0 : a.substr(0, 1)) && void 0 !== i ? i : "");
                                            return Object(R.jsxs)(hc, {
                                                layout: !0,
                                                initial: "hide",
                                                animate: "show",
                                                exit: "exit",
                                                variants: N,
                                                onMouseEnter: function () {
                                                    return g(e.id)
                                                },
                                                onMouseLeave: function () {
                                                    return g(null)
                                                },
                                                className: "".concat(e.fromUserId === L ? "sent-message" : "received-message"),
                                                children: [Object(R.jsxs)(se.a.div, {
                                                    className: "user-details",
                                                    children: [Object(R.jsx)(mc, {
                                                        className: "user-bar-avatar",
                                                        alt: "".concat(e.fromFirstName, " ").concat(e.lastName, " avatar"),
                                                        userId: e.fromUserId
                                                    }), Object(R.jsx)(E.a, {
                                                        children: e.fromUserId !== L && f === e.id && Object(R.jsx)(se.a.span, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 20
                                                            },
                                                            animate: {opacity: 1, y: 0},
                                                            exit: {opacity: 0, y: 20},
                                                            className: "name-tip",
                                                            children: e.fromName
                                                        }, "".concat(e.id, "-tip"))
                                                    })]
                                                }), Object(R.jsxs)(se.a.div, {
                                                    className: "chat-content",
                                                    children: [Object(R.jsxs)(se.a.div, {
                                                        className: "question-content",
                                                        children: [Object(R.jsxs)("div", {
                                                            className: "question",
                                                            children: [Object(R.jsx)("span", {
                                                                className: "message-label",
                                                                children: "Question: "
                                                            }), e.content]
                                                        }), Object(R.jsxs)("div", {
                                                            className: "answer-controls",
                                                            children: [c && v !== e.id && Object(R.jsx)("button", {
                                                                onClick: function () {
                                                                    return w(e.id)
                                                                }, className: "reply-button", children: "Reply"
                                                            }), c && v === e.id && Object(R.jsx)(se.a.div, {
                                                                className: "answer-composer",
                                                                children: Object(R.jsx)("form", {
                                                                    onSubmit: function (t) {
                                                                        t.preventDefault(), function (e) {
                                                                            k.apply(this, arguments)
                                                                        }(e.id)
                                                                    },
                                                                    children: Object(R.jsx)("input", {
                                                                        className: "answer-field",
                                                                        type: "text",
                                                                        value: m,
                                                                        placeholder: "Enter an answer...",
                                                                        onChange: function (e) {
                                                                            return u(e.target.value)
                                                                        }
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), Object(R.jsx)(se.a.div, {
                                                        className: "answer-content",
                                                        children: r.map((function (e) {
                                                            return Object(R.jsxs)(se.a.div, {
                                                                className: "answer",
                                                                children: [Object(R.jsx)("span", {
                                                                    className: "message-label",
                                                                    children: "Answer: "
                                                                }), e.content]
                                                            }, "reply-".concat(e.id))
                                                        }))
                                                    }), (c || e.fromUserId === L) && f === e.id && Object(R.jsx)(se.a.button, {
                                                        initial: {
                                                            opacity: 0,
                                                            scale: 0
                                                        },
                                                        animate: {opacity: 1, scale: 1},
                                                        whileHover: {scale: 1.4},
                                                        className: "delete-message-button",
                                                        onClick: function (t) {
                                                            return ha(e.id)
                                                        },
                                                        children: Object(R.jsx)(jt, {width: "21px", name: "close"})
                                                    })]
                                                }), Object(R.jsx)(se.a.div, {})]
                                            }, e.id)
                                        }))
                                    })
                                })
                            })
                        }), Object(R.jsx)("div", {
                            className: "message-composer",
                            children: Object(R.jsxs)("form", {
                                onSubmit: function (e) {
                                    e.preventDefault(), function () {
                                        C.apply(this, arguments)
                                    }()
                                },
                                children: [Object(R.jsx)("input", {
                                    type: "text",
                                    value: m,
                                    placeholder: "Ask a question...",
                                    onChange: function (e) {
                                        return u(e.target.value)
                                    }
                                }), Object(R.jsx)("button", {type: "submit", children: "Send"})]
                            })
                        })]
                    })
                }, "questions-view-container")
            }, gc = Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__SessionChatStyles",
                componentId: "sc-nwv6ng-0"
            })(['width:513px;height:100%;position:absolute;right:0;bottom:0;z-index:9;background-color:var(--color-white);@media (max-width:768px){display:none;}.chat-list-container{height:100vh;overflow-x:hidden;overflow-y:auto;}.message-window{width:100%;color:#eeeeee;height:calc(100% - 130px);position:absolute;top:56px;left:0;overflow-x:hidden;overflow-y:auto;padding:0 20px;.message-list{list-style:none;margin:0;padding:3.5rem 0 0 0;display:flex;flex-direction:column;}}.message-composer{width:100%;height:100px;position:absolute;padding:25px 30px;bottom:0;left:0;background:var(--color-white);border-top:2px solid #F0F0F0;}.message-composer .message-form{background:#EEF6F8;border-radius:4px;}.message-composer input[type="text"]{color:#C4C4C4;font-family:var(--font-body);font-size:14px;letter-spacing:0;line-height:17px;height:54px;padding:10px 20px;background:#EEF6F8;border:none;width:100%;border-radius:4px;}.message-composer input[type="text"]::placeholder{color:#C4C4C4;font-size:14px;}.message-composer button{color:#184675;position:absolute;font-weight:600;height:54px;width:60px;right:45px;}.user-list{color:#cccccc;}.user-list ul{list-style:none;margin:20px 5px;padding:0;}.info-bar{font-family:var(--font-body);font-weight:400;height:72px;position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;background:var(--color-primary);padding:20px 30px;color:#ffffff;font-size:20px;white-space:nowrap;cursor:pointer;}.chat-list-view .chat-list{list-style:none;padding-left:2rem;}.chat-list-view .chat-list-item{font-size:18px;margin-top:30px;cursor:pointer;}.list-name{padding:0.5rem;font-size:20px;font-weight:bold;border-bottom:1px solid #cccccc;}']),
            xc = ce.b.div.withConfig({
                displayName: "styles__TabStyles",
                componentId: "sc-nwv6ng-1"
            })(["height:58px;width:100%;box-shadow:0 2px 14px 0 rgba(0,0,0,0.21);position:sticky;top:0;left:0;z-index:1;.tab-menu{width:100%;height:58px;background-color:#000D1B;position:relative;}.tab-menu-list{width:100%;display:flex;align-items:center;justify-content:space-around;margin:0;padding:0;list-style:none;}.tab-menu-item{flex:1;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;width:100%;margin:0;position:relative;color:var(--color-chat-gray);background:transparent;padding:15px;font-size:14px;line-height:28px;transition:0.2s;letter-spacing:0;text-align:center;width:216px;padding-left:0px;padding-right:0px;border-bottom:2px solid var(--color-chat-gray);font-weight:600;height:60px;&:last-child{max-width:38px;padding:10px;}.tab-title{display:block;position:relative;padding:16px;text-align:center;white-space:nowrap;z-index:1;font-weight:600;}&.active{color:var(--color-white);font-weight:600;border-bottom:2px solid var(--color-white);box-sizing:border-box;color:var(--color-white);font-weight:600;padding-bottom:12px;}.active-state{position:absolute;height:56px;top:0;left:0;bottom:0;right:0;z-index:0;border-bottom:4px solid var(--color-nutanix-brand-green);}}"]);

        function jc(e) {
            var t = e.activeTab, n = (e.chatId, e.questionsId), i = e.toggleChat, a = e.isChatOpen, r = e.onTabSelect,
                o = e.tabs, c = void 0 === o ? [] : o;
            return Object(R.jsx)(ac.a, {
                initial: !1,
                presenceAffectsLayout: !0,
                children: Object(R.jsx)(xc, {
                    className: "tab-menu",
                    children: Object(R.jsx)("nav", {
                        className: "tab-menu",
                        children: Object(R.jsxs)("ul", {
                            className: "tab-menu-list", children: [c.map((function (e) {
                                var i = t === e;
                                return n || "Ask a Question" !== e ? Object(R.jsxs)("li", {
                                    onClick: function () {
                                        return r(e)
                                    },
                                    role: "button",
                                    className: "tab-menu-item ".concat(i ? "active" : ""),
                                    children: [Object(R.jsx)("span", {
                                        className: "tab-title",
                                        children: e
                                    }), Object(R.jsx)(E.a, {
                                        children: i && Object(R.jsx)(se.a.div, {
                                            initial: !1,
                                            layoutId: "active-state",
                                            className: "active-state"
                                        })
                                    })]
                                }, e) : null
                            })), Object(R.jsx)("li", {
                                onClick: i,
                                role: "button",
                                className: "tab-menu-item",
                                children: Object(R.jsx)(jt, {
                                    name: "chevron",
                                    width: "2rem",
                                    style: {
                                        color: "var(--color-white)",
                                        transform: a ? "rotate(0deg)" : "rotate(180deg)"
                                    }
                                })
                            })]
                        })
                    })
                })
            })
        }

        var vc = "Chat", wc = "Ask a Question";
        var yc = function (e) {
                var t = e.isChatOpen, n = e.chatId, a = e.questionsId, r = e.toggleChat, o = Object(i.useState)([]),
                    c = Object(z.a)(o, 2), s = c[0], l = c[1], m = Object(i.useState)(vc), u = Object(z.a)(m, 2), h = u[0],
                    b = u[1], f = fi(), g = f.data,
                    x = (f.isLoading, f.isIdle, null === g || void 0 === g || g.isAdmin, Object(i.useContext)(er)),
                    j = x.activeChat, v = x.setActiveChat;

                function w(e) {
                    return !!(j && g && t && e === h)
                }

                var y = Object(i.useMemo)((function () {
                    var e;
                    return e = {}, Object(ic.a)(e, vc, n), Object(ic.a)(e, wc, a), e
                }), [n, a]);
                return Object(i.useEffect)((function () {
                    return v({topicId: y[vc]}), function () {
                        v(null)
                    }
                }), [y, v]), Object(i.useEffect)((function () {
                    function e() {
                        return e = Object(p.a)(d.a.mark((function e(t) {
                            var n, i;
                            return d.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, aa(t);
                                    case 2:
                                        n = e.sent, (i = n.data.listMessagesByTopicId.items).reverse(), l(i);
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        }))), e.apply(this, arguments)
                    }

                    l([]), j && j.topicId && function (t) {
                        e.apply(this, arguments)
                    }(j.topicId)
                }), [j]), Object(R.jsxs)(gc, {
                    hasComposer: !0,
                    animate: {height: t ? "100%" : "56px"},
                    transition: {duration: .2, ease: "easeInOut"},
                    children: [Object(R.jsx)(se.a.div, {
                        children: Object(R.jsx)(jc, {
                            isChatOpen: t,
                            questionsId: a,
                            chatId: n,
                            toggleChat: r,
                            onTabSelect: function (e) {
                                v({topicId: y[e]}), b(e)
                            },
                            activeTab: h,
                            tabs: [vc, wc]
                        })
                    }), Object(R.jsx)(ac.a, {
                        children: Object(R.jsx)(se.a.div, {
                            className: "chat-view-content",
                            layout: !0,
                            children: Object(R.jsxs)(E.a, {
                                exitBeforeEnter: !0,
                                children: [w(vc) && Object(R.jsx)(bc, {
                                    messages: s,
                                    setMessages: l,
                                    userInfo: g,
                                    activeChat: j,
                                    isModerator: !!g.isAdmin
                                }, "chat-view"), w(wc) && Object(R.jsx)(fc, {
                                    messages: s,
                                    setMessages: l,
                                    userInfo: g,
                                    activeChat: j,
                                    isModerator: !!g.isAdmin
                                }, "q-and-a-view")]
                            })
                        })
                    })]
                })
            }, Oc = n(448), Cc = ce.b.div.withConfig({
                displayName: "styles__TimerContainerStyles",
                componentId: "sc-1cpkb93-0"
            })(["display:flex;justify-content:end;position:relative;"]), kc = ce.b.div.withConfig({
                displayName: "styles__TimerStyles",
                componentId: "sc-1cpkb93-1"
            })(["position:relative;z-index:1;width:455px;height:370px;background-color:rgba(255,255,255,0.19);border:1px solid var(--color---color-medium-gray-1);display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;margin-top:98px;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);@media (max-width:568px){width:325px;}& > span{color:var(--color-secondary);}.timer-heading{height:22px;width:147px;color:var(--color-white);font-family:var(--font-display);font-size:14px;letter-spacing:0;line-height:22px;text-align:center;}.label-wrapper{display:flex;flex-direction:row;width:100%;padding-left:30%;margin-top:15px;.timer-lables{color:var(--color-white);font-family:var(--font-display);font-size:12px;height:11px;letter-spacing:5.14px;line-height:10.9px;text-align:center;margin:unset;}.timer-wrapper{width:20%;}}"]),
            Lc = (Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__SecondsBarContainerStyles",
                componentId: "sc-1cpkb93-2"
            })(["position:absolute;bottom:0;left:0;width:100%;height:0.6rem;background:var(--color-primary-alpha);.seconds-bar{height:0.6rem;background-color:var(--color-secondary);position:absolute;left:50%;transform:translateX(-50%);top:0;}"]), Object(ce.b)(se.a.div).withConfig({
                displayName: "styles__TimerClockStyles",
                componentId: "sc-1cpkb93-3"
            })(["width:100%;color:var(--color-secondary);letter-spacing:1.3rem;line-height:1;display:flex;align-items:center;justify-content:center;color:var(--color-white);font-family:var(--font-display);font-size:54px;font-weight:300;letter-spacing:0;text-align:center;.digit-container{display:flex;align-items:center;justify-content:center;.digit{display:flex;align-items:center;justify-content:center;}}"]));
        var Nc = function (e) {
            var t = e.date, n = e.handleSessionStart, a = Object(i.useState)(null), r = Object(z.a)(a, 2), o = r[0],
                c = r[1], s = Object(i.useState)(null), l = Object(z.a)(s, 2), d = l[0], p = l[1],
                m = Object(i.useState)(null), u = Object(z.a)(m, 2), h = u[0], b = u[1];
            o <= 0 && null != o && d <= 0 && null != d && h <= 0 && null != h && n(), Object(i.useEffect)((function () {
                var e = setInterval((function () {
                    var e = new Date, i = Object(Oc.a)({start: e, end: t});
                    e.getTime() > t && n(), c(i.seconds), b(i.hours), p(i.minutes)
                }), 1e3);
                return function () {
                    clearInterval(e)
                }
            }), [t]);
            var f = {initial: {opacity: 0, y: -20}, enter: {opacity: 1, y: 0}, exit: {opacity: 0, y: 20}};
            return Object(R.jsx)(Cc, {
                children: Object(R.jsxs)(kc, {
                    children: [Object(R.jsx)(jt, {
                        name: "lock",
                        width: "7rem"
                    }), Object(R.jsx)("h3", {
                        className: "timer-heading",
                        children: "Your session starts in"
                    }), Object(R.jsx)(ac.a, {
                        children: Object(R.jsxs)(Lc, {
                            layout: !0,
                            children: [Object(R.jsx)(se.a.div, {
                                layout: !0,
                                className: "digit-container",
                                children: Object(R.jsx)(E.a, {
                                    children: "number" === typeof h && Object(R.jsx)(se.a.span, {
                                        layout: !0,
                                        className: "digit",
                                        variants: f,
                                        initial: "initial",
                                        animate: "enter",
                                        exit: "exit",
                                        children: h > 9 ? "".concat(h) : "0".concat(h)
                                    }, "".concat(h, "-hours"))
                                })
                            }, "hours-container"), Object(R.jsx)(se.a.div, {
                                layout: !0,
                                children: ":"
                            }), Object(R.jsx)(se.a.div, {
                                layout: !0,
                                className: "digit-container",
                                children: Object(R.jsx)(E.a, {
                                    exitBeforeEnter: !0,
                                    children: "number" === typeof d && Object(R.jsx)(se.a.span, {
                                        layout: !0,
                                        className: "digit",
                                        variants: f,
                                        initial: "initial",
                                        animate: "enter",
                                        exit: "exit",
                                        children: d > 9 ? "".concat(d) : "0".concat(d)
                                    }, "".concat(d, "-minutes"))
                                })
                            }, "minutes-container"), Object(R.jsx)(se.a.div, {
                                layout: !0,
                                children: ":"
                            }), Object(R.jsx)(se.a.div, {
                                layout: !0,
                                className: "digit-container",
                                children: Object(R.jsx)(E.a, {
                                    exitBeforeEnter: !0,
                                    children: "number" === typeof o && Object(R.jsx)(se.a.span, {
                                        layout: !0,
                                        className: "digit",
                                        variants: f,
                                        initial: "initial",
                                        animate: "enter",
                                        exit: "exit",
                                        children: o > 9 ? "".concat(o) : "0".concat(o)
                                    }, "".concat(o, "-seconds"))
                                })
                            }, "seconds-container")]
                        })
                    }), Object(R.jsxs)("div", {
                        className: "label-wrapper",
                        children: [Object(R.jsx)("div", {
                            className: "timer-wrapper",
                            children: Object(R.jsx)("h3", {className: "timer-lables", children: "HRS"})
                        }), Object(R.jsx)("div", {
                            className: "timer-wrapper",
                            children: Object(R.jsx)("h3", {className: "timer-lables", children: "MINS"})
                        }), Object(R.jsx)("div", {
                            className: "timer-wrapper",
                            children: Object(R.jsx)("h3", {className: "timer-lables", children: "SECS"})
                        })]
                    })]
                })
            })
        };
        var Ic = ce.b.div.withConfig({
            displayName: "styles__SessionTagStyles",
            componentId: "sc-1v13lxk-0"
        })(["background:", ";color:", ";border:", ";font-size:1.1rem;font-weight:600;letter-spacing:0;line-height:17px;border-radius:14px;padding:2px 20px;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;@media (max-width:538px){padding-left:10px;padding-right:10px;}"], (function (e) {
            return e.color.background
        }), (function (e) {
            return e.color.text
        }), (function (e) {
            return e.color.border
        })), Sc = {
            default: {color: {background: "#1d1d1d", text: "var(--color-white)", border: "1px solid #616161"}},
            society: {color: {background: "var(--color-orange)", text: "var(--color-white)", border: "none"}},
            technology: {color: {background: "var(--color-blue)", text: "var(--color-white)", border: "none"}},
            business: {color: {background: "var(--color-purple)", text: "var(--color-white)", border: "none"}},
            keynote: {color: {background: "var(--color-red)", text: "var(--color-white)", border: "none"}},
            masterclass: {color: {background: "var(--color-red)", text: "var(--color-white)", border: "none"}},
            strategy: {color: {background: "var(--color-red)", text: "var(--color-white)", border: "none"}}
        };

        function zc(e) {
            var t = e.text, n = e.type, i = e.className, a = Sc[n.toLowerCase()] ? n.toLowerCase() : "default",
                r = de()(i), o = Sc[a].color;
            return Object(R.jsx)(Ic, {className: r, color: o, children: t})
        }

        var Ec = Object(ce.b)(se.a.div).withConfig({
            displayName: "SessionDetailsStyles",
            componentId: "sc-1ktxiit-0"
        })(["display:flex;width:580px;background-color:rgba(255,255,255,0.1);@media (max-width:768px){display:none;}.card{position:relative;display:flex;flex-direction:column;min-width:0;width:100%;word-wrap:break-word;background-clip:border-box;border-radius:.25rem;border:0px;img{padding:20px;}}.card-body{flex:1 1 auto;padding:0 30px 15px 30px;.card-title{display:inline-block;color:var(--color-white);font-family:var(--font-dispaly);width:417px;font-size:24px;letter-spacing:0;line-height:32px;margin-top:unset;margin-bottom:unset;}.card-text{height:16.2px;color:var(--color-white);font-family:var(--font-dispaly);font-weight:400;font-size:14px;letter-spacing:0;line-height:18px;}.card-description{width:371px;color:var(--color-white);font-family:var(--font-dispaly);font-size:14px;letter-spacing:0;line-height:22px;}}.card-chip-container{display:flex;flex-direction:row;padding:10px;padding-left:30px;padding-right:20px;padding-bottom:0px;.icon-wrapper{border:2px solid var(--color-black);position:relative;right:-30%;top:-15px;width:45px;height:45px;display:flex;align-items:center;justify-content:center;}}"]);
        var Mc = function (e) {
            var t, n = e.sessionDetails, a = Object(i.useState)(null), r = Object(z.a)(a, 2), o = r[0], c = r[1],
                s = Object(i.useState)(null), l = Object(z.a)(s, 2), d = (l[0], l[1]),
                p = (t = n.eventTime) ? Object(mi.a)(Object(pi.a)(t), "hh:mmaaa") : null;
            Object(i.useEffect)((function () {
                c(n.trackTypeTitle), d(n.eventTypeTitle)
            }), []);
            var m = n.eventTitle ? Rr.a.sanitize(n.eventTitle) : "",
                u = n.eventDescription ? Rr.a.sanitize(n.eventDescription) : "";
            return Object(R.jsx)(Ec, {
                children: Object(R.jsxs)("div", {
                    className: "card",
                    children: [Object(R.jsx)("img", {
                        src: n.eventImage,
                        className: "card-img-top",
                        alt: "..."
                    }), Object(R.jsxs)("div", {
                        className: "card-body",
                        children: [Object(R.jsxs)("p", {
                            className: "card-text",
                            children: [p, " "]
                        }), Object(R.jsx)("h5", {className: "card-title", dangerouslySetInnerHTML: {__html: m}})]
                    }), Object(R.jsx)("div", {
                        className: "card-chip-container",
                        children: o && Object(R.jsx)(zc, {type: o.toLowerCase(), text: o}, o)
                    }), Object(R.jsxs)("div", {
                        className: "card-body",
                        children: [Object(R.jsx)("p", {
                            className: "card-description",
                            dangerouslySetInnerHTML: {__html: u}
                        }), Object(R.jsxs)("p", {
                            className: "card-description",
                            children: ["Speakers:", n.speakers.map((function (e, t) {
                                return " - ".concat(e.fullName)
                            }))]
                        })]
                    })]
                })
            })
        }, _c = Object(ce.b)(se.a.div).withConfig({
            displayName: "styles__SessionTimerStyles",
            componentId: "sc-1iwv4i-0"
        })(["background-color:var(--color-black);width:100%;height:100%;min-height:-webkit-fill-available;padding-top:20px;z-index:10999;.poll-view-content{display:flex;flex-direction:row;padding-left:20%;@media (max-width:568px){padding-left:7%;}}.cta-link{margin-left:40px;margin-top:20px;}a{color:var(--color-white);}a:hover{color:var(--color-brand-orange);}"]);
        var Tc = function (e) {
            var t = e.event, n = e.handleSessionStart, a = Object(h.i)().lang, r = Object(h.g)();
            Object(i.useEffect)((function () {
                var e = x(t);
                !0 === t.isLive && r.push("/".concat(a, "/media?event=").concat(e))
            }), []);
            var o = t.eventTime;
            return Object(R.jsxs)(_c, {
                children: [Object(R.jsx)(L.b, {
                    className: "cta-link",
                    to: "/",
                    children: Object(R.jsx)(jt, {
                        name: "arrow",
                        className: "cta-icon",
                        style: {transform: "rotate(180deg)"},
                        width: "40px"
                    })
                }), Object(R.jsx)(ac.a, {
                    children: Object(R.jsx)(se.a.div, {
                        className: "poll-view-content",
                        layout: !0,
                        children: Object(R.jsxs)(E.a, {
                            exitBeforeEnter: !0,
                            children: [Object(R.jsx)(Nc, {
                                date: o,
                                handleSessionStart: n
                            }), Object(R.jsx)(Mc, {sessionDetails: t})]
                        })
                    })
                })]
            })
        };
        var Rc = function (e) {
            var t = e.children, n = e.closeModal, i = void 0 === n ? function () {
            } : n;
            return Object(R.jsx)(Za, {
                initial: {opacity: 0},
                animate: {opacity: 1},
                exit: {opacity: 0},
                transition: {duration: .2},
                children: Object(R.jsxs)("div", {
                    className: "notification-modal-content",
                    children: [Object(R.jsx)(qa, {
                        whileHover: {scale: 1.2},
                        onClick: i,
                        children: Object(R.jsx)(jt, {name: "close"})
                    }), t]
                })
            }, "notification-modal")
        }, Ac = ce.b.div.withConfig({
            displayName: "styles__StarStyles",
            componentId: "sc-e1ldi9-0"
        })([".svg-box-width{width:5em;}.svg-box-height{height:5em;}.flex{display:flex;}.cursor-pointer{cursor:pointer;}"]);

        function Pc(e) {
            var t = e.fill, n = void 0 === t ? "grey" : t;
            return Object(R.jsx)("svg", {
                className: "svg-box-width svg-box-height",
                fill: n,
                viewBox: "0 0 25 25",
                xmlns: "http://www.w3.org/2000/svg",
                children: Object(R.jsx)("path", {
                    strokeLinejoin: "round",
                    strokeWidth: "1",
                    d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                })
            })
        }

        function Dc(e) {
            var t = e.index, n = e.rating, a = e.hoverRating, r = e.onMouseEnter, o = e.onMouseLeave,
                c = e.onSaveRating, s = e.poll, l = Object(i.useMemo)((function () {
                    return a >= t || !a && n >= t ? "red" : "grey"
                }), [n, a, t]);
            return Object(R.jsx)(Ac, {
                children: Object(R.jsx)("div", {
                    className: "cursor-pointer",
                    onMouseEnter: function () {
                        return r(t, s)
                    },
                    onMouseLeave: function () {
                        return o(s)
                    },
                    onClick: function () {
                        return c(t, s)
                    },
                    children: Object(R.jsx)(Pc, {fill: l})
                })
            })
        }

        function Zc(e, t, n, i) {
            return qc.apply(this, arguments)
        }

        function qc() {
            return (qc = Object(p.a)(d.a.mark((function e(t, n, i, a) {
                var r;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, In.a.graphql(Object(Mn.b)(ti, {filter: {and: [{contentId: {contains: t}}, {option: {contains: n}}]}}));
                        case 2:
                            if (!((r = e.sent).data.listPolls.items.length > 0)) {
                                e.next = 8;
                                break
                            }
                            return e.next = 6, In.a.graphql(Object(Mn.b)(_n, {id: r.data.listPolls.items[0].id}));
                        case 6:
                            e.next = 10;
                            break;
                        case 8:
                            return e.next = 10, In.a.graphql(Object(Mn.b)($n, {
                                input: {
                                    optionCount: 1,
                                    option: n,
                                    eventContentId: t,
                                    question: a,
                                    contentId: i
                                }
                            }));
                        case 10:
                            return e.abrupt("return", r);
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function Uc() {
            return Hc.apply(this, arguments)
        }

        function Hc() {
            return (Hc = Object(p.a)(d.a.mark((function e() {
                var t;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, In.a.graphql(Object(Mn.b)(ti));
                        case 2:
                            return t = e.sent, console.log(t), e.abrupt("return", t);
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var Bc = ce.b.div.withConfig({
                displayName: "FullScreenPollStyles__PageLayoutStyles",
                componentId: "sc-17bsg2m-0"
            })(['background-image:unset;background-repeat:unset;background-size:unset;width:100%;position:relative;margin:0;padding:0;display:flex;height:100%;flex-direction:column;overflow-y:scroll;background-color:var(--color-brand-dark-blue);-ms-overflow-style:unset;&::-webkit-scrollbar{width:unset !important;}.full-height{height:100%;flex-basis:100%;}&::before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background:unset;z-index:-10;}']),
            Fc = Object(ce.b)(Nt).withConfig({
                displayName: "FullScreenPollStyles__PollButton",
                componentId: "sc-17bsg2m-1"
            })(["font-size:var(--font-size-large);max-height:50px;min-width:165px;position:relative;font-weight:600;background:transparent;color:var(--color-primary);padding:1.4rem 1.5rem;margin:0;cursor:pointer;box-shadow:0 12px 17px 0 rgb(0 0 0 / 9%);-webkit-transition:0.3s;transition:0.3s;&[disabled]{color:var(--color-gray-3);background:transparent;border-color:var(--color-gray-3);cursor:not-allowed;box-shadow:none;}&:hover{color:var(--color-primary);background-color:transparent;box-shadow:none;}"]),
            $c = ce.b.div.withConfig({
                displayName: "FullScreenPollStyles__FullScreenPollContainerStyles",
                componentId: "sc-17bsg2m-2"
            })(["background-color:var(--color-black);height:100%;width:100%;.poll-container{background-color:var(--color-dangerbeige);border-radius:6px;height:430px;margin:0 auto;margin-top:200px;width:885px;@media (max-width:768px){width:100%;}}.poll-questions-wrapper{display:flex;flex-direction:column;margin:0 auto;@media (max-width:768px){width:100%;}.poll-question-container{display:flex;border-bottom:1px solid rgba(255,255,255,0.24);.poll-question{display:flex;flex:1;height:92px;margin-bottom:30px;h3{color:var(--color-white);width:600px;font-family:var(--font-display);font-size:24px;font-weight:bold;letter-spacing:0;}}.poll-answers{display:flex;padding-top:28px;}}.poll-submit{display:flex;flex:1;margin:0 auto;margin-top:25px;}}"]);
        ce.b.div.withConfig({
            displayName: "FullScreenPollStyles__PollOptionStyles",
            componentId: "sc-17bsg2m-3"
        })(["color:var(--color-black);cursor:pointer;display:flex;font-size:var(--font-size-large);font-family:var(--font-body);text-align:center;label{color:var(--color-black);cursor:pointer;display:flex;justify-content:start;align-items:center;text-align:left;padding:10px 18px;font-size:14px;}input{opacity:0;top:-4px;position:relative;left:30px;width:30px;height:30px;}.label-text{line-height:1.4;margin:0 0 0 1rem;padding:0;padding-top:5px;}.check-container{width:30px;height:30px;border:2px solid var(--color-white);border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:var(--color-brand-red);}&.checked{font-weight:bold;.check-container{border:none;}}"]), Object(ce.b)(se.a.div).withConfig({
            displayName: "FullScreenPollStyles__ModalContainer",
            componentId: "sc-17bsg2m-4"
        })(["position:fixed;display:flex;align-items:flex-start;justify-content:center;text-align:center;width:100vw;height:100vh;top:0;left:0;z-index:1000;background:var(--color-notification-modal-container);.notification-modal-content{position:fixed;width:1028px;border:1px solid var(--color-medium-gray);height:468px;flex-direction:column;align-items:center;margin-top:12rem;padding:3rem;transform:translateY(20%);background:var(--color-white);box-shadow:0 22px 34px 0 var(-color-notification-shadow);}.modal-header{font-family:var(--font-display);font-size:28px;margin:0;font-weight:300;}.modal-message{font-size:18px;font-weight:bold;margin:4rem 0;}.button-group{display:flex;justify-content:center;button{width:175px;font-size:14px;margin:0 1.4rem;}}"]), Object(ce.b)(se.a.button).withConfig({
            displayName: "FullScreenPollStyles__ModalClose",
            componentId: "sc-17bsg2m-5"
        })(["color:var(--color-white);background:transparent;border:none;width:28px;height:17px;border:none;position:absolute;top:-24px;right:-32px;padding-top:0;cursor:pointer;z-index:7;svg{width:15px;}"]);

        function Vc(e, t, n, i, a) {
            return Wc.apply(this, arguments)
        }

        function Wc() {
            return (Wc = Object(p.a)(d.a.mark((function e(t, n, i, a, r) {
                var o;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            o = {
                                firstName: t.firstName,
                                lastName: t.lastName,
                                email: t.email,
                                jobTitle: t.professionalLevel,
                                company: t.company,
                                eventType: r,
                                userProfileId: t.id,
                                question: n,
                                answer: i,
                                sessionId: a.id,
                                sessionTitle: a.eventTitle
                            }, In.a.graphql(Object(Mn.b)(Hn, {input: o}));
                        case 2:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function Gc(e, t, n, i) {
            return Xc.apply(this, arguments)
        }

        function Xc() {
            return (Xc = Object(p.a)(d.a.mark((function e(t, n, i, a) {
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            Vc(t, n, i, a, "SUBMITTED");
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function Qc() {
            return Kc.apply(this, arguments)
        }

        function Kc() {
            return (Kc = Object(p.a)(d.a.mark((function e() {
                var t;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(ni));
                        case 3:
                            return t = e.sent, e.abrupt("return", t.data.listUserRegistrationRaffles.items);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function Yc(e) {
            return Jc.apply(this, arguments)
        }

        function Jc() {
            return (Jc = Object(p.a)(d.a.mark((function e(t) {
                var n;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, In.a.graphql(Object(Mn.b)(Vn, {input: t}));
                        case 3:
                            return n = e.sent, e.abrupt("return", n);
                        case 7:
                            throw e.prev = 7, e.t0 = e.catch(0), e.t0;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        var es = ce.b.div.withConfig({
            displayName: "FullScreenPoll__EndScreenHeadingStyles",
            componentId: "sc-16uuihb-0"
        })(["background-color:rgba(5,28,52,.5);height:150px;left:0;object-fit:cover;position:absolute;top:0;width:100%;.header-container{display:flex;flex-direction:row;}.poll-close-btn{cursor:pointer;display:flex;height:15px;justify-content:flex-start;margin:15px;width:15px;}.end-session-title{font-style:normal;font-weight:bold;font-size:38px;line-height:42px;text-align:center;color:var(--color-white);}.end-session-sub-title{font-style:normal;font-weight:normal;font-size:18px;line-height:26px;text-align:center;color:var(--color-white);}.end-poll-header-text{color:var(--color-white);font-family:var(--font-display);font-size:18px;font-weight:bold;height:45px;letter-spacing:0;padding-top:15px;width:100%;text-align:center;}"]);
        var ts = function (e) {
                var t = e.eventPoll, n = e.speakerPoll, a = e.speakerPollOne, r = e.eventPollOne, o = e.eventPollTwo,
                    c = e.eventData, s = Object(i.useState)(0), l = Object(z.a)(s, 2), m = l[0], u = l[1],
                    b = Object(i.useState)(0), f = Object(z.a)(b, 2), g = f[0], x = f[1], j = Object(i.useState)(0),
                    v = Object(z.a)(j, 2), w = v[0], y = v[1], O = Object(i.useState)(0), C = Object(z.a)(O, 2), k = C[0],
                    L = C[1], N = Object(i.useState)(0), I = Object(z.a)(N, 2), S = I[0], M = I[1],
                    _ = Object(i.useState)(!1), T = Object(z.a)(_, 2), A = T[0], P = T[1], D = Object(i.useState)(!1),
                    Z = Object(z.a)(D, 2), q = Z[0], U = Z[1], H = Object(i.useState)(!1), B = Object(z.a)(H, 2), F = B[0],
                    $ = B[1], V = Object(i.useState)(""), W = Object(z.a)(V, 2), G = W[0], X = W[1],
                    Q = Object(i.useState)(""), K = Object(z.a)(Q, 2), Y = K[0], J = K[1], ee = Object(h.g)(),
                    te = fi().data, ne = Object(i.useRef)(), ie = To(), ae = ie.bigBoom, re = ie.bigConfetti,
                    oe = function (e, t) {
                        "EVENT" === t.type && u(e), "SPEAKER" === t.type && x(e), "SPEAKERONE" === t.type && y(e), "EVENTONE" === t.type && L(0), "EVENTTWO" === t.type && M(0)
                    }, ce = function (e) {
                        "EVENT" === e.type && u(0), "SPEAKER" === e.type && x(0), "SPEAKERONE" === e.type && y(0), "EVENTONE" === e.type && L(0), "EVENTTWO" === e.type && M(0)
                    }, se = function (e, i) {
                        i.rating = e, 0 !== t.rating && 0 !== n.rating && 0 !== a.rating && 0 !== r.rating && 0 !== o.rating && P(!0)
                    };

                function le() {
                    return le = Object(p.a)(d.a.mark((function e() {
                        var i;
                        return d.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    Zc(t.pollId, t.rating, t.eventId, t.pollQuestion), Zc(n.pollId, n.rating, n.eventId, n.pollQuestion), Zc(a.pollId, a.rating, a.eventId, a.pollQuestion), Zc(r.pollId, r.rating, r.eventId, r.pollQuestion), Zc(o.pollId, o.rating, o.eventId, o.pollQuestion), $(!0), re.appendTo(ne.current), ae(), Mi(), i = setTimeout((function () {
                                        U(!0), clearTimeout(i), ee.push("/go/storage-acceleration/en")
                                    }), 1e4), Gc(te, t.pollQuestion, t.rating, c), Gc(te, n.pollQuestion, n.rating, c), Gc(te, a.pollQuestion, a.rating, c), Gc(te, r.pollQuestion, r.rating, c), Gc(te, o.pollQuestion, o.rating, c);
                                case 15:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    }))), le.apply(this, arguments)
                }

                Object(i.useEffect)((function () {
                    function e() {
                        return e = Object(p.a)(d.a.mark((function e() {
                            var t, n, i, a;
                            return d.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Qc();
                                    case 2:
                                        t = e.sent, n = t.filter((function (e) {
                                            return !0 === e.winner
                                        })), i = n[0].firstName, a = n[0].lastName, J("".concat(i, " ").concat(a));
                                    case 7:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        }))), e.apply(this, arguments)
                    }

                    !function () {
                        e.apply(this, arguments)
                    }();
                    var t = 15, n = setInterval((function () {
                        0 === t ? (clearTimeout(n), re.appendTo(ne.current), ae(), $(!0)) : (X(t), t--)
                    }), 1e3)
                }), []);
                var de = function () {
                    ee.push("/go/storage-acceleration/en")
                }, pe = function () {
                    return Object(R.jsx)(es, {
                        children: Object(R.jsxs)("div", {
                            className: "header-container",
                            children: [Object(R.jsx)("div", {
                                className: "poll-close-btn",
                                onClick: de,
                                children: Object(R.jsx)(jt, {
                                    name: "close",
                                    style: {cursor: "pointer"},
                                    color: "var(--color-white)"
                                })
                            }), Object(R.jsxs)("div", {
                                className: "end-poll-header-text",
                                children: [Object(R.jsx)("h3", {
                                    className: "end-session-title",
                                    children: "Thanks for attending our launch event."
                                }), Object(R.jsxs)("div", {
                                    className: "end-session-sub-title",
                                    children: ["We\u2019re about to announce the VIP INDYCAR winner in ", G, " seconds. But first, let us know how you feel."]
                                })]
                            })]
                        })
                    })
                };
                return Object(R.jsx)(R.Fragment, {
                    children: Object(R.jsx)(Bc, {
                        children: Object(R.jsxs)($c, {
                            variants: {
                                enter: {opacity: 0},
                                center: {opacity: 1, transition: {type: "tween", duration: .2, ease: "easeOut"}},
                                exit: {opacity: 0}
                            }, children: [!F && Object(R.jsx)(pe, {}), !q && !F && Object(R.jsx)("div", {
                                className: "poll-container", children: Object(R.jsxs)("div", {
                                    className: "poll-questions-wrapper",
                                    children: [Object(R.jsxs)("div", {
                                        className: "poll-question-container",
                                        children: [Object(R.jsx)("div", {
                                            className: "poll-question",
                                            children: Object(R.jsx)("h3", {children: t.pollQuestion})
                                        }), Object(R.jsx)("div", {
                                            className: "poll-answers",
                                            children: [1, 2, 3, 4, 5].map((function (e) {
                                                return Object(R.jsx)(Dc, {
                                                    index: e,
                                                    rating: t.rating,
                                                    hoverRating: m,
                                                    onMouseEnter: oe,
                                                    onMouseLeave: ce,
                                                    onSaveRating: se,
                                                    poll: t
                                                }, e)
                                            }))
                                        })]
                                    }), Object(R.jsxs)("div", {
                                        className: "poll-question-container",
                                        children: [Object(R.jsx)("div", {
                                            className: "poll-question",
                                            children: Object(R.jsx)("h3", {children: n.pollQuestion})
                                        }), Object(R.jsx)("div", {
                                            className: "poll-answers",
                                            children: [1, 2, 3, 4, 5].map((function (e) {
                                                return Object(R.jsx)(Dc, {
                                                    index: e,
                                                    rating: n.rating,
                                                    hoverRating: g,
                                                    onMouseEnter: oe,
                                                    onMouseLeave: ce,
                                                    onSaveRating: se,
                                                    poll: n
                                                }, e)
                                            }))
                                        })]
                                    }), Object(R.jsxs)("div", {
                                        className: "poll-question-container",
                                        children: [Object(R.jsx)("div", {
                                            className: "poll-question",
                                            children: Object(R.jsx)("h3", {children: a.pollQuestion})
                                        }), Object(R.jsx)("div", {
                                            className: "poll-answers",
                                            children: [1, 2, 3, 4, 5].map((function (e) {
                                                return Object(R.jsx)(Dc, {
                                                    index: e,
                                                    rating: a.rating,
                                                    hoverRating: w,
                                                    onMouseEnter: oe,
                                                    onMouseLeave: ce,
                                                    onSaveRating: se,
                                                    poll: a
                                                }, e)
                                            }))
                                        })]
                                    }), Object(R.jsxs)("div", {
                                        className: "poll-question-container",
                                        children: [Object(R.jsx)("div", {
                                            className: "poll-question",
                                            children: Object(R.jsx)("h3", {children: r.pollQuestion})
                                        }), Object(R.jsx)("div", {
                                            className: "poll-answers",
                                            children: [1, 2, 3, 4, 5].map((function (e) {
                                                return Object(R.jsx)(Dc, {
                                                    index: e,
                                                    rating: r.rating,
                                                    hoverRating: k,
                                                    onMouseEnter: oe,
                                                    onMouseLeave: ce,
                                                    onSaveRating: se,
                                                    poll: r
                                                }, e)
                                            }))
                                        })]
                                    }), Object(R.jsxs)("div", {
                                        className: "poll-question-container",
                                        children: [Object(R.jsx)("div", {
                                            className: "poll-question",
                                            children: Object(R.jsx)("h3", {children: o.pollQuestion})
                                        }), Object(R.jsx)("div", {
                                            className: "poll-answers",
                                            children: [1, 2, 3, 4, 5].map((function (e) {
                                                return Object(R.jsx)(Dc, {
                                                    index: e,
                                                    rating: o.rating,
                                                    hoverRating: S,
                                                    onMouseEnter: oe,
                                                    onMouseLeave: ce,
                                                    onSaveRating: se,
                                                    poll: o
                                                }, e)
                                            }))
                                        })]
                                    }), Object(R.jsx)("div", {
                                        className: "poll-submit",
                                        children: Object(R.jsx)(Fc, {
                                            isDisabled: !A, type: "submit", onClick: function (e) {
                                                return function () {
                                                    return le.apply(this, arguments)
                                                }()
                                            }, children: "Submit"
                                        })
                                    })]
                                })
                            }), Object(R.jsx)(E.a, {
                                children: F && Object(R.jsxs)(Rc, {
                                    closeModal: function () {
                                        ee.push("/go/storage-acceleration/en")
                                    },
                                    children: [Object(R.jsxs)("div", {
                                        className: "modal-title-wrapper",
                                        children: [Object(R.jsx)("div", {
                                            className: "modal-sub-title",
                                            children: "Congratulations!"
                                        }), Object(R.jsx)("div", {className: "modal-title", children: Y})]
                                    }), Object(R.jsx)("div", {
                                        className: "modal-thank-you-message",
                                        children: "Our winner of the 2022 INDYCAR VIP tickets. Special thanks to our first 100 registrants who will be receiving an autographed Team Penske & Hitachi 2021 diecast car. Thank you to everyone who participated and joined us today!"
                                    }), Object(R.jsx)("div", {
                                        className: "modal-prize-message",
                                        children: "(all winners will be contacted via email)"
                                    })]
                                })
                            }), Object(R.jsx)("div", {ref: ne, className: "confetti-container"})]
                        })
                    })
                })
            }, ns = (ce.b.div.withConfig({
                displayName: "MediaStyles__PageLayoutStyles",
                componentId: "sc-p5uh1a-0"
            })(["position:relative;margin:0;padding:0;display:flex;height:100%;flex-direction:column;overflow:hidden !important;"]), ce.b.div.withConfig({
                displayName: "MediaStyles__MediaChatPollContainer",
                componentId: "sc-p5uh1a-1"
            })(["height:100%;display:flex;z-index:9999;@media (max-width:768px){z-index:unset;display:none;}.chat-container{background:transparent;height:100%;width:370px;position:absolute;top:0;right:0;z-index:999;@media (max-width:568px){z-index:unset;}}.poll-container{background:transparent;width:100%;height:250px;position:absolute;bottom:0;left:0;z-index:999;@media (max-width:568px){z-index:unset;}}@media (max-width:1150px){width:100%;}"])),
            is = ce.b.div.withConfig({
                displayName: "MediaStyles__MediaVideoContainer",
                componentId: "sc-p5uh1a-2"
            })(["width:calc(100% - 370px);height:100%;display:flex;.header-container{z-index:999;position:absolute;top:20px;left:20px;}@media (max-width:1150px){width:100%;}"]);

        function as(e, t, n) {
            return rs.apply(this, arguments)
        }

        function rs() {
            return (rs = Object(p.a)(d.a.mark((function e(t, n, i) {
                var a;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            a = {
                                firstName: t.firstName,
                                lastName: t.lastName,
                                email: t.email,
                                jobTitle: t.professionalLevel,
                                company: t.company,
                                eventType: i,
                                userProfileId: t.id,
                                sessionId: n.contentId ? n.contentId : n.id,
                                sessionTitle: n.eventTitle
                            }, In.a.graphql(Object(Mn.b)(qn, {input: a}));
                        case 2:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function os() {
            return (os = Object(p.a)(d.a.mark((function e(t, n) {
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            as(t, n, "JOINED");
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function cs() {
            return (cs = Object(p.a)(d.a.mark((function e(t, n) {
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            as(t, n, "COMPLETED");
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var ss = function () {
                var e, t = Object(i.useState)(!1), n = Object(z.a)(t, 2), a = n[0], r = n[1], o = Object(i.useState)(!1),
                    c = Object(z.a)(o, 2), s = c[0], l = c[1], u = Object(i.useState)(null), b = Object(z.a)(u, 2),
                    f = b[0], g = b[1], x = Object(i.useState)(null), j = Object(z.a)(x, 2), v = j[0], w = j[1],
                    y = Object(i.useState)(), O = Object(z.a)(y, 2), C = O[0], k = O[1], L = Object(h.g)(),
                    N = new URLSearchParams(Object(h.h)().search).get("event"), I = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return Object(_.a)(["events", e + t], Object(p.a)(d.a.mark((function n() {
                            var i, a, r;
                            return d.a.wrap((function (n) {
                                for (; ;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, In.a.get("".concat(Sn), "/content/events?lang=".concat(e));
                                    case 2:
                                        return a = n.sent, r = null !== (i = a.events.find((function (e) {
                                            return uo(e.id) === t
                                        }))) && void 0 !== i ? i : null, n.abrupt("return", Object(m.a)(Object(m.a)({}, r), {}, {endScreen: a.endScreen}));
                                    case 5:
                                    case"end":
                                        return n.stop()
                                }
                            }), n)
                        }))), {enabled: !!t})
                    }(Object(h.i)().lang, N), S = I.data, E = I.isLoading, M = fi().data, T = Object(i.useRef)(), A = To(),
                    P = A.bigBoom, D = A.bigConfetti;
                Object(i.useEffect)((function () {
                    function e() {
                        return (e = Object(p.a)(d.a.mark((function e() {
                            return d.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ga(S.id);
                                    case 2:
                                        e.sent.data.listTopicsByContentId.items.forEach((function (e) {
                                            "chat" === e.type && S.chatEnabled && (g(e.id), l(!0)), "q&a" === e.type && S.qaEnabled && w(e.id)
                                        }));
                                    case 4:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    S && M && (k([{
                        pollType: "ENDSCREENPOLL",
                        pollQuestion: "How satisfied were you with the overall event?",
                        pollId: S.id,
                        eventId: S.id,
                        options: ["1", "2", "3", "4", "5"],
                        backgroundImage: "/static/images/pure-accelerate/placeholders/placeholder-bg.jpg",
                        rating: 0,
                        type: "EVENT"
                    }, {
                        pollType: "ENDSCREENPOLL",
                        pollQuestion: "How easy-to-navigate was the event platform?",
                        pollId: S.id + "-speaker",
                        eventId: S.id + "-speaker",
                        options: ["1", "2", "3", "4", "5"],
                        backgroundImage: "/static/images/pure-accelerate/placeholders/placeholder-bg.jpg",
                        rating: 0,
                        type: "SPEAKER"
                    }, {
                        pollType: "ENDSCREENPOLL",
                        pollQuestion: "Were you satisfied with the quality of content?",
                        pollId: S.id + "-speaker",
                        eventId: S.id + "-speaker",
                        options: ["1", "2", "3", "4", "5"],
                        backgroundImage: "/static/images/pure-accelerate/placeholders/placeholder-bg.jpg",
                        rating: 0,
                        type: "SPEAKERONE"
                    }, {
                        pollType: "ENDSCREENPOLL",
                        pollQuestion: "Did the event meet your expectations?",
                        pollId: S.id + "-speaker",
                        eventId: S.id + "-speaker",
                        options: ["1", "2", "3", "4", "5"],
                        backgroundImage: "/static/images/pure-accelerate/placeholders/placeholder-bg.jpg",
                        rating: 0,
                        type: "EVENTONE"
                    }, {
                        pollType: "ENDSCREENPOLL",
                        pollQuestion: "How likely are you to join another Hitachi Vantara event?",
                        pollId: S.id + "-speaker",
                        eventId: S.id + "-speaker",
                        options: ["1", "2", "3", "4", "5"],
                        backgroundImage: "/static/images/pure-accelerate/placeholders/placeholder-bg.jpg",
                        rating: 0,
                        type: "EVENTTWO"
                    }]), S.isPast || function () {
                        e.apply(this, arguments)
                    }(), function (e, t) {
                        os.apply(this, arguments)
                    }(M, S))
                }), [M, S]);
                var Z = Object(i.useContext)(Ya), q = Z.setActiveChat, U = Z.setMessages;

                function H() {
                    return H = Object(p.a)(d.a.mark((function e(t) {
                        var n, i, a;
                        return d.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, aa(t);
                                case 2:
                                    n = e.sent, i = n.data.listMessagesByTopicId, a = Object(m.a)(Object(m.a)({}, i), {}, {topicId: t}), q(a), U(a.items);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    }))), H.apply(this, arguments)
                }

                if (E) return Object(R.jsx)(br, {top: "30%", size: {width: "120px", height: "120px"}});
                S || L.replace("/go/storage-acceleration/en");
                var B = S.isPast || !S.eventTime, F = !S.brightcoveVideoId, $ = S.isLive && !a, V = S.isPast || a,
                    W = S.endScreen;
                return E || !a || F && !V ? E || !a || F && !V ? E || $ || B || F ? Object(R.jsxs)(R.Fragment, {
                    children: [F && Object(R.jsx)(Ko, {}), Object(R.jsxs)(is, {
                        children: [Object(R.jsxs)("div", {
                            className: "header-container",
                            children: [Object(R.jsx)("div", {
                                className: "video-close-btn",
                                children: Object(R.jsx)("span", {
                                    onClick: function () {
                                        window.location.href = "/go/storage-acceleration/en"
                                    },
                                    children: Object(R.jsx)(jt, {
                                        name: "close",
                                        style: {cursor: "pointer"},
                                        color: "var(--color-white)"
                                    })
                                })
                            }), a && Object(R.jsx)("div", {
                                className: "end-poll-header-text",
                                children: "Thank you, one quick poll before you go!"
                            })]
                        }), Object(R.jsx)(ns, {
                            children: f && Object(R.jsx)(yc, {
                                isChatOpen: s, toggleChat: function () {
                                    l(!s)
                                }, selectTopic: function (e) {
                                    return H.apply(this, arguments)
                                }, chatId: f, questionsId: v
                            })
                        }), Object(R.jsx)(eo, {
                            videoId: S.brightcoveVideoId,
                            accountId: "3971130171001",
                            chatId: f,
                            isChatOpen: s,
                            playerId: null !== (e = S.brightcovePlayerId) && void 0 !== e ? e : "ByX7WdNNlm",
                            handleVideoComplete: function () {
                                l(!1), D.appendTo(T.current), P();
                                var e = setTimeout((function () {
                                    r(!0), clearTimeout(e)
                                }), 5e3);
                                !function (e, t) {
                                    cs.apply(this, arguments)
                                }(M, S)
                            },
                            eventStartTime: S.eventTime,
                            onEnded: function () {
                                return console.log("video complete")
                            },
                            onClose: function () {
                                return console.log("close video")
                            },
                            isOnDemand: B,
                            playerOptions: {autoplay: !0}
                        }), s && Object(R.jsx)(Ao, {}), Object(R.jsx)("div", {ref: T, className: "confetti-container"})]
                    })]
                }) : Object(R.jsx)(Tc, {
                    event: S, handleSessionStart: function () {
                    }
                }) : Object(R.jsx)(nc, {endScreen: W}) : Object(R.jsx)(ts, {
                    eventPoll: C[0],
                    speakerPoll: C[1],
                    speakerPollOne: C[2],
                    eventPollOne: C[3],
                    eventPollTwo: C[4],
                    eventData: S
                })
            }, ls = ce.b.main.withConfig({
                displayName: "styles__AdminPageStyles",
                componentId: "sc-48uxip-0"
            })(['width:100%;background-attachment:fixed;background-size:cover;padding:0 0 11rem 0;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;.close-box{position:absolute;top:3rem;right:3rem;width:24px;height:24px;background-image:url("../../../images/x.svg");}.space-at-bottom{height:200px;}table{margin-left:100px;color:white;}td{width:900px;}.page-header{max-width:var(--page-max-width);padding:0 2rem;h1{font-size:4rem;color:var(--color-white);font-weight:600;margin:3rem 0 1.4rem;}p{width:70%;color:white;font-size:1.75rem;margin:0 0 -20px 0;}border-bottom:none;}h2{color:var(--color-white);font-weight:600;font-size:2.8rem;margin-bottom:2rem;margin-top:10rem;width:100%;max-width:var(--page-max-width);padding-left:2rem;text-align:left;}']),
            ds = ce.b.div.withConfig({
                displayName: "styles__PageLayoutStyles",
                componentId: "sc-48uxip-1"
            })(['background-image:unset;background-repeat:unset;background-size:unset;width:100%;position:relative;margin:0;padding:0;display:flex;height:100%;flex-direction:column;overflow-y:scroll;background-color:var(--color-brand-dark-blue);-ms-overflow-style:unset;&::-webkit-scrollbar{width:unset !important;}.full-height{height:100%;flex-basis:100%;}&::before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background:unset;}']);
        var ps = function () {
            var e = fi(), t = e.data, n = (e.isLoading, e.isIdle, Object(i.useState)([])), a = Object(z.a)(n, 2),
                r = a[0], o = a[1], c = Object(i.useState)([]), s = Object(z.a)(c, 2), l = s[0], m = s[1],
                u = Object(i.useState)([]), b = Object(z.a)(u, 2), f = b[0], g = b[1], x = Object(i.useState)([]),
                j = Object(z.a)(x, 2), v = j[0], w = j[1], y = Object(i.useState)({}), O = Object(z.a)(y, 2), C = O[0],
                k = (O[1], Object(i.useState)({})), L = Object(z.a)(k, 2), N = L[0], I = (L[1], Object(i.useState)(!1)),
                S = Object(z.a)(I, 2), E = S[0], M = S[1], _ = Object(i.useState)(null), T = Object(z.a)(_, 2),
                A = T[0], P = T[1], D = Object(h.i)().lang;

            function Z() {
                return (Z = Object(p.a)(d.a.mark((function e(t) {
                    var n, i;
                    return d.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = {contentId: t.id, name: t.eventTitle, type: "chat"}, e.next = 3, da(n);
                            case 3:
                                i = e.sent, C[t.id] = i.data.createTopic, M(!E);
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function q() {
                return (q = Object(p.a)(d.a.mark((function e(t) {
                    var n, i;
                    return d.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = {contentId: t.id, name: t.eventTitle, type: "q&a"}, e.next = 3, da(n);
                            case 3:
                                i = e.sent, N[t.id] = i.data.createTopic, M(!E);
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function U() {
                return (U = Object(p.a)(d.a.mark((function e() {
                    var t, n, i, a;
                    return d.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return t = document.getElementById("globalTopicName").value, n = document.getElementById("icon").value, i = {
                                    name: t,
                                    icon: n,
                                    type: "global"
                                }, e.next = 5, da(i);
                            case 5:
                                a = e.sent, v.push(a.data.createTopic), M(!E);
                            case 8:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function H() {
                return (H = Object(p.a)(d.a.mark((function e(t) {
                    var n;
                    return d.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, ja(t.id);
                            case 2:
                                n = e.sent, w(v.filter((function (e) {
                                    return e.id !== n.data.deleteTopic.id
                                })));
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            return Object(i.useEffect)((function () {
                function e() {
                    return (e = Object(p.a)(d.a.mark((function e() {
                        var n;
                        return d.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, xi(t.id);
                                case 2:
                                    n = e.sent, P(n.data.getUserProfile);
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                !function () {
                    e.apply(this, arguments)
                }()
            }), [D]), Object(i.useEffect)((function () {
                function e() {
                    return (e = Object(p.a)(d.a.mark((function e() {
                        var t, n, i, a;
                        return d.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, yi();
                                case 2:
                                    if (!e.sent) {
                                        e.next = 19;
                                        break
                                    }
                                    return e.next = 6, Uc();
                                case 6:
                                    return t = e.sent, o(t.data.listPolls.items), e.next = 10, na();
                                case 10:
                                    return n = e.sent, m(n.data.listTopics.items), i = [], n.data.listTopics.items.forEach((function (e) {
                                        "chat" === e.type && (C[e.contentId] = e), "q&a" === e.type && (N[e.contentId] = e), "global" === e.type && i.push(e)
                                    })), e.next = 16, po(D);
                                case 16:
                                    a = e.sent, g(a.events), w(i);
                                case 19:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                !function () {
                    e.apply(this, arguments)
                }()
            }), [D]), Object(R.jsx)(ds, {
                children: Object(R.jsxs)(ls, {
                    children: [Object(R.jsx)("a", {
                        href: "/".concat(D),
                        children: Object(R.jsx)("div", {className: "close-box"})
                    }), Object(R.jsx)("div", {
                        className: "page-header",
                        children: Object(R.jsx)("h1", {children: "Admin Page"})
                    }), Object(R.jsx)("h2", {children: "PROFILE DATA"}), null !== A && Object(R.jsxs)("div", {children: [Object(R.jsxs)("p", {children: ["ID: ", A.id]}), Object(R.jsxs)("p", {children: ["PHONE: ", A.phoneNumber]}), Object(R.jsxs)("p", {children: ["ATTENDEE TYPE: ", A.attendeeType]}), Object(R.jsxs)("p", {children: ["BUSINESS ROLE: ", A.businessRole]}), Object(R.jsxs)("p", {children: ["COMPANY: ", A.company]}), Object(R.jsxs)("p", {children: ["EMAIL: ", A.email]}), Object(R.jsxs)("p", {children: ["FIRST NAME: ", A.firstName]}), Object(R.jsxs)("p", {children: ["LAST NAME: ", A.lastName]}), Object(R.jsxs)("p", {children: ["PROFESSION LEVEL: ", A.professionalLevel]}), Object(R.jsxs)("p", {children: ["LINKEDIN: ", A.linkedinProfile]}), Object(R.jsxs)("p", {children: ["TWITTER: ", A.twitterHandle]}), Object(R.jsxs)("p", {children: ["INSTAGRAM: ", A.instagramHandle]}), Object(R.jsxs)("p", {children: ["TRACK INTEREST: ", A.trackInterests]}), Object(R.jsxs)("p", {children: ["PRODUCT INTERESTS: ", A.productInterests]})]}), r.length > 0 && Object(R.jsxs)(R.Fragment, {
                        children: [Object(R.jsx)("h2", {children: "POLLS DATA"}), Object(R.jsx)("table", {
                            className: "table",
                            children: Object(R.jsxs)("tbody", {
                                children: [Object(R.jsxs)("tr", {children: [Object(R.jsx)("th", {children: "POLL ID"}), Object(R.jsx)("th", {children: "POLL CONTENT ID"}), Object(R.jsx)("th", {children: "POLL OPTION"}), Object(R.jsx)("th", {children: "POLL OPTION COUNT"}), Object(R.jsx)("th", {children: "QUESTION"}), Object(R.jsx)("th", {children: "EVENT ID"})]}), r.map((function (e, t) {
                                    return Object(R.jsxs)("tr", {children: [Object(R.jsxs)("td", {children: [" ", e.id]}), Object(R.jsxs)("td", {children: [" ", e.contentId, " "]}), Object(R.jsxs)("td", {children: [" ", e.option, " "]}), Object(R.jsxs)("td", {children: [" ", e.optionCount]}), Object(R.jsxs)("td", {children: [" ", e.question]}), Object(R.jsxs)("td", {children: [" ", e.eventContentId]})]}, t)
                                }))]
                            })
                        })]
                    }), l.length > 0 && Object(R.jsxs)(R.Fragment, {
                        children: [Object(R.jsx)("h2", {children: "TOPICS DATA"}), Object(R.jsx)("table", {
                            className: "table",
                            children: Object(R.jsxs)("tbody", {
                                children: [Object(R.jsxs)("tr", {children: [Object(R.jsx)("th", {children: "TOPIC ID"}), Object(R.jsx)("th", {children: "TOPIC CONTENT ID"}), Object(R.jsx)("th", {children: "TOPIC NAME"}), Object(R.jsx)("th", {children: "TOPIC TYPE"})]}), l.map((function (e, t) {
                                    return Object(R.jsxs)("tr", {children: [Object(R.jsxs)("td", {children: [" ", e.id]}), Object(R.jsxs)("td", {children: [" ", e.contentId, " "]}), Object(R.jsxs)("td", {children: [" ", e.name, " "]}), Object(R.jsxs)("td", {children: [" ", e.type, " "]})]}, t)
                                }))]
                            })
                        })]
                    }), f.length > 0 && Object(R.jsxs)(R.Fragment, {
                        children: [Object(R.jsx)("h2", {children: "EVENTS DATA"}), Object(R.jsx)("table", {
                            className: "table", children: Object(R.jsxs)("tbody", {
                                children: [Object(R.jsxs)("tr", {children: [Object(R.jsx)("th", {children: "EVENT ID"}), Object(R.jsx)("th", {children: "EVENT TITLE"}), Object(R.jsx)("th", {children: "CHAT ENABLED"}), Object(R.jsx)("th", {children: "CHAT TOPIC ID"}), Object(R.jsx)("th", {children: "Q&A ENABLED"}), Object(R.jsx)("th", {children: "Q&A TOPIC ID"})]}), f.map((function (e, t) {
                                    var n, i;
                                    return Object(R.jsxs)("tr", {
                                        children: [Object(R.jsxs)("td", {children: [" ", e.id]}), Object(R.jsxs)("td", {children: [" ", e.eventTitle, " "]}), Object(R.jsxs)("td", {children: [" ", e.chatEnabled && "ENABLED", " "]}), Object(R.jsxs)("td", {
                                            children: [" ", (null === (n = C[e.id]) || void 0 === n ? void 0 : n.id) || Object(R.jsx)(Lt, {
                                                id: "createChat",
                                                size: "small",
                                                onClick: function (t) {
                                                    return function (e) {
                                                        return Z.apply(this, arguments)
                                                    }(e)
                                                },
                                                children: "CREATE CHAT"
                                            })]
                                        }), Object(R.jsxs)("td", {children: [" ", e.qaEnabled && "ENABLED", " "]}), Object(R.jsxs)("td", {
                                            children: [" ", (null === (i = N[e.id]) || void 0 === i ? void 0 : i.id) || Object(R.jsxs)(Lt, {
                                                id: "createQA",
                                                size: "small",
                                                onClick: function (t) {
                                                    return function (e) {
                                                        return q.apply(this, arguments)
                                                    }(e)
                                                },
                                                children: ["CREATE Q&A", " "]
                                            })]
                                        })]
                                    }, t)
                                }))]
                            })
                        })]
                    }), v.length > 0 && Object(R.jsxs)(R.Fragment, {
                        children: [Object(R.jsx)("h2", {children: "GLOBAL CHAT TOPICS DATA"}), Object(R.jsx)("table", {
                            className: "table",
                            children: Object(R.jsxs)("tbody", {
                                children: [Object(R.jsxs)("tr", {children: [Object(R.jsx)("th", {children: "TOPIC ID"}), Object(R.jsx)("th", {children: "TOPIC NAME"}), Object(R.jsx)("th", {children: "TOPIC TYPE"}), Object(R.jsx)("th", {children: "TOPIC ICON"}), Object(R.jsx)("th", {children: "DELETE TOPIC"})]}), v.map((function (e, t) {
                                    return Object(R.jsxs)("tr", {
                                        children: [Object(R.jsxs)("td", {children: [" ", e.id]}), Object(R.jsxs)("td", {children: [" ", e.name, " "]}), Object(R.jsxs)("td", {children: [" ", e.type, " "]}), Object(R.jsxs)("td", {children: [" ", e.icon, " "]}), Object(R.jsx)("td", {
                                            children: Object(R.jsxs)(Lt, {
                                                size: "small",
                                                onClick: function (t) {
                                                    return function (e) {
                                                        return H.apply(this, arguments)
                                                    }(e)
                                                },
                                                children: [" ", "DELETE", " "]
                                            })
                                        })]
                                    }, t)
                                }))]
                            })
                        }), Object(R.jsx)("table", {
                            children: Object(R.jsx)("tbody", {
                                children: Object(R.jsxs)("tr", {
                                    children: [Object(R.jsx)("td", {
                                        style: {color: "black"},
                                        children: Object(R.jsx)(Xt, {
                                            type: "text",
                                            name: "Global Topic Name",
                                            id: "globalTopicName"
                                        })
                                    }), Object(R.jsx)("td", {
                                        style: {color: "black"},
                                        children: Object(R.jsx)(Xt, {type: "text", name: "Icon", id: "icon"})
                                    }), Object(R.jsx)("td", {
                                        children: Object(R.jsx)(Lt, {
                                            size: "small",
                                            onClick: function (e) {
                                                return function () {
                                                    return U.apply(this, arguments)
                                                }()
                                            },
                                            children: "CREATE GLOBAL TOPIC"
                                        })
                                    })]
                                })
                            })
                        })]
                    }), Object(R.jsx)("div", {className: "space-at-bottom"})]
                })
            })
        }, ms = n(443), us = n(444), hs = n(445);
        var bs = function () {
            var e = Object(i.useState)(!1), t = Object(z.a)(e, 2), n = t[0], a = t[1], r = Object(h.h)(),
                o = Object(h.i)().lang, c = Z(), s = c.trackPageView, l = c.trackUserProfileComplete, u = f(),
                b = Ur((function (e) {
                    return e.setPreEvent
                })), g = Ur((function (e) {
                    return e.setActiveEvent
                })), x = Ur((function (e) {
                    return e.setPostEvent
                }));
            En();
            var v = fi(), w = v.data, y = v.isLoading, O = v.isFetching, C = v.isIdle, k = bi(), L = k.data,
                N = k.isLoading, I = gi(), S = I.mutate, M = I.isLoading;
            Object(_.a)(["events", "virtual-events:session/featured"], Object(p.a)(d.a.mark((function e() {
                var t;
                return d.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, so(o, "virtual-events:session/featured");
                        case 2:
                            return t = e.sent, e.abrupt("return", t.events[0]);
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            }))), {
                refetchInterval: 6e4, onSuccess: function (e) {
                    var t = function (e) {
                        var t = e.startTime, n = e.endTime, i = new Date, a = t, r = n,
                            o = Object(ms.a)(i, {start: a, end: r}), c = Object(us.a)(i, a), s = Object(hs.a)(i, r);
                        if (c) return Pr;
                        if (o) return Dr;
                        if (s) return Zr;
                        throw new Error("invalid dates")
                    }({startTime: e.eventTime, endTime: e.eventEndTime});
                    switch (t) {
                        case Pr:
                            b();
                            break;
                        case Dr:
                            g();
                            break;
                        case Zr:
                            x();
                            break;
                        default:
                            b()
                    }
                }
            });
            var T = Object(i.useCallback)(function () {
                var e = Object(p.a)(d.a.mark((function e(t) {
                    var n, i;
                    return d.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (L) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4, Qc();
                            case 4:
                                if (n = e.sent, n.some((function (e) {
                                    return e.email === t.email
                                })) || !(n.length < 100)) {
                                    e.next = 11;
                                    break
                                }
                                return i = {
                                    id: t.id,
                                    firstName: t.firstName,
                                    lastName: t.lastName,
                                    email: t.email,
                                    userProfile: t.email,
                                    winner: !1
                                }, e.next = 10, Yc(i);
                            case 10:
                                e.sent;
                            case 11:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), [L]);

            function A() {
                return (A = Object(p.a)(d.a.mark((function e() {
                    var t, n;
                    return d.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, ci();
                            case 2:
                                t = e.sent, n = {
                                    id: t.id,
                                    firstName: t.firstName,
                                    lastName: t.lastName,
                                    email: t.email,
                                    professionalLevel: t.jobTitle,
                                    company: t.company,
                                    phone: t.phone
                                }, S({profileData: n}), l(n), T(n);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            return Object(i.useEffect)((function () {
                s(Object(m.a)({lang: o}, r)), function () {
                    var e = new CustomEvent("screenPageLoad", {detail: {href: window.location.href}});
                    document.querySelector("body").dispatchEvent(e)
                }()
            }), [r, o, s]), w || M || C || O || y || function () {
                A.apply(this, arguments)
            }(), y || C || N ? Object(R.jsx)("div", {children: "Loading..."}) : Object(R.jsxs)($o, {
                children: [j, u.includes("analytics") && Object(R.jsx)(Ui, {
                    isActive: n || u.includes("analytics"),
                    onClose: function () {
                        return a(!1)
                    }
                }), Object(R.jsx)(E.a, {
                    exitBeforeEnter: !0,
                    initial: !1,
                    children: Object(R.jsxs)(h.d, {
                        location: r,
                        children: [Object(R.jsx)(h.b, {
                            path: "/go/storage-acceleration/:lang/media",
                            children: Object(R.jsx)(ss, {})
                        }), Object(R.jsx)(h.b, {
                            path: "/go/storage-acceleration/:lang/admin",
                            children: Object(R.jsx)(ps, {})
                        }), Object(R.jsx)(h.b, {
                            path: "/go/storage-acceleration/:lang/home",
                            children: Object(R.jsx)(wo, {})
                        }), Object(R.jsx)(h.b, {
                            path: "/go/storage-acceleration/:lang",
                            children: Object(R.jsx)(wo, {})
                        })]
                    }, r.pathname)
                })]
            })
        };
        var fs = function () {
                var e = Object(i.useState)(!1), t = Object(z.a)(e, 2), n = (t[0], t[1], ["hitachivantara.com"]),
                    a = Object(i.useRef)(), r = To(), o = r.bigBoom, c = r.bigConfetti, s = Z(), l = s.trackPageView,
                    u = s.trackUserProfileComplete, b = Object(h.h)(), f = Object(h.i)().lang;
                En(), Ii(), Ti();
                var g = {
                        enter: {opacity: 0},
                        center: {
                            opacity: 1,
                            transition: {
                                type: "tween", duration: .2, ease: "easeOut", onComplete: function (e) {
                                    o()
                                }
                            }
                        },
                        exit: {opacity: 0}
                    }, x = fi(), v = x.data, w = x.isLoading, y = x.isFetching, O = x.isIdle, C = bi().data, k = gi(),
                    L = k.mutateAsync, N = k.isLoading, I = function (e) {
                        if (e.indexOf("@") > -1) for (var t = e.split("@"), i = 0; i < n.length; i += 1) return t[1].toLowerCase() === n[i]
                    }, S = Object(i.useCallback)(function () {
                        var e = Object(p.a)(d.a.mark((function e(t) {
                            var n, i, a;
                            return d.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (C) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return n = I(t.email), e.next = 5, Qc();
                                    case 5:
                                        i = e.sent, a = i.some((function (e) {
                                            return e.email === t.email
                                        })), !n && !a && i.length < 1e3 && Yc({
                                            id: t.id,
                                            firstName: t.firstName,
                                            lastName: t.lastName,
                                            email: t.email,
                                            userProfile: t.email,
                                            winner: !1
                                        });
                                    case 8:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(), [C]);
                return Object(i.useEffect)((function () {
                    function e() {
                        return (e = Object(p.a)(d.a.mark((function e() {
                            var t, n;
                            return d.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ci();
                                    case 2:
                                        return t = e.sent, n = {
                                            id: t.id,
                                            firstName: t.firstName,
                                            lastName: t.lastName,
                                            email: t.email,
                                            professionalLevel: t.jobTitle,
                                            company: t.company,
                                            phone: t.phone,
                                            attendeeType: t.attendeeType
                                        }, e.next = 6, L({profileData: n});
                                    case 6:
                                        u(n), S(n);
                                    case 8:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    v || N || w || y || O || function () {
                        e.apply(this, arguments)
                    }()
                }), [v, N, w, O, y, L, u, S]), Object(i.useLayoutEffect)((function () {
                    c.appendTo(a.current)
                }), [c]), Object(i.useEffect)((function () {
                    v && l(Object(m.a)(Object(m.a)({lang: f}, b), {}, {userId: v.id}))
                }), [b, f, l, v]), Object(R.jsxs)(nn, {
                    initial: "enter", animate: "center", exit: "exit", variants: g, children: [j, j, Object(R.jsxs)("div", {
                        className: "reward-step-container",
                        children: [Object(R.jsx)("div", {
                            className: "hero-container",
                            children: Object(R.jsxs)("div", {
                                className: "cta-content",
                                children: [Object(R.jsx)("h2", {
                                    className: "page-title",
                                    children: "You\u2019re all set! We look forward to seeing you on Oct 12th"
                                }), Object(R.jsx)("p", {
                                    className: "page-call-out",
                                    children: "Check back then to access the event."
                                }), Object(R.jsx)("div", {
                                    className: "controls-container",
                                    children: Object(R.jsx)(Nt, {
                                        className: "cta-button",
                                        href: "/go/storage-acceleration",
                                        rel: "noreferrer",
                                        children: "Explore"
                                    })
                                })]
                            })
                        }), Object(R.jsxs)("div", {
                            className: "speakers-container",
                            children: [Object(R.jsxs)("h2", {
                                className: "speakers-title",
                                children: ["Featured", Object(R.jsx)("br", {}), "Speakers", Object(R.jsx)("br", {})]
                            }), Object(R.jsxs)("div", {
                                className: "speaker",
                                children: [Object(R.jsx)("div", {className: "speaker-image-container-mark"}), Object(R.jsxs)("div", {
                                    className: "speaker-info",
                                    children: [Object(R.jsx)("h3", {
                                        className: "speaker-name",
                                        children: "Mark Ablett"
                                    }), Object(R.jsxs)("span", {
                                        className: "title",
                                        children: ["President ", Object(R.jsx)("br", {}), "Digital Infrastructure Business Unit"]
                                    })]
                                })]
                            }), Object(R.jsxs)("div", {
                                className: "speaker",
                                children: [Object(R.jsx)("div", {className: "speaker-image-container-radhika"}), Object(R.jsxs)("div", {
                                    className: "speaker-info",
                                    children: [Object(R.jsx)("h3", {
                                        className: "speaker-name",
                                        children: "Radhika Krishnan"
                                    }), Object(R.jsx)("span", {className: "title", children: "Chief Product Officer"})]
                                })]
                            }), Object(R.jsxs)("div", {
                                className: "speaker",
                                children: [Object(R.jsx)("div", {className: "speaker-image-container-colin"}), Object(R.jsxs)("div", {
                                    className: "speaker-info",
                                    children: [Object(R.jsx)("h3", {
                                        className: "speaker-name",
                                        children: "Colin Gallagher"
                                    }), Object(R.jsxs)("span", {
                                        className: "title",
                                        children: ["Vice President", Object(R.jsx)("br", {}), " Product Marketing"]
                                    })]
                                })]
                            }), Object(R.jsxs)("div", {
                                className: "speaker",
                                children: [Object(R.jsx)("div", {className: "speaker-image-container-kimberly"}), Object(R.jsxs)("div", {
                                    className: "speaker-info",
                                    children: [Object(R.jsx)("h3", {
                                        className: "speaker-name",
                                        children: "Kim King"
                                    }), Object(R.jsxs)("span", {
                                        className: "title",
                                        children: ["Senior Vice President", Object(R.jsx)("br", {}), " Strategic Partners & Alliances"]
                                    })]
                                })]
                            })]
                        })]
                    }), Object(R.jsx)("div", {ref: a, className: "confetti-container"})]
                }, "rewards-step")
            },
            gs = Object(ce.a)(['@font-face{font-family:"neue-haas-grotesk-display";src:url("https://use.typekit.net/af/2807c7/00000000000000007735bb48/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/2807c7/00000000000000007735bb48/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/2807c7/00000000000000007735bb48/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");font-display:auto;font-style:normal;font-weight:400;}@font-face{font-family:"neue-haas-grotesk-display";src:url("https://use.typekit.net/af/2b59e1/00000000000000007735bb53/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/2b59e1/00000000000000007735bb53/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/2b59e1/00000000000000007735bb53/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");font-display:auto;font-style:italic;font-weight:400;}@font-face{font-family:"neue-haas-grotesk-display";src:url("https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");font-display:auto;font-style:normal;font-weight:700;}@font-face{font-family:"neue-haas-grotesk-display";src:url("https://use.typekit.net/af/fcc1c9/00000000000000007735bb6c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/fcc1c9/00000000000000007735bb6c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/fcc1c9/00000000000000007735bb6c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");font-display:auto;font-style:italic;font-weight:700;}@font-face{font-family:"neue-haas-grotesk-text";src:url("https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");font-display:auto;font-style:normal;font-weight:400;}@font-face{font-family:"neue-haas-grotesk-text";src:url("https://use.typekit.net/af/aed66e/00000000000000007735bb35/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/aed66e/00000000000000007735bb35/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/aed66e/00000000000000007735bb35/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");font-display:auto;font-style:italic;font-weight:400;}@font-face{font-family:"neue-haas-grotesk-text";src:url("https://use.typekit.net/af/305037/00000000000000007735bb39/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/305037/00000000000000007735bb39/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/305037/00000000000000007735bb39/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");font-display:auto;font-style:normal;font-weight:700;}@font-face{font-family:"neue-haas-grotesk-text";src:url("https://use.typekit.net/af/68a7c6/00000000000000007735bb3d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/68a7c6/00000000000000007735bb3d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/68a7c6/00000000000000007735bb3d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");font-display:auto;font-style:italic;font-weight:700;}@font-face{font-family:"din";src:url("/static/fonts/DIN-Light.woff") format("woff");font-display:auto;font-weight:200;font-style:normal;}@font-face{font-family:"din";src:url("/static/fonts/DIN-Medium.woff") format("woff");font-display:auto;font-weight:300;font-style:normal;}@font-face{font-family:"din";src:url("/static/fonts/DIN-Regular.woff") format("woff");font-display:auto;font-weight:400;font-style:normal;}@font-face{font-family:"din";src:url("/static/fonts/DIN-Bold.woff") format("woff");font-display:auto;font-weight:600;font-style:normal;}@font-face{font-family:"din";src:url("/static/fonts/DIN-Black.woff") format("woff");font-display:auto;font-weight:800;font-style:normal;}:root{--color-red:#D20000;--color-dark-blue:#051C34;--color-purple:hsl(285,73%,55%);--color-purple-tint:hsl(285,73%,65%);--color-orange:hsl(37,84%,52%);--color-blue-shade:hsl(212,98%,20%);--color-blue:hsl(199,100%,64%);--color-navy-blue:#000080;--color-blue-tint:hsl(199,100%,70%);--color-green:hsl(139,100%,44%);--color-black:hsla(0,0%,0%,1);--color-white:hsla(0,0%,100%,1);--color-white-alpha:hsla(0,0%,100%,0.7);--color-gray-1:hsla(0,0%,20%);--color-gray-2:hsla(0,0%,30%);--color-gray-3:hsla(0,0%,50%);--color-gray-4:hsla(0,0%,80%);--color-gray-5:hsla(0,0%,90%);--color-gray-6:hsla(0,0%,95%);--color-header-nav-gray:hsla(0,0%,30%);--color-light-gray:#414141;--color-medium-gray:#616161;--color-medium-gray-1:#494949;--color-dark-gray:#0E0E0E;--font-body:"neue-haas-grotesk-text",Helvetica,Arial,sans-serif;--font-display:"din","neue-haas-grotesk-display",Helvetica,Arial,sans-serif;--font-size-small:1rem;--font-size-medium:1.2rem;--font-size-large:1.4rem;--font-size-extra-large:1.6rem;--font-size-extra-large-plus:1.7rem;--font-size-h1:4.1rem;--font-size-h2:2rem;--font-size-title:2.4rem;--font-size-h3:var(--font-size-extra-large);--font-size-h4:var(--font-size-large);--font-size-h5:var(--font-size-medium);--color-brand-red:hsl(0,100%,41%);--color-brand-dark-blue:#051C34;--color-brand-tan:#EC9D1F;--color-brand-purple:#B73BE0;--color-brand-teal:#49C6FF;--color-black-alpha:hsl(0,0,0,0.5);--color-brand-red-alpha:hsl(0,100%,45%,0.8);--color-brand-red-tint:hsl(0,100%,45%);--color-brand-red-shade:hsl(0,100%,35%);--color-primary:var(--color-brand-red);--color-primary-alpha:var(--color-brand-red-alpha);--color-primary-shade:var(--color-brand-red-shade);--color-primary-tint:var(--color-brand-red-tint);--color-brand-gray:#D8D8D8;--color-secondary:var(--color-white);--color-secondary-alpha:var(--color-white-alpha);--color-body-text:var(--color-secondary);--color-error:hsl(0,100%,37%);--color-success:hsl(171,100%,30%);--color-white-semi:rgba(255,255,255,0.95);--color-link:var(--color-primary);--color-link-hover:var(--color-primary-tint);--color-link-visited:var(--color-primary-tint);--color-input-border:#242323;--color-input-background:#192E44;--gradient-gray-2:linear-gradient(270deg,var(--color-light-gray) 0%,var(--color-dark-blue) 100%);--gradient-gray-1:linear-gradient(-165deg,var(--color-light-gray) 0%,var(--color-dark-blue) 100%);--gradient-red-blue-1:linear-gradient(47.78deg,#2F1B1C 0%,#7A5243 9.43%,#554D55 22.19%,#7F877C 29.34%,#2B6388 48.92%,#F80116 100%);--color-background-gray:var(--gradient-gray-1);--page-side-spacing:2.4rem;--page-max-width:144rem;--page-max-sub-header-width:100rem;--color-chat-dark-gray:#2C2C2C;--color-chat-dark-gray-two:#1D1D1D;--color-chat-dark-gray-two-semi:rgba(44,44,44,0.95);--color-chat-dark-gray-two-semi-darker:rgba(44,44,44,0.96);--color-chat-light-gray:#979797;--color-chat-gray:#616161;--color-chat-red:#D20000;--color-chat-purple:#CE43FC;--color-chat-yellow:#FFA21C;--color-chat-blue:#00C6FF;--color-chat-black-semi:rgba(0,0,0,0.7);--color-notification-shadow:rgba(0,0,0,0.21);--color-notification-modal-container:rgba(0,0,0,0.4);--color-notification-border:#FFAD00;--color-notification-background:rgba(0,0,0,0.9);}html{box-sizing:border-box;font-size:62.5%;}*,*:before,*:after{box-sizing:border-box;-webkit-font-smoothing:antialiased;}*:focus{outline:none;}html,body{overflow:unset;}html,body,#root{height:100%;min-width:0;margin:0;padding:0;overflow:hidden;overflow:-moz-scrollbars-none;-ms-overflow-style:none;&::-webkit-scrollbar{width:0 !important;}@media (max-width:568px){overflow-y:scroll;}}body{font-size:var(--font-size-medium);font-family:var(--font-body);background-color:var(--color-dark-blue);color:var(--color-body-text);overflow:hidden;font-weight:400;line-height:1.75;}a{font-weight:400;color:var(--color-link);text-decoration:none;transition:0.2s;}a:visited{color:var(--color-link);}a:hover{color:var(--color-link-hover);text-decoration:none;}a:focus,input:focus,input[type="text"]:focus,select:focus,button:focus{outline:none !important;box-shadow:0 0 0 2px rgba(255,255,255,0.4) !important;}h1,h2,h3,h4,h5{margin:3rem 0 1.38rem;font-weight:400;line-height:1.3;}h1{margin-top:0;font-size:var(--font-size-h1);}h2{font-size:var(--font-size-h2);}h3{font-size:var(--font-size-h3);}h4{font-size:var(--font-size-h4);}h5{font-size:var(--font-size-h5);}p{font-family:var(--font-body);font-size:var(--font-size-large);margin-bottom:1rem;}button{font-family:var(--font-body);color:var(--color-primary);cursor:pointer;font-weight:400;background:transparent;border:none;}label{font-size:var(--font-size-large);font-weight:400;}#portal{z-index:99;position:fixed;top:0;left:0;height:100%;width:100%;overflow:hidden;}#zmmtg-root{display:none;}.tp-dfwv{z-index:99;}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus{border:1px solid var(--color-input-border);-webkit-text-fill-color:var(--color-white);box-shadow:0 0 0px 1000px #192E44 inset;transition:background-color 5000s ease-in-out 0s;}']);
        n(401);
        c.default.configure(s);
        var xs = new N.a, js = function () {
            return Object(R.jsxs)(L.a, {
                children: [Object(R.jsx)(gs, {}), Object(R.jsx)(q, {
                    children: Object(R.jsx)(I.a, {
                        client: xs,
                        children: Object(R.jsx)(S.ErrorBoundary, {
                            FallbackComponent: pr,
                            onReset: function () {
                                window.location.reload()
                            },
                            children: Object(R.jsx)(oe, {
                                children: Object(R.jsxs)(h.d, {
                                    children: [Object(R.jsx)(h.a, {
                                        exact: !0,
                                        from: "/",
                                        to: "/go/storage-acceleration/en"
                                    }), Object(R.jsx)(h.b, {
                                        path: "/go/storage-acceleration/:lang/registration",
                                        children: Object(R.jsx)(Hi, {})
                                    }), Object(R.jsx)(sr, {
                                        path: "/go/storage-acceleration/:lang",
                                        children: Object(R.jsx)(ar, {
                                            children: Object(R.jsx)(or, {
                                                children: Object(R.jsx)($i, {
                                                    children: Object(R.jsxs)(Ja, {
                                                        children: [Object(R.jsx)(h.b, {
                                                            path: "/go/storage-acceleration/:lang/profile",
                                                            children: Object(R.jsx)(fs, {})
                                                        }), Object(R.jsx)(bs, {})]
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })]
            })
        };
        o.a.render(Object(R.jsx)(a.a.StrictMode, {children: Object(R.jsx)(js, {})}), document.getElementById("root"))
    }
}, [[410, 1, 2]]]);
//# sourceMappingURL=main.7541bc5e.chunk.js.map