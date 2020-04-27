#define POTENTIOMETER 0
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

float analogValue;

void loop() {
  // put your main code here, to run repeatedly:
  analogValue = analogRead(POTENTIOMETER) * 5.0 / 1024.0; //Conversión para lectura de 5V
  Serial.println(analogValue);
  delay(500);
}
