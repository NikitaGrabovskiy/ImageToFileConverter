
import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.*;
import java.util.List;


public class SplitImageIntoStrokes {

/*    TODO - change to use 10 lines at a time - so it will only contain 10 points that needs
    to be connected one after another - this way we need to put 2 time less numbers

    Format should be just
    C1DL12-15,43-22L55-5100D,P20,21,C2 12,13,22

    C1 - color number
    L - single line - paint without lifting brush
    D - new pait dip required
    P - indicates that the rest of coordinates are single points

    No need to mention colors that are not precent

    All the single dots needs to be marked as P12 and they should be as close as possibe to one another and will be
    painted at the end or at the beginning

    The should be limit to number of combined line length

    L - mean line

    Amount of points that can be painted at one time will be controlled on arduino
    */


    public String splitImage(BufferedImage image, ArrayList<Color> colors, ImageDisplay jFrame) {

        //  System.out.println("Number of colors " + colors.size());

        StringBuffer result = new StringBuffer();

        int count = 0;
        for (int a = 0; a < colors.size(); a++) {

            // Skip white color
            if(a == 0){
                continue;
            }

            result.append(splitSingleColorSimplified(image, colors.get(a), a, jFrame));
/*            count++;
            if(count>20){
                break;
            }*/
        }

        System.out.println(result);
        return result.toString();
    }

/*
    private String splitSingleColor(BufferedImage image, Color color, int colorNumber, ImageDisplay jFrame) {

        int[] previousCoordinates = getRandomDotCoordinates(image, color.getRGB());

        if (previousCoordinates == null) {
            return "";
        }

        int maxDipLength = 50;
        Graphics graphics = image.getGraphics();

        StringBuffer linesAndDotsForASingleColor = new StringBuffer("C" + colorNumber);

        int dipLength = 0;

        StringBuffer singleLine = new StringBuffer("L");

        ArrayList<int[]> listOfDots = new ArrayList<>();

        int countOfGeneratedLines = 0;
        int countOfAttachedLines = 0;

        while (true) {

            int[] line = findLongestPossibleLine(new int[]{previousCoordinates[0], previousCoordinates[1]}, image, color.getRGB(), graphics);

           // System.out.println(calculateLengthOfLine(line));

            if (line != null && calculateLengthOfLine(line) != 0) {
                dipLength += calculateLengthOfLine(line);
                if (dipLength > maxDipLength) {
                    // linesAndDotsForASingleColor.append(singleLine);
                    singleLine.append("D");
                    dipLength = 0;
                }
            }

            if (line != null) {
                countOfGeneratedLines++;
                previousCoordinates = getNearPixelWithTheSameColor(new int[]{line[0], line[1]}, image, color.getRGB());
            }

            if (line == null || calculateLengthOfLine(line) == 0 || previousCoordinates == null) {

                if (calculateLengthOfLine(line) == 0) {

                    if (line[0] != line[2] || line[1] != line[3]) {
                        throw new RuntimeException("It is not a dot");
                    }
                    System.out.println("INSIDE ADD DOT");
                    listOfDots.add(line);
                } else if (line != null) {
                    countOfAttachedLines++;
                    singleLine.append("," + line[2] + "-" + line[3]);
                }
                linesAndDotsForASingleColor.append(singleLine);
                previousCoordinates = getRandomDotCoordinates(image, color.getRGB());
                if (previousCoordinates == null) {
                    break;
                }

                singleLine = new StringBuffer("L" + previousCoordinates[0] + "-" + previousCoordinates[1]);
                continue;
            }

            //System.out.println(calculateLengthOfLine(line));

            if (singleLine.toString().equals("L")) {
                countOfAttachedLines++;
                //  only for beginning of color
                singleLine.append(line[0] + "-" + line[1] + "," + line[2] + "-" + line[3]);
            } else {
                countOfAttachedLines++;
                singleLine.append("," + line[2] + "-" + line[3]);
            }
        }

       // System.out.println("listOfDots.size()"+ listOfDots.size());

        if (!listOfDots.isEmpty()) {
            linesAndDotsForASingleColor.append("P");


            // Sort dots to be as close to each other as possible

            listOfDots.stream().forEach(dot -> linesAndDotsForASingleColor.append("," + dot[0] + "-" + dot[1]));
        }

        System.out.println("Count of generated lines "+countOfGeneratedLines);
        System.out.println("Count of attached lines "+countOfAttachedLines);
        System.out.println(linesAndDotsForASingleColor);

        return linesAndDotsForASingleColor.toString();
    }
*/


    private int[] findLongestPossibleLine(int[] startPoint, BufferedImage image, int targetColor, Graphics graphics) {

        int count = 0;
        // System.out.println("_____________________");
        Map<Integer, int[]> map = new HashMap<>();
        while (count < 8) {
            int[] line = getRandomLine(startPoint, image, targetColor, count);
            if (line == null) {
                count++;
                continue;
            }
            map.put(calculateLengthOfLine(line), line);
            count++;
            //   System.out.println(calculateLengthOfLine(line));
        }

        if (map.size() == 0) {
            return null;
        }

        int[] longestLine = map.get(Collections.max(map.keySet()));

        graphics.setColor(StaticValues.defaultColor);
        graphics.drawLine(longestLine[0], longestLine[1], longestLine[2], longestLine[3]);

        //System.out.println("Longest line L" + longestLine[0]+"-"+longestLine[1]+","+longestLine[2]+"-"+longestLine[3]);

        return longestLine;
    }

    private int[] getRandomLine(int[] startPoint, BufferedImage image, int targetColor, int direction) {
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

        if (image.getRGB(startX, startY) != targetColor) {
            return null;
        }

        int oldEndX = endX;
        int oldEndY = endY;

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

            if (endX < 0 || endX >= width || endY < 0 || endY >= height) {
                endX = oldEndX;
                endY = oldEndY;
                break;
            }
        }

       // System.out.println("TESTING TESTING  "+oldEndX+" "+oldEndY+" "+endX+" "+endY);
        return new int[]{startX, startY, endX, endY};
    }


    public static int[] getNearPixelWithTheSameColor(int[] point, BufferedImage image, int targetColor) {
        // List to store the surrounding points
        List<int[]> surroundingPoints = new ArrayList<>();

        // Extract the x and y coordinates from the input array
        int x = point[0];
        int y = point[1];

        // Add all eight surrounding points to the list
        surroundingPoints.add(new int[]{x - 1, y - 1}); // Top-left
        surroundingPoints.add(new int[]{x, y - 1}); // Top-center
        surroundingPoints.add(new int[]{x + 1, y - 1}); // Top-right
        surroundingPoints.add(new int[]{x - 1, y}); // Middle-left
        surroundingPoints.add(new int[]{x + 1, y}); // Middle-right
        surroundingPoints.add(new int[]{x - 1, y + 1}); // Bottom-left
        surroundingPoints.add(new int[]{x, y + 1}); // Bottom-center
        surroundingPoints.add(new int[]{x + 1, y + 1}); // Bottom-right

        try {
            Optional<int[]> any = surroundingPoints.stream()
                    .filter(coordinates -> coordinates[0] >= 0 && coordinates[0] < image.getWidth() && coordinates[1] >= 0 && coordinates[1] < image.getHeight())
                    .filter(coordinates -> image.getRGB(coordinates[0], coordinates[1]) == targetColor)
                    .findAny();

            return any.orElse(null);
        } catch (Exception e) {
            System.out.println("EXCEPTION");
        }
        return null;
    }

    public int calculateLengthOfLine(int[] line) {
        // Calculate the length as a double
        double length = Math.sqrt(Math.pow(line[2] - line[0], 2) + Math.pow(line[3] - line[1], 2));
        // Return the length as an integer (rounded)
        return (int) Math.round(length);
    }


    public int[] getRandomDotCoordinates(BufferedImage image, int targetColor) {
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

        return new int[]{randomDot[0], randomDot[1]};
    }


    private String splitSingleColorSimplified(BufferedImage image, Color color, int colorNumber, ImageDisplay jFrame) {
        int[] previousCoordinates = getRandomDotCoordinates(image, color.getRGB());
        if (previousCoordinates == null) {
            return "";
        }
        Graphics graphics = image.getGraphics();
        StringBuffer linesAndDotsForASingleColor = new StringBuffer("C" + colorNumber);
        StringBuffer singleLine = new StringBuffer();
        while (true) {

            int[] line = findLongestPossibleLine(new int[]{previousCoordinates[0], previousCoordinates[1]}, image, color.getRGB(), graphics);

          //  System.out.println("Line =" + line ==null?null:line[0] + "-" + line[1] + "," + line[2] + "-" + line[3] + " Single Line "+ singleLine);
            //System.out.println("LINE LINE"+ line[0] + "-" + line[1] + "," + line[2] + "-" + line[3]);
            if (line != null) {
                singleLine.append(","+line[0] + "-" + line[1] + "," + line[2] + "-" + line[3]);
                //System.out.println("Appended New Line = " + singleLine );
                //System.out.println("Line");
                //linesAndDotsForASingleColor.append("L" + singleLine);
                int [] nearPoint = getNearPixelWithTheSameColor(new int[]{line[2], line[3]}, image, color.getRGB());
                if(nearPoint == null){
                    linesAndDotsForASingleColor.append("L" + singleLine.substring(1));
                    //System.out.println("linesAndDotsForASingleColor "+linesAndDotsForASingleColor);
                    singleLine = new StringBuffer();
                    previousCoordinates = getRandomDotCoordinates(image, color.getRGB());
                    if (previousCoordinates == null) {
                        break;
                    }
                } else {
                    previousCoordinates = nearPoint;
                }
            } else {
                throw new RuntimeException("LINE IS NULL");
            }
        }
        return linesAndDotsForASingleColor.toString();
    }
}
