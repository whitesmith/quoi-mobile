## Setup
### General setup
1. OS X - This guide assumes OS X which is needed for iOS development;
2. Install [Homebrew](http://brew.sh/);
3. Install [Node.js](https://nodejs.org/en/) 4.0 or newer;
4. Run `brew update && brew upgrade`;
5. Run `brew install watchman`;
6. Run `brew install flow`;
7. Clone the repository;
8. Run `npm install`;

([Here's](https://facebook.github.io/react-native/docs/getting-started.html#content) the complete setup docs, if you have any questions.)

### iOS setup

For iOS development you have to install [Xcode](https://developer.apple.com/xcode/download/) 7.0 or higher. It can be installed from the App Store.

### Android setup

To write React Native apps for Android, you will need to install the Android SDK (and an Android emulator if you want to work on your app without having to use a physical device). See [Android setup guide](https://facebook.github.io/react-native/docs/android-setup.html) for instructions on how to set up your Android environment.

**Note:** When creating an emulator, I recommend you to use [Genymotion](https://www.genymotion.com/) instead of the stock Google emulator (instructions are in the above link also).

## Running the mobile app

### iOS

1. Run `react-native run-ios`.

### Android

1. Start the Android emulator;
1. Run `react-native run-android`.

## DevTools

The following steps are not required, but I strongly recommend you to follow them for a better development experience.

### Enable hot reloading

This allows to automatically update the mobile app when code is changed, without refreshing and losing the state of the application.

1. Open the developer menu on the simulator (`cmd + d` on the iOS simulator, `cmd + m` on the Genymotion emulator);
2. Tap `Enable Hot Reloading`.

Now every time you change the code, the mobile app will automatically update.

### Use RemoteDev for redux

We are using [Redux](https://github.com/reactjs/redux) to handle the application logic.

Redux provides a powerful devtool called [live-editing time travel](https://github.com/gaearon/redux-devtools).

To use it with our React Native application, just install [this app](https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph).

Now, open it while running the iOS / Android app, and you should see the live-editing time travel.

### Debug in Chrome

You can debug the application in Chrome (for example, to see `console.log()` outputs):

1. Open the developer menu on the simulator (`cmd + d` on the iOS simulator, `cmd + m` on the Genymotion emulator);
2. Tap `Debug in Chrome`;
3. Reload the mobile app (`cmd + r`).
