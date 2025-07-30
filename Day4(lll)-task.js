function countVowels(str) 
{
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) 
    {
        if (vowels.includes(char)) 
        {
            count++;
        }
    }
    return count;
}
let text = "JavaScript";
console.log(countVowels(text));  
