"use strict";
(() => {
    let superman = {
        name: 'Superman',
        age: 30,
        powers: ['correr', 'dormir'],
        getName() {
            return this.name;
        }
    };
    let batman = {
        name: 'Batman',
        age: 35,
        powers: ['volar', 'dinero'],
        getName() {
            return this.name;
        }
    };
})();
