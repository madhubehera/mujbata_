const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const images = [
  { src: "images/img1.jpg", animation: "gallery-effect" },
  { src: "images/img2.jpg", animation: "honeycomb-effect" }
];

let currentIndex = 0;

function showImage(index) {
  sliderImage.className = ""; // reset previous animation class
  sliderImage.style.opacity = 0;

  setTimeout(() => {
    sliderImage.src = images[index].src;
    sliderImage.classList.add(images[index].animation);
    sliderImage.style.opacity = 1;
  }, 300);
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Initial display
showImage(currentIndex);



document.getElementById('requestBtn').addEventListener('click', () => {
    document.getElementById('calendarSection').style.display = 'block';
  });
  
  document.getElementById('datePicker').addEventListener('change', () => {
    const slots = ['10:00 AM', '1:00 PM', '4:00 PM'];
    const container = document.getElementById('timeSlots');
    container.innerHTML = '';
    slots.forEach(slot => {
      const btn = document.createElement('button');
      btn.textContent = slot;
      btn.onclick = () => {
        document.getElementById('nextBtn').style.display = 'inline-block';
      };
      container.appendChild(btn);
    });
    document.getElementById('timeSlotsSection').style.display = 'block';
  });
  
  document.getElementById('nextBtn').addEventListener('click', () => {
    document.getElementById('detailsForm').style.display = 'block';
  });
  


