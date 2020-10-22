<script>
  export let postCount;
  export let blog;
  let posts = [{ title: "", date: "", link: "" }];
  fetch(`/wp-json/wp/v2/posts?per_page=${postCount}`)
    .then((response) => response.json())
    .then((data) => {
      posts = data;
      console.log(posts);
    });
</script>

<section id="offer">
  <p class="title">From The Blog</p>
  <div class="offer-container">
    {#each posts as { title, date, link }}
      <div class="post">
        <a href={link}><p class="title">{title.rendered}</p></a>
        <p class="date">{date}</p>
      </div>
    {/each}
    <a class="btn" href={blog}>Visit The Blog</a>
  </div>
</section>
