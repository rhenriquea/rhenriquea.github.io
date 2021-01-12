// Exercise 1
function reverseNumber(input) {
    const nString = `${input}`;
    return nString.split('').reverse().join('');
}

// Exercise2
function checkPalindrome(string) {
    // lower case the string and remove all non-alphanumeric characters
    const sanitizedString = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    let charsCount = 0;

    // Check whether the string is empty or not
    const isEmptyString = sanitizedString === '';
    if (isEmptyString) {
        return 'Entry is not a palindrome. Empty string';
    }

    const isSingleChar = sanitizedString.length === 1;
    if (isSingleChar) {
        return 'Entry is a palindrome.';
    }

    const isEven = (sanitizedString.length) % 2 === 0;
    // Ignore middle character if string is odd
    charsCount = isEven ? (sanitizedString.length) / 2 : (sanitizedString.length - 1) / 2;

    // Loop through to check the first character to the last character and then move next
    for (let x = 0; x < charsCount; x++) {
        // Compare characters and check if they match 
        if (sanitizedString[x] != sanitizedString.slice(-1 - x)[0]) {
            return 'Entry is not a palindrome.';
        }
    }
    return 'The entry is a palindrome.';
}

// Exercise 3
function stringCombinations(string) {
    const combinations = [];
    const characters = string.split('') || [];
    let temp = '';
    const substringsLength = Math.pow(2, characters.length);
    for (let i = 0; i < substringsLength; i++) {
        temp = '';

        for (let j = 0; j < characters.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += characters[j];
            }
        }

        if (temp !== '') {
            combinations.push(temp);
        }
    }
    return combinations.join('\n');
}

// Exercise 4
function alphabetOrder(string) {
    return string.split('').sort().join('');
}

// Exercise 5
function uppercase(string) {
    const splittedString = string.split(' ');
    const uppercaseString = [];

    for (let x = 0; x < splittedString.length; x++) {
        const firstChar = splittedString[x].charAt(0).toUpperCase();
        const nextChar = splittedString[x].slice(1);
        uppercaseString.push(`${firstChar}${nextChar}`);
    }
    return uppercaseString.join(' ');
}

// Exercise 6
function findLongestWord(string) {
    const splitedSentence = string.match(/\w[a-z]{0,}/gi);
    let result = splitedSentence[0];

    for (let idx = 1; idx < splitedSentence.length; idx++) {
        if (result.length < splitedSentence[idx].length) {
            result = splitedSentence[idx];
        }
    }

    return result;
}

// Exercise 7
function vowelCount(string) {
    const vowels = 'aeiouAEIOU';
    const word = string.split('');
    const wordVowels = word.filter(char => vowels.indexOf(char) !== -1);
    const vowelsCount = wordVowels.length || 0;
    return vowelsCount;
}

// Exercise 8
function isPrime(n) {

    if (n === 1) return false;

    if (n === 2) return true;

    for (let x = 2; x < n; x++) {
        if (n % x === 0) {
            return false;
        }
    }

    return true;
}

// Exercise 9
function getDataType(value) {
    const dtypes = [Function, RegExp, Number, String, Boolean, Object];
    const typesLength = dtypes.length;

    if (typeof value === 'object' || typeof value === 'function') {
        for (let idx = 0; idx < typesLength; idx++) {
            if (value instanceof dtypes[idx]) {
                return dtypes[idx];
            }
        }
    }

    return typeof value;
}

// Exercise 10
function matrix(n) {
    let m = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                m += ' 1 ';
            } else {
                m += ' 0 ';
            }
        }
        m += '\n ---------- \n';
    }
    return m;
}

// Exercise 11
function secondGreatestLowest(arrNum) {
    arrNum.sort((a, b) => a - b);

    let uniqa = [arrNum[0]];
    let result = [];

    for (let j = 1; j < arrNum.length; j++) {
        if (arrNum[j - 1] !== arrNum[j]) {
            uniqa.push(arrNum[j]);
        }
    }
    result.push(uniqa[1], uniqa[uniqa.length - 2]);
    return result.join(',');
}

// Exercise 12
function isPerfectNumber(number) {
    let temp = 0;

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    return (temp === number && temp !== 0) ?
        'It is a perfect number.' :
        'It is not a perfect number.';
}

// Exercise 13
function factors(n) {
    let numFactors = [];
    const squared = Math.floor(Math.sqrt(n));

    for (let i = 1; i <= squared; i += 1)
        if (n % i === 0) {
            numFactors.push(i);
            if (n / i !== i) {
                numFactors.push(n / i);
            }
        }

    numFactors.sort((a, b) => a - b);

    return numFactors;
}

// Exercise 14
function amountTocoins(amount, coins) {
    if (amount === 0) return [];

    if (amount >= coins[0]) {
        const left = (amount - coins[0]);
        return [coins[0]].concat(amountTocoins(left, coins));
    }

    coins.shift();

    return amountTocoins(amount, coins);
}

// Exercise 15
function exponencial(base, n) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = base * ans;
    }
    return ans;
}

// Exercise 16
function uniqueChar(string) {
    const chars = string.split('');
    const uniqueArr = [...new Set(chars)];
    const uniqueChars = uniqueArr.join('');
    return uniqueChars;
}

// Exercise 17
function countChars(string) {
    const chars = string.split('');
    const uniqueCharsCount = chars.reduce((obj, char) => {
        obj[char] = (obj[char] || 0) + 1;
        return obj;
    }, {});
    return JSON.stringify(uniqueCharsCount, null, 2);
}

// Exercise 18
function binarySearch(lookupArray, searchEl) {
    const middlePosition = Math.floor(lookupArray.length / 2);

    if (lookupArray[middlePosition] === searchEl) {
        return middlePosition;
    }

    if (lookupArray.length === 1) {
        return null;
    }

    if (lookupArray[middlePosition] < searchEl) {
        const arr = lookupArray.slice(middlePosition + 1);
        const res = binarySearch(arr, searchEl);
        return res === null ? res : middlePosition + 1 + res;
    }

    const newArray = lookupArray.slice(0, middlePosition);
    return binarySearch(newArray, searchEl);
}

// Exercise 19
function minimumValue(valuesArray, minimum) {
    return (valuesArray || []).filter(val => (val >= minimum));
}

// Exercise 20
function createId(idLength) {
    const charsList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < idLength; i++) {
        randomId += charsList.charAt(Math.floor(Math.random() * charsList.length));
    }

    return randomId;
}

// Exercise 21
function getSubsets(inputArray, subsetSize) {
    let resultSet = [];
    let result = []

    const arrayLength = Math.pow(2, inputArray.length)

    for (let x = 0; x < arrayLength; x++) {
        result = [];
        let i = inputArray.length - 1;
        do {
            if ((x & (1 << i)) !== 0) {
                result.push(inputArray[i]);
            }
        } while (i--);

        if (result.length >= subsetSize) {
            resultSet.push(result);
        }
    }

    return JSON.stringify(resultSet);
}

// Exercise 22
function getCharOccurrence(string, letter) {
    let charsCount = 0;
    for (let position = 0; position < string.length; position++) {
        if (string.charAt(position) == letter) charsCount += 1;
    }
    return charsCount;
}

// Exercise 23
function findFirstNotRepeatedChar(string) {
    for (let i = 0; i < string.length; i++) {
        const c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return null;
}

// Exercise 24
function decrescentSort(inputArr) {
    const sortedArray = inputArr;
    let lastIndex = inputArr.length - 1;
    let swapp;

    do {
        swapp = false;
        for (let i = 0; i < lastIndex; i++) {
            if (sortedArray[i] < sortedArray[i + 1]) {
                let temp = sortedArray[i];
                sortedArray[i] = sortedArray[i + 1];
                sortedArray[i + 1] = temp;
                swapp = true;
            }
        }
        lastIndex--;
    } while (swapp);

    return JSON.stringify(sortedArray);
}

// Exercise 25
function longestName(name) {
    return name.reduce((lname, cname) => lname.length > cname.length ? lname : cname, '');
}

// Exercise 26
function longestSubstringWithNoRepeatedChars(input) {
    const chars = input.split('');
    let currentChar;
    let newString = '';
    let longestString = '';
    let hash = {};

    for (let i = 0; i < chars.length; i++) {
        currentChar = chars[i];
        if (!hash[chars[i]]) {
            newString += currentChar;
            hash[chars[i]] = { index: i };
        } else {

            if (longestString.length <= newString.length) {
                longestString = newString;
            }

            let prevDupeIndex = hash[currentChar].index;
            let strFromPrevDupe = input.substring(prevDupeIndex + 1, i);
            newString = strFromPrevDupe + currentChar;
            hash = {};

            for (let j = prevDupeIndex + 1; j <= i; j++) {
                hash[input.charAt(j)] = { index: j };
            }
        }
    }
    return longestString.length > newString.length ? longestString : newString;
}

// Exercise 27
function isPalindrome(string) {
    const reversed = string.split('').reverse().join('');
    return string == reversed;
}

function longestPalindrome(string) {
    let maxLength = 0;
    let maxp = '';

    for (let i = 0; i < string.length; i++) {
        let subs = string.substr(i, string.length);

        for (let j = subs.length; j >= 0; j--) {
            let subSubsString = subs.substr(0, j);
            if (subSubsString.length <= 1)
                continue;

            if (isPalindrome(subSubsString)) {
                if (subSubsString.length > maxLength) {
                    maxLength = subSubsString.length;
                    maxp = subSubsString;
                }
            }
        }
    }

    return maxp;
}

function createEditors() {
    const editorConfig = {
        theme: 'ace/theme/monokai',
        mode: 'ace/mode/javascript',
        selectionStyle: 'text',
        fontSize: '14px',
        tabSize: 1,
        showPrintMargin: false,
        readOnly: true,
        highlightActiveLine: false,
        showGutter: false,
    }

    const exampleArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
    const biggestArray = [11, 45, 4, 31, 64, 10];
    const decrescentArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
    const subsetsArray = [1, 2, 3];

    const editors = [
        { callback: reverseNumber, input: 32243 }, // #1 
        { callback: checkPalindrome, input: 'madam' }, // #2 
        { callback: stringCombinations, input: 'dog' }, // #3 
        { callback: alphabetOrder, input: 'webmaster' }, // #4 
        { callback: uppercase, input: 'the quick brown fox' }, // #5 
        { callback: findLongestWord, input: 'Web Development Tutorial' }, // #6 
        { callback: vowelCount, input: 'The quick brown fox' }, // #7 
        { callback: isPrime, input: 37 }, // #8 
        { callback: getDataType, input: false }, // #9 
        { callback: matrix, input: 4 }, // #10 
        { callback: secondGreatestLowest, input: [1, 2, 3, 4, 5] }, // #11 
        { callback: isPerfectNumber, input: 28 }, // #12
        { callback: factors, input: 16 }, // #13
        { callback: amountTocoins, input: [46, [25, 10, 5, 2, 1]] }, // #14
        { callback: exponencial, input: [2, 3] }, // #15
        { callback: uniqueChar, input: 'thequickbrownfoxjumpsoverthelazydog' }, // #16
        { callback: countChars, input: 'Lorem Ipsum Dolum' }, // #17
        { callback: binarySearch, input: [exampleArray, 6] }, // #18
        { callback: minimumValue, input: [biggestArray, 10] }, // #19
        { callback: createId, input: 8 }, // #20
        { callback: getSubsets, input: [subsetsArray, 2] }, // #21
        { callback: getCharOccurrence, input: ['w3resource.com', 'o'] }, // #22
        { callback: findFirstNotRepeatedChar, input: 'abacddbec' }, // #23
        { callback: decrescentSort, input: decrescentArray }, // #24
        { callback: longestName, input: ['Australia', 'Germany', 'United States of America'] }, // #25
        { callback: longestSubstringWithNoRepeatedChars, input: 'google.com' }, // #26
        { callback: longestPalindrome, input: 'abracadabra' }, // #27
    ];

    try {
        editors.forEach((editor, index) => {
            createEditor(index + 1, editor.callback, editor.input, editorConfig);
        });
    } catch (err) {
        console.log(err)
    }
}

createEditors();

function createEditor(idx, callback, input, editorConfig) {
    const editor = ace.edit(`editor${idx}`, editorConfig);
    editor.setValue(callback.toString(), -1);
    let result = null;

    if (input.length === 2) {
        result = callback(input[0], input[1]);
    } else {
        result = callback(input);
    }

    if (input.length === 2) {
        document.getElementById(`input${idx}`).innerHTML = `
       <strong>Argument 1:</strong> ${JSON.stringify(input[0])}
       <br>
       <strong>Argument 2:</strong> ${JSON.stringify(input[1])}`
    } else {
        document.getElementById(`input${idx}`).innerText = input
    }


    document.getElementById(`result${idx}`).innerText = result;

}