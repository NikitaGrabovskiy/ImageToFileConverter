

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
  digitalWrite(2,HIGH);

//Second stepper
  digitalWrite(4,LOW);

     // initialize digital pins as outputs.
  pinMode(BRUSH_ACTUATOR_DIRECTION, OUTPUT);
  pinMode(BRUSH_ACTUATOR_PIN_1, OUTPUT);
  pinMode(BRUSH_ACTUATOR_PIN_2, OUTPUT);
  
  digitalWrite(BRUSH_ACTUATOR_DIRECTION, HIGH);
  
}

void loop() {

  //Run first stepper
  //digitalWrite(3,LOW);
 // digitalWrite(3,HIGH);

  //Run second stepper
 // digitalWrite(5,LOW);
  //digitalWrite(5,HIGH);

  //Speed stepper motor
 // delayMicroseconds(120);



moveBrush();

}



void moveBrush(){

  
   // retracts the actuator
  digitalWrite(BRUSH_ACTUATOR_PIN_1, LOW);
  digitalWrite(BRUSH_ACTUATOR_PIN_2, HIGH);

  int startTime = millis(); 
  while (millis() - startTime < 1000) { 
  }

  // extend the actuator
  digitalWrite(BRUSH_ACTUATOR_PIN_1, HIGH);
  digitalWrite(BRUSH_ACTUATOR_PIN_2, LOW);

    startTime = millis(); 
  while (millis() - startTime < 1000) { 
  }

    // extend the actuator
  digitalWrite(BRUSH_ACTUATOR_PIN_1, LOW);
  digitalWrite(BRUSH_ACTUATOR_PIN_2, LOW);

  }
