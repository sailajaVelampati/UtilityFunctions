/*
how to display image to the center of the screen?
display:block;
margin:auto

how to make element display center of the screen?
display:flex;
justify-content:center;
align-items:center;

divide creen into 4 equal parts ?
html, body { height: 100%; padding: 0; margin: 0; }
div { width: 50%; height: 50%; float: left; }


flex
display properties
block:takes full width
inline:takes as much required.
[make horizontal lis make li:display inline]
none:
inline-block:
flex:
grid:
inline-flex:
inline-grid:
table:
table-caption:
table-row:
table-cell:

box model
Explanation of the different parts:
Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent

outline
Outline differs from borders! Unlike border, the outline is drawn outside the element's border, and may overlap other content. 
Also, the outline is NOT a part of the element's dimensions; the element's total width and height is not affected by the width of the 
outline.


positioning elements
static:always positioned according to the normal flow of the page
relative: positioned relative to its normal position
fixed:it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the
element.
absolute:is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
sticky:is positioned based on the user's scroll position.

Overflow
visible - Default. The overflow is not clipped. The content renders outside the element's box
hidden - The overflow is clipped, and the rest of the content will be invisible
scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
auto - Similar to scroll, but it adds scrollbars only when necessary

media quires

What are Pseudo-classes?
A pseudo-class is used to define a special state of an element.
hover, visited, link,first-child, active, nth-child

display: inline-block
Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.
Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.
Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element,
so the element can sit next to other elements.

How to achienve responsivness in website?
<meta name="viewport" content="width=device-width, initial-scale=1.0">
A <meta> viewport element gives the browser instructions on how to control the page's dimensions and scaling.
The width=device-width part sets the width of the page to follow the screen-width of the device 
(which will vary depending on the device).
The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.
Users are used to scroll websites vertically on both desktop and mobile devices - but not horizontally!
So, if the user is forced to scroll horizontally, or zoom out, to see the whole web page it results in a poor user experience.
Some additional rules to follow:
1. Do NOT use large fixed width elements - For example, if an image is displayed at a width wider than the viewport it can cause the 
viewport to scroll horizontally. Remember to adjust this content to fit within the width of the viewport.
2. Do NOT let the content rely on a particular viewport width to render well - Since screen dimensions and width in CSS pixels vary 
widely between devices, content should not rely on a particular viewport width to render well.
3. Use CSS media queries to apply different styling for small and large screens - Setting large absolute CSS widths for page elements 
will cause the element to be too wide for the viewport on a smaller device. Instead, consider using relative width values, such as width: 100%. Also, be careful of using large absolute positioning values. It may cause the element to fall outside the viewport on small devices.
4.mobile first approach?

How to achieve responsiveness with bootstrap?
set the viewport
by default container add 15px padding to left and right.
container-sm|md|lg|xl default sizes in boot strap 
container can be fixed width or fluid [for fixed width we can see screen adjusting css, in fluid look is semless ].

*/
