# Light-Properties-Experimental

Now, when we notice this color palette used in this code, we observe that we can select multiple colors from this palette, which exactly looks like a VIBGYOR if we observe on z-axis.

Now, let's say we have two prisms, one prism to capture white light, disperse into large number of colors but then we place another prism to refract them to convert it back to white light, now in that conversion and process, based on the angle of dispersion, we get large number of colors and when we change the angle slightly by rotating the prism, we get the color changing if we stimulate it in our mind, we will be able to know it better.

Now, at different angles, we get different colors and when we slide it using a cursor/pointer, then slowly we are rotating those prisms to get it, so a VIBGYOR comes out of it.

Now, let's understand the x- and y-axis where there is that color dispersion and slowly and gradually changing to white color and black color reflecting different shades, so the screen on which that pattern is displayed is what our x- and y-axis, now that white color is that white light and black color is the part which is not exposed to any light giving variant of color, where we can choose any color, this way we get from (0, 0, 0) to (255, 255, 255) colors.

Now, this is my version of how I understand the conversion of color to code, I don't know big terms like vertex shader, fragment shader and other shaders but we can find out something which could emerge out of this concept.

For 3d objects, we have a mesh structure where we draw mandala like art and shapes to create 3d images.

Now, let's say we have 24 bits and initially we have all bits 0 which is black color and if we have all bits 1 which is white color and between those lies all the colors, so we are sending these 24 bits based on color selection through a driver to DAC which is Digital to Analog Convertor where these digital bits are being converted to analog signal using control signal board. Now, this control signal board limits the voltage based upon the bits it recieves and since the highest voltage is say, 5V and lowest is 0V where at 5V, we get white color and at 0V, we get black color, so let's say based on bits, 1.2V is being passed, so it deviates the angle, let's say by 120deg. How does it get deviated by 120deg? This voltage is sent to microscopic electrostatic actuator, creating an electromagnetic field that pushes or pulls the tiny structure and above setup creating that angle such that we get that light ray
fall over the chip matrix and that light is being reflected on screen. Now, it is not as a whole displayed on screen, we notice pixels on the screen, so we need to arrange that prism apparatus for each pixel on screen, so that we can display that color over that pixel. Now, this same DAC circuit for all pixels on the screen, and prism setup for dispersion for each and every color, how much complicated would that be, and how would we arrange white light for every minute setup inside the chip matrix.

It is too much complicated, maybe I should go with some other apparatus, maybe we get into some chemical engineering because there might be some chemical or metal being existed in nature that could solve this prism problem by reflecting same property as this apparatus which can be used in such minute setup as replacement.
