# _DOM Assignment - 1_

___
### _After Update Final Output_ :

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/full-opt.png)

## _Task 1_:

### **Solution :**
```JavaScript
let element = document.createElement("li");
element.innerHTML= "<a>Hire Me</a>" ;
'<a>Hire Me</a>'
let parent = document.querySelector("header nav ul");
parent.appendChild(element); 
```



## _Task 2_:

### **Solution :**
```JavaScript
let search= document.querySelector(".search-field input")
search.placeholder='Search My Project' ;
```


## _Task 3_:

### **Solution :**
```JavaScript
let paraContent = document.querySelectorAll(".hero-left-section p span");
paraContent[1].innerText= 'an Employee' ;
paraContent[2].innerText= 'iNeuron Intelligence Pvt Ltd' ;
```


## _Task 4_:

### **Solution :**
```JavaScript
let profile= document.querySelector(".hero-right-section img");
profile.src="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
```

## _Task 5_:

### **Solution :**
```JavaScript
let parent =document.querySelector(".hero-right-section-btns");
let supportBtn= document.createElement("button");
supportBtn.innerText='Support Me';
parent.appendChild(bt);
```
---



# _DOM Assignment - 2_

___
### _After Update Final Output_ :

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/Screenshot%209.png)


## _Task 1_:

### **Solution :**
```JavaScript
let heading= document.querySelectorAll(".accordian > h3");
let para= document.querySelectorAll(".accordian >p");
heading.forEach((x) => {x.style.backgroundColor ="#dadaf8"}) ;
para.forEach((x) => {x.style.backgroundColor ="#dadaf8"}) ;
```


## _Task 2_:

### **Solution :**
```JavaScript
let parent= document.querySelector(".accordian-wrapper");
let div= document.createElement("div");
let h= document.createElement("h3");
let p= document.createElement("p");
div.classList.add("accordian");
h.innerText= 'Skills' ;
p.innerText= 'I posses a very good command over the Full Stack Development technologies like MERN which can be see in my work over the Github' ;
parent.appendChild(div);
div.appendChild(h);
div.appendChild(p);
h.style.backgroundColor ="#dadaf8" ;
p.style.backgroundColor ="#dadaf8" ;
let ax = document.querySelectorAll(".accordian > h3");
ax.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
```


----

# _DOM Assignment - 3_

___
### _After Update Final Output_ :

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/Screenshot%202023-01-31%20113936.png)

## _Task 1_:

### **Solution :**
```JavaScript
let form= document.querySelectorAll('form') ;
form[1].addEventListener('submit' , (x) => {x.preventDefault();
  let name= document.querySelector('.userName');
  let email= document.querySelector('.userEmail');
  let message= document.querySelector('.userMessage');

  let en=document.querySelector('.enterName');
  let em=document.querySelector('.enterMail');                                                  
  let emsg= document.querySelector('.enterMessage');

   en.value= name.value;                                         
   em.value= email.value;
   emsg.value= message.value ;
                        })
```




----

# _DOM Assignment - 4_

___
### _After Update Final Output_ :

![Output Image](./04_DOM%20Project/04_DOM%20Project/assets/Screenshot%2010.png)
![Output Image](./04_DOM%20Project/04_DOM%20Project/assets/Screenshot%2011.png)

## _Task 1_:

### **Solution :**
```JavaScript

let barbari = document.querySelector('.clash-card__unit-stats--barbarian');
barbari.style.backgroundColor= '#eb9e2a';

let arch = document.querySelector('.clash-card__unit-stats--archer');

let giant = document.querySelector('.clash-card__unit-stats--giant');
giant.style.backgroundColor= '#d35400';

let goblin = document.querySelector('.clash-card__unit-stats--goblin');
goblin.style.backgroundColor= '#4cd137';

let wizard = document.querySelector('.clash-card__unit-stats--wizard');
wizard.style.backgroundColor= '#00a8ff';

let stats=document.querySelectorAll('.clearfix');
let color = [...stats];
color.map((x)=> x.style.color = "#fff");
let scol= document.querySelectorAll(".no-border");
let scolor = [...scol];
scolor.map((x)=> x.style.color = "#fff");

```


----

# _DOM Assignment - 5_

___
### _After Update Final Output_ :

![Output Image](./05_DOM%20Project/05_DOM%20Project/Output/Screenshot%201.png)
![Output Image](./05_DOM%20Project/05_DOM%20Project/Output/Screenshot%202.png)

## _Task 1_:

### **Solution :**
```JavaScript
//navbar pro subscription
const nav = document.querySelector(".nav-center");
let div = document.createElement("div");
let btn = document.createElement("a");
btn.classList.add("btn");
btn.textContent="Pro Subscription";
div.append(btn);
nav.appendChild(div);
//Add Chinese Recipe 
let dish= document.querySelector(".tags-container > div");
let addAnchor=document.createElement("a");
addAnchor.innerText='Chinese (7)';
dish.appendChild(addAnchor);
//Add 6th card
const recipeGallery = document.querySelector(".recipe-gallery");

const newCard = document.createElement("div");
newCard.className = "card";

const recipeText = document.createElement("a");
recipeText.className = "recipe-text";
recipeText.setAttribute("href","#");

const image = document.createElement("img");
image.className = "recipe-img";
image.setAttribute("src","./img/recipe-5.jpeg");

const recipeName = document.createElement("h5");
recipeName.className = "recipe-name";
recipeName.innerText = "Chicken Noodles";
const recipePara = document.createElement("p");
recipePara.className = "recipe-disp";
recipePara.innerText = "Prep : 15min | Cook : 30min";

recipeText.appendChild(image);
recipeText.appendChild(recipeName);
recipeText.appendChild(recipePara);
newCard.appendChild(recipeText);
recipeGallery.appendChild(newCard);

const name1 = document.querySelector(".page-footer p a");
name1.innerText = "Riya Srivastava";
```

----

# _DOM Assignment - 6_

___
### _After Update Final Output_ :

![Output Image](./06_DOM%20Project/06_DOM%20Project/assets/Screenshot%203.png)
![Output Image](./06_DOM%20Project/06_DOM%20Project/assets/Screenshot%204.png)

## _Task 1_:

### **Solution :**
```JavaScript
//logo
let a=document.querySelector("header");
a.removeChild(a.firstElementChild);
let img = document.createElement("img");
img.src="./assets/ineuron-logo.png";
a.appendChild(img);
```

## _Task 2_:

### **Solution :**
```JavaScript
let x=document.querySelector(".app_price > span ");
x.innerText='$10';

const footerSocial = document.querySelector(".footer_social");
const div = document.createElement("div")
div.className = "footer_social_ico";
div.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
footerSocial.appendChild(div);
```



----

# _DOM Assignment - 7_

___
### _After Update Final Output_ :

![Output Image](./DOM%20P7/DOM%20P7/Screenshot%2012.png)
![Output Image](./DOM%20P7/DOM%20P7/Screenshot%2013.png)

## _Task 1_ and _Task 2_:

### **Solution :**
```JavaScript
let allATags = Array.from(document.getElementsByTagName("a"));
const mainLanguages = document.getElementsByClassName("main__languages")[0]
const input = document.getElementsByTagName("input")[0];
const submitBtn = document.getElementsByTagName("button")[2]
submitBtn.removeAttribute("disabled");
input.removeAttribute("disabled");

allATags.forEach(ele => {
    if (ele.innerText.includes("2.0")){
        mainLanguages.removeChild(ele)
    }
})

let inputStore = localStorage.getItem("inputs")
if (inputStore){
    inputStore = JSON.parse(localStorage.getItem("inputs"))
} else {
    inputStore = []
}

submitBtn.addEventListener("click", () => {
    inputStore.push(input.value)
    localStorage.setItem("inputs", JSON.stringify(inputStore))
    appendInput(input.value);
    
})

const appendInput = (inputTaken) => {
    const aTag = document.createElement("a")
    aTag.href = 'https://www.ineuron.ai';    
    aTag.target = '_blank';
    aTag.innerText = inputTaken
    mainLanguages.appendChild(aTag)
    console.log(aTag);
}

const getInput = JSON.parse(localStorage.getItem("inputs"));
getInput.forEach((note) => {
appendInput(note);
});
```

----

# _DOM Assignment - 8_

___
### _After Update Final Output_ :

1.![Output Image](./DOM%20P8/DOM%20P8/images/Screenshot%205.png)
2.![Output Image](./DOM%20P8/DOM%20P8/images/Screenshot%206.png)
3.![Output Image](./DOM%20P8/DOM%20P8/images/Screenshot%207.png)

## _Task 1_:

### **Solution :**
```JavaScript
let a=document.querySelector("aside");
let horizontalRule= document.createElement('hr');
horizontalRule.classList.add('hr-line');
a.appendChild(horizontalRule);

let h2= document.createElement('h2');
h2.classList.add('new-head');
h2.innerText='This is my custom heading';
a.appendChild(h2);

a.style.overflow='auto';

a.style.border='thick solid #E21717';

```

## _Task 2_:

### **Solution :**
```JavaScript
let body=document.querySelector('body');
body.style.backgroundImage='none';
'none'
```
## _Task 3_:

### **Solution :**
```JavaScript
let nav = document.getElementsByClassName("navbar-toggler");
let i;

for (i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let navContent = this.nextElementSibling;
    if (navContent.style.display === "block") {
      navContent.style.display = "none";
    } else {
      navContent.style.display = "block";
    }
  });
}
```


----

# _DOM Assignment - 9_

___
### _After Update Final Output_ :

![Output Image](./DOM%20P9/DOM%20P9/images/Screenshot%208.png)

## _Task 1_:

### **Solution :**
```JavaScript
let h=document.querySelector('h1');
h.style.color='#E21717';
```

## _Task 2_:

### **Solution :**
```JavaScript
let p=document.querySelector('.add-to-cart');
p.style.backgroundColor='#E21717';
```