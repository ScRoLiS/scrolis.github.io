(()=>{"use strict";let e=[{id:0,name:"Dark Souls",url:"images/0.png"},{id:1,name:"Dead Space",url:"images/1.png"},{id:2,name:"First Fragment",url:"images/2.webp"},{id:3,name:"Norway",url:"images/3.png"},{id:4,name:"Nur-Sultan (Astana)",url:"images/4.webp"},{id:5,name:"Obscura",url:"images/5.png"},{id:6,name:"Stars",url:"images/6.png"},{id:7,name:"Hollow Knight",url:"images/7.png"}];class t{constructor(e,t,n,s=""){this.element=document.createElement("div"),this.element.classList.add("menu__button"),this.element.innerHTML=`\n            <input class="menu__radio" type="radio" name="${n}" id="${e}" ${s}>\n            <label class="menu__label" for="${e}">${t}</label>\n        `}getHTML(){return this.element.innerHTML}}class n{constructor(e){this.mountPoint=e}render(){this.mountPoint.append(this.element)}changeMountPoint(e,t){this.mountPoint=e}getHTML(){return this.element.innerHTML}}class s{constructor(e,t){this.element=document.createElement("button"),this.element.innerHTML=e,this.element.classList.add("view__button"),this.element.classList.add(t)}getElement(){return this.element}setDisabled(e){this.element.disabled=e}}const i=document.querySelector(".header"),a=document.querySelector(".footer"),l=(new class extends n{constructor(e){super(e),this.element=document.createElement("div"),this.element.classList.add("container"),this.element.classList.add("footer__inner"),this.element.innerHTML='\n            <h2 class="footer__logo">Лого</h2>\n            <p class="footer__year">2021 год</p>\n        ',this.render()}}(a),document.querySelector("#app")),r=(new class{constructor(e){this.element=document.createElement("div"),this.element.classList.add("container"),this.viewButton=new t("view","Смотреть","view","checked"),this.removeButton=new t("remove","Удалить","view"),this.uploadButton=new t("upload","Добавить","view"),this.element.innerHTML=`\n            <nav class="navbar">\n                <h1 class="logo">Лого</h1>\n                <div class="navbar__group menu">\n                    ${this.viewButton.getHTML()}\n                    ${this.removeButton.getHTML()}\n                    ${this.uploadButton.getHTML()}\n                </div>\n            </nav>\n        `,e.append(this.element)}}(i),new class extends n{constructor(e,t){super(e),this.currentImage=0,this.data=[...t],this.prevButton=new s("Предыдущее изображение","view__prev-button"),this.nextButton=new s("Следующее изображение","view__next-button"),this.element=document.createElement("div"),this.element.classList.add("view"),this.none=document.createElement("p"),this.none.classList.add("none"),this.none.innerHTML="Нет отображаемых данных",this.image=document.createElement("img"),this.image.classList.add("view__image"),this.group=document.createElement("div"),this.group.classList.add("view__buttons"),this.group.append(this.prevButton.getElement()),this.group.append(this.nextButton.getElement()),this.update(t)}update(e){this.element.innerHTML="",0==this.currentImage?this.prevButton.setDisabled(!0):this.prevButton.setDisabled(!1),this.currentImage>=e.length-1||1==e.length?(this.currentImage=e.length-1,this.nextButton.setDisabled(!0)):this.nextButton.setDisabled(!1),0!=e.length?(this.image.setAttribute("src",e[this.currentImage].url),this.image.setAttribute("alt",e[this.currentImage].name),this.element.append(this.image)):(this.element.append(this.none),this.nextButton.setDisabled(!0),this.prevButton.setDisabled(!0)),this.element.append(this.group)}nextImage(){this.currentImage<this.data.length&&this.currentImage++}prevImage(){this.currentImage>0&&this.currentImage--}}(l,e)),d=new class extends n{constructor(e,t,n){super(e),this.data=t,this.event=n,this.firstRender=!1,this.element=document.createElement("div"),this.element.classList.add("remove"),this.list=document.createElement("ul"),this.list.classList.add("remove__list"),this.none=document.createElement("p"),this.none.classList.add("none"),this.none.innerHTML="Нет отображаемых данных",this.update(t)}render(){0==this.data.length?this.mountPoint.append(this.none):this.mountPoint.append(this.element),this.firstRender||this.setHandlers(),this.firstRender=!0}setHandlers(){document.querySelectorAll(".remove__button").forEach(((e,t)=>{e.addEventListener("click",(e=>{this.event(t),this.setHandlers(),this.render()}))}))}update(e){this.list.innerHTML="",e.map((e=>{const t=document.createElement("li"),n=document.createElement("img"),i=document.createElement("span"),a=new s("Удалить","remove__button");return i.classList.add("remove__description"),i.innerHTML=e.name,t.classList.add("remove__item"),n.classList.add("remove__img"),n.setAttribute("src",e.url),n.setAttribute("alt",e.name),t.append(n),t.append(i),t.append(a.getElement()),t})).forEach((e=>{this.list.append(e)})),this.element.append(this.list)}}(l,e,(function(t){(class{static removeByIndex(e,t){e.length>0&&e.splice(t,1)}static addNewElement(e,t){e.push(t)}}).removeByIndex(e,t),d.update(e),r.update(e)})),u=new class extends n{constructor(e,t){super(e),this.data=t,this.fileReader=new FileReader,this.element=document.createElement("div"),this.element.classList.add("upload"),this.input=document.createElement("input"),this.input.classList.add("upload__input"),this.input.setAttribute("type","text"),this.file=document.createElement("input"),this.file.classList.add("upload__file"),this.file.setAttribute("type","file"),this.file.setAttribute("name","file"),this.file.setAttribute("id","upload__file"),this.label=document.createElement("label"),this.label.innerHTML="Выбрать файл",this.label.classList.add("upload__label"),this.label.setAttribute("for","upload__file"),this.upload=document.createElement("button"),this.upload.innerHTML="Загрузить",this.upload.classList.add("upload__button"),this.upload.disabled=!0,this.element.append(this.input),this.element.append(this.file),this.element.append(this.label),this.element.append(this.upload)}update(){}}(l,e),o=document.querySelectorAll(".menu__label");r.render();const m=document.querySelector(".view__prev-button"),c=document.querySelector(".view__next-button");function h(t){l.innerHTML="",t.render(),t===r&&r.update(e)}o.forEach((e=>{e.addEventListener("click",(e=>{switch(e.target.innerHTML){case"Смотреть":h(r);break;case"Удалить":h(d);break;case"Добавить":h(u)}}))})),m.addEventListener("click",(t=>{r.prevImage(),r.update(e)})),c.addEventListener("click",(t=>{r.nextImage(),r.update(e)}))})();