webpackJsonp([31,198,199,200,201,202],{748:function(e,t,a){"use strict";function n(e,t,a){a=a||{};var n;return n="string"==typeof o[e]?o[e]:1===t?o[e].one:o[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"en "+n:"fa "+n:n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o={lessThanXSeconds:{one:"menys d'un segon",other:"menys de {{count}} segons"},xSeconds:{one:"1 segon",other:"{{count}} segons"},halfAMinute:"mig minut",lessThanXMinutes:{one:"menys d'un minut",other:"menys de {{count}} minuts"},xMinutes:{one:"1 minut",other:"{{count}} minuts"},aboutXHours:{one:"aproximadament una hora",other:"aproximadament {{count}} hores"},xHours:{one:"1 hora",other:"{{count}} hores"},xDays:{one:"1 dia",other:"{{count}} dies"},aboutXMonths:{one:"aproximadament un mes",other:"aproximadament {{count}} mesos"},xMonths:{one:"1 mes",other:"{{count}} mesos"},aboutXYears:{one:"aproximadament un any",other:"aproximadament {{count}} anys"},xYears:{one:"1 any",other:"{{count}} anys"},overXYears:{one:"més d'un any",other:"més de {{count}} anys"},almostXYears:{one:"gairebé un any",other:"gairebé {{count}} anys"}};e.exports=t.default},749:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(200),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=(0,o.default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});t.default=r,e.exports=t.default},750:function(e,t,a){"use strict";function n(e,t,a,n){return o[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};e.exports=t.default},751:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=Number(e);switch(t){case 1:return"1r";case 2:return"2n";case 3:return"3r";case 4:return"4t";default:return t+"è"}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(202),u=n(r),s=a(201),d=n(s),i={narrow:["dg","dl","dt","dc","dj","dv","ds"],short:["dge","dls","dts","dcs","djs","dvs","dss"],long:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]},l={short:["gen","feb","mar","abr","mai","jun","jul","ago","set","oct","nov","des"],long:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octobre","novembre","desembre"]},m={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},f={ordinalNumber:o,weekday:(0,u.default)(i,"long"),weekdays:(0,d.default)(i,"long"),month:(0,u.default)(l,"long"),months:(0,d.default)(l,"long"),timeOfDay:(0,u.default)(m,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,d.default)(m,"long")};t.default=f,e.exports=t.default},752:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(203),r=n(o),u=a(205),s=n(u),d=a(204),i=n(d),l=a(206),m=n(l),f=/^(\d+)(th|st|nd|rd)?/i,c={narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},y={any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},h={short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},p={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},g={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},b={any:[/^a/i,/^p/i]},M={ordinalNumbers:(0,i.default)(f),ordinalNumber:m.default,weekdays:(0,r.default)(c,"long"),weekday:(0,s.default)(y,"any"),months:(0,r.default)(h,"long"),month:(0,s.default)(p,"any"),timesOfDay:(0,r.default)(g,"long"),timeOfDay:(0,s.default)(b,"any")};t.default=M,e.exports=t.default},918:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(748),r=n(o),u=a(749),s=n(u),d=a(750),i=n(d),l=a(751),m=n(l),f=a(752),c=n(f),y={formatDistance:r.default,formatLong:s.default,formatRelative:i.default,localize:m.default,match:c.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=y,e.exports=t.default}});
//# sourceMappingURL=8db4866f345c9c572d8b.js.map