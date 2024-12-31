const swiper = new Swiper(".swiper", {
    mousewheel: false,
    speed: 1700,
    parallax: true, // Fare tekerleği desteği
    navigation: {
    nextEl: ".swiper-button-next", // Sağ ok
    prevEl: ".swiper-button-prev", // Sol ok
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Tıklanabilir pagination noktaları
    },
});



// Scroll to Top Button


function scrollToService(serviceId) {
    const element = document.getElementById(serviceId);
    window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth"
    });
}

function showThankYouMessage(event) {
    event.preventDefault();  
    alert('Mesajınız başarıyla gönderildi!');
}


function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle("active");
}

var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})


