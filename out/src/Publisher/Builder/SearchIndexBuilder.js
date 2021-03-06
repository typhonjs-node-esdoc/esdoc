'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _DocBuilder2 = require('./DocBuilder.js');

var _DocBuilder3 = _interopRequireDefault(_DocBuilder2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Search index of identifier builder class.
 */

var SearchIndexBuilder = function (_DocBuilder) {
  _inherits(SearchIndexBuilder, _DocBuilder);

  function SearchIndexBuilder() {
    _classCallCheck(this, SearchIndexBuilder);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchIndexBuilder).apply(this, arguments));
  }

  _createClass(SearchIndexBuilder, [{
    key: 'exec',

    /**
     * execute building output.
     * @param {function(javascript: string, filePath: string)} callback - is called with output.
     */
    value: function exec(callback) {
      var searchIndex = [];
      var docs = this._find({});

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = docs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var doc = _step.value;

          var indexText = void 0,
              url = void 0,
              displayText = void 0;

          if (doc.importPath) {
            displayText = '<span>' + doc.name + '</span> <span class="search-result-import-path">' + doc.importPath + '</span>';
            indexText = (doc.importPath + '~' + doc.name).toLowerCase();
            url = this._getURL(doc);
          } else if (doc.kind === 'testDescribe' || doc.kind === 'testIt') {
            displayText = doc.testFullDescription;
            indexText = [].concat(_toConsumableArray(doc.testTargets || []), _toConsumableArray(doc._custom_test_targets || [])).join(' ').toLowerCase();
            var filePath = doc.longname.split('~')[0];
            var fileDoc = this._find({ kind: 'testFile', longname: filePath })[0];
            url = this._getURL(fileDoc) + '#lineNumber' + doc.lineNumber;
          } else {
            displayText = doc.longname;
            indexText = displayText.toLowerCase();
            url = this._getURL(doc);
          }

          var kind = doc.kind;
          switch (kind) {
            case 'constructor':
              kind = 'method';
              break;
            case 'get':
            case 'set':
              kind = 'member';
              break;
            case 'testDescribe':
            case 'testIt':
              kind = 'test';
              break;
          }

          searchIndex.push([indexText, url, displayText, kind]);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      searchIndex.sort(function (a, b) {
        if (a[2] === b[2]) {
          return 0;
        } else if (a[2] < b[2]) {
          return -1;
        } else {
          return 1;
        }
      });

      var javascript = 'window.esdocSearchIndex = ' + JSON.stringify(searchIndex, null, 2);

      callback(javascript, 'script/search_index.js');
    }
  }]);

  return SearchIndexBuilder;
}(_DocBuilder3.default);

exports.default = SearchIndexBuilder;
module.exports = exports['default'];