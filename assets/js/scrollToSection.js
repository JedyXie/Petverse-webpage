    // click-to-scroll
function scrollToSection(sectionId) {
    // get target element
    let element = document.getElementById(sectionId);
    
    // position
    let offset = 100;
    let elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    
    // scroll
    window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
    });
}

window.onscroll = function () {
    let sections = ['box1', 'box2', 'box3', 'box4'];
    sections.forEach(section => {
        let element = document.getElementById(section);
        let position = element.getBoundingClientRect();
        if (position.top <= 150 && position.bottom >= 150) {
            document.querySelectorAll('.side-nav-item').forEach(div => {
                div.classList.remove('active');
            });
            document.querySelector(`.side-nav-item[onclick="scrollToSection('${section}')"]`).classList.add('active');
        }
    });
};