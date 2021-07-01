 ## Responsive Sticky Nav 
`responsive-sticky-nav` provides you with an elegant navbar that is fully responsive and also sticky! You can customize this with colors and styles of your choice.

---

#### Installation

```sh
$ npm i responsive-sticky-nav --save
```

---

### Demo
[Demo1 - sticky](https://drive.google.com/file/d/1LSa3l_sFoStbyUeD1ipGHhzFZBYyAbhE/view?usp=sharing) \
[Demo2 - responsive](https://drive.google.com/file/d/1zsAZAI2dPSjNLzZt0ACcdvKG3dq1pEvZ/view?usp=sharing)

### Usage

```js
import Navbar from 'responsive-sticky-nav'

<Navbar
   logo="link-of-logo-image"
   color="black"
   drawerColor="rgba(0,0,0,0.6)"
   burgerColor="#fff"
   drawerHeight="100vh"
>
    <h4><a href="/home">Home</a></h4>
    <h4><a href="/about">About</a></h4>
    <h4><a href="/work">Work</a></h4>
    <h4><a href="/contact">Contact</a></h4>
</Navbar>
```
---

### Props
|Props   |      Type      |  Details |
|:----------|:-------------:|------:|
| logo |  String / Image | This is the logo image at the left of your nav |
| color |  String   |  Color of navbar - Can be name/hex/rgba/rgb|
| drawerColor | String |   Color of drawer - Can be name/hex/rgba/rgb  |
| burgerColor | String |   Color of hamburger lines - Can be name/hex/rgba/rgb  |
| drawerHeight | String |  Height of drawer - Can be in any units  |

---
### License
MIT


