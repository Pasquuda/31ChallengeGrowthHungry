const generateRange = (min, max, step) => {
    const result = [];

    if (step <= 0) {
        throw new Error("Step must be a positive number.");
    }
    for (let i = min; i <= max; i += step) {
        result.push(i);
    }
    return result;
}

console.log(generateRange(1, 12, 0.5))