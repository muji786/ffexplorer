(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"e-app"},[t("ESidebar"),this._v(" "),t("EContent")],1)};s._withStripped=!0;var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"e-sidebar"},[o("div",{staticClass:"e-sidebar-header"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.app,expression:"app"}],staticClass:"e-sdiebar-app-select",on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.app=t.target.multiple?o:o[0]},e.changeApp]}},[o("option",{attrs:{value:"explorer"}},[e._v("Explorer")]),e._v(" "),o("option",{attrs:{value:"database"}},[e._v("Database")])])]),e._v(" "),o("ETree")],1)};i._withStripped=!0;var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"e-folders",style:{height:this.treeHeight},on:{contextmenu:function(e){e.preventDefault()}}},[o("ul",{staticClass:"e-folders-list"},e._l(e.treeData,(function(e){return o("ETreeItem",{key:e.path,attrs:{item:e}})})),1),e._v(" "),o("vue-context",{ref:"menu",attrs:{"close-on-scroll":!0}},[e.isRoot?e._e():o("li",{staticStyle:{"border-bottom":"dashed 1px #ddd"},on:{click:e.compress}},[o("a",[e._v("Compress to Zip")])]),e._v(" "),"folder"===e.contextItem.type?o("li",{on:{click:e.newFile}},[o("a",[e._v("New File")])]):e._e(),e._v(" "),"folder"===e.contextItem.type?o("li",{staticStyle:{"border-bottom":"dashed 1px #ddd"},on:{click:e.newFolder}},[o("a",[e._v("New Folder")])]):e._e(),e._v(" "),"folder"!==e.contextItem.type||e.isRoot?e._e():o("li",{on:{click:function(t){return e.delayCall("renameFolder")}}},[o("a",[e._v("Rename Folder")])]),e._v(" "),"folder"!==e.contextItem.type||e.isRoot?e._e():o("li",{staticStyle:{"border-bottom":"dashed 1px #ddd"},on:{click:function(t){return e.delayCall("deleteFolder")}}},[o("a",[e._v("Delete Folder")])]),e._v(" "),"file"===e.contextItem.type?o("li",{on:{click:function(t){return e.delayCall("openFile")}}},[o("a",[e._v("Open")])]):e._e(),e._v(" "),"file"===e.contextItem.type?o("li",{staticStyle:{"border-bottom":"dashed 1px #ddd"},on:{click:function(t){return e.delayCall("download")}}},[o("a",[e._v("Download File")])]):e._e(),e._v(" "),"file"===e.contextItem.type?o("li",{on:{click:function(t){return e.delayCall("renameFile")}}},[o("a",[e._v("Rename File")])]):e._e(),e._v(" "),"file"===e.contextItem.type?o("li",{staticStyle:{"border-bottom":"dashed 1px #ddd"},on:{click:function(t){return e.delayCall("deleteFile")}}},[o("a",[e._v("Delete File")])]):e._e(),e._v(" "),"folder"===e.contextItem.type?o("li",{on:{click:function(t){e.uploadDialog=!0}}},[o("a",[e._v("Upload Files")])]):e._e(),e._v(" "),"folder"===e.contextItem.type?o("li",{staticStyle:{"border-bottom":"dashed 1px #ddd"},on:{click:e.refresh}},[o("a",[e._v("Refresh")])]):e._e(),e._v(" "),e.isRoot?e._e():o("li",{on:{click:e.openPermissionDialog}},[o("a",[e._v("Permission")])])]),e._v(" "),o("el-dialog",{attrs:{title:"Upload Files","destroy-on-close":!0,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,visible:e.uploadDialog},on:{"update:visible":function(t){e.uploadDialog=t}}},[o("el-upload",{staticClass:"upload-file",attrs:{action:e.uploadUrl,data:e.uploadData,"on-success":e.onSuccessUpload,multiple:!0}},[o("el-button",{attrs:{size:"small",type:"primary"}},[e._v("Click to upload")]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("Files with a size less than "+e._s(e.maxFileSizeUpload)+"B")])],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"small",loading:e.uploadDialogBusy},on:{click:e.onCloseUploadDialog}},[e._v("Close")])],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"Permission",width:"400px","destroy-on-close":!0,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,visible:e.permissionDialog},on:{"update:visible":function(t){e.permissionDialog=t}}},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.permissionLoading,expression:"permissionLoading"}]},[o("table",{staticClass:"permission-config"},[o("tr",[o("td"),e._v(" "),o("td",[e._v("User")]),e._v(" "),o("td",[e._v("Group")]),e._v(" "),o("td",[e._v("World")])]),e._v(" "),o("tr",[o("td",[e._v("Read")]),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.chmod.userRread,expression:"chmod.userRread"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.chmod.userRread)?e._i(e.chmod.userRread,null)>-1:e.chmod.userRread},on:{change:function(t){var o=e.chmod.userRread,s=t.target,i=!!s.checked;if(Array.isArray(o)){var r=e._i(o,null);s.checked?r<0&&e.$set(e.chmod,"userRread",o.concat([null])):r>-1&&e.$set(e.chmod,"userRread",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.chmod,"userRread",i)}}})]),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.chmod.groupRread,expression:"chmod.groupRread"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.chmod.groupRread)?e._i(e.chmod.groupRread,null)>-1:e.chmod.groupRread},on:{change:function(t){var o=e.chmod.groupRread,s=t.target,i=!!s.checked;if(Array.isArray(o)){var r=e._i(o,null);s.checked?r<0&&e.$set(e.chmod,"groupRread",o.concat([null])):r>-1&&e.$set(e.chmod,"groupRread",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.chmod,"groupRread",i)}}})]),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.chmod.worldRead,expression:"chmod.worldRead"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.chmod.worldRead)?e._i(e.chmod.worldRead,null)>-1:e.chmod.worldRead},on:{change:function(t){var o=e.chmod.worldRead,s=t.target,i=!!s.checked;if(Array.isArray(o)){var r=e._i(o,null);s.checked?r<0&&e.$set(e.chmod,"worldRead",o.concat([null])):r>-1&&e.$set(e.chmod,"worldRead",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.chmod,"worldRead",i)}}})])]),e._v(" "),o("tr",[o("td",[e._v("Write")]),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.chmod.userWrite,expression:"chmod.userWrite"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.chmod.userWrite)?e._i(e.chmod.userWrite,null)>-1:e.chmod.userWrite},on:{change:function(t){var o=e.chmod.userWrite,s=t.target,i=!!s.checked;if(Array.isArray(o)){var r=e._i(o,null);s.checked?r<0&&e.$set(e.chmod,"userWrite",o.concat([null])):r>-1&&e.$set(e.chmod,"userWrite",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.chmod,"userWrite",i)}}})]),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.chmod.groupWrite,expression:"chmod.groupWrite"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.chmod.groupWrite)?e._i(e.chmod.groupWrite,null)>-1:e.chmod.groupWrite},on:{change:function(t){var o=e.chmod.groupWrite,s=t.target,i=!!s.checked;if(Array.isArray(o)){var r=e._i(o,null);s.checked?r<0&&e.$set(e.chmod,"groupWrite",o.concat([null])):r>-1&&e.$set(e.chmod,"groupWrite",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.chmod,"groupWrite",i)}}})]),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.chmod.worldWrite,expression:"chmod.worldWrite"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.chmod.worldWrite)?e._i(e.chmod.worldWrite,null)>-1:e.chmod.worldWrite},on:{change:function(t){var o=e.chmod.worldWrite,s=t.target,i=!!s.checked;if(Array.isArray(o)){var r=e._i(o,null);s.checked?r<0&&e.$set(e.chmod,"worldWrite",o.concat([null])):r>-1&&e.$set(e.chmod,"worldWrite",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.chmod,"worldWrite",i)}}})])]),e._v(" "),o("tr",[o("td",[e._v("Execute")]),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.chmod.userExecute,expression:"chmod.userExecute"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.chmod.userExecute)?e._i(e.chmod.userExecute,null)>-1:e.chmod.userExecute},on:{change:function(t){var o=e.chmod.userExecute,s=t.target,i=!!s.checked;if(Array.isArray(o)){var r=e._i(o,null);s.checked?r<0&&e.$set(e.chmod,"userExecute",o.concat([null])):r>-1&&e.$set(e.chmod,"userExecute",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.chmod,"userExecute",i)}}})]),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.chmod.groupExecute,expression:"chmod.groupExecute"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.chmod.groupExecute)?e._i(e.chmod.groupExecute,null)>-1:e.chmod.groupExecute},on:{change:function(t){var o=e.chmod.groupExecute,s=t.target,i=!!s.checked;if(Array.isArray(o)){var r=e._i(o,null);s.checked?r<0&&e.$set(e.chmod,"groupExecute",o.concat([null])):r>-1&&e.$set(e.chmod,"groupExecute",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.chmod,"groupExecute",i)}}})]),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.chmod.worldExecute,expression:"chmod.worldExecute"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.chmod.worldExecute)?e._i(e.chmod.worldExecute,null)>-1:e.chmod.worldExecute},on:{change:function(t){var o=e.chmod.worldExecute,s=t.target,i=!!s.checked;if(Array.isArray(o)){var r=e._i(o,null);s.checked?r<0&&e.$set(e.chmod,"worldExecute",o.concat([null])):r>-1&&e.$set(e.chmod,"worldExecute",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.chmod,"worldExecute",i)}}})])]),e._v(" "),o("tr",[o("td",[e._v("Permission")]),e._v(" "),o("td",[e._v(e._s(e.permission.user))]),e._v(" "),o("td",[e._v(e._s(e.permission.group))]),e._v(" "),o("td",[e._v(e._s(e.permission.world))])])])]),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"small",type:"primary",disabled:e.permissionLoading},on:{click:e.savePermission}},[e._v("Save")]),e._v(" "),o("el-button",{attrs:{size:"small",disabled:e.permissionLoading},on:{click:e.closePermissionDialog}},[e._v("Close")])],1)]),e._v(" "),o("el-dialog",{staticStyle:{"text-align":"center"},attrs:{title:this.previewImage.name,"append-to-body":!0,visible:e.previewImageDialog},on:{"update:visible":function(t){e.previewImageDialog=t}}},[o("img",{staticStyle:{"box-shadow":"0px 1px 3px 0px rgba(0,0,0,0.75)"},attrs:{src:this.previewImage.path}})])],1)};r._withStripped=!0;o(86);var n=o(0),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"e-tree-item",class:{"e-folder":e.isFolder,"e-file":!e.isFolder}},[o("div",{staticClass:"e-tree-item-title",class:{selected:e.isSelected},on:{click:e.onClick,dblclick:e.onDblclick,contextmenu:function(t){return t.stopPropagation(),t.preventDefault(),e.openContextMenu(t)}}},[e.isFolder?o("span",[e._v("["+e._s(e.isOpen?"-":"+")+"]")]):e._e(),e._v(" "+e._s(e.item.name)+"\n    ")]),e._v(" "),e.isFolder?o("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}]},e._l(e.item.children,(function(e){return o("ETreeItem",{key:e.path,attrs:{item:e}})})),1):e._e()])};a._withStripped=!0;const l=new n.default;var c=o(19),d={name:"ETreeItem",props:{item:Object},data(){return{isOpen:"/"===this.item.path,fetching:!1}},computed:{isFolder(){return"folder"===this.item.type},isSelected(){return this.item.path===this.$store.state.selectedPath},isRoot(){return"/"===this.item.path},isImage(){if(this.isFolder)return!1;const e=this.item.name.split(".");if(e.length<2)return!1;const t=e[e.length-1];return-1!==["jpg","jpeg","gif","png","bmp","webp"].indexOf(t)}},methods:{openContextMenu(e){this.$store.commit("selectPath",this.item.path),l.$emit("openContextMenu",{event:e,item:this.item})},onDblclick(){if(this.isFolder)return;if(this.isImage)return l.$emit("openImage",this.item);const{lockedFiles:e}=this.$store.state;e.indexOf(this.item.path)>-1?alert("File is locked for opening or saving. Please try again later."):l.$emit("openFileEditor",{item:this.item,force:!0})},onClick(){const e=this.isFolder?"":this.item.path;this.$store.commit("selectPath",e),this.fetching||!this.isFolder||this.isRoot||(this.isOpen=!this.isOpen,this.item.children||(this.fetching=!0,this.$ajax({task:"explorer.explodeFolder",path:this.item.path}).then(e=>{this.fetching=!1,n.default.set(this.item,"children",Object(c.a)(e))}).catch(e=>{this.fetching=!1,alert("error"),console.log(e)})))}}},h=(o(87),o(18)),u=Object(h.a)(d,a,[],!1,null,null,null);u.options.__file="src/components/ETreeItem.vue";var p=u.exports,m=o(64),f=o.n(m),g={components:{ETreeItem:p,VueContext:o(99).a},data(){const{path:e,maxFileSizeUpload:t,uploadForm:o}=FF_EXPLORER_DATA,s=e.root;return{treeData:[{name:"root",path:"/",type:"folder"}],treeHeight:"0px",contextItem:{},uploadDialog:!1,uploadDialogBusy:!1,uploadUrl:e.ajax,maxFileSizeUpload:t,uploadForm:o,permissionDialog:!1,permissionLoading:!1,chmod:{userRread:!1,userWrite:!1,userExecute:!1,groupRread:!1,groupWrite:!1,groupExecute:!1,worldRead:!1,worldWrite:!1,worldExecute:!1},rootUri:s,previewImageDialog:!1,previewImage:{path:"",name:""}}},mounted(){this.$ajax({task:"explorer.explodeFolder",path:"/"}).then(e=>{if(e.error)return alert(e.error);const t=this.treeData.find(e=>"/"===e.path);n.default.set(t,"children",Object(c.a)(e))}).catch(e=>{alert("init root folder error"),console.log(e)}),setTimeout(()=>{this.setTreeHeight()}),jQuery(window).on("resize.ffexplorer",()=>{this.setTreeHeight()}),this.$el.addEventListener("scroll",()=>{this.$refs.menu.close()}),l.$off("openContextMenu").$on("openContextMenu",e=>{this.$refs.menu.open(e.event),n.default.set(this,"contextItem",e.item)}),l.$off("openImage").$on("openImage",({name:e,path:t})=>{n.default.set(this,"previewImage",{path:this.rootUri+t,name:e}),this.previewImageDialog=!0})},computed:{isRoot(){return"/"===this.contextItem.path},uploadData(){const{params:e}=FF_EXPLORER_DATA,t={task:"explorer.upload",path:this.contextItem.path};return jQuery.extend(t,e)},permission(){let e=0,t=0,o=0;for(const s in this.chmod){this.chmod[s]&&(e="userRread"===s?e+4:e,e="userWrite"===s?e+2:e,e="userExecute"===s?e+1:e,t="groupRread"===s?t+4:t,t="groupWrite"===s?t+2:t,t="groupExecute"===s?t+1:t,o="worldRead"===s?o+4:o,o="worldWrite"===s?o+2:o,o="worldExecute"===s?o+1:o)}return{user:e,group:t,world:o}}},methods:{download(){jQuery(".context-download-file").remove();const e=jQuery("body"),t=jQuery(this.uploadForm);t.find(".file-path").val(this.contextItem.path),e.append(t),t.submit()},compress(){const e=this.$loading({lock:!0,text:"Compressing",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)",customClass:"compress-loading"});this.$ajax({task:"explorer.compress",path:this.contextItem.path}).then(e=>{if(e.error)return void alert(e.error);const t=this.getParent(this.treeData[0],this.contextItem.path);return new Promise((e,o)=>{this.refreshNode(t).then(()=>{this.$message({type:"success",message:"Compress successfully"}),e()})})}).catch(e=>{alert("error"),console.log(e)}).finally(()=>{e.close()})},savePermission(){this.permissionLoading=!0;const{permission:e}=this,{user:t,group:o,world:s}=e,i="0"+t+o+s;this.$ajax({task:"explorer.setPermission",path:this.contextItem.path,mode:i}).then(e=>{e.error?alert(e.error):this.$message({type:"success",message:"Save permission successfully!"})}).catch(e=>{console.log(e),alert("save error")}).finally(()=>{this.permissionLoading=!1})},closePermissionDialog(){this.permissionDialog=!1;const e={userRread:!1,userWrite:!1,userExecute:!1,groupRread:!1,groupWrite:!1,groupExecute:!1,worldRead:!1,worldWrite:!1,worldExecute:!1};setTimeout(()=>{n.default.set(this,"chmod",e)},300)},openPermissionDialog(){this.permissionDialog=!0,this.permissionLoading=!0,this.$ajax({task:"explorer.getPermission",path:this.contextItem.path}).then(e=>{if(e.error)alert(e.error);else if(e.permission){const t=e.permission.split("");9!==t.length&&alert("permission error"),t.forEach((e,t)=>{0===t&&"r"===e&&(this.chmod.userRread=!0),1===t&&"w"===e&&(this.chmod.userWrite=!0),2===t&&"x"===e&&(this.chmod.userExecute=!0),3===t&&"r"===e&&(this.chmod.groupRread=!0),4===t&&"w"===e&&(this.chmod.groupWrite=!0),5===t&&"x"===e&&(this.chmod.groupExecute=!0),6===t&&"r"===e&&(this.chmod.worldRead=!0),7===t&&"w"===e&&(this.chmod.worldWrite=!0),8===t&&"x"===e&&(this.chmod.worldExecute=!0)})}}).catch(e=>{console.log(e),alert("error")}).finally(()=>{this.permissionLoading=!1})},onSuccessUpload(e,t,o){if(e.error){alert(e.error);const s=o.findIndex(e=>e.uid===t.uid);o.splice(s,1)}},onCloseUploadDialog(){this.uploadDialogBusy=!0,this.refreshNode(this.contextItem).then(()=>{this.uploadDialogBusy=!1,this.uploadDialog=!1})},delayCall(e){setTimeout(()=>{this[e]&&this[e]()})},isLockedFile(e){const{lockedFiles:t}=this.$store.state;return t.indexOf(e)>-1},isLockedFolder(e){const{lockedFiles:t}=this.$store.state;return t.some(t=>0===t.indexOf(e))},refresh(){const e=this.$loading({lock:!0,text:"Refreshing",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)",customClass:"compress-loading"});this.refreshNode(this.contextItem).catch(e=>{console.log(e),alert("refresh error")}).finally(()=>{setTimeout(()=>{e.close()},300)})},refreshNode(e){return new Promise((t,o)=>{this.$ajax({task:"explorer.explodeFolder",path:e.path}).then(s=>{if(s.error)alert(s.error),o(s.error);else{const t=e.children||[];s.filter(e=>!t.find(t=>t.path===e.path)).forEach(e=>t.push(e)),t.filter(e=>!s.find(t=>t.path===e.path)).forEach(e=>{const o=t.findIndex(t=>t.path===e.path);t.splice(o,1)}),n.default.set(e,"children",Object(c.a)(t))}t()}).catch(e=>{o(e)})})},newFile(){this.$prompt("","New File",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputPattern:/^[^,\\\/:\*\?"<>|]+$/,inputErrorMessage:'File name should not contain ^ , \\ / : * ? " < > |',showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,closeOnHashChange:!1,confirmButtonLoading:!1,showCancelButton:!0,beforeClose:(e,t,o)=>{"confirm"==e?this.doCreateNew("explorer.newFile",t,o):o()}}).then(({value:e})=>{this.$message({type:"success",message:"New file has been created: "+e})}).catch(()=>{})},newFolder(){this.$prompt("","New Folder",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputPattern:/^[^,\\\/:\*\?"<>|]+$/,inputErrorMessage:'Folder name should not contain ^ , \\ / : * ? " < > |',showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,closeOnHashChange:!1,confirmButtonLoading:!1,showCancelButton:!0,beforeClose:(e,t,o)=>{"confirm"==e?this.doCreateNew("explorer.newFolder",t,o):o()}}).then(({value:e})=>{this.$message({type:"success",message:"New Folder has been created: "+e})}).catch(()=>{})},renameFolder(){this.isLockedFolder(this.contextItem.path)?alert("Folder is locked. Having some files are opening or saving. Please wait till process done then try again."):this.$prompt('Rename folder "'+this.contextItem.name+'"',"Rename Folder",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputValue:this.contextItem.name,inputPattern:/^[^,\\\/:\*\?"<>|]+$/,inputErrorMessage:'Folder name should not contain ^ , \\ / : * ? " < > |',showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,closeOnHashChange:!1,confirmButtonLoading:!1,showCancelButton:!0,beforeClose:(e,t,o)=>{"confirm"==e?this.doRename("explorer.renameFolder",t,o):o()}}).then(({value:e})=>{this.$message({type:"success",message:"Your folder name has been change to "+e})}).catch(()=>{})},deleteFolder(){this.isLockedFolder(this.contextItem.path)?alert("Folder is locked. Having some files are opening or saving. Please wait till process done then try again."):this.$confirm("This will permanently delete this folder and its files. Continue?",'Delete folder "'+this.contextItem.name+'"',{confirmButtonText:"OK",cancelButtonText:"Cancel",showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,closeOnHashChange:!1,confirmButtonLoading:!1,showCancelButton:!0,beforeClose:(e,t,o)=>{"confirm"==e?this.doDelete("explorer.deleteFolder",t,o):o()}}).then(()=>{this.$message({type:"success",message:"Folder is deleted"})}).catch(()=>{})},openFile(){this.isLockedFile(this.contextItem.path)?alert("File is locked for opening or saving. Please try again later."):l.$emit("openFileEditor",{item:this.contextItem,force:!0})},renameFile(){this.isLockedFile(this.contextItem.path)?alert("File is locked for opening or saving. Please try again later."):this.$prompt('Rename file "'+this.contextItem.name+'"',"Rename File",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputValue:this.contextItem.name,inputPattern:/^[^,\\\/:\*\?"<>|]+$/,inputErrorMessage:'File name should not contain ^ , \\ / : * ? " < > |',showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,closeOnHashChange:!1,confirmButtonLoading:!1,showCancelButton:!0,beforeClose:(e,t,o)=>{"confirm"==e?this.doRename("explorer.renameFile",t,o):o()}}).then(({value:e})=>{this.$message({type:"success",message:"Success"})}).catch(()=>{})},deleteFile(){this.isLockedFile(this.contextItem.path)?alert("File is locked for opening or saving. Please try again later."):this.$confirm("This will permanently delete this file. Continue?",'Delete file "'+this.contextItem.name+'"',{confirmButtonText:"OK",cancelButtonText:"Cancel",showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,closeOnHashChange:!1,confirmButtonLoading:!1,showCancelButton:!0,beforeClose:(e,t,o)=>{"confirm"==e?this.doDelete("explorer.deleteFile",t,o):o()}}).then(({value:e})=>{this.$message({type:"success",message:"File is deleted"})}).catch(()=>{})},doCreateNew(e,t,o){t.showCancelButton=!1,t.confirmButtonLoading=!0,this.$ajax({task:e,name:t.inputValue,path:this.contextItem.path}).then(e=>{if(!e.error)return this.refreshNode(this.contextItem).then(()=>o());t.showCancelButton=!0,t.confirmButtonLoading=!1,alert(e.error)}).catch(e=>{alert("create new error")})},doRename(e,t,o){t.showCancelButton=!1,t.confirmButtonLoading=!0,this.$ajax({task:e,newName:t.inputValue,oldPath:this.contextItem.path}).then(e=>{if(e.error)t.showCancelButton=!0,t.confirmButtonLoading=!1,alert(e.error);else{const t=this.getParent(this.treeData[0],this.contextItem.path);this.refreshNode(t).then(()=>{const t="file"===this.contextItem.type?"fileNameChanged":"folderNameChanged";l.$emit(t,e.data,this.contextItem),o()})}}).catch(e=>{alert("rename error")})},doDelete(e,t,o){t.showCancelButton=!1,t.confirmButtonLoading=!0,this.$ajax({task:e,path:this.contextItem.path}).then(e=>{if(!e.error){const e=this.getParent(this.treeData[0],this.contextItem.path),t=e.children.findIndex(e=>e.path===this.contextItem.path);return e.children.splice(t,1),this.refreshNode(e).then(()=>{const e="file"===this.contextItem.type?"fileDeleted":"folderDeleted";l.$emit(e,this.contextItem),o()})}t.showCancelButton=!0,t.confirmButtonLoading=!1,alert(e.error)}).catch(e=>{alert("delete error.")})},setTreeHeight:f()((function(){const e=jQuery,t=e(window).height();this.treeHeight=t-e(".e-folders").offset().top-35+"px"}),100),getParent(e,t){var o;return e.children.some(s=>s.path===t?o=e:s.children?o=this.getParent(s,t):void 0),o||null}}},v=(o(88),Object(h.a)(g,r,[],!1,null,null,null));v.options.__file="src/components/ETree.vue";var x={components:{ETree:v.exports},data:()=>({app:"explorer"}),methods:{changeApp(){this.$store.dispatch("setApp",this.app)}}},_=(o(89),Object(h.a)(x,i,[],!1,null,null,null));_.options.__file="src/components/ESidebar.vue";var w=_.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"e-content"},[o("draggable",e._b({staticClass:"e-content-tabs",model:{value:e.files,callback:function(t){e.files=t},expression:"files"}},"draggable",e.dragOptions,!1),e._l(e.files,(function(t){return o("div",{key:t.path,staticClass:"e-content-tab-item",class:{active:t.path===e.current,deleted:"deleted"===t.status},attrs:{title:t.path},on:{click:function(o){return e.open(t)},mouseup:function(o){return"button"in o&&1!==o.button?null:e.close(t.path)}}},["saving"===t.status?o("div",{staticClass:"file-status is-saving"},[e._v("•")]):e._e(),e._v(" "),"dirty"===t.status?o("div",{staticClass:"file-status is-dirty"},[e._v("•")]):e._e(),e._v(" "),o("div",{staticClass:"tab-item-title"},[e._v(e._s(t.name))]),e._v(" "),o("svg",{staticClass:"svg-inline--fa fa-times fa-w-11",style:{visibility:t.path===e.current?"visible":"hidden"},attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times",role:"img",xmlns:"http://www.w3.org/2000/svg",license:"https://fontawesome.com/license",viewBox:"0 0 352 512"},on:{click:function(o){return o.stopPropagation(),e.close(t.path)}}},[o("path",{attrs:{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}})])])})),0),e._v(" "),o("EContentEditor",{ref:"editor",on:{removeFile:e.close,statusChange:e.onStatusChange}})],1)};y._withStripped=!0;var C=o(90),E=o.n(C),$=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"e-content-editor",style:{height:this.editorHeight}})};$._withStripped=!0;let k=!1,b={};var F={data:()=>({editorHeight:"0px",current:""}),mounted(){b={},k=!1,l.$off("fileNameChanged").$on("fileNameChanged",(e,t)=>{if(b[t.path]){const o=b[t.path];o.path=e.path,b[e.path]=o,delete b[t.path],this.current===t.path&&(this.current=e.path)}}),l.$off("fileDeleted").$on("fileDeleted",e=>{const t=b[e.path];t&&(t.readOnly=!0,this.current===e.path&&k.updateOptions({readOnly:!0}))}),l.$off("folderNameChanged").$on("folderNameChanged",(e,t)=>{for(const o in b){if(0!==o.indexOf(t.path))return;const s=o.slice(t.path.length-o.length),i=e.path+s;b[i]=b[o],delete b[o],this.current===o&&(this.current=i)}}),l.$off("folderDeleted").$on("folderDeleted",e=>{for(const t in b){if(0!==t.indexOf(e.path))return;b[t].readOnly=!0,this.current===t&&k.updateOptions({readOnly:!0})}}),jQuery(window).on("resize.ffexplorer",()=>{this.computeEditorHeight(),this.resizeEditorLayout()}),this.createEditor().then(()=>{this.resizeEditorLayout()}),setTimeout(()=>{this.computeEditorHeight()})},methods:{async initEditor(e,t){k||await this.createEditor();const o=e.path;if(this.current!==o||t){if(this.current&&b[this.current]&&(b[this.current].model=k.getModel(),b[this.current].state=k.saveViewState()),this.current=o,!b[o]||t){const t=this.parseLanguage(e.name),s=monaco.editor.createModel("loading...",t),i={model:s,state:{},lastSaved:s.getAlternativeVersionId(),status:"opening",readOnly:!0,path:o};b[o]=i,this.emitEditorStatus(i),this.$store.commit("lock",o),this.getFileContent(o).then(e=>{i.status="normal",i.readOnly=!1,i.model=monaco.editor.createModel(e.content,t),i.model.onDidChangeContent(()=>{"saving"!==i.status&&(this.checkDirty(i),this.emitEditorStatus(i))}),this.emitEditorStatus(i),this.current===i.path&&(k.layout(),this.updateEditor(i))}).catch(e=>{alert("Could not open this file"),i.status="normal",this.emitEditorStatus(i),this.$emit("removeFile",i.path)}).finally(()=>{this.$store.commit("unlock",o)})}this.updateEditor(b[o])}},checkDirty(e){const t=e.lastSaved!==e.model.getAlternativeVersionId();e.status=t?"dirty":"normal"},updateEditor({model:e,state:t,readOnly:o}){k.setModel(e),k.restoreViewState(t),k.updateOptions({readOnly:o}),k.layout(),k.focus()},parseLanguage(e){const t={js:"javascript",php:"php",scss:"scss",css:"css",less:"less",sql:"mysql",ini:"ini",xml:"xml",html:"html",svg:"html",json:"json",md:"markdown",gitignore:"markdown"};if(-1===e.indexOf("."))return"";const o=e.split(".").pop();return t[o]?t[o]:""},saveContent(e,t){return new Promise((o,s)=>{this.$ajax({task:"explorer.saveContent",content:t,path:e}).then(e=>{o(e)}).catch(e=>{s(e)})})},emitEditorStatus({status:e,path:t}){this.$emit("statusChange",{status:e,path:t})},getFileContent(e){return new Promise((t,o)=>{this.$ajax({task:"explorer.openFile",path:e}).then(e=>{!e||e.error?o():t(e)}).catch(e=>{o()})})},createEditor(){return new Promise((e,t)=>{window.require(["vs/editor/editor.main"],()=>{k||(k=monaco.editor.create(this.$el,{model:null})),k.addCommand(monaco.KeyMod.CtrlCmd|monaco.KeyCode.KEY_S,()=>{const e=this.current,t=b[e];if(!t||"saving"===t.status||t.readOnly)return;t.status="saving",this.emitEditorStatus(t),this.$store.commit("lock",e);const o=k.getValue(),s=t.model.getAlternativeVersionId();this.saveContent(e,o).then(o=>{o.error?alert(o.error):t.lastSaved=s,this.$store.commit("unlock",e)}).catch(t=>{alert("save error"),console.log(t),this.$store.commit("unlock",e)}).finally(()=>{this.checkDirty(t),this.emitEditorStatus(t)})}),e()})})},removeFile(e){delete b[e]},resetEditor(){k&&k.dispose(),k="",this.current=""},resizeEditorLayout:f()((function(){k&&k.layout()}),100),computeEditorHeight:f()((function(){const e=jQuery,t=e(window).height();this.editorHeight=t-e(".e-folders").offset().top-35+"px"}),100)}},I=(o(92),Object(h.a)(F,$,[],!1,null,null,null));I.options.__file="src/components/EContentEditor.vue";var O={components:{EContentEditor:I.exports,draggable:E.a},data:()=>({files:[],dragOptions:{ghostClass:"ghost"},current:""}),mounted(){const e=this.$el.querySelector(".e-content-tabs");e.addEventListener("wheel",t=>{t.deltaY>0?e.scrollLeft+=20:e.scrollLeft-=20}),l.$off("openFileEditor").$on("openFileEditor",({item:t,force:o})=>{const s=this.files.find(e=>e.path===t.path),i=this.files.findIndex(e=>e.path===this.current);if(!s){const e=-1===i?0:i+1;this.files.splice(e,0,{name:t.name,path:t.path,status:"opening"})}this.current=t.path,this.open(t,o),o&&setTimeout(()=>{const t=e.querySelector(".active");t&&(e.scrollLeft+e.offsetWidth<t.offsetLeft+t.offsetWidth&&(e.scrollLeft=t.offsetLeft+t.offsetWidth-e.offsetWidth),e.scrollLeft>t.offsetLeft+t.offsetWidth&&(e.scrollLeft=t.offsetLeft))},100)}),l.$off("fileNameChanged").$on("fileNameChanged",(e,t)=>{const o=this.files.find(e=>e.path===t.path);o&&(o.path=e.path,o.name=e.name,this.current===t.path&&(this.current=e.path))}),l.$off("fileDeleted").$on("fileDeleted",e=>{const t=this.files.find(t=>t.path===e.path);t&&(t.status="deleted")}),l.$off("folderNameChanged").$on("folderNameChanged",(e,t)=>{this.files.forEach(o=>{if(0!==o.path.indexOf(t.path))return;const s=o.path.slice(t.path.length-o.path.length);this.current===o.path&&(this.current=e.path+s),o.path=e.path+s})}),l.$off("folderDeleted").$on("folderDeleted",e=>{this.files.forEach(t=>{0===t.path.indexOf(e.path)&&(t.status="deleted")})})},methods:{open(e,t){this.current=e.path,this.$refs.editor.initEditor(e,t),this.$store.commit("setHistory",e.path)},close(e){const t=this.files.find(t=>t.path===e);if("saving"===t.status)return void alert("Saving. Can not close for now.");if("opening"===t.status)return void alert("Opening. Can not close for now.");if("dirty"===t.status){if(!confirm("Your content haven't save yet. Do you want to close without saving?"))return}const o=this.files.findIndex(t=>t.path===e);if(-1!==o){this.files.splice(o,1),this.$refs.editor.removeFile(e),this.$store.commit("deleteHistory",e);const{history:t}=this.$store.state;if(this.current===e&&t.length){const e=this.files.find(e=>e.path===t[t.length-1]);e?this.open(e):this.current=""}this.files.length||(this.current="",this.$refs.editor.resetEditor())}},onStatusChange({status:e,path:t}){const o=this.files.find(e=>e.path===t);o&&(o.status=e)}}},D=(o(93),Object(h.a)(O,y,[],!1,null,null,null));D.options.__file="src/components/EContent.vue";var R={components:{ESidebar:w,EContent:D.exports}},P=(o(94),Object(h.a)(R,s,[],!1,null,null,null));P.options.__file="src/components/EApp.vue";t.default=P.exports},68:function(e,t,o){},77:function(e,t,o){},78:function(e,t,o){},79:function(e,t,o){},80:function(e,t,o){},81:function(e,t,o){},87:function(e,t,o){"use strict";var s=o(68);o.n(s).a},88:function(e,t,o){"use strict";var s=o(77);o.n(s).a},89:function(e,t,o){"use strict";var s=o(78);o.n(s).a},92:function(e,t,o){"use strict";var s=o(79);o.n(s).a},93:function(e,t,o){"use strict";var s=o(80);o.n(s).a},94:function(e,t,o){"use strict";var s=o(81);o.n(s).a}}]);