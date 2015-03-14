---
layout: post
title: CKEditor Candimage
date: 2015-03-09
permalink: "utils/ckeditor-candimage/"
util: true
util_pos: 4
meta_description: "CKEditor plugin that allows upload and browse images."
---

CKEditor plugin that allows upload and browse images.

<div class="grid grid-pad ctable">
    <div class="col-1-2">
        <div class="content">
            <div class="cheader">Features</div>
            <div class="cbody">
                <ul>
                    <li>Image uploader</li>
                    <li>Image browser</li>
                    <li>Customizable</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-1-2">
        <div class="content">
            <div class="cheader">Requirements</div>
            <div class="cbody">
                <ul>
                    <li><a href="http://ckeditor.com">CKEditor</a> (with <a href="http://ckeditor.com/addon/image">Image</a> plugin)</li>
                    <li><a href="http://jquery.com/">jQuery</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

## Installation

1. Copy the plugin to the <code>/plugins</code> folder.
2. Enable the plugin:
{% highlight js %}
config.extraPlugins = 'candimage';
{% endhighlight %}
3. Toolbar:
    - Group: <code>candimage</code>
    - Buttons:
        - <code>candimageProps</code> Open the image properties dialog.
        - <code>candimageUpload</code> Upload image.
        - <code>candimagePick</code> Open the image browser dialog.

[<a href="http://docs.ckeditor.com/#!/guide/dev_plugins">Installing plugins</a>]
[<a href="http://docs.ckeditor.com/#!/guide/dev_toolbar">Toolbar customization</a>]

## Configuration

Required:

{% highlight js %}
config.candimage = {

    // Requests.
    getUrl: '/get',
    postUrl: '/upload',
    deletetUrl: '/delete',
};
{% endhighlight %}

- The <code>get</code> request must return a JSON array of items containing, at least, the fields specified in <code>tplReplacements</code>.
- The <code>post</code> request must return a JSON object with, at least, the fields specified in <code>tplReplacements</code>.
- <code>deletetUrl</code> may contain the <code>{file}</code> parameter, which will be replaced by the name of the image.
    - <code>/images/{file}</code> becomes <code>/images/my-image-filename</code>.

Optional:

{% highlight js %}
config.candimage = {

    // Image browser theme.
    theme: 'grid',

    // Show/hide advanced tab on Image dialog.
    advancedTabHidden: true,

    // CSS prefix.
    cssClsPrefix: 'candimage',

    // Fields to replace on the image template used by the browser.
    // Default: specified by the theme.
    tplReplacements: [],

    // Requests.
    deleteMethod: 'DELETE',

    // Browser dialog properties.
    picker: {
        width: 600,
        height: 400,
        minWidth: 300,
        minHeight: 200,
        defaultContent: '...',
    },

    // One click upload using FormData interface.
    // Override the method to use another system.
    upload: function(editor) {},

    // Upload callbacks.
    uploadAlways: function(editor, result, textStatus, jqXHR, context) {},
    uploadDone: function(editor, result, textStatus, jqXHR, context) {},
    uploadFail: function(editor, jqXHR, textStatus, errorThrown, context) {},

    // Browser callbacks.
    pickerOnLoad: function(editor, dialog, container) {},
    pickerOnShow: function(editor, dialog, container) {},
    pickerOnResize: function(editor, dialog, container, e) {},
    pickerImgClick: function(editor, container, img) {},
    pickerImgDblClick: function(editor, container, img, buttons) {},
    pickerOnOk: function(editor, dialog, container) {},

    // Get images callbacks.
    getImgsAlways: function(editor, result, textStatus, jqXHR, context) {},
    getImgsDone: function(editor, result, textStatus, jqXHR, context) {},
    getImgsFail: function(editor, jqXHR, textStatus, errorThrown, context) {},

    // Render browser's image template.
    applyTemplate: function(tpl) {},

    // Confirm image deletion.
    deleteImgConfirm: function(editor, container, $img, imgName) {},

    // Delete image method.
    deleteImg: function(editor, container, $img, imgName) {},

    // Deletion callbacks.
    deleteImgAlways: function(editor, $img, result, textStatus, jqXHR, context) {},
    deleteImgDone: function(editor, $img, result, textStatus, jqXHR, context) {},
    deleteImgFail: function(editor, $img, jqXHR, textStatus, errorThrown, context) {},    
};
{% endhighlight %}

- When overwriting a function is advisable to check the original code.

## Themes

The themes define the appearance of the images browser. By default <strong>Candimage</strong> includes two themes: <code>grid</code> and <code>list</code>.

A theme consists of three files:

- <code><strong>style.css</strong></code> Styles used by the images browser.
- <code><strong>config.json</strong></code> Set properties like <code>tplReplacements</code> or <code>picker.*</code>.
- <code><strong>tpl-img.html</strong></code> Browser's image template.

Themes location: <code>/plugins/candimage/themes</code>.

Click on the next link to view the source code and a basic example.

<p class="try-me">
    <a class="github" href="https://github.com/circunspecter/candimage">View on GitHub</a>
</p>