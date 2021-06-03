<script>
import Button from './Button.svelte';
import TabContainer from './TabContainer.svelte';
import Card from './Card.svelte';
import { components } from './components.js';
import { build } from './stores.js';

function addPcb(v) {
    $build.pcb = v;
    build.set($build);
    console.log($build.pcb);
}

function addCase(v) {
    $build.case = v;
    build.set($build);
    console.log($build.case);
}

function addSwitches(v) {
    $build.switches = v;
    build.set($build);
    console.log($build.switches);
}

function addCaps(v) {
    $build.caps = v;
    build.set($build);
    console.log($build.caps);
}

const pcb = components[0];
const switches = components[1];
const caps = components[2];
const cases = components[3];
</script>

<main class="p-6 rounded-lg m-2 bg-gradient-to-br from-pink-200 to-green-200 h-min-screen">
    <TabContainer title={pcb.title} component={pcb} addToBuild={addPcb}/>
    <TabContainer title={switches.title} component={switches} addToBuild={addSwitches}/>
    <TabContainer title={caps.title} component={caps} addToBuild={addCaps}/>
    <TabContainer title={cases.title} component={cases} addToBuild={addCase}/>
</main>
