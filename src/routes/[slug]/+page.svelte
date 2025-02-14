<script>
    import Boxes from '$lib/components/Boxes.svelte'
    let { data } = $props();
   // export let data;
</script>
<h1 class="text-5xl">{data.post["Page Title"]}</h1>
<br>
<div>
    {data.post["Custom Content"]}
</div>
<div>
    <Boxes boxSet={"home-page"}></Boxes>
</div>