# Flows
A collection of common flows

## Modify Axis Device Schedule
Sometimes you need to automate devices schedule settings.  
Required Nodes  
- [node-red-contrib-axis-com](https://flows.nodered.org/node/node-red-contrib-axis-com)
![Flow](pictures/ModifyAxisDeviceSchedule.jpeg)
### [Copy/paste](flows/ModifyAxisDeviceSchedule.json)

<div class="Box-sc-g0xbh4-0 kSGBPx react-blob-header-edit-and-raw-actions"><div class="ButtonGroup-sc-1gxhls1-0 cjbBGq"><a href="/pandosme/flows/raw/master/flows/ModifyAxisDeviceSchedule.json" data-testid="raw-button" data-hotkey="Control+/ Control+r" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 iwLINf"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text">Raw</span></span></a><button data-component="IconButton" aria-label="Copy raw content" data-testid="copy-raw-button" data-hotkey="Control+Shift+c" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 hGgJQu"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span role="tooltip" aria-label="Download raw file" class="Tooltip__TooltipBase-sc-uha8qm-0 fCnxTL tooltipped-n"><button data-component="IconButton" aria-label="Download raw content" data-testid="download-raw-button" data-hotkey="Control+Shift+s" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 gHXhJd"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-download" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path></svg></button></span></div><button hidden="" data-testid="raw-button-shortcut" data-hotkey="Control+/ Control+r" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="copy-raw-button-shortcut" data-hotkey="Control+Shift+c" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="download-raw-button-shortcut" data-hotkey="Control+Shift+s" data-hotkey-scope="read-only-cursor-text-area"></button><a class="Link__StyledLink-sc-14289xe-0 bJBoUI js-github-dev-shortcut d-none" data-hotkey="., Control+Shift+/" href="https://github.dev/"></a><button hidden="" data-testid="" data-hotkey="., Control+Shift+/" data-hotkey-scope="read-only-cursor-text-area"></button><a class="Link__StyledLink-sc-14289xe-0 bJBoUI js-github-dev-new-tab-shortcut d-none" data-hotkey="Shift+.,Shift+>,>" href="https://github.dev/" target="_blank"></a><button hidden="" data-testid="" data-hotkey="Shift+.,Shift+>,>" data-hotkey-scope="read-only-cursor-text-area"></button><div class="ButtonGroup-sc-1gxhls1-0 cjbBGq"><span role="tooltip" aria-label="Edit this file" class="Tooltip__TooltipBase-sc-uha8qm-0 fCnxTL tooltipped-nw"><a sx="[object Object]" data-component="IconButton" aria-label="Edit file" data-hotkey="e,E" data-testid="edit-button" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 dhXQSz" href="/pandosme/flows/edit/master/flows/ModifyAxisDeviceSchedule.json"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-pencil" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg></a></span><button data-component="IconButton" aria-label="More edit options" data-testid="more-edit-button" id=":rn:" aria-haspopup="true" tabindex="0" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 hGgJQu"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></button></div><button hidden="" data-testid="" data-hotkey="e,E" data-hotkey-scope="read-only-cursor-text-area"></button></div>
