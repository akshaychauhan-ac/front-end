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

# Reference

[Box model](https://en.wikipedia.org/wiki/CSS_box_model) <br>
[Box sizing](https://www.tutorialspoint.com/css/css3_box_sizing.htm)