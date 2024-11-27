const { parseInput } = require('./parser');
const { validateNumbers } = require('./validator');

const add = function (numbers) {
    if (!numbers) {
        return 0;
    }

    let { delimiter, cleanNumbers } = parseInput(numbers);
    let numberArray = cleanNumbers.split(new RegExp(`[${delimiter},\n]`));
    let filterElement = numberArray.filter(num => num != '').map(num => parseInt(num));

    validateNumbers(filterElement);

    return filterElement.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
