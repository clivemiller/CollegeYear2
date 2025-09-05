#include <iostream>
#include <stdio.h>
#include <cstdio>
using namespace std;

//This program gets up to 10 scores from a students, calculates the average and final grade



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
  scanf("%s", name);
  cout << "\nPlease enter student ID: ";
  scanf("%s", id);
  

  cout << "Enter up to 10 student's scores (0-100) (if done, enter -1 to stop): ";  
  cout << endl;
  for (int i = 0; i< 10; i++)
    { cout << "Score " << i+1 << ": ";
      int temp;
      cin >> temp;
   
      //  cout << "  temp is " << temp << endl;
      if (temp != -1)
    {
      scores[i] = temp;
      number_of_score++;
      sum = sum + temp;
    }
      else{
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

  cout << "looks good? (Yes or No)";
  cin.ignore();
  cin >> comments;  

  cout << "Comments - Looks good? - " << comments << endl << endl;
  cout << "Student name: " << name << endl;
  cout << "Student ID: " << id <<endl;
  cout << "Final grade is: " << grade << endl <<endl;

  cout << "Program exits successfully..." <<endl;

}
