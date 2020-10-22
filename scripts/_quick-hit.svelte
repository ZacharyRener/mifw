<script>
  let quickhit;
  fetch("/wp-json/wp/v2/pages/8")
    .then((response) => response.json())
    .then((data) => {
      quickhit = data.acf.quickhit;
    });
</script>

<section id="quickhit">
  <div class="container">
    {@html quickhit}
  </div>
</section>
