import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Random;

public class RandomImageConverter {

    public void generateRandomImages() {
      //  File sourceFolder = new File("/Users/nikita/Desktop/Projects/ImageToFileConverter/ImageToFileConverter/Documents/Designs/NewYork/Good/Vertical/selectedDesigns/");
        File sourceFolder = new File("/Users/nikita/Desktop/Projects/ImageToFileConverter/ImageToFileConverter/Documents/Designs/NewYork/Good/Horizontal/");
        File destinationFolder = new File("/Users/nikita/Desktop/randomlyGenerated");
       // File destinationDisplayFolder = new File("/Users/nikita/Desktop/display");
        Random random = new Random();

        // Ensure the destination folder exists
        if (!destinationFolder.exists()) {
            destinationFolder.mkdirs();
        }

        // Process all image files in the source directory
        File[] files = sourceFolder.listFiles();
        if (files != null) {
            for (File file : files) {
                if (isImage(file)) {
                    try {
                        BufferedImage originalImage = ImageIO.read(file);
                        BufferedImage modifiedImage = ImageDisplay.adjustRGBColors(originalImage,random.nextInt(100),random.nextInt(100),random.nextInt(100));
                      //  modifiedImage = ImageDisplay.resizeImage(modifiedImage, 120,160);
                        modifiedImage = ImageDisplay.resizeImage(modifiedImage, 160,120);
                        modifiedImage = ImageDisplay.convertToClosestColors(modifiedImage,StaticValues.perfectColors);
                        String fileName = ""+random.nextInt(999999999)+".jpg";
                        File outputFile = new File(destinationFolder, fileName);
                        ImageIO.write(modifiedImage, getFileExtension(file.getName()), outputFile);
                      //  System.out.println("Successfully saved !!!");

                        // Save to display
                      //  BufferedImage displayImage = ImageDisplay.magnifyPixels(modifiedImage, 4);
                       // File outputDisplayFile = new File(destinationDisplayFolder, fileName);
                      //  ImageIO.write(displayImage, getFileExtension(file.getName()), outputDisplayFile);

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }

    // Check if the file is an image based on the file extension
    private boolean isImage(File file) {
        String fileName = file.getName().toLowerCase();
        return fileName.endsWith(".png") || fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || fileName.endsWith(".bmp");
    }

    // Get the file extension
    private String getFileExtension(String fileName) {
        int lastIndexOf = fileName.lastIndexOf(".");
        if (lastIndexOf == -1) {
            return ""; // empty extension
        }
        return fileName.substring(lastIndexOf + 1);
    }

}
