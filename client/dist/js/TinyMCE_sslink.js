webpackJsonp([3],{100:function(t,e){t.exports=TinyMCEActionRegistrar},774:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e,n){var o=Array.isArray(n)?n:[n||""];return Boolean(t&&o.map(function(t){return String(t)}).map(function(t){return t.toLowerCase()}).includes((t.tagName||"").toLowerCase())&&e)}function r(t,e){function n(){i(l,u,o)&&(r.hide(),clearTimeout(a),a=setTimeout(function(){r.show(),r.reposition(l)},300))}var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["a"],r=new c(t,e),l=null,a=null,u=!1;return r.hide().renderTo(window.document.body),t.on("remove",function(){r.remove()}),t.on("focus",function(){u=!0}),t.on("blur hide",function(){r.hide(),u=!1}),t.on("nodechange",function(e){var n={element:e.element,parents:e.parents,collapsed:t.selection.isCollapsed()};l=n.selection||n.element,i(l,u,o)?(r.show(),r.reposition(l)):r.hide()}),window.addEventListener("scroll",function(e){e.target.contains(document.querySelector("#"+t.id))&&n()},!0),t.contentDocument.addEventListener("scroll",n),r}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e,n){o(this,t),this.mceIframe=document.getElementById(e.id+"_ifr"),this.container=e.getContainer(),this.mceToolbar=null,this.mceStatusbar=null,this.container&&(this.mceToolbar=this.container.querySelector(".mce-toolbar-grp"),this.mceStatusbar=this.container.querySelector(".mce-statusbar")),this.control=tinymce.ui.Factory.create({type:"panel",classes:"inline-toolbar",layout:"stack",items:[{type:"toolbar",items:n}]})}return l(t,[{key:"remove",value:function(){return this.control.remove(),this}},{key:"hide",value:function(){return this.control.hide(),this}},{key:"show",value:function(){return this.control.show(),this}},{key:"renderTo",value:function(t){return this.control.renderTo(t),this}},{key:"setStyles",value:function(t){return tinymce.DOM.setStyles(this.control.getEl(),t),this}},{key:"reposition",value:function(t){if(!t)return this;var e=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop,o=window.innerWidth,i=window.innerHeight,r=this.mceIframe?this.mceIframe.getBoundingClientRect():{top:0,right:o,bottom:i,left:0,width:o,height:i},l=this.control.getEl(),c=l.offsetWidth,a=l.offsetHeight,u=t.getBoundingClientRect(),s=(u.left+u.right)/2,d=a+8+5,f=this.mceToolbar?this.mceToolbar.getBoundingClientRect().bottom:0,h=this.mceStatusbar?i-this.mceStatusbar.getBoundingClientRect().top:0,m=Math.max(0,f,r.top),p=Math.max(0,h,i-r.bottom),g=u.top+r.top-m,b=i-r.top-u.bottom-p,w=i-m-p,y="",v=0,k=0;return g>=w||b>=w?this.hide():(this.bottom?b>=d?(y=" mce-arrow-up",v=u.bottom+r.top+n+10):g>=d&&(y=" mce-arrow-down",v=u.top+r.top+n-a-8):g>=d?(y=" mce-arrow-down",v=u.top+r.top+n-a-8):b>=d&&w/2>u.bottom+r.top-m&&(y=" mce-arrow-up",v=u.bottom+r.top+n+10),void 0===v&&(v=n+m+5),k=s-c/2+r.left+e,u.left<0||u.right>r.width?k=r.left+e+(r.width-c)/2:c>=o?(y+=" mce-arrow-full",k=0):k<0&&u.left+c>o||k+c>o&&u.right-c<0?k=(o-c)/2:k<r.left+e?(y+=" mce-arrow-left",k=u.left+r.left+e):k+c>r.width+r.left+e&&(y+=" mce-arrow-right",k=u.right-c+r.left+e),l.className=l.className.replace(/ ?mce-arrow-[\w]+/g,"")+y,this.setStyles({left:k,top:v}),this)}}]),t}();e.default=c,e.setupTinyMceInlineToolbar=r,e.shouldShowToolbar=i},934:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(100),r=o(i),l=n(25),c=o(l),a=n(29),u=o(a),s=n(774),d={init:function(t){function e(){var e=tinymce.activeEditor.selection.getNode(),n=e.getAttribute("href");n&&t.execCommand(r.default.getEditorCommandFromUrl(n))}var n=r.default.getSortedActions("sslink").map(function(e){return Object.assign({},e,{onclick:function(){return e.onclick(t)}})});t.addButton("sslink",{icon:"link",title:"Insert Link",type:"menubutton",menu:n}),t.addMenuItem("sslink",{icon:"link",text:"Insert Link",menu:n}),t.on("preinit",function(){(0,s.setupTinyMceInlineToolbar)(t,[{type:"button",onClick:e,text:"Edit link"},{type:"button",onClick:function(){return t.execCommand("unlink")},text:"Remove link"}])})}};u.default.entwine("ss",function(t){t(".insert-link__dialog-wrapper").entwine({Element:null,Data:{},onunmatch:function(){this._clearModal()},_clearModal:function(){c.default.unmountComponentAtNode(this[0])},open:function(){this.renderModal(!0)},close:function(){this.setData({}),this.renderModal(!1)},renderModal:function(){},handleInsert:function(t){var e=this.buildAttributes(t);return this.insertLinkInEditor(e,t.Text),this.close(),Promise.resolve()},buildAttributes:function(t){var e=t.Anchor&&t.Anchor.length?"#"+t.Anchor:"";return{href:""+t.Link+e,target:t.TargetBlank?"_blank":"",title:t.Description}},insertLinkInEditor:function(t,e){var n=this.getElement().getEditor();n.insertLink(t,null,e),n.addUndo(),n.repaint();var o=n.getInstance(),i=o.selection;setTimeout(function(){return i&&i.collapse()},0)},getOriginalAttributes:function(){var e=this.getElement().getEditor(),n=t(e.getSelectedNode()),o=(n.attr("href")||"").split("#");return{Link:o[0]||"",Anchor:o[1]||"",Description:n.attr("title"),TargetBlank:!!n.attr("target")}}})}),tinymce.PluginManager.add("sslink",function(t){return d.init(t)}),e.default=d}},[934]);