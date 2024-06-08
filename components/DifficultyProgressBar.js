import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Colors} from "../constants/colors";

const DifficultyProgressBar = ({ difficulty }) => {
    let progress;
    let label;

    switch (difficulty) {
        case 'EASY':
            progress = 33;
            label = 'Easy';
            break;
        case 'MODERATE':
            progress = 66;
            label = 'Moderate';
            break;
        case 'DIFFICULT':
            progress = 100;
            label = 'Difficult';
            break;
        default:
            progress = 0;
            label = 'Unknown';
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Difficulty: {label}</Text>
            <View style={styles.progressBarBackground}>
                <View style={[styles.progressBar, { width: `${progress}%` }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        color: Colors.primary50,
    },
    progressBarBackground: {
        height: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#76c7c0',
        borderRadius: 10,
    },
});

export default DifficultyProgressBar;
