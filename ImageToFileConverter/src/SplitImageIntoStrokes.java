
import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Random;


public class SplitImageIntoStrokes {

    private int totalNumberOfLines = 0;

    public int[][][] splitImage(BufferedImage image, ArrayList<Color> colors, ImageDisplay jFrame) {

        totalNumberOfLines = 0;

        System.out.println("Number of colors " + colors.size());

        // Make sure that colors are added in order
        int[][][] result = new int[colors.size()][][];

        for(int a = 0; a < colors.size(); a++){
            result [a] = new int [1][];
            result [a][0] = splitSingleColor(image,colors.get(a), jFrame);
        }

        System.out.println("totalNumberOfLines" + totalNumberOfLines);

        return result;
    }

    private int[] splitSingleColor(BufferedImage image, Color color, ImageDisplay jFrame) {

        Graphics graphics = image.getGraphics();

        ArrayList<int []> allLines = new ArrayList<>();

        int[] randomDotCoordinates = getRandomDotCoordinates(image, color.getRGB());
        //System.out.println("randomDotCoordinates" + randomDotCoordinates);
        while (randomDotCoordinates != null) {

            int[] line = drawRandomLine(randomDotCoordinates, image, color.getRGB(),graphics);
            allLines.add(line);
            randomDotCoordinates = getRandomDotCoordinates(image, color.getRGB());
            totalNumberOfLines++;
        }

        System.out.println("all lines" + allLines.size());

        Collections.sort(allLines, Comparator.comparingInt((int[] line) -> line[0]).thenComparingInt(line -> line[1]));


        return convertToFlatArray(allLines);
    }


    public static int[] getRandomDotCoordinates(BufferedImage image, int targetColor) {
        ArrayList<int[]> dots = new ArrayList<>();

        int width = image.getWidth();
        int height = image.getHeight();

        // Collect all the coordinates of pixels with the specified color
        for (int x = 0; x < width; x++) {
            for (int y = 0; y < height; y++) {
                int pixelColor = image.getRGB(x, y);

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


       // System.out.println("Dots"+dots.size());

        return randomDot;
    }

    public static int[] drawRandomLine(int[] startPoint, BufferedImage image, int targetColor,Graphics graphics) {
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
        if ((image.getRGB(startX, startY)) != targetColor) {
            // If not on the specified color, return null (failed to draw a line)
            return null;
        }

        // Incorrect !!!

        Random random = new Random();

        // Randomly choose one of the adjacent pixels
        int direction = random.nextInt(8);

        int oldEndX = endX;
        int oldEndY = endY;
        // Continue extending the line until a point off the specified color is reached
        while (image.getRGB(endX, endY) == targetColor) {

            oldEndX = endX;
            oldEndY = endY;

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

            if(endX<0 || endX >=width || endY<0 || endY >=height ){
                endX = oldEndX;
                endY = oldEndY;
                break;
            }
        }

        graphics.setColor(StaticValues.defaultColor);
        // Draw a dot at the current position
        graphics.drawLine(startX, startY, endX, endY);

        return new int[]{startX, startY, endX, endY};
    }

    private static int[] convertToFlatArray(ArrayList<int[]> lines) {
        int totalLength = lines.size() * 4; // Each line has 4 values
        int[] flatArray = new int[totalLength];

        int index = 0;
        for (int[] line : lines) {
            for (int value : line) {
                flatArray[index++] = value;
            }
        }

        return flatArray;
    }

}
