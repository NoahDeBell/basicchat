webpackJsonp([57],{894:function(n,i,u){"use strict";function e(n,i){if(void 0!==n.one&&1===i)return n.one;var u=i%10,e=i%100;return 1===u&&11!==e?n.singularNominative.replace("{{count}}",i):u>=2&&u<=4&&(e<10||e>20)?n.singularGenitive.replace("{{count}}",i):n.pluralGenitive.replace("{{count}}",i)}function t(n){return function(i,u){return u.addSuffix?u.comparison>0?n.future?e(n.future,i):"за "+e(n.regular,i):n.past?e(n.past,i):e(n.regular,i)+" тому":e(n.regular,i)}}function r(n,i,u){return u=u||{},a[n](i,u)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=r;var a={lessThanXSeconds:t({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:t({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:function(n,i){return i.addSuffix?i.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини"},lessThanXMinutes:t({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:t({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:t({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:t({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:t({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} днів"}}),aboutXMonths:t({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяця",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:t({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяця",pluralGenitive:"{{count}} місяців"}}),aboutXYears:t({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:t({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:t({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:t({regular:{singularNominative:"почти {{count}} рік",singularGenitive:"почти {{count}} роки",pluralGenitive:"почти {{count}} років"},future:{singularNominative:"почти за {{count}} рік",singularGenitive:"почти за {{count}} роки",pluralGenitive:"почти за {{count}} років"}})};n.exports=i.default}});
//# sourceMappingURL=0aa55d601bf98ec82d5c.js.map