// Card data with full testimonials and links
        const cardData = [{
                title: "Hospitals",
                icon: '<img src="https://pcubeapps.com/wp-content/uploads/2025/05/Layer_1-5.svg">',
                quote: "Not-for-profit hospitals are healthcare organizations that don't distribute profits to owners,.............",
                attribution: " ",
                link: "https://pcubeapps.com/partners-in-patient-care#Hospitals"
            },        
            {
                title: "Oncology Clinics",
                icon: '<img src="https://pcubeapps.com/wp-content/uploads/2025/05/icon-2-1.svg">',
                quote: "Oncology clinics are healthcare facilities specializing in the diagnosis.............",
                attribution: "",
                link: "https://pcubeapps.com/partners-in-patient-care#Oncology"
            },
            {
                title: "Large Surgery Centers",
                icon: '<img src="https://pcubeapps.com/wp-content/uploads/2025/05/icon-1-1.svg">',
                quote: "Large surgery centers, also known as ambulatory surgery centers (ASCs), are.............",
                attribution: "",
                link: "https://pcubeapps.com/partners-in-patient-care#Large-Surgery"
            },
            {
                title: "Long Term Acute....",
                icon: '<img src="https://pcubeapps.com/wp-content/uploads/2025/05/Layer_1-3.svg">',
                quote: "A Long-Term Acute Care (LTAC) hospital is a specialized hospital that provides acute.............",
                attribution: "",
                link: "https://pcubeapps.com/partners-in-patient-care#Long-Term"
            },
            {
                title: "Infusion Pharmacy",
                icon: '<img src="https://pcubeapps.com/wp-content/uploads/2025/05/Layer_1-2.svg">',
                quote: "Infusion pharmacies are specialized pharmacies that focus on preparing and administering.............",
                attribution: "",
                link: "https://pcubeapps.com/partners-in-patient-care#Infusion-Pharmacy"
            },
            {
                title: "Infusion Centers",
                icon: '<img src="https://pcubeapps.com/wp-content/uploads/2025/05/Layer_1-5.svg">',
                quote: "Infusion centers are outpatient clinics that specialize in administering infusion therapy.............",
                attribution: "",
                link: "https://pcubeapps.com/partners-in-patient-care#Infusion-Centers"
            },
            {
                title: "Specialty Pharmacy",
                icon: '<img src="https://pcubeapps.com/wp-content/uploads/2025/05/Layer_1-1.svg">',
                quote: "Specialty pharmacies focus on medications for rare, complex, and often chronic conditions.............",
                attribution: "",
                link: "https://pcubeapps.com/partners-in-patient-care#Specialty-Pharmacy"
            },
            {
                title: "Closed Door Pharmacy",
                icon: '<img src="https://pcubeapps.com/wp-content/uploads/2025/05/Vector.svg">',
                quote: "A pharmacy that provides pharmaceutical care specifically to a defined group of patients.............",
                attribution: "",
                link: "https://pcubeapps.com/partners-in-patient-care#Closed-Door"
            },
            {
                title: "Correctional Pharmacy",
                icon: '<img src="https://pcubeapps.com/wp-content/uploads/2025/05/icon-3.svg">',
                quote: "Correctional pharmacy is a specialized area of pharmacy practice that provides.............",
                attribution: "",
                link: "https://pcubeapps.com/partners-in-patient-care#Correctional-Pharmacy"
            },
            {
                title: "VA Medical Center",
                icon: '<img src="https://pcubeapps.com/wp-content/uploads/2025/05/Layer_1-1.svg">',
                quote: "A VA medical center, or hospital, provides comprehensive healthcare services to eligib..............",
                attribution: "",
                link: "https://pcubeapps.com/partners-in-patient-care#VA-Medical"
            },
            {
                title: "DOD Medical Facility",
                icon: '<img src="https://pcubeapps.com/wp-content/uploads/2025/05/icon-3.svg">',
                quote: "A DoD (Department of Defense) medical center is a military hospital or clinic providing.............",
                attribution: "",
                link: "https://pcubeapps.com/partners-in-patient-care#DOD-Medical"
            },
            {
                title: "Research Facility",
                icon: '<img src="https://pcubeapps.com/wp-content/uploads/2025/05/Layer_1-3.svg">',
                quote: "A research facility is a dedicated space for conducting research and experimentation.............",
                attribution: "",
                link: "https://pcubeapps.com/partners-in-patient-care#Research-Facility"
            }
        ];

        // Improved carousel functionality with true infinite loop
        document.addEventListener('DOMContentLoaded', function () {
            const sliderElement = document.getElementById('mbr-slider');
            const dotsContainer = document.getElementById('mbr-dots');
            const prevBtn = document.getElementById('mbr-prev');
            const nextBtn = document.getElementById('mbr-next');

            let slidesPerView = getSlidesPerView();
            let currentIndex = 0;
            let totalOriginalSlides = cardData.length;
            let isTransitioning = false;
            let autoplayTimer;

            // Determine slides per view based on screen width
            function getSlidesPerView() {
                if (window.innerWidth >= 1366) {
                    return 4;
                } else if (window.innerWidth >= 1080) {
                    return 3;
                } else if (window.innerWidth >= 767) {
                    return 2;
                } else {
                    return 1;
                }
            }

            // Clone slides for infinite loop effect
            function getClonedData() {
                // Create a copy of the original data with clones at both ends
                // This creates the illusion of an infinite carousel
                const clonedBefore = [...cardData].slice(-slidesPerView);
                const clonedAfter = [...cardData].slice(0, slidesPerView);
                return [...clonedBefore, ...cardData, ...clonedAfter];
            }

            // Initialize slider
            function initSlider() {
                // Clear existing content
                sliderElement.innerHTML = '';
                dotsContainer.innerHTML = '';
                
                const clonedData = getClonedData();
                
                // Create slides including clones
                clonedData.forEach((card, index) => {
                    const slide = document.createElement('div');
                    slide.classList.add('mbr-slide');
                    slide.setAttribute('data-index', index);

                    slide.innerHTML = `
                        <a href="${card.link}" class="mbr-card-link">
                            <div class="mbr-card">
                                <div class="mbr-decoration"></div>
                                <div class="mbr-card-header">
                                    <div class="mbr-icon-wrapper">
                                        <div class="mbr-icon">${card.icon}</div>
                                    </div>
                                    <h3 class="mbr-title">${card.title}</h3>
                                </div>
                                <div class="mbr-card-body">
                                    <p class="mbr-quote">${card.quote} <span class="mbr-attribution">- ${card.attribution}</span></p>
                                </div>
                            </div>
                        </a>
                    `;

                    sliderElement.appendChild(slide);
                });

                // Set slides width based on slides per view
                const slides = document.querySelectorAll('.mbr-slide');
                slides.forEach(slide => {
                    slide.style.minWidth = `${100 / slidesPerView}%`;
                });

                // Create pagination dots for original slides only
                for (let i = 0; i < totalOriginalSlides; i++) {
                    const dot = document.createElement('div');
                    dot.classList.add('mbr-dot');
                    if (i === 0) dot.classList.add('mbr-active');

                    dot.addEventListener('click', () => {
                        goToSlide(i);
                        resetAutoplay();
                    });

                    dotsContainer.appendChild(dot);
                }

                // Set initial position to first real slide (after clones)
                currentIndex = slidesPerView;
                updateSliderPosition(false);
            }

            // Go to specific slide with transition
            function goToSlide(index) {
                // Add slidesPerView to account for the cloned slides at the beginning
                currentIndex = index + slidesPerView;
                updateSliderPosition(true);
                updateActiveDot();
            }

            // Handle the infinite loop transition
            function handleInfiniteLoop() {
                if (isTransitioning) return;
                
                // If we've gone past the end (into the cloned area)
                if (currentIndex >= totalOriginalSlides + slidesPerView) {
                    isTransitioning = true;
                    // Wait for transition to finish then jump to the real first slide
                    setTimeout(() => {
                        sliderElement.style.transition = 'none';
                        currentIndex = slidesPerView;
                        updateSliderPosition(false);
                        
                        // Re-enable transition after the jump
                        setTimeout(() => {
                            sliderElement.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
                            isTransitioning = false;
                        }, 50);
                    }, 500);
                }
                
                // If we've gone before the beginning (into the cloned area)
                else if (currentIndex < slidesPerView) {
                    isTransitioning = true;
                    // Wait for transition to finish then jump to the real last slide
                    setTimeout(() => {
                        sliderElement.style.transition = 'none';
                        currentIndex = totalOriginalSlides + slidesPerView - 1;
                        updateSliderPosition(false);
                        
                        // Re-enable transition after the jump
                        setTimeout(() => {
                            sliderElement.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
                            isTransitioning = false;
                        }, 50);
                    }, 500);
                }
            }

            // Update slider position based on current index
            function updateSliderPosition(withTransition = true) {
                if (withTransition) {
                    sliderElement.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
                } else {
                    sliderElement.style.transition = 'none';
                }
                
                const slideWidth = 100 / slidesPerView;
                const translateX = -currentIndex * slideWidth;
                sliderElement.style.transform = `translateX(${translateX}%)`;
                
                if (withTransition) {
                    handleInfiniteLoop();
                }
            }

            // Update active dot
            function updateActiveDot() {
                // Calculate the real index (accounting for the cloned slides)
                let realIndex = (currentIndex - slidesPerView) % totalOriginalSlides;
                if (realIndex < 0) realIndex = totalOriginalSlides + realIndex;
                
                const dots = document.querySelectorAll('.mbr-dot');
                dots.forEach((dot, index) => {
                    dot.classList.toggle('mbr-active', index === realIndex);
                });
            }

            // Start autoplay
            function startAutoplay() {
                autoplayTimer = setInterval(() => {
                    if (!isTransitioning) {
                        currentIndex++;
                        updateSliderPosition(true);
                        updateActiveDot();
                    }
                }, 5000);
            }

            // Reset autoplay
            function resetAutoplay() {
                clearInterval(autoplayTimer);
                startAutoplay();
            }

            // Event listeners
            prevBtn.addEventListener('click', () => {
                if (!isTransitioning) {
                    currentIndex--;
                    updateSliderPosition(true);
                    updateActiveDot();
                    resetAutoplay();
                }
            });

            nextBtn.addEventListener('click', () => {
                if (!isTransitioning) {
                    currentIndex++;
                    updateSliderPosition(true);
                    updateActiveDot();
                    resetAutoplay();
                }
            });

            // Handle transition end
            sliderElement.addEventListener('transitionend', () => {
                updateActiveDot();
            });

            // Pause autoplay on hover
            sliderElement.addEventListener('mouseenter', () => {
                clearInterval(autoplayTimer);
            });

            sliderElement.addEventListener('mouseleave', () => {
                startAutoplay();
            });

            // Handle window resize
            window.addEventListener('resize', () => {
                const newSlidesPerView = getSlidesPerView();

                if (newSlidesPerView !== slidesPerView) {
                    slidesPerView = newSlidesPerView;
                    
                    // Save the current real index before re-initializing
                    let realIndex = (currentIndex - slidesPerView) % totalOriginalSlides;
                    if (realIndex < 0) realIndex = totalOriginalSlides + realIndex;
                    
                    // Re-initialize slider with new settings
                    initSlider();
                    
                    // Go to the same real slide after reinitializing
                    goToSlide(realIndex);
                }
            });

            // Initialize slider
            initSlider();
            startAutoplay();
        });