var Loader = Loader || {};
var name = "krystal";
(function init() {
    Loader.check = {
        iphone: function () {
            var result = false;
            if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
                result = true;
            }
            return result;
        }
    }
    Loader.populate = {
        fromTemplate: function (name, funct) {
            $.get("../music/templates/" + name, function (html) {
                funct(html);
            });
        }, page: function (musicJson, templateHtml, musicFolder) {
            //console.log("Populate page with ", musicJson);
            var noFiles = musicJson.length;
            var musicListElem = $("#musicList");
            for (var i = 0; i < noFiles; i++) {
                var thisMp3 = musicFolder + "/" + musicJson[i];
                if (thisMp3.indexOf("mp3") >= 0) {
                    if (Loader.check.iphone()) {
                        musicListElem.append("<p>Title: <a href=\"" + thisMp3 + "\">" + thisMp3 + "</a></p>");
                    } else {
                        var wrapped = $(templateHtml);
                        var itsSourceTag = wrapped.find("source");
                        var dashIndex = thisMp3.indexOf("/")+1;
                        var justMp3 = thisMp3.substring(dashIndex);
                        musicListElem.append("<p>Title: " + justMp3 + "</p>");
                        itsSourceTag.attr("src", thisMp3);
                        //console.log(itsSourceTag);
                        musicListElem.append(wrapped);
                    }

                }
            }
        }
    }
    Loader.retrieve = {
        fileList: function (musicFolder, templateHtml, funct) {
            $.get("../utils/FolderContents.php?folder=" + musicFolder, function (json) {
                funct(json);
            });
        }
    }
    //generate page
    Loader.populate.fromTemplate("mp3.html", function (html) {
        Loader.retrieve.fileList(name, html, function (json) {
            Loader.populate.page(json, html, name);
        });
    });

})();//self-calling function









