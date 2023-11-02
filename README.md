# CamFlows
A collection of flows that can solve various integration and administration use cases with Axis Cameras.  Node-RED can be hosted on any device, [including on the camera](https://pandosme.github.io/acap/node-red/2023/09/12/nodered-acap.html)  
  

___
## Thermal camera alarm temperature on ambient temperature changes
When using a Thermal camera to alert on high/low temperature values, you may need to take ambient temperature variations into account.  This may be a challenge.  Also, the alarm area temperature thresholds may need to be adjust based on ambient temperature changes.
This flow provides a user dashboard to:
* View Live video of the Thermal Camera
* Monitor ambient temperature changes over time to understand how it fluctuates
* Set all the area alarm threshold temperature based on the ambient temperature at a user-defined offset
* Automatically change the area alarm threshold when the ambient temperature changes
#### [View/Copy flow json](https://acap.juhlin.me/package/ThermalMonitoring)

## Prerequisite
- Axis Thermal camera
- [Node-RED](https://nodered.org/) installed on a host on the same network as the camera
- Import [node-red-dashboard](https://flows.nodered.org/node/node-red-dashboard) to your Node-RED.
- Import [node-red-contrib-axis-com](https://flows.nodered.org/node/node-red-contrib-axis-com) to your Node-RED
- Import (Copy/Paste) the [Thermal Monitoring Flow](https://acap.juhlin.me/package/ThermalMonitoring) to your Node-RED

## Limitations
* Supports only a singel thermal camera.  The flow could be extended to support more.
  
### Dashboard
![Flow](pictures/ThermalMonitoringDashboard.jpeg)
  
### Flow
An overview of the flow.  No adjustments needs to be done in the flow.  
![Flow](pictures/ThermalMonitoringFlow.jpeg)


___


## Modify Axis Device Schedule
Sometimes you need to automate devices schedule settings.  

Required Nodes that must be installed:
- [node-red-contrib-axis-com](https://flows.nodered.org/node/node-red-contrib-axis-com)
  
![Flow](pictures/ModifyAxisDeviceSchedule.jpeg)
  
### [View/copy flow](https://github.com/pandosme/flows/blob/master/flows/ModifyAxisDeviceSchedule.json)


___
