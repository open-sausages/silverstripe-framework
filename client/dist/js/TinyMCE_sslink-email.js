webpackJsonp([2],{100:function(e,t){e.exports=TinyMCEActionRegistrar},178:function(e,t){e.exports=InsertLinkModal},24:function(e,t){e.exports=i18n},40:function(e,t){e.exports=Injector},932:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(24),a=n(r),l=i(100),o=n(l),s=i(0),d=n(s),c=i(25),u=n(c),m=i(99),p=i(29),f=n(p),g=i(178),k=i(40);o.default.addAction("sslink",{text:a.default._t("Admin.LINKLABEL_EMAIL","Link to email address"),onclick:function(e){return e.execCommand("sslinkemail")},priority:51}).addCommandWithUrlTest("sslinkemail",/^mailto:/);var h={init:function(e){e.addCommand("sslinkemail",function(){window.jQuery("#"+e.id).entwine("ss").openLinkEmailDialog()})}},A="insert-link__dialog-wrapper--email",_=(0,k.provideInjector)((0,g.createInsertLinkModal)("SilverStripe\\Admin\\LeftAndMain","EditorEmailLink"));f.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkEmailDialog:function(){var t=e("#"+A);t.length||(t=e('<div id="'+A+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+A).entwine({renderModal:function(e){var t=this,i=ss.store,n=ss.apolloClient,r=function(){return t.close()},l=function(){return t.handleInsert.apply(t,arguments)},o=this.getOriginalAttributes(),s=tinymce.activeEditor.selection,c=s.getContent()||"",p=s.getNode().tagName,f="A"!==p&&""===c.trim();u.default.render(d.default.createElement(m.ApolloProvider,{store:i,client:n},d.default.createElement(_,{show:e,onInsert:l,onHide:r,title:a.default._t("Admin.LINK_EMAIL","Insert email link"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--email",fileAttributes:o,identifier:"Admin.InsertLinkEmailModal",requireLinkText:f})),this[0])},getOriginalAttributes:function(){var t=this.getElement().getEditor(),i=e(t.getSelectedNode()),n=(i.attr("href")||"").split("?"),r=n[0].replace(/^mailto:/,"").split("?")[0];r.match(/.+@.+\..+/)||(r="");var a=n[1]?n[1].match(/subject=([^&]+)/):"";return{Link:r,Subject:a?a[1]:"",Description:i.attr("title")}},buildAttributes:function(e){var t=this._super(e),i="",n=t.href.replace(/^mailto:/,"").split("?")[0];return n.match(/.+@.+\..+/)||(n=""),n&&(i="mailto:"+n),i&&e.Subject&&(i=i+"?subject="+encodeURIComponent(e.Subject)),t.href=i,delete t.target,t}})}),tinymce.PluginManager.add("sslinkemail",function(e){return h.init(e)}),t.default=h},99:function(e,t){e.exports=ReactApollo}},[932]);