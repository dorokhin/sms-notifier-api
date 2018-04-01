# SMS Notifier API

This API allows you to send SMS messages in a more secure and controlled way with the REST API provided by the ["REST SMS Gateway" Android application](https://play.google.com/store/apps/details?id=com.perfness.smsgateway.rest) developed by *Perfness*.

In order not to give access to personal data, this API only authorize access to some endpoints : 
* POST /sms who calls POST /v1/sms
* GET /status who calls GET /v1/device/status

This API is meant to be accessible over the Internet whereas the REST SMS Gateway installed on the mobile phone has to stays enclosed in a private network.
