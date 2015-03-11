'use strict';
angular.module('fiebrePeques.services', [])
.factory('Drugs', function(){
  var drugs = [{
    name: 'Apiretal 100mg',
    prospectus: ''
  }, {
   name: 'Dalsy 20mg',
   prospectus: ''
 }, {
  name: 'Dalsy 40mg',
  prospectus: ''
}, {
 name: 'Junifen 20mg',
 prospectus: ''
}, {
 name: 'Junifen 40mg',
 prospectus: ''
}];

return {
  all:function(){
    return drugs;
  }
};
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
