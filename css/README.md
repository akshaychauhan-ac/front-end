# CSS

	1) Box model -
		Height/Width + Padding + Border + Margin

	2) Rounded corners - border radius
		border-radius: 15px 50px 30px;
		TL-TR-BR-BL

	3) Border images - border-image (source, repeat, slice, etc)

	4) Multi background

	5) Colors -
		CSS3 has Supported additional color properties as follows −
			RGBA colors
			HSL colors
			HSLA colors
			Opacity

	6) Shadow -
		text-shadow: 2px 2px;
		box-shadow: 10px 10px;

	7) User Interface - resize, outline-offset, box-sizing

	8) Box sizing -
		Since css2, the box property has worked like as shown below −
			width + padding + border = actual visible/rendered width of an element's box
			height + padding + border = actual visible/rendered height of an element's box
		CSS3 - box-sizing: border-box;
			Padding is taken inside the element box

	9) Positioning
		relative -
			It is positioned relative to its normal position.
		absolute -
			positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
			if it has no positioned ancestors, it uses the document body, and moves along with page scrolling.
		fixed -
			positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.

	10) Selectors
		  Pseudo-class
		  Pseudo-element
		  id selector
		  class selector

	11) Specificity - Think of specificity as a score/rank that determines which style declarations are ultimately applied to an element.
		  1. Equal specificity: the latest rule counts
		  2. ID selectors have a higher specificity than attribute selectors
		  3. Contextual selectors are more specific than a single element selector - 
		  		The embedded style sheet is closer to the element to be styled. So in the following situation
		  4. A class selector beats any number of element selectors

	12) Flexbox
		  A Flexible Layout must have a parent element with the display property set to flex.
		  Direct child elements(s) of the flexible container automatically becomes flexible items.

	13) display -
		  none - hides the element completely.
		  block - Displays an element as a block element (like <p>).
		  inline - Displays an element as an inline element (like <span>). Any height and width properties will have no effect.
		  inline-block - Displays an element as an inline-level block container.
		  				 The element itself is formatted as an inline element, but you can apply height and width values.

	14) Difference between display:none and visiblity: hidden
		  visibility:hidden hides the element, but it still takes up space in the layout.
		  display:none removes the element from the document. It does not take up any space.


# Reference

[Box model](https://en.wikipedia.org/wiki/CSS_box_model) <br>
[Box sizing](https://www.tutorialspoint.com/css/css3_box_sizing.htm) <br>
[Link](https://www.softwaretestinghelp.com/css-interview-questions/amp/)