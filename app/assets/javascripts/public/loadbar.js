/* INDENTATION */

/* I think we're overusing the namespace pattern here.  I can imagine a
 * top-level namespace called DreamsApp and things like LoadBar and HerpView or
 * DerpsController are part of it, but you don't need to namespace every widget
 * (generally).
 *
 */
var LoadBar = {}

  LoadBar.Controller = {
    setProgressBarWidth: function(width) {
      return $('.thin-progress-bar').width(width);
    },

    doProgress: function(done){
      var self = this;
    return setTimeout((function() {}, self.setProgressBarWidth("33%"), setTimeout((function() {
      self.setProgressBarWidth("66%");
      return setTimeout((function() {
        self.setProgressBarWidth("100%");
        return setTimeout((function() {
          return done();
        }), 3000);
      }), 3000);
    }), 1500)), 1500);
    },

    go: function() {return LoadBar.Controller.doProgress(function() {
      return LoadBar.Controller.setProgressBarWidth("0");
           });
        }
  }
