<div id='dropdown' style="height: {setHeight};" on:mouseover={divHoverAction} on:mouseout={divHoverAction} > 
  <a href='/#' style="color: {$info.styles.textColor};" on:mouseover={hoverAction} on:mouseout={hoverAction} on:click|preventDefault={(e) => {}}>{name}</a>
  <slot></slot>
</div>

<style>
  #dropdown {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  #dropdown a:first-child {
    margin-bottom: 10px;
    text-decoration: none;
  }
</style>

<script>
  import { onMount } from 'svelte';
  import { info } from '../store/info.js';

  export let name = '';
  
  let maxHeight = 0;
  let setHeight = "100%";
  let newSave = false;

  function divHoverAction(e) {
    switch(e.type) {
      case 'mouseover':
        setHeight = (maxHeight === 0)||newSave ? '100%' : maxHeight.toString() + 'px';
        break;
      case 'mouseout':
        if(maxHeight === 0) {
          maxHeight = e.target.parentNode.clientHeight;
        } else {
          if(newSave) maxHeight = 0;
        }
        break;
    }
  }

  function hoverAction(e) {
    switch(e.type) {
      case 'mouseover':
        break;
      case 'mouseout':
        break;
    }
  }


  onMount(() => {
    const unsubscribeInfo = info.subscribe((value) => {
      setHeight = value.styles.navFontSize;
      if(maxHeight !== 0) newSave = true;
    });
    return () => { unsubscribeInfo(); };
  });
</script>

