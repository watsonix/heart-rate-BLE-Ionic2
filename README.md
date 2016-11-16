# heart-rate-BLE-Ionic2

Basic heart rate data from Bluetooth Low Energy (BLE) peripherals to phone using Ionic 2

## Supported Platforms

* iOS
* Android (4.3 or greater)


# Pre-requisites

* node.js
  * On Mac OS, recommend using [Homebrew](http://brew.sh/)

    $ brew update
    $ brew install node

  * Otherwise/alternatively download from the [node website](https://nodejs.org/)

* Ionic 2

  Use Node Package Manager to install Ionic 2: `npm install -g ionic cordova`

# Installing

Run _all_ of the below commands

### Cordova

    $ cordova prepare

will install the [Cordova BLE plugin](https://github.com/don/cordova-plugin-ble-central/)

### Ionic 2

    $ ionic platform add android 

here you may potentially be able to replace `android` with `iOS`, though it is untested.


