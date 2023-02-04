/*** Task 1 ***/
const accordianHeading = Array.from(document.querySelectorAll(".accordian h3"));
accordianHeading.map((ele)=> ele.style.backgroundColor = "#dadaf8");
const accordianPara = Array.from(document.querySelectorAll(".accordian p"));
accordianPara.map((ele)=> ele.style.backgroundColor = "#eeeeff");

/**** Task 2 ****/
const accordianWrapper = document.querySelector(".accordian-wrapper");
const div = document.createElement("div");
div.classList.add("accordian")
const Accordian5 = accordianWrapper.appendChild(div);
const skillHeading = document.createElement("h3");
skillHeading.innerText = "Skills";
const skills = Accordian5.appendChild(skillHeading);
const skillPara = document.createElement("p");
skillPara.style.display = "block"
skillPara.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over GitHub";
Accordian5.appendChild(skillPara)
 accordianHeadings = Array.from(document.querySelectorAll(".accordian > h3"));
accordianHeadings.forEach(h3 => {
    h3.style.backgroundColor = "#dadaf8";
    let para = h3.nextElementSibling;
    if (["Skills"].includes(h3.innerText)) {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
})
