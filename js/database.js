document.addEventListener("DOMContentLoaded", () => {
    // "Daha Detaylı..." butonunu açma/kapatma işlemi
    const toggleButtons = document.querySelectorAll('.B2');
    const closeButtons = document.querySelectorAll('.close-details');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;

            if (details.classList.contains('open')) {
                details.classList.remove('open');
            } else {
                document.querySelectorAll('.details.open').forEach(openDetail => {
                    openDetail.classList.remove('open');
                });

                details.classList.add('open');
                setTimeout(() => {
                    details.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.scrollBy(0, -100);
                }, 300);
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const details = event.target.closest('.details');
            details.classList.remove('open');
        });
    });

    // Galeri için her araçta farklı görseller
    const galleries = document.querySelectorAll('.gallery');

    galleries.forEach((gallery, index) => {
        // Araçlara göre farklı görseller
        const imageSets = [
            [ // Ferrari Görselleri
                "/site.projesi/img/web24.jpeg",
                "/site.projesi/img/web25.jpeg",
                "/site.projesi/img/web26.jpeg"
            ],
            [ // Bugatti Görselleri
                "/site.projesi/img/web23.jpeg",
                "/site.projesi/img/database13.jpg",
                "/site.projesi/img/web28.jpeg"
            ],
            [ // BMW Görselleri
                "/site.projesi/img/database13.jpg",
                "/site.projesi/img/database14.jpeg",
                "/site.projesi/img/database15.jpeg"
            ],
            [ // Mercedes Görselleri
                "/site.projesi/img/mercedes1.jpg",
                "/site.projesi/img/mercedes2.jpg",
                "/site.projesi/img/mercedes3.jpg"
            ],
            [ // Ford Görselleri
                "/site.projesi/img/database8.jpg",
                "/site.projesi/img/database9.jpg",
                "/site.projesi/img/database7.jpeg"
            ],
            [ // Kia Görselleri
                "/site.projesi/img/database7.jpeg",
                "/site.projesi/img/web3.jpg",
                "/site.projesi/img/web22.jpeg"
            ]
        ];

        let currentIndex = 0;
        const images = imageSets[index];
        const photo = gallery.querySelector('.photo');
        const prev = gallery.querySelector('.prev');
        const next = gallery.querySelector('.next');

        // Görseli güncelleme fonksiyonu
        const updatePhoto = () => {
            photo.src = images[currentIndex];
        };

        // Önceki butonuna tıklama
        prev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updatePhoto();
        });

        // Sonraki butonuna tıklama
        next.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updatePhoto();
        });

        // İlk görseli yükle
        updatePhoto();
    });
});

// Slider İşlevselliği
const slider = document.getElementById('photo-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentSlide = 0;

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slider.children.length - 1;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide < slider.children.length - 1) ? currentSlide + 1 : 0;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
});

// Pop-up İşlevselliği
const popup = document.getElementById('popup');
const readMoreBtn = document.getElementById('read-more-btn');
const closePopupBtn = document.getElementById('close-popup');

readMoreBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

closePopupBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// Pop-up alanının herhangi bir yerine tıklanınca kapat
popup.addEventListener('click', (event) => {
    // Eğer tıklanan eleman popup içeriği değilse, popup'ı kapat
    if (event.target === popup) {
        popup.classList.add('hidden');
    }
});
