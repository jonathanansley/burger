# Technologies:
Handlebars, Express, node.js, ORM, MVC


### Overview

Follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.



### Important

Utilize the [MYSQL Heroku Deployment Guide](../Supplemental/MySQLHerokuDeploymentProcess.pdf) in order to deploy your assignment.




### Overview

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.





#### Config Setup

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()` 
     * `insertOne()` 
     * `updateOne()` 





#### Model setup

* Inside your `burger` directory, create a folder named `models`.

    * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.




#### View setup

1. Inside your `burger` directory, create a folder named `views`.

     * Setup the `main.handlebars` file so it's able to be used by Handlebars. - Does this mean {{{ body }}} ?