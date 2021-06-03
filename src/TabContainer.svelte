<script>
import Tab from './Tab.svelte';
import Card from './Card.svelte';
import { build } from './stores.js';

export let title;
export let component;
export let addToBuild;

$: selectedTab = component.categories[0];
</script>

<style>
    button {
        outline: none;
    }

    input[type=radio] {
        display: none;
    }

    label {
        display: block;
    }

    input:checked ~ label {
        @apply bg-yellow-200;
    }
</style>

<div class="rounded-lg bg-gray-100 bg-opacity-25 m-2">

    <h1 class="p-2">{component.title}</h1>

    <div class="tab_switcher bg-yellow-50 rounded-t-lg p-1">
        <ul>
            {#each component.categories as tabname}
                <li class="inline-block">
                    <input
                        type="radio"
                        name="tab-switcher-{title}"
                        id="{component.title}-{tabname}"
                        on:click={()=>{selectedTab = tabname}}
                        checked={selectedTab === tabname ? "checked" : ""} />
                    <label
                        for="{component.title}-{tabname}" 
                        class="p-3 cursor-pointer checked:bg-yellow-200 hover:bg-yellow-100">
                        {tabname}
                    </label>
                </li>
            {/each}
        </ul>
    </div>

    {#each component.categories as tabname}
        <Tab enabled={selectedTab === tabname}>
            <div class="flex justify-start flex-wrap">
                {#each component.products as product}
                    {#if tabname === product.category}
                        <Card data={product} {addToBuild}/>
                    {/if}
                {/each}
            </div>
        </Tab>
    {/each}
</div>

