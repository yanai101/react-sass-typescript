# react-scss-typescrip!

Hi! this is a boilerplate for react app with typescript and scss - you can config in the webpack if you what to use scss nodule or not...


# Files
the typescript.config.d.js file - is for typescript - for scss modules - otherwise if you import something like that : 
```javascript
import cls from './app.scss' 
```
you get this error : 
```javascript
Cannot find module './app.scss'
```
scss module example :
```javascript
import * as React from 'react';
import cls from './app.scss';
const App =()=> (
	<div className= {cls.App}>
		<h2>hallo all <h2/>
	</div>
)
```
and in the app.scss 
```css
.App{
	color:red
}
```
just run mpn\yarn insstall and start ... 
enjoy!
