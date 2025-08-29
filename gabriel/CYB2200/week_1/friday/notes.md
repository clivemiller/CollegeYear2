__**Frid Aug 29 Class Notes**__

# ROBUST PROGRAMMING
- A style of programming that prevents abnormal termination or unexpected actions.
- Handles bad input gracefully
- Detects internal errors and handles them gracefully.

# THE PHILOSOPHY OF SECURE PROGRAMMING
- Remember what you have learned in the programming classes.
  - Check user unput
  - Check your bounds
  - Assume an error will occur and handle it properly
  - What could someone **deliberately** do to compromise your program?
    - Adversary thinking
  - What could someone **unintentionally** do to compromise your program?
    - People make mistakes
- Defensive Programming
  - Input validation, type checking
  - Cover all caess - use defaults to handle cases not explicitly covered
  - Catch and handle exceptions at the lowest level possible
- Understand the environment in which your program will be used..
  - Programs interact with people and with the system.
- Understand the procedures under which people will use your program.
  - The best program if installed incorrectly can compromise the system.
  - The best program if installed incorrectly can also cause issues.

# MANAGING SOFTWARE VULNERABILITIES
- Design and implement systems to avoid them.
- Analyze and test systems to find them.
- Add mitigation techniques to address them.
# **THIS LECTURE**
- Topics:
  - C-style strings

## **WARM UP**
- In C++:
  - Do you use arrays?
  - Do you use strings? How?
- In C programming language:
  - Do you use strings? How?

# WHY C?
- Developed in 1970s
  - Security was not a big concern
- Many common vulnerabilities
  - Some of the vulnerabilities do not exist in other programming languages.
  - But are good to understand the vulnerabilities.
- Many legacy code running
- Many existing systems/software were written in C/C++.
- C/C++ are still widely used.

# C-style Strings
- Strings are a fundamental concept, but they are not a built-in data type in C.
- **C-stlye string:**
  - character array terminated by a NUL character (ASCII 0x00)

# C String Handling Vulnerabilities
- Unsafe use of a handful of functions:
  - Unbounded string functions
    - The destination buffer's size isn't taken into account at all.
    - buffer overflow (source data's length exceeds the destination buffer's size)
  - Bounded string functions
    - Safer alternatives to the unbounded string functions
    - A length parameter to designate the length (or bounds) of the destination buffer
    - May be misused in more subtle ways
  - 