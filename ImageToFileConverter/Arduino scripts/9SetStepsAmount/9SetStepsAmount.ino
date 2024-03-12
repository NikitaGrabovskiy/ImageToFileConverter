const int BRUSH_ACTUATOR_DIRECTION = 11; 
const int BRUSH_ACTUATOR_PIN_1 = 10; 
const int BRUSH_ACTUATOR_PIN_2 = 9;

// TODO: 

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

  // Actuator location (Remove from here)
  digitalWrite(BRUSH_ACTUATOR_DIRECTION, LOW);
  
}

void loop() {
if(stop){return;}



//runStepper(1,200000,"DOWN");

runStepper(1,200000,"UP");

//runStepper(2,200000,"UP");



//runStepper(1,100000,"DOWN");
//runStepper(2,3000,"UP");
//runStepper(2,3000,"DOWN");

//moveBrush(1000,"UP");
//moveBrush(3000,"DOWN");








stop = true;




}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//                PLACE FOR ALL THE UTIL METHODS 
//
//                
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
    delayMicroseconds(100);
    }

}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
void moveBrush(int time,String direction){

  if (direction.equals("UP")){
      digitalWrite(BRUSH_ACTUATOR_DIRECTION, HIGH);
  } else if(direction.equals("DOWN")){
     digitalWrite(BRUSH_ACTUATOR_DIRECTION, LOW);
   }


  //            ACTIONS:

  // DEFAULT_POSITION
  // EXTEND_PAINT
  // EXTEND_CANVAS
  // EXTEND_WATER
  // BRUSH_VIBRATION
  // STABLE_BRUSH_CHANGE

   // retracts the actuator
  digitalWrite(BRUSH_ACTUATOR_PIN_1, LOW);
  digitalWrite(BRUSH_ACTUATOR_PIN_2, HIGH);

  int startTime = millis(); 
  while (millis() - startTime < time) { 
  }

  // extend the actuator
  digitalWrite(BRUSH_ACTUATOR_PIN_1, HIGH);
  digitalWrite(BRUSH_ACTUATOR_PIN_2, LOW);

    startTime = millis(); 
  while (millis() - startTime < time) { 
  }

    // Stop the actuator
  digitalWrite(BRUSH_ACTUATOR_PIN_1, LOW);
  digitalWrite(BRUSH_ACTUATOR_PIN_2, LOW);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                            DOCUMENTATION
//
//                
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                      1 step on stepper motor X and Y 
// 200000 (Two handred thousand) equals 31.27 sm. So 1 step equals 0.00015635 sm.

//                      Picture 9 inch size (Slighly more than actual size) 
//  23 sm 

//                      Picture 12 inch size (Slighly more than actual size)
//  30.6 sm 

//                      Image proportions : 23 X 30.6 are the same as  100 px X 133 px (1 X 1,33)

// paint brush size = 23/100 = 0,23 (same as 30.6/133)

// Steps for 1 brush stroke size is 0.23/0.00015635 = 1471 steps (for 100 px X 133 px image)
