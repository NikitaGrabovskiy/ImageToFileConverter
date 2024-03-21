
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                           GLOBAL CONSTANTS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const int BRUSH_ACTUATOR_DIRECTION = 11; 
const int BRUSH_ACTUATOR_PIN_1 = 10; 
const int BRUSH_ACTUATOR_PIN_2 = 9;

const float STEPS_IN_ONE_MM = 639.4604;



const int COLOR1_X = 330;
const int COLOR1_Y = 60;




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
long currentX = 0;
long currentY = 0;
//long currentX = 360;
//long currentY = 100;

void setup() {

  // first stepper
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);

  // second stepper
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);

     // initialize digital pins as outputs.
  pinMode(BRUSH_ACTUATOR_DIRECTION, OUTPUT);
  pinMode(BRUSH_ACTUATOR_PIN_1, OUTPUT);
  pinMode(BRUSH_ACTUATOR_PIN_2, OUTPUT);
}

void loop() {
if(stop){return;}

 //runStepper(1,400000,"DOWN");

delay(10000);

moveBrush(1000,"DOWN");
moveBrush(1000,"UP");

//singleMethodTomoveBrushToXYLocation(325, 10);
singleMethodTomoveBrushToXYLocation(325, 60);

moveBrush(4000,"DOWN");
moveBrush(4000,"UP");

singleMethodTomoveBrushToXYLocation(325, 20);

moveBrush(3000,"DOWN");
moveBrush(3000,"UP");

singleMethodTomoveBrushToXYLocation(150, 20);

moveBrush(3000,"DOWN");
moveBrush(3000,"UP");

//singleMethodTomoveBrushToXYLocation(325, 90);

moveBrush(3000,"DOWN");
moveBrush(3000,"UP");

stop = true;
cleanUp();
}

void cleanUp(){
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, INPUT);
  pinMode(BRUSH_ACTUATOR_DIRECTION, INPUT);
  pinMode(BRUSH_ACTUATOR_PIN_1, INPUT);
  pinMode(BRUSH_ACTUATOR_PIN_2, INPUT);
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//                PLACE FOR ALL THE UTIL METHODS 
//
//                
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

void singleMethodTomoveBrushToXYLocation(long newXCoordinate,long newYCoordinate){

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


  //            ACTIONS:

  // DEFAULT_POSITION
  // EXTEND_PAINT
  // EXTEND_CANVAS
  // EXTEND_WATER
  // BRUSH_VIBRATION
  // STABLE_BRUSH_CHANGE

void moveBrush(int time,String direction){
  if (direction.equals("UP")){
      digitalWrite(BRUSH_ACTUATOR_DIRECTION, LOW);
        // extend the actuator
      digitalWrite(BRUSH_ACTUATOR_PIN_1, HIGH);
      digitalWrite(BRUSH_ACTUATOR_PIN_2, LOW);
  } else if (direction.equals("DOWN")){
       digitalWrite(BRUSH_ACTUATOR_DIRECTION, HIGH);
        // retract the actuator
       digitalWrite(BRUSH_ACTUATOR_PIN_1, LOW);
       digitalWrite(BRUSH_ACTUATOR_PIN_2, HIGH);
  } 

     // How long actuator should run
     delay(time);

        // Stop the actuator
    digitalWrite(BRUSH_ACTUATOR_PIN_1, LOW);
    digitalWrite(BRUSH_ACTUATOR_PIN_2, LOW);
        // needed for DOWN only
    digitalWrite(BRUSH_ACTUATOR_DIRECTION, LOW);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
void moveBrushToXYLocation(long newXCoordinate,long newYCoordinate){
  
  long xDistance = getDistance(currentX,newXCoordinate);
  long yDistance = getDistance(currentY,newYCoordinate);

  String xDirection;
  String yDirection;

  if(xDistance>0){
    xDirection="UP";
  } else {
    xDirection="DOWN";
  }

  if(yDistance>0){
    yDirection="UP";
  } else {
    yDirection="DOWN";
  }


  // Test these 0 Scenarions
  
  if(xDistance == 0){
    runStepper(2,abs(yDistance),yDirection);
  }

  if(yDistance == 0){
    runStepper(1,abs(xDistance),xDirection);
  }

}


//UNUSED
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
long getDistance(long num1, long num2) {
  int direction = 0;
  
  if (num1 > num2) {
    direction = 1;
  } else if (num1 < num2) {
    direction = -1;
  } 

  return abs(num1 - num2)*direction;
}


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
