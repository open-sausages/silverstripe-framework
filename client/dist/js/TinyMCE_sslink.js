webpackJsonp([3],{906:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(97),r=i(o),a=e(28),s=i(a),c=e(26),u=i(c),l={init:function(n){var t=r.default.getActions("sslink").map(function(t){return Object.assign({},t,{onclick:function(){return t.onclick(n)}})});n.addButton("sslink",{icon:"link",title:"Insert Link",type:"menubutton",menu:t}),n.addMenuItem("sslink",{icon:"link",text:"Insert Link",menu:t})}};u.default.entwine("ss",function(n){n(".insert-link__dialog-wrapper").entwine({Element:null,Data:{},onunmatch:function(){this._clearModal()},_clearModal:function(){s.default.unmountComponentAtNode(this[0])},open:function(){this.renderModal(!0)},close:function(){this.setData({}),this.renderModal(!1)},renderModal:function(){},handleInsert:function(n){var t=this.buildAttributes(n);this.insertLinkInEditor(t),this.close()},buildAttributes:function(n){var t=n.Anchor&&n.Anchor.length?"#"+n.Anchor:"";return{href:""+n.Link+t,target:n.TargetBlank?"_blank":"",title:n.Description}},insertLinkInEditor:function(n){var t=this.getElement().getEditor();t.insertLink(n),t.addUndo(),t.repaint()},getOriginalAttributes:function(){var t=this.getElement().getEditor(),e=n(t.getSelectedNode()),i=(e.attr("href")||"").split("#");return{Link:i[0]||"",Anchor:i[1]||"",Description:e.attr("title"),TargetBlank:!!e.attr("target")}}})}),tinymce.PluginManager.add("sslink",function(n){return l.init(n)}),t.default=l},97:function(n,t,e){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),r=function(){function n(){i(this,n),this.actions={}}return o(n,[{key:"addAction",value:function(n,t){this.actions[n]=this.getActions(n).concat([t])}},{key:"getActions",value:function(n){return this.actions[n]||[]}}]),n}();window.ss=window.ss||{},window.ss.tinymceactions=window.ss.tinymceactions||new r,t.default=window.ss.tinymceactions}},[906]);