<script lang="ts">
    import { onMount } from 'svelte';
    import {fetchFromCMS} from '$lib/ultiltyFunctions.js'
    let {data} :any = $props();

    let boxSet :string = data.boxSet;
    let loading = $state(true);
    let error = $state(null);
    let query = encodeURIComponent('{"boxSet":"'+boxSet+'"}');
    onMount(async () => {
      try {
        const res = await fetchFromCMS("http://cockpit.com/api/content/item/Box?filter=" + query, "GET");
      } catch (err :any) {
        error = err.message;
      } finally {
        loading = false;
      }
    });
</script>
  
{#if loading}
    <p>Loading...</p>   
{:else if error}
        <p>Error: {error}</p>
{:else}
        <div>
            <h2>Fetched Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
{/if}