import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';
import * as $ from "jquery";
import * as jQuery from "jquery";
window["jQuery"] = window["$"] = $;
import * as strings from 'BrandingApplicationCustomizerStrings';

const LOG_SOURCE: string = 'BrandingApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IBrandingApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class BrandingApplicationCustomizer
  extends BaseApplicationCustomizer<IBrandingApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {

var url = this.context.pageContext.web.absoluteUrl;
console.log(url)

    var colorstyle = $("#pagecolor").text();
    var slidenav;
    if (colorstyle == undefined) {
      slidenav = "#007DB8";
    } else if (colorstyle == "undefined") {
      slidenav = "#007DB8";
    } else if (colorstyle == "#009adf") {
      slidenav = "#007DB8";
    } else if (colorstyle == "#5c0b8a") {
      slidenav = "#9e29b5";
    }
    var slidenav1;
    if (colorstyle == "undefined") {
      slidenav1 = "#007DB8";
    } else if (colorstyle == "#009adf") {
      slidenav1 = "#007DB8";
    } else if (colorstyle == "#5c0b8a") {
      slidenav1 = "#5c0b8a";
    }

$("#BRANDING").remove();
    $("body")
    .append(`<style id="BRANDING" type="text/css">
    @font-face {
      font-family: 'Bristol';
      src: url(`+url+`/SiteAssets/MFTBristol-Regular.ttf);
    }
    @font-face {
      font-family: 'thesans';
      src: url(`+url+`/SiteAssets/TheSansC5-5_Plain.otf);
    }
    @font-face {
      font-family: 'thesanssemibold';
      src: url(`+url+`/SiteAssets/TheSansC5-6_SemiBold.otf);
    }
    @font-face {
      font-family: 'thesansbold';
      src: url(`+url+`/SiteAssets/TheSansC5-7_Bold.otf);
    }
    @font-face {
      font-family: 'minion';
      src: url(`+url+`/SiteAssets/MinionPro-Regular.otf);
    }
    .ce-paragraph,.cke_editable p{font-family: "thesans";
    font-size: 15px;
    line-height: 25px;
    font-weight: lighter;
    color: #53565a;}

    /* STYLES FOR THE OOTB TEXT EDITING WEBPART */


    /* SET WEBPART WIDTH ON EACH DEVICE */
    @media screen and (min-width: 1800px){

      .rte-webpart
     {
      width: 80%;
      margin: auto;
     }
    }
    @media screen and (max-width: 1440px){

    .rte-webpart
   {
    width: 60%;
    margin: auto;
   }
  }
  @media screen and (max-width: 1024px){

    .rte-webpart
   {
    width: 55%;
    margin: auto;
   }
  }
  /* SET OOTB FOOTER AND HEADER STYLES */
   footer, button[data-automation-id*="button-web-part"], .wc-header, .o365cs-base .o365sx-button, .wc-message-from-bot .wc-message-content, footer > div, .o365sx-navbar, .o365cs-base .o365sx-appName, .o365cs-base .o365sx-appName:visited, .o365cs-base .o365sx-waffle, .o365cs-base .o365sx-waffle {
    background: `+slidenav+` !important;
    background: `+slidenav+` !important;
}
/* SET FONT, SIZE AND COLOR FOR OOTB TEXT EDITING WEBPART CONTENT */
.cke_editable h2{font-size:40px;font-family: "thesans";color:` +
        slidenav +
        ` !important;line-height:50px}
.cke_editable h3{font-size:35px;font-family: "thesans";color:` +
        slidenav +
        ` !important;line-height:45px}
.cke_editable h4{font-size:30px;font-family: "thesans";color:` +
        slidenav +
        ` !important;line-height:40px}

/* CALL TO ACTION STYLES FOR THE OOTB TEXT EDITING WEBPART */

.cke_editable a {
  font-family: 'thesans';
  color:` +
        slidenav +
        `;
  font-size: 15px;
}
.cke_editable a::before{
  content:"";
 width: 0;
 height: 0;
 border: 0 solid transparent;
 border-left-width: 22px;
 border-right-width: 1px;
 border-top: 18px solid ` +
        slidenav +
        ` !important;
 top: 19px;
   position: relative;
   left: -6px;
}
.cke_editable a {
  font-family: 'thesans';
  color: ` +
        slidenav +
        ` !important;
  font-size: 15px;
}


   </style>`)

    return Promise.resolve();
  }
}
