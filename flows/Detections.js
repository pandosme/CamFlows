[
    {
        "id": "6a094971e572f1a5",
        "type": "tab",
        "label": "Detections",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "4fb47b353c69fc8a",
        "type": "Objects",
        "z": "6a094971e572f1a5",
        "output": "1",
        "classFilter": "0",
        "confidence": "50",
        "rotation": "180",
        "cog": "1",
        "x": 190,
        "y": 180,
        "wires": [
            [
                "ba69e4cda6897b00",
                "2970cdaccf40dc41"
            ]
        ]
    },
    {
        "id": "e7d0d626e6bb24ea",
        "type": "inject",
        "z": "6a094971e572f1a5",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 170,
        "y": 120,
        "wires": [
            [
                "77cb5927cf7965a1"
            ]
        ]
    },
    {
        "id": "77cb5927cf7965a1",
        "type": "Camera",
        "z": "6a094971e572f1a5",
        "resolution": "1280x720",
        "overlay": "yes",
        "output": "base64",
        "x": 350,
        "y": 120,
        "wires": [
            [
                "e57bd36c5f0a93f8"
            ]
        ]
    },
    {
        "id": "ba69e4cda6897b00",
        "type": "ui_template",
        "z": "6a094971e572f1a5",
        "group": "e673046ddd355b09",
        "name": "Object Visualization (16:9)",
        "order": 0,
        "width": "18",
        "height": "9",
        "format": "<div id=\"{{'view_'+$id}}\" style=\"width:800px; height:450px\">\n    <div id=\"{{'frame_'+$id}}\" style=\"width:100%; height:100%; position:relative\">\n        <img id=\"{{'image_'+$id}}\" class=\"card-img-top\" src=\"\" style=\"width:100%; height:100%; position:absolute; top:0px; left:0px;\">\n        <canvas id=\"{{'canvas_'+$id}}\" width=\"1000\" height=\"1000\" style=\"width:100%; height:100%; position:absolute; top:0px; left:0px;\"></canvas>\n    </div>\n</div>\n\n<script>\nvar ctx = null;\n\nfunction ClearCanvas() {\n    if(ctx) {\n        ctx.beginPath();\n        ctx.clearRect(0, 0, 1000, 1000 );\n        ctx.stroke();\n    }\n}\n\nfunction drawPath( data ) {\n    if(!ctx)\n        return;\n\n    if( data.active === false ) {\n        ClearCanvas();\n        return;\n    }\n\n    var first = data.path[0];\n    var last = data.path[data.path.length-1];\n\n    ctx.beginPath();\n    ctx.lineWidth = 3;\n    ctx.strokeStyle = '#00FF00';\n    ctx.moveTo(first.x, first.y );\n    ctx.arc(first.x, first.y, 3, 0, 2 * Math.PI);\n    ctx.stroke();\t\n\n    ctx.beginPath();\n    ctx.strokeStyle = '#FFFF00';\n    ctx.moveTo(data.path[0].x, data.path[0].y );\n    for( var i = 1; i < data.path.length; i++ )\n        ctx.lineTo(data.path[i].x,data.path[i].y );\n    ctx.lineTo(last.x,last.y );\n    ctx.stroke();\t\n\n    ctx.beginPath();\n    ctx.lineWidth = 3;\n    ctx.strokeStyle = '#FF0000';\n    ctx.moveTo(last.x, last.y );\n    ctx.arc(last.x, last.y, 3, 0, 2 * Math.PI);\n    ctx.stroke();\t\n}\n\nfunction drawTracker( data ) {\n    if(!ctx)\n        return;\n    ClearCanvas();\n    \n    ctx.beginPath();\n    ctx.lineWidth = 3;\n    ctx.strokeStyle = '#FFFF00';\n    ctx.moveTo(data.bx, data.by );\n    ctx.lineTo(data.cx, data.cy );\n    ctx.rect(data.x, data.y,data.w,data.h );\n    ctx.stroke();\t\n}\n\nfunction drawDetections( data ) {\n    if(!ctx)\n        return;\n\n    ClearCanvas();\n\n    ctx.beginPath();\n    ctx.lineWidth = 3;\n    ctx.font = \"30px Arial\";\n    ctx.fillStyle = '#FFFF00';    \n    ctx.strokeStyle = '#FFFF00';\n    data.detections.forEach( function(detection){\n        ctx.rect(detection.x, detection.y,detection.w,detection.h );\n        ctx.fillText(detection.class, detection.x, detection.y - 10 );\n    });\n    ctx.stroke();\t\n}\n\n\n(function(scope) {\n    scope.$watch('msg', function(msg) {\n        if( !msg || !msg.topic ||  typeof msg.topic === undefined || !msg.payload )\n            return;\n        console.log(msg.topic);\n\n        if( msg.topic === \"image\") {\n            $(\"#image_\"+scope.$id).attr(\"src\", 'data:image/jpeg;base64, ' + msg.payload);\n            canvas = document.getElementById(\"canvas_\"+scope.$id);\n            ctx = canvas.getContext(\"2d\");\n            return;\n        }\n\n        if( msg.topic === \"path\" )\n            drawPath( msg.payload );\n\n        if( msg.topic === \"tracker\" )\n            drawTracker( msg.payload );\n\n        if( msg.topic === \"detections\" )\n            drawDetections( msg.payload );\n\n        if( msg.topic === \"reset\" ) {\n            ClearCanvas();\n            return;\n        }\n    });\n})(scope);\n</script>        \n",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "resendOnRefresh": true,
        "templateScope": "local",
        "className": "",
        "x": 780,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "e57bd36c5f0a93f8",
        "type": "change",
        "z": "6a094971e572f1a5",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "image",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 520,
        "y": 120,
        "wires": [
            [
                "ba69e4cda6897b00"
            ]
        ]
    },
    {
        "id": "2970cdaccf40dc41",
        "type": "debug",
        "z": "6a094971e572f1a5",
        "name": "debug 2",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 470,
        "y": 220,
        "wires": []
    },
    {
        "id": "e673046ddd355b09",
        "type": "ui_group",
        "name": "Default",
        "tab": "eefad88a5eb98423",
        "order": 1,
        "disp": true,
        "width": "18",
        "collapse": false,
        "className": ""
    },
    {
        "id": "eefad88a5eb98423",
        "type": "ui_tab",
        "name": "Detections",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
