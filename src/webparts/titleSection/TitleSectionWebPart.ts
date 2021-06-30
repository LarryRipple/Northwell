import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import { sp } from "@pnp/sp/presets/all";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

import {
  PropertyFieldFilePicker,
  IFilePickerResult,
} from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";

import * as $ from "jquery";

window["jQuery"] = window["$"] = $;

import {
  IPropertyPaneDropdownOption,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
} from "@microsoft/sp-property-pane";

require("uikit/dist/css/uikit.min.css");
require("uikit/dist/js/uikit.min.js");
import * as strings from 'TitleSectionWebPartStrings';

export interface ITitleSectionWebPartProps {
  Title: string;
  color:string;
}

export default class TitleSectionWebPart extends BaseClientSideWebPart<ITitleSectionWebPartProps> {

  public render(): void {
    var mina = `font-family: 'Bristol' !important;`;
    var mainfont = `font-family: 'thesans' !important;`;
    var headerreptext1;
    if (this.properties.color == undefined) {
      headerreptext1 = this.properties.color;
    } else if (this.properties.color == "#009adf") {
      headerreptext1 = this.properties.color;
    } else if (this.properties.color == "#5c0b8a") {
      headerreptext1 = this.properties.color;
    }
    if (this.properties.Title != undefined) {
      var replacetext = this.properties.Title.replace(
        "[",
        '<span style="' +
          mina +
          " font-size:70px; color:" +
          this.properties.color +
          '">'
      );
      var endreplacetext = replacetext.replace("]", "</span>");
      var finaltext = endreplacetext.replace("|", "</br>");
    }

    this.domElement.innerHTML = `<div style="width:100%; text align:center"><h1 style=" text-align:center; color:`+this.properties.color+`" class="uk-heading-medium uk-align-center">`+finaltext+`</h1></div>`;
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
                PropertyPaneTextField('Title', {
                  label: "Title"
                }),PropertyPaneDropdown("color", {
                  label: "Heading color",
                  options: [
                    {
                      key: "#003ca5",
                      text: "Dark Blue",
                    },
                    {
                      key: "#6dc3df",
                      text: "Light Blue",
                    },
                    {
                      key: "#5c0b8a",
                      text: "Dark Purple",
                    },
                    {
                      key: "#bd83ca",
                      text: "Light Purple",
                    }
                    ,
                    {
                      key: "#ffffff",
                      text: "White",
                    },
                    {
                      key: "#333333",
                      text: "Black",
                    }
                  ],
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
