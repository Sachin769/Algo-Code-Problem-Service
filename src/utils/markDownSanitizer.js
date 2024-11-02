const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurnDownService = require("turndown");

function markDownSanitizer(markDownContent){
    const turnDownService = new TurnDownService();
    
    //1.Converted Markdown to html
    const convertedToHtml = marked.parse(markDownContent);

    //2.Sanitize the html
    const sanitizedHtml = sanitizeHtml(convertedToHtml,{
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
    });

    //3.Sanitized Html converted back to markDown so markdown sanitized
    const sanitizedHtmlToMarkDown = turnDownService.turndown(sanitizedHtml);
    return sanitizedHtmlToMarkDown;
}

module.exports = markDownSanitizer;


const input = `
# Hellow World


### this is the markdown
- something

<script>alert("whooo")</script>

[Link](www.google.com)

`

markDownSanitizer(input);