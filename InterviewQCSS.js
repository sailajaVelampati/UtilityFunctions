/*
flex
display properties
block:takes full width
inline:takes as much required.
[make horizontal lis make li:display inline]

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

*/
