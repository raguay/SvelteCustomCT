<div id='blog' style="background-color: {$info.styles.divColor}; 
                      background-image: {$info.styles.divBackgroundPicture}; 
                      color: {$info.styles.textColor};">
    <h4>Blog Links</h4>
    <a href='/#/blog/corvid19widget'>New Tutorial on the Plash Server - Corvid-19 Widget</a>
    <a href='/#/blog/exchangerate-widget-plashserver'>New Tutorial on the Plash Server - Exchange Rate Widget</a>
    <a href='/#/blog/new-tutorial-series'>New Tutorial Series</a>
    <a href='/#/blog/post-on-dev'>My First Post on Dev.to</a>
    <a href='/#/blog/updated-svelte-website-template'>Updated Svelte Website & Template</a>
    <a href='/#/blog/svelte-website-template'>Svelte Based Website Template</a>
    <a href='/#/blog/svelte-based-website'>Now Using a Svelte Powered Website on GitHub</a>
    <a href='/#/blog/My-New-Helper-Station'>My New Helper: Station</a>
    <a href='/#/blog/AllProjectsMoved'>All Projects Moved</a>
    <a href='/#/blog/Alfred-Running-Slower'>Alfred Running Slower</a>
    <a href='/#/blog/my-first-post'>My First Post</a>
</div>

<style>
 #blog {
     display: flex;
     flex-direction: column;
     align-items: left;
     align-content: left;
     margin: 10px 0px 10px 0px;
 }

 #blog h4 {
     margin: auto;
     padding: 5px 0px 10px 0px;
 }

 #blog a {
     text-decoration: none;
 }
</style>

<script>
 import { onMount } from 'svelte';
 import { info } from '../store/infoStore.js';
 
 onMount(() => {
     //
     // Subscribe to the information store to get the site information.
     //
     const unsubscribeInfo = info.subscribe((value) => {
     });

     return () => { unsubscribeInfo(); };
 });

</script>

