KISSY.Editor.add("table/dialog/support",function(){function d(a){return f(a).length!=0}function k(a){this.editor=a;g.Utils.lazyRun(this,"_prepareTableShow","_realTableShow")}var i=KISSY,g=i.Editor,p=i.Node,l=i.DOM,q=i.UA,f=i.trim,m=g.TableUI,j=m.showBorderClassName,r=g.Dialog;l.addStyleSheet(".ke-table-config td {padding:2px;}","ke-table-dialog");m.Dialog=k;var s=g.Utils.addRes,t=g.Utils.destroyRes;i.augment(k,{_tableInit:function(){var a=new r({autoRender:true,width:"500px",mask:true,headerContent:"\u8868\u683c",
bodyContent:"<div style='padding:20px 20px 10px 20px;'><table class='ke-table-config' style='width:100%'><tr><td><label>\u884c\u6570\uff1a <input  data-verify='^(?!0$)\\d+$'  data-warning='\u884c\u6570\u8bf7\u8f93\u5165\u6b63\u6574\u6570'  value='2'  class='ke-table-rows ke-table-create-only ke-input' style='margin-left:2px;vertical-align:middle;' size='6' /></label></td><td><label>\u5bbd&nbsp;&nbsp;&nbsp;\u5ea6\uff1a <input  data-verify='^(?!0$)\\d+$'  data-warning='\u5bbd\u5ea6\u8bf7\u8f93\u5165\u6b63\u6574\u6570' value='200' style='margin-left:2px;vertical-align:middle;' class='ke-table-width ke-input' size='6'/></label> <select class='ke-table-width-unit'><option value='px'>\u50cf\u7d20</option><option value='%'>\u767e\u5206\u6bd4</option></select></td></tr><tr><td><label>\u5217\u6570\uff1a <input  data-verify='^(?!0$)\\d+$'  data-warning='\u5217\u6570\u8bf7\u8f93\u5165\u6b63\u6574\u6570' class='ke-table-cols ke-table-create-only ke-input' style='margin-left:2px;vertical-align:middle;'value='3' size='6'/></label></td><td><label>\u9ad8&nbsp;&nbsp;&nbsp;\u5ea6\uff1a <input  data-verify='^((?!0$)\\d+)?$'  data-warning='\u9ad8\u5ea6\u8bf7\u8f93\u5165\u6b63\u6574\u6570' value='' style='margin-left:2px;vertical-align:middle;'class='ke-table-height ke-input' size='6'/></label> &nbsp;\u50cf\u7d20</td></tr><tr><td><label>\u5bf9\u9f50\uff1a <select class='ke-table-align'><option value=''>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option><option value='center'>\u4e2d\u95f4\u5bf9\u9f50</option></select></label></td><td><label>\u6807\u9898\u683c\uff1a <select class='ke-table-head ke-table-create-only'><option value=''>\u65e0</option><option value='1'>\u6709</option></select></td></tr><tr><td><label>\u8fb9\u6846\uff1a <input  data-verify='^\\d+$'  data-warning='\u8fb9\u6846\u8bf7\u8f93\u5165\u975e\u8d1f\u6574\u6570' value='1' style='margin-left:2px;vertical-align:middle;'class='ke-table-border ke-input' size='6'/></label> &nbsp;\u50cf\u7d20</td><td><label class='ke-table-cellpadding-holder'>\u8fb9&nbsp;&nbsp;&nbsp;\u8ddd\uff1a <input  data-verify='^(\\d+)?$'  data-warning='\u8fb9\u6846\u8bf7\u8f93\u5165\u975e\u8d1f\u6574\u6570' value='0' style='margin-left:2px;vertical-align:middle;'class='ke-table-cellpadding ke-input' size='6'/> &nbsp;\u50cf\u7d20</label></td></tr><tr><td colspan='2'><label>\u6807\u9898\uff1a <input class='ke-table-caption ke-input' style='width:380px;margin-left:2px;vertical-align:middle;'></label></td></tr></table></div>",
footerContent:"<div style='padding:5px 20px 20px;'><a class='ke-table-ok ke-button' style='margin-right:20px;'>\u786e\u5b9a</a> <a class='ke-table-cancel ke-button'>\u53d6\u6d88</a></div>"}),b=a.get("body"),c=a.get("footer");a.twidth=b.one(".ke-table-width");a.theight=b.one(".ke-table-height");a.tborder=b.one(".ke-table-border");a.tcaption=b.one(".ke-table-caption");a.talign=g.Select.decorate(b.one(".ke-table-align"));a.trows=b.one(".ke-table-rows");a.tcols=b.one(".ke-table-cols");a.thead=g.Select.decorate(b.one(".ke-table-head"));
a.cellpaddingHolder=b.one(".ke-table-cellpadding-holder");a.cellpadding=b.one(".ke-table-cellpadding");var e=c.one(".ke-table-ok");c=c.one(".ke-table-cancel");a.twidthunit=g.Select.decorate(b.one(".ke-table-width-unit"));this.tableDialog=a;e.on("click",this._tableOk,this);c.on("click",function(){a.hide()});s.call(this,a,a.twidthunit,e,c)},_tableOk:function(){var a=this,b=a.tableDialog,c=b.get("el").all("input");if(b.twidthunit.val()=="%"){b=parseInt(b.twidth.val());if(!b||b>100||b<0){alert("\u5bbd\u5ea6\u767e\u5206\u6bd4\uff1a\u8bf7\u8f93\u51651-100\u4e4b\u95f4");
return}}if(g.Utils.verifyInputs(c)){a.tableDialog.hide();setTimeout(function(){a.selectedTable?a._modifyTable():a._genTable()},0)}},_modifyTable:function(){var a=this.tableDialog,b=this.selectedTable,c=b.one("caption"),e=a.talign.val(),h=a.tborder.val();d(e)?b.attr("align",f(e)):b.removeAttr("align");d(h)?b.attr("border",f(h)):b.removeAttr("border");!d(h)||h=="0"?b.addClass(j):b.removeClass(j);d(a.twidth.val())?b.css("width",f(a.twidth.val())+a.twidthunit.val()):b.css("width","");d(a.theight.val())?
b.css("height",f(a.theight.val())):b.css("height","");a.cellpadding.val(parseInt(a.cellpadding.val())||0);this.selectedTd&&this.selectedTd.css("padding",a.cellpadding.val());if(d(a.tcaption.val())){a=g.Utils.htmlEncode(f(a.tcaption.val()));if(c&&c[0])c.html(a);else{b=b[0].createCaption();l.html(b,"<span>"+a+"</span>")}}else c&&c._4e_remove()},_genTable:function(){var a=this.tableDialog,b="<table ",c=parseInt(a.tcols.val())||1,e=parseInt(a.trows.val())||1,h=q.ie?"":"<br/>",n=this.editor;if(d(a.talign.val()))b+=
"align='"+f(a.talign.val())+"' ";if(d(a.tborder.val()))b+="border='"+f(a.tborder.val())+"' ";if(d(a.twidth.val())||d(a.theight.val())){b+="style='";if(d(a.twidth.val()))b+="width:"+f(a.twidth.val())+a.twidthunit.val()+";";if(d(a.theight.val()))b+="height:"+f(a.theight.val())+"px;";b+="' "}if(!d(a.tborder.val())||f(a.tborder.val())==="0")b+="class='"+j+"' ";b+=">";if(d(a.tcaption.val()))b+="<caption><span>"+g.Utils.htmlEncode(f(a.tcaption.val()))+"</span></caption>";if(a.thead.val()){b+="<thead>";
b+="<tr>";for(a=0;a<c;a++)b+="<th>"+h+"</th>";b+="</tr>";b+="</thead>";e-=1}b+="<tbody>";for(var o=0;o<e;o++){b+="<tr>";for(a=0;a<c;a++)b+="<td>"+h+"</td>";b+="</tr>"}b+="</tbody>";b+="</table>";b=new p(b,null,n.document);n.insertElement(b)},_fillTableDialog:function(){var a=this.tableDialog,b=this.selectedTable,c=b.one("caption");if(this.selectedTd)a.cellpadding.val(parseInt(this.selectedTd.css("padding"))||"0");a.talign.val(b.attr("align")||"");a.tborder.val(b.attr("border")||"0");var e=b._4e_style("width")||
""+b.width();a.twidth.val(e.replace(/px|%|(.*pt)/i,""));e.indexOf("%")!=-1?a.twidthunit.val("%"):a.twidthunit.val("px");a.theight.val((b._4e_style("height")||"").replace(/px|%/i,""));e="";if(c)e=c.text();a.tcaption.val(e);c=b._4e_first(function(h){return h._4e_name()=="thead"});a.trows.val(b.one("tbody").children().length+(c?c.children("tr").length:0));a.tcols.val(b.one("tr").children().length);a.thead.val(c?"1":"")},_realTableShow:function(){var a=this.tableDialog;if(this.selectedTable){this._fillTableDialog();
a.get("el").all(".ke-table-create-only").attr("disabled","disabled");a.thead.disable()}else{a.get("el").all(".ke-table-create-only").removeAttr("disabled");a.thead.enable()}this.selectedTd?a.cellpaddingHolder.show():a.cellpaddingHolder.hide();this.tableDialog.show()},_prepareTableShow:function(){this._tableInit()},show:function(a,b){this.selectedTable=a;this.selectedTd=b;this._prepareTableShow()},destroy:function(){t.call(this)}})});