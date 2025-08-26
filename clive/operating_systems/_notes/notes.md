# CS 2240 - Operating System

**Date:** 8/25/2025

## Lecture 1: Bruce Bolden 
- Contact: JEB 232 [bruceb@uidaho.edu](mailto:bruceb@uidaho.edu)

### Operating System
- Uses the hardware resources of one or more processors
- Provides a set of services to system users
- Manages secondary memory and I/O devices 

### Basic Elements
- Processor
- Main Memory
    - volatile
    - referred to as real memory or primary memory
- I/O modules
    - secondary memory devices
    - communications equipment
    - terminals
- System bus
    - communication among processors, memory, I/O modules
### Processor 
- Two internal registors
    - Memory Address registor (MAR)
        - Specifies the address for the next read or write 
    - Memory buffer register (MBR)
        - Contains data written into memory or receives
        - data read from memory
    - I/O address register
    - I/O buffer register

### Processor Registers
- User-visible registers
    - Enable programmer to minimize main-references by optimizing register use
- Control and status registers
    - Used by processor to control operation of the processor
    - Used by privileged operating-system routines to control program execution

### User-Visible Registers
- May be referenced by machine language
- Available to all programs – both application programs and system programs
- Types of registers
    - Data
    - Address
        - Index
        - Segment pointer
        - Stack pointer
- Address Registers
    - Index
        - Involves adding an index to a base value to get an address
    - Segment pointer
        - When memory is divided into segments, memory is referenced by a segment and an offset
    - Stack pointer
        - Points to top of stack
- Control and Status Registers
    - Program Counter (PC)
        - Contains the address of an instruction to be fetched
    - Instruction Register (IR)
        - Contains the instruction most recently fetched
    - Program Status Word (PSW)
        - Condition codes
        - Interrupt enable/disable
        - Supervisor/user mode
    - Condition Codes or Flags
        - Bits set by the processor hardware as a result of operations
        - Examples
            - Positive result
            - Negative result
            - Zero
            - Overflow

### Instruction Execution
- Two steps
    - Processor reads instructions from memory aka Fetching
    - Processor executes each instruction

### Instruction Fetch and Execute
- The processor fetches the instruction from memory
- Program counter (PC) holds address of the instruction to be fetched next
- Program counter is incremented after each fetch

### Instruction Register
- Fetched instruction is placed in the instruction register
    - Categories
        - Processor-memory
            - Transfer data between processor and memory
        - Processor-I/O
            - Data transferred to or from a peripheral device
        - Data processing
            - Arithmetic or logic operation on data
        - Control
            - Alter sequence of execution




