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



var slidenav = "#003ca5";

$("#create").remove();
    $("body")
    .append(`<style id="create" type="text/css">
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
    .ce-paragraph,.cke_editable p{font-family: "thesans";
    font-size: 15px;
    line-height: 25px;
    font-weight: lighter;
    color: #53565a;}
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
   footer, button[data-automation-id*="button-web-part"], .wc-header, .o365cs-base .o365sx-button, .wc-message-from-bot .wc-message-content, footer > div, .o365sx-navbar, .o365cs-base .o365sx-appName, .o365cs-base .o365sx-appName:visited, .o365cs-base .o365sx-waffle, .o365cs-base .o365sx-waffle {
    background: `+slidenav+` !important;
    background: `+slidenav+` !important;
}



   </style>`)

    return Promise.resolve();
  }
}
