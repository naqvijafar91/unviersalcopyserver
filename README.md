# Universal Copy Paste Server

Now Select and copy anything on your Android Device(Long press on the text inside any app and select copy), and then paste
that text anywhere in your laptop using the Desktop Client.

Note:This is the server  for Universal Copy Paste.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

What things you need to install the software and how to install them

```
NodeJS
npm
bower
Postman Client for Running the Registration API
```

### Installing

A step by step series of examples that tell you have to get a development env running


* **Go inside the project directory**
* **npm install**
## Deployment

Run the server:


```
npm start
```

Steps to Register a Universal Copy Paste Account:
* **Open Postman**
* **Enter this url http://128.199.89.41:9001/user/register (The Ip Address can be changed with either localhost or your server's Ip**
* **Do a Post request(x-www-form-urlencoded) with keys as name,email and password(Enter your respective details in those fields)**

Steps:
1-Create your Account using the Android application(Registration Feature yet to be built in that, Steps for Registration given on
Server's [github]() page)
2-Login into the Android app
3-Run this desktop Client
4-Enter your email id and password for Universal Copy Paste
5-Keep the desktop client running



## Built With

* IntelliJ - IDE


## Authors

* **Jafar Naqvi** - *Initial work* - [Jafar Naqvi](https://github.com/naqvijafar91)


## License

This project is licensed under the MIT License

## Acknowledgments

* [Zillion](http://zillion.io)
