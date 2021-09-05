# Name Some css frameworks
Bootstrap, Semantic UI, Foundation, Ukit

# What is universal selector?
A universal selector is a selector that matches any element types name instead of selecting elements of particular type.

*{
 color:blue;
}

# Tell us about ruleset.

.selectorClass{
 color:blue;
}
the whole thing is a ruleset.
The curly braces and everything inside is a declaration block.
Each key/value pair, as separated by a colon and ending in a semicolon, is a declaration.
In those key/value pairs, the key is a property (color), and the value is a value(blue).

# What are the elements of a CSS block modal?
The CSS Box Model defines the layout and design of CSS elements.
Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent

# Difference between class and ID?
The Html Class Attribute is used to specify a class for an HTML element.
Class attribute is used for styling html elements. They are not unique and can have same class for multiple elements. Whereas ID is unique and it can be assigned to single element.

# Advantages of CSS 
Easier to maintain and update.
Greater consistency in design.
More formatting options.
Lightweight code.

# Define Z-index 
The z-index property specifies the stack order of an element that overlap eachother. An element with greater stack order is always in front of an element with a lower stack order. 
- Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display:flex elements).

- Note: If two positioned elements overlap without a z-index specified, the element positioned last in the HTML code will be shown on top. 
it default value is zero and can take both negative and positive values. 

# Name media types allowed by CSS 
Speech , audio, visual, tactile media, continuos or paged media, grid media or bitmap, interactive media.

# How can you use CSS to control image repetition?
 The background- repeat property is used to control the image.
 h3{
  background-repeat: none;
 }

 # Tell us about the property used for image scroll controlling
 - background-attachment 

# Font related CSS attributes
 The font related attributes are font-style, weight, family size etc.

# Explain Responsive webdesign 
This design approach aims to build web pages that detect the orientation and screen size of the visitors so that the layout can be changed accordingly.

# Positioning aspects in CSS
Static - An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page.
Relative - An element with position: relative; is positioned relative to its normal position.
Fixed - An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
Absolute - An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
Sticky - An element with position: sticky; is positioned based on the user's scroll position.

# Float property in CSS 
- The float property specifies whether an element should float to the left, right, or not at all.
Note: Absolutely positioned elements ignore the float property!
Note: Elements next to a floating element will flow around it. To avoid this, use the clear property or the clearfix hack.

# Pseudo Elements
A CSS pseudo-element is used to style specified parts of an element.
For example, it can be used to:
Style the first letter, or line, of an element
Insert content before, or after, the content of an element

# media types in CSS
print, speech, and screen

# Tell us something about CSS3 
CSS3 is divided into modules and is supported by almost every browser. Many graphic related characteristics are introduced in CSS3 like box-shadow, Border-radius, and flex-box

# CSS Selectors - 5 Types
1. Simple selectors (select elements based on name, id, class)
2. Combinator selectors (select elements based on a specific relationship between them);
  - descendant selector (space)
    child selector (>)
    adjacent sibling selector (+)
    general sibling selector (~)
3. Pseudo-class selectors (select elements based on a certain state) 
 for Ex: Style an element when a user mouses over it
         Style visited and unvisited links differently
         Style an element when it gets focus
4. Pseudo-elements selectors (select and style a part of an element) - already discussed
5. Attribute selectors (select elements based on an attribute or attribute value)
   - The [attribute] selector is used to select elements with a specified attribute.

# CSS Specificity
If there are two or more conflicting CSS rules that point to the same element, the browser follows some rules to determine which one is most specific and therefore wins out.
Inline styles - An inline style is attached directly to the element to be styled. Example: <h1 style="color: #ffffff;">.
IDs - An ID is a unique identifier for the page elements, such as #navbar.
Classes, attributes and pseudo-classes - This category includes .classes, [attributes] and pseudo-classes such as :hover, :focus etc.
Elements and pseudo-elements - This category includes element names and pseudo-elements, such as h1, div, :before and :after.

# Define gradient in CSS
A property of CSS that allows displaying smooth transformation between two or more specified colors.
The types of gradient are linear and radial

# How can you give a priority to a css rule
Using ! important

# What are the properties of flex-box?
flex-direction, wrap, flow, content, align-items and content. 

# Use of Box Model
The CSS Box model is a box binding HTML element that includes content , padding , border and margin.
with the box model we can add border all around elements and define space between elements. 

# position states in Static
1. relative 
2. static
3. absolute 
4. fixed
The default position state is static

# what is common between class and ID?

Both classed and ID's are used in HTML to assign Styling elements. But ID is used only for a single element
and class is used as a block. 

# How to avoid underline in a link tag
using text-decoration: none




