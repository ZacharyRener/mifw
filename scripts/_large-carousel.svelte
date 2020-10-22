<script>
  import { fade } from "svelte-transitions";
  let carousel = [
    {
      image: "",
      heading: "",
      excerpt: "",
      button_link: "",
      button_text: "",
      new_tab: false,
    },
  ];
  let carouselIndex = 0;
  fetch("/wp-json/wp/v2/pages/8")
    .then((response) => response.json())
    .then((data) => {
      carousel = data.acf.carousel;
    });
  const next = () => {
    carouselIndex = (carouselIndex + 1) % carousel.length;
  };
  const previous = () => {
    if (carouselIndex == 0) next();
    else carouselIndex = (carouselIndex - 1) % carousel.length;
  };
  const resizeCarousel = () => {
    const header = document.querySelector("#header");
    const carousel = document.querySelector("#carousel");
    if (header != null) {
      carousel.style.height = `calc( 100vh - ${header.offsetHeight}px )`;
    }
  };
  const autoRotateInterval = 10000;
  const autoRotate = () => {
    next();
    setTimeout(autoRotate, autoRotateInterval);
  };
  window.addEventListener("resize", resizeCarousel);
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(resizeCarousel, 1500);
    setTimeout(autoRotate, autoRotateInterval);
  });
</script>

<section id="carousel">
  {#each carousel as { image, heading, excerpt, button_link, button_text, new_tab }, index}
    {#if index == carouselIndex}
      <section transition:fade id="content">
        <div class="container">
          <p class="heading">{heading}</p>
          <p class="excerpt">{excerpt}</p>
          <a
            class="btn"
            href={button_link}
            target={new_tab ? '_blank' : ''}>{button_text}</a>
        </div>
        <img src={image} alt="" />
      </section>
    {/if}
  {/each}
  <nav>
    <div on:click={next} class="next" />
    <div on:click={previous} class="prev" />
  </nav>
</section>
