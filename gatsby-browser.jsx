function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

// Taken from https://github.com/netlify/netlify-identity-widget
var routes = /(confirmation|invite|recovery|email_change)_token=([^&]+)/;
var errorRoute = /error=access_denied&error_description=403/;
var accessTokenRoute = /access_token=/;

exports.onInitialClientRender = function (_, _ref) {
  console.log("test");
  var _ref$enableIdentityWi = _ref.enableIdentityWidget,
    enableIdentityWidget =
      _ref$enableIdentityWi === void 0 ? true : _ref$enableIdentityWi,
    _ref$publicPath = _ref.publicPath,
    publicPath = _ref$publicPath === void 0 ? "admin" : _ref$publicPath;
  var hash = (document.location.hash || "").replace(/^#\/?/, "");

  if (
    enableIdentityWidget &&
    (routes.test(hash) || errorRoute.test(hash) || accessTokenRoute.test(hash))
  ) {
    Promise.resolve()
      .then(function () {
        return _interopRequireWildcard(require("netlify-identity-widget"));
      })
      .then(function (_ref2) {
        var netlifyIdentityWidget = _ref2.default;
        netlifyIdentityWidget.on("init", function (user) {
          if (!user) {
            netlifyIdentityWidget.on("login", function () {
              document.location.href = __PATH_PREFIX__ + "/" + publicPath + "/";
            });
          }
        });
        netlifyIdentityWidget.init();
      });
  }
};
