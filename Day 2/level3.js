//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sentence = "'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence."
console.log(sentence.match(/love/gi).length);

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.match(/because/gi).length);

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const text = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Clean the text using regular expressions
const cleanedText = text.replace(/[^a-zA-Z ]/g, '').toLowerCase();

// Find the most frequent word
const words = cleanedText.split(' ');
const wordCount = {};
let mostFrequentWord = '';
let maxCount = 0;

words.forEach(word => {
  if (wordCount[word]) {
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }

  if (wordCount[word] > maxCount) {
    mostFrequentWord = word;
    maxCount = wordCount[word];
  }
});

console.log("Cleaned Text:", cleanedText);
console.log("Most Frequent Word:", mostFrequentWord);

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const text2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const numbers = text2.match(/\d+/g);
let totalIncome = 0;

if (numbers) {
  numbers.forEach(number => {
    totalIncome += parseInt(number);
  });
}

const annualIncome = totalIncome * 12;

console.log("Total Annual Income:", annualIncome, "euro");