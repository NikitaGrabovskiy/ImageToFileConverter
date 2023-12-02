import javax.swing.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

public class ImageDisplay extends JFrame {

    private JLabel label;

    public ImageDisplay() {
        // Set up the JFrame
        setTitle("Image Display");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 400);

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

            image = createPosterizedImage(image);

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


    private BufferedImage createPosterizedImage(BufferedImage originalImage) {
        int width = originalImage.getWidth();
        int height = originalImage.getHeight();

        // Posterization factor (adjust as needed)
        int posterizationFactor = 2;

        BufferedImage posterizedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);

        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                // Get RGB values of the pixel
                int rgb = originalImage.getRGB(x, y);

                // Posterize the RGB values
                int posterizedRGB = posterizeColor(rgb, posterizationFactor);

                // Set the posterized color to the new image
                posterizedImage.setRGB(x, y, posterizedRGB);
            }
        }

        return posterizedImage;
    }

    private int posterizeColor(int rgb, int posterizationFactor) {
        int red = (rgb >> 16) & 0xFF;
        int green = (rgb >> 8) & 0xFF;
        int blue = rgb & 0xFF;

        // Apply posterization to each color component
        red = (red / posterizationFactor) * posterizationFactor;
        green = (green / posterizationFactor) * posterizationFactor;
        blue = (blue / posterizationFactor) * posterizationFactor;

        // Combine the posterized color components
        return (red << 16) | (green << 8) | blue;
    }


}