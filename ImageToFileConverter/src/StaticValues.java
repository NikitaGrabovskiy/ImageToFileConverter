import java.awt.*;
import java.util.ArrayList;

public class StaticValues {

    // Make sure that colors are added in order - it will be the first parameter
    // that will mean color

    public static Color defaultColor = new Color(1, 1, 1);
    static ArrayList<Color> main18Colors = new ArrayList<>();

    static {
       // addCommonlyUsedColors();
      //  adjustColors();
    }

    // Method to add 36 commonly used colors to the list
 /*   public static void addCommonlyUsedColors() {
        main18Colors.add(new Color(255, 255, 255));  // White
        main18Colors.add(new Color(0, 0, 0));        // Black
        main18Colors.add(new Color(255, 0, 0));      // Red
        main18Colors.add(new Color(0, 255, 0));      // Green
        main18Colors.add(new Color(0, 0, 255));      // Blue
        main18Colors.add(new Color(255, 255, 0));    // Yellow

        main18Colors.add(new Color(0, 255, 255));    // Cyan
        main18Colors.add(new Color(128, 0, 0));      // Maroon
        main18Colors.add(new Color(128, 128, 0));    // Olive
        main18Colors.add(new Color(128, 0, 128));    // Purple
        main18Colors.add(new Color(0, 128, 0));      // Green (Lime)
        main18Colors.add(new Color(0, 128, 128));    // Teal
        main18Colors.add(new Color(0, 0, 128));      // Navy
        main18Colors.add(new Color(128, 128, 128));  // Gray
        main18Colors.add(new Color(192, 192, 192));  // Silver
        main18Colors.add(new Color(255, 165, 0));    // Orange
        main18Colors.add(new Color(255, 192, 203));  // Pink
        main18Colors.add(new Color(210, 105, 30));   // Chocolate
        main18Colors.add(new Color(0, 128, 64));     // Dark Green
        main18Colors.add(new Color(255, 99, 71));    // Tomato
        main18Colors.add(new Color(255, 215, 0));    // Gold
        main18Colors.add(new Color(255, 69, 0));     // Red-Orange
        main18Colors.add(new Color(0, 128, 192));    // Medium Blue
        main18Colors.add(new Color(160, 82, 45));    // Sienna
        main18Colors.add(new Color(255, 255, 224));  // Light Yellow
        main18Colors.add(new Color(255, 228, 196));  // Bisque
        main18Colors.add(new Color(0, 255, 127));    // Spring Green
        main18Colors.add(new Color(255, 160, 122));  // Light Salmon
        main18Colors.add(new Color(72, 61, 139));    // Dark Slate Blue
        main18Colors.add(new Color(255, 182, 193));  // Light Pink
        main18Colors.add(new Color(0, 255, 0));      // Lime
        main18Colors.add(new Color(255, 20, 147));   // Deep Pink
        main18Colors.add(new Color(255, 0, 255));    // Fuchsia
        main18Colors.add(new Color(0, 255, 255));    // Aqua
    }
*/





/*    static Color color30 = new Color(30, 29, 29);
    static Color color32 = new Color(222, 221, 221);

    */



    static Color color31 = new Color(0, 0, 0);
    static Color color16 = new Color(54, 54, 54);
    static Color color25 = new Color(86, 86, 107);
    static Color color29 = new Color(125, 125, 155);
    static Color color17 = new Color(183, 183, 225);
    static Color color18 = new Color(255, 255, 255);

    static  Color color26 = new Color(255, 195, 253);
    static  Color color27 = new Color(255, 137, 253);

    static Color color1 = new Color(255, 111, 111);
    static  Color color2 = new Color(255,0, 0);
    static Color color15 = new Color(125,0, 0);
    static Color color30 =  new Color(255, 0, 255);    // Magenta
    static Color color13 = new Color(171, 00, 255);
    static  Color color14 = new Color(80, 00, 255);
    static  Color color12 = new Color(103, 0, 131);
    static  Color color35 = new Color(64, 29, 117);

    static  Color color19 = new Color(255, 194, 0);
    static  Color color20 = new Color(255, 238, 6, 255);
    static  Color color21 = new Color(248, 246, 208);
    static  Color color22 = new Color(211, 182, 103);
    static  Color color23 = new Color(145, 110, 0);
    static  Color color24 = new Color(100, 72, 11, 255);

    static  Color color3 = new Color(192, 255, 190);
    static Color color4 = new Color(0, 255, 0);
    static Color color5 = new Color(17, 162, 0);
    static  Color color6 = new Color(85, 255, 229);
    static Color color7 = new Color(0, 220, 206);
    static  Color color8 = new Color(10, 147, 147);
    static Color color9 = new Color(118, 210, 255);
    static  Color color10 = new Color(0, 128, 255);
    static  Color color11 = new Color(7, 70, 255);
    static  Color color33 = new Color(236, 142, 34);
    static  Color color34 = new Color(29, 117, 29);
    static  Color color36 = new Color(110, 28, 65);



    static {
        main18Colors.add(color1);
        main18Colors.add(color2);
        main18Colors.add(color3);
        main18Colors.add(color4);
        main18Colors.add(color5);
        main18Colors.add(color6);
        main18Colors.add(color7);
        main18Colors.add(color8);
        main18Colors.add(color9);
        main18Colors.add(color10);
        main18Colors.add(color11);
        main18Colors.add(color12);
        main18Colors.add(color13);
        main18Colors.add(color14);
        main18Colors.add(color15);
        main18Colors.add(color16);
        main18Colors.add(color17);
        main18Colors.add(color18);
        main18Colors.add(color19);
        main18Colors.add(color20);
        main18Colors.add(color21);
        main18Colors.add(color22);
        main18Colors.add(color23);
        main18Colors.add(color24);
        main18Colors.add(color25);
        main18Colors.add(color26);
        main18Colors.add(color27);
       // main18Colors.add(color28);
        main18Colors.add(color29);
        main18Colors.add(color30);
        main18Colors.add(color31);
        // main18Colors.add(color32);
        main18Colors.add(color33);
        main18Colors.add(color34);
        main18Colors.add(color35);
        main18Colors.add(color36);
    }





/*    static {
        main18Colors = generateEquallySpacedRGBColors();
    }*/






/*    public static ArrayList<Color> generateVibrantRGBColors() {
        int numColors = 36;
        ArrayList<Color> rgbColors = new ArrayList<>();

        int minDifference = 50; // Minimum difference between R, G, B values

        for (int i = 0; i < numColors; i++) {
            int red = (int) (Math.random() * 256);
            int green = (int) (Math.random() * 256);
            int blue = (int) (Math.random() * 256);

            // Ensure that the difference between R, G, B values is greater than minDifference
            while (Math.abs(red - green) < minDifference || Math.abs(red - blue) < minDifference || Math.abs(green - blue) < minDifference) {
                red = (int) (Math.random() * 256);
                green = (int) (Math.random() * 256);
                blue = (int) (Math.random() * 256);
            }

            rgbColors.add(new Color(red, green, blue));
        }

        return rgbColors;
    }

    public static ArrayList<Color> generateEquallySpacedRGBColors() {
        int numColors = 36;
        ArrayList<Color> rgbColors = new ArrayList<>();

        for (int i = 0; i < numColors; i++) {
            int colorValue = i * (256 * 256 / numColors); // Equally spaced values
            int red = (colorValue >> 16) & 0xFF;
            int green = (colorValue >> 8) & 0xFF;
            int blue = colorValue & 0xFF;

            rgbColors.add(new Color(red, green, blue));
        }

        return rgbColors;
    }*/

    public static void adjustColors() {
        for (int i = 1; i < main18Colors.size(); i++) {
            Color prevColor = main18Colors.get(i - 1);
            Color currentColor = main18Colors.get(i);

            // Adjust red component
            if (Math.abs(prevColor.getRed() - currentColor.getRed()) < 20) {
                int diff = Math.min(20, 255 - currentColor.getRed());
                currentColor = new Color(currentColor.getRed() + diff, currentColor.getGreen(), currentColor.getBlue());
                main18Colors.set(i, currentColor);
            }

            // Adjust green component
            if (Math.abs(prevColor.getGreen() - currentColor.getGreen()) < 20) {
                int diff = Math.min(20, 255 - currentColor.getGreen());
                currentColor = new Color(currentColor.getRed(), currentColor.getGreen() + diff, currentColor.getBlue());
                main18Colors.set(i, currentColor);
            }

            // Adjust blue component
            if (Math.abs(prevColor.getBlue() - currentColor.getBlue()) < 20) {
                int diff = Math.min(20, 255 - currentColor.getBlue());
                currentColor = new Color(currentColor.getRed(), currentColor.getGreen(), currentColor.getBlue() + diff);
                main18Colors.set(i, currentColor);
            }
        }
    }



}
