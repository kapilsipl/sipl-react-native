# React Native Sample App

> This is a minimal setup for starting react-native application. 
 
#### Features
 - This setup includes [redux](https://redux.js.org/basics), [react-redux](https://redux.js.org/basics), [redux-thunk](https://github.com/reduxjs/redux-thunk), [react-navigation](https://reactnavigation.org/docs/en/getting-started.html) and [native base](http://docs.nativebase.io/Components.html#Components). 
 
 - For fetching APIs - [axios](https://github.com/axios/axios) is used. Profile component is connected to redux.
 
 - For authentication purpose, we have used [SwitchNavigator](https://reactnavigation.org/docs/en/auth-flow.html). Please read the official docs for [react-navigation](https://reactnavigation.org/docs/en/getting-started.html) for better understanding.

 > Please see the working of registration screen in case you need to add the validations.

#### Naming conventions and commenting style.

- **Folder/directory name:** lower-case separated by hyphens(-)
  **_Example_** _home_, _profile_, _home-screen_, _profile-screen_

- **File name:** ProperCase
  **_Example_** _Home.js_, _Profile.js_, _HomeScreen.js_, _ProfileScreen.js_
  **_Exception_** _index.js_

- **Class and Component name:** ProperCase
  **_Example_** _Home_, _Profile_, _HomeScreen_, _ProfileScreen_

- **Method name:** camelCase
  **_Example_** _change()_, _onInputValueChange()_, _onButtonPressed()_

- **Variable name:** camelCase
  **_Example_** _user_, _userName_

- **Commenting style:** We are going to use multi line commenting everywhere


  **_Examples_**

    /**
     * Blend two colors together.
     * @param {string} color1 - The first color, in hexadecimal format.
     * @param {string} color2 - The second color, in hexadecimal format.
     * @return {string} The blended color.
     */
    function blend(color1, color2) { ... }
    
    /** assign x a value of 10 */
    var x = 10;
        
    var x = 10; /** assign x a value of 10 */