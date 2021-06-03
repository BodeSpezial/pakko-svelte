import { writable } from 'svelte/store';

const emptyBuild = {pcb: null, caps: null, case: null, switches: null};

export const build = writable(emptyBuild);


