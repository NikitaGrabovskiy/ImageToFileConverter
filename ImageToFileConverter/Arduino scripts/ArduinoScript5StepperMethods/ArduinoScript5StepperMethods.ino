
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



runStepper(1,3000,"UP");

runStepper(2,3000,"UP");

//moveBrush(3000,"UP");
//moveBrush(3000,"DOWN");

}













//
//
//
//                PLACE FOR ALL THE UTIL METHODS 
//
//                
//
//


void runStepper(int stepperNumber,int time,String direction){

  
  if(stepperNumber == 1){
    digitalWrite(3,LOW);
    digitalWrite(3,HIGH);
  } else if(stepperNumber == 2){
    digitalWrite(5,LOW);
    digitalWrite(5,HIGH);
  }

  int startTime = millis(); 
 // while (millis() - startTime < time) { 
        delayMicroseconds(60);
  //}

   

  //Speed stepper motor


  
}





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
