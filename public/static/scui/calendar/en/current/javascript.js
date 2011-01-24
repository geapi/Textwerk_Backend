SCUI.PAST="past";SCUI.PRESENT="present";SCUI.TODAY="today";SCUI.FUTURE="future";SCUI.CalendarView=SC.View.extend({weekdayStrings:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthStartOn:SC.DateTime.create({day:1}),selectedDate:null,displayProperties:["monthStartOn"],resetToSelectedDate:function(){var a=this.get("selectedDate");
if(a){this.set("monthStartOn",a.adjust({day:1}))}},mouseDown:function(a){var b=this._parseSelectedDate(a.target.id);
if(b){this.set("selectedDate",b)}if(a.target.className==="button previous"){this.$(".button.previous").addClass("active")
}else{if(a.target.className==="button next"){this.$(".button.next").addClass("active")
}}return YES},mouseUp:function(a){var b=this.get("monthStartOn");if(a.target.className==="button previous active"){this.set("monthStartOn",b.advance({month:-1}));
this.$(".button.previous").removeClass("active")}else{if(a.target.className==="button next active"){this.set("monthStartOn",b.advance({month:1}));
this.$(".button.next").removeClass("active")}}return YES},render:function(c,b){var g=this.get("monthStartOn");
var h=g.get("dayOfWeek");var e=g.advance({day:-h});var f=this.get("selectedDate");
var m=SC.DateTime.create();var k=this.get("weekdayStrings");var a,j;c=c.begin("div").addClass("header").begin("div").addClass("month").text(g.toFormattedString("%B %Y")).end().begin("div").addClass("button previous").end().begin("div").addClass("button next").end().end().begin("div").addClass("body");
for(var d=0;d<7;d++){c=c.begin("div").addClass("day header").text(k[d]).end()}c=c.begin("div").addClass("grid");
for(var l=0;l<42;l++){j=this._createUniqueDayIdentifier(e);if(e.get("month")<g.get("month")||e.get("month")>g.get("month")){c=c.begin("div").attr("id",j).addClass("day past").text(e.get("day")).end()
}else{a=["present"];if(e.get("day")===m.get("day")&&e.get("month")===m.get("month")&&e.get("year")===m.get("year")){a.push("today")
}if(f&&e.get("day")===f.get("day")&&e.get("month")===f.get("month")&&e.get("year")===f.get("year")){a.push("sel")
}c=c.begin("div").attr("id",j).addClass("day").addClass(a.join(" ")).text(e.get("day")).end()
}e=e.advance({day:1})}c=c.end().end()},_createUniqueDayIdentifier:function(d){var a=d.get("day");
var c=d.get("month");var b=d.get("year");return"scuidate-%@-%@-%@-%@".fmt(this.get("layerId"),a,c,b)
},_parseSelectedDate:function(e){if(!SC.empty(e)){var a=e.split("-");if(a.length===5&&a[0]==="scuidate"&&a[1]===this.get("layerId")){var b=a[2];
var d=a[3];var c=a[4];return SC.DateTime.create({day:b,month:d,year:c})}}return null
}});sc_require("core");SCUI.DateView=SC.View.extend(SCUI.SimpleButton,{classNames:["scui-date"],date:null,calendarView:null,timing:SCUI.PRESENT,content:null,isSelected:NO,init:function(){this.set("target",this);
this.set("action","_selectedDate");arguments.callee.base.apply(this,arguments)},displayProperties:["date","isSelected","timing"],render:function(c,e){var b=this.get("date")||SC.DateTime.create();
var d=this.get("timing");var a=this.get("isSelected");c.setClass(SCUI.PAST,SCUI.PAST===d);
c.setClass(SCUI.PRESENT,SCUI.PRESENT===d);c.setClass(SCUI.TODAY,SCUI.TODAY===d);c.setClass(SCUI.FUTURE,SCUI.FUTURE===d);
c.setClass("sel",a);c.begin("div").attr("class","date_number").push(b.get("day")).end()
},_selectedDate:function(){var a=this.get("calendarView");var b=this.get("date");
if(a){a.set("selectedDate",b)}}});sc_require("core");SCUI.DatePickerView=SC.View.extend({classNames:["scui-datepicker-view"],date:null,dateString:"",isShowingCalendar:NO,hint:"Click to choose...",dateFormat:null,_textfield:null,_date_button:null,_calendar_popup:null,_calendar:null,_layout:{width:195,height:25},displayProperties:["date"],init:function(){arguments.callee.base.apply(this,arguments);
this.set("dateString",this._genDateString(this.get("date")));var b=this.get("layout"),a=this;
b=SC.merge(this._layout,b);this.set("layout",b);this._calendar_popup=SC.PickerPane.create({layout:{width:205,height:255},contentView:SC.View.design({childViews:"calendar todayButton noneButton".w(),calendar:SCUI.CalendarView.design({classNames:["calendar"],layout:{left:0,top:0,height:230,right:0},selectedDateBinding:SC.Binding.from("date",a)}),todayButton:SC.View.extend(SCUI.SimpleButton,{classNames:["scui-datepicker-today"],layout:{left:10,bottom:5,width:50,height:18},target:this,action:"selectToday",render:function(c,d){if(d){c.push("Today")
}}}),noneButton:SC.View.design(SCUI.SimpleButton,{classNames:["scui-datepicker-none"],layout:{right:10,bottom:5,width:50,height:18},target:this,action:"clearSelection",render:function(c,d){if(d){c.push("None")
}}})})});if(this._calendar_popup){this.bind("isShowingCalendar","._calendar_popup.isPaneAttached");
this._calendar=this._calendar_popup.getPath("contentView.calendar")}},createChildViews:function(){var a,c=[];
var b=this;a=this._textfield=this.createChildView(SC.TextFieldView.design({layout:{left:0,top:0,right:0,bottom:0},classNames:["scui-datechooser-text"],isEnabled:YES,isEnabledBinding:SC.binding("isEnabled",b),valueBinding:".parentView.dateString",hint:this.get("hint"),mouseDown:function(d){b.toggle();
arguments.callee.base.apply(this,arguments)}}));c.push(a);a=this._date_button=this.createChildView(SC.View.design(SCUI.SimpleButton,{classNames:["scui-datechooser-button","calendar-icon"],layout:{right:5,top:4,width:16,height:16},target:this,action:"toggle",isEnabledBinding:SC.binding("isEnabled",b)}));
c.push(a);this.set("childViews",c);arguments.callee.base.apply(this,arguments)},hideCalendar:function(){if(this._calendar_popup){this._calendar_popup.remove();
this.set("isShowingCalendar",NO)}},showCalendar:function(){if(this._calendar_popup){this._calendar_popup.popup(this._textfield);
this._calendar.resetToSelectedDate();this.set("isShowingCalendar",YES)}},toggle:function(){if(this.isShowingCalendar){this.hideCalendar()
}else{this.showCalendar()}},selectToday:function(){this._calendar.set("selectedDate",SC.DateTime.create())
},clearSelection:function(){this._calendar.set("selectedDate",null)},_genDateString:function(b){var a=this.get("dateFormat")||"%a %m/%d/%Y";
var c=b?b.toFormattedString(a):"";return c},_dateDidChange:function(){this.set("dateString",this._genDateString(this.get("date")));
this.hideCalendar()}.observes("date")});if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("scui/calendar")
};