panel.plugin('mullema/k3-date-format', {
    components: {
        'k-date-input': {
            extends: 'k-date-input',
            template: `
            <div class="k-date-input">
                <k-select-input
                  ref="days"
                  :aria-label="$t('day')"
                  :autofocus="autofocus"
                  :id="id"
                  :options="days"
                  :disabled="disabled"
                  :required="required"
                  :value="day"
                  placeholder="––"
                  empty="––"
                  @input="setDay"
                  @invalid="onInvalid"
                />
                <span class="k-date-input-separator">.</span>
                
                <k-select-input
                  ref="months"
                  :aria-label="$t('month')"
                  :options="months"
                  :disabled="disabled"
                  :required="required"
                  :value="month"
                  empty="––"
                  placeholder="––"
                  @input="setMonth"
                  @invalid="onInvalid"
                />
                <span class="k-date-input-separator">.</span>
             
                <k-select-input
                  ref="years"
                  :aria-label="$t('year')"
                  :options="years"
                  :disabled="disabled"
                  :required="required"
                  :value="year"
                  placeholder="––––"
                  empty="––––"
                  @input="setYear"
                  @invalid="onInvalid"
                />
            </div>`
        },
        'k-date-field-preview': {
            props: {
                value: String,
                column: Object,
                field: Object
            },
            methods: {
                date: function() {
                    const date = dayjs(this.value);
                    const format = this.field.time === true ? "DD.MM.YYYY HH:mm" : "DD.MM.YYYY";
                    return date.isValid() ? date.format(format) : "no valid date";
                }
            },
            template: `<p class="k-date-field-preview">{{ date() }}</p>`
        }
    }
});

/**
 * https://unpkg.com/dayjs@1.8.0/
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.dayjs=n()}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",a="year",o=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,h=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},f={padStart:c,padZoneStr:function(t){var n=Math.abs(t),e=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+c(e,2,"0")+":"+c(r,2,"0")},monthDiff:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,"months"),i=n-r<0,s=t.clone().add(e+(i?-1:1),"months");return Number(-(e+(n-r)/(i?r-s:s-r))||0)},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(o){return{M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t}[o]||String(o||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},$="en",l={};l[$]=d;var m=function(t){return t instanceof D},y=function(t,n,e){var r;if(!t)return null;if("string"==typeof t)l[t]&&(r=t),n&&(l[t]=n,r=t);else{var i=t.name;l[i]=t,r=i}return e||($=r),r},M=function(t,n){if(m(t))return t.clone();var e=n?"string"==typeof n?{format:n}:n:{};return e.date=t,new D(e)},p=function(t,n){return M(t,{locale:n.$L})},S=f;S.parseLocale=y,S.isDayjs=m,S.wrapper=p;var D=function(){function d(t){this.parse(t)}var c=d.prototype;return c.parse=function(t){var n,e;this.$d=null===(n=t.date)?new Date(NaN):S.isUndefined(n)?new Date:n instanceof Date?n:"string"==typeof n&&/.*[^Z]$/i.test(n)&&(e=n.match(o))?new Date(e[1],e[2]-1,e[3]||1,e[5]||0,e[6]||0,e[7]||0,e[8]||0):new Date(n),this.init(t)},c.init=function(t){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds(),this.$L=this.$L||y(t.locale,null,!0)||$},c.$utils=function(){return S},c.isValid=function(){return!("Invalid Date"===this.$d.toString())},c.isSame=function(t,n){var e=M(t);return this.startOf(n)<=e&&e<=this.endOf(n)},c.isAfter=function(t,n){return M(t)<this.startOf(n)},c.isBefore=function(t,n){return this.endOf(n)<M(t)},c.year=function(){return this.$y},c.month=function(){return this.$M},c.day=function(){return this.$W},c.date=function(){return this.$D},c.hour=function(){return this.$H},c.minute=function(){return this.$m},c.second=function(){return this.$s},c.millisecond=function(){return this.$ms},c.unix=function(){return Math.floor(this.valueOf()/1e3)},c.valueOf=function(){return this.$d.getTime()},c.startOf=function(t,o){var h=this,d=!!S.isUndefined(o)||o,c=function(t,n){var e=p(new Date(h.$y,n,t),h);return d?e:e.endOf(i)},f=function(t,n){return p(h.toDate()[t].apply(h.toDate(),(d?[0,0,0,0]:[23,59,59,999]).slice(n)),h)};switch(S.prettyUnit(t)){case a:return d?c(1,0):c(31,11);case u:return d?c(1,this.$M):c(0,this.$M+1);case s:return c(d?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case i:case"date":return f("setHours",0);case r:return f("setMinutes",1);case e:return f("setSeconds",2);case n:return f("setMilliseconds",3);default:return this.clone()}},c.endOf=function(t){return this.startOf(t,!1)},c.$set=function(s,o){var h,d=S.prettyUnit(s),c=(h={},h[i]="setDate",h.date="setDate",h[u]="setMonth",h[a]="setFullYear",h[r]="setHours",h[e]="setMinutes",h[n]="setSeconds",h[t]="setMilliseconds",h)[d],f=d===i?this.$D+(o-this.$W):o;return this.$d[c]&&this.$d[c](f),this.init(),this},c.set=function(t,n){return this.clone().$set(t,n)},c.add=function(t,o){var h,d=this;t=Number(t);var c=S.prettyUnit(o),f=function(n,e){var r=d.set("date",1).set(n,e+t);return r.set("date",Math.min(d.$D,r.daysInMonth()))},$=function(n){var e=new Date(d.$d);return e.setDate(e.getDate()+n*t),p(e,d)};if(c===u)return f(u,this.$M);if(c===a)return f(a,this.$y);if(c===i)return $(1);if(c===s)return $(7);var l=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,m=this.valueOf()+t*l;return p(m,this)},c.subtract=function(t,n){return this.add(-1*t,n)},c.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=S.padZoneStr(this.$d.getTimezoneOffset()),i=this.$locale(),s=i.weekdays,u=i.months,a=function(t,n,e,r){return t&&t[n]||e[n].substr(0,r)},o=function(t){return 0===n.$H?12:S.padStart(n.$H<13?n.$H:n.$H-12,"hh"===t?2:1,"0")};return e.replace(h,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):{YY:String(n.$y).slice(-2),YYYY:String(n.$y),M:String(n.$M+1),MM:S.padStart(n.$M+1,2,"0"),MMM:a(i.monthsShort,n.$M,u,3),MMMM:u[n.$M],D:String(n.$D),DD:S.padStart(n.$D,2,"0"),d:String(n.$W),dd:a(i.weekdaysMin,n.$W,s,2),ddd:a(i.weekdaysShort,n.$W,s,3),dddd:s[n.$W],H:String(n.$H),HH:S.padStart(n.$H,2,"0"),h:o(t),hh:o(t),a:n.$H<12?"am":"pm",A:n.$H<12?"AM":"PM",m:String(n.$m),mm:S.padStart(n.$m,2,"0"),s:String(n.$s),ss:S.padStart(n.$s,2,"0"),SSS:S.padStart(n.$ms,3,"0"),Z:r}[t]||r.replace(":","")})},c.diff=function(t,o,h){var d,c=S.prettyUnit(o),f=M(t),$=this-f,l=S.monthDiff(this,f);return l=(d={},d[a]=l/12,d[u]=l,d.quarter=l/3,d[s]=$/6048e5,d[i]=$/864e5,d[r]=$/36e5,d[e]=$/6e4,d[n]=$/1e3,d)[c]||$,h?l:S.absFloor(l)},c.daysInMonth=function(){return this.endOf(u).$D},c.$locale=function(){return l[this.$L]},c.locale=function(t,n){var e=this.clone();return e.$L=y(t,n,!0),e},c.clone=function(){return p(this.toDate(),this)},c.toDate=function(){return new Date(this.$d)},c.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},c.toJSON=function(){return this.toISOString()},c.toISOString=function(){return this.$d.toISOString()},c.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},c.toString=function(){return this.$d.toUTCString()},d}();return M.prototype=D.prototype,M.extend=function(t,n){return t(n,D,M),M},M.locale=y,M.isDayjs=m,M.unix=function(t){return M(1e3*t)},M.en=l[$],M});
