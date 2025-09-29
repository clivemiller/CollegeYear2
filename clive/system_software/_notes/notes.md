# CS  - System Software

**Date:** 8|26|2025

## Lecture 1: Bruce Bolden 
- Contact: JEB 232 [bruceb@uidaho.edu](mailto:bruceb@uidaho.edu)

### Early Computing – Mainframes
- Input – Punch cards / paper tape
- Output – Paper, magnetic tape
- Storage – Magnetic tape

### Minicomputers
- Input – Terminals
- Output – Paper, disk drives
- Storage – Disk drives (hard or floppy)

### Phones meet Paper tape
- Massimo @Rainmaker1973 [https://x.com/rainmaker1973/status/1957679867035590884]
    A smartphone device brings punched tape back to life. This
    vintage storage method used holes to encode data – now
    modern tech can read it in real time.

### Systems 
- System Structure History Progression:
    - Dumb Terminals/ADM3s/VT100s communicate 30-1000 char/s to a mini computer which has memory and disk
    - X-terminals communicate with Ethernet (at the time 1,000,000) chars/sec to a mini computer which has memory and disk
    - Serial Interfaces(Mouse and keyboard)/Graphics Adapters(moniter) and Disk Controllers (for disk) communicate with the CPU and Memory through a bus (ISA/PCI) 123 MB/s
    - Graphics Adapters(monitor) uses AGP Bus, and through a I/O bridge the Disk/Disk Controller use a PCI Bus/Serial Interfaces(Mouse and keyboard) uses ISA Bus to talk to the CPU, which has a Front-Side bus (132-2000 MB/sec) to the Memory
    - Then they advance to full operating systems; [https://canvas.uidaho.edu/courses/41012/files/folder/Lectures?preview=4419632]
    ![operatingsysystem](img/operatingsysystem.png)
## C language
### C vs C++
- Focus: C is procedural and minimal; C++ adds OOP, RAII, and generics.
- Comments: C uses `/* ... */` (and `//` since C99); C++ supports `//` and `/* ... */`.
- Data types: C has primitives; `_Bool` via `<stdbool.h>` in C99. C++ adds `bool`, references, classes.
- Functions: C passes by value; use pointers to modify. C++ also has references and overloading.
- Control flow: `if/switch`, `for/while/do-while` in both.
- Aggregates: C has `struct`, `union`; C++ has `struct`/`class` with methods, constructors, access control.
- Strings: C uses NUL-terminated `char[]`; C++ adds `std::string`.
- Memory: C uses `malloc/calloc/realloc/free`. C++ adds `new/delete` and RAII containers (`std::vector`, `std::unique_ptr`).
- I/O: C uses `<stdio.h>` (`printf/scanf`); C++ uses `<iostream>` (`std::cout/std::cin`). MAY NOT USE READ/WRITE
- Generics: C uses macros/`void*`; C++ has templates.
- Build: C is typically `gcc`, C++ is `g++`. For C headers in C++, prefer `<cstdio>`/`<cstdlib>` namespaced forms.
- Declarations: Old C (C89) requires vars at top of blocks; C99 allows mixed declarations/statements. C++ allows mixed declarations.

#### Function Parameters: pointer (C) vs reference (C++)
```c
// C: swap two ints using pointers
#include <stdio.h>
void swap(int *a, int *b) { int t = *a; *a = *b; *b = t; }
int main(void){ int x=1,y=2; swap(&x,&y); printf("%d %d\n", x,y); }
```
```cpp
// C++: swap using references and overloading
#include <iostream>
void swap(int& a, int& b) { int t = a; a = b; b = t; }
int main(){ int x=1,y=2; swap(x,y); std::cout << x << " " << y << "\n"; }
```

#### Memory Management and Containers
```c
// C: dynamic array with malloc/realloc
#include <stdlib.h>
int *push(int *arr, size_t *n, int v){
    int *p = realloc(arr, (*n + 1) * sizeof *p);
    if(!p) return arr; // handle OOM
    p[(*n)++] = v; return p;
}
```
```cpp
// C++: prefer std::vector (RAII)
#include <vector>
void fill(std::vector<int>& v){ v.push_back(42); }
```

#### Strings and I/O
```c
// C: C-strings and stdio
#include <stdio.h>
int main(void){
    char name[16] = "Ada";
    printf("Hello, %s!\n", name);
}
```
```cpp
// C++: std::string and iostream
#include <iostream>
#include <string>
int main(){
    std::string name = "Ada";
    std::cout << "Hello, " << name << "!\n";
}
```

#### Macros vs Templates
```c
// C: macro for max (no type safety, multiple eval risk)
#define MAX(a,b) ((a) > (b) ? (a) : (b))
```
```cpp
// C++: type-safe template
template <typename T>
T maxT(const T& a, const T& b) { return a > b ? a : b; }
```

#### Structs in C vs C++
```c
// C: struct with data only; must use 'struct' keyword when naming the type
struct Point { int x, y; };
void move(struct Point *p, int dx, int dy){ p->x += dx; p->y += dy; }
```
```cpp
// C++: struct/class can have methods; default access differs (struct=public, class=private)
struct Point { int x{0}, y{0}; void move(int dx,int dy){ x+=dx; y+=dy; } };
```

#### Compiling
```sh
# C
gcc -std=c11 -Wall -Wextra -o app main.c
# C++
g++ -std=c++20 -Wall -Wextra -o app main.cpp
```

## ELF - Relocatable Object File
- ELF (Executable and Linkable Format) file produced by a compiler or assembler but not yet linked into a complete program or shared library.
    - Purpose: Contains code and data that can be combined by the linker (ld) with other relocatable files to form an executable or a shared object.\

## Linux Startup Pseudo Code
```ass
/* crti.o */

_start: 
    call __libc_init_first          /* entry point in .text */
    call _init                      /* startup code in .text*/
    call atexit                     /* startup code in  */
    /* set up arg list for main */
    call main                       /* */
    call _exit                      /* */
```

## static vars can make a program thread unsafe
- strtok() uses a static var
- same readdir
- both of these are not thread safe

## Binary File Formats
- **a.out (assembler output)**
    - file format in older versions of unix for executables, object code, and in later systems, shared-libraries
- **COFF (Common Object File Format)**
    - a spec of  a format for exe, object code, and shared library computer files used on UNIX systems. 
    - "replaced a.out", laid basis for XCOFF, replaced by ELF
- **XCOFF (eXtended COFF)**
- **ELF (Executable and Linking Format)**
    - a primary object format for many OSs including FreeBSD or Linux
    - Three Forms:
        - Executable files (no convention)
        - Relocatable object files (.o)
        - Shared object files (.so, libraries)
- **Mach-O (Mach object file format)**
    - a file format for executables, object code, shared libraries, dynamically loaded code, and core dumps.
    - was more extensibility and faster access to info in the symbol table
    - once used by NeXTSTEP, mac os, and darwin
- **PE (Portable Executable)**
    - executables, object code, DLLs, 32/64 bit versions of windows
    - Portable refers to its versatility
    - needed for the windows OS loader to manage wrapped exe code
    - is used for EXE, DLL, SYS, and others
    - Pe is a modified version of the COFF format

## parts of a.out

- **exec header**
    - only mandatory part
    - contains parameters used by the kernel to load a binary file into memory and exe it
    - the link editor ld needs this info to combine a binary file with other binary files
- **text segment**
    - contains machine code and related data that are loaded into memory when a program executes.
    - May be loaded read-only
- **data segment**
    - Contains initialized data
    - always loaded into writable memory
- **text relocations**
    - Contains records used by the link editor to update pointers in the text segment when combining binary files
- **data relocations**
    - Like the text relocation section, but for data segment pointers.
- **symbol table**
    - Contains records used by the link editor to cross-reference
    the addresses of named variables and functions (symbols)
    between binary files.
- **string table**
    - Contains the character strings corresponding to the symbol
    names.

## ELF
