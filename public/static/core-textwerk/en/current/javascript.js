CoreTextwerk=SC.Object.create({REMOTE_DATA_SOURCE:1,FIXTURES_DATA_SOURCE:2,dataSourceType:1,_currentRecordID:0,initializeStore:function(){var b;
if(CoreTextwerk.get("dataSourceType")===CoreTextwerk.REMOTE_DATA_SOURCE){b=CoreTextwerk.Corpus.create();
SC.Logger.log("Using remote data source.")}else{b=SC.FixturesDataSource.create();
SC.Logger.log("Using fixtures data source.")}var a=SC.Store.create();a.set("dataSource",b);
this.set("store",a)},findRecord:function(b,a){return this.get("store").find(b,a)},findRecords:function(a){return this.get("store").find(a)
},createRecord:function(b,a){if(!a){a={}}if(a.id===undefined){a.id=this._currentRecordID+"";
this._currentRecordID--}return this.get("store").createRecord(b,a)},destroyRecord:function(b){if(SC.none(b)||!SC.kindOf(b,SC.Record)){return NO
}var a=b.get("storeKey");this.get("store").destroyRecord(null,null,a);return YES}});
CoreTextwerk.Store=SC.Store.extend({});CoreTextwerk.Corpus=SC.DataSource.extend({_currentRecordID:0,fetch:function(a,c){var e=c.get("recordType"),b=e.prototype.url,d=YES;
console.log("getting "+e+" remotely");if(b==SC.empty()){d=NO}if(d){SC.Request.getUrl(b).header({Accept:"application/json"}).json().notify(this,"_didFetch",{query:c,store:a}).send();
return YES}else{return NO}},_didFetch:function(e,g){var c=g.store;var f=g.query;var b=e.get("response");
var h=f.get("recordType");if(SC.ok(b)){var d=e.get("body");if(d.content){var a=d.status;
if(a=="ok"){c.loadRecords(h,d.content);console.log("loaded "+d.content.length+" of type "+h);
c.dataSourceDidFetchQuery(f)}else{console.log("Error: "+d.content);c.dataSourceDidErrorQuery(f,b)
}}}else{console.log("error getting data for "+h+" from server with: "+e.get("body").content);
c.dataSourceDidErrorQuery(f,b)}},retrieveRecord:function(a,c){var b="/documents";
var f=a.recordTypeFor(c),e=a.idFor(c);var e=a.idFor(c);var d={store:a,storeKey:c};
return YES},_didRetrievePaper:function(d,e){var b=e.store,c=e.storeKey,a=d.get("response");
results=d.get("body");CoreTextwerk.set("ds",results.content);if(SC.$ok(a)){console.log("content: "+results.content);
b.dataSourceDidComplete(c,a);return YES}else{b.dataSourceDidError(c,a);return NO}},updateRecord:function(a,b){a.dataSourceDidComplete(b);
return YES},findRecord:function(b,a){return this.get("store").find(b,a)},findRecords:function(a){return this.get("store").find(a)
},createRecord:function(b,a){if(!a){a={}}if(a.id===undefined){a.id=this._currentRecordID+"";
this._currentRecordID--}return this.get("store").createRecord(b,a)},destroyRecord:function(b){if(SC.none(b)||!SC.kindOf(b,SC.Record)){return NO
}var a=b.get("storeKey");this.get("store").destroyRecord(null,null,a);return YES}});
CoreTextwerk.Affiliation=SC.Record.extend({primaryKey:"id",name:SC.Record.attr(String),url:"/affiliations"});
CoreTextwerk.Author=SC.Record.extend({primaryKey:"id",name:SC.Record.attr(String),url:"/authors"});
CoreTextwerk.Collection=SC.Record.extend({url:"/documents?coll=true",primaryKey:"id",name:SC.Record.attr(String,{isRequired:YES,defaultValue:"Enter Collection Name"}),papers:SC.Record.toMany("CoreTextwerk.Paper",{inverse:"collection",isMaster:YES}),members:function(){var d=this.get("papers");
var c,a,b=[];a=d.get("length");for(c=0;c<a;c++){b.push(d.objectAt(c))}return b}.property("papers").cacheable(),nameAndCount:function(){return this.get("name")+" (%@)".fmt(this.get("papers").get("length"))
}.property("papers").cacheable(),addMember:function(d){var a=CoreTextwerk.get("store");
if(a&&d){var c=CoreTextwerk.createRecord(d,{name:"Name here..."});if(c.instanceOf(CoreTextwerk.Paper)){var b=this.get("papers");
b.pushObject(c)}else{console.error("Bad member type")}}},removeMember:function(c){var b,a=CoreTextwerk.get("store");
if(c.instanceOf(CoreTextwerk.Paper)){b=this.get("papers");b.removeObject(c)}else{console.error("Bad member type")
}}});CoreTextwerk.Paper=SC.Record.extend(LinkIt.Node,{url:"/documents",primaryKey:"id",title:SC.Record.attr(String),authors:SC.Record.attr(String),year:SC.Record.attr(String),venue:SC.Record.attr(String),affiliation_ids:SC.Record.attr(String),author_ids:SC.Record.attr(String),collection:SC.Record.attr("CoreTextwerk.Collection"),referrer:SC.Record.attr("CoreTextwerk.Paper"),citee:SC.Record.attr("CoreTextwerk.Paper"),terminals:["ref","cit"],position:SC.Record.attr(Object),links:function(){var b=[];
var d=this.get("referrer");if(d){var a=SC.Object.create(LinkIt.Link,{startNode:d,startTerminal:"cit",endNode:this,endTerminal:"ref"});
b.push(a)}var c=this.get("citee");if(c){var e=SC.Object.create(LinkIt.Link,{startNode:c,startTerminal:"ref",endNode:this,endTerminal:"cit"});
b.push(e)}return b}.property("referrer","citee").cacheable(),canLink:function(f){if(!f){return NO
}var h=f.get("startNode"),b=f.get("startTerminal");var a=f.get("endNode"),g=f.get("endTerminal");
if(h===a){return NO}if(this._hasLink(f)){return NO}var e="%@:%@".fmt(b,g);var c=(e.indexOf("cit")>-1);
var d=(e.indexOf("ref")>-1);if(d||c){return YES}return NO},_hasLink:function(d){var b=this.get("links")||[];
var a=b.get("length"),f;var e=LinkIt.genLinkID(d);for(var c=0;c<a;c++){f=b.objectAt(c);
if(LinkIt.genLinkID(f)===e){return YES}}},didCreateLink:function(d){var a=d[0];var f=a.get("startNode"),c=a.get("startTerminal");
var b=a.get("endNode"),e=a.get("endTerminal");if(e==="ref"&&f!==this){this.set("referrer",f)
}else{if(e==="cit"&&f!==this){this.set("citee",f)}}},willDeleteLink:function(c){var e=c.get("startNode"),b=c.get("startTerminal");
var a=c.get("endNode"),d=c.get("endTerminal");if(d==="ref"){this.set("referrer",null)
}else{if(d==="cit"){this.set("citee",null)}}}});CoreTextwerk.Venue=SC.Record.extend({primaryKey:"id",name:SC.Record.attr(String),url:"/venues"});
if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("core-textwerk")
};