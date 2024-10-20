### Title: Introduction to JavaScript and Python Basics for Zali

---

### **Terminal Learning Objectives**

1. Gain a fundamental understanding of JavaScript concepts such as variables, loops, and functions.
2. Learn the basics of Python, including data types, control flow, and functions.
3. Build and execute small projects in both JavaScript and Python to reinforce learning.
4. Solve coding challenges to apply the concepts learned.

---

### **Lesson: JavaScript Basics**

**1. Variables and Data Types:**

- In JavaScript, variables store data. You can declare them using `var`, `let`, or `const`:

  - `let` and `const` have block scope, while `var` has function scope.

  Example:

  ```javascript
  let x = 10;
  const y = 20;
  var z = 30;
  ```

- JavaScript supports several data types:
  - **String**: `"Hello World"`
  - **Number**: `42`
  - **Boolean**: `true` or `false`
  - **Array**: `[1, 2, 3]`
  - **Object**: `{ key: 'value' }`

**2. Control Flow (Conditional Statements):**

- Use `if`, `else if`, and `else` to control the flow of your program.

  Example:

  ```javascript
  if (x > 5) {
    console.log("X is greater than 5");
  } else {
    console.log("X is less than or equal to 5");
  }
  ```

**3. Loops:**

- Loops repeat actions. Common loops include `for`, `while`, and `do...while`.

  Example (For loop):

  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

**4. Functions:**

- Functions allow you to reuse code. They can accept inputs (parameters) and return outputs.

  Example:

  ```javascript
  function add(a, b) {
    return a + b;
  }

  let result = add(2, 3); // 5
  ```

---

### **Lesson: Python Basics**

**1. Variables and Data Types:**

- In Python, variables are dynamically typed, meaning you don't need to specify the type.

  Example:

  ```python
  my_var = 10
  name = "Zali"
  ```

- Basic Python data types:
  - **String**: `"Hello"`
  - **Integer**: `42`
  - **Float**: `3.14`
  - **Boolean**: `True` or `False`
  - **List**: `[1, 2, 3]`
  - **Dictionary**: `{"key": "value"}`

**2. Control Flow (Conditional Statements):**

- Use `if`, `elif`, and `else` to control the logic in Python.

  Example:

  ```python
  if x > 5:
      print("X is greater than 5")
  else:
      print("X is 5 or less")
  ```

**3. Loops:**

- Python offers `for` and `while` loops to iterate over data.

  Example:

  ```python
  for i in range(5):
      print(i)
  ```

**4. Functions:**

- Define functions in Python using `def`. They can return values.

  Example:

  ```python
  def add(a, b):
      return a + b

  result = add(2, 3) # 5
  ```

---

### **Demonstration Projects**

**1. JavaScript: Simple Calculator**

- Build a basic calculator that can add, subtract, multiply, and divide two numbers.

  Example:

  ```javascript
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function divide(a, b) {
    return a / b;
  }

  function multiply(a, b) {
    return a * b;
  }

  console.log(add(5, 3)); // 8
  console.log(subtract(5, 3)); // 2
  console.log(divide(10, 2)); //5
  console.log(multiply(10, 2)); //20
  ```

**2. Python: Data Processing Script**

- Create a Python script that processes a list of numbers, calculating the sum and average.

  Example:

  ```python
  numbers = [1, 2, 3, 4, 5]

  total = sum(numbers)
  avg = total / len(numbers)

  print(f"Total: {total}, Average: {avg}")
  ```

---

### **Imitate: Coding Examples to Follow**

1. **JavaScript Example**: Create a loop that counts from 1 to 10 and prints each number to the console.

   ```javascript
   for (let i = 1; i <= 10; i++) {
     console.log(i);
   }
   ```

2. **Python Example**: Write a function that checks if a number is even or odd and returns the result.

   ```python
   def check_even_odd(number):
       if number % 2 == 0:
           return "Even"
       else:
           return "Odd"

   print(check_even_odd(5))  # Odd
   ```

---

### **Practice: Coding Challenges**

1. **JavaScript Challenge**: Build a simple counter app with buttons to increment and decrement the value.
2. **Python Challenge**: Create a Python script that takes user input and checks whether the input string is a palindrome.

---

### **Homework Activities**

#### **JavaScript Homework:**

**Task 1: Counter App**

- Build a counter application using HTML, CSS, and JavaScript.
- Steps:

  1. Use HTML to create two buttons (Increment and Decrement) and a display area for the counter value.
  2. Style the buttons and text using CSS.
  3. Use JavaScript to update the counter value when the buttons are clicked.

  Example structure:

  ```html
  <h1>Simple Counter</h1>
  <p id="counter">0</p>
  <button onclick="increment()">Increment</button>
  <button onclick="decrement()">Decrement</button>

  <script>
    let counter = 0;

    function increment() {
      counter++;
      document.getElementById("counter").innerText = counter;
    }

    function decrement() {
      counter--;
      document.getElementById("counter").innerText = counter;
    }
  </script>
  ```

**Task 2: Theoretical Homework Questions**

1. What are the three main types of loops in JavaScript, and what are their differences?

   - `For` Loop : use when you know how many times you need to iterate
   - `While` Loop : use when the number of iterations is not known beforehand
   - `Do... While` Loop : use when you want the loop to run at least once beforehand.

2. Explain the differences between `var`, `let`, and `const` in JavaScript.

   -`var`: function-scoped, meaning if declared inside a function, it only is accessible within that function & you can redeclare a variable

   -`let`: blocked-scoped, meaning it only accessible within the block it is declared & the variable can be reassign

   `const`: blocked-scoped & cannot be reassigned

3. What is a JavaScript closure, and why is it important?
   - A javascript closure is the inner function ability to access the outer function scope.
   - This is important to keep information private, create special functions that show certain thing, keep tracking of information

#### **Python Homework:**

**Task 1: List Processing Script**

- Write a Python script that accepts a list of numbers and outputs:

  - The sum of the numbers.
  - The average of the numbers.
  - The largest and smallest numbers.

  Example:

  ```python
  numbers = [3, 7, 2, 8, 10]

  total = sum(numbers)
  average = total / len(numbers)
  largest = max(numbers)
  smallest = min(numbers)

  print(f"Total: {total}, Average: {average}, Largest: {largest}, Smallest: {smallest}")
  ```

**Task 2: Python Coding Challenge**

- Write a function that takes a string and returns the most common character in the string. If there’s a tie, return the first one encountered.

  Example:

  ```python
  def most_common_char(string):
      frequency = {}
      for char in string:
          frequency[char] = frequency.get(char, 0) + 1
      return max(frequency, key=frequency.get)

  print(most_common_char("hello"))  # l
  ```

---

Make sure to practice regularly and try to build on these exercises to reinforce your understanding of both languages!
