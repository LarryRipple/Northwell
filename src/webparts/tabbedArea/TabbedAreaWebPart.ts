import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import * as $ from "jquery";
import * as jQuery from "jquery";
window["jQuery"] = window["$"] = $;
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons';

import {
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { sp } from "@pnp/sp/presets/all";
require("uikit/dist/css/uikit.min.css");
require("uikit/dist/js/uikit.min.js");
import { PropertyFieldFilePicker, IPropertyFieldFilePickerProps, IFilePickerResult } from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";
import * as strings from 'TabbedAreaWebPartStrings';

import { PropertyFieldSliderWithCallout } from '@pnp/spfx-property-controls/lib/PropertyFieldSliderWithCallout';

export interface ITabbedAreaWebPartProps {
  sliderWithCallout: number;
  tab1title: string;
  tab1text: string;
  tab1image: string;
  actiontext: string;
  actionlink: string;
  filePickerResult1: IFilePickerResult;
  tab2title: string;
  tab2text: string;
  tab2image: string;
  filePickerResult2: IFilePickerResult;
  actiontext2: string;
  actionlink2: string;
  tab3title: string;
  tab3text: string;
  tab3image: string;
  filePickerResult3: IFilePickerResult;
  actiontext3: string;
  actionlink3: string;
  tab5title: string;
  tab5text: string;
  tab5image: string;
  filePickerResult5: IFilePickerResult;
  actiontext5: string;
  actionlink5: string;
  tab6title: string;
  tab6text: string;
  tab6image: string;
  filePickerResult6: IFilePickerResult;
  actiontext6: string;
  actionlink6: string;
  tab4title: string;
  tab4text: string;
  tab4image: string;
  filePickerResult4: IFilePickerResult;
  actiontext4: string;
  actionlink4: string;
  color: string;
  display: string;
  type: string;
}

export default class TabbedAreaWebPart extends BaseClientSideWebPart<ITabbedAreaWebPartProps> {

  public render(): void {
    var colorstyle =$("#pagecolor").text();
    const uniqueref = Math.floor(Math.random()*90000) + 10000;
    const attach = "#"+uniqueref
const width = window.screen.availWidth;
    var headertext;
    var headertextdark;
var headerreptext;
var overlaycolor;
var contentsplit;
var slidenav;
var colorimage;
if(colorstyle ==undefined){slidenav = "#7dcdee"} else
if(colorstyle =="#009adf"){slidenav = "#7dcdee"} else
if(colorstyle =="#5c0b8a"){slidenav = "#c38ebe"}
if(this.properties.display == undefined){contentsplit = "background:color:transparent"}
else if(this.properties.display == "image"){contentsplit = "background:color:transparent"}
else if(this.properties.display == "split"){contentsplit = "background:color:"+colorstyle}

var mina = `font-family: 'Bristol' !important;`
var mainfont = `font-family: 'thesans' !important;`

if(this.properties.display !=undefined){}
if(colorstyle ==undefined){headertext = "#6dc3df"} else
if(colorstyle =="#009adf"){headertext = "#6dc3df"} else
{headertext = "#bd83ca"}
if(this.properties.display !=undefined){}
if(colorstyle ==undefined){headertextdark = "#004f9c"} else
if(colorstyle =="#009adf"){headertextdark = "#004f9c"} else
{headertextdark = "#60257e"}

if(colorstyle ==undefined){headerreptext = "#003ca5"} else
if(colorstyle =="#009adf"){headerreptext = "#003ca5"} else
if(colorstyle =="#5c0b8a"){headerreptext = "#9e29b5"}

if(colorstyle ==undefined){overlaycolor = "rgba(0,60,165,.6)"} else
if(colorstyle =="#009adf"){overlaycolor = "rgba(0,60,165,.6)"} else
if(colorstyle =="#5c0b8a"){overlaycolor = "rgba(92,11,138,.6)"}
if(colorstyle ==undefined){colorimage = "blue"} else
if(colorstyle =="#009adf"){colorimage = "blue"} else
if(colorstyle =="#5c0b8a"){colorimage = "purple"}

if(this.properties.display == undefined){contentsplit = "background-color:transparent"}
else if(this.properties.display == "image"){contentsplit = "background-color:transparent"}
else if(this.properties.display == "split"){contentsplit = "background-color:"+colorstyle}
if (this.properties.tab1title !=undefined){
var headingreplacetext = this.properties.tab1title.replace('[','<span style="'+mina+' font-size:50px;position:relative;color:'+headertext+'">');
var headingendreplacetext = headingreplacetext.replace("]","</span>").replace("|","</br>")} else{headingendreplacetext = ""}
if (this.properties.tab5title !=undefined){
  var headingreplacetext5 = this.properties.tab5title.replace('[','<span style="'+mina+' font-size:50px;position:relative;color:'+headertext+'">');
  var headingendreplacetext5 = headingreplacetext5.replace("]","</span>").replace("|","</br>")} else{headingendreplacetext5 = ""}
  if (this.properties.tab6title !=undefined){
    var headingreplacetext6 = this.properties.tab6title.replace('[','<span style="'+mina+' font-size:50px;position:relative;color:'+headertext+'">');
    var headingendreplacetext6 = headingreplacetext6.replace("]","</span>").replace("|","</br>")} else{headingendreplacetext6 = ""}
if (this.properties.tab1title !=undefined){
  var headingreplacetextdark = this.properties.tab1title.replace('[','<span style="'+mina+' font-size:50px;position:relative;color:'+headertextdark+'">');
  var headingendreplacetextdark = headingreplacetextdark.replace("]","</span>").replace("|","</br>")} else{headingendreplacetextdark = ""}
  if (this.properties.tab2title !=undefined){
    var headingreplacetextdark2 = this.properties.tab2title.replace('[','<span style="'+mina+' font-size:50px;position:relative;color:'+headertextdark+'">');
    var headingendreplacetextdark2 = headingreplacetextdark2.replace("]","</span>").replace("|","</br>")} else{headingendreplacetextdark2 = ""}
    if (this.properties.tab3title !=undefined){
      var headingreplacetextdark3 = this.properties.tab3title.replace('[','<span style="'+mina+' font-size:50px;position:relative;color:'+headertextdark+'">');
      var headingendreplacetextdark3 = headingreplacetextdark3.replace("]","</span>").replace("|","</br>")} else{headingendreplacetextdark3 = ""}
      if (this.properties.tab4title !=undefined){
        var headingreplacetextdark4 = this.properties.tab4title.replace('[','<span style="'+mina+' font-size:50px;position:relative;color:'+headertextdark+'">');
        var headingendreplacetextdark4 = headingreplacetextdark4.replace("]","</span>").replace("|","</br>")} else{headingendreplacetextdark4 = ""}
        if (this.properties.tab5title !=undefined){
          var headingreplacetextdark5 = this.properties.tab5title.replace('[','<span style="'+mina+' font-size:50px;position:relative;color:'+headertextdark+'">');
          var headingendreplacetextdark5 = headingreplacetextdark5.replace("]","</span>").replace("|","</br>")} else{headingendreplacetextdark5 = ""}
          if (this.properties.tab6title !=undefined){
            var headingreplacetextdark6 = this.properties.tab6title.replace('[','<span style="'+mina+' font-size:50px;position:relative;color:'+headertextdark+'">');
            var headingendreplacetextdark6 = headingreplacetextdark6.replace("]","</span>").replace("|","</br>")} else{headingendreplacetextdark6 = ""}

if (this.properties.tab2title !=undefined){
  var headingreplacetext2 = this.properties.tab2title.replace('[','<span style="'+mina+' font-size:50px;position:relative;color:'+headertext+'">');
  var headingendreplacetext2 = headingreplacetext2.replace("]","</span>").replace("|","</br>")} else{headingendreplacetext2 = ""}

  if (this.properties.tab3title !=undefined){
    var headingreplacetext3= this.properties.tab3title.replace('[','<span style="'+mina+' font-size:50px;position:relative;color:'+headertext+'">');
    var headingendreplacetext3 = headingreplacetext3.replace("]","</span>").replace("|","</br>")} else{headingendreplacetext3 = ""}

    if (this.properties.tab4title !=undefined){
      var headingreplacetext4= this.properties.tab4title.replace('[','<span style="'+mina+' font-size:50px;position:relative;color:'+headertext+'">');
      var headingendreplacetext4 = headingreplacetext4.replace("]","</span>").replace("|","</br>")} else{headingendreplacetext4 = ""}


var image1;
var image2;
var image3;
var image4;
var image5;
var image6;
if(this.properties.filePickerResult1==undefined){image1 = ""} else {image1 = this.properties.filePickerResult1.fileAbsoluteUrl}
if(this.properties.filePickerResult2==undefined){image2 = ""} else {image2 = this.properties.filePickerResult2.fileAbsoluteUrl}
if(this.properties.filePickerResult3==undefined){image3 = ""} else {image3 = this.properties.filePickerResult3.fileAbsoluteUrl}
if(this.properties.filePickerResult4==undefined){image4 = ""} else {image4 = this.properties.filePickerResult4.fileAbsoluteUrl}
if(this.properties.filePickerResult5==undefined){image5 = ""} else {image5 = this.properties.filePickerResult5.fileAbsoluteUrl}
if(this.properties.filePickerResult6==undefined){image6 = ""} else {image6 = this.properties.filePickerResult6.fileAbsoluteUrl}

var url = this.context.pageContext.web.absoluteUrl;
    $("body")
.append(`<style id="createtabs" type="text/css">

.tabsuk-switcher{margin-bottom:-20px !important}
.uk-slideshow-items>*{max-height:800px}
#workbenchPageContent{max-width:1500px}
.bodytext{font-family: 'thesans' !important;font-size:15px;line-height:18pt;color:white;font-weight:100; width:60%}
.bodytextdark{font-family: 'thesans' !important;font-size:15px;line-height:18pt;color:#53565a;font-weight:100; width:60%}
.triangle{width: 0;
  height: 0;
  border: 0 solid transparent;
  border-left-width: 22px;
  border-right-width: 1px;
  border-top: 18px solid `+headertext+`;
  top: 19px;
    position: relative;
    left: -6px;}

    .triangledark{width: 0;
      height: 0;
      border: 0 solid transparent;
      border-left-width: 22px;
      border-right-width: 1px;
      border-top: 18px solid `+headertextdark+`;
      top: 19px;
        position: relative;
        left: -6px;}

    .leftpanel{width:`+width/2+`px !important;`+ contentsplit+`; position: absolute;height:780px;
    top: 1px;
    width: 300px;
    left: 1px;}
    .uk-subnav-pill>.uk-active>a {
      background-color: `+colorstyle+` !important;
      color: #fff !important;
  }

  .uk-switcher>*>:last-child {
    margin-bottom: 0;
    position: relative;
    bottom: 20px;
}
  .uk-subnav-pill>*>a:active, .uk-subnav-pill>*>a:focus, .uk-subnav-pill>*>a:hover {
    background-color: `+colorstyle+` !important;
    color: #fff !important;

}
.uk-subnav-pill>*>:first-child {
  padding: 5px 10px;
  background: 0 0;
  color: `+colorstyle+` !important;font-weight:normal
}
.uk-dotnav>*>* {
  display: block;
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  border-radius: 0%;
  background: 0 0;
  text-indent: 100%;
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid hsla(0,0%,40%,.4);
  transition: .2s ease-in-out;
  transition-property: background-color,border-color;
  background-color:white;
}
.uk-icon.uk-slidenav-next.uk-slidenav {
  color: white;
  right: -55px;
  background:`+slidenav+`;
  padding: 10px;

  padding-left: 25px;
  padding-right: 25px;
}
.uk-icon.uk-slidenav-previous.uk-slidenav {
  color: white;
  left: -55px;
  background: `+slidenav+`;
  padding: 10px;

  padding-left: 25px;
  padding-right: 25px;
}
.uk-dotnav>.uk-active>* {
  background-color: `+slidenav+`;
  border-color: transparent;
}
.uk-subnav>* {

  text-align: center;
}
.uk-inline{    max-height: 780px;
  overflow: hidden;}
.uk-subnav>* {
  flex: none;
  padding-left: 0px;
  position: relative;
  padding-right: 0px;
  left: 20px;
}
    .cta{color:`+headertext+` !important; font-family: 'thesans';}
    .ctadark{color:`+headertextdark+` !important; font-family: 'thesans';}


    .uk-overlay {
      padding: 30px;
      background: rgba(0,154,223,0.4);
      background-image: url(`+url+`/Shared%20Documents/NW_BehindImage_Blue_1.png);
      background-repeat: no-repeat;
      background-position: right top;
  }

  .uk-slideshow-items>* {


    background: `+overlaycolor+`;
    background-image: url(`+url+`/Shared%20Documents/NW_BehindImage_`+colorimage+`_1.png);
    background-repeat: no-repeat;
    background-position: right top;}
     .cke_editable a{font-family: 'thesans';color:`+slidenav+`; font-size:15px}
     .uk-overlay-primary {
      background-color: `+overlaycolor+`;
      background-image: url(`+url+`/Shared%20Documents/NW_BehindImage_`+colorimage+`_1.png);
      background-repeat: no-repeat;
      background-position: right top;
  }
    </style>`)
    this.domElement.innerHTML = `<div id="`+uniqueref+`"></div>`
    sp.setup({
      spfxContext: this.context});

  // HERE WE ARE REMOVING THE BRISTOL FONT MARKDOWN FOR THE TAB HEADERS WHICH ALLOWS US TO USE THE SAME PROPERTY PANE ITEM FOR BOTH TAB AND CONTENT TITLE

      if(this.properties.tab1title !=undefined){var strippedtitle1 = this.properties.tab1title.replace("[","").replace("]","").replace("|","")}
      if(this.properties.tab2title !=undefined){var strippedtitle2 = this.properties.tab2title.replace("[","").replace("]","").replace("|","")}
      if(this.properties.tab3title !=undefined){var strippedtitle3 = this.properties.tab3title.replace("[","").replace("]","").replace("|","")}
      if(this.properties.tab4title !=undefined){var strippedtitle4 = this.properties.tab4title.replace("[","").replace("]","").replace("|","")}
      if(this.properties.tab5title !=undefined){var strippedtitle5 = this.properties.tab5title.replace("[","").replace("]","").replace("|","")}
      if(this.properties.tab6title !=undefined){var strippedtitle6 = this.properties.tab6title.replace("[","").replace("]","").replace("|","")}
if(this.properties.type ==undefined){var content = ``}
else if(this.properties.type =="layers"){
  var content = `
<div id="layer1`+uniqueref+`" style="max-height:450px;overflow:hidden">
<div   class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
  <div style="max-height:450px" class="uk-flex-last@s uk-card-media-right uk-cover-container">
  <div style="height:450px" class=" uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="`+image1+`" uk-img></div>
      <canvas width="600" height="500"></canvas>
  </div>
  <div>
      <div class="uk-card-body" style="height:450px;background-color:`+headertextdark+`" >
      <div class="" style="width:70%;position:relative;left:30px">

      <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;color:white !important">`+headingendreplacetext+`</h1>
          <div class="bodytext" style="width:100%">`+this.properties.tab1text+`</div>
          <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink+`"> <i style="" class="triangle"></i>`+this.properties.actiontext+`</a>

     </div>
      </div>
  </div>
</div>
</div>
<div id="layer2`+uniqueref+`" style="max-height:450px;overflow:hidden">
<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
  <div style="max-height:450px" class="uk-card-media-left uk-cover-container">
      <div style="height:450px" class=" uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="`+image2+`" uk-img></div>
      <canvas width="600" height="500"></canvas>
  </div>
  <div>
      <div class="uk-card-body" style="height:450px;background-color:#fff">
      <div class="" style="width:70%;position:relative;left:30px">

      <h1 style="color:`+headertextdark+`; font-family: 'thesans' !important;color:white !important">`+headingendreplacetextdark2+`</h1>
          <div class="bodytext" style="width:100%;color:#53565a">`+this.properties.tab2text+`</div>
          <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink2+`"> <i style="" class="triangle"></i>`+this.properties.actiontext2+`</a>

     </div>
      </div>
  </div>
</div></div>

<div id="layer3`+uniqueref+`" style="max-height:450px;overflow:hidden">
<div   class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
  <div style="max-height:450px" class="uk-flex-last@s uk-card-media-right uk-cover-container">
  <div style="height:450px" class=" uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="`+image3+`" uk-img></div>
      <canvas width="600" height="500"></canvas>
  </div>
  <div>
      <div class="uk-card-body" style="height:450px;background-color:`+headertextdark+`" >
      <div class="" style="width:70%;position:relative;left:30px">

      <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;color:white !important">`+headingendreplacetext3+`</h1>
          <div class="bodytext" style="width:100%">`+this.properties.tab3text+`</div>
          <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink3+`"> <i style="" class="triangle"></i>`+this.properties.actiontext3+`</a>

     </div>
      </div>
  </div>
</div>
</div>
<div id="layer4`+uniqueref+`" style="max-height:450px;overflow:hidden">
<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
  <div style="max-height:450px" class="uk-card-media-left uk-cover-container">
      <div style="height:450px" class=" uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="`+image4+`" uk-img></div>
      <canvas width="600" height="500"></canvas>
  </div>
  <div>
      <div class="uk-card-body" style="height:450px;background-color:#fff">
      <div class="" style="width:70%;position:relative;left:30px">

      <h1 style="color:`+headertextdark+`; font-family: 'thesans' !important;color:white !important">`+headingendreplacetextdark4+`</h1>
      <div class="bodytext" style="width:100%;color:#53565a">`+this.properties.tab4text+`</div>
      <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink4+`"> <i style="" class="triangle"></i>`+this.properties.actiontext4+`</a>

     </div>
      </div>
  </div>
</div></div>



<div id="layer5`+uniqueref+`" style="max-height:450px;overflow:hidden">
<div   class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
  <div style="max-height:450px" class="uk-flex-last@s uk-card-media-right uk-cover-container">
  <div style="height:450px" class=" uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="`+image5+`" uk-img></div>
      <canvas width="600" height="500"></canvas>
  </div>
  <div>
      <div class="uk-card-body" style="height:450px;background-color:`+headertextdark+`" >
      <div class="" style="width:70%;position:relative;left:30px">

      <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;color:white !important">`+headingendreplacetext5+`</h1>
          <div class="bodytext" style="width:100%">`+this.properties.tab5text+`</div>
          <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink5+`"> <i style="" class="triangle"></i>`+this.properties.actiontext5+`</a>

     </div>
      </div>
  </div>
</div>
</div>
<div id="layer6`+uniqueref+`" style="max-height:450px;overflow:hidden">
<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
  <div style="max-height:450px" class="uk-card-media-left uk-cover-container">
      <div style="height:450px" class=" uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="`+image6+`" uk-img></div>
      <canvas width="600" height="500"></canvas>
  </div>
  <div>
      <div class="uk-card-body" style="height:450px;background-color:#fff">
      <div class="" style="width:70%;position:relative;left:30px">

      <h1 style="color:`+headertextdark+`; font-family: 'thesans' !important;color:white !important">`+headingendreplacetextdark6+`</h1>
          <div class="bodytext" style="width:100%;color:#53565a">`+this.properties.tab6text+`</div>
          <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink6+`"> <i style="" class="triangle"></i>`+this.properties.actiontext6+`</a>

     </div>
      </div>
  </div>
</div></div>
`}
else if(this.properties.type =="tabs"){

  // HERE WE ARE ADDING THE STRIPPED TITLES FROM THE VARIABLES ABOVE

  var content = `
    <ul style="width:100%;`+mainfont+`;text-transform:none !important" class="uk-subnav uk-subnav-pill  uk-child-width-expand" uk-switcher="animation: uk-animation-fade">
    <li id="tabmenu1`+uniqueref+`"><a style="`+mainfont+`;text-transform:none !important;font-size:20px" href="#">`+strippedtitle1+`</a></li>
    <li id="tabmenu2`+uniqueref+`"><a style="`+mainfont+`;text-transform:none !important;font-size:20px" href="#" >`+strippedtitle2+`</a></li>
    <li id="tabmenu3`+uniqueref+`"><a style="`+mainfont+`;text-transform:none !important;font-size:20px" href="#" >`+strippedtitle3+`</a></li>
    <li id="tabmenu4`+uniqueref+`"><a style="`+mainfont+`;text-transform:none !important;font-size:20px" href="#" >`+strippedtitle4+`</a></li>
    <li id="tabmenu5`+uniqueref+`"><a style="`+mainfont+`;text-transform:none !important;font-size:20px" href="#" >`+strippedtitle5+`</a></li>
    <li id="tabmenu6`+uniqueref+`"><a style="`+mainfont+`;text-transform:none !important;font-size:20px" href="#" >`+strippedtitle6+`</a></li>
</ul>

<ul style="width:100%; margin-bottom:-20px !important" class="tabsuk-switcher uk-switcher uk-margin">
    <li style="width:100%" >
    <div class="uk-inline">
    <img style="width:100vw" src="`+image1+`" alt="">
    <div  class="uk-overlay-primary `+uniqueref+`uk-overlay-primary uk-position-cover"></div>
    <div class="uk-overlay uk-position-top-left uk-light">
    <div class="leftpanel">
    <div style="margin-top:20%;margin-left:20%">
    <h1 >`+headingendreplacetext+`</h1>
        <div class="bodytext">`+this.properties.tab1text+`</div>
        <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink+`"> <i style="" class="triangle"></i>`+this.properties.actiontext+`</a>
    </div>
    </div>
    </div>
</div>



    </li>
    <li style="width:100%" >
    <div class="uk-inline">
    <img style="width:100vw" src="`+image2+`" alt="">
    <div  class="uk-overlay-primary `+uniqueref+`uk-overlay-primary uk-position-cover"></div>
    <div class="uk-overlay uk-position-top-left uk-light">
    <div class="leftpanel">
    <div style="margin-top:20%;margin-left:20%">
    <h1>`+headingendreplacetext2+`</h1>
        <div class="bodytext">`+this.properties.tab2text+`</div>
        <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink2+`"> <i style="" class="triangle"></i>`+this.properties.actiontext2+`</a>
    </div>
    </div>
    </div>
</div>



    </li>



    <li style="width:100%" >
    <div class="uk-inline">
    <img style="width:100vw" src="`+image3+`" alt="">
    <div class="uk-overlay-primary `+uniqueref+`uk-overlay-primary uk-position-cover"></div>
    <div class="uk-overlay uk-position-top-left uk-light">
    <div class="leftpanel">
    <div style="margin-top:20%;margin-left:20%">
    <h1>`+headingendreplacetext3+`</h1>
        <div class="bodytext">`+this.properties.tab3text+`</div>
        <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink3+`"> <i style="" class="triangle"></i>`+this.properties.actiontext3+`</a>
    </div>
    </div>
    </div>
</div>



    </li>




    <li style="width:100%" >
    <div class="uk-inline">
    <img style="width:100vw" src="`+image4+`" alt="">
    <div  class="uk-overlay-primary `+uniqueref+`uk-overlay-primary uk-position-cover"></div>
    <div class="uk-overlay uk-position-top-left uk-light">
    <div class="leftpanel">
    <div style="margin-top:20%;margin-left:20%">
    <h1>`+headingendreplacetext4+`</h1>
        <div class="bodytext">`+this.properties.tab4text+`</div>
        <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink4+`"> <i style="" class="triangle"></i>`+this.properties.actiontext4+`</a>
    </div>
    </div>
    </div>
</div>



    </li>

    <li style="width:100%" >
    <div class="uk-inline">
    <img style="width:100vw" src="`+image5+`" alt="">
    <div  class="uk-overlay-primary `+uniqueref+`uk-overlay-primary uk-position-cover"></div>
    <div class="uk-overlay uk-position-top-left uk-light">
    <div class="leftpanel">
    <div style="margin-top:20%;margin-left:20%">
    <h1>`+headingendreplacetext5+`</h1>
        <div class="bodytext">`+this.properties.tab5text+`</div>
        <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink5+`"> <i style="" class="triangle"></i>`+this.properties.actiontext5+`</a>
    </div>
    </div>
    </div>
</div>



    </li>

    <li style="width:100%" >
    <div class="uk-inline">
    <img style="width:100vw" src="`+image6+`" alt="">
    <div  class="uk-overlay-primary `+uniqueref+`uk-overlay-primary uk-position-cover"></div>
    <div class="uk-overlay uk-position-top-left uk-light">
    <div class="leftpanel">
    <div style="margin-top:20%;margin-left:20%">
    <h1>`+headingendreplacetext6+`</h1>
        <div class="bodytext">`+this.properties.tab6text+`</div>
        <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink6+`"> <i style="" class="triangle"></i>`+this.properties.actiontext6+`</a>
    </div>
    </div>
    </div>
</div>



    </li>

</ul>
    `}

   else if(this.properties.type =="slides"){var content = `
   <div style="background:`+colorstyle+`;padding:40px;padding-top:80px;padding-bottom:80px">
   <div uk-slideshow="animation: push">

   <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

       <ul class="uk-slideshow-items">
           <li id="slide1`+uniqueref+`">
               <img src="`+image1+`" alt="" uk-cover>
               <div class="uk-overlay-default uk-position-cover ">
               <div class="rightpnel uk-position-top-right" style="width:50%">
               <div style="margin-top: 20%;margin-left: 10%;">
               <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;">`+headingendreplacetextdark+`</h1>
                   <div class="bodytextdark">`+this.properties.tab1text+`</div>
                   <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="ctadark"  href="`+this.properties.actionlink+`"> <i style="" class="triangledark"></i>`+this.properties.actiontext+`</a>
               </div>
               </div>
           </li>

           <li id="slide2`+uniqueref+`">
           <img src="`+image2+`" alt="" uk-cover>
           <div class="uk-overlay-default uk-position-cover ">
           <div class="rightpnel uk-position-top-right" style="width:50%">
           <div style="margin-top: 20%;margin-left: 10%;">
           <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;">`+headingendreplacetextdark2+`</h1>
               <div class="bodytextdark">`+this.properties.tab2text+`</div>
               <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="ctadark"  href="`+this.properties.actionlink2+`"> <i style="" class="triangledark"></i>`+this.properties.actiontext2+`</a>
           </div>
           </div>
       </li>


       <li id="slide3`+uniqueref+`">
       <img src="`+image3+`" alt="" uk-cover>
       <div class="uk-overlay-default uk-position-cover ">
       <div class="rightpnel uk-position-top-right" style="width:50%">
       <div style="margin-top: 20%;margin-left: 10%;">
       <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;">`+headingendreplacetextdark3+`</h1>
           <div class="bodytextdark">`+this.properties.tab3text+`</div>
           <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="ctadark"  href="`+this.properties.actionlink3+`"> <i style="" class="triangledark"></i>`+this.properties.actiontext3+`</a>
       </div>
       </div>
   </li>



   <li id="slide4`+uniqueref+`">
   <img src="`+image4+`" alt="" uk-cover>
   <div class="uk-overlay-default uk-position-cover ">
   <div class="rightpnel uk-position-top-right" style="width:50%">
   <div style="margin-top: 20%;margin-left: 10%;">
   <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;">`+headingendreplacetextdark4+`</h1>
       <div class="bodytextdark">`+this.properties.tab4text+`</div>
       <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="ctadark"  href="`+this.properties.actionlink4+`"> <i style="" class="triangledark"></i>`+this.properties.actiontext4+`</a>
   </div>
   </div>
</li>

<li id="slide5`+uniqueref+`">
<img src="`+image5+`" alt="" uk-cover>
<div class="uk-overlay-default uk-position-cover ">
<div class="rightpnel uk-position-top-right" style="width:50%">
<div style="margin-top: 20%;margin-left: 10%;">
<h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;">`+headingendreplacetextdark5+`</h1>
    <div class="bodytextdark">`+this.properties.tab5text+`</div>
    <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="ctadark"  href="`+this.properties.actionlink5+`"> <i style="" class="triangledark"></i>`+this.properties.actiontext5+`</a>
</div>
</div>
</li>

<li id="slide6`+uniqueref+`">
<img src="`+image6+`" alt="" uk-cover>
<div class="uk-overlay-default uk-position-cover ">
<div class="rightpnel uk-position-top-right" style="width:50%">
<div style="margin-top: 20%;margin-left: 10%;">
<h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;">`+headingendreplacetextdark6+`</h1>
    <div class="bodytextdark">`+this.properties.tab6text+`</div>
    <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="ctadark"  href="`+this.properties.actionlink6+`"> <i style="" class="triangledark"></i>`+this.properties.actiontext6+`</a>
</div>
</div>
</li>


       </ul>

       <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
       <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

   </div>

   <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div></div>

   `}

   else if(this.properties.type =="slidesabove"){var content = `
   <div style="background:`+colorstyle+`;padding:40px;padding-top:80px;padding-bottom:80px">
   <div uk-slideshow>

   <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

       <ul class="uk-slideshow-items" style="height:900px">


           <li style="background-color:`+colorstyle+` !important" id="slide1`+uniqueref+`">
           <div class="" style="width:50%;position:relative;left:15%">

           <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;color:white !important">`+headingendreplacetext+`</h1>
               <div class="bodytext" style="width:100%">`+this.properties.tab1text+`</div>
               <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink+`"> <i style="" class="triangle"></i>`+this.properties.actiontext+`</a>

          </div>
          </br>

            <div style="height:600px">  <img src="`+image1+`" style="width:100vw" alt=""></div>



           </li>

           <li style="background-color:`+colorstyle+` !important" id="slide2`+uniqueref+`">
           <div class="" style="width:50%;position:relative;left:15%">

           <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;color:white !important">`+headingendreplacetext2+`</h1>
               <div class="bodytext" style="width:100%">`+this.properties.tab2text+`</div>
               <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink+`"> <i style="" class="triangle"></i>`+this.properties.actiontext2+`</a>

          </div>
          </br>

            <div style="height:600px">  <img src="`+image2+`" style="width:100vw" alt=""></div>



           </li>


           <li style="background-color:`+colorstyle+` !important" id="slide3`+uniqueref+`">
           <div class="" style="width:50%;position:relative;left:15%">

           <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;color:white !important">`+headingendreplacetext3+`</h1>
               <div class="bodytext" style="width:100%">`+this.properties.tab3text+`</div>
               <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink3+`"> <i style="" class="triangle"></i>`+this.properties.actiontext3+`</a>

          </div>
          </br>

            <div style="height:600px">  <img src="`+image3+`" style="width:100vw" alt=""></div>



           </li>



           <li style="background-color:`+colorstyle+` !important" id="slide4`+uniqueref+`">
           <div class="" style="width:50%;position:relative;left:15%">

           <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;color:white !important">`+headingendreplacetext4+`</h1>
               <div class="bodytext" style="width:100%">`+this.properties.tab4text+`</div>
               <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink4+`"> <i style="" class="triangle"></i>`+this.properties.actiontext4+`</a>

          </div>
          </br>

            <div style="height:600px">  <img src="`+image4+`" style="width:100vw" alt=""></div>



           </li>


           <li style="background-color:`+colorstyle+` !important" id="slide5`+uniqueref+`">
           <div class="" style="width:50%;position:relative;left:15%">

           <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;color:white !important">`+headingendreplacetext5+`</h1>
               <div class="bodytext" style="width:100%">`+this.properties.tab5text+`</div>
               <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink5+`"> <i style="" class="triangle"></i>`+this.properties.actiontext5+`</a>

          </div>
          </br>

            <div style="height:600px">  <img src="`+image5+`" style="width:100vw" alt=""></div>



           </li>



           <li style="background-color:`+colorstyle+` !important" id="slide6`+uniqueref+`">
           <div class="" style="width:50%;position:relative;left:15%">

           <h1 style="color:`+colorstyle+`; font-family: 'thesans' !important;color:white !important">`+headingendreplacetext6+`</h1>
               <div class="bodytext" style="width:100%">`+this.properties.tab6text+`</div>
               <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="`+this.properties.actionlink6+`"> <i style="" class="triangle"></i>`+this.properties.actiontext6+`</a>

          </div>
          </br>

            <div style="height:600px">  <img src="`+image6+`" style="width:100vw" alt=""></div>



           </li>

       </ul>

       <a style="top:60%" class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
       <a style="top:60%" class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

   </div>

   <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div></div>

   `};
jQuery(attach).append(content);


  // HERE WE ARE REMOVING SETTING VARIABLES FOR EACH SECTION ID IN THE CONTENT TO ALLOW REMOVAL OF UNWANTED SECTIONS USING THE SLIDER IN THE WEBPART PROPERTY PANE

var id3 = "#tabmenu3"+uniqueref;
var id4 = "#tabmenu4"+uniqueref;
var id5 = "#tabmenu5"+uniqueref;
var id6 = "#tabmenu6"+uniqueref;

var sid3 = "#slide3"+uniqueref;
var sid4 = "#slide4"+uniqueref;
var sid5 = "#slide5"+uniqueref;
var sid6 = "#slide6"+uniqueref;

var lid3 = "#layer3"+uniqueref;
var lid4 = "#layer4"+uniqueref;
var lid5 = "#layer5"+uniqueref;
var lid6 = "#layer6"+uniqueref;

  // HERE WE ARE REMOVING SETTING SECTIONS FROM VIEW IF THE SLIDER IS SET TO EACH OF THE DEFINED SLIDER STEPS
   if(this.properties.sliderWithCallout == undefined){}
   else if (this.properties.sliderWithCallout ==2){

    $(id3).remove();
     $(id4).remove();
     $(id5).remove();
     $(id6).remove();
     $(sid3).remove();
     $(sid4).remove();
     $(sid5).remove();
     $(sid6).remove();
     $(lid3).remove();
     $(lid4).remove();
     $(lid5).remove();
     $(lid6).remove();
   }
   else if (this.properties.sliderWithCallout ==3){

    $(id4).remove();
    $(id5).remove();
    $(id6).remove();
    $(sid4).remove();
    $(sid5).remove();
    $(sid6).remove();
    $(lid4).remove();
    $(lid5).remove();
    $(lid6).remove();

   }
   else if (this.properties.sliderWithCallout ==4){
    $(id5).remove();
    $(id6).remove();
    $(sid6).remove();
    $(sid5).remove();
    $(lid6).remove();
    $(lid5).remove();


   }
   else if (this.properties.sliderWithCallout ==5){

    $(id6).remove();
    $(sid6).remove();
    $(lid6).remove();

   }

  }


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          displayGroupsAsAccordion: true,
          groups: [
            {

              groupName: "Settings",
              groupFields: [
                PropertyPaneDropdown('type', {
                  label: "Section type",
                  options: [
                    {
                      key: "tabs",
                      text: "Tabs"
                    },
                    {
                      key: "slides",
                      text: "Carousel with text overlay"
                    },
                    {
                      key: "slidesabove",
                      text: "Carousel with text on top"
                    },

                    {
                      key: "layers",
                      text: "Split column rows"
                    }]
                }),
                PropertyFieldSliderWithCallout('sliderWithCallout', {


                  key: 'sliderWithCalloutFieldId',
                  label: 'Number of sections',
                  max: 6,
                  min: 2,
                  step: 1,
                  showValue: true,
                  value: this.properties.sliderWithCallout,
                  debounce: 10
                }),
                PropertyPaneDropdown('color', {
                  label: "Theme color",
                  options: [
                    {
                      key: "#009adf",
                      text: "Blue"
                    },
                    {
                      key: "#5c0b8a",
                      text: "Purple"
                    }]
                }),
                PropertyPaneDropdown('display', {
                  label: "Display type (for tabs only)",
                  options: [
                    {
                      key: "image",
                      text: "Full width image"
                    },
                    {
                      key: "split",
                      text: "Split content column"
                    }]
                }),
              ]
            },
            {

              groupName: "Section 1",
              isCollapsed: true,

              groupFields: [
                PropertyPaneTextField('tab1title', {
                  label: "Section Title"
                }),
                PropertyPaneTextField('tab1text', {
                  label: "Section Text",
                  multiline:true
                }),
                PropertyPaneTextField('actiontext', {
                  label: "Call to action text"
                }),
                PropertyPaneTextField('actionlink', {
                  label: "Call to action link"
                }),
                PropertyFieldFilePicker('tab1image', {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult1,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => {  this.properties.filePickerResult1 = e;  },
                  onChanged: (e: IFilePickerResult) => { this.properties.filePickerResult1 = e; },
                  key: "filePickerId",
                  buttonLabel: "Select Image ",
                  label: "Select Image",
                  hideLocalUploadTab: true,
                  storeLastActiveTab: true,
                  hideOneDriveTab: true,
              })
              ],


            },
            {

              groupName: "Section 2",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField('tab2title', {
                  label: "Section Title"
                }),
                PropertyPaneTextField('tab2text', {
                  label: "Section Text",
                  multiline:true
                }),
                PropertyPaneTextField('actiontext2', {
                  label: "Call to action text"
                }),
                PropertyPaneTextField('actionlink2', {
                  label: "Call to action link"
                }),
                PropertyFieldFilePicker('tab2image', {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult2,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => {  this.properties.filePickerResult2 = e;  },
                  onChanged: (e: IFilePickerResult) => { this.properties.filePickerResult2 = e; },
                  key: "filePickerId",
                  buttonLabel: "Select Image ",
                  label: "Select Image",
                  hideLocalUploadTab: true,
                  storeLastActiveTab: true,
                  hideOneDriveTab: true,
              })
              ],


            },
            {

              groupName: "Section 3",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField('tab3title', {
                  label: "Section Title"
                }),
                PropertyPaneTextField('tab3text', {
                  label: "Section Text",
                  multiline:true
                }),
                PropertyPaneTextField('actiontext3', {
                  label: "Call to action text"
                }),
                PropertyPaneTextField('actionlink3', {
                  label: "Call to action link"
                }),
                PropertyFieldFilePicker('tab3image', {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult3,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => { this.properties.filePickerResult3 = e;  },
                  onChanged: (e: IFilePickerResult) => { this.properties.filePickerResult3 = e; },
                  key: "filePickerId",
                  buttonLabel: "Select Image ",
                  label: "Select Image",
                  hideLocalUploadTab: true,
                  storeLastActiveTab: true,
                  hideOneDriveTab: true,
              })
              ],


            },
            {

              groupName: "Section 4",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField('tab4title', {
                  label: "Section Title"
                }),
                PropertyPaneTextField('tab4text', {
                  label: "Section Text",
                  multiline:true
                }),
                PropertyPaneTextField('actiontext4', {
                  label: "Call to action text"
                }),
                PropertyPaneTextField('actionlink4', {
                  label: "Call to action link"
                }),
                PropertyFieldFilePicker('tab4image', {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult4,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => { this.properties.filePickerResult4 = e;  },
                  onChanged: (e: IFilePickerResult) => { this.properties.filePickerResult4 = e; },
                  key: "filePickerId",
                  buttonLabel: "Select Image ",
                  label: "Select Image",
                  hideLocalUploadTab: true,
                  storeLastActiveTab: true,
                  hideOneDriveTab: true,
              })
              ],


            },
            {

              groupName: "Section 5",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField('tab5title', {
                  label: "Section Title"
                }),
                PropertyPaneTextField('tab5text', {
                  label: "Section Text",
                  multiline:true
                }),
                PropertyPaneTextField('actiontext5', {
                  label: "Call to action text"
                }),
                PropertyPaneTextField('actionlink5', {
                  label: "Call to action link"
                }),
                PropertyFieldFilePicker('tab5image', {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult5,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => {  this.properties.filePickerResult5 = e;  },
                  onChanged: (e: IFilePickerResult) => { this.properties.filePickerResult5 = e; },
                  key: "filePickerId",
                  buttonLabel: "Select Image ",
                  label: "Select Image",
                  hideLocalUploadTab: true,
                  storeLastActiveTab: true,
                  hideOneDriveTab: true,
              })
              ],


            },
            {

              groupName: "Section 6",
              isCollapsed: true,
              groupFields: [
                PropertyPaneTextField('tab6title', {
                  label: "Section Title"
                }),
                PropertyPaneTextField('tab6text', {
                  label: "Section Text",
                  multiline:true
                }),
                PropertyPaneTextField('actiontext6', {
                  label: "Call to action text"
                }),
                PropertyPaneTextField('actionlink6', {
                  label: "Call to action link"
                }),
                PropertyFieldFilePicker('tab6image', {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult6,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => {  this.properties.filePickerResult6 = e;  },
                  onChanged: (e: IFilePickerResult) => { this.properties.filePickerResult6 = e; },
                  key: "filePickerId",
                  buttonLabel: "Select Image ",
                  label: "Select Image",
                  hideLocalUploadTab: true,
                  storeLastActiveTab: true,
                  hideOneDriveTab: true,
              })
              ],


            }
          ]
        }
      ]
    };
  }
}
