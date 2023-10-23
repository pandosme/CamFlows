# CamFlows
A collection of flows that can solve various integration and administration use cases with Axis Cameras.  Node-RED can be hosted on any device, [including on the camera](https://pandosme.github.io/acap/node-red/2023/09/12/nodered-acap.html)  
  
___
## Modify Axis Device Schedule
Sometimes you need to automate devices schedule settings.  

Required Nodes that must be installed:
- [node-red-contrib-axis-com](https://flows.nodered.org/node/node-red-contrib-axis-com)
  
![Flow](pictures/ModifyAxisDeviceSchedule.jpeg)
  
### [View/copy flow](https://github.com/pandosme/flows/blob/master/flows/ModifyAxisDeviceSchedule.json)


___
## Set Thermal alarm threshold offset based on normalized temperture
A way to configure the thermal cameras alarm threshold temperture based on the normalized average temperture in areas.  The flow reads out the temperature for all areas and updates
the threshold value the the temperature + a user-defined offset value for each area.  The offset value can be set in the flow or dashboard.
The reconfiguration of threshold can be triggered with a button in the Node-RED dashvoard or by an API.  With the API it is possible to setup a recipient to Node-RED server and trigger the cnfiguration with e.g. a Manual-Input-Button in the camera.  

Required Nodes that must be installed:
- [node-red-dashboard](https://flows.nodered.org/node/node-red-dashboard)
- [node-red-contrib-axis-com](https://flows.nodered.org/node/node-red-contrib-axis-com)
  
Update the orange nodes (marked red triangle) with you Axis device address and credentials
![Flow](pictures/ThermalOffsetFlow.jpeg)
  
Use the dashboard to set offset and update the threshhold
![Flow](pictures/ThermalOffsetDashboard.jpeg)
  
### [View/copy flow](https://github.com/pandosme/CamFlows/blob/master/flows/ThermalTresholdOffset.json)


___
