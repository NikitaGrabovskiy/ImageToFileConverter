import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.ArrayList;
import java.util.List;

public class ImageDrawerFromString {

    public static BufferedImage drawImageFromString(String imageCode, int imageWidth, int imageHeight, ArrayList<Color> colors) {
        BufferedImage image = new BufferedImage(imageWidth, imageHeight, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2d = image.createGraphics();

        imageCode = imageCode.replace("D", "");
        String[] colorLines = imageCode.split("C");

        for (String color : colorLines) {

            int colorNumber = 0;
            try {
                colorNumber = Integer.valueOf(color.substring(0, color.indexOf("L")));
            } catch (Exception e) {
                System.out.println("COLOR Line" + color);
            }
            //System.out.println("Color number = " + colorNumber);


            g2d.setColor(colors.get(colorNumber));


            color = color.replace("C", "");

            System.out.println();

            String[] allLines = color.split("L");
            for (String line : allLines) {
                //System.out.println("********************LINE ="+ line);

                List<Integer> allDots = new ArrayList<>();
                try {
                    String[] dots = line.split(",");

                    for (String dot : dots) {

                        String[] dotArray = dot.split("-");
                        allDots.add(Integer.valueOf(dotArray[0]));
                        allDots.add(Integer.valueOf(dotArray[1]));
                    }

                    for(int a = 0;a<allDots.size();a+=4){
                        g2d.drawLine(allDots.get(a),allDots.get(a+1),allDots.get(a+2),allDots.get(a+3));
                    }

                } catch (Exception e) {
                    System.out.println("ErrorDrawingLine" + line);
                }
            }
        }

        g2d.dispose();
        return image;
    }

    public static BufferedImage drawImageFromStringOLD(String imageCode, int imageWidth, int imageHeight, ArrayList<Color> colors) {
        BufferedImage image = new BufferedImage(imageWidth, imageHeight, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2d = image.createGraphics();

        imageCode = imageCode.replace("D","");
        String[] colorLines = imageCode.split("C");

        for(String color: colorLines){

            int colorNumber = 0;
            try{
                colorNumber = Integer.valueOf(color.substring(0,color.indexOf("L")));
            }catch (Exception e){
                System.out.println("COLOR Line"+ color);
            }
            //System.out.println("Color number = " + colorNumber);


            g2d.setColor(colors.get(colorNumber));



            color = color.replace("C","");

            System.out.println();

            String[] allLines = color.split("L");
            for(String line: allLines){
                // System.out.println("********************LINE ="+ line);
                String[] allDots = line.split(",");
                String previousDot = null;

                int startX = -1;
                int startY = -1;

                for(String dot: allDots){

                    //  System.out.println("DOT"+dot);
                    try {
                        String[] dotArray = dot.split("-");
                        if (previousDot == null) {
                            startX = Integer.valueOf(dotArray[0]);
                            startY = Integer.valueOf(dotArray[1]);
                            previousDot = dot;
                            continue;
                        }

                        int endX = Integer.valueOf(dotArray[0]);
                        int endY = Integer.valueOf(dotArray[1]);
                        g2d.drawLine(startX, startY, endX, endY);

                        //System.out.println("DRAW Line "+ startX+" "+startY+" "+endX+" "+endY);
                        startX = endX;
                        startY = endY;
                    } catch (Exception e){
                        System.out.println("DOT Exceptions"+ dot);
                    }
                }
            }
        }

        g2d.dispose();
        return image;
    }
}
