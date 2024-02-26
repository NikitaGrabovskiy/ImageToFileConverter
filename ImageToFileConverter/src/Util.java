import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class Util {

    public static BufferedImage getImageFromFile(String imagePath, int imageNumber) {
        BufferedImage image = null;

        try {
            image = ImageIO.read(new File(imagePath + imageNumber + ".png"));
        } catch (IOException e) {
        }

        if (image == null) {
            try {
                image = ImageIO.read(new File(imagePath + imageNumber + ".jpg"));
            } catch (IOException e) {
            }
        }

        if (image == null) {
            try {
                image = ImageIO.read(new File(imagePath + imageNumber + ".jpeg"));
            } catch (IOException e) {
            }
        }
        return image;
    }


}
