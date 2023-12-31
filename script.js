const chengeBack = document.querySelector(".chengeBack"),
    slider = document.querySelector(".review__photo2"),
    nextBtn = document.querySelectorAll(".nextBtn"),
    prevBtn = document.querySelectorAll(".prevBtn"),
    sliderTitle = document.querySelector(".review__text-title"),
    review__text__descr = document.querySelector(".review__text-desc"),
    btn1 = document.querySelector(".btn1"),
    btn2 = document.querySelector(".btn2"),
    btn3 = document.querySelector(".btn3"),
    titleRest = document.querySelector(".title"),
    descrRest = document.querySelector(".subtitle"),
    restImg = document.querySelector(".review__rest-img"),
    btns = [btn1, btn2, btn3],
    slides = document.querySelectorAll(".slide"),
    countSlidBlock = document.querySelector(".count"),
    countBtn = document.querySelector(".countBtn"),
    review__slider_slider = document.querySelector(".review__slider-slider");


chengeBack.style.background = `url(img/rev1.png)`
chengeBack.style.backgroundSize = "cover";

function slideInterval(){
    let count = 1;
    setInterval(() => {
        count = count != 4 ? count + 1 : 1;
        chengeBack.style.background = `url(img/rev${count}.png)`;
        chengeBack.style.backgroundSize = "cover";
    },3000)
}

slideInterval();


function slideBg(){
    let count = 0;

    nextBtn.forEach(item => {
        item.addEventListener("click", () => {
            count = count != 3 ? count + 1 : count;
    
            prevBtn[0].classList.remove("ops0");
            prevBtn[1].classList.remove("ops0");
    
            slides.forEach(item => item.classList.add("opacity0"));
            slides[count].classList.remove("opacity0");
    
            if(count == 3){
                nextBtn[0].classList.add("ops0");
                nextBtn[1].classList.add("ops0");
            }
            slider.style.backgroundImage = `url(img/slide${count}.png)`;
            countSlidBlock.innerHTML = `<p class="animCount">${count + 1}</p>`;
            countBtn.innerHTML = `${count + 1}|4`
        })
    })

    prevBtn.forEach(item => {
        item.addEventListener("click", () => {
            count = count != 0 ? count - 1 : count;
    
            nextBtn[0].classList.remove("ops0");
            nextBtn[1].classList.remove("ops0");
    
            slides.forEach(item => item.classList.add("opacity0"));
            slides[count].classList.remove("opacity0");
    
            if(count == 0){
                prevBtn[0].classList.add("ops0");
                prevBtn[1].classList.add("ops0");
            }
            slider.style.backgroundImage = `url(img/slide${count}.png)`;
            countSlidBlock.innerHTML = `<p class="animCount">${count + 1}</p>`;
            countBtn.innerHTML = `${count + 1}|4`
        })
    })

    
}

slideBg();


const btnsSlide = document.querySelectorAll(".btn"),
      slidesItem = document.querySelectorAll(".itemSlide");

btnsSlide[0].addEventListener("click", () => {

    slidesItem[0].classList.remove("dnone")

    slidesItem.forEach(item => {
        item.classList.remove("prevSlide")
        item.classList.remove("nextSlide")
    })

    btnsSlide.forEach(item => {
        item.classList.remove("clicked")
    })

    btnsSlide[0].classList.add("clicked")

    slidesItem[1].classList.add("nextSlide");
    slidesItem[2].classList.add("nextSlide");
})

btnsSlide[1].addEventListener("click", () => {
    slidesItem.forEach(item => {
        item.classList.remove("prevSlide")
        item.classList.remove("nextSlide")
    })

    btnsSlide.forEach(item => {
        item.classList.remove("clicked")
    })

    btnsSlide[1].classList.add("clicked")

    slidesItem[0].classList.add("prevSlide");
    slidesItem[2].classList.add("nextSlide");
})

btnsSlide[2].addEventListener("click", () => {
    slidesItem.forEach(item => {
        item.classList.remove("prevSlide")
        item.classList.remove("nextSlide")
    })

    btnsSlide.forEach(item => {
        item.classList.remove("clicked")
    })

    btnsSlide[2].classList.add("clicked")

    slidesItem[0].classList.add("prevSlide");
    slidesItem[1].classList.add("prevSlide");
})

const sections = document.querySelectorAll(".section"),
      linkSection = document.querySelectorAll(".linkSection");

console.log(sections)

let currentSectionIndex = 0;

function scrollToSection(index){
    sections[index].scrollIntoView({ behavior: 'smooth'});
}

function handleScroll(event) {
   if(event.deltaY > 30 || event.deltaX > 30){
    currentSectionIndex = currentSectionIndex < sections.length - 1 ? currentSectionIndex + 1 : currentSectionIndex;
    scrollToSection(currentSectionIndex)
    removeScrollListeners();
    setTimeout(() => addScrollListeners(), 500);
   }
   else if(event.deltaY < -30 || event.deltaX < -30){
    currentSectionIndex = currentSectionIndex > 0 ? currentSectionIndex - 1 : 0;
    scrollToSection(currentSectionIndex)
    removeScrollListeners();
    setTimeout(() => addScrollListeners(), 500);
   }
}

function handleTouchStart(event) {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    event.preventDefault();
    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;
    const deltaX = touchX - this.touchStartX;
    const deltaY = touchY - this.touchStartY;

    if (Math.abs(deltaX) > 30 || Math.abs(deltaY) > 30) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 30) {
                currentSectionIndex = currentSectionIndex < sections.length - 1 ? currentSectionIndex + 1 : currentSectionIndex;
            } else if (deltaX < -30) {
                currentSectionIndex = currentSectionIndex > 0 ? currentSectionIndex - 1 : 0;
            }
        } else {
            if (deltaY > 30) {
                currentSectionIndex = currentSectionIndex < sections.length - 1 ? currentSectionIndex + 1 : currentSectionIndex;
            } else if (deltaY < -30) {
                currentSectionIndex = currentSectionIndex > 0 ? currentSectionIndex - 1 : 0;
            }
        }

        scrollToSection(currentSectionIndex);
        removeTouchListeners();
        setTimeout(() => addTouchListeners(), 500);
    }
}

function addScrollListeners() {
    document.addEventListener('wheel', handleScroll);
}

function removeScrollListeners() {
    document.removeEventListener('wheel', handleScroll);
}

function addTouchListeners() {
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
}

function removeTouchListeners() {
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchmove', handleTouchMove);
}

document.addEventListener('wheel', handleScroll);
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);

linkSection.forEach((item, i) => {
    item.addEventListener("click", (event) => {
        scrollToSection(i + 1)
    })
})


