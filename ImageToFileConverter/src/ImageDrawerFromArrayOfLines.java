import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.ArrayList;

public class ImageDrawerFromArrayOfLines {

    public static BufferedImage drawImageFromArrays(int[][][] linesArray, int imageWidth, int imageHeight,ArrayList<Color> colors) {
        BufferedImage image = new BufferedImage(imageWidth, imageHeight, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2d = image.createGraphics();

        for (int i = 0; i < linesArray.length; i++) {

            if (linesArray[i].length > 0) {
                // Assuming color is not provided in the array, using a default color (black)
                g2d.setColor(colors.get(i));

                for (int j = 0; j < linesArray[i][0].length; j += 4) {

                    if(linesArray[i][0].length == 0){
                        continue;
                    }

                    int startX = linesArray[i][0][j];
                    int startY = linesArray[i][0][j + 1];
                    int endX = linesArray[i][0][j + 2];
                    int endY = linesArray[i][0][j + 3];

                    g2d.drawLine(startX, startY, endX, endY);
                }
            }
        }

        g2d.dispose();
        return image;
    }
}
