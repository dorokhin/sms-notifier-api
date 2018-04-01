# SMS Notifier API

This API allows you to send SMS messages/notifications in a more secure and controlled way with the REST API provided by the ["REST SMS Gateway" Android application](https://play.google.com/store/apps/details?id=com.perfness.smsgateway.rest) developed by *Perfness*.

In order not to give access to personal data, this API only authorize access to some endpoints :

| Notifier methods to call | Corresponding gateway methods |
|-----------------|-------------------------------|
|`POST /sms` | `POST /v1/sms` |
|`GET /status` | `GET /v1/device/status` |

This API is meant to be accessible over the Internet whereas the REST SMS Gateway installed on the mobile phone has to stay enclosed in a private network.

## Getting Started

1. Install ["REST SMS Gateway"](https://play.google.com/store/apps/details?id=com.perfness.smsgateway.rest) on an Android device equipped with a SIM card
2. Run the application then click the "Start" button, the application then display the IP address and port on which it is listening
3. Clone this repo then run ```npm install``` to install dependencies
4. Copy *.env.example* to a new *.env* file, then change the information to your needs (make sure to set the correct IP address and port to your mobile phone)
5. Run ```npm start``` to start the server (the use of [PM2](http://pm2.keymetrics.io/) is recommended for production)
6. Start sending messages !

**Documentation is available at /docs**

