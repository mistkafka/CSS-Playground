### Collapsing margins
---

I think the [CSS2.1_8.3.1 Collapsing margins](http://www.w3.org/TR/CSS2/box.html#collapsing-margins) is very important.
But it's really hard to learning, if we just read the specification. So I decided to coding examples for every key rule.

I'll don't write a tutorial for understanding *collapsing margins*. Because there are so many tutorials for it. So these
example is private examples too.

These rule is:
1. The resulting margin width is *the maximum* of the collapsing margins' widths.
2. Horizontal margins never collapse (skip)
3. Margins of the *root(html)* element's box don't collapse
4. TODO: If the top and bottom margins of an element with clearance [p. 149] are adjoining, its margins collapse with the adjoining margins of following siblings but that resulting margin does not collapse with the bottom margin of the parent block.
5. TODO:  If the top margin of a box with non-zero computed 'min-height' and auto computed 'height' collapses with the bottom margin of its last in-flow child, then the child's bottom margin doesn't collapse with the parent's bottom margin.
6.
