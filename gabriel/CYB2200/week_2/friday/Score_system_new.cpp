#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <limits>
using namespace std;

//This program gets up to 10 scores from a students, calculates the average and final grade

int is_all_digits(const char *str)
{
  if (*str == '\0') return 0;
  while (*str) {
    if (!isdigit((unsigned char)*str)) {
        return 0;  // non-digit
    }
    str++;
  }
  return 1;  // valid score
}

int main()
{
  //------DO NOT CHANGE THESE------
  int scores[10];
  char name[100] = "abc";
  char id[12] = "";
  int number_of_score = 0;
  double average = 0;
  int sum = 0;
  char grade = 'X';
  char comments[5] = "NONE";
  //--------------------------------

  cout << "\n---------------------------------------\n";
  cout << "Welcome to the scoring system!" <<endl;
  cout << "Enter student's name:" ;  
  if (fgets(name, sizeof(name), stdin))
  {
    size_t n = strlen(name);
    if (n && name[n-1] == '\n')
      name[n-1] = '\0';
    else
    {
      int c;
      while ((c = getchar()) != '\n' && c != EOF) {}
    }
  }
  cout << "\nPlease enter student ID: ";
  if (fgets(id, 10, stdin))
  {
    size_t n = strlen(id);
    if (n && id[n-1] == '\n')
      id[n-1] = '\0';
    else
    {
      int c;
      while ((c = getchar()) != '\n' && c != EOF) {}
    }
  }

  cout << "Enter up to 10 student's scores (0-100) (if done, enter -1 to stop): ";
  cout << endl;
  for (int i = 0; i< 10; i++)
  {
    // The gist of this fix is reading in the user's input as an array of characters using fgets, then trimming it so nothing is left over for the buffer.
    // After that, the function is_all_digits checks to see if the char array is comprised only of numbers. If it is, then the code "casts" the char array into an int using atoi().
    // That number is then added to the total score.
    // If the char array is NOT made up of only numbers, then the function returns and the score input loops and the user is prompted to try again.
    // The input score is trimmed to 3 digits if it would be longer than that.
    // This deals with buffer overflow and invalid inputs! :D
    bool repeat = false;
    bool triggeredEnd = false;
    do
    {
      repeat = false;
      cout << "Score " << i+1 << ": ";
      char temp[6] = "";
      if (fgets(temp, 4, stdin))
      {
        size_t n = strlen(temp);
        if (n && temp[n-1] == '\n')
          temp[n-1] = '\0';
        else
        {
          int c;
          while ((c = getchar()) != '\n' && c != EOF) {}
        }
      }
      
      // cout << "  temp is " << temp << endl;
      if (is_all_digits(temp) == 1 && atoi(temp) != -1)
      {
        scores[i] = atoi(temp);
        number_of_score++;
        sum = sum + atoi(temp);
      }
      else if (is_all_digits(temp) == 0 && atoi(temp) == -1)
      {
        triggeredEnd = true;
        break;
      }
      else
      {
        repeat = true;
        cout << "Invalid input – please try again! \n";
      }
    }
    while (repeat == true);

    // Ends score input if user enters -1
    if (triggeredEnd == true)
    {
      break;
    }
  }
  
  //calculate the average score
  average = sum / number_of_score;
  cout << "Student's name is: " << name << endl;
  cout << "Student has " << number_of_score << " scores, sum is " << sum <<", and the average score is " << average << endl;

  // figure out the final grade, A, B, C, D, or F
  if( average >= 90)
    grade = 'A';
  if(average < 90 and average >= 80)
    grade = 'B';
  if (average < 80 and average >= 70)
    grade = 'C';
  if (average < 70 and average >= 60)
    grade = 'D';
  if (average < 60 and average >= 0)
    grade = 'F';
  
  cout << "Based on the average score, final grade is: " << grade << endl;

  cout << "looks good? (Yes or No) \n";
  int c = getchar();
  if (c != '\n' && c != EOF)
    ungetc(c, stdin);
  size_t i = 0;
  while ((c = getchar()) != '\n' && c != EOF)
  {
    if (i+1 < sizeof(comments))
    {
      comments[i++] = (char)c;
    }
  }
  comments[i] = '\0';

  cout << "Comments - Looks good? - " << comments << endl << endl;
  cout << "Student name: " << name << endl;
  cout << "Student ID: " << id <<endl;
  cout << "Final grade is: " << grade << endl <<endl;

  cout << "Program exits successfully..." <<endl;

}