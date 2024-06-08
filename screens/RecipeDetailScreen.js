import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from "../constants/colors";
import DifficultyProgressBar from "../components/DifficultyProgressBar";

const RecipeDetailScreen = ({ route, navigation }) => {
    const { id, name, ingredients, tools, description, difficulty, imageUrl, instructions, numberOfServings, prepTime, notes } = route.params.recipeItem;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{name} Details</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.description}>{imageUrl}</Text>
            <DifficultyProgressBar difficulty={difficulty} />
            <Text style={styles.sectionTitle}>Number of Plates: {numberOfServings} person</Text>
            <Text style={styles.sectionTitle}>Preparation Time: {prepTime} minutes </Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Ingredients:</Text>
                {ingredients.map((item, index) => (
                    <Text style={styles.item} key={index}>
                        - {item.amount} {item.measureType} of {item.name}
                    </Text>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tools:</Text>
                {tools.map((item, index) => (
                    <Text style={styles.item} key={index}>- {item.toolName}</Text>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Instructions:</Text>
                {instructions.map((item, index) => (
                    <Text style={styles.item} key={index}>- {item}</Text>
                ))}
            </View>

            <Text style={styles.sectionTitle}>Notes</Text>
            <Text style={styles.text}>{notes}</Text>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    title: {
        color: Colors.primary50,
        fontSize: 24,
        marginBottom: 10,
        fontWeight:'bold'
    },
    text: {
        color: Colors.primary50,
        fontSize: 14,
        marginBottom: 10,

    },
    description: {
        color: Colors.primary50,
        fontSize: 18,
        marginBottom: 10,
        fontStyle:'italic'
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        color: Colors.primary50,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    item: {
        color: Colors.primary50,
        marginLeft: 10,
    },
    servingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    numberOfServings: {
        color: Colors.primary50,
        fontSize: 18,
        marginLeft: 5,
    },
});

export default RecipeDetailScreen;
