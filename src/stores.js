import { writable } from "svelte/store";
export const currentArticle = writable({
    url: '',
    title: '',
    author: '',
    published: '',
    ttr: 0,
    image: '',
    content: ''
});
