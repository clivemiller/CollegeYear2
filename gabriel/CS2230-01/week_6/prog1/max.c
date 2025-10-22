#include <stdio.h>
#include "global.h"

void maxval() {
    int max = arr[0];
    for (int i = 1; i < SIZE; i++)
        if (arr[i] > max) max = arr[i];
    printf("Max = %d\n", max);
}