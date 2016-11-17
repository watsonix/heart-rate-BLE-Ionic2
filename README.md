# heart-rate-BLE-Ionic2

**Warning**: This is not yet functional.

Basic heart rate data from Bluetooth Low Energy (BLE) peripherals to phone using Ionic 2

## Supported Platforms

* iOS
* Android (4.3 or greater)


# Pre-requisites

### Node.js
  * On Mac OS, recommend using [Homebrew](http://brew.sh/)

    `brew update` then `brew install node`

  * Otherwise/alternatively download from the [node website](https://nodejs.org/)

### Ionic 2

  Use Node Package Manager to install Ionic 2: `npm install -g ionic cordova`

If you run into trouble here, go visit the [Ionic 2 install guide](https://ionicframework.com/docs/v2/getting-started/installation/)

# Installing

Run _all_ of the below commands within the root directory of this project.

### Cordova

    $ cordova prepare

will install the [Cordova BLE plugin](https://github.com/don/cordova-plugin-ble-central/)

### Ionic 2

    $ ionic platform add android 

here you may potentially be able to replace `android` with `iOS`, though it is untested.

# building and running

Within the root directory of this project, do

    $ ionic run android

here you may potentially be able to replace `android` with `iOS`, though it is untested.

