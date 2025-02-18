/// <reference types="vite/client" />

declare module 'vite-plugin-linaria' {
    import { Plugin } from 'vite';
    const linaria: () => Plugin;
    export default linaria;
}