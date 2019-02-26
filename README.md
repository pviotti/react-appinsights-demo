# React Application Insights Demo

![alt text][logo]

This is a simple demo of how to use [Application Insights][app-insights] in a single page application (SPA) based on [React][react].  
This project uses [react-appinsights][react-ai], and it was bootstrapped with [Create React App][cra].

To run it: 
```
yarn install
yarn start 
```

You should set the `REACT_APP_APPINSIGHTS_KEY` variable to your Application Insights instrumentation key, or use a `.env` file at the root of this project to do so.  

[react-ai]: https://github.com/Azure/react-appinsights
[app-insights]: https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview
[react]: https://reactjs.org/
[cra]: https://facebook.github.io/create-react-app/
[logo]: ./src/img/logo_composed.png "Logo Title Text 2"