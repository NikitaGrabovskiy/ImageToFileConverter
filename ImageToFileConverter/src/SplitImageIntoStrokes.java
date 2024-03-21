
import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Random;


public class SplitImageIntoStrokes {

/*    TODO - change to use 10 lines at a time - so it will only contain 10 points that needs
    to be connected one after another - this way we need to put 2 time less numbers

    Format should be just
    C1DL12-15,43-22L55-5100D,P20,P21,C2 12,13,22

    C1 - color number
    L - single line - paint without lifting brush
    D - new pait dip required
    P - draw a single point

    No need to mention colors that are not precent

    All the single dots needs to be marked as P12 and they should be as close as possibe to one another and will be
    painted at the end or at the beginning

    The should be limit to number of combined line length

    L - mean line

    Amount of points that can be painted at one time will be controlled on arduino
    */



    public String splitImage(BufferedImage image, ArrayList<Color> colors, ImageDisplay jFrame) {

        System.out.println("Number of colors " + colors.size());

        StringBuffer result = new StringBuffer();

        for(int a = 0; a < colors.size(); a++){
             result.append(splitSingleColor(image,colors.get(a),a, jFrame));
        }

        return result.toString();
    }

    private int[] splitSingleColor(BufferedImage image, Color color, int colorNumber, ImageDisplay jFrame) {

        int maxDipLength = 50;
        Graphics graphics = image.getGraphics();

        StringBuffer linesAndDotsForASingleColor = new StringBuffer("C"+colorNumber+"D");
        StringBuffer singleLine = new StringBuffer("L");
        int dipLength = 0;
        int [] previousCoordinates = getRandomDotCoordinates(image, color.getRGB());

        //ArrayList<int []> allLines = new ArrayList<>();

        while (true) {    ///  Change this condition

            int[] line = drawRandomLine(new int[]{previousCoordinates[2],previousCoordinates[3]}, image, color.getRGB(),graphics);

            if(line == null){
                linesAndDotsForASingleColor.append(singleLine);
                previousCoordinates = getRandomDotCoordinates(image, color.getRGB());
                if (previousCoordinates == null){
                    break;
                }
                singleLine = new StringBuffer("L"+previousCoordinates[2]+"-"+previousCoordinates[3]);
                continue;
            }

            dipLength+=calculateLengthOfLine(line);

            if(dipLength > maxDipLength){
                linesAndDotsForASingleColor.append("D");
                singleLine = null;
            }

            //singleLine.append(line[0]+"-"+line[1]+","+line[2]+"-"+line[3]);

            singleLine.append(","+line[2]+"-"+line[3]);
            previousCoordinates = line;

            //STORE SINGLE DOTS IN AN ARRAY AND DRAW THEM AT THE END (Or attach them in the beggining)

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

        return new int[]{0, 0, randomDot[0], randomDot[1]};
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

    public int calculateLengthOfLine(int[] line) {
        // Calculate the length as a double
        double length = Math.sqrt(Math.pow(line [2] - line[0], 2) + Math.pow(line[3] - line[1], 2));
        // Return the length as an integer (rounded)
        return (int) Math.round(length);
    }

}
