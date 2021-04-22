import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import * as $ from "jquery";
import * as jQuery from "jquery";
window["jQuery"] = window["$"] = $;
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import { PropertyFieldMultiSelect } from "@pnp/spfx-property-controls/lib/PropertyFieldMultiSelect";
import {
  PropertyPaneChoiceGroup,
  IPropertyPaneDropdownOption,
  PropertyPaneCheckbox,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneSlider,
  PropertyPaneToggle,
  PropertyPaneDropdown,
} from "@microsoft/sp-property-pane";
import { sp } from "@pnp/sp/presets/all";
require("uikit/dist/css/uikit.min.css");
require("uikit/dist/js/uikit.min.js");
import {
  PropertyFieldFilePicker,
  IPropertyFieldFilePickerProps,
  IFilePickerResult,
} from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";

import { CalloutTriggers } from "@pnp/spfx-property-controls/lib/PropertyFieldHeader";
import { PropertyFieldSliderWithCallout } from "@pnp/spfx-property-controls/lib/PropertyFieldSliderWithCallout";
import * as strings from "VideoSectionWebPartStrings";

export interface IVideoSectionWebPartProps {
  description: string;
  Page: string;
  multiSelect: string[];
  filePickerResult: IFilePickerResult;
  color: string;
  actiontext: string;
  actionlink: string;
  title: string;
  intro: string;
  bodytext: string;
  videourl: string;
}

export default class VideoSectionWebPart extends BaseClientSideWebPart<IVideoSectionWebPartProps> {
  public render(): void {
    const uniqueref = Math.floor(Math.random() * 90000) + 10000;
    const attach = "#" + uniqueref;
    const width = window.screen.availWidth;
    var headertext;
    var headertextdark;
    var headerreptext;
    var overlaycolor;
    var contentsplit;
    var slidenav;
    var mina = `font-family: 'Bristol' !important;`;
    var mainfont = `font-family: 'thesans' !important;`;

    if (this.properties.color == undefined) {
      slidenav = "#7dcdee";
    } else if (this.properties.color == "#009adf") {
      slidenav = "#7dcdee";
    } else if (this.properties.color == "#5c0b8a") {
      slidenav = "#c38ebe";
    }
    contentsplit = "background:color:" + this.properties.color;

    console.log(this.properties.color);

    if (this.properties.color == undefined) {
      headertext = "#6dc3df";
    } else if (this.properties.color == "#009adf") {
      headertext = "#6dc3df";
    } else {
      headertext = "#bd83ca";
    }

    if (this.properties.color == undefined) {
      headertextdark = "#004f9c";
    } else if (this.properties.color == "#009adf") {
      headertextdark = "#004f9c";
    } else {
      headertextdark = "#60257e";
    }

    if (this.properties.color == undefined) {
      headerreptext = "#003ca5";
    } else if (this.properties.color == "#009adf") {
      headerreptext = "#003ca5";
    } else if (this.properties.color == "#5c0b8a") {
      headerreptext = "#9e29b5";
    }

    if (this.properties.color == undefined) {
      overlaycolor = "rgba(0,60,165,.6)";
    } else if (this.properties.color == "#009adf") {
      overlaycolor = "rgba(0,60,165,.6)";
    } else if (this.properties.color == "#5c0b8a") {
      overlaycolor = "rgba(92,11,138,.6)";
    }
    if (this.properties.title != undefined) {
      var headingreplacetext = this.properties.title.replace(
        "[",
        '<span style="' +
          mina +
          " font-size:50px;position:relative;color:" +
          headertext +
          '">'
      );
      var headingendreplacetext = headingreplacetext
        .replace("]", "</span>")
        .replace("|", "</br>");
    } else {
      headingreplacetext = "";
    }
    if (this.properties.title != undefined) {
      var headingreplacetextdark = this.properties.title.replace(
        "[",
        '<span style="' +
          mina +
          " font-size:50px;position:relative;color:" +
          headertextdark +
          '">'
      );
      var headingendreplacetextdark = headingreplacetextdark
        .replace("]", "</span>")
        .replace("|", "</br>");
    } else {
      headingendreplacetextdark = "";
    }
    $("body").append(
      `<style id="createvideo" type="text/css">
    @font-face {
      font-family: 'Bristol';
      src: url(/sites/Northwell/SiteAssets/MFTBristol-Regular.ttf);
    }
    @font-face {
      font-family: 'thesans';
      src: url(/sites/Northwell/SiteAssets/TheSansC5-5_Plain.otf);
    }
    @font-face {
      font-family: 'thesanssemibold';
      src: url(/sites/Northwell/SiteAssets/TheSansC5-6_SemiBold.otf);
    }
    @font-face {
      font-family: 'thesansbold';
      src: url(/sites/Northwell/SiteAssets/TheSansC5-7_Bold.otf);
    }
    @font-face {
      font-family: 'minion';
      src: url(/sites/Northwell/SiteAssets/MinionPro-Regular.otf);
    }
    [class*=uk-position-bottom], [class*=uk-position-center], [class*=uk-position-left], [class*=uk-position-right], [class*=uk-position-top] {
      position: absolute!important;
      max-width: 50%;
      background: ` +
        headertextdark +
        `;
      height: 100%;
  }
    .uk-slideshow-items>*{max-height:800px}
    #workbenchPageContent{max-width:1500px}
    .bodytext{font-family: 'thesans' !important;font-size:10pt;line-height:18pt;color:white;font-weight:100; width:60%}
    .bodytextdark{font-family: 'thesans' !important;font-size:10pt;line-height:18pt;color:#53565a;font-weight:100; width:60%}
    .triangle{width: 0;
      height: 0;
      border: 0 solid transparent;
      border-left-width: 22px;
      border-right-width: 1px;
      border-top: 18px solid ` +
        headertext +
        `;
      top: 19px;
        position: relative;
        left: -6px;}

        .triangledark{width: 0;
          height: 0;
          border: 0 solid transparent;
          border-left-width: 22px;
          border-right-width: 1px;
          border-top: 18px solid ` +
        headertextdark +
        `;
          top: 19px;
            position: relative;
            left: -6px;}

        .leftpanel{width:` +
        width / 2 +
        `px !important;` +
        contentsplit +
        `; position: absolute;height:780px;
        top: 1px;
        width: 300px;
        left: 1px;}
        .uk-subnav-pill>.uk-active>a {
          background-color: ` +
        this.properties.color +
        ` !important;
          color: #fff !important;
      }
      canvas, img, video {
        max-width: 100vw;
        height: auto;
        box-sizing: border-box;
        width:100vw;
    }
      .uk-switcher>*>:last-child {
        margin-bottom: 0;
        position: relative;
        bottom: 20px;
    }
      .uk-subnav-pill>*>a:active, .uk-subnav-pill>*>a:focus, .uk-subnav-pill>*>a:hover {
        background-color: ` +
        this.properties.color +
        ` !important;
        color: #fff !important;

    }
    .uk-subnav-pill>*>:first-child {
      padding: 5px 10px;
      background: 0 0;
      color: ` +
        this.properties.color +
        ` !important;font-weight:normal
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
      background:` +
        slidenav +
        `;
      padding: 10px;

      padding-left: 25px;
      padding-right: 25px;
    }
    .uk-icon.uk-slidenav-previous.uk-slidenav {
      color: white;
      left: -55px;
      background: ` +
        slidenav +
        `;
      padding: 10px;

      padding-left: 25px;
      padding-right: 25px;
    }
    .uk-dotnav>.uk-active>* {
      background-color: ` +
        slidenav +
        `;
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
        .cta{color:` +
        headertext +
        ` !important; font-family: 'thesans';}
        .ctadark{color:` +
        headertextdark +
        ` !important; font-family: 'thesans';}
        </style>`
    );
    var fileurl;
    if (this.properties.filePickerResult != undefined) {
      fileurl = this.properties.filePickerResult.fileAbsoluteUrl;
    } else {
      fileurl = "/";
    }
    this.domElement.innerHTML =
      `
    <div class="uk-inline">
    <img src="` +
      fileurl +
      `" alt="">
    <div style="background:` +
      overlaycolor +
      `" class="uk-overlay-primary uk-position-cover"></div>
    <div class="uk-overlay uk-position-top-right uk-light">
    <div class="rightpanel">
    <div style="margin-top:20%;margin-left:20%">
    <h1>` +
      headingendreplacetext +
      `</h1>
        <div class="bodytext">` +
      this.properties.bodytext +
      `</div>
        <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta" href="` +
      this.properties.actionlink +
      `"> <i style="" class="triangle"></i>` +
      this.properties.actiontext +
      `</a>
    </div>
    </div>
    </div>

</div>
<div style="width:80%; margin:auto; position:relative;bottom:100px">
<video style="width:100%;margin:auto" src="` +
      this.properties.videourl +
      `" controls poster="` +
      fileurl +
      `"></video></div>

    `;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: "Header",

              groupFields: [
                PropertyFieldFilePicker("filePicker", {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => {
                    console.log(e);
                    this.properties.filePickerResult = e;
                  },
                  onChanged: (e: IFilePickerResult) => {
                    console.log(e);
                    this.properties.filePickerResult = e;
                  },
                  key: "filePickerId",
                  buttonLabel: "Choose Image",
                  label: "Choose Image",
                }),
                ,
                PropertyPaneTextField("title", {
                  label: "Title",
                }),
                PropertyPaneTextField("videourl", {
                  label: "Video Url",
                }),
                PropertyPaneTextField("intro", {
                  label: "Intro",
                }),
                PropertyPaneTextField("bodytext", {
                  label: "Body Text",
                  multiline: true,
                }),
                PropertyPaneDropdown("color", {
                  label: "Theme color",
                  options: [
                    {
                      key: "#009adf",
                      text: "Blue",
                    },
                    {
                      key: "#5c0b8a",
                      text: "Purple",
                    },
                  ],
                }),
                PropertyPaneTextField("actiontext", {
                  label: "Call to action text",
                }),
                PropertyPaneTextField("actionlink", {
                  label: "Call to action link",
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
