import { writable } from "svelte/store";
// import { platform } from "../../components/MediaQuerySsr.svelte";

export const selected = writable([]);
export const hovered = writable(null);

export const hideIntro = writable(false)
