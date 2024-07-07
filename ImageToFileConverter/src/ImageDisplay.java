import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

public class ImageDisplay extends JFrame {

    //  For sure make a method that will show all painting process line by line - to be able to see all mistakes

    // TODO by priority :

    // Make it generate 50 different options for the same image with different tints and colors and choose the test
    // And generate corresponding array

        // Skip white
        // Change github pass
        // Сделать разный нажим  чтобы не было вида механических линий
        // Calculate how many lines needs to be drawn


    /*
   TODO different ways to split image into colors:
   1. Make threshold with random colors
   1. Find cloases color by red, green or blue (Randomly) - if colors are equal - check the second largest color
   1. Make slight change colors (increase by 1 or decrease by 1) when in with or langth (Good for pictures with monotinic colors)

*/

/*
   TODO later:
     1.  find a square that cover area of one color only and use to to find smaller square
     for large strokes only and dra 2 lines on left right or top bottom depends on directions -
     1.  And a small spray pipe that will randomly spray light gray or light brown colors on brach -
      this way I can get a different tints of colors
     1.
*/


    public JLabel getLabel() {
        return label;
    }

    public void setLabel(JLabel label) {
        this.label = label;
    }

    public JLabel label;

    public ImageDisplay() {
        // Set up the JFrame
        setTitle("Image Display");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(1200, 1200);
        // Create a label to display the image
        label = new JLabel();
        add(label);


/*        RandomImageConverter randomImageConverter = new RandomImageConverter();
        for(int x = 0;x<50;x++){
                randomImageConverter.generateRandomImages();
        }*/


        int imageNumber =7;
        //Choose the image file path
        String imagePath = "/Users/nikita/Desktop/Projects/ImageToFileConverter/ImageToFileConverter/Documents/Designs/NewYork/Good/TODO/Converted/WithoutDots120by160/";
        // String imagePath = "/Users/nikita/Desktop/Projects/ImageToFileConverter/ImageToFileConverter/Documents/Designs/NewYork/Good/TODO/Converted/WithoutDots100by133/TODO/";
        //String imagePath = "/Users/nikita/Desktop/Projects/ImageToFileConverter/ImageToFileConverter/Documents/Designs/NewYork/";
        //String imagePath = "/Users/nikita/Desktop/Projects/ImageToFileConverter/ImageToFileConverter/Documents/Designs/NewYork/ready/";

        BufferedImage image = Util.getImageFromFile(imagePath,imageNumber);


        // Read and display the image
        displayImage(image);
    }

    private void displayImage(BufferedImage image) {


        image = resizeImage(image, 120, 160);

           // image = resizeImage(image, 100, 133);
     //   image = resizeImage(image, 133, 100);

     //  image = resizeImage(image, 80,106);
       // image = resizeImage(image, 106, 80);

           // image = posterizeImage(image,16);

            //image = invertColors(image);
      // image = adjustRGBColors(image,0,40,0);
        image = convertToClosestColors(image,StaticValues.perfectColors);

            SplitImageIntoStrokes splitImageIntoStrokes = new SplitImageIntoStrokes();

            String lines = splitImageIntoStrokes.splitImage(image,StaticValues.perfectColors,this);

           // lines.replace("\n\n","\n");

        //lines = lines.replace("C18","C32");
       // lines = lines.replace("C30","C32");
       // lines = lines.replace("C30","C31");

        //lines = lines.replace("C6","C18");

          image = ImageDrawerFromString.drawImageFromString(lines,image.getWidth(),image.getHeight(),StaticValues.perfectColors);

           image = magnifyPixels(image,6);

        String readyCode = lines.replace("L", "");
         System.out.println(readyCode);

        try {
            String filePath = "/Users/nikita/Desktop/1.txt";
            Files.write(Paths.get(filePath), readyCode.trim().getBytes(StandardCharsets.UTF_8));
        } catch (Exception e) {
            e.printStackTrace();
        }

        //System.out.println(lines);

        // Set the image on the label
            label.setIcon(new ImageIcon(image));

    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new ImageDisplay().setVisible(true);
        });
    }

    public static BufferedImage resizeImage(BufferedImage originalImage, int newWidth, int newHeight) {
        Image resultingImage = originalImage.getScaledInstance(newWidth, newHeight, Image.SCALE_DEFAULT);

        // Create a blank image with the new dimensions
        BufferedImage resizedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_ARGB);

        // Draw the scaled instance onto the new image
        Graphics2D g2d = resizedImage.createGraphics();
        g2d.drawImage(resultingImage, 0, 0, null);
        g2d.dispose();

        return resizedImage;
    }

    public static BufferedImage convertToClosestColors(BufferedImage originalImage, ArrayList<Color> targetColors) {
        int width = originalImage.getWidth();
        int height = originalImage.getHeight();

        BufferedImage convertedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);

        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                Color originalColor = new Color(originalImage.getRGB(x, y));
                Color closestColor = findClosestColor(originalColor, targetColors);

                convertedImage.setRGB(x, y, closestColor.getRGB());
            }
        }

        return convertedImage;
    }

    private static Color findClosestColor(Color targetColor, ArrayList<Color> colorList) {
        double minDistance = Double.MAX_VALUE;
        Color closestColor = null;

        for (Color candidateColor : colorList) {



/*            if(candidateColor.equals(StaticValues.perfectColors.get(2))){
                continue;
            }*/

            double distance = calculateColorDistance(targetColor, candidateColor);

            if (distance < minDistance) {
                minDistance = distance;
                closestColor = candidateColor;
            }
        }

        return closestColor;
    }

    private static double calculateColorDistance(Color color1, Color color2) {
        int redDiff = color1.getRed() - color2.getRed();
        int greenDiff = color1.getGreen() - color2.getGreen();
        int blueDiff = color1.getBlue() - color2.getBlue();

        return Math.sqrt(redDiff * redDiff + greenDiff * greenDiff + blueDiff * blueDiff);
    }

    public static BufferedImage magnifyPixels(BufferedImage originalImage, int squareSize) {
        int originalWidth = originalImage.getWidth();
        int originalHeight = originalImage.getHeight();

        int magnifiedWidth = originalWidth * squareSize;
        int magnifiedHeight = originalHeight * squareSize;

        BufferedImage magnifiedImage = new BufferedImage(magnifiedWidth, magnifiedHeight, BufferedImage.TYPE_INT_ARGB);

        for (int y = 0; y < originalHeight; y++) {
            for (int x = 0; x < originalWidth; x++) {
                int rgb = originalImage.getRGB(x, y);

                // Draw a square for each pixel
                for (int i = 0; i < squareSize; i++) {
                    for (int j = 0; j < squareSize; j++) {
                        int newX = x * squareSize + i;
                        int newY = y * squareSize + j;

                        magnifiedImage.setRGB(newX, newY, rgb);
                    }
                }
            }
        }

        return magnifiedImage;
    }


    public BufferedImage posterizeImage(BufferedImage originalImage, int layers) {
        // Ensure layers are within a valid range
        layers = Math.max(layers, 1); // At least 1 layer
        int width = originalImage.getWidth();
        int height = originalImage.getHeight();

        // Create a new BufferedImage to hold the posterized image
        BufferedImage posterizedImage = new BufferedImage(width, height, originalImage.getType());

        // Calculate the adjustment factor based on the number of layers
        int adjustmentFactor = 256 / layers;

        // Process each pixel of the original image
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                Color originalColor = new Color(originalImage.getRGB(x, y));

                // Calculate the new color levels for each channel based on the number of layers
                int red = (originalColor.getRed() / adjustmentFactor) * adjustmentFactor;
                int green = (originalColor.getGreen() / adjustmentFactor) * adjustmentFactor;
                int blue = (originalColor.getBlue() / adjustmentFactor) * adjustmentFactor;

                // Apply the new color to the posterized image
                Color posterizedColor = new Color(red, green, blue);
                posterizedImage.setRGB(x, y, posterizedColor.getRGB());
            }
        }

        return posterizedImage;
    }

    public static BufferedImage invertColors(BufferedImage originalImage) {
        int width = originalImage.getWidth();
        int height = originalImage.getHeight();

        // Create a new BufferedImage to hold the inverted colors
        BufferedImage invertedImage = new BufferedImage(width, height, originalImage.getType());

        // Iterate over each pixel to invert the colors
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                int originalPixel = originalImage.getRGB(x, y);
                Color originalColor = new Color(originalPixel, true);

                // Invert the RGB values
                int red = 255 - originalColor.getRed();
                int green = 255 - originalColor.getGreen();
                int blue = 255 - originalColor.getBlue();
                int alpha = originalColor.getAlpha(); // Preserve the original alpha value

                Color invertedColor = new Color(red, green, blue, alpha);
                invertedImage.setRGB(x, y, invertedColor.getRGB());
            }
        }

        return invertedImage;
    }

    public static BufferedImage adjustRGBColors(BufferedImage originalImage, int redAdjust, int greenAdjust, int blueAdjust) {
        int width = originalImage.getWidth();
        int height = originalImage.getHeight();

        // Create a new BufferedImage to hold the adjusted colors
        BufferedImage adjustedImage = new BufferedImage(width, height, originalImage.getType());

        // Iterate over each pixel to adjust the RGB values separately
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                Color originalColor = new Color(originalImage.getRGB(x, y), true);

                // Adjust each RGB value, ensuring they remain within [0, 255]
                int red = Math.min(Math.max(originalColor.getRed() + redAdjust, 0), 255);
                int green = Math.min(Math.max(originalColor.getGreen() + greenAdjust, 0), 255);
                int blue = Math.min(Math.max(originalColor.getBlue() + blueAdjust, 0), 255);

                // Create the new color with adjusted RGB and original alpha, then set it
                Color adjustedColor = new Color(red, green, blue, originalColor.getAlpha());
                adjustedImage.setRGB(x, y, adjustedColor.getRGB());
            }
        }

        return adjustedImage;
    }
}