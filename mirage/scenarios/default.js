export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

   server.createList('todo', 1);
   server.createList('bill', 0);
   server.createList('customer', 0);
   server.createList('payment', 0);
   server.loadFixtures();
}
