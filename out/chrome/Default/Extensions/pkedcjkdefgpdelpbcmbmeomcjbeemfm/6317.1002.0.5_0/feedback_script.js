'use strict';var me=function(a){this.Ik="number"==typeof a?0<a?1:0>a?-1:null:null==a?null:a?-1:1};if("undefined"!=typeof angular){var ne=angular.module("chrome_18n",[]);chrome.runtime&&chrome.runtime.getManifest&&chrome.runtime.getManifest().default_locale&&ne.directive("angularMessage",function(){return{restrict:"E",replace:!0,controller:["$scope",function(a){var b=this;this.nf=this.yd=null;a.dirForText=function(a){b.yd||(b.yd=chrome.i18n.getMessage("@@bidi_dir")||"ltr");b.nf||(b.nf=new me("rtl"==b.yd));var c=b.nf,e,f=e=0,h=!1;a=(a||"").split(Sc);for(var l=0;l<a.length;l++){var r=a[l];Qc.test(r)?
(e++,f++):Rc.test(r)?h=!0:Pc.test(r)?f++:Vc.test(r)&&(h=!0)}e=0==f?h?1:0:.4<e/f?-1:1;return-1==(0==e?c.Ik:e)?"rtl":"ltr"}}],compile:function(a,b){b=b.key;var c=null,d=document.createElement("amr");b&&!b.match(/^\d+$/)&&(b=chrome.i18n.getMessage(b),null==b&&d.setAttribute("id","missing"));if(b){var e=chrome.i18n.getMessage(b+"_ph");c=[];if(null!=e)for(c=e.split("\ue000"),e=0;e<c.length;++e)c[e]=c[e].replace(/^{{(.*)}}$/,'<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');c=chrome.i18n.getMessage(b,c)}else d.setAttribute("r",
"nokey");c?d.innerHTML=c:(d.setAttribute("tl","false"),d.innerHTML=a.html());a.replaceWith(d)}}})};var oe=/^[\w+/]+[=]{0,2}$/;var pe=function(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||sa,e=d.document,f;a:{if((f=(d||sa).document.querySelector("script[nonce]"))&&(f=f.nonce||f.getAttribute("nonce"))&&oe.test(f))break a;f=void 0}f&&(a.nonce=f);if("help"==a.flow){var h=va("document.location.href",d);!a.helpCenterContext&&h&&(a.helpCenterContext=h.substring(0,1200));h=!0;if(b&&JSON&&JSON.stringify){var l=JSON.stringify(b);(h=1200>=l.length)&&(a.psdJson=l)}h||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=
b;c=a.serverUri||"//www.google.com/tools/feedback";if(h=d.GOOGLE_FEEDBACK_START)h.apply(d,b);else{d=c+"/load.js?";for(var r in a)b=a[r],null!=b&&!Da(b)&&(d+=encodeURIComponent(r)+"="+encodeURIComponent(b)+"&");a=(e?new le(je(e)):Gb||(Gb=new le)).a.createElement("SCRIPT");f&&a.setAttribute("nonce",f);r=Zc(d);a.src=Yc(r);e.body.appendChild(a)}};q("userfeedback.api.startFeedback",pe);var qe=function(){this.f=this.b=this.l=this.modelName=this.g=this.a=this.He=""};var re=chrome.i18n.getMessage("4163185390680253103"),se=chrome.i18n.getMessage("492097680647953484"),te=chrome.i18n.getMessage("2575016469622936324"),ue=chrome.i18n.getMessage("128276876460319075"),ve=chrome.i18n.getMessage("3326722026796849289"),we=chrome.i18n.getMessage("1018984561488520517"),xe=chrome.i18n.getMessage("8205999658352447129"),ye=chrome.i18n.getMessage("5723583529370342957"),ze=chrome.i18n.getMessage("1550904064710828958"),Ae=chrome.i18n.getMessage("5014364904504073524"),Be=chrome.i18n.getMessage("2194670894476780934"),
Ce=chrome.i18n.getMessage("6614468912728530636"),De=chrome.i18n.getMessage("5910595154486533449"),Ee=chrome.i18n.getMessage("5363086287710390513"),Fe=chrome.i18n.getMessage("244647017322945605"),Ge=chrome.i18n.getMessage("5375576275991472719"),He=chrome.i18n.getMessage("4592127349908255218"),Ie=chrome.i18n.getMessage("843316808366399491"),Je=chrome.i18n.getMessage("5699813974548050528"),Ke=chrome.i18n.getMessage("8515148417333877999"),Le=chrome.i18n.getMessage("1636686747687494376"),Me=chrome.i18n.getMessage("4148300086676792937"),
Ne=chrome.i18n.getMessage("3219866268410307919"),Oe=chrome.i18n.getMessage("9211708838274008657"),Pe=chrome.i18n.getMessage("8706273405040403641"),Qe=chrome.i18n.getMessage("4756056595565370923"),Re=chrome.i18n.getMessage("7876724262035435114"),Se=chrome.i18n.getMessage("5485620192329479690"),Te=chrome.i18n.getMessage("6963873398546068901"),Ue=chrome.i18n.getMessage("3567591856726172993"),Ve=chrome.i18n.getMessage("3239956785410157548");var Xe=function(a,b){var c=this;this.h=b;this.a=a;this.a.top=a;this.m=[];this.g=!1;this.b=new qe;this.a.videoSmoothnessRatings=this.ig(Be,we,xe,ye,ze,Ae);this.a.videoQualityRatings=this.ig(Be,Ce,De,Ee,Fe,Ge);this.a.audioQualityRatings=this.ig(Be,He,Ie,Je,Ke,Le);this.m=[{value:"Bug",desc:re},{value:"FeatureRequest",desc:se},{value:"MirroringQuality",desc:te},{value:"Discovery",desc:ue},{value:"Other",desc:ve}];this.a.feedbackTypes=this.m;this.a.includeFineLogs=!0;this.a.feedbackType="Bug";this.a.sendFeedback=
this.mm.bind(this);this.a.cancel=this.Fk.bind(this);this.a.attachLogsClick=this.l.bind(this);this.a.viewLogs=this.s.bind(this);this.a.$watchGroup("videoSmoothness videoQuality audioQuality feedbackDescription comments feedbackType".split(" "),this.Hk.bind(this));this.a.sufficientFeedback=!1;this.a.$watch("attachLogs",this.l.bind(this));this.a.attachLogs=!0;this.u=Bb();this.a.userEmail="";chrome.identity.getProfileUserInfo(function(a){c.a.userEmail=a.email;We(c)});this.a.yourAnswerText=Ve;this.a.language=
chrome.i18n&&chrome.i18n.getUILanguage?chrome.i18n.getUILanguage():chrome.runtime.getManifest().default_locale;this.a.requestLogsInProgress=!1};g=Xe.prototype;g.ig=function(a){for(var b=[],c=1;c<arguments.length;c++)b.push(new Ye(c,arguments[c]));b.push(new Ye(0,arguments[0]));return b};g.Fk=function(){this.a.feedbackDescription&&!confirm(Me)||window.close()};
g.Hk=function(){var a=this.a.feedbackType;this.a.sufficientFeedback="MirroringQuality"==a?this.a.videoSmoothness||this.a.videoQuality||this.a.audioQuality||this.a.comments:"Discovery"==a?this.a.visibleInSetup||this.a.comments:!!this.a.feedbackDescription};
g.mm=function(){if(this.a.sufficientFeedback){var a=this.a.feedbackType,b="";"MirroringQuality"==a?(this.a.videoSmoothness&&(b+="\nVideo Smoothness: "+this.a.videoSmoothness),this.a.videoQuality&&(b+="\nVideo Quality: "+this.a.videoQuality),this.a.audioQuality&&(b+="\nAudio: "+this.a.audioQuality),this.a.projectedContentUrl&&(b+="\nProjected Content/URL: "+this.a.projectedContentUrl),this.a.comments&&(b+="\nComments: "+this.a.comments)):"Discovery"==a?(this.a.visibleInSetup&&(b+="\nChromecast Visible in Setup: "+
this.a.visibleInSetup),this.a.hasNetworkSoftware&&(b+="\nUsing VPN/proxy/firewall/NAS Software: "+this.a.hasNetworkSoftware),this.a.networkDescription&&(b+="\nNetwork Description: "+this.a.networkDescription),this.a.comments&&(b+="\nComments: "+this.a.comments)):b=this.a.feedbackDescription;a="Type: "+a+"\n\n"+b;this.a.sendDialogText=Ne;this.a.okButton=Ue;this.a.feedbackSent=!1;this.h.show({locals:{hs:this.a.feedbackSent,rs:this.a.sendDialogText,el:this.a.okButton},scope:this.a,preserveScope:!0,bindToController:!0,
template:'<md-dialog id="feedback-confirmation"><md-dialog-content><div id="send-feedback-text">{{sendDialogText}}</div><md-dialog-actions><md-button class="md-raised md-primary"ng-disabled="!feedbackSent" ng-click="closeWindow()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>',controller:this.f});this.li(a,Date.now())}};g.li=function(a,b){var c=Date.now();!this.a.requestLogsInProgress||5E3<c-b?Ze(this,a):setTimeout(this.li.bind(this),1E3,a,b)};
var Ze=function(a,b){var c=0,d=function(b,c,d){d?b(!0):(a.a.sendDialogText=Qe,We(a),c(Error("Failed to send")))},e=chrome.declarativeWebRequest?"MrTeamfood":"MRStable";ud(new sd(function(){c++;return new Promise(function(c,h){var f=a.a.userEmail,r=a.b;c=d.bind(null,c,h);h=chrome.runtime.getManifest();pe({productId:85561,bucket:e,flow:"submit",serverUri:"https://www.google.com/tools/feedback",allowNonLoggedInFeedback:!0,locale:h.default_locale,enableAnonymousFeedback:!f,report:{description:b},callback:c},
{version:h.version,description:h.description,user_email:f||"NA",logs:r.He||"NA",external_logs:r.a||"NA",device_model:r.modelName||"NA",receiver_version:r.l||"NA",dash_report_url:r.g||"NA",cast_device_counts:r.b,dial_device_counts:r.f})})},1E4,4),2).start().then(function(){hb("MediaRouter.Ui.Action.Feedback");a.a.sendDialogText=Pe;a.a.feedbackSent=!0;We(a)},function(){a.a.sendDialogText=Oe;a.a.feedbackSent=!0;We(a)})};
Xe.prototype.l=function(){var a=this;this.b=new qe;this.a.attachLogs&&(this.a.requestLogsInProgress=!0,chrome.runtime.sendMessage(new Zd(this.u,"retrieve_log_data"),function(b){a.a.requestLogsInProgress=!1;a.b.He=b.logs||"no extension";b.castStreamingLogs&&(a.b.g=b.castStreamingLogs);b.castDeviceCounts&&(a.b.b=b.castDeviceCounts);b.dialDeviceCounts&&(a.b.f=b.dialDeviceCounts);if(b=b.device)if(b.model&&(a.b.modelName=b.model),b.version&&(a.b.l=b.version),!a.g){var c=Bb();a.g=!0;a.b.a=ae(b.ip,c,a.v.bind(a))}}))};
Xe.prototype.s=function(){this.a.logs=this.b.He;this.a.logsHeader=Re;this.a.sendLogs=Se;this.a.fineLogsWarning=Te;this.a.okButton=Ue;this.h.show({locals:{cs:this.a.attachLogs,He:this.a.logs,ms:this.a.includeFineLogs,ps:this.a.logsHeader,ss:this.a.sendLogs,ks:this.a.fineLogsWarning,el:this.a.okButton},scope:this.a,preserveScope:!0,bindToController:!0,clickOutsideToClose:!0,template:'<md-dialog><md-dialog-content id="logs-dialog"><div class="subheading">{{logsHeader}}</div><div ng-show="includeFineLogs && attachLogs"id="feedback-fine-log-warning" class="informative">{{fineLogsWarning}}</div><pre>{{logs}}</pre><div class="send-logs"><md-checkbox type="checkbox" ng-model="attachLogs"ng-change="attachLogsClick()"><span>{{sendLogs}}</span></md-checkbox></div><md-dialog-actions><md-button class="md-raised md-primary"ng-click="closeDialog()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>',
controller:this.f})};Xe.prototype.v=function(a,b){this.g=!1;this.b.a="error"==a?"":b;this.a.attachLogs||(this.b.a="");We(this)};var We=function(a){a.a.$$phase||a.a.$apply()};Xe.prototype.f=function(a,b){a.closeWindow=function(){window.close()};a.closeDialog=function(){b.hide()}};Xe.prototype.f.$inject=["$scope","$mdDialog"];var Ye=function(a,b){this.id=a;this.desc=b;this.text=0==a?b:a+" ("+b+")"};
angular.module("feedbackApp","chrome_18n material.components.button material.components.checkbox material.components.dialog material.components.input material.components.radioButton".split(" ")).controller("FeedbackCtrl",["$scope","$mdDialog",Xe]);q("ng.safehtml.googSceHelper.isGoogHtmlType",function(a){return a&&a.qc?!0:!1});q("ng.safehtml.googSceHelper.isCOMPILED",function(){return!0});q("ng.safehtml.googSceHelper.unwrapAny",function(a){if(a instanceof Xc)return Yc(a);if(a instanceof ld)return od(a);if(a instanceof ad)return bd(a);if(a instanceof dd)return ed(a);if(a instanceof Nc)return Oc(a);throw Error();});
q("ng.safehtml.googSceHelper.unwrapGivenContext",function(a,b){if("html"==a)return od(b);if("resourceUrl"==a||"templateUrl"==a)return Yc(b);if("url"==a)return b instanceof Xc?Yc(b):bd(b);if("css"==a)return ed(b);if("js"==a)return Oc(b);throw Error();});
