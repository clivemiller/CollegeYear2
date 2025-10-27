// This program is to simulate Powerball and Mega Millions

/*[CYB2200] Lab requirements:
 * This is a CS120 homework submission. 
 * IMPORTANT: You don't need to find the security related bugs (input validation, type checking)
 * (6 pts) 1. Fixed the arrays and make sure the arrays are shuffled correctly! (This does not count toward a coding problem!)
 * (24 pts) 2. There are at least 4 subtle coding problems in the code, find 3 of them to get full points
 *    a. Read the homework requirement and Do a code review to find the problems
 *    b. Write a comment near the problem code, start your comment with [CYB2200]
 *    c. Fix the code!
 *    3. SUBMIT THIS .CPP FILE to CANVAS
 */

//NOTE1: array shuffle does not count as 1 coding problem.
//NOTE2: missing the required ShowProgramHeader() is not a problem.
//NOTE3: Same type of issue at different places count as 1 coding problem.
//NOTE4: Users entering a very large number, with characters and type mismatch, are not the type of problem we are looking for in this lab.
//[CYB220] Start your comments like this (with [CYB2200]) to make my grading easier. Thanks!

#include <iostream>
#include <string>
#include <cstdlib>
#include <ctime>
using namespace std;

int main ()
{
	int PowerBallW[69]; //Array for PowerBall White
	int PowerBallR[26]; //Array for PowerBall Red
	int MegaMilW[70]; //Array for MegaMillions White
	int MegaMilR[25];//Array for MegaMillions Red
	int j = 0; //A variable to make choice loop work.
	int White[5]; //Array for user input for white
	int Red =0; //Variable for user input for red 
	int random = 0; //Variable for random number in array
	int choice =0; //Variable storage for user choice
	int correctWhite = 0;
	int win_red = 0;
	int redMatch = 0;

	srand(time(NULL));
	//----------------------Initialize Arrays-------------------------
	for(int i=0; i<69; i++){
		PowerBallW[i]= i+1;
		i++;
	}
	for(int i=0; i<26; i++){
		PowerBallR[i]= i+1;
		i++;
	}
	for(int i=0; i<70; i++){
		MegaMilW[i]= i+1;
		i++;
	}
	for(int i=0; i<25; i++){
		MegaMilR[i]= i+1;
		i++;
	}


	//--------------------Start simulation code----------------------
	do{
		cout << "Would you like to play MegaMillions or PowerBall?" << endl;
		cout << "Please enter 1 for Megamillions and 2 for PowerBall." <<endl;
		cin >> choice;
		if (choice == 1){
			j++;
		}else if (choice == 2){
			j++;
		}else {
			cout << "Error. Please enter a valid option." << endl;
		}
	} while (j==0);
	if (choice == 1){ //Conditional to show what the user chose
		cout << "You have chosen to play MegaMillions." <<endl;
	} else {
		cout << "You have chosen to play PowerBall." <<endl;
	}
	cout << "Please enter 5 numbers for the white ball numbers you wish to play with." << endl;
	for (int i=0; i<5; i++){
		int j =0;
		if (choice == 1){ // Conditionals for valid numbers.
			cout << "Please choose numbers between 1 & 70." << endl;
			cin >> White[i];
			if (White[i] <1 || White[i] >70) {
				do{
					cout << "Invalid number." << endl << "Try again. Please enter a number." << endl;
					cin >>White[i];
					if (White[i] >= 1 && White[i] <= 70){	//[CYB220] Originally, the input '1' wasn't accepted by the function (White[i] > 1 && ...). Corrected to accept 1 as an input. This, along with the three other instances of this (commented) constitutes as ISSUE #3.
						j++;
					} else {
						cout << "No." << endl;
					}
				} while (j==0);
			}
			
		} else { //conditional for valid powerball number.
			cout << "Please choose numbers between 1 & 69." << endl;
			cin >> White[i];	//[CYB220] Both the powerball functions (so, the ones for getting numbers for White and Red balls) were missing this line of code, and would error out as soon as the function was called since it didn't ask the user for input first and thus the value of White[i] was always 0.
			if (White[i] <1 || White[i] >69) {
				do{
					cout << "Invalid number." << endl << "Try again. Please enter a number." << endl;
					cin >>White[i];
					if (White[i] >=1 && White[i] <=69){		//[CYB220] Second occurance of the problem in ISSUE #3
						j++;
					} else {
						cout << "No." << endl;
					}
				} while (j==0);
			}
		}
		
	
	}
	j = 0; //To make the next conditionals work for keeping the numbers honest.
	if (choice == 1) {
		cout << "Please enter one number for the red ball." << endl;
		cout << "Your number should be between 1 and 25." << endl;
		cin >> Red;
		if (Red < 1 || Red > 25) {
			do{
				cout << "Invalid number." << endl << "Try again. Please enter a number." << endl;
				cin >>Red;
				if (Red >= 1 && Red <= 25){		//[CYB220] Third occurance of the problem in ISSUE #3
					j++;
				} else {
						cout << "No." <<endl;
				}
			} while (j==0);
		} 
	} else {
		cout << "Please enter one number for the red ball." << endl;
		cout << "Your number should be between 1 and 26." << endl;
		cin >> Red;		//[CYB220] This was the other line missing for proper powerball functionality. Together, this issue constitutes as ISSUE #1.
		if (Red < 1 || Red > 26) {
			do{
				cout << "Invalid number." << endl << "Try again. Please enter a number." << endl;
				cin >>Red;
				if (Red >= 1 && Red <= 26){		//[CYB220] Fourth occurance of the problem in ISSUE #3
					j++;
				} else {
						cout << "No. " << endl;
				}
			} while (j==0);
		}
		
	}
	cout << "You have chosen for the white balls the numbers: " << White[0]<< " " << White[1] << " " << White[2]<<" " <<White[3] << " " << White[4] << "." << endl<< endl;
	cout << "You have chosen for the red ball: " << Red << "."<<endl;
	cout << "-----------------------------------------" << endl << endl;
	if (choice == 1){
		// Shuffle MegaMillions white balls
		for (int i = 0; i < 70; i++){
			random = rand() % 70;
			int z; //temp variable
			z = MegaMilW[i];
			MegaMilW[i]=MegaMilW[random];
			MegaMilW[random]=z;
		}
		// Shuffle MegaMillions red balls
		for (int i = 0; i < 25; i++){
			random = rand() % 25;
			int z;
			z = MegaMilR[i];
			MegaMilR[i]=MegaMilR[random];
			MegaMilR[random]=z;
		}
	} else { //PowerBall array shuffle.
		// Shuffle PowerBall white balls
		for (int i =0; i <69; i++){
			random = rand() % 69;
			int z;
			z = PowerBallW[i];
			PowerBallW[i]=PowerBallW[random];
			PowerBallW[random] = z;	
		}
		// Shuffle PowerBall red balls
		for (int i = 0; i < 26; i++){
			random = rand() % 26;
			int z;
			z = PowerBallR[i];
			PowerBallR[i]=PowerBallR[random];
			PowerBallR[random]=z;
		}
	}

	cout << "********* Now the results are: **********" << endl;
	
	//check the first 5 elements of the array and compare them with the white balls
	if(choice == 1){
	  cout << "The winning white balls are: ";
	  for(int i=0; i<5;i++){
	    cout << MegaMilW[i] << " ";
	    if (White[0] == MegaMilW[i] || White[1] == MegaMilW[i]||White[2] == MegaMilW[i]|| White[3] == MegaMilW[i]|| White[4] == MegaMilW[i])
	      correctWhite++;
	  }
	  win_red = (rand()%25) + 1;	//[CYB220] This is the first part of ISSUE #2 – this is supposed to be a random number from 1-25, but modulo 25 returns a number 0-24. Adding one to the randomly generated number fixes the issue, returning a number 1-25.
	}
	else{
	  
	  cout << "The winning white balls are: ";
	  for(int i=0; i<5;i++){
	    cout << PowerBallW[i] << " ";
	    if (White[0] == PowerBallW[i] || White[1] == PowerBallW[i]||White[2] == PowerBallW[i]|| White[3] == PowerBallW[i]|| White[4] == PowerBallW[i])
	      correctWhite++;
	  }
	  win_red = (rand()%26) + 1;	//[CYB220] This is the second part of ISSUE #2 – this is supposed to be a random number from 1-26, but modulo 26 returns a number 0-25. Adding one to the randomly generated number fixes the issue, returning a number 1-26.
	}
	
	cout << "\n\nYou have " << correctWhite << " White balls matched!" <<endl;

	cout << "The winning red ball is: " << win_red << endl;
	cout << "The red ball you guessed: " << Red << endl;
	if (Red == win_red){
	  cout << "Your guessed correctly!" <<endl;
	}
	else {
	  cout << "You missed the red ball..." <<endl;
	}
	
	
	
	for(int i=0; i<70;i++){ // loop to see if shuffle worked.
		cout << MegaMilW[i] << " ";
	}
	cout << endl <<endl;
	return 0;
}


