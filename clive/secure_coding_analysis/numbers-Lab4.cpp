#include <iostream>
#include <climits>
#include <limits>

using namespace std;

//clear the buffer used for cin
void clearbuffer()
{
  cin.clear();  //clear the error flag on cin
  cin.ignore(numeric_limits<streamsize>::max(), '\n');  //skips up to numeric_limits<streamsize>::max() characters or until a new line is encountered
}


int main(){

  cout << "---------------------- Task 1 (Done)--------------------------" <<endl;
  cout << " Know the range of each data type: " <<endl<<endl;


  cout << "char: sizeof(char) is " << sizeof(char) << " bytes" << endl;
  cout << "\tmax is " << CHAR_MAX << ", min is " <<CHAR_MIN << endl;
  cout << "short: sizeof(short) is " << sizeof(short) << " bytes" << endl;
  cout << "\tmax is " << SHRT_MAX << ", min is " <<SHRT_MIN << endl;
  cout << "int: sizeof(int) is " << sizeof(int) << " bytes" << endl;
  cout << "\tmax is " << INT_MAX << ", min is " <<INT_MIN << endl;
  cout << "long: sizeof(long int) is " << sizeof(long int) << " bytes" << endl;
  cout << "\tmax is " << LONG_MAX << ", min is " <<LONG_MIN << endl;
  cout << "long long: sizeof(long long int) is " << sizeof(long long int) << " bytes" << endl;
  cout << "\tmax is " << LLONG_MAX << ", min is " <<LLONG_MIN << endl;

  cout << "u_char: sizeof(unsigned char) is " << sizeof(unsigned char) << " bytes" << endl;
  cout << "\tmax is " << UCHAR_MAX << ", min is " << 0 << endl;
  cout << "u_short: sizeof(unsigned short) is " << sizeof(unsigned short) << " bytes" << endl;
  cout << "\tmax is " << USHRT_MAX << ", min is " << 0 << endl;
  cout << "u_int: sizeof(unsigned int) is " << sizeof(unsigned int) << " bytes" << endl;
  cout << "\tmax is " << UINT_MAX << ", min is " << 0 << endl;
  cout << "u_long: sizeof(unsigned long int) is " << sizeof(unsigned long int) << " bytes" << endl;
  cout << "\tmax is " << ULONG_MAX << ", min is " << 0 << endl;
  cout << "u_long long: sizeof(unsigned long long int) is " << sizeof(unsigned long long int) << " bytes" << endl;
  cout << "\tmax is " << ULLONG_MAX << ", min is " << 0 << endl;


   cout << "\n\n--------------------------TASK 2 (Done)----------------------------\n";
  
  cout << " -------- singed int ------------\n";
  int num;
  cout << "num is declared as a signed int (" << sizeof(int) << "  bytes - MAX: " << INT_MAX << " MIN: " << INT_MIN << " )" << endl;
  cout << "The default assignment is: num = 2147483999 \n";
  num = 2147483999;
  cout << "After the assignment, the value stored in num is: " << num << endl;
  cout << "Now give it a value, first run? just type 2147483999" << endl;
  cout << "You input is: ";
  cin >> num;
  cout << "The value stored in num is: " << num << endl;
  clearbuffer();

  cout << "\n -------- unsinged int ------------\n";
  unsigned int u_num;    
  cout << "u_num is declared as a unsigned int( " << sizeof(unsigned int) << " bytes - MAX: " << UINT_MAX << " MIN: 0 )" << endl;
  cout << "The default assignment is: u_num = 5000000000 \n";
  u_num =5000000000;
  cout << "After the assignment, the value stored in u_num is: " << u_num << endl;
  cout << "Now it is your turn, your input is: ";
  cin >> u_num;
  cout << "The value stored in u_num is: " << u_num << endl;
  clearbuffer();

  cout << "\n -------- singed short ------------\n";
  short short_num; 
  cout << "short_num is declared as a signed short ( " << sizeof(short) << " bytes - MAX: " << SHRT_MAX << " MIN: " << SHRT_MIN << " )" << endl;
  cout << "The default assignment is: short_num = -50000 \n";
  short_num = -50000;
  cout << "After the assignment, the value stored in short_num is: " << short_num << endl;
  cout << "Now give it a value, your input is: ";
  cin >> short_num;
  cout << "The value stored in short_num is: " << short_num << endl;
  clearbuffer();

  cout << "\n -------- unsinged short ------------\n";
  unsigned short u_short_num;
  cout << "u_short_num is declared as a unsigned short ( " << sizeof(unsigned short) << " bytes - MAX: " << USHRT_MAX << " MIN: 0 )" << endl;
  cout << "The default assignment is: u_short_num = -50 \n";
  u_short_num = -50;
  cout << "After the assignment, the value stored in u_short_num is: " << u_short_num << endl;
  cout << "Now you give a value to it: ";
  cin >> u_short_num;
  cout << "The value stored in u_short_num is: " << u_short_num << endl;
  clearbuffer();

  cout << "\n\n--------------------------TASK 3 (Done)----------------------------\n";





  cout << "\n\n--------------------------TASK 4 (18 pts)----------------------------\n";
    
  /* Task 4: explain why you got correct or overflowed value in the comments next to each of the following 10 examples.
     Note: Your answer should focus on any integer promotions and type conversions happened.
  */
 // the output: 
// --------------------------TASK 4 (18 pts)----------------------------
// 1a. x + y = 40000
// 1b. short z_short = -25536
// 1c. int z1_int = 40000
// 1d. int z2_int = 40000
// 2a. x_int + y_int = -294967296
// 2b. z_int = -294967296
// 2c. long long z1_ll = -294967296
// 2d. long long z2_ll = 4000000000
// 3a. x_ll + y_ll = 4000000000
// 3b. long long z3_ll = 4000000000


  
  // for example
  // 1a, x and y are first integer promoted to be int before the addition. 
  // Then the result of x+y (int) is stored in a register, the register is
  // big enough to hold the result of 20000+20000, so output value is the correct value.
  short x_short = 20000;
  short y_short = 20000;
  cout << "1a. x + y = " << x_short+y_short << endl;

  // 1b - in contrast the 1a example, two shorts are being promoted before 
  // register storage, but then the values are added into a SHORT type variable, 
  // and are truncated.

  x_short = 20000; 
  y_short = 20000; 
  short z_short = x_short + y_short; 
  cout << "1b. short z_short = " << z_short << endl; 

  //1c - in this one, the two shorts are to be added and are promoted  due to the
  // (integral promotion rule) before the operation and since the value is assigned
  // to an int this time, it is not truncated, resulting in the correct value
  x_short = 20000; 
  y_short = 20000; 
  int z1_int = x_short + y_short; 
  cout << "1c. int z1_int = " << z1_int << endl; 

  // 1d - in this one, the two shorts are converted regardless of the (int) because of the (integral promotion rule), and because of this 
  // they are promoted to ints before the addition, resulting in the correct value
  x_short = 20000; 
  y_short = 20000;
  int z2_int = (int)x_short + (int)y_short; 
  cout << "1d. int z2_int = " << z2_int << endl;


  //example 2a 
  // The result of x+y (int) is stored in an int_max value, and that is NOT
  // big enough to hold the result of 2000000000+2000000000, so output value is overflowed.
  int x_int = 2000000000; 
  int y_int = 2000000000; 
  cout << "2a. x_int + y_int = " << x_int + y_int << endl;

  //example 2b 
  // The result of x+y (int) is stored in an int_max value, and that is NOT
  // big enough to hold the result of 2000000000+2000000000, so output value is overflowed 
  // before it even is assigned to z_int.
  x_int = 2000000000; 
  y_int = 2000000000; 
  int z_int = x_int + y_int; //z is out of range now 
  cout << "2b. z_int = " << z_int << endl; 
  
  //example 2c 
  // The result of x+y (int) is stored in an int_max value, and that is NOT
  // big enough to hold the result of 2000000000+2000000000, so output value is overflowed 
  // before it even is assigned to the big enough long long.
  x_int = 2000000000; 
  y_int = 2000000000; 
  long long z1_ll = x_int + y_int; 
  cout << "2c. long long z1_ll = " << z1_ll << endl;


  //example 2d 
  // The two ints are converted to long longs before they are added, causing the result to be stored in a 
  // larger value, preventing overflow before it is assigned to long long z, which can handle the result 
  x_int = 2000000000; 
  y_int = 2000000000;
  long long z2_ll = (long long)x_int + (long long)y_int; 
  cout << "2d. long long z2_ll = " << z2_ll << endl;


  //example 3a
  // The two long longs are added and the result is stored in a value that can handle up to LONG_MAX
  // values, so NO overflow occurs
  long long  x_ll = 2000000000; 
  long long  y_ll = 2000000000; 
  cout << "3a. x_ll + y_ll = " << x_ll + y_ll << endl;
  
  //example 3b
  // The int is converted up to the larger type long long, and they are added and
  // the result is stored in a long long that can handle up to long long max
  // values, so NO overflow occurs
  x_int = 2000000000; 
  y_ll = 2000000000;
  long long z3_ll = x_int + y_ll; 
  cout << "3b. long long z3_ll = " << z3_ll << endl;


  


  cout << "\n\n--------------------------TASK 5 (18 pts)----------------------------\n";
  //Let's add checks in the code to detect the overflow before it happening add in checks!
  //for addition, subtraction, and division operations
  //for example, for addition operation
  
  int num1, num2, result_add, result_sub, result_div;
  cout << "For addition operation: " <<endl;
  cout << "    Enter integer1: ";
  cin >> num1;
  cout << "    Enter integer2: ";
  cin >> num2;
 
  //checks for addition operation
  if (((num1 > 0) && (num2 >0) && (num1 > (INT_MAX - num2)))||
      ((num1 < 0) && (num2 <0) && (num1 < (INT_MIN - num2))))
      {cout << "Integer overflow!" <<endl;
	exit(1);
      }
  else {
    result_add = num1+num2;
    cout << "sum of integer1 and integer2 is: " << result_add <<endl;
  }

  // Your turn, for subtraction operation, add checks (6 pts)

  cout << "For subtraction operation: " <<endl;
  cout << "Enter integer1: ";
  cin >> num1;
  cout << "Enter integer2: ";
  cin >> num2;

  // Check for integer overflow/underflow in subtraction
  if ((num2 > 0 && num1 < INT_MIN + num2) ||
      (num2 < 0 && num1 > INT_MAX + num2)) {
    cout << "Integer overflow!" << endl;
    exit(1);
  } else {
    result_sub = num1 - num2;
    cout << "subtraction of integer1 and integer2 is: " << result_sub << endl;
  }


  //for division operation, add checks (6 pts)
  //HINTS:(1) we talked about when integer overflow could happen in division :)
  //          you need to check for that specific condition
  //      (2) your code should also check for the divide by 0 problem!
   cout << "For division operation: " <<endl;
  cout << "Enter integer1: ";
  cin >> num1;
  cout << "Enter integer2: ";
  cin >> num2;

  if (num2 == 0) {
    cout << "Divide By Zero Not Allowed!!";
  }

  if ((num2 == -1) && (num1 == INT_MIN)) {
    cout << "Integer overflow!" << endl;
    exit(1);
  } else {
    result_div = num1 / num2;
    cout << "division of integer1 and integer2 is: " << result_div << endl;
  }
  //Don't forget to run your program to test whether your checks can catch the integer overflows/underflow.
}