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
import { sp } from "@pnp/sp/presets/all";
require("uikit/dist/css/uikit.min.css");
require("uikit/dist/js/uikit.min.js");


import * as strings from 'OurTeamWebPartStrings';

export interface IOurTeamWebPartProps {
  description: string;
}

export default class OurTeamWebPart extends BaseClientSideWebPart<IOurTeamWebPartProps> {

  public render(): void {
    sp.setup({
      spfxContext: this.context});

 sp.web.lists.getByTitle("bios").items.select("FileRef/FileRef, Description, Biography, Title").top(10).get().then(b => {

      b.forEach(element => {
var elementhtml = `<div>
<div class="uk-card uk-card-default">
    <div class="uk-card-media-top">
    <div style="background-image:url(`+element.FileRef+`);height:250px;background-size: cover;"  ></div>
    </div>
    <div class="uk-card-body">
        <h3 class="uk-card-title">Media Top</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
</div></div>
`
$("#bios").append(elementhtml)

      })})
    this.domElement.innerHTML = `<div id="bios" class="uk-child-width-1-2@m" uk-grid>

    <div>
      `;
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
