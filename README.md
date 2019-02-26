# React Application Insights Demo

This is a simple demo of how to use [Application Insights][app-insights] in a single page application (SPA) based on [React][react].  
This project uses [react-appinsights][react-ai], and it was bootstrapped with [Create React App][cra].

To run it: 
```
yarn install
yarn start 
```

You should also set the `REACT_APP_APPINSIGHTS_KEY` environment variable as your 
Application Insights instrumentation key, or use a [`.env` file][dotenv] at the root of this project to do so.  

<img src="./src/img/logo_composed.png" alt="React & Application Insights" width="200"/>

[react-ai]: https://github.com/Azure/react-appinsights
[app-insights]: https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview
[react]: https://reactjs.org/
[cra]: https://facebook.github.io/create-react-app/
[dotenv]: https://github.com/motdotla/dotenv
