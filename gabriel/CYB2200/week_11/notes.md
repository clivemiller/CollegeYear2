__**Mon Nov 03 Class Notes**__

# Auditing Variables and Control Flow

## HOMEWORK

- New homework posted today
- ASSIGNMENT:
  - Install a Linux system (VM or VPS)
- Later we will play with software tools that we'll need to install on the Linux system

## OUTLINE

- Some details about auditing code (variables, functions, control flow, memory)
- This lecture:
  - Auditing variables and control flows

## AUDITING VARIABlES

- Variables are used to store data elements that have some relevance to an application.
  - What's stored in them?
  - What operations are performed on them?
  - What do they represent?
- A large part of code auditing is based on understanding...

## VARIABLE INITIALIZATION

- Programmers make the mistake of reading a value from a variable before it has been initialized.
  - Programmer forgot to initialize a variable
  - A code path exists where the variable...

## ARITHMETIC BOUNDARY CONDITIONS

- C's basic integer types have minimum and maximum possible values determined by their...

## ARITHMETIC BOUNDARIES

- A structured process for identifying arithmetic boundary vulnerabilities:
  - Discover operations that, if a boundary condition could be triggered, would have security-related consequences.
  - Determine a set of values for each operand that trigger the relevant arithmetic boundary wrap.
  - Determine whether this code path can be reached with the values...

## VARIABLE RELATIONSHIPS

- Variables are related to eadch other if their values depend on each other in some fashion, or they are used together to represent some sort of application state.
- For example:
  - A buffer
    - A pointer variable points to a buffer
    - A variable that keeps track of the amount of space left in that buffer
  - A linked list
    - A head pointer (first node)
    - A tail pointer (end node)
- Understand how each variable related to the others.
- Determine whether inconsistencis could occur.
  - one variable changed, whether the related variable(s) updated properly

## AUDITING CONTROL FLOWS OF PROGRAMS

### OUTLINE

- Some details about auditing code (variables, functions, control flow, memory)
- This lecture: (common problems)
  - Looping constructs
  - Switch statement

## CONTROL FLOW

- Control flow refers to the manner in which a processor carries out a certain sequence of instructions
- Programming languages have some contructs that can change the control flow of a program.
- For example:
  - C++ has three types of ocntrol structures
    - Sequential
    - Repetition
    - Selection

## LOOPING CONSTRUCTS

- This section focuses on data-processing loops, which are used to interpret user-supplied data and construct some form of output based on the data.
- These types of loops...

### TERMINATING CONDITIONS

- Terminating conditions in loops – Cause loops to exit
- When dealing with length calculations
  - the loops fail to account for a buffer's size
  - a size check is made, but it is incorrect

## BINARIES

- Modern computers perform their computations using the binary numerical system.
- The machine code that these systems execute is called binary code.
- Every program consists of:
  - a collection of binary code (the machine instructions)
  - data (variables, constants ...)
- We need to store all the code and data belonging to each program in a single file – binary executable files (or binaries).

## BINARY ANALYSIS

- Binary analysis – analyzing binaries (find out what they really do)
  - The science and art of analyzing the properties of binary computer programs, called binaries, and the machine code and data they contain.
- Static analysis vs. dynamic analysis
  - Static analysis techniques reason about a binary without running it
  - Dynamic analysis executes the binary and analyzes it as it runs

## BINARY EXECUTABLES

- How binary executables are produced from source?
- Compilation – the process of translating human-readable source code into machine code that your computer can execute.

## THE C COMPILATION PROCESS

- preprocessing
  - The preprocessing phase expands any #define and #include directives in the source file so all that's left is pure C code ready to be compiled
- Compilation
  - The compilation phase takes the preprocessed code and atranslated it into assembly language.
- Assembly
  - Assembler generates object files.
  - Object files contain machine instructions.
  - Object files are compiled independently from each other.
- Linking
  - Linker links together all other object files into a sibgle binary executable.

## 
