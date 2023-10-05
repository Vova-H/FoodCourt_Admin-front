import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {i18n} from "../redux/features/LangSlice";

const Roles = ({roles}) => {
    const locRoles = i18n.t("userDetailsScreen.roles");

    const translatedRoles = roles.map(role => {
        let translatedRole = role.role;
        if (role.role === 'USER') {
            translatedRole = i18n.t("userDetailsScreen.userRole");
        } else if (role.role === 'WORKER') {
            translatedRole = i18n.t("userDetailsScreen.workerRole");
        } else if (role.role === 'ADMIN') {
            translatedRole = i18n.t("userDetailsScreen.adminRole");
        }


        return (
            <Text key={role.id} style={styles.role}>[ {translatedRole} ]</Text>
        );
    });

    return (
        <View style={styles.rolesContainer}>
            <Text style={styles.rolesTitle}>{locRoles}: </Text>
            {translatedRoles}
        </View>
    );
};

const styles = StyleSheet.create({


    rolesContainer: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        flexWrap:"wrap"
    },
    rolesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    role: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default Roles
