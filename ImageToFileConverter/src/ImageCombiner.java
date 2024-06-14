import java.awt.Color;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.*;
import javax.imageio.ImageIO;

public class ImageCombiner {

    private static final List<Color> COLORS = new ArrayList<>();

    static {
        COLORS.add(new Color(253, 112, 112));    // 1 Light Red
        COLORS.add(new Color(201, 248, 201));    // 2 Light Green
        COLORS.add(new Color(134, 200, 248));    // 3 Light Blue
        COLORS.add(new Color(255, 150, 72));     // 4 Light Brown
        COLORS.add(new Color(243, 184, 232));    // 5 Light pink
        COLORS.add(new Color(169, 169, 169));    // 6 Light Grey
        COLORS.add(new Color(0, 255, 0));        // 7 Acid Green
        COLORS.add(new Color(255, 0, 0));        // 8 Acid Red
        COLORS.add(new Color(232, 0, 232));      // 9 Acid Purple
        COLORS.add(new Color(0, 0, 255));        // 10 Acid Blue
        COLORS.add(new Color(0, 255, 255));      // 11 Aqua
        COLORS.add(new Color(255, 215, 0));      // 12 Golden paint
        COLORS.add(new Color(176, 26, 26));      // 13 Red
        COLORS.add(new Color(0, 161, 0));        // 14 Green
        COLORS.add(new Color(34, 102, 250));     // 15 Blue
        COLORS.add(new Color(255, 165, 0));      // 16 Orange
        COLORS.add(new Color(141, 43, 141));     // 17 Purple
        COLORS.add(new Color(128, 128, 128));    // 18 Gray
        COLORS.add(new Color(139, 68, 19));      // 19 Brown
        COLORS.add(new Color(255, 255, 0));      // 20 Bright yellow
        COLORS.add(new Color(0, 168, 168));      // 21 Teal
        COLORS.add(new Color(166, 166, 0));      // 22 Olive
        COLORS.add(new Color(252, 122, 240));    // 23 Pink
        COLORS.add(new Color(91, 1, 1));         // 24 Dark Red
        COLORS.add(new Color(1, 93, 45));        // 25 Dark Green
        COLORS.add(new Color(86, 1, 86));        // 26 Dark purple
        COLORS.add(new Color(89, 89, 1));        // 27 Dark Olive
        COLORS.add(new Color(68, 35, 19));       // 28 Dark Brown
        COLORS.add(new Color(2, 84, 84));        // 29 Dark Teal
        COLORS.add(new Color(50, 50, 50));       // 30 Dark grey
        COLORS.add(new Color(5, 5, 93));         // 31 Navy
        COLORS.add(new Color(0, 0, 0));          // 32 Black
    }

    public static void main(String[] args) {
        // Source and target directories
        String sourceDir = "files/layersToCombine";
        String targetDir = "files/resultOfCombiningLayer";
        File dir = new File(sourceDir);

        if (!dir.isDirectory()) {
            System.err.println("The specified path is not a directory.");
            return;
        }

        // Read all images from the package in order
        File[] imageFiles = dir.listFiles((d, name) -> name.endsWith(".png") || name.endsWith(".jpg"));
        if (imageFiles == null || imageFiles.length == 0) {
            System.err.println("No image files found in the specified directory.");
            return;
        }

        // Sort files by name assuming names are in the format 1.png, 2.png, etc.
        Arrays.sort(imageFiles, (f1, f2) -> {
            int n1 = Integer.parseInt(f1.getName().replaceAll("\\D+", ""));
            int n2 = Integer.parseInt(f2.getName().replaceAll("\\D+", ""));
            return Integer.compare(n1, n2);
        });

        // Create a map to specify colors manually
        Map<Integer, Integer> imageColorMap = new HashMap<>();
        imageColorMap.put(1,6);
        imageColorMap.put(2,18);
        imageColorMap.put(3,17);
        imageColorMap.put(4,30);
        imageColorMap.put(5,32);
        // Add more mappings as needed

        try {
            // Assuming all images are of the same size
            BufferedImage firstImage = ImageIO.read(imageFiles[0]);
            int width = firstImage.getWidth();
            int height = firstImage.getHeight();
            BufferedImage combinedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);

            // Process each image and combine them in order
            for (int i = 0; i < imageFiles.length; i++) {
                File imageFile = imageFiles[i];
                BufferedImage image = ImageIO.read(imageFile);
                if (image != null) {
                    int imageIndex = i + 1;
                    int colorIndex = imageColorMap.getOrDefault(imageIndex, 0); // Default to 0 if not found
                    if (colorIndex > 0 && colorIndex <= COLORS.size()) {
                        Color color = COLORS.get(colorIndex - 1); // -1 to make it 0-based index
                        combineImage(combinedImage, image, color);
                    }
                }
            }

            // Save the combined image
            File output = new File(targetDir + "/combinedImage.png");
            ImageIO.write(combinedImage, "PNG", output);

            // Print the map
            for (Map.Entry<Integer, Integer> entry : imageColorMap.entrySet()) {
                System.out.println("Image " + entry.getKey() + " is colored with color " + entry.getValue());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void combineImage(BufferedImage baseImage, BufferedImage overlayImage, Color color) {
        int width = baseImage.getWidth();
        int height = baseImage.getHeight();

        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                int pixel = overlayImage.getRGB(x, y);
                if (isBlack(pixel)) {
                    baseImage.setRGB(x, y, color.getRGB());
                }
            }
        }
    }

    private static boolean isBlack(int pixel) {
        Color color = new Color(pixel, true);
        return color.getRed() == 0 && color.getGreen() == 0 && color.getBlue() == 0;
    }
}