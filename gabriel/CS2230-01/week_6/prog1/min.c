#include <stdio.h>
#include "global.h"

void minval() {
    int min = arr[0];
    for (int i = 1; i < SIZE; i++)
        if (arr[i] < min) min = arr[i];
    printf("Min = %d\n", min);
}