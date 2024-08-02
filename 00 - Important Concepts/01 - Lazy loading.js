// Lazy Loading with and without Intersection Observer

// Lazy loading refers to deferring the loading of any kind of content until it becomes necessary.
// For example, on a lengthy page, images that are not currently visible do not need to be loaded.
// They are fetched from the server only when the user scrolls the page over or near them.
// Lazy loading means the request for the resource or records will be made only when they are demanded.
// Eager loading generates all web page content as soon as possible, while lazy loading delays the display of non-essential content

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});

// CSS for background image approach
// * {
//   font-family: sans-serif;
// }

// #container {
//   font-size: 20px;
//   line-height: 30px;
//   max-width: 600px;
// }

// #bg-image.lazy {
//    background-image: none;
//    background-color: #F1F1FA;
// }
// #bg-image {
//   background-image: url("https://ik.imagekit.io/demo/img/image10.jpeg?tr=w-600,h-400");
//   max-width: 600px;
//   height: 400px;
// }

// 1. Using the right image placeholders
  // a) Dominant color placeholder
  // b) Low quality image placeholder (LQIP)
// 2. Adding some buffer time for image load
// 3. Avoiding content shifting with lazy loading
// 4. Do not lazy load all the images

