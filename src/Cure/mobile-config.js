// This section sets up some basic app metadata, the entire section is optional.
App.info({
//    id: 'com.example.app',
//    version: '0.0.1',
//	  name: 'NativeFacebook'
//    description: 'Get über power in one button click',
//    author: 'Matt Development Group',
//    email: 'contact@example.com', 
//    website: 'http://example.com'
});

// Set up resources such as icons and launch screens.
App.icons({
	//iOS
	//I commented these out, Steve, because at the time I don't have these icons.
  //'iphone_2x': './public/images/Icon-App-60x60@2x.png',//iPhone 5, SE, 6, 6s, 7, 8
  //'iphone_3x': './public/images/Icon-App-60x60@3x.png',// iPhone 6 Plus, 6s Plus, 7 Plus, 8 Plus, X
  'iphone_2x': './public/images/icon-60@2x.png',//iPhone 5, SE, 6, 6s, 7, 8
  'iphone_3x': './public/images/icon-60@3x.png',// iPhone 6 Plus, 6s Plus, 7 Plus, 8 Plus, X
  'app_store':'./public/images/playstore-icon.png',//playstore icon
  // Android
  'android_mdpi': './public/images/ic_launcher1x_mdpi.png',
  //'android_hdpi': './public/images/ic_launcher15x_hdpi.png',
  'android_xhdpi': './public/images/ic_launcher_xhdpi.png',
  'android_xxhdpi': './public/images/ic_launcher3x_xxhdpi.png',
  'android_xxxhdpi': './public/images/ic_launcher4x_xxxhdpi.png'
  // More screen sizes and platforms...
});

App.launchScreens({
	//iOS
  'iphone_2x': './public/images/logo-splash.jpg',
  'iphone5': './public/images/logo-splash.jpg',
  
  // More screen sizes and platforms...
  // Android
  //'android_ldpi_portrait': 'resources/splash/splash-200x320.png',
  //'android_ldpi_landscape': 'resources/splash/splash-320x200.png',
  //<preference name="SplashScreen" value="screen"/>
  //<platform name="android"/>
  
  //<splash src="/public/images/android_mdpi_portrait_splash.png'/>
  //'android_mdpi_landscape': 'resources/splash/splash-480x320.png',
  //'android_hdpi_portrait': './resources/splash/splash-480x800.png',
  //'android_hdpi_landscape': './resources/splash/splash-800x480.png',
  //'android_xhdpi_portrait': './resources/splash/splash-720x1280.png',
  //'android_xhdpi_landscape': './resources/splash/splash-1280x720.png',
  //'android_mdpi_portrait': './.meteor/local/cordova-build/resources/android_mdpi_portrait_splash.jpg',
  
});

// Set PhoneGap/Cordova preferences.
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

// Pass preferences for a particular PhoneGap/Cordova plugin.
//App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//  APP_ID: '1234567890',
//  API_KEY: 'supersecretapikey'
// });
App.configurePlugin('cordova.plugin.facebook4', {
  APP_ID: '123456789',
  APP_NAME: 'CUREapp',
  API_KEY: 'NativeFacebook'
});
// Add custom tags for a particular PhoneGap/Cordova plugin to the end of the
// generated config.xml. 'Universal Links' is shown as an example here.
App.appendToConfig(`
  <universal-links>
    <host name="localhost:3000" />
  </universal-links>
`);