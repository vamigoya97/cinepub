# Cinepub

## Strucutre
This applicaiton has two main folders: api and web. The api folder holds everything related to the back-end. This is where all of the migrations are saved, relational models are created and graphQl functions are stored. The web folder is were all of the app's pages and style sheets are stored and manipulated. 

## Future Plans
As this is a work in progress, the next steps would be to further develop both the front-end and back-end in order to enhance the app's dynamic rendering. Similarly, deployment is also a priority for this project so that Cinepub starts to be recognized. 

## Setup
We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

## Fire it up
```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`. 

You can always refer to [Redwood Documentation page](https://redwoodjs.com/docs/introduction) to add and manipulate Cinepub's full-stack app. 

## Contributions
Recommendations and contributions are always welcome. Please add them as commits and pull requests. 

## Developers
Developed by [Victor Amigo](https://www.linkedin.com/in/victor-amigo/)
