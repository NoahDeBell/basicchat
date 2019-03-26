webpackJsonp([30,193,194,195,196,197],{753:function(t,e,u){"use strict";function n(t,e){return 1===e?t.one:e>=2&&e<=4?t.twoFour:t.other}function o(t,e,u){var o=n(t,e);return(o[u]||o).replace("{{count}}",e)}function r(t){return["lessThan","about","over","almost"].filter(function(e){return!!t.match(new RegExp("^"+e))})[0]}function a(t){var e="";return"almost"===t&&(e="skoro"),"about"===t&&(e="přibližně"),e.length>0?e+" ":""}function i(t){var e="";return"lessThan"===t&&(e="méně než"),"over"===t&&(e="více než"),e.length>0?e+" ":""}function s(t){return t.charAt(0).toLowerCase()+t.slice(1)}function d(t,e,u){u=u||{};var n=r(t)||"",d=s(t.substring(n.length)),f=l[d];return u.addSuffix?u.comparison>0?a(n)+"za "+i(n)+o(f,e,"future"):a(n)+"před "+i(n)+o(f,e,"past"):a(n)+i(n)+o(f,e,"regular")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;var l={xSeconds:{one:{regular:"vteřina",past:"vteřinou",future:"vteřinu"},twoFour:{regular:"{{count}} vteřiny",past:"{{count}} vteřinami",future:"{{count}} vteřiny"},other:{regular:"{{count}} vteřin",past:"{{count}} vteřinami",future:"{{count}} vteřin"}},halfAMinute:{other:{regular:"půl minuty",past:"půl minutou",future:"půl minuty"}},xMinutes:{one:{regular:"minuta",past:"minutou",future:"minutu"},twoFour:{regular:"{{count}} minuty",past:"{{count}} minutami",future:"{{count}} minuty"},other:{regular:"{{count}} minut",past:"{{count}} minutami",future:"{{count}} minut"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hodin",past:"{{count}} hodinami",future:"{{count}} hodin"}},xDays:{one:{regular:"den",past:"dnem",future:"den"},twoFour:{regular:"{{count}} dni",past:"{{count}} dny",future:"{{count}} dni"},other:{regular:"{{count}} dní",past:"{{count}} dny",future:"{{count}} dní"}},xMonths:{one:{regular:"měsíc",past:"měsícem",future:"měsíc"},twoFour:{regular:"{{count}} měsíce",past:"{{count}} měsíci",future:"{{count}} měsíce"},other:{regular:"{{count}} měsíců",past:"{{count}} měsíci",future:"{{count}} měsíců"}},xYears:{one:{regular:"rok",past:"rokem",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} roky",future:"{{count}} roky"},other:{regular:"{{count}} roků",past:"{{count}} roky",future:"{{count}} roků"}}};t.exports=e.default},754:function(t,e,u){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=u(200),o=function(t){return t&&t.__esModule?t:{default:t}}(n),r=(0,o.default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});e.default=r,t.exports=e.default},755:function(t,e,u){"use strict";function n(t,e,u,n){return o[t]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var o={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};t.exports=e.default},756:function(t,e,u){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return Number(t)+"."}Object.defineProperty(e,"__esModule",{value:!0});var r=u(202),a=n(r),i=u(201),s=n(i),d={narrow:["ne","po","út","st","čt","pá","so"],short:["ned","pon","úte","stř","čtv","pát","sob"],long:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},l={short:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],long:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},f={uppercase:["DOP.","ODP."],lowercase:["dop.","odp."],long:["dopoledne","odpoledne"]},c={ordinalNumber:o,weekday:(0,a.default)(d,"long"),weekdays:(0,s.default)(d,"long"),month:(0,a.default)(l,"long"),months:(0,s.default)(l,"long"),timeOfDay:(0,a.default)(f,"long",function(t){return t/12>=1?1:0}),timesOfDay:(0,s.default)(f,"long")};e.default=c,t.exports=e.default},757:function(t,e,u){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=u(203),r=n(o),a=u(205),i=n(a),s=u(204),d=n(s),l=u(206),f=n(l),c=/^(\d+)(th|st|nd|rd)?/i,m={narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},p={any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},y={short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},h={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},g={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},v={any:[/^a/i,/^p/i]},b={ordinalNumbers:(0,d.default)(c),ordinalNumber:f.default,weekdays:(0,r.default)(m,"long"),weekday:(0,i.default)(p,"any"),months:(0,r.default)(y,"long"),month:(0,i.default)(h,"any"),timesOfDay:(0,r.default)(g,"long"),timeOfDay:(0,i.default)(v,"any")};e.default=b,t.exports=e.default},919:function(t,e,u){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=u(753),r=n(o),a=u(754),i=n(a),s=u(755),d=n(s),l=u(756),f=n(l),c=u(757),m=n(c),p={formatDistance:r.default,formatLong:i.default,formatRelative:d.default,localize:f.default,match:m.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};e.default=p,t.exports=e.default}});
//# sourceMappingURL=63d10498fc862fc20589.js.map