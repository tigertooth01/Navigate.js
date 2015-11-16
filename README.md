# Navigate.js
A very slim jquery plugin that allows native like page navigation in single page, hybrid mobile apps.

*v1.0.0 is out! Hopefully it's best for deployment. Fingers crossed!*

### Version
1.0.1

### Installation

Just include the js and css

```sh
<script src="navigate.js"></script>
```
```sh
<link rel="stylesheet" type="text/css" href="navigate.css" />
```

###Usage

In HTML, define each page as 'page' class

```sh
<div class='page' id='page1'>
            <h1>Page 1</h1>
            <p onclick="navigateTo('#page2')">Go to Page 2</p>
            <p onclick='navigateGoBack()'>Back</p>
        </div>
```        

Initialize navigate.js by calling navigateStart(id), where id is the first page's id.

```sh
navigateStart('#page1');
```

License
----

MIT
