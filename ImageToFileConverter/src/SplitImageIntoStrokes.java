
import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.ArrayList;
import java.util.Random;

public class SplitImageIntoStrokes {

    // This method returns a 1 dimentional array -
    // 1 color number
    // 2 brush number
    // 3 represents line number
    // 4 represent start X [0] and start Y [1]
    // 5 represent end X [0] and end Y [1]

    public int[][][][][] splitImage(BufferedImage image, ArrayList<Color> colors) {

        // Make sure that colors are added in order

        int[][][][][] result = new int[colors.size()][][][][];

        for(int a = 0; a < colors.size(); a++){
            result [a] [0] = splitSingleColor(image,colors.get(0));
        }

        return result;
    }

    private int[][][] splitSingleColor(BufferedImage image, Color color) {

        ArrayList<int[][]> allLines = new ArrayList<>();

        while (getRandomDotCoordinates(image, color.getRGB()) != null) {
            int[] randomDot = getRandomDotCoordinates(image, color.getRGB());
            int[][] line = drawRandomLine(randomDot, image, color.getRGB());
            allLines.add(line);

        }

        return listTo3DArray(allLines);
    }


    public static int[] getRandomDotCoordinates(BufferedImage image, int targetColor) {
        ArrayList<int[]> dots = new ArrayList<>();

        int width = image.getWidth();
        int height = image.getHeight();

        // Collect all the coordinates of pixels with the specified color
        for (int x = 0; x < width; x++) {
            for (int y = 0; y < height; y++) {
                int pixelColor = image.getRGB(x, y) & 0xFFFFFF; // Ignore alpha channel

                if (pixelColor == targetColor) {
                    int[] coordinates = {x, y};
                    dots.add(coordinates);
                }
            }
        }

        if (dots.isEmpty()) {
            // No pixels with the specified color found
            return null;
        }

        // Randomly select a dot
        Random random = new Random();
        int[] randomDot = dots.get(random.nextInt(dots.size()));

        return randomDot;
    }

    public static int[][] drawRandomLine(int[] startPoint, BufferedImage image, int targetColor) {
        int width = image.getWidth();
        int height = image.getHeight();

        int startX = startPoint[0];
        int startY = startPoint[1];

        if (startX < 0 || startX >= width || startY < 0 || startY >= height) {
            // Invalid starting point
            return null;
        }

        // Initialize the end point as the starting point
        int endX = startX;
        int endY = startY;

        // Check if the starting point is on the specified color
        if ((image.getRGB(startX, startY) & 0xFFFFFF) != targetColor) {
            // If not on the specified color, return null (failed to draw a line)
            return null;
        }

        // Draw the line on the image
        Graphics2D g2d = (Graphics2D) image.getGraphics();
        g2d.setColor(new Color(targetColor));

        Random random = new Random();

        // Continue extending the line until a point off the specified color is reached
        while (image.getRGB(endX, endY) == targetColor) {
            // Draw a dot at the current position
            g2d.drawLine(endX, endY, endX, endY);

            // Randomly choose one of the adjacent pixels
            int direction = random.nextInt(8); // 8 possible directions (top, bottom, left, right, and diagonals)

            switch (direction) {
                case 0 -> endY--; // Up
                case 1 -> endY++; // Down
                case 2 -> endX--; // Left
                case 3 -> endX++; // Right
                case 4 -> {
                    endX--;
                    endY--;
                } // Up-Left
                case 5 -> {
                    endX++;
                    endY--;
                } // Up-Right
                case 6 -> {
                    endX--;
                    endY++;
                } // Down-Left
                case 7 -> {
                    endX++;
                    endY++;
                } // Down-Right
            }

            // Ensure the new position is within the image bounds
            endX = Math.max(0, Math.min(endX, width - 1));
            endY = Math.max(0, Math.min(endY, height - 1));
        }

        // Return the line coordinates

        g2d = (Graphics2D) image.getGraphics();
        g2d.setColor(StaticValues.defaultColor);

        return new int[][]{{startX, startY}, {endX, endY}};
    }

    public int[][][] listTo3DArray(ArrayList<int[][]> list) {
        int size = list.size();
        int[][][] array3D = new int[size][][];

        for (int i = 0; i < size; i++) {
            array3D[i] = list.get(i);
        }
        return array3D;
    }

}
