# Navigate.js
A very slim jquery plugin that allows native like page navigation in single page, hybrid mobile apps.

Still under development. Not recommended for usage unless specified.


# Installation
As standalone just include the file in a script tag:
<script src="navigate.js"></script>

And include the css file
<link rel="stylesheet" type="text/css" href="navigate.css" />


# Usage
<div class='page' id='page1'><!--A single page div-->
            <h1>Page 1</h1>
            <p onclick="navigateTo('#page2')">Go to Page 2</p>
            <p onclick='goBack()'>Back</p>
</div>
