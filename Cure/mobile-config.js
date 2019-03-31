// This section sets up some basic app metadata, the entire section is optional.
App.info({
//  id: 'com.example.matt.uber',
//  name: 'über',
//  description: 'Get über power in one button click',
//  author: 'Team WIP',
//  email: 'contact@example.com',
//  website: 'http://example.com'
});

// Set up resources such as icons and launch screens.
App.icons({
  'iphone_2x': './public/images/Icon-App-60x60@2x.png',//iPhone 5, SE, 6, 6s, 7, 8
  'iphone_3x': './public/images/Icon-App-60x60@3x.png',// iPhone 6 Plus, 6s Plus, 7 Plus, 8 Plus, X
  'app_store':'./public/images/playstore-icon.png',//playstore icon
  'android_mdpi': './public/images/ic_launcher1x_mdpi.png',
  'android_hdpi': './public/images/ic_launcher1.5x_hdpi.png',
  'android_xhdpi': './public/images/ic_launcher_xhdpi.png',
  'android_xxhdpi': './public/images/ic_launcher3x_xxhdpi.png',
  'android_xxxhdpi': './public/images/ic_launcher4x_xxxhdpi.png'
  // More screen sizes and platforms...
});

App.launchScreens({
  'iphone_2x': './public/images/logo-splash.jpg',
  'iphone5': './public/images/logo-splash.jpg',
  // More screen sizes and platforms...
});

// Set PhoneGap/Cordova preferences.
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

// Pass preferences for a particular PhoneGap/Cordova plugin.
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '1234567890',
  API_KEY: 'supersecretapikey'
});
 
// Add custom tags for a particular PhoneGap/Cordova plugin to the end of the
// generated config.xml. 'Universal Links' is shown as an example here.
App.appendToConfig(`
  <universal-links>
    <host name="localhost:3000" />
  </universal-links>
`);