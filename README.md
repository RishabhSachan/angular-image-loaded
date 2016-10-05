# angular-image-loaded
custom directive for image loading event in angular

How to Use it:

**Working Demo** : https://plnkr.co/RTcD9r


1.Include js file in your project.
```
<script src="imageLoaded.js" type="text/javascript"/>
```
2.Include the **imageLoaded** directive to your angular module
```
var app = angular.module('sampleApp', ['imageLoaded']);
```
3.Create a function **contentLoaded** which will be called when image is loaded.
```
function contentLoaded(e){
// add your stuff here
//e.g.
alert('image is loaded');
}
```
4.Add the attribute **image-loaded** to the images which will be loaded
```
<img ng-src="url-of-image" image-loaded>
```




