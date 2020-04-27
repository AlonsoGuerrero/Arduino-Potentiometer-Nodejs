#define POTENTIOMETER 0
void setup() {
  Serial.begin(9600); //Inicialización del puerto serial
}

float analogValue; //Variable para almacenar la lectura analógica

void loop() {
  analogValue = analogRead(POTENTIOMETER) * 5.0 / 1024.0; //Conversión para lectura de 5V
  Serial.println(analogValue); //Escritura en el puerto serial
  delay(500); //Pausa de 500ms
}
