import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import javax.imageio.ImageIO;

public class ImageDisplay extends JFrame {

    // TODO by priority :


        // Change github pass
        // Next thing - draw image from [][][][][] to test if it is working (one color random to see the lines)
        // Start motor
        // Create a code on microprocesser to run code















    private JLabel label;

    public ImageDisplay() {
        // Set up the JFrame
        setTitle("Image Display");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(800, 800);

        // Create a label to display the image
        label = new JLabel();
        add(label);

        // Choose the image file path
        String imagePath = "/Users/nikita/Desktop/Documents/BusinessIdeas/RobotArtist/Designs/1.jpg";

        // Read and display the image
        displayImage(imagePath);
    }

    private void displayImage(String imagePath) {
        try {
            // Read the image from the file
            BufferedImage image = ImageIO.read(new File(imagePath));


            image = resizeImage(image, 300, 300);
            //image = posterizeImage(image,3);

            ArrayList<Color> targetColors = new ArrayList<>();

            image = convertToClosestColors(image,StaticValues.main18Colors);

            // Set the image on the label
            label.setIcon(new ImageIcon(image));

        } catch (IOException e) {
            e.printStackTrace();
        }
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


}