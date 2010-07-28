/* >>>>>>>>>> BEGIN bundle_info.js */
        ;(function() {
          var target_name = 'sproutcore/standard_theme' ;
          if (!SC.BUNDLE_INFO) throw "SC.BUNDLE_INFO is not defined!" ;
          if (SC.BUNDLE_INFO[target_name]) return ; 
          
          SC.BUNDLE_INFO[target_name] = {
            requires: ['sproutcore/empty_theme'],
            styles:   ['/static/sproutcore/standard_theme/en/52920dfdad7f0329367ed5692a2fc96881122edb/stylesheet-packed.css','/static/sproutcore/standard_theme/en/52920dfdad7f0329367ed5692a2fc96881122edb/stylesheet.css'],
            scripts:  ['/static/sproutcore/standard_theme/en/52920dfdad7f0329367ed5692a2fc96881122edb/javascript-packed.js']
          }
        })();

/* >>>>>>>>>> BEGIN source/core.js */
// ==========================================================================
// Project:   Sproutweets
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sproutweets Twitter*/

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Sproutweets = SC.Application.create(
  /** @scope Sproutweets.prototype */ {

  NAMESPACE: 'Sproutweets',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(Twitter.TwitterDataSource.create())
  
  // TODO: Add global constants or singleton objects needed by your app here.

}) ;

/* >>>>>>>>>> BEGIN source/controllers/login.js */
// ==========================================================================
// Project:   Sproutweets.loginController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sproutweets */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Sproutweets.loginController = SC.Object.create(
/** @scope Sproutweets.loginController.prototype */ {
  loggingIn: NO,
  
  errorMessage: '',
  
  BAD_CREDENTIALS_ERROR: "_Sorry, wrong username or password.  Try again?"
}) ;

/* >>>>>>>>>> BEGIN source/controllers/timeline.js */
// ==========================================================================
// Project:   Sproutweets.timelineController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sproutweets */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Sproutweets.timelineController = SC.ArrayController.create(
/** @scope Sproutweets.timelineController.prototype */ {

  // TODO: Add your own code here.

}) ;

/* >>>>>>>>>> BEGIN source/controllers/user.js */
// ==========================================================================
// Project:   Sproutweets.userController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sproutweets Twitter*/

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Sproutweets.userController = SC.ObjectController.create(
/** @scope Sproutweets.userController.prototype */ {
  contentBinding: 'Twitter.user',
  
  updatesCountFormatted: function() {
    return this.formatWithCommas(this.get('updatesCount'));
  }.property('updatesCount').cacheable(),
  
  followersCountFormatted: function() {
    return this.formatWithCommas(this.get('followersCount'));
  }.property('followersCount').cacheable(),
  
  friendsCountFormatted: function() {
    return this.formatWithCommas(this.get('friendsCount'));
  }.property('friendsCount').cacheable(),
  
  formatWithCommas: function(str) {
    var n, ret = [];
    if (!str) return '';
    n = str.toString();
    
    if (n.length < 4) return n;
    
    while (n.length > 3) {
      ret.unshift(n.substr(n.length-3));
      n = n.substr(0,n.length-3);
    }
    ret.unshift(n);

    return ret.join(',');
  }
}) ;

/* >>>>>>>>>> BEGIN source/resources/strings.js */
// ==========================================================================
// Project:   Sproutweet Strings
// Copyright: ©2010 Apple, Inc.
// ==========================================================================
/*globals Twitter */

// Place strings you want to localize here.  In your app, use the key and
// localize it using "key string".loc().  HINT: For your key names, use the
// english string with an underscore in front.  This way you can still see
// how your UI will look and you'll notice right away when something needs a
// localized string added to this file!
//
SC.stringsFor('English', {
  "_Username": "Username",
  "_Password": "Password",
  "_Login": "Login",
  "_Sorry, wrong username or password.  Try again?": "Sorry, wrong username or password.  Try again?",
  
  "_updates": "updates",
  "_followers": "followers",
  "_following": "following",
  
  "_Loading Timeline…": "Loading Timeline…",
  "_Error Loading Timeline": "Error Loading Timeline"
}) ;

/* >>>>>>>>>> BEGIN source/states/start.js */
// ==========================================================================
// Project:   Sproutweets.START
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sproutweets Twitter*/

/** @class

  (Document Your State Here)

  @extends SC.Responder
*/
Sproutweets.START = SC.Responder.create(
/** @scope Sproutweets.START.prototype */ {
  didBecomeFirstResponder: function() {
    Twitter.store = Sproutweets.store;
    var loginPane = Sproutweets.getPath('mainPage.loginPane');
    loginPane.append();
  },
  
  login: function() {
    var username = Sproutweets.loginController.get('username'),
        password = Sproutweets.loginController.get('password');

    Twitter.login(username, password, this, 'loginResponseReceived');
    Sproutweets.loginController.set('loggingIn', YES);
  },
    
  loginResponseReceived: function(success) {
    var pane;
    Sproutweets.loginController.set('loggingIn', NO);
    if (success) {
      pane = Sproutweets.getPath('mainPage.loginPane');
      pane.remove();
      pane = Sproutweets.getPath('statusPage.statusView');
      Sproutweets.getPath('mainPage.mainPane').appendChild(pane);
      this.invokeLast(function() {
        pane.adjust('top', 0);
      });
      Sproutweets.makeFirstResponder(Sproutweets.TIMELINE_LOADING);
    } else {
      Sproutweets.loginController.set('errorMessage', Sproutweets.loginController.BAD_CREDENTIALS_ERROR.loc());
    }
  }
}) ;

/* >>>>>>>>>> BEGIN source/states/timeline_loading.js */
// ==========================================================================
// Project:   Sproutweets.TIMELINE_LOADING
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sproutweets Twitter*/

/** @class

  (Document Your State Here)

  @extends SC.Responder
*/
Sproutweets.TIMELINE_LOADING = SC.Responder.create(
/** @scope Sproutweets.TIMELINE_LOADING.prototype */ {
  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  // ..........................................................
  // EVENTS
  //
  didBecomeFirstResponder: function() {
    var query = SC.Query.local(Twitter.Tweet, {
      orderBy: 'id DESC'
    });
    var timeline = Sproutweets.store.find(query);
    timeline.addObserver('status', this, this.timelineStatusDidChange);
    this.set('timeline', timeline);
    Sproutweets.setPath('mainPage.mainPane.contentView.nowShowing', 'Sproutweets.timelinePage.loadingView');
  },
  
  timelineStatusDidChange: function() {
    var timeline = this.get('timeline'),
        status = timeline.get('status');
        
    if (status & SC.Record.READY) {
      Sproutweets.timelineController.set('content', timeline);
      Sproutweets.setPath('mainPage.mainPane.contentView.nowShowing', 'Sproutweets.timelinePage.timelineView');
    } else if (status & SC.Record.ERROR) {
      
    }
  },
  
  willLoseFirstResponder: function() {
    var timeline = this.get('timeline');
    Sproutweets.setPath('mainPage.mainPane.contentView.nowShowing', '');
    
    if (timeline) {
      timeline.removeObserver('status', this, this.timelineStatusDidChange);
    }
  }
}) ;

/* >>>>>>>>>> BEGIN source/views/count_display.js */
/*globals Sproutweets*/

Sproutweets.CountDisplayView = SC.View.extend({
  childViews: 'countView labelView'.w(),
  count: 0,
  label: '',

  countView: SC.LabelView.extend({
    layout: { top: 13 },
    classNames: ['count'],
    textAlign: SC.ALIGN_CENTER,
    valueBinding: '.owner.count'
  }),
  
  labelView: SC.LabelView.extend({
    layout: { height: 30, bottom: 0 },
    classNames: ['label'],

    valueBinding: '.owner.label',
    localize: YES,
    textAlign: SC.ALIGN_CENTER
  })
});
/* >>>>>>>>>> BEGIN source/resources/main_page.js */
// ==========================================================================
// Project:   Sproutweets - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sproutweets */

// This page describes the main user interface for your application.  
Sproutweets.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'contentView'.w(),

    contentView: SC.ContainerView.design({
      layout: { top: 70 }
    })
  }),
  
  loginPane: SC.PanelPane.design({
    layout: { width: 360, height: 125, centerX: 0, centerY: 0 },
    classNames: ['login-pane'],

    contentView: SC.View.design({
      childViews: 'username password loginButton loadingImage errorMessage'.w(),
      
      username: SC.View.design({
        layout: { left: 17, right: 14, top: 17, height: 26 },
        childViews: 'label field'.w(),
        
        label: SC.LabelView.design({
          layout: { left: 0, width: 77, height: 18, centerY: 0 },
          
          value: '_Username',
          localize: YES,
          textAlign: SC.ALIGN_RIGHT
        }),
        
        field: SC.TextFieldView.design({
          layout: { width: 230, height: 22, right: 3, centerY: 0 },
          valueBinding: 'Sproutweets.loginController.username'
        })
      }),
      
      password: SC.View.design({
        layout: { left: 17, right: 14, top: 45, height: 26 },
        childViews: 'label field'.w(),
        
        label: SC.LabelView.design({
          layout: { left: 0, width: 77, height: 18, centerY: 0 },
          
          value: '_Password',
          localize: YES,
          textAlign: SC.ALIGN_RIGHT
        }),
        
        field: SC.TextFieldView.design({
          layout: { width: 230, height: 22, right: 3, centerY: 0 },
          
          isPassword: YES,
          valueBinding: 'Sproutweets.loginController.password'
        })
      }),
      
      loginButton: SC.ButtonView.design({
        layout: { height: 24, width: 80, bottom: 17, right: 17 },
        title: '_Login',
        localize: YES,
        isDefault: YES,
        
        target: 'Sproutweets.firstResponder',
        action: 'login'
      }),
      
      loadingImage: SC.ImageView.design({
        layout: { width: 16, height: 16, bottom: 20, right: 110 },
        value: '/static/sproutweets/en/bbc69170292b73a32fe94025139af8064ddc56f0/resources/images/loading.gif',
        useImageCache: NO,
        isVisibleBinding: 'Sproutweets.loginController.loggingIn'
      }),
      
      errorMessage: SC.LabelView.design({
        layout: { height: 40, width: 230, right: 120, bottom: 7 },
        classNames: ['error-message'],
        valueBinding: 'Sproutweets.loginController.errorMessage'
      })
    }),
    
    render: function(context, firstTime) {
      if (context.needsContent) {
        this.renderChildViews(context, firstTime);
      }
    }
  })

});

/* >>>>>>>>>> BEGIN source/resources/status_page.js */
// ==========================================================================
// Project:   Sproutweets - statusPage
// Copyright: ©2010 Apple, Inc.
// ==========================================================================
/*globals Sproutweets */
sc_require('views/count_display');

Sproutweets.statusPage = SC.Page.design({
  statusView: SC.View.design(SC.Animatable, {
    layout: { height: 70, top: -70 },
    transitions: { top: { duration: 0.3, timing: 'ease-in' } },
    classNames: ['status-view'],
    childViews: 'profileImage username stats'.w(),

    profileImage: SC.ImageView.design({
      layout: { width: 48, height: 48, centerY: 0, left: 17 },
      classNames: ['profile-image'],
      valueBinding: 'Sproutweets.userController.profileImage'
    }),
    
    username: SC.LabelView.design({
      layout: { left: 75, height: 44, centerY: 0, right: 280 },
      classNames: ['username'],
      controlSize: SC.HUGE_CONTROL_SIZE,
      
      valueBinding: 'Sproutweets.loginController.username'
    }),
    
    stats: SC.View.design({
      childViews: 'updates followers following'.w(),
      
      updates: Sproutweets.CountDisplayView.design({
        layout: { width: 80, right: 190 },
        countBinding: 'Sproutweets.userController.updatesCountFormatted',
        label: '_updates'
      }),
      
      followers: Sproutweets.CountDisplayView.design({
        layout: { width: 80, right: 100 },
        countBinding: 'Sproutweets.userController.followersCountFormatted',
        label: '_followers'
      }),
      
      following: Sproutweets.CountDisplayView.design({
        layout: { width: 80, right: 10 },
        countBinding: 'Sproutweets.userController.friendsCountFormatted',
        label: '_following'
      })
    })
  })
});
/* >>>>>>>>>> BEGIN source/resources/timeline_page.js */
// ==========================================================================
// Project:   Sproutweets - statusPage
// Copyright: ©2010 Apple, Inc.
// ==========================================================================
/*globals Sproutweets */
sc_require('views/count_display');

Sproutweets.timelinePage = SC.Page.design({
  timelineView: SC.ScrollView.design({
    contentView: SC.ListView.design({
      classNames: ['timeline-view'],

      contentBinding: 'Sproutweets.timelineController.arrangedObjects',

      rowHeight: 120,
      rowSpacing: 10,
      exampleView: SC.ListItemView.extend({
        classNames: ['tweet-list-item'],

        render: function(context, firstTime) {
          var content = this.get('content'),
              user = content.get('user'),
              out;

          var image = user.get('profileImage');

          if (content.get('isRetweet')) {
            context.push('<div class="profile-image">');
            context.push('<img src="%@">'.fmt(image));
            context.push('</div>');
            out = "%@ <span class='rt-label'>retweeted</span> %@";
            out = out.fmt(user.get('screenName'), content.get('retweetScreenName'));
            context.push('<div class="screen-name">%@ </div>'.fmt(out));
          } else {
            context.push('<div class="profile-image">');
            context.push('<img src="%@">'.fmt(image));
            context.push('</div>');
            context.push('<div class="screen-name">%@</div>'.fmt(user.get('screenName')));
          }

          context.push('<div class="text">'+content.get('text')+'</div>');

          if (content.get('in_reply_to_user_id') === Sproutweets.userController.get('id')) {
            context.addClass('at-you');
          }

          if (content.get('retweeted_status')) {
            context.addClass('retweet');
          }
        }
      }),

      contentIndexesInRect: function() {
        return SC.IndexSet.create(0,this.get('length'));
      }
    })
  }),

  loadingView: SC.View.design({
    childViews: 'spinner label'.w(),

    spinner: SC.ImageView.design({
      layout: { width: 32, height: 32, centerY: 0, centerX: -155 },
      value: '/static/sproutweets/en/bbc69170292b73a32fe94025139af8064ddc56f0/resources/images/loading_large.gif'
    }),

    label: SC.LabelView.design({
      layout: { height: 34, width: 280, centerY: 0, centerX: 20 },
      classNames: ['loading-label'],
      controlSize: SC.HUGE_CONTROL_SIZE,

      value: '_Loading Timeline…',
      localize: YES
    })
  }),

  errorView: SC.View.design({
    childViews: 'warning label'.w(),

    warning: SC.ImageView.design({
      layout: { width: 50, height: 50, centerY: -5, centerX: -155 },
      value: '/static/sproutweets/en/bbc69170292b73a32fe94025139af8064ddc56f0/resources/images/error.png'
    }),

    label: SC.LabelView.design({
      layout: { height: 34, width: 350, centerY: 0, centerX: 60 },
      classNames: ['loading-label'],
      controlSize: SC.HUGE_CONTROL_SIZE,

      value: '_Error Loading Timeline',
      localize: YES
    })
  })
});
/* >>>>>>>>>> BEGIN source/main.js */
// ==========================================================================
// Project:   Sproutweets
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sproutweets */

Sproutweets.main = function main() {
  Sproutweets.getPath('mainPage.mainPane').append() ;
  Sproutweets.makeFirstResponder(Sproutweets.START);
} ;

function main() { Sproutweets.main(); }

