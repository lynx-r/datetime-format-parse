var Ge = Object.defineProperty;
var je = (n, r, e) => r in n ? Ge(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e;
var o = (n, r, e) => je(n, typeof r != "symbol" ? r + "" : r, e);
function x(n) {
  const r = Object.prototype.toString.call(n);
  return n instanceof Date || typeof n == "object" && r === "[object Date]" ? new n.constructor(+n) : typeof n == "number" || r === "[object Number]" || typeof n == "string" || r === "[object String]" ? new Date(n) : /* @__PURE__ */ new Date(NaN);
}
function g(n, r) {
  return n instanceof Date ? new n.constructor(r) : new Date(r);
}
function Ne(n, r) {
  const e = x(n);
  return isNaN(r) ? g(n, NaN) : (r && e.setDate(e.getDate() + r), e);
}
const ve = 6048e5, Ue = 864e5, Be = 6e4, Ve = 36e5, Je = 1e3;
let Ke = {};
function q() {
  return Ke;
}
function _(n, r) {
  var u, l, d, D;
  const e = q(), t = (r == null ? void 0 : r.weekStartsOn) ?? ((l = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : l.weekStartsOn) ?? e.weekStartsOn ?? ((D = (d = e.locale) == null ? void 0 : d.options) == null ? void 0 : D.weekStartsOn) ?? 0, a = x(n), s = a.getDay(), i = (s < t ? 7 : 0) + s - t;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function F(n) {
  return _(n, { weekStartsOn: 1 });
}
function Ie(n) {
  const r = x(n), e = r.getFullYear(), t = g(n, 0);
  t.setFullYear(e + 1, 0, 4), t.setHours(0, 0, 0, 0);
  const a = F(t), s = g(n, 0);
  s.setFullYear(e, 0, 4), s.setHours(0, 0, 0, 0);
  const i = F(s);
  return r.getTime() >= a.getTime() ? e + 1 : r.getTime() >= i.getTime() ? e : e - 1;
}
function de(n) {
  const r = x(n);
  return r.setHours(0, 0, 0, 0), r;
}
function z(n) {
  const r = x(n), e = new Date(
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
  return e.setUTCFullYear(r.getFullYear()), +n - +e;
}
function Se(n, r) {
  const e = de(n), t = de(r), a = +e - z(e), s = +t - z(t);
  return Math.round((a - s) / Ue);
}
function et(n) {
  const r = Ie(n), e = g(n, 0);
  return e.setFullYear(r, 0, 4), e.setHours(0, 0, 0, 0), F(e);
}
function tt(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function j(n) {
  if (!tt(n) && typeof n != "number")
    return !1;
  const r = x(n);
  return !isNaN(Number(r));
}
function nt(n) {
  const r = x(n), e = g(n, 0);
  return e.setFullYear(r.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
const rt = {
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
}, at = (n, r, e) => {
  let t;
  const a = rt[n];
  return typeof a == "string" ? t = a : r === 1 ? t = a.one : t = a.other.replace("{{count}}", r.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + t : t + " ago" : t;
};
function B(n) {
  return (r = {}) => {
    const e = r.width ? String(r.width) : n.defaultWidth;
    return n.formats[e] || n.formats[n.defaultWidth];
  };
}
const st = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, it = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ot = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ut = {
  date: B({
    formats: st,
    defaultWidth: "full"
  }),
  time: B({
    formats: it,
    defaultWidth: "full"
  }),
  dateTime: B({
    formats: ot,
    defaultWidth: "full"
  })
}, ct = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, lt = (n, r, e, t) => ct[n];
function X(n) {
  return (r, e) => {
    const t = e != null && e.context ? String(e.context) : "standalone";
    let a;
    if (t === "formatting" && n.formattingValues) {
      const i = n.defaultFormattingWidth || n.defaultWidth, u = e != null && e.width ? String(e.width) : i;
      a = n.formattingValues[u] || n.formattingValues[i];
    } else {
      const i = n.defaultWidth, u = e != null && e.width ? String(e.width) : n.defaultWidth;
      a = n.values[u] || n.values[i];
    }
    const s = n.argumentCallback ? n.argumentCallback(r) : r;
    return a[s];
  };
}
const dt = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ft = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ht = {
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
}, mt = {
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
}, wt = {
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
}, gt = {
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
}, yt = (n, r) => {
  const e = Number(n), t = e % 100;
  if (t > 20 || t < 10)
    switch (t % 10) {
      case 1:
        return e + "st";
      case 2:
        return e + "nd";
      case 3:
        return e + "rd";
    }
  return e + "th";
}, bt = {
  ordinalNumber: yt,
  era: X({
    values: dt,
    defaultWidth: "wide"
  }),
  quarter: X({
    values: ft,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: X({
    values: ht,
    defaultWidth: "wide"
  }),
  day: X({
    values: mt,
    defaultWidth: "wide"
  }),
  dayPeriod: X({
    values: wt,
    defaultWidth: "wide",
    formattingValues: gt,
    defaultFormattingWidth: "wide"
  })
};
function $(n) {
  return (r, e = {}) => {
    const t = e.width, a = t && n.matchPatterns[t] || n.matchPatterns[n.defaultMatchWidth], s = r.match(a);
    if (!s)
      return null;
    const i = s[0], u = t && n.parsePatterns[t] || n.parsePatterns[n.defaultParseWidth], l = Array.isArray(u) ? xt(u, (T) => T.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      pt(u, (T) => T.test(i))
    );
    let d;
    d = n.valueCallback ? n.valueCallback(l) : l, d = e.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      e.valueCallback(d)
    ) : d;
    const D = r.slice(i.length);
    return { value: d, rest: D };
  };
}
function pt(n, r) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e) && r(n[e]))
      return e;
}
function xt(n, r) {
  for (let e = 0; e < n.length; e++)
    if (r(n[e]))
      return e;
}
function Dt(n) {
  return (r, e = {}) => {
    const t = r.match(n.matchPattern);
    if (!t) return null;
    const a = t[0], s = r.match(n.parsePattern);
    if (!s) return null;
    let i = n.valueCallback ? n.valueCallback(s[0]) : s[0];
    i = e.valueCallback ? e.valueCallback(i) : i;
    const u = r.slice(a.length);
    return { value: i, rest: u };
  };
}
const Tt = /^(\d+)(th|st|nd|rd)?/i, Mt = /\d+/i, Ot = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Pt = {
  any: [/^b/i, /^(a|c)/i]
}, Yt = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, kt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Nt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, vt = {
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
}, It = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Et = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, _t = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Wt = {
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
}, Ht = {
  ordinalNumber: Dt({
    matchPattern: Tt,
    parsePattern: Mt,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: $({
    matchPatterns: Ot,
    defaultMatchWidth: "wide",
    parsePatterns: Pt,
    defaultParseWidth: "any"
  }),
  quarter: $({
    matchPatterns: Yt,
    defaultMatchWidth: "wide",
    parsePatterns: kt,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: $({
    matchPatterns: Nt,
    defaultMatchWidth: "wide",
    parsePatterns: vt,
    defaultParseWidth: "any"
  }),
  day: $({
    matchPatterns: It,
    defaultMatchWidth: "wide",
    parsePatterns: Et,
    defaultParseWidth: "any"
  }),
  dayPeriod: $({
    matchPatterns: _t,
    defaultMatchWidth: "any",
    parsePatterns: Wt,
    defaultParseWidth: "any"
  })
}, Ee = {
  code: "en-US",
  formatDistance: at,
  formatLong: ut,
  formatRelative: lt,
  localize: bt,
  match: Ht,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ct(n) {
  const r = x(n);
  return Se(r, nt(r)) + 1;
}
function _e(n) {
  const r = x(n), e = +F(r) - +et(r);
  return Math.round(e / ve) + 1;
}
function ae(n, r) {
  var D, T, Y, O;
  const e = x(n), t = e.getFullYear(), a = q(), s = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((T = (D = r == null ? void 0 : r.locale) == null ? void 0 : D.options) == null ? void 0 : T.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((O = (Y = a.locale) == null ? void 0 : Y.options) == null ? void 0 : O.firstWeekContainsDate) ?? 1, i = g(n, 0);
  i.setFullYear(t + 1, 0, s), i.setHours(0, 0, 0, 0);
  const u = _(i, r), l = g(n, 0);
  l.setFullYear(t, 0, s), l.setHours(0, 0, 0, 0);
  const d = _(l, r);
  return e.getTime() >= u.getTime() ? t + 1 : e.getTime() >= d.getTime() ? t : t - 1;
}
function Ft(n, r) {
  var u, l, d, D;
  const e = q(), t = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((l = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : l.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((D = (d = e.locale) == null ? void 0 : d.options) == null ? void 0 : D.firstWeekContainsDate) ?? 1, a = ae(n, r), s = g(n, 0);
  return s.setFullYear(a, 0, t), s.setHours(0, 0, 0, 0), _(s, r);
}
function We(n, r) {
  const e = x(n), t = +_(e, r) - +Ft(e, r);
  return Math.round(t / ve) + 1;
}
function h(n, r) {
  const e = n < 0 ? "-" : "", t = Math.abs(n).toString().padStart(r, "0");
  return e + t;
}
const E = {
  // Year
  y(n, r) {
    const e = n.getFullYear(), t = e > 0 ? e : 1 - e;
    return h(r === "yy" ? t % 100 : t, r.length);
  },
  // Month
  M(n, r) {
    const e = n.getMonth();
    return r === "M" ? String(e + 1) : h(e + 1, 2);
  },
  // Day of the month
  d(n, r) {
    return h(n.getDate(), r.length);
  },
  // AM or PM
  a(n, r) {
    const e = n.getHours() / 12 >= 1 ? "pm" : "am";
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
  h(n, r) {
    return h(n.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(n, r) {
    return h(n.getHours(), r.length);
  },
  // Minute
  m(n, r) {
    return h(n.getMinutes(), r.length);
  },
  // Second
  s(n, r) {
    return h(n.getSeconds(), r.length);
  },
  // Fraction of second
  S(n, r) {
    const e = r.length, t = n.getMilliseconds(), a = Math.trunc(
      t * Math.pow(10, e - 3)
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
}, fe = {
  // Era
  G: function(n, r, e) {
    const t = n.getFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return e.era(t, { width: "abbreviated" });
      case "GGGGG":
        return e.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return e.era(t, { width: "wide" });
    }
  },
  // Year
  y: function(n, r, e) {
    if (r === "yo") {
      const t = n.getFullYear(), a = t > 0 ? t : 1 - t;
      return e.ordinalNumber(a, { unit: "year" });
    }
    return E.y(n, r);
  },
  // Local week-numbering year
  Y: function(n, r, e, t) {
    const a = ae(n, t), s = a > 0 ? a : 1 - a;
    if (r === "YY") {
      const i = s % 100;
      return h(i, 2);
    }
    return r === "Yo" ? e.ordinalNumber(s, { unit: "year" }) : h(s, r.length);
  },
  // ISO week-numbering year
  R: function(n, r) {
    const e = Ie(n);
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
  u: function(n, r) {
    const e = n.getFullYear();
    return h(e, r.length);
  },
  // Quarter
  Q: function(n, r, e) {
    const t = Math.ceil((n.getMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(t);
      case "QQ":
        return h(t, 2);
      case "Qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return e.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return e.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, r, e) {
    const t = Math.ceil((n.getMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(t);
      case "qq":
        return h(t, 2);
      case "qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return e.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return e.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, r, e) {
    const t = n.getMonth();
    switch (r) {
      case "M":
      case "MM":
        return E.M(n, r);
      case "Mo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      case "MMM":
        return e.month(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return e.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return e.month(t, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(n, r, e) {
    const t = n.getMonth();
    switch (r) {
      case "L":
        return String(t + 1);
      case "LL":
        return h(t + 1, 2);
      case "Lo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      case "LLL":
        return e.month(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return e.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return e.month(t, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(n, r, e, t) {
    const a = We(n, t);
    return r === "wo" ? e.ordinalNumber(a, { unit: "week" }) : h(a, r.length);
  },
  // ISO week of year
  I: function(n, r, e) {
    const t = _e(n);
    return r === "Io" ? e.ordinalNumber(t, { unit: "week" }) : h(t, r.length);
  },
  // Day of the month
  d: function(n, r, e) {
    return r === "do" ? e.ordinalNumber(n.getDate(), { unit: "date" }) : E.d(n, r);
  },
  // Day of year
  D: function(n, r, e) {
    const t = Ct(n);
    return r === "Do" ? e.ordinalNumber(t, { unit: "dayOfYear" }) : h(t, r.length);
  },
  // Day of week
  E: function(n, r, e) {
    const t = n.getDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, r, e, t) {
    const a = n.getDay(), s = (a - t.weekStartsOn + 8) % 7 || 7;
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
  c: function(n, r, e, t) {
    const a = n.getDay(), s = (a - t.weekStartsOn + 8) % 7 || 7;
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
  i: function(n, r, e) {
    const t = n.getDay(), a = t === 0 ? 7 : t;
    switch (r) {
      case "i":
        return String(a);
      case "ii":
        return h(a, r.length);
      case "io":
        return e.ordinalNumber(a, { unit: "day" });
      case "iii":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, r, e) {
    const a = n.getHours() / 12 >= 1 ? "pm" : "am";
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
  b: function(n, r, e) {
    const t = n.getHours();
    let a;
    switch (t === 12 ? a = H.noon : t === 0 ? a = H.midnight : a = t / 12 >= 1 ? "pm" : "am", r) {
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
  B: function(n, r, e) {
    const t = n.getHours();
    let a;
    switch (t >= 17 ? a = H.evening : t >= 12 ? a = H.afternoon : t >= 4 ? a = H.morning : a = H.night, r) {
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
  h: function(n, r, e) {
    if (r === "ho") {
      let t = n.getHours() % 12;
      return t === 0 && (t = 12), e.ordinalNumber(t, { unit: "hour" });
    }
    return E.h(n, r);
  },
  // Hour [0-23]
  H: function(n, r, e) {
    return r === "Ho" ? e.ordinalNumber(n.getHours(), { unit: "hour" }) : E.H(n, r);
  },
  // Hour [0-11]
  K: function(n, r, e) {
    const t = n.getHours() % 12;
    return r === "Ko" ? e.ordinalNumber(t, { unit: "hour" }) : h(t, r.length);
  },
  // Hour [1-24]
  k: function(n, r, e) {
    let t = n.getHours();
    return t === 0 && (t = 24), r === "ko" ? e.ordinalNumber(t, { unit: "hour" }) : h(t, r.length);
  },
  // Minute
  m: function(n, r, e) {
    return r === "mo" ? e.ordinalNumber(n.getMinutes(), { unit: "minute" }) : E.m(n, r);
  },
  // Second
  s: function(n, r, e) {
    return r === "so" ? e.ordinalNumber(n.getSeconds(), { unit: "second" }) : E.s(n, r);
  },
  // Fraction of second
  S: function(n, r) {
    return E.S(n, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, r, e) {
    const t = n.getTimezoneOffset();
    if (t === 0)
      return "Z";
    switch (r) {
      case "X":
        return me(t);
      case "XXXX":
      case "XX":
        return W(t);
      case "XXXXX":
      case "XXX":
      default:
        return W(t, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, r, e) {
    const t = n.getTimezoneOffset();
    switch (r) {
      case "x":
        return me(t);
      case "xxxx":
      case "xx":
        return W(t);
      case "xxxxx":
      case "xxx":
      default:
        return W(t, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, r, e) {
    const t = n.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + he(t, ":");
      case "OOOO":
      default:
        return "GMT" + W(t, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, r, e) {
    const t = n.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + he(t, ":");
      case "zzzz":
      default:
        return "GMT" + W(t, ":");
    }
  },
  // Seconds timestamp
  t: function(n, r, e) {
    const t = Math.trunc(n.getTime() / 1e3);
    return h(t, r.length);
  },
  // Milliseconds timestamp
  T: function(n, r, e) {
    const t = n.getTime();
    return h(t, r.length);
  }
};
function he(n, r = "") {
  const e = n > 0 ? "-" : "+", t = Math.abs(n), a = Math.trunc(t / 60), s = t % 60;
  return s === 0 ? e + String(a) : e + String(a) + r + h(s, 2);
}
function me(n, r) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + h(Math.abs(n) / 60, 2) : W(n, r);
}
function W(n, r = "") {
  const e = n > 0 ? "-" : "+", t = Math.abs(n), a = h(Math.trunc(t / 60), 2), s = h(t % 60, 2);
  return e + a + r + s;
}
const we = (n, r) => {
  switch (n) {
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
}, He = (n, r) => {
  switch (n) {
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
}, qt = (n, r) => {
  const e = n.match(/(P+)(p+)?/) || [], t = e[1], a = e[2];
  if (!a)
    return we(n, r);
  let s;
  switch (t) {
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
  return s.replace("{{date}}", we(t, r)).replace("{{time}}", He(a, r));
}, te = {
  p: He,
  P: qt
}, Lt = /^D+$/, Qt = /^Y+$/, Rt = ["D", "DD", "YY", "YYYY"];
function Ce(n) {
  return Lt.test(n);
}
function Fe(n) {
  return Qt.test(n);
}
function ne(n, r, e) {
  const t = Xt(n, r, e);
  if (console.warn(t), Rt.includes(n)) throw new RangeError(t);
}
function Xt(n, r, e) {
  const t = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${r}\`) for formatting ${t} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const $t = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, At = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, zt = /^'([^]*?)'?$/, Zt = /''/g, Gt = /[a-zA-Z]/;
function jt(n, r, e) {
  var D, T, Y, O, I, L, Q, R;
  const t = q(), a = (e == null ? void 0 : e.locale) ?? t.locale ?? Ee, s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((T = (D = e == null ? void 0 : e.locale) == null ? void 0 : D.options) == null ? void 0 : T.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((O = (Y = t.locale) == null ? void 0 : Y.options) == null ? void 0 : O.firstWeekContainsDate) ?? 1, i = (e == null ? void 0 : e.weekStartsOn) ?? ((L = (I = e == null ? void 0 : e.locale) == null ? void 0 : I.options) == null ? void 0 : L.weekStartsOn) ?? t.weekStartsOn ?? ((R = (Q = t.locale) == null ? void 0 : Q.options) == null ? void 0 : R.weekStartsOn) ?? 0, u = x(n);
  if (!j(u))
    throw new RangeError("Invalid time value");
  let l = r.match(At).map((M) => {
    const c = M[0];
    if (c === "p" || c === "P") {
      const m = te[c];
      return m(M, a.formatLong);
    }
    return M;
  }).join("").match($t).map((M) => {
    if (M === "''")
      return { isToken: !1, value: "'" };
    const c = M[0];
    if (c === "'")
      return { isToken: !1, value: Ut(M) };
    if (fe[c])
      return { isToken: !0, value: M };
    if (c.match(Gt))
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
    (!(e != null && e.useAdditionalWeekYearTokens) && Fe(c) || !(e != null && e.useAdditionalDayOfYearTokens) && Ce(c)) && ne(c, r, String(n));
    const m = fe[c[0]];
    return m(u, c, a.localize, d);
  }).join("");
}
function Ut(n) {
  const r = n.match(zt);
  return r ? r[1].replace(Zt, "'") : n;
}
function Bt() {
  return Object.assign({}, q());
}
function Vt(n) {
  let e = x(n).getDay();
  return e === 0 && (e = 7), e;
}
function Jt(n, r) {
  const e = r instanceof Date ? g(r, 0) : new r(0);
  return e.setFullYear(
    n.getFullYear(),
    n.getMonth(),
    n.getDate()
  ), e.setHours(
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ), e;
}
const Kt = 10;
class qe {
  constructor() {
    o(this, "subPriority", 0);
  }
  validate(r, e) {
    return !0;
  }
}
class St extends qe {
  constructor(r, e, t, a, s) {
    super(), this.value = r, this.validateValue = e, this.setValue = t, this.priority = a, s && (this.subPriority = s);
  }
  validate(r, e) {
    return this.validateValue(r, this.value, e);
  }
  set(r, e, t) {
    return this.setValue(r, e, this.value, t);
  }
}
class en extends qe {
  constructor() {
    super(...arguments);
    o(this, "priority", Kt);
    o(this, "subPriority", -1);
  }
  set(e, t) {
    return t.timestampIsSet ? e : g(e, Jt(e, Date));
  }
}
class f {
  run(r, e, t, a) {
    const s = this.parse(r, e, t, a);
    return s ? {
      setter: new St(
        s.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: s.rest
    } : null;
  }
  validate(r, e, t) {
    return !0;
  }
}
class tn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 140);
    o(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
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
  set(e, t, a) {
    return t.era = a, e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
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
function p(n, r) {
  return n && {
    value: r(n.value),
    rest: n.rest
  };
}
function w(n, r) {
  const e = r.match(n);
  return e ? {
    value: parseInt(e[0], 10),
    rest: r.slice(e[0].length)
  } : null;
}
function v(n, r) {
  const e = r.match(n);
  if (!e)
    return null;
  if (e[0] === "Z")
    return {
      value: 0,
      rest: r.slice(1)
    };
  const t = e[1] === "+" ? 1 : -1, a = e[2] ? parseInt(e[2], 10) : 0, s = e[3] ? parseInt(e[3], 10) : 0, i = e[5] ? parseInt(e[5], 10) : 0;
  return {
    value: t * (a * Ve + s * Be + i * Je),
    rest: r.slice(e[0].length)
  };
}
function Le(n) {
  return w(b.anyDigitsSigned, n);
}
function y(n, r) {
  switch (n) {
    case 1:
      return w(b.singleDigit, r);
    case 2:
      return w(b.twoDigits, r);
    case 3:
      return w(b.threeDigits, r);
    case 4:
      return w(b.fourDigits, r);
    default:
      return w(new RegExp("^\\d{1," + n + "}"), r);
  }
}
function Z(n, r) {
  switch (n) {
    case 1:
      return w(b.singleDigitSigned, r);
    case 2:
      return w(b.twoDigitsSigned, r);
    case 3:
      return w(b.threeDigitsSigned, r);
    case 4:
      return w(b.fourDigitsSigned, r);
    default:
      return w(new RegExp("^-?\\d{1," + n + "}"), r);
  }
}
function se(n) {
  switch (n) {
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
function Qe(n, r) {
  const e = r > 0, t = e ? r : 1 - r;
  let a;
  if (t <= 50)
    a = n || 100;
  else {
    const s = t + 50, i = Math.trunc(s / 100) * 100, u = n >= s % 100;
    a = n + i - (u ? 100 : 0);
  }
  return e ? a : 1 - a;
}
function Re(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
class nn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, a) {
    const s = (i) => ({
      year: i,
      isTwoDigitYear: t === "yy"
    });
    switch (t) {
      case "y":
        return p(y(4, e), s);
      case "yo":
        return p(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          s
        );
      default:
        return p(y(t.length, e), s);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, a) {
    const s = e.getFullYear();
    if (a.isTwoDigitYear) {
      const u = Qe(
        a.year,
        s
      );
      return e.setFullYear(u, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const i = !("era" in t) || t.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class rn extends f {
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
  parse(e, t, a) {
    const s = (i) => ({
      year: i,
      isTwoDigitYear: t === "YY"
    });
    switch (t) {
      case "Y":
        return p(y(4, e), s);
      case "Yo":
        return p(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          s
        );
      default:
        return p(y(t.length, e), s);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, a, s) {
    const i = ae(e, s);
    if (a.isTwoDigitYear) {
      const l = Qe(
        a.year,
        i
      );
      return e.setFullYear(
        l,
        0,
        s.firstWeekContainsDate
      ), e.setHours(0, 0, 0, 0), _(e, s);
    }
    const u = !("era" in t) || t.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(u, 0, s.firstWeekContainsDate), e.setHours(0, 0, 0, 0), _(e, s);
  }
}
class an extends f {
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
  parse(e, t) {
    return Z(t === "R" ? 4 : t.length, e);
  }
  set(e, t, a) {
    const s = g(e, 0);
    return s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0), F(s);
  }
}
class sn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t) {
    return Z(t === "u" ? 4 : t.length, e);
  }
  set(e, t, a) {
    return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class on extends f {
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
  parse(e, t, a) {
    switch (t) {
      case "Q":
      case "QQ":
        return y(t.length, e);
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
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class un extends f {
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
  parse(e, t, a) {
    switch (t) {
      case "q":
      case "qq":
        return y(t.length, e);
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
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class cn extends f {
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
  parse(e, t, a) {
    const s = (i) => i - 1;
    switch (t) {
      case "M":
        return p(
          w(b.month, e),
          s
        );
      case "MM":
        return p(y(2, e), s);
      case "Mo":
        return p(
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
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class ln extends f {
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
  parse(e, t, a) {
    const s = (i) => i - 1;
    switch (t) {
      case "L":
        return p(
          w(b.month, e),
          s
        );
      case "LL":
        return p(y(2, e), s);
      case "Lo":
        return p(
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
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
function dn(n, r, e) {
  const t = x(n), a = We(t, e) - r;
  return t.setDate(t.getDate() - a * 7), t;
}
class fn extends f {
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
  parse(e, t, a) {
    switch (t) {
      case "w":
        return w(b.week, e);
      case "wo":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, a, s) {
    return _(dn(e, a, s), s);
  }
}
function hn(n, r) {
  const e = x(n), t = _e(e) - r;
  return e.setDate(e.getDate() - t * 7), e;
}
class mn extends f {
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
  parse(e, t, a) {
    switch (t) {
      case "I":
        return w(b.week, e);
      case "Io":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, a) {
    return F(hn(e, a));
  }
}
const wn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], gn = [
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
class yn extends f {
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
  parse(e, t, a) {
    switch (t) {
      case "d":
        return w(b.date, e);
      case "do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    const a = e.getFullYear(), s = Re(a), i = e.getMonth();
    return s ? t >= 1 && t <= gn[i] : t >= 1 && t <= wn[i];
  }
  set(e, t, a) {
    return e.setDate(a), e.setHours(0, 0, 0, 0), e;
  }
}
class bn extends f {
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
  parse(e, t, a) {
    switch (t) {
      case "D":
      case "DD":
        return w(b.dayOfYear, e);
      case "Do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    const a = e.getFullYear();
    return Re(a) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
  }
  set(e, t, a) {
    return e.setMonth(0, a), e.setHours(0, 0, 0, 0), e;
  }
}
function ie(n, r, e) {
  var T, Y, O, I;
  const t = q(), a = (e == null ? void 0 : e.weekStartsOn) ?? ((Y = (T = e == null ? void 0 : e.locale) == null ? void 0 : T.options) == null ? void 0 : Y.weekStartsOn) ?? t.weekStartsOn ?? ((I = (O = t.locale) == null ? void 0 : O.options) == null ? void 0 : I.weekStartsOn) ?? 0, s = x(n), i = s.getDay(), l = (r % 7 + 7) % 7, d = 7 - a, D = r < 0 || r > 6 ? r - (i + d) % 7 : (l + d) % 7 - (i + d) % 7;
  return Ne(s, D);
}
class pn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
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
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = ie(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
class xn extends f {
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
  parse(e, t, a, s) {
    const i = (u) => {
      const l = Math.floor((u - 1) / 7) * 7;
      return (u + s.weekStartsOn + 6) % 7 + l;
    };
    switch (t) {
      case "e":
      case "ee":
        return p(y(t.length, e), i);
      case "eo":
        return p(
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
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = ie(e, a, s), e.setHours(0, 0, 0, 0), e;
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
      "e",
      "t",
      "T"
    ]);
  }
  parse(e, t, a, s) {
    const i = (u) => {
      const l = Math.floor((u - 1) / 7) * 7;
      return (u + s.weekStartsOn + 6) % 7 + l;
    };
    switch (t) {
      case "c":
      case "cc":
        return p(y(t.length, e), i);
      case "co":
        return p(
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
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = ie(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
function Tn(n, r) {
  const e = x(n), t = Vt(e), a = r - t;
  return Ne(e, a);
}
class Mn extends f {
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
  parse(e, t, a) {
    const s = (i) => i === 0 ? 7 : i;
    switch (t) {
      case "i":
      case "ii":
        return y(t.length, e);
      case "io":
        return a.ordinalNumber(e, { unit: "day" });
      case "iii":
        return p(
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
        return p(
          a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiiii":
        return p(
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
        return p(
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
  validate(e, t) {
    return t >= 1 && t <= 7;
  }
  set(e, t, a) {
    return e = Tn(e, a), e.setHours(0, 0, 0, 0), e;
  }
}
class On extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
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
  set(e, t, a) {
    return e.setHours(se(a), 0, 0, 0), e;
  }
}
class Pn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
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
  set(e, t, a) {
    return e.setHours(se(a), 0, 0, 0), e;
  }
}
class Yn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
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
  set(e, t, a) {
    return e.setHours(se(a), 0, 0, 0), e;
  }
}
class kn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "h":
        return w(b.hour12h, e);
      case "ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 12;
  }
  set(e, t, a) {
    const s = e.getHours() >= 12;
    return s && a < 12 ? e.setHours(a + 12, 0, 0, 0) : !s && a === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class Nn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "H":
        return w(b.hour23h, e);
      case "Ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 23;
  }
  set(e, t, a) {
    return e.setHours(a, 0, 0, 0), e;
  }
}
class vn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "K":
        return w(b.hour11h, e);
      case "Ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.getHours() >= 12 && a < 12 ? e.setHours(a + 12, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class In extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "k":
        return w(b.hour24h, e);
      case "ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 24;
  }
  set(e, t, a) {
    const s = a <= 24 ? a % 24 : a;
    return e.setHours(s, 0, 0, 0), e;
  }
}
class En extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 60);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "m":
        return w(b.minute, e);
      case "mo":
        return a.ordinalNumber(e, { unit: "minute" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, a) {
    return e.setMinutes(a, 0, 0), e;
  }
}
class _n extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 50);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "s":
        return w(b.second, e);
      case "so":
        return a.ordinalNumber(e, { unit: "second" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, a) {
    return e.setSeconds(a, 0), e;
  }
}
class Wn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 30);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t) {
    const a = (s) => Math.trunc(s * Math.pow(10, -t.length + 3));
    return p(y(t.length, e), a);
  }
  set(e, t, a) {
    return e.setMilliseconds(a), e;
  }
}
class Hn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, t) {
    switch (t) {
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
  set(e, t, a) {
    return t.timestampIsSet ? e : g(
      e,
      e.getTime() - z(e) - a
    );
  }
}
class Cn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, t) {
    switch (t) {
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
  set(e, t, a) {
    return t.timestampIsSet ? e : g(
      e,
      e.getTime() - z(e) - a
    );
  }
}
class Fn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 40);
    o(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return Le(e);
  }
  set(e, t, a) {
    return [g(e, a * 1e3), { timestampIsSet: !0 }];
  }
}
class qn extends f {
  constructor() {
    super(...arguments);
    o(this, "priority", 20);
    o(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return Le(e);
  }
  set(e, t, a) {
    return [g(e, a), { timestampIsSet: !0 }];
  }
}
const Ln = {
  G: new tn(),
  y: new nn(),
  Y: new rn(),
  R: new an(),
  u: new sn(),
  Q: new on(),
  q: new un(),
  M: new cn(),
  L: new ln(),
  w: new fn(),
  I: new mn(),
  d: new yn(),
  D: new bn(),
  E: new pn(),
  e: new xn(),
  c: new Dn(),
  i: new Mn(),
  a: new On(),
  b: new Pn(),
  B: new Yn(),
  h: new kn(),
  H: new Nn(),
  K: new vn(),
  k: new In(),
  m: new En(),
  s: new _n(),
  S: new Wn(),
  X: new Hn(),
  x: new Cn(),
  t: new Fn(),
  T: new qn()
}, Qn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Rn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Xn = /^'([^]*?)'?$/, $n = /''/g, An = /\S/, zn = /[a-zA-Z]/;
function Xe(n, r, e, t) {
  var L, Q, R, M;
  const a = Bt(), s = a.locale ?? Ee, i = a.firstWeekContainsDate ?? ((Q = (L = a.locale) == null ? void 0 : L.options) == null ? void 0 : Q.firstWeekContainsDate) ?? 1, u = a.weekStartsOn ?? ((M = (R = a.locale) == null ? void 0 : R.options) == null ? void 0 : M.weekStartsOn) ?? 0;
  if (r === "")
    return n === "" ? x(e) : g(e, NaN);
  const l = {
    firstWeekContainsDate: i,
    weekStartsOn: u,
    locale: s
  }, d = [new en()], D = r.match(Rn).map((c) => {
    const m = c[0];
    if (m in te) {
      const k = te[m];
      return k(c, s.formatLong);
    }
    return c;
  }).join("").match(Qn), T = [];
  for (let c of D) {
    Fe(c) && ne(c, r, n), Ce(c) && ne(c, r, n);
    const m = c[0], k = Ln[m];
    if (k) {
      const { incompatibleTokens: ue } = k;
      if (Array.isArray(ue)) {
        const ce = T.find(
          (le) => ue.includes(le.token) || le.token === m
        );
        if (ce)
          throw new RangeError(
            `The format string mustn't contain \`${ce.fullToken}\` and \`${c}\` at the same time`
          );
      } else if (k.incompatibleTokens === "*" && T.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${c}\` and any other token at the same time`
        );
      T.push({ token: m, fullToken: c });
      const U = k.run(
        n,
        c,
        s.match,
        l
      );
      if (!U)
        return g(e, NaN);
      d.push(U.setter), n = U.rest;
    } else {
      if (m.match(zn))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + m + "`"
        );
      if (c === "''" ? c = "'" : m === "'" && (c = Zn(c)), n.indexOf(c) === 0)
        n = n.slice(c.length);
      else
        return g(e, NaN);
    }
  }
  if (n.length > 0 && An.test(n))
    return g(e, NaN);
  const Y = d.map((c) => c.priority).sort((c, m) => m - c).filter((c, m, k) => k.indexOf(c) === m).map(
    (c) => d.filter((m) => m.priority === c).sort((m, k) => k.subPriority - m.subPriority)
  ).map((c) => c[0]);
  let O = x(e);
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
function Zn(n) {
  return n.match(Xn)[1].replace($n, "'");
}
function ge(n, r, e) {
  return j(Xe(n, r, /* @__PURE__ */ new Date()));
}
function ye(n, r, e) {
  const t = Un(n, e.timeZone, e.locale);
  return "formatToParts" in t ? Gn(t, r) : jn(t, r);
}
function Gn(n, r) {
  const e = n.formatToParts(r);
  for (let t = e.length - 1; t >= 0; --t)
    if (e[t].type === "timeZoneName")
      return e[t].value;
}
function jn(n, r) {
  const e = n.format(r).replace(/\u200E/g, ""), t = / [\w-+ ]+$/.exec(e);
  return t ? t[0].substr(1) : "";
}
function Un(n, r, e) {
  return new Intl.DateTimeFormat(e ? [e.code, "en-US"] : void 0, {
    timeZone: r,
    timeZoneName: n
  });
}
function Bn(n, r) {
  const e = Sn(r);
  return "formatToParts" in e ? Jn(e, n) : Kn(e, n);
}
const Vn = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Jn(n, r) {
  try {
    const e = n.formatToParts(r), t = [];
    for (let a = 0; a < e.length; a++) {
      const s = Vn[e[a].type];
      s !== void 0 && (t[s] = parseInt(e[a].value, 10));
    }
    return t;
  } catch (e) {
    if (e instanceof RangeError)
      return [NaN];
    throw e;
  }
}
function Kn(n, r) {
  const e = n.format(r), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(e);
  return [
    parseInt(t[3], 10),
    parseInt(t[1], 10),
    parseInt(t[2], 10),
    parseInt(t[4], 10),
    parseInt(t[5], 10),
    parseInt(t[6], 10)
  ];
}
const V = {};
function Sn(n) {
  if (!V[n]) {
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
    V[n] = e ? new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: n,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: n,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return V[n];
}
function $e(n, r, e, t, a, s, i) {
  const u = /* @__PURE__ */ new Date(0);
  return u.setUTCFullYear(n, r, e), u.setUTCHours(t, a, s, i), u;
}
const be = 36e5, er = 6e4, J = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function oe(n, r, e) {
  if (!n)
    return 0;
  let t = J.timezoneZ.exec(n);
  if (t)
    return 0;
  let a, s;
  if (t = J.timezoneHH.exec(n), t)
    return a = parseInt(t[1], 10), pe(a) ? -(a * be) : NaN;
  if (t = J.timezoneHHMM.exec(n), t) {
    a = parseInt(t[2], 10);
    const i = parseInt(t[3], 10);
    return pe(a, i) ? (s = Math.abs(a) * be + i * er, t[1] === "+" ? -s : s) : NaN;
  }
  if (rr(n)) {
    r = new Date(r || Date.now());
    const i = e ? r : tr(r), u = re(i, n);
    return -(e ? u : nr(r, u, n));
  }
  return NaN;
}
function tr(n) {
  return $e(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds());
}
function re(n, r) {
  const e = Bn(n, r), t = $e(e[0], e[1] - 1, e[2], e[3] % 24, e[4], e[5], 0).getTime();
  let a = n.getTime();
  const s = a % 1e3;
  return a -= s >= 0 ? s : 1e3 + s, t - a;
}
function nr(n, r, e) {
  let a = n.getTime() - r;
  const s = re(new Date(a), e);
  if (r === s)
    return r;
  a -= s - r;
  const i = re(new Date(a), e);
  return s === i ? s : Math.max(s, i);
}
function pe(n, r) {
  return -23 <= n && n <= 23 && (r == null || 0 <= r && r <= 59);
}
const xe = {};
function rr(n) {
  if (xe[n])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: n }), xe[n] = !0, !0;
  } catch {
    return !1;
  }
}
const ar = 60 * 1e3, sr = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, r, e) {
    const t = K(e.timeZone, n);
    if (t === 0)
      return "Z";
    switch (r) {
      case "X":
        return De(t);
      case "XXXX":
      case "XX":
        return C(t);
      case "XXXXX":
      case "XXX":
      default:
        return C(t, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, r, e) {
    const t = K(e.timeZone, n);
    switch (r) {
      case "x":
        return De(t);
      case "xxxx":
      case "xx":
        return C(t);
      case "xxxxx":
      case "xxx":
      default:
        return C(t, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, r, e) {
    const t = K(e.timeZone, n);
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ir(t, ":");
      case "OOOO":
      default:
        return "GMT" + C(t, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, r, e) {
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return ye("short", n, e);
      case "zzzz":
      default:
        return ye("long", n, e);
    }
  }
};
function K(n, r) {
  const e = n ? oe(n, r, !0) / ar : (r == null ? void 0 : r.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(e))
    throw new RangeError("Invalid time zone specified: " + n);
  return e;
}
function G(n, r) {
  const e = n < 0 ? "-" : "";
  let t = Math.abs(n).toString();
  for (; t.length < r; )
    t = "0" + t;
  return e + t;
}
function C(n, r = "") {
  const e = n > 0 ? "-" : "+", t = Math.abs(n), a = G(Math.floor(t / 60), 2), s = G(Math.floor(t % 60), 2);
  return e + a + r + s;
}
function De(n, r) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + G(Math.abs(n) / 60, 2) : C(n, r);
}
function ir(n, r = "") {
  const e = n > 0 ? "-" : "+", t = Math.abs(n), a = Math.floor(t / 60), s = t % 60;
  return s === 0 ? e + String(a) : e + String(a) + r + G(s, 2);
}
function Te(n) {
  const r = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
  return r.setUTCFullYear(n.getFullYear()), +n - +r;
}
const or = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, S = 36e5, Me = 6e4, ur = 2, P = {
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
  timeZone: or
};
function Ae(n, r = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  const e = r.additionalDigits == null ? ur : Number(r.additionalDigits);
  if (e !== 2 && e !== 1 && e !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]")
    return new Date(n.getTime());
  if (typeof n == "number" || Object.prototype.toString.call(n) === "[object Number]")
    return new Date(n);
  if (Object.prototype.toString.call(n) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const t = cr(n), { year: a, restDateString: s } = lr(t.date, e), i = dr(s, a);
  if (i === null || isNaN(i.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (i) {
    const u = i.getTime();
    let l = 0, d;
    if (t.time && (l = fr(t.time), l === null || isNaN(l)))
      return /* @__PURE__ */ new Date(NaN);
    if (t.timeZone || r.timeZone) {
      if (d = oe(t.timeZone || r.timeZone, new Date(u + l)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = Te(new Date(u + l)), d = Te(new Date(u + l + d));
    return new Date(u + l + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function cr(n) {
  const r = {};
  let e = P.dateTimePattern.exec(n), t;
  if (e ? (r.date = e[1], t = e[3]) : (e = P.datePattern.exec(n), e ? (r.date = e[1], t = e[2]) : (r.date = null, t = n)), t) {
    const a = P.timeZone.exec(t);
    a ? (r.time = t.replace(a[1], ""), r.timeZone = a[1].trim()) : r.time = t;
  }
  return r;
}
function lr(n, r) {
  if (n) {
    const e = P.YYY[r], t = P.YYYYY[r];
    let a = P.YYYY.exec(n) || t.exec(n);
    if (a) {
      const s = a[1];
      return {
        year: parseInt(s, 10),
        restDateString: n.slice(s.length)
      };
    }
    if (a = P.YY.exec(n) || e.exec(n), a) {
      const s = a[1];
      return {
        year: parseInt(s, 10) * 100,
        restDateString: n.slice(s.length)
      };
    }
  }
  return {
    year: null
  };
}
function dr(n, r) {
  if (r === null)
    return null;
  let e, t, a;
  if (!n || !n.length)
    return e = /* @__PURE__ */ new Date(0), e.setUTCFullYear(r), e;
  let s = P.MM.exec(n);
  if (s)
    return e = /* @__PURE__ */ new Date(0), t = parseInt(s[1], 10) - 1, Pe(r, t) ? (e.setUTCFullYear(r, t), e) : /* @__PURE__ */ new Date(NaN);
  if (s = P.DDD.exec(n), s) {
    e = /* @__PURE__ */ new Date(0);
    const i = parseInt(s[1], 10);
    return wr(r, i) ? (e.setUTCFullYear(r, 0, i), e) : /* @__PURE__ */ new Date(NaN);
  }
  if (s = P.MMDD.exec(n), s) {
    e = /* @__PURE__ */ new Date(0), t = parseInt(s[1], 10) - 1;
    const i = parseInt(s[2], 10);
    return Pe(r, t, i) ? (e.setUTCFullYear(r, t, i), e) : /* @__PURE__ */ new Date(NaN);
  }
  if (s = P.Www.exec(n), s)
    return a = parseInt(s[1], 10) - 1, Ye(a) ? Oe(r, a) : /* @__PURE__ */ new Date(NaN);
  if (s = P.WwwD.exec(n), s) {
    a = parseInt(s[1], 10) - 1;
    const i = parseInt(s[2], 10) - 1;
    return Ye(a, i) ? Oe(r, a, i) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function fr(n) {
  let r, e, t = P.HH.exec(n);
  if (t)
    return r = parseFloat(t[1].replace(",", ".")), ee(r) ? r % 24 * S : NaN;
  if (t = P.HHMM.exec(n), t)
    return r = parseInt(t[1], 10), e = parseFloat(t[2].replace(",", ".")), ee(r, e) ? r % 24 * S + e * Me : NaN;
  if (t = P.HHMMSS.exec(n), t) {
    r = parseInt(t[1], 10), e = parseInt(t[2], 10);
    const a = parseFloat(t[3].replace(",", "."));
    return ee(r, e, a) ? r % 24 * S + e * Me + a * 1e3 : NaN;
  }
  return null;
}
function Oe(n, r, e) {
  r = r || 0, e = e || 0;
  const t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(n, 0, 4);
  const a = t.getUTCDay() || 7, s = r * 7 + e + 1 - a;
  return t.setUTCDate(t.getUTCDate() + s), t;
}
const hr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], mr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ze(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
function Pe(n, r, e) {
  if (r < 0 || r > 11)
    return !1;
  if (e != null) {
    if (e < 1)
      return !1;
    const t = ze(n);
    if (t && e > mr[r] || !t && e > hr[r])
      return !1;
  }
  return !0;
}
function wr(n, r) {
  if (r < 1)
    return !1;
  const e = ze(n);
  return !(e && r > 366 || !e && r > 365);
}
function Ye(n, r) {
  return !(n < 0 || n > 52 || r != null && (r < 0 || r > 6));
}
function ee(n, r, e) {
  return !(n < 0 || n >= 25 || r != null && (r < 0 || r >= 60) || e != null && (e < 0 || e >= 60));
}
const gr = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function yr(n, r, e = {}) {
  r = String(r);
  const t = r.match(gr);
  if (t) {
    const a = Ae(e.originalDate || n, e);
    r = t.reduce(function(s, i) {
      if (i[0] === "'")
        return s;
      const u = s.indexOf(i), l = s[u - 1] === "'", d = s.replace(i, "'" + sr[i[0]](a, i, e) + "'");
      return l ? d.substring(0, u - 1) + d.substring(u + 1) : d;
    }, r);
  }
  return jt(n, r, e);
}
function Ze(n, r, e) {
  n = Ae(n, e);
  const t = oe(r, n, !0), a = new Date(n.getTime() - t), s = /* @__PURE__ */ new Date(0);
  return s.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), s.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), s;
}
function br(n, r, e, t) {
  return t = {
    ...t,
    timeZone: r,
    originalDate: n
  }, yr(Ze(n, r, { timeZone: t.timeZone }), e, t);
}
const A = /* @__PURE__ */ new Date(NaN), pr = () => Intl.DateTimeFormat().resolvedOptions().timeZone, xr = (n, r) => {
  if (n == null)
    return A;
  let e;
  if (n instanceof Date)
    e = n;
  else if (typeof n == "number")
    e = new Date(n);
  else if (typeof n == "string")
    e = Dr(n, r);
  else
    return A;
  return j(e) ? Ze(e, pr()) : A;
}, Dr = (n, r) => {
  const e = Object.values(r.formats).find((t) => typeof t == "object" ? ge(n, t.pattern) : ge(n, t));
  if (e) {
    let t = "";
    return typeof e == "object" ? t = e.pattern : t = e, Xe(n, t, /* @__PURE__ */ new Date());
  }
  return A;
}, Tr = (n, r, e) => {
  let t;
  typeof r == "object" ? t = r.pattern : t = r;
  const a = xr(n, e);
  if (!j(a))
    return null;
  const s = e.constants.TZ;
  return br(a, s, t);
};
let ke = null;
const Or = (n) => (ke = Object.entries(n.formats).reduce(
  (r, [e, t]) => ({
    ...r,
    [e]: (a) => Tr(a, t, n)
  }),
  {}
), ke);
export {
  Or as default,
  xr as parseDate
};
