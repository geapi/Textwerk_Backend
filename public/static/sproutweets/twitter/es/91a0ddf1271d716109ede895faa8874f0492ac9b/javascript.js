/* >>>>>>>>>> BEGIN source/core.js */
// ==========================================================================
// Project:   Twitter
// Copyright: ©2010 Apple, Inc.
// ==========================================================================
/*globals Twitter Base64*/

/** @namespace

  Supplies data sources and models for interacting with
  the Twitter API.
  
  @author Tom Dale
  @extends SC.Object
*/
Twitter = SC.Object.create(
  /** @scope Twitter.prototype */ {

  NAMESPACE: 'Twitter',
  VERSION: '0.1.0',

  username: '',
  password: '',
  
  /**
    Returns whether the user has successfully authenticated or not.
    
    @property
    @readOnly
  */
  loggedIn: NO,
  
  /**
    Used to login to Twitter servers.
    
    The third parameter is a callback once credentials have been checked.
    It will be called with YES if login was successful or NO if the username
    or password were invalid.
    
    @param {String} username
    @param {String} password
    @param {Object} target The target object for the method call. (optional)
    @param {String|Function} action The method called once a response is
    received. (optional)
  */
  login: function(username, password, target, action) {
    var auth;
    
    // Store the passed username/password.
    this.set('username', username);
    this.set('password', password);
    if (this.setIfChanged('loggedIn', NO));
    
    auth = this.get('authData');   
    SC.Request.getUrl('account/verify_credentials.json').json()
              .notify(this, 'verifyLogin', target, action)
              .header('Authorization', auth)
              .send();
  },
  
  verifyLogin: function(response, target, action) {
    var user;  
    if (SC.ok(response)) {
      this.set('loggedIn', YES);
      
      user = response.get('body');
      this.store.loadRecords(Twitter.User, [user]);
      this.set('user', this.store.find(Twitter.User, user.id));
    }
    
    if (action) {
     if (SC.typeOf(action) === SC.T_STRING) action = target[action];
     if (!action) throw SC.Error.desc('Unable to resolve login callback target');
     action.apply(target, [this.get('loggedIn'), response]); 
    }
  },
  
  /**
    Base64-encodes the username and password.  Used by the data source
    to do Basic HTTP auth.
    
    @property
  */
  authData: function() {
   var username = this.get('username'),
       password = this.get('password');
       
    return "Basic "+Base64.encode(username+":"+password);
  }.property('username', 'password').cacheable(),
  
  _loggedIn: NO
}) ;

/* >>>>>>>>>> BEGIN source/base64.js */
/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
 
var Base64 = {
 
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = Base64._utf8_encode(input);
 
		while (i < input.length) {
 
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
 
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
		}
 
		return output;
	},
 
	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
		while (i < input.length) {
 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));
 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
 
			output = output + String.fromCharCode(chr1);
 
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
 
		}
 
		output = Base64._utf8_decode(output);
 
		return output;
 
	},
 
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	},
 
	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = 0, c1 = 0, c2 = 0, c3;
 
		while ( i < utftext.length ) {
 
			c = utftext.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
 
		return string;
	}
 
};
/* >>>>>>>>>> BEGIN source/data_sources/tweets.js */
// ==========================================================================
// Project:   Twitter.TweetsDataSource
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  Fetches individual tweets

  @extends SC.DataSource
*/
Twitter.TweetsDataSource = SC.DataSource.extend(
/** @scope Twitter.TweetsDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  //

  fetch: function(store, query) {
    var auth;
    // TODO: Add handlers to fetch data for specific queries.
    // call store.dataSourceDidFetchQuery(query) when done.
    if (query.get('recordType') === Twitter.Tweet) {
      auth = Twitter.get('authData');

      SC.Request.getUrl('/statuses/home_timeline.json?count=50').json()
                .notify(this, 'didFetchTweets', store, query)
                .header('Authorization', auth)
                .send();
      return YES;
    }
    return NO ; // return YES if you handled the query
  },

  didFetchTweets: function(response, store, query) {
    var data, idx, len, user, users = [];

    if (SC.ok(response)) {
      data = response.get('body');
      len = data.get('length');

      for (idx=0; idx<len; idx++) {
        user = data[idx]['user'];
        data[idx].user = user.id;

        if (!store.storeKeyExists(Twitter.User, user.id)) {
          users.push(user);
        }
      }
      store.loadRecords(Twitter.User, users);
      store.loadRecords(Twitter.Tweet, data);
      store.dataSourceDidFetchQuery(query);
    } else {
      store.dataSourceDidErrorQuery(query, response);
    }
  },

  // ..........................................................
  // RECORD SUPPORT
  //

  retrieveRecord: function(store, storeKey) {

    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },

  createRecord: function(store, storeKey) {

    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },

  updateRecord: function(store, storeKey) {

    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },

  destroyRecord: function(store, storeKey) {

    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done

    return NO ; // return YES if you handled the storeKey
  }

}) ;

/* >>>>>>>>>> BEGIN source/data_sources/twitter.js */
/*globals Twitter*/

Twitter.TwitterDataSource = SC.CascadeDataSource.extend({
  dataSources: 'tweets'.w(),

  tweets: Twitter.TweetsDataSource.create()
});
/* >>>>>>>>>> BEGIN source/models/tweet.js */
// ==========================================================================
// Project:   Twitter.Tweet
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Twitter.Tweet = SC.Record.extend(
/** @scope Twitter.Tweet.prototype */ {
  primaryKey: 'id',

  text: SC.Record.attr(String),
  user: SC.Record.toOne('Twitter.User'),

  text: function() {
    var text;

    if (this.get('isRetweet')) {
      text = this.readAttribute('retweeted_status').text;
    } else {
      text = this.readAttribute('text');
    }

    return text;
  }.property().cacheable(),

  retweetScreenName: function() {
    return this.readAttribute('retweeted_status').user.screen_name;
  }.property().cacheable(),

  isRetweet: function() {
    return !!this.readAttribute('retweeted_status');
  }.property().cacheable()
}) ;

/* >>>>>>>>>> BEGIN source/models/user.js */
// ==========================================================================
// Project:   Twitter.User
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Twitter.User = SC.Record.extend(
/** @scope Twitter.User.prototype */ {
  primaryKey: 'id',

  name: SC.Record.attr(String),
  screenName: SC.Record.attr(String, { key: 'screen_name' }),
  location: SC.Record.attr(String),
  description: SC.Record.attr(String),
  profileImage: SC.Record.attr(String, { key: 'profile_image_url' }),
  url: SC.Record.attr(String),
  protected: SC.Record.attr(Boolean),
  followersCount: SC.Record.attr(Number, { key: 'followers_count' }),
  friendsCount: SC.Record.attr(Number, { key: 'friends_count' }),
  createdAt: SC.Record.attr(Date, { key: 'created_at' }),
  favouritesCount: SC.Record.attr(Number, { key: 'favourites_count' }),
  updatesCount: SC.Record.attr(Number, { key: 'statuses_count' }),
  verified: SC.Record.attr(Boolean)
}) ;

/* >>>>>>>>>> BEGIN source/resources/strings.js */
// ==========================================================================
// Project:   Twitter Strings
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

// Place strings you want to localize here.  In your app, use the key and
// localize it using "key string".loc().  HINT: For your key names, use the
// english string with an underscore in front.  This way you can still see
// how your UI will look and you'll notice right away when something needs a
// localized string added to this file!
//
SC.stringsFor('English', {
  // "_String Key": "Localized String"
}) ;

/* >>>>>>>>>> BEGIN bundle_loaded.js */
; if ((typeof SC !== 'undefined') && SC && SC.bundleDidLoad) SC.bundleDidLoad('sproutweets/twitter');
