<script>
  let pathways = [{ title: "", link: "" }];
  fetch("/wp-json/wp/v2/pages/8")
    .then((response) => response.json())
    .then((data) => {
      pathways = data.acf.pathways;
    });
</script>

<section id="pathways">
  <div class="container">
    {#each pathways as { title, link }}
      <div class="pathway"><a href={link}>{title}</a></div>
    {/each}
  </div>
</section>
