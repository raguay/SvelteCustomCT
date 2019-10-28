<svelte:head>
  <title>{info.siteName}</title>
  <link rel='icon' type='image/png' href='/imgs/favicon.png'>
</svelte:head>

<div id='page'>
  <header>
    <div id='logo'>
      <img src='/imgs/logo.jpg' alt='Logo'>
    </div>
    <div id='title'>
      <h1>{info.siteName}</h1>
      <h3>{info.byLine}</h3>
    </div>
  </header>
  <div id='navbar'>
    <a class='navItem' href='/' use:link>Home</a>
    <a class='navItem' href='/blog/index' use:link>Blog</a>
    <a class='navItem' href='/projects/index' use:link >Projects</a>
    <a class='navItem' href='/favtools' use:link >Favorite Tools</a>
    <a class='navItem' href='/about' use:link>About</a>
  </div>
  <div id='main'>
    <Router {routes} />
  </div>
  <footer>
    <div id='leftBox'>
      <p>Created using <a href=''>SvelteWeb</a></p>
      <p>Copyrighted by Richard Guay</p>
    </div>
  </footer>
</div>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    background-color: #D1BD79;
    margin: 15px;
  }

  header {
    display: flex;
    flex-direction: row;
    width: 85%;
    background-color: #ECDAAC;
    color: black;
    margin: auto;
    border-radius: 10px;
    border: 5px solid #AA7942;
    padding: 10px;
  }

  #title {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: center;
    width: 100%;
  }

  #logo {
    width: 100px;
    height: 100px;
  }

  #navbar {
    display: flex;
    flex-direction: row;
    width: 85%;
    background-color: #ECDAAC;
    color: black;
    margin: auto;
    border-radius: 10px;
    border: 5px solid #AA7942;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  :global(.navItem) {
    margin-right: 10px;
    text-decoration: none;
  }

  #page {
    display: flex;
    flex-direction: column;
  }

  #main {
    display: flex;
    flex-direction: row;
    width: 87%;
    align-content: center;
    margin: auto;
    padding: 0px;
 }

  #leftBox {
    float: left;
    display: flex;
    flex-direction: column;
  }

  #leftBox p {
    margin: 0px;
    padding: 0px;
  }

  footer {
    width: 85%;
    background-color: #ECDAAC;
    color: black;
    margin: auto;
    border-radius: 10px;
    border: 5px solid #AA7942;
    padding: 10px;
  }
</style>

<script>
  import About from './components/About.svexy';
  import Index from './components/Index.svexy';
  import Page from './components/Page.svelte';
  import Router, { link } from 'svelte-spa-router';

  const routes = {
    //
    // Exact path to the index and about pages. I want these
    // to be fast, so they are preloaded with everything else.
    //
    '/': Index,

    '/about': About,

    //
    // Catch-all
    // This is optional, but if present it must be the last
    //
    // If not caught otherwise, it must be a markdown file
    // on the file system.
    //
    '*': Page,
  }

  export let info;

</script>

