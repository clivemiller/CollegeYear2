# CYB2200 - Secure Coding And Analysis

**Date:** 8/25/2025

## Lecture 1: Jia Song
- Jia Song has PhD in Computer Science
  - Email: [Jsong@uidaho.edu](mailto:Jsong@uidaho.edu) (Preferred)
  - Office: JEB 340
  - In email use "[CYB2200] YOUR SUBJECT HERE" for subject
  - MWF 9:30 - 10:20, labs on Friday

### Why?
- So we can write robust code
- This class is required
- Find vulnerabilities before criminals

### What?
- **SPP: Secure Programming Practices**
  - Principles of Secure Programming
  - Robust Programming
  - Defensive Programming
  - Programming Flaws
  - Static Analysis
  - Different Programming Languages
- **SSA: Software Security Analysis**
  - Testing Methodologies
  - Static and Dynamic Analysis Techniques
  - Sandboxing
  - Common Analysis Tools and Methods
- **QAT: QA/Functional Testing**
  - Testing Methodologies
  - Test Coverage Analysis
  - Automatic and Manual Generation of Test Inputs
  - Test Execution
- **Bonus: STRIDE**
  - S: Spoofing identity
  - T: Tampering with data
  - R: Repudiation
  - I: Information disclosure
  - D: Denial of service
  - E: Elevation of privilege

### Deliverables
- Produce Software Security Analysis tools and techniques
- Apply knowledge to perform Software Security Analysis using common tools
- etc.

## Lecture 2 : Basic Security Concepts

### Computer System, computer security, CIA triad
- Computer Security:
  - the protection of the items you value
- Computer systems
  - hardware
  - software
  - data
- CIA triad
  - **Confidentiality**: ability of a system to ensure that an asset is viewed only be authorized parties
  - **Integrity**: ability of a system to ensure that an asset can only be modified by authorized parties
  - **Availability**: ability of a system to ensure that an asset can be used by any authorized parties
  - Computer security seeks to prevent unauthorized viewing (**confidentiality**) or modification (**integrity**) of data while preserving access (**availability**)

### Vulnerability, threat, risk, attack, countermeasure
- **Vulnerability**
  - a weakness in a information system, security system, procedures, internal controls, or impl that could be exploited or triggered by a threat source [NIST]
- **Threat**
  - a computing system is a set of circumstances that has the potential to cause loss or harm
- **Risk/Harm**
  - Harm: negative consequence of a actualized threat
  - Risk: Possibility of harm
- **Attack**
  - a human that exploits a vulnerability is an attack on a system
- **Exploit**
  - is a piece of software, data, or sequence of commands that takes advantage of a vulnerability to cause unintended/unanticipated behavior to occur 
- Countermeasure
  - things that prevent threats
#### Attack
- An Attack is an attempt to gain unauthorized access to anything
- **Passive attack**
  - attempt to collect, learn or use the info in the system, does not affect the system
- **Active attack**
  - attempt to alter system resources or change their operations
- **Insider attack**
  - attacks initiated by an insider who is authorized to access system resources
- **Outside attack**
  - attacks initiated by an outsider, usually an unauthorized user of the target systems
#### Controls/Countermeasures
Prevent threats from exercising vulnerabilities (before or after the fact)
- **Prevent** it, by blocking the attack or closing the vulnerability 
- **Deter** it, by making the attack harder but not impossible
- **Deflect** it, by making another target more attractive
- **Mitigate** it, by making its impact less severe
- **Detect** it, by either as it happens or some time after the fact
- **Recover** from an attacks effects
### Identification and auth and access control
- Someone is authorized to take some action on something
#### Someone:
- Who is the person?
- **Identification**
  - The act of asserting who a person is
- **Identity**
  - The set of physical and behavioral characteristics by which an individual is uniquely recognizable [NIST]
  - These can be public or well known or predictable
    - email
    - student id
    - employee id
- **Authentication**
  - the act of proving that asserted identity
  - Auth should be private and well protected
#### Authentication Mechanisms
- Something the user **has**:
  - a physical object (id card) in the persons possession
- Something the user **knows**:
  - Passwords, ssn, pin
- Something the user **is**:
  - Fingerprints, retina, face, voice, etc. 
Something that uses more that one of these is a **MFA** or multi-factor authentication
#### Access control
- A subject is permitted to access an object in a particular mode, and only such authorized accesses are allowed
  - **Subject**
    - Human users
  - **Object**
    - things on which an action can be performed
  - **Access Mode**
    - any controllable actions
- **Policies**
  - **Access control policies** indicate what types of access are permitted, under what circumstances, and by whom
  - **Authorization** is the process of determining whether a user is permitted to perform a specific operation
### Software Development cycle
- Software development life cycle describes phases of the software development cycle and the order in which those phases are executed 
- Each phase produces deliverables required for the next phase
- Security should be considered as early as possible
  - **Planning**
  - **Analysis**
  - **Design**
  - **Implementation**
  - **Testing and Integration**
  - **Maintenance**
- Terminology
  - **Software Bugs** are errors, flaws, mistakes, or oversights in programs
  - **Software Vulnerabilities** are specific flaws that allow attack vectors
  - **Malware** is software that has mal-intent

## Lecture 2: Continuing Basic concepts

### Robust Programming
- A style of programming that prevents abnormal termination or unexpected actions
- Handles Bad inputs gracefully
- Detects internal errors and handles them gracefully
### The Philosophy of secure Programming
1. Remember what you have learned in the programming classes.
  - Check user input
  - Check your bounds
  - Assume an error will occur and handle it properly
    - What could someone deliberately do to compromise your program?
      - Adversary thinking
    - What could someone unintentionally do to compromise your program?
      - People make mistakes
2. Defensive Programming
  - Input validation, type checking
  - Cover all cases - use defaults to handle cases not explicitly covered
  - Catch and handle exceptions at the lowest level possible
3. Understand the environment in which your program will be used.
  - Programs interact with people and with the system.
4. Understand the procedures under which people will use your program.
  - The best program if installed incorrectly can compromise the system.
  - The best program if configured incorrectly can also cause problems.

### HOW DO WE MANAGE SOFTWARE VULNERABILITIES?
  - Design and implement systems to avoid them.
  - Analyze and test systems to find them.
  - Add mitigation techniques to address them.
### SUMMARY
- Computer security is the protection of the items you value, called the
assets of an information system.
- Confidentiality, integrity, and availability (CIA triad) are the three
basic security objectives.
- Computer security seeks to prevent unauthorized viewing
(confidentiality) or modification (integrity) of data while preserving
access (availability).
Definitions: vulnerability, threat, control/countermeasure, harm,
risk, attack.

- Identification and authentication
- Authorization, Access control
- Software bugs/vulnerabilities, SDLC
- Robust programming, Defensive programming

## Lecture 3: C-style strings

### Warm-up 
  - In C++
    - Do you use arrays? -yes
    - Do you use strings? -yes
  - IN C
    - The only way is char array
### Why C?
  - Developed in 1970 when security was not a concern
  - Many common vulnerabilities 
    - Some of the weak points do not exist in other languages, so we use C to get exposed to these
  - Many legacy code running C
  - Many existing software/systems were written in C/C++, which is still widely used

### C-strings
- Strings are not a built in data type in C
- IN C, they are char arrays terminated by a Nul char (0x00)

```c
  int main()
  {
    int scores[10];
    char name[100];
    int number_of_score = 0;
    double average = 0;
    int sum = 0;
    char grade = 'X';
    char comments[5] = "NONE";
  }

``` 
### Examples
```c
  char name[100] = "username";
  cout << "size of name is: " << sizeof(name) << endl;
  output = 100;
```
```c
  char str[] = "hello";
  cout << "size of str is: " << sizeof(str) <<endl;
  output = 6;
```
```c
  char str2[5] = "hello";
  cout << "size of str is: " << sizeof(str2) <<endl;
  compiler warning
```
- When a char array is created, the null terminator is automatically added
### Two major problems with C strings
1. The length of the string and the size of the array
  - if the string is bigger than the array we have a buffer overflow
2. The NUL terminator
  - NUL char is marking the end of a string
  - IF it is missing, functions can continue reading chars
### NULL != NUL
- NUL - null char, null terminator 
  - it is a char
  - indicates the end of a string char array
- NULL - a macro 
  - indicates a pointer doesn't have address
### C Handling vulnerabilities
- Unsafe use of handful of functions
  - Unbounded string Functions (example: copy function)
    - The destination buffer's size isn't taken into account at all
    - buffer overflow (source data's length exceeds the destinations buffer size)
  - Bounded String functions
    - Safer option to unbounded
    - they handle lengths

### Printf() in C
- %d = decimal
- %x = address
```c
  printf("hello world!\n");
  printf("a has value: %d\n", a);
  printf("a has value: %d\n, b has value: %d\n", a, b);
  printf("a has value: %d\n, b has value: %d\n, c is at address: %x\n", a, b, &c);
```

- int printf(const char *format, ...)
  - The ... indicates that zero or more optional args can be provided

| Parameter | Meaning                                     | Passed as  |
|-----------|---------------------------------------------|------------|
| %d        | decimal (int)                               | value      |
| %u        | unsigned decimal (unsigned int)             | value      |
| %x        | hexadecimal (unsigned int)                  | value      |
| %s        | string ((const) (unsigned) char *)          | reference  |
| %n        | number of bytes written so far, (* int)     | reference  |

### Unbounded string functions
### **scanf()** - reading input

- **Function** — `int scanf(const char *format, ...)`
- **Purpose** — The `scanf()` function parses input according to the format argument.

---

#### Example

```c
#include <stdio.h>

int main() {
    char name[20];
    scanf("%s", name);
    printf("Your name is: %s", name);
    return 0;
}
// This program demonstrates the use of scanf() to read a string input.
// It is important to ensure that the input does not exceed the buffer size.
// scanf() can be used with a maximum field width to prevent buffer overflow.
```
### **sprintf()** - reading input

- **Function** — `int sprintf(char *str, const char *format, ...)`
- **Purpose** — The `sprintf()` functions print a formatted string into a destination buffer.


```c
#include <stdio.h>

int main() {
    char buffer[20];
    int a = 5, b = 3, k;

    k = sprintf(buffer, "%d plus %d is %d", a, b, a+b);
    printf("[%s] is a string, its length is %d. \n", buffer, k);

    return 0;
}
// "5 plus 3 is 8", is a string, its length is 13
```

## Metadata/Metacharacters

### Metadata
- Metadata accompanies the main data and provides info about it
- Problems:
  - Embedded delimiters
    - delimiters are used to denote the termination of a field
  - Truncation
  
### Filtering
- 3 options
  - detect erroneous input and reject what appears to be an attack
  - detect and strip dangerous characters
  - detect and encode dangerous character with a metacharacter escape sequence

### Eliminating Metacharacters
- Reject illegal requests
  - any request containing illegal metacharacters is simply discarded processing terminates
  - fewer things can go wrong in the handling 
  - the application may be unfriendly
- Strip dangerous characters
  - filters modify the input to get rid of any violations
  - filters need to be implemented carefully
    - blacklist (like a ban)
    - whitelist (ony some allowed)
- Encoding metacharacters (escaping)