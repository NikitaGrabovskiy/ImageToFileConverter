

// TODO: 

     // 1. Priority: Function that moves to any direction on board both axes at the same time
     // 1. Function that calculates parameters to run to a particular location from the current point
     // 1. Function that convert image code to instructions
     // 1. Add steps for update



     // LATER: 
     // 1. Later function that reads from image


const int BRUSH_ACTUATOR_DIRECTION = 11; 
const int BRUSH_ACTUATOR_PIN_1 = 10; 
const int BRUSH_ACTUATOR_PIN_2 = 9;

void setup() {

  // first stepper
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);

  // second stepper
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);

  // to control direction

  //First stepper
  digitalWrite(2,LOW);

  //Second stepper
  digitalWrite(4,LOW);

     // initialize digital pins as outputs.
  pinMode(BRUSH_ACTUATOR_DIRECTION, OUTPUT);
  pinMode(BRUSH_ACTUATOR_PIN_1, OUTPUT);
  pinMode(BRUSH_ACTUATOR_PIN_2, OUTPUT);

  // Actuator location
  digitalWrite(BRUSH_ACTUATOR_DIRECTION, LOW);
  
}

void loop() {


runStepper(1,3000,"DOWN");
runStepper(1,3000,"UP");
runStepper(2,3000,"UP");
runStepper(2,3000,"DOWN");

//moveBrush(1000,"UP");
//moveBrush(3000,"DOWN");

}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//                PLACE FOR ALL THE UTIL METHODS 
//
//                
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

void runStepper(int stepperNumber,int steps,String direction){

  
  int directionPin;
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

  for (int i = 0; i < steps; i++) {
    digitalWrite(controlPin,LOW);
    digitalWrite(controlPin,HIGH);
    delayMicroseconds(100);
    }

  //Speed stepper motor

}

  
//void runStepper(int stepperNumber,int steps,String direction){
  
  // Determine the direction pin based on the stepper number
  //int dirPin;
  //int controlPin;
  
  //if (stepperNumber == 1) {
    //dirPin = 2;
  //} else if (stepperNumber == 2) {
    //dirPin = 4;
  //}

  // Set the direction of rotation based on the provided direction
  //if (direction == "DOWN") {
    //digitalWrite(dirPin, LOW);
  //} else if (direction == "UP") {
    //digitalWrite(dirPin, HIGH);
  //}

  // Step the motor for the specified number of steps
  //for (int i = 0; i < steps; i++) {
    // Step pulse
    //digitalWrite(controlPin, LOW);
    //digitalWrite(controlPin, HIGH);
    //delayMicroseconds(60); 
  //}

//}

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
