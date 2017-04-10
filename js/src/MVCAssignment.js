console.log('1 MVCAssignment loaded');

class MVCAssignment {
  constructor() {
    console.log('MVCAssignment/Controller created');
    const model = new Model();
    const view = new View();
    this.getData();
  }

  static getInstance() {
    if (!MVCAssignment._instance) {
      MVCAssignment._instance = "I'm created now."
      return new MVCAssignment();
    } else {
      throw "you idiot, I'm already made."
    }
  }

  getData(){
    console.log('getdata()');
    let searchValue = document.querySelector('#searchInput');
    let btn = document.querySelector('#searchBtn');

    btn.addEventListener('click', (e) => {
    e.preventDefault();

      let searchUrl = '';
      searchUrl = `https://api.walmartlabs.com/v1/search?apiKey=x86yu4xx58usg5cwhrqm2kx4&query=${searchValue.value}`;

      var xhr = new XMLHttpRequest();
      xhr.open('GET', searchUrl, true);
      xhr.setRequestHeader( 'Access-Control-Allow-Origin', '*');
      xhr.withCredentials = false;
      xhr.send(null);

      xhr.onload = function() {
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
}

class Model {
  constructor() {
    console.log('Model Crated');
  }
}

class View {
  constructor() {
    console.log('View Crated');
  }
}
