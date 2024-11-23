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
        '//*[@id="dd0"]/div[7]/a[2]',
        '//*[@id="dd25"]/div[1]/a[2]',
        '//*[@id="sd37"]',
        '//*[@id="dd0"]/div[9]/a[2]',
        '//*[@id="sd61"]',
        '//*[@id="dd0"]/div[19]/a[2]',
        '//*[@id="dd143"]/div[1]/a[2]',
        '//*[@id="sd147"]',
        '//*[@id="dd143"]/div[9]/a[2]',
        '//*[@id="sd161"]',
        '//*[@id="dd143"]/div[13]/a[2]',
        '//*[@id="sd170"]',
        '//*[@id="dd143"]/div[15]/a[2]',
        '//*[@id="sd185"]'
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
