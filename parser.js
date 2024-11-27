var parseInput = function (input) {
    let delimiter = ',';
    let numbers = input;

    if (input.startsWith('//')) {
        const delimiterEnd = input.indexOf('\n');
        delimiter = input.substring(2, delimiterEnd);
        numbers = input.substring(delimiterEnd + 1);
    }

    return {
        delimiter,
        cleanNumbers: numbers
    };
}

module.exports = { parseInput };