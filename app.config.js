module.exports = {
    expo: {
        name: "FoodCourtAdmin",
        slug: "FoodCourtAdmin",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        assetBundlePatterns: [
            "**/*"
        ],
        ios: {
            supportsTablet: true,
            bundleIdentifier: "FoodCourtAdmin"
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#ffffff"
            },
            package: "FoodCourtAdmin.apk"
        },
        web: {
            favicon: "./assets/favicon.png"
        },
        plugins: [
            "expo-localization"
        ],
        extra: {
            eas: {
                "projectId": "99db50de-aadb-438d-a0c4-4d8ae424cd84"
            }
        }
    }
};
