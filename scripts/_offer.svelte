<script>
  export let offer_title;
  export let offer_image;
  export let offer_headline;
  export let excerpt;
  export let button_text;
  export let button_url;
</script>

<section id="offer">
  <p class="title">{offer_title}</p>
  <a href={button_url}><img src={offer_image} alt="offer" /></a>
  <div class="offer-container">
    <p class="headline">{offer_headline}</p>
    <p>
      {@html excerpt}
    </p>
    <a class="btn" href={button_url}>{button_text}</a>
  </div>
</section>
