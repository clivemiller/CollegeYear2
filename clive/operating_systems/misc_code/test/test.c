#include <stdio.h>

int test(int number) {
    return number * 2;
}

int testForLoop(int loopNum, int numToAdd) {
    int start = 0;
    for (int beg = 0; beg < loopNum; beg++) {
        start += numToAdd;
        printf("run: %d\n", start);
    }
    return start;
}

int main(void) {
    printf("Hello, world!\n");
    printf("Test: %d\n", test(5));
    printf("Test Loop: %d\n", testForLoop(10, 1));

    return 0;
}