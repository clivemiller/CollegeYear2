__**Wed Oct 29 Class Notes**__

# IDK

## CODE AUDITING STRATEGIES

- Twocategories of code auditing strategies:
  - Code Comprehension (CC) Strategies
    - Analyze source code directly
      - to discover vulnerabilities
      - to improve understanding of code
- Candidate point (CP) Strategies
  - Create a list of ...

## BLACK BOX TESTING

- send bad input data to an application
- see how it responds
- goal: find input which causes the program to have abnormal behavior
- fuzz testing (fuzzing) automates the black box testing process

## CODE COMPREHENSION STRATEGIES

- discovering vulnerabilities by directly analyzing the code
- require you to read the code and understand it
- need to keep good "working paper", well-kept notes
- strategies:
  - Tracing malicious input
    - start at data entry point to the system, searching for any type of bejavior that appears unsafe
    - forward tracing, control flow sensitive, limited data flow analysis
    - goal: discover security problems that can be caused by malicious input
  - analyze a module
  - read a single source file from top to bottom
  - forward tracing, not sontrol flow sensitive, not data flow sensitivie
  - look at each function and document potential issues
  - analyze an algorithm
    - goal: look at the algorithm and identify any possible weakness in the design of the algorithm
    - forward tracing, not control flow sensitive, not data flow sensitive
    - pick security relevant algorithms
      - crypto
      - security model enforcement
      - input processing
  - analyze a class or object
    - goal: study the interface and implementation of an important object to find vulnerabilities in how the system uses it.
    - focus on class instead of module
    - especially effective for object-oriented progams
    - forward tracing, not control flow sensitive, not data flow sensitive
  - trace black box hits
    - start out witha. list of possible problems obtained by fizzing or manual black boxing
    - start from the data entry point
    - trace input to vulnerabilities
    - forward tracing, control flow sensitive, limited data flow analysis

## CANDIDATE POINT STRATEGIES

- general candidate point approach
  - 1: identify potentially unsafe code constructs
  - 2: trace backward through the code to determine whether they are exploitable
  - trace backward to the code, control flow sensitive, data flow sensitive
- automated source analysis tool
  - goal: identify vulnerabilities based on a list of candidate points and code paths obtained from automated analysis tools.
  - trace backware to the code, control flow sensitive, data flow sensitive
- simple lexical candidate points
  - a wide range of vulnerabilities can be easily identifies
  - goal: identify potential vulnerabilities based on simple pattern matching and then trace to entry points for confirmation
  - trace backward to the code, control flow sensitive, data flow sensitive
- simple binary candidate points
  - certain classes of culverabilities can also be found in binary code
  - goal: identify potential vulnerabilities based on patterns in the application's binary code and then trace to entry points for confirmation
- black box generated candidate points
  - use fuzzing or manual black boxing to find issues, then do crash analysis.
  - goal: identify potential vulnerabilities based on patterns in the application binary and then trace to entry points for confirmation
  - trace backward tot he code, control flow sensitive, data flow sensitive
- application specific candidate points
  - after working with an aplication, you may find recurring vulnerability patterns
  - search for teh resulting patterns – the application specific candidate points
  - goal: identify potential vulnerabilities based on patterns observed in the review up to this point.
  - trace backward tot he code, control flow sensitive, data flow sensitive

### SUMMARY

- candidate point a piece of code which represents a potential vulnerability
- candidate point strategies:
  - 1: create a list of potential issues through some mechanism or process
  - 2: examine the source code to determine the relevance of these issues

## CRASH ANALYSIS

- Which instruction the program crashed on
  - any problem with the source operand? destination operand? invalid?
  - index to an invalid memory location?
- determine where the invalid operand came from
  - work backward
- connect the invalid operand with some data fed into the program at the entry point

## STATIC CODE ANALYSIS

- Static Code Analysis (also known as Source Code Analysis) is usually performaed as a part of a Code Review (also known as white-box testing) and is carried out at the Implementation phase of a Security Development Lifecycle (SDL).
- Static Code Analysis commonly refers to the running of Static Code Analysis tools that attempt to highlight possible vulnerabilities within 'static' (non-running) source code.

## STATIC ANALYSIS VS. DYNAMMIC ANALYSIS

- Dynamic: This term means that testing always implies executing the program on selected inputs
- Software testing consists of the dynamic verification that a program provides expected bejaviors on a finite set of test cases, suitably selected from the usually infinite execution domain.
- Static analysis techniques reason about a binary without running it
  - Pros" Don't need a CPU that can run the binary.
  - Cons: No knowledge of the binary's runtime state, challenging.
- Dynammic analysis executes the binary and analyzes it as it executes
  - Pros: Have full knowledge of the entire runtime state.
  - Cons: You see only the executed code, may miss other parts of the program.
