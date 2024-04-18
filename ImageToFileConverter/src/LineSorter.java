import java.util.*;

public class LineSorter {
    static class Point {
        int x, y;

        Point(int x, int y) {
            this.x = x;
            this.y = y;
        }

        // Calculate Euclidean distance between two points
        static double distance(Point p1, Point p2) {
            return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
        }
    }

    static class Line {
        Point start, end;
        String original; // Store the original string representation

        Line(String representation) {
            this.original = representation; // Save the original representation
            String[] points = representation.split(",");
            String[] startCoords = points[0].split("-");
            String[] endCoords = points[points.length - 1].split("-");
            this.start = new Point(Integer.parseInt(startCoords[0]), Integer.parseInt(startCoords[1]));
            this.end = new Point(Integer.parseInt(endCoords[0]), Integer.parseInt(endCoords[1]));
        }
    }

    // Method to sort lines based on proximity of endpoints
    public static ArrayList<String> sortLines(ArrayList<String> linesData) {



        // Convert input data into Line objects
        List<Line> lines = new ArrayList<>();
        for (String lineData : linesData) {
            try {
                lines.add(new Line(lineData.replace("\nL", "")));
            }catch (Exception e){
                System.out.println("Exception +" + e+ "while processing line "+ lineData);
            }
        }

        List<Line> sortedLines = new ArrayList<>();
        Line currentLine = lines.remove(0); // Start with the first line
        sortedLines.add(currentLine);

        while (!lines.isEmpty()) {

            Line closestLine = null;
            double closestDistance = Double.MAX_VALUE;
            for (Line line : lines) {

                double distance = Point.distance(currentLine.end, line.start);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestLine = line;
                }
            }
            sortedLines.add(closestLine);
            currentLine = closestLine;
            lines.remove(closestLine);
        }

        // Convert sorted Line objects back to their string representation
        ArrayList<String> sortedLinesStrings = new ArrayList<>();
        for (Line line : sortedLines) {
            sortedLinesStrings.add("\nL"+line.original);
        }

        return sortedLinesStrings;
    }
}