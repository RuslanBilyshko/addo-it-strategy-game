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
function setResource(factory, min, max, delay) {

    return setInterval(function () {
        factory.resources += getRandomInt(min, max);
        innerText(factory.container, factory.resources);
    }, delay);
}

function removeInterval(interval, delay) {

}

/**
 * Остановка накопления ресурсов
 * @param interval
 * @param factory
 * @param limit
 */
function removeIntervalControll(interval, factory, limit) {
    if(factory.resources >= limit)
    {
        clearInterval(interval);
        return true;
    }
    else
        return false;



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



// 10 15 8

//if(sawmill_resource == 10)


var btn_upgrate = document.getElementById("upgrate");
// btn_upgrate.removeAttribute("disabled");
// btn_upgrate.setAttribute("disabled", "disabled");

btn_upgrate.onclick = function () {

    innerText(castle.level_container, castle.level);
    innerText(castle.resource_container, castle.resorce);

    var sawmill_interval = setResource(sawmill,5,8,1000); //10000
    var quarry_interval = setResource(quarry, 10, 15, 1000); //14000
    var gold_interval = setResource(gold, 4, 6, 1000); //18000

    this.setAttribute("disabled", "disabled");
    this.innerText = "Upgrade";

    setInterval(function () {

        if( removeIntervalControll(sawmill_interval,sawmill, 50) &&
            removeIntervalControll(quarry_interval,quarry, 50) &&
            removeIntervalControll(gold_interval,gold, 50)
        )
        {
            btn_upgrate.removeAttribute("disabled");
            castle.level++;
            castle.resorce = sawmill.resources + quarry.resources + gold.resources;
        }
    }, 1000);



};



  // function hide() {
  //   var event = new Event("hide", {
  //     cancelable: true
  //   });
  //   if (!rabbit.dispatchEvent(event)) {
  //     alert( 'действие отменено обработчиком' );
  //   } else {
  //     rabbit.hidden = true;
  //   }
  // }
  //
  // rabbit.addEventListener('hide', function(event) {
  //   if (confirm("Вызвать preventDefault?")) {
  //     event.preventDefault();
  //   }
  // });
  //
  // // прячемся через 2 секунды
  // setTimeout(hide, 2000);
