<!-- https://daringfireball.net/projects/markdown/syntax -->
# Payment service (simple demo-project)

## Technical description
- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Adobe Fonts](https://fonts.adobe.com/) and [Adobe Typekit](https://fonts.adobe.com/docs/api)
- html5, css3

## Use case scenario
The user wants to pay for an order of a third-party service. Third-party service redirects the user to our payment service to complete the payment.

### Basic flow steps
1. Order form is loading.
![image1](/doc/images/1.jpeg)

<br>

2. Order form has been loaded. There is a password input field (push, sms, email) before pressing the payment button.
![image2](/doc/images/2.jpeg)

<br>

3. The user has inputted a password and is ready to press the payment button.
![image3](/doc/images/3.jpeg)

<br>

4. The user has pressed the payment button. The payment completed has been successfully.
![image4](/doc/images/4.jpeg)

<br>

### Additional cases

5. The user hasn't inputed a password and pressed the payment button.
![image5](/doc/images/5.jpeg)

<br>

6. The user entered the wrong password and pressed the payment button.
![image6](/doc/images/6.jpeg)

<br>

7. Backend server isn't responding.
![image7](/doc/images/7.jpeg)
