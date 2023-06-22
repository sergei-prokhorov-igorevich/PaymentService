<!-- https://daringfireball.net/projects/markdown/syntax -->
# Payment service (demo-project Sergei Prokhorov)

## How to run

1. Open terminal and run command `'docker compose up'`
2. Open page [http://127.0.0.1](http://127.0.0.1) in your browser

## Technical description

Common:

- [TypeScript](https://www.typescriptlang.org/) and [JavaScript](https://www.w3.org/standards/webdesign/script)
- [Webpack](https://webpack.js.org/)
- [Docker compose](https://www.docker.com/)
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) and [Socket.IO](https://socket.io/)

Backend:

- [NodeJS](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/)

Frontend:

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [html5](https://www.w3.org/TR/2011/WD-html5-20110405/) and [css3](http://www.w3.org/Style/CSS/current-work.en.html)
- [Adobe Fonts](https://fonts.adobe.com/) and [Adobe Typekit](https://fonts.adobe.com/docs/api)

## Use case scenario

The user wants to pay for an order of a third-party service. Third-party service redirects the user to our payment service to complete the payment.

### Basic flow steps

1. Order form is loading.
![image1](/doc/images/1.png)

2. Order form has been loaded. There is a password input field (message from push, sms, or email) before pressing the payment button.
![image2](/doc/images/2.png)

3. To view WebSocket technology example just press 'Show WebSocket example' button.
![image3](/doc/images/3.png)

4. The user has inputted a password and is ready to press the payment button.
![image3](/doc/images/4.png)

5. The user has pressed the payment button. The payment completed has been successfully.
![image4](/doc/images/5.png)

### Additional cases

1. The user hasn't inputed a password and pressed the payment button.
![image5](/doc/images/6.png)

2. The user entered the wrong password and pressed the payment button.
![image6](/doc/images/7.png)

3. Backend server isn't responding.
![image7](/doc/images/8.png)
