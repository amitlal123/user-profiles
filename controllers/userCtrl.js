var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(req, res, next) {
    console.log(111111, req.body);
    console.log(222222, req.session);
    var userName = req.body.name;
    var pwd = req.body.password;
    if(userName && pwd) {
      var user = users.filter(function(eachUser){
        return (eachUser.name === userName && eachUser.password === pwd);
      });
      if(user.length === 1) {
        req.session.currentUser = user[0];
        console.log(999999, req.session);
        var resObj = {userFound: true};
        res.send(resObj);
      } else {
        var resObj = {userFound: false};
        res.send(resObj);
      }
    } else {
      res.send('Please enter both userName and password');
    }
  }
};
