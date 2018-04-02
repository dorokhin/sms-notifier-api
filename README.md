# SMS Notifier API

This API allows you to send SMS messages/notifications in a more secure, controlled and DIY (Do It Yourself) way without reinventing the wheel by using the REST API provided by the ["REST SMS Gateway" Android application](https://play.google.com/store/apps/details?id=com.perfness.smsgateway.rest) developed by *Perfness*.

REST SMS Gateway is a very cool and simple application exposing a REST API to interact with the SMS system of your Android device without any third party unlike some other applications. However, by default it gives access to some unwanted endpoints (e.g. list of all messages in the mobile phone) and does not seem to have a lot of security measures. That's not very ideal in the case you would want to expose this API on the Internet to send SMS messages or notifications with other applications.

This SMS Notifier API is meant to act as an middleman between your applications and the REST SMS Gateway by giving access only to some endpoints and by adding some security measures like message logging, authorization levels (not implemented yet :) ) and security tokens (not implemented yet :) ).

You are free to expose this API on the Internet or in a VPN to send SMS messages/notifications with other applications and ensure that the SMS REST Gateway stays unreachable from the outside by staying enclosed in a private network.

**In some countries, sending SMS can be very expensive. In this case, SMS Notifier API is not the right solution and some online services could be much more suitable.**

| Available notifier methods | Corresponding gateway methods |
|-----------------|-------------------------------|
|`POST /sms` | `POST /v1/sms` |
|`GET /status` | `GET /v1/device/status` |

## Getting Started

### Prerequisites
* A mobile phone (preferably one that you do not intend to use) with a SIM card
* A computer or server on which you will install the SMS Notifier API
* A private network in which both of this devices are located
* An internet access (preferably too :) )

### Lets' go !

1. Install ["REST SMS Gateway"](https://play.google.com/store/apps/details?id=com.perfness.smsgateway.rest) on an Android device equipped with a SIM card
2. Run the application then click the "Start" button, the application then display the IP address and port on which it is listening
3. Clone this repo on a computer or server on the same network as your mobile phone then run ```npm install``` to install dependencies
4. Copy *.env.example* to a new *.env* file, then change the information to your needs (make sure to set the correct IP address and port of your mobile phone)
5. Run ```npm start``` to start the server (the use of [PM2](http://pm2.keymetrics.io/) is recommended for production)
6. Start sending messages !

## Documentation
To access the SMS Notifier API documentation, you first have to start the server. Then it will be accessible at ```http://<address of the API>/docs.```

## SMS Logging
Each SMS message sent through the SMS Notifier API is logged with the following format : 

```
<date & time> - <remote IP address> - <phone number> - <message>
```

By default, the *sms.log* file is created at the root of the project, but you can specify another path in the *.env* file (SMS_LOG_PATH parameter). **Read/write permissions are not yet fully managed.**

