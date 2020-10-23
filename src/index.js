module.exports = function check(str, bracketsConfig) {
    // your solution
    let arrOneDmn = [];

    bracketsConfig.forEach((element) => {
        arrOneDmn.push(element.join(""));
    });

    let counter = str.length;
    for (let i = 0; i < counter; i++) {
        arrOneDmn.forEach((element) => {
            str = str.replace(element, "");
        });
    }

    if (str.length === 0) {
        return true;
    } else {
        return false;
    }
};
