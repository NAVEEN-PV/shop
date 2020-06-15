export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/todos');
    this.post('/todos');
    this.get('/todos/:id');
    this.put('/todos/:id'); // or this.patch
    this.del('/todos/:id');

    this.get('/customers');
    this.post('/customers');
    this.get('/customers/:id');
    this.put('/customers/:id'); // or this.patch
    this.del('/customers/:id');

    this.get('/bills');
    this.post('/bills');
    this.get('/bills/:id');
    this.put('/bills/:id'); // or this.patch
    this.del('/bills/:id');

    this.get('/shops');
    this.post('/shops');
    this.get('/shops/:id');
    this.put('/shops/:id'); // or this.patch
    this.del('/shops/:id');

    this.get('/payments');
    this.post('/payments');
    this.get('/payments/:id');
    this.put('/payments/:id'); // or this.patch
    this.del('/payments/:id');
    
}
