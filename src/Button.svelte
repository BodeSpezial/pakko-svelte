<script>
export let text;
export let icon;
export let color;
export let textcolor = "black";
export let size = "normal";
export let position = "standalone";

function getPositionClassifier() {
    if (position === "standalone") {
        return "";
    }

    if (position === "bottom") {
        return "-b";
    }

    if (position === "top") {
        return "-t";
    }
}
</script>

<button on:click class="rounded{getPositionClassifier()}-lg p-2 {color} h-9 flex items-center justify-between w-{size} text-{textcolor}" class:text-s={size === 'smol'}>
{text}
{#if icon}
    <object data="/assets/icons/{icon}-{textcolor}.svg" type="image/svg+xml" class="w-4 h-4"/>
{/if}
</button>
