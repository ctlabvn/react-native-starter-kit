# Philosophy
- I am so fucking lazy, i guess you so ;)
- I don't want to repeat those fucking basic steps.

# Demo
![demo](http://i.imgur.com/YtrqYCp.png)

# Dependencies
- high performance navigation: [react-native-navigation](https://github.com/wix/react-native-navigation)
- push notification: [onesignal](https://github.com/geektimecoil/react-native-onesignal)
- state management: [redux](https://github.com/reactjs/redux)
- offline first solution: [redux-persist](https://github.com/rt2zz/redux-persist)
- logger for redux: [redux-logger](https://github.com/evgenyrodionov/redux-logger)
- async redux action: [redux-thunk](https://github.com/gaearon/redux-thunk)
- icons: [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- fetch file blob: [react-native-fetch-blob](https://github.com/wkh237/react-native-fetch-blob)
- cache image: [react-native-img-cache](https://github.com/wcandillon/react-native-img-cache)

# Issues
- [Blank screen on Android while enable Remote Debugger](https://github.com/wix/react-native-navigation/issues/963#issuecomment-294805642): This issue just happen on Android only, temporary solution is DO NOT enable remote debugger on Android. In case you getting this problem, you have to uninstall app on android/emulator, remove `android/app/build` folder then run `react-native run-android` again.

# Requirement
- Mac laptop
- [yarn](https://yarnpkg.com/en/docs/install) or `npm`
- `npm i -g react-native-rename` (to rename project)
- `brew install imagemagick`
- `npm i -g yo generator-rn-toolbox` (to do awesome stuffs [rn-toolbox](https://github.com/bamlab/generator-rn-toolbox))
- `yarn add --dev eslint-config-rallycoding` or `npm install --save-dev eslint-config-rallycoding`

# Usage
- `git clone https://github.com/crabstudio/react-native-starter-kit.git your_project_name`
- `cd your_project_name && yarn` or `cd your_project_name && npm install`
- `react-native-rename your_project_name`
- `react-native run-android` or `react-native run-ios`

# Change icon|splash screen

I have standard `.psd` files, you can edit by using photoshop, then following command bellow to replace existing icon|splash
```
Assets file are in: assets/psd
After edit psd file, please export them into png files

yo rn-toolbox:assets --icon ./assets/img/icon.png --splash ./assets/img/splash.png --store
Enter Y then press Enter to override existing one

Remove all line inside key AppTheme in file: android/app/src/res/values/styles.xml
[Finally your styles.xml must be the same example bellow]

<resources>
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- Customize your theme here. -->
    </style>
    <!-- Base application theme. -->
</resources>

```

After generate, you will have 3 file for appStore, playStore in project root directory:
```
itunes-icon.png
play-store-icon.png
play-store-image.png
```

# Important

- To push notification, you have to register a new [Onesignal](https://onesignal.com/) account and follow their's instructions. Then following [this guide](https://github.com/geektimecoil/react-native-onesignal#adding-the-code) to finish setup
- Cannot change `StatusBar` color android API < 21 (pre-5.0)
- Test on virtual machine only

# LICENSE

MIT License

Copyright (c) 2017 Crabstudio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.