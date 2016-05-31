import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container": {
        "flex": 1,
        "flexDirection": "column"
    },
    "testing": {
        "color": "red"
    },
    "viewContainer": {
        "flex": 1,
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignItems": "flex-start"
    },
    "personRow": {
        "flex": 1,
        "justifyContent": "center",
        "alignItems": "center",
        "backgroundColor": "mistyrose",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5
    },
    "personName": {
        "color": "skyblue"
    },
    "personMoreIcon": {
        "color": "red"
    }
});