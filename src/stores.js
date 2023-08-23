import { writable } from "svelte/store";
import { db } from '$lib/db.js';

export const currentArticle = writable({
    id: 0,
    url: '',
    title: '',
    author: '',
    published: '',
    ttr: 0,
    image: '',
    content: ''
});

export const deleteArticle = async (/** @type {{ id: any; }} */ article) => {
    try {
        // @ts-ignore
        await db.articles.delete(article.id);
    } catch (err) {
        console.log(err);
    }
};