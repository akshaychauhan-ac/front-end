# CSS

    1) Selectors -
        Pseudo-class
        Pseudo-element
        id selector
        class selector

    2) Specificity -
        Think of specificity as a score/rank that determines which style declarations are ultimately applied to an element.
        Start at 0, add 1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class,
        add 1 for each element name or pseudo-element.
        o Equal specificity: the latest rule counts
            h1 {
                background-color: yellow;
            }
            h1 {
                background-color: red;
            } // This is picked.
        o ID selectors have a higher specificity than attribute selectors
            div#a {
                background-color: green;
            } // This is picked.
            #a {
                background-color: yellow;
            }
            div[id=a] {
                background-color: blue;
            }
        o Contextual selectors are more specific than a single element selector - 
            The embedded style sheet is closer to the element to be styled. So in the following situation
            From external CSS file:
            #content h1 {
                background-color: red;
            }

            In HTML file:
            <style>
                #content h1 {
                  background-color: yellow; // This is picked.
                }
            </style>
        o A class selector beats any number of element selectors
            .intro {
                background-color: yellow;
            } // This is picked.
            h1 {
                background-color: red;
            }

    3) display -
        o none - hides the element completely.
        o block - Displays an element as a block element (like <p>).
        o inline - Displays an element as an inline element (like <span>). Any height and width will have no effect.
        o inline-block - Displays an element as an inline-level block container.
                The element itself is formatted as an inline element, but you can apply height and width values.

    4) Positioning -
        o static - Default property. Elements are not affected by the TBLR properties.
        o relative - Positioned relative to its normal position. Elements are adjusted by the TBLR properties.
        o absolute - Positioned relative to the nearest positioned ancestor.
            If it has no positioned ancestors, it uses the document body, and moves along with page scrolling.
        o fixed - Positioned relative to the viewport, it always stays in the same place even if the page is scrolled.

    5) Flexbox -
        A Flexible Layout must have a parent element with the display property set to flex.
        Direct child elements(s) of the flexible container automatically becomes flexible items.

    6) Difference between display:none and visiblity: hidden
        visibility:hidden hides the element, but it still takes up space in the layout.
        display:none removes the element from the document. It does not take up any space.

    7) Box model -
        Height/Width + Padding + Border + Margin

    8) Box sizing -
        Since css2, the box property has worked like as shown below −
            width + padding + border = actual visible/rendered width of an element's box
            height + padding + border = actual visible/rendered height of an element's box
        CSS3 - box-sizing: border-box;
            Padding is taken inside the element box

    9) User Interface - resize, outline-offset, box-sizing

    10) Colors -
         CSS3 has Supported additional color properties as follows −
            RGBA colors
            HSL colors
            HSLA colors
            Opacity

    11) Shadow -
         text-shadow: 2px 2px;
         box-shadow: 10px 10px;

    12) Rounded corners - TL-TR-BR-BL
         border-radius: 15px 50px 30px;

    13) Border images - border-image (source, repeat, slice, etc)

    14) Multi background


# Reference

[Box model](https://en.wikipedia.org/wiki/CSS_box_model) <br>
[Box sizing](https://www.tutorialspoint.com/css/css3_box_sizing.htm) <br>
[Link](https://www.softwaretestinghelp.com/css-interview-questions/amp/)