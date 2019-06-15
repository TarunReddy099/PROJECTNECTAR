import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert, YellowBox} from "react-native";
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default class HomeActivity extends Component {

    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
        ]);
    }

    render() {
        return (
            <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
                <Menu onSelect={value => alert(`You Clicked : ${value}`)}>

                    <MenuTrigger  >
                        <Text style={styles.headerText}>TYPE OF MATERIAL</Text>
                    </MenuTrigger  >

                    <MenuOptions>
                        <MenuOption value={"Cotton"}>
                            <Text style={styles.menuContent}>Cotton</Text>
                        </MenuOption>
                        <MenuOption value={"Jeans"}>
                            <Text style={styles.menuContent}>Jeans</Text>
                        </MenuOption>
                        <MenuOption value={"Synthetic"}>
                            <Text style={styles.menuContent}>Synthetic</Text>
                        </MenuOption>
                        <MenuOption value={"Woolen"}>
                            <Text style={styles.menuContent}>Woolen</Text>
                        </MenuOption>
                        <MenuOption value={"Others"} >
                            <Text style={styles.menuContent}>Others</Text>
                        </MenuOption>
                    </MenuOptions>

                </Menu>
            </MenuProvider>




        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"
    },
    menuContent: {
        color: "#000",
        fontWeight: "bold",
        padding: 2,
        fontSize: 20
    }
});