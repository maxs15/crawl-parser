var ejs = require('ejs');

var services = {
  facebook: 'facebookexternalhit',
  twitter: 'Twitterbot'
};

var getService = function(userAgent, allowedServices) {
  if (!userAgent) return null;
  for (var name in services) {
    if (userAgent.indexOf(services[name]) != -1) {
      if (allowedServices.indexOf(name) === -1) {
        return false;
      }
      return name;
    }
  }
  return null;
};

var getOptions = function(req, service) {
  var options = {};
  
  options.requester = service || 'engine';
  if (service === 'facebook') {
    options.lang = req.param('fb_locale');
  }
  return options;
};

module.exports = function(allowedServices, callback) {

  if (typeof allowedServices === 'function') {
    callback = allowedServices;
    allowedServices = Object.keys(services);
  }

  return function(req, res, next) {
    var service = getService(req.headers['user-agent'], allowedServices);
    var ef = (typeof req.query['_escaped_fragment_'] != 'undefined') ? true : false;
  
    if (service === false) return next();
    if (!service && !ef) return next();

    var options = getOptions(req, service);
    callback(req, options, function(graph) {
      if (!graph) return next();
      ejs.renderFile(__dirname + '/template/graph.html', {cache: true, graph: graph}, function(err, str) {
        res.send(200, str);
      });
    });
  };
};