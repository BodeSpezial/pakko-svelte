<script>
import Link from './Link.svelte';

const header_links = [
    {
        ltext: "Home",
        lpath: "/"
    },
    {
        ltext: "About us",
        lpath: "/about-us"
    }
]
</script>

<header class="mx-2 mb-2 py-2 px-3  bg-blue-100  rounded-b-lg h-16  flex flex-wrap content-center">

{#each header_links as el}
    <Link {...el}/>
{/each}

</header>
