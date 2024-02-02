# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

### Screenshot

![](./design/desktop-preview.jpg)
![](./design/mobile-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I understod that resetting browser default with some css code helps alot in making the styling look Good
```html
<span>Name cannot be empty</span>
```
```css
.proud-of-this-css {
 background-blend-mode:hue;
}
```
```js
const proudOfThisFunc = () => {
AllInput.forEach(AllInput => {
    AllInput.addEventListener("focusin", function() {
        this.style.border = "1.7px solid var(  --primay-Blue)"
        for (let i = 0; i <  AllImg.length; i++) {
            AllImg[i].style.display = "none";
          }
          for (let i = 0; i < AllError.length; i++) {
            AllError[i].style.color = "#fff"
          }
    });
    AllInput.addEventListener("focusout", function() {
        this.style.border = "1.3px solid #dedede";
    });
});
}
```

### Continued development
Working with Api's 

## Author

- Frontend Mentor - [@dodosebn](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@dodos_ebn](https://www.twitter.com/dodos_ebn)


## Acknowledgments

I would like to express my heartfelt appreciation to Egwu Florence and Sir Obi Fortune for their contributions to this Weather App. Their dedication, hard work, and expertise have been instrumental in bringing this project to life. Their collaborative efforts and commitment to excellence have greatly contributed to the success of this project.
