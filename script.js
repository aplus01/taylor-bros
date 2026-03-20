// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  mobileNav.classList.toggle("flex");
});

// Close mobile nav on link click
mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
    mobileNav.classList.remove("flex");
  });
});

// Project photo galleries
const projects = [
  {
    name: "Alexander",
    thumbnail: "images/Alexander/Alexander 1.jpg",
    images: [
      "images/Alexander/Alexander 1.jpg",
      "images/Alexander/Alexander 2.jpg",
      "images/Alexander/Alexander 3.jpg",
      "images/Alexander/Alexander 4.jpg",
      "images/Alexander/Alexander 5.jpg",
      "images/Alexander/PXL_20221027_160726681.jpg",
      "images/Alexander/PXL_20221027_160734366.jpg",
      "images/Alexander/PXL_20221027_160755442.jpg",
      "images/Alexander/PXL_20221027_160834098.jpg",
      "images/Alexander/PXL_20221027_160839454.jpg",
      "images/Alexander/PXL_20221027_160846505.jpg",
      "images/Alexander/PXL_20221027_160852730.jpg",
      "images/Alexander/PXL_20221027_160905185.jpg",
      "images/Alexander/PXL_20221027_160909508.jpg",
      "images/Alexander/PXL_20221027_160918697.jpg",
      "images/Alexander/PXL_20221027_160935678.jpg",
      "images/Alexander/PXL_20221027_160940252.jpg",
      "images/Alexander/PXL_20221027_160956866.jpg",
      "images/Alexander/PXL_20221027_161016662.jpg",
    ],
  },
  {
    name: "Cohen",
    thumbnail: "images/Cohen/Cohen 1.jpg",
    images: [
      "images/Cohen/Cohen 1.jpg",
      "images/Cohen/Cohen 2.jpg",
      "images/Cohen/IMG_20210625_100058.jpg",
      "images/Cohen/IMG_20210625_100105.jpg",
      "images/Cohen/IMG_20210625_100137.jpg",
      "images/Cohen/IMG_20210625_100141.jpg",
      "images/Cohen/IMG_20210625_100211.jpg",
      "images/Cohen/IMG_20210625_100236.jpg",
      "images/Cohen/IMG_20210625_100241.jpg",
      "images/Cohen/IMG_20210625_100256.jpg",
      "images/Cohen/IMG_20210625_100301.jpg",
      "images/Cohen/IMG_20210625_100331.jpg",
      "images/Cohen/IMG_20210625_100345.jpg",
      "images/Cohen/IMG_20210625_100402.jpg",
      "images/Cohen/IMG_20210625_100429.jpg",
      "images/Cohen/IMG_20210625_100544.jpg",
      "images/Cohen/IMG_20210625_100550.jpg",
      "images/Cohen/IMG_20210625_100707.jpg",
      "images/Cohen/IMG_20210625_100722.jpg",
      "images/Cohen/IMG_20210625_101000.jpg",
      "images/Cohen/MVIMG_20210625_100156.jpg",
    ],
  },
  {
    name: "Eshel",
    thumbnail: "images/Eshel/8L4A5932.JPG",
    images: [
      "images/Eshel/8L4A5932.JPG",
      "images/Eshel/8L4A5937.JPG",
      "images/Eshel/8L4A5941.JPG",
      "images/Eshel/8L4A5948.JPG",
      "images/Eshel/8L4A5951.JPG",
      "images/Eshel/8L4A5953.JPG",
      "images/Eshel/8L4A5957.JPG",
      "images/Eshel/8L4A5959.JPG",
      "images/Eshel/8L4A5964.JPG",
      "images/Eshel/8L4A5969.JPG",
      "images/Eshel/8L4A5972.JPG",
      "images/Eshel/8L4A5974.JPG",
      "images/Eshel/8L4A5977.JPG",
      "images/Eshel/8L4A5979.JPG",
      "images/Eshel/8L4A5985.JPG",
      "images/Eshel/8L4A5992.JPG",
      "images/Eshel/8L4A5995.JPG",
      "images/Eshel/8L4A5996.JPG",
      "images/Eshel/8L4A6001.JPG",
      "images/Eshel/8L4A6003.JPG",
      "images/Eshel/8L4A6009.JPG",
      "images/Eshel/8L4A6013.JPG",
      "images/Eshel/8L4A6015.JPG",
      "images/Eshel/8L4A6019.JPG",
      "images/Eshel/8L4A6021.JPG",
      "images/Eshel/8L4A6023.JPG",
    ],
  },
  {
    name: "New Castle",
    thumbnail: "images/New-Castle/205 New Castle Pl 2667898_01.jpg",
    images: [
      "images/New-Castle/205 New Castle Pl 2667898_01.jpg",
      "images/New-Castle/205 New Castle Pl 2667898_02.jpg",
      "images/New-Castle/205 New Castle Pl 2667898_04.jpg",
      "images/New-Castle/205 New Castle Pl 2667898_05.jpg",
      "images/New-Castle/205 New Castle Pl 2667898_06.jpg",
      "images/New-Castle/205 New Castle Pl 2667898_07.jpg",
      "images/New-Castle/205 New Castle Pl 2667898_08.jpg",
      "images/New-Castle/205 New Castle Pl 2667898_09.jpg",
      "images/New-Castle/205 New Castle Pl 2667898_10.jpg",
      "images/New-Castle/205 New Castle Pl 2667898_11.jpg",
      "images/New-Castle/205 New Castle Pl 2667898_12.jpg",
      "images/New-Castle/205 New Castle Pl 2667898_13.jpg",
      "images/New-Castle/205 New Castle Pl 2667898_14.jpg",
    ],
  },
];

// Render photo grid
const photoGrid = document.getElementById("photo-grid");
projects.forEach((project, index) => {
  photoGrid.innerHTML += `
    <div class="photo-item relative flex-1 min-w-[256px] overflow-hidden" onclick="openLightbox(${index})">
      <img src="${project.thumbnail}" alt="${project.name}" class="w-full aspect-[4/3] object-cover" />
      <div class="photo-hover-overlay absolute inset-0 flex items-center justify-center flex-col gap-2">
        <span class="material-symbols-sharp text-[64px] text-accent">zoom_in</span>
      </div>
    </div>`;
});

// Lightbox state
let currentProject = 0;
let currentIndex = 0;

function openLightbox(projectIndex) {
  currentProject = projectIndex;
  currentIndex = 0;
  updateLightbox();
  document.getElementById("lightbox").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox(e, force) {
  if (force || e.target === document.getElementById("lightbox")) {
    document.getElementById("lightbox").classList.remove("active");
    document.body.style.overflow = "";
  }
}

function prevImage(e) {
  e.stopPropagation();
  const images = projects[currentProject].images;
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
}

function nextImage(e) {
  e.stopPropagation();
  const images = projects[currentProject].images;
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
}

function updateLightbox() {
  const project = projects[currentProject];
  const images = project.images;
  const lbImage = document.getElementById("lb-image");

  lbImage.src = images[currentIndex];
  lbImage.alt = `${project.name} - Photo ${currentIndex + 1}`;

  const strip = document.getElementById("lb-thumbnails");
  strip.innerHTML = images
    .map(
      (src, i) =>
        `<img src="${src}" alt="${project.name} ${i + 1}" class="h-16 w-[93px] object-cover cursor-pointer rounded flex-shrink-0 ${i === currentIndex ? "ring-2 ring-accent opacity-100" : "opacity-50 hover:opacity-75"} transition-opacity" onclick="event.stopPropagation(); goToImage(${i})">`,
    )
    .join("");

  // Scroll active thumbnail into view
  setTimeout(() => {
    const active = strip.querySelector(".ring-2");
    if (active) active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, 0);
}

function goToImage(index) {
  currentIndex = index;
  updateLightbox();
}

// Keyboard navigation for lightbox
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("lightbox").classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox(e, true);
  if (e.key === "ArrowLeft") prevImage(e);
  if (e.key === "ArrowRight") nextImage(e);
});
