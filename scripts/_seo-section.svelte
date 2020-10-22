<script>
  let rightColumn;
  let leftColumn;
  fetch("/wp-json/wp/v2/pages/8")
    .then((response) => response.json())
    .then((data) => {
      rightColumn = data.acf.right_column;
      leftColumn = data.acf.left_column;
    });
</script>

<section id="seo-section">
  <div class="container">
    <div class="left">
      {@html leftColumn}
    </div>
    <div class="right"><img src={rightColumn} alt="seo" /></div>
  </div>
</section>
