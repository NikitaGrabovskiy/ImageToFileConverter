#include <SPI.h>
#include <SD.h>


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                           GLOBAL CONSTANTS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Put them in functions 
const float STEPS_IN_ONE_MM = 639.4604;
const String fileName = "image.txt";

// TODO: 

     // CONNECT every scrue with a stripe - so there is no way it getting lose or disconnected

            // !!!
     //1. ADD check for x length
     //1. ADD check to run XY only if brush is up
     //1. ADD check if X or Y is 0 for simontanious run
     //1. Add case if  x distance / y is one
     //1. Chant long to int where it is possible to save memory


     // 1. Priority: Function that moves to any direction on board both axes at the same time
     // 1. Function that calculates parameters to run to a particular location from the current point
     // 1. Function that convert image code to instructions
     // 1. Add steps for update

     // LATER: 
     // 1. Later function that reads from image

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                           GLOBAL VARIABLES
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

bool stop = false;
int currentX = 0;
int currentY = 0;
File myFile;
//long currentX = 360;
//long currentY = 100;

void setup() {

  Serial.begin(9600);

  // first stepper
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);

  // second stepper
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);

     // initialize actuator
  pinMode(6, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(9, OUTPUT);

  SD.begin(8);
}

void loop() {
if(stop){return;}


//runStepper(1,400000,"DOWN");
//delay(7000);



  myFile = SD.open(fileName);
  if (myFile) {
    Serial.println("open :"+fileName);

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
       Serial.println("TEST :");
      String line = readLine(myFile);
      Serial.println(line);
      processAndDraw(line);

    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening :"+fileName);
  }









//dipToColor(8);
//dipToColor(13);
//dipToColor(20);
//dipToColor(29);

//singleMethodTomoveBrushToXYLocation(1,1);

stop = true;
cleanUp();
}

void cleanUp(){
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, INPUT);
  pinMode(6, INPUT);
  pinMode(10, INPUT);
  pinMode(9, INPUT);
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//                PLACE FOR ALL THE UTIL METHODS 
//
//                
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

void singleMethodTomoveBrushToXYLocation(int newXCoordinate,int newYCoordinate){

  // Delay to prevent sudden move
  delayMicroseconds(100);

  long xDifference = newXCoordinate-currentX;
  long yDifference = newYCoordinate-currentY;

  // Check if there is no need for movement
  if(xDifference == 0 && yDifference == 0){
    return;
  }

  // Set directions
  if(xDifference>0){digitalWrite(2,HIGH);}
  else{digitalWrite(2,LOW);}
  if(yDifference>0){digitalWrite(4,HIGH);}
  else{digitalWrite(4,LOW);}






  // TODO : Add check if only one stepper needs to run
  




  // Get number of steps
  float xSteps = abs(xDifference)*STEPS_IN_ONE_MM;
  float ySteps = abs(yDifference)*STEPS_IN_ONE_MM;

  long totalSteps = max(xSteps,ySteps);

  float incrementForShorterDistance;
  int pinForLongerDistance;
  int pinForShorterDistance;

  if(xSteps != 0 && ySteps == 0){
         incrementForShorterDistance = totalSteps;
         pinForLongerDistance = 3;
         pinForShorterDistance = 5;
  } else if(ySteps != 0 && xSteps == 0){
         incrementForShorterDistance = totalSteps;
         pinForLongerDistance = 5;
         pinForShorterDistance = 3;
  } else if(xSteps>ySteps){
         incrementForShorterDistance = xSteps/ySteps;
         pinForLongerDistance = 3;
         pinForShorterDistance = 5;
      }else{
         incrementForShorterDistance = ySteps/xSteps;
         pinForLongerDistance = 5;
         pinForShorterDistance = 3;
      }
       
  float nextIncrement = 0;

  for (long i = 0; i < totalSteps; i++) {
      
    digitalWrite(pinForLongerDistance,LOW);
    digitalWrite(pinForLongerDistance,HIGH);
    
    if(i>nextIncrement){
    digitalWrite(pinForShorterDistance,LOW);
    digitalWrite(pinForShorterDistance,HIGH);
    nextIncrement+=incrementForShorterDistance;
    }

   delayMicroseconds(100);
  }

  currentX = newXCoordinate;
  currentY = newYCoordinate;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

void dipToColor(short colorNumber){

int paintDip = 4000;

int colorRow1 = 320;
int colorRow2 = 355;
int colorRow3 = 400;
int colorRow4 = 440; 

int colorColumn1 = 60;
int colorColumn2 = 90;
int colorColumn3 = 130;
int colorColumn4 = 170;
int colorColumn5 = 205;
int colorColumn6 = 240;
int colorColumn7 = 270;
int colorColumn8 = 310;

int xCoordinate;
int yCoordinate;

if( colorNumber <= 8 ){
  xCoordinate = colorRow1;
} else if( colorNumber > 8 && colorNumber <= 16){
  xCoordinate = colorRow2;
} else if( colorNumber > 16 && colorNumber <= 24){
  xCoordinate = colorRow3;
} else if( colorNumber > 24){
  xCoordinate = colorRow4;
}

if( colorNumber == 1 || colorNumber == 9 || colorNumber == 17 || colorNumber == 25 ){
  yCoordinate = colorColumn1;
} else if( colorNumber == 2 || colorNumber == 10 || colorNumber == 18 || colorNumber == 26 ){
  yCoordinate = colorColumn2;
} else if( colorNumber == 3 || colorNumber == 11 || colorNumber == 19 || colorNumber == 27 ){
  yCoordinate = colorColumn3;
} else if( colorNumber == 4 || colorNumber == 12 || colorNumber == 20 || colorNumber == 28 ){
  yCoordinate = colorColumn4;
} else if( colorNumber == 5 || colorNumber == 13 || colorNumber == 21 || colorNumber == 29 ){
  yCoordinate = colorColumn5;
} else if( colorNumber == 6 || colorNumber == 14 || colorNumber == 22 || colorNumber == 30 ){
  yCoordinate = colorColumn6;
} else if( colorNumber == 7 || colorNumber == 15 || colorNumber == 23 || colorNumber == 31 ){
  yCoordinate = colorColumn7;
} else if( colorNumber == 8 || colorNumber == 16 || colorNumber == 24 || colorNumber == 32 ){
  yCoordinate = colorColumn8;
} 

singleMethodTomoveBrushToXYLocation(xCoordinate,yCoordinate);

moveBrush(paintDip,"DOWN");
moveBrush(paintDip,"UP");

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


  //            ACTIONS:

  // DEFAULT_POSITION
  // EXTEND_PAINT
  // EXTEND_CANVAS
  // EXTEND_WATER
  // BRUSH_VIBRATION
  // STABLE_BRUSH_CHANGE

void moveBrush(int time,String direction){
  if (direction.equals("UP")){
      digitalWrite(6, LOW);
        // extend the actuator
      digitalWrite(10, HIGH);
      digitalWrite(9, LOW);
  } else if (direction.equals("DOWN")){
       digitalWrite(6, HIGH);
        // retract the actuator
       digitalWrite(10, LOW);
       digitalWrite(9, HIGH);
  } 

     // How long actuator should run
     delay(time);

        // Stop the actuator
    digitalWrite(10, LOW);
    digitalWrite(9, LOW);
        // needed for DOWN only
    digitalWrite(6, LOW);
}


                   // METHODS FOR DEBUGGIN
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
void runStepper(int stepperNumber,long steps,String direction){

  // to control direction
  //First stepper
  //digitalWrite(2,LOW);
  //Second stepper
  //digitalWrite(4,LOW);
  int directionPin;

  // To run stepper
  int controlPin;
  
 if (stepperNumber == 1) {
    directionPin = 2;
    controlPin = 3;
  } else if (stepperNumber == 2) {
    directionPin = 4;
    controlPin = 5;
  }

  if(direction.equals("DOWN")){ digitalWrite(directionPin,LOW); }
  else if (direction.equals("UP")){ digitalWrite(directionPin,HIGH); }

  for (long i = 0; i < steps; i++) {
    digitalWrite(controlPin,LOW);
    digitalWrite(controlPin,HIGH);
    delayMicroseconds(85);
    }

}


void drawLine(int x1, int y1) {
    Serial.println(x1);
    Serial.println(", ");
    Serial.println(y1);
}

String* split(const String &s, char delimiter, int &count) {
    count = 0; // Reset count
    int length = s.length();
    for (int i = 0; i < length; i++) {
        if (s.charAt(i) == delimiter) {
            count++;
        }
    }
    // There will be count+1 tokens
    String *tokens = new String[count + 1];
    int tokenIndex = 0;
    int startIndex = 0;

    for (int i = 0; i <= length; i++) {
        if (i == length || s.charAt(i) == delimiter) {
            tokens[tokenIndex++] = s.substring(startIndex, i);
            startIndex = i + 1;
        }
    }
    count = tokenIndex; // Update count to actual number of tokens
    return tokens;
}

void processAndDraw(const String &input) {
    int pairCount = 0;
    String* pairs = split(input, ',', pairCount);
    Serial.println(pairCount);
    Serial.println("Before iterator pairCount"+pairCount);
    for (int j = 0; j < pairCount; j++) {
        Serial.println("inside loop j = ");
        
        int pointCount = 0;
        String* points = split(pairs[j], '-', pointCount);

        Serial.println("pointCount = ");
        Serial.print(pointCount);
        if (pointCount != 2) continue; // Ensure we have a complete pair

        // Convert string coordinates to integers and call drawLine
        int x1 = points[0].toInt();
        int y1 = points[1].toInt();
        Serial.print("Drawing line method");
        drawLine(x1, y1);

        delete[] points; // Clean up dynamically allocated memory
    }

    delete[] pairs; // Clean up dynamically allocated memory
}




String readLine(File &file) {
    String line = "";
    while (file.available()) {
        char c = file.read(); // Read a byte from the file
        if (c == '\n') {
            break; // Stop at the end of the line
        }
        line += c; // Append the byte to the line
    }
    return line;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                            DOCUMENTATION
//
//                
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                      1 step on stepper motor X and Y 
// 200000 (Two handred thousand) equals 31.27 sm (312.7 mm). So 1 step equals 0.0015635 mm. 1 mm = 639.4604 steps.

//                      Picture 9 inch size (Slighly more than actual size) 
//  23 sm 

//                      Picture 12 inch size (Slighly more than actual size)
//  30.6 sm 

//                      Image proportions : 23 X 30.6 are the same as  100 px X 133 px (1 X 1,33)

// paint brush size = 23/100 = 0,23 (same as 30.6/133)

// Steps for 1 brush stroke size is 0.23/0.00015635 = 1471 steps (for 100 px X 133 px image)

// all the steps in the program and on board coordinates will be in millimetors and will be converted to steps internally.
