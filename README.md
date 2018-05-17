<h1>
  <a id="React_Native_Sample_App_0"></a>React Native Sample App</h1>
<blockquote>
  <p>This is a minimal setup for starting react-native application.</p>
</blockquote>
<h4>
  <a id="Features_4"></a>Features</h4>
<ul>
  <li>
    <p>This setup includes
      <a href="https://redux.js.org/basics">redux</a>,
      <a href="https://redux.js.org/basics">react-redux</a>,
      <a href="https://github.com/reduxjs/redux-thunk">redux-thunk</a>,
      <a href="https://reactnavigation.org/docs/en/getting-started.html">react-navigation</a> and
      <a href="http://docs.nativebase.io/Components.html#Components">native base</a>.</p>
  </li>
  <li>
    <p>For fetching APIs -
      <a href="https://github.com/axios/axios">axios</a> is used. Profile component is connected to redux.</p>
  </li>
  <li>
    <p>For authentication purpose, we have used
      <a href="https://reactnavigation.org/docs/en/auth-flow.html">SwitchNavigator</a>. Please read the official docs of
      <a href="https://reactnavigation.org/docs/en/getting-started.html">react-navigation</a> for better understanding.</p>
  </li>
</ul>
<blockquote>
  <p>Please see the working of registration screen in case you need to add the validations.</p>
</blockquote>
<h4>
  <a id="Naming_conventions_and_commenting_style_13"></a>Naming conventions and commenting style.</h4>
<ul>
  <li>
    <p>
      <strong>Folder/directory name:</strong> lower-case separated by hyphens(-)
      <br>
      <strong>
        <em>Example</em>
      </strong>
      <em>home</em>,
      <em>profile</em>,
      <em>home-screen</em>,
      <em>profile-screen</em>
    </p>
  </li>
  <li>
    <p>
      <strong>File name:</strong> ProperCase
      <br>
      <strong>
        <em>Example</em>
      </strong>
      <em>Home.js</em>,
      <em>Profile.js</em>,
      <em>HomeScreen.js</em>,
      <em>ProfileScreen.js</em>
      <br>
      <strong>
        <em>Exception</em>
      </strong>
      <em>index.js</em>
    </p>
  </li>
  <li>
    <p>
      <strong>Class and Component name:</strong> ProperCase
      <br>
      <strong>
        <em>Example</em>
      </strong>
      <em>Home</em>,
      <em>Profile</em>,
      <em>HomeScreen</em>,
      <em>ProfileScreen</em>
    </p>
  </li>
  <li>
    <p>
      <strong>Method name:</strong> camelCase
      <br>
      <strong>
        <em>Example</em>
      </strong>
      <em>change()</em>,
      <em>onInputValueChange()</em>,
      <em>onButtonPressed()</em>
    </p>
  </li>
  <li>
    <p>
      <strong>Variable name:</strong> camelCase
      <br>
      <strong>
        <em>Example</em>
      </strong>
      <em>user</em>,
      <em>userName</em>
    </p>
  </li>
  <li>
    <p>
      <strong>Constants name:</strong> UPPER_CASE separated by underscore(_)
      <br>
      <strong>
        <em>Example</em>
      </strong>
      <em>USER</em>,
      <em>USER_NAME</em>
    </p>
  </li>
  <li>
    <p>
      <strong>Commenting style:</strong> We are going to use multi line commenting everywhere</p>
  </li>
</ul>
<p>
  <strong>
    <em>Examples</em>
  </strong>
</p>
<pre><code>/**
 * @method blend
 * @description Blend two colors together.
 * @param {string} color1 - The first color, in hexadecimal format.
 * @param {string} color2 - The second color, in hexadecimal format.
 * @return {string} The blended color.
 */
function blend(color1, color2) { 
  ...
}
<br />
/** assign x a value of 10 */
var x = 10;
<br />
var x = 10; /** assign x a value of 10 */
</code></pre>