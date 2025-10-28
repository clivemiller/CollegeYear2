#include <stdio.h>
#include "global.h"

void sumavg() {
    int sum = 0;
    for (int i = 0; i < SIZE; i++) sum += arr[i];
    printf("Sum = %d, Average = %.2f\n", sum, (double)sum / SIZE);
}