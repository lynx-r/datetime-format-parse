var je = Object.defineProperty;
var Ue = (t, r, e) => r in t ? je(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var o = (t, r, e) => Ue(t, typeof r != "symbol" ? r + "" : r, e);
function p(t) {
  const r = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && r === "[object Date]" ? new t.constructor(+t) : typeof t == "number" || r === "[object Number]" || typeof t == "string" || r === "[object String]" ? new Date(t) : /* @__PURE__ */ new Date(NaN);
}
function g(t, r) {
  return t instanceof Date ? new t.constructor(r) : new Date(r);
}
function Ie(t, r) {
  const e = p(t);
  return isNaN(r) ? g(t, NaN) : (r && e.setDate(e.getDate() + r), e);
}
const Ee = 6048e5, Be = 864e5, Ve = 6e4, Je = 36e5, Ke = 1e3;
let Se = {};
function q() {
  return Se;
}
function _(t, r) {
  var u, l, d, D;
  const e = q(), n = (r == null ? void 0 : r.weekStartsOn) ?? ((l = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : l.weekStartsOn) ?? e.weekStartsOn ?? ((D = (d = e.locale) == null ? void 0 : d.options) == null ? void 0 : D.weekStartsOn) ?? 0, a = p(t), s = a.getDay(), i = (s < n ? 7 : 0) + s - n;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function F(t) {
  return _(t, { weekStartsOn: 1 });
}
function _e(t) {
  const r = p(t), e = r.getFullYear(), n = g(t, 0);
  n.setFullYear(e + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const a = F(n), s = g(t, 0);
  s.setFullYear(e, 0, 4), s.setHours(0, 0, 0, 0);
  const i = F(s);
  return r.getTime() >= a.getTime() ? e + 1 : r.getTime() >= i.getTime() ? e : e - 1;
}
function fe(t) {
  const r = p(t);
  return r.setHours(0, 0, 0, 0), r;
}
function A(t) {
  const r = p(t), e = new Date(
    Date.UTC(
      r.getFullYear(),
      r.getMonth(),
      r.getDate(),
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    )
  );
  return e.setUTCFullYear(r.getFullYear()), +t - +e;
}
function et(t, r) {
  const e = fe(t), n = fe(r), a = +e - A(e), s = +n - A(n);
  return Math.round((a - s) / Be);
}
function tt(t) {
  const r = _e(t), e = g(t, 0);
  return e.setFullYear(r, 0, 4), e.setHours(0, 0, 0, 0), F(e);
}
function nt(t) {
  return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function G(t) {
  if (!nt(t) && typeof t != "number")
    return !1;
  const r = p(t);
  return !isNaN(Number(r));
}
function rt(t) {
  const r = p(t), e = g(t, 0);
  return e.setFullYear(r.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
const at = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, st = (t, r, e) => {
  let n;
  const a = at[t];
  return typeof a == "string" ? n = a : r === 1 ? n = a.one : n = a.other.replace("{{count}}", r.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + n : n + " ago" : n;
};
function U(t) {
  return (r = {}) => {
    const e = r.width ? String(r.width) : t.defaultWidth;
    return t.formats[e] || t.formats[t.defaultWidth];
  };
}
const it = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ot = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ut = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ct = {
  date: U({
    formats: it,
    defaultWidth: "full"
  }),
  time: U({
    formats: ot,
    defaultWidth: "full"
  }),
  dateTime: U({
    formats: ut,
    defaultWidth: "full"
  })
}, lt = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, dt = (t, r, e, n) => lt[t];
function R(t) {
  return (r, e) => {
    const n = e != null && e.context ? String(e.context) : "standalone";
    let a;
    if (n === "formatting" && t.formattingValues) {
      const i = t.defaultFormattingWidth || t.defaultWidth, u = e != null && e.width ? String(e.width) : i;
      a = t.formattingValues[u] || t.formattingValues[i];
    } else {
      const i = t.defaultWidth, u = e != null && e.width ? String(e.width) : t.defaultWidth;
      a = t.values[u] || t.values[i];
    }
    const s = t.argumentCallback ? t.argumentCallback(r) : r;
    return a[s];
  };
}
const ft = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ht = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, mt = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, wt = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, gt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, yt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, bt = (t, r) => {
  const e = Number(t), n = e % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return e + "st";
      case 2:
        return e + "nd";
      case 3:
        return e + "rd";
    }
  return e + "th";
}, xt = {
  ordinalNumber: bt,
  era: R({
    values: ft,
    defaultWidth: "wide"
  }),
  quarter: R({
    values: ht,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: R({
    values: mt,
    defaultWidth: "wide"
  }),
  day: R({
    values: wt,
    defaultWidth: "wide"
  }),
  dayPeriod: R({
    values: gt,
    defaultWidth: "wide",
    formattingValues: yt,
    defaultFormattingWidth: "wide"
  })
};
function X(t) {
  return (r, e = {}) => {
    const n = e.width, a = n && t.matchPatterns[n] || t.matchPatterns[t.defaultMatchWidth], s = r.match(a);
    if (!s)
      return null;
    const i = s[0], u = n && t.parsePatterns[n] || t.parsePatterns[t.defaultParseWidth], l = Array.isArray(u) ? Dt(u, (T) => T.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      pt(u, (T) => T.test(i))
    );
    let d;
    d = t.valueCallback ? t.valueCallback(l) : l, d = e.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      e.valueCallback(d)
    ) : d;
    const D = r.slice(i.length);
    return { value: d, rest: D };
  };
}
function pt(t, r) {
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e) && r(t[e]))
      return e;
}
function Dt(t, r) {
  for (let e = 0; e < t.length; e++)
    if (r(t[e]))
      return e;
}
function Tt(t) {
  return (r, e = {}) => {
    const n = r.match(t.matchPattern);
    if (!n) return null;
    const a = n[0], s = r.match(t.parsePattern);
    if (!s) return null;
    let i = t.valueCallback ? t.valueCallback(s[0]) : s[0];
    i = e.valueCallback ? e.valueCallback(i) : i;
    const u = r.slice(a.length);
    return { value: i, rest: u };
  };
}
const Mt = /^(\d+)(th|st|nd|rd)?/i, Ot = /\d+/i, Pt = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Yt = {
  any: [/^b/i, /^(a|c)/i]
}, kt = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Nt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, vt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, It = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Et = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, _t = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Wt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ht = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Ct = {
  ordinalNumber: Tt({
    matchPattern: Mt,
    parsePattern: Ot,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: X({
    matchPatterns: Pt,
    defaultMatchWidth: "wide",
    parsePatterns: Yt,
    defaultParseWidth: "any"
  }),
  quarter: X({
    matchPatterns: kt,
    defaultMatchWidth: "wide",
    parsePatterns: Nt,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: X({
    matchPatterns: vt,
    defaultMatchWidth: "wide",
    parsePatterns: It,
    defaultParseWidth: "any"
  }),
  day: X({
    matchPatterns: Et,
    defaultMatchWidth: "wide",
    parsePatterns: _t,
    defaultParseWidth: "any"
  }),
  dayPeriod: X({
    matchPatterns: Wt,
    defaultMatchWidth: "any",
    parsePatterns: Ht,
    defaultParseWidth: "any"
  })
}, We = {
  code: "en-US",
  formatDistance: st,
  formatLong: ct,
  formatRelative: dt,
  localize: xt,
  match: Ct,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ft(t) {
  const r = p(t);
  return et(r, rt(r)) + 1;
}
function He(t) {
  const r = p(t), e = +F(r) - +tt(r);
  return Math.round(e / Ee) + 1;
}
function se(t, r) {
  var D, T, Y, O;
  const e = p(t), n = e.getFullYear(), a = q(), s = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((T = (D = r == null ? void 0 : r.locale) == null ? void 0 : D.options) == null ? void 0 : T.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((O = (Y = a.locale) == null ? void 0 : Y.options) == null ? void 0 : O.firstWeekContainsDate) ?? 1, i = g(t, 0);
  i.setFullYear(n + 1, 0, s), i.setHours(0, 0, 0, 0);
  const u = _(i, r), l = g(t, 0);
  l.setFullYear(n, 0, s), l.setHours(0, 0, 0, 0);
  const d = _(l, r);
  return e.getTime() >= u.getTime() ? n + 1 : e.getTime() >= d.getTime() ? n : n - 1;
}
function qt(t, r) {
  var u, l, d, D;
  const e = q(), n = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((l = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : l.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((D = (d = e.locale) == null ? void 0 : d.options) == null ? void 0 : D.firstWeekContainsDate) ?? 1, a = se(t, r), s = g(t, 0);
  return s.setFullYear(a, 0, n), s.setHours(0, 0, 0, 0), _(s, r);
}
function Ce(t, r) {
  const e = p(t), n = +_(e, r) - +qt(e, r);
  return Math.round(n / Ee) + 1;
}
function h(t, r) {
  const e = t < 0 ? "-" : "", n = Math.abs(t).toString().padStart(r, "0");
  return e + n;
}
const E = {
  // Year
  y(t, r) {
    const e = t.getFullYear(), n = e > 0 ? e : 1 - e;
    return h(r === "yy" ? n % 100 : n, r.length);
  },
  // Month
  M(t, r) {
    const e = t.getMonth();
    return r === "M" ? String(e + 1) : h(e + 1, 2);
  },
  // Day of the month
  d(t, r) {
    return h(t.getDate(), r.length);
  },
  // AM or PM
  a(t, r) {
    const e = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return e.toUpperCase();
      case "aaa":
        return e;
      case "aaaaa":
        return e[0];
      case "aaaa":
      default:
        return e === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(t, r) {
    return h(t.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(t, r) {
    return h(t.getHours(), r.length);
  },
  // Minute
  m(t, r) {
    return h(t.getMinutes(), r.length);
  },
  // Second
  s(t, r) {
    return h(t.getSeconds(), r.length);
  },
  // Fraction of second
  S(t, r) {
    const e = r.length, n = t.getMilliseconds(), a = Math.trunc(
      n * Math.pow(10, e - 3)
    );
    return h(a, r.length);
  }
}, H = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, he = {
  // Era
  G: function(t, r, e) {
    const n = t.getFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return e.era(n, { width: "abbreviated" });
      case "GGGGG":
        return e.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return e.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(t, r, e) {
    if (r === "yo") {
      const n = t.getFullYear(), a = n > 0 ? n : 1 - n;
      return e.ordinalNumber(a, { unit: "year" });
    }
    return E.y(t, r);
  },
  // Local week-numbering year
  Y: function(t, r, e, n) {
    const a = se(t, n), s = a > 0 ? a : 1 - a;
    if (r === "YY") {
      const i = s % 100;
      return h(i, 2);
    }
    return r === "Yo" ? e.ordinalNumber(s, { unit: "year" }) : h(s, r.length);
  },
  // ISO week-numbering year
  R: function(t, r) {
    const e = _e(t);
    return h(e, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, r) {
    const e = t.getFullYear();
    return h(e, r.length);
  },
  // Quarter
  Q: function(t, r, e) {
    const n = Math.ceil((t.getMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(n);
      case "QQ":
        return h(n, 2);
      case "Qo":
        return e.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return e.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return e.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return e.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, r, e) {
    const n = Math.ceil((t.getMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(n);
      case "qq":
        return h(n, 2);
      case "qo":
        return e.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return e.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return e.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return e.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, r, e) {
    const n = t.getMonth();
    switch (r) {
      case "M":
      case "MM":
        return E.M(t, r);
      case "Mo":
        return e.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return e.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return e.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return e.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(t, r, e) {
    const n = t.getMonth();
    switch (r) {
      case "L":
        return String(n + 1);
      case "LL":
        return h(n + 1, 2);
      case "Lo":
        return e.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return e.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return e.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return e.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(t, r, e, n) {
    const a = Ce(t, n);
    return r === "wo" ? e.ordinalNumber(a, { unit: "week" }) : h(a, r.length);
  },
  // ISO week of year
  I: function(t, r, e) {
    const n = He(t);
    return r === "Io" ? e.ordinalNumber(n, { unit: "week" }) : h(n, r.length);
  },
  // Day of the month
  d: function(t, r, e) {
    return r === "do" ? e.ordinalNumber(t.getDate(), { unit: "date" }) : E.d(t, r);
  },
  // Day of year
  D: function(t, r, e) {
    const n = Ft(t);
    return r === "Do" ? e.ordinalNumber(n, { unit: "dayOfYear" }) : h(n, r.length);
  },
  // Day of week
  E: function(t, r, e) {
    const n = t.getDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return e.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return e.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return e.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return e.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, r, e, n) {
    const a = t.getDay(), s = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(s);
      case "ee":
        return h(s, 2);
      case "eo":
        return e.ordinalNumber(s, { unit: "day" });
      case "eee":
        return e.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return e.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return e.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return e.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, r, e, n) {
    const a = t.getDay(), s = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(s);
      case "cc":
        return h(s, r.length);
      case "co":
        return e.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return e.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return e.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return e.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return e.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, r, e) {
    const n = t.getDay(), a = n === 0 ? 7 : n;
    switch (r) {
      case "i":
        return String(a);
      case "ii":
        return h(a, r.length);
      case "io":
        return e.ordinalNumber(a, { unit: "day" });
      case "iii":
        return e.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return e.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return e.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return e.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, r, e) {
    const a = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, r, e) {
    const n = t.getHours();
    let a;
    switch (n === 12 ? a = H.noon : n === 0 ? a = H.midnight : a = n / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, r, e) {
    const n = t.getHours();
    let a;
    switch (n >= 17 ? a = H.evening : n >= 12 ? a = H.afternoon : n >= 4 ? a = H.morning : a = H.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, r, e) {
    if (r === "ho") {
      let n = t.getHours() % 12;
      return n === 0 && (n = 12), e.ordinalNumber(n, { unit: "hour" });
    }
    return E.h(t, r);
  },
  // Hour [0-23]
  H: function(t, r, e) {
    return r === "Ho" ? e.ordinalNumber(t.getHours(), { unit: "hour" }) : E.H(t, r);
  },
  // Hour [0-11]
  K: function(t, r, e) {
    const n = t.getHours() % 12;
    return r === "Ko" ? e.ordinalNumber(n, { unit: "hour" }) : h(n, r.length);
  },
  // Hour [1-24]
  k: function(t, r, e) {
    let n = t.getHours();
    return n === 0 && (n = 24), r === "ko" ? e.ordinalNumber(n, { unit: "hour" }) : h(n, r.length);
  },
  // Minute
  m: function(t, r, e) {
    return r === "mo" ? e.ordinalNumber(t.getMinutes(), { unit: "minute" }) : E.m(t, r);
  },
  // Second
  s: function(t, r, e) {
    return r === "so" ? e.ordinalNumber(t.getSeconds(), { unit: "second" }) : E.s(t, r);
  },
  // Fraction of second
  S: function(t, r) {
    return E.S(t, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, r, e) {
    const n = t.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (r) {
      case "X":
        return we(n);
      case "XXXX":
      case "XX":
        return W(n);
      case "XXXXX":
      case "XXX":
      default:
        return W(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, r, e) {
    const n = t.getTimezoneOffset();
    switch (r) {
      case "x":
        return we(n);
      case "xxxx":
      case "xx":
        return W(n);
      case "xxxxx":
      case "xxx":
      default:
        return W(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, r, e) {
    const n = t.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + me(n, ":");
      case "OOOO":
      default:
        return "GMT" + W(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, r, e) {
    const n = t.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + me(n, ":");
      case "zzzz":
      default:
        return "GMT" + W(n, ":");
    }
  },
  // Seconds timestamp
  t: function(t, r, e) {
    const n = Math.trunc(t.getTime() / 1e3);
    return h(n, r.length);
  },
  // Milliseconds timestamp
  T: function(t, r, e) {
    const n = t.getTime();
    return h(n, r.length);
  }
};
function me(t, r = "") {
  const e = t > 0 ? "-" : "+", n = Math.abs(t), a = Math.trunc(n / 60), s = n % 60;
  return s === 0 ? e + String(a) : e + String(a) + r + h(s, 2);
}
function we(t, r) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + h(Math.abs(t) / 60, 2) : W(t, r);
}
function W(t, r = "") {
  const e = t > 0 ? "-" : "+", n = Math.abs(t), a = h(Math.trunc(n / 60), 2), s = h(n % 60, 2);
  return e + a + r + s;
}
const ge = (t, r) => {
  switch (t) {
    case "P":
      return r.date({ width: "short" });
    case "PP":
      return r.date({ width: "medium" });
    case "PPP":
      return r.date({ width: "long" });
    case "PPPP":
    default:
      return r.date({ width: "full" });
  }
}, Fe = (t, r) => {
  switch (t) {
    case "p":
      return r.time({ width: "short" });
    case "pp":
      return r.time({ width: "medium" });
    case "ppp":
      return r.time({ width: "long" });
    case "pppp":
    default:
      return r.time({ width: "full" });
  }
}, Lt = (t, r) => {
  const e = t.match(/(P+)(p+)?/) || [], n = e[1], a = e[2];
  if (!a)
    return ge(t, r);
  let s;
  switch (n) {
    case "P":
      s = r.dateTime({ width: "short" });
      break;
    case "PP":
      s = r.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = r.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = r.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", ge(n, r)).replace("{{time}}", Fe(a, r));
}, ee = {
  p: Fe,
  P: Lt
}, Qt = /^D+$/, $t = /^Y+$/, Rt = ["D", "DD", "YY", "YYYY"];
function qe(t) {
  return Qt.test(t);
}
function Le(t) {
  return $t.test(t);
}
function te(t, r, e) {
  const n = Xt(t, r, e);
  if (console.warn(n), Rt.includes(t)) throw new RangeError(n);
}
function Xt(t, r, e) {
  const n = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${r}\`) for formatting ${n} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const At = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, zt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Zt = /^'([^]*?)'?$/, Gt = /''/g, jt = /[a-zA-Z]/;
function Ut(t, r, e) {
  var D, T, Y, O, I, L, Q, $;
  const n = q(), a = (e == null ? void 0 : e.locale) ?? n.locale ?? We, s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((T = (D = e == null ? void 0 : e.locale) == null ? void 0 : D.options) == null ? void 0 : T.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((O = (Y = n.locale) == null ? void 0 : Y.options) == null ? void 0 : O.firstWeekContainsDate) ?? 1, i = (e == null ? void 0 : e.weekStartsOn) ?? ((L = (I = e == null ? void 0 : e.locale) == null ? void 0 : I.options) == null ? void 0 : L.weekStartsOn) ?? n.weekStartsOn ?? (($ = (Q = n.locale) == null ? void 0 : Q.options) == null ? void 0 : $.weekStartsOn) ?? 0, u = p(t);
  if (!G(u))
    throw new RangeError("Invalid time value");
  let l = r.match(zt).map((M) => {
    const c = M[0];
    if (c === "p" || c === "P") {
      const m = ee[c];
      return m(M, a.formatLong);
    }
    return M;
  }).join("").match(At).map((M) => {
    if (M === "''")
      return { isToken: !1, value: "'" };
    const c = M[0];
    if (c === "'")
      return { isToken: !1, value: Bt(M) };
    if (he[c])
      return { isToken: !0, value: M };
    if (c.match(jt))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + c + "`"
      );
    return { isToken: !1, value: M };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(u, l));
  const d = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: a
  };
  return l.map((M) => {
    if (!M.isToken) return M.value;
    const c = M.value;
    (!(e != null && e.useAdditionalWeekYearTokens) && Le(c) || !(e != null && e.useAdditionalDayOfYearTokens) && qe(c)) && te(c, r, String(t));
    const m = he[c[0]];
    return m(u, c, a.localize, d);
  }).join("");
}
function Bt(t) {
  const r = t.match(Zt);
  return r ? r[1].replace(Gt, "'") : t;
}
function Vt() {
  return Object.assign({}, q());
}
function Jt(t) {
  let e = p(t).getDay();
  return e === 0 && (e = 7), e;
}
function Kt(t, r) {
  const e = r instanceof Date ? g(r, 0) : new r(0);
  return e.setFullYear(
    t.getFullYear(),
    t.getMonth(),
    t.getDate()
  ), e.setHours(
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ), e;
}
const St = 10;
class Qe {
  constructor() {
    o(this, "subPriority", 0);
  }
  validate(r, e) {
    return !0;
  }
}
class en extends Qe {
  constructor(r, e, n, a, s) {
    super(), this.value = r, this.validateValue = e, this.setValue = n, this.priority = a, s && (this.subPriority = s);
  }
  validate(r, e) {
    return this.validateValue(r, this.value, e);
  }
  set(r, e, n) {
    return this.setValue(r, e, this.value, n);
  }
}
class tn extends Qe {
  constructor() {
    super(...arguments);
    o(this, "priority", St);
    o(this, "subPriority", -1);
  }
  set(e, n) {
    return n.timestampIsSet ? e : g(e, Kt(e, Date));
  }
}
class f {
  run(r, e, n, a) {
    const s = this.parse(r, e, n, a);
    return s ? {
      setter: new en(
        s.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: s.rest
    } : null;
  }
  validate(r, e, n) {
    return !0;
  }
}
class nn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 140);
    o(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(e, n, a) {
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(e, { width: "abbreviated" }) || a.era(e, { width: "narrow" });
      case "GGGGG":
        return a.era(e, { width: "narrow" });
      case "GGGG":
      default:
        return a.era(e, { width: "wide" }) || a.era(e, { width: "abbreviated" }) || a.era(e, { width: "narrow" });
    }
  }
  set(e, n, a) {
    return n.era = a, e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
const b = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, N = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function x(t, r) {
  return t && {
    value: r(t.value),
    rest: t.rest
  };
}
function w(t, r) {
  const e = r.match(t);
  return e ? {
    value: parseInt(e[0], 10),
    rest: r.slice(e[0].length)
  } : null;
}
function v(t, r) {
  const e = r.match(t);
  if (!e)
    return null;
  if (e[0] === "Z")
    return {
      value: 0,
      rest: r.slice(1)
    };
  const n = e[1] === "+" ? 1 : -1, a = e[2] ? parseInt(e[2], 10) : 0, s = e[3] ? parseInt(e[3], 10) : 0, i = e[5] ? parseInt(e[5], 10) : 0;
  return {
    value: n * (a * Je + s * Ve + i * Ke),
    rest: r.slice(e[0].length)
  };
}
function $e(t) {
  return w(b.anyDigitsSigned, t);
}
function y(t, r) {
  switch (t) {
    case 1:
      return w(b.singleDigit, r);
    case 2:
      return w(b.twoDigits, r);
    case 3:
      return w(b.threeDigits, r);
    case 4:
      return w(b.fourDigits, r);
    default:
      return w(new RegExp("^\\d{1," + t + "}"), r);
  }
}
function z(t, r) {
  switch (t) {
    case 1:
      return w(b.singleDigitSigned, r);
    case 2:
      return w(b.twoDigitsSigned, r);
    case 3:
      return w(b.threeDigitsSigned, r);
    case 4:
      return w(b.fourDigitsSigned, r);
    default:
      return w(new RegExp("^-?\\d{1," + t + "}"), r);
  }
}
function ie(t) {
  switch (t) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Re(t, r) {
  const e = r > 0, n = e ? r : 1 - r;
  let a;
  if (n <= 50)
    a = t || 100;
  else {
    const s = n + 50, i = Math.trunc(s / 100) * 100, u = t >= s % 100;
    a = t + i - (u ? 100 : 0);
  }
  return e ? a : 1 - a;
}
function Xe(t) {
  return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
}
class rn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, n, a) {
    const s = (i) => ({
      year: i,
      isTwoDigitYear: n === "yy"
    });
    switch (n) {
      case "y":
        return x(y(4, e), s);
      case "yo":
        return x(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          s
        );
      default:
        return x(y(n.length, e), s);
    }
  }
  validate(e, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(e, n, a) {
    const s = e.getFullYear();
    if (a.isTwoDigitYear) {
      const u = Re(
        a.year,
        s
      );
      return e.setFullYear(u, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const i = !("era" in n) || n.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class an extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, n, a) {
    const s = (i) => ({
      year: i,
      isTwoDigitYear: n === "YY"
    });
    switch (n) {
      case "Y":
        return x(y(4, e), s);
      case "Yo":
        return x(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          s
        );
      default:
        return x(y(n.length, e), s);
    }
  }
  validate(e, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(e, n, a, s) {
    const i = se(e, s);
    if (a.isTwoDigitYear) {
      const l = Re(
        a.year,
        i
      );
      return e.setFullYear(
        l,
        0,
        s.firstWeekContainsDate
      ), e.setHours(0, 0, 0, 0), _(e, s);
    }
    const u = !("era" in n) || n.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(u, 0, s.firstWeekContainsDate), e.setHours(0, 0, 0, 0), _(e, s);
  }
}
class sn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, n) {
    return z(n === "R" ? 4 : n.length, e);
  }
  set(e, n, a) {
    const s = g(e, 0);
    return s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0), F(s);
  }
}
class on extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, n) {
    return z(n === "u" ? 4 : n.length, e);
  }
  set(e, n, a) {
    return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class un extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 120);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, n, a) {
    switch (n) {
      case "Q":
      case "QQ":
        return y(n.length, e);
      case "Qo":
        return a.ordinalNumber(e, { unit: "quarter" });
      case "QQQ":
        return a.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(e, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 4;
  }
  set(e, n, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class cn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 120);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, n, a) {
    switch (n) {
      case "q":
      case "qq":
        return y(n.length, e);
      case "qo":
        return a.ordinalNumber(e, { unit: "quarter" });
      case "qqq":
        return a.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(e, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 4;
  }
  set(e, n, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class ln extends f {
  constructor() {
    super(...arguments);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    o(this, "priority", 110);
  }
  parse(e, n, a) {
    const s = (i) => i - 1;
    switch (n) {
      case "M":
        return x(
          w(b.month, e),
          s
        );
      case "MM":
        return x(y(2, e), s);
      case "Mo":
        return x(
          a.ordinalNumber(e, {
            unit: "month"
          }),
          s
        );
      case "MMM":
        return a.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(e, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return a.month(e, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(e, { width: "wide", context: "formatting" }) || a.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 11;
  }
  set(e, n, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class dn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 110);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, n, a) {
    const s = (i) => i - 1;
    switch (n) {
      case "L":
        return x(
          w(b.month, e),
          s
        );
      case "LL":
        return x(y(2, e), s);
      case "Lo":
        return x(
          a.ordinalNumber(e, {
            unit: "month"
          }),
          s
        );
      case "LLL":
        return a.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(e, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return a.month(e, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(e, { width: "wide", context: "standalone" }) || a.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 11;
  }
  set(e, n, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
function fn(t, r, e) {
  const n = p(t), a = Ce(n, e) - r;
  return n.setDate(n.getDate() - a * 7), n;
}
class hn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 100);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, n, a) {
    switch (n) {
      case "w":
        return w(b.week, e);
      case "wo":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return y(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 53;
  }
  set(e, n, a, s) {
    return _(fn(e, a, s), s);
  }
}
function mn(t, r) {
  const e = p(t), n = He(e) - r;
  return e.setDate(e.getDate() - n * 7), e;
}
class wn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 100);
    o(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, n, a) {
    switch (n) {
      case "I":
        return w(b.week, e);
      case "Io":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return y(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 53;
  }
  set(e, n, a) {
    return F(mn(e, a));
  }
}
const gn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], yn = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class bn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "subPriority", 1);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, n, a) {
    switch (n) {
      case "d":
        return w(b.date, e);
      case "do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return y(n.length, e);
    }
  }
  validate(e, n) {
    const a = e.getFullYear(), s = Xe(a), i = e.getMonth();
    return s ? n >= 1 && n <= yn[i] : n >= 1 && n <= gn[i];
  }
  set(e, n, a) {
    return e.setDate(a), e.setHours(0, 0, 0, 0), e;
  }
}
class xn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "subpriority", 1);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, n, a) {
    switch (n) {
      case "D":
      case "DD":
        return w(b.dayOfYear, e);
      case "Do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return y(n.length, e);
    }
  }
  validate(e, n) {
    const a = e.getFullYear();
    return Xe(a) ? n >= 1 && n <= 366 : n >= 1 && n <= 365;
  }
  set(e, n, a) {
    return e.setMonth(0, a), e.setHours(0, 0, 0, 0), e;
  }
}
function oe(t, r, e) {
  var T, Y, O, I;
  const n = q(), a = (e == null ? void 0 : e.weekStartsOn) ?? ((Y = (T = e == null ? void 0 : e.locale) == null ? void 0 : T.options) == null ? void 0 : Y.weekStartsOn) ?? n.weekStartsOn ?? ((I = (O = n.locale) == null ? void 0 : O.options) == null ? void 0 : I.weekStartsOn) ?? 0, s = p(t), i = s.getDay(), l = (r % 7 + 7) % 7, d = 7 - a, D = r < 0 || r > 6 ? r - (i + d) % 7 : (l + d) % 7 - (i + d) % 7;
  return Ie(s, D);
}
class pn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(e, n, a) {
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return a.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return a.day(e, { width: "wide", context: "formatting" }) || a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 6;
  }
  set(e, n, a, s) {
    return e = oe(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
class Dn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, n, a, s) {
    const i = (u) => {
      const l = Math.floor((u - 1) / 7) * 7;
      return (u + s.weekStartsOn + 6) % 7 + l;
    };
    switch (n) {
      case "e":
      case "ee":
        return x(y(n.length, e), i);
      case "eo":
        return x(
          a.ordinalNumber(e, {
            unit: "day"
          }),
          i
        );
      case "eee":
        return a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "eeeee":
        return a.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return a.day(e, { width: "wide", context: "formatting" }) || a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 6;
  }
  set(e, n, a, s) {
    return e = oe(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
class Tn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(e, n, a, s) {
    const i = (u) => {
      const l = Math.floor((u - 1) / 7) * 7;
      return (u + s.weekStartsOn + 6) % 7 + l;
    };
    switch (n) {
      case "c":
      case "cc":
        return x(y(n.length, e), i);
      case "co":
        return x(
          a.ordinalNumber(e, {
            unit: "day"
          }),
          i
        );
      case "ccc":
        return a.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
      case "ccccc":
        return a.day(e, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return a.day(e, { width: "wide", context: "standalone" }) || a.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 6;
  }
  set(e, n, a, s) {
    return e = oe(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
function Mn(t, r) {
  const e = p(t), n = Jt(e), a = r - n;
  return Ie(e, a);
}
class On extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, n, a) {
    const s = (i) => i === 0 ? 7 : i;
    switch (n) {
      case "i":
      case "ii":
        return y(n.length, e);
      case "io":
        return a.ordinalNumber(e, { unit: "day" });
      case "iii":
        return x(
          a.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiii":
        return x(
          a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiiii":
        return x(
          a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiii":
      default:
        return x(
          a.day(e, {
            width: "wide",
            context: "formatting"
          }) || a.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 7;
  }
  set(e, n, a) {
    return e = Mn(e, a), e.setHours(0, 0, 0, 0), e;
  }
}
class Pn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(e, n, a) {
    switch (n) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, n, a) {
    return e.setHours(ie(a), 0, 0, 0), e;
  }
}
class Yn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(e, n, a) {
    switch (n) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, n, a) {
    return e.setHours(ie(a), 0, 0, 0), e;
  }
}
class kn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(e, n, a) {
    switch (n) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, n, a) {
    return e.setHours(ie(a), 0, 0, 0), e;
  }
}
class Nn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(e, n, a) {
    switch (n) {
      case "h":
        return w(b.hour12h, e);
      case "ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return y(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 12;
  }
  set(e, n, a) {
    const s = e.getHours() >= 12;
    return s && a < 12 ? e.setHours(a + 12, 0, 0, 0) : !s && a === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class vn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(e, n, a) {
    switch (n) {
      case "H":
        return w(b.hour23h, e);
      case "Ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return y(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 23;
  }
  set(e, n, a) {
    return e.setHours(a, 0, 0, 0), e;
  }
}
class In extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(e, n, a) {
    switch (n) {
      case "K":
        return w(b.hour11h, e);
      case "Ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return y(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 11;
  }
  set(e, n, a) {
    return e.getHours() >= 12 && a < 12 ? e.setHours(a + 12, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class En extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(e, n, a) {
    switch (n) {
      case "k":
        return w(b.hour24h, e);
      case "ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return y(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 24;
  }
  set(e, n, a) {
    const s = a <= 24 ? a % 24 : a;
    return e.setHours(s, 0, 0, 0), e;
  }
}
class _n extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 60);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, n, a) {
    switch (n) {
      case "m":
        return w(b.minute, e);
      case "mo":
        return a.ordinalNumber(e, { unit: "minute" });
      default:
        return y(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 59;
  }
  set(e, n, a) {
    return e.setMinutes(a, 0, 0), e;
  }
}
class Wn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 50);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, n, a) {
    switch (n) {
      case "s":
        return w(b.second, e);
      case "so":
        return a.ordinalNumber(e, { unit: "second" });
      default:
        return y(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 59;
  }
  set(e, n, a) {
    return e.setSeconds(a, 0), e;
  }
}
class Hn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 30);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, n) {
    const a = (s) => Math.trunc(s * Math.pow(10, -n.length + 3));
    return x(y(n.length, e), a);
  }
  set(e, n, a) {
    return e.setMilliseconds(a), e;
  }
}
class Cn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, n) {
    switch (n) {
      case "X":
        return v(
          N.basicOptionalMinutes,
          e
        );
      case "XX":
        return v(N.basic, e);
      case "XXXX":
        return v(
          N.basicOptionalSeconds,
          e
        );
      case "XXXXX":
        return v(
          N.extendedOptionalSeconds,
          e
        );
      case "XXX":
      default:
        return v(N.extended, e);
    }
  }
  set(e, n, a) {
    return n.timestampIsSet ? e : g(
      e,
      e.getTime() - A(e) - a
    );
  }
}
class Fn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, n) {
    switch (n) {
      case "x":
        return v(
          N.basicOptionalMinutes,
          e
        );
      case "xx":
        return v(N.basic, e);
      case "xxxx":
        return v(
          N.basicOptionalSeconds,
          e
        );
      case "xxxxx":
        return v(
          N.extendedOptionalSeconds,
          e
        );
      case "xxx":
      default:
        return v(N.extended, e);
    }
  }
  set(e, n, a) {
    return n.timestampIsSet ? e : g(
      e,
      e.getTime() - A(e) - a
    );
  }
}
class qn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 40);
    o(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return $e(e);
  }
  set(e, n, a) {
    return [g(e, a * 1e3), { timestampIsSet: !0 }];
  }
}
class Ln extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 20);
    o(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return $e(e);
  }
  set(e, n, a) {
    return [g(e, a), { timestampIsSet: !0 }];
  }
}
const Qn = {
  G: new nn(),
  y: new rn(),
  Y: new an(),
  R: new sn(),
  u: new on(),
  Q: new un(),
  q: new cn(),
  M: new ln(),
  L: new dn(),
  w: new hn(),
  I: new wn(),
  d: new bn(),
  D: new xn(),
  E: new pn(),
  e: new Dn(),
  c: new Tn(),
  i: new On(),
  a: new Pn(),
  b: new Yn(),
  B: new kn(),
  h: new Nn(),
  H: new vn(),
  K: new In(),
  k: new En(),
  m: new _n(),
  s: new Wn(),
  S: new Hn(),
  X: new Cn(),
  x: new Fn(),
  t: new qn(),
  T: new Ln()
}, $n = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Rn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Xn = /^'([^]*?)'?$/, An = /''/g, zn = /\S/, Zn = /[a-zA-Z]/;
function ne(t, r, e, n) {
  var L, Q, $, M;
  const a = Vt(), s = a.locale ?? We, i = a.firstWeekContainsDate ?? ((Q = (L = a.locale) == null ? void 0 : L.options) == null ? void 0 : Q.firstWeekContainsDate) ?? 1, u = a.weekStartsOn ?? ((M = ($ = a.locale) == null ? void 0 : $.options) == null ? void 0 : M.weekStartsOn) ?? 0;
  if (r === "")
    return t === "" ? p(e) : g(e, NaN);
  const l = {
    firstWeekContainsDate: i,
    weekStartsOn: u,
    locale: s
  }, d = [new tn()], D = r.match(Rn).map((c) => {
    const m = c[0];
    if (m in ee) {
      const k = ee[m];
      return k(c, s.formatLong);
    }
    return c;
  }).join("").match($n), T = [];
  for (let c of D) {
    Le(c) && te(c, r, t), qe(c) && te(c, r, t);
    const m = c[0], k = Qn[m];
    if (k) {
      const { incompatibleTokens: ce } = k;
      if (Array.isArray(ce)) {
        const le = T.find(
          (de) => ce.includes(de.token) || de.token === m
        );
        if (le)
          throw new RangeError(
            `The format string mustn't contain \`${le.fullToken}\` and \`${c}\` at the same time`
          );
      } else if (k.incompatibleTokens === "*" && T.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${c}\` and any other token at the same time`
        );
      T.push({ token: m, fullToken: c });
      const j = k.run(
        t,
        c,
        s.match,
        l
      );
      if (!j)
        return g(e, NaN);
      d.push(j.setter), t = j.rest;
    } else {
      if (m.match(Zn))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + m + "`"
        );
      if (c === "''" ? c = "'" : m === "'" && (c = Gn(c)), t.indexOf(c) === 0)
        t = t.slice(c.length);
      else
        return g(e, NaN);
    }
  }
  if (t.length > 0 && zn.test(t))
    return g(e, NaN);
  const Y = d.map((c) => c.priority).sort((c, m) => m - c).filter((c, m, k) => k.indexOf(c) === m).map(
    (c) => d.filter((m) => m.priority === c).sort((m, k) => k.subPriority - m.subPriority)
  ).map((c) => c[0]);
  let O = p(e);
  if (isNaN(O.getTime()))
    return g(e, NaN);
  const I = {};
  for (const c of Y) {
    if (!c.validate(O, l))
      return g(e, NaN);
    const m = c.set(O, I, l);
    Array.isArray(m) ? (O = m[0], Object.assign(I, m[1])) : O = m;
  }
  return g(e, O);
}
function Gn(t) {
  return t.match(Xn)[1].replace(An, "'");
}
function jn(t, r, e) {
  return G(ne(t, r, /* @__PURE__ */ new Date()));
}
function ye(t, r, e) {
  const n = Vn(t, e.timeZone, e.locale);
  return "formatToParts" in n ? Un(n, r) : Bn(n, r);
}
function Un(t, r) {
  const e = t.formatToParts(r);
  for (let n = e.length - 1; n >= 0; --n)
    if (e[n].type === "timeZoneName")
      return e[n].value;
}
function Bn(t, r) {
  const e = t.format(r).replace(/\u200E/g, ""), n = / [\w-+ ]+$/.exec(e);
  return n ? n[0].substr(1) : "";
}
function Vn(t, r, e) {
  return new Intl.DateTimeFormat(e ? [e.code, "en-US"] : void 0, {
    timeZone: r,
    timeZoneName: t
  });
}
function Jn(t, r) {
  const e = tr(r);
  return "formatToParts" in e ? Sn(e, t) : er(e, t);
}
const Kn = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Sn(t, r) {
  try {
    const e = t.formatToParts(r), n = [];
    for (let a = 0; a < e.length; a++) {
      const s = Kn[e[a].type];
      s !== void 0 && (n[s] = parseInt(e[a].value, 10));
    }
    return n;
  } catch (e) {
    if (e instanceof RangeError)
      return [NaN];
    throw e;
  }
}
function er(t, r) {
  const e = t.format(r), n = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(e);
  return [
    parseInt(n[3], 10),
    parseInt(n[1], 10),
    parseInt(n[2], 10),
    parseInt(n[4], 10),
    parseInt(n[5], 10),
    parseInt(n[6], 10)
  ];
}
const B = {};
function tr(t) {
  if (!B[t]) {
    const r = new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), e = r === "06/25/2014, 00:00:00" || r === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    B[t] = e ? new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: t,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: t,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return B[t];
}
function Ae(t, r, e, n, a, s, i) {
  const u = /* @__PURE__ */ new Date(0);
  return u.setUTCFullYear(t, r, e), u.setUTCHours(n, a, s, i), u;
}
const be = 36e5, nr = 6e4, V = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function ue(t, r, e) {
  if (!t)
    return 0;
  let n = V.timezoneZ.exec(t);
  if (n)
    return 0;
  let a, s;
  if (n = V.timezoneHH.exec(t), n)
    return a = parseInt(n[1], 10), xe(a) ? -(a * be) : NaN;
  if (n = V.timezoneHHMM.exec(t), n) {
    a = parseInt(n[2], 10);
    const i = parseInt(n[3], 10);
    return xe(a, i) ? (s = Math.abs(a) * be + i * nr, n[1] === "+" ? -s : s) : NaN;
  }
  if (sr(t)) {
    r = new Date(r || Date.now());
    const i = e ? r : rr(r), u = re(i, t);
    return -(e ? u : ar(r, u, t));
  }
  return NaN;
}
function rr(t) {
  return Ae(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
}
function re(t, r) {
  const e = Jn(t, r), n = Ae(e[0], e[1] - 1, e[2], e[3] % 24, e[4], e[5], 0).getTime();
  let a = t.getTime();
  const s = a % 1e3;
  return a -= s >= 0 ? s : 1e3 + s, n - a;
}
function ar(t, r, e) {
  let a = t.getTime() - r;
  const s = re(new Date(a), e);
  if (r === s)
    return r;
  a -= s - r;
  const i = re(new Date(a), e);
  return s === i ? s : Math.max(s, i);
}
function xe(t, r) {
  return -23 <= t && t <= 23 && (r == null || 0 <= r && r <= 59);
}
const pe = {};
function sr(t) {
  if (pe[t])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: t }), pe[t] = !0, !0;
  } catch {
    return !1;
  }
}
const ir = 60 * 1e3, or = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, r, e) {
    const n = J(e.timeZone, t);
    if (n === 0)
      return "Z";
    switch (r) {
      case "X":
        return De(n);
      case "XXXX":
      case "XX":
        return C(n);
      case "XXXXX":
      case "XXX":
      default:
        return C(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, r, e) {
    const n = J(e.timeZone, t);
    switch (r) {
      case "x":
        return De(n);
      case "xxxx":
      case "xx":
        return C(n);
      case "xxxxx":
      case "xxx":
      default:
        return C(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, r, e) {
    const n = J(e.timeZone, t);
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ur(n, ":");
      case "OOOO":
      default:
        return "GMT" + C(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, r, e) {
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return ye("short", t, e);
      case "zzzz":
      default:
        return ye("long", t, e);
    }
  }
};
function J(t, r) {
  const e = t ? ue(t, r, !0) / ir : (r == null ? void 0 : r.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(e))
    throw new RangeError("Invalid time zone specified: " + t);
  return e;
}
function Z(t, r) {
  const e = t < 0 ? "-" : "";
  let n = Math.abs(t).toString();
  for (; n.length < r; )
    n = "0" + n;
  return e + n;
}
function C(t, r = "") {
  const e = t > 0 ? "-" : "+", n = Math.abs(t), a = Z(Math.floor(n / 60), 2), s = Z(Math.floor(n % 60), 2);
  return e + a + r + s;
}
function De(t, r) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + Z(Math.abs(t) / 60, 2) : C(t, r);
}
function ur(t, r = "") {
  const e = t > 0 ? "-" : "+", n = Math.abs(t), a = Math.floor(n / 60), s = n % 60;
  return s === 0 ? e + String(a) : e + String(a) + r + Z(s, 2);
}
function Te(t) {
  const r = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return r.setUTCFullYear(t.getFullYear()), +t - +r;
}
const cr = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, K = 36e5, Me = 6e4, lr = 2, P = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: cr
};
function ze(t, r = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  const e = r.additionalDigits == null ? lr : Number(r.additionalDigits);
  if (e !== 2 && e !== 1 && e !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]")
    return new Date(t.getTime());
  if (typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]")
    return new Date(t);
  if (Object.prototype.toString.call(t) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const n = dr(t), { year: a, restDateString: s } = fr(n.date, e), i = hr(s, a);
  if (i === null || isNaN(i.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (i) {
    const u = i.getTime();
    let l = 0, d;
    if (n.time && (l = mr(n.time), l === null || isNaN(l)))
      return /* @__PURE__ */ new Date(NaN);
    if (n.timeZone || r.timeZone) {
      if (d = ue(n.timeZone || r.timeZone, new Date(u + l)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = Te(new Date(u + l)), d = Te(new Date(u + l + d));
    return new Date(u + l + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function dr(t) {
  const r = {};
  let e = P.dateTimePattern.exec(t), n;
  if (e ? (r.date = e[1], n = e[3]) : (e = P.datePattern.exec(t), e ? (r.date = e[1], n = e[2]) : (r.date = null, n = t)), n) {
    const a = P.timeZone.exec(n);
    a ? (r.time = n.replace(a[1], ""), r.timeZone = a[1].trim()) : r.time = n;
  }
  return r;
}
function fr(t, r) {
  if (t) {
    const e = P.YYY[r], n = P.YYYYY[r];
    let a = P.YYYY.exec(t) || n.exec(t);
    if (a) {
      const s = a[1];
      return {
        year: parseInt(s, 10),
        restDateString: t.slice(s.length)
      };
    }
    if (a = P.YY.exec(t) || e.exec(t), a) {
      const s = a[1];
      return {
        year: parseInt(s, 10) * 100,
        restDateString: t.slice(s.length)
      };
    }
  }
  return {
    year: null
  };
}
function hr(t, r) {
  if (r === null)
    return null;
  let e, n, a;
  if (!t || !t.length)
    return e = /* @__PURE__ */ new Date(0), e.setUTCFullYear(r), e;
  let s = P.MM.exec(t);
  if (s)
    return e = /* @__PURE__ */ new Date(0), n = parseInt(s[1], 10) - 1, Pe(r, n) ? (e.setUTCFullYear(r, n), e) : /* @__PURE__ */ new Date(NaN);
  if (s = P.DDD.exec(t), s) {
    e = /* @__PURE__ */ new Date(0);
    const i = parseInt(s[1], 10);
    return yr(r, i) ? (e.setUTCFullYear(r, 0, i), e) : /* @__PURE__ */ new Date(NaN);
  }
  if (s = P.MMDD.exec(t), s) {
    e = /* @__PURE__ */ new Date(0), n = parseInt(s[1], 10) - 1;
    const i = parseInt(s[2], 10);
    return Pe(r, n, i) ? (e.setUTCFullYear(r, n, i), e) : /* @__PURE__ */ new Date(NaN);
  }
  if (s = P.Www.exec(t), s)
    return a = parseInt(s[1], 10) - 1, Ye(a) ? Oe(r, a) : /* @__PURE__ */ new Date(NaN);
  if (s = P.WwwD.exec(t), s) {
    a = parseInt(s[1], 10) - 1;
    const i = parseInt(s[2], 10) - 1;
    return Ye(a, i) ? Oe(r, a, i) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function mr(t) {
  let r, e, n = P.HH.exec(t);
  if (n)
    return r = parseFloat(n[1].replace(",", ".")), S(r) ? r % 24 * K : NaN;
  if (n = P.HHMM.exec(t), n)
    return r = parseInt(n[1], 10), e = parseFloat(n[2].replace(",", ".")), S(r, e) ? r % 24 * K + e * Me : NaN;
  if (n = P.HHMMSS.exec(t), n) {
    r = parseInt(n[1], 10), e = parseInt(n[2], 10);
    const a = parseFloat(n[3].replace(",", "."));
    return S(r, e, a) ? r % 24 * K + e * Me + a * 1e3 : NaN;
  }
  return null;
}
function Oe(t, r, e) {
  r = r || 0, e = e || 0;
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4);
  const a = n.getUTCDay() || 7, s = r * 7 + e + 1 - a;
  return n.setUTCDate(n.getUTCDate() + s), n;
}
const wr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], gr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ze(t) {
  return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
}
function Pe(t, r, e) {
  if (r < 0 || r > 11)
    return !1;
  if (e != null) {
    if (e < 1)
      return !1;
    const n = Ze(t);
    if (n && e > gr[r] || !n && e > wr[r])
      return !1;
  }
  return !0;
}
function yr(t, r) {
  if (r < 1)
    return !1;
  const e = Ze(t);
  return !(e && r > 366 || !e && r > 365);
}
function Ye(t, r) {
  return !(t < 0 || t > 52 || r != null && (r < 0 || r > 6));
}
function S(t, r, e) {
  return !(t < 0 || t >= 25 || r != null && (r < 0 || r >= 60) || e != null && (e < 0 || e >= 60));
}
const br = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function xr(t, r, e = {}) {
  r = String(r);
  const n = r.match(br);
  if (n) {
    const a = ze(e.originalDate || t, e);
    r = n.reduce(function(s, i) {
      if (i[0] === "'")
        return s;
      const u = s.indexOf(i), l = s[u - 1] === "'", d = s.replace(i, "'" + or[i[0]](a, i, e) + "'");
      return l ? d.substring(0, u - 1) + d.substring(u + 1) : d;
    }, r);
  }
  return Ut(t, r, e);
}
function Ge(t, r, e) {
  t = ze(t, e);
  const n = ue(r, t, !0), a = new Date(t.getTime() - n), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), s.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), s;
}
function ke(t, r, e, n) {
  return n = {
    ...n,
    timeZone: r,
    originalDate: t
  }, xr(Ge(t, r, { timeZone: n.timeZone }), e, n);
}
const ae = /* @__PURE__ */ new Date(NaN), pr = () => Intl.DateTimeFormat().resolvedOptions().timeZone, Dr = (t, r) => {
  if (t == null)
    return ae;
  let e;
  return e = Tr(t, r), G(e) ? Ge(e, pr()) : ae;
}, Tr = (t, r) => {
  let e;
  if (t instanceof Date)
    e = t;
  else if (typeof t == "number")
    e = new Date(t);
  else if (typeof t == "string")
    e = Mr(r, t);
  else
    return ae;
  return e;
};
function Mr(t, r) {
  const e = Object.values(t.formats).find((a) => jn(r, a));
  let n;
  return e ? n = ne(r, e, /* @__PURE__ */ new Date()) : n = ne(r, t.constants.serverFormat, /* @__PURE__ */ new Date()), n;
}
const Ne = (t, r, e, n = !1) => {
  const a = Dr(t, e);
  if (!G(a))
    return null;
  const s = e.constants.TZ;
  return n ? ke(a, s, e.constants.serverFormat) : ke(a, s, r);
};
let ve = null;
const Pr = (t) => (ve = Object.entries(t.formats).reduce(
  (r, [e, n]) => ({
    ...r,
    [e]: (a) => Ne(a, n, t),
    [`${e}ToServer`]: (a) => Ne(a, n, t, !0)
  }),
  {}
), ve);
export {
  Pr as default,
  Dr as parseDate
};
