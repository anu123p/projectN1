## Exercise N1: NodeJS with Express and MongoDB on Heroku

This is an Node.js , Express Application using MongoDb. For this exercise , this application has been deployed on Heroku. 

After creating the new Express project using WebStorm IDE. I did following changes to incorporate the requirements of this exercise:

Requirement : Display data from MongoDb on hitting "/db" URL

Step 1 : set up of mongoDb and creating the required database and loading the data . 

        For my set up , I created 
        
        Project : "PROJECT N1 NODE.JS WITH MONGODB AND EXPRESS"
        Cluster : cluster0.nkbnc.mongodb.net
        Database : sample_users
        Collection : details
        Documents : Inserted 5 documents in the collection with following fields : 
                                                                                     # firstname
                                                                                     # lastname
                                                                                     # userid
                                                                                     # email
                                                                                     # contact
        
        

Step 2 : Create the node.js application
    
     In app.js file create a new router for mongodb application on /db url as follows:
  
        var mongodbRouter = require('./routes/mongodb');
        app.use('/db',mongodbRouter);
       
     Created new view (mongodb.ejs) to display the data in tabular format . This file can be found at location : projectN1/views 
     
     Created mongodb.js file to create the controller of the application. In this file , the code to connect to mongodb and fetch the data is written.
     This file can be found at location :projectN1/routes
     
Step 3 : Deploy the application on Heroku

         > After installing the CLI, run the heroku login command. 
         You’ll be prompted to enter any key to go to your web browser to complete login. The CLI will then log you in automatically.
         
         > Before you can deploy your app to Heroku, you need to initialize a local Git repository and commit your application code to it.
         
            # Go to the project Path
            cd myapp
            # initialize the GIT repository
            git init
            Initialized empty Git repository in .git/
            # Commit the code to Git
            git add .
            git commit -m "My first commit"
            
         > Create a Heroku Remote : 
         
            The heroku create CLI command creates a new empty application on Heroku, along with an associated empty Git repository.
            If you run this command from your app’s root directory, the empty Heroku Git repository is automatically set as a remote for your local repository.
            
            # Creating a new empty application
            heroku create
            
            To deploy your app to Heroku, you typically use the git push command to push the code from your local repository to your heroku remote
            # To deploy the application to heroku
            git push heroku master
            

         
