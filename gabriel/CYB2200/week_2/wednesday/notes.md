__**Wed Sep 03 Class Notes**__

# UNBOUNDED STRING FUNCTIONS
- strcpy()
  - *Function* – char \*strcpy(char \*dst, char \*src)
  - *Purpose* – strcpy() copies the string located at `src` to the destination `dst`. It ceases copying when it encounters an end of string character (a NUL byte).
  - The strcpy() function copies the string pointed to by `src` (including the terminating null character) into the array pointed to by `dst`.
- strcat()
  - *Function* – char \*strcat(char \*dst, char \*src)
  - *Purpose* – The strcat() functions are resonsible for concatenating two strings together. The src string is appended to dst.
  - **The terminating character at the end of the destination is replaced by the first character of src.**

# What happens if missing NUL at the end?
- A lot of string manipulating functions use NUL terminator to identify the end of a string.
  - eg. strncpy() – copies the string located at `src` to the destination `dst`, until it encounters an end of string character (a NUL byte) or when *n* characters have been written to the destination buffer.
- After calling strncpy(), you can add NUL terminator using something like this:
  - if (n > 0); dest[n-1] = '\\0'

