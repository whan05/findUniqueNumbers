const  numbers = [ 1, 2, 3, 4, 3, 4, 3 , 5]

const findUniqueNumbers = (numbers) => {

    let uniqueNumbersArr = []
    let sortedNumbers = numbers.sort((a, b) => a - b);

    for (let i = 0; i < sortedNumbers.length; i++) {
        if (sortedNumbers[i] !== sortedNumbers[i+1] && sortedNumbers[i] !== sortedNumbers[i-1]) {
            uniqueNumbersArr.push(sortedNumbers[i])
        } 
        
    }

    return uniqueNumbersArr

}

console.log(findUniqueNumbers(numbers))