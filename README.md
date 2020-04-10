# RandomLoveCalculator
A Javascript challange that turned into a small project...

The challenge was actually just about creating the function to generate random numbers and instead of showing 1 or 2 numbers, the challenge was to show percent in the dev tool in google chrome.

As I began, I found myself wanting to add stuff like if the user only type in names in lowercases (I want the first letter to be capital), if the user only typed one name (I wanted to rules to get the user to type in 2 names) and I wanted the user to do this on a website, where the Javascript will do the work with fetching data and then present it in a DIV on the site below the form.

#Challenge:
Create a function that generate random numbers and in a console.log present the generated numbers in percent.
        var result = Math.random();
        result = result * 100;
        result = Math.floor(result);
        
#Added:
1. HTML:
HTML Page with full height (100vh) with Title, an input form och an empty DIV for presenting results.

2. CSS:
Full page CSS with a background image from Pexels and centering.

3. Javascript:
In addition to just create and present random numbers in percent, I added:
  - getElementById to fetch data from HTML form
  - slicing out first letter in name and use .toUpperCase and slice out rest of the name to be able to combine them in the output, for both names.
  - Rules to secure that user enters a name in both form inputs, otherwise a message will prompt user to enter both names.
  - Use a getElementById to present the names with capital initial letters in both names and the result into the dedicated DIV on the web page.
  - Added a method to reset the form after calculation and presenting result.
  
  Please feel free to do and use what ever you like with this code.
