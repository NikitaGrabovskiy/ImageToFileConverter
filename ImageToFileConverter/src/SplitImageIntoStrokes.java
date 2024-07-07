
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

    private int dipCount;

    public String splitImage(BufferedImage image, ArrayList<Color> colors, ImageDisplay jFrame) {

        //  System.out.println("Number of colors " + colors.size());

        StringBuffer result = new StringBuffer();

        for (int a = 0; a < colors.size(); a++) {

            // Skip white color
            if(a == 0){
                continue;
            }

            String colorLayer = splitSingleColorSimplified(image, colors.get(a), a, jFrame);
            result.append(colorLayer);

/*            if(colorLayer!=null && !colorLayer.isEmpty()){
                String reversed = reverseSegmentsInLines(colorLayer);
                // TODO - remove dots
                result.append(reversed);
            }*/
        }

        return result.toString();
    }

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


            // Randomly return not longest line to remove the robot drawing effect

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
        StringBuffer linesAndDotsForASingleColor = new StringBuffer("\nC" + colorNumber);
        StringBuffer singleLine = new StringBuffer();
        int dipLength = 0;

        ArrayList<String> listOfStrings = new ArrayList<>();

        int numberOfDotsInALine = 0;


        while (true) {

            int[] line = findLongestPossibleLine(new int[]{previousCoordinates[0], previousCoordinates[1]}, image, color.getRGB(), graphics);

            if (line != null) {
                dipLength += calculateLengthOfLine(line);
            }

          //  System.out.println("Line =" + line ==null?null:line[0] + "-" + line[1] + "," + line[2] + "-" + line[3] + " Single Line "+ singleLine);
            //System.out.println("LINE LINE"+ line[0] + "-" + line[1] + "," + line[2] + "-" + line[3]);
            if (line != null) {
                singleLine.append(","+line[0] + "-" + line[1] + "," + line[2] + "-" + line[3]);
                numberOfDotsInALine++;
                //System.out.println("Appended New Line = " + singleLine );
                //System.out.println("Line");
                //linesAndDotsForASingleColor.append("L" + singleLine);
                int [] nearPoint = getNearPixelWithTheSameColor(new int[]{line[2], line[3]}, image, color.getRGB());

                if(nearPoint == null || numberOfDotsInALine>12 || dipLength>65){
                    dipLength = 0;
                    numberOfDotsInALine = 0;
                    //linesAndDotsForASingleColor.append("\nL" + singleLine.substring(1));
                    listOfStrings.add("\nL" + singleLine.substring(1));
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


        // TODO : REMOVE LAST "D"

        listOfStrings=LineSorter.sortLines(listOfStrings);
        addDipIndicator(listOfStrings);

        listOfStrings.stream().forEach(a -> linesAndDotsForASingleColor.append(a));

        return linesAndDotsForASingleColor.toString();
    }

    public void addDipIndicator(ArrayList<String> lines) {
        for (String line : lines) {
            int[] segmentNumbers = calculateDipCount(line);
           // System.out.println("LINE "+line);
            //System.out.println(Arrays.toString(segmentNumbers));
            for (int a = 0; a<segmentNumbers.length;){
                dipCount+=calculateLengthOfLine(new int[]{segmentNumbers[0],segmentNumbers[1],segmentNumbers[2],segmentNumbers[3]});
                a+=4;
            }

            if(dipCount>65){
                int i = lines.indexOf(line);
                lines.set(i,line+"\nD");
                dipCount = 0;
            }

            //System.out.println(dipCount);
        }
    }

    public int[] calculateDipCount(String input) {
        input = input.replace("\nL","");
        String[] pairs = input.split(",");
        int[] numbers = new int[pairs.length * 2];

        for (int i = 0; i < pairs.length; i++) {
            String[] parts = pairs[i].split("-");
            numbers[2 * i] = Integer.parseInt(parts[0].trim());
            numbers[2 * i + 1] = Integer.parseInt(parts[1].trim());

        }

        return numbers;
    }

    public String reverseSegmentsInLines(String input) {
        // Split the input string into lines
        String[] lines = input.split("\n");

        // Create a StringBuilder to build the reversed output
        StringBuilder reversed = new StringBuilder();

        // Append lines in reverse order
        for (int i = lines.length - 1; i >= 0; i--) {
            String[] segments = lines[i].split(",");

            if(segments[0].startsWith("C") || segments[0].trim().isEmpty()){
                continue;
            }

            // Reverse the order of segments in each line
            for (int j = segments.length - 1; j >= 0; j--) {
                reversed.append(segments[j]);
                if (j != 0) {
                    reversed.append(",");
                }
            }

            if (i != 0) {
                reversed.append("\n");
            }
        }

      //  reversed.replace(reversed.lastIndexOf("\n"),reversed.lastIndexOf("\n"),"");

        return "\n"+removeLastCharacter(reversed.toString());
    }

    public String removeLinesWithTwoSegments(String input) {
        // Split the input string into lines
        String[] lines = input.split("\n");

        // Create a StringBuilder to build the filtered output
        StringBuilder filtered = new StringBuilder();

        for (String line : lines) {
            String[] segments = line.split(",");
            if (segments.length > 2 ||(segments.length==2 && calculateLengthOfLine(convertStringToIntArray(segments[0]+segments[1]))>2) ) {
                filtered.append(line).append("\n");
            }
        }

        // Remove the trailing newline character if present
        if (filtered.length() > 0 && filtered.charAt(filtered.length() - 1) == '\n') {
            filtered.deleteCharAt(filtered.length() - 1);
        }

        return filtered.toString();
    }

    public static int[] convertStringToIntArray(String input) {
        // Split the input string into segments
        String[] segments = input.split(",");

        // Create an array to hold the result
        int[] result = new int[segments.length * 2];

        // Split each segment and store in the array
        int index = 0;
        for (String segment : segments) {
            String[] parts = segment.split("-");
            result[index++] = Integer.parseInt(parts[0]);
            result[index++] = Integer.parseInt(parts[1]);
        }

        return result;
    }

    private String removeLastCharacter(String input) {
        if (input == null || input.length() == 0) {
            return input;
        }
        return input.substring(0, input.length() - 1);
    }
}
