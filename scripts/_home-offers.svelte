<script>
  import Offer from "./_offer.svelte";
  import FromTheBlog from "./_offer_from-the-blog.svelte";
  let offerIds = [{ ID: "" }];
  let offers = [
    {
      offer_title: "",
      offer_image: "",
      offer_headline: "",
      excerpt: "",
      button_text: "",
      button_url: "",
    },
  ];
  fetch("/wp-json/wp/v2/pages/8")
    .then((response) => response.json())
    .then((data) => {
      offerIds = data.acf.offers;
      offerIds.forEach((id) => {
        fetch(`/wp-json/wp/v2/offer/${id.ID}`)
          .then((response) => response.json())
          .then((data) => {
            offers = [...offers, data.acf];
          });
      });
    });
</script>

<section id="home-offers">
  <div class="container">
    {#each offers as { offer_title, offer_image, offer_headline, excerpt, button_text, button_url }}
      <Offer
        {offer_title}
        {offer_image}
        {offer_headline}
        {excerpt}
        {button_text}
        {button_url} />
    {/each}

    <FromTheBlog postCount={3} blog="/blog/" />
  </div>
</section>
