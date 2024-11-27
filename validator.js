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

module.exports = { validateNumbers };