/**
 * генерация числа в указаном диапазоне
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Вставка текста в тег spam контейнера
 * @param element
 * @param text
 */
function innerText(element, text) {
    element.getElementsByTagName("span")[0].innerText = text;
}

/**
 * Установка ресурсов для фабрик
 * @param factory
 * @param min
 * @param max
 * @param delay
 * @returns {number}
 */
function setResource(factory, min, max, delay, castle) {

    setTimeout(function () {

        factory.resources += getRandomInt(min, max);
        castle.resorce += factory.resources;
        innerText(factory.container, factory.resources);
    }, delay);
}

function isLevel(sawmill,quarry,gold,level,castle ) {

    if(sawmill.resources >= level.sawmill &&
        quarry.resources >= level.quarry &&
        gold.resources >= level.gold
    )
    {
        if(castle.level <= 3)
            castle.level += 1;
    }
}


/**
 * Лесопилка
 * @type {{container: Element, resources: number}}
 */
var sawmill = {
    "container": document.getElementById("sawmill"),
    "resources": 0
};

/**
 * Каменоломня
 * @type {{container: Element, resources: number}}
 */
var quarry = {
    "container": document.getElementById("quarry"),
    "resources": 0
};

/**
 * Золотокопальня
 * @type {{container: Element, resources: number}}
 */
var gold = {
    "container": document.getElementById("gold"),
    "resources": 0
};

/**
 * Замок
 * @type {{container: Element, level_container: Element, resource_container: Element, level: number, resorce: number}}
 */

var castle = {
    "container": document.getElementById("castle"),
    "level_container": document.getElementById("level"),
    "resource_container": document.getElementById("resource"),
    "level": 0,
    "resorce": 0
};

var mess = document.getElementById("message");


var levels_1 = {
    "sawmill": 10,
    "quarry": 8,
    "gold": 14
};

var levels_2 = {
    "sawmill": 15,
    "quarry": 12,
    "gold": 20
};

var levels_3 = {
    "sawmill": 20,
    "quarry": 25,
    "gold": 30
};

var btn_upgrate = document.getElementById("upgrate");

    btn_upgrate.setAttribute("disabled", "disabled");
    setResource(sawmill, 5, 8, 1000, castle);
    setResource(quarry, 10, 15, 2000, castle);
    setResource(gold, 4, 6, 3000, castle);

    setTimeout(function () {

        mess.innerText = "Ресурсы готовы. Нажмите на кнопку чтобы собрать";
        btn_upgrate.removeAttribute("disabled");

    }, 3500);


btn_upgrate.addEventListener("click", function () {




    innerText(castle.resource_container, castle.resorce);
    mess.innerText = "";

    isLevel(sawmill,quarry,gold,levels_1,castle);
    isLevel(sawmill,quarry,gold,levels_2,castle);
    isLevel(sawmill,quarry,gold,levels_3,castle);

    innerText(castle.level_container, castle.level);

    btn_upgrate.setAttribute("disabled", "disabled");

    if(castle.level < 3)
    {
        setResource(sawmill, 5, 8, 1000, castle);
        setResource(quarry, 10, 15, 2000, castle);
        setResource(gold, 4, 6, 3000, castle);

        setTimeout(function () {

        mess.innerText = "Ресурсы готовы. Нажмите на кнопку чтобы собрать";
        btn_upgrate.removeAttribute("disabled");

    }, 3500);

    }







    // this.setAttribute("disabled", "disabled");
    // this.innerText = "Upgrade";





});
