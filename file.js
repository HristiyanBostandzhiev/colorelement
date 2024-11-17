// ==UserScript==
// @name         Highlight Multiple Elements by XPath
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Оцветяване на няколко елемента чрез XPath
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Списък с XPath пътищата на елементите, които искаш да оцветиш
    const xpaths = [
        '//*[@id="sd19"]',
        '//*[@id="sd27"]',
        '//*[@id="dd12"]/div[3]/a[2]'
    ];

    // Задаване на цвят за оцветяване
    const highlightColor = "pink";

    // Функция за намиране на елемент по XPath
    function getElementByXPath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    // Цикъл през всеки XPath и прилагане на стила
    xpaths.forEach(path => {
        const element = getElementByXPath(path);
        if (element) {
            element.style.backgroundColor = highlightColor;
        }
    });
})();
