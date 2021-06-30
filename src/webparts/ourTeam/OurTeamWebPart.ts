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
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { sp } from "@pnp/sp/presets/all";
require("uikit/dist/css/uikit.min.css");
require("uikit/dist/js/uikit.min.js");


import * as strings from 'OurTeamWebPartStrings';

export interface IOurTeamWebPartProps {
  description: string;
}

export default class OurTeamWebPart extends BaseClientSideWebPart<IOurTeamWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<div id="bios" class="uk-child-width-1-3@m" uk-grid-match" uk-grid></div>`;
    const uniqueref = Math.floor(Math.random()*90000) + 10000;
    const attach = "#"+uniqueref;
    var colorstyle = $("#pagecolor").text();
    var slidenav ="#007DB8";
     if (colorstyle == "#009adf") {
      slidenav = "#007DB8";
    } else if (colorstyle == "#5c0b8a") {
      slidenav = "#9e29b5";
    }
    let slidenav1 = "#007DB8";
    if (colorstyle == "#009adf") {
      slidenav1 = "#007DB8";
    } else if (colorstyle == "#5c0b8a") {
      slidenav1 = "#5c0b8a";
    }
    sp.setup({
      spfxContext: this.context});

 sp.web.lists.getByTitle("bios").items.select("FileRef/FileRef, Description, Biography, Title, JobTitle, Highlights, ID").top(10).get().then(b => {

      b.forEach(element => {
        var modalid = uniqueref+element.ID
var elementhtml = `




<div>
    <div class="uk-card uk-card-default">
        <div class="uk-card-media-top">
            <a href="`+element.FileRef+`"> <img style="width:100%; height:250px" src="`+element.FileRef +`" alt=""></a>
        </div>
        <div class="uk-card-body cardhover" style="border-bottom:4px solid `+colorstyle+`">
            <h3 style="color:`+colorstyle+`;font-size: 25px;
            line-height: 30px;
            height: 30px;
            overflow: hidden;" class="uk-card-title">`+element.Title+`</h3>
             <h3 style="color:`+colorstyle+`;font-size: 25px;
            line-height: 30px;
            height: 30px;
            overflow: hidden;" class="uk-card-title">`+element.JobTitle+`</h3>
            <p style="max-height: 75px;height:75px;
            overflow: hidden;" class="ce-paragraph">`+element.Biography+`</p>

            <a style="width:85%;margin:auto;position:relative;top:7px;font-size:12pt" class="cta"  href="#modal-`+modalid+`" uk-toggle> <i style="" class="triangle"></i>Read more</a>
        </div>

    </div>

</div>
<div id="modal-`+modalid+`" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div style="height:100vh" class="uk-grid-collapse uk-child-width-1-1@s" uk-grid>

        <div class="uk-width-1-6@m" >
        <article class="uk-comment " style="height:100%; margin:30px">
    <header class="uk-comment-header">
        <div class="uk-grid-medium uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-comment-avatar" src="`+element.FileRef +`" style="width:100%" alt=""><br>
            </div>

        </div>
    </header>
    <div class="uk-comment-body">
    <p class="uk-article-meta" style="font-size:16px">`+element.Highlights+`</p>
    </div>
</article>

        </div>

            <div class="uk-padding-large uk-width-expand@m" style="margin:30px">
            <article class="uk-article">

            <h2 style="color:`+colorstyle+`;font-size: 35px;
            line-height: 40px;
            height: 40px;
            overflow: hidden;" class="uk-card-title">`+element.Title+`</h3>
            <h2 style="color:`+colorstyle+`;font-size: 25px;
            line-height: 30px;
            height: 30px;
            overflow: hidden;" class="uk-card-title">`+element.JobTitle+`</h3>


            <p style="font-size:15px" class="uk-text-lead">`+element.Biography+`</p>




        </article>
            </div>
        </div>
    </div>
</div>
`;
$("#bios").append(elementhtml);

      });});

  }


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
