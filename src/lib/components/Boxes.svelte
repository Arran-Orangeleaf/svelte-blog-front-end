<script lang="ts">
    import { onMount } from 'svelte';
    let {data} = $props();
    let boxSet :string = data.boxSet;
    let loading = $state(true);
    let error = $state(null);
    let query = encodeURIComponent('{"boxSet":"'+boxSet+'"}');
    onMount(async () => {
      try {
        const res = await fetch("http://cockpit.com/api/content/item/Page?filter=" + query);
        if (!res.ok) throw new Error('Failed to fetch data');
        data = await res.json();
      } catch (err :any) {
        error = err.message;
      } finally {
        loading = false;
      }
    });
    console.log("gary!");
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