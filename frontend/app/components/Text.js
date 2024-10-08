import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

const AppText = ({ children, style, ...otherprops }) => {
    return (
        <Text style={[defaultStyles.text, style]} {...otherprops}>
            {children}
        </Text>
    );
}

export default AppText