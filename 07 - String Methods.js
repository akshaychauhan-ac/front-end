/************************************************** String Methods *****************************************************/

// 1) charAt - Returns character at index
      
      let str = "string";

      str.charAt(3);
      // output: "i"

// 2) concat - Concatenates multiple strings provided to method

      const str1 = "Hello";
      const str2 = "World";

      str1.concat(" ", str2);
      // output: "Hello World"

// 3) includes - case-sensitive search & returns boolean

      const sentence = "The quick brown fox jumps over the lazy dog.";
      const word = "fox";

      sentence.includes(word);
      // output: true

// 4) indexOf - returns index of a substring else -1

      const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

      paragraph.indexOf("dog");
      // output: 40

// 5) lastIndexOf - returns last index of a substring else -1

      const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

      paragraph.lastIndexOf("dog");
      // output: 52

// 6) replace - replaces first occurence (if found) by 2nd parameter

      const paragraph = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

      paragraph.replace("dog", "monkey");
      // output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

// 7) replaceAll - replaces all occurences (if found) by 2nd parameter

      const paragraph = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

      paragraph.replaceAll("dog", "monkey");
      // output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// 8) trim - removes whitespaces from beginning and end

      const str = " abcd  ";

      str.trim();
      // output: "abcd"

// 9) slice - extracts a section of string and returns it as a new string, without modifying the original string

      const str = 'The quick brown fox jumps over the lazy dog.';

      str.slice(31);
      // output: "the lazy dog."
      str.slice(-9, -5);
      // output: "lazy"

// 10) split -  divides string into an array of strings

      const str = "The quick brown fox jumps over the lazy dog.";

      str.split(" ");
      // output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
      str.split();
      // output: ["The quick brown fox jumps over the lazy dog."]

// 11) substring - returns the part of the string between the start and end indexes, or to the end of the string

      const str = 'Mozilla';

      str.substring(1, 3);
      // output: "oz"
      str.substring(2);
      // output: "zilla"

// 12) toLowerCase - converts string to lowercase

      const str = "ABCD";

      str.toLowerCase();
      // output: "abcd"

// 13) toString - converts to string

      const stringObj = new String("foo");

      console.log(stringObj);
      // output: String { "foo" }
      console.log(stringObj.toString());
      // output: "foo"

// 14) toUpperCase - converts string to uppercase

      const str = "abcd";

      str.toUpperCase();
      // output: "ABCD"
