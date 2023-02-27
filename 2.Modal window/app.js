// selecting btn all button elements where we add functionalitys
const clickBtnEle = document.querySelector('.modal-btn')
const exitBtnEle = document.querySelector('.exit-icon')
const blurSectionEle = document.querySelector('.blur-section')
const modalCardEle = document.querySelector('.modal-card')

// adding clickevent to button to display blursection which is already created in html and css
clickBtnEle.addEventListener('click', () => {
    blurSectionEle.style.display = 'flex'
})

// add exitbtn click handler to remove displayed blursection
exitBtnEle.addEventListener('click', () => {
    blurSectionEle.style.display = 'none'
})


