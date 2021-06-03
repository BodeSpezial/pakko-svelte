<script>
export let enabled;
</script>

<style>
    .tab {
        display: none;
    }

    .tab.enabled {
        display: block;
    }

    button {
        outline: none;
    }
</style>

<div class="tab rounded-b-lg bg-green-50 p-2" class:enabled={enabled}>
    <slot />
</div>
