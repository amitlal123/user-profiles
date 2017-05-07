var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  getProfiles: function(req, res, next) {
    console.log(333333, req.body);
    console.log(444444, req.session);
    var user = req.session.currentUser;
    if(user) {
      var friends = user.friends;
      // var friendProfiles = profiles.filter(function(eachProfile){
      //   return (friends.forEach(function(eachFriend){
      //       eachProfile.name === eachFriend;
      //     }));
      // });

      var friendProfiles = [];
      for (var i = 0; i < profiles.length; i++) {
        for (var j = 0; j < friends.length; j++) {
          if(profiles[i].name === friends[j]){
            friendProfiles.push(profiles[i]);
          }
        }
      }
      console.log(777777, friendProfiles);
      var resObj = {};
      resObj.currentUser = req.session.currentUser;
      resObj.friends = friendProfiles;
      res.send(resObj);
    }else {
      res.send('Err: No user found');
    }
  }
};
