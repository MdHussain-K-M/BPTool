#pragma checksum "D:\MVC\Workspace\BusinessPartnerTool\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "51db59a354a8698099f41d1284613b3e024e48b1"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\MVC\Workspace\BusinessPartnerTool\Views\_ViewImports.cshtml"
using BPTool;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\MVC\Workspace\BusinessPartnerTool\Views\_ViewImports.cshtml"
using BPTool.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"51db59a354a8698099f41d1284613b3e024e48b1", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"876ba351d9f9c3deda3bb3d4e9e3319e6353a326", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "D:\MVC\Workspace\BusinessPartnerTool\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<div class=\"text-center\">\r\n\r\n\r\n</div>\r\n");
            WriteLiteral("\r\n");
            WriteLiteral(@"<div id=""divLoading"" style=""margin: 0px; padding: 0px; position: fixed; right: 0px;
                top: 0px; width: 100%; height: 100%; background-color: #6846c7 ; z-index: 30001;
                opacity: 0.8; display: none"">
    <p style=""position: absolute; color: White; top: 50%; left: 45%;"">
        Loading...
        <img src=""Images/ajax-loading.gif"" />
    </p>
</div>
");
            WriteLiteral(@"<div id=""divOrganizations"" class=""auto-style21"">
    <div id=""divImage"" style=""max-height: 100%; overflow-y: hidden;
                    background-color: white; margin-top: 6.1%; display: inline; border-right:0px solid black;"" class=""auto-style16"">
        <div id=""divOrganization"" style=""font-family: Calibri; border: 0px solid darkgray; visibility:hidden;"" class=""auto-style17"">
        </div>
        <div id=""divPractices"" style=""font-family: Calibri;"" class=""auto-style18"">
            <div style=""height: 85%"">
                <HyperLink id=""HyperLink3"" NavigateUrl=""~/Dashboardwithoutinstruction.aspx"">

                    <div id=""divPractice1"" ; style=""height: 90%; width: 19%; border: 0px solid darkgray;
                                float: left; font-size: medium; display: table; text-align: center; position: static;"">

                    </div>
                </HyperLink>
                <HyperLink id=""HyperLink12"" onclick=""PracticePopup(this)"" NavigateUrl=""~/Dashboardwithoutinstructio");
            WriteLiteral(@"n.aspx"">

                    <div id=""divPractice2"" style=""height: 90%; width: 19%; border: 0px solid darkgray;
                                float: left; font-size: medium; display: table; text-align: center; position: static"" onclick=""PracticePopup(this)"">
                    </div>
                </HyperLink>
                <HyperLink id=""HyperLink13"" NavigateUrl=""~/Dashboardwithoutinstruction.aspx"">

                    <div id=""divPractice3"" style=""border: 0px solid darkgray;
                                font-size: medium; display: table; text-align: center; "" class=""auto-style19"">
                    </div>
                </HyperLink>
                <HyperLink id=""HyperLink14"" NavigateUrl=""~/Dashboardwithoutinstruction.aspx"">

                    <div id=""divPractice4"" style=""border: 0px solid darkgray;
                                font-size: medium; display: table; text-align: center; "" class=""auto-style19"">
                    </div>
                </HyperLink>
        ");
            WriteLiteral(@"        <HyperLink id=""HyperLink15"" NavigateUrl=""~/Dashboardwithoutinstruction.aspx"">

                    <div id=""divPractice5"" style=""border: 0px solid darkgray;
                                font-size: medium; display: table; text-align: center; "" class=""auto-style19"">
                    </div>
                </HyperLink>

                <br />

                <div style=""background-color: white; color: black; height: 10%; width: 19%; float: left;
                                border: 0px solid darkgray; font-size: medium; display: table; text-align: center"" ; onclick=""Dashboardwithoutinstruction.aspx"">


                    <b> <span id=""spPractice1""></span> </b>
                </div>
                <div style=""background-color: white; color: black; height: 10%; width: 19%; float: left;
                                border: 0px solid darkgray; font-size: medium; display: table; text-align: center"" ; onclick=""Dashboardwithoutinstruction.aspx"">

                    <b> <span i");
            WriteLiteral(@"d=""spPractice2""></span> </b>
                </div>
                <div style=""background-color: white; color: black; border: 0px solid darkgray; font-size: medium;
                                    display: table; text-align: center"" class=""auto-style20"">

                    <b>  <span id=""spPractice3""></span> </b>
                </div>
                <div style=""background-color: white; color: black; border: 0px solid darkgray; font-size: medium; display: table; text-align: center"" class=""auto-style20"">

                    <b>  <span id=""spPractice4""></span> </b>
                </div>
                <div style=""background-color: white; color: black; border: 0px solid darkgray; font-size: medium; display: table; text-align: center"" class=""auto-style20"">

                    <b>  <span id=""spPractice5""></span> </b>
                </div>

            </div>

            <div style=""height: 87%"">
                <HyperLink id=""HyperLink2"" NavigateUrl=""~/Dashboardwithoutinstruction.a");
            WriteLiteral(@"spx"">
                    <div id=""divPractice6"" style=""height: 90%; width: 19%; border: 0px solid darkgray;
                                float: left; font-size: medium; display: table; text-align: center; position: static"">
                    </div>
                </HyperLink>
                <HyperLink id=""HyperLink16"" NavigateUrl=""~/Dashboardwithoutinstruction.aspx"">

                    <div id=""divPractice7"" style=""height: 90%; width: 19%; border: 0px solid darkgray;
                                float: left; font-size: medium; display: table; text-align: center; position: static"">
                    </div>
                </HyperLink>
                <HyperLink id=""HyperLink17"" NavigateUrl=""~/Dashboardwithoutinstruction.aspx"">

                    <div id=""divPractice8"" style=""border: 0px solid darkgray;
                                font-size: medium; display: table; text-align: center; "" class=""auto-style19"">
                    </div>
                </HyperLink>
          ");
            WriteLiteral(@"      <HyperLink id=""HyperLink18"" NavigateUrl=""~/Dashboardwithoutinstruction.aspx"">

                    <div id=""divPractice9"" style=""border: 0px solid darkgray;
                                font-size: medium; display: table; text-align: center; "" class=""auto-style19"">
                    </div>
                </HyperLink>
                <HyperLink id=""HyperLink19"" NavigateUrl=""~/Dashboardwithoutinstruction.aspx"">

                    <div id=""divPractice10"" style=""border: 0px solid darkgray;
                                font-size: medium; display: table; text-align: center; "" class=""auto-style19"">
                    </div>
                </HyperLink>

                <br />
                <div style=""background-color: white; color: black; height: 10%; width: 19%; float: left;
                                border: 0px solid darkgray; font-size: medium; display: table; text-align: center"">
                    <b><span id=""spPractice6""></span> </b>
                </div>
        ");
            WriteLiteral(@"        <div style=""background-color: white; color: black; height: 10%; width: 19%; float: left;
                                border: 0px solid darkgray; font-size: medium; display: table; text-align: center"">
                    <b> <span id=""spPractice7""></span></b>
                </div>
                <div style=""background-color: white; color: black; border: 0px solid darkgray; font-size: medium; display: table; text-align: center"" class=""auto-style20"">
                    <b><span id=""spPractice8""></span> </b>
                </div>
                <div style=""background-color: white; color: black; border: 0px solid darkgray; font-size: medium; display: table; text-align: center"" class=""auto-style20"">

                    <b> <span id=""spPractice9""></span> </b>
                </div>
                <div style=""background-color: white; color: black; border: 0px solid darkgray; font-size: medium; display: table; text-align: center"" class=""auto-style20"">

                    <b>   <span i");
            WriteLiteral(@"d=""spPractice10""> </span> </b>
                </div>

            </div>
        </div>
    </div>
    <div id=""divResults"" style=""background-color: white;visibility:hidden;
                    margin-top: 6.1%; display: table"" class=""auto-style2"">
        <div style=""display: table-cell; visibility:hidden; vertical-align: middle; padding-bottom: 10%;
                        margin-right: auto; margin-bottom: 0;"" class=""auto-style3"">
            <table style=""text-align: center; margin-top: 5%; margin-left: auto; margin-right: auto; margin-bottom: 0;"" class=""auto-style12"">
                <tr>
                    <td>
                        <ImageButton ID=""imgbtnExcel"" AlternateText=""Export to Excel"" ToolTip=""Export to Excel""
                                     ImageUrl=""~/Images/excel.jpg"" Height=""31"" Width=""24"" Visible=""false""
                                     Style=""float: right"" />
                    </td>
                </tr>
                <tr>
                </tr>
       ");
            WriteLiteral(@"         <tr>
                    <td>
                        <LinkButton ID=""imgbtnProcess"" OnClick=""imgbtnProcess_Click"" Style=""float: right;
                                        display: none"">GO- ProcessWise</LinkButton>
                    </td>
                </tr>
            </table>
            <div>
                <span style=""margin-left: 18%; font-size: large; font-style: italic;"">
                    * Click on the
                    value cells to see account wise details.
                </span>
            </div>
            <div>
                <span style=""margin-left: 18%; font-size: large; font-style: italic;"">
                    * Access rights
                    provided for the respective practice.
                </span>
            </div>
            <img src=""/lib/images/Legend_New.jpg"" id=""imglegend"" style=""margin-bottom: -12%; margin-left: 13%"" class=""auto-style10"" />
        </div>
    </div>
    &nbsp;
</div>
");
            WriteLiteral(@"<div id=""divPopupPractice"" class=""popup"">
    <div id=""divPracticeDetails"" style=""width: 38.1%; height: 100%; display: inline;
                    float: left; border-right: 2px solid black;"">
        <div style=""background-color: #6846c7; height: 10%; text-align: center;
                        line-height: 260%; width: 100%"">
            <span id=""spPracticeProcessWiseHeader"" style=""color: White; font-size: x-large;""></span>
        </div>
        <div id=""divPracticeChart"" style=""margin-top: 7%"">
            <%--<Literal ID=""ltPracticeChart""></Literal>--%>
        </div>
    </div>
    <img id=""imgPracticeDetailsClose"" src=""/lib/images/Button Blue Close.png"" alt=""Close""
         title=""Close"" style=""height: 40px; width: 40px; margin-top: -1.3%; position: fixed;
                    margin-left: 47.7%; cursor: pointer"" onclick=""ClosePopup(this.id)"" />
    <div style=""height: 100%"">
        
        <table width=""60%"" style=""margin-left: 1%; height: 88%"">
            <tr>
                <td");
            WriteLiteral(@">
                    <table id=""imgAccMinus1"" style=""visibility: hidden; float: right"">
                        <tr>
                            <td class=""ImageMinus"">
                                <img src=""/lib/images/kisscc0-arrow-computer-icons-symbol-button-sign-forward-back-5b7322e27b1956.4860203815342722265042.png"" id=""imgAccPrevMonth"" height=""30"" width=""27"" alt=""SQS""
                                     style=""float: right; visibility: visible"" onclick=""MonthsChangeAccount(this.id)""
                                     onmouseover=""ChangeImageEffects(this.id)"" onmouseout=""RestoreImageEffects(this.id)"" />
                                <span class=""tooltipMinus"">Click on the arrow to see the details of next months.</span>
                            </td>
                        </tr>
                    </table>
                </td>
                <td style=""height: 300px"">
                    <div id=""divPracticeProcessWise"" style=""width: 100%; float: left;"">
                    ");
            WriteLiteral(@"    <div id=""divPracticeAccountWisePanel"" style=""vertical-align: middle; padding-bottom: 10%;
                                        margin-top: 0%; display: inline; overflow: auto;"">
                        </div>
                        <div id=""divPracticeAccountWiseAvg"" style=""width: 100%; float: left; display: table;"">
                        </div>
                    </div>
                </td>
                <td>
                    <table id=""imgAccPlus1"">
                        <tr>
                            <td class=""ImagePlus"">
                                <img src=""/lib/images/left.png"" id=""imgAccNextMonth"" height=""30"" width=""27"" alt=""SQS""
                                     style=""float: left;"" onclick=""MonthsChangeAccount(this.id)"" onmouseover=""ChangeImageEffects(this.id)""
                                     onmouseout=""RestoreImageEffects(this.id)"" /><span class=""tooltipPlus"">
                                    Click on the arrow
                                    ");
            WriteLiteral(@"to see the details of previous months.
                                </span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div>
            <span style=""margin-left: 6%; font-size: large; font-style: italic;"">
                * Click on the
                value cells to see process wise details.
            </span>
        </div>
        <div>
            <span style=""margin-left: 6%; font-size: large; font-style: italic;"">
                * Use close button
                on the Right-top to close this popup.
            </span>
        </div>
    </div>
</div>
<div id=""divPracticeAccountProcessData"" class=""popup"">
    <iframe id=""txtArea1"" style=""display: none""></iframe>
    <div id=""div8"" style=""width: 100%; height: 100%; display: inline; float: left;"">
        <div style=""background-color: #6846c7; height: 10%; text-align: center;
                        line-heigh");
            WriteLiteral(@"t: 260%; width: 100%"">
            <span id=""spDataHeader"" style=""color: White; font-size: x-large;""></span>
        </div>
        <div id=""div9"" style=""padding-top: 1%; height: 84%; max-height: 84%; overflow-y: auto"">
            <ImageButton ID=""imgExcel"" ImageUrl=""~/Images/excel.jpg"" ToolTip=""Export to Excel""
                         Style=""height: 40px; width: 35px; position: fixed; margin-left: 71.3%; cursor: pointer;
                            display: block"" OnClick=""imgExcel_Click"" />
            <img id=""img1"" src=""Images/excel.jpg"" alt=""Close"" title=""Close"" style=""height: 40px;
                            width: 35px; position: fixed; margin-left: 71.3%; cursor: pointer; display: block""
                 onclick=""ExportExcelNew()"" />
            <div id=""divProcessData"" style=""margin-left: 3%; margin-right: 2%"">
                <HiddenField ID=""hfdata"" />
            </div>
        </div>
    </div>
    <img id=""imgClosePracticeAccountProcessData"" src=""/lib/images/Button Blue Close.p");
            WriteLiteral("ng\" alt=\"Close\"\r\n         title=\"Close\" style=\"height: 40px; width: 40px; margin-top: -1.3%; position: fixed;\r\n                    margin-left: 78.3%; cursor: pointer; display: block\" onclick=\"ClosePopup(this.id)\" />\r\n</div>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
