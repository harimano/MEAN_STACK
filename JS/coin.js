


function coinChange(val){


    cents = val;
    dollar = Math.trunc(cents/100);
    cents = cents % 100;
    quater = Math.trunc(cents/25);
    cents = cents % 25;
    dime = Math.trunc(cents/10);
    cents = cents % 10;
    nick = Math.trunc(cents/5);
    cents = cents % 5;
    pen = Math.trunc(cents/1);
    cents =cents % 1;

    var coins = {
        "dollars": dollar,
        "quarters":quater,
        "dimes":dime,
        "nickels":nick,
        "pennies":pen,

    }

return coins
}