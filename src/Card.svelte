<script>
    import Button from './Button.svelte';

    export let addToBuild;

    export let data = {
        imagePath: "https://fakeimg.pl/350x200/?text=Awesome%20Product",
        title: "product example",
        price: 25.0,
        descr: "WOW! What a nice product! It has so many nice features. Look at all those features."
    };
</script>

<style type="text/css" media="screen">
    .container {
        width: 350px;
    }
</style>

<div class="container rounded-lg bg-gray-50 max-w-max m-2">
    <img src="{data.imagePath}" alt="{data.title}" class="rounded-t-lg">
    <div class="title-price flex justify-between p-2">
        <p>{data.title}</p>
        <p>{data.price}€</p>
    </div>

    <div class="description flex flex-wrap items-end justify-between">
        <p class="m-2">{data.descr}</p>
        <Button on:click={() => {addToBuild(data)}} text="Add to build" icon="plus" color="bg-green-400" textcolor="white" size="full" position="bottom"/>
    </div>
</div>
