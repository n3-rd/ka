import { writable } from "svelte/store";
import { db } from '$lib/db.js';
import clipboard from 'clipboardy';

export const articleModal = writable(true);

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

export const copyArticle = async (/** @type {string} */link) => {
    try {
       clipboard.write(link);
    } catch (err) {
        console.log(err);
    }
};

