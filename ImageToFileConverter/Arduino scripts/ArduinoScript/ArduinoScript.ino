
void setup() {

  // first stepper
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);

  // second stepper
  //pinMode(4, OUTPUT);
  //pinMode(5, OUTPUT);

// to control direction
  digitalWrite(2,LOW);
 // digitalWrite(4,HIGH);
}

void loop() {
  digitalWrite(3,LOW);
  digitalWrite(3,HIGH);
  //digitalWrite(5,LOW);
  //digitalWrite(5,HIGH);
  delayMicroseconds(60);
}
