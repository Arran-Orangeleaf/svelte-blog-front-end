<script lang="ts">
    import { onMount } from 'svelte';
    import {fetchFromCMS} from '$lib/ultiltyFunctions.js'
    let {boxSet} :Array<Object> = $props();
    console.log(boxSet);
    //let boxSet :string = data.boxSet;
    let loading = $state(true);
    let error = $state(null);
    let res :any = $state(null);
    let query = encodeURIComponent('{"name":"'+boxSet+'"}');
    onMount(async () => {
      try {
        res = await fetchFromCMS("http://cockpit.com/api/content/tree/boxset?populate=1&filter=" + query, "GET");
        //return res;
      } catch (err :any) {
        error = err.message;
      } finally {
        loading = false;
      }
    });
</script>
  
{#if boxSet}
<div>
  {#each boxSet as box }
    <div>
      <a href={box.url}>
        <h2>{box.title}</h2>
        <div><img alt="{box.altText}" src="http://cockpit.com/storage/uploads{box.image.path}"></div>
      </a>
      <p>{box.description}</p>
    </div>
  {/each}
  
</div>  
{/if}