#  HTML 
- Hyper Text Markup Language, its the language of the world wide web. Standard text formatting language which is used to create and display pages on the web. HTML makes the text more interactive and dynamic.

# Difference btw HTML elements and Tags
 Element: is an individual component of the html webpage or document. It represents semantics or meaning. For ex: title element represents the title of the document. 
 Tags: are the root of the HTML document, which is used to specify that the document is HTML. Head Tag is used to contain the head element in the HTML file.

 # Attributes
 Elements in HTML have attributes. These are additional values that configure the elements or adjust their behavior in various ways to meet the criteria the users want.

 # Difference btw Block Level and Inline Element
 Block Level: A block-level element always starts on a new line.
 A block-level element always takes up the full width available (stretches out to the left and right as far as it can). A block level element has a top and a bottom margin, whereas an inline element does not. for ex: <div>, <img>, <section>, <form>,<nav>.
 Inline Element: An inline element does not start on a new line. An inline element only takes up space that is absolutely needed. for ex: <span>, <b>, <strong>, <a>, <input>.

 # adding code comments in HTML 
 To understand the comments you can add comments to your HTML document. Can help you leaving notes for yourself and others. 

# HTML tags used to display data in tabular form
<table> - defines a table
<tr> - this tag defines a row in a table
<th> - it defines a header cell in a table
<td> - this is used to define a cell in a table 
<caption> - it defines a table caption 
<colgroup> - it specifies a group of one or more columns in a table for formatting 
<col> - used with <colgroup> element to specify column properties for each column.
<tbody> - used to group the body content in a table
<thead> - used to group the header content in a table
<tfooter> - used to group the footer content in a table

# How to create a hyperlink in HTML
HTML provides an anchor <a> tag to create a hyperlink that links one page to another page. These tags can appear as:
Unvisited Link , Visited Link, Active Link.

# Name some common list that are used in designing a page\
Orderlist - ,
Unordered list ,
Description list - dl,dd, dt
The <dl> tag defines a description list.
The <dl> tag is used in conjunction with <dt> (defines terms/names) and <dd> (describes each term/name).

# Semantic in HTML
Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation.
for ex: <strong> for bold and <em> for emphasized text.

# How to create a nested webpage in HTML
An HTML iframe is used to display a web page within a web page. 

# what is an image map
With HTML image maps, you can create clickable areas on an image. The HTML <map> tag defines an image map. An image map is an image with clickable areas. The areas are defined with one or more <area> tags.
   # How it works? 
   The idea behind an image map is that you should be able to perform different actions depending on where in the image you click.
   To create an image map you need an image, and some HTML code that describes the clickable areas.

# Does a hyperlink only apply to text?
 No, hyperlink can be used for both on texts and images. href attribute is the most important attribute of the HTML anchor tag. 

# What is a stylesheet?
 A stylesheet is used to build a consistent, transportable and well designed style template. You can add these templates on several different webpages. It describes the look and formatting of a document written in markup language.

# Explain the layout of HTML 

<html>
  <head> 
   <title></title> 
  </head>
  <body>
   <h1>This is the heading</h1>
   <p>This is a paragraph</p>
   <p>This is another paragraph</p>
  </body>
</html>
Header for defining header part.
Nav defines the container for navigation links
Section for body section
article for independent self contained article 
aside used to define content aside from the original content.
footer  used to define a footer

# what is marquee?
Marquee is used for scrolling text on a webpage. It scrolls the image or text up, down left or right automatically. You should put the text which you want to scroll within the <marquee>...</marquee> tag.

# tags used to seperate section of texts
<br> is used to seperate the line of text. It breaks the current line and conveys the flow to the next line. 
<p> is used to contains the text in the form of a new paragraph.
<blockquote> is used to define a large quoted section

# difference btw DIV and SPAN
A div element is used for block-level organization and styling of page elements, whereas a span element is used for inline organization and styling. A soan is usually used for a small chunk of HTML inside a line, such as inside a paragraph where as div element is block-line which is equivalent to having a line break before and after it and used to group large chunks of code.

# Purpose of using alternative texts in images
The purpose of an alternative texts is to define what the image is about. 
purpose is to describe images to visitors who are unable to see them. This includes screen readers and browsers that block images, but it also includes users who are sight-impaired or otherwise unable to visually identify an image.

# Is the <!DOCTYPE html> tag considered as a html tag?
No, The <!DOCTYPE html> is not an HTML tag. It is an "information" to the browser about what document type to expect.

# Why is a URL encoded in HTML?
URL encoding converts non-ASCII characters into a format that can be transmitted over the Internet. URL encoding replaces non-ASCII characters with a "%" followed by hexadecimal digits. URLs cannot contain spaces.

# What are the entities in HTML?
The HTML character entities are used as a replacement for the reserved character in HTML. These characters are replaced because some characters are reserved in HTML. 

# Can you create a multicolor text on a web page?
Yes, To create a multicolor text, you can use <font color="color"></font> for the specific text that you want to color.

# How to make a picture of a background image of a web page?
<body background="image.jpg">

# What is the use of a span tag?
for adding colors on text
To add background on text
Highlight any color text

# ** Is there any way to keep list element straight in an HTML file?
By using indents, you can keep the list elements straight. If you indent each subnested list in further than the parent list that contains it, you can at a glance determine the various lists and the elements that it contains.

# Differences btw local storage and session storage?
The local storage object stores the data without an expiry date. However session storage object stores the data for only one session. 
In the case of local storage, data will not delete when the browser window closes. However the data gets deleted if the browser window closes in case of session storage.
the data in session storage is only accessible to the current window of the browser. But the data in local storage can be sharec between the multiple windows of the browser. 

# What happens if you open the external css file in a browser?
The browser will not open the file. the only way to use an external css file is to reference  it using a <link/> tag within another HTML document.

# Hierarchy that is being followed when it comes to stylesheets
Inline styling 
Embedded Stylesheets
External Stylesheets

# How do you create text on a webpage that allows you to send an email when clicked?
To change the text into a clickable link to send an email, you need to use the mailto command within the href tag
for Ex:
<a href="mailto:youremailaddress">Send a mail onclick</a>

# **How are active links differ from normal links?
The default color for normal and active links is blue. Some browsers recognize an active link when the mouse cursor is placed over that link; others recognize active links when the link has the focus. Those that don’t have a mouse cursor over that link is considered a normal link.

# Are there instances where the text will appear out of the browser?
By default, the text is wrapped to appear within the browser window. However, if the text is part of a table cell with a defined width, the text could extend beyond the browser window.

# write an html table tag sequence that outputs the following?
<table>
<tr>
 <td>50 pcs</td>
 <td>100</td>
 <td>500</td>
</tr>
<tr>
 <td>10 pcs</td>
 <td>5</td>
 <td>50</td>
</tr>
</table>

# What are the limits of the text field size?
the default size of the text field is around 13 characters. However, if you include size attribute you can set the size value to be as low as 1. The maximum size will be determined by the browser width. Also if the size attribute is set to 0. the size will be set to the default size of the  13 chars.

# What is SVG?
HTML SVG is used to describe the two dimensional vector and vector or raster graphics. 

# What is a button tag?
The button tag is used in HTML5. Its used to create a clickable button within the HTML form on the web page.

# List the media types and formats supported by HTML?
Images - png, jpg, jpeg, gif, apng, svg, bmp, BMP ico, png ico
Audio - MIDI, Real Audio, WMA, AAC, WAV, Ogg, MP3, MP4.
Video - MPEG, AVI, WMV, QuickTime, RealVideo, Flash, Ogg, WebM, MPEG-4 or MP4.

# What is Cell spacing and Cell padding?
Cell Spacing is referred to as the space or gap between the two cells of the same table. Whereas, cell padding is referred to as the gap or space between the content of the cell and cell wall or cell border.

# Difference btw HTML and XHTML

# How many types of css can be included in HTML?

Inline CSS
Internal Stylesheet
External Stylesheet

# Logical and physical tags in HTML?

# How can you apply Javascript to a webpage?
Inline
Script
Link to a external javascript file

# Different types of heading in html
h1, h2, h3, h4,h5, h6

