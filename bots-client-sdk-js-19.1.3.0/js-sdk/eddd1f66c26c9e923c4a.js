webpackJsonp([165],{785:function(u,e,t){"use strict";function n(u){return u.replace(/sekuntia?/,"sekunnin")}function o(u){return u.replace(/minuuttia?/,"minuutin")}function i(u){return u.replace(/tuntia?/,"tunnin")}function r(u){return u.replace(/päivää?/,"päivän")}function a(u){return u.replace(/(kuukausi|kuukautta)/,"kuukauden")}function s(u){return u.replace(/(vuosi|vuotta)/,"vuoden")}function c(u,e,t){t=t||{};var n=l[u],o=1===e?n.one:n.other.replace("{{count}}",e);return t.addSuffix?t.comparison>0?n.futureTense(o)+" kuluttua":o+" sitten":o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var l={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:n},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:n},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(u){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:o},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:o},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:i},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:i},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:r},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:a},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:a},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:s},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:s},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:s},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:s}};u.exports=e.default}});
//# sourceMappingURL=eddd1f66c26c9e923c4a.js.map