<script>
    import { build } from './stores.js';

    import Button from './Button.svelte';
</script>

<style>
    .bar {
        position: fixed;
        width: 100%;
        bottom: 0;
    }
</style>

<div class="bar rounded-t-lg bg-gray-50 flex justify-between h-14">
    <div class="p-2">
    <p>Estimated Price: </p>
    <!--- <p>Estimated Time: </p> -->
    </div>

    <div>
<button on:click class="rounded-tr-lg p-2 bg-yellow-200 h-9 flex items-center justify-between text-s h-full">
    Request Offer
    <object data="/assets/icons/arrow-right-black.svg" type="image/svg+xml" class="w-4 h-4"/>
</button>
    </div>
</div>
