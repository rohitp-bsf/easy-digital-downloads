!function(e){var n={};function t(o){if(n[o])return n[o].exports;var d=n[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,t),d.l=!0,d.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var d in e)t.d(o,d,function(n){return e[n]}.bind(null,d));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=47)}({0:function(e,n){e.exports=jQuery},47:function(e,n,t){(function(e,n){var t={init:function(){this.enter_key(),this.add_note(),this.remove_note()},enter_key:function(){e(document.body).on("keydown","#edd-note",(function(n){13===n.keyCode&&(n.metaKey||n.ctrlKey)&&(n.preventDefault(),e("#edd-add-note").click())}))},add_note:function(){e("#edd-add-note").on("click",(function(n){n.preventDefault();var t=e(this),o=e("#edd-note"),d=e(".edd-notes"),r=e(".edd-no-notes"),i=e(".edd-add-note .spinner"),a={action:"edd_add_note",nonce:e("#edd_note_nonce").val(),object_id:t.data("object-id"),object_type:t.data("object-type"),note:o.val()};if(a.note)t.prop("disabled",!0),i.css("visibility","visible"),e.ajax({type:"POST",data:a,url:ajaxurl,success:function(e){var n=wpAjax.parseAjaxResponse(e);n=n.responses[0],d.append(n.data),r.hide(),t.prop("disabled",!1),i.css("visibility","hidden"),o.val("")}}).fail((function(e){window.console&&window.console.log&&console.log(e),t.prop("disabled",!1),i.css("visibility","hidden")}));else{var c=o.css("border-color");o.css("border-color","red"),setTimeout((function(){o.css("border-color",c)}),userInteractionInterval)}}))},remove_note:function(){e(document.body).on("click",".edd-delete-note",(function(n){n.preventDefault();var t=e(this),o=e(".edd-note"),d=t.parents(".edd-note"),r=e(".edd-no-notes"),i=e("#edd_note_nonce");if(confirm(edd_vars.delete_note)){var a={action:"edd_delete_note",nonce:i.val(),note_id:t.data("note-id")};return d.addClass("deleting"),e.ajax({type:"POST",data:a,url:ajaxurl,success:function(e){return"1"===e&&d.remove(),1===o.length&&r.show(),!1}}).fail((function(e){window.console&&window.console.log&&console.log(e),d.removeClass("deleting")})),!0}}))}};n(document).ready((function(e){t.init()}))}).call(this,t(0),t(0))}});