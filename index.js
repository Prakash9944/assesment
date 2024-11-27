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

var validateNumbers = function (numbers) {
    try {
        let negativeNumbers = numbers.filter((num) => { return num < 0 });
        if (negativeNumbers.length > 0) {
            throw new Error(`Negative numbers not allowed ${negativeNumbers.join(',')}`);
        }
    } catch(err) {
        throw new Error(err);
    }
}

var add = function (numbers) {
    if (!numbers) {
        return 0;
    }

    let { delimiter, cleanNumbers } = parseInput(numbers);
    let numberArray = cleanNumbers.split(new RegExp(`[${delimiter},\n]`));
    let filterElement = numberArray.filter(num => num != '').map(num => parseInt(num));

    validateNumbers(filterElement);

    return filterElement.reduce((sum, num) => sum + num, 0);
}