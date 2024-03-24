import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
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

        int imageNumber = 30;

        // Choose the image file path
        String imagePath = "/Users/nikita/Desktop/Projects/ImageToFileConverter/ImageToFileConverter/Documents/Designs/";

        BufferedImage image = Util.getImageFromFile(imagePath,imageNumber);

        // Read and display the image
        displayImage(image);
    }

    private void displayImage(BufferedImage image) {

            image = resizeImage(image, 100, 133);
            //image = posterizeImage(image,3);

            image = convertToClosestColors(image,StaticValues.perfectColors);

            SplitImageIntoStrokes splitImageIntoStrokes = new SplitImageIntoStrokes();

            String lines = splitImageIntoStrokes.splitImage(image,StaticValues.perfectColors,this);


            // Change after refactoring
          //  print3DArray(lines);
         //   image = ImageDrawerFromArrayOfLines.drawImageFromArrays(lines,image.getWidth(),image.getHeight(),StaticValues.perfectColors);


           image = magnifyPixels(image,4);

            // Set the image on the label
            label.setIcon(new ImageIcon(image));

    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new ImageDisplay().setVisible(true);
        });
    }



    public BufferedImage resizeImage(BufferedImage originalImage, int newWidth, int newHeight) {
        Image resultingImage = originalImage.getScaledInstance(newWidth, newHeight, Image.SCALE_DEFAULT);

        // Create a blank image with the new dimensions
        BufferedImage resizedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_ARGB);

        // Draw the scaled instance onto the new image
        Graphics2D g2d = resizedImage.createGraphics();
        g2d.drawImage(resultingImage, 0, 0, null);
        g2d.dispose();

        return resizedImage;
    }

    public BufferedImage convertToClosestColors(BufferedImage originalImage, ArrayList<Color> targetColors) {
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

    private Color findClosestColor(Color targetColor, ArrayList<Color> colorList) {
        double minDistance = Double.MAX_VALUE;
        Color closestColor = null;

        for (Color candidateColor : colorList) {
            double distance = calculateColorDistance(targetColor, candidateColor);

            if (distance < minDistance) {
                minDistance = distance;
                closestColor = candidateColor;
            }
        }

        return closestColor;
    }

    private double calculateColorDistance(Color color1, Color color2) {
        int redDiff = color1.getRed() - color2.getRed();
        int greenDiff = color1.getGreen() - color2.getGreen();
        int blueDiff = color1.getBlue() - color2.getBlue();

        return Math.sqrt(redDiff * redDiff + greenDiff * greenDiff + blueDiff * blueDiff);
    }

    public static void print3DArray(int[][][] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.println("Array " + i + ":");
            for (int j = 0; j < array[i].length; j++) {
                System.out.print("  Inner Array " + j + ": [");
                for (int k = 0; k < array[i][j].length; k++) {
                    System.out.print(array[i][j][k]);
                    if (k < array[i][j].length - 1) {
                        System.out.print(", ");
                    }
                }
                System.out.println("]");
            }
        }
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


}