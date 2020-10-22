<script>
  let logo;
  let socialIcons = [{ icon_name: "", link: "" }];
  let primaryMenu = [
    { title: "", url: "", child_items: [{ title: "", url: "" }] },
  ];
  let utilityMenu = [
    { title: "", url: "", child_items: [{ title: "", url: "" }] },
  ];
  fetch("/wp-json/acf/v3/options/options")
    .then((response) => response.json())
    .then((data) => {
      logo = data.acf.logo;
      socialIcons = data.acf.social_media;
    });
  fetch("/wp-json/menus/v1/menus/primary")
    .then((response) => response.json())
    .then((data) => {
      primaryMenu = data.items;
      console.log(primaryMenu);
    });
  fetch("/wp-json/menus/v1/menus/utility")
    .then((response) => response.json())
    .then((data) => {
      utilityMenu = data.items;
    });
  const toggleMobileMenu = () => {
    document.querySelector("#mobile-menu").classList.toggle("hidden");
  };
  const handleHamburgerClick = () => {
    document.querySelector(".hamburger").classList.toggle("is-active");
    toggleMobileMenu();
  };
  const navLeave = (event) => {
    if (event.target.parentElement.children.length > 1) {
      if (!event.target.parentElement.children[1].matches(":hover")) {
        event.target.parentElement.children[1].classList.toggle("hidden");
      }
    }
  };
  const navEnter = (event) => {
    if (event.target.parentElement.children.length > 1)
      event.target.parentElement.children[1].classList.toggle("hidden");
  };
  const toggleMenu = (event) => {
    event.target.classList.toggle("hidden");
  };
</script>

<section id="header">
  <section id="utility-menu" class="">
    <div class="container d-flex flex-row">
      <nav id="socials" class="">
        <ul class="d-flex flex-row">
          {#each socialIcons as { icon_name, link }}
            <li>
              <a target="_blank" href={link}>{@html icon_name}</a>
            </li>
          {/each}
        </ul>
      </nav>
      <section
        id="right-side"
        class="d-flex flex-row w-100 justify-content-end">
        <nav id="utility">
          <ul class="d-flex flex-row">
            {#each utilityMenu as { title, url, child_items }}
              <li><a href={url}>{title}</a></li>
              {#if child_items}
                <ul class="sub-menu hidden">
                  {#each child_items as { title, url }}
                    <li><a href={url}>{title}</a></li>
                  {/each}
                </ul>
              {/if}
            {/each}
          </ul>
        </nav>
        <form action="/">
          <input id="s" name="s" placeholder="Search..." />
        </form>
      </section>
    </div>
  </section>
  <section id="primary-nav" class="">
    <div class="container d-flex flex-row">
      <img src={logo} class="site-logo" alt="" />
      <nav id="primary">
        <ul
          class="d-flex flex-row w-100 justify-content-end align-items-center">
          {#each primaryMenu as { title, url, child_items }}
            <li>
              <a
                on:mouseenter|self={navEnter}
                on:mouseleave|self={navLeave}
                href={url}
                class={2}>{title}</a>
              {#if child_items}
                <ul on:mouseleave|self={toggleMenu} class="sub-menu hidden">
                  {#each child_items as { title, url }}
                    <li><a href={url}>{title}</a></li>
                  {/each}
                </ul>
              {/if}
            </li>
          {/each}
        </ul>
      </nav>
    </div>
    <section id="mobile-nav">
      <button
        on:click={handleHamburgerClick}
        class="hamburger hamburger--slider"
        type="button">
        <span class="hamburger-box"> <span class="hamburger-inner" /> </span>
      </button>
    </section>
    <section id="mobile-menu" class="hidden">
      <ul>
        {#each primaryMenu as { title, url, child_items }}
          <li>
            <a href={url}>{title}</a>{#if child_items}
              <ul class="sub-menu hidden">
                {#each child_items as { title, url }}
                  <li><a href={url}>{title}</a></li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </section>
  </section>
</section>
