'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('1 MVCAssignment loaded');

var MVCAssignment = function () {
  function MVCAssignment() {
    _classCallCheck(this, MVCAssignment);

    console.log('MVCAssignment/Controller created');
    var model = new Model();
    var view = new View();
    this.getData();
  }

  _createClass(MVCAssignment, [{
    key: 'getData',
    value: function getData() {
      console.log('getdata()');
      var searchValue = document.querySelector('#searchInput');
      var btn = document.querySelector('#searchBtn');

      btn.addEventListener('click', function (e) {
        e.preventDefault();

        var searchUrl = '';
        searchUrl = 'https://api.walmartlabs.com/v1/search?apiKey=x86yu4xx58usg5cwhrqm2kx4&query=' + searchValue.value;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', searchUrl, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.withCredentials = false;
        xhr.send(null);

        xhr.onload = function () {
          var responseObject = JSON.parse(xhr.responseText);

          // checking status response
          if (xhr.status === 200) {

            // Retrieving products
            var products = responseObject.products;
            console.log(products);
          }
          // End if statement
        };

        // fetch (searchUrl, {mode: 'no-cors'})
        // .then((response) => {
        //   console.log('response: ', response);
        //   return response.json();
        // }).then( (p) => {
        //   console.log('DATAAAAAAAA');
        //   console.log('data: ', p);
        // }).catch(function(error) {
        //   throw `ERROR: <strong>${searchValue}</strong> <br/> ${error.message}`;
        // });
      });
    }
  }], [{
    key: 'getInstance',
    value: function getInstance() {
      if (!MVCAssignment._instance) {
        MVCAssignment._instance = "I'm created now.";
        return new MVCAssignment();
      } else {
        throw "you idiot, I'm already made.";
      }
    }
  }]);

  return MVCAssignment;
}();

var Model = function Model() {
  _classCallCheck(this, Model);

  console.log('Model Crated');
};

var View = function View() {
  _classCallCheck(this, View);

  console.log('View Crated');
};