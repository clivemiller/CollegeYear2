__**Mon Sep 29 Class Notes**__

# INTEGER ERRORS

## TYPE CONVERSIONS

- Type conversion: convert an object of one type i nto another type
  - explicit type conversion
    - eg. (unsigned int) a; // type casting
  - implicit type conversion
    - eg. a/int a; // ?
- Conversions can lead to lose or misinterpreted data
- Conversion rules - the general rules C uses when converting between types.
  - simple conversions
  - integer promotions
  - arithmetic conversions

## WHERE DO TYPE CONVERSIONS HAPPEN?

- Simple converions
  - type cast
  - assignment
  - functions call - prototype
  - function return
- integer promotions
- unusual integer ?

## INTEGER PROMOTIONS

- Integer promotions specify how C takes a narrow integer data type, such as a char or short, and converts it to an int.
  - Integer tuypes smaller than int are promoted when an operation is performed on them.

# WENESDAY CLASS OUTLINE

- signed/unsigned conversions
- sign extensions
- truncation
- comparisons

## SIGNED/UNSIGNED CONVERSIONS

### Code Example 1:

void foo (int array [], unsigned int size); // function prototype
int main()
{
  int my_array[100];
  int my_array_size;
  ... // do something
  foo (my_array, (unsigned int)my_array_size);
}

## CONVERSION RULES HERE:

- signed variable is converted to an unsigned variable of the **same size**,
- OR an unsigned variable is converted to a signed variable of the same size.
- the bit pattern is left alone, and the value changes correspondingly.

### Code Example 2:

int copy(char *dst, char *src, unsigned int len)
{
  while (len--)
    *dst++ = *src++;
}
int main()
{ ...
  int f = -1;
  copy (mydst, mysrc, f);
}

### Code Example 3:

int main()
{
  char src[40];
  char dest[12];
  int my_size = 10;
  memset(dest, '\0', sizeof(dest));
  printf(src, "Hello World!");
  strncpy(dest, src, my_size);
  printf("Final copied string : %s\n", dest);
  return(0);
}

### Code Example 4:

int read_user_data(int sockfd)
{
  int length, n;
  char buffer[1024];
  length = get_user_length(sockfd);
  if (length > 1024)
  {
    error("illegal input, not enough room in buffer\n");
    return -1;
  }

  if (read(sockfd, buffer, length) < 0)
  {
    error("read: %m");
    return -1;
  }
  return 0;
}

## SIGN EXTENSION

sign extension occurs:

- simple conversion
  - typecast, assignment, function call – prototype, function call - return
- integer promotion
  - signed type (source) is smaller than destination
- etc.

## TRUNCATION

- truncation occurs when a larger type is converted into a smaller type.
- No truncation in integer promotions and usual arithmetic converions.
- etc.

### Code Example 6:

int g = 0x12345678
short int h;
h = g;

# FRIDAY CLASS OUTLINE

- a

## b

- c
