__**Fri Sep 19 Class Notes**__

# Integer Overflow

## TYPED LANGUAGE VC UNTYPED LANGUAGE

- Typed Language
  - C/C++
    - int num = 5;
    - char c = 'a';
    - bool flag = false;
- Untyped Language
  - JavaScript
    - var num2 = 3;
    - var a = 'hello'
    - var b = 'world';
  - Perl
    - my $m = "hello world";
    - my $a = 11;
    - my $c = $a+$m;

## Datatypes in C/C++

- Primary
  - int
  - char
  - bool
  - etc.
- Derived
  - function
  - array
  - pointer
  - reference
  - etc.
- User Defined
  - class
  - structure
  - union
  - enum
  - typedef
  - etc.

- Why do we need data types in C/C++?
  - It tells the compiler how much memory space to allocate for each variable.
  - It tells the compiler how to process data.

## DATA STORAGE OVERVIEW

- C data types:
  - Character types: (1 byte of storage)
    - char
    - signed char
    - unsigned char
  - Integer types:
    - short int (2-byte)
    - int (4-byte)
    - long int (4-byte)
    - and long long int (8-byte)
  - Floating types:
    - float (4-byte)
    - double (8-byte)
    - long double (12-byte)

## SIGNED//UNSIGNED INTEGERS

- 1 byte = 8 bits
- 8-bit unsigned bumber - 0 ~ 255 (00000000 ~ 11111111)
- 8-bit signed number -- -128 ~ 127
- **signed** integer types can represent both positive, 0, and negative values.
- **unsigned** types can represent only 0 and positive values.
- The sign of the number is stored in the sign bit.
  - 0 for positive
  - 1 for negative
- Remaining bits (value bits) indicate the **magnitude** of the value.

## TWO'S COMPLEMENT

- The sign bit is 1 if the number is negative and 0 if the number is positive.
- You can read positive values directly from the value bits.
- The two's complement form of a negative integer is created by adding one to the one's complement representation.
- For negative values, you need to negate the whole number first and then add one.
- Two's complement representation has a single (positive) value for zero.

### Max and Min

**For example:**

8-bit unsigned integer:
Max: 1111 1111 = 255
Min: 0000 0000 = 0

8-bit signed integer:
Max: 0111 1111 = 127
Min: 1000 0000 = -128

## 
