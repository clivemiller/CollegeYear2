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
  
  //for example
  //1a, x and y are first integer promoted to be int before the addition. Then the result of x+y (int) is stored in a register, the register is big enough to hold the result of 20000+20000, so output value is the correct value.
  short x_short = 20000;
  short y_short = 20000;
  cout << "1a. x + y = " << x_short + y_short << endl;

  //1b, x and y are converted to int before the addition, so the addition result is 40000, but when you try to assign that value to a signed short, which doesn't have enough space to hold 40000, it overflows and becomes a large negative number.
  x_short = 20000; 
  y_short = 20000; 
  short z_short = x_short + y_short; 
  cout << "1b. short z_short = " << z_short << endl; 

  //1c, x and y are converted to int before the addition, so the addition result is 40000, we then assign that value to a signed int, which is large enough to hold 40000, so the stored value is correct.
  x_short = 20000; 
  y_short = 20000; 
  int z1_int = x_short + y_short; 
  cout << "1c. int z1_int = " << z1_int << endl; 

  //1d, x and y are typecasted to int before the addition (redundant), so the addition result is 40000, we then assign that value to a signed int, which is large enough to hold 40000, so the stored value is correct.
  x_short = 20000; 
  y_short = 20000;
  int z2_int = (int)x_short + (int)y_short; 
  cout << "1d. int z2_int = " << z2_int << endl;


  //2a, x and y are added together, but since 4 billion is too large a value for a signed int to hold in the register, the value overflows and becomes a large negative value.
  int x_int = 2000000000; 
  int y_int = 2000000000; 
  cout << "2a. x_int + y_int = " << x_int + y_int << endl;

  //2b, x and y are added together and stored in a signed int z, but since 4 billion is too large a value for z to hold, the value overflows and becomes a large negative value.
  x_int = 2000000000; 
  y_int = 2000000000; 
  int z_int = x_int + y_int; //z is out of range now 
  cout << "2b. z_int = " << z_int << endl; 
  
  //2c, x and y are added together, but since both are integers, and the result of the addition (4 billion) is automatically stored in a signed int, and thus the value is too large to hold in it, the value overflows and becomes a large negative value, regardless of if z is large enough to hold the value.
  x_int = 2000000000; 
  y_int = 2000000000; 
  long long z1_ll = x_int + y_int; 
  cout << "2c. long long z1_ll = " << z1_ll << endl;


  //2d, x and y are first typecasted into long longs, and then added together, and since the result is then stored in a long long before being assigned to z, another long long, and since a long long is large enough to hold 4 billion as a value, the result is as expected.
  x_int = 2000000000; 
  y_int = 2000000000;
  long long z2_ll = (long long)x_int + (long long)y_int; 
  cout << "2d. long long z2_ll = " << z2_ll << endl;


  //3a, x and y are added together and stored as a long long before being printed out, and since a long long is large enough to hold 4 billion as a value, the result is as expected.
  long long  x_ll = 2000000000; 
  long long  y_ll = 2000000000; 
  cout << "3a. x_ll + y_ll = " << x_ll + y_ll << endl;
  
  //3b, x is an int, and y is a long long, so when the addition is performed, the int is first promoted to type long long, and the result is stored in z, a signed long long, and since both the result of the addition and z are large enough to hold 4 billion as a value, the result is as expected.
  x_int = 2000000000; 
  y_ll = 2000000000;
  long long z3_ll = x_int + y_ll; 
  cout << "3b. long long z3_ll = " << z3_ll << endl;


   
  

  cout << "\n\n--------------------------TASK 5 (18 pts)----------------------------\n";

  int num1, num2, result_add, result_sub, result_div;

  /* ---------------- ADDITION CHECK ---------------- */
  cout << "For addition operation: " << endl;
  cout << "    Enter integer1: ";
  cin >> num1;
  cout << "    Enter integer2: ";
  cin >> num2;

  // Check for addition overflow:
  if (((num1 > 0) && (num2 > 0) && (num1 > INT_MAX - num2)) ||
      ((num1 < 0) && (num2 < 0) && (num1 < INT_MIN - num2))) {
    cout << "Integer overflow detected during addition!" << endl;
  } else {
    result_add = num1 + num2;
    cout << "Sum of integer1 and integer2 is: " << result_add << endl;
  }

  /* ---------------- SUBTRACTION CHECK ---------------- */
  // Overflow in subtraction occurs when subtracting a negative number makes the result exceed INT_MAX, or subtracting a positive number makes the result fall below INT_MIN.

  cout << "\nFor subtraction operation: " << endl;
  cout << "    Enter integer1: ";
  cin >> num1;
  cout << "    Enter integer2: ";
  cin >> num2;

  // Check for subtraction overflow:
  if ((num2 < 0 && num1 > INT_MAX + num2) || // positive overflow
      (num2 > 0 && num1 < INT_MIN + num2)) { // negative overflow
    cout << "Integer overflow detected during subtraction!" << endl;
  } else {
    result_sub = num1 - num2;
    cout << "Difference of integer1 and integer2 is: " << result_sub << endl;
  }

  /* ---------------- DIVISION CHECK ---------------- */
  // INT_MIN / -1  (because the result 2147483648 is out of int range). Also, dividing by 0 is undefined and must be caught.

  cout << "\nFor division operation: " << endl;
  cout << "    Enter integer1: ";
  cin >> num1;
  cout << "    Enter integer2: ";
  cin >> num2;

  if (num2 == 0) {
    cout << "Error: Division by zero is not allowed!" << endl;
  } else if (num1 == INT_MIN && num2 == -1) {
    cout << "Integer overflow detected during division!" << endl;
  } else {
    result_div = num1 / num2;
    cout << "Quotient of integer1 / integer2 is: " << result_div << endl;
  }

  /* ---------------- EXPLANATION OF THE ABOVE ----------------
     Addition overflow:
       Happens when two large positives exceed INT_MAX,
       or two large negatives go below INT_MIN.
     Subtraction overflow:
       Happens when subtracting a negative from a positive pushes past INT_MAX,
       or subtracting a positive from a negative drops below INT_MIN.
     Division overflow:
       Happens only when dividing INT_MIN by -1.
       Also must check for divide-by-zero.
  -------------------------------------------------------- */

  
 
}
