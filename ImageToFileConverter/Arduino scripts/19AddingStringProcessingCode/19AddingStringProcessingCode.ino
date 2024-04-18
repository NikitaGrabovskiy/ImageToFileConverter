#include <SPI.h>
#include <SD.h>

// Select the SD card's chip select line. Common values are 10, 4, or CS pin according to your shield or module.
const int chipSelect = 8;

void setup() {
  // Open serial communications and wait for the port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  Serial.print("Initializing SD card...");

  // See if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    Serial.println("Card failed, or not present");
    // Don't do anything more:
    while (1);
  }
  Serial.println("card initialized.");

  // Open up the file we're going to write to
  File file = SD.open("example.txt", FILE_WRITE);
  if (file) {
    Serial.println("Writing to file...");
    // Write to the file:
    file.println("Hello, SD card!");
    // Close the file:
    file.close();
    Serial.println("Done.");
  } else {
    // If the file didn't open, print an error:
    Serial.println("Error opening example.txt");
  }
}

void loop() {
  // nothing happens after setup finishes.
}
